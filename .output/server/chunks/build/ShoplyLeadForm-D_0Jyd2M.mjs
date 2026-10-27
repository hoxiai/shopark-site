import { u as useI18n, r as useSettings, _ as _sfc_main$W } from './server.mjs';
import { _ as __nuxt_component_1 } from './CaptchaSlider-BJqv3jPw.mjs';
import { defineComponent, useId, computed, reactive, ref, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
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
import 'node:url';
import 'zod';
import '@iconify/utils';
import 'consola';
import 'node:zlib';
import 'ioredis';
import 'jose';
import 'node:child_process';
import 'process';
import 'buffer';
import 'node:fs/promises';
import 'node:dns/promises';
import 'node:net';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
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
  __name: "ShoplyLeadForm",
  __ssrInlineRender: true,
  props: {
    source: {},
    demandPlaceholder: {}
  },
  setup(__props) {
    const props = __props;
    const { locale, t } = useI18n();
    const route = useRoute();
    const { getSetting } = useSettings();
    const fieldId = useId();
    const copy = computed(() => ({
      name: t("shoply.lead.name"),
      namePlaceholder: t("shoply.lead.namePlaceholder"),
      contact: t("shoply.lead.contact"),
      contactPlaceholder: t("shoply.lead.contactPlaceholder"),
      demand: t("shoply.lead.demand"),
      demandPlaceholder: t("shoply.lead.demandPlaceholder"),
      submit: t("shoply.lead.submit"),
      submitting: t("shoply.lead.submitting"),
      submitAnother: t("shoply.lead.submitAnother"),
      successTitle: t("shoply.lead.successTitle"),
      successDescription: t("shoply.lead.successDescription"),
      privacyNote: t("shoply.lead.privacyNote"),
      consultFallback: t("shoply.lead.consultFallback"),
      errors: {
        invalid_name: t("shoply.lead.errors.invalidName"),
        invalid_contact: t("shoply.lead.errors.invalidContact"),
        captcha_required: t("shoply.lead.errors.captcha"),
        rate_limited: t("shoply.lead.errors.rateLimited"),
        not_configured: t("shoply.lead.errors.notConfigured"),
        delivery_failed: t("shoply.lead.errors.deliveryFailed"),
        generic: t("shoply.lead.errors.generic")
      }
    }));
    const consultUrl = computed(() => getSetting("shoply_consult_url", "mailto:support@qingpu.ai"));
    const form = reactive({ name: "", contact: "", demand: "" });
    const loading = ref(false);
    const submitted = ref(false);
    const errorMessage = ref("");
    const showConsultFallback = ref(false);
    const captchaRef = ref(null);
    const handleCaptchaSuccess = async (ticket) => {
      var _a, _b;
      loading.value = true;
      try {
        await $fetch("/api/shoply/leads", {
          method: "POST",
          body: {
            name: form.name.trim(),
            contact: form.contact.trim(),
            demand: form.demand.trim(),
            source: props.source || route.path,
            locale: locale.value,
            captchaTicket: ticket
          }
        });
        submitted.value = true;
      } catch (error) {
        const value = error && typeof error === "object" ? error : {};
        const reason = String(((_b = (_a = value.data) == null ? void 0 : _a.data) == null ? void 0 : _b.reason) || "generic");
        const messages = copy.value.errors;
        errorMessage.value = reason in messages ? messages[reason] : messages.generic;
        showConsultFallback.value = reason === "not_configured" || reason === "delivery_failed";
      } finally {
        loading.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$W;
      const _component_CaptchaSlider = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (submitted.value) {
        _push(`<div class="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center"><span class="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:check-circle-bold",
          class: "h-6 w-6"
        }, null, _parent));
        _push(`</span><p class="mt-4 text-base font-black text-slate-900">${ssrInterpolate(copy.value.successTitle)}</p><p class="mt-2 text-sm leading-6 text-slate-600">${ssrInterpolate(copy.value.successDescription)}</p><button type="button" class="mt-5 text-sm font-bold text-blue-600 hover:text-blue-700">${ssrInterpolate(copy.value.submitAnother)}</button></div>`);
      } else {
        _push(`<form class="space-y-4"><div><label${ssrRenderAttr("for", `${unref(fieldId)}-name`)} class="block text-xs font-semibold text-slate-700">${ssrInterpolate(copy.value.name)}</label><input${ssrRenderAttr("id", `${unref(fieldId)}-name`)}${ssrRenderAttr("value", form.name)} type="text" required${ssrRenderAttr("maxlength", 40)}${ssrRenderAttr("placeholder", copy.value.namePlaceholder)} class="mt-1 w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"></div><div><label${ssrRenderAttr("for", `${unref(fieldId)}-contact`)} class="block text-xs font-semibold text-slate-700">${ssrInterpolate(copy.value.contact)}</label><input${ssrRenderAttr("id", `${unref(fieldId)}-contact`)}${ssrRenderAttr("value", form.contact)} type="text" required${ssrRenderAttr("maxlength", 120)}${ssrRenderAttr("placeholder", copy.value.contactPlaceholder)} class="mt-1 w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"></div><div><label${ssrRenderAttr("for", `${unref(fieldId)}-demand`)} class="block text-xs font-semibold text-slate-700">${ssrInterpolate(copy.value.demand)}</label><textarea${ssrRenderAttr("id", `${unref(fieldId)}-demand`)} rows="3"${ssrRenderAttr("maxlength", 1e3)}${ssrRenderAttr("placeholder", __props.demandPlaceholder || copy.value.demandPlaceholder)} class="mt-1 w-full resize-none rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500">${ssrInterpolate(form.demand)}</textarea></div>`);
        if (errorMessage.value) {
          _push(`<p class="rounded-xl bg-rose-50 px-3.5 py-2.5 text-xs leading-5 text-rose-600">${ssrInterpolate(errorMessage.value)} `);
          if (showConsultFallback.value) {
            _push(`<a${ssrRenderAttr("href", consultUrl.value)} class="font-bold underline">${ssrInterpolate(copy.value.consultFallback)}</a>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<button type="submit"${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""} class="w-full rounded-xl bg-blue-600 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/30 transition-all hover:bg-blue-500 active:scale-95 disabled:opacity-50">${ssrInterpolate(loading.value ? copy.value.submitting : copy.value.submit)}</button><p class="text-center text-[11px] leading-5 text-slate-400">${ssrInterpolate(copy.value.privacyNote)}</p></form>`);
      }
      _push(ssrRenderComponent(_component_CaptchaSlider, {
        ref_key: "captchaRef",
        ref: captchaRef,
        onSuccess: handleCaptchaSuccess
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shoply/components/ShoplyLeadForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ShoplyLeadForm = Object.assign(_sfc_main, { __name: "ShoplyLeadForm" });

export { ShoplyLeadForm as default };
//# sourceMappingURL=ShoplyLeadForm-D_0Jyd2M.mjs.map
