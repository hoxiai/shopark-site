import { j as _sfc_main$Z } from './server.mjs';
import { defineComponent, ref, computed, reactive, watch, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
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
      switch (props.elicitation.blockerKey) {
        case "category":
          return "\u5206\u7C7B\u7ED1\u5B9A \xB7 CATEGORY";
        case "pricing":
          return "SKU \u6838\u4EF7 \xB7 PRICING";
        case "packaging":
        case "shipping":
          return "\u5305\u88C5\u7269\u6D41 \xB7 SHIPPING";
        case "attributes":
        case "seo":
          return "\u89C4\u683C\u4E0E SEO \xB7 ATTRIBUTES";
        default:
          return "\u5F85\u786E\u8BA4\u9879 \xB7 BLOCKER";
      }
    });
    const blockerIcon = computed(() => {
      switch (props.elicitation.blockerKey) {
        case "category":
          return "ph:folders-bold";
        case "pricing":
          return "ph:currency-circle-dollar-bold";
        case "packaging":
        case "shipping":
          return "ph:package-bold";
        default:
          return "ph:sliders-horizontal-bold";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2;
      const _component_UIcon = _sfc_main$Z;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["rounded-2xl border p-4 shadow-2xs transition-all", isResolved.value ? "border-emerald-200 bg-emerald-50/50" : "border-amber-200/90 bg-gradient-to-br from-amber-50/70 via-white to-orange-50/30"]
      }, _attrs))}><div class="flex items-start justify-between gap-2.5"><div class="flex items-center gap-2"><span class="${ssrRenderClass([isResolved.value ? "bg-emerald-600 text-white" : "bg-amber-500 text-white", "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold"])}">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: isResolved.value ? "ph:check-bold" : blockerIcon.value,
        class: "h-4 w-4"
      }, null, _parent));
      _push(`</span><div><div class="flex flex-wrap items-center gap-1.5"><span class="rounded-full bg-amber-100 px-2 py-0.5 font-mono text-[10px] font-bold uppercase text-amber-800">${ssrInterpolate(blockerBadgeLabel.value)}</span><h4 class="text-xs font-black text-slate-900 sm:text-sm">${ssrInterpolate(__props.elicitation.title)}</h4></div><p class="mt-0.5 text-xs leading-relaxed text-slate-600">${ssrInterpolate(__props.elicitation.description)}</p></div></div>`);
      if (isResolved.value) {
        _push(`<span class="shrink-0 rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-bold text-emerald-800"> \u5DF2\u5B8C\u6210 </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (!isResolved.value && __props.elicitation.kind === "radio_cards" && ((_a2 = __props.elicitation.options) == null ? void 0 : _a2.length)) {
        _push(`<div class="mt-3 grid gap-2 sm:grid-cols-2"><!--[-->`);
        ssrRenderList(__props.elicitation.options, (opt) => {
          _push(`<button type="button" class="${ssrRenderClass([selectedOption.value === opt.value ? "border-blue-600 bg-blue-50/70 ring-2 ring-blue-500/20" : "border-slate-200 bg-white hover:border-blue-300", "flex flex-col justify-between rounded-xl border p-3 text-left transition"])}"><div class="flex items-start justify-between gap-2"><span class="text-xs font-extrabold text-slate-900">${ssrInterpolate(opt.label)}</span>`);
          if (opt.badge) {
            _push(`<span class="${ssrRenderClass([opt.recommended ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600", "shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold"])}">${ssrInterpolate(opt.badge)}</span>`);
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
        _push(`<div class="mt-3 grid gap-2.5 sm:grid-cols-2"><!--[-->`);
        ssrRenderList(__props.elicitation.fields, (field) => {
          var _a3;
          _push(`<div class="${ssrRenderClass([field.key === "seoDescription" ? "sm:col-span-2" : "", "space-y-1"])}"><label class="block text-[11px] font-bold text-slate-700">${ssrInterpolate(field.label)} `);
          if (field.required) {
            _push(`<span class="text-rose-500">*</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</label>`);
          if (field.type === "select" && ((_a3 = field.options) == null ? void 0 : _a3.length)) {
            _push(`<select class="h-9 w-full rounded-xl border border-slate-200 bg-white px-2.5 text-xs font-medium text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15"><!--[-->`);
            ssrRenderList(field.options, (opt) => {
              _push(`<option${ssrRenderAttr("value", opt.value)}${ssrIncludeBooleanAttr(Array.isArray(formValues[field.key]) ? ssrLooseContain(formValues[field.key], opt.value) : ssrLooseEqual(formValues[field.key], opt.value)) ? " selected" : ""}>${ssrInterpolate(opt.label)}</option>`);
            });
            _push(`<!--]--></select>`);
          } else if (field.type === "number") {
            _push(`<div class="relative flex items-center"><input${ssrRenderAttr("value", formValues[field.key])} type="number"${ssrRenderAttr("min", field.min)}${ssrRenderAttr("max", field.max)}${ssrRenderAttr("step", field.step || "any")}${ssrRenderAttr("placeholder", field.placeholder)} class="h-9 w-full rounded-xl border border-slate-200 bg-white px-3 pr-10 text-xs font-semibold text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15">`);
            if (field.unit) {
              _push(`<span class="pointer-events-none absolute right-3 font-mono text-[10px] font-bold text-slate-400">${ssrInterpolate(field.unit)}</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          } else {
            _push(`<input${ssrRenderAttr("value", formValues[field.key])} type="text"${ssrRenderAttr("placeholder", field.placeholder)} class="h-9 w-full rounded-xl border border-slate-200 bg-white px-3 text-xs font-medium text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15">`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!isResolved.value) {
        _push(`<div class="mt-3.5 flex flex-wrap items-center justify-between gap-2 border-t border-amber-200/60 pt-3"><label class="inline-flex cursor-pointer items-center gap-1.5 text-[11px] font-medium text-slate-600"><input${ssrIncludeBooleanAttr(Array.isArray(autoContinue.value) ? ssrLooseContain(autoContinue.value, null) : autoContinue.value) ? " checked" : ""} type="checkbox" class="h-3.5 w-3.5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"><span>\u5361\u70B9\u6E05\u96F6\u540E\u81EA\u52A8\u7EED\u8DD1 AI \u4E0A\u54C1\u6D41\u6C34\u7EBF</span></label><button type="button"${ssrIncludeBooleanAttr(submitting.value) ? " disabled" : ""} class="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-3.5 py-2 text-xs font-extrabold text-white shadow-sm shadow-blue-600/20 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50">`);
        if (submitting.value) {
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:circle-notch-bold",
            class: "h-3.5 w-3.5 animate-spin"
          }, null, _parent));
        } else {
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:check-circle-fill",
            class: "h-3.5 w-3.5"
          }, null, _parent));
        }
        _push(`<span>${ssrInterpolate(__props.elicitation.submitLabel || "\u786E\u8BA4\u4FDD\u5B58\u5E76\u7EE7\u7EED")}</span></button></div>`);
      } else if (resolvedText.value) {
        _push(`<p class="mt-2 text-xs font-semibold text-emerald-800">${ssrInterpolate(resolvedText.value)}</p>`);
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
//# sourceMappingURL=ShoparkMcpElicitationCard-CUqvU70M.mjs.map
