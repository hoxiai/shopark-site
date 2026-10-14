import { D as useLocaleRouter, d as useFormatTime, F as useCurrencyFormat, y as useFetch, bg as useSeoMeta, N as __nuxt_component_3$4, _ as _sfc_main$S, k as _sfc_main$I, i as _sfc_main$N } from './server.mjs';
import __nuxt_component_0 from './ShoplyConsoleHeader-DroiRVCS.mjs';
import __nuxt_component_5 from './ShoplyCheckoutModal-ToOcSjzo.mjs';
import { defineComponent, computed, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { u as useShoplyConsoleCopy } from './useShoplyConsole-D77xzs3r.mjs';
import { u as useShoplyOrderStatus } from './useShoplyOrderStatus-CNTwgVLZ.mjs';
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
import './useShoplyPlanName-ClvbNIbj.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[order_id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const { copy } = useShoplyConsoleCopy();
    const { localePath } = useLocaleRouter();
    const { formatDateTime } = useFormatTime();
    const { formatCurrencyAmount } = useCurrencyFormat();
    const { payStatusLabel, payStatusColor, isPaid } = useShoplyOrderStatus();
    const orderId = computed(() => {
      const slug = route.params.slug;
      if (Array.isArray(slug) && slug.length) return String(slug.at(-1) || "");
      return typeof slug === "string" ? slug : "";
    });
    const { data: order, error, refresh } = useFetch(
      "/api/orders/detail",
      {
        lazy: true,
        query: computed(() => ({ orderId: orderId.value })),
        key: computed(() => `shoply-order-${orderId.value}`)
      },
      "$ZUB9eqPhYQ"
      /* nuxt-injected */
    );
    const summary = computed(() => order.value ? [
      { label: copy.value.orders.orderNo, value: order.value.id },
      { label: copy.value.orders.amount, value: formatCurrencyAmount(order.value.amount, order.value.currency) },
      { label: copy.value.orders.createdAt, value: formatDateTime(order.value.createdAt) }
    ] : []);
    const paymentRows = computed(() => {
      const value = order.value;
      if (!value) return [];
      const empty = copy.value.common.notAvailable;
      return [
        { label: copy.value.orders.product, value: value.productName || empty },
        { label: copy.value.orders.payMethod, value: value.payMethod || empty },
        { label: copy.value.orders.tradeNo, value: value.tradeNo || empty },
        { label: copy.value.orders.contactEmail, value: value.contactEmail || empty },
        { label: copy.value.orders.paidAt, value: value.paidAt ? formatDateTime(value.paidAt) : empty }
      ];
    });
    useSeoMeta({
      title: () => copy.value.orders.detailTitle,
      robots: "noindex, nofollow"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_3$4;
      const _component_UIcon = _sfc_main$S;
      const _component_ShoplyConsoleHeader = __nuxt_component_0;
      const _component_UBadge = _sfc_main$I;
      const _component_ShoplyCheckoutModal = __nuxt_component_5;
      const _component_UButton = _sfc_main$N;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/user/orders"),
        class: "inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-blue-600"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:arrow-left-bold",
              class: "h-4 w-4"
            }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(unref(copy).orders.back)}`);
          } else {
            return [
              createVNode(_component_UIcon, {
                name: "ph:arrow-left-bold",
                class: "h-4 w-4"
              }),
              createTextVNode(" " + toDisplayString(unref(copy).orders.back), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (!unref(order) && !unref(error)) {
        _push(`<div class="h-72 animate-pulse rounded-3xl border border-slate-200 bg-white"></div>`);
      } else if (!unref(order)) {
        _push(`<div class="rounded-3xl border border-slate-200 bg-white px-6 py-14 text-center">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:magnifying-glass-bold",
          class: "mx-auto h-12 w-12 text-slate-300"
        }, null, _parent));
        _push(`<p class="mt-4 text-sm text-slate-500">${ssrInterpolate(unref(copy).orders.notFound)}</p></div>`);
      } else {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_ShoplyConsoleHeader, {
          title: unref(copy).orders.detailTitle,
          subtitle: unref(order).productName || void 0
        }, {
          actions: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UBadge, {
                color: unref(payStatusColor)(unref(order).payStatus),
                variant: "subtle",
                size: "lg"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(payStatusLabel)(unref(order).payStatus))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(payStatusLabel)(unref(order).payStatus)), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UBadge, {
                  color: unref(payStatusColor)(unref(order).payStatus),
                  variant: "subtle",
                  size: "lg"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(payStatusLabel)(unref(order).payStatus)), 1)
                  ]),
                  _: 1
                }, 8, ["color"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<section class="grid gap-4 sm:grid-cols-3"><!--[-->`);
        ssrRenderList(summary.value, (item) => {
          _push(`<div class="min-w-0 rounded-2xl border border-slate-200 bg-white p-5"><p class="text-xs text-slate-400">${ssrInterpolate(item.label)}</p><p class="mt-2 break-all text-base font-black text-slate-900">${ssrInterpolate(item.value)}</p></div>`);
        });
        _push(`<!--]--></section><section class="rounded-3xl border border-slate-200 bg-white p-6"><h2 class="text-base font-black text-slate-900">${ssrInterpolate(unref(copy).orders.paymentInfo)}</h2><dl class="mt-4 divide-y divide-slate-100 text-sm"><!--[-->`);
        ssrRenderList(paymentRows.value, (row) => {
          _push(`<div class="flex flex-col gap-1 py-3 sm:flex-row sm:justify-between"><dt class="text-slate-500">${ssrInterpolate(row.label)}</dt><dd class="break-all font-semibold text-slate-900">${ssrInterpolate(row.value)}</dd></div>`);
        });
        _push(`<!--]--></dl><div class="mt-5 flex flex-wrap gap-2">`);
        if (unref(order).payStatus === "pending") {
          _push(ssrRenderComponent(_component_ShoplyCheckoutModal, {
            "order-id": unref(order).id,
            onSuccess: ($event) => unref(refresh)()
          }, {
            trigger: withCtx(({ loading, open }, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_UButton, {
                  class: "rounded-full font-bold",
                  loading,
                  onClick: open
                }, {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(unref(copy).orders.payNow)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(unref(copy).orders.payNow), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_UButton, {
                    class: "rounded-full font-bold",
                    loading,
                    onClick: open
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(copy).orders.payNow), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "onClick"])
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref(isPaid)(unref(order).payStatus)) {
          _push(ssrRenderComponent(_component_UButton, {
            to: unref(localePath)(`/user/invoice/${unref(order).id}`),
            color: "neutral",
            variant: "outline",
            icon: "ph:file-text-bold",
            class: "rounded-full font-bold"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(copy).orders.invoice)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(copy).orders.invoice), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></section><!--]-->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shoply/pages/user/orders/[order_id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_order_id_-D28ac6zF.mjs.map
