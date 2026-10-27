import { bl as useCheckout, e as useToast, n as _sfc_main$G, i as _sfc_main$R, bm as __nuxt_component_2$1 } from './server.mjs';
import { defineComponent, ref, unref, withCtx, createTextVNode, toDisplayString, createVNode, isRef, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderSlot, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useShoplyPlanName, i as isShoplyPlanKey, a as isShoplyDowngrade } from './useShoplyPlanName-ClvbNIbj.mjs';
import { u as useShoplyConsoleCopy } from './useShoplyConsole-qBrGWuE8.mjs';
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
  __name: "ShoplyCheckoutModal",
  __ssrInlineRender: true,
  props: {
    productId: {},
    orderId: {},
    planKey: {}
  },
  emits: ["success"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const {
      isCreatingOrder,
      isOrderModalOpen,
      openCheckoutModal,
      closeCheckoutModal,
      continuePayment,
      orderId,
      orderAmount,
      orderCurrency
    } = useCheckout();
    const { planCopy } = useShoplyPlanName();
    const { copy } = useShoplyConsoleCopy();
    const toast = useToast();
    const checking = ref(false);
    const downgradeOpen = ref(false);
    const open = async () => {
      if (checking.value || isCreatingOrder.value) return;
      if (props.orderId) return continuePayment(props.orderId);
      if (!props.productId) return;
      checking.value = true;
      try {
        if (props.planKey) {
          const result = await $fetch("/api/shoply/entitlement");
          if (!isShoplyPlanKey(result.data.planKey)) throw new Error("Invalid current plan");
          if (isShoplyDowngrade(result.data.planKey, props.planKey)) {
            downgradeOpen.value = true;
            return;
          }
        }
        await openCheckoutModal(props.productId, 1);
      } catch {
        toast.add({ title: copy.value.subscription.loadFailed, color: "error" });
      } finally {
        checking.value = false;
      }
    };
    const handleSuccess = (paidOrderId) => {
      closeCheckoutModal();
      emit("success", paidOrderId);
    };
    __expose({ open });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UModal = _sfc_main$G;
      const _component_UButton = _sfc_main$R;
      const _component_PaymentWorkspace = __nuxt_component_2$1;
      _push(`<!--[-->`);
      ssrRenderSlot(_ctx.$slots, "trigger", {
        loading: unref(isCreatingOrder) || checking.value,
        open
      }, null, _push, _parent);
      _push(ssrRenderComponent(_component_UModal, {
        open: downgradeOpen.value,
        "onUpdate:open": ($event) => downgradeOpen.value = $event,
        ui: { content: "w-[calc(100vw-2rem)] max-w-md rounded-3xl" }
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4 p-6"${_scopeId}><p class="text-sm leading-6 text-amber-800"${_scopeId}>${ssrInterpolate(unref(planCopy).downgrade)}</p><p class="text-sm leading-6 text-slate-600"${_scopeId}>${ssrInterpolate(unref(planCopy).downgradeBlocked)}</p>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "outline",
              onClick: ($event) => downgradeOpen.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(planCopy).cancel)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(planCopy).cancel), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-4 p-6" }, [
                createVNode("p", { class: "text-sm leading-6 text-amber-800" }, toDisplayString(unref(planCopy).downgrade), 1),
                createVNode("p", { class: "text-sm leading-6 text-slate-600" }, toDisplayString(unref(planCopy).downgradeBlocked), 1),
                createVNode(_component_UButton, {
                  color: "neutral",
                  variant: "outline",
                  onClick: ($event) => downgradeOpen.value = false
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(planCopy).cancel), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        open: unref(isOrderModalOpen),
        "onUpdate:open": ($event) => isRef(isOrderModalOpen) ? isOrderModalOpen.value = $event : null,
        scrollable: "",
        ui: { content: "w-[calc(100vw-1rem)] max-w-2xl overflow-hidden rounded-2xl sm:max-w-3xl sm:w-[calc(100vw-2rem)] sm:rounded-3xl" }
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(orderId)) {
              _push2(ssrRenderComponent(_component_PaymentWorkspace, {
                "order-id": unref(orderId),
                amount: unref(orderAmount),
                currency: unref(orderCurrency),
                closable: "",
                onClose: unref(closeCheckoutModal),
                onSuccess: handleSuccess
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(orderId) ? (openBlock(), createBlock(_component_PaymentWorkspace, {
                key: 0,
                "order-id": unref(orderId),
                amount: unref(orderAmount),
                currency: unref(orderCurrency),
                closable: "",
                onClose: unref(closeCheckoutModal),
                onSuccess: handleSuccess
              }, null, 8, ["order-id", "amount", "currency", "onClose"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shoply/components/ShoplyCheckoutModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main, { __name: "ShoplyCheckoutModal" });

export { __nuxt_component_2 as default };
//# sourceMappingURL=ShoplyCheckoutModal-BbRTNtIw.mjs.map
