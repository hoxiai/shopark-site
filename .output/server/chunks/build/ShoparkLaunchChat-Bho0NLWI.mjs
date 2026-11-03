import { u as useI18n, bl as useCustomerAuth, D as useLocaleRouter, H as useRoute, r as useRouter, f as _sfc_main$H, j as _sfc_main$X, d as _sfc_main$S, k as _sfc_main$x, g as _sfc_main$w, p as _sfc_main$v, B as _sfc_main$l, q as navigateTo } from './server.mjs';
import { _ as __nuxt_component_7 } from './CaptchaSlider-Bv1OA_7C.mjs';
import { defineComponent, ref, reactive, computed, watch, nextTick, mergeProps, isRef, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, withModifiers, withDirectives, withKeys, vModelText, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderStyle, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { d as SHOPARK_STORE_NAME_MIN, e as SHOPARK_STORE_NAME_MAX, c as SHOPARK_STORE_LANGS, h as SHOPARK_STORE_CURRENCIES, f as isShoparkStoreLang, g as SHOPARK_STORE_DEFAULTS, b as SHOPARK_STORE_TIMEZONES } from './store-options-B7dz28kT.mjs';
import { u as useShoparkConsoleCopy } from './useShoparkConsole-Cf3s6RH-.mjs';
import { u as useShoparkLaunch } from './useShoparkLaunch-CSCC9z_d.mjs';
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
      avatar: "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-md shadow-indigo-500/25",
      bubbleAi: "max-w-[85%] whitespace-pre-line rounded-2xl rounded-tl-md bg-white px-4 py-3 text-[15px] leading-7 text-slate-800 shadow-sm ring-1 ring-slate-200/70",
      bubbleUser: "max-w-[80%] whitespace-pre-line rounded-2xl rounded-tr-md bg-gradient-to-br from-blue-600 to-indigo-600 px-4 py-3 text-[15px] leading-7 text-white shadow-md shadow-blue-600/20",
      card: "ml-12 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200/70 max-sm:ml-0",
      cta: "flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3.5 text-base font-extrabold text-white shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none disabled:hover:translate-y-0",
      option: "flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-left text-sm transition hover:border-blue-300 disabled:cursor-not-allowed disabled:opacity-50",
      optionOn: "border-blue-500 bg-blue-50/60 ring-2 ring-blue-500/20"
    };
    const KNOWN_ERRORS = /* @__PURE__ */ new Set(["captcha_required", "rate_limited", "login_required", "too_many_turns", "invalid_input", "unavailable", "store_name", "generic"]);
    const { t, locale } = useI18n();
    const { loggedIn } = useCustomerAuth();
    const { localePath } = useLocaleRouter();
    const { copy } = useShoparkConsoleCopy();
    const { open } = useShoparkLaunch();
    const route = useRoute();
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
    const errorKey = ref("");
    const captchaRef = ref(null);
    const scrollRef = ref(null);
    const inputRef = ref(null);
    const requestId = ref("");
    const stores = ref([]);
    const storesLoading = ref(false);
    const canCreate = ref(false);
    const choice = ref("");
    const categoryId = ref(void 0);
    const categories = ref([]);
    const scope = reactive({ storeSetup: false, policies: false });
    const launchTarget = ref(null);
    const launchStatus = ref(null);
    let statusTimer = null;
    const followUps = computed(() => Math.max(0, messages.value.filter((item) => item.role === "user").length - 1));
    const isLiveStudioStage = computed(() => {
      var _a;
      return (stage.value === "building" || stage.value === "done") && Boolean((_a = launchTarget.value) == null ? void 0 : _a.url);
    });
    const canType = computed(() => !messages.value.length || stage.value === "plan" && loggedIn.value && followUps.value < FOLLOW_UPS_MAX || isLiveStudioStage.value);
    const quickDecorPrompts = computed(() => [
      t("shopark.launch.quickPrompts.hero"),
      t("shopark.launch.quickPrompts.dark"),
      t("shopark.launch.quickPrompts.faq")
    ]);
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
    const buildFailed = computed(() => stage.value === "done" && buildSteps.value.length > 0 && !buildSteps.value.some((item) => item.state === "done"));
    const buildProgressPercent = computed(() => {
      if (stage.value === "done") return 100;
      const total = buildSteps.value.length || 1;
      const doneCount = buildSteps.value.filter((item) => item.state === "done" || item.state === "failed").length;
      const runningBoost = buildSteps.value.some((item) => item.state === "running") ? 0.35 : 0.15;
      return Math.min(95, Math.max(12, Math.round((doneCount + runningBoost) / total * 100)));
    });
    const usableStores = computed(() => stores.value.filter((store) => {
      if (store.status === 10 || store.storeStatus === 30) return false;
      if (store.expireAt && !store.expireAt.startsWith("2099-") && Date.parse(store.expireAt) <= Date.now()) return false;
      return Boolean(store.trial) || Boolean(store.planKey && store.planKey !== "free");
    }));
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
    watch(() => [messages.value.length, busy.value, stage.value, Boolean(intake.value), streamingReply.value.length], async () => {
      var _a;
      await nextTick();
      (_a = scrollRef.value) == null ? void 0 : _a.scrollTo({ top: scrollRef.value.scrollHeight, behavior: "smooth" });
    });
    function autosize() {
      const el = inputRef.value;
      if (!el) return;
      el.style.height = "auto";
      el.style.height = `${Math.min(el.scrollHeight, 128)}px`;
    }
    function firstMessage(text) {
      return [
        `${t("shopark.launch.mode")}: ${t(`shopark.launch.modes.${form.mode}`)} \xB7 ${t("shopark.launch.market")}: ${t(`shopark.launch.markets.${form.market}`)} \xB7 ${t("shopark.launch.style")}: ${t(`shopark.launch.styles.${form.style}`)}`,
        text
      ].join("\n");
    }
    function applyIntake(result) {
      const first = !intake.value;
      intake.value = result;
      Object.assign(brief, result.brief, first ? { businessMode: form.mode, archetype: form.style } : {});
      const lang = isShoparkStoreLang(brief.language) ? brief.language : isShoparkStoreLang(locale.value) ? locale.value : "en";
      brief.language = lang;
      if (!SHOPARK_STORE_CURRENCIES.includes(brief.currency)) brief.currency = SHOPARK_STORE_DEFAULTS[lang].currency;
      if (!SHOPARK_STORE_TIMEZONES.includes(brief.timezone)) brief.timezone = SHOPARK_STORE_DEFAULTS[lang].timezone;
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
          body: JSON.stringify({ messages: messages.value, language: locale.value, captchaTicket })
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
    function launchUrlWithPrompt(promptText) {
      var _a;
      const base = ((_a = launchTarget.value) == null ? void 0 : _a.url) || "";
      const trimmed = (promptText || "").trim();
      if (!base || !trimmed) return base;
      try {
        const parsed = new URL(base, (void 0).location.origin);
        const redirect = parsed.searchParams.get("redirect") || "/ai-decor";
        const sep = redirect.includes("?") ? "&" : "?";
        parsed.searchParams.set("redirect", `${redirect}${sep}prompt=${encodeURIComponent(trimmed)}`);
        return parsed.toString();
      } catch {
        return base;
      }
    }
    function openLiveStudioWithPrompt(promptText) {
      const url = launchUrlWithPrompt(promptText);
      if (url) (void 0).location.assign(url);
    }
    function send() {
      var _a;
      const text = draft.value.trim();
      if (!text || busy.value || !canType.value) return;
      draft.value = "";
      errorKey.value = "";
      void nextTick(autosize);
      if (isLiveStudioStage.value) {
        openLiveStudioWithPrompt(text);
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
      void requestIntake(ticket);
    }
    function retry() {
      var _a;
      if (loggedIn.value) void requestIntake();
      else (_a = captchaRef.value) == null ? void 0 : _a.show();
    }
    function goLogin() {
      storage.save();
      const back = `${localePath(route.path)}?launch=resume`;
      void navigateTo(`${localePath("/auth/login")}?redirect=${encodeURIComponent(back)}`);
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
        const quota = res.data.quota;
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
          body: { storeId: target.storeId, sessionId: target.sessionId }
        });
        launchStatus.value = res.data;
        const steps = buildSteps.value;
        const allSettled = steps.length > 0 && steps.every((item) => item.state === "done" || item.state === "failed");
        if (res.data.status === "done" || res.data.expired || allSettled && ((_a = res.data.progress) == null ? void 0 : _a.runner) === "server") {
          stage.value = "done";
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
        return;
      }
      if (!requestId.value) requestId.value = crypto.randomUUID();
      stage.value = "starting";
      void loadStores();
    }
    async function launch() {
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
        if (res.data.sessionId) {
          stage.value = "building";
          void pollLaunchStatus();
        } else {
          (void 0).location.assign(res.data.url);
        }
      } catch (error) {
        errorKey.value = readReason(error);
        stage.value = usableStores.value.length > 0 || !canCreate.value ? "stores" : "plan";
      } finally {
        busy.value = false;
      }
    }
    watch(open, (isOpen) => {
      if (!isOpen) stopStatusPolling();
      else if (stage.value === "building" && launchTarget.value) void pollLaunchStatus();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UModal = _sfc_main$H;
      const _component_UIcon = _sfc_main$X;
      const _component_UButton = _sfc_main$S;
      const _component_UFormField = _sfc_main$x;
      const _component_UInput = _sfc_main$w;
      const _component_USelect = _sfc_main$v;
      const _component_UCheckbox = _sfc_main$l;
      const _component_CaptchaSlider = __nuxt_component_7;
      _push(ssrRenderComponent(_component_UModal, mergeProps({
        open: unref(open),
        "onUpdate:open": ($event) => isRef(open) ? open.value = $event : null,
        ui: { content: "flex w-[calc(100vw-1.5rem)] max-w-3xl h-[min(820px,calc(100dvh-2rem))] flex-col overflow-hidden rounded-[28px] p-0 max-sm:h-[100dvh] max-sm:w-screen max-sm:max-w-none max-sm:rounded-none" }
      }, _attrs), {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<header class="relative shrink-0 overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-5 py-4 text-white sm:px-8 sm:py-5"${_scopeId}><div class="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-white/10 blur-2xl"${_scopeId}></div><div class="relative flex items-center gap-3.5"${_scopeId}><span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/25"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:sparkle-fill",
              class: "h-6 w-6"
            }, null, _parent2, _scopeId));
            _push2(`</span><div class="min-w-0 flex-1"${_scopeId}><h2 class="text-lg font-black tracking-tight sm:text-xl"${_scopeId}>${ssrInterpolate(unref(t)("shopark.launch.title"))}</h2><p class="mt-0.5 truncate text-sm text-white/75"${_scopeId}>${ssrInterpolate(unref(t)("shopark.launch.subtitle"))}</p></div>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              icon: "ph:x-bold",
              class: "shrink-0 rounded-full text-white hover:bg-white/15",
              "aria-label": unref(t)("shopark.nav.closeMenu"),
              onClick: ($event) => open.value = false
            }, null, _parent2, _scopeId));
            _push2(`</div></header><div class="min-h-0 flex-1 overflow-y-auto bg-slate-50"${_scopeId}><div class="mx-auto w-full max-w-2xl space-y-5 px-4 py-6 sm:px-8"${_scopeId}><ol class="space-y-5" aria-live="polite"${_scopeId}><li class="flex items-start gap-3"${_scopeId}><span class="${ssrRenderClass(ui.avatar)}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:sparkle-fill",
              class: "h-4 w-4"
            }, null, _parent2, _scopeId));
            _push2(`</span><p class="${ssrRenderClass(ui.bubbleAi)}"${_scopeId}>${ssrInterpolate(unref(t)("shopark.launch.greeting"))}</p></li><!--[-->`);
            ssrRenderList(messages.value, (message, index) => {
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
              _push2(`<p class="${ssrRenderClass(message.role === "user" ? ui.bubbleUser : ui.bubbleAi)}"${_scopeId}>${ssrInterpolate(message.text)}</p></li>`);
            });
            _push2(`<!--]-->`);
            if (busy.value) {
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
                _push2(`<!--]--></span> ${ssrInterpolate(unref(t)("shopark.launch.thinking"))}</p>`);
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
              _push2(`<section class="${ssrRenderClass([ui.card, "space-y-3.5"])}"${_scopeId}><p class="text-xs font-bold uppercase tracking-wider text-slate-400"${_scopeId}>${ssrInterpolate(unref(t)("shopark.launch.quickPick"))}</p><!--[-->`);
              ssrRenderList(chipGroups, (group) => {
                _push2(`<div class="flex flex-wrap items-center gap-2" role="group"${ssrRenderAttr("aria-label", unref(t)(`shopark.launch.${group.key}`))}${_scopeId}><span class="w-16 shrink-0 text-sm font-bold text-slate-700"${_scopeId}>${ssrInterpolate(unref(t)(`shopark.launch.${group.key}`))}</span><!--[-->`);
                ssrRenderList(group.options, (option) => {
                  _push2(`<button type="button" class="${ssrRenderClass([form[group.key] === option ? "border-transparent bg-blue-600 text-white shadow-sm shadow-blue-600/30" : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600", "rounded-full border px-3.5 py-1.5 text-sm font-semibold transition"])}"${ssrRenderAttr("aria-pressed", form[group.key] === option)}${_scopeId}>${ssrInterpolate(unref(t)(`shopark.launch.${group.labels}.${option}`))}</button>`);
                });
                _push2(`<!--]--></div>`);
              });
              _push2(`<!--]--></section>`);
            } else {
              _push2(`<!---->`);
            }
            if (intake.value) {
              _push2(`<section class="${ssrRenderClass([ui.card, "space-y-5"])}"${ssrRenderAttr("aria-label", unref(t)("shopark.launch.planTitle"))}${_scopeId}><div class="flex items-center gap-3"${_scopeId}><span class="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:storefront-bold",
                class: "h-5 w-5"
              }, null, _parent2, _scopeId));
              _push2(`</span><div class="min-w-0 flex-1"${_scopeId}><p class="text-base font-black text-slate-900"${_scopeId}>${ssrInterpolate(unref(t)("shopark.launch.planTitle"))}</p><p class="text-xs text-slate-500"${_scopeId}>${ssrInterpolate(intake.value.degraded ? unref(t)("shopark.launch.degraded") : unref(t)("shopark.launch.defaulted"))}</p></div></div>`);
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
              _push2(`<section class="${ssrRenderClass([ui.card, "flex flex-wrap items-center justify-between gap-4"])}"${_scopeId}><p class="text-sm font-semibold text-slate-700"${_scopeId}>${ssrInterpolate(unref(t)("shopark.launch.loginPrompt"))}</p><button type="button" class="${ssrRenderClass([ui.cta, "w-auto px-6"])}"${_scopeId}>${ssrInterpolate(unref(t)("shopark.launch.signIn"))}`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:arrow-right-bold",
                class: "h-5 w-5"
              }, null, _parent2, _scopeId));
              _push2(`</button></section>`);
            } else {
              _push2(`<!---->`);
            }
            if (stage.value === "stores") {
              _push2(`<section class="${ssrRenderClass([ui.card, "space-y-4"])}"${ssrRenderAttr("aria-label", unref(t)("shopark.launch.storeTitle"))}${_scopeId}><p class="text-base font-black text-slate-900"${_scopeId}>${ssrInterpolate(unref(t)("shopark.launch.storeTitle"))}</p>`);
              if (storesLoading.value) {
                _push2(`<p class="text-sm text-slate-500"${_scopeId}>${ssrInterpolate(unref(t)("shopark.launch.loadingStores"))}</p>`);
              } else {
                _push2(`<!--[--><div role="radiogroup" class="space-y-2.5"${_scopeId}><button type="button" role="radio"${ssrRenderAttr("aria-checked", choice.value === "new")}${ssrIncludeBooleanAttr(!canCreate.value) ? " disabled" : ""} class="${ssrRenderClass([ui.option, choice.value === "new" ? ui.optionOn : ""])}"${_scopeId}><span class="flex items-center gap-2 font-bold text-slate-900"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:plus-circle-bold",
                  class: "h-5 w-5 text-blue-600"
                }, null, _parent2, _scopeId));
                _push2(`${ssrInterpolate(unref(t)("shopark.launch.newStore"))}</span><span class="truncate pl-3 text-slate-500"${_scopeId}>${ssrInterpolate(brief.storeName)}</span></button>`);
                if (!canCreate.value) {
                  _push2(`<p class="text-xs text-amber-600"${_scopeId}>${ssrInterpolate(unref(t)("shopark.launch.quotaFull"))}</p>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<!--[-->`);
                ssrRenderList(usableStores.value, (store) => {
                  _push2(`<button type="button" role="radio"${ssrRenderAttr("aria-checked", choice.value === store.id)} class="${ssrRenderClass([ui.option, choice.value === store.id ? ui.optionOn : ""])}"${_scopeId}><span class="flex items-center gap-2 font-bold text-slate-900"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: "ph:storefront-bold",
                    class: "h-5 w-5 text-slate-400"
                  }, null, _parent2, _scopeId));
                  _push2(`${ssrInterpolate(store.name)}</span><span class="truncate pl-3 text-slate-500"${_scopeId}>${ssrInterpolate(store.domain)}</span></button>`);
                });
                _push2(`<!--]--></div>`);
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
                } else if (choice.value) {
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
                _push2(`<button type="button" class="${ssrRenderClass(ui.cta)}"${ssrIncludeBooleanAttr(busy.value || !choice.value || choice.value === "new" && !categoryId.value) ? " disabled" : ""}${_scopeId}>${ssrInterpolate(unref(t)("shopark.launch.start"))}`);
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
              _push2(`<section class="${ssrRenderClass([ui.card, "space-y-4"])}" role="status" aria-live="polite"${_scopeId}><div class="flex items-start gap-3"${_scopeId}><span class="${ssrRenderClass([stage.value === "done" ? "bg-emerald-50 text-emerald-600" : "bg-blue-50 text-blue-600", "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"])}"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: stage.value === "done" ? "ph:check-circle-fill" : "ph:circle-notch-bold",
                class: ["h-5 w-5", stage.value === "building" ? "motion-safe:animate-spin" : ""]
              }, null, _parent2, _scopeId));
              _push2(`</span><div class="min-w-0 flex-1"${_scopeId}><div class="flex flex-wrap items-center gap-2"${_scopeId}><p class="text-base font-black text-slate-900"${_scopeId}>${ssrInterpolate(stage.value === "done" ? unref(t)("shopark.launch.doneTitle") : unref(t)("shopark.launch.buildingTitle"))}</p>`);
              if ((_a = launchStatus.value) == null ? void 0 : _a.domain) {
                _push2(`<span class="rounded-full bg-slate-100 px-2.5 py-0.5 font-mono text-xs text-slate-600"${_scopeId}>${ssrInterpolate(launchStatus.value.domain)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><p class="mt-0.5 text-xs text-slate-500"${_scopeId}>${ssrInterpolate(stage.value === "done" ? unref(t)("shopark.launch.doneSubtitle") : unref(t)("shopark.launch.buildingSubtitle"))}</p></div></div><div class="h-2 w-full overflow-hidden rounded-full bg-slate-100"${_scopeId}><div class="${ssrRenderClass([stage.value === "done" ? "bg-emerald-500" : "bg-gradient-to-r from-blue-600 to-indigo-600", "h-full rounded-full transition-all duration-500"])}" style="${ssrRenderStyle({ width: `${buildProgressPercent.value}%` })}"${_scopeId}></div></div><ul class="space-y-2 rounded-xl bg-slate-50/80 p-3.5 text-sm"${_scopeId}><!--[-->`);
              ssrRenderList(buildSteps.value, (item) => {
                _push2(`<li class="flex items-center justify-between gap-3"${_scopeId}><span class="flex items-center gap-2.5 text-slate-700"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: item.state === "done" ? "ph:check-circle-fill" : item.state === "running" ? "ph:circle-notch-bold" : item.state === "failed" ? "ph:warning-circle-fill" : "ph:circle-dashed",
                  class: ["h-4 w-4 shrink-0", item.state === "done" ? "text-emerald-500" : item.state === "running" ? "text-blue-600 motion-safe:animate-spin" : item.state === "failed" ? "text-amber-500" : "text-slate-300"]
                }, null, _parent2, _scopeId));
                _push2(`<span class="${ssrRenderClass(item.state === "done" ? "font-semibold text-slate-900" : item.state === "running" ? "font-semibold text-blue-700" : "text-slate-500")}"${_scopeId}>${ssrInterpolate(item.label)}</span></span></li>`);
              });
              _push2(`<!--]--></ul>`);
              if (launchTarget.value && !buildFailed.value) {
                _push2(`<div class="space-y-2 rounded-xl border border-indigo-100 bg-indigo-50/40 p-3"${_scopeId}><p class="text-xs font-semibold text-indigo-900"${_scopeId}>${ssrInterpolate(unref(t)("shopark.launch.liveEditHint"))}</p><div class="flex flex-wrap gap-1.5"${_scopeId}><!--[-->`);
                ssrRenderList(quickDecorPrompts.value, (item) => {
                  _push2(`<button type="button" class="rounded-full border border-indigo-200/80 bg-white px-3 py-1 text-xs font-medium text-indigo-700 transition hover:border-indigo-400 hover:bg-indigo-50"${_scopeId}>${ssrInterpolate(item)}</button>`);
                });
                _push2(`<!--]--></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (stage.value === "done" && launchTarget.value) {
                _push2(`<div class="space-y-2.5 pt-1"${_scopeId}>`);
                if (buildFailed.value) {
                  _push2(`<button type="button" class="${ssrRenderClass(ui.cta)}"${ssrIncludeBooleanAttr(busy.value) ? " disabled" : ""}${_scopeId}>${ssrInterpolate(unref(t)("shopark.launch.retry"))} `);
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: "ph:arrows-clockwise-bold",
                    class: "h-5 w-5"
                  }, null, _parent2, _scopeId));
                  _push2(`</button>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<a${ssrRenderAttr("href", launchTarget.value.url)} class="${ssrRenderClass(buildFailed.value ? "flex w-full items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50" : ui.cta)}"${_scopeId}>${ssrInterpolate(unref(t)("shopark.launch.previewAndPublish"))} `);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:arrow-right-bold",
                  class: "h-5 w-5"
                }, null, _parent2, _scopeId));
                _push2(`</a>`);
                if (launchTarget.value.dashboardUrl) {
                  _push2(`<a${ssrRenderAttr("href", launchTarget.value.dashboardUrl)} class="flex w-full items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"${_scopeId}>${ssrInterpolate(unref(t)("shopark.launch.openDashboard"))}</a>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              } else if (launchTarget.value) {
                _push2(`<div class="flex justify-end pt-1"${_scopeId}><a${ssrRenderAttr("href", launchTarget.value.url)} class="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700"${_scopeId}>${ssrInterpolate(unref(t)("shopark.launch.openWhileBuilding"))} `);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:arrow-up-right-bold",
                  class: "h-3.5 w-3.5"
                }, null, _parent2, _scopeId));
                _push2(`</a></div>`);
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
            _push2(`</div></div><footer class="shrink-0 border-t border-slate-200/70 bg-white px-4 py-3 sm:px-8 sm:py-4"${_scopeId}>`);
            if (canType.value) {
              _push2(`<form class="mx-auto flex w-full max-w-2xl items-end gap-2 rounded-2xl bg-slate-50 p-2 ring-1 ring-slate-200 transition focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-500"${_scopeId}><textarea rows="1"${ssrRenderAttr("maxlength", MESSAGE_MAX)}${ssrIncludeBooleanAttr(busy.value) ? " disabled" : ""} class="max-h-32 min-h-[44px] flex-1 resize-none bg-transparent px-3 py-2.5 text-[15px] leading-6 text-slate-900 outline-none placeholder:text-slate-400"${ssrRenderAttr("aria-label", unref(t)("shopark.launch.inputLabel"))}${ssrRenderAttr("placeholder", isLiveStudioStage.value ? unref(t)("shopark.launch.liveEditPlaceholder") : messages.value.length ? unref(t)("shopark.launch.followUpPlaceholder") : unref(t)("shopark.launch.offeringPlaceholder"))}${_scopeId}>${ssrInterpolate(draft.value)}</textarea><button type="submit"${ssrIncludeBooleanAttr(busy.value || !draft.value.trim()) ? " disabled" : ""}${ssrRenderAttr("aria-label", unref(t)("shopark.launch.send"))} class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/30 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:paper-plane-tilt-fill",
                class: "h-5 w-5"
              }, null, _parent2, _scopeId));
              _push2(`</button></form>`);
            } else {
              _push2(`<p class="mx-auto max-w-2xl py-2 text-center text-xs text-slate-400"${_scopeId}>${ssrInterpolate(intake.value && !unref(loggedIn) && stage.value === "plan" ? unref(t)("shopark.launch.loginToFollowUp") : unref(t)("shopark.launch.composerDone"))}</p>`);
            }
            _push2(`</footer>`);
            _push2(ssrRenderComponent(_component_CaptchaSlider, {
              ref_key: "captchaRef",
              ref: captchaRef,
              onSuccess: onCaptcha
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("header", { class: "relative shrink-0 overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-5 py-4 text-white sm:px-8 sm:py-5" }, [
                createVNode("div", { class: "pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-white/10 blur-2xl" }),
                createVNode("div", { class: "relative flex items-center gap-3.5" }, [
                  createVNode("span", { class: "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/25" }, [
                    createVNode(_component_UIcon, {
                      name: "ph:sparkle-fill",
                      class: "h-6 w-6"
                    })
                  ]),
                  createVNode("div", { class: "min-w-0 flex-1" }, [
                    createVNode("h2", { class: "text-lg font-black tracking-tight sm:text-xl" }, toDisplayString(unref(t)("shopark.launch.title")), 1),
                    createVNode("p", { class: "mt-0.5 truncate text-sm text-white/75" }, toDisplayString(unref(t)("shopark.launch.subtitle")), 1)
                  ]),
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    icon: "ph:x-bold",
                    class: "shrink-0 rounded-full text-white hover:bg-white/15",
                    "aria-label": unref(t)("shopark.nav.closeMenu"),
                    onClick: ($event) => open.value = false
                  }, null, 8, ["aria-label", "onClick"])
                ])
              ]),
              createVNode("div", {
                ref_key: "scrollRef",
                ref: scrollRef,
                class: "min-h-0 flex-1 overflow-y-auto bg-slate-50"
              }, [
                createVNode("div", { class: "mx-auto w-full max-w-2xl space-y-5 px-4 py-6 sm:px-8" }, [
                  createVNode("ol", {
                    class: "space-y-5",
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
                      createVNode("p", {
                        class: ui.bubbleAi
                      }, toDisplayString(unref(t)("shopark.launch.greeting")), 3)
                    ]),
                    (openBlock(true), createBlock(Fragment, null, renderList(messages.value, (message, index) => {
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
                        createVNode("p", {
                          class: message.role === "user" ? ui.bubbleUser : ui.bubbleAi
                        }, toDisplayString(message.text), 3)
                      ], 2);
                    }), 128)),
                    busy.value ? (openBlock(), createBlock("li", {
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
                        createTextVNode(" " + toDisplayString(unref(t)("shopark.launch.thinking")), 1)
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
                    class: [ui.card, "space-y-3.5"]
                  }, [
                    createVNode("p", { class: "text-xs font-bold uppercase tracking-wider text-slate-400" }, toDisplayString(unref(t)("shopark.launch.quickPick")), 1),
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
                    }), 64))
                  ], 2)) : createCommentVNode("", true),
                  intake.value ? (openBlock(), createBlock("section", {
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
                        createVNode("p", { class: "text-base font-black text-slate-900" }, toDisplayString(unref(t)("shopark.launch.planTitle")), 1),
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
                    class: [ui.card, "flex flex-wrap items-center justify-between gap-4"]
                  }, [
                    createVNode("p", { class: "text-sm font-semibold text-slate-700" }, toDisplayString(unref(t)("shopark.launch.loginPrompt")), 1),
                    createVNode("button", {
                      type: "button",
                      class: [ui.cta, "w-auto px-6"],
                      onClick: goLogin
                    }, [
                      createTextVNode(toDisplayString(unref(t)("shopark.launch.signIn")), 1),
                      createVNode(_component_UIcon, {
                        name: "ph:arrow-right-bold",
                        class: "h-5 w-5"
                      })
                    ], 2)
                  ], 2)) : createCommentVNode("", true),
                  stage.value === "stores" ? (openBlock(), createBlock("section", {
                    key: 3,
                    class: [ui.card, "space-y-4"],
                    "aria-label": unref(t)("shopark.launch.storeTitle")
                  }, [
                    createVNode("p", { class: "text-base font-black text-slate-900" }, toDisplayString(unref(t)("shopark.launch.storeTitle")), 1),
                    storesLoading.value ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "text-sm text-slate-500"
                    }, toDisplayString(unref(t)("shopark.launch.loadingStores")), 1)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
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
                            createTextVNode(toDisplayString(unref(t)("shopark.launch.newStore")), 1)
                          ]),
                          createVNode("span", { class: "truncate pl-3 text-slate-500" }, toDisplayString(brief.storeName), 1)
                        ], 10, ["aria-checked", "disabled", "onClick"]),
                        !canCreate.value ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "text-xs text-amber-600"
                        }, toDisplayString(unref(t)("shopark.launch.quotaFull")), 1)) : createCommentVNode("", true),
                        (openBlock(true), createBlock(Fragment, null, renderList(usableStores.value, (store) => {
                          return openBlock(), createBlock("button", {
                            key: store.id,
                            type: "button",
                            role: "radio",
                            "aria-checked": choice.value === store.id,
                            class: [ui.option, choice.value === store.id ? ui.optionOn : ""],
                            onClick: ($event) => choice.value = store.id
                          }, [
                            createVNode("span", { class: "flex items-center gap-2 font-bold text-slate-900" }, [
                              createVNode(_component_UIcon, {
                                name: "ph:storefront-bold",
                                class: "h-5 w-5 text-slate-400"
                              }),
                              createTextVNode(toDisplayString(store.name), 1)
                            ]),
                            createVNode("span", { class: "truncate pl-3 text-slate-500" }, toDisplayString(store.domain), 1)
                          ], 10, ["aria-checked", "onClick"]);
                        }), 128))
                      ]),
                      choice.value === "new" && !categoryId.value ? (openBlock(), createBlock(_component_UFormField, {
                        key: 0,
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
                      }, 8, ["label"])) : choice.value ? (openBlock(), createBlock("div", {
                        key: 1,
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
                        createTextVNode(toDisplayString(unref(t)("shopark.launch.start")), 1),
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
                    class: [ui.card, "space-y-4"],
                    role: "status",
                    "aria-live": "polite"
                  }, [
                    createVNode("div", { class: "flex items-start gap-3" }, [
                      createVNode("span", {
                        class: ["flex h-10 w-10 shrink-0 items-center justify-center rounded-xl", stage.value === "done" ? "bg-emerald-50 text-emerald-600" : "bg-blue-50 text-blue-600"]
                      }, [
                        createVNode(_component_UIcon, {
                          name: stage.value === "done" ? "ph:check-circle-fill" : "ph:circle-notch-bold",
                          class: ["h-5 w-5", stage.value === "building" ? "motion-safe:animate-spin" : ""]
                        }, null, 8, ["name", "class"])
                      ], 2),
                      createVNode("div", { class: "min-w-0 flex-1" }, [
                        createVNode("div", { class: "flex flex-wrap items-center gap-2" }, [
                          createVNode("p", { class: "text-base font-black text-slate-900" }, toDisplayString(stage.value === "done" ? unref(t)("shopark.launch.doneTitle") : unref(t)("shopark.launch.buildingTitle")), 1),
                          ((_b = launchStatus.value) == null ? void 0 : _b.domain) ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "rounded-full bg-slate-100 px-2.5 py-0.5 font-mono text-xs text-slate-600"
                          }, toDisplayString(launchStatus.value.domain), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("p", { class: "mt-0.5 text-xs text-slate-500" }, toDisplayString(stage.value === "done" ? unref(t)("shopark.launch.doneSubtitle") : unref(t)("shopark.launch.buildingSubtitle")), 1)
                      ])
                    ]),
                    createVNode("div", { class: "h-2 w-full overflow-hidden rounded-full bg-slate-100" }, [
                      createVNode("div", {
                        class: ["h-full rounded-full transition-all duration-500", stage.value === "done" ? "bg-emerald-500" : "bg-gradient-to-r from-blue-600 to-indigo-600"],
                        style: { width: `${buildProgressPercent.value}%` }
                      }, null, 6)
                    ]),
                    createVNode("ul", { class: "space-y-2 rounded-xl bg-slate-50/80 p-3.5 text-sm" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(buildSteps.value, (item) => {
                        return openBlock(), createBlock("li", {
                          key: item.key,
                          class: "flex items-center justify-between gap-3"
                        }, [
                          createVNode("span", { class: "flex items-center gap-2.5 text-slate-700" }, [
                            createVNode(_component_UIcon, {
                              name: item.state === "done" ? "ph:check-circle-fill" : item.state === "running" ? "ph:circle-notch-bold" : item.state === "failed" ? "ph:warning-circle-fill" : "ph:circle-dashed",
                              class: ["h-4 w-4 shrink-0", item.state === "done" ? "text-emerald-500" : item.state === "running" ? "text-blue-600 motion-safe:animate-spin" : item.state === "failed" ? "text-amber-500" : "text-slate-300"]
                            }, null, 8, ["name", "class"]),
                            createVNode("span", {
                              class: item.state === "done" ? "font-semibold text-slate-900" : item.state === "running" ? "font-semibold text-blue-700" : "text-slate-500"
                            }, toDisplayString(item.label), 3)
                          ])
                        ]);
                      }), 128))
                    ]),
                    launchTarget.value && !buildFailed.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "space-y-2 rounded-xl border border-indigo-100 bg-indigo-50/40 p-3"
                    }, [
                      createVNode("p", { class: "text-xs font-semibold text-indigo-900" }, toDisplayString(unref(t)("shopark.launch.liveEditHint")), 1),
                      createVNode("div", { class: "flex flex-wrap gap-1.5" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(quickDecorPrompts.value, (item) => {
                          return openBlock(), createBlock("button", {
                            key: item,
                            type: "button",
                            class: "rounded-full border border-indigo-200/80 bg-white px-3 py-1 text-xs font-medium text-indigo-700 transition hover:border-indigo-400 hover:bg-indigo-50",
                            onClick: ($event) => openLiveStudioWithPrompt(item)
                          }, toDisplayString(item), 9, ["onClick"]);
                        }), 128))
                      ])
                    ])) : createCommentVNode("", true),
                    stage.value === "done" && launchTarget.value ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "space-y-2.5 pt-1"
                    }, [
                      buildFailed.value ? (openBlock(), createBlock("button", {
                        key: 0,
                        type: "button",
                        class: ui.cta,
                        disabled: busy.value,
                        onClick: launch
                      }, [
                        createTextVNode(toDisplayString(unref(t)("shopark.launch.retry")) + " ", 1),
                        createVNode(_component_UIcon, {
                          name: "ph:arrows-clockwise-bold",
                          class: "h-5 w-5"
                        })
                      ], 10, ["disabled"])) : createCommentVNode("", true),
                      createVNode("a", {
                        href: launchTarget.value.url,
                        class: buildFailed.value ? "flex w-full items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50" : ui.cta
                      }, [
                        createTextVNode(toDisplayString(unref(t)("shopark.launch.previewAndPublish")) + " ", 1),
                        createVNode(_component_UIcon, {
                          name: "ph:arrow-right-bold",
                          class: "h-5 w-5"
                        })
                      ], 10, ["href"]),
                      launchTarget.value.dashboardUrl ? (openBlock(), createBlock("a", {
                        key: 1,
                        href: launchTarget.value.dashboardUrl,
                        class: "flex w-full items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                      }, toDisplayString(unref(t)("shopark.launch.openDashboard")), 9, ["href"])) : createCommentVNode("", true)
                    ])) : launchTarget.value ? (openBlock(), createBlock("div", {
                      key: 2,
                      class: "flex justify-end pt-1"
                    }, [
                      createVNode("a", {
                        href: launchTarget.value.url,
                        class: "inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700"
                      }, [
                        createTextVNode(toDisplayString(unref(t)("shopark.launch.openWhileBuilding")) + " ", 1),
                        createVNode(_component_UIcon, {
                          name: "ph:arrow-up-right-bold",
                          class: "h-3.5 w-3.5"
                        })
                      ], 8, ["href"])
                    ])) : createCommentVNode("", true)
                  ], 2)) : createCommentVNode("", true),
                  errorKey.value && (intake.value || !messages.value.length) ? (openBlock(), createBlock("p", {
                    key: 6,
                    class: "text-center text-sm text-red-600",
                    "aria-live": "polite"
                  }, toDisplayString(unref(t)(`shopark.launch.errors.${errorKey.value}`)), 1)) : createCommentVNode("", true)
                ])
              ], 512),
              createVNode("footer", { class: "shrink-0 border-t border-slate-200/70 bg-white px-4 py-3 sm:px-8 sm:py-4" }, [
                canType.value ? (openBlock(), createBlock("form", {
                  key: 0,
                  class: "mx-auto flex w-full max-w-2xl items-end gap-2 rounded-2xl bg-slate-50 p-2 ring-1 ring-slate-200 transition focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-500",
                  onSubmit: withModifiers(send, ["prevent"])
                }, [
                  withDirectives(createVNode("textarea", {
                    ref_key: "inputRef",
                    ref: inputRef,
                    "onUpdate:modelValue": ($event) => draft.value = $event,
                    rows: "1",
                    maxlength: MESSAGE_MAX,
                    disabled: busy.value,
                    class: "max-h-32 min-h-[44px] flex-1 resize-none bg-transparent px-3 py-2.5 text-[15px] leading-6 text-slate-900 outline-none placeholder:text-slate-400",
                    "aria-label": unref(t)("shopark.launch.inputLabel"),
                    placeholder: isLiveStudioStage.value ? unref(t)("shopark.launch.liveEditPlaceholder") : messages.value.length ? unref(t)("shopark.launch.followUpPlaceholder") : unref(t)("shopark.launch.offeringPlaceholder"),
                    onInput: autosize,
                    onKeydown: withKeys(withModifiers(send, ["exact", "prevent"]), ["enter"])
                  }, null, 40, ["onUpdate:modelValue", "disabled", "aria-label", "placeholder", "onKeydown"]), [
                    [vModelText, draft.value]
                  ]),
                  createVNode("button", {
                    type: "submit",
                    disabled: busy.value || !draft.value.trim(),
                    "aria-label": unref(t)("shopark.launch.send"),
                    class: "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/30 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none"
                  }, [
                    createVNode(_component_UIcon, {
                      name: "ph:paper-plane-tilt-fill",
                      class: "h-5 w-5"
                    })
                  ], 8, ["disabled", "aria-label"])
                ], 32)) : (openBlock(), createBlock("p", {
                  key: 1,
                  class: "mx-auto max-w-2xl py-2 text-center text-xs text-slate-400"
                }, toDisplayString(intake.value && !unref(loggedIn) && stage.value === "plan" ? unref(t)("shopark.launch.loginToFollowUp") : unref(t)("shopark.launch.composerDone")), 1))
              ]),
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
//# sourceMappingURL=ShoparkLaunchChat-Bho0NLWI.mjs.map
