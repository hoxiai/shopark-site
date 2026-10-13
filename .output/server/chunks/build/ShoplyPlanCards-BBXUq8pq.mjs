import { U as useLocaleCurrency, D as useLocaleRouter, v as _sfc_main$l, i as _sfc_main$M, k as _sfc_main$I, _ as _sfc_main$R } from './server.mjs';
import __nuxt_component_4 from './ShoplyCheckoutModal-BLJCHv0E.mjs';
import { defineComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { u as useShoplyConsoleCopy, f as formatCopy, a as formatPlanPeriod } from './useShoplyConsole-2rVhyTbW.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ShoplyPlanCards",
  __ssrInlineRender: true,
  props: {
    plans: {},
    pending: { type: Boolean },
    failed: { type: Boolean },
    loggedIn: { type: Boolean },
    currentProductId: {},
    currentLevel: {}
  },
  emits: ["purchased", "retry"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { copy } = useShoplyConsoleCopy();
    const { formatAmount } = useLocaleCurrency();
    const { localePath } = useLocaleRouter();
    const signInUrl = `${localePath("/auth/login")}?redirect=${encodeURIComponent(localePath("/user/subscription"))}`;
    const isCurrent = (plan) => props.currentProductId !== null && plan.id === props.currentProductId;
    const actionLabel = (plan) => {
      if (isCurrent(plan)) return copy.value.subscription.renew;
      if (props.currentLevel !== null && plan.level > props.currentLevel) return copy.value.subscription.upgrade;
      return copy.value.subscription.subscribe;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UAlert = _sfc_main$l;
      const _component_UButton = _sfc_main$M;
      const _component_UBadge = _sfc_main$I;
      const _component_UIcon = _sfc_main$R;
      const _component_ShoplyCheckoutModal = __nuxt_component_4;
      if (__props.pending) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid gap-5 md:grid-cols-2 xl:grid-cols-3" }, _attrs))}><!--[-->`);
        ssrRenderList(3, (index) => {
          _push(`<div class="h-80 animate-pulse rounded-3xl border border-slate-200 bg-white"></div>`);
        });
        _push(`<!--]--></div>`);
      } else if (__props.failed) {
        _push(ssrRenderComponent(_component_UAlert, mergeProps({
          color: "error",
          variant: "subtle",
          title: unref(copy).subscription.loadFailed
        }, _attrs), {
          actions: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UButton, {
                color: "neutral",
                variant: "outline",
                onClick: ($event) => emit("retry")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(copy).common.retry)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(copy).common.retry), 1)
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
                  onClick: ($event) => emit("retry")
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(copy).common.retry), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else if (!__props.plans.length) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center text-sm text-slate-500" }, _attrs))}>${ssrInterpolate(unref(copy).subscription.noPlans)}</div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3" }, _attrs))}><!--[-->`);
        ssrRenderList(__props.plans, (plan) => {
          _push(`<article class="${ssrRenderClass([isCurrent(plan) ? "border-blue-500 ring-2 ring-blue-100" : plan.badge ? "border-blue-300" : "border-slate-200", "relative flex min-w-0 flex-col rounded-3xl border bg-white p-6 shadow-sm"])}"><div class="flex items-start justify-between gap-3"><h3 class="text-xl font-black tracking-tight text-slate-950">${ssrInterpolate(plan.name)}</h3>`);
          if (isCurrent(plan)) {
            _push(ssrRenderComponent(_component_UBadge, {
              color: "primary",
              variant: "solid",
              class: "shrink-0"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(unref(copy).subscription.currentBadge)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(copy).subscription.currentBadge), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else if (plan.badge) {
            _push(ssrRenderComponent(_component_UBadge, {
              color: "primary",
              variant: "soft",
              class: "shrink-0"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(plan.badge)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(plan.badge), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
          if (plan.description) {
            _push(`<p class="mt-2 text-sm leading-6 text-slate-500">${ssrInterpolate(plan.description)}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="mt-5 flex flex-wrap items-baseline gap-1.5"><span class="text-4xl font-black tracking-tight text-slate-950">${ssrInterpolate(unref(formatAmount)(plan.price))}</span><span class="text-sm font-bold text-slate-500">${ssrInterpolate(unref(formatCopy)(unref(copy).subscription.perPeriod, { period: unref(formatPlanPeriod)(unref(copy), plan.interval, plan.intervalCount) }))}</span></div><ul class="mt-6 flex-1 space-y-3 border-t border-slate-100 pt-5 text-sm">`);
          if (plan.storeLimit !== null) {
            _push(`<li class="flex gap-2.5 font-semibold text-slate-800">`);
            _push(ssrRenderComponent(_component_UIcon, {
              name: "ph:storefront-bold",
              class: "mt-0.5 h-4 w-4 shrink-0 text-blue-600"
            }, null, _parent));
            _push(`<span>${ssrInterpolate(unref(formatCopy)(unref(copy).subscription.storesIncluded, { count: plan.storeLimit }))}</span></li>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--[-->`);
          ssrRenderList(plan.features, (feature) => {
            _push(`<li class="${ssrRenderClass([feature.included ? "text-slate-700" : "text-slate-400 line-through", "flex gap-2.5"])}">`);
            _push(ssrRenderComponent(_component_UIcon, {
              name: feature.included ? "ph:check-circle-fill" : "ph:x-circle",
              class: ["mt-0.5 h-4 w-4 shrink-0", feature.included ? "text-emerald-500" : "text-slate-300"]
            }, null, _parent));
            _push(`<span>${ssrInterpolate(feature.name)}</span></li>`);
          });
          _push(`<!--]--></ul>`);
          if (!__props.loggedIn) {
            _push(ssrRenderComponent(_component_UButton, {
              to: signInUrl,
              size: "lg",
              class: "mt-6 justify-center rounded-full font-bold",
              color: "neutral",
              variant: "outline"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(unref(copy).subscription.signInToSubscribe)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(copy).subscription.signInToSubscribe), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(ssrRenderComponent(_component_ShoplyCheckoutModal, {
              "product-id": plan.id,
              onSuccess: (orderId) => emit("purchased", orderId)
            }, {
              trigger: withCtx(({ loading, open }, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_component_UButton, {
                    size: "lg",
                    class: "mt-6 w-full justify-center rounded-full font-bold",
                    color: isCurrent(plan) ? "neutral" : "primary",
                    variant: isCurrent(plan) ? "outline" : "solid",
                    loading,
                    onClick: open
                  }, {
                    default: withCtx((_, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(actionLabel(plan))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(actionLabel(plan)), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                } else {
                  return [
                    createVNode(_component_UButton, {
                      size: "lg",
                      class: "mt-6 w-full justify-center rounded-full font-bold",
                      color: isCurrent(plan) ? "neutral" : "primary",
                      variant: isCurrent(plan) ? "outline" : "solid",
                      loading,
                      onClick: open
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(actionLabel(plan)), 1)
                      ]),
                      _: 2
                    }, 1032, ["color", "variant", "loading", "onClick"])
                  ];
                }
              }),
              _: 2
            }, _parent));
          }
          _push(`</article>`);
        });
        _push(`<!--]--></div>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shoply/components/ShoplyPlanCards.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = Object.assign(_sfc_main, { __name: "ShoplyPlanCards" });

export { __nuxt_component_5 as default };
//# sourceMappingURL=ShoplyPlanCards-BBXUq8pq.mjs.map
