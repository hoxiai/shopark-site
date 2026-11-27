import { a as useToast, v as _sfc_main$z, j as _sfc_main$10, d as _sfc_main$X, H as _sfc_main$q, k as _sfc_main$F, g as _sfc_main$D, _ as _sfc_main$R } from './server.mjs';
import { _ as _sfc_main$1 } from './Switch-CFODacAu.mjs';
import { defineComponent, ref, reactive, computed, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import '../nitro/nitro.mjs';
import 'drizzle-orm';
import 'node:crypto';
import 'node:http2';
import 'node:fs';
import 'zod';
import 'crypto';
import 'node:path';
import '@nuxthub/blob';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
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
import 'fs';
import 'path';
import 'node:url';
import '@iconify/utils';
import 'consola';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "blog",
  __ssrInlineRender: true,
  setup(__props) {
    const toast = useToast();
    const loading = ref(false);
    const saving = ref(false);
    const runningDry = ref(false);
    const runningLive = ref(false);
    const runningTopicId = ref("");
    const errorMsg = ref("");
    const form = reactive({
      enabled: true,
      dailyLimit: 1,
      author: "ShopArk Team",
      aiBaseUrl: "",
      aiModel: "",
      aiCredential: ""
    });
    const meta = reactive({
      enabledSource: "default_off",
      aiReady: false,
      aiSource: "none",
      effectiveBaseUrl: "",
      effectiveModel: "",
      maxGenerationsPerRun: 2,
      hasCustomKey: false
    });
    const postCounts = ref({ total: 0, en: 0, zh: 0, "zh-HK": 0, ru: 0 });
    const topics = ref([]);
    const lastRunReport = ref([]);
    const plannedCount = computed(() => topics.value.filter((t) => t.status === "planned").length);
    const quarantinedCount = computed(() => topics.value.filter((t) => t.status === "quarantined").length);
    const sourceLabel = (s) => ({
      env: "\u5BB9\u5668\u73AF\u5883\u53D8\u91CF\u5F3A\u5236\u6307\u5B9A",
      settings: "\u540E\u53F0\u624B\u52A8\u4FDD\u5B58",
      auto_ai_ready: "\u68C0\u6D4B\u5230\u53EF\u7528 AI \u81EA\u52A8\u5F00\u542F",
      default_off: "\u7F3A\u5C11 AI \u51ED\u8BC1\u9ED8\u8BA4\u6F14\u7EC3"
    })[s] || s;
    const aiSourceLabel = (s) => ({
      blog_settings: "\u535A\u5BA2\u4E13\u5C5E\u540E\u53F0\u5BC6\u94A5",
      blog_env: "SHOPARK_BLOG_AI \u73AF\u5883\u53D8\u91CF",
      global_ai_settings: "APay \u5168\u5C40 AI \u7F51\u5173\u914D\u7F6E",
      assistant_env: "\u5E73\u53F0\u667A\u80FD\u52A9\u624B\u515C\u5E95\u73AF\u5883\u53D8\u91CF",
      none: "\u672A\u914D\u7F6E"
    })[s] || s;
    const topicStatusColor = (status) => {
      if (status === "published") return "success";
      if (status === "quarantined") return "error";
      return "primary";
    };
    const rowBadgeColor = (status) => {
      if (status === "created" || status === "updated" || status === "dry-run-pass") return "success";
      if (status === "already-published" || status === "deferred") return "info";
      if (status === "rejected" || status === "error") return "error";
      return "warning";
    };
    const loadState = async () => {
      var _a, _b, _c, _d, _e;
      loading.value = true;
      errorMsg.value = "";
      try {
        const res = await $fetch("/api/admin/shopark/blog");
        if (res == null ? void 0 : res.settings) {
          form.enabled = Boolean(res.settings.enabled);
          form.dailyLimit = Number(res.settings.dailyLimit) || 1;
          form.author = ((_a = res.settings.rawDb) == null ? void 0 : _a.shopark_blog_author) || res.settings.author || "ShopArk Team";
          form.aiBaseUrl = ((_b = res.settings.rawDb) == null ? void 0 : _b.shopark_blog_ai_base_url) || "";
          form.aiModel = ((_c = res.settings.rawDb) == null ? void 0 : _c.shopark_blog_ai_model) || "";
          form.aiCredential = "";
          meta.enabledSource = res.settings.enabledSource;
          meta.aiReady = Boolean(res.settings.aiReady);
          meta.aiSource = res.settings.aiSource || "none";
          meta.effectiveBaseUrl = res.settings.aiBaseUrl || "";
          meta.effectiveModel = res.settings.aiModel || "";
          meta.maxGenerationsPerRun = Number(res.settings.maxGenerationsPerRun) || 2;
          meta.hasCustomKey = Boolean((_d = res.settings.rawDb) == null ? void 0 : _d.hasCustomApiKey);
        }
        postCounts.value = (res == null ? void 0 : res.postCounts) || { total: 0 };
        topics.value = Array.isArray(res == null ? void 0 : res.topics) ? res.topics : [];
      } catch (err) {
        errorMsg.value = ((_e = err == null ? void 0 : err.data) == null ? void 0 : _e.statusMessage) || (err == null ? void 0 : err.message) || "\u8BFB\u53D6\u81EA\u52A8\u535A\u5BA2\u72B6\u6001\u5931\u8D25";
      } finally {
        loading.value = false;
      }
    };
    const saveConfig = async () => {
      var _a;
      saving.value = true;
      try {
        await $fetch("/api/admin/shopark/blog", {
          method: "POST",
          body: {
            action: "saveSettings",
            enabled: form.enabled,
            dailyLimit: form.dailyLimit,
            author: form.author,
            aiBaseUrl: form.aiBaseUrl,
            aiModel: form.aiModel,
            aiApiKey: form.aiCredential
          }
        });
        toast.add({ title: "\u81EA\u52A8\u535A\u5BA2\u914D\u7F6E\u5DF2\u4FDD\u5B58", color: "success" });
        await loadState();
      } catch (err) {
        toast.add({ title: ((_a = err == null ? void 0 : err.data) == null ? void 0 : _a.statusMessage) || (err == null ? void 0 : err.message) || "\u4FDD\u5B58\u5931\u8D25", color: "error" });
      } finally {
        saving.value = false;
      }
    };
    const triggerPublish = async (dryRun, topicId) => {
      var _a, _b, _c, _d;
      if (topicId) runningTopicId.value = topicId;
      else if (dryRun) runningDry.value = true;
      else runningLive.value = true;
      errorMsg.value = "";
      try {
        const res = await $fetch("/api/admin/shopark/blog", {
          method: "POST",
          body: { action: "runPublish", dryRun, topicId }
        });
        lastRunReport.value = ((_a = res == null ? void 0 : res.result) == null ? void 0 : _a.report) || [];
        toast.add({
          title: dryRun ? `\u95E8\u7981\u6F14\u7EC3\u5B8C\u6210\uFF08\u6821\u9A8C ${lastRunReport.value.length} \u6761\u8BED\u79CD\u8BB0\u5F55\uFF09` : `\u5DF2\u63A8\u8FDB\u751F\u6210\u5E76\u4E0A\u67B6 ${((_b = res == null ? void 0 : res.result) == null ? void 0 : _b.publishedCount) || 0} \u7BC7\u591A\u8BED\u79CD\u6587\u7AE0`,
          color: (((_c = res == null ? void 0 : res.result) == null ? void 0 : _c.failedCount) || 0) > 0 ? "warning" : "success"
        });
        await loadState();
      } catch (err) {
        errorMsg.value = ((_d = err == null ? void 0 : err.data) == null ? void 0 : _d.statusMessage) || (err == null ? void 0 : err.message) || "\u89E6\u53D1\u6267\u884C\u5931\u8D25";
      } finally {
        runningTopicId.value = "";
        runningDry.value = false;
        runningLive.value = false;
      }
    };
    const resetTopic = async (id) => {
      var _a;
      try {
        await $fetch("/api/admin/shopark/blog", {
          method: "POST",
          body: { action: "updateTopicStatus", id, status: "planned", note: "" }
        });
        toast.add({ title: "\u5DF2\u5C06\u8BE5\u9009\u9898\u91CD\u65B0\u653E\u5165\u5F85\u63A8\u8FDB\u961F\u5217", color: "success" });
        await loadState();
      } catch (err) {
        toast.add({ title: ((_a = err == null ? void 0 : err.data) == null ? void 0 : _a.statusMessage) || (err == null ? void 0 : err.message) || "\u66F4\u65B0\u72B6\u6001\u5931\u8D25", color: "error" });
      }
    };
    const reseedTopics = async () => {
      var _a;
      try {
        const res = await $fetch("/api/admin/shopark/blog", {
          method: "POST",
          body: { action: "seedTopics" }
        });
        toast.add({ title: `\u9ED8\u8BA4\u56DB\u8BED\u79CD\u9009\u9898\u540C\u6B65\u5B8C\u6210\uFF08\u53D8\u66F4 ${(res == null ? void 0 : res.changed) || 0} \u6761\uFF09`, color: "success" });
        await loadState();
      } catch (err) {
        toast.add({ title: ((_a = err == null ? void 0 : err.data) == null ? void 0 : _a.statusMessage) || (err == null ? void 0 : err.message) || "\u540C\u6B65\u9009\u9898\u5931\u8D25", color: "error" });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UAlert = _sfc_main$z;
      const _component_UIcon = _sfc_main$10;
      const _component_UButton = _sfc_main$X;
      const _component_UCard = _sfc_main$q;
      const _component_UFormField = _sfc_main$F;
      const _component_USwitch = _sfc_main$1;
      const _component_UInput = _sfc_main$D;
      const _component_UBadge = _sfc_main$R;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}>`);
      if (errorMsg.value) {
        _push(ssrRenderComponent(_component_UAlert, {
          color: "error",
          variant: "subtle",
          title: "\u52A0\u8F7D\u6216\u6267\u884C\u5F02\u5E38",
          description: errorMsg.value
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4"><div><h1 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex items-center gap-2.5">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:article-ny-times-bold",
        class: "w-7 h-7 text-blue-600 dark:text-blue-400"
      }, null, _parent));
      _push(`<span>\u5B98\u7F51\u56DB\u8BED\u79CD\u81EA\u52A8\u535A\u5BA2\u7BA1\u7EBF</span></h1><p class="mt-1 text-sm text-gray-500 dark:text-gray-400"> \u7BA1\u7406\u957F\u5C3E\u9009\u9898\u961F\u5217\uFF08<code>en</code> / <code>zh</code> / <code>zh-HK</code> / <code>ru</code>\uFF09\u3001\u591A\u6E90\u6A21\u578B\u51ED\u8BC1\u56DE\u9000\u3001\u8D28\u91CF\u95E8\u7981\u4E0E\u5206\u6279\u81EA\u52A8\u53D1\u5E03\u3002 </p></div><div class="flex flex-wrap items-center gap-2.5">`);
      _push(ssrRenderComponent(_component_UButton, {
        color: "neutral",
        variant: "outline",
        icon: "ph:arrows-clockwise",
        size: "sm",
        loading: loading.value,
        onClick: loadState
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u5237\u65B0\u72B6\u6001 `);
          } else {
            return [
              createTextVNode(" \u5237\u65B0\u72B6\u6001 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        color: "neutral",
        variant: "soft",
        icon: "ph:flask-bold",
        size: "sm",
        loading: runningDry.value,
        onClick: ($event) => triggerPublish(true)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u95E8\u7981\u6F14\u7EC3 (Dry-Run) `);
          } else {
            return [
              createTextVNode(" \u95E8\u7981\u6F14\u7EC3 (Dry-Run) ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        color: "primary",
        icon: "ph:paper-plane-tilt-bold",
        size: "sm",
        loading: runningLive.value,
        onClick: ($event) => triggerPublish(false)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u7ACB\u5373\u63A8\u8FDB\u53D1\u5E03\u4E00\u6279 `);
          } else {
            return [
              createTextVNode(" \u7ACB\u5373\u63A8\u8FDB\u53D1\u5E03\u4E00\u6279 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="grid grid-cols-2 sm:grid-cols-4 gap-4">`);
      _push(ssrRenderComponent(_component_UCard, { class: "border border-gray-200 dark:border-gray-800" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-xs text-gray-500"${_scopeId}>\u81EA\u52A8\u53D1\u5E03\u72B6\u6001</div><div class="${ssrRenderClass([form.enabled ? "text-emerald-600" : "text-amber-500", "mt-2 text-lg font-bold"])}"${_scopeId}>${ssrInterpolate(form.enabled ? "\u5DF2\u542F\u7528\u81EA\u52A8\u53D1\u5E03" : "\u4EC5\u6F14\u7EC3 (\u672A\u843D\u5E93)")}</div><div class="mt-1 text-xs text-gray-400"${_scopeId}>\u6765\u6E90\uFF1A${ssrInterpolate(sourceLabel(meta.enabledSource))}</div>`);
          } else {
            return [
              createVNode("div", { class: "text-xs text-gray-500" }, "\u81EA\u52A8\u53D1\u5E03\u72B6\u6001"),
              createVNode("div", {
                class: ["mt-2 text-lg font-bold", form.enabled ? "text-emerald-600" : "text-amber-500"]
              }, toDisplayString(form.enabled ? "\u5DF2\u542F\u7528\u81EA\u52A8\u53D1\u5E03" : "\u4EC5\u6F14\u7EC3 (\u672A\u843D\u5E93)"), 3),
              createVNode("div", { class: "mt-1 text-xs text-gray-400" }, "\u6765\u6E90\uFF1A" + toDisplayString(sourceLabel(meta.enabledSource)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UCard, { class: "border border-gray-200 dark:border-gray-800" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-xs text-gray-500"${_scopeId}>AI \u6A21\u578B\u901A\u9053</div><div class="${ssrRenderClass([meta.aiReady ? "text-emerald-600" : "text-rose-600", "mt-2 text-lg font-bold"])}"${_scopeId}>${ssrInterpolate(meta.aiReady ? meta.effectiveModel || "\u5DF2\u5C31\u7EEA" : "\u672A\u914D\u7F6E\u51ED\u8BC1")}</div><div class="mt-1 text-xs text-gray-400 truncate"${_scopeId}>\u51ED\u8BC1\u6E90\uFF1A${ssrInterpolate(aiSourceLabel(meta.aiSource))}</div>`);
          } else {
            return [
              createVNode("div", { class: "text-xs text-gray-500" }, "AI \u6A21\u578B\u901A\u9053"),
              createVNode("div", {
                class: ["mt-2 text-lg font-bold", meta.aiReady ? "text-emerald-600" : "text-rose-600"]
              }, toDisplayString(meta.aiReady ? meta.effectiveModel || "\u5DF2\u5C31\u7EEA" : "\u672A\u914D\u7F6E\u51ED\u8BC1"), 3),
              createVNode("div", { class: "mt-1 text-xs text-gray-400 truncate" }, "\u51ED\u8BC1\u6E90\uFF1A" + toDisplayString(aiSourceLabel(meta.aiSource)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UCard, { class: "border border-gray-200 dark:border-gray-800" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-xs text-gray-500"${_scopeId}>\u5DF2\u53D1\u5E03\u535A\u5BA2\u603B\u6570</div><div class="mt-2 text-2xl font-bold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(postCounts.value.total || 0)}</div><div class="mt-1 text-xs text-gray-400"${_scopeId}> EN ${ssrInterpolate(postCounts.value.en || 0)} \xB7 \u7B80 ${ssrInterpolate(postCounts.value.zh || 0)} \xB7 \u7E41 ${ssrInterpolate(postCounts.value["zh-HK"] || 0)} \xB7 RU ${ssrInterpolate(postCounts.value.ru || 0)}</div>`);
          } else {
            return [
              createVNode("div", { class: "text-xs text-gray-500" }, "\u5DF2\u53D1\u5E03\u535A\u5BA2\u603B\u6570"),
              createVNode("div", { class: "mt-2 text-2xl font-bold text-gray-900 dark:text-white" }, toDisplayString(postCounts.value.total || 0), 1),
              createVNode("div", { class: "mt-1 text-xs text-gray-400" }, " EN " + toDisplayString(postCounts.value.en || 0) + " \xB7 \u7B80 " + toDisplayString(postCounts.value.zh || 0) + " \xB7 \u7E41 " + toDisplayString(postCounts.value["zh-HK"] || 0) + " \xB7 RU " + toDisplayString(postCounts.value.ru || 0), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UCard, { class: "border border-gray-200 dark:border-gray-800" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-xs text-gray-500"${_scopeId}>\u5F85\u63A8\u8FDB / \u9694\u79BB\u9009\u9898</div><div class="mt-2 text-2xl font-bold text-blue-600 dark:text-blue-400"${_scopeId}>${ssrInterpolate(plannedCount.value)} <span class="text-sm font-normal text-rose-500"${_scopeId}>/ ${ssrInterpolate(quarantinedCount.value)} \u9694\u79BB</span></div><div class="mt-1 text-xs text-gray-400"${_scopeId}>\u5355\u8F6E\u6700\u591A\u751F\u6210 ${ssrInterpolate(meta.maxGenerationsPerRun)} \u7BC7\u9632\u8D85\u65F6</div>`);
          } else {
            return [
              createVNode("div", { class: "text-xs text-gray-500" }, "\u5F85\u63A8\u8FDB / \u9694\u79BB\u9009\u9898"),
              createVNode("div", { class: "mt-2 text-2xl font-bold text-blue-600 dark:text-blue-400" }, [
                createTextVNode(toDisplayString(plannedCount.value) + " ", 1),
                createVNode("span", { class: "text-sm font-normal text-rose-500" }, "/ " + toDisplayString(quarantinedCount.value) + " \u9694\u79BB", 1)
              ]),
              createVNode("div", { class: "mt-1 text-xs text-gray-400" }, "\u5355\u8F6E\u6700\u591A\u751F\u6210 " + toDisplayString(meta.maxGenerationsPerRun) + " \u7BC7\u9632\u8D85\u65F6", 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UCard, { class: "border border-gray-200 dark:border-gray-800" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-gray-800"${_scopeId}><h2 class="text-sm font-semibold text-gray-900 dark:text-white"${_scopeId}>\u81EA\u52A8\u751F\u6210\u53C2\u6570\u4E0E\u53EF\u9009\u6A21\u578B\u8986\u76D6</h2>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "success",
              size: "xs",
              icon: "ph:floppy-disk-bold",
              loading: saving.value,
              onClick: saveConfig
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u4FDD\u5B58\u914D\u7F6E `);
                } else {
                  return [
                    createTextVNode(" \u4FDD\u5B58\u914D\u7F6E ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UFormField, { label: "\u81EA\u52A8\u843D\u5E93\u5F00\u5173" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-3 pt-1"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_USwitch, {
                    modelValue: form.enabled,
                    "onUpdate:modelValue": ($event) => form.enabled = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`<span class="text-xs text-gray-500"${_scopeId2}>${ssrInterpolate(form.enabled ? "\u5B9A\u65F6\u901A\u8FC7\u95E8\u7981\u540E\u76F4\u63A5\u4E0A\u67B6" : "\u5173\u95ED\u65F6\u53EA\u6F14\u7EC3\u4E0D\u5199\u5E93")}</span></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center gap-3 pt-1" }, [
                      createVNode(_component_USwitch, {
                        modelValue: form.enabled,
                        "onUpdate:modelValue": ($event) => form.enabled = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString(form.enabled ? "\u5B9A\u65F6\u901A\u8FC7\u95E8\u7981\u540E\u76F4\u63A5\u4E0A\u67B6" : "\u5173\u95ED\u65F6\u53EA\u6F14\u7EC3\u4E0D\u5199\u5E93"), 1)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, { label: "\u6BCF\u6B21\u63A8\u8FDB\u9009\u9898\u6570 (1~10)" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: form.dailyLimit,
                    "onUpdate:modelValue": ($event) => form.dailyLimit = $event,
                    modelModifiers: { number: true },
                    type: "number",
                    min: "1",
                    max: "10",
                    size: "sm"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: form.dailyLimit,
                      "onUpdate:modelValue": ($event) => form.dailyLimit = $event,
                      modelModifiers: { number: true },
                      type: "number",
                      min: "1",
                      max: "10",
                      size: "sm"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, { label: "\u4F5C\u8005\u7F72\u540D" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: form.author,
                    "onUpdate:modelValue": ($event) => form.author = $event,
                    placeholder: "ShopArk Team",
                    size: "sm"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: form.author,
                      "onUpdate:modelValue": ($event) => form.author = $event,
                      placeholder: "ShopArk Team",
                      size: "sm"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, { label: "\u4E13\u5C5E\u7F51\u5173\u5730\u5740 (\u7559\u7A7A\u81EA\u52A8\u590D\u7528\u5168\u5C40 AI \u7F51\u5173)" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: form.aiBaseUrl,
                    "onUpdate:modelValue": ($event) => form.aiBaseUrl = $event,
                    placeholder: meta.effectiveBaseUrl || "\u7559\u7A7A\u590D\u7528\u5168\u5C40\u7F51\u5173",
                    size: "sm",
                    class: "font-mono"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: form.aiBaseUrl,
                      "onUpdate:modelValue": ($event) => form.aiBaseUrl = $event,
                      placeholder: meta.effectiveBaseUrl || "\u7559\u7A7A\u590D\u7528\u5168\u5C40\u7F51\u5173",
                      size: "sm",
                      class: "font-mono"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, { label: "\u4E13\u5C5E\u6A21\u578B\u540D\u79F0 (\u7559\u7A7A\u590D\u7528\u9ED8\u8BA4\u6A21\u578B)" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: form.aiModel,
                    "onUpdate:modelValue": ($event) => form.aiModel = $event,
                    placeholder: meta.effectiveModel || "gpt-4o-mini",
                    size: "sm",
                    class: "font-mono"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: form.aiModel,
                      "onUpdate:modelValue": ($event) => form.aiModel = $event,
                      placeholder: meta.effectiveModel || "gpt-4o-mini",
                      size: "sm",
                      class: "font-mono"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, {
              label: meta.hasCustomKey ? "\u66F4\u6362\u4E13\u5C5E\u5BC6\u94A5 (\u5DF2\u5B58\u4E13\u5C5E\u5BC6\u94A5\uFF0C\u7559\u7A7A\u4FDD\u6301\u4E0D\u53D8)" : "\u4E13\u5C5E\u5BC6\u94A5 (\u7559\u7A7A\u81EA\u52A8\u590D\u7528\u5168\u5C40\u6216\u5BB9\u5668\u73AF\u5883\u53D8\u91CF)"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: form.aiCredential,
                    "onUpdate:modelValue": ($event) => form.aiCredential = $event,
                    type: "password",
                    placeholder: "\u4EC5\u5728\u9700\u8981\u5355\u72EC\u6307\u5B9A\u65F6\u586B\u5199",
                    size: "sm",
                    class: "font-mono"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: form.aiCredential,
                      "onUpdate:modelValue": ($event) => form.aiCredential = $event,
                      type: "password",
                      placeholder: "\u4EC5\u5728\u9700\u8981\u5355\u72EC\u6307\u5B9A\u65F6\u586B\u5199",
                      size: "sm",
                      class: "font-mono"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between pb-3 border-b border-gray-100 dark:border-gray-800" }, [
                createVNode("h2", { class: "text-sm font-semibold text-gray-900 dark:text-white" }, "\u81EA\u52A8\u751F\u6210\u53C2\u6570\u4E0E\u53EF\u9009\u6A21\u578B\u8986\u76D6"),
                createVNode(_component_UButton, {
                  color: "success",
                  size: "xs",
                  icon: "ph:floppy-disk-bold",
                  loading: saving.value,
                  onClick: saveConfig
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u4FDD\u5B58\u914D\u7F6E ")
                  ]),
                  _: 1
                }, 8, ["loading"])
              ]),
              createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4" }, [
                createVNode(_component_UFormField, { label: "\u81EA\u52A8\u843D\u5E93\u5F00\u5173" }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex items-center gap-3 pt-1" }, [
                      createVNode(_component_USwitch, {
                        modelValue: form.enabled,
                        "onUpdate:modelValue": ($event) => form.enabled = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode("span", { class: "text-xs text-gray-500" }, toDisplayString(form.enabled ? "\u5B9A\u65F6\u901A\u8FC7\u95E8\u7981\u540E\u76F4\u63A5\u4E0A\u67B6" : "\u5173\u95ED\u65F6\u53EA\u6F14\u7EC3\u4E0D\u5199\u5E93"), 1)
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_UFormField, { label: "\u6BCF\u6B21\u63A8\u8FDB\u9009\u9898\u6570 (1~10)" }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      modelValue: form.dailyLimit,
                      "onUpdate:modelValue": ($event) => form.dailyLimit = $event,
                      modelModifiers: { number: true },
                      type: "number",
                      min: "1",
                      max: "10",
                      size: "sm"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_UFormField, { label: "\u4F5C\u8005\u7F72\u540D" }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      modelValue: form.author,
                      "onUpdate:modelValue": ($event) => form.author = $event,
                      placeholder: "ShopArk Team",
                      size: "sm"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_UFormField, { label: "\u4E13\u5C5E\u7F51\u5173\u5730\u5740 (\u7559\u7A7A\u81EA\u52A8\u590D\u7528\u5168\u5C40 AI \u7F51\u5173)" }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      modelValue: form.aiBaseUrl,
                      "onUpdate:modelValue": ($event) => form.aiBaseUrl = $event,
                      placeholder: meta.effectiveBaseUrl || "\u7559\u7A7A\u590D\u7528\u5168\u5C40\u7F51\u5173",
                      size: "sm",
                      class: "font-mono"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                  ]),
                  _: 1
                }),
                createVNode(_component_UFormField, { label: "\u4E13\u5C5E\u6A21\u578B\u540D\u79F0 (\u7559\u7A7A\u590D\u7528\u9ED8\u8BA4\u6A21\u578B)" }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      modelValue: form.aiModel,
                      "onUpdate:modelValue": ($event) => form.aiModel = $event,
                      placeholder: meta.effectiveModel || "gpt-4o-mini",
                      size: "sm",
                      class: "font-mono"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                  ]),
                  _: 1
                }),
                createVNode(_component_UFormField, {
                  label: meta.hasCustomKey ? "\u66F4\u6362\u4E13\u5C5E\u5BC6\u94A5 (\u5DF2\u5B58\u4E13\u5C5E\u5BC6\u94A5\uFF0C\u7559\u7A7A\u4FDD\u6301\u4E0D\u53D8)" : "\u4E13\u5C5E\u5BC6\u94A5 (\u7559\u7A7A\u81EA\u52A8\u590D\u7528\u5168\u5C40\u6216\u5BB9\u5668\u73AF\u5883\u53D8\u91CF)"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      modelValue: form.aiCredential,
                      "onUpdate:modelValue": ($event) => form.aiCredential = $event,
                      type: "password",
                      placeholder: "\u4EC5\u5728\u9700\u8981\u5355\u72EC\u6307\u5B9A\u65F6\u586B\u5199",
                      size: "sm",
                      class: "font-mono"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (lastRunReport.value.length > 0) {
        _push(ssrRenderComponent(_component_UCard, { class: "border border-blue-200 dark:border-blue-900/50" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2"${_scopeId}>\u672C\u6B21\u6267\u884C\u660E\u7EC6</div><div class="space-y-1.5 text-xs font-mono"${_scopeId}><!--[-->`);
              ssrRenderList(lastRunReport.value, (row, i) => {
                var _a;
                _push2(`<div class="flex flex-wrap items-center gap-2"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UBadge, {
                  color: rowBadgeColor(row.status),
                  variant: "subtle",
                  size: "xs"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(row.status)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(row.status), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`<span class="font-semibold"${_scopeId}>${ssrInterpolate(row.id)}</span><span class="text-gray-400"${_scopeId}>[${ssrInterpolate(row.locale)}]</span>`);
                if (row.attempts) {
                  _push2(`<span class="text-gray-400"${_scopeId}>(\u5C1D\u8BD5 ${ssrInterpolate(row.attempts)} \u6B21)</span>`);
                } else {
                  _push2(`<!---->`);
                }
                if (row.title) {
                  _push2(`<span class="text-gray-700 dark:text-gray-200 truncate max-w-md"${_scopeId}>${ssrInterpolate(row.title)}</span>`);
                } else {
                  _push2(`<!---->`);
                }
                if ((_a = row.issues) == null ? void 0 : _a.length) {
                  _push2(`<span class="text-rose-500"${_scopeId}>${ssrInterpolate(row.issues.join("; "))}</span>`);
                } else {
                  _push2(`<!---->`);
                }
                if (row.error || row.reason) {
                  _push2(`<span class="text-amber-600"${_scopeId}>${ssrInterpolate(row.error || row.reason)}</span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              return [
                createVNode("div", { class: "text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2" }, "\u672C\u6B21\u6267\u884C\u660E\u7EC6"),
                createVNode("div", { class: "space-y-1.5 text-xs font-mono" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(lastRunReport.value, (row, i) => {
                    var _a;
                    return openBlock(), createBlock("div", {
                      key: `${row.id}-${row.locale}-${i}`,
                      class: "flex flex-wrap items-center gap-2"
                    }, [
                      createVNode(_component_UBadge, {
                        color: rowBadgeColor(row.status),
                        variant: "subtle",
                        size: "xs"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(row.status), 1)
                        ]),
                        _: 2
                      }, 1032, ["color"]),
                      createVNode("span", { class: "font-semibold" }, toDisplayString(row.id), 1),
                      createVNode("span", { class: "text-gray-400" }, "[" + toDisplayString(row.locale) + "]", 1),
                      row.attempts ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "text-gray-400"
                      }, "(\u5C1D\u8BD5 " + toDisplayString(row.attempts) + " \u6B21)", 1)) : createCommentVNode("", true),
                      row.title ? (openBlock(), createBlock("span", {
                        key: 1,
                        class: "text-gray-700 dark:text-gray-200 truncate max-w-md"
                      }, toDisplayString(row.title), 1)) : createCommentVNode("", true),
                      ((_a = row.issues) == null ? void 0 : _a.length) ? (openBlock(), createBlock("span", {
                        key: 2,
                        class: "text-rose-500"
                      }, toDisplayString(row.issues.join("; ")), 1)) : createCommentVNode("", true),
                      row.error || row.reason ? (openBlock(), createBlock("span", {
                        key: 3,
                        class: "text-amber-600"
                      }, toDisplayString(row.error || row.reason), 1)) : createCommentVNode("", true)
                    ]);
                  }), 128))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_UCard, { class: "border border-gray-200 dark:border-gray-800" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-gray-800"${_scopeId}><h2 class="text-sm font-semibold text-gray-900 dark:text-white"${_scopeId}>\u957F\u5C3E\u9009\u9898\u961F\u5217 (${ssrInterpolate(topics.value.length)})</h2>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              size: "xs",
              icon: "ph:MagicWand",
              onClick: reseedTopics
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u540C\u6B65\u56DB\u8BED\u79CD\u9ED8\u8BA4\u9009\u9898\u79CD\u5B50 `);
                } else {
                  return [
                    createTextVNode(" \u540C\u6B65\u56DB\u8BED\u79CD\u9ED8\u8BA4\u9009\u9898\u79CD\u5B50 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="overflow-x-auto mt-3"${_scopeId}><table class="w-full text-left text-xs divide-y divide-gray-100 dark:divide-gray-800"${_scopeId}><thead class="bg-gray-50/75 dark:bg-gray-800/50 text-gray-500 font-medium"${_scopeId}><tr${_scopeId}><th class="px-3 py-2.5"${_scopeId}>\u9009\u9898 ID / \u95EE\u9898</th><th class="px-3 py-2.5"${_scopeId}>\u7C7B\u578B</th><th class="px-3 py-2.5"${_scopeId}>\u8BED\u79CD\u8FDB\u5EA6</th><th class="px-3 py-2.5"${_scopeId}>\u72B6\u6001</th><th class="px-3 py-2.5"${_scopeId}>\u6700\u8FD1\u8BCA\u65AD / \u5907\u6CE8</th><th class="px-3 py-2.5 text-right"${_scopeId}>\u64CD\u4F5C</th></tr></thead><tbody class="divide-y divide-gray-100 dark:divide-gray-800"${_scopeId}><!--[-->`);
            ssrRenderList(topics.value, (t) => {
              _push2(`<tr${_scopeId}><td class="px-3 py-2.5"${_scopeId}><div class="font-mono font-semibold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(t.id)}</div><div class="text-gray-500 mt-0.5 line-clamp-1"${_scopeId}>${ssrInterpolate(t.question)}</div></td><td class="px-3 py-2.5 whitespace-nowrap"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UBadge, {
                color: "neutral",
                variant: "subtle",
                size: "xs"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(t.type)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(t.type), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</td><td class="px-3 py-2.5 whitespace-nowrap"${_scopeId}><div class="flex gap-1"${_scopeId}><!--[-->`);
              ssrRenderList(t.locales, (loc) => {
                var _a;
                _push2(ssrRenderComponent(_component_UBadge, {
                  key: loc,
                  color: ((_a = t.publishedLocales) == null ? void 0 : _a.includes(loc)) ? "success" : "neutral",
                  variant: "subtle",
                  size: "xs"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(loc)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(loc), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div></td><td class="px-3 py-2.5 whitespace-nowrap"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UBadge, {
                color: topicStatusColor(t.status),
                variant: "subtle",
                size: "xs"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(t.status)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(t.status), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</td><td class="px-3 py-2.5 max-w-xs truncate font-mono text-[11px] text-gray-500"${ssrRenderAttr("title", t.note)}${_scopeId}>${ssrInterpolate(t.note || "\u2014")}</td><td class="px-3 py-2.5 text-right whitespace-nowrap"${_scopeId}><div class="flex items-center justify-end gap-1"${_scopeId}>`);
              if (t.status !== "planned") {
                _push2(ssrRenderComponent(_component_UButton, {
                  color: "neutral",
                  variant: "ghost",
                  size: "xs",
                  onClick: ($event) => resetTopic(t.id)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` \u91CD\u56DE\u961F\u5217 `);
                    } else {
                      return [
                        createTextVNode(" \u91CD\u56DE\u961F\u5217 ")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(_component_UButton, {
                color: "primary",
                variant: "ghost",
                size: "xs",
                loading: runningTopicId.value === t.id,
                onClick: ($event) => triggerPublish(false, t.id)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u5355\u7BC7\u751F\u6210 `);
                  } else {
                    return [
                      createTextVNode(" \u5355\u7BC7\u751F\u6210 ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between pb-3 border-b border-gray-100 dark:border-gray-800" }, [
                createVNode("h2", { class: "text-sm font-semibold text-gray-900 dark:text-white" }, "\u957F\u5C3E\u9009\u9898\u961F\u5217 (" + toDisplayString(topics.value.length) + ")", 1),
                createVNode(_component_UButton, {
                  color: "neutral",
                  variant: "ghost",
                  size: "xs",
                  icon: "ph:MagicWand",
                  onClick: reseedTopics
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u540C\u6B65\u56DB\u8BED\u79CD\u9ED8\u8BA4\u9009\u9898\u79CD\u5B50 ")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "overflow-x-auto mt-3" }, [
                createVNode("table", { class: "w-full text-left text-xs divide-y divide-gray-100 dark:divide-gray-800" }, [
                  createVNode("thead", { class: "bg-gray-50/75 dark:bg-gray-800/50 text-gray-500 font-medium" }, [
                    createVNode("tr", null, [
                      createVNode("th", { class: "px-3 py-2.5" }, "\u9009\u9898 ID / \u95EE\u9898"),
                      createVNode("th", { class: "px-3 py-2.5" }, "\u7C7B\u578B"),
                      createVNode("th", { class: "px-3 py-2.5" }, "\u8BED\u79CD\u8FDB\u5EA6"),
                      createVNode("th", { class: "px-3 py-2.5" }, "\u72B6\u6001"),
                      createVNode("th", { class: "px-3 py-2.5" }, "\u6700\u8FD1\u8BCA\u65AD / \u5907\u6CE8"),
                      createVNode("th", { class: "px-3 py-2.5 text-right" }, "\u64CD\u4F5C")
                    ])
                  ]),
                  createVNode("tbody", { class: "divide-y divide-gray-100 dark:divide-gray-800" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(topics.value, (t) => {
                      return openBlock(), createBlock("tr", {
                        key: t.id
                      }, [
                        createVNode("td", { class: "px-3 py-2.5" }, [
                          createVNode("div", { class: "font-mono font-semibold text-gray-900 dark:text-white" }, toDisplayString(t.id), 1),
                          createVNode("div", { class: "text-gray-500 mt-0.5 line-clamp-1" }, toDisplayString(t.question), 1)
                        ]),
                        createVNode("td", { class: "px-3 py-2.5 whitespace-nowrap" }, [
                          createVNode(_component_UBadge, {
                            color: "neutral",
                            variant: "subtle",
                            size: "xs"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(t.type), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        createVNode("td", { class: "px-3 py-2.5 whitespace-nowrap" }, [
                          createVNode("div", { class: "flex gap-1" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(t.locales, (loc) => {
                              var _a;
                              return openBlock(), createBlock(_component_UBadge, {
                                key: loc,
                                color: ((_a = t.publishedLocales) == null ? void 0 : _a.includes(loc)) ? "success" : "neutral",
                                variant: "subtle",
                                size: "xs"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(loc), 1)
                                ]),
                                _: 2
                              }, 1032, ["color"]);
                            }), 128))
                          ])
                        ]),
                        createVNode("td", { class: "px-3 py-2.5 whitespace-nowrap" }, [
                          createVNode(_component_UBadge, {
                            color: topicStatusColor(t.status),
                            variant: "subtle",
                            size: "xs"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(t.status), 1)
                            ]),
                            _: 2
                          }, 1032, ["color"])
                        ]),
                        createVNode("td", {
                          class: "px-3 py-2.5 max-w-xs truncate font-mono text-[11px] text-gray-500",
                          title: t.note
                        }, toDisplayString(t.note || "\u2014"), 9, ["title"]),
                        createVNode("td", { class: "px-3 py-2.5 text-right whitespace-nowrap" }, [
                          createVNode("div", { class: "flex items-center justify-end gap-1" }, [
                            t.status !== "planned" ? (openBlock(), createBlock(_component_UButton, {
                              key: 0,
                              color: "neutral",
                              variant: "ghost",
                              size: "xs",
                              onClick: ($event) => resetTopic(t.id)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u91CD\u56DE\u961F\u5217 ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])) : createCommentVNode("", true),
                            createVNode(_component_UButton, {
                              color: "primary",
                              variant: "ghost",
                              size: "xs",
                              loading: runningTopicId.value === t.id,
                              onClick: ($event) => triggerPublish(false, t.id)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u5355\u7BC7\u751F\u6210 ")
                              ]),
                              _: 1
                            }, 8, ["loading", "onClick"])
                          ])
                        ])
                      ]);
                    }), 128))
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shopark/admin/pages/blog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=blog-BVeNe2O2.mjs.map
