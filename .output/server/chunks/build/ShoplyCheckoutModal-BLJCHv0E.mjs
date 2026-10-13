import { bk as useCheckout, n as _sfc_main$C, bl as __nuxt_component_1$1 } from './server.mjs';
import { defineComponent, unref, isRef, withCtx, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderSlot, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "ShoplyCheckoutModal",
  __ssrInlineRender: true,
  props: {
    productId: {},
    orderId: {}
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
    const open = () => {
      if (props.orderId) return continuePayment(props.orderId);
      if (props.productId) return openCheckoutModal(props.productId, 1);
    };
    const handleSuccess = (paidOrderId) => {
      closeCheckoutModal();
      emit("success", paidOrderId);
    };
    __expose({ open });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UModal = _sfc_main$C;
      const _component_PaymentWorkspace = __nuxt_component_1$1;
      _push(`<!--[-->`);
      ssrRenderSlot(_ctx.$slots, "trigger", {
        loading: unref(isCreatingOrder),
        open
      }, null, _push, _parent);
      _push(ssrRenderComponent(_component_UModal, {
        open: unref(isOrderModalOpen),
        "onUpdate:open": ($event) => isRef(isOrderModalOpen) ? isOrderModalOpen.value = $event : null,
        scrollable: "",
        ui: { content: "w-[calc(100vw-1rem)] max-w-5xl overflow-hidden rounded-2xl sm:w-[calc(100vw-3rem)] sm:rounded-[2rem]" }
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
const __nuxt_component_4 = Object.assign(_sfc_main, { __name: "ShoplyCheckoutModal" });

export { __nuxt_component_4 as default };
//# sourceMappingURL=ShoplyCheckoutModal-BLJCHv0E.mjs.map
