import { j as _sfc_main$10 } from './server.mjs';
import { defineComponent, ref, computed, reactive, watch, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { u as useShoparkConsoleCopy } from './useShoparkConsole-Jk12-2Nu.mjs';
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
  __name: "ShoparkMcpElicitationCard",
  __ssrInlineRender: true,
  props: {
    elicitation: {},
    storeId: {},
    endpoint: {}
  },
  emits: ["resolved"],
  setup(__props, { emit: __emit }) {
    var _a, _b;
    const { copy } = useShoparkConsoleCopy();
    const props = __props;
    const submitting = ref(false);
    const localResolved = ref(Boolean(props.elicitation.resolved));
    const resolvedText = ref(props.elicitation.resolvedSummary || "");
    const autoContinue = ref(props.elicitation.autoContinueDefault !== false);
    const recommendedOpt = computed(
      () => {
        var _a2, _b2;
        return ((_a2 = props.elicitation.options) == null ? void 0 : _a2.find((o) => o.recommended)) || ((_b2 = props.elicitation.options) == null ? void 0 : _b2[0]);
      }
    );
    const selectedOption = ref((_b = (_a = recommendedOpt.value) == null ? void 0 : _a.value) != null ? _b : "");
    const formValues = reactive({});
    function initFormValues() {
      var _a2;
      for (const field of props.elicitation.fields || []) {
        formValues[field.key] = (_a2 = field.value) != null ? _a2 : field.type === "number" ? 0 : "";
      }
      if (recommendedOpt.value) {
        selectedOption.value = recommendedOpt.value.value;
      }
    }
    initFormValues();
    watch(() => props.elicitation, () => {
      localResolved.value = Boolean(props.elicitation.resolved);
      resolvedText.value = props.elicitation.resolvedSummary || "";
      initFormValues();
    }, { deep: true });
    const isResolved = computed(() => localResolved.value || Boolean(props.elicitation.resolved));
    const blockerBadgeLabel = computed(() => {
      const badges = copy.value.assistant.card.badges;
      switch (props.elicitation.blockerKey) {
        case "category":
          return badges.category;
        case "pricing":
          return badges.pricing;
        case "packaging":
        case "shipping":
          return badges.shipping;
        case "attributes":
        case "seo":
          return badges.seo;
        default:
          return badges.fallback;
      }
    });
    const blockerIcon = computed(() => {
      switch (props.elicitation.blockerKey) {
        case "category":
          return "ph:folders";
        case "pricing":
          return "ph:currency-circle-dollar";
        case "packaging":
        case "shipping":
          return "ph:package";
        default:
          return "ph:sliders-horizontal";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2;
      const _component_UIcon = _sfc_main$10;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["rounded-xl border p-4 transition-colors", isResolved.value ? "border-slate-200/80 bg-slate-50/60" : "border-slate-200 bg-white"]
      }, _attrs))}><div class="flex items-start justify-between gap-3"><div class="flex items-start gap-2.5"><span class="${ssrRenderClass([isResolved.value ? "bg-emerald-50 text-emerald-600" : "bg-slate-100 text-slate-700", "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg"])}">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: isResolved.value ? "ph:check-bold" : blockerIcon.value,
        class: "h-3.5 w-3.5"
      }, null, _parent));
      _push(`</span><div class="min-w-0"><div class="flex flex-wrap items-center gap-2"><span class="text-[11px] font-medium text-slate-400">${ssrInterpolate(blockerBadgeLabel.value)}</span><h4 class="text-sm font-medium text-slate-900">${ssrInterpolate(__props.elicitation.title)}</h4></div>`);
      if (__props.elicitation.description) {
        _push(`<p class="mt-0.5 text-xs leading-5 text-slate-500">${ssrInterpolate(__props.elicitation.description)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (isResolved.value) {
        _push(`<span class="shrink-0 text-xs font-medium text-emerald-600">${ssrInterpolate(unref(copy).assistant.card.done)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (!isResolved.value && __props.elicitation.kind === "radio_cards" && ((_a2 = __props.elicitation.options) == null ? void 0 : _a2.length)) {
        _push(`<div class="mt-3.5 grid gap-2 sm:grid-cols-2"><!--[-->`);
        ssrRenderList(__props.elicitation.options, (opt) => {
          _push(`<button type="button" class="${ssrRenderClass([selectedOption.value === opt.value ? "border-slate-900 bg-slate-50" : "border-slate-200/80 bg-white hover:border-slate-300", "flex flex-col justify-between rounded-lg border px-3.5 py-2.5 text-left transition-colors"])}"><div class="flex items-start justify-between gap-2"><span class="text-xs font-medium text-slate-900">${ssrInterpolate(opt.label)}</span>`);
          if (opt.badge) {
            _push(`<span class="${ssrRenderClass([opt.recommended ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-500", "shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium"])}">${ssrInterpolate(opt.badge)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
          if (opt.description) {
            _push(`<p class="mt-1 text-[11px] leading-relaxed text-slate-500">${ssrInterpolate(opt.description)}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</button>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!isResolved.value && __props.elicitation.kind === "inline_form" && ((_b2 = __props.elicitation.fields) == null ? void 0 : _b2.length)) {
        _push(`<div class="mt-3.5 grid gap-3 sm:grid-cols-2"><!--[-->`);
        ssrRenderList(__props.elicitation.fields, (field) => {
          var _a3;
          _push(`<div class="${ssrRenderClass([field.key === "seoDescription" ? "sm:col-span-2" : "", "space-y-1"])}"><label class="block text-xs font-medium text-slate-600">${ssrInterpolate(field.label)} `);
          if (field.required) {
            _push(`<span class="text-rose-500">*</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</label>`);
          if (field.type === "select" && ((_a3 = field.options) == null ? void 0 : _a3.length)) {
            _push(`<select class="h-9 w-full rounded-lg border border-slate-200 bg-white px-2.5 text-xs text-slate-900 outline-none transition-colors focus:border-slate-400"><!--[-->`);
            ssrRenderList(field.options, (opt) => {
              _push(`<option${ssrRenderAttr("value", opt.value)}${ssrIncludeBooleanAttr(Array.isArray(formValues[field.key]) ? ssrLooseContain(formValues[field.key], opt.value) : ssrLooseEqual(formValues[field.key], opt.value)) ? " selected" : ""}>${ssrInterpolate(opt.label)}</option>`);
            });
            _push(`<!--]--></select>`);
          } else if (field.type === "number") {
            _push(`<div class="relative flex items-center"><input${ssrRenderAttr("value", formValues[field.key])} type="number"${ssrRenderAttr("min", field.min)}${ssrRenderAttr("max", field.max)}${ssrRenderAttr("step", field.step || "any")}${ssrRenderAttr("placeholder", field.placeholder)} class="h-9 w-full rounded-lg border border-slate-200 bg-white px-3 pr-10 text-xs tabular-nums text-slate-900 outline-none transition-colors focus:border-slate-400">`);
            if (field.unit) {
              _push(`<span class="pointer-events-none absolute right-3 font-mono text-[10px] text-slate-400">${ssrInterpolate(field.unit)}</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          } else {
            _push(`<input${ssrRenderAttr("value", formValues[field.key])} type="text"${ssrRenderAttr("placeholder", field.placeholder)} class="h-9 w-full rounded-lg border border-slate-200 bg-white px-3 text-xs text-slate-900 outline-none transition-colors focus:border-slate-400">`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!isResolved.value) {
        _push(`<div class="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-3"><label class="inline-flex cursor-pointer items-center gap-1.5 text-xs text-slate-500"><input${ssrIncludeBooleanAttr(Array.isArray(autoContinue.value) ? ssrLooseContain(autoContinue.value, null) : autoContinue.value) ? " checked" : ""} type="checkbox" class="h-3.5 w-3.5 rounded border-slate-300 text-slate-900 focus:ring-slate-400"><span>${ssrInterpolate(unref(copy).assistant.card.autoContinue)}</span></label><button type="button"${ssrIncludeBooleanAttr(submitting.value) ? " disabled" : ""} class="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-1.5 text-xs font-medium text-white transition-colors hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40">`);
        if (submitting.value) {
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:circle-notch-bold",
            class: "h-3.5 w-3.5 animate-spin"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<span>${ssrInterpolate(__props.elicitation.submitLabel || unref(copy).assistant.card.defaultSubmit)}</span></button></div>`);
      } else if (resolvedText.value) {
        _push(`<p class="mt-2.5 text-xs text-slate-500">${ssrInterpolate(resolvedText.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shopark/components/ShoparkMcpElicitationCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ShoparkMcpElicitationCard = Object.assign(_sfc_main, { __name: "ShoparkMcpElicitationCard" });

export { ShoparkMcpElicitationCard as default };
//# sourceMappingURL=ShoparkMcpElicitationCard-Bbx-umpC.mjs.map
