import { j as _sfc_main$10 } from './server.mjs';
import { defineComponent, ref, watch, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import ShoparkMcpElicitationCard from './ShoparkMcpElicitationCard-BVMT9gyM.mjs';
import { u as useShoparkConsoleCopy } from './useShoparkConsole-CNYTvsYD.mjs';
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
  __name: "ShoparkSupportWidget",
  __ssrInlineRender: true,
  props: {
    storeId: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const { copy, locale } = useShoparkConsoleCopy();
    const widgetOpen = ref(false);
    const busy = ref(false);
    const draft = ref("");
    const messages = ref([
      {
        id: "widget-welcome",
        role: "assistant",
        text: copy.value.assistant.widget.welcome
      }
    ]);
    watch(() => copy.value.assistant.widget.welcome, (welcomeText) => {
      const welcomeMsg = messages.value.find((item) => item.id === "widget-welcome");
      if (welcomeMsg) welcomeMsg.text = welcomeText;
    });
    async function sendWidgetPrompt() {
      const text = draft.value.trim();
      if (!text || busy.value) return;
      draft.value = "";
      messages.value.push({ id: `u-${Date.now()}`, role: "user", text });
      busy.value = true;
      try {
        const res = await $fetch("/api/shopark/assistant/chat", {
          method: "POST",
          body: {
            storeId: Number(props.storeId || 1),
            prompt: text,
            language: locale.value
          }
        });
        const data = (res == null ? void 0 : res.data) || {};
        messages.value.push({
          id: `a-${Date.now()}`,
          role: "assistant",
          text: data.reply || copy.value.assistant.widget.defaultReply,
          elicitations: Array.isArray(data.elicitations) ? data.elicitations : []
        });
      } catch {
        messages.value.push({
          id: `a-err-${Date.now()}`,
          role: "assistant",
          text: copy.value.assistant.widget.errorReply
        });
      } finally {
        busy.value = false;
      }
    }
    function handleWidgetCardResolved(msg, payload) {
      var _a, _b;
      const list = msg.elicitations || [];
      const current = list.find((item) => item.id === payload.elicitation.id);
      if (current) {
        current.resolved = true;
        current.resolvedSummary = ((_a = payload.result) == null ? void 0 : _a.summary) || copy.value.assistant.widget.defaultSaved;
      }
      const nextCards = ((_b = payload.result) == null ? void 0 : _b.elicitations) || [];
      if (Array.isArray(nextCards) && nextCards.length > 0) {
        const seen = new Set(list.map((item) => item.id));
        for (const card of nextCards) {
          if (!seen.has(card.id)) {
            list.push(card);
            seen.add(card.id);
          }
        }
        msg.elicitations = [...list];
      }
    }
    __expose({
      widgetOpen,
      messages,
      sendWidgetPrompt,
      handleWidgetCardResolved
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$10;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed bottom-5 right-5 z-40" }, _attrs))}>`);
      if (widgetOpen.value) {
        _push(`<div class="mb-3 flex h-[520px] w-[380px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-2xl ring-1 ring-slate-900/10"><header class="flex items-center justify-between gap-2 bg-gradient-to-r from-slate-950 via-[#0f2152] to-indigo-950 px-4 py-3 text-white"><div class="flex items-center gap-2"><span class="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500/30 text-cyan-300">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:sparkle-fill",
          class: "h-4 w-4"
        }, null, _parent));
        _push(`</span><div><p class="text-xs font-black">${ssrInterpolate(unref(copy).assistant.widget.title)}</p><p class="text-[10px] text-slate-300">${ssrInterpolate(unref(copy).assistant.widget.subtitle)}</p></div></div><div class="flex items-center gap-1"><button type="button" class="rounded-lg bg-white/10 px-2 py-1 text-[10px] font-bold text-cyan-200 hover:bg-white/20">${ssrInterpolate(unref(copy).assistant.widget.scanBtn)}</button><button type="button" class="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white"${ssrRenderAttr("aria-label", unref(copy).assistant.widget.closeAria)}>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:x-bold",
          class: "h-3.5 w-3.5"
        }, null, _parent));
        _push(`</button></div></header><div class="flex-1 space-y-3 overflow-y-auto p-3.5 bg-slate-50/60"><!--[-->`);
        ssrRenderList(messages.value, (msg, idx) => {
          var _a;
          _push(`<div class="space-y-2"><div class="${ssrRenderClass([msg.role === "user" ? "ml-8 bg-blue-600 text-white" : "mr-4 border border-slate-200/80 bg-white text-slate-800 shadow-2xs", "rounded-2xl px-3.5 py-2.5 text-xs leading-5"])}">${ssrInterpolate(msg.text)}</div>`);
          if ((_a = msg.elicitations) == null ? void 0 : _a.length) {
            _push(`<div class="space-y-2"><!--[-->`);
            ssrRenderList(msg.elicitations, (card) => {
              _push(ssrRenderComponent(ShoparkMcpElicitationCard, {
                key: card.id,
                elicitation: card,
                "store-id": __props.storeId,
                onResolved: ($event) => handleWidgetCardResolved(msg, $event)
              }, null, _parent));
            });
            _push(`<!--]--></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div><form class="flex items-center gap-1.5 border-t border-slate-200 bg-white p-2.5"><input${ssrRenderAttr("value", draft.value)} type="text"${ssrIncludeBooleanAttr(busy.value) ? " disabled" : ""}${ssrRenderAttr("placeholder", unref(copy).assistant.widget.placeholder)} class="h-9 flex-1 rounded-xl border border-slate-200 bg-slate-50 px-3 text-xs text-slate-900 outline-none focus:border-blue-500 focus:bg-white"><button type="submit"${ssrIncludeBooleanAttr(busy.value || !draft.value.trim()) ? " disabled" : ""} class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white disabled:opacity-40">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:paper-plane-tilt-fill",
          class: "h-3.5 w-3.5"
        }, null, _parent));
        _push(`</button></form></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button type="button" class="flex h-12 items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 text-xs font-extrabold text-white shadow-xl shadow-blue-600/30 ring-1 ring-white/20 transition hover:-translate-y-0.5 hover:brightness-110">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: widgetOpen.value ? "ph:caret-down-bold" : "ph:chat-teardrop-dots-fill",
        class: "h-4 w-4"
      }, null, _parent));
      _push(`<span class="hidden sm:inline">${ssrInterpolate(unref(copy).assistant.widget.triggerLabel)}</span></button></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shopark/components/ShoparkSupportWidget.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ShoparkSupportWidget = Object.assign(_sfc_main, { __name: "ShoparkSupportWidget" });

export { ShoparkSupportWidget as default };
//# sourceMappingURL=ShoparkSupportWidget--xcu9-rn.mjs.map
