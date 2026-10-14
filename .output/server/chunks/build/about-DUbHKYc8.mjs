import { dr as buildAssetsURL } from '../nitro/nitro.mjs';
import { u as useI18n, r as useSettings, D as useLocaleRouter, bg as useSeoMeta, bk as useJsonLd, _ as _sfc_main$S } from './server.mjs';
import ShoplyLeadForm from './ShoplyLeadForm-BPVVz4Cl.mjs';
import { defineComponent, computed, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { u as useShoplyAuthLinks } from './useShoplyAuthLinks-1qS_J9sZ.mjs';
import { a as aboutLocales } from './marketing-pages-BVSsx8tM.mjs';
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
import './CaptchaSlider-BJqv3jPw.mjs';

const companyImg = "" + buildAssetsURL("company.DbaBkzBQ.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, t } = useI18n();
    const { getSetting } = useSettings();
    const { localePath } = useLocaleRouter();
    const { signUpUrl } = useShoplyAuthLinks();
    const copy = computed(() => {
      const current = locale.value;
      if (current in aboutLocales) {
        return aboutLocales[current];
      }
      return aboutLocales.zh;
    });
    const companyName = computed(() => String(getSetting("company_name") || getSetting("site_name") || "Shoply"));
    const siteName = computed(() => String(getSetting("site_name") || "Shoply"));
    const companyAddress = computed(() => String(getSetting("company_address") || ""));
    const companyPhone = computed(() => String(getSetting("company_phone") || ""));
    const primaryEmail = computed(() => String(getSetting("support_email") || getSetting("company_email") || ""));
    const siteUrl = computed(() => String(getSetting("site_url") || ""));
    const wechat = computed(() => String(getSetting("wechat") || ""));
    const wechatQr = computed(() => String(getSetting("wechat_qr") || ""));
    const whatsapp = computed(() => String(getSetting("whatsapp") || ""));
    const whatsappQr = computed(() => String(getSetting("whatsapp_qr") || ""));
    const telegram = computed(() => String(getSetting("telegram") || ""));
    const telegramQr = computed(() => String(getSetting("telegram_qr") || ""));
    const cleanNumber = (val) => String(val || "").replace(/[^0-9]/g, "");
    const telegramLink = (val) => {
      const clean = String(val || "").trim();
      if (clean.startsWith("http://") || clean.startsWith("https://")) return clean;
      return `https://t.me/${clean.replace("@", "")}`;
    };
    const isConsultOpen = ref(false);
    const activeQrModal = ref(null);
    const seoTitle = computed(() => {
      if (locale.value in aboutLocales) return aboutLocales[locale.value].seo.title;
      return t("shoply.pages.marketing.about.seoTitle") || copy.value.seo.title;
    });
    const seoDescription = computed(() => {
      if (locale.value in aboutLocales) return aboutLocales[locale.value].seo.description;
      return t("shoply.pages.marketing.about.seoDescription") || copy.value.seo.description;
    });
    const seoKeywords = computed(() => {
      if (locale.value in aboutLocales) return aboutLocales[locale.value].seo.keywords;
      return t("shoply.pages.marketing.about.seoKeywords") || copy.value.seo.keywords;
    });
    useSeoMeta({
      title: () => seoTitle.value,
      description: () => seoDescription.value,
      keywords: () => seoKeywords.value,
      ogTitle: () => seoTitle.value,
      ogDescription: () => seoDescription.value,
      ogType: "website",
      ogImage: () => companyImg,
      twitterCard: "summary_large_image",
      twitterTitle: () => seoTitle.value,
      twitterDescription: () => seoDescription.value,
      twitterImage: () => companyImg
    });
    useJsonLd("shoply-about-jsonld", computed(() => [
      {
        "@type": "AboutPage",
        name: seoTitle.value,
        description: seoDescription.value,
        url: localePath("/page/about")
      },
      {
        "@type": "Organization",
        name: companyName.value,
        url: siteUrl.value || void 0,
        email: primaryEmail.value || void 0,
        telephone: companyPhone.value || void 0,
        address: companyAddress.value ? {
          "@type": "PostalAddress",
          streetAddress: companyAddress.value
        } : void 0
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: t("shoply.footer.home") || copy.value.breadcrumb.home, item: localePath("/") },
          { "@type": "ListItem", position: 2, name: t("shoply.footer.about") || copy.value.breadcrumb.about, item: localePath("/page/about") }
        ]
      }
    ]));
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z;
      const _component_UIcon = _sfc_main$S;
      const _component_ShoplyLeadForm = ShoplyLeadForm;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white font-sans text-slate-900 selection:bg-blue-200" }, _attrs))}><section class="relative isolate overflow-hidden bg-gradient-to-b from-[#2678ff] via-[#1e6df0] to-[#155fc8] px-5 pt-28 pb-20 text-white sm:px-8 sm:pt-36 sm:pb-28 lg:px-12 lg:pt-40"><div class="pointer-events-none absolute inset-0 -z-10"><div class="animate-shoply-glow absolute -left-20 top-10 h-96 w-96 rounded-full bg-cyan-300/25 blur-3xl"></div><div class="animate-shoply-float-delayed absolute -right-20 bottom-10 h-[480px] w-[480px] rounded-full bg-indigo-900/30 blur-3xl"></div><div class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-blue-800/20 to-transparent"></div></div><div class="mx-auto max-w-[1360px]"><div class="mx-auto max-w-4xl text-center"><div class="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-bold tracking-wider text-blue-50 backdrop-blur-sm"><span class="h-2 w-2 rounded-full bg-amber-300 animate-pulse"></span> ${ssrInterpolate(copy.value.hero.badge)}</div><h1 class="mt-6 text-4xl font-black leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">${ssrInterpolate(copy.value.hero.titleMain)} <span class="mt-2 block text-amber-300">${ssrInterpolate(copy.value.hero.titleHighlight)}</span></h1><p class="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-blue-50/90 sm:text-lg sm:leading-8">`);
      if (companyName.value && companyName.value !== "Shoply") {
        _push(`<span class="font-semibold text-white">${ssrInterpolate(companyName.value)} \xB7 </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(` ${ssrInterpolate(copy.value.hero.description)}</p><div class="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"><a${ssrRenderAttr("href", unref(signUpUrl))} class="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-white px-8 py-4 text-base font-extrabold text-blue-600 shadow-xl shadow-blue-950/15 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl active:scale-95 sm:w-auto"><span>${ssrInterpolate(copy.value.hero.primaryCta)}</span>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:arrow-right-bold",
        class: "h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
      }, null, _parent));
      _push(`</a><button type="button" class="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 active:scale-95 sm:w-auto">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:handshake-bold",
        class: "h-5 w-5 text-amber-300"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(copy.value.hero.secondaryCta)}</span></button></div><div class="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-blue-100 sm:text-sm"><!--[-->`);
      ssrRenderList(copy.value.hero.proofPills, (pill) => {
        _push(`<span class="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 backdrop-blur-sm">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:check-circle-fill",
          class: "h-4 w-4 text-emerald-300"
        }, null, _parent));
        _push(` ${ssrInterpolate(pill)}</span>`);
      });
      _push(`<!--]--></div></div><div class="relative mx-auto mt-14 max-w-5xl"><div class="overflow-hidden rounded-[2rem] border border-white/20 bg-slate-900/60 p-2 shadow-2xl shadow-blue-950/60 backdrop-blur-xl sm:p-3"><img${ssrRenderAttr("src", unref(companyImg))} alt="Headquarter &amp; Team" class="w-full rounded-[1.5rem] object-cover" loading="eager"></div></div></div></section><section class="py-20 sm:py-28 bg-slate-50"><div class="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12"><div class="mx-auto max-w-3xl text-center"><span class="rounded-full bg-blue-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-700">${ssrInterpolate(copy.value.pillarsTag)}</span><h2 class="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">${ssrInterpolate(copy.value.pillarsTitle)}</h2><p class="mt-4 text-base text-slate-600 sm:text-lg">${ssrInterpolate(copy.value.pillarsDesc)}</p></div><div class="mt-14 grid gap-8 md:grid-cols-3"><!--[-->`);
      ssrRenderList(copy.value.pillars, (p, idx) => {
        _push(`<div class="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10"><div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: p.icon,
          class: "h-7 w-7"
        }, null, _parent));
        _push(`</div><h3 class="mt-6 text-xl font-bold text-slate-900">${ssrInterpolate(p.title)}</h3><p class="mt-3 text-sm leading-relaxed text-slate-600">${ssrInterpolate(p.desc)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="py-16 sm:py-24 bg-white border-y border-slate-100"><div class="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12"><div class="mx-auto max-w-3xl text-center"><span class="rounded-full bg-blue-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-700">${ssrInterpolate((_a = copy.value.contactSection) == null ? void 0 : _a.badge)}</span><h2 class="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">${ssrInterpolate((_b = copy.value.contactSection) == null ? void 0 : _b.title)}</h2><p class="mt-4 text-base text-slate-600 sm:text-lg">${ssrInterpolate((_c = copy.value.contactSection) == null ? void 0 : _c.subtitle)}</p></div><div class="mt-12 grid gap-8 lg:grid-cols-12 items-stretch"><div class="lg:col-span-7 rounded-[2.5rem] border border-slate-200/90 bg-slate-50/70 p-7 sm:p-10 shadow-sm flex flex-col justify-between"><div><div class="flex items-center gap-3.5 mb-7"><div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-md shadow-blue-500/20">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:buildings-bold",
        class: "h-6 w-6"
      }, null, _parent));
      _push(`</div><div><h3 class="text-xl font-bold text-slate-900">${ssrInterpolate(companyName.value)}</h3><p class="text-xs text-slate-500 mt-0.5">${ssrInterpolate(siteName.value)} ${ssrInterpolate((_d = copy.value.contactSection) == null ? void 0 : _d.entitySubtitle)}</p></div></div><div class="space-y-4 text-sm"><div class="flex items-start gap-3.5 rounded-2xl bg-white p-4 border border-slate-200/70 shadow-2xs"><div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 mt-0.5">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:map-pin-bold",
        class: "h-5 w-5"
      }, null, _parent));
      _push(`</div><div class="min-w-0"><div class="text-[11px] font-bold text-slate-400 uppercase tracking-wider">${ssrInterpolate((_e = copy.value.contactSection) == null ? void 0 : _e.addressLabel)}</div><div class="mt-1 font-semibold text-slate-900 leading-relaxed break-words">${ssrInterpolate(companyAddress.value || ((_f = copy.value.contactSection) == null ? void 0 : _f.defaultAddress))}</div></div></div><div class="grid gap-4 sm:grid-cols-2"><div class="flex items-start gap-3.5 rounded-2xl bg-white p-4 border border-slate-200/70 shadow-2xs"><div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 mt-0.5">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:phone-bold",
        class: "h-5 w-5"
      }, null, _parent));
      _push(`</div><div class="min-w-0"><div class="text-[11px] font-bold text-slate-400 uppercase tracking-wider">${ssrInterpolate((_g = copy.value.contactSection) == null ? void 0 : _g.phoneLabel)}</div>`);
      if (companyPhone.value) {
        _push(`<a${ssrRenderAttr("href", `tel:${companyPhone.value}`)} class="mt-1 block truncate font-semibold text-slate-900 hover:text-blue-600 transition-colors">${ssrInterpolate(companyPhone.value)}</a>`);
      } else {
        _push(`<div class="mt-1 font-medium text-slate-400 text-xs leading-5">${ssrInterpolate((_h = copy.value.contactSection) == null ? void 0 : _h.phoneOnlineText)}</div>`);
      }
      _push(`</div></div><div class="flex items-start gap-3.5 rounded-2xl bg-white p-4 border border-slate-200/70 shadow-2xs"><div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-600 mt-0.5">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:envelope-simple-bold",
        class: "h-5 w-5"
      }, null, _parent));
      _push(`</div><div class="min-w-0"><div class="text-[11px] font-bold text-slate-400 uppercase tracking-wider">${ssrInterpolate((_i = copy.value.contactSection) == null ? void 0 : _i.emailLabel)}</div>`);
      if (primaryEmail.value) {
        _push(`<a${ssrRenderAttr("href", `mailto:${primaryEmail.value}`)} class="mt-1 block truncate font-semibold text-slate-900 hover:text-blue-600 transition-colors">${ssrInterpolate(primaryEmail.value)}</a>`);
      } else {
        _push(`<div class="mt-1 font-medium text-slate-400 text-xs leading-5">${ssrInterpolate((_j = copy.value.contactSection) == null ? void 0 : _j.phoneOnlineText)}</div>`);
      }
      _push(`</div></div></div>`);
      if (siteUrl.value) {
        _push(`<div class="flex items-start gap-3.5 rounded-2xl bg-white p-4 border border-slate-200/70 shadow-2xs"><div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 mt-0.5">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:globe-bold",
          class: "h-5 w-5"
        }, null, _parent));
        _push(`</div><div class="min-w-0"><div class="text-[11px] font-bold text-slate-400 uppercase tracking-wider">${ssrInterpolate((_k = copy.value.contactSection) == null ? void 0 : _k.urlLabel)}</div><a${ssrRenderAttr("href", siteUrl.value)} target="_blank" rel="noopener noreferrer" class="mt-1 inline-flex items-center gap-1 font-semibold text-blue-600 hover:underline">${ssrInterpolate(siteUrl.value)} `);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:arrow-up-right-bold",
          class: "h-3.5 w-3.5"
        }, null, _parent));
        _push(`</a></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="mt-7 pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500"><span class="inline-flex items-center gap-1.5 font-medium text-emerald-600"><span class="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span> ${ssrInterpolate((_l = copy.value.contactSection) == null ? void 0 : _l.serviceStatus)}</span><span>${ssrInterpolate((_m = copy.value.contactSection) == null ? void 0 : _m.workHours)}</span></div></div><div class="lg:col-span-5 rounded-[2.5rem] border border-slate-200/90 bg-white p-7 sm:p-10 shadow-sm flex flex-col justify-between"><div><div class="flex items-center justify-between mb-7"><div><h3 class="text-xl font-bold text-slate-900">${ssrInterpolate((_n = copy.value.contactSection) == null ? void 0 : _n.channelsTitle)}</h3><p class="text-xs text-slate-500 mt-0.5">${ssrInterpolate((_o = copy.value.contactSection) == null ? void 0 : _o.channelsSubtitle)}</p></div><div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:chat-teardrop-dots-bold",
        class: "h-5 w-5"
      }, null, _parent));
      _push(`</div></div><div class="space-y-3.5">`);
      if (wechat.value || wechatQr.value) {
        _push(`<div class="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50/70 p-4 transition-all hover:bg-slate-50"><div class="flex items-center gap-3.5 min-w-0"><div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:wechat-logo-fill",
          class: "h-6 w-6"
        }, null, _parent));
        _push(`</div><div class="min-w-0"><div class="text-[11px] font-bold text-slate-400">${ssrInterpolate((_p = copy.value.contactSection) == null ? void 0 : _p.wechatLabel)}</div><div class="text-sm font-bold text-slate-900 truncate">${ssrInterpolate(wechat.value || ((_q = copy.value.contactSection) == null ? void 0 : _q.wechatScan))}</div></div></div>`);
        if (wechatQr.value) {
          _push(`<button type="button" class="shrink-0 inline-flex items-center gap-1 rounded-xl bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700 hover:bg-emerald-100 transition-colors cursor-pointer">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:qr-code-bold",
            class: "h-4 w-4"
          }, null, _parent));
          _push(`<span>${ssrInterpolate((_r = copy.value.contactSection) == null ? void 0 : _r.viewQr)}</span></button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (whatsapp.value || whatsappQr.value) {
        _push(`<div class="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50/70 p-4 transition-all hover:bg-slate-50"><div class="flex items-center gap-3.5 min-w-0"><div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-500/10 text-green-600">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:whatsapp-logo-fill",
          class: "h-6 w-6"
        }, null, _parent));
        _push(`</div><div class="min-w-0"><div class="text-[11px] font-bold text-slate-400">WhatsApp</div><div class="text-sm font-bold text-slate-900 truncate">${ssrInterpolate(whatsapp.value || ((_s = copy.value.contactSection) == null ? void 0 : _s.chatNow))}</div></div></div><div class="flex items-center gap-2 shrink-0">`);
        if (whatsappQr.value) {
          _push(`<button type="button" class="inline-flex items-center gap-1 rounded-xl bg-green-50 px-3 py-1.5 text-xs font-bold text-green-700 hover:bg-green-100 transition-colors cursor-pointer">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:qr-code-bold",
            class: "h-4 w-4"
          }, null, _parent));
          _push(`</button>`);
        } else {
          _push(`<!---->`);
        }
        if (whatsapp.value) {
          _push(`<a${ssrRenderAttr("href", `https://wa.me/${cleanNumber(whatsapp.value)}`)} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 rounded-xl bg-green-600 px-3.5 py-1.5 text-xs font-bold text-white hover:bg-green-700 transition-colors"><span>${ssrInterpolate((_t = copy.value.contactSection) == null ? void 0 : _t.chatNow)}</span>`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:arrow-up-right-bold",
            class: "h-3 w-3"
          }, null, _parent));
          _push(`</a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (telegram.value || telegramQr.value) {
        _push(`<div class="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50/70 p-4 transition-all hover:bg-slate-50"><div class="flex items-center gap-3.5 min-w-0"><div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:telegram-logo-fill",
          class: "h-6 w-6"
        }, null, _parent));
        _push(`</div><div class="min-w-0"><div class="text-[11px] font-bold text-slate-400">Telegram</div><div class="text-sm font-bold text-slate-900 truncate">${ssrInterpolate(telegram.value || ((_u = copy.value.contactSection) == null ? void 0 : _u.telegramChannel))}</div></div></div><div class="flex items-center gap-2 shrink-0">`);
        if (telegramQr.value) {
          _push(`<button type="button" class="inline-flex items-center gap-1 rounded-xl bg-sky-50 px-3 py-1.5 text-xs font-bold text-sky-700 hover:bg-sky-100 transition-colors cursor-pointer">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:qr-code-bold",
            class: "h-4 w-4"
          }, null, _parent));
          _push(`</button>`);
        } else {
          _push(`<!---->`);
        }
        if (telegram.value) {
          _push(`<a${ssrRenderAttr("href", telegramLink(telegram.value))} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 rounded-xl bg-sky-600 px-3.5 py-1.5 text-xs font-bold text-white hover:bg-sky-700 transition-colors"><span>${ssrInterpolate((_v = copy.value.contactSection) == null ? void 0 : _v.openApp)}</span>`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:arrow-up-right-bold",
            class: "h-3 w-3"
          }, null, _parent));
          _push(`</a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="rounded-2xl border border-blue-100 bg-blue-50/50 p-4 flex items-center justify-between gap-3"><div class="flex items-center gap-3 min-w-0"><div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:handshake-bold",
        class: "h-5 w-5"
      }, null, _parent));
      _push(`</div><div class="min-w-0"><div class="text-xs font-bold text-blue-900">${ssrInterpolate((_w = copy.value.contactSection) == null ? void 0 : _w.consultCardTitle)}</div><div class="text-xs text-blue-700/80 truncate">${ssrInterpolate((_x = copy.value.contactSection) == null ? void 0 : _x.consultCardDesc)}</div></div></div><button type="button" class="shrink-0 inline-flex items-center gap-1 rounded-xl bg-blue-600 px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-blue-700 transition-colors active:scale-95 cursor-pointer"><span>${ssrInterpolate((_y = copy.value.contactSection) == null ? void 0 : _y.consultBtn)}</span>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:arrow-right-bold",
        class: "h-3.5 w-3.5"
      }, null, _parent));
      _push(`</button></div></div></div></div></div></div></section><section class="relative isolate overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 py-20 px-5 text-white sm:px-8 lg:px-12"><div class="mx-auto max-w-4xl text-center"><h2 class="text-3xl font-black sm:text-4xl lg:text-5xl">${ssrInterpolate(copy.value.bottomCta.title)}</h2><p class="mx-auto mt-4 max-w-2xl text-base text-blue-100/90 sm:text-lg">${ssrInterpolate(copy.value.bottomCta.subtitle)}</p><div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"><a${ssrRenderAttr("href", unref(signUpUrl))} class="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-black text-blue-700 shadow-xl transition-all hover:bg-blue-50 active:scale-95 sm:w-auto"><span>${ssrInterpolate(copy.value.bottomCta.primaryText)}</span>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:arrow-right-bold",
        class: "h-5 w-5"
      }, null, _parent));
      _push(`</a><button type="button" class="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 active:scale-95 sm:w-auto">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:chat-circle-dots-bold",
        class: "h-5 w-5 text-amber-300"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(copy.value.bottomCta.secondaryText)}</span></button></div></div></section>`);
      if (activeQrModal.value) {
        _push(`<div class="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm"><div class="relative w-full max-w-sm rounded-3xl bg-white p-6 text-center shadow-2xl animate-shoply-fade-in-up"><button type="button" class="absolute right-4 top-4 rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors cursor-pointer">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:x-bold",
          class: "h-5 w-5"
        }, null, _parent));
        _push(`</button><div class="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:qr-code-bold",
          class: "h-6 w-6"
        }, null, _parent));
        _push(`</div><h4 class="text-lg font-bold text-slate-900 mb-1">${ssrInterpolate(activeQrModal.value.title)}</h4><p class="text-xs text-slate-500 mb-5">${ssrInterpolate((_z = copy.value.contactSection) == null ? void 0 : _z.qrModalHint)}</p><div class="mx-auto w-56 h-56 rounded-2xl border border-slate-100 bg-slate-50 p-3 shadow-inner flex items-center justify-center overflow-hidden"><img${ssrRenderAttr("src", activeQrModal.value.url)}${ssrRenderAttr("alt", activeQrModal.value.title)} class="w-full h-full object-contain rounded-xl"></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (isConsultOpen.value) {
        _push(`<div class="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm"><div class="relative w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl sm:p-8"><button type="button" class="absolute right-4 top-4 rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors cursor-pointer">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:x-bold",
          class: "h-5 w-5"
        }, null, _parent));
        _push(`</button><div class="text-center"><div class="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:handshake-duotone",
          class: "h-6 w-6"
        }, null, _parent));
        _push(`</div><h3 class="mt-4 text-xl font-bold text-slate-900">${ssrInterpolate(copy.value.consult.title)}</h3><p class="mt-2 text-xs text-slate-500">${ssrInterpolate(copy.value.consult.desc)}</p></div>`);
        _push(ssrRenderComponent(_component_ShoplyLeadForm, {
          class: "mt-6",
          source: "about"
        }, null, _parent));
        _push(`</div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shoply/pages/page/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=about-DUbHKYc8.mjs.map
