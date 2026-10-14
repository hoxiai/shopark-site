import { u as useI18n, r as useSettings, bg as useSeoMeta, _ as _sfc_main$S } from './server.mjs';
import __nuxt_component_1 from './PageCta-0XQxZIIo.mjs';
import __nuxt_component_2 from './ShoplyConsultDialog-DsFYw0Dw.mjs';
import { defineComponent, computed, unref, isRef, useSSRContext } from 'vue';
import { ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { u as useShoplyConsult } from './useShoplyConsult-Bc6OO7cj.mjs';
import { u as useShoplyAuthLinks } from './useShoplyAuthLinks-1qS_J9sZ.mjs';
import { r as ru, a as zhHK, z as zh, e as en } from './zh-HK-C4q0Dgg9.mjs';
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
import 'ioredis';
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
import './ShoplyLeadForm-BPVVz4Cl.mjs';
import './CaptchaSlider-BJqv3jPw.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MarketingPage",
  __ssrInlineRender: true,
  props: {
    slug: {}
  },
  setup(__props) {
    const props = __props;
    const { locale } = useI18n();
    useSettings();
    const localeMessages = { en, zh, "zh-HK": zhHK, ru };
    const messages = computed(() => localeMessages[locale.value] || en);
    const page = computed(() => {
      const content = messages.value.pages.marketing[props.slug];
      return {
        ...content,
        sections: content.sections.map((section) => ({
          ...section,
          items: "items" in section ? section.items : []
        }))
      };
    });
    const { signUpUrl: primaryUrl } = useShoplyAuthLinks();
    const { consultUrl: secondaryUrl, onConsultClick, isOpen: isConsultOpen } = useShoplyConsult();
    const badgePositions = ["left-3 top-8 sm:-left-4", "right-2 top-20 sm:-right-5", "bottom-8 left-8"];
    useSeoMeta({
      title: () => page.value.seoTitle,
      description: () => page.value.seoDescription,
      keywords: () => page.value.seoKeywords,
      ogTitle: () => page.value.seoTitle,
      ogDescription: () => page.value.seoDescription,
      ogType: "website",
      twitterCard: "summary_large_image",
      twitterTitle: () => page.value.seoTitle,
      twitterDescription: () => page.value.seoDescription
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$S;
      const _component_PageCta = __nuxt_component_1;
      const _component_ShoplyConsultDialog = __nuxt_component_2;
      _push(`<!--[--><div class="bg-white"><section class="relative isolate overflow-hidden bg-[#2678ff] px-5 py-20 text-white sm:px-8 sm:py-28"><div class="absolute inset-0 -z-10"><div class="animate-shoply-glow absolute -left-24 top-0 h-80 w-80 rounded-full bg-cyan-300/25 blur-3xl"></div><div class="animate-shoply-float-delayed absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-indigo-900/30 blur-3xl"></div></div><div class="mx-auto grid max-w-[1280px] items-center gap-12 lg:grid-cols-[1fr_0.86fr]"><div class="min-w-0"><p class="animate-shoply-fade-in text-sm font-black tracking-[0.18em] text-amber-300 uppercase">${ssrInterpolate(page.value.eyebrow)}</p><h1 class="animate-shoply-fade-in-up mt-5 max-w-4xl text-4xl font-black leading-[1.08] tracking-[-0.04em] sm:text-6xl">${ssrInterpolate(page.value.title)}</h1><p class="animate-shoply-fade-in-up animate-delay-100 mt-6 max-w-2xl text-base leading-8 text-blue-50/85 sm:text-lg">${ssrInterpolate(page.value.description)}</p><div class="animate-shoply-fade-in-up animate-delay-180 mt-8 flex flex-col gap-3 sm:flex-row"><a${ssrRenderAttr("href", unref(primaryUrl))} class="rounded-full bg-white px-7 py-3.5 text-center text-sm font-extrabold text-blue-700 shadow-xl shadow-blue-950/15 transition-all hover:-translate-y-0.5 hover:shadow-2xl active:scale-95">${ssrInterpolate(page.value.primary)}</a><a${ssrRenderAttr("href", unref(secondaryUrl))} class="rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-center text-sm font-extrabold text-white backdrop-blur-sm transition-all hover:bg-white/20 active:scale-95">${ssrInterpolate(page.value.secondary)}</a></div></div><div class="animate-shoply-slide-in-right animate-delay-150 relative mx-auto flex aspect-[4/3] w-full max-w-lg items-center justify-center rounded-[2.5rem] border border-white/25 bg-white/10 p-8 shadow-2xl backdrop-blur-sm"><div class="absolute inset-5 rounded-[2rem] border border-white/15"></div><div class="relative flex h-44 w-44 items-center justify-center rounded-[2.5rem] bg-white text-blue-600 shadow-2xl transition-transform duration-500 hover:scale-105 sm:h-56 sm:w-56">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: page.value.icon,
        class: "h-24 w-24 sm:h-32 sm:w-32"
      }, null, _parent));
      _push(`</div><!--[-->`);
      ssrRenderList(page.value.highlights.slice(0, 3), (item, index) => {
        _push(`<span class="${ssrRenderClass([[badgePositions[index], index % 2 === 0 ? "animate-shoply-float" : "animate-shoply-float-delayed"], "absolute rounded-full border border-white/25 bg-white/15 px-4 py-2 text-xs font-bold backdrop-blur transition-transform hover:scale-105"])}">${ssrInterpolate(item)}</span>`);
      });
      _push(`<!--]--></div></div></section>`);
      if (page.value.highlights.length) {
        _push(`<section class="border-b border-slate-200 bg-white px-5 py-8 sm:px-8"><div class="mx-auto grid max-w-[1280px] gap-3 sm:grid-cols-2 lg:grid-cols-4"><!--[-->`);
        ssrRenderList(page.value.highlights, (item) => {
          _push(`<div class="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700 transition-colors hover:bg-blue-50/60"><span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">\u2713</span> ${ssrInterpolate(item)}</div>`);
        });
        _push(`<!--]--></div></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<section class="px-5 py-20 sm:px-8 sm:py-28"><div class="mx-auto max-w-[1280px]"><div class="mx-auto max-w-3xl text-center"><p class="text-sm font-black tracking-[0.18em] text-blue-600 uppercase">${ssrInterpolate(page.value.sectionLabel)}</p><h2 class="mt-4 text-3xl font-black tracking-[-0.035em] text-slate-950 sm:text-5xl">${ssrInterpolate(page.value.sectionTitle)}</h2><p class="mt-5 text-base leading-8 text-slate-600">${ssrInterpolate(page.value.sectionDescription)}</p></div><div class="${ssrRenderClass([page.value.sections.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3", "mt-12 grid gap-5"])}"><!--[-->`);
      ssrRenderList(page.value.sections, (section, index) => {
        var _a;
        _push(`<article class="group rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-xl sm:p-8"><span class="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-lg font-black text-blue-600 transition-transform duration-300 group-hover:scale-110">${ssrInterpolate(index + 1)}</span><h3 class="mt-6 text-xl font-black tracking-tight text-slate-950">${ssrInterpolate(section.title)}</h3><p class="mt-3 text-sm leading-7 text-slate-600">${ssrInterpolate(section.description)}</p>`);
        if ((_a = section.items) == null ? void 0 : _a.length) {
          _push(`<ul class="mt-5 space-y-3 text-sm text-slate-600"><!--[-->`);
          ssrRenderList(section.items, (item) => {
            _push(`<li class="flex gap-2"><span class="text-blue-600 font-bold">\u2713</span><span>${ssrInterpolate(item)}</span></li>`);
          });
          _push(`<!--]--></ul>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</article>`);
      });
      _push(`<!--]--></div></div></section>`);
      if (page.value.note) {
        _push(`<section class="bg-slate-50 px-5 py-16 sm:px-8"><div class="mx-auto flex max-w-4xl flex-col gap-5 rounded-[2rem] border border-blue-100 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-md sm:flex-row sm:items-center sm:p-10"><span class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:info-duotone",
          class: "h-7 w-7"
        }, null, _parent));
        _push(`</span><p class="text-base leading-8 text-slate-700">${ssrInterpolate(page.value.note)}</p></div></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_PageCta, {
        title: page.value.ctaTitle,
        description: page.value.ctaDescription,
        "primary-label": page.value.primary,
        "secondary-label": page.value.secondary,
        "primary-url": unref(primaryUrl),
        "secondary-url": unref(secondaryUrl),
        "secondary-click": unref(onConsultClick)
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_ShoplyConsultDialog, {
        open: unref(isConsultOpen),
        "onUpdate:open": ($event) => isRef(isConsultOpen) ? isConsultOpen.value = $event : null,
        source: "solution-page"
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shoply/components/MarketingPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MarketingPage = Object.assign(_sfc_main, { __name: "MarketingPage" });

export { MarketingPage as default };
//# sourceMappingURL=MarketingPage-CLZpKopY.mjs.map
