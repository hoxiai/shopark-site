import { u as useI18n, bl as useCustomerAuth, D as useLocaleRouter, H as useRoute, r as useRouter, f as _sfc_main$H, j as _sfc_main$X, d as _sfc_main$S, k as _sfc_main$x, g as _sfc_main$w, p as _sfc_main$v, B as _sfc_main$l, q as navigateTo } from './server.mjs';
import __nuxt_component_7 from './ShoparkCheckoutModal-BN-qq0En.mjs';
import { _ as __nuxt_component_8 } from './CaptchaSlider-CN3u4wyb.mjs';
import { defineComponent, ref, reactive, computed, watch, nextTick, mergeProps, isRef, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, withDirectives, Fragment, renderList, withModifiers, vShow, withKeys, vModelText, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrRenderStyle, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { d as SHOPARK_STORE_NAME_MIN, e as SHOPARK_STORE_NAME_MAX, c as SHOPARK_STORE_LANGS, g as SHOPARK_STORE_CURRENCIES, h as isShoparkStoreLang, b as SHOPARK_STORE_TIMEZONES, f as SHOPARK_STORE_DEFAULTS } from './store-options-D76AVGzQ.mjs';
import { u as useShoparkConsoleCopy } from './useShoparkConsole-Cf3s6RH-.mjs';
import { u as useShoparkLaunch } from './useShoparkLaunch-DNd3IhPI.mjs';
import { s as setInterval } from './interval-BBg9qvAV.mjs';
import '../nitro/nitro.mjs';
import 'drizzle-orm';
import 'node:crypto';
import 'crypto';
import 'fs';
import 'path';
import 'node:path';
import '@nuxthub/blob';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:async_hooks';
import 'postgres';
import 'drizzle-orm/postgres-js';
import 'drizzle-orm/d1';
import 'node:module';
import 'mysql2/promise';
import 'drizzle-orm/mysql2';
import 'drizzle-orm/pg-core';
import 'drizzle-orm/sqlite-core';
import 'drizzle-orm/mysql-core';
import 'maxmind';
import 'node:os';
import 'node:fs/promises';
import 'node:url';
import 'zod';
import '@iconify/utils';
import 'consola';
import 'node:zlib';
import 'ioredis';
import 'jose';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'node:child_process';
import 'process';
import 'buffer';
import 'node:dns/promises';
import 'node:net';
import 'vue-router';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import 'tailwind-variants';
import '@vue/shared';
import 'embla-carousel-vue';
import 'aria-hidden';
import '@floating-ui/vue';
import '@tanstack/vue-table';
import '@tanstack/vue-virtual';
import 'framesync';
import 'popmotion';
import 'style-value-types';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import './useShoparkPlanName-DlYj_Dxm.mjs';

async function* readSseFrames(body) {
  const reader = body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  const parse = (frame) => {
    const data = frame.split("\n").filter((line) => line.startsWith("data:")).map((line) => line.slice(5).trimStart()).join("\n");
    if (!data) return null;
    try {
      const event = JSON.parse(data);
      return event && typeof event === "object" ? event : null;
    } catch {
      return null;
    }
  };
  try {
    for (; ; ) {
      const { value, done } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true }).replace(/\r\n/g, "\n");
      let pos = buffer.indexOf("\n\n");
      while (pos >= 0) {
        const event = parse(buffer.slice(0, pos));
        buffer = buffer.slice(pos + 2);
        if (event) yield event;
        pos = buffer.indexOf("\n\n");
      }
    }
    const tail = parse(buffer + decoder.decode());
    if (tail) yield tail;
  } finally {
    reader.releaseLock();
  }
}
const ESCAPES = { n: "\n", t: "	", r: "", '"': '"', "\\": "\\", "/": "/", b: "", f: "" };
function readLaunchReply(raw) {
  var _a;
  const match = /"reply"\s*:\s*"/.exec(raw);
  if (!match) return "";
  let out = "";
  for (let i = match.index + match[0].length; i < raw.length; i++) {
    const ch = raw[i];
    if (ch === '"') break;
    if (ch !== "\\") {
      out += ch;
      continue;
    }
    const next = raw[i + 1];
    if (next === void 0) break;
    if (next === "u") {
      const hex = raw.slice(i + 2, i + 6);
      if (!/^[0-9a-fA-F]{4}$/.test(hex)) break;
      out += String.fromCharCode(Number.parseInt(hex, 16));
      i += 5;
      continue;
    }
    out += (_a = ESCAPES[next]) != null ? _a : next;
    i += 1;
  }
  return out;
}
const FOLLOW_UPS_MAX = 3;
const MESSAGE_MAX = 300;
const DRAFT_KEY = "shopark:launch:draft";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ShoparkLaunchChat",
  __ssrInlineRender: true,
  setup(__props) {
    const MODES = ["retail", "inquiry", "wholesale"];
    const MARKETS = ["northAmerica", "europe", "southeastAsia", "china", "global"];
    const STYLES = ["minimalist", "luxury", "streetwear", "promo", "editorial"];
    const ui = {
      avatar: "flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-md shadow-indigo-500/25",
      bubbleAi: "max-w-[85%] whitespace-pre-line rounded-2xl rounded-tl-md bg-white px-4 py-3 text-[14px] leading-6 text-slate-800 shadow-sm ring-1 ring-slate-200/70",
      bubbleUser: " whitespace-pre-line rounded-2xl rounded-tr-md bg-gradient-to-br from-blue-600 to-indigo-600 px-4 py-3 text-[14px] leading-6 text-white shadow-md shadow-blue-600/20",
      card: "ml-11 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200/70 max-sm:ml-0",
      cta: "flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3.5 text-base font-extrabold text-white shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none disabled:hover:translate-y-0",
      option: "flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-left text-sm transition hover:border-blue-300 disabled:cursor-not-allowed disabled:opacity-50",
      optionOn: "border-blue-500 bg-blue-50/60 ring-2 ring-blue-500/20"
    };
    const KNOWN_ERRORS = /* @__PURE__ */ new Set(["captcha_required", "rate_limited", "login_required", "too_many_turns", "invalid_input", "unavailable", "store_name", "generic"]);
    const { t, locale } = useI18n();
    const customerAuth = useCustomerAuth();
    const { loggedIn } = customerAuth;
    const { localePath } = useLocaleRouter();
    const { copy } = useShoparkConsoleCopy();
    const { open, seed, consumeSeed } = useShoparkLaunch();
    useRoute();
    useRouter();
    const stage = ref("intake");
    const form = reactive({ mode: "retail", market: "northAmerica", style: "minimalist" });
    const chipGroups = [
      { key: "mode", labels: "modes", options: MODES },
      { key: "market", labels: "markets", options: MARKETS },
      { key: "style", labels: "styles", options: STYLES }
    ];
    const messages = ref([]);
    const intake = ref(null);
    const brief = reactive({ storeName: "", categoryId: 0, businessMode: "retail", offering: "", targetMarket: "", targetCustomer: "", tone: "", archetype: "minimalist", language: "en", currency: "USD", timezone: "UTC", conversationSummary: "" });
    const draft = ref("");
    const streamingReply = ref("");
    const busy = ref(false);
    const copilotBusy = ref(false);
    const publishingNow = ref(false);
    const justPublished = ref(false);
    const errorKey = ref("");
    const captchaRef = ref(null);
    const scrollRef = ref(null);
    const inputRef = ref(null);
    const requestId = ref("");
    const stores = ref([]);
    const storeQuota = ref(null);
    const storesLoading = ref(false);
    const canCreate = ref(false);
    const choice = ref("");
    const categoryId = ref(void 0);
    const categories = ref([]);
    const scope = reactive({ storeSetup: false, policies: false });
    const launchTarget = ref(null);
    const launchStatus = ref(null);
    const copilotSnapshot = ref(null);
    let statusTimer = null;
    const authOverlayOpen = ref(false);
    const authMode = ref("otp");
    const authForm = reactive({ email: "", code: "", password: "" });
    const otpSending = ref(false);
    const otpSentOnce = ref(false);
    const otpCooldown = ref(0);
    const otpDevCode = ref("");
    const authSubmitting = ref(false);
    const authError = ref("");
    let otpTimer = null;
    const planOverlayOpen = ref(false);
    const plansLoading = ref(false);
    const planBillingCycle = ref("yearly");
    const availablePlans = ref([]);
    const activeMcpTab = ref("decor");
    const previewViewport = ref("desktop");
    const previewRoutePath = ref("/");
    const previewCacheBust = ref(Date.now());
    const previewFrameKey = ref(0);
    const iframeLoading = ref(false);
    const mobilePane = ref("chat");
    const isFullscreen = ref(false);
    const chatCollapsed = ref(false);
    const canvasViewMode = ref("preview");
    const showSplitStudio = computed(() => (stage.value === "building" || stage.value === "done") && Boolean(launchTarget.value));
    const activeDomain = computed(() => {
      var _a, _b;
      return ((_a = copilotSnapshot.value) == null ? void 0 : _a.domain) || ((_b = launchStatus.value) == null ? void 0 : _b.domain) || "";
    });
    const currentPreviewUrl = computed(() => {
      var _a, _b;
      const base = (((_a = copilotSnapshot.value) == null ? void 0 : _a.previewBaseUrl) || ((_b = launchTarget.value) == null ? void 0 : _b.previewBaseUrl) || "").replace(/\/+$/, "");
      if (base) {
        const cleanPath = previewRoutePath.value.startsWith("/") ? previewRoutePath.value : `/${previewRoutePath.value}`;
        const sep = cleanPath.includes("?") ? "&" : "?";
        return `${base}${cleanPath === "/" ? "/" : cleanPath}${sep}_t=${previewCacheBust.value}`;
      }
      const dom = activeDomain.value;
      if (dom) {
        const cleanPath = previewRoutePath.value.startsWith("/") ? previewRoutePath.value : `/${previewRoutePath.value}`;
        const sep = cleanPath.includes("?") ? "&" : "?";
        return `https://${dom}${cleanPath === "/" ? "/" : cleanPath}${sep}_t=${previewCacheBust.value}`;
      }
      return "";
    });
    const activeCanvasUrl = computed(() => {
      var _a;
      if (canvasViewMode.value === "decor" && ((_a = launchTarget.value) == null ? void 0 : _a.url)) {
        return launchTarget.value.url;
      }
      return currentPreviewUrl.value;
    });
    function toggleFullscreenModal() {
      isFullscreen.value = !isFullscreen.value;
      if (!isFullscreen.value) {
        chatCollapsed.value = false;
      }
    }
    function toggleFullscreenDecor() {
      if (isFullscreen.value && chatCollapsed.value) {
        isFullscreen.value = false;
        chatCollapsed.value = false;
      } else {
        isFullscreen.value = true;
        chatCollapsed.value = true;
      }
    }
    function switchCanvasViewMode(mode) {
      if (canvasViewMode.value === mode) return;
      iframeLoading.value = true;
      canvasViewMode.value = mode;
      if (mode === "decor") {
        isFullscreen.value = true;
      }
      previewFrameKey.value += 1;
    }
    function refreshPreviewFrame() {
      iframeLoading.value = true;
      previewCacheBust.value = Date.now();
      previewFrameKey.value += 1;
    }
    function switchPreviewRoute(path) {
      previewRoutePath.value = path || "/";
      refreshPreviewFrame();
    }
    const wizardCurrentIndex = computed(() => {
      if (stage.value === "intake") return 0;
      if (stage.value === "plan" || stage.value === "login") return 1;
      if (stage.value === "stores" || stage.value === "starting" || stage.value === "building") return 2;
      return 3;
    });
    const quotaLabels = computed(() => {
      const code = String(locale.value || "zh");
      if (code === "zh-HK") {
        return {
          quotaBadge: "\u5E97\u8216\u540D\u984D",
          slotFullTag: "\u540D\u984D\u5DF2\u6EFF",
          bannerTitle: "\u7576\u524D\u958B\u5E97\u540D\u984D\u5DF2\u7528\u5B8C\uFF0C\u4F60\u53EF\u4EE5\u958B\u901A/\u5347\u7D1A\u5957\u9910\u6216\u9078\u64C7\u5DF2\u6709\u5E97\u8216",
          bannerDescWithStores: "\u5982\u9700\u65B0\u5EFA\u66F4\u591A\u7368\u7ACB\u7AD9\uFF0C\u53EF\u9EDE\u64CA\u4E0B\u65B9\u300C\u7ACB\u5373\u958B\u901A / \u5347\u7D1A\u5957\u9910\u300D\u539F\u4F4D\u89E3\u9396\u540D\u984D\uFF1B\u6216\u8005\u76F4\u63A5\u9EDE\u9078\u4E0B\u65B9\u4F60\u5DF2\u6709\u7684\u5E97\u8216\uFF0C\u7528\u672C\u6B21 AI \u65B9\u6848\u7E7C\u7E8C\u88DD\u4FEE\u3002",
          bannerDescNoStores: "\u7576\u524D\u5E33\u865F\u7684\u53EF\u5EFA\u5E97\u8216\u540D\u984D\u5DF2\u9054\u4E0A\u9650\uFF0C\u9EDE\u64CA\u4E0B\u65B9\u300C\u7ACB\u5373\u958B\u901A / \u5347\u7D1A\u5957\u9910\u300D\u5373\u53EF\u539F\u4F4D\u89E3\u9396\u958B\u5E97\u540D\u984D\u4E26\u7E7C\u7E8C\u642D\u5EFA\u3002",
          openPlanModalBtn: "\u7ACB\u5373\u958B\u901A / \u5347\u7D1A\u5957\u9910",
          pickExistingBtn: "\u9078\u64C7\u5DF2\u6709\u5E97\u8216\u7E7C\u7E8C",
          goSubscriptionPageBtn: "\u524D\u5F80\u5957\u9910\u4E2D\u5FC3",
          existingListHeader: "\u6216\u8005\u9078\u64C7\u4F60\u540D\u4E0B\u7684\u5DF2\u6709\u5E97\u8216\u7E7C\u7E8C\u642D\u5EFA",
          launchWithExistingBtn: "\u57FA\u65BC\u6240\u9078\u5E97\u8216\u958B\u59CB\u642D\u5EFA",
          badgeTrial: "\u8A66\u7528\u4E2D",
          badgeActive: "\u71DF\u696D\u4E2D",
          badgeSelectable: "\u53EF\u7E7C\u7E8C\u88DD\u4FEE",
          modalBadge: "\u539F\u4F4D\u958B\u901A \xB7 \u5373\u523B\u89E3\u9396\u540D\u984D",
          modalTitle: "\u958B\u901A\u6216\u5347\u7D1A\u5957\u9910\uFF0C\u89E3\u9396\u66F4\u591A\u7368\u7ACB\u7AD9\u540D\u984D",
          modalSubtitle: "\u652F\u4ED8\u5B8C\u6210\u5F8C\u7121\u9700\u5237\u65B0\u9801\u9762\uFF0C\u7CFB\u7D71\u5C07\u81EA\u52D5\u540C\u6B65\u6388\u6B0A\u4E26\u539F\u4F4D\u89E3\u9396\u300C\u65B0\u5EFA\u5E97\u8216\u300D\u9078\u9805\u3002\u5168\u7248\u672C 0% \u5E73\u53F0\u4EA4\u6613\u62BD\u6210\u3002",
          cycleMonthly: "\u6309\u6708\u4ED8\u8CBB",
          cycleYearly: "\u6309\u5E74\u4ED8\u8CBB",
          upToStoresPrefix: "\u6700\u591A\u53EF\u958B",
          upToStoresSuffix: "\u5BB6\u5E97\u8216",
          unitMonth: "\u6708",
          unitYear: "\u5E74",
          zeroCommissionFeat: "0% \u5E73\u53F0\u4EA4\u6613\u62BD\u6210 \xB7 \u8CC7\u91D1\u76F4\u9054\u81EA\u6709\u6536\u6B3E\u5E33\u6236",
          aiDecorFeat: "\u5305\u542B AI \u667A\u80FD\u5EFA\u7AD9\u3001MCP \u88DD\u4FEE\u8207\u5168\u5957\u4E3B\u984C\u6A21\u677F",
          subscribeAndUnlockBtn: "\u7ACB\u5373\u958B\u901A\u4E26\u89E3\u9396\u958B\u5E97",
          emptyPlansHint: "\u53EF\u524D\u5F80\u5957\u9910\u8207\u8A02\u95B1\u4E2D\u5FC3\u67E5\u770B\u5B8C\u6574\u65B9\u6848\u4E26\u958B\u901A\u6388\u6B0A",
          footerExistingTip: "\u4E0D\u60F3\u65B0\u5EFA\u5E97\u8216\uFF1F\u4F60\u4E5F\u53EF\u4EE5\u76F4\u63A5\u628A\u672C\u6B21 AI \u5EFA\u5E97\u65B9\u6848\u61C9\u7528\u5230\u5DF2\u6709\u5E97\u8216\uFF1A",
          useExistingInsteadBtn: "\u6539\u7528\u5DF2\u6709\u5E97\u8216\u7E7C\u7E8C\u642D\u5EFA"
        };
      }
      if (code === "ru") {
        return {
          quotaBadge: "\u041B\u0438\u043C\u0438\u0442",
          slotFullTag: "\u041B\u0438\u043C\u0438\u0442 \u0438\u0441\u0447\u0435\u0440\u043F\u0430\u043D",
          bannerTitle: "\u041B\u0438\u043C\u0438\u0442 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u043E\u0432 \u0438\u0441\u0447\u0435\u0440\u043F\u0430\u043D \u2014 \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u0435 \u0442\u0430\u0440\u0438\u0444 \u0438\u043B\u0438 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0439 \u043C\u0430\u0433\u0430\u0437\u0438\u043D",
          bannerDescWithStores: "\u0427\u0442\u043E\u0431\u044B \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u0435\u0449\u0435 \u043E\u0434\u0438\u043D \u043D\u043E\u0432\u044B\u0439 \u043C\u0430\u0433\u0430\u0437\u0438\u043D, \u043F\u043E\u0432\u044B\u0441\u044C\u0442\u0435 \u0442\u0430\u0440\u0438\u0444 \u043F\u0440\u044F\u043C\u043E \u0432 \u044D\u0442\u043E\u043C \u043E\u043A\u043D\u0435, \u043B\u0438\u0431\u043E \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043E\u0434\u0438\u043D \u0438\u0437 \u0432\u0430\u0448\u0438\u0445 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0445 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u043E\u0432 \u043D\u0438\u0436\u0435 \u0434\u043B\u044F AI-\u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u044F.",
          bannerDescNoStores: "\u0414\u043E\u0441\u0442\u0438\u0433\u043D\u0443\u0442 \u043B\u0438\u043C\u0438\u0442 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u043E\u0432 \u043F\u043E \u0442\u0435\u043A\u0443\u0449\u0435\u043C\u0443 \u0442\u0430\u0440\u0438\u0444\u0443. \u041E\u0431\u043D\u043E\u0432\u0438\u0442\u0435 \u0442\u0430\u0440\u0438\u0444, \u0447\u0442\u043E\u0431\u044B \u0441\u0440\u0430\u0437\u0443 \u0440\u0430\u0437\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043D\u043E\u0432\u043E\u0433\u043E \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430.",
          openPlanModalBtn: "\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C / \u043F\u043E\u0432\u044B\u0441\u0438\u0442\u044C \u0442\u0430\u0440\u0438\u0444",
          pickExistingBtn: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043C\u0430\u0433\u0430\u0437\u0438\u043D",
          goSubscriptionPageBtn: "\u0422\u0430\u0440\u0438\u0444\u044B \u0438 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0430",
          existingListHeader: "\u0418\u043B\u0438 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0439 \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u0434\u043B\u044F \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",
          launchWithExistingBtn: "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u0441 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u043C \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u043E\u043C",
          badgeTrial: "\u041F\u0440\u043E\u0431\u043D\u044B\u0439",
          badgeActive: "\u0410\u043A\u0442\u0438\u0432\u0435\u043D",
          badgeSelectable: "\u0414\u043E\u0441\u0442\u0443\u043F\u0435\u043D",
          modalBadge: "\u041C\u0433\u043D\u043E\u0432\u0435\u043D\u043D\u043E\u0435 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0438\u0435 \u043B\u0438\u043C\u0438\u0442\u0430",
          modalTitle: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0430\u0440\u0438\u0444 \u0434\u043B\u044F \u043E\u0442\u043A\u0440\u044B\u0442\u0438\u044F \u043D\u043E\u0432\u044B\u0445 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u043E\u0432",
          modalSubtitle: "\u041F\u043E\u0441\u043B\u0435 \u043E\u043F\u043B\u0430\u0442\u044B \u043B\u0438\u043C\u0438\u0442 \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u0441\u044F \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u043F\u0440\u044F\u043C\u043E \u0432 \u044D\u0442\u043E\u043C \u043E\u043A\u043D\u0435. 0% \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u0438 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B \u043D\u0430 \u0432\u0441\u0435\u0445 \u0442\u0430\u0440\u0438\u0444\u0430\u0445.",
          cycleMonthly: "\u041F\u043E\u043C\u0435\u0441\u044F\u0447\u043D\u043E",
          cycleYearly: "\u041D\u0430 \u0433\u043E\u0434",
          upToStoresPrefix: "\u0414\u043E",
          upToStoresSuffix: "\u043C\u0430\u0433\u0430\u0437\u0438\u043D\u043E\u0432",
          unitMonth: "\u043C\u0435\u0441",
          unitYear: "\u0433\u043E\u0434",
          zeroCommissionFeat: "0% \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u044F \u0441 \u043F\u0440\u043E\u0434\u0430\u0436 \xB7 \u043F\u0440\u044F\u043C\u044B\u0435 \u0432\u044B\u043F\u043B\u0430\u0442\u044B",
          aiDecorFeat: "AI-\u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440, MCP-\u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440 \u0438 \u0432\u0441\u0435 \u0448\u0430\u0431\u043B\u043E\u043D\u044B",
          subscribeAndUnlockBtn: "\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0438 \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C",
          emptyPlansHint: "\u041F\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u0432 \u0440\u0430\u0437\u0434\u0435\u043B \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0438 \u0434\u043B\u044F \u0432\u044B\u0431\u043E\u0440\u0430 \u0442\u0430\u0440\u0438\u0444\u0430",
          footerExistingTip: "\u041D\u0435 \u0445\u043E\u0442\u0438\u0442\u0435 \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u0442\u044C \u043D\u043E\u0432\u044B\u0439 \u043C\u0430\u0433\u0430\u0437\u0438\u043D? \u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u0435 \u043F\u043B\u0430\u043D \u043A \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u043C\u0443:",
          useExistingInsteadBtn: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0439 \u043C\u0430\u0433\u0430\u0437\u0438\u043D"
        };
      }
      if (code.startsWith("zh")) {
        return {
          quotaBadge: "\u5F00\u5E97\u540D\u989D",
          slotFullTag: "\u540D\u989D\u5DF2\u6EE1",
          bannerTitle: "\u5F53\u524D\u5F00\u5E97\u540D\u989D\u5DF2\u7528\u5B8C\uFF0C\u4F60\u53EF\u4EE5\u5F00\u901A/\u5347\u7EA7\u5957\u9910\u6216\u9009\u62E9\u5DF2\u6709\u5E97\u94FA",
          bannerDescWithStores: "\u5982\u9700\u65B0\u5EFA\u66F4\u591A\u72EC\u7ACB\u7AD9\uFF0C\u53EF\u70B9\u51FB\u4E0B\u65B9\u300C\u7ACB\u5373\u5F00\u901A / \u5347\u7EA7\u5957\u9910\u300D\u5728\u5F53\u524D\u7A97\u53E3\u76F4\u63A5\u89E3\u9501\u540D\u989D\uFF1B\u6216\u8005\u76F4\u63A5\u70B9\u9009\u4E0B\u65B9\u4F60\u5DF2\u6709\u7684\u5E97\u94FA\uFF0C\u7528\u672C\u6B21 AI \u65B9\u6848\u7EE7\u7EED\u88C5\u4FEE\u3002",
          bannerDescNoStores: "\u5F53\u524D\u8D26\u53F7\u7684\u53EF\u5EFA\u5E97\u94FA\u540D\u989D\u5DF2\u8FBE\u4E0A\u9650\uFF0C\u70B9\u51FB\u4E0B\u65B9\u300C\u7ACB\u5373\u5F00\u901A / \u5347\u7EA7\u5957\u9910\u300D\u5373\u53EF\u539F\u4F4D\u89E3\u9501\u5F00\u5E97\u540D\u989D\u5E76\u7EE7\u7EED\u642D\u5EFA\u3002",
          openPlanModalBtn: "\u7ACB\u5373\u5F00\u901A / \u5347\u7EA7\u5957\u9910",
          pickExistingBtn: "\u9009\u62E9\u5DF2\u6709\u5E97\u94FA\u7EE7\u7EED",
          goSubscriptionPageBtn: "\u524D\u5F80\u5957\u9910\u4E2D\u5FC3",
          existingListHeader: "\u6216\u8005\u9009\u62E9\u4F60\u540D\u4E0B\u7684\u5DF2\u6709\u5E97\u94FA\u7EE7\u7EED\u642D\u5EFA",
          launchWithExistingBtn: "\u57FA\u4E8E\u6240\u9009\u5E97\u94FA\u5F00\u59CB\u642D\u5EFA",
          badgeTrial: "\u8BD5\u7528\u4E2D",
          badgeActive: "\u8425\u4E1A\u4E2D",
          badgeSelectable: "\u53EF\u7EE7\u7EED\u88C5\u4FEE",
          modalBadge: "\u539F\u4F4D\u5F00\u901A \xB7 \u5373\u523B\u89E3\u9501\u540D\u989D",
          modalTitle: "\u5F00\u901A\u6216\u5347\u7EA7\u5957\u9910\uFF0C\u89E3\u9501\u66F4\u591A\u72EC\u7ACB\u7AD9\u540D\u989D",
          modalSubtitle: "\u652F\u4ED8\u5B8C\u6210\u540E\u65E0\u9700\u79BB\u5F00\u5F53\u524D\u4F1A\u8BDD\uFF0C\u7CFB\u7EDF\u5C06\u81EA\u52A8\u540C\u6B65\u6388\u6743\u5E76\u539F\u4F4D\u89E3\u9501\u300C\u65B0\u5EFA\u5E97\u94FA\u300D\u9009\u9879\u3002\u5168\u7248\u672C 0% \u5E73\u53F0\u4EA4\u6613\u62BD\u6210\u3002",
          cycleMonthly: "\u6309\u6708\u4ED8\u8D39",
          cycleYearly: "\u6309\u5E74\u4ED8\u8D39",
          upToStoresPrefix: "\u6700\u591A\u53EF\u5F00",
          upToStoresSuffix: "\u5BB6\u5E97\u94FA",
          unitMonth: "\u6708",
          unitYear: "\u5E74",
          zeroCommissionFeat: "0% \u5E73\u53F0\u4EA4\u6613\u62BD\u6210 \xB7 \u8D44\u91D1\u76F4\u8FBE\u81EA\u6709\u6536\u6B3E\u8D26\u6237",
          aiDecorFeat: "\u5305\u542B AI \u667A\u80FD\u5EFA\u7AD9\u3001MCP \u88C5\u4FEE\u4E0E\u5168\u5957\u4E3B\u9898\u6A21\u677F",
          subscribeAndUnlockBtn: "\u7ACB\u5373\u5F00\u901A\u5E76\u89E3\u9501\u5F00\u5E97",
          emptyPlansHint: "\u53EF\u524D\u5F80\u5957\u9910\u4E0E\u8BA2\u9605\u4E2D\u5FC3\u67E5\u770B\u5B8C\u6574\u65B9\u6848\u5E76\u5F00\u901A\u6388\u6743",
          footerExistingTip: "\u4E0D\u60F3\u65B0\u5EFA\u5E97\u94FA\uFF1F\u4F60\u4E5F\u53EF\u4EE5\u76F4\u63A5\u628A\u672C\u6B21 AI \u5EFA\u5E97\u65B9\u6848\u5E94\u7528\u5230\u5DF2\u6709\u5E97\u94FA\uFF1A",
          useExistingInsteadBtn: "\u6539\u7528\u5DF2\u6709\u5E97\u94FA\u7EE7\u7EED\u642D\u5EFA"
        };
      }
      return {
        quotaBadge: "Store Quota",
        slotFullTag: "Quota Full",
        bannerTitle: "Store creation quota reached \u2014 upgrade your plan or select an existing store",
        bannerDescWithStores: 'To create another new store, click "Upgrade / Subscribe Plan" below to unlock more slots in-place, or pick one of your existing stores below to customize with AI.',
        bannerDescNoStores: "You have reached the store limit of your current plan. Upgrade your plan below to unlock new store creation right away.",
        openPlanModalBtn: "Upgrade / Subscribe Plan",
        pickExistingBtn: "Pick Existing Store",
        goSubscriptionPageBtn: "Subscription Center",
        existingListHeader: "Or select an existing store to customize",
        launchWithExistingBtn: "Build on Selected Store",
        badgeTrial: "Trial",
        badgeActive: "Active",
        badgeSelectable: "Ready to Edit",
        modalBadge: "Instant Quota Unlock",
        modalTitle: "Subscribe or Upgrade Plan to Open More Stores",
        modalSubtitle: "Once payment completes, your new store slot unlocks automatically right inside this builder. 0% platform transaction fee on all plans.",
        cycleMonthly: "Monthly",
        cycleYearly: "Yearly",
        upToStoresPrefix: "Up to",
        upToStoresSuffix: "stores",
        unitMonth: "mo",
        unitYear: "yr",
        zeroCommissionFeat: "0% platform fee \xB7 direct payouts to your gateway",
        aiDecorFeat: "Includes AI Store Builder, Live MCP Studio & themes",
        subscribeAndUnlockBtn: "Subscribe & Unlock Slot",
        emptyPlansHint: "Visit the Subscription Center to view and subscribe to available plans",
        footerExistingTip: "Prefer not to open a new store? Apply this AI plan to an existing store:",
        useExistingInsteadBtn: "Use Existing Store Instead"
      };
    });
    const authLabels = computed(() => {
      const code = String(locale.value || "zh");
      if (code === "zh-HK") {
        return {
          badge: "\u514D\u8DF3\u8F49\u5FEB\u901F\u9A57\u8B49",
          modalTitle: "\u9A57\u8B49\u90F5\u7BB1\uFF0C\u7ACB\u5373\u751F\u6210\u4F60\u7684\u7368\u7ACB\u7AD9",
          modalSubtitle: "\u7121\u9700\u96E2\u958B\u7576\u524D\u5EFA\u7AD9\u5C0D\u8A71\uFF01\u8F38\u5165\u90F5\u7BB1\u63A5\u6536 6 \u4F4D\u9A57\u8B49\u78BC\u5373\u53EF\u4E00\u9375\u767B\u5165\uFF08\u672A\u8A3B\u518A\u90F5\u7BB1\u5C07\u81EA\u52D5\u5275\u5EFA\u5546\u5BB6\u5E33\u865F\u4E26\u7D81\u5B9A\u65B0\u5E97\u8216\uFF09\u3002",
          cardTitle: "\u6700\u5F8C\u4E00\u6B65\uFF1A\u9A57\u8B49\u90F5\u7BB1\u5373\u53EF\u958B\u59CB\u751F\u6210\u5E97\u8216",
          cardSubtitle: "\u5728\u7576\u524D\u5F48\u7A97\u5167\u5B8C\u6210\u9A57\u8B49\uFF0C\u5EFA\u5E97\u9032\u5EA6\u8207\u5C0D\u8A71\u5B8C\u6574\u4FDD\u7559",
          openOverlayBtn: "\u6253\u958B\u9A57\u8B49\u78BC\u767B\u5165\u5F48\u5C64",
          tabOtp: "\u90F5\u7BB1\u9A57\u8B49\u78BC\u514D\u5BC6\u767B\u5165",
          tabPassword: "\u5BC6\u78BC\u767B\u5165",
          emailLabel: "\u5546\u5BB6\u90F5\u7BB1\u5730\u5740",
          emailPlaceholder: "you@example.com",
          sendCode: "\u767C\u9001\u9A57\u8B49\u78BC",
          resendCode: "\u91CD\u65B0\u767C\u9001",
          sendingCode: "\u767C\u9001\u4E2D\u2026",
          codeLabel: "6 \u4F4D\u6578\u5B57\u9A57\u8B49\u78BC",
          codePlaceholder: "000000",
          codeSentHint: "\u9A57\u8B49\u78BC\u5DF2\u767C\u9001\u81F3\u4F60\u7684\u90F5\u7BB1",
          devCodePrefix: "\u672C\u5730\u806F\u8ABF\u9A57\u8B49\u78BC\uFF1A",
          devCodeFillBtn: "\u4E00\u9375\u586B\u5165\u4E26\u7E7C\u7E8C",
          passwordLabel: "\u767B\u5165\u5BC6\u78BC",
          passwordPlaceholder: "\u8ACB\u8F38\u5165\u5E33\u865F\u5BC6\u78BC",
          verifyAndBuildBtn: "\u9A57\u8B49\u4E26\u7ACB\u5373\u751F\u6210\u5E97\u8216",
          passwordAndBuildBtn: "\u767B\u5165\u4E26\u7ACB\u5373\u751F\u6210\u5E97\u8216",
          errInvalidEmail: "\u8ACB\u8F38\u5165\u6709\u6548\u7684\u90F5\u7BB1\u5730\u5740",
          errInvalidCode: "\u9A57\u8B49\u78BC\u4E0D\u6B63\u78BA\u6216\u5DF2\u904E\u671F\uFF0C\u8ACB\u91CD\u65B0\u8F38\u5165",
          errRateLimited: "\u8ACB\u6C42\u904E\u65BC\u983B\u7E41\uFF0C\u8ACB\u7A0D\u5F8C\u518D\u8A66",
          errLoginFailed: "\u90F5\u7BB1\u6216\u5BC6\u78BC\u4E0D\u6B63\u78BA"
        };
      }
      if (code === "ru") {
        return {
          badge: "\u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u0432\u0445\u043E\u0434 \u0431\u0435\u0437 \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0430",
          modalTitle: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 Email \u0434\u043B\u044F \u0437\u0430\u043F\u0443\u0441\u043A\u0430 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430",
          modalSubtitle: "\u041D\u0435 \u043D\u0443\u0436\u043D\u043E \u043F\u043E\u043A\u0438\u0434\u0430\u0442\u044C \u043E\u043A\u043D\u043E! \u0412\u0432\u0435\u0434\u0438\u0442\u0435 Email \u0438 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 6-\u0437\u043D\u0430\u0447\u043D\u044B\u0439 \u043A\u043E\u0434 (\u043D\u043E\u0432\u044B\u0435 \u0430\u0434\u0440\u0435\u0441\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u044E\u0442\u0441\u044F \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438).",
          cardTitle: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 Email, \u0447\u0442\u043E\u0431\u044B \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043C\u0430\u0433\u0430\u0437\u0438\u043D",
          cardSubtitle: "\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F \u043F\u0440\u044F\u043C\u043E \u0432\u043D\u0443\u0442\u0440\u0438 \u0434\u0438\u0430\u043B\u043E\u0433\u0430 \u0431\u0435\u0437 \u043F\u043E\u0442\u0435\u0440\u0438 \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441\u0430",
          openOverlayBtn: "\u0412\u0432\u0435\u0441\u0442\u0438 \u043A\u043E\u0434 \u0438\u0437 \u043F\u0438\u0441\u044C\u043C\u0430",
          tabOtp: "\u0412\u0445\u043E\u0434 \u043F\u043E \u043A\u043E\u0434\u0443 \u0438\u0437 Email",
          tabPassword: "\u041F\u043E \u043F\u0430\u0440\u043E\u043B\u044E",
          emailLabel: "\u0412\u0430\u0448 Email",
          emailPlaceholder: "you@example.com",
          sendCode: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043A\u043E\u0434",
          resendCode: "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C",
          sendingCode: "\u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430\u2026",
          codeLabel: "6-\u0437\u043D\u0430\u0447\u043D\u044B\u0439 \u043A\u043E\u0434 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F",
          codePlaceholder: "000000",
          codeSentHint: "\u041A\u043E\u0434 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D \u043D\u0430 \u0432\u0430\u0448 Email",
          devCodePrefix: "\u0422\u0435\u0441\u0442\u043E\u0432\u044B\u0439 \u043A\u043E\u0434 (Dev): ",
          devCodeFillBtn: "\u041F\u043E\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0438 \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C",
          passwordLabel: "\u041F\u0430\u0440\u043E\u043B\u044C",
          passwordPlaceholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C",
          verifyAndBuildBtn: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u0438 \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043C\u0430\u0433\u0430\u0437\u0438\u043D",
          passwordAndBuildBtn: "\u0412\u043E\u0439\u0442\u0438 \u0438 \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043C\u0430\u0433\u0430\u0437\u0438\u043D",
          errInvalidEmail: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 Email",
          errInvalidCode: "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0438\u043B\u0438 \u043F\u0440\u043E\u0441\u0440\u043E\u0447\u0435\u043D\u043D\u044B\u0439 \u043A\u043E\u0434",
          errRateLimited: "\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u043D\u043E\u0433\u043E \u043F\u043E\u043F\u044B\u0442\u043E\u043A, \u043F\u043E\u0434\u043E\u0436\u0434\u0438\u0442\u0435 \u043D\u0435\u043C\u043D\u043E\u0433\u043E",
          errLoginFailed: "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 Email \u0438\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C"
        };
      }
      if (code.startsWith("zh")) {
        return {
          badge: "\u514D\u8DF3\u8F6C\u5FEB\u901F\u9A8C\u8BC1",
          modalTitle: "\u9A8C\u8BC1\u90AE\u7BB1\uFF0C\u7ACB\u5373\u751F\u6210\u4F60\u7684\u72EC\u7ACB\u7AD9",
          modalSubtitle: "\u65E0\u9700\u79BB\u5F00\u5F53\u524D\u5EFA\u7AD9\u4F1A\u8BDD\uFF01\u8F93\u5165\u90AE\u7BB1\u63A5\u6536 6 \u4F4D\u9A8C\u8BC1\u7801\u5373\u53EF\u4E00\u952E\u767B\u5F55\uFF08\u672A\u6CE8\u518C\u90AE\u7BB1\u5C06\u81EA\u52A8\u521B\u5EFA\u5546\u5BB6\u8D26\u53F7\u5E76\u7ED1\u5B9A\u65B0\u5E97\u94FA\uFF09\u3002",
          cardTitle: "\u6700\u540E\u4E00\u6B65\uFF1A\u9A8C\u8BC1\u90AE\u7BB1\u5373\u53EF\u5F00\u59CB\u751F\u6210\u5E97\u94FA",
          cardSubtitle: "\u5728\u5F53\u524D\u4F1A\u8BDD\u6846\u5185\u76F4\u63A5\u5B8C\u6210\u9A8C\u8BC1\uFF0C\u5EFA\u5E97\u65B9\u6848\u4E0E\u5BF9\u8BDD\u8FDB\u5EA6\u5B8C\u6574\u4FDD\u7559",
          openOverlayBtn: "\u6253\u5F00\u9A8C\u8BC1\u7801\u767B\u5F55\u5F39\u5C42",
          tabOtp: "\u90AE\u7BB1\u9A8C\u8BC1\u7801\u514D\u5BC6\u767B\u5F55",
          tabPassword: "\u5BC6\u7801\u767B\u5F55",
          emailLabel: "\u5546\u5BB6\u90AE\u7BB1\u5730\u5740",
          emailPlaceholder: "you@example.com",
          sendCode: "\u53D1\u9001\u9A8C\u8BC1\u7801",
          resendCode: "\u91CD\u65B0\u53D1\u9001",
          sendingCode: "\u53D1\u9001\u4E2D\u2026",
          codeLabel: "6 \u4F4D\u6570\u5B57\u9A8C\u8BC1\u7801",
          codePlaceholder: "000000",
          codeSentHint: "\u9A8C\u8BC1\u7801\u5DF2\u53D1\u9001\u81F3\u4F60\u7684\u90AE\u7BB1",
          devCodePrefix: "\u672C\u5730\u8054\u8C03\u9A8C\u8BC1\u7801\uFF1A",
          devCodeFillBtn: "\u4E00\u952E\u586B\u5165\u5E76\u7EE7\u7EED",
          passwordLabel: "\u767B\u5F55\u5BC6\u7801",
          passwordPlaceholder: "\u8BF7\u8F93\u5165\u8D26\u53F7\u5BC6\u7801",
          verifyAndBuildBtn: "\u9A8C\u8BC1\u5E76\u7ACB\u5373\u751F\u6210\u5E97\u94FA",
          passwordAndBuildBtn: "\u767B\u5F55\u5E76\u7ACB\u5373\u751F\u6210\u5E97\u94FA",
          errInvalidEmail: "\u8BF7\u8F93\u5165\u6709\u6548\u7684\u90AE\u7BB1\u5730\u5740",
          errInvalidCode: "\u9A8C\u8BC1\u7801\u4E0D\u6B63\u786E\u6216\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165",
          errRateLimited: "\u8BF7\u6C42\u8FC7\u4E8E\u9891\u7E41\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5",
          errLoginFailed: "\u90AE\u7BB1\u6216\u5BC6\u7801\u4E0D\u6B63\u786E"
        };
      }
      return {
        badge: "Instant In-Chat Verification",
        modalTitle: "Verify Your Email to Launch Store",
        modalSubtitle: "Stay right here in the builder! Enter your email to get a 6-digit code (new emails are automatically registered and linked to your store).",
        cardTitle: "Final Step: Verify Email to Build Your Store",
        cardSubtitle: "Authenticate right inside this dialog without losing your progress",
        openOverlayBtn: "Open Email Code Sign-In",
        tabOtp: "Email Verification Code",
        tabPassword: "Password Sign-In",
        emailLabel: "Merchant Email Address",
        emailPlaceholder: "you@example.com",
        sendCode: "Send Code",
        resendCode: "Resend",
        sendingCode: "Sending\u2026",
        codeLabel: "6-Digit Verification Code",
        codePlaceholder: "000000",
        codeSentHint: "Verification code sent to your inbox",
        devCodePrefix: "Local Dev Code: ",
        devCodeFillBtn: "Auto-Fill & Continue",
        passwordLabel: "Password",
        passwordPlaceholder: "Enter your password",
        verifyAndBuildBtn: "Verify & Launch Store Now",
        passwordAndBuildBtn: "Sign In & Launch Store Now",
        errInvalidEmail: "Please enter a valid email address",
        errInvalidCode: "Invalid or expired verification code",
        errRateLimited: "Too many requests, please wait a moment",
        errLoginFailed: "Invalid email or password"
      };
    });
    const blueprintLabels = computed(() => {
      const code = String(locale.value || "zh");
      if (code === "zh-HK") {
        return {
          header: "\u5373\u6642\u5EFA\u5E97\u85CD\u5716",
          reset: "\u91CD\u65B0\u5C0D\u8A71",
          tryPrompts: "\u6216\u8005\u9EDE\u9078\u9748\u611F\u793A\u4F8B\u76F4\u63A5\u958B\u59CB\uFF1A",
          productsLabel: "\u5728\u552E\u5546\u54C1",
          publishedUnit: "\u6B3E\u5DF2\u4E0A\u67B6",
          chatTab: "AI \u5C0D\u8A71\u8207\u8A2D\u7F6E",
          previewTab: "\u5373\u6642\u5E97\u8216\u9810\u89BD",
          publishNow: "\u4E00\u9375\u767C\u4F48\u4E0A\u7DDA",
          publishedBadge: "\u5DF2\u767C\u4F48\u4E0A\u7DDA",
          refreshCanvas: "\u5237\u65B0\u756B\u5E03",
          desktop: "\u684C\u9762\u7AEF",
          mobile: "\u624B\u6A5F\u7AEF",
          enterFullscreen: "\u6EFF\u5C4F\u88DD\u4FEE",
          exitFullscreen: "\u9000\u51FA\u5168\u5C4F",
          collapseChat: "\u6536\u8D77\u5C0D\u8A71\uFF08\u6EFF\u5C4F\u756B\u5E03\uFF09",
          expandChat: "\u5C55\u958B AI \u88DD\u4FEE\u5C0D\u8A71",
          modePreview: "\u524D\u53F0\u9810\u89BD",
          modeVisualDecor: "\u53EF\u8996\u5316\u88DD\u4FEE",
          openNewTab: "\u65B0\u5206\u9801\u6253\u958B",
          mcpExecutedTitle: "\u5DF2\u57F7\u884C\u5E97\u8216 MCP \u5DE5\u5177\u93C8",
          viewInCanvas: "\u9810\u89BD\u6B64\u9801",
          mcpRunning: "\u6B63\u5728\u900F\u904E MCP \u4FEE\u6539\u6A21\u677F\u8207\u5E97\u8216\u914D\u7F6E\u2026",
          syncingCanvas: "\u6B63\u5728\u540C\u6B65\u5E97\u8216\u5373\u6642\u9810\u89BD\u756B\u5E03\u2026",
          inPlaceReadySubtitle: "\u76F4\u63A5\u5728\u4E0B\u65B9\u8F38\u5165\u6307\u4EE4\u5373\u53EF\u900F\u904E MCP \u4FEE\u6539\u6A21\u677F\u5340\u584A\u3001\u914D\u8272\u3001\u5546\u54C1\u8207\u5E97\u8216\u529F\u80FD\uFF0C\u53F3\u5074\u756B\u5E03\u5373\u6642\u5237\u65B0",
          mcpConsoleTitle: "\u9EDE\u9078\u6216\u76F4\u63A5\u8F38\u5165\u6307\u4EE4\uFF0C\u539F\u4F4D\u8ABF\u7528 MCP \u88DD\u4FEE\u8207\u8A2D\u7F6E\uFF1A",
          mcpInputPlaceholder: "\u76F4\u63A5\u8F38\u5165\u6307\u4EE4\uFF1A\u5982\u300C\u6539\u6210\u6DF1\u8272\u9AD8\u5B9A\u914D\u8272\u300D\u300C\u63D2\u5165 FAQ \u5340\u584A\u300D\u300C\u4E0A\u67B6 3 \u6B3E\u4E3B\u63A8\u5546\u54C1\u300D\u300C\u5275\u5EFA 9 \u6298\u512A\u60E0\u5238\u300D\u2026",
          steps: [
            { title: "\u63CF\u8FF0\u751F\u610F\u9700\u6C42", desc: "\u9078\u64C7\u7D93\u71DF\u6A21\u5F0F\u3001\u76EE\u6A19\u5E02\u5834\u8207\u8996\u89BA\u98A8\u683C" },
            { title: "\u78BA\u8A8D\u5EFA\u5E97\u65B9\u6848", desc: "\u6838\u5C0D AI \u6574\u7406\u7684\u5E97\u540D\u3001\u8A9E\u7A2E\u8207\u5E63\u7A2E\u914D\u7F6E" },
            { title: "\u81EA\u52D5\u521D\u59CB\u5316\u5E97\u8216", desc: "\u751F\u6210\u9996\u9801\u3001\u5546\u54C1\u8207\u653F\u7B56\u9801\u5168\u5957\u914D\u7F6E" },
            { title: "MCP \u88DD\u4FEE\u8207\u767C\u4F48", desc: "\u539F\u4F4D\u5C0D\u8A71\u6539\u6A21\u677F\u3001\u914D\u529F\u80FD\u4E26\u5373\u6642\u9810\u89BD" }
          ],
          samples: [
            { mode: "retail", market: "northAmerica", style: "minimalist", text: "\u624B\u5DE5\u9676\u74F7\u99AC\u514B\u676F\u8207\u9910\u5177\uFF0C\u9762\u5411\u5317\u7F8E\u5E74\u8F15\u5BB6\u5EAD" },
            { mode: "retail", market: "europe", style: "luxury", text: "40dB \u6DF1\u5EA6\u964D\u566A\u7121\u7DDA\u8033\u6A5F\uFF0C\u9762\u5411\u6B50\u7F8E\u6975\u5BA2\u73A9\u5BB6" },
            { mode: "inquiry", market: "global", style: "editorial", text: "\u5168\u78B3\u7E96\u7DAD\u7834\u98A8\u516C\u8DEF\u8ECA\u67B6\uFF0C\u627F\u63A5\u5168\u7403\u8ECA\u5E97 B2B \u8A62\u76E4" }
          ]
        };
      }
      if (code === "ru") {
        return {
          header: "\u041F\u043B\u0430\u043D \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430",
          reset: "\u0421\u043D\u0430\u0447\u0430\u043B\u0430",
          tryPrompts: "\u0418\u043B\u0438 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u043E\u0442\u043E\u0432\u044B\u0439 \u043F\u0440\u0438\u043C\u0435\u0440:",
          productsLabel: "\u0422\u043E\u0432\u0430\u0440\u044B",
          publishedUnit: "\u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u043E",
          chatTab: "AI \u0427\u0430\u0442 \u0438 MCP",
          previewTab: "\u041F\u0440\u0435\u0432\u044C\u044E \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430",
          publishNow: "\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u0442\u044C",
          publishedBadge: "\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u043E",
          refreshCanvas: "\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C",
          desktop: "\u041F\u041A",
          mobile: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0439",
          enterFullscreen: "\u041D\u0430 \u0432\u0435\u0441\u044C \u044D\u043A\u0440\u0430\u043D",
          exitFullscreen: "\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C",
          collapseChat: "\u0421\u043A\u0440\u044B\u0442\u044C \u0447\u0430\u0442",
          expandChat: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C AI-\u0447\u0430\u0442",
          modePreview: "\u041F\u0440\u0435\u0432\u044C\u044E",
          modeVisualDecor: "\u0412\u0438\u0437\u0443\u0430\u043B\u044C\u043D\u044B\u0439 \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440",
          openNewTab: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432 \u043D\u043E\u0432\u043E\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u0435",
          mcpExecutedTitle: "\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u044B \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B MCP",
          viewInCanvas: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C",
          mcpRunning: "\u041F\u0440\u0438\u043C\u0435\u043D\u044F\u0435\u043C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0448\u0430\u0431\u043B\u043E\u043D\u0430 \u0438 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A \u0447\u0435\u0440\u0435\u0437 MCP\u2026",
          syncingCanvas: "\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u0436\u0438\u0432\u043E\u0433\u043E \u043F\u0440\u0435\u0432\u044C\u044E\u2026",
          inPlaceReadySubtitle: "\u041F\u0438\u0448\u0438\u0442\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438 \u043F\u0440\u044F\u043C\u043E \u0432 \u0447\u0430\u0442 \u2014 MCP \u043C\u0433\u043D\u043E\u0432\u0435\u043D\u043D\u043E \u043E\u0431\u043D\u043E\u0432\u0438\u0442 \u0431\u043B\u043E\u043A\u0438, \u0446\u0432\u0435\u0442\u0430, \u0442\u043E\u0432\u0430\u0440\u044B \u0438 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430",
          mcpConsoleTitle: "\u0411\u044B\u0441\u0442\u0440\u044B\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F MCP (\u0448\u0430\u0431\u043B\u043E\u043D, \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438, \u0442\u043E\u0432\u0430\u0440\u044B):",
          mcpInputPlaceholder: "\u041D\u0430\u043F\u0440.: \xAB\u0421\u0434\u0435\u043B\u0430\u0439 \u0442\u0435\u043C\u043D\u0443\u044E \u0442\u0435\u043C\u0443\xBB, \xAB\u0414\u043E\u0431\u0430\u0432\u044C \u0431\u043B\u043E\u043A FAQ\xBB, \xAB\u0414\u043E\u0431\u0430\u0432\u044C 3 \u0442\u043E\u0432\u0430\u0440\u0430\xBB, \xAB\u0421\u043E\u0437\u0434\u0430\u0439 \u043A\u0443\u043F\u043E\u043D WELCOME10\xBB\u2026",
          steps: [
            { title: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0431\u0438\u0437\u043D\u0435\u0441\u0430", desc: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043C\u043E\u0434\u0435\u043B\u044C, \u0440\u044B\u043D\u043E\u043A \u0438 \u0432\u0438\u0437\u0443\u0430\u043B\u044C\u043D\u044B\u0439 \u0441\u0442\u0438\u043B\u044C" },
            { title: "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u043F\u043B\u0430\u043D\u0430", desc: "\u0423\u0442\u043E\u0447\u043D\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435, \u044F\u0437\u044B\u043A \u0438 \u0432\u0430\u043B\u044E\u0442\u0443 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430" },
            { title: "\u0413\u0435\u043D\u0435\u0440\u0430\u0446\u0438\u044F \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430", desc: "\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0441\u0431\u043E\u0440\u043A\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446 \u0438 \u0442\u043E\u0432\u0430\u0440\u043E\u0432" },
            { title: "MCP-\u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440 \u0438 \u0437\u0430\u043F\u0443\u0441\u043A", desc: "\u0416\u0438\u0432\u0430\u044F \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u0432 \u0447\u0430\u0442\u0435 \u0438 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u044F" }
          ],
          samples: [
            { mode: "retail", market: "northAmerica", style: "minimalist", text: "\u041A\u0435\u0440\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043A\u0440\u0443\u0436\u043A\u0438 \u0438 \u043F\u043E\u0441\u0443\u0434\u0430 \u0440\u0443\u0447\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B \u0434\u043B\u044F \u043C\u043E\u043B\u043E\u0434\u044B\u0445 \u0441\u0435\u043C\u0435\u0439" },
            { mode: "retail", market: "europe", style: "luxury", text: "\u0411\u0435\u0441\u043F\u0440\u043E\u0432\u043E\u0434\u043D\u044B\u0435 \u043D\u0430\u0443\u0448\u043D\u0438\u043A\u0438 \u0441 ANC 40 \u0434\u0411 \u0434\u043B\u044F \u0435\u0432\u0440\u043E\u043F\u0435\u0439\u0441\u043A\u043E\u0433\u043E \u0440\u044B\u043D\u043A\u0430" },
            { mode: "inquiry", market: "global", style: "editorial", text: "\u041A\u0430\u0440\u0431\u043E\u043D\u043E\u0432\u044B\u0435 \u0448\u043E\u0441\u0441\u0435\u0439\u043D\u044B\u0435 \u0432\u0435\u043B\u043E\u0440\u0430\u043C\u044B \u0434\u043B\u044F \u043E\u043F\u0442\u043E\u0432\u044B\u0445 B2B-\u0437\u0430\u043F\u0440\u043E\u0441\u043E\u0432" }
          ]
        };
      }
      if (code.startsWith("zh")) {
        return {
          header: "\u5B9E\u65F6\u5EFA\u5E97\u84DD\u56FE",
          reset: "\u91CD\u65B0\u5BF9\u8BDD",
          tryPrompts: "\u6216\u8005\u70B9\u9009\u7075\u611F\u793A\u4F8B\u76F4\u63A5\u5F00\u59CB\uFF1A",
          productsLabel: "\u5728\u552E\u5546\u54C1",
          publishedUnit: "\u6B3E\u5DF2\u4E0A\u67B6",
          chatTab: "AI \u5BF9\u8BDD\u4E0E\u8BBE\u7F6E",
          previewTab: "\u5B9E\u65F6\u5E97\u94FA\u9884\u89C8",
          publishNow: "\u4E00\u952E\u53D1\u5E03\u4E0A\u7EBF",
          publishedBadge: "\u5DF2\u53D1\u5E03\u4E0A\u7EBF",
          refreshCanvas: "\u5237\u65B0\u753B\u5E03",
          desktop: "\u684C\u9762\u7AEF",
          mobile: "\u624B\u673A\u7AEF",
          enterFullscreen: "\u6EE1\u5C4F\u88C5\u4FEE",
          exitFullscreen: "\u9000\u51FA\u5168\u5C4F",
          collapseChat: "\u6536\u8D77\u5BF9\u8BDD\uFF08\u6EE1\u5C4F\u753B\u5E03\uFF09",
          expandChat: "\u5C55\u5F00 AI \u88C5\u4FEE\u5BF9\u8BDD",
          modePreview: "\u524D\u53F0\u9884\u89C8",
          modeVisualDecor: "\u53EF\u89C6\u5316\u88C5\u4FEE",
          openNewTab: "\u65B0\u7A97\u53E3\u6253\u5F00",
          mcpExecutedTitle: "\u5DF2\u6267\u884C\u5E97\u94FA MCP \u5DE5\u5177\u94FE",
          viewInCanvas: "\u9884\u89C8\u6B64\u9875",
          mcpRunning: "\u6B63\u5728\u901A\u8FC7 MCP \u5DE5\u5177\u94FE\u4FEE\u6539\u6A21\u677F\u4E0E\u5E97\u94FA\u914D\u7F6E\u2026",
          syncingCanvas: "\u6B63\u5728\u540C\u6B65\u5E97\u94FA\u5B9E\u65F6\u9884\u89C8\u753B\u5E03\u2026",
          inPlaceReadySubtitle: "\u76F4\u63A5\u5728\u4E0B\u65B9\u8F93\u5165\u6307\u4EE4\u5373\u53EF\u901A\u8FC7 MCP \u4FEE\u6539\u6A21\u677F\u533A\u5757\u3001\u914D\u8272\u3001\u5546\u54C1\u4E0E\u5E97\u94FA\u529F\u80FD\uFF0C\u53F3\u4FA7\u753B\u5E03\u5B9E\u65F6\u5237\u65B0",
          mcpConsoleTitle: "\u70B9\u9009\u6216\u76F4\u63A5\u8F93\u5165\u6307\u4EE4\uFF0C\u539F\u4F4D\u8C03\u7528 MCP \u88C5\u4FEE\u4E0E\u8BBE\u7F6E\uFF1A",
          mcpInputPlaceholder: "\u76F4\u63A5\u8F93\u5165\u6307\u4EE4\uFF1A\u5982\u300C\u6539\u6210\u6DF1\u8272\u9AD8\u5B9A\u914D\u8272\u300D\u300C\u63D2\u5165 FAQ \u533A\u5757\u300D\u300C\u4E0A\u67B6 3 \u6B3E\u4E3B\u63A8\u5546\u54C1\u300D\u300C\u521B\u5EFA 9 \u6298\u4F18\u60E0\u5238\u300D\u2026",
          steps: [
            { title: "\u63CF\u8FF0\u751F\u610F\u9700\u6C42", desc: "\u9009\u62E9\u7ECF\u8425\u6A21\u5F0F\u3001\u76EE\u6807\u5E02\u573A\u4E0E\u89C6\u89C9\u98CE\u683C" },
            { title: "\u786E\u8BA4\u5EFA\u5E97\u65B9\u6848", desc: "\u6838\u5BF9 AI \u6574\u7406\u7684\u5E97\u540D\u3001\u8BED\u79CD\u4E0E\u5E01\u79CD\u914D\u7F6E" },
            { title: "\u81EA\u52A8\u521D\u59CB\u5316\u5E97\u94FA", desc: "\u751F\u6210\u9996\u9875\u3001\u5546\u54C1\u4E0E\u653F\u7B56\u9875\u5168\u5957\u914D\u7F6E" },
            { title: "MCP \u88C5\u4FEE\u4E0E\u53D1\u5E03", desc: "\u539F\u4F4D\u5BF9\u8BDD\u6539\u6A21\u677F\u3001\u914D\u529F\u80FD\u5E76\u5B9E\u65F6\u9884\u89C8" }
          ],
          samples: [
            { mode: "retail", market: "northAmerica", style: "minimalist", text: "\u624B\u5DE5\u9676\u74F7\u9A6C\u514B\u676F\u548C\u7897\uFF0C\u9762\u5411\u5317\u7F8E\u5E74\u8F7B\u5BB6\u5EAD" },
            { mode: "retail", market: "europe", style: "luxury", text: "40dB \u6DF1\u5EA6\u964D\u566A\u65E0\u7EBF\u8033\u673A\uFF0C\u9762\u5411\u6B27\u7F8E\u6781\u5BA2\u73A9\u5BB6" },
            { mode: "inquiry", market: "global", style: "editorial", text: "\u5168\u78B3\u7EA4\u7EF4\u7834\u98CE\u516C\u8DEF\u8F66\u67B6\uFF0C\u627F\u63A5\u5168\u7403\u8F66\u5E97 B2B \u8BE2\u76D8" }
          ]
        };
      }
      return {
        header: "Live Store Blueprint",
        reset: "Start over",
        tryPrompts: "Or click an example to start right away:",
        productsLabel: "Products",
        publishedUnit: "published",
        chatTab: "AI Copilot & MCP",
        previewTab: "Live Store Preview",
        publishNow: "Publish Live",
        publishedBadge: "Published!",
        refreshCanvas: "Refresh",
        desktop: "Desktop",
        mobile: "Mobile",
        enterFullscreen: "Full Screen",
        exitFullscreen: "Exit Full Screen",
        collapseChat: "Hide Chat (Full Canvas)",
        expandChat: "Open AI Copilot Chat",
        modePreview: "Live Preview",
        modeVisualDecor: "Visual Editor",
        openNewTab: "Open in New Tab",
        mcpExecutedTitle: "Executed Store MCP Tools",
        viewInCanvas: "Preview",
        mcpRunning: "Executing store MCP tools for template & feature setup\u2026",
        syncingCanvas: "Syncing live storefront preview canvas\u2026",
        inPlaceReadySubtitle: "Type any instruction below to modify templates, colors, products, or store settings live via MCP",
        mcpConsoleTitle: "Click or type below to run in-place MCP actions:",
        mcpInputPlaceholder: 'e.g. "Switch to luxury forest green palette", "Add FAQ block", "Publish 3 sample products", "Create WELCOME10 coupon"\u2026',
        steps: [
          { title: "Describe Your Business", desc: "Pick business mode, market, and brand style" },
          { title: "Review Store Plan", desc: "Confirm store name, language, and currency" },
          { title: "Auto-Build Storefront", desc: "Generate home, catalog, product, and policy pages" },
          { title: "Live MCP Studio", desc: "Customize templates & store features in chat" }
        ],
        samples: [
          { mode: "retail", market: "northAmerica", style: "minimalist", text: "Handmade ceramic mugs and bowls for young families in North America" },
          { mode: "retail", market: "europe", style: "luxury", text: "40dB ANC wireless studio headphones for audiophiles in Europe" },
          { mode: "inquiry", market: "global", style: "editorial", text: "Ultralight carbon road bike frames for global B2B dealer inquiries" }
        ]
      };
    });
    const previewRoutes = computed(() => {
      const isZh = String(locale.value || "zh").startsWith("zh");
      return [
        { path: "/", label: isZh ? "\u9996\u9875 (/)" : "Home (/)" },
        { path: "/product", label: isZh ? "\u5168\u90E8\u5546\u54C1 (/product)" : "Catalog (/product)" },
        { path: "/pages/privacy-policy", label: isZh ? "\u9690\u79C1\u653F\u7B56" : "Privacy Policy" },
        { path: "/pages/contact-us", label: isZh ? "\u8054\u7CFB\u6211\u4EEC" : "Contact Us" }
      ];
    });
    const mcpActionTabs = computed(() => {
      const isZh = String(locale.value || "zh").startsWith("zh");
      return [
        { key: "decor", label: isZh ? "\u{1F3A8} \u6A21\u677F\u88C5\u4FEE" : "\u{1F3A8} Templates" },
        { key: "setup", label: isZh ? "\u2699\uFE0F \u529F\u80FD\u8BBE\u7F6E" : "\u2699\uFE0F Store Setup" },
        { key: "catalog", label: isZh ? "\u{1F4E6} \u5546\u54C1\u4E0E\u8425\u9500" : "\u{1F4E6} Products & Promo" }
      ];
    });
    const activeMcpChips = computed(() => {
      const isZh = String(locale.value || "zh").startsWith("zh");
      if (activeMcpTab.value === "setup") {
        return isZh ? [
          { icon: "ph:shield-check-bold", label: "\u751F\u6210 5 \u5927\u5408\u89C4\u653F\u7B56\u4E0E\u5BFC\u822A\u83DC\u5355", prompt: "\u4E00\u952E\u751F\u6210\u5E76\u7ED1\u5B9A\u9690\u79C1\u653F\u7B56\u3001\u670D\u52A1\u6761\u6B3E\u3001\u9000\u6362\u8D27\u3001\u7269\u6D41\u8BF4\u660E\u3001\u8054\u7CFB\u6211\u4EEC 5 \u5927\u5408\u89C4\u653F\u7B56\u9875\uFF0C\u5E76\u521D\u59CB\u5316\u9876\u5E95\u680F\u5BFC\u822A\u83DC\u5355" },
          { icon: "ph:chats-circle-bold", label: "\u5207\u6362\u4E3A B2B \u8BE2\u76D8\u5B9A\u5236\u6A21\u5F0F", prompt: "\u5C06\u5E97\u94FA\u7ECF\u8425\u6A21\u5F0F\u5207\u6362\u4E3A B2B \u8BE2\u76D8\u5B9A\u5236\u6A21\u5F0F (inquiry)\uFF0C\u5E76\u914D\u7F6E\u5B98\u65B9\u5BA2\u670D\u90AE\u7BB1" },
          { icon: "ph:shopping-bag-bold", label: "\u5207\u6362\u4E3A DTC \u96F6\u552E\u76F4\u8D2D\u6A21\u5F0F", prompt: "\u5C06\u5E97\u94FA\u7ECF\u8425\u6A21\u5F0F\u5207\u6362\u4E3A DTC \u96F6\u552E\u76F4\u8D2D\u6A21\u5F0F (retail)" },
          { icon: "ph:currency-eur-bold", label: "\u7ED3\u7B97\u5E01\u79CD\u6539\u4E3A EUR \u6B27\u5143", prompt: "\u5C06\u5E97\u94FA\u9ED8\u8BA4\u7ED3\u7B97\u5E01\u79CD\u4FEE\u6539\u4E3A EUR \u6B27\u5143\u5E76\u4FDD\u5B58\u57FA\u7840\u8BBE\u7F6E" }
        ] : [
          { icon: "ph:shield-check-bold", label: "Setup 5 Compliance Policies & Menus", prompt: "Generate and bind all 5 compliance policy pages (Privacy, Terms, Shipping, Refund, Contact) and initialize navigation menus" },
          { icon: "ph:chats-circle-bold", label: "Switch to B2B Inquiry Mode", prompt: "Switch store business mode to B2B inquiry and update support email" },
          { icon: "ph:shopping-bag-bold", label: "Switch to DTC Retail Mode", prompt: "Switch store business mode to DTC retail" },
          { icon: "ph:currency-eur-bold", label: "Set Store Currency to EUR", prompt: "Change default store currency to EUR and save store settings" }
        ];
      }
      if (activeMcpTab.value === "catalog") {
        return isZh ? [
          { icon: "ph:package-bold", label: "\u81EA\u52A8\u751F\u6210\u5E76\u4E0A\u67B6 3 \u6B3E\u4E3B\u63A8\u5546\u54C1", prompt: "\u56F4\u7ED5\u5F53\u524D\u5E97\u94FA\u4E3B\u8425\u54C1\u7C7B\uFF0C\u81EA\u52A8\u751F\u6210\u5E76\u76F4\u63A5\u4E0A\u67B6 3 \u6B3E\u7CBE\u54C1\u4E3B\u63A8\u5546\u54C1\uFF08\u542B\u56FE\u6587\u8BE6\u60C5\u4E0E SEO \u5143\u6570\u636E\uFF09" },
          { icon: "ph:ticket-bold", label: "\u521B\u5EFA\u9996\u5355 9 \u6298\u4F18\u60E0\u5238 WELCOME10", prompt: "\u521B\u5EFA\u4E00\u5F20\u65B0\u5BA2\u9996\u5355\u4E13\u4EAB 9 \u6298\u4F18\u60E0\u5238\uFF0C\u4F18\u60E0\u7801\u8BBE\u4E3A WELCOME10" },
          { icon: "ph:megaphone-bold", label: "\u9876\u680F\u6302\u51FA WELCOME10 \u6EE1\u514D\u516C\u544A", prompt: "\u4FEE\u6539\u9876\u90E8\u516C\u544A\u680F\u6587\u6848\u4E3A\u300C\u9650\u65F6\u793C\u9047\uFF1A\u5168\u573A\u6EE1 $75 \u4EAB\u5168\u7403\u514D\u90AE \xB7 \u9996\u5355\u8F93\u5165 WELCOME10 \u7ACB\u51CF 10%\u300D" }
        ] : [
          { icon: "ph:package-bold", label: "Generate & Publish 3 Sample Products", prompt: "Generate and publish 3 tailored flagship products with rich descriptions and SEO metadata" },
          { icon: "ph:ticket-bold", label: "Create 10% Off Coupon WELCOME10", prompt: "Create a 10% off welcome coupon with code WELCOME10" },
          { icon: "ph:megaphone-bold", label: "Update Top Promo Announcement Bar", prompt: 'Update header announcement bar to "Free Worldwide Shipping Over $75 \xB7 Use Code WELCOME10 for 10% Off"' }
        ];
      }
      return isZh ? [
        { icon: "ph:palette-bold", label: "\u5207\u6362\u9AD8\u5B9A\u6DF1\u6797\u7EFF\u886C\u7EBF\u914D\u8272", prompt: "\u5C06\u5168\u7AD9\u4E3B\u9898\u5207\u6362\u4E3A\u9AD8\u5B9A\u5962\u534E\u6DF1\u6797\u7EFF (#1B4332) \u4E0E Playfair \u886C\u7EBF\u4F53\u98CE\u683C" },
        { icon: "ph:sun-bold", label: "\u5207\u6362\u6781\u7B80\u5317\u6B27\u7EAF\u767D\u914D\u8272", prompt: "\u5C06\u5168\u7AD9\u4E3B\u9898\u5207\u6362\u4E3A\u6781\u7B80\u5317\u6B27\u767D\u663C\u98CE\u683C (#1E293B)" },
        { icon: "ph:text-aa-bold", label: "\u91CD\u5199\u9996\u9875\u9996\u5C4F\u4E3B\u89C6\u89C9\u6807\u9898", prompt: "\u4F18\u5316\u9996\u9875\u9996\u5C4F\u4E3B\u89C6\u89C9\u6807\u9898\u3001\u526F\u6807\u9898\u4E0E\u884C\u52A8\u6309\u94AE\u6587\u6848\uFF0C\u7A81\u51FA\u6E90\u5934\u54C1\u8D28\u4E0E\u5168\u7403\u76F4\u53D1" },
        { icon: "ph:question-bold", label: "\u5728\u9996\u9875\u63D2\u5165 FAQ \u95EE\u7B54\u533A\u5757", prompt: "\u5728\u9996\u9875\u5E95\u90E8\u65B0\u589E\u4E00\u4E2A\u5E38\u89C1\u95EE\u9898\u89E3\u7B54 (FAQ) \u6298\u53E0\u533A\u5757\uFF0C\u5305\u542B\u53D1\u8D27\u65F6\u6548\u300130\u5929\u9000\u6362\u4E0E\u5B9A\u5236\u8BF4\u660E" },
        { icon: "ph:star-four-bold", label: "\u5728\u9996\u9875\u63D2\u5165\u4E09\u5927\u54C1\u724C\u5356\u70B9\u533A\u5757", prompt: "\u5728\u9996\u9875\u65B0\u589E\u300C\u4E3A\u4EC0\u4E48\u9009\u62E9\u6211\u4EEC\u300D\u4E09\u5927\u6838\u5FC3\u5356\u70B9\u533A\u5757 (FeatureList)" }
      ] : [
        { icon: "ph:palette-bold", label: "Luxury Forest Green & Serif Theme", prompt: "Switch global theme settings to luxury forest green (#1B4332) with Playfair serif typography" },
        { icon: "ph:sun-bold", label: "Minimalist Nordic Clean Theme", prompt: "Switch global theme settings to minimalist Nordic clean palette (#1E293B)" },
        { icon: "ph:text-aa-bold", label: "Rewrite Homepage Hero Headline", prompt: "Rewrite homepage hero banner headline, subheading, and CTA button copy" },
        { icon: "ph:question-bold", label: "Insert Homepage FAQ Block", prompt: "Insert an interactive FAQ section at the bottom of the homepage covering shipping and returns" },
        { icon: "ph:star-four-bold", label: "Insert 3-Column FeatureList Block", prompt: "Insert a 3-column Why Shop With Us FeatureList section on the homepage" }
      ];
    });
    const wizardSteps = computed(() => {
      const cur = wizardCurrentIndex.value;
      return blueprintLabels.value.steps.map((item, idx) => ({
        key: `step-${idx}`,
        title: item.title,
        desc: item.desc,
        state: idx < cur ? "done" : idx === cur ? "active" : "pending"
      }));
    });
    const samplePrompts = computed(() => blueprintLabels.value.samples);
    function applySamplePrompt(sample) {
      form.mode = sample.mode;
      form.market = sample.market;
      form.style = sample.style;
      draft.value = sample.text;
      send();
    }
    function stopOtpTimer() {
      if (otpTimer) {
        clearInterval(otpTimer);
        otpTimer = null;
      }
    }
    function startOtpCountdown(seconds) {
      stopOtpTimer();
      otpCooldown.value = Math.max(0, seconds);
      if (otpCooldown.value <= 0) return;
      otpTimer = setInterval();
    }
    async function sendEmailOtp() {
      var _a, _b, _c, _d, _e;
      const email = authForm.email.trim().toLowerCase();
      if (!email || otpSending.value || otpCooldown.value > 0) return;
      otpSending.value = true;
      authError.value = "";
      try {
        const res = await $fetch("/api/shopark/auth/email-code/send", {
          method: "POST",
          body: {
            email,
            locale: locale.value
          }
        });
        otpSentOnce.value = true;
        startOtpCountdown(((_a = res == null ? void 0 : res.data) == null ? void 0 : _a.cooldownSeconds) || 45);
        if ((_b = res == null ? void 0 : res.data) == null ? void 0 : _b.devCode) {
          otpDevCode.value = String(res.data.devCode);
        }
      } catch (error) {
        const reason = String(((_d = (_c = error == null ? void 0 : error.data) == null ? void 0 : _c.data) == null ? void 0 : _d.reason) || "");
        if (reason === "invalid_email") authError.value = authLabels.value.errInvalidEmail;
        else if (reason === "rate_limited" || (error == null ? void 0 : error.statusCode) === 429) authError.value = authLabels.value.errRateLimited;
        else authError.value = ((_e = error == null ? void 0 : error.data) == null ? void 0 : _e.statusMessage) || authLabels.value.errInvalidEmail;
      } finally {
        otpSending.value = false;
      }
    }
    async function verifyEmailOtpAndContinue() {
      var _a, _b, _c;
      const email = authForm.email.trim().toLowerCase();
      const code = authForm.code.trim();
      if (!email || code.length < 6 || authSubmitting.value) return;
      authSubmitting.value = true;
      authError.value = "";
      try {
        await $fetch("/api/shopark/auth/email-code/verify", {
          method: "POST",
          body: { email, code }
        });
        await ((_a = customerAuth.fetchSession) == null ? void 0 : _a.call(customerAuth));
        loggedIn.value = true;
        authOverlayOpen.value = false;
        otpDevCode.value = "";
        startBuild();
      } catch (error) {
        const reason = String(((_c = (_b = error == null ? void 0 : error.data) == null ? void 0 : _b.data) == null ? void 0 : _c.reason) || "");
        if (reason === "rate_limited" || (error == null ? void 0 : error.statusCode) === 429) authError.value = authLabels.value.errRateLimited;
        else authError.value = authLabels.value.errInvalidCode;
      } finally {
        authSubmitting.value = false;
      }
    }
    function fillDevOtpAndVerify() {
      if (!otpDevCode.value) return;
      authForm.code = otpDevCode.value;
      void verifyEmailOtpAndContinue();
    }
    async function loginWithPasswordAndContinue() {
      var _a;
      const email = authForm.email.trim().toLowerCase();
      const password = authForm.password;
      if (!email || !password || authSubmitting.value) return;
      authSubmitting.value = true;
      authError.value = "";
      try {
        if (typeof customerAuth.login === "function") {
          await customerAuth.login(email, password);
        } else {
          await $fetch("/api/auth/login", {
            method: "POST",
            body: { email, password }
          });
          await ((_a = customerAuth.fetchSession) == null ? void 0 : _a.call(customerAuth));
        }
        loggedIn.value = true;
        authOverlayOpen.value = false;
        startBuild();
      } catch {
        authError.value = authLabels.value.errLoginFailed;
      } finally {
        authSubmitting.value = false;
      }
    }
    async function openPlanUpgradeOverlay() {
      var _a;
      planOverlayOpen.value = true;
      if (availablePlans.value.length > 0 || plansLoading.value) return;
      plansLoading.value = true;
      try {
        const res = await $fetch("/api/products", {
          query: { pageSize: 100 }
        });
        const list = [];
        for (const prod of (res == null ? void 0 : res.data) || []) {
          if (prod.type !== "subscription") continue;
          let meta = prod.metaData;
          if (typeof meta === "string") {
            try {
              meta = JSON.parse(meta);
            } catch {
              meta = {};
            }
          }
          if (!meta || meta.is_pricing_plan !== true) continue;
          const planCode = String(meta.shopark_plan_code || "").trim().toLowerCase();
          const rawKey = String(meta.shopark_plan_key || planCode.replace(/-(monthly|yearly)$/, "")).trim().toLowerCase();
          const planKey = rawKey === "standard" ? "starter" : rawKey === "pro" ? "professional" : rawKey;
          if (!["starter", "professional", "premium"].includes(planKey)) continue;
          const interval = planCode.endsWith("-yearly") || meta.interval === "year" || String(meta.subscription_cycle || "").includes("year") ? "year" : "month";
          const defaultLimit = planKey === "premium" ? 20 : planKey === "professional" ? 5 : 2;
          const storeLimit = Number(meta.shopark_store_limit) > 0 ? Number(meta.shopark_store_limit) : defaultLimit;
          const tr = (_a = meta.translations) == null ? void 0 : _a[locale.value];
          list.push({
            id: Number(prod.id),
            name: String((tr == null ? void 0 : tr.name) || prod.name || planKey),
            price: Number(prod.price || 0),
            interval,
            planKey,
            storeLimit
          });
        }
        availablePlans.value = list.sort((a, b) => a.price - b.price);
      } catch {
      } finally {
        plansLoading.value = false;
      }
    }
    const activePlanCards = computed(() => {
      const targetInterval = planBillingCycle.value === "yearly" ? "year" : "month";
      const filtered = availablePlans.value.filter((p) => p.interval === targetInterval);
      return filtered.length ? filtered : availablePlans.value;
    });
    async function onPlanPurchased() {
      planOverlayOpen.value = false;
      await loadStores();
      if (canCreate.value) {
        choice.value = "new";
      }
    }
    function selectFirstExistingStoreAndClosePlanModal() {
      planOverlayOpen.value = false;
      if (usableStores.value.length > 0) {
        choice.value = usableStores.value[0].id;
      }
    }
    function goSubscription() {
      storage.save();
      planOverlayOpen.value = false;
      open.value = false;
      void navigateTo(localePath("/user/subscription"));
    }
    function resetSession() {
      stopStatusPolling();
      stopOtpTimer();
      storage.clear();
      messages.value = [];
      intake.value = null;
      launchTarget.value = null;
      launchStatus.value = null;
      copilotSnapshot.value = null;
      errorKey.value = "";
      authError.value = "";
      authOverlayOpen.value = false;
      planOverlayOpen.value = false;
      draft.value = "";
      requestId.value = "";
      previewRoutePath.value = "/";
      mobilePane.value = "chat";
      isFullscreen.value = false;
      chatCollapsed.value = false;
      canvasViewMode.value = "preview";
      stage.value = "intake";
      void nextTick(() => {
        var _a;
        return (_a = inputRef.value) == null ? void 0 : _a.focus();
      });
    }
    const followUps = computed(() => Math.max(0, messages.value.filter((item) => item.role === "user").length - 1));
    const isLiveStudioStage = computed(() => {
      var _a;
      return (stage.value === "building" || stage.value === "done") && Boolean((_a = launchTarget.value) == null ? void 0 : _a.storeId);
    });
    const canType = computed(() => !messages.value.length || stage.value === "plan" && loggedIn.value && followUps.value < FOLLOW_UPS_MAX || isLiveStudioStage.value);
    const locked = computed(() => stage.value === "starting" || stage.value === "building" || stage.value === "done");
    const nameValid = computed(() => brief.storeName.trim().length >= SHOPARK_STORE_NAME_MIN && brief.storeName.trim().length <= SHOPARK_STORE_NAME_MAX);
    const languageItems = computed(() => SHOPARK_STORE_LANGS.map((code) => ({ label: copy.value.createStore.languages[code], value: code })));
    const currencyItems = SHOPARK_STORE_CURRENCIES.map((code) => ({ label: code, value: code }));
    const styleItems = computed(() => STYLES.map((style) => ({ label: t(`shopark.launch.styles.${style}`), value: style })));
    const categoryItems = computed(() => categories.value.map((item) => ({ label: item.name, value: item.id })));
    const isDefaulted = (field) => {
      var _a;
      return Boolean((_a = intake.value) == null ? void 0 : _a.defaulted.includes(field));
    };
    const normalizeStepState = (raw) => {
      if (raw === "done" || raw === "ok" || raw === "skipped") return "done";
      if (raw === "running") return "running";
      if (raw === "failed") return "failed";
      return "pending";
    };
    const buildSteps = computed(() => {
      var _a, _b, _c, _d;
      const s = launchStatus.value;
      const mode = (s == null ? void 0 : s.mode) || ((_a = launchTarget.value) == null ? void 0 : _a.mode) || "new";
      const sc = s == null ? void 0 : s.scope;
      const needPlan = mode === "new" || Boolean((sc == null ? void 0 : sc.storeSetup) || (sc == null ? void 0 : sc.policies) || (sc == null ? void 0 : sc.products) || scope.storeSetup || scope.policies);
      const pages = ((_b = s == null ? void 0 : s.progress) == null ? void 0 : _b.pages) || {};
      const list = [];
      if (needPlan) {
        const planRaw = (_c = s == null ? void 0 : s.progress) == null ? void 0 : _c.plan;
        list.push({
          key: "setup",
          label: t("shopark.launch.steps.setup"),
          state: planRaw ? normalizeStepState(planRaw) : stage.value === "done" ? "done" : "running"
        });
      }
      const pageDefs = [
        { key: "index", label: t("shopark.launch.steps.index") },
        { key: "product_all", label: t("shopark.launch.steps.catalog") },
        { key: "product", label: t("shopark.launch.steps.product") },
        { key: "page.about", label: t("shopark.launch.steps.contact") }
      ];
      for (const def of pageDefs) {
        const pageRaw = (_d = pages[def.key]) != null ? _d : def.key === "product_all" ? pages.productAll : void 0;
        list.push({
          key: def.key,
          label: def.label,
          state: pageRaw ? normalizeStepState(pageRaw) : stage.value === "done" ? "done" : "pending"
        });
      }
      if (stage.value === "building" && !list.some((item) => item.state === "running")) {
        const firstPending = list.find((item) => item.state === "pending");
        if (firstPending) firstPending.state = "running";
      }
      return list;
    });
    const buildProgressPercent = computed(() => {
      if (stage.value === "done") return 100;
      const total = buildSteps.value.length || 1;
      const doneCount = buildSteps.value.filter((item) => item.state === "done" || item.state === "failed").length;
      const runningBoost = buildSteps.value.some((item) => item.state === "running") ? 0.35 : 0.15;
      return Math.min(95, Math.max(12, Math.round((doneCount + runningBoost) / total * 100)));
    });
    const isStoreActiveLicense = (store) => {
      if (store.status === 10 || store.storeStatus === 30) return false;
      if (store.expireAt && !store.expireAt.startsWith("2099-") && Date.parse(store.expireAt) <= Date.now()) return false;
      return Boolean(store.trial) || Boolean(store.planKey && store.planKey !== "free");
    };
    const usableStores = computed(
      () => stores.value.filter((store) => store.status !== 30).slice().sort((a, b) => Number(isStoreActiveLicense(b)) - Number(isStoreActiveLicense(a)))
    );
    function storeBadgeText(store) {
      if (store.trial) return quotaLabels.value.badgeTrial;
      if (isStoreActiveLicense(store)) return quotaLabels.value.badgeActive;
      return quotaLabels.value.badgeSelectable;
    }
    function storeBadgeClass(store) {
      if (store.trial) return "bg-cyan-50 text-cyan-700 ring-1 ring-cyan-200/80";
      if (isStoreActiveLicense(store)) return "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200/80";
      return "bg-slate-100 text-slate-600";
    }
    const readReason = (error) => {
      var _a, _b;
      const value = error && typeof error === "object" ? error : {};
      const reason = String(((_b = (_a = value.data) == null ? void 0 : _a.data) == null ? void 0 : _b.reason) || "");
      if (KNOWN_ERRORS.has(reason)) return reason;
      if (value.statusCode === 401) return "login_required";
      if (value.statusCode === 429) return "rate_limited";
      if ([502, 503, 504].includes(Number(value.statusCode))) return "unavailable";
      return "generic";
    };
    const storage = {
      save: () => {
        try {
          localStorage.setItem(DRAFT_KEY, JSON.stringify({ form, messages: messages.value, intake: intake.value, brief, requestId: requestId.value }));
        } catch {
        }
      },
      load: () => {
        try {
          return JSON.parse(localStorage.getItem(DRAFT_KEY) || "null");
        } catch {
          return null;
        }
      },
      clear: () => {
        try {
          localStorage.removeItem(DRAFT_KEY);
        } catch {
        }
      }
    };
    watch(() => [messages.value.length, busy.value, copilotBusy.value, stage.value, Boolean(intake.value), streamingReply.value.length], async () => {
      var _a;
      await nextTick();
      (_a = scrollRef.value) == null ? void 0 : _a.scrollTo({ top: scrollRef.value.scrollHeight, behavior: "smooth" });
    });
    function autosize() {
      const el = inputRef.value;
      if (!el) return;
      el.style.height = "auto";
      el.style.height = `${Math.min(el.scrollHeight, 112)}px`;
    }
    function firstMessage(text) {
      return [
        `${t("shopark.launch.mode")}: ${t(`shopark.launch.modes.${form.mode}`)} \xB7 ${t("shopark.launch.market")}: ${t(`shopark.launch.markets.${form.market}`)} \xB7 ${t("shopark.launch.style")}: ${t(`shopark.launch.styles.${form.style}`)}`,
        text
      ].join("\n");
    }
    function applyIntake(result) {
      var _a, _b;
      const first = !intake.value;
      intake.value = result;
      Object.assign(brief, result.brief, first ? { businessMode: form.mode, archetype: form.style } : {});
      const lang = ((_a = result.defaulted) == null ? void 0 : _a.includes("language")) || !isShoparkStoreLang(brief.language) ? "en" : brief.language;
      brief.language = lang;
      if (((_b = result.defaulted) == null ? void 0 : _b.includes("currency")) || !SHOPARK_STORE_CURRENCIES.includes(brief.currency)) {
        brief.currency = "USD";
      }
      if (!SHOPARK_STORE_TIMEZONES.includes(brief.timezone)) {
        brief.timezone = SHOPARK_STORE_DEFAULTS[lang].timezone;
      }
      if (result.reply) messages.value.push({ role: "assistant", text: result.reply });
      if (stage.value === "intake") stage.value = "plan";
    }
    async function requestIntake(captchaTicket) {
      var _a;
      busy.value = true;
      errorKey.value = "";
      streamingReply.value = "";
      try {
        const res = await fetch("/api/shopark/launch/intake", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "text/event-stream" },
          body: JSON.stringify({ messages: messages.value.map((m) => ({ role: m.role, text: m.text })), language: locale.value, captchaTicket })
        });
        if (!res.ok || !res.body) {
          const body = await res.json().catch(() => ({}));
          throw { statusCode: res.status, data: body };
        }
        let raw = "";
        let result = null;
        for await (const event of readSseFrames(res.body)) {
          if (event.type === "chunk" && typeof event.data === "string") {
            raw += event.data;
            streamingReply.value = readLaunchReply(raw);
          } else if (event.type === "done" && event.data) {
            result = event.data;
          } else if (event.type === "error") {
            throw { statusCode: event.errorCode === "pointsExceeded" ? 429 : 503 };
          }
        }
        if (!result) throw { statusCode: 503 };
        streamingReply.value = "";
        applyIntake(result);
      } catch (error) {
        streamingReply.value = "";
        errorKey.value = readReason(error);
        if (intake.value && ((_a = messages.value.at(-1)) == null ? void 0 : _a.role) === "user") draft.value = messages.value.pop().text;
      } finally {
        busy.value = false;
      }
    }
    async function executeInPlaceCopilot(promptText) {
      var _a, _b;
      const target = launchTarget.value;
      const clean = promptText.trim();
      if (!target || !clean || copilotBusy.value) return;
      messages.value.push({ role: "user", text: clean });
      copilotBusy.value = true;
      errorKey.value = "";
      try {
        const res = await $fetch("/api/shopark/launch/copilot", {
          method: "POST",
          body: {
            storeId: target.storeId,
            prompt: clean,
            language: locale.value,
            brief,
            publish: true
          }
        });
        if (res == null ? void 0 : res.data) {
          copilotSnapshot.value = res.data.snapshot;
          if ((_a = res.data.snapshot) == null ? void 0 : _a.businessMode) {
            brief.businessMode = res.data.snapshot.businessMode;
          }
          if ((_b = res.data.snapshot) == null ? void 0 : _b.currency) {
            brief.currency = res.data.snapshot.currency;
          }
          messages.value.push({
            role: "assistant",
            text: res.data.reply,
            toolCalls: res.data.toolCalls || []
          });
          if (res.data.targetPath && res.data.targetPath !== previewRoutePath.value) {
            previewRoutePath.value = res.data.targetPath;
          }
          refreshPreviewFrame();
        }
      } catch (error) {
        errorKey.value = readReason(error);
      } finally {
        copilotBusy.value = false;
      }
    }
    async function publishStoreNow() {
      var _a;
      const target = launchTarget.value;
      if (!target || publishingNow.value) return;
      publishingNow.value = true;
      try {
        const res = await $fetch("/api/shopark/launch/publish", {
          method: "POST",
          body: { storeId: target.storeId }
        });
        if ((_a = res == null ? void 0 : res.data) == null ? void 0 : _a.snapshot) {
          copilotSnapshot.value = res.data.snapshot;
        }
        justPublished.value = true;
        refreshPreviewFrame();
        setTimeout(() => {
          justPublished.value = false;
        }, 2500);
      } catch (error) {
        errorKey.value = readReason(error);
      } finally {
        publishingNow.value = false;
      }
    }
    function buildStudioRedirectPath(promptText) {
      var _a;
      const sessionId = ((_a = launchTarget.value) == null ? void 0 : _a.sessionId) || "";
      const baseRedirect = sessionId ? `/ai-decor?launch=${sessionId}` : "/ai-decor";
      const trimmed = (promptText || "").trim();
      if (!trimmed) return baseRedirect;
      const sep = baseRedirect.includes("?") ? "&" : "?";
      return `${baseRedirect}${sep}prompt=${encodeURIComponent(trimmed)}`;
    }
    function launchUrlWithPrompt(promptText) {
      var _a;
      const base = ((_a = launchTarget.value) == null ? void 0 : _a.url) || "";
      if (!base) return "";
      const trimmed = "".trim();
      try {
        const parsed = new URL(base, (void 0).location.origin);
        const existingRedirect = parsed.searchParams.get("redirect") || buildStudioRedirectPath();
        if (!trimmed) {
          parsed.searchParams.set("redirect", existingRedirect);
          return parsed.toString();
        }
        const sep = existingRedirect.includes("?") ? "&" : "?";
        parsed.searchParams.set("redirect", `${existingRedirect}${sep}prompt=${encodeURIComponent(trimmed)}`);
        return parsed.toString();
      } catch {
        return base;
      }
    }
    async function openLiveStudioWithPrompt(promptText) {
      var _a;
      const target = launchTarget.value;
      if (!target) return;
      const redirect = buildStudioRedirectPath(promptText);
      try {
        const res = await $fetch(`/api/shopark/stores/${target.storeId}/admin-url`, {
          method: "POST",
          body: { redirect }
        });
        if ((_a = res == null ? void 0 : res.data) == null ? void 0 : _a.url) {
          (void 0).open(res.data.url, "_blank", "noopener,noreferrer");
          return;
        }
      } catch {
      }
      const fallbackUrl = launchUrlWithPrompt();
      if (fallbackUrl) (void 0).open(fallbackUrl, "_blank", "noopener,noreferrer");
    }
    async function openStoreDashboard() {
      var _a;
      const target = launchTarget.value;
      if (!target) return;
      try {
        const res = await $fetch(`/api/shopark/stores/${target.storeId}/admin-url`, {
          method: "POST"
        });
        if ((_a = res == null ? void 0 : res.data) == null ? void 0 : _a.url) {
          (void 0).open(res.data.url.replace(/&redirect=[^&]*/, ""), "_blank", "noopener,noreferrer");
          return;
        }
      } catch {
      }
      if (target.dashboardUrl) (void 0).open(target.dashboardUrl, "_blank", "noopener,noreferrer");
    }
    function send() {
      var _a;
      const text = draft.value.trim();
      if (!text || busy.value || copilotBusy.value || !canType.value) return;
      draft.value = "";
      errorKey.value = "";
      void nextTick(autosize);
      if (isLiveStudioStage.value) {
        void executeInPlaceCopilot(text);
        return;
      }
      if (!messages.value.length) {
        messages.value = [{ role: "user", text: firstMessage(text) }];
        if (loggedIn.value) void requestIntake();
        else (_a = captchaRef.value) == null ? void 0 : _a.show();
        return;
      }
      messages.value.push({ role: "user", text });
      void requestIntake();
    }
    function onCaptcha(ticket) {
      return requestIntake(ticket);
    }
    function retry() {
      var _a;
      if (loggedIn.value) void requestIntake();
      else (_a = captchaRef.value) == null ? void 0 : _a.show();
    }
    async function loadStores() {
      var _a, _b, _c;
      storesLoading.value = true;
      errorKey.value = "";
      try {
        const [res, cats] = await Promise.all([
          $fetch("/api/shopark/stores", { query: { page: 1, limit: 20 } }),
          $fetch("/api/shopark/stores/categories")
        ]);
        stores.value = res.data.list || [];
        const quota = res.data.quota || null;
        storeQuota.value = quota;
        canCreate.value = !(quota && quota.available <= 0);
        choice.value = canCreate.value ? "new" : (_b = (_a = usableStores.value[0]) == null ? void 0 : _a.id) != null ? _b : "";
        categories.value = cats.data || [];
        categoryId.value = categories.value.some((item) => item.id === brief.categoryId) ? brief.categoryId : (_c = categories.value[0]) == null ? void 0 : _c.id;
        if (usableStores.value.length === 0 && canCreate.value && categoryId.value) {
          storesLoading.value = false;
          await launch();
          return;
        }
        stage.value = "stores";
      } catch (error) {
        errorKey.value = readReason(error);
        stage.value = "plan";
      } finally {
        storesLoading.value = false;
      }
    }
    function stopStatusPolling() {
      if (statusTimer) {
        clearTimeout(statusTimer);
        statusTimer = null;
      }
    }
    async function pollLaunchStatus() {
      var _a;
      stopStatusPolling();
      const target = launchTarget.value;
      if (!target || !open.value || stage.value !== "building") return;
      try {
        const res = await $fetch("/api/shopark/launch/status", {
          method: "POST",
          body: { storeId: target.storeId, sessionId: target.sessionId, brief }
        });
        launchStatus.value = res.data;
        const steps = buildSteps.value;
        const allSettled = steps.length > 0 && steps.every((item) => item.state === "done" || item.state === "failed");
        if (res.data.status === "done" || res.data.expired || allSettled && ((_a = res.data.progress) == null ? void 0 : _a.runner) === "server") {
          stage.value = "done";
          refreshPreviewFrame();
          return;
        }
      } catch {
      }
      if (open.value && stage.value === "building") {
        statusTimer = setTimeout(() => {
          void pollLaunchStatus();
        }, 1500);
      }
    }
    function startBuild() {
      if (!nameValid.value) {
        errorKey.value = "store_name";
        return;
      }
      errorKey.value = "";
      if (!loggedIn.value) {
        stage.value = "login";
        authOverlayOpen.value = true;
        authError.value = "";
        return;
      }
      authOverlayOpen.value = false;
      if (!requestId.value) requestId.value = crypto.randomUUID();
      stage.value = "starting";
      void loadStores();
    }
    async function launch() {
      var _a, _b, _c, _d;
      if (!choice.value || busy.value) return;
      busy.value = true;
      errorKey.value = "";
      const payload = { ...brief, storeName: brief.storeName.trim(), categoryId: choice.value === "new" ? Number(categoryId.value) : brief.categoryId };
      const body = choice.value === "new" ? { mode: "create", requestId: requestId.value, store: { name: payload.storeName, categoryId: payload.categoryId, currency: brief.currency, timezone: brief.timezone, lang: brief.language }, brief: payload } : { mode: "existing", storeId: choice.value, brief: payload, scope };
      try {
        stage.value = "starting";
        const res = await $fetch("/api/shopark/launch/start", { method: "POST", body });
        storage.clear();
        launchTarget.value = res.data;
        launchStatus.value = null;
        refreshPreviewFrame();
        if (res.data.sessionId) {
          stage.value = "building";
          void pollLaunchStatus();
        } else {
          stage.value = "done";
        }
      } catch (error) {
        const rawReason = String(((_b = (_a = error == null ? void 0 : error.data) == null ? void 0 : _a.data) == null ? void 0 : _b.reason) || "");
        if (rawReason === "quota_exceeded" || rawReason === "license_expired" || rawReason === "platform_limit") {
          canCreate.value = false;
          choice.value = (_d = (_c = usableStores.value[0]) == null ? void 0 : _c.id) != null ? _d : "";
          stage.value = "stores";
          void openPlanUpgradeOverlay();
          return;
        }
        errorKey.value = readReason(error);
        stage.value = usableStores.value.length > 0 || !canCreate.value ? "stores" : "plan";
      } finally {
        busy.value = false;
      }
    }
    function consumeIncomingSeed(incoming) {
      const s = incoming != null ? incoming : consumeSeed == null ? void 0 : consumeSeed();
      if (!s) {
        void nextTick(() => {
          var _a;
          return (_a = inputRef.value) == null ? void 0 : _a.focus();
        });
        return;
      }
      if (s.mode && MODES.includes(s.mode)) form.mode = s.mode;
      if (s.market && MARKETS.includes(s.market)) form.market = s.market;
      if (s.style && STYLES.includes(s.style)) form.style = s.style;
      if (s.prompt && s.prompt.trim()) {
        if (messages.value.length && stage.value !== "intake" && !isLiveStudioStage.value) {
          resetSession();
        }
        draft.value = s.prompt.trim();
        if (s.autoSend !== false) {
          void nextTick(() => send());
          return;
        }
      }
      void nextTick(() => {
        var _a;
        return (_a = inputRef.value) == null ? void 0 : _a.focus();
      });
    }
    watch(open, (isOpen) => {
      if (!isOpen) {
        stopStatusPolling();
        stopOtpTimer();
        return;
      }
      if (stage.value === "building" && launchTarget.value) {
        void pollLaunchStatus();
        return;
      }
      consumeIncomingSeed();
    });
    watch(() => seed == null ? void 0 : seed.value, (val) => {
      if (open.value && val) {
        consumeIncomingSeed(consumeSeed == null ? void 0 : consumeSeed());
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UModal = _sfc_main$H;
      const _component_UIcon = _sfc_main$X;
      const _component_UButton = _sfc_main$S;
      const _component_UFormField = _sfc_main$x;
      const _component_UInput = _sfc_main$w;
      const _component_USelect = _sfc_main$v;
      const _component_UCheckbox = _sfc_main$l;
      const _component_ShoparkCheckoutModal = __nuxt_component_7;
      const _component_CaptchaSlider = __nuxt_component_8;
      _push(ssrRenderComponent(_component_UModal, mergeProps({
        open: unref(open),
        "onUpdate:open": ($event) => isRef(open) ? open.value = $event : null,
        ui: {
          content: isFullscreen.value ? "flex w-screen max-w-none h-[100dvh] m-0 flex-col overflow-hidden rounded-none p-0 shadow-2xl transition-all duration-200" : "flex w-[calc(100vw-1rem)] max-w-[1440px] h-[calc(100dvh-1.25rem)] sm:w-[calc(100vw-2rem)] sm:h-[calc(100dvh-2rem)] flex-col overflow-hidden rounded-[26px] sm:rounded-[30px] p-0 shadow-2xl ring-1 ring-slate-900/10 max-sm:h-[100dvh] max-sm:w-screen max-sm:max-w-none max-sm:rounded-none transition-all duration-200"
        }
      }, _attrs), {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h;
          if (_push2) {
            _push2(`<div class="${ssrRenderClass([showSplitStudio.value ? chatCollapsed.value ? "lg:grid lg:grid-cols-[minmax(0,1fr)]" : "lg:grid lg:grid-cols-[440px_minmax(0,1fr)] xl:grid-cols-[460px_minmax(0,1fr)]" : "", "flex h-full min-h-0 flex-1 flex-col"])}"${_scopeId}><div class="${ssrRenderClass([showSplitStudio.value ? "border-r border-slate-200/80" : "", "flex min-h-0 min-w-0 flex-1 flex-col bg-slate-50"])}" style="${ssrRenderStyle(!showSplitStudio.value || !chatCollapsed.value ? null : { display: "none" })}"${_scopeId}><header class="relative shrink-0 overflow-hidden border-b border-slate-200/80 bg-white px-4 py-3 sm:px-6 sm:py-3.5"${_scopeId}><div class="flex items-center justify-between gap-2"${_scopeId}><div class="flex min-w-0 items-center gap-2.5"${_scopeId}><span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/20"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:sparkle-fill",
              class: "h-4 w-4"
            }, null, _parent2, _scopeId));
            _push2(`</span><div class="min-w-0"${_scopeId}><div class="flex flex-wrap items-center gap-2"${_scopeId}><h2 class="text-sm font-black tracking-tight text-slate-900 sm:text-base"${_scopeId}>${ssrInterpolate(unref(t)("shopark.launch.title"))}</h2><span class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-0.5 text-[11px] font-bold text-blue-700 ring-1 ring-blue-200/80"${_scopeId}><span${_scopeId}>Step ${ssrInterpolate(wizardCurrentIndex.value + 1)}/${ssrInterpolate(wizardSteps.value.length)}</span><span${_scopeId}>\xB7</span><span${_scopeId}>${ssrInterpolate((_a = wizardSteps.value[wizardCurrentIndex.value]) == null ? void 0 : _a.title)}</span></span>`);
            if (showSplitStudio.value) {
              _push2(`<span class="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-700 ring-1 ring-emerald-200"${_scopeId}><span class="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"${_scopeId}></span> MCP LIVE </span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><p class="mt-0.5 truncate text-xs text-slate-500"${_scopeId}>${ssrInterpolate(unref(t)("shopark.launch.subtitle"))}</p></div></div><div class="flex shrink-0 items-center gap-1.5"${_scopeId}>`);
            if (messages.value.length && !busy.value && !copilotBusy.value && stage.value !== "starting" && stage.value !== "building") {
              _push2(`<button type="button" class="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-bold text-slate-600 transition hover:border-slate-300 hover:bg-slate-100"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:arrows-counter-clockwise-bold",
                class: "h-3.5 w-3.5"
              }, null, _parent2, _scopeId));
              _push2(`<span class="hidden sm:inline"${_scopeId}>${ssrInterpolate(blueprintLabels.value.reset)}</span></button>`);
            } else {
              _push2(`<!---->`);
            }
            if (!showSplitStudio.value) {
              _push2(ssrRenderComponent(_component_UButton, {
                color: "neutral",
                variant: "ghost",
                icon: isFullscreen.value ? "ph:corners-in-bold" : "ph:corners-out-bold",
                class: "hidden sm:inline-flex shrink-0 rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-900",
                title: isFullscreen.value ? blueprintLabels.value.exitFullscreen : blueprintLabels.value.enterFullscreen,
                "aria-label": isFullscreen.value ? blueprintLabels.value.exitFullscreen : blueprintLabels.value.enterFullscreen,
                onClick: toggleFullscreenModal
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (!showSplitStudio.value) {
              _push2(ssrRenderComponent(_component_UButton, {
                color: "neutral",
                variant: "ghost",
                icon: "ph:x-bold",
                class: "shrink-0 rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-900",
                "aria-label": unref(t)("shopark.nav.closeMenu"),
                onClick: ($event) => open.value = false
              }, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_UButton, {
                color: "neutral",
                variant: "ghost",
                icon: "ph:x-bold",
                class: "shrink-0 rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-900 lg:hidden",
                "aria-label": unref(t)("shopark.nav.closeMenu"),
                onClick: ($event) => open.value = false
              }, null, _parent2, _scopeId));
            }
            _push2(`</div></div>`);
            if (showSplitStudio.value) {
              _push2(`<div class="mt-2.5 flex items-center justify-between gap-2 lg:hidden"${_scopeId}><div class="inline-flex rounded-xl bg-slate-100 p-0.5 text-xs font-bold"${_scopeId}><button type="button" class="${ssrRenderClass([mobilePane.value === "chat" ? "bg-white text-blue-600 shadow-2xs" : "text-slate-600", "rounded-lg px-3 py-1 transition"])}"${_scopeId}>${ssrInterpolate(blueprintLabels.value.chatTab)}</button><button type="button" class="${ssrRenderClass([mobilePane.value === "preview" ? "bg-white text-blue-600 shadow-2xs" : "text-slate-600", "rounded-lg px-3 py-1 transition"])}"${_scopeId}>${ssrInterpolate(blueprintLabels.value.previewTab)}</button></div><button type="button" class="inline-flex items-center gap-1 rounded-lg bg-emerald-600 px-2.5 py-1 text-xs font-bold text-white"${ssrIncludeBooleanAttr(publishingNow.value) ? " disabled" : ""}${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:rocket-launch-bold",
                class: "h-3.5 w-3.5"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>${ssrInterpolate(blueprintLabels.value.publishNow)}</span></button></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</header><div class="min-h-0 flex-1 overflow-y-auto" style="${ssrRenderStyle(!showSplitStudio.value || mobilePane.value === "chat" ? null : { display: "none" })}"${_scopeId}><div class="mx-auto w-full max-w-3xl space-y-5 px-4 py-5 sm:px-6 sm:py-6"${_scopeId}><ol class="space-y-4" aria-live="polite"${_scopeId}><li class="flex items-start gap-3"${_scopeId}><span class="${ssrRenderClass(ui.avatar)}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:sparkle-fill",
              class: "h-4 w-4"
            }, null, _parent2, _scopeId));
            _push2(`</span><div class="space-y-2 max-w-[88%]"${_scopeId}><p class="${ssrRenderClass(ui.bubbleAi)}"${_scopeId}>${ssrInterpolate(unref(t)("shopark.launch.greeting"))}</p></div></li><!--[-->`);
            ssrRenderList(messages.value, (message, index) => {
              var _a2;
              _push2(`<li class="${ssrRenderClass([message.role === "user" ? "justify-end" : "", "flex items-start gap-3"])}"${_scopeId}>`);
              if (message.role === "assistant") {
                _push2(`<span class="${ssrRenderClass(ui.avatar)}"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:sparkle-fill",
                  class: "h-4 w-4"
                }, null, _parent2, _scopeId));
                _push2(`</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="max-w-[86%] space-y-2"${_scopeId}><p class="${ssrRenderClass(message.role === "user" ? ui.bubbleUser : "whitespace-pre-line rounded-2xl rounded-tl-md bg-white px-4 py-3 text-[14px] leading-6 text-slate-800 shadow-sm ring-1 ring-slate-200/70")}"${_scopeId}>${ssrInterpolate(message.text)}</p>`);
              if ((_a2 = message.toolCalls) == null ? void 0 : _a2.length) {
                _push2(`<div class="space-y-1.5 rounded-2xl border border-indigo-100 bg-indigo-50/55 p-3 text-xs"${_scopeId}><div class="flex items-center justify-between text-[11px] font-bold text-indigo-900"${_scopeId}><span class="inline-flex items-center gap-1.5"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:cpu-bold",
                  class: "h-3.5 w-3.5 text-indigo-600"
                }, null, _parent2, _scopeId));
                _push2(`<span${_scopeId}>${ssrInterpolate(blueprintLabels.value.mcpExecutedTitle)}</span></span><span class="rounded-full bg-emerald-100 px-2 py-0.5 font-mono text-[10px] text-emerald-800"${_scopeId}>${ssrInterpolate(message.toolCalls.length)} tools </span></div><!--[-->`);
                ssrRenderList(message.toolCalls, (tc) => {
                  _push2(`<div class="flex items-start justify-between gap-2 rounded-xl bg-white/90 px-3 py-2 shadow-2xs ring-1 ring-indigo-100/80"${_scopeId}><div class="min-w-0 flex-1"${_scopeId}><div class="flex items-center gap-1.5"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: tc.status === "succeeded" ? "ph:check-circle-fill" : "ph:warning-circle-fill",
                    class: ["h-3.5 w-3.5 shrink-0", tc.status === "succeeded" ? "text-emerald-500" : "text-amber-500"]
                  }, null, _parent2, _scopeId));
                  _push2(`<span class="font-bold text-slate-800"${_scopeId}>${ssrInterpolate(tc.label)}</span><code class="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[10px] text-indigo-700"${_scopeId}>${ssrInterpolate(tc.tool)}</code></div><p class="mt-0.5 truncate text-[11px] text-slate-500"${_scopeId}>${ssrInterpolate(tc.summary)}</p></div>`);
                  if (tc.targetPage) {
                    _push2(`<button type="button" class="shrink-0 rounded-lg bg-blue-50 px-2 py-1 text-[11px] font-bold text-blue-600 hover:bg-blue-100"${_scopeId}>${ssrInterpolate(blueprintLabels.value.viewInCanvas)}</button>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div>`);
                });
                _push2(`<!--]--></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></li>`);
            });
            _push2(`<!--]-->`);
            if (busy.value || copilotBusy.value) {
              _push2(`<li class="flex items-start gap-3"${_scopeId}><span class="${ssrRenderClass(ui.avatar)}"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:sparkle-fill",
                class: "h-4 w-4"
              }, null, _parent2, _scopeId));
              _push2(`</span>`);
              if (streamingReply.value) {
                _push2(`<p class="${ssrRenderClass(ui.bubbleAi)}"${_scopeId}>${ssrInterpolate(streamingReply.value)}<span class="ml-0.5 inline-block h-4 w-0.5 translate-y-0.5 bg-indigo-500 motion-safe:animate-pulse"${_scopeId}></span></p>`);
              } else {
                _push2(`<p class="${ssrRenderClass([ui.bubbleAi, "inline-flex items-center gap-2 text-slate-500"])}" role="status"${_scopeId}><span class="inline-flex gap-1"${_scopeId}><!--[-->`);
                ssrRenderList(3, (dot) => {
                  _push2(`<span class="h-1.5 w-1.5 rounded-full bg-indigo-400 motion-safe:animate-bounce" style="${ssrRenderStyle({ animationDelay: `${dot * 140}ms` })}"${_scopeId}></span>`);
                });
                _push2(`<!--]--></span> ${ssrInterpolate(copilotBusy.value ? blueprintLabels.value.mcpRunning : unref(t)("shopark.launch.thinking"))}</p>`);
              }
              _push2(`</li>`);
            } else if (errorKey.value && !intake.value && messages.value.length) {
              _push2(`<li class="flex flex-wrap items-center gap-2 pl-12 text-sm text-red-600"${_scopeId}><span${_scopeId}>${ssrInterpolate(unref(t)(`shopark.launch.errors.${errorKey.value}`))}</span>`);
              _push2(ssrRenderComponent(_component_UButton, {
                size: "xs",
                variant: "outline",
                class: "rounded-full",
                onClick: retry
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(t)("shopark.launch.retry"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(t)("shopark.launch.retry")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</li>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</ol>`);
            if (!messages.value.length) {
              _push2(`<section class="${ssrRenderClass([ui.card, "space-y-4"])}"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><p class="text-xs font-bold uppercase tracking-wider text-slate-400"${_scopeId}>${ssrInterpolate(unref(t)("shopark.launch.quickPick"))}</p><span class="rounded-full bg-blue-50 px-2.5 py-0.5 text-[11px] font-bold text-blue-600"${_scopeId}>Step 1</span></div><!--[-->`);
              ssrRenderList(chipGroups, (group) => {
                _push2(`<div class="flex flex-wrap items-center gap-2" role="group"${ssrRenderAttr("aria-label", unref(t)(`shopark.launch.${group.key}`))}${_scopeId}><span class="w-16 shrink-0 text-sm font-bold text-slate-700"${_scopeId}>${ssrInterpolate(unref(t)(`shopark.launch.${group.key}`))}</span><!--[-->`);
                ssrRenderList(group.options, (option) => {
                  _push2(`<button type="button" class="${ssrRenderClass([form[group.key] === option ? "border-transparent bg-blue-600 text-white shadow-sm shadow-blue-600/30" : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600", "rounded-full border px-3.5 py-1.5 text-sm font-semibold transition"])}"${ssrRenderAttr("aria-pressed", form[group.key] === option)}${_scopeId}>${ssrInterpolate(unref(t)(`shopark.launch.${group.labels}.${option}`))}</button>`);
                });
                _push2(`<!--]--></div>`);
              });
              _push2(`<!--]--><div class="border-t border-slate-100 pt-3.5"${_scopeId}><p class="text-xs font-semibold text-slate-400 mb-2"${_scopeId}>${ssrInterpolate(blueprintLabels.value.tryPrompts)}</p><div class="flex flex-wrap gap-2"${_scopeId}><!--[-->`);
              ssrRenderList(samplePrompts.value, (sample) => {
                _push2(`<button type="button" class="group inline-flex items-center gap-1.5 rounded-xl border border-slate-200/90 bg-slate-50/80 px-3 py-1.5 text-left text-xs font-medium text-slate-700 transition hover:border-blue-300 hover:bg-blue-50/60 hover:text-blue-700"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:magic-wand-bold",
                  class: "h-3.5 w-3.5 shrink-0 text-blue-500 transition-transform group-hover:rotate-12"
                }, null, _parent2, _scopeId));
                _push2(`<span${_scopeId}>${ssrInterpolate(sample.text)}</span></button>`);
              });
              _push2(`<!--]--></div></div></section>`);
            } else {
              _push2(`<!---->`);
            }
            if (intake.value && !showSplitStudio.value) {
              _push2(`<section class="${ssrRenderClass([ui.card, "space-y-5"])}"${ssrRenderAttr("aria-label", unref(t)("shopark.launch.planTitle"))}${_scopeId}><div class="flex items-center gap-3"${_scopeId}><span class="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:storefront-bold",
                class: "h-5 w-5"
              }, null, _parent2, _scopeId));
              _push2(`</span><div class="min-w-0 flex-1"${_scopeId}><div class="flex items-center justify-between gap-2"${_scopeId}><p class="text-base font-black text-slate-900"${_scopeId}>${ssrInterpolate(unref(t)("shopark.launch.planTitle"))}</p><span class="rounded-full bg-blue-50 px-2.5 py-0.5 text-[11px] font-bold text-blue-600"${_scopeId}>Step 2</span></div><p class="text-xs text-slate-500"${_scopeId}>${ssrInterpolate(intake.value.degraded ? unref(t)("shopark.launch.degraded") : unref(t)("shopark.launch.defaulted"))}</p></div></div>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: unref(t)("shopark.launch.storeName"),
                hint: isDefaulted("storeName") ? unref(t)("shopark.launch.defaultTag") : void 0,
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: brief.storeName,
                      "onUpdate:modelValue": ($event) => brief.storeName = $event,
                      size: "lg",
                      class: "w-full",
                      disabled: locked.value,
                      maxlength: unref(SHOPARK_STORE_NAME_MAX)
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: brief.storeName,
                        "onUpdate:modelValue": ($event) => brief.storeName = $event,
                        size: "lg",
                        class: "w-full",
                        disabled: locked.value,
                        maxlength: unref(SHOPARK_STORE_NAME_MAX)
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "maxlength"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="grid gap-4 sm:grid-cols-3"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: unref(t)("shopark.launch.language"),
                hint: isDefaulted("language") ? unref(t)("shopark.launch.defaultTag") : void 0
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_USelect, {
                      modelValue: brief.language,
                      "onUpdate:modelValue": ($event) => brief.language = $event,
                      size: "lg",
                      class: "w-full",
                      disabled: locked.value,
                      items: languageItems.value
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_USelect, {
                        modelValue: brief.language,
                        "onUpdate:modelValue": ($event) => brief.language = $event,
                        size: "lg",
                        class: "w-full",
                        disabled: locked.value,
                        items: languageItems.value
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "items"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, {
                label: unref(t)("shopark.launch.currency"),
                hint: isDefaulted("currency") ? unref(t)("shopark.launch.defaultTag") : void 0
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_USelect, {
                      modelValue: brief.currency,
                      "onUpdate:modelValue": ($event) => brief.currency = $event,
                      size: "lg",
                      class: "w-full",
                      disabled: locked.value,
                      items: unref(currencyItems)
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_USelect, {
                        modelValue: brief.currency,
                        "onUpdate:modelValue": ($event) => brief.currency = $event,
                        size: "lg",
                        class: "w-full",
                        disabled: locked.value,
                        items: unref(currencyItems)
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "items"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, {
                label: unref(t)("shopark.launch.style")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_USelect, {
                      modelValue: brief.archetype,
                      "onUpdate:modelValue": ($event) => brief.archetype = $event,
                      size: "lg",
                      class: "w-full",
                      disabled: locked.value,
                      items: styleItems.value
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_USelect, {
                        modelValue: brief.archetype,
                        "onUpdate:modelValue": ($event) => brief.archetype = $event,
                        size: "lg",
                        class: "w-full",
                        disabled: locked.value,
                        items: styleItems.value
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "items"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
              if (stage.value === "plan") {
                _push2(`<button type="button" class="${ssrRenderClass(ui.cta)}"${ssrIncludeBooleanAttr(busy.value || !nameValid.value) ? " disabled" : ""}${_scopeId}>${ssrInterpolate(unref(t)("shopark.launch.start"))}`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:arrow-right-bold",
                  class: "h-5 w-5"
                }, null, _parent2, _scopeId));
                _push2(`</button>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</section>`);
            } else {
              _push2(`<!---->`);
            }
            if (stage.value === "login") {
              _push2(`<section class="${ssrRenderClass([ui.card, "space-y-4 border border-blue-100 bg-gradient-to-br from-blue-50/60 via-white to-indigo-50/40"])}"${_scopeId}><div class="flex flex-wrap items-center justify-between gap-3"${_scopeId}><div class="flex items-center gap-3"${_scopeId}><span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/25"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:envelope-simple-open-bold",
                class: "h-5 w-5"
              }, null, _parent2, _scopeId));
              _push2(`</span><div${_scopeId}><p class="text-sm font-black text-slate-900"${_scopeId}>${ssrInterpolate(authLabels.value.cardTitle)}</p><p class="text-xs text-slate-500"${_scopeId}>${ssrInterpolate(authLabels.value.cardSubtitle)}</p></div></div><button type="button" class="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2.5 text-xs font-extrabold text-white shadow-md shadow-blue-600/25 transition hover:brightness-110"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:lightning-fill",
                class: "h-4 w-4"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>${ssrInterpolate(authLabels.value.openOverlayBtn)}</span></button></div></section>`);
            } else {
              _push2(`<!---->`);
            }
            if (stage.value === "stores") {
              _push2(`<section class="${ssrRenderClass([ui.card, "space-y-4"])}"${ssrRenderAttr("aria-label", unref(t)("shopark.launch.storeTitle"))}${_scopeId}><div class="flex items-center justify-between gap-2"${_scopeId}><p class="text-base font-black text-slate-900"${_scopeId}>${ssrInterpolate(unref(t)("shopark.launch.storeTitle"))}</p><div class="flex items-center gap-2"${_scopeId}>`);
              if (storeQuota.value) {
                _push2(`<span class="${ssrRenderClass([canCreate.value ? "bg-emerald-50 text-emerald-700" : "bg-amber-100 text-amber-800", "rounded-full px-2.5 py-0.5 font-mono text-[11px] font-bold"])}"${_scopeId}>${ssrInterpolate(quotaLabels.value.quotaBadge)} ${ssrInterpolate(storeQuota.value.owned)}/${ssrInterpolate(Math.min(storeQuota.value.planMaxStores || 1, storeQuota.value.platformMaxStores || 99))}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<span class="rounded-full bg-blue-50 px-2.5 py-0.5 text-[11px] font-bold text-blue-600"${_scopeId}>Step 3</span></div></div>`);
              if (storesLoading.value) {
                _push2(`<p class="text-sm text-slate-500"${_scopeId}>${ssrInterpolate(unref(t)("shopark.launch.loadingStores"))}</p>`);
              } else {
                _push2(`<!--[-->`);
                if (!canCreate.value) {
                  _push2(`<div class="space-y-3 rounded-2xl border border-amber-200/90 bg-gradient-to-br from-amber-50/90 via-white to-orange-50/50 p-4 shadow-2xs"${_scopeId}><div class="flex items-start gap-3"${_scopeId}><span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-white shadow-sm shadow-amber-500/25"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: "ph:crown-simple-fill",
                    class: "h-5 w-5"
                  }, null, _parent2, _scopeId));
                  _push2(`</span><div class="min-w-0 flex-1"${_scopeId}><p class="text-sm font-black text-slate-900"${_scopeId}>${ssrInterpolate(quotaLabels.value.bannerTitle)}</p><p class="mt-0.5 text-xs leading-relaxed text-slate-600"${_scopeId}>${ssrInterpolate(usableStores.value.length ? quotaLabels.value.bannerDescWithStores : quotaLabels.value.bannerDescNoStores)}</p></div></div><div class="flex flex-wrap items-center gap-2 pt-0.5"${_scopeId}><button type="button" class="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-2 text-xs font-extrabold text-white shadow-sm shadow-amber-500/25 transition hover:brightness-105"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: "ph:sparkle-fill",
                    class: "h-3.5 w-3.5"
                  }, null, _parent2, _scopeId));
                  _push2(`<span${_scopeId}>${ssrInterpolate(quotaLabels.value.openPlanModalBtn)}</span></button>`);
                  if (usableStores.value.length) {
                    _push2(`<button type="button" class="inline-flex items-center gap-1.5 rounded-xl border border-blue-200 bg-blue-50/80 px-3.5 py-2 text-xs font-bold text-blue-700 transition hover:bg-blue-100"${_scopeId}>`);
                    _push2(ssrRenderComponent(_component_UIcon, {
                      name: "ph:storefront-bold",
                      class: "h-3.5 w-3.5"
                    }, null, _parent2, _scopeId));
                    _push2(`<span${_scopeId}>${ssrInterpolate(quotaLabels.value.pickExistingBtn)}\uFF08${ssrInterpolate((_b = usableStores.value[0]) == null ? void 0 : _b.name)}\uFF09</span></button>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`<button type="button" class="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"${_scopeId}><span${_scopeId}>${ssrInterpolate(quotaLabels.value.goSubscriptionPageBtn)}</span>`);
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: "ph:arrow-up-right-bold",
                    class: "h-3 w-3"
                  }, null, _parent2, _scopeId));
                  _push2(`</button></div></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<div role="radiogroup" class="space-y-2.5"${_scopeId}><button type="button" role="radio"${ssrRenderAttr("aria-checked", choice.value === "new")}${ssrIncludeBooleanAttr(!canCreate.value) ? " disabled" : ""} class="${ssrRenderClass([ui.option, choice.value === "new" ? ui.optionOn : ""])}"${_scopeId}><span class="flex items-center gap-2 font-bold text-slate-900"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:plus-circle-bold",
                  class: "h-5 w-5 text-blue-600"
                }, null, _parent2, _scopeId));
                _push2(`<span${_scopeId}>${ssrInterpolate(unref(t)("shopark.launch.newStore"))}</span>`);
                if (!canCreate.value) {
                  _push2(`<span class="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-800"${_scopeId}>${ssrInterpolate(quotaLabels.value.slotFullTag)}</span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</span><span class="truncate pl-3 text-slate-500"${_scopeId}>${ssrInterpolate(brief.storeName)}</span></button>`);
                if (usableStores.value.length) {
                  _push2(`<div class="pt-1"${_scopeId}><p class="mb-2 text-xs font-bold text-slate-500"${_scopeId}>${ssrInterpolate(quotaLabels.value.existingListHeader)}\uFF08${ssrInterpolate(usableStores.value.length)}\uFF09</p><div class="space-y-2"${_scopeId}><!--[-->`);
                  ssrRenderList(usableStores.value, (store) => {
                    _push2(`<button type="button" role="radio"${ssrRenderAttr("aria-checked", choice.value === store.id)} class="${ssrRenderClass([ui.option, choice.value === store.id ? ui.optionOn : ""])}"${_scopeId}><div class="flex min-w-0 items-center gap-2"${_scopeId}>`);
                    _push2(ssrRenderComponent(_component_UIcon, {
                      name: "ph:storefront-bold",
                      class: ["h-5 w-5 shrink-0", choice.value === store.id ? "text-blue-600" : "text-slate-400"]
                    }, null, _parent2, _scopeId));
                    _push2(`<span class="truncate font-bold text-slate-900"${_scopeId}>${ssrInterpolate(store.name)}</span><span class="${ssrRenderClass([storeBadgeClass(store), "shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold"])}"${_scopeId}>${ssrInterpolate(storeBadgeText(store))}</span></div><span class="truncate pl-3 font-mono text-xs text-slate-500"${_scopeId}>${ssrInterpolate(store.domain)}</span></button>`);
                  });
                  _push2(`<!--]--></div></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
                if (choice.value === "new" && !categoryId.value) {
                  _push2(ssrRenderComponent(_component_UFormField, {
                    label: unref(t)("shopark.launch.category"),
                    required: ""
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(_component_USelect, {
                          modelValue: categoryId.value,
                          "onUpdate:modelValue": ($event) => categoryId.value = $event,
                          size: "lg",
                          class: "w-full",
                          items: categoryItems.value
                        }, null, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(_component_USelect, {
                            modelValue: categoryId.value,
                            "onUpdate:modelValue": ($event) => categoryId.value = $event,
                            size: "lg",
                            class: "w-full",
                            items: categoryItems.value
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                } else if (choice.value && choice.value !== "new") {
                  _push2(`<div class="space-y-2 rounded-xl bg-amber-50 p-4 text-sm text-amber-800"${_scopeId}><p${_scopeId}>${ssrInterpolate(unref(t)("shopark.launch.existingHint"))}</p>`);
                  _push2(ssrRenderComponent(_component_UCheckbox, {
                    modelValue: scope.storeSetup,
                    "onUpdate:modelValue": ($event) => scope.storeSetup = $event,
                    label: unref(t)("shopark.launch.updateSetup")
                  }, null, _parent2, _scopeId));
                  _push2(ssrRenderComponent(_component_UCheckbox, {
                    modelValue: scope.policies,
                    "onUpdate:modelValue": ($event) => scope.policies = $event,
                    label: unref(t)("shopark.launch.addPolicies")
                  }, null, _parent2, _scopeId));
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<button type="button" class="${ssrRenderClass(ui.cta)}"${ssrIncludeBooleanAttr(busy.value || !choice.value || choice.value === "new" && !categoryId.value) ? " disabled" : ""}${_scopeId}>${ssrInterpolate(choice.value && choice.value !== "new" ? quotaLabels.value.launchWithExistingBtn : unref(t)("shopark.launch.start"))} `);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:arrow-right-bold",
                  class: "h-5 w-5"
                }, null, _parent2, _scopeId));
                _push2(`</button><!--]-->`);
              }
              _push2(`</section>`);
            } else {
              _push2(`<!---->`);
            }
            if (stage.value === "starting") {
              _push2(`<p class="flex items-center justify-center gap-2 py-2 text-sm font-semibold text-slate-500" role="status"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:circle-notch-bold",
                class: "h-5 w-5 motion-safe:animate-spin"
              }, null, _parent2, _scopeId));
              _push2(`${ssrInterpolate(unref(t)("shopark.launch.starting"))}</p>`);
            } else {
              _push2(`<!---->`);
            }
            if (stage.value === "building" || stage.value === "done") {
              _push2(`<section class="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200/70 space-y-4" role="status" aria-live="polite"${_scopeId}><div class="flex items-start gap-3"${_scopeId}><span class="${ssrRenderClass([stage.value === "done" ? "bg-emerald-50 text-emerald-600" : "bg-blue-50 text-blue-600", "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"])}"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: stage.value === "done" ? "ph:check-circle-fill" : "ph:circle-notch-bold",
                class: ["h-5 w-5", stage.value === "building" ? "motion-safe:animate-spin" : ""]
              }, null, _parent2, _scopeId));
              _push2(`</span><div class="min-w-0 flex-1"${_scopeId}><div class="flex flex-wrap items-center gap-2"${_scopeId}><p class="text-sm font-black text-slate-900"${_scopeId}>${ssrInterpolate(stage.value === "done" ? unref(t)("shopark.launch.doneTitle") : unref(t)("shopark.launch.buildingTitle"))}</p>`);
              if (activeDomain.value) {
                _push2(`<span class="rounded-full bg-slate-100 px-2 py-0.5 font-mono text-[11px] text-slate-600"${_scopeId}>${ssrInterpolate(activeDomain.value)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><p class="mt-0.5 text-xs text-slate-500"${_scopeId}>${ssrInterpolate(stage.value === "done" ? blueprintLabels.value.inPlaceReadySubtitle : unref(t)("shopark.launch.buildingSubtitle"))}</p></div></div><div class="h-1.5 w-full overflow-hidden rounded-full bg-slate-100"${_scopeId}><div class="${ssrRenderClass([stage.value === "done" ? "bg-emerald-500" : "bg-gradient-to-r from-blue-600 to-indigo-600", "h-full rounded-full transition-all duration-500"])}" style="${ssrRenderStyle({ width: `${buildProgressPercent.value}%` })}"${_scopeId}></div></div><ul class="grid grid-cols-2 gap-1.5 rounded-xl bg-slate-50/80 p-2.5 text-xs"${_scopeId}><!--[-->`);
              ssrRenderList(buildSteps.value, (item) => {
                _push2(`<li class="flex items-center gap-2"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: item.state === "done" ? "ph:check-circle-fill" : item.state === "running" ? "ph:circle-notch-bold" : item.state === "failed" ? "ph:warning-circle-fill" : "ph:circle-dashed",
                  class: ["h-3.5 w-3.5 shrink-0", item.state === "done" ? "text-emerald-500" : item.state === "running" ? "text-blue-600 motion-safe:animate-spin" : item.state === "failed" ? "text-amber-500" : "text-slate-300"]
                }, null, _parent2, _scopeId));
                _push2(`<span class="${ssrRenderClass([item.state === "done" ? "font-semibold text-slate-800" : item.state === "running" ? "font-semibold text-blue-700" : "text-slate-500", "truncate"])}"${_scopeId}>${ssrInterpolate(item.label)}</span></li>`);
              });
              _push2(`<!--]--></ul>`);
              if (launchTarget.value) {
                _push2(`<div class="space-y-2.5 rounded-xl border border-indigo-100 bg-gradient-to-b from-indigo-50/50 to-white p-3"${_scopeId}><div class="flex items-center justify-between gap-2"${_scopeId}><span class="inline-flex items-center gap-1.5 text-xs font-extrabold text-indigo-950"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:magic-wand-fill",
                  class: "h-3.5 w-3.5 text-indigo-600"
                }, null, _parent2, _scopeId));
                _push2(`<span${_scopeId}>${ssrInterpolate(blueprintLabels.value.mcpConsoleTitle)}</span></span><div class="inline-flex rounded-lg bg-slate-100 p-0.5 text-[11px] font-bold"${_scopeId}><!--[-->`);
                ssrRenderList(mcpActionTabs.value, (tab) => {
                  _push2(`<button type="button" class="${ssrRenderClass([activeMcpTab.value === tab.key ? "bg-white text-indigo-600 shadow-2xs" : "text-slate-500 hover:text-slate-800", "rounded-md px-2 py-0.5 transition"])}"${_scopeId}>${ssrInterpolate(tab.label)}</button>`);
                });
                _push2(`<!--]--></div></div><div class="flex flex-wrap gap-1.5"${_scopeId}><!--[-->`);
                ssrRenderList(activeMcpChips.value, (chip) => {
                  _push2(`<button type="button"${ssrIncludeBooleanAttr(copilotBusy.value) ? " disabled" : ""} class="inline-flex items-center gap-1 rounded-full border border-indigo-200/80 bg-white px-2.5 py-1 text-xs font-medium text-indigo-800 shadow-2xs transition hover:border-indigo-400 hover:bg-indigo-50 disabled:opacity-50"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: chip.icon,
                    class: "h-3 w-3 text-indigo-500"
                  }, null, _parent2, _scopeId));
                  _push2(`<span${_scopeId}>${ssrInterpolate(chip.label)}</span></button>`);
                });
                _push2(`<!--]--></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (launchTarget.value) {
                _push2(`<div class="flex flex-wrap items-center gap-2 pt-0.5"${_scopeId}><a${ssrRenderAttr("href", launchTarget.value.url)} class="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-700 transition hover:border-blue-300 hover:text-blue-600"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:corners-out-bold",
                  class: "h-3.5 w-3.5"
                }, null, _parent2, _scopeId));
                _push2(`<span${_scopeId}>${ssrInterpolate(unref(t)("shopark.launch.previewAndPublish"))}</span></a>`);
                if (launchTarget.value.dashboardUrl) {
                  _push2(`<a${ssrRenderAttr("href", launchTarget.value.dashboardUrl)} class="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: "ph:squares-four-bold",
                    class: "h-3.5 w-3.5"
                  }, null, _parent2, _scopeId));
                  _push2(`<span${_scopeId}>${ssrInterpolate(unref(t)("shopark.launch.openDashboard"))}</span></a>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</section>`);
            } else {
              _push2(`<!---->`);
            }
            if (errorKey.value && (intake.value || !messages.value.length)) {
              _push2(`<p class="text-center text-sm text-red-600" aria-live="polite"${_scopeId}>${ssrInterpolate(unref(t)(`shopark.launch.errors.${errorKey.value}`))}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><footer class="shrink-0 border-t border-slate-200/70 bg-white px-4 py-3 sm:px-6" style="${ssrRenderStyle(!showSplitStudio.value || mobilePane.value === "chat" ? null : { display: "none" })}"${_scopeId}>`);
            if (canType.value) {
              _push2(`<form class="mx-auto flex w-full max-w-3xl items-end gap-2 rounded-2xl bg-slate-50 p-1.5 ring-1 ring-slate-200 transition focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-500 focus-within:shadow-lg focus-within:shadow-blue-600/5"${_scopeId}><textarea rows="1"${ssrRenderAttr("maxlength", MESSAGE_MAX)}${ssrIncludeBooleanAttr(busy.value || copilotBusy.value) ? " disabled" : ""} class="max-h-28 min-h-[40px] flex-1 resize-none bg-transparent px-3 py-2 text-sm leading-6 text-slate-900 outline-none placeholder:text-slate-400"${ssrRenderAttr("aria-label", unref(t)("shopark.launch.inputLabel"))}${ssrRenderAttr("placeholder", isLiveStudioStage.value ? blueprintLabels.value.mcpInputPlaceholder : messages.value.length ? unref(t)("shopark.launch.followUpPlaceholder") : unref(t)("shopark.launch.offeringPlaceholder"))}${_scopeId}>${ssrInterpolate(draft.value)}</textarea><button type="submit"${ssrIncludeBooleanAttr(busy.value || copilotBusy.value || !draft.value.trim()) ? " disabled" : ""}${ssrRenderAttr("aria-label", unref(t)("shopark.launch.send"))} class="flex h-10 shrink-0 items-center justify-center gap-1.5 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 px-4 text-xs font-bold text-white shadow-md shadow-blue-600/30 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none sm:text-sm"${_scopeId}><span${_scopeId}>${ssrInterpolate(unref(t)("shopark.launch.send"))}</span>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:paper-plane-tilt-fill",
                class: "h-3.5 w-3.5"
              }, null, _parent2, _scopeId));
              _push2(`</button></form>`);
            } else {
              _push2(`<p class="mx-auto max-w-3xl py-2 text-center text-xs text-slate-400"${_scopeId}>${ssrInterpolate(intake.value && !unref(loggedIn) && stage.value === "plan" ? unref(t)("shopark.launch.loginToFollowUp") : unref(t)("shopark.launch.composerDone"))}</p>`);
            }
            _push2(`</footer></div>`);
            if (showSplitStudio.value) {
              _push2(`<section class="${ssrRenderClass([mobilePane.value === "preview" ? "flex" : "hidden lg:flex", "min-h-0 min-w-0 flex-1 flex-col bg-slate-900/95"])}" style="${ssrRenderStyle(mobilePane.value === "preview" || true ? null : { display: "none" })}"${_scopeId}><div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 bg-slate-950 px-4 py-2.5 text-xs text-slate-200"${_scopeId}><div class="flex min-w-0 items-center gap-2"${_scopeId}><button type="button" class="hidden lg:inline-flex items-center gap-1 rounded-lg border border-slate-800 bg-slate-900 px-2 py-1 text-[11px] font-semibold text-slate-300 transition hover:border-slate-700 hover:text-white"${ssrRenderAttr("title", chatCollapsed.value ? blueprintLabels.value.expandChat : blueprintLabels.value.collapseChat)}${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: chatCollapsed.value ? "ph:sidebar-simple-fill" : "ph:sidebar-simple-bold",
                class: "h-3.5 w-3.5 text-cyan-400"
              }, null, _parent2, _scopeId));
              if (chatCollapsed.value) {
                _push2(`<span${_scopeId}>${ssrInterpolate(blueprintLabels.value.expandChat)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</button><div class="flex items-center gap-1.5 shrink-0"${_scopeId}><span class="h-2.5 w-2.5 rounded-full bg-rose-500/80"${_scopeId}></span><span class="h-2.5 w-2.5 rounded-full bg-amber-400/80"${_scopeId}></span><span class="h-2.5 w-2.5 rounded-full bg-emerald-400/80"${_scopeId}></span></div><div class="flex min-w-0 items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1 font-mono text-[11px] text-slate-300"${_scopeId}><span class="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400 animate-pulse"${_scopeId}></span><span class="truncate"${_scopeId}>${ssrInterpolate(activeDomain.value || `store-${(_c = launchTarget.value) == null ? void 0 : _c.storeId}`)}${ssrInterpolate(canvasViewMode.value === "decor" ? "/ai-decor" : previewRoutePath.value)}</span></div>`);
              if ((_d = launchTarget.value) == null ? void 0 : _d.url) {
                _push2(`<div class="inline-flex items-center rounded-lg border border-slate-800 bg-slate-900 p-0.5"${_scopeId}><button type="button" class="${ssrRenderClass([canvasViewMode.value === "preview" ? "bg-blue-600 text-white shadow-2xs" : "text-slate-400 hover:text-white", "inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-[11px] font-semibold transition"])}"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:eye-bold",
                  class: "h-3.5 w-3.5"
                }, null, _parent2, _scopeId));
                _push2(`<span${_scopeId}>${ssrInterpolate(blueprintLabels.value.modePreview)}</span></button><button type="button" class="${ssrRenderClass([canvasViewMode.value === "decor" ? "bg-indigo-600 text-white shadow-2xs" : "text-slate-400 hover:text-white", "inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-[11px] font-semibold transition"])}"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:paint-brush-broad-bold",
                  class: "h-3.5 w-3.5"
                }, null, _parent2, _scopeId));
                _push2(`<span${_scopeId}>${ssrInterpolate(blueprintLabels.value.modeVisualDecor)}</span></button></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (canvasViewMode.value === "preview") {
                _push2(`<div class="hidden xl:flex items-center gap-1 rounded-lg bg-slate-900 p-0.5"${_scopeId}><!--[-->`);
                ssrRenderList(previewRoutes.value, (rt) => {
                  _push2(`<button type="button" class="${ssrRenderClass([previewRoutePath.value === rt.path ? "bg-blue-600 text-white shadow-2xs" : "text-slate-400 hover:text-white", "rounded-md px-2.5 py-1 text-[11px] font-semibold transition"])}"${_scopeId}>${ssrInterpolate(rt.label)}</button>`);
                });
                _push2(`<!--]--></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="flex items-center gap-1.5"${_scopeId}>`);
              if (canvasViewMode.value === "preview") {
                _push2(`<div class="inline-flex rounded-lg border border-slate-800 bg-slate-900 p-0.5"${_scopeId}><button type="button" class="${ssrRenderClass([previewViewport.value === "desktop" ? "bg-slate-800 text-white" : "text-slate-400 hover:text-white", "inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11px] font-semibold transition"])}"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:desktop-bold",
                  class: "h-3.5 w-3.5"
                }, null, _parent2, _scopeId));
                _push2(`<span class="hidden sm:inline"${_scopeId}>${ssrInterpolate(blueprintLabels.value.desktop)}</span></button><button type="button" class="${ssrRenderClass([previewViewport.value === "mobile" ? "bg-slate-800 text-white" : "text-slate-400 hover:text-white", "inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11px] font-semibold transition"])}"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:device-mobile-bold",
                  class: "h-3.5 w-3.5"
                }, null, _parent2, _scopeId));
                _push2(`<span class="hidden sm:inline"${_scopeId}>${ssrInterpolate(blueprintLabels.value.mobile)}</span></button></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<button type="button" class="inline-flex items-center gap-1 rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-[11px] font-semibold text-slate-300 transition hover:border-slate-700 hover:text-white"${ssrRenderAttr("title", blueprintLabels.value.refreshCanvas)}${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:arrows-clockwise-bold",
                class: ["h-3.5 w-3.5", iframeLoading.value ? "animate-spin text-cyan-400" : ""]
              }, null, _parent2, _scopeId));
              _push2(`<span class="hidden md:inline"${_scopeId}>${ssrInterpolate(blueprintLabels.value.refreshCanvas)}</span></button><button type="button" class="inline-flex items-center gap-1 rounded-lg bg-emerald-600 px-3 py-1.5 text-[11px] font-extrabold text-white shadow-sm shadow-emerald-600/30 transition hover:bg-emerald-500 disabled:opacity-50"${ssrIncludeBooleanAttr(publishingNow.value) ? " disabled" : ""}${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: justPublished.value ? "ph:check-bold" : "ph:rocket-launch-bold",
                class: "h-3.5 w-3.5"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>${ssrInterpolate(justPublished.value ? blueprintLabels.value.publishedBadge : blueprintLabels.value.publishNow)}</span></button>`);
              if (currentPreviewUrl.value) {
                _push2(`<a${ssrRenderAttr("href", currentPreviewUrl.value)} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-[11px] font-semibold text-slate-300 transition hover:border-slate-700 hover:text-white"${ssrRenderAttr("title", blueprintLabels.value.openNewTab)}${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:arrow-square-out-bold",
                  class: "h-3.5 w-3.5"
                }, null, _parent2, _scopeId));
                _push2(`</a>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<button type="button" class="${ssrRenderClass([isFullscreen.value && chatCollapsed.value ? "border-cyan-400/50 bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30" : "border-slate-800 bg-slate-900 text-slate-300 hover:border-slate-700 hover:text-white", "hidden lg:inline-flex items-center gap-1 rounded-lg border px-2.5 py-1.5 text-[11px] font-bold transition"])}"${ssrRenderAttr("title", isFullscreen.value && chatCollapsed.value ? blueprintLabels.value.exitFullscreen : blueprintLabels.value.enterFullscreen)}${ssrRenderAttr("aria-label", isFullscreen.value && chatCollapsed.value ? blueprintLabels.value.exitFullscreen : blueprintLabels.value.enterFullscreen)}${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: isFullscreen.value && chatCollapsed.value ? "ph:corners-in-bold" : "ph:corners-out-bold",
                class: "h-3.5 w-3.5"
              }, null, _parent2, _scopeId));
              _push2(`<span class="hidden 2xl:inline"${_scopeId}>${ssrInterpolate(isFullscreen.value && chatCollapsed.value ? blueprintLabels.value.exitFullscreen : blueprintLabels.value.enterFullscreen)}</span></button>`);
              _push2(ssrRenderComponent(_component_UButton, {
                color: "neutral",
                variant: "ghost",
                icon: "ph:x-bold",
                class: "hidden lg:inline-flex shrink-0 rounded-full text-slate-400 hover:bg-slate-800 hover:text-white",
                "aria-label": unref(t)("shopark.nav.closeMenu"),
                onClick: ($event) => open.value = false
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
              if (canvasViewMode.value === "preview") {
                _push2(`<div class="flex items-center gap-1.5 border-b border-slate-800/80 bg-slate-900 px-4 py-1.5 xl:hidden overflow-x-auto"${_scopeId}><!--[-->`);
                ssrRenderList(previewRoutes.value, (rt) => {
                  _push2(`<button type="button" class="${ssrRenderClass([previewRoutePath.value === rt.path ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white", "shrink-0 rounded-md px-2.5 py-1 text-[11px] font-semibold transition"])}"${_scopeId}>${ssrInterpolate(rt.label)}</button>`);
                });
                _push2(`<!--]--></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="${ssrRenderClass([isFullscreen.value && chatCollapsed.value || canvasViewMode.value === "decor" ? "p-0" : "p-3 sm:p-5", "relative flex min-h-0 flex-1 items-center justify-center overflow-hidden transition-all duration-200"])}"${_scopeId}><div class="${ssrRenderClass([previewViewport.value === "mobile" && canvasViewMode.value === "preview" ? "w-[390px] max-w-full rounded-[32px] border-[6px] border-slate-800 ring-1 ring-white/10" : isFullscreen.value && chatCollapsed.value || canvasViewMode.value === "decor" ? "w-full border-0 rounded-none" : "w-full rounded-2xl border border-slate-800", "relative h-full overflow-hidden bg-white shadow-2xl transition-all duration-300"])}"${_scopeId}>`);
              if (iframeLoading.value || copilotBusy.value) {
                _push2(`<div class="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600/95 via-indigo-600/95 to-blue-600/95 py-1.5 text-xs font-bold text-white shadow-md backdrop-blur-sm"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:circle-notch-bold",
                  class: "h-3.5 w-3.5 animate-spin"
                }, null, _parent2, _scopeId));
                _push2(`<span${_scopeId}>${ssrInterpolate(copilotBusy.value ? blueprintLabels.value.mcpRunning : blueprintLabels.value.syncingCanvas)}</span></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (activeCanvasUrl.value) {
                _push2(`<iframe${ssrRenderAttr("src", activeCanvasUrl.value)} class="h-full w-full border-0 bg-white" title="Shopark Live Storefront &amp; Decor Studio"${_scopeId}></iframe>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
              if (chatCollapsed.value) {
                _push2(`<button type="button" class="fixed bottom-5 left-5 z-30 inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-slate-950/90 px-4 py-2.5 text-xs font-extrabold text-white shadow-2xl ring-1 ring-white/15 backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-blue-600"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:sparkle-fill",
                  class: "h-4 w-4 text-cyan-300 animate-pulse"
                }, null, _parent2, _scopeId));
                _push2(`<span${_scopeId}>${ssrInterpolate(blueprintLabels.value.expandChat)}</span></button>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></section>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (stage.value === "login" && authOverlayOpen.value) {
              _push2(`<div class="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm" role="dialog" aria-modal="true"${ssrRenderAttr("aria-label", authLabels.value.modalTitle)}${_scopeId}><div class="relative w-full max-w-md overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-2xl ring-1 ring-slate-900/10"${_scopeId}><div class="relative bg-gradient-to-br from-slate-950 via-[#0f2152] to-indigo-950 px-6 py-5 text-white"${_scopeId}><button type="button" class="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-slate-300 transition hover:bg-white/20 hover:text-white"${ssrRenderAttr("aria-label", unref(t)("shopark.nav.closeMenu"))}${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:x-bold",
                class: "h-4 w-4"
              }, null, _parent2, _scopeId));
              _push2(`</button><div class="flex items-center gap-3"${_scopeId}><span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 text-slate-950 shadow-lg shadow-blue-500/30"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:envelope-simple-open-fill",
                class: "h-6 w-6"
              }, null, _parent2, _scopeId));
              _push2(`</span><div${_scopeId}><div class="inline-flex items-center gap-1 rounded-full bg-cyan-400/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-cyan-300 ring-1 ring-cyan-400/30"${_scopeId}>${ssrInterpolate(authLabels.value.badge)}</div><h3 class="mt-1 text-base font-black tracking-tight text-white"${_scopeId}>${ssrInterpolate(authLabels.value.modalTitle)}</h3></div></div><p class="mt-2 text-xs leading-relaxed text-slate-300"${_scopeId}>${ssrInterpolate(authLabels.value.modalSubtitle)}</p></div><div class="p-6 space-y-4"${_scopeId}><div class="grid grid-cols-2 rounded-xl bg-slate-100 p-1 text-xs font-bold"${_scopeId}><button type="button" class="${ssrRenderClass([authMode.value === "otp" ? "bg-white text-blue-600 shadow-2xs" : "text-slate-500 hover:text-slate-800", "flex items-center justify-center gap-1.5 rounded-lg py-2 transition"])}"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:paper-plane-tilt-bold",
                class: "h-3.5 w-3.5"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>${ssrInterpolate(authLabels.value.tabOtp)}</span></button><button type="button" class="${ssrRenderClass([authMode.value === "password" ? "bg-white text-blue-600 shadow-2xs" : "text-slate-500 hover:text-slate-800", "flex items-center justify-center gap-1.5 rounded-lg py-2 transition"])}"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:key-bold",
                class: "h-3.5 w-3.5"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>${ssrInterpolate(authLabels.value.tabPassword)}</span></button></div>`);
              if (authMode.value === "otp") {
                _push2(`<form class="space-y-3.5"${_scopeId}><div${_scopeId}><label class="mb-1 block text-xs font-bold text-slate-700"${_scopeId}>${ssrInterpolate(authLabels.value.emailLabel)}</label><div class="flex gap-2"${_scopeId}><input${ssrRenderAttr("value", authForm.email)} type="email" required autocomplete="email"${ssrRenderAttr("placeholder", authLabels.value.emailPlaceholder)} class="h-11 min-w-0 flex-1 rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20"${_scopeId}><button type="button"${ssrIncludeBooleanAttr(otpSending.value || otpCooldown.value > 0 || !authForm.email.trim()) ? " disabled" : ""} class="shrink-0 rounded-xl border border-blue-200 bg-blue-50 px-3.5 text-xs font-extrabold text-blue-700 transition hover:bg-blue-100 disabled:cursor-not-allowed disabled:opacity-50"${_scopeId}>`);
                if (otpSending.value) {
                  _push2(`<span${_scopeId}>${ssrInterpolate(authLabels.value.sendingCode)}</span>`);
                } else if (otpCooldown.value > 0) {
                  _push2(`<span${_scopeId}>${ssrInterpolate(otpCooldown.value)}s</span>`);
                } else {
                  _push2(`<span${_scopeId}>${ssrInterpolate(otpSentOnce.value ? authLabels.value.resendCode : authLabels.value.sendCode)}</span>`);
                }
                _push2(`</button></div></div><div${_scopeId}><div class="mb-1 flex items-center justify-between"${_scopeId}><label class="text-xs font-bold text-slate-700"${_scopeId}>${ssrInterpolate(authLabels.value.codeLabel)}</label>`);
                if (otpSentOnce.value) {
                  _push2(`<span class="text-[11px] font-medium text-emerald-600"${_scopeId}>${ssrInterpolate(authLabels.value.codeSentHint)}</span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><input${ssrRenderAttr("value", authForm.code)} type="text" inputmode="numeric" maxlength="6"${ssrRenderAttr("placeholder", authLabels.value.codePlaceholder)} class="h-11 w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 font-mono text-base font-bold tracking-[0.35em] text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20"${_scopeId}></div>`);
                if (otpDevCode.value) {
                  _push2(`<div class="flex items-center justify-between gap-2 rounded-xl border border-emerald-200 bg-emerald-50/90 px-3.5 py-2.5 text-xs text-emerald-900"${_scopeId}><div class="flex items-center gap-2"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: "ph:sparkle-fill",
                    class: "h-4 w-4 shrink-0 text-emerald-600"
                  }, null, _parent2, _scopeId));
                  _push2(`<span${_scopeId}>${ssrInterpolate(authLabels.value.devCodePrefix)}<strong class="font-mono text-sm font-black tracking-wider text-emerald-700"${_scopeId}>${ssrInterpolate(otpDevCode.value)}</strong></span></div><button type="button" class="shrink-0 rounded-lg bg-emerald-600 px-2.5 py-1 text-[11px] font-bold text-white shadow-2xs transition hover:bg-emerald-500"${_scopeId}>${ssrInterpolate(authLabels.value.devCodeFillBtn)}</button></div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (authError.value) {
                  _push2(`<p class="rounded-xl bg-rose-50 px-3 py-2 text-xs font-semibold text-rose-600" role="alert"${_scopeId}>${ssrInterpolate(authError.value)}</p>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<button type="submit"${ssrIncludeBooleanAttr(authSubmitting.value || !authForm.email.trim() || authForm.code.trim().length < 6) ? " disabled" : ""} class="${ssrRenderClass(ui.cta)}"${_scopeId}>`);
                if (authSubmitting.value) {
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: "ph:circle-notch-bold",
                    class: "h-5 w-5 animate-spin"
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<span${_scopeId}>${ssrInterpolate(authLabels.value.verifyAndBuildBtn)}</span>`);
                if (!authSubmitting.value) {
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: "ph:arrow-right-bold",
                    class: "h-5 w-5"
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</button></form>`);
              } else {
                _push2(`<form class="space-y-3.5"${_scopeId}><div${_scopeId}><label class="mb-1 block text-xs font-bold text-slate-700"${_scopeId}>${ssrInterpolate(authLabels.value.emailLabel)}</label><input${ssrRenderAttr("value", authForm.email)} type="email" required autocomplete="email"${ssrRenderAttr("placeholder", authLabels.value.emailPlaceholder)} class="h-11 w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20"${_scopeId}></div><div${_scopeId}><label class="mb-1 block text-xs font-bold text-slate-700"${_scopeId}>${ssrInterpolate(authLabels.value.passwordLabel)}</label><input${ssrRenderAttr("value", authForm.password)} type="password" required autocomplete="current-password"${ssrRenderAttr("placeholder", authLabels.value.passwordPlaceholder)} class="h-11 w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20"${_scopeId}></div>`);
                if (authError.value) {
                  _push2(`<p class="rounded-xl bg-rose-50 px-3 py-2 text-xs font-semibold text-rose-600" role="alert"${_scopeId}>${ssrInterpolate(authError.value)}</p>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<button type="submit"${ssrIncludeBooleanAttr(authSubmitting.value || !authForm.email.trim() || !authForm.password) ? " disabled" : ""} class="${ssrRenderClass(ui.cta)}"${_scopeId}>`);
                if (authSubmitting.value) {
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: "ph:circle-notch-bold",
                    class: "h-5 w-5 animate-spin"
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<span${_scopeId}>${ssrInterpolate(authLabels.value.passwordAndBuildBtn)}</span>`);
                if (!authSubmitting.value) {
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: "ph:arrow-right-bold",
                    class: "h-5 w-5"
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</button></form>`);
              }
              _push2(`</div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (planOverlayOpen.value) {
              _push2(`<div class="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/65 p-4 backdrop-blur-sm" role="dialog" aria-modal="true"${ssrRenderAttr("aria-label", quotaLabels.value.modalTitle)}${_scopeId}><div class="relative flex max-h-[90dvh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-2xl ring-1 ring-slate-900/10"${_scopeId}><div class="relative shrink-0 bg-gradient-to-br from-slate-950 via-[#0f2152] to-indigo-950 px-6 py-5 text-white"${_scopeId}><button type="button" class="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-slate-300 transition hover:bg-white/20 hover:text-white"${ssrRenderAttr("aria-label", unref(t)("shopark.nav.closeMenu"))}${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:x-bold",
                class: "h-4 w-4"
              }, null, _parent2, _scopeId));
              _push2(`</button><div class="flex flex-wrap items-center justify-between gap-4 pr-8"${_scopeId}><div class="flex items-center gap-3"${_scopeId}><span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-slate-950 shadow-lg shadow-amber-500/30"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:crown-simple-fill",
                class: "h-6 w-6"
              }, null, _parent2, _scopeId));
              _push2(`</span><div${_scopeId}><div class="inline-flex items-center gap-1 rounded-full bg-amber-400/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-300 ring-1 ring-amber-400/30"${_scopeId}>${ssrInterpolate(quotaLabels.value.modalBadge)}</div><h3 class="mt-1 text-base font-black tracking-tight text-white sm:text-lg"${_scopeId}>${ssrInterpolate(quotaLabels.value.modalTitle)}</h3></div></div><div class="inline-flex rounded-full bg-white/10 p-1 text-xs font-bold"${_scopeId}><button type="button" class="${ssrRenderClass([planBillingCycle.value === "monthly" ? "bg-white text-slate-950 shadow-2xs" : "text-slate-300 hover:text-white", "rounded-full px-3.5 py-1.5 transition"])}"${_scopeId}>${ssrInterpolate(quotaLabels.value.cycleMonthly)}</button><button type="button" class="${ssrRenderClass([planBillingCycle.value === "yearly" ? "bg-amber-400 text-slate-950 shadow-2xs" : "text-slate-300 hover:text-white", "flex items-center gap-1 rounded-full px-3.5 py-1.5 transition"])}"${_scopeId}><span${_scopeId}>${ssrInterpolate(quotaLabels.value.cycleYearly)}</span><span class="rounded-full bg-slate-950/15 px-1.5 py-0.2 text-[10px] font-black"${_scopeId}>-16%</span></button></div></div><p class="mt-2 text-xs leading-relaxed text-slate-300"${_scopeId}>${ssrInterpolate(quotaLabels.value.modalSubtitle)}</p></div><div class="min-h-0 flex-1 overflow-y-auto p-6"${_scopeId}>`);
              if (plansLoading.value) {
                _push2(`<div class="grid gap-4 sm:grid-cols-3"${_scopeId}><!--[-->`);
                ssrRenderList(3, (idx) => {
                  _push2(`<div class="h-56 animate-pulse rounded-2xl border border-slate-200 bg-slate-50"${_scopeId}></div>`);
                });
                _push2(`<!--]--></div>`);
              } else if (activePlanCards.value.length) {
                _push2(`<div class="grid gap-4 sm:grid-cols-3"${_scopeId}><!--[-->`);
                ssrRenderList(activePlanCards.value, (plan) => {
                  _push2(`<div class="${ssrRenderClass([plan.planKey === "professional" ? "border-blue-500 bg-blue-50/20 ring-2 ring-blue-500/15 shadow-md" : "border-slate-200 bg-white hover:border-blue-300", "flex flex-col justify-between rounded-2xl border p-4 transition-all"])}"${_scopeId}><div${_scopeId}><div class="flex items-center justify-between gap-2"${_scopeId}><span class="text-[11px] font-black uppercase tracking-wider text-blue-600"${_scopeId}>${ssrInterpolate(plan.planKey)}</span>`);
                  if (plan.storeLimit) {
                    _push2(`<span class="rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-extrabold text-emerald-700 ring-1 ring-emerald-200"${_scopeId}>${ssrInterpolate(quotaLabels.value.upToStoresPrefix)} ${ssrInterpolate(plan.storeLimit)} ${ssrInterpolate(quotaLabels.value.upToStoresSuffix)}</span>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div><h4 class="mt-1 text-base font-black text-slate-900"${_scopeId}>${ssrInterpolate(plan.name)}</h4><div class="mt-3 flex items-baseline gap-1"${_scopeId}><span class="text-2xl font-black text-slate-950"${_scopeId}>\xA5${ssrInterpolate(plan.price)}</span><span class="text-xs font-semibold text-slate-500"${_scopeId}>/ ${ssrInterpolate(plan.interval === "year" ? quotaLabels.value.unitYear : quotaLabels.value.unitMonth)}</span></div><ul class="mt-3 space-y-1.5 border-t border-slate-100 pt-3 text-xs text-slate-600"${_scopeId}><li class="flex items-center gap-1.5 font-semibold text-slate-800"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: "ph:check-circle-fill",
                    class: "h-3.5 w-3.5 shrink-0 text-emerald-500"
                  }, null, _parent2, _scopeId));
                  _push2(`<span${_scopeId}>${ssrInterpolate(quotaLabels.value.upToStoresPrefix)} ${ssrInterpolate(plan.storeLimit || 1)} ${ssrInterpolate(quotaLabels.value.upToStoresSuffix)}</span></li><li class="flex items-center gap-1.5"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: "ph:check-circle-fill",
                    class: "h-3.5 w-3.5 shrink-0 text-emerald-500"
                  }, null, _parent2, _scopeId));
                  _push2(`<span${_scopeId}>${ssrInterpolate(quotaLabels.value.zeroCommissionFeat)}</span></li><li class="flex items-center gap-1.5"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: "ph:check-circle-fill",
                    class: "h-3.5 w-3.5 shrink-0 text-emerald-500"
                  }, null, _parent2, _scopeId));
                  _push2(`<span${_scopeId}>${ssrInterpolate(quotaLabels.value.aiDecorFeat)}</span></li></ul></div><div class="mt-4 pt-2"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_ShoparkCheckoutModal, {
                    "product-id": plan.id,
                    "plan-key": plan.planKey,
                    onSuccess: onPlanPurchased
                  }, {
                    trigger: withCtx(({ loading, open: openCheckout }, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<button type="button"${ssrIncludeBooleanAttr(loading) ? " disabled" : ""} class="${ssrRenderClass([plan.planKey === "professional" ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/25 hover:brightness-110" : "bg-slate-900 text-white hover:bg-slate-800", "flex w-full items-center justify-center gap-1.5 rounded-xl px-4 py-2.5 text-xs font-extrabold transition"])}"${_scopeId2}>`);
                        if (loading) {
                          _push3(ssrRenderComponent(_component_UIcon, {
                            name: "ph:circle-notch-bold",
                            class: "h-4 w-4 animate-spin"
                          }, null, _parent3, _scopeId2));
                        } else {
                          _push3(`<!---->`);
                        }
                        _push3(`<span${_scopeId2}>${ssrInterpolate(quotaLabels.value.subscribeAndUnlockBtn)}</span></button>`);
                      } else {
                        return [
                          createVNode("button", {
                            type: "button",
                            disabled: loading,
                            class: ["flex w-full items-center justify-center gap-1.5 rounded-xl px-4 py-2.5 text-xs font-extrabold transition", plan.planKey === "professional" ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/25 hover:brightness-110" : "bg-slate-900 text-white hover:bg-slate-800"],
                            onClick: openCheckout
                          }, [
                            loading ? (openBlock(), createBlock(_component_UIcon, {
                              key: 0,
                              name: "ph:circle-notch-bold",
                              class: "h-4 w-4 animate-spin"
                            })) : createCommentVNode("", true),
                            createVNode("span", null, toDisplayString(quotaLabels.value.subscribeAndUnlockBtn), 1)
                          ], 10, ["disabled", "onClick"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(`</div></div>`);
                });
                _push2(`<!--]--></div>`);
              } else {
                _push2(`<div class="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center space-y-3"${_scopeId}><p class="text-sm font-semibold text-slate-700"${_scopeId}>${ssrInterpolate(quotaLabels.value.emptyPlansHint)}</p><button type="button" class="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-extrabold text-white shadow-sm hover:bg-blue-500"${_scopeId}><span${_scopeId}>${ssrInterpolate(quotaLabels.value.goSubscriptionPageBtn)}</span>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:arrow-right-bold",
                  class: "h-4 w-4"
                }, null, _parent2, _scopeId));
                _push2(`</button></div>`);
              }
              _push2(`</div><div class="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 bg-slate-50 px-6 py-3.5 text-xs"${_scopeId}><span class="text-slate-500"${_scopeId}>${ssrInterpolate(quotaLabels.value.footerExistingTip)}</span><div class="flex items-center gap-2"${_scopeId}>`);
              if (usableStores.value.length) {
                _push2(`<button type="button" class="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3.5 py-2 font-bold text-slate-700 hover:border-blue-300 hover:text-blue-600"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:storefront-bold",
                  class: "h-3.5 w-3.5"
                }, null, _parent2, _scopeId));
                _push2(`<span${_scopeId}>${ssrInterpolate(quotaLabels.value.useExistingInsteadBtn)}</span></button>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<button type="button" class="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3.5 py-2 font-semibold text-slate-600 hover:text-slate-900"${_scopeId}><span${_scopeId}>${ssrInterpolate(quotaLabels.value.goSubscriptionPageBtn)}</span>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:arrow-up-right-bold",
                class: "h-3.5 w-3.5"
              }, null, _parent2, _scopeId));
              _push2(`</button></div></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_CaptchaSlider, {
              ref_key: "captchaRef",
              ref: captchaRef,
              onSuccess: onCaptcha
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", {
                class: ["flex h-full min-h-0 flex-1 flex-col", showSplitStudio.value ? chatCollapsed.value ? "lg:grid lg:grid-cols-[minmax(0,1fr)]" : "lg:grid lg:grid-cols-[440px_minmax(0,1fr)] xl:grid-cols-[460px_minmax(0,1fr)]" : ""]
              }, [
                withDirectives(createVNode("div", {
                  class: ["flex min-h-0 min-w-0 flex-1 flex-col bg-slate-50", showSplitStudio.value ? "border-r border-slate-200/80" : ""]
                }, [
                  createVNode("header", { class: "relative shrink-0 overflow-hidden border-b border-slate-200/80 bg-white px-4 py-3 sm:px-6 sm:py-3.5" }, [
                    createVNode("div", { class: "flex items-center justify-between gap-2" }, [
                      createVNode("div", { class: "flex min-w-0 items-center gap-2.5" }, [
                        createVNode("span", { class: "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/20" }, [
                          createVNode(_component_UIcon, {
                            name: "ph:sparkle-fill",
                            class: "h-4 w-4"
                          })
                        ]),
                        createVNode("div", { class: "min-w-0" }, [
                          createVNode("div", { class: "flex flex-wrap items-center gap-2" }, [
                            createVNode("h2", { class: "text-sm font-black tracking-tight text-slate-900 sm:text-base" }, toDisplayString(unref(t)("shopark.launch.title")), 1),
                            createVNode("span", { class: "inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-0.5 text-[11px] font-bold text-blue-700 ring-1 ring-blue-200/80" }, [
                              createVNode("span", null, "Step " + toDisplayString(wizardCurrentIndex.value + 1) + "/" + toDisplayString(wizardSteps.value.length), 1),
                              createVNode("span", null, "\xB7"),
                              createVNode("span", null, toDisplayString((_e = wizardSteps.value[wizardCurrentIndex.value]) == null ? void 0 : _e.title), 1)
                            ]),
                            showSplitStudio.value ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-700 ring-1 ring-emerald-200"
                            }, [
                              createVNode("span", { class: "h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" }),
                              createTextVNode(" MCP LIVE ")
                            ])) : createCommentVNode("", true)
                          ]),
                          createVNode("p", { class: "mt-0.5 truncate text-xs text-slate-500" }, toDisplayString(unref(t)("shopark.launch.subtitle")), 1)
                        ])
                      ]),
                      createVNode("div", { class: "flex shrink-0 items-center gap-1.5" }, [
                        messages.value.length && !busy.value && !copilotBusy.value && stage.value !== "starting" && stage.value !== "building" ? (openBlock(), createBlock("button", {
                          key: 0,
                          type: "button",
                          class: "inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-bold text-slate-600 transition hover:border-slate-300 hover:bg-slate-100",
                          onClick: resetSession
                        }, [
                          createVNode(_component_UIcon, {
                            name: "ph:arrows-counter-clockwise-bold",
                            class: "h-3.5 w-3.5"
                          }),
                          createVNode("span", { class: "hidden sm:inline" }, toDisplayString(blueprintLabels.value.reset), 1)
                        ])) : createCommentVNode("", true),
                        !showSplitStudio.value ? (openBlock(), createBlock(_component_UButton, {
                          key: 1,
                          color: "neutral",
                          variant: "ghost",
                          icon: isFullscreen.value ? "ph:corners-in-bold" : "ph:corners-out-bold",
                          class: "hidden sm:inline-flex shrink-0 rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-900",
                          title: isFullscreen.value ? blueprintLabels.value.exitFullscreen : blueprintLabels.value.enterFullscreen,
                          "aria-label": isFullscreen.value ? blueprintLabels.value.exitFullscreen : blueprintLabels.value.enterFullscreen,
                          onClick: toggleFullscreenModal
                        }, null, 8, ["icon", "title", "aria-label"])) : createCommentVNode("", true),
                        !showSplitStudio.value ? (openBlock(), createBlock(_component_UButton, {
                          key: 2,
                          color: "neutral",
                          variant: "ghost",
                          icon: "ph:x-bold",
                          class: "shrink-0 rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-900",
                          "aria-label": unref(t)("shopark.nav.closeMenu"),
                          onClick: ($event) => open.value = false
                        }, null, 8, ["aria-label", "onClick"])) : (openBlock(), createBlock(_component_UButton, {
                          key: 3,
                          color: "neutral",
                          variant: "ghost",
                          icon: "ph:x-bold",
                          class: "shrink-0 rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-900 lg:hidden",
                          "aria-label": unref(t)("shopark.nav.closeMenu"),
                          onClick: ($event) => open.value = false
                        }, null, 8, ["aria-label", "onClick"]))
                      ])
                    ]),
                    showSplitStudio.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "mt-2.5 flex items-center justify-between gap-2 lg:hidden"
                    }, [
                      createVNode("div", { class: "inline-flex rounded-xl bg-slate-100 p-0.5 text-xs font-bold" }, [
                        createVNode("button", {
                          type: "button",
                          class: ["rounded-lg px-3 py-1 transition", mobilePane.value === "chat" ? "bg-white text-blue-600 shadow-2xs" : "text-slate-600"],
                          onClick: ($event) => mobilePane.value = "chat"
                        }, toDisplayString(blueprintLabels.value.chatTab), 11, ["onClick"]),
                        createVNode("button", {
                          type: "button",
                          class: ["rounded-lg px-3 py-1 transition", mobilePane.value === "preview" ? "bg-white text-blue-600 shadow-2xs" : "text-slate-600"],
                          onClick: ($event) => mobilePane.value = "preview"
                        }, toDisplayString(blueprintLabels.value.previewTab), 11, ["onClick"])
                      ]),
                      createVNode("button", {
                        type: "button",
                        class: "inline-flex items-center gap-1 rounded-lg bg-emerald-600 px-2.5 py-1 text-xs font-bold text-white",
                        disabled: publishingNow.value,
                        onClick: publishStoreNow
                      }, [
                        createVNode(_component_UIcon, {
                          name: "ph:rocket-launch-bold",
                          class: "h-3.5 w-3.5"
                        }),
                        createVNode("span", null, toDisplayString(blueprintLabels.value.publishNow), 1)
                      ], 8, ["disabled"])
                    ])) : createCommentVNode("", true)
                  ]),
                  withDirectives(createVNode("div", {
                    ref_key: "scrollRef",
                    ref: scrollRef,
                    class: "min-h-0 flex-1 overflow-y-auto"
                  }, [
                    createVNode("div", { class: "mx-auto w-full max-w-3xl space-y-5 px-4 py-5 sm:px-6 sm:py-6" }, [
                      createVNode("ol", {
                        class: "space-y-4",
                        "aria-live": "polite"
                      }, [
                        createVNode("li", { class: "flex items-start gap-3" }, [
                          createVNode("span", {
                            class: ui.avatar
                          }, [
                            createVNode(_component_UIcon, {
                              name: "ph:sparkle-fill",
                              class: "h-4 w-4"
                            })
                          ], 2),
                          createVNode("div", { class: "space-y-2 max-w-[88%]" }, [
                            createVNode("p", {
                              class: ui.bubbleAi
                            }, toDisplayString(unref(t)("shopark.launch.greeting")), 3)
                          ])
                        ]),
                        (openBlock(true), createBlock(Fragment, null, renderList(messages.value, (message, index) => {
                          var _a2;
                          return openBlock(), createBlock("li", {
                            key: index,
                            class: ["flex items-start gap-3", message.role === "user" ? "justify-end" : ""]
                          }, [
                            message.role === "assistant" ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: ui.avatar
                            }, [
                              createVNode(_component_UIcon, {
                                name: "ph:sparkle-fill",
                                class: "h-4 w-4"
                              })
                            ], 2)) : createCommentVNode("", true),
                            createVNode("div", { class: "max-w-[86%] space-y-2" }, [
                              createVNode("p", {
                                class: message.role === "user" ? ui.bubbleUser : "whitespace-pre-line rounded-2xl rounded-tl-md bg-white px-4 py-3 text-[14px] leading-6 text-slate-800 shadow-sm ring-1 ring-slate-200/70"
                              }, toDisplayString(message.text), 3),
                              ((_a2 = message.toolCalls) == null ? void 0 : _a2.length) ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "space-y-1.5 rounded-2xl border border-indigo-100 bg-indigo-50/55 p-3 text-xs"
                              }, [
                                createVNode("div", { class: "flex items-center justify-between text-[11px] font-bold text-indigo-900" }, [
                                  createVNode("span", { class: "inline-flex items-center gap-1.5" }, [
                                    createVNode(_component_UIcon, {
                                      name: "ph:cpu-bold",
                                      class: "h-3.5 w-3.5 text-indigo-600"
                                    }),
                                    createVNode("span", null, toDisplayString(blueprintLabels.value.mcpExecutedTitle), 1)
                                  ]),
                                  createVNode("span", { class: "rounded-full bg-emerald-100 px-2 py-0.5 font-mono text-[10px] text-emerald-800" }, toDisplayString(message.toolCalls.length) + " tools ", 1)
                                ]),
                                (openBlock(true), createBlock(Fragment, null, renderList(message.toolCalls, (tc) => {
                                  return openBlock(), createBlock("div", {
                                    key: tc.id,
                                    class: "flex items-start justify-between gap-2 rounded-xl bg-white/90 px-3 py-2 shadow-2xs ring-1 ring-indigo-100/80"
                                  }, [
                                    createVNode("div", { class: "min-w-0 flex-1" }, [
                                      createVNode("div", { class: "flex items-center gap-1.5" }, [
                                        createVNode(_component_UIcon, {
                                          name: tc.status === "succeeded" ? "ph:check-circle-fill" : "ph:warning-circle-fill",
                                          class: ["h-3.5 w-3.5 shrink-0", tc.status === "succeeded" ? "text-emerald-500" : "text-amber-500"]
                                        }, null, 8, ["name", "class"]),
                                        createVNode("span", { class: "font-bold text-slate-800" }, toDisplayString(tc.label), 1),
                                        createVNode("code", { class: "rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[10px] text-indigo-700" }, toDisplayString(tc.tool), 1)
                                      ]),
                                      createVNode("p", { class: "mt-0.5 truncate text-[11px] text-slate-500" }, toDisplayString(tc.summary), 1)
                                    ]),
                                    tc.targetPage ? (openBlock(), createBlock("button", {
                                      key: 0,
                                      type: "button",
                                      class: "shrink-0 rounded-lg bg-blue-50 px-2 py-1 text-[11px] font-bold text-blue-600 hover:bg-blue-100",
                                      onClick: ($event) => switchPreviewRoute(tc.targetPage)
                                    }, toDisplayString(blueprintLabels.value.viewInCanvas), 9, ["onClick"])) : createCommentVNode("", true)
                                  ]);
                                }), 128))
                              ])) : createCommentVNode("", true)
                            ])
                          ], 2);
                        }), 128)),
                        busy.value || copilotBusy.value ? (openBlock(), createBlock("li", {
                          key: 0,
                          class: "flex items-start gap-3"
                        }, [
                          createVNode("span", {
                            class: ui.avatar
                          }, [
                            createVNode(_component_UIcon, {
                              name: "ph:sparkle-fill",
                              class: "h-4 w-4"
                            })
                          ], 2),
                          streamingReply.value ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: ui.bubbleAi
                          }, [
                            createTextVNode(toDisplayString(streamingReply.value), 1),
                            createVNode("span", { class: "ml-0.5 inline-block h-4 w-0.5 translate-y-0.5 bg-indigo-500 motion-safe:animate-pulse" })
                          ], 2)) : (openBlock(), createBlock("p", {
                            key: 1,
                            class: [ui.bubbleAi, "inline-flex items-center gap-2 text-slate-500"],
                            role: "status"
                          }, [
                            createVNode("span", { class: "inline-flex gap-1" }, [
                              (openBlock(), createBlock(Fragment, null, renderList(3, (dot) => {
                                return createVNode("span", {
                                  key: dot,
                                  class: "h-1.5 w-1.5 rounded-full bg-indigo-400 motion-safe:animate-bounce",
                                  style: { animationDelay: `${dot * 140}ms` }
                                }, null, 4);
                              }), 64))
                            ]),
                            createTextVNode(" " + toDisplayString(copilotBusy.value ? blueprintLabels.value.mcpRunning : unref(t)("shopark.launch.thinking")), 1)
                          ], 2))
                        ])) : errorKey.value && !intake.value && messages.value.length ? (openBlock(), createBlock("li", {
                          key: 1,
                          class: "flex flex-wrap items-center gap-2 pl-12 text-sm text-red-600"
                        }, [
                          createVNode("span", null, toDisplayString(unref(t)(`shopark.launch.errors.${errorKey.value}`)), 1),
                          createVNode(_component_UButton, {
                            size: "xs",
                            variant: "outline",
                            class: "rounded-full",
                            onClick: retry
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(t)("shopark.launch.retry")), 1)
                            ]),
                            _: 1
                          })
                        ])) : createCommentVNode("", true)
                      ]),
                      !messages.value.length ? (openBlock(), createBlock("section", {
                        key: 0,
                        class: [ui.card, "space-y-4"]
                      }, [
                        createVNode("div", { class: "flex items-center justify-between" }, [
                          createVNode("p", { class: "text-xs font-bold uppercase tracking-wider text-slate-400" }, toDisplayString(unref(t)("shopark.launch.quickPick")), 1),
                          createVNode("span", { class: "rounded-full bg-blue-50 px-2.5 py-0.5 text-[11px] font-bold text-blue-600" }, "Step 1")
                        ]),
                        (openBlock(), createBlock(Fragment, null, renderList(chipGroups, (group) => {
                          return createVNode("div", {
                            key: group.key,
                            class: "flex flex-wrap items-center gap-2",
                            role: "group",
                            "aria-label": unref(t)(`shopark.launch.${group.key}`)
                          }, [
                            createVNode("span", { class: "w-16 shrink-0 text-sm font-bold text-slate-700" }, toDisplayString(unref(t)(`shopark.launch.${group.key}`)), 1),
                            (openBlock(true), createBlock(Fragment, null, renderList(group.options, (option) => {
                              return openBlock(), createBlock("button", {
                                key: option,
                                type: "button",
                                class: ["rounded-full border px-3.5 py-1.5 text-sm font-semibold transition", form[group.key] === option ? "border-transparent bg-blue-600 text-white shadow-sm shadow-blue-600/30" : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600"],
                                "aria-pressed": form[group.key] === option,
                                onClick: ($event) => form[group.key] = option
                              }, toDisplayString(unref(t)(`shopark.launch.${group.labels}.${option}`)), 11, ["aria-pressed", "onClick"]);
                            }), 128))
                          ], 8, ["aria-label"]);
                        }), 64)),
                        createVNode("div", { class: "border-t border-slate-100 pt-3.5" }, [
                          createVNode("p", { class: "text-xs font-semibold text-slate-400 mb-2" }, toDisplayString(blueprintLabels.value.tryPrompts), 1),
                          createVNode("div", { class: "flex flex-wrap gap-2" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(samplePrompts.value, (sample) => {
                              return openBlock(), createBlock("button", {
                                key: sample.text,
                                type: "button",
                                class: "group inline-flex items-center gap-1.5 rounded-xl border border-slate-200/90 bg-slate-50/80 px-3 py-1.5 text-left text-xs font-medium text-slate-700 transition hover:border-blue-300 hover:bg-blue-50/60 hover:text-blue-700",
                                onClick: ($event) => applySamplePrompt(sample)
                              }, [
                                createVNode(_component_UIcon, {
                                  name: "ph:magic-wand-bold",
                                  class: "h-3.5 w-3.5 shrink-0 text-blue-500 transition-transform group-hover:rotate-12"
                                }),
                                createVNode("span", null, toDisplayString(sample.text), 1)
                              ], 8, ["onClick"]);
                            }), 128))
                          ])
                        ])
                      ], 2)) : createCommentVNode("", true),
                      intake.value && !showSplitStudio.value ? (openBlock(), createBlock("section", {
                        key: 1,
                        class: [ui.card, "space-y-5"],
                        "aria-label": unref(t)("shopark.launch.planTitle")
                      }, [
                        createVNode("div", { class: "flex items-center gap-3" }, [
                          createVNode("span", { class: "flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600" }, [
                            createVNode(_component_UIcon, {
                              name: "ph:storefront-bold",
                              class: "h-5 w-5"
                            })
                          ]),
                          createVNode("div", { class: "min-w-0 flex-1" }, [
                            createVNode("div", { class: "flex items-center justify-between gap-2" }, [
                              createVNode("p", { class: "text-base font-black text-slate-900" }, toDisplayString(unref(t)("shopark.launch.planTitle")), 1),
                              createVNode("span", { class: "rounded-full bg-blue-50 px-2.5 py-0.5 text-[11px] font-bold text-blue-600" }, "Step 2")
                            ]),
                            createVNode("p", { class: "text-xs text-slate-500" }, toDisplayString(intake.value.degraded ? unref(t)("shopark.launch.degraded") : unref(t)("shopark.launch.defaulted")), 1)
                          ])
                        ]),
                        createVNode(_component_UFormField, {
                          label: unref(t)("shopark.launch.storeName"),
                          hint: isDefaulted("storeName") ? unref(t)("shopark.launch.defaultTag") : void 0,
                          required: ""
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              modelValue: brief.storeName,
                              "onUpdate:modelValue": ($event) => brief.storeName = $event,
                              size: "lg",
                              class: "w-full",
                              disabled: locked.value,
                              maxlength: unref(SHOPARK_STORE_NAME_MAX)
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "maxlength"])
                          ]),
                          _: 1
                        }, 8, ["label", "hint"]),
                        createVNode("div", { class: "grid gap-4 sm:grid-cols-3" }, [
                          createVNode(_component_UFormField, {
                            label: unref(t)("shopark.launch.language"),
                            hint: isDefaulted("language") ? unref(t)("shopark.launch.defaultTag") : void 0
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_USelect, {
                                modelValue: brief.language,
                                "onUpdate:modelValue": ($event) => brief.language = $event,
                                size: "lg",
                                class: "w-full",
                                disabled: locked.value,
                                items: languageItems.value
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "items"])
                            ]),
                            _: 1
                          }, 8, ["label", "hint"]),
                          createVNode(_component_UFormField, {
                            label: unref(t)("shopark.launch.currency"),
                            hint: isDefaulted("currency") ? unref(t)("shopark.launch.defaultTag") : void 0
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_USelect, {
                                modelValue: brief.currency,
                                "onUpdate:modelValue": ($event) => brief.currency = $event,
                                size: "lg",
                                class: "w-full",
                                disabled: locked.value,
                                items: unref(currencyItems)
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "items"])
                            ]),
                            _: 1
                          }, 8, ["label", "hint"]),
                          createVNode(_component_UFormField, {
                            label: unref(t)("shopark.launch.style")
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_USelect, {
                                modelValue: brief.archetype,
                                "onUpdate:modelValue": ($event) => brief.archetype = $event,
                                size: "lg",
                                class: "w-full",
                                disabled: locked.value,
                                items: styleItems.value
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "items"])
                            ]),
                            _: 1
                          }, 8, ["label"])
                        ]),
                        stage.value === "plan" ? (openBlock(), createBlock("button", {
                          key: 0,
                          type: "button",
                          class: ui.cta,
                          disabled: busy.value || !nameValid.value,
                          onClick: startBuild
                        }, [
                          createTextVNode(toDisplayString(unref(t)("shopark.launch.start")), 1),
                          createVNode(_component_UIcon, {
                            name: "ph:arrow-right-bold",
                            class: "h-5 w-5"
                          })
                        ], 10, ["disabled"])) : createCommentVNode("", true)
                      ], 10, ["aria-label"])) : createCommentVNode("", true),
                      stage.value === "login" ? (openBlock(), createBlock("section", {
                        key: 2,
                        class: [ui.card, "space-y-4 border border-blue-100 bg-gradient-to-br from-blue-50/60 via-white to-indigo-50/40"]
                      }, [
                        createVNode("div", { class: "flex flex-wrap items-center justify-between gap-3" }, [
                          createVNode("div", { class: "flex items-center gap-3" }, [
                            createVNode("span", { class: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/25" }, [
                              createVNode(_component_UIcon, {
                                name: "ph:envelope-simple-open-bold",
                                class: "h-5 w-5"
                              })
                            ]),
                            createVNode("div", null, [
                              createVNode("p", { class: "text-sm font-black text-slate-900" }, toDisplayString(authLabels.value.cardTitle), 1),
                              createVNode("p", { class: "text-xs text-slate-500" }, toDisplayString(authLabels.value.cardSubtitle), 1)
                            ])
                          ]),
                          createVNode("button", {
                            type: "button",
                            class: "inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2.5 text-xs font-extrabold text-white shadow-md shadow-blue-600/25 transition hover:brightness-110",
                            onClick: ($event) => authOverlayOpen.value = true
                          }, [
                            createVNode(_component_UIcon, {
                              name: "ph:lightning-fill",
                              class: "h-4 w-4"
                            }),
                            createVNode("span", null, toDisplayString(authLabels.value.openOverlayBtn), 1)
                          ], 8, ["onClick"])
                        ])
                      ], 2)) : createCommentVNode("", true),
                      stage.value === "stores" ? (openBlock(), createBlock("section", {
                        key: 3,
                        class: [ui.card, "space-y-4"],
                        "aria-label": unref(t)("shopark.launch.storeTitle")
                      }, [
                        createVNode("div", { class: "flex items-center justify-between gap-2" }, [
                          createVNode("p", { class: "text-base font-black text-slate-900" }, toDisplayString(unref(t)("shopark.launch.storeTitle")), 1),
                          createVNode("div", { class: "flex items-center gap-2" }, [
                            storeQuota.value ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: ["rounded-full px-2.5 py-0.5 font-mono text-[11px] font-bold", canCreate.value ? "bg-emerald-50 text-emerald-700" : "bg-amber-100 text-amber-800"]
                            }, toDisplayString(quotaLabels.value.quotaBadge) + " " + toDisplayString(storeQuota.value.owned) + "/" + toDisplayString(Math.min(storeQuota.value.planMaxStores || 1, storeQuota.value.platformMaxStores || 99)), 3)) : createCommentVNode("", true),
                            createVNode("span", { class: "rounded-full bg-blue-50 px-2.5 py-0.5 text-[11px] font-bold text-blue-600" }, "Step 3")
                          ])
                        ]),
                        storesLoading.value ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "text-sm text-slate-500"
                        }, toDisplayString(unref(t)("shopark.launch.loadingStores")), 1)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                          !canCreate.value ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "space-y-3 rounded-2xl border border-amber-200/90 bg-gradient-to-br from-amber-50/90 via-white to-orange-50/50 p-4 shadow-2xs"
                          }, [
                            createVNode("div", { class: "flex items-start gap-3" }, [
                              createVNode("span", { class: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-white shadow-sm shadow-amber-500/25" }, [
                                createVNode(_component_UIcon, {
                                  name: "ph:crown-simple-fill",
                                  class: "h-5 w-5"
                                })
                              ]),
                              createVNode("div", { class: "min-w-0 flex-1" }, [
                                createVNode("p", { class: "text-sm font-black text-slate-900" }, toDisplayString(quotaLabels.value.bannerTitle), 1),
                                createVNode("p", { class: "mt-0.5 text-xs leading-relaxed text-slate-600" }, toDisplayString(usableStores.value.length ? quotaLabels.value.bannerDescWithStores : quotaLabels.value.bannerDescNoStores), 1)
                              ])
                            ]),
                            createVNode("div", { class: "flex flex-wrap items-center gap-2 pt-0.5" }, [
                              createVNode("button", {
                                type: "button",
                                class: "inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-2 text-xs font-extrabold text-white shadow-sm shadow-amber-500/25 transition hover:brightness-105",
                                onClick: openPlanUpgradeOverlay
                              }, [
                                createVNode(_component_UIcon, {
                                  name: "ph:sparkle-fill",
                                  class: "h-3.5 w-3.5"
                                }),
                                createVNode("span", null, toDisplayString(quotaLabels.value.openPlanModalBtn), 1)
                              ]),
                              usableStores.value.length ? (openBlock(), createBlock("button", {
                                key: 0,
                                type: "button",
                                class: "inline-flex items-center gap-1.5 rounded-xl border border-blue-200 bg-blue-50/80 px-3.5 py-2 text-xs font-bold text-blue-700 transition hover:bg-blue-100",
                                onClick: ($event) => choice.value = usableStores.value[0].id
                              }, [
                                createVNode(_component_UIcon, {
                                  name: "ph:storefront-bold",
                                  class: "h-3.5 w-3.5"
                                }),
                                createVNode("span", null, toDisplayString(quotaLabels.value.pickExistingBtn) + "\uFF08" + toDisplayString((_f = usableStores.value[0]) == null ? void 0 : _f.name) + "\uFF09", 1)
                              ], 8, ["onClick"])) : createCommentVNode("", true),
                              createVNode("button", {
                                type: "button",
                                class: "inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900",
                                onClick: goSubscription
                              }, [
                                createVNode("span", null, toDisplayString(quotaLabels.value.goSubscriptionPageBtn), 1),
                                createVNode(_component_UIcon, {
                                  name: "ph:arrow-up-right-bold",
                                  class: "h-3 w-3"
                                })
                              ])
                            ])
                          ])) : createCommentVNode("", true),
                          createVNode("div", {
                            role: "radiogroup",
                            class: "space-y-2.5"
                          }, [
                            createVNode("button", {
                              type: "button",
                              role: "radio",
                              "aria-checked": choice.value === "new",
                              disabled: !canCreate.value,
                              class: [ui.option, choice.value === "new" ? ui.optionOn : ""],
                              onClick: ($event) => choice.value = "new"
                            }, [
                              createVNode("span", { class: "flex items-center gap-2 font-bold text-slate-900" }, [
                                createVNode(_component_UIcon, {
                                  name: "ph:plus-circle-bold",
                                  class: "h-5 w-5 text-blue-600"
                                }),
                                createVNode("span", null, toDisplayString(unref(t)("shopark.launch.newStore")), 1),
                                !canCreate.value ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: "rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-800"
                                }, toDisplayString(quotaLabels.value.slotFullTag), 1)) : createCommentVNode("", true)
                              ]),
                              createVNode("span", { class: "truncate pl-3 text-slate-500" }, toDisplayString(brief.storeName), 1)
                            ], 10, ["aria-checked", "disabled", "onClick"]),
                            usableStores.value.length ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "pt-1"
                            }, [
                              createVNode("p", { class: "mb-2 text-xs font-bold text-slate-500" }, toDisplayString(quotaLabels.value.existingListHeader) + "\uFF08" + toDisplayString(usableStores.value.length) + "\uFF09", 1),
                              createVNode("div", { class: "space-y-2" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(usableStores.value, (store) => {
                                  return openBlock(), createBlock("button", {
                                    key: store.id,
                                    type: "button",
                                    role: "radio",
                                    "aria-checked": choice.value === store.id,
                                    class: [ui.option, choice.value === store.id ? ui.optionOn : ""],
                                    onClick: ($event) => choice.value = store.id
                                  }, [
                                    createVNode("div", { class: "flex min-w-0 items-center gap-2" }, [
                                      createVNode(_component_UIcon, {
                                        name: "ph:storefront-bold",
                                        class: ["h-5 w-5 shrink-0", choice.value === store.id ? "text-blue-600" : "text-slate-400"]
                                      }, null, 8, ["class"]),
                                      createVNode("span", { class: "truncate font-bold text-slate-900" }, toDisplayString(store.name), 1),
                                      createVNode("span", {
                                        class: ["shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold", storeBadgeClass(store)]
                                      }, toDisplayString(storeBadgeText(store)), 3)
                                    ]),
                                    createVNode("span", { class: "truncate pl-3 font-mono text-xs text-slate-500" }, toDisplayString(store.domain), 1)
                                  ], 10, ["aria-checked", "onClick"]);
                                }), 128))
                              ])
                            ])) : createCommentVNode("", true)
                          ]),
                          choice.value === "new" && !categoryId.value ? (openBlock(), createBlock(_component_UFormField, {
                            key: 1,
                            label: unref(t)("shopark.launch.category"),
                            required: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_USelect, {
                                modelValue: categoryId.value,
                                "onUpdate:modelValue": ($event) => categoryId.value = $event,
                                size: "lg",
                                class: "w-full",
                                items: categoryItems.value
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                            ]),
                            _: 1
                          }, 8, ["label"])) : choice.value && choice.value !== "new" ? (openBlock(), createBlock("div", {
                            key: 2,
                            class: "space-y-2 rounded-xl bg-amber-50 p-4 text-sm text-amber-800"
                          }, [
                            createVNode("p", null, toDisplayString(unref(t)("shopark.launch.existingHint")), 1),
                            createVNode(_component_UCheckbox, {
                              modelValue: scope.storeSetup,
                              "onUpdate:modelValue": ($event) => scope.storeSetup = $event,
                              label: unref(t)("shopark.launch.updateSetup")
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "label"]),
                            createVNode(_component_UCheckbox, {
                              modelValue: scope.policies,
                              "onUpdate:modelValue": ($event) => scope.policies = $event,
                              label: unref(t)("shopark.launch.addPolicies")
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                          ])) : createCommentVNode("", true),
                          createVNode("button", {
                            type: "button",
                            class: ui.cta,
                            disabled: busy.value || !choice.value || choice.value === "new" && !categoryId.value,
                            onClick: launch
                          }, [
                            createTextVNode(toDisplayString(choice.value && choice.value !== "new" ? quotaLabels.value.launchWithExistingBtn : unref(t)("shopark.launch.start")) + " ", 1),
                            createVNode(_component_UIcon, {
                              name: "ph:arrow-right-bold",
                              class: "h-5 w-5"
                            })
                          ], 10, ["disabled"])
                        ], 64))
                      ], 10, ["aria-label"])) : createCommentVNode("", true),
                      stage.value === "starting" ? (openBlock(), createBlock("p", {
                        key: 4,
                        class: "flex items-center justify-center gap-2 py-2 text-sm font-semibold text-slate-500",
                        role: "status"
                      }, [
                        createVNode(_component_UIcon, {
                          name: "ph:circle-notch-bold",
                          class: "h-5 w-5 motion-safe:animate-spin"
                        }),
                        createTextVNode(toDisplayString(unref(t)("shopark.launch.starting")), 1)
                      ])) : createCommentVNode("", true),
                      stage.value === "building" || stage.value === "done" ? (openBlock(), createBlock("section", {
                        key: 5,
                        class: "rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200/70 space-y-4",
                        role: "status",
                        "aria-live": "polite"
                      }, [
                        createVNode("div", { class: "flex items-start gap-3" }, [
                          createVNode("span", {
                            class: ["flex h-9 w-9 shrink-0 items-center justify-center rounded-xl", stage.value === "done" ? "bg-emerald-50 text-emerald-600" : "bg-blue-50 text-blue-600"]
                          }, [
                            createVNode(_component_UIcon, {
                              name: stage.value === "done" ? "ph:check-circle-fill" : "ph:circle-notch-bold",
                              class: ["h-5 w-5", stage.value === "building" ? "motion-safe:animate-spin" : ""]
                            }, null, 8, ["name", "class"])
                          ], 2),
                          createVNode("div", { class: "min-w-0 flex-1" }, [
                            createVNode("div", { class: "flex flex-wrap items-center gap-2" }, [
                              createVNode("p", { class: "text-sm font-black text-slate-900" }, toDisplayString(stage.value === "done" ? unref(t)("shopark.launch.doneTitle") : unref(t)("shopark.launch.buildingTitle")), 1),
                              activeDomain.value ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "rounded-full bg-slate-100 px-2 py-0.5 font-mono text-[11px] text-slate-600"
                              }, toDisplayString(activeDomain.value), 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("p", { class: "mt-0.5 text-xs text-slate-500" }, toDisplayString(stage.value === "done" ? blueprintLabels.value.inPlaceReadySubtitle : unref(t)("shopark.launch.buildingSubtitle")), 1)
                          ])
                        ]),
                        createVNode("div", { class: "h-1.5 w-full overflow-hidden rounded-full bg-slate-100" }, [
                          createVNode("div", {
                            class: ["h-full rounded-full transition-all duration-500", stage.value === "done" ? "bg-emerald-500" : "bg-gradient-to-r from-blue-600 to-indigo-600"],
                            style: { width: `${buildProgressPercent.value}%` }
                          }, null, 6)
                        ]),
                        createVNode("ul", { class: "grid grid-cols-2 gap-1.5 rounded-xl bg-slate-50/80 p-2.5 text-xs" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(buildSteps.value, (item) => {
                            return openBlock(), createBlock("li", {
                              key: item.key,
                              class: "flex items-center gap-2"
                            }, [
                              createVNode(_component_UIcon, {
                                name: item.state === "done" ? "ph:check-circle-fill" : item.state === "running" ? "ph:circle-notch-bold" : item.state === "failed" ? "ph:warning-circle-fill" : "ph:circle-dashed",
                                class: ["h-3.5 w-3.5 shrink-0", item.state === "done" ? "text-emerald-500" : item.state === "running" ? "text-blue-600 motion-safe:animate-spin" : item.state === "failed" ? "text-amber-500" : "text-slate-300"]
                              }, null, 8, ["name", "class"]),
                              createVNode("span", {
                                class: ["truncate", item.state === "done" ? "font-semibold text-slate-800" : item.state === "running" ? "font-semibold text-blue-700" : "text-slate-500"]
                              }, toDisplayString(item.label), 3)
                            ]);
                          }), 128))
                        ]),
                        launchTarget.value ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "space-y-2.5 rounded-xl border border-indigo-100 bg-gradient-to-b from-indigo-50/50 to-white p-3"
                        }, [
                          createVNode("div", { class: "flex items-center justify-between gap-2" }, [
                            createVNode("span", { class: "inline-flex items-center gap-1.5 text-xs font-extrabold text-indigo-950" }, [
                              createVNode(_component_UIcon, {
                                name: "ph:magic-wand-fill",
                                class: "h-3.5 w-3.5 text-indigo-600"
                              }),
                              createVNode("span", null, toDisplayString(blueprintLabels.value.mcpConsoleTitle), 1)
                            ]),
                            createVNode("div", { class: "inline-flex rounded-lg bg-slate-100 p-0.5 text-[11px] font-bold" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(mcpActionTabs.value, (tab) => {
                                return openBlock(), createBlock("button", {
                                  key: tab.key,
                                  type: "button",
                                  class: ["rounded-md px-2 py-0.5 transition", activeMcpTab.value === tab.key ? "bg-white text-indigo-600 shadow-2xs" : "text-slate-500 hover:text-slate-800"],
                                  onClick: ($event) => activeMcpTab.value = tab.key
                                }, toDisplayString(tab.label), 11, ["onClick"]);
                              }), 128))
                            ])
                          ]),
                          createVNode("div", { class: "flex flex-wrap gap-1.5" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(activeMcpChips.value, (chip) => {
                              return openBlock(), createBlock("button", {
                                key: chip.label,
                                type: "button",
                                disabled: copilotBusy.value,
                                class: "inline-flex items-center gap-1 rounded-full border border-indigo-200/80 bg-white px-2.5 py-1 text-xs font-medium text-indigo-800 shadow-2xs transition hover:border-indigo-400 hover:bg-indigo-50 disabled:opacity-50",
                                onClick: ($event) => executeInPlaceCopilot(chip.prompt)
                              }, [
                                createVNode(_component_UIcon, {
                                  name: chip.icon,
                                  class: "h-3 w-3 text-indigo-500"
                                }, null, 8, ["name"]),
                                createVNode("span", null, toDisplayString(chip.label), 1)
                              ], 8, ["disabled", "onClick"]);
                            }), 128))
                          ])
                        ])) : createCommentVNode("", true),
                        launchTarget.value ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: "flex flex-wrap items-center gap-2 pt-0.5"
                        }, [
                          createVNode("a", {
                            href: launchTarget.value.url,
                            class: "inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-700 transition hover:border-blue-300 hover:text-blue-600",
                            onClick: withModifiers(($event) => openLiveStudioWithPrompt(""), ["prevent"])
                          }, [
                            createVNode(_component_UIcon, {
                              name: "ph:corners-out-bold",
                              class: "h-3.5 w-3.5"
                            }),
                            createVNode("span", null, toDisplayString(unref(t)("shopark.launch.previewAndPublish")), 1)
                          ], 8, ["href", "onClick"]),
                          launchTarget.value.dashboardUrl ? (openBlock(), createBlock("a", {
                            key: 0,
                            href: launchTarget.value.dashboardUrl,
                            class: "inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50",
                            onClick: withModifiers(($event) => openStoreDashboard(), ["prevent"])
                          }, [
                            createVNode(_component_UIcon, {
                              name: "ph:squares-four-bold",
                              class: "h-3.5 w-3.5"
                            }),
                            createVNode("span", null, toDisplayString(unref(t)("shopark.launch.openDashboard")), 1)
                          ], 8, ["href", "onClick"])) : createCommentVNode("", true)
                        ])) : createCommentVNode("", true)
                      ])) : createCommentVNode("", true),
                      errorKey.value && (intake.value || !messages.value.length) ? (openBlock(), createBlock("p", {
                        key: 6,
                        class: "text-center text-sm text-red-600",
                        "aria-live": "polite"
                      }, toDisplayString(unref(t)(`shopark.launch.errors.${errorKey.value}`)), 1)) : createCommentVNode("", true)
                    ])
                  ], 512), [
                    [vShow, !showSplitStudio.value || mobilePane.value === "chat"]
                  ]),
                  withDirectives(createVNode("footer", { class: "shrink-0 border-t border-slate-200/70 bg-white px-4 py-3 sm:px-6" }, [
                    canType.value ? (openBlock(), createBlock("form", {
                      key: 0,
                      class: "mx-auto flex w-full max-w-3xl items-end gap-2 rounded-2xl bg-slate-50 p-1.5 ring-1 ring-slate-200 transition focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-500 focus-within:shadow-lg focus-within:shadow-blue-600/5",
                      onSubmit: withModifiers(send, ["prevent"])
                    }, [
                      withDirectives(createVNode("textarea", {
                        ref_key: "inputRef",
                        ref: inputRef,
                        "onUpdate:modelValue": ($event) => draft.value = $event,
                        rows: "1",
                        maxlength: MESSAGE_MAX,
                        disabled: busy.value || copilotBusy.value,
                        class: "max-h-28 min-h-[40px] flex-1 resize-none bg-transparent px-3 py-2 text-sm leading-6 text-slate-900 outline-none placeholder:text-slate-400",
                        "aria-label": unref(t)("shopark.launch.inputLabel"),
                        placeholder: isLiveStudioStage.value ? blueprintLabels.value.mcpInputPlaceholder : messages.value.length ? unref(t)("shopark.launch.followUpPlaceholder") : unref(t)("shopark.launch.offeringPlaceholder"),
                        onInput: autosize,
                        onKeydown: withKeys(withModifiers(send, ["exact", "prevent"]), ["enter"])
                      }, null, 40, ["onUpdate:modelValue", "disabled", "aria-label", "placeholder", "onKeydown"]), [
                        [vModelText, draft.value]
                      ]),
                      createVNode("button", {
                        type: "submit",
                        disabled: busy.value || copilotBusy.value || !draft.value.trim(),
                        "aria-label": unref(t)("shopark.launch.send"),
                        class: "flex h-10 shrink-0 items-center justify-center gap-1.5 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 px-4 text-xs font-bold text-white shadow-md shadow-blue-600/30 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none sm:text-sm"
                      }, [
                        createVNode("span", null, toDisplayString(unref(t)("shopark.launch.send")), 1),
                        createVNode(_component_UIcon, {
                          name: "ph:paper-plane-tilt-fill",
                          class: "h-3.5 w-3.5"
                        })
                      ], 8, ["disabled", "aria-label"])
                    ], 32)) : (openBlock(), createBlock("p", {
                      key: 1,
                      class: "mx-auto max-w-3xl py-2 text-center text-xs text-slate-400"
                    }, toDisplayString(intake.value && !unref(loggedIn) && stage.value === "plan" ? unref(t)("shopark.launch.loginToFollowUp") : unref(t)("shopark.launch.composerDone")), 1))
                  ], 512), [
                    [vShow, !showSplitStudio.value || mobilePane.value === "chat"]
                  ])
                ], 2), [
                  [vShow, !showSplitStudio.value || !chatCollapsed.value]
                ]),
                showSplitStudio.value ? withDirectives((openBlock(), createBlock("section", {
                  key: 0,
                  class: ["min-h-0 min-w-0 flex-1 flex-col bg-slate-900/95", mobilePane.value === "preview" ? "flex" : "hidden lg:flex"]
                }, [
                  createVNode("div", { class: "flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 bg-slate-950 px-4 py-2.5 text-xs text-slate-200" }, [
                    createVNode("div", { class: "flex min-w-0 items-center gap-2" }, [
                      createVNode("button", {
                        type: "button",
                        class: "hidden lg:inline-flex items-center gap-1 rounded-lg border border-slate-800 bg-slate-900 px-2 py-1 text-[11px] font-semibold text-slate-300 transition hover:border-slate-700 hover:text-white",
                        title: chatCollapsed.value ? blueprintLabels.value.expandChat : blueprintLabels.value.collapseChat,
                        onClick: ($event) => chatCollapsed.value = !chatCollapsed.value
                      }, [
                        createVNode(_component_UIcon, {
                          name: chatCollapsed.value ? "ph:sidebar-simple-fill" : "ph:sidebar-simple-bold",
                          class: "h-3.5 w-3.5 text-cyan-400"
                        }, null, 8, ["name"]),
                        chatCollapsed.value ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(blueprintLabels.value.expandChat), 1)) : createCommentVNode("", true)
                      ], 8, ["title", "onClick"]),
                      createVNode("div", { class: "flex items-center gap-1.5 shrink-0" }, [
                        createVNode("span", { class: "h-2.5 w-2.5 rounded-full bg-rose-500/80" }),
                        createVNode("span", { class: "h-2.5 w-2.5 rounded-full bg-amber-400/80" }),
                        createVNode("span", { class: "h-2.5 w-2.5 rounded-full bg-emerald-400/80" })
                      ]),
                      createVNode("div", { class: "flex min-w-0 items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1 font-mono text-[11px] text-slate-300" }, [
                        createVNode("span", { class: "h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400 animate-pulse" }),
                        createVNode("span", { class: "truncate" }, toDisplayString(activeDomain.value || `store-${(_g = launchTarget.value) == null ? void 0 : _g.storeId}`) + toDisplayString(canvasViewMode.value === "decor" ? "/ai-decor" : previewRoutePath.value), 1)
                      ]),
                      ((_h = launchTarget.value) == null ? void 0 : _h.url) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "inline-flex items-center rounded-lg border border-slate-800 bg-slate-900 p-0.5"
                      }, [
                        createVNode("button", {
                          type: "button",
                          class: ["inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-[11px] font-semibold transition", canvasViewMode.value === "preview" ? "bg-blue-600 text-white shadow-2xs" : "text-slate-400 hover:text-white"],
                          onClick: ($event) => switchCanvasViewMode("preview")
                        }, [
                          createVNode(_component_UIcon, {
                            name: "ph:eye-bold",
                            class: "h-3.5 w-3.5"
                          }),
                          createVNode("span", null, toDisplayString(blueprintLabels.value.modePreview), 1)
                        ], 10, ["onClick"]),
                        createVNode("button", {
                          type: "button",
                          class: ["inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-[11px] font-semibold transition", canvasViewMode.value === "decor" ? "bg-indigo-600 text-white shadow-2xs" : "text-slate-400 hover:text-white"],
                          onClick: ($event) => switchCanvasViewMode("decor")
                        }, [
                          createVNode(_component_UIcon, {
                            name: "ph:paint-brush-broad-bold",
                            class: "h-3.5 w-3.5"
                          }),
                          createVNode("span", null, toDisplayString(blueprintLabels.value.modeVisualDecor), 1)
                        ], 10, ["onClick"])
                      ])) : createCommentVNode("", true),
                      canvasViewMode.value === "preview" ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: "hidden xl:flex items-center gap-1 rounded-lg bg-slate-900 p-0.5"
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(previewRoutes.value, (rt) => {
                          return openBlock(), createBlock("button", {
                            key: rt.path,
                            type: "button",
                            class: ["rounded-md px-2.5 py-1 text-[11px] font-semibold transition", previewRoutePath.value === rt.path ? "bg-blue-600 text-white shadow-2xs" : "text-slate-400 hover:text-white"],
                            onClick: ($event) => switchPreviewRoute(rt.path)
                          }, toDisplayString(rt.label), 11, ["onClick"]);
                        }), 128))
                      ])) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "flex items-center gap-1.5" }, [
                      canvasViewMode.value === "preview" ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "inline-flex rounded-lg border border-slate-800 bg-slate-900 p-0.5"
                      }, [
                        createVNode("button", {
                          type: "button",
                          class: ["inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11px] font-semibold transition", previewViewport.value === "desktop" ? "bg-slate-800 text-white" : "text-slate-400 hover:text-white"],
                          onClick: ($event) => previewViewport.value = "desktop"
                        }, [
                          createVNode(_component_UIcon, {
                            name: "ph:desktop-bold",
                            class: "h-3.5 w-3.5"
                          }),
                          createVNode("span", { class: "hidden sm:inline" }, toDisplayString(blueprintLabels.value.desktop), 1)
                        ], 10, ["onClick"]),
                        createVNode("button", {
                          type: "button",
                          class: ["inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11px] font-semibold transition", previewViewport.value === "mobile" ? "bg-slate-800 text-white" : "text-slate-400 hover:text-white"],
                          onClick: ($event) => previewViewport.value = "mobile"
                        }, [
                          createVNode(_component_UIcon, {
                            name: "ph:device-mobile-bold",
                            class: "h-3.5 w-3.5"
                          }),
                          createVNode("span", { class: "hidden sm:inline" }, toDisplayString(blueprintLabels.value.mobile), 1)
                        ], 10, ["onClick"])
                      ])) : createCommentVNode("", true),
                      createVNode("button", {
                        type: "button",
                        class: "inline-flex items-center gap-1 rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-[11px] font-semibold text-slate-300 transition hover:border-slate-700 hover:text-white",
                        title: blueprintLabels.value.refreshCanvas,
                        onClick: refreshPreviewFrame
                      }, [
                        createVNode(_component_UIcon, {
                          name: "ph:arrows-clockwise-bold",
                          class: ["h-3.5 w-3.5", iframeLoading.value ? "animate-spin text-cyan-400" : ""]
                        }, null, 8, ["class"]),
                        createVNode("span", { class: "hidden md:inline" }, toDisplayString(blueprintLabels.value.refreshCanvas), 1)
                      ], 8, ["title"]),
                      createVNode("button", {
                        type: "button",
                        class: "inline-flex items-center gap-1 rounded-lg bg-emerald-600 px-3 py-1.5 text-[11px] font-extrabold text-white shadow-sm shadow-emerald-600/30 transition hover:bg-emerald-500 disabled:opacity-50",
                        disabled: publishingNow.value,
                        onClick: publishStoreNow
                      }, [
                        createVNode(_component_UIcon, {
                          name: justPublished.value ? "ph:check-bold" : "ph:rocket-launch-bold",
                          class: "h-3.5 w-3.5"
                        }, null, 8, ["name"]),
                        createVNode("span", null, toDisplayString(justPublished.value ? blueprintLabels.value.publishedBadge : blueprintLabels.value.publishNow), 1)
                      ], 8, ["disabled"]),
                      currentPreviewUrl.value ? (openBlock(), createBlock("a", {
                        key: 1,
                        href: currentPreviewUrl.value,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        class: "inline-flex items-center gap-1 rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-[11px] font-semibold text-slate-300 transition hover:border-slate-700 hover:text-white",
                        title: blueprintLabels.value.openNewTab
                      }, [
                        createVNode(_component_UIcon, {
                          name: "ph:arrow-square-out-bold",
                          class: "h-3.5 w-3.5"
                        })
                      ], 8, ["href", "title"])) : createCommentVNode("", true),
                      createVNode("button", {
                        type: "button",
                        class: ["hidden lg:inline-flex items-center gap-1 rounded-lg border px-2.5 py-1.5 text-[11px] font-bold transition", isFullscreen.value && chatCollapsed.value ? "border-cyan-400/50 bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30" : "border-slate-800 bg-slate-900 text-slate-300 hover:border-slate-700 hover:text-white"],
                        title: isFullscreen.value && chatCollapsed.value ? blueprintLabels.value.exitFullscreen : blueprintLabels.value.enterFullscreen,
                        "aria-label": isFullscreen.value && chatCollapsed.value ? blueprintLabels.value.exitFullscreen : blueprintLabels.value.enterFullscreen,
                        onClick: toggleFullscreenDecor
                      }, [
                        createVNode(_component_UIcon, {
                          name: isFullscreen.value && chatCollapsed.value ? "ph:corners-in-bold" : "ph:corners-out-bold",
                          class: "h-3.5 w-3.5"
                        }, null, 8, ["name"]),
                        createVNode("span", { class: "hidden 2xl:inline" }, toDisplayString(isFullscreen.value && chatCollapsed.value ? blueprintLabels.value.exitFullscreen : blueprintLabels.value.enterFullscreen), 1)
                      ], 10, ["title", "aria-label"]),
                      createVNode(_component_UButton, {
                        color: "neutral",
                        variant: "ghost",
                        icon: "ph:x-bold",
                        class: "hidden lg:inline-flex shrink-0 rounded-full text-slate-400 hover:bg-slate-800 hover:text-white",
                        "aria-label": unref(t)("shopark.nav.closeMenu"),
                        onClick: ($event) => open.value = false
                      }, null, 8, ["aria-label", "onClick"])
                    ])
                  ]),
                  canvasViewMode.value === "preview" ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "flex items-center gap-1.5 border-b border-slate-800/80 bg-slate-900 px-4 py-1.5 xl:hidden overflow-x-auto"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(previewRoutes.value, (rt) => {
                      return openBlock(), createBlock("button", {
                        key: rt.path,
                        type: "button",
                        class: ["shrink-0 rounded-md px-2.5 py-1 text-[11px] font-semibold transition", previewRoutePath.value === rt.path ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"],
                        onClick: ($event) => switchPreviewRoute(rt.path)
                      }, toDisplayString(rt.label), 11, ["onClick"]);
                    }), 128))
                  ])) : createCommentVNode("", true),
                  createVNode("div", {
                    class: ["relative flex min-h-0 flex-1 items-center justify-center overflow-hidden transition-all duration-200", isFullscreen.value && chatCollapsed.value || canvasViewMode.value === "decor" ? "p-0" : "p-3 sm:p-5"]
                  }, [
                    createVNode("div", {
                      class: ["relative h-full overflow-hidden bg-white shadow-2xl transition-all duration-300", previewViewport.value === "mobile" && canvasViewMode.value === "preview" ? "w-[390px] max-w-full rounded-[32px] border-[6px] border-slate-800 ring-1 ring-white/10" : isFullscreen.value && chatCollapsed.value || canvasViewMode.value === "decor" ? "w-full border-0 rounded-none" : "w-full rounded-2xl border border-slate-800"]
                    }, [
                      iframeLoading.value || copilotBusy.value ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "pointer-events-none absolute inset-x-0 top-0 z-10 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600/95 via-indigo-600/95 to-blue-600/95 py-1.5 text-xs font-bold text-white shadow-md backdrop-blur-sm"
                      }, [
                        createVNode(_component_UIcon, {
                          name: "ph:circle-notch-bold",
                          class: "h-3.5 w-3.5 animate-spin"
                        }),
                        createVNode("span", null, toDisplayString(copilotBusy.value ? blueprintLabels.value.mcpRunning : blueprintLabels.value.syncingCanvas), 1)
                      ])) : createCommentVNode("", true),
                      activeCanvasUrl.value ? (openBlock(), createBlock("iframe", {
                        key: `${canvasViewMode.value}-${previewFrameKey.value}`,
                        src: activeCanvasUrl.value,
                        class: "h-full w-full border-0 bg-white",
                        title: "Shopark Live Storefront & Decor Studio",
                        onLoad: ($event) => iframeLoading.value = false
                      }, null, 40, ["src", "onLoad"])) : createCommentVNode("", true)
                    ], 2),
                    chatCollapsed.value ? (openBlock(), createBlock("button", {
                      key: 0,
                      type: "button",
                      class: "fixed bottom-5 left-5 z-30 inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-slate-950/90 px-4 py-2.5 text-xs font-extrabold text-white shadow-2xl ring-1 ring-white/15 backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-blue-600",
                      onClick: ($event) => chatCollapsed.value = false
                    }, [
                      createVNode(_component_UIcon, {
                        name: "ph:sparkle-fill",
                        class: "h-4 w-4 text-cyan-300 animate-pulse"
                      }),
                      createVNode("span", null, toDisplayString(blueprintLabels.value.expandChat), 1)
                    ], 8, ["onClick"])) : createCommentVNode("", true)
                  ], 2)
                ], 2)), [
                  [vShow, mobilePane.value === "preview" || true]
                ]) : createCommentVNode("", true)
              ], 2),
              stage.value === "login" && authOverlayOpen.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm",
                role: "dialog",
                "aria-modal": "true",
                "aria-label": authLabels.value.modalTitle
              }, [
                createVNode("div", { class: "relative w-full max-w-md overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-2xl ring-1 ring-slate-900/10" }, [
                  createVNode("div", { class: "relative bg-gradient-to-br from-slate-950 via-[#0f2152] to-indigo-950 px-6 py-5 text-white" }, [
                    createVNode("button", {
                      type: "button",
                      class: "absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-slate-300 transition hover:bg-white/20 hover:text-white",
                      "aria-label": unref(t)("shopark.nav.closeMenu"),
                      onClick: ($event) => authOverlayOpen.value = false
                    }, [
                      createVNode(_component_UIcon, {
                        name: "ph:x-bold",
                        class: "h-4 w-4"
                      })
                    ], 8, ["aria-label", "onClick"]),
                    createVNode("div", { class: "flex items-center gap-3" }, [
                      createVNode("span", { class: "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 text-slate-950 shadow-lg shadow-blue-500/30" }, [
                        createVNode(_component_UIcon, {
                          name: "ph:envelope-simple-open-fill",
                          class: "h-6 w-6"
                        })
                      ]),
                      createVNode("div", null, [
                        createVNode("div", { class: "inline-flex items-center gap-1 rounded-full bg-cyan-400/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-cyan-300 ring-1 ring-cyan-400/30" }, toDisplayString(authLabels.value.badge), 1),
                        createVNode("h3", { class: "mt-1 text-base font-black tracking-tight text-white" }, toDisplayString(authLabels.value.modalTitle), 1)
                      ])
                    ]),
                    createVNode("p", { class: "mt-2 text-xs leading-relaxed text-slate-300" }, toDisplayString(authLabels.value.modalSubtitle), 1)
                  ]),
                  createVNode("div", { class: "p-6 space-y-4" }, [
                    createVNode("div", { class: "grid grid-cols-2 rounded-xl bg-slate-100 p-1 text-xs font-bold" }, [
                      createVNode("button", {
                        type: "button",
                        class: ["flex items-center justify-center gap-1.5 rounded-lg py-2 transition", authMode.value === "otp" ? "bg-white text-blue-600 shadow-2xs" : "text-slate-500 hover:text-slate-800"],
                        onClick: ($event) => {
                          authMode.value = "otp";
                          authError.value = "";
                        }
                      }, [
                        createVNode(_component_UIcon, {
                          name: "ph:paper-plane-tilt-bold",
                          class: "h-3.5 w-3.5"
                        }),
                        createVNode("span", null, toDisplayString(authLabels.value.tabOtp), 1)
                      ], 10, ["onClick"]),
                      createVNode("button", {
                        type: "button",
                        class: ["flex items-center justify-center gap-1.5 rounded-lg py-2 transition", authMode.value === "password" ? "bg-white text-blue-600 shadow-2xs" : "text-slate-500 hover:text-slate-800"],
                        onClick: ($event) => {
                          authMode.value = "password";
                          authError.value = "";
                        }
                      }, [
                        createVNode(_component_UIcon, {
                          name: "ph:key-bold",
                          class: "h-3.5 w-3.5"
                        }),
                        createVNode("span", null, toDisplayString(authLabels.value.tabPassword), 1)
                      ], 10, ["onClick"])
                    ]),
                    authMode.value === "otp" ? (openBlock(), createBlock("form", {
                      key: 0,
                      class: "space-y-3.5",
                      onSubmit: withModifiers(verifyEmailOtpAndContinue, ["prevent"])
                    }, [
                      createVNode("div", null, [
                        createVNode("label", { class: "mb-1 block text-xs font-bold text-slate-700" }, toDisplayString(authLabels.value.emailLabel), 1),
                        createVNode("div", { class: "flex gap-2" }, [
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => authForm.email = $event,
                            type: "email",
                            required: "",
                            autocomplete: "email",
                            placeholder: authLabels.value.emailPlaceholder,
                            class: "h-11 min-w-0 flex-1 rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
                          }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                            [vModelText, authForm.email]
                          ]),
                          createVNode("button", {
                            type: "button",
                            disabled: otpSending.value || otpCooldown.value > 0 || !authForm.email.trim(),
                            class: "shrink-0 rounded-xl border border-blue-200 bg-blue-50 px-3.5 text-xs font-extrabold text-blue-700 transition hover:bg-blue-100 disabled:cursor-not-allowed disabled:opacity-50",
                            onClick: sendEmailOtp
                          }, [
                            otpSending.value ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(authLabels.value.sendingCode), 1)) : otpCooldown.value > 0 ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString(otpCooldown.value) + "s", 1)) : (openBlock(), createBlock("span", { key: 2 }, toDisplayString(otpSentOnce.value ? authLabels.value.resendCode : authLabels.value.sendCode), 1))
                          ], 8, ["disabled"])
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("div", { class: "mb-1 flex items-center justify-between" }, [
                          createVNode("label", { class: "text-xs font-bold text-slate-700" }, toDisplayString(authLabels.value.codeLabel), 1),
                          otpSentOnce.value ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-[11px] font-medium text-emerald-600"
                          }, toDisplayString(authLabels.value.codeSentHint), 1)) : createCommentVNode("", true)
                        ]),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => authForm.code = $event,
                          type: "text",
                          inputmode: "numeric",
                          maxlength: "6",
                          placeholder: authLabels.value.codePlaceholder,
                          class: "h-11 w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 font-mono text-base font-bold tracking-[0.35em] text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
                        }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                          [vModelText, authForm.code]
                        ])
                      ]),
                      otpDevCode.value ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex items-center justify-between gap-2 rounded-xl border border-emerald-200 bg-emerald-50/90 px-3.5 py-2.5 text-xs text-emerald-900"
                      }, [
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode(_component_UIcon, {
                            name: "ph:sparkle-fill",
                            class: "h-4 w-4 shrink-0 text-emerald-600"
                          }),
                          createVNode("span", null, [
                            createTextVNode(toDisplayString(authLabels.value.devCodePrefix), 1),
                            createVNode("strong", { class: "font-mono text-sm font-black tracking-wider text-emerald-700" }, toDisplayString(otpDevCode.value), 1)
                          ])
                        ]),
                        createVNode("button", {
                          type: "button",
                          class: "shrink-0 rounded-lg bg-emerald-600 px-2.5 py-1 text-[11px] font-bold text-white shadow-2xs transition hover:bg-emerald-500",
                          onClick: fillDevOtpAndVerify
                        }, toDisplayString(authLabels.value.devCodeFillBtn), 1)
                      ])) : createCommentVNode("", true),
                      authError.value ? (openBlock(), createBlock("p", {
                        key: 1,
                        class: "rounded-xl bg-rose-50 px-3 py-2 text-xs font-semibold text-rose-600",
                        role: "alert"
                      }, toDisplayString(authError.value), 1)) : createCommentVNode("", true),
                      createVNode("button", {
                        type: "submit",
                        disabled: authSubmitting.value || !authForm.email.trim() || authForm.code.trim().length < 6,
                        class: ui.cta
                      }, [
                        authSubmitting.value ? (openBlock(), createBlock(_component_UIcon, {
                          key: 0,
                          name: "ph:circle-notch-bold",
                          class: "h-5 w-5 animate-spin"
                        })) : createCommentVNode("", true),
                        createVNode("span", null, toDisplayString(authLabels.value.verifyAndBuildBtn), 1),
                        !authSubmitting.value ? (openBlock(), createBlock(_component_UIcon, {
                          key: 1,
                          name: "ph:arrow-right-bold",
                          class: "h-5 w-5"
                        })) : createCommentVNode("", true)
                      ], 10, ["disabled"])
                    ], 32)) : (openBlock(), createBlock("form", {
                      key: 1,
                      class: "space-y-3.5",
                      onSubmit: withModifiers(loginWithPasswordAndContinue, ["prevent"])
                    }, [
                      createVNode("div", null, [
                        createVNode("label", { class: "mb-1 block text-xs font-bold text-slate-700" }, toDisplayString(authLabels.value.emailLabel), 1),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => authForm.email = $event,
                          type: "email",
                          required: "",
                          autocomplete: "email",
                          placeholder: authLabels.value.emailPlaceholder,
                          class: "h-11 w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
                        }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                          [vModelText, authForm.email]
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("label", { class: "mb-1 block text-xs font-bold text-slate-700" }, toDisplayString(authLabels.value.passwordLabel), 1),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => authForm.password = $event,
                          type: "password",
                          required: "",
                          autocomplete: "current-password",
                          placeholder: authLabels.value.passwordPlaceholder,
                          class: "h-11 w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
                        }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                          [vModelText, authForm.password]
                        ])
                      ]),
                      authError.value ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "rounded-xl bg-rose-50 px-3 py-2 text-xs font-semibold text-rose-600",
                        role: "alert"
                      }, toDisplayString(authError.value), 1)) : createCommentVNode("", true),
                      createVNode("button", {
                        type: "submit",
                        disabled: authSubmitting.value || !authForm.email.trim() || !authForm.password,
                        class: ui.cta
                      }, [
                        authSubmitting.value ? (openBlock(), createBlock(_component_UIcon, {
                          key: 0,
                          name: "ph:circle-notch-bold",
                          class: "h-5 w-5 animate-spin"
                        })) : createCommentVNode("", true),
                        createVNode("span", null, toDisplayString(authLabels.value.passwordAndBuildBtn), 1),
                        !authSubmitting.value ? (openBlock(), createBlock(_component_UIcon, {
                          key: 1,
                          name: "ph:arrow-right-bold",
                          class: "h-5 w-5"
                        })) : createCommentVNode("", true)
                      ], 10, ["disabled"])
                    ], 32))
                  ])
                ])
              ], 8, ["aria-label"])) : createCommentVNode("", true),
              planOverlayOpen.value ? (openBlock(), createBlock("div", {
                key: 1,
                class: "fixed inset-0 z-50 flex items-center justify-center bg-slate-950/65 p-4 backdrop-blur-sm",
                role: "dialog",
                "aria-modal": "true",
                "aria-label": quotaLabels.value.modalTitle
              }, [
                createVNode("div", { class: "relative flex max-h-[90dvh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-2xl ring-1 ring-slate-900/10" }, [
                  createVNode("div", { class: "relative shrink-0 bg-gradient-to-br from-slate-950 via-[#0f2152] to-indigo-950 px-6 py-5 text-white" }, [
                    createVNode("button", {
                      type: "button",
                      class: "absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-slate-300 transition hover:bg-white/20 hover:text-white",
                      "aria-label": unref(t)("shopark.nav.closeMenu"),
                      onClick: ($event) => planOverlayOpen.value = false
                    }, [
                      createVNode(_component_UIcon, {
                        name: "ph:x-bold",
                        class: "h-4 w-4"
                      })
                    ], 8, ["aria-label", "onClick"]),
                    createVNode("div", { class: "flex flex-wrap items-center justify-between gap-4 pr-8" }, [
                      createVNode("div", { class: "flex items-center gap-3" }, [
                        createVNode("span", { class: "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-slate-950 shadow-lg shadow-amber-500/30" }, [
                          createVNode(_component_UIcon, {
                            name: "ph:crown-simple-fill",
                            class: "h-6 w-6"
                          })
                        ]),
                        createVNode("div", null, [
                          createVNode("div", { class: "inline-flex items-center gap-1 rounded-full bg-amber-400/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-300 ring-1 ring-amber-400/30" }, toDisplayString(quotaLabels.value.modalBadge), 1),
                          createVNode("h3", { class: "mt-1 text-base font-black tracking-tight text-white sm:text-lg" }, toDisplayString(quotaLabels.value.modalTitle), 1)
                        ])
                      ]),
                      createVNode("div", { class: "inline-flex rounded-full bg-white/10 p-1 text-xs font-bold" }, [
                        createVNode("button", {
                          type: "button",
                          class: ["rounded-full px-3.5 py-1.5 transition", planBillingCycle.value === "monthly" ? "bg-white text-slate-950 shadow-2xs" : "text-slate-300 hover:text-white"],
                          onClick: ($event) => planBillingCycle.value = "monthly"
                        }, toDisplayString(quotaLabels.value.cycleMonthly), 11, ["onClick"]),
                        createVNode("button", {
                          type: "button",
                          class: ["flex items-center gap-1 rounded-full px-3.5 py-1.5 transition", planBillingCycle.value === "yearly" ? "bg-amber-400 text-slate-950 shadow-2xs" : "text-slate-300 hover:text-white"],
                          onClick: ($event) => planBillingCycle.value = "yearly"
                        }, [
                          createVNode("span", null, toDisplayString(quotaLabels.value.cycleYearly), 1),
                          createVNode("span", { class: "rounded-full bg-slate-950/15 px-1.5 py-0.2 text-[10px] font-black" }, "-16%")
                        ], 10, ["onClick"])
                      ])
                    ]),
                    createVNode("p", { class: "mt-2 text-xs leading-relaxed text-slate-300" }, toDisplayString(quotaLabels.value.modalSubtitle), 1)
                  ]),
                  createVNode("div", { class: "min-h-0 flex-1 overflow-y-auto p-6" }, [
                    plansLoading.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "grid gap-4 sm:grid-cols-3"
                    }, [
                      (openBlock(), createBlock(Fragment, null, renderList(3, (idx) => {
                        return createVNode("div", {
                          key: idx,
                          class: "h-56 animate-pulse rounded-2xl border border-slate-200 bg-slate-50"
                        });
                      }), 64))
                    ])) : activePlanCards.value.length ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "grid gap-4 sm:grid-cols-3"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(activePlanCards.value, (plan) => {
                        return openBlock(), createBlock("div", {
                          key: plan.id,
                          class: ["flex flex-col justify-between rounded-2xl border p-4 transition-all", plan.planKey === "professional" ? "border-blue-500 bg-blue-50/20 ring-2 ring-blue-500/15 shadow-md" : "border-slate-200 bg-white hover:border-blue-300"]
                        }, [
                          createVNode("div", null, [
                            createVNode("div", { class: "flex items-center justify-between gap-2" }, [
                              createVNode("span", { class: "text-[11px] font-black uppercase tracking-wider text-blue-600" }, toDisplayString(plan.planKey), 1),
                              plan.storeLimit ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-extrabold text-emerald-700 ring-1 ring-emerald-200"
                              }, toDisplayString(quotaLabels.value.upToStoresPrefix) + " " + toDisplayString(plan.storeLimit) + " " + toDisplayString(quotaLabels.value.upToStoresSuffix), 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("h4", { class: "mt-1 text-base font-black text-slate-900" }, toDisplayString(plan.name), 1),
                            createVNode("div", { class: "mt-3 flex items-baseline gap-1" }, [
                              createVNode("span", { class: "text-2xl font-black text-slate-950" }, "\xA5" + toDisplayString(plan.price), 1),
                              createVNode("span", { class: "text-xs font-semibold text-slate-500" }, "/ " + toDisplayString(plan.interval === "year" ? quotaLabels.value.unitYear : quotaLabels.value.unitMonth), 1)
                            ]),
                            createVNode("ul", { class: "mt-3 space-y-1.5 border-t border-slate-100 pt-3 text-xs text-slate-600" }, [
                              createVNode("li", { class: "flex items-center gap-1.5 font-semibold text-slate-800" }, [
                                createVNode(_component_UIcon, {
                                  name: "ph:check-circle-fill",
                                  class: "h-3.5 w-3.5 shrink-0 text-emerald-500"
                                }),
                                createVNode("span", null, toDisplayString(quotaLabels.value.upToStoresPrefix) + " " + toDisplayString(plan.storeLimit || 1) + " " + toDisplayString(quotaLabels.value.upToStoresSuffix), 1)
                              ]),
                              createVNode("li", { class: "flex items-center gap-1.5" }, [
                                createVNode(_component_UIcon, {
                                  name: "ph:check-circle-fill",
                                  class: "h-3.5 w-3.5 shrink-0 text-emerald-500"
                                }),
                                createVNode("span", null, toDisplayString(quotaLabels.value.zeroCommissionFeat), 1)
                              ]),
                              createVNode("li", { class: "flex items-center gap-1.5" }, [
                                createVNode(_component_UIcon, {
                                  name: "ph:check-circle-fill",
                                  class: "h-3.5 w-3.5 shrink-0 text-emerald-500"
                                }),
                                createVNode("span", null, toDisplayString(quotaLabels.value.aiDecorFeat), 1)
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "mt-4 pt-2" }, [
                            createVNode(_component_ShoparkCheckoutModal, {
                              "product-id": plan.id,
                              "plan-key": plan.planKey,
                              onSuccess: onPlanPurchased
                            }, {
                              trigger: withCtx(({ loading, open: openCheckout }) => [
                                createVNode("button", {
                                  type: "button",
                                  disabled: loading,
                                  class: ["flex w-full items-center justify-center gap-1.5 rounded-xl px-4 py-2.5 text-xs font-extrabold transition", plan.planKey === "professional" ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/25 hover:brightness-110" : "bg-slate-900 text-white hover:bg-slate-800"],
                                  onClick: openCheckout
                                }, [
                                  loading ? (openBlock(), createBlock(_component_UIcon, {
                                    key: 0,
                                    name: "ph:circle-notch-bold",
                                    class: "h-4 w-4 animate-spin"
                                  })) : createCommentVNode("", true),
                                  createVNode("span", null, toDisplayString(quotaLabels.value.subscribeAndUnlockBtn), 1)
                                ], 10, ["disabled", "onClick"])
                              ]),
                              _: 2
                            }, 1032, ["product-id", "plan-key"])
                          ])
                        ], 2);
                      }), 128))
                    ])) : (openBlock(), createBlock("div", {
                      key: 2,
                      class: "rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center space-y-3"
                    }, [
                      createVNode("p", { class: "text-sm font-semibold text-slate-700" }, toDisplayString(quotaLabels.value.emptyPlansHint), 1),
                      createVNode("button", {
                        type: "button",
                        class: "inline-flex items-center gap-1.5 rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-extrabold text-white shadow-sm hover:bg-blue-500",
                        onClick: goSubscription
                      }, [
                        createVNode("span", null, toDisplayString(quotaLabels.value.goSubscriptionPageBtn), 1),
                        createVNode(_component_UIcon, {
                          name: "ph:arrow-right-bold",
                          class: "h-4 w-4"
                        })
                      ])
                    ]))
                  ]),
                  createVNode("div", { class: "flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 bg-slate-50 px-6 py-3.5 text-xs" }, [
                    createVNode("span", { class: "text-slate-500" }, toDisplayString(quotaLabels.value.footerExistingTip), 1),
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      usableStores.value.length ? (openBlock(), createBlock("button", {
                        key: 0,
                        type: "button",
                        class: "inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3.5 py-2 font-bold text-slate-700 hover:border-blue-300 hover:text-blue-600",
                        onClick: selectFirstExistingStoreAndClosePlanModal
                      }, [
                        createVNode(_component_UIcon, {
                          name: "ph:storefront-bold",
                          class: "h-3.5 w-3.5"
                        }),
                        createVNode("span", null, toDisplayString(quotaLabels.value.useExistingInsteadBtn), 1)
                      ])) : createCommentVNode("", true),
                      createVNode("button", {
                        type: "button",
                        class: "inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3.5 py-2 font-semibold text-slate-600 hover:text-slate-900",
                        onClick: goSubscription
                      }, [
                        createVNode("span", null, toDisplayString(quotaLabels.value.goSubscriptionPageBtn), 1),
                        createVNode(_component_UIcon, {
                          name: "ph:arrow-up-right-bold",
                          class: "h-3.5 w-3.5"
                        })
                      ])
                    ])
                  ])
                ])
              ], 8, ["aria-label"])) : createCommentVNode("", true),
              createVNode(_component_CaptchaSlider, {
                ref_key: "captchaRef",
                ref: captchaRef,
                onSuccess: onCaptcha
              }, null, 512)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shopark/components/ShoparkLaunchChat.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ShoparkLaunchChat = Object.assign(_sfc_main, { __name: "ShoparkLaunchChat" });

export { ShoparkLaunchChat as default };
//# sourceMappingURL=ShoparkLaunchChat-kvUYxnfk.mjs.map
