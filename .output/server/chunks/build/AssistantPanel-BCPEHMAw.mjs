import { j as _sfc_main$10, f as _sfc_main$L } from './server.mjs';
import { defineComponent, computed, ref, mergeProps, unref, withCtx, createVNode, toDisplayString, nextTick, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import ShoparkMcpElicitationCard from './ShoparkMcpElicitationCard-Bbx-umpC.mjs';
import { u as useShoparkConsoleCopy, f as formatCopy } from './useShoparkConsole-Jk12-2Nu.mjs';
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
  __name: "AssistantPanel",
  __ssrInlineRender: true,
  props: {
    storeId: {},
    initialProducts: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const { copy, locale } = useShoparkConsoleCopy();
    const activeStoreId = computed(() => Number(props.storeId || 1));
    const busy = ref(false);
    const inputPrompt = ref("");
    const showMcpSpecModal = ref(false);
    const copiedMcp = ref(false);
    const scrollContainer = ref(null);
    const workspaceProducts = ref(props.initialProducts ? [...props.initialProducts] : []);
    const dirtyLocalDrafts = ref([]);
    const messages = ref([]);
    const quickPrompts = computed(() => copy.value.assistant.quickPrompts);
    const mcpClientConfigJson = computed(() => JSON.stringify({
      mcpServers: {
        "shopark-store": {
          url: "/api/shopark/mcp",
          headers: {
            Authorization: "Bearer <YOUR_SHOPARK_OR_HOXI_TOKEN>",
            "X-Store-Id": String(activeStoreId.value)
          }
        }
      }
    }, null, 2));
    async function copyMcpConfig() {
      return;
    }
    function adoptServerProductsSnapshot(serverProducts, trustCloud = true) {
      if (!Array.isArray(serverProducts) || serverProducts.length === 0) return;
      if (trustCloud) {
        const incomingMap = new Map(serverProducts.map((p) => [p.id, p]));
        const merged = workspaceProducts.value.map((local) => incomingMap.get(local.id) || local);
        for (const incoming of serverProducts) {
          if (!merged.some((item) => item.id === incoming.id)) {
            merged.push(incoming);
          }
        }
        workspaceProducts.value = merged;
        const resolvedIds = new Set(serverProducts.map((p) => p.id));
        dirtyLocalDrafts.value = dirtyLocalDrafts.value.filter((d) => !resolvedIds.has(d.id));
      }
    }
    async function scrollToBottom() {
      await nextTick();
      if (scrollContainer.value) {
        scrollContainer.value.scrollTop = scrollContainer.value.scrollHeight;
      }
    }
    async function scanCurrentBlockers() {
      await sendMessage(copy.value.assistant.scanPrompt);
    }
    async function sendMessage(overridePrompt) {
      const text = (overridePrompt != null ? overridePrompt : inputPrompt.value).trim();
      if (!text || busy.value) return;
      if (!overridePrompt) inputPrompt.value = "";
      messages.value.push({
        id: `user-${Date.now()}`,
        role: "user",
        text
      });
      busy.value = true;
      await scrollToBottom();
      try {
        const res = await $fetch("/api/shopark/assistant/chat", {
          method: "POST",
          body: {
            storeId: activeStoreId.value,
            prompt: text,
            language: locale.value,
            selectedProductIds: workspaceProducts.value.map((p) => p.id),
            unsavedProducts: dirtyLocalDrafts.value
          }
        });
        const data = (res == null ? void 0 : res.data) || {};
        if (Array.isArray(data.products)) {
          adoptServerProductsSnapshot(data.products, data.trustCloudSnapshot !== false);
        }
        messages.value.push({
          id: `ai-${Date.now()}`,
          role: "assistant",
          text: data.reply || copy.value.assistant.defaultReply,
          elicitations: Array.isArray(data.elicitations) ? data.elicitations : [],
          proposal: data.proposal || null
        });
      } catch {
        messages.value.push({
          id: `ai-err-${Date.now()}`,
          role: "assistant",
          text: copy.value.assistant.timeoutError
        });
      } finally {
        busy.value = false;
        await scrollToBottom();
      }
    }
    function handleCardResolved(msg, payload) {
      var _a, _b, _c, _d;
      const currentList = msg.elicitations || [];
      const target = currentList.find((c) => c.id === payload.elicitation.id);
      if (target) {
        target.resolved = true;
        target.resolvedSummary = ((_a = payload.result) == null ? void 0 : _a.summary) || copy.value.assistant.defaultResolved;
      }
      const nextCards = ((_b = payload.result) == null ? void 0 : _b.elicitations) || [];
      if (Array.isArray(nextCards) && nextCards.length > 0) {
        const existingIds = new Set(currentList.map((c) => c.id));
        for (const nextCard of nextCards) {
          if (!existingIds.has(nextCard.id)) {
            currentList.push(nextCard);
            existingIds.add(nextCard.id);
          }
        }
        msg.elicitations = [...currentList];
      }
      const updatedProducts = ((_c = payload.result) == null ? void 0 : _c.updatedProducts) || ((_d = payload.result) == null ? void 0 : _d.products);
      if (Array.isArray(updatedProducts)) {
        adoptServerProductsSnapshot(updatedProducts, true);
      }
    }
    async function confirmProposal(msg, proposal) {
      if (busy.value || msg.proposalConfirmed) return;
      busy.value = true;
      try {
        const res = await $fetch("/api/shopark/assistant/tool", {
          method: "POST",
          body: {
            action: proposal.action,
            storeId: activeStoreId.value,
            confirmationToken: proposal.confirmationToken,
            params: {
              ...proposal.params,
              confirmationToken: proposal.confirmationToken
            }
          }
        });
        msg.proposalConfirmed = true;
        const data = (res == null ? void 0 : res.data) || {};
        if (Array.isArray(data.products)) {
          adoptServerProductsSnapshot(data.products, true);
        }
        messages.value.push({
          id: `ai-confirmed-${Date.now()}`,
          role: "assistant",
          text: data.summary || copy.value.assistant.defaultConfirmed
        });
      } finally {
        busy.value = false;
        await scrollToBottom();
      }
    }
    __expose({
      messages,
      workspaceProducts,
      dirtyLocalDrafts,
      scanCurrentBlockers,
      sendMessage,
      handleCardResolved,
      confirmProposal,
      adoptServerProductsSnapshot
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$10;
      const _component_UModal = _sfc_main$L;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white" }, _attrs))}><header class="flex h-14 shrink-0 items-center justify-between gap-4 border-b border-slate-100 px-5 sm:px-6"><div class="flex min-w-0 items-center gap-2.5"><span class="h-2 w-2 shrink-0 rounded-full bg-slate-900"></span><h1 class="truncate text-sm font-semibold tracking-tight text-slate-900">${ssrInterpolate(unref(copy).assistant.title)}</h1>`);
      if (workspaceProducts.value.length) {
        _push(`<span class="hidden rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium tabular-nums text-slate-500 sm:inline-flex">${ssrInterpolate(unref(formatCopy)(unref(copy).assistant.productCount, { count: workspaceProducts.value.length }))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex shrink-0 items-center gap-1"><button type="button"${ssrIncludeBooleanAttr(busy.value) ? " disabled" : ""} class="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-slate-500 transition-colors hover:bg-slate-100/80 hover:text-slate-900 disabled:opacity-40">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:magnifying-glass",
        class: "h-3.5 w-3.5"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(unref(copy).assistant.checkBlockers)}</span></button>`);
      if (messages.value.length) {
        _push(`<button type="button"${ssrIncludeBooleanAttr(busy.value) ? " disabled" : ""} class="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-slate-500 transition-colors hover:bg-slate-100/80 hover:text-slate-900 disabled:opacity-40">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:plus",
          class: "h-3.5 w-3.5"
        }, null, _parent));
        _push(`<span>${ssrInterpolate(unref(copy).assistant.newChat)}</span></button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button type="button" class="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-slate-500 transition-colors hover:bg-slate-100/80 hover:text-slate-900">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:plugs-connected",
        class: "h-3.5 w-3.5"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(unref(copy).assistant.mcpBtn)}</span></button></div></header>`);
      if (workspaceProducts.value.length) {
        _push(`<div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 bg-slate-50/40 px-5 py-2.5 text-xs sm:px-6"><div class="flex flex-wrap items-center gap-2"><!--[-->`);
        ssrRenderList(workspaceProducts.value, (prod) => {
          _push(`<span class="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white px-2.5 py-0.5 text-slate-700"><span class="${ssrRenderClass([prod.status === "published" ? "bg-emerald-500" : prod.status === "ready" ? "bg-blue-500" : "bg-amber-400", "h-1.5 w-1.5 rounded-full"])}"></span><span class="max-w-[160px] truncate">${ssrInterpolate(prod.title)}</span>`);
          if (prod.price) {
            _push(`<span class="font-mono text-[11px] tabular-nums text-slate-500">${ssrInterpolate(prod.currency)} ${ssrInterpolate(prod.price)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</span>`);
        });
        _push(`<!--]--></div>`);
        if (dirtyLocalDrafts.value.length) {
          _push(`<span class="text-[11px] text-amber-600">${ssrInterpolate(unref(formatCopy)(unref(copy).assistant.dirtyDrafts, { count: dirtyLocalDrafts.value.length }))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="min-h-[360px] flex-1 overflow-y-auto">`);
      if (!messages.value.length) {
        _push(`<div class="mx-auto flex h-full max-w-2xl flex-col justify-center px-6 py-14 sm:py-20"><div class="space-y-2"><h2 class="text-2xl font-semibold tracking-tight text-slate-900">${ssrInterpolate(unref(copy).assistant.welcomeTitle)}</h2><p class="text-sm leading-6 text-slate-500">${ssrInterpolate(unref(copy).assistant.welcomeSubtitle)}</p></div><div class="mt-8 grid gap-2.5 sm:grid-cols-2"><!--[-->`);
        ssrRenderList(quickPrompts.value, (quick) => {
          _push(`<button type="button"${ssrIncludeBooleanAttr(busy.value) ? " disabled" : ""} class="group flex flex-col items-start rounded-xl border border-slate-200/80 bg-white px-4 py-3.5 text-left transition-colors hover:border-slate-300 hover:bg-slate-50/60 disabled:opacity-40"><span class="text-sm font-medium text-slate-900">${ssrInterpolate(quick.label)}</span><span class="mt-1 text-xs leading-5 text-slate-500">${ssrInterpolate(quick.hint)}</span></button>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<div class="mx-auto w-full max-w-2xl space-y-7 px-5 py-8 sm:px-6"><!--[-->`);
        ssrRenderList(messages.value, (msg, idx) => {
          var _a;
          _push(`<div class="${ssrRenderClass([msg.role === "user" ? "justify-end" : "items-start gap-3.5", "flex"])}">`);
          if (msg.role === "assistant") {
            _push(`<span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white">`);
            _push(ssrRenderComponent(_component_UIcon, {
              name: "ph:sparkle-fill",
              class: "h-3 w-3"
            }, null, _parent));
            _push(`</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="${ssrRenderClass([msg.role === "user" ? "max-w-[82%]" : "flex-1 space-y-4", "min-w-0"])}"><div class="${ssrRenderClass([msg.role === "user" ? "rounded-2xl bg-slate-100 px-4 py-2.5 text-slate-900" : "text-slate-800", "whitespace-pre-line text-sm leading-7"])}">${ssrInterpolate(msg.text)}</div>`);
          if ((_a = msg.elicitations) == null ? void 0 : _a.length) {
            _push(`<div class="space-y-3"><!--[-->`);
            ssrRenderList(msg.elicitations, (card) => {
              _push(ssrRenderComponent(ShoparkMcpElicitationCard, {
                key: card.id,
                elicitation: card,
                "store-id": activeStoreId.value,
                onResolved: ($event) => handleCardResolved(msg, $event)
              }, null, _parent));
            });
            _push(`<!--]--></div>`);
          } else {
            _push(`<!---->`);
          }
          if (msg.proposal) {
            _push(`<div class="rounded-xl border border-slate-200 bg-slate-50/70 p-4 space-y-3"><div class="flex items-center justify-between gap-3"><div class="flex items-center gap-2">`);
            _push(ssrRenderComponent(_component_UIcon, {
              name: "ph:shield-check",
              class: "h-4 w-4 text-slate-700"
            }, null, _parent));
            _push(`<span class="text-sm font-medium text-slate-900">${ssrInterpolate(msg.proposal.title)}</span></div>`);
            if (msg.proposalConfirmed) {
              _push(`<span class="text-xs font-medium text-emerald-600">${ssrInterpolate(unref(copy).assistant.publishedBadge)}</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div><p class="text-xs leading-6 text-slate-500">${ssrInterpolate(msg.proposal.summary)}</p>`);
            if (!msg.proposalConfirmed) {
              _push(`<div class="flex justify-end pt-1"><button type="button"${ssrIncludeBooleanAttr(busy.value) ? " disabled" : ""} class="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-medium text-white transition-colors hover:bg-slate-800 disabled:opacity-40"><span>${ssrInterpolate(unref(copy).assistant.confirmPublish)}</span></button></div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        });
        _push(`<!--]-->`);
        if (busy.value) {
          _push(`<div class="flex items-center gap-3.5"><span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:sparkle-fill",
            class: "h-3 w-3"
          }, null, _parent));
          _push(`</span><span class="text-xs text-slate-400">${ssrInterpolate(unref(copy).assistant.processing)}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
      _push(`</div><div class="shrink-0 px-5 pb-5 pt-2 sm:px-6 sm:pb-6"><form class="mx-auto flex w-full max-w-2xl items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3.5 py-2 transition-colors focus-within:border-slate-400"><input${ssrRenderAttr("value", inputPrompt.value)} type="text"${ssrIncludeBooleanAttr(busy.value) ? " disabled" : ""}${ssrRenderAttr("placeholder", unref(copy).assistant.inputPlaceholder)} class="h-9 flex-1 bg-transparent px-1 text-sm text-slate-900 placeholder:text-slate-400 outline-none disabled:opacity-50"><button type="submit"${ssrIncludeBooleanAttr(busy.value || !inputPrompt.value.trim()) ? " disabled" : ""}${ssrRenderAttr("aria-label", unref(copy).assistant.sendAria)} class="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white transition-colors hover:bg-slate-800 disabled:bg-slate-100 disabled:text-slate-400">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:arrow-up-bold",
        class: "h-4 w-4"
      }, null, _parent));
      _push(`</button></form></div>`);
      _push(ssrRenderComponent(_component_UModal, {
        open: showMcpSpecModal.value,
        "onUpdate:open": ($event) => showMcpSpecModal.value = $event,
        ui: { content: "w-[calc(100vw-2rem)] max-w-lg rounded-2xl" }
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4 p-6"${_scopeId}><div class="flex items-start justify-between gap-3"${_scopeId}><div${_scopeId}><h3 class="text-base font-semibold text-slate-900"${_scopeId}>${ssrInterpolate(unref(copy).assistant.mcpModalTitle)}</h3><p class="mt-1 text-xs leading-5 text-slate-500"${_scopeId}>${ssrInterpolate(unref(copy).assistant.mcpModalDesc)}</p></div><button type="button" class="rounded-lg p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"${ssrRenderAttr("aria-label", unref(copy).assistant.closeAria)}${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:x",
              class: "h-4 w-4"
            }, null, _parent2, _scopeId));
            _push2(`</button></div><pre class="overflow-x-auto rounded-xl bg-slate-950 p-4 font-mono text-xs leading-relaxed text-slate-200"${_scopeId}>${ssrInterpolate(mcpClientConfigJson.value)}</pre><div class="flex items-center justify-end gap-2"${_scopeId}><button type="button" class="rounded-lg border border-slate-200 px-3.5 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900"${_scopeId}>${ssrInterpolate(unref(copy).common.close)}</button><button type="button" class="rounded-lg bg-slate-900 px-3.5 py-1.5 text-xs font-medium text-white transition-colors hover:bg-slate-800"${_scopeId}>${ssrInterpolate(copiedMcp.value ? unref(copy).assistant.copied : unref(copy).assistant.copyConfig)}</button></div></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-4 p-6" }, [
                createVNode("div", { class: "flex items-start justify-between gap-3" }, [
                  createVNode("div", null, [
                    createVNode("h3", { class: "text-base font-semibold text-slate-900" }, toDisplayString(unref(copy).assistant.mcpModalTitle), 1),
                    createVNode("p", { class: "mt-1 text-xs leading-5 text-slate-500" }, toDisplayString(unref(copy).assistant.mcpModalDesc), 1)
                  ]),
                  createVNode("button", {
                    type: "button",
                    class: "rounded-lg p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700",
                    "aria-label": unref(copy).assistant.closeAria,
                    onClick: ($event) => showMcpSpecModal.value = false
                  }, [
                    createVNode(_component_UIcon, {
                      name: "ph:x",
                      class: "h-4 w-4"
                    })
                  ], 8, ["aria-label", "onClick"])
                ]),
                createVNode("pre", { class: "overflow-x-auto rounded-xl bg-slate-950 p-4 font-mono text-xs leading-relaxed text-slate-200" }, toDisplayString(mcpClientConfigJson.value), 1),
                createVNode("div", { class: "flex items-center justify-end gap-2" }, [
                  createVNode("button", {
                    type: "button",
                    class: "rounded-lg border border-slate-200 px-3.5 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900",
                    onClick: ($event) => showMcpSpecModal.value = false
                  }, toDisplayString(unref(copy).common.close), 9, ["onClick"]),
                  createVNode("button", {
                    type: "button",
                    class: "rounded-lg bg-slate-900 px-3.5 py-1.5 text-xs font-medium text-white transition-colors hover:bg-slate-800",
                    onClick: copyMcpConfig
                  }, toDisplayString(copiedMcp.value ? unref(copy).assistant.copied : unref(copy).assistant.copyConfig), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shopark/pages/user/assistant/components/AssistantPanel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=AssistantPanel-BCPEHMAw.mjs.map
