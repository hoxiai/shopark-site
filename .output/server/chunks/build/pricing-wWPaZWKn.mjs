import { u as useI18n, D as useLocaleRouter, V as useLocaleCurrency, r as useSettings, bg as useSeoMeta, _ as _sfc_main$S, v as _sfc_main$l, i as _sfc_main$N, bn as __nuxt_component_3$3, N as __nuxt_component_3$4 } from './server.mjs';
import __nuxt_component_5 from './ShoplyCheckoutModal-B6CbgIbe.mjs';
import __nuxt_component_2 from './ShoplyConsultDialog-DsFYw0Dw.mjs';
import { defineComponent, computed, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, isRef, useSSRContext } from 'vue';
import { ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderAttr } from 'vue/server-renderer';
import { u as useShoplyConsult } from './useShoplyConsult-Bc6OO7cj.mjs';
import { useRouter } from 'vue-router';
import { r as ru, e as en, a as zhHK, z as zh } from './zh-HK-DW6i8qz7.mjs';
import { u as useShoplyAuthLinks } from './useShoplyAuthLinks-1qS_J9sZ.mjs';
import { u as useShoplyConsoleCopy, f as formatCopy } from './useShoplyConsole-2rVhyTbW.mjs';
import { u as useShoplyPlans } from './useShoplyPlans-Cm3po6gB.mjs';
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
  __name: "pricing",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale } = useI18n();
    const brandName = computed(() => {
      if (locale.value === "zh-HK") return "\u8F15\u92EA";
      if (locale.value.startsWith("zh")) return "\u8F7B\u94FA";
      return "Qingpu";
    });
    const { localePath } = useLocaleRouter();
    useLocaleCurrency();
    useSettings();
    const router = useRouter();
    const localeMessages = { zh, "zh-HK": zhHK, en, ru };
    const copy = computed(() => (localeMessages[locale.value] || zh).pages.pricing);
    const { consultUrl, isOpen: isConsultOpen } = useShoplyConsult();
    const { copy: consoleCopy } = useShoplyConsoleCopy();
    const { loggedIn } = useShoplyAuthLinks();
    const { plans, status, refresh } = useShoplyPlans();
    const subscribeSignInUrl = computed(() => `${localePath("/auth/login")}?redirect=${encodeURIComponent(localePath("/page/pricing"))}`);
    const handlePurchased = () => router.push(localePath("/user/subscription"));
    const formatCycle = (cycle) => {
      if (cycle === "lifetime") return copy.value.cycle.lifetime;
      const match = cycle.match(/^(\d+)_(month|year)s?$/);
      if (!match) return cycle.replaceAll("_", " ");
      const count = Number(match[1]);
      const unit = copy.value.cycle[match[2]];
      return count === 1 ? unit : `${count} ${unit}`;
    };
    useSeoMeta({
      title: () => copy.value.seoTitle,
      description: () => copy.value.seoDescription,
      keywords: () => copy.value.seoKeywords,
      ogTitle: () => copy.value.seoTitle,
      ogDescription: () => copy.value.seoDescription,
      ogType: "website",
      twitterCard: "summary_large_image",
      twitterTitle: () => copy.value.seoTitle,
      twitterDescription: () => copy.value.seoDescription
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$S;
      const _component_UAlert = _sfc_main$l;
      const _component_UButton = _sfc_main$N;
      const _component_ProductPrice = __nuxt_component_3$3;
      const _component_ShoplyCheckoutModal = __nuxt_component_5;
      const _component_NuxtLink = __nuxt_component_3$4;
      const _component_ShoplyConsultDialog = __nuxt_component_2;
      _push(`<!--[--><div class="bg-slate-50 px-5 py-16 sm:px-8 sm:py-24"><div class="mx-auto max-w-[1280px]"><div class="mx-auto max-w-3xl text-center"><p class="text-sm font-black tracking-[0.18em] text-blue-600 uppercase">${ssrInterpolate(brandName.value)} Pricing</p><h1 class="mt-5 text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-6xl">${ssrInterpolate(copy.value.title)}</h1><p class="mt-6 text-base leading-8 text-slate-600 sm:text-lg">${ssrInterpolate(copy.value.description)}</p><div class="mt-8 inline-flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50/90 px-6 py-3 text-xs font-extrabold text-emerald-800 shadow-sm backdrop-blur-sm sm:text-sm"><span class="flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:seal-percent-fill",
        class: "h-4 w-4 text-emerald-600"
      }, null, _parent));
      _push(` ${ssrInterpolate(copy.value.zeroFeeHighlight)}</span><span class="hidden h-3.5 w-px bg-emerald-200 sm:block"></span><span class="flex items-center gap-2 text-emerald-700">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:shield-check-fill",
        class: "h-4 w-4 text-emerald-600"
      }, null, _parent));
      _push(` ${ssrInterpolate(copy.value.directPayout)}</span></div></div>`);
      if (unref(status) === "pending") {
        _push(`<div class="flex justify-center py-24">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:spinner-gap-bold",
          class: "h-10 w-10 animate-spin text-blue-600"
        }, null, _parent));
        _push(`</div>`);
      } else if (unref(status) === "error") {
        _push(ssrRenderComponent(_component_UAlert, {
          color: "error",
          variant: "subtle",
          title: unref(consoleCopy).subscription.loadFailed,
          class: "mt-14"
        }, {
          actions: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UButton, {
                color: "neutral",
                variant: "outline",
                onClick: ($event) => unref(refresh)()
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(consoleCopy).common.retry)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(consoleCopy).common.retry), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UButton, {
                  color: "neutral",
                  variant: "outline",
                  onClick: ($event) => unref(refresh)()
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(consoleCopy).common.retry), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else if (unref(plans).length) {
        _push(`<div class="mt-14 grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3"><!--[-->`);
        ssrRenderList(unref(plans), (plan) => {
          _push(`<article class="${ssrRenderClass([plan.badge ? "border-blue-400 shadow-xl shadow-blue-900/10" : "border-slate-200", "relative flex min-w-0 flex-col rounded-[2rem] border bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"])}">`);
          if (plan.badge) {
            _push(`<span class="absolute -top-3 left-7 rounded-full bg-blue-600 px-4 py-1.5 text-xs font-black text-white shadow-md shadow-blue-600/30">${ssrInterpolate(plan.badge)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<h2 class="mt-2 text-2xl font-black tracking-tight text-slate-950">${ssrInterpolate(plan.name)}</h2><p class="mt-3 min-h-14 text-sm leading-7 text-slate-600">${ssrInterpolate(plan.description)}</p><div class="mt-7 flex flex-wrap items-baseline gap-2"><span class="text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl">`);
          _push(ssrRenderComponent(_component_ProductPrice, { product: plan }, null, _parent));
          _push(`</span><span class="text-sm font-bold text-slate-500">/ ${ssrInterpolate(formatCycle(plan.cycle))}</span></div><div class="mt-8 flex-1 border-t border-slate-100 pt-7"><p class="text-sm font-black text-slate-900">${ssrInterpolate(copy.value.included)}</p><ul class="mt-5 space-y-4"><li class="flex items-center gap-2.5 rounded-xl border border-emerald-200 bg-emerald-50/70 px-3.5 py-2 text-xs font-extrabold text-emerald-800 shadow-xs sm:text-sm">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:seal-percent-fill",
            class: "h-4 w-4 shrink-0 text-emerald-600"
          }, null, _parent));
          _push(`<span>${ssrInterpolate(copy.value.zeroFeeFeature)}</span></li>`);
          if (plan.storeLimit !== null) {
            _push(`<li class="flex gap-3 text-sm font-bold leading-6 text-slate-800">`);
            _push(ssrRenderComponent(_component_UIcon, {
              name: "ph:storefront-bold",
              class: "mt-0.5 h-5 w-5 shrink-0 text-blue-600"
            }, null, _parent));
            _push(`<span>${ssrInterpolate(unref(formatCopy)(unref(consoleCopy).subscription.storesIncluded, { count: plan.storeLimit }))}</span></li>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--[-->`);
          ssrRenderList(plan.features, (feature) => {
            _push(`<li class="${ssrRenderClass([feature.included ? "text-slate-700" : "text-slate-400 line-through", "flex gap-3 text-sm leading-6"])}">`);
            _push(ssrRenderComponent(_component_UIcon, {
              name: feature.included ? "ph:check-circle-fill" : "ph:x-circle",
              class: ["mt-0.5 h-5 w-5 shrink-0", feature.included ? "text-emerald-500" : "text-slate-300"]
            }, null, _parent));
            _push(`<span>${ssrInterpolate(feature.name)}</span></li>`);
          });
          _push(`<!--]--></ul></div>`);
          if (unref(loggedIn)) {
            _push(ssrRenderComponent(_component_ShoplyCheckoutModal, {
              "product-id": plan.id,
              onSuccess: handlePurchased
            }, {
              trigger: withCtx(({ loading, open }, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<button type="button" class="${ssrRenderClass([plan.badge ? "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/25" : "bg-slate-100 text-slate-900 hover:bg-slate-200", "mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-center text-sm font-extrabold shadow-sm transition-all active:scale-95 disabled:opacity-60"])}"${ssrIncludeBooleanAttr(loading) ? " disabled" : ""}${_scopeId}>`);
                  if (loading) {
                    _push2(ssrRenderComponent(_component_UIcon, {
                      name: "ph:spinner-gap-bold",
                      class: "h-4 w-4 animate-spin"
                    }, null, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(` ${ssrInterpolate(copy.value.action)}</button>`);
                } else {
                  return [
                    createVNode("button", {
                      type: "button",
                      class: ["mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-center text-sm font-extrabold shadow-sm transition-all active:scale-95 disabled:opacity-60", plan.badge ? "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/25" : "bg-slate-100 text-slate-900 hover:bg-slate-200"],
                      disabled: loading,
                      onClick: open
                    }, [
                      loading ? (openBlock(), createBlock(_component_UIcon, {
                        key: 0,
                        name: "ph:spinner-gap-bold",
                        class: "h-4 w-4 animate-spin"
                      })) : createCommentVNode("", true),
                      createTextVNode(" " + toDisplayString(copy.value.action), 1)
                    ], 10, ["disabled", "onClick"])
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: subscribeSignInUrl.value,
              class: ["mt-8 rounded-full px-6 py-3.5 text-center text-sm font-extrabold shadow-sm transition-all active:scale-95", plan.badge ? "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/25" : "bg-slate-100 text-slate-900 hover:bg-slate-200"]
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(copy.value.action)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(copy.value.action), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          }
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(localePath)(`/products/${plan.slug}`),
            class: "mt-3 text-center text-xs font-bold text-slate-500 transition-colors hover:text-blue-600"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(consoleCopy).subscription.details)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(consoleCopy).subscription.details), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</article>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="mx-auto mt-14 max-w-2xl rounded-[2rem] border border-slate-200 bg-white p-10 text-center shadow-sm">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:package-duotone",
          class: "mx-auto h-14 w-14 text-blue-500"
        }, null, _parent));
        _push(`<h2 class="mt-5 text-2xl font-black text-slate-950">${ssrInterpolate(copy.value.emptyTitle)}</h2><p class="mt-3 text-sm leading-7 text-slate-600">${ssrInterpolate(copy.value.emptyDescription)}</p><a${ssrRenderAttr("href", unref(consultUrl))} class="mt-7 inline-flex rounded-full bg-blue-600 px-7 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700 hover:-translate-y-0.5 active:scale-95">${ssrInterpolate(copy.value.contact)}</a></div>`);
      }
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_ShoplyConsultDialog, {
        open: unref(isConsultOpen),
        "onUpdate:open": ($event) => isRef(isConsultOpen) ? isConsultOpen.value = $event : null,
        source: "pricing"
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shoply/pages/page/pricing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=pricing-wWPaZWKn.mjs.map
