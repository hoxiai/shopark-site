import { j as _sfc_main$Z, f as _sfc_main$I, d as _sfc_main$U } from './server.mjs';
import { defineComponent, computed, ref, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, nextTick, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import ShoparkMcpElicitationCard from './ShoparkMcpElicitationCard-CUqvU70M.mjs';
import '../nitro/nitro.mjs';
import 'drizzle-orm';
import 'node:crypto';
import 'zod';
import 'crypto';
import 'fs';
import 'path';
import 'node:fs';
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
    const activeStoreId = computed(() => Number(props.storeId || 1));
    const busy = ref(false);
    const inputPrompt = ref("");
    const showMcpSpecModal = ref(false);
    const scrollContainer = ref(null);
    const workspaceProducts = ref(props.initialProducts ? [...props.initialProducts] : []);
    const dirtyLocalDrafts = ref([]);
    const messages = ref([
      {
        id: "welcome-msg",
        role: "assistant",
        text: "\u4F60\u597D\uFF01\u6211\u662F ShopArk \u5BF9\u8BDD\u5F0F MCP \u5EFA\u7AD9\u4E0E\u4E0A\u54C1\u52A9\u624B\u3002\u4F60\u53EF\u4EE5\u76F4\u63A5\u8D34\u5165\u5546\u54C1\u94FE\u63A5\u6216\u63CF\u8FF0\u5165\u5E93\uFF0C\u70B9\u51FB\u300C\u626B\u63CF\u4E0A\u7EBF\u5361\u70B9\u300D\u539F\u4F4D\u8865\u9F50\u5206\u7C7B\u3001\u552E\u4EF7\u3001\u514B\u91CD\u4E0E\u89C4\u683C\uFF0C\u6216\u53D1\u9001\u88C5\u4FEE\u4E0E\u53D1\u5E03\u6307\u4EE4\u3002"
      }
    ]);
    const quickPrompts = [
      { icon: "ph:link-bold", label: "\u6293\u53D6\u624B\u5DE5\u9676\u74F7\u9A6C\u514B\u676F\u5165\u5E93", prompt: "\u5E2E\u6211\u6293\u53D6\u5165\u5E93\u8FD9\u6B3E\u5546\u54C1\uFF1A\u624B\u5DE5\u9AD8\u5B9A\u9676\u74F7\u9A6C\u514B\u676F\u793C\u76D2" },
      { icon: "ph:magnifying-glass-bold", label: "\u8BCA\u65AD 4 \u7C7B\u4E0A\u54C1\u5361\u70B9", prompt: "\u626B\u63CF\u5F53\u524D\u5546\u54C1\u7684\u4E0A\u7EBF\u5361\u70B9\u5E76\u751F\u6210\u8865\u9F50\u5361\u7247" },
      { icon: "ph:magic-wand-bold", label: "\u6279\u91CF\u6267\u884C AI \u52A0\u5DE5\u6D41\u6C34\u7EBF", prompt: "\u6279\u91CF\u5165\u961F\u6267\u884C AI \u591A\u8BED\u8A00 SEO \u6807\u9898\u4E0E\u4E3B\u56FE\u6D41\u6C34\u7EBF" },
      { icon: "ph:plugs-connected-bold", label: "\u68C0\u6D4B\u5E97\u94FA\u4E0E\u6A21\u578B\u8FDE\u901A\u6027", prompt: "\u6D4B\u8BD5\u5E97\u94FA\u57DF\u540D\u3001\u652F\u4ED8\u7F51\u5173\u4E0E\u6A21\u578B\u901A\u9053\u8FDE\u901A\u6027" },
      { icon: "ph:rocket-launch-bold", label: "\u63D0\u4EA4\u8349\u7A3F\u53D1\u5E03\u4E0A\u7EBF", prompt: "\u91CD\u7B97\u5C31\u7EEA\u72B6\u6001\u5E76\u63D0\u4EA4\u8349\u7A3F\u53D1\u5E03\u4E0A\u7EBF" }
    ];
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
      await sendMessage("\u626B\u63CF\u5F53\u524D\u5546\u54C1\u4E0E\u5E97\u94FA\u7684\u4E0A\u7EBF\u963B\u585E\u5361\u70B9");
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
          text: data.reply || "\u5DF2\u5904\u7406\u5B8C\u6210\u3002",
          elicitations: Array.isArray(data.elicitations) ? data.elicitations : [],
          proposal: data.proposal || null
        });
      } catch {
        messages.value.push({
          id: `ai-err-${Date.now()}`,
          role: "assistant",
          text: "\u8BF7\u6C42\u8D85\u65F6\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002"
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
        target.resolvedSummary = ((_a = payload.result) == null ? void 0 : _a.summary) || "\u5DF2\u5B8C\u6210\u914D\u7F6E";
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
          text: data.summary || "\u5DF2\u9A8C\u8BC1\u786E\u8BA4\u4EE4\u724C\u5E76\u6B63\u5F0F\u63D0\u4EA4\u4E0A\u7EBF\u3002"
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
      const _component_UIcon = _sfc_main$Z;
      const _component_UModal = _sfc_main$I;
      const _component_UButton = _sfc_main$U;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden" }, _attrs))}><div class="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/80 bg-slate-50/70 px-5 py-3.5"><div class="flex items-center gap-2.5"><span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-sm">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:sparkle-fill",
        class: "h-4 w-4"
      }, null, _parent));
      _push(`</span><div><div class="flex items-center gap-2"><h2 class="text-sm font-black text-slate-900 sm:text-base">ShopArk \u5BF9\u8BDD\u5F0F MCP \u5EFA\u7AD9\u4E0E\u4E0A\u54C1\u52A9\u624B</h2><span class="rounded-full bg-emerald-50 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-700 ring-1 ring-emerald-200"> JSON-RPC 2.0 </span></div><p class="text-xs text-slate-500">\u652F\u6301\u5546\u54C1\u6293\u53D6\u5165\u5E93\u30014 \u7C7B\u4E0A\u7EBF\u5361\u70B9\u5361\u7247\u94FE\u5F0F\u4FEE\u590D\u3001\u6A21\u677F\u88C5\u4FEE\u53CA\u5916\u90E8 WorkBuddy / Hoxi \u63A5\u5165</p></div></div><div class="flex flex-wrap items-center gap-2"><button type="button"${ssrIncludeBooleanAttr(busy.value) ? " disabled" : ""} class="inline-flex items-center gap-1.5 rounded-xl border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-800 transition hover:bg-amber-100 disabled:opacity-50">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:magnifying-glass-bold",
        class: "h-3.5 w-3.5"
      }, null, _parent));
      _push(`<span>\u626B\u63CF\u4E0A\u7EBF\u5361\u70B9</span></button><button type="button" class="inline-flex items-center gap-1.5 rounded-xl border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-xs font-bold text-indigo-700 transition hover:bg-indigo-100">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:plugs-connected-bold",
        class: "h-3.5 w-3.5"
      }, null, _parent));
      _push(`<span>\u63A5\u5165 WorkBuddy / Hoxi</span></button></div></div>`);
      if (workspaceProducts.value.length) {
        _push(`<div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 bg-slate-50/40 px-5 py-2 text-xs"><div class="flex flex-wrap items-center gap-2"><span class="font-bold text-slate-600">\u5F53\u524D\u5DE5\u4F5C\u533A\u5546\u54C1\uFF08${ssrInterpolate(workspaceProducts.value.length)}\uFF09\uFF1A</span><!--[-->`);
        ssrRenderList(workspaceProducts.value, (prod) => {
          _push(`<span class="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2.5 py-0.5 font-medium text-slate-700"><span class="${ssrRenderClass([prod.status === "published" ? "bg-emerald-500" : prod.status === "ready" ? "bg-blue-500" : "bg-amber-500", "h-1.5 w-1.5 rounded-full"])}"></span><span class="max-w-[160px] truncate">${ssrInterpolate(prod.title)}</span>`);
          if (prod.price) {
            _push(`<span class="font-mono text-[11px] font-bold text-emerald-700">${ssrInterpolate(prod.currency)} ${ssrInterpolate(prod.price)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</span>`);
        });
        _push(`<!--]--></div>`);
        if (dirtyLocalDrafts.value.length) {
          _push(`<span class="text-[11px] font-semibold text-amber-600">${ssrInterpolate(dirtyLocalDrafts.value.length)} \u9879\u672C\u5730\u6539\u52A8\u5C06\u5728\u4E0B\u6B21 MCP \u8C03\u7528\u524D\u81EA\u52A8\u540C\u6B65 </span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="max-h-[540px] min-h-[340px] flex-1 space-y-4 overflow-y-auto p-5"><!--[-->`);
      ssrRenderList(messages.value, (msg, idx) => {
        var _a;
        _push(`<div class="${ssrRenderClass([msg.role === "user" ? "justify-end" : "", "flex items-start gap-3"])}">`);
        if (msg.role === "assistant") {
          _push(`<span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-sm">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:sparkle-fill",
            class: "h-4 w-4"
          }, null, _parent));
          _push(`</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="max-w-[88%] space-y-2.5"><div class="${ssrRenderClass([msg.role === "user" ? "rounded-tr-md bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-sm" : "rounded-tl-md border border-slate-200/80 bg-slate-50/70 text-slate-800", "whitespace-pre-line rounded-2xl px-4 py-3 text-sm leading-6"])}">${ssrInterpolate(msg.text)}</div>`);
        if ((_a = msg.elicitations) == null ? void 0 : _a.length) {
          _push(`<div class="space-y-2.5"><!--[-->`);
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
          _push(`<div class="rounded-2xl border border-indigo-200 bg-indigo-50/70 p-4 space-y-2.5"><div class="flex items-center justify-between gap-2"><div class="flex items-center gap-2">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:shield-check-fill",
            class: "h-4 w-4 text-indigo-600"
          }, null, _parent));
          _push(`<span class="text-xs font-black text-indigo-950">${ssrInterpolate(msg.proposal.title)}</span></div><span class="rounded-full bg-indigo-100 px-2 py-0.5 font-mono text-[10px] font-bold text-indigo-700"> HMAC CONFIRMED ACTION </span></div><p class="text-xs leading-relaxed text-slate-600">${ssrInterpolate(msg.proposal.summary)}</p><div class="flex items-center justify-end gap-2 pt-1"><button type="button"${ssrIncludeBooleanAttr(busy.value || msg.proposalConfirmed) ? " disabled" : ""} class="inline-flex items-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-extrabold text-white shadow-sm transition hover:bg-indigo-500 disabled:opacity-50">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:rocket-launch-bold",
            class: "h-3.5 w-3.5"
          }, null, _parent));
          _push(`<span>${ssrInterpolate(msg.proposalConfirmed ? "\u5DF2\u786E\u8BA4\u5E76\u53D1\u5E03" : "\u786E\u8BA4\u5E76\u7ACB\u5373\u53D1\u5E03\u4E0A\u7EBF")}</span></button></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--></div><div class="border-t border-slate-200/80 bg-slate-50/60 p-4 space-y-3"><div class="flex flex-wrap gap-1.5"><!--[-->`);
      ssrRenderList(quickPrompts, (quick) => {
        _push(`<button type="button"${ssrIncludeBooleanAttr(busy.value) ? " disabled" : ""} class="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-600 disabled:opacity-50">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: quick.icon,
          class: "h-3.5 w-3.5 text-blue-500"
        }, null, _parent));
        _push(`<span>${ssrInterpolate(quick.label)}</span></button>`);
      });
      _push(`<!--]--></div><form class="flex items-center gap-2"><input${ssrRenderAttr("value", inputPrompt.value)} type="text"${ssrIncludeBooleanAttr(busy.value) ? " disabled" : ""} placeholder="\u8F93\u5165\u5546\u54C1\u94FE\u63A5\uFF081688/\u901F\u5356\u901A/Shopify\uFF09\u6293\u53D6\u5165\u5E93\uFF0C\u6216\u8F93\u5165\u88C5\u4FEE\u3001\u6838\u4EF7\u3001\u8BA2\u5355\u3001\u53D1\u5E03\u6307\u4EE4\u2026" class="h-10 flex-1 rounded-xl border border-slate-200 bg-white px-3.5 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15"><button type="submit"${ssrIncludeBooleanAttr(busy.value || !inputPrompt.value.trim()) ? " disabled" : ""} class="inline-flex h-10 shrink-0 items-center gap-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 text-xs font-extrabold text-white shadow-sm transition hover:brightness-110 disabled:opacity-40"><span>\u53D1\u9001</span>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:paper-plane-tilt-fill",
        class: "h-3.5 w-3.5"
      }, null, _parent));
      _push(`</button></form></div>`);
      _push(ssrRenderComponent(_component_UModal, {
        open: showMcpSpecModal.value,
        "onUpdate:open": ($event) => showMcpSpecModal.value = $event,
        ui: { content: "w-[calc(100vw-2rem)] max-w-lg rounded-3xl" }
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6 space-y-4"${_scopeId}><div class="flex items-start justify-between gap-3"${_scopeId}><div${_scopeId}><span class="rounded-full bg-indigo-50 px-2.5 py-0.5 font-mono text-[10px] font-bold text-indigo-700"${_scopeId}> MCP PROTOCOL 2024-11-05 </span><h3 class="mt-1 text-base font-black text-slate-950"${_scopeId}>\u63A5\u5165 WorkBuddy \u4E0E Hoxi \u5BA2\u6237\u7AEF</h3><p class="mt-0.5 text-xs text-slate-500"${_scopeId}>\u590D\u5236\u4E0B\u65B9\u6807\u51C6 MCP Server \u914D\u7F6E\u5373\u53EF\u5728\u5916\u90E8 Agent \u4E2D\u76F4\u63A5\u6267\u884C\u5F00\u5E97\u3001\u88C5\u4FEE\u3001\u4E0A\u54C1\u4E0E\u65E5\u5E38\u7BA1\u7406</p></div>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              icon: "ph:x-bold",
              size: "xs",
              onClick: ($event) => showMcpSpecModal.value = false
            }, null, _parent2, _scopeId));
            _push2(`</div><pre class="overflow-x-auto rounded-2xl bg-slate-950 p-4 font-mono text-xs leading-relaxed text-emerald-300"${_scopeId}>${ssrInterpolate(mcpClientConfigJson.value)}</pre><div class="flex items-center justify-end gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "outline",
              size: "sm",
              class: "rounded-xl font-bold",
              onClick: ($event) => showMcpSpecModal.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u5173\u95ED `);
                } else {
                  return [
                    createTextVNode(" \u5173\u95ED ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-6 space-y-4" }, [
                createVNode("div", { class: "flex items-start justify-between gap-3" }, [
                  createVNode("div", null, [
                    createVNode("span", { class: "rounded-full bg-indigo-50 px-2.5 py-0.5 font-mono text-[10px] font-bold text-indigo-700" }, " MCP PROTOCOL 2024-11-05 "),
                    createVNode("h3", { class: "mt-1 text-base font-black text-slate-950" }, "\u63A5\u5165 WorkBuddy \u4E0E Hoxi \u5BA2\u6237\u7AEF"),
                    createVNode("p", { class: "mt-0.5 text-xs text-slate-500" }, "\u590D\u5236\u4E0B\u65B9\u6807\u51C6 MCP Server \u914D\u7F6E\u5373\u53EF\u5728\u5916\u90E8 Agent \u4E2D\u76F4\u63A5\u6267\u884C\u5F00\u5E97\u3001\u88C5\u4FEE\u3001\u4E0A\u54C1\u4E0E\u65E5\u5E38\u7BA1\u7406")
                  ]),
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    icon: "ph:x-bold",
                    size: "xs",
                    onClick: ($event) => showMcpSpecModal.value = false
                  }, null, 8, ["onClick"])
                ]),
                createVNode("pre", { class: "overflow-x-auto rounded-2xl bg-slate-950 p-4 font-mono text-xs leading-relaxed text-emerald-300" }, toDisplayString(mcpClientConfigJson.value), 1),
                createVNode("div", { class: "flex items-center justify-end gap-2" }, [
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "outline",
                    size: "sm",
                    class: "rounded-xl font-bold",
                    onClick: ($event) => showMcpSpecModal.value = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u5173\u95ED ")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
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
//# sourceMappingURL=AssistantPanel-n8H_qt5v.mjs.map
