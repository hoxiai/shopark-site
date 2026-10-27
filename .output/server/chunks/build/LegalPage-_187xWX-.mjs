import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { r as ru, a as zhHK, z as zh, e as en } from './zh-HK-C4q0Dgg9.mjs';
import { u as useShoplySiteName } from './useShoplySiteName-LSPGeJ7u.mjs';
import { u as useI18n, r as useSettings, bg as useSeoMeta } from './server.mjs';
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
  __name: "LegalPage",
  __ssrInlineRender: true,
  props: {
    slug: {}
  },
  setup(__props) {
    const props = __props;
    const { locale } = useI18n();
    const { siteName: brandName } = useShoplySiteName();
    const { getSetting } = useSettings();
    const localeMessages = { en, zh, "zh-HK": zhHK, ru };
    const messages = computed(() => localeMessages[locale.value] || en);
    const entityName = computed(() => getSetting("company_name") || getSetting("site_name") || "");
    const entityAddress = computed(() => getSetting("company_address") || "");
    const interpolateEntity = (text) => text.replace(/\{company\}/g, entityName.value).replace(/\{address\}/g, entityAddress.value);
    const page = computed(() => {
      const raw = messages.value.pages.legal[props.slug];
      return {
        ...raw,
        intro: typeof raw.intro === "string" ? interpolateEntity(raw.intro) : raw.intro,
        sections: raw.sections.map((section) => ({
          ...section,
          paragraphs: section.paragraphs.map(interpolateEntity)
        }))
      };
    });
    useSeoMeta({
      title: () => page.value.seoTitle,
      description: () => page.value.seoDescription,
      keywords: () => page.value.seoKeywords,
      ogTitle: () => page.value.seoTitle,
      ogDescription: () => page.value.seoDescription,
      ogType: "website",
      twitterCard: "summary",
      twitterTitle: () => page.value.seoTitle,
      twitterDescription: () => page.value.seoDescription
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-slate-50 px-5 py-16 sm:px-8 sm:py-24" }, _attrs))}><article class="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-12"><p class="text-sm font-black tracking-[0.18em] text-blue-600 uppercase">${ssrInterpolate(unref(brandName))} Legal</p><h1 class="mt-4 text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl">${ssrInterpolate(page.value.title)}</h1><p class="mt-4 text-sm font-semibold text-slate-500">${ssrInterpolate(page.value.updated)}</p>`);
      if (page.value.intro) {
        _push(`<p class="mt-8 text-base leading-8 text-slate-700">${ssrInterpolate(page.value.intro)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mt-10 space-y-10"><!--[-->`);
      ssrRenderList(page.value.sections, (section) => {
        _push(`<section><h2 class="text-2xl font-black tracking-tight text-slate-950">${ssrInterpolate(section.title)}</h2><div class="mt-4 space-y-4"><!--[-->`);
        ssrRenderList(section.paragraphs, (paragraph) => {
          _push(`<p class="whitespace-pre-line text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">${ssrInterpolate(paragraph)}</p>`);
        });
        _push(`<!--]--></div></section>`);
      });
      _push(`<!--]--></div></article></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shoply/components/LegalPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main, { __name: "LegalPage" });

export { __nuxt_component_0 as default };
//# sourceMappingURL=LegalPage-_187xWX-.mjs.map
