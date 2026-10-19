import __nuxt_component_0 from './ShoplyConsoleHeader-DroiRVCS.mjs';
import { D as useLocaleRouter, d as useFormatTime, F as useCurrencyFormat, e as useToast, x as usePagination, y as useFetch, bg as useSeoMeta, _ as _sfc_main$V, i as _sfc_main$Q, k as _sfc_main$L, z as _sfc_main$y, n as _sfc_main$F } from './server.mjs';
import __nuxt_component_2 from './ShoplyCheckoutModal-_aVbwaIx.mjs';
import { defineComponent, computed, watch, ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useShoplyConsoleCopy, r as readShoplyErrorReason } from './useShoplyConsole-qBrGWuE8.mjs';
import { u as useShoplyOrderStatus } from './useShoplyOrderStatus-BLNV7pA1.mjs';
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
import './useShoplyPlanName-ClvbNIbj.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { copy } = useShoplyConsoleCopy();
    const { localePath } = useLocaleRouter();
    const { formatDateTime } = useFormatTime();
    const { formatCurrencyAmount } = useCurrencyFormat();
    const { payStatusLabel, payStatusColor, isPaid } = useShoplyOrderStatus();
    const toast = useToast();
    const { page, pageSize, onPageChange, refreshAfterDelete, clampPage } = usePagination(10);
    const { data, error, refresh } = useFetch(
      "/api/users/orders",
      {
        lazy: true,
        query: computed(() => ({ page: page.value, pageSize: pageSize.value }))
      },
      "$ObU0Y5PP0j"
      /* nuxt-injected */
    );
    const orders = computed(() => {
      var _a, _b;
      return (_b = (_a = data.value) == null ? void 0 : _a.data) != null ? _b : [];
    });
    const total = computed(() => {
      var _a, _b;
      return Number((_b = (_a = data.value) == null ? void 0 : _a.total) != null ? _b : 0);
    });
    watch(data, (value) => {
      var _a, _b, _c;
      clampPage(Number((_a = value == null ? void 0 : value.total) != null ? _a : 0), (_c = (_b = value == null ? void 0 : value.data) == null ? void 0 : _b.length) != null ? _c : 0);
    });
    const shortId = (id) => String(id).slice(0, 12);
    const handlePaid = async () => {
      toast.add({ title: copy.value.subscription.paymentSuccess, color: "success", icon: "ph:check-circle-bold" });
      await refresh();
    };
    const isConfirmOpen = ref(false);
    const pendingAction = ref("cancel");
    const targetOrderId = ref("");
    const acting = ref(false);
    const confirmAction = (action, orderId) => {
      pendingAction.value = action;
      targetOrderId.value = orderId;
      isConfirmOpen.value = true;
    };
    const runAction = async () => {
      acting.value = true;
      try {
        if (pendingAction.value === "delete") {
          await $fetch(`/api/users/orders/${encodeURIComponent(targetOrderId.value)}`, { method: "DELETE" });
          isConfirmOpen.value = false;
          await refreshAfterDelete(orders.value.length, refresh);
        } else {
          await $fetch(`/api/users/orders/${encodeURIComponent(targetOrderId.value)}/cancel`, { method: "POST" });
          isConfirmOpen.value = false;
          await refresh();
        }
      } catch {
        toast.add({ title: copy.value.orders.actionFailed, color: "error" });
      } finally {
        acting.value = false;
      }
    };
    useSeoMeta({
      title: () => copy.value.orders.title,
      robots: "noindex, nofollow"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ShoplyConsoleHeader = __nuxt_component_0;
      const _component_UIcon = _sfc_main$V;
      const _component_UButton = _sfc_main$Q;
      const _component_UBadge = _sfc_main$L;
      const _component_ShoplyCheckoutModal = __nuxt_component_2;
      const _component_UPagination = _sfc_main$y;
      const _component_UModal = _sfc_main$F;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ShoplyConsoleHeader, {
        title: unref(copy).orders.title,
        subtitle: unref(copy).orders.subtitle
      }, null, _parent));
      _push(`<div class="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">`);
      if (!unref(data) && !unref(error)) {
        _push(`<div class="space-y-3 p-5"><!--[-->`);
        ssrRenderList(4, (index) => {
          _push(`<div class="h-20 animate-pulse rounded-2xl bg-slate-50"></div>`);
        });
        _push(`<!--]--></div>`);
      } else if (unref(error)) {
        _push(`<div class="px-6 py-14 text-center">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:cloud-warning-bold",
          class: "mx-auto h-12 w-12 text-slate-300"
        }, null, _parent));
        _push(`<p class="mt-4 text-sm text-slate-500">${ssrInterpolate(unref(copy).errors[unref(readShoplyErrorReason)(unref(error))])}</p>`);
        _push(ssrRenderComponent(_component_UButton, {
          class: "mt-5 rounded-full",
          color: "neutral",
          variant: "outline",
          icon: "ph:arrow-clockwise-bold",
          onClick: ($event) => unref(refresh)()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(copy).common.retry)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(copy).common.retry), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else if (!orders.value.length) {
        _push(`<div class="px-6 py-16 text-center"><span class="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 text-slate-400">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:receipt-duotone",
          class: "h-8 w-8"
        }, null, _parent));
        _push(`</span><h2 class="mt-5 text-lg font-black text-slate-900">${ssrInterpolate(unref(copy).orders.empty)}</h2><p class="mt-2 text-sm text-slate-500">${ssrInterpolate(unref(copy).orders.emptyDescription)}</p>`);
        _push(ssrRenderComponent(_component_UButton, {
          to: unref(localePath)("/user/subscription"),
          class: "mt-6 rounded-full font-bold"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(copy).orders.browsePlans)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(copy).orders.browsePlans), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<ul class="divide-y divide-slate-100"><!--[-->`);
        ssrRenderList(orders.value, (order) => {
          _push(`<li class="flex flex-col gap-4 px-5 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between"><div class="flex min-w-0 items-start gap-3"><span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-500">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:receipt-bold",
            class: "h-5 w-5"
          }, null, _parent));
          _push(`</span><div class="min-w-0"><p class="truncate font-bold text-slate-900">${ssrInterpolate(order.productName || `${unref(copy).orders.orderNo} ${shortId(order.id)}`)}</p><p class="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-500"><span class="font-mono">#${ssrInterpolate(shortId(order.id))}</span><span>${ssrInterpolate(unref(formatDateTime)(order.createdAt))}</span>`);
          if (order.payMethod) {
            _push(`<span>${ssrInterpolate(order.payMethod)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</p></div></div><div class="flex flex-wrap items-center gap-3 lg:justify-end">`);
          _push(ssrRenderComponent(_component_UBadge, {
            color: unref(payStatusColor)(order.payStatus),
            variant: "subtle"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(payStatusLabel)(order.payStatus))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(payStatusLabel)(order.payStatus)), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<span class="min-w-24 text-right font-mono text-base font-black text-slate-900">${ssrInterpolate(unref(formatCurrencyAmount)(order.amount, order.currency))}</span><div class="flex flex-wrap items-center gap-2">`);
          _push(ssrRenderComponent(_component_UButton, {
            to: unref(localePath)(`/user/orders/${order.id}`),
            size: "sm",
            color: "neutral",
            variant: "outline",
            class: "rounded-full"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(copy).common.details)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(copy).common.details), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          if (unref(isPaid)(order.payStatus)) {
            _push(ssrRenderComponent(_component_UButton, {
              to: unref(localePath)(`/user/invoice/${order.id}`),
              size: "sm",
              color: "neutral",
              variant: "ghost",
              icon: "ph:file-text-bold",
              class: "rounded-full"
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
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          if (order.payStatus === "pending") {
            _push(`<!--[-->`);
            _push(ssrRenderComponent(_component_ShoplyCheckoutModal, {
              "order-id": order.id,
              onSuccess: handlePaid
            }, {
              trigger: withCtx(({ loading, open }, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_component_UButton, {
                    size: "sm",
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
                      size: "sm",
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
              _: 2
            }, _parent));
            _push(ssrRenderComponent(_component_UButton, {
              size: "sm",
              color: "neutral",
              variant: "ghost",
              class: "rounded-full",
              onClick: ($event) => confirmAction("cancel", order.id)
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(unref(copy).orders.cancelOrder)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(copy).orders.cancelOrder), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`<!--]-->`);
          } else {
            _push(`<!---->`);
          }
          if (order.payStatus === "cancelled") {
            _push(ssrRenderComponent(_component_UButton, {
              size: "sm",
              color: "error",
              variant: "ghost",
              icon: "ph:trash-bold",
              class: "rounded-full",
              "aria-label": unref(copy).orders.deleteOrder,
              onClick: ($event) => confirmAction("delete", order.id)
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div></li>`);
        });
        _push(`<!--]--></ul>`);
      }
      if (total.value > unref(pageSize)) {
        _push(`<div class="flex justify-end border-t border-slate-100 px-5 py-4">`);
        _push(ssrRenderComponent(_component_UPagination, {
          page: unref(page),
          "onUpdate:page": [($event) => isRef(page) ? page.value = $event : null, (value) => unref(onPageChange)(value)],
          "items-per-page": unref(pageSize),
          total: total.value
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UModal, {
        open: isConfirmOpen.value,
        "onUpdate:open": ($event) => isConfirmOpen.value = $event,
        ui: { content: "w-[calc(100vw-2rem)] max-w-md rounded-3xl" }
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6 sm:p-7"${_scopeId}><h2 class="text-lg font-black text-slate-950"${_scopeId}>${ssrInterpolate(pendingAction.value === "delete" ? unref(copy).orders.deleteTitle : unref(copy).orders.cancelTitle)}</h2><p class="mt-2 text-sm leading-6 text-slate-500"${_scopeId}>${ssrInterpolate(pendingAction.value === "delete" ? unref(copy).orders.deleteDescription : unref(copy).orders.cancelDescription)}</p><div class="mt-6 flex justify-end gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              class: "rounded-full",
              onClick: ($event) => isConfirmOpen.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(copy).common.cancel)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(copy).common.cancel), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              color: "error",
              class: "rounded-full font-bold",
              loading: acting.value,
              onClick: runAction
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(pendingAction.value === "delete" ? unref(copy).orders.deleteConfirm : unref(copy).orders.cancelConfirm)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(pendingAction.value === "delete" ? unref(copy).orders.deleteConfirm : unref(copy).orders.cancelConfirm), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-6 sm:p-7" }, [
                createVNode("h2", { class: "text-lg font-black text-slate-950" }, toDisplayString(pendingAction.value === "delete" ? unref(copy).orders.deleteTitle : unref(copy).orders.cancelTitle), 1),
                createVNode("p", { class: "mt-2 text-sm leading-6 text-slate-500" }, toDisplayString(pendingAction.value === "delete" ? unref(copy).orders.deleteDescription : unref(copy).orders.cancelDescription), 1),
                createVNode("div", { class: "mt-6 flex justify-end gap-2" }, [
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    class: "rounded-full",
                    onClick: ($event) => isConfirmOpen.value = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(copy).common.cancel), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_UButton, {
                    color: "error",
                    class: "rounded-full font-bold",
                    loading: acting.value,
                    onClick: runAction
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(pendingAction.value === "delete" ? unref(copy).orders.deleteConfirm : unref(copy).orders.cancelConfirm), 1)
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shoply/pages/user/orders/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-B_tx2X_7.mjs.map
