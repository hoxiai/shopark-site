import { dr as buildAssetsURL } from '../nitro/nitro.mjs';
import { u as useI18n, bg as useSeoMeta, _ as _sfc_main$S, N as __nuxt_component_3$4 } from './server.mjs';
import ShoplyLeadForm from './ShoplyLeadForm-BPVVz4Cl.mjs';
import { defineComponent, computed, ref, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { u as useShoplyAuthLinks } from './useShoplyAuthLinks-1qS_J9sZ.mjs';
import { b as b2bWebsiteLocales } from './marketing-pages-BHsFqGxr.mjs';
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

const heroImg = "" + buildAssetsURL("b2b-hero.CmTPWUM3.png");
const beforeImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALsAAAA3CAYAAABU4jvJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3NmFkNmMwNy02MjFhLTgxNDUtYjYxZi1hM2ZmYmVjODRmNGEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTkxQkMxNjM0MDhCMTFFRTkxRkNGNTgwRkZGNEM4RTciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTkxQkMxNjI0MDhCMTFFRTkxRkNGNTgwRkZGNEM4RTciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjVlOWMyYjgtMjk0Mi1kYzQ5LWE1ZWUtMmUwMjJmMjBmZTk4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc2YWQ2YzA3LTYyMWEtODE0NS1iNjFmLWEzZmZiZWM4NGY0YSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pou2dnYAAAtGSURBVHja7F1/jFRHHZ/v3t6xd8dd744TlnKiLWdoNbGlibSkoFComGJtDSCtoLWhREwMsSbalDb8gdFGMbZiopGElNbaX4DS0MYCqWitYohpxDTWlkoDPXocd8B6d1zvjt0dZ/Z2t2/fzcz3O2/fHjx2vsk3b9/b2fdrPvOdz/c735kFzjlz4qQaJOZegZNqkbhN4VUbTgS9TlLoRqF3CK0R+rLQXwg9MpEP+9zWma7GHdgrKnOF7hPa4jm2Nq8Lhf7ZVYOTy4HGfEbo33xA98pLQhtcNTiJOtilRT+cpy06aRS6yFWDkyiD/aa8RafyeSdOIsnZbxR6yKJ82lWDkyiC/bNC/2T5mwkL9JcRTXJykSWMSFqYYF/AXGTFSRVY9nlCXw342yfyeikKz2vWo7r9jO+zd+s/5v9s+i7t2U/7yqR9ZdKK4xmFphXnMJVT3S92795jXPMudO/V/x5D6f3DcFAXWjijURTviwbD9+BpHKbypuP+RsZ9++C7FnZfYPFspmeGgO8NFPfKFOcGzfPH8gqXAtgldTlYxT0jaCoXaygUMIHhO27Y54QGBYSGywxA5cg+aBo/tq97txcd7J8rg7pE0apjVh6QyuMEIILiXF4LbQIGR6yrrtcIYvUxIOoas6mX4Jr3HVoAIyjYFwWIukTdcuu6WvB9hpAaF2ZdGdGam6gVIM/LfdfnmvcASCPmyLVM9wXsInJ2SV3+WCU0xW9VsQrjSOWrqAw3ABQIjYgrrCeVb3PiswOxh8POx5GyQDjPhIF9SRVQF6ojCQgFwQANFtfmFpSHWz4fEKiRqRFzwjtRnRMQzn/xwL5qwwlJXQ5UmQNKcQRNFrscJ8tEjSCEiInJx+DEqApoGgWF43Piu5lYzi6AvriKqAvVsQSDRQIC37fpWSgUgFs2YBsHlCv4u87igwLQHHE4eaUA7pU4AehL2dhkCydqi8cVTmL2+tmT6uZ8KlE3e1YiIQ7wB7b0vOcH8bqVLcklC5o7Xnmt/7j8/bbnU8cR6wdl3C+Vauh6KCD6LczQA1CvXREeH0eAvjAKQH/oW+2sPhFj/3lnmD21t7/kuy8vnszuuqMt9/l7j7zPTnSr887mXZdg31k7Vdfz1WD3sPPFcwO79g8MFQDxz7dGRu9d2daanFpbJ79fu7ylbfvuVF+h4jo/WjtJAl3uLJ7f/LFtT/e9oYmu2Fh0jFNT/AHMEeZEIJY0ft8+eI5j1jy08CPoJlwLoH9BbP4QBXO74ycdObB/MJzNbW1k74FUroFowE4WCfbGhhjcdssVk8N4JvH+pZFRDclTh/dtj6c11/KmIfjTF7zpBt5UgAzTpwd4UwCyGuX+Ms9tnVkZyx4loN86r6EI8CP/HmI33VA+1p594Sz7/SuDBauS/eF3p8Y6P56Ac6k0X7/p/eH88czNc+prNtz7kUrOtAKCQ8cZbcCKei1VxASLogCRLnGFH8INPkmog0pxTdQlEkCXMvf6MaydTaXZozvOCjN/NhCNCcCFx1XwE3v+d17ooMbSqfZVlrtgLbEIDNX5peS/6PY5AdC6+L6qYYAhhAkK6lM5zi6APj9KUZeWphj79LVjYH/72HBu+6vNV7K2FrUrsuXBK0v2j747zB5+9LStg2cE3oqlTfUrl7U2m066Z1+q65mX+nu9gNm4vr3zuk82JPsHMx+s23jyNYWDyAPwbJVjy4kRIwr3Z4ZoEcbBMc4OhMhRMLALoE9jEUsB+OLCyRU5r+wJ8r1BiQPQ2hIHwR3rkQZAqphFcxua1q9p75SfH/5p9+sWTiEV1IyZB5ooSVjcokExxEk1GQtsYCuUlAGvCdxEiTpcSlZ9yYJm1PFU0Zj7v9EWCrfH5MEfd3cdO3lhVFqwWR21sR99f/rVlmCxLcsJDQAszkNJN+CWIU3V77I+S69KcQ6Vs6+KmlW3jbwEdFC5cFDB56DmIgXCQQXhoDbqzvPIA9M7KuSsUmLbFDqBXY8Ty5uAifUgWQWlYSzEBDAV2OuiBPaG+ljRMVVx9NtvbcmpibOXCTzO8Hx2G4eX0o1zRs8BZ4h1ptASQOiUrpzp+mAAuoreZCsBdrlg0V1RAfu7742yv78+yKa0xrUOaQicvaSiEM4+DrgeGpMRNKbGksaoIhe2M4+w/BfQWGZdJAZL7wUsYmXoAYDp82pCT/HdFCXL3t2bZrv39Y/nyVtO5aIskrPL1QQkJSnINx/qyh2TjcQvyfayGwwgFjJo/Lsc7ooBzm99VaOcWE+i6m3AQGl01wziwAaz7MJiHRVAWC4+7o4C2N94Z1R5/Nqr69gnrkrk1Et35OhqamCsR1TF4xsbPmz3P9h6qnB+3aBSLmauGFTiPs4+o4xHtK1s0ICIIz2HKQrDieBV/Y4aylSdO1SLrrLsEvC/E5t7WITl0JFh9tj20zlwS86+eP5YxEZae5Nc05kofu7qIQ086Ry4SuRimyiF7eRsKl/nDI/FYxEXbBI6llFqFc614ewFwD8pLLys+V9HFfCzZtaxru7RonWXIgefZMix90ya9fSl2YFDQ8XvZk6PF8uePDVa7AEI14mbKl5w9pOCs4/kOXtccParCt8dPDw0cPDwiX+wD0dNqVEYrgkPUrIKbSZ42CShcUt6R6Vf2TAjM0qiKgC/TQBe9uOPRwnkP9uYZDOSpUGlf705VAS7N7Z+391jW8ntvSIzJ00V/PmbG2vWrpoyzkk9enz0gqnCO5LxuAkMwslOGEDOCb0HZ/jyGcDw5S2YhlbY+CugACsg98QJtCp8sOcBv0MAXvbnv4kK2B97vI9tvj+ZoyzHu0bHpfuuub25SFmkJZflCmX+K9r2slua2ct/GTTy2v1/PZ9ZfWcrT0yKFStv54vnzh95a0TFffi3V7e2LbixqSQG2n36wuiUlprYLzfPmOP/QU/vhQFNN485nsD0kyuCWFVKOgHV1+CMvtwGs2hkdhEE7D+VBODXic02Vp3iXxHM/9mfrppZsbQpsXJZ6xUFGnPNrLr4PSumTCs2llf7e7bvSvXIsls3TZ89rb226OC+fWy49+c7zrzZl8qMMLvUXiylN81oab/+FcX819atCmZaEUy1AphqlTDOSldVK9mGkeILlD8QE4BfLTZPVSnYlfnVTL3snb9CdVmPpqXvTJq1AHO53+kaQga59ywbnwOfNbwfYx57YT8MsJPG28WFfis2X6tSsJucPUZ0AKk8mRrlYMy8zorNs5miOn5fwGaeK1i8N6pDXHmw5wEvLft9VQZ2sHj5HKlYbO1D02glpbEEdeZUUR0/+GxzcrDGSxnRxRzbyoE9L9uF3l2FgKdEQ4I2GCxujjWOoGuuQEiNXbWQEwZu3WoEQXvCioBdyrNCV1eZgwoEK66qKGxpPCDeg4lSgQX4KUtamIBpssiceA+65LaKL5oUNEf2aaFfrzIaowKOaZUs07xNQDi+DQ0wjaxivNhEl7BGRvEXgKkXZ1X1BrzS/L2chHAZf/9qFTuolEqBMs5t6kkwygAa/mvrMDICndDF9U0rEFNSAUJf97Hc2Q/PsAilBYfgoGJrtDAD+E2go5zbBCqK00iNLGGUwrRwk80EE9N5Qs94DAPsuUCN0K9UAeABASglcYob6AW2XiRlZWBTdAd7Np1FBaQhYD0b1jhU5/LeQ2h/MxPWrIedQtewYANPMsvySebESYUlzCk+cuBpJA/8S1LC+HtBJ9GVsGcs7xK6vMyIhxMnkQC7FDkBxCYOX+uqwUlUwS5FxuHvJJY946rBSZTBLuUFoV8ilDvoqsFJ1MEuZS8zhyUl3Um5anByOYBdiozO3CB0j1C5iqhckH+/0GV5uuPEyYQIafKGEyeXg/xfgAEAzG+QuYlaplsAAAAASUVORK5CYII=";
const afterImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALsAAAA3CAYAAABU4jvJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3NmFkNmMwNy02MjFhLTgxNDUtYjYxZi1hM2ZmYmVjODRmNGEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTkxQkMxNjc0MDhCMTFFRTkxRkNGNTgwRkZGNEM4RTciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTkxQkMxNjY0MDhCMTFFRTkxRkNGNTgwRkZGNEM4RTciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjVlOWMyYjgtMjk0Mi1kYzQ5LWE1ZWUtMmUwMjJmMjBmZTk4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc2YWQ2YzA3LTYyMWEtODE0NS1iNjFmLWEzZmZiZWM4NGY0YSIvPiA8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";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "b2b-website",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, t } = useI18n();
    const { signUpUrl } = useShoplyAuthLinks();
    const copy = computed(() => {
      const current = locale.value;
      return b2bWebsiteLocales[current in b2bWebsiteLocales ? current : "zh"];
    });
    const openFaqIndex = ref(0);
    const isConsultOpen = ref(false);
    const seoTitle = computed(() => {
      if (locale.value in b2bWebsiteLocales) return b2bWebsiteLocales[locale.value].seo.title;
      return t("shoply.pages.marketing.b2b-website.seoTitle") || copy.value.seo.title;
    });
    const seoDescription = computed(() => {
      if (locale.value in b2bWebsiteLocales) return b2bWebsiteLocales[locale.value].seo.description;
      return t("shoply.pages.marketing.b2b-website.seoDescription") || copy.value.seo.description;
    });
    const seoKeywords = computed(() => {
      if (locale.value in b2bWebsiteLocales) return b2bWebsiteLocales[locale.value].seo.keywords;
      return t("shoply.pages.marketing.b2b-website.seoKeywords") || copy.value.seo.keywords;
    });
    useSeoMeta({
      title: () => seoTitle.value,
      description: () => seoDescription.value,
      keywords: () => seoKeywords.value,
      ogTitle: () => seoTitle.value,
      ogDescription: () => seoDescription.value,
      ogType: "website",
      ogImage: () => heroImg,
      twitterCard: "summary_large_image",
      twitterTitle: () => seoTitle.value,
      twitterDescription: () => seoDescription.value,
      twitterImage: () => heroImg
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$S;
      const _component_NuxtLink = __nuxt_component_3$4;
      const _component_ShoplyLeadForm = ShoplyLeadForm;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white font-sans text-slate-900 selection:bg-blue-200" }, _attrs))}><section class="relative isolate flex min-h-[100dvh] flex-col justify-center overflow-hidden bg-gradient-to-b from-[#2678ff] via-[#1e6df0] to-[#155fc8] px-5 pt-20 pb-10 text-white sm:px-8 sm:pt-24 sm:pb-12 lg:px-12"><div class="pointer-events-none absolute inset-0 -z-10"><div class="animate-shoply-glow absolute -left-20 top-10 h-[420px] w-[420px] rounded-full bg-cyan-300/20 blur-3xl"></div><div class="animate-shoply-float-delayed absolute -right-20 bottom-10 h-[460px] w-[460px] rounded-full bg-indigo-900/30 blur-3xl"></div><div class="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-blue-800/25 to-transparent"></div></div><div class="mx-auto w-full max-w-[1380px]"><div class="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 xl:gap-16"><div class="relative z-10 text-left"><div class="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3.5 py-1 text-xs font-bold tracking-wider text-blue-50 backdrop-blur-sm"><span class="h-2 w-2 rounded-full bg-amber-300 animate-pulse"></span> ${ssrInterpolate(copy.value.hero.badge)}</div><h1 class="mt-4 text-3xl font-black leading-tight tracking-tight sm:text-5xl lg:text-[3.25rem]">${ssrInterpolate(copy.value.hero.titleMain)} <span class="mt-1.5 block text-amber-300">${ssrInterpolate(copy.value.hero.titleHighlight)}</span></h1><p class="mt-4 max-w-lg text-sm leading-relaxed text-blue-50/90 sm:text-base sm:leading-7">${ssrInterpolate(copy.value.hero.description)}</p><div class="mt-6 flex flex-col items-stretch gap-3.5 sm:flex-row sm:items-center"><a${ssrRenderAttr("href", unref(signUpUrl))} class="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-extrabold text-blue-600 shadow-xl shadow-blue-950/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl active:scale-95 sm:w-auto sm:text-base"><span>${ssrInterpolate(copy.value.hero.primaryCta)}</span>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:arrow-right-bold",
        class: "h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
      }, null, _parent));
      _push(`</a><button type="button" class="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3 text-sm font-bold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 active:scale-95 sm:w-auto sm:text-base">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:calendar-check-bold",
        class: "h-4 w-4 text-amber-300"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(copy.value.hero.secondaryCta)}</span></button></div><div class="mt-6 flex flex-wrap items-center gap-2 text-xs font-semibold text-blue-100"><span class="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 backdrop-blur-sm">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:translate-bold",
        class: "h-3.5 w-3.5 text-emerald-300"
      }, null, _parent));
      _push(` ${ssrInterpolate(copy.value.heroPills[0])}</span><span class="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 backdrop-blur-sm">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:magnifying-glass-bold",
        class: "h-3.5 w-3.5 text-amber-300"
      }, null, _parent));
      _push(` ${ssrInterpolate(copy.value.heroPills[1])}</span><span class="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 backdrop-blur-sm">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:file-text-bold",
        class: "h-3.5 w-3.5 text-cyan-300"
      }, null, _parent));
      _push(` ${ssrInterpolate(copy.value.heroPills[2])}</span></div></div><div class="relative mx-auto w-full max-w-[580px] lg:max-w-none"><div class="absolute -top-3.5 -right-1.5 z-20 hidden items-center gap-1.5 rounded-full border border-white/90 bg-white/95 px-3 py-1 text-xs font-black text-slate-800 shadow-lg backdrop-blur-md transition-transform hover:scale-105 sm:inline-flex"><span class="flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-white shadow-xs">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:shield-star-bold",
        class: "h-2.5 w-2.5"
      }, null, _parent));
      _push(`</span><span>${ssrInterpolate(copy.value.demo.leadsPill)}</span></div><div class="overflow-hidden rounded-2xl border border-white/30 bg-slate-900/85 p-2.5 shadow-[0_30px_80px_rgba(13,45,120,0.4)] backdrop-blur-xl sm:p-3"><div class="flex items-center justify-between border-b border-white/10 px-3 py-1.5 text-xs text-white/60"><div class="flex items-center gap-1.5"><span class="h-2.5 w-2.5 rounded-full bg-rose-500/80"></span><span class="h-2.5 w-2.5 rounded-full bg-amber-500/80"></span><span class="h-2.5 w-2.5 rounded-full bg-emerald-500/80"></span></div><div class="flex items-center gap-1 rounded-md bg-white/10 px-3 py-0.5 font-mono text-[11px] text-blue-100">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:lock-key-fill",
        class: "h-3 w-3 text-emerald-400"
      }, null, _parent));
      _push(`<span>https://brand-export.com/rfq-inquiry</span></div><div class="flex items-center gap-1"><span class="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span><span class="text-[10px] font-bold text-emerald-300">15+ Locales</span></div></div><div class="rounded-b-xl bg-slate-950/90 p-3.5 sm:p-4.5"><div class="flex items-center justify-between border-b border-white/10 pb-3 text-xs"><div><div class="flex items-center gap-2"><span class="font-bold text-white">Precision CNC Mechanical Parts</span><span class="rounded bg-blue-500/20 px-1.5 py-0.2 text-[10px] font-semibold text-blue-300">RFQ-2026-9041</span></div><div class="mt-0.5 flex items-center gap-2 text-[11px] text-slate-400"><span>\u{1F1FA}\u{1F1F8} Target Market: North America</span><span class="text-slate-600">\xB7</span><span class="text-emerald-400">Verified Buyer</span></div></div><div class="text-right"><span class="text-base font-black text-amber-300 sm:text-lg">5,000 Sets</span><span class="block text-[10px] text-slate-400">MOQ 100 / FOB Ningbo</span></div></div><div class="mt-3.5 space-y-2"><div class="flex items-center justify-between rounded-xl border border-slate-700/60 bg-slate-900/90 p-2.5"><div class="flex items-center gap-2.5"><div class="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:file-arrow-up-bold",
        class: "h-5 w-5"
      }, null, _parent));
      _push(`</div><div><div class="text-xs font-bold text-white">${ssrInterpolate(copy.value.demo.uploadTitle)}</div><p class="text-[10px] text-slate-400">${ssrInterpolate(copy.value.demo.uploadDesc)}</p></div></div><span class="rounded-md bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-300">${ssrInterpolate(copy.value.demo.instantBadge)}</span></div><div class="grid grid-cols-2 gap-2"><div class="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/80 p-2 text-xs">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:whatsapp-logo-bold",
        class: "h-4 w-4 text-emerald-400"
      }, null, _parent));
      _push(`<span class="text-white font-medium">${ssrInterpolate(copy.value.demo.whatsappLabel)}</span></div><div class="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/80 p-2 text-xs">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:receipt-bold",
        class: "h-4 w-4 text-blue-400"
      }, null, _parent));
      _push(`<span class="text-white font-medium">${ssrInterpolate(copy.value.demo.pdfLabel)}</span></div></div></div><div class="mt-3.5 grid grid-cols-3 gap-2 border-t border-white/10 pt-3 text-center"><div class="rounded-lg bg-white/5 p-1.5"><div class="text-xs font-bold text-amber-300">${ssrInterpolate(copy.value.demo.metrics[0].title)}</div><div class="text-[10px] text-slate-400">${ssrInterpolate(copy.value.demo.metrics[0].desc)}</div></div><div class="rounded-lg bg-white/5 p-1.5"><div class="text-xs font-bold text-emerald-300">${ssrInterpolate(copy.value.demo.metrics[1].title)}</div><div class="text-[10px] text-slate-400">${ssrInterpolate(copy.value.demo.metrics[1].desc)}</div></div><div class="rounded-lg bg-white/5 p-1.5"><div class="text-xs font-bold text-cyan-300">${ssrInterpolate(copy.value.demo.metrics[2].title)}</div><div class="text-[10px] text-slate-400">${ssrInterpolate(copy.value.demo.metrics[2].desc)}</div></div></div><div class="mt-3 flex items-center justify-between rounded-lg bg-white/5 px-2.5 py-1.5 text-[10px] text-slate-300"><div class="flex items-center gap-1">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:shield-check-fill",
        class: "h-3.5 w-3.5 text-emerald-400"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(copy.value.demo.trustBadges[0])}</span></div><div class="flex items-center gap-1">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:lock-key-fill",
        class: "h-3.5 w-3.5 text-amber-400"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(copy.value.demo.trustBadges[1])}</span></div><div class="flex items-center gap-1">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:globe-hemisphere-west-bold",
        class: "h-3.5 w-3.5 text-cyan-400"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(copy.value.demo.trustBadges[2])}</span></div></div></div></div></div></div></div></section><section class="py-20 sm:py-28 bg-slate-50"><div class="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12"><div class="mx-auto max-w-3xl text-center"><span class="rounded-full bg-blue-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-700">${ssrInterpolate(copy.value.whatWeDo.tag)}</span><h2 class="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">${ssrInterpolate(copy.value.whatWeDo.title)}</h2><p class="mt-4 text-base text-slate-600 sm:text-lg">${ssrInterpolate(copy.value.whatWeDo.subtitle)}</p></div><div class="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`);
      ssrRenderList(copy.value.whatWeDo.cards, (card, idx) => {
        _push(`<div class="group relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10"><div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: card.icon,
          class: "h-7 w-7"
        }, null, _parent));
        _push(`</div><h3 class="mt-6 text-xl font-bold text-slate-900">${ssrInterpolate(card.title)}</h3><p class="mt-3 text-sm leading-relaxed text-slate-600">${ssrInterpolate(card.desc)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="py-20 sm:py-28 bg-white"><div class="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12"><div class="mx-auto max-w-3xl text-center"><h2 class="text-3xl font-black text-slate-900 sm:text-4xl">${ssrInterpolate(copy.value.comparison.title)}</h2><p class="mt-4 text-base text-slate-600 sm:text-lg">${ssrInterpolate(copy.value.comparison.subtitle)}</p></div><div class="mt-14 grid gap-8 lg:grid-cols-2"><div class="rounded-3xl border border-slate-200 bg-slate-50/80 p-8 sm:p-10 shadow-sm"><div class="flex items-center justify-between border-b border-slate-200 pb-5"><div class="flex items-center gap-3"><span class="flex h-8 w-8 items-center justify-center rounded-full bg-rose-100 text-rose-600 font-bold text-sm">\u2715</span><h3 class="text-xl font-bold text-slate-800">${ssrInterpolate(copy.value.comparison.before.title)}</h3></div><span class="rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-600">${ssrInterpolate(copy.value.comparisonBadges.before)}</span></div><div class="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-inner"><img${ssrRenderAttr("src", unref(beforeImg))} alt="Google Ranking Before" class="w-full object-contain rounded-lg opacity-85"></div><ul class="mt-8 space-y-4"><!--[-->`);
      ssrRenderList(copy.value.comparison.before.items, (item, idx) => {
        _push(`<li class="flex items-start gap-3 text-sm text-slate-600">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:x-circle-fill",
          class: "mt-0.5 h-5 w-5 shrink-0 text-rose-400"
        }, null, _parent));
        _push(`<span>${ssrInterpolate(item)}</span></li>`);
      });
      _push(`<!--]--></ul></div><div class="relative overflow-hidden rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-500 to-indigo-600 p-8 sm:p-10 text-white shadow-xl shadow-blue-500/20"><div class="flex items-center justify-between border-b border-white/20 pb-5"><div class="flex items-center gap-3"><span class="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400 text-slate-950 font-bold text-sm">\u2713</span><h3 class="text-xl font-bold text-white">${ssrInterpolate(copy.value.comparison.after.title)}</h3></div><span class="rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-bold text-emerald-200">${ssrInterpolate(copy.value.comparisonBadges.after)}</span></div><div class="mt-6 overflow-hidden rounded-2xl border border-white/20 bg-slate-900/60 p-4 shadow-inner backdrop-blur-sm"><img${ssrRenderAttr("src", unref(afterImg))} alt="Google Ranking After" class="w-full object-contain rounded-lg"></div><ul class="mt-8 space-y-4"><!--[-->`);
      ssrRenderList(copy.value.comparison.after.items, (item, idx) => {
        _push(`<li class="flex items-start gap-3 text-sm text-blue-50">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:check-circle-fill",
          class: "mt-0.5 h-5 w-5 shrink-0 text-emerald-300"
        }, null, _parent));
        _push(`<span class="font-medium">${ssrInterpolate(item)}</span></li>`);
      });
      _push(`<!--]--></ul></div></div></div></section><section class="py-14 bg-slate-100 border-y border-slate-200/80"><div class="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6"><div><h3 class="text-2xl font-black text-slate-900">${ssrInterpolate(copy.value.pricingCallout.title)}</h3><p class="mt-2 text-slate-600">${ssrInterpolate(copy.value.pricingCallout.desc)}</p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/page/pricing",
        class: "shrink-0 inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-blue-600"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>${ssrInterpolate(copy.value.pricingCallout.cta)}</span>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:arrow-right-bold",
              class: "h-4 w-4"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("span", null, toDisplayString(copy.value.pricingCallout.cta), 1),
              createVNode(_component_UIcon, {
                name: "ph:arrow-right-bold",
                class: "h-4 w-4"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section class="py-20 sm:py-28 bg-white"><div class="mx-auto max-w-[1000px] px-5 sm:px-8 lg:px-12"><div class="text-center"><h2 class="text-3xl font-black text-slate-900 sm:text-4xl">${ssrInterpolate(copy.value.faq.title)}</h2><p class="mt-4 text-base text-slate-600">${ssrInterpolate(copy.value.faq.subtitle)}</p></div><div class="mt-12 space-y-4"><!--[-->`);
      ssrRenderList(copy.value.faq.items, (item, idx) => {
        _push(`<div class="${ssrRenderClass([openFaqIndex.value === idx ? "bg-blue-50/50 border-blue-300 shadow-sm" : "bg-white hover:border-slate-300", "overflow-hidden rounded-2xl border border-slate-200 transition-all duration-200"])}"><button type="button" class="flex w-full items-center justify-between p-6 text-left font-bold text-slate-900"><span class="text-base sm:text-lg flex items-center gap-3"><span class="text-blue-600 font-extrabold">Q${ssrInterpolate(idx + 1)}.</span> ${ssrInterpolate(item.question)}</span>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:caret-down-bold",
          class: ["h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300", openFaqIndex.value === idx ? "rotate-180 text-blue-600" : ""]
        }, null, _parent));
        _push(`</button><div class="px-6 pb-6 text-sm sm:text-base leading-relaxed text-slate-600 border-t border-slate-100 pt-4" style="${ssrRenderStyle(openFaqIndex.value === idx ? null : { display: "none" })}">${ssrInterpolate(item.answer)}</div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="relative isolate overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 py-20 px-5 text-white sm:px-8 lg:px-12"><div class="mx-auto max-w-4xl text-center"><h2 class="text-3xl font-black sm:text-4xl lg:text-5xl">${ssrInterpolate(copy.value.bottomCta.title)}</h2><p class="mx-auto mt-4 max-w-2xl text-base text-blue-100/90 sm:text-lg">${ssrInterpolate(copy.value.bottomCta.subtitle)}</p><div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"><a${ssrRenderAttr("href", unref(signUpUrl))} class="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-black text-blue-700 shadow-xl transition-all hover:bg-blue-50 active:scale-95 sm:w-auto"><span>${ssrInterpolate(copy.value.bottomCta.primaryText)}</span>`);
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
      if (isConsultOpen.value) {
        _push(`<div class="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm"><div class="relative w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl sm:p-8"><button type="button" class="absolute right-4 top-4 rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:x-bold",
          class: "h-5 w-5"
        }, null, _parent));
        _push(`</button><div class="text-center"><div class="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:chats-teardrop-duotone",
          class: "h-6 w-6"
        }, null, _parent));
        _push(`</div><h3 class="mt-4 text-xl font-bold text-slate-900">${ssrInterpolate(copy.value.consult.title)}</h3><p class="mt-2 text-xs text-slate-500">${ssrInterpolate(copy.value.consult.desc)}</p></div>`);
        _push(ssrRenderComponent(_component_ShoplyLeadForm, {
          class: "mt-6",
          source: "b2b-inquiry-site"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shoply/pages/page/b2b-website.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=b2b-website-we5c5fG5.mjs.map
