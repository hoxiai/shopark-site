import { eV as buildAssetsURL } from '../nitro/nitro.mjs';
import { u as useI18n, D as useLocaleRouter, bg as useSeoMeta, _ as _sfc_main$W, O as __nuxt_component_3$4 } from './server.mjs';
import { defineComponent, computed, ref, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { i as installLocales } from './marketing-pages-CJGWYxP0.mjs';
import ShoparkLeadForm from './ShoparkLeadForm-N5i4b_rX.mjs';
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
import 'node:dns/promises';
import 'node:net';
import 'node:fs/promises';
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

const linuxIcon = "" + buildAssetsURL("linux.Dv2HEo-j.svg");
const windowsIcon = "data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1723470407504'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='8920'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cpath%20d='M0%20139.392L409.429333%2081.92l0.170667%20407.210667-409.216%202.389333L0%20139.392z%20m409.301333%20395.818667L409.6%20942.08%200%20884.181333V532.48l409.301333%202.730667z%20m41.258667-454.186667L1024%200v487.125333l-573.44%204.394667V81.024zM1024%20533.333333L1023.872%201024l-572.501333-79.274667-0.810667-412.245333%20573.44%200.896z'%20fill='%23491eff'%20p-id='8921'%3e%3c/path%3e%3c/svg%3e";
const macosIcon = "data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1723470726300'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='10012'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cpath%20d='M928.768%20750.592c-1.536%204.096-21.504%2074.24-70.656%20145.92-43.008%2062.464-87.04%20124.928-156.672%20125.952-68.608%201.024-90.624-40.96-168.96-40.96s-102.912%2039.936-167.936%2041.984c-67.072%202.56-118.784-68.096-161.792-130.048C115.2%20767.488%2047.616%20534.528%20138.24%20378.88c44.544-77.824%20124.928-127.488%20211.968-129.024%2065.536-1.024%20128.512%2044.544%20168.448%2044.544%2040.96%200%20116.736-55.296%20196.608-47.104%2033.28%201.536%20126.976%2013.824%20186.88%20101.376-4.608%203.072-111.616%2066.56-110.592%20195.072%201.024%20155.136%20135.68%20206.336%20137.216%20206.848m-266.24-586.24c35.84-44.032%2059.904-104.448%2053.248-164.352-51.2%202.048-114.176%2034.304-151.04%2077.824-32.768%2037.888-61.952%2099.328-53.76%20158.72%2056.832%203.072%20115.712-30.208%20151.552-72.192'%20fill='%23491eff'%20p-id='10013'%3e%3c/path%3e%3c/svg%3e";
const nginxSnippet = `server {
    listen 80;
    server_name mall.yourdomain.com;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    server_name mall.yourdomain.com;

    ssl_certificate     /path/to/fullchain.pem;
    ssl_certificate_key /path/to/privkey.pem;

    client_max_body_size 50m;

    location / {
        proxy_pass http://127.0.0.1:5490;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        # WebSocket support for AI Chat & real-time events
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}`;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "install",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, t } = useI18n();
    const { localePath } = useLocaleRouter();
    const copy = computed(() => {
      const current = locale.value;
      return installLocales[current in installLocales ? current : "zh"];
    });
    const activeSource = ref(locale.value === "zh" || locale.value === "zh-HK" ? "gitcode" : "github");
    const currentCommandText = computed(() => activeSource.value === "gitcode" ? copy.value.setup.gitcode : copy.value.setup.github);
    const copied = ref(false);
    const nginxCopied = ref(false);
    const isConsultOpen = ref(false);
    const seoTitle = computed(() => {
      if (locale.value in installLocales) return installLocales[locale.value].seo.title;
      return t("shopark.pages.marketing.install.seoTitle") || copy.value.seo.title;
    });
    const seoDescription = computed(() => {
      if (locale.value in installLocales) return installLocales[locale.value].seo.description;
      return t("shopark.pages.marketing.install.seoDescription") || copy.value.seo.description;
    });
    const seoKeywords = computed(() => {
      if (locale.value in installLocales) return installLocales[locale.value].seo.keywords;
      return t("shopark.pages.marketing.install.seoKeywords") || copy.value.seo.keywords;
    });
    useSeoMeta({
      title: () => seoTitle.value,
      description: () => seoDescription.value,
      keywords: () => seoKeywords.value,
      ogTitle: () => seoTitle.value,
      ogDescription: () => seoDescription.value,
      ogType: "website",
      twitterCard: "summary_large_image",
      twitterTitle: () => seoTitle.value,
      twitterDescription: () => seoDescription.value
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$W;
      const _component_NuxtLink = __nuxt_component_3$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white font-sans text-slate-900 selection:bg-blue-200" }, _attrs))}><section class="relative isolate overflow-hidden bg-gradient-to-b from-[#2678ff] via-[#1e6df0] to-[#155fc8] px-5 pt-28 pb-20 text-white sm:px-8 sm:pt-36 sm:pb-28 lg:px-12 lg:pt-40"><div class="pointer-events-none absolute inset-0 -z-10"><div class="animate-shopark-glow absolute -left-20 top-10 h-96 w-96 rounded-full bg-cyan-300/25 blur-3xl"></div><div class="animate-shopark-float-delayed absolute -right-20 bottom-10 h-[480px] w-[480px] rounded-full bg-indigo-900/30 blur-3xl"></div><div class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-blue-800/20 to-transparent"></div></div><div class="mx-auto max-w-[1360px]"><div class="mx-auto max-w-4xl text-center"><div class="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-bold tracking-wider text-blue-50 backdrop-blur-sm"><span class="h-2 w-2 rounded-full bg-amber-300 animate-pulse"></span> ${ssrInterpolate(copy.value.hero.badge)}</div><h1 class="mt-6 text-4xl font-black leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">${ssrInterpolate(copy.value.hero.titleMain)} <span class="mt-2 block text-amber-300">${ssrInterpolate(copy.value.hero.titleHighlight)}</span></h1><p class="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-blue-50/90 sm:text-lg sm:leading-8">${ssrInterpolate(copy.value.hero.description)}</p><div class="mt-9 flex flex-wrap items-center justify-center gap-4"><a href="#quick-install" class="group inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-8 py-4 text-base font-extrabold text-blue-600 shadow-xl shadow-blue-950/15 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl active:scale-95">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:terminal-window-bold",
        class: "h-5 w-5 text-blue-600"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(copy.value.hero.primaryCta)}</span></a><a href="https://gitcode.com/hoxiai/shopark" target="_blank" rel="noreferrer" class="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 active:scale-95">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:git-branch-bold",
        class: "h-4 w-4 text-amber-300"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(copy.value.gitcodeDomesticLabel)}</span>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:arrow-up-right-bold",
        class: "h-3.5 w-3.5 opacity-70"
      }, null, _parent));
      _push(`</a><a href="https://github.com/hoxiai/shopark" target="_blank" rel="noreferrer" class="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 active:scale-95">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:github-logo-bold",
        class: "h-4 w-4 text-sky-200"
      }, null, _parent));
      _push(`<span>GitHub (Global)</span>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:arrow-up-right-bold",
        class: "h-3.5 w-3.5 opacity-70"
      }, null, _parent));
      _push(`</a><button type="button" class="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 active:scale-95">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:chats-teardrop-bold",
        class: "h-4 w-4 text-amber-300"
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
      _push(`<!--]--></div></div><div id="quick-install" class="relative mx-auto mt-14 max-w-4xl scroll-mt-24"><div class="overflow-hidden rounded-3xl border border-slate-700 bg-slate-950 p-6 sm:p-8 shadow-2xl shadow-blue-950/80"><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4"><div class="flex items-center gap-2"><span class="h-3.5 w-3.5 rounded-full bg-rose-500"></span><span class="h-3.5 w-3.5 rounded-full bg-amber-500"></span><span class="h-3.5 w-3.5 rounded-full bg-emerald-500"></span><span class="ml-3 text-xs font-mono text-slate-400">root@server: ~</span></div><div class="flex items-center rounded-xl bg-slate-900 p-1 border border-slate-800"><button type="button" class="${ssrRenderClass([activeSource.value === "gitcode" ? "bg-emerald-500 text-slate-950 shadow-md" : "text-slate-400 hover:text-white", "rounded-lg px-3 py-1.5 text-xs font-bold transition-all"])}"><span class="flex items-center gap-1.5">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:lightning-bold",
        class: "h-3.5 w-3.5"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(copy.value.gitcodeRecommendedLabel)}</span></span></button><button type="button" class="${ssrRenderClass([activeSource.value === "github" ? "bg-sky-500 text-slate-950 shadow-md" : "text-slate-400 hover:text-white", "rounded-lg px-3 py-1.5 text-xs font-bold transition-all"])}"><span class="flex items-center gap-1.5">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:globe-bold",
        class: "h-3.5 w-3.5"
      }, null, _parent));
      _push(`<span>GitHub (Global)</span></span></button></div><span class="hidden sm:inline text-[11px] font-mono text-emerald-400">Docker &amp; Podman</span></div><div class="mt-6 rounded-2xl bg-slate-900 border border-slate-800 p-5 font-mono text-xs sm:text-sm text-slate-200"><div class="flex items-start justify-between gap-4"><pre class="overflow-x-auto leading-relaxed select-all text-emerald-200"><code>${ssrInterpolate(currentCommandText.value)}</code></pre><button type="button" class="shrink-0 inline-flex items-center gap-1.5 rounded-xl bg-blue-600 px-4 py-2 text-xs font-bold text-white transition-all hover:bg-blue-500 active:scale-95">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: copied.value ? "ph:check-bold" : "ph:copy-bold",
        class: "h-4 w-4"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(copied.value ? copy.value.copiedLabel : copy.value.copyCommandLabel)}</span></button></div></div><div class="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-slate-400 font-mono"><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:timer-bold",
        class: "h-4 w-4 text-emerald-400"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(copy.value.heroInfo.startTime)}</span></div><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:magnifying-glass-bold",
        class: "h-4 w-4 text-emerald-400"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(copy.value.heroInfo.mysqlRedis)}</span></div><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:browser-bold",
        class: "h-4 w-4 text-emerald-400"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(copy.value.heroInfo.port)}</span></div><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:shield-check-bold",
        class: "h-4 w-4 text-emerald-400"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(copy.value.heroInfo.rootless)}</span></div></div></div></div></div></section><section class="py-20 sm:py-28 bg-slate-50"><div class="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12"><div class="mx-auto max-w-3xl text-center"><span class="rounded-full bg-blue-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-700">${ssrInterpolate(copy.value.methodsTag)}</span><h2 class="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">${ssrInterpolate(copy.value.methodsTitle)}</h2><p class="mt-4 text-base text-slate-600 sm:text-lg">${ssrInterpolate(copy.value.methodsDesc)}</p></div><div class="mt-14 grid gap-8 md:grid-cols-3"><!--[-->`);
      ssrRenderList(copy.value.methods, (m) => {
        _push(`<div class="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-500/10"><span class="text-4xl font-black text-emerald-600/30">${ssrInterpolate(m.step)}</span><h3 class="mt-4 text-xl font-bold text-slate-900">${ssrInterpolate(m.title)}</h3><p class="mt-3 text-sm leading-relaxed text-slate-600">${ssrInterpolate(m.desc)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="py-20 sm:py-28 bg-white"><div class="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12"><div class="mx-auto max-w-3xl text-center"><span class="rounded-full bg-emerald-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">${ssrInterpolate(copy.value.featuresTag)}</span><h2 class="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">${ssrInterpolate(copy.value.featuresTitle)}</h2><p class="mt-4 text-base text-slate-600 sm:text-lg">${ssrInterpolate(copy.value.featuresDesc)}</p></div><div class="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"><!--[-->`);
      ssrRenderList(copy.value.features, (feat) => {
        _push(`<div class="group rounded-3xl border border-slate-200 bg-slate-50/60 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5"><div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition-transform group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: feat.icon,
          class: "h-6 w-6"
        }, null, _parent));
        _push(`</div><h3 class="mt-6 text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">${ssrInterpolate(feat.title)}</h3><p class="mt-3 text-sm leading-relaxed text-slate-600">${ssrInterpolate(feat.desc)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="py-20 sm:py-28 bg-slate-950 text-white"><div class="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12"><div class="mx-auto max-w-3xl text-center"><span class="rounded-full bg-blue-500/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-cyan-300 border border-blue-400/30">${ssrInterpolate(copy.value.cliTag)}</span><h2 class="mt-4 text-3xl font-black sm:text-4xl text-white">${ssrInterpolate(copy.value.cliTitle)}</h2><p class="mt-4 text-base text-slate-400 sm:text-lg">${ssrInterpolate(copy.value.cliDesc)}</p></div><div class="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto"><!--[-->`);
      ssrRenderList(copy.value.cliCommands, (cmd) => {
        _push(`<div class="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 font-mono transition-all hover:border-cyan-400/50 hover:bg-slate-900"><div class="flex items-center justify-between text-xs text-cyan-300 font-bold"><span>${ssrInterpolate(cmd.cmd)}</span>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:terminal-bold",
          class: "h-4 w-4 text-slate-500"
        }, null, _parent));
        _push(`</div><p class="mt-2 text-xs font-sans text-slate-400 leading-relaxed">${ssrInterpolate(cmd.desc)}</p></div>`);
      });
      _push(`<!--]--></div><div class="mt-14 max-w-4xl mx-auto rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8"><div class="flex items-center justify-between border-b border-slate-800 pb-4"><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:shield-check-duotone",
        class: "h-5 w-5 text-emerald-400"
      }, null, _parent));
      _push(`<span class="text-sm font-bold text-slate-200">${ssrInterpolate(copy.value.nginxTemplateLabel)}</span></div><button type="button" class="inline-flex items-center gap-1.5 rounded-lg bg-slate-800 px-3 py-1.5 text-xs font-bold text-slate-300 transition-all hover:bg-slate-700">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: nginxCopied.value ? "ph:check-bold" : "ph:copy-bold",
        class: "h-3.5 w-3.5"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(nginxCopied.value ? copy.value.nginxCopiedLabel : copy.value.nginxCopyLabel)}</span></button></div><pre class="mt-4 overflow-x-auto font-mono text-xs text-slate-300 leading-relaxed max-h-72 select-all"><code>${ssrInterpolate(nginxSnippet)}</code></pre></div></div></section><section class="py-20 sm:py-28 bg-slate-50"><div class="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12"><div class="mx-auto max-w-3xl text-center"><h2 class="text-3xl font-black text-slate-900 sm:text-4xl">${ssrInterpolate(copy.value.os.title)}</h2><p class="mt-4 text-base text-slate-600 sm:text-lg">${ssrInterpolate(copy.value.os.desc)}</p></div><div class="mt-14 grid gap-8 md:grid-cols-3 max-w-4xl mx-auto"><div class="rounded-3xl border border-slate-200 bg-white p-8 text-center transition-all hover:border-blue-300 hover:shadow-lg"><img${ssrRenderAttr("src", unref(linuxIcon))} alt="Linux" class="mx-auto h-16 w-16 object-contain"><h3 class="mt-6 text-xl font-bold text-slate-900">Linux</h3><p class="mt-2 text-xs text-slate-500">${ssrInterpolate(copy.value.os.linuxDesc)}</p><div class="mt-6 space-y-2"><div class="rounded-xl bg-slate-50 border border-slate-200 p-2.5 text-xs font-mono text-slate-700"> Docker &amp; Rootless Podman </div><div class="rounded-xl bg-slate-50 border border-slate-200 p-2.5 text-xs font-mono text-slate-700"> x86_64 / arm64 (aarch64) </div></div></div><div class="rounded-3xl border border-slate-200 bg-white p-8 text-center transition-all hover:border-blue-300 hover:shadow-lg"><img${ssrRenderAttr("src", unref(macosIcon))} alt="macOS" class="mx-auto h-16 w-16 object-contain"><h3 class="mt-6 text-xl font-bold text-slate-900">macOS</h3><p class="mt-2 text-xs text-slate-500">${ssrInterpolate(copy.value.os.macosDesc)}</p><div class="mt-6 space-y-2"><div class="rounded-xl bg-slate-50 border border-slate-200 p-2.5 text-xs font-mono text-slate-700"> Apple Silicon (M1/M2/M3/M4) </div><div class="rounded-xl bg-slate-50 border border-slate-200 p-2.5 text-xs font-mono text-slate-700">${ssrInterpolate(copy.value.os.macosArchIntel)}</div></div></div><div class="rounded-3xl border border-slate-200 bg-white p-8 text-center transition-all hover:border-blue-300 hover:shadow-lg"><img${ssrRenderAttr("src", unref(windowsIcon))} alt="Windows" class="mx-auto h-16 w-16 object-contain"><h3 class="mt-6 text-xl font-bold text-slate-900">Windows</h3><p class="mt-2 text-xs text-slate-500">Windows 10/11 / Windows Server 2016+</p><div class="mt-6 space-y-2"><div class="rounded-xl bg-slate-50 border border-slate-200 p-2.5 text-xs font-mono text-slate-700"> WSL2 + Docker Desktop </div><div class="rounded-xl bg-slate-50 border border-slate-200 p-2.5 text-xs font-mono text-slate-700">${ssrInterpolate(copy.value.os.windowsScript)}</div></div></div></div><div class="mt-12 mx-auto max-w-4xl rounded-2xl border border-blue-100 bg-blue-50/60 p-6"><div class="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-900"><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:cpu-duotone",
        class: "h-5 w-5 text-blue-600"
      }, null, _parent));
      _push(`<span><strong>${ssrInterpolate(copy.value.sysReq.recommendLabel)}</strong> ${ssrInterpolate(copy.value.sysReq.recommendValue)}</span></div><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:globe-duotone",
        class: "h-5 w-5 text-blue-600"
      }, null, _parent));
      _push(`<span><strong>${ssrInterpolate(copy.value.sysReq.productionLabel)}</strong> ${ssrInterpolate(copy.value.sysReq.productionValue)}</span></div></div></div></div></section><section class="relative isolate overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 py-20 px-5 text-white sm:px-8 lg:px-12"><div class="mx-auto max-w-4xl text-center"><h2 class="text-3xl font-black sm:text-4xl lg:text-5xl">${ssrInterpolate(copy.value.bottomCta.title)}</h2><p class="mx-auto mt-4 max-w-2xl text-base text-blue-100/90 sm:text-lg">${ssrInterpolate(copy.value.bottomCta.subtitle)}</p><div class="mt-10 flex flex-wrap items-center justify-center gap-4"><button type="button" class="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-black text-blue-700 shadow-xl transition-all hover:bg-blue-50 active:scale-95"><span>${ssrInterpolate(copy.value.bottomCta.primaryText)}</span>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:arrow-right-bold",
        class: "h-5 w-5"
      }, null, _parent));
      _push(`</button>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/page/pricing"),
        class: "inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 active:scale-95"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:tag-bold",
              class: "h-5 w-5 text-amber-300"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>${ssrInterpolate(copy.value.bottomCta.secondaryText)}</span>`);
          } else {
            return [
              createVNode(_component_UIcon, {
                name: "ph:tag-bold",
                class: "h-5 w-5 text-amber-300"
              }),
              createVNode("span", null, toDisplayString(copy.value.bottomCta.secondaryText), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a href="https://gitcode.com/hoxiai/shopark" target="_blank" rel="noreferrer" class="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 active:scale-95">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:git-branch-bold",
        class: "h-4 w-4 text-amber-300"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(copy.value.gitcodeRepoLabel)}</span></a><a href="https://github.com/hoxiai/shopark" target="_blank" rel="noreferrer" class="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 active:scale-95">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:github-logo-bold",
        class: "h-4 w-4 text-sky-200"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(copy.value.githubRepoLabel)}</span></a></div></div></section>`);
      if (isConsultOpen.value) {
        _push(`<div class="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm"><div class="relative w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl sm:p-8"><button type="button" class="absolute right-4 top-4 rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:x-bold",
          class: "h-5 w-5"
        }, null, _parent));
        _push(`</button><div class="text-center"><div class="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:terminal-duotone",
          class: "h-6 w-6"
        }, null, _parent));
        _push(`</div><h3 class="mt-4 text-xl font-bold text-slate-900">${ssrInterpolate(copy.value.consult.title)}</h3><p class="mt-2 text-xs text-slate-500">${ssrInterpolate(copy.value.consult.desc)}</p></div>`);
        _push(ssrRenderComponent(ShoparkLeadForm, {
          class: "mt-6",
          source: "self-hosted"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shopark/pages/page/install.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=install-Dod7SST1.mjs.map
