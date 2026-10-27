import { n as _sfc_main$G, i as _sfc_main$R } from './server.mjs';
import ShoplyLeadForm from './ShoplyLeadForm-D_0Jyd2M.mjs';
import { defineComponent, useModel, mergeProps, withCtx, createVNode, toDisplayString, mergeModels, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
import './CaptchaSlider-BJqv3jPw.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ShoplyConsultDialog",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    source: {}
  }, {
    "open": { type: Boolean, ...{ default: false } },
    "openModifiers": {}
  }),
  emits: ["update:open"],
  setup(__props) {
    const isOpen = useModel(__props, "open");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UModal = _sfc_main$G;
      const _component_UButton = _sfc_main$R;
      const _component_ShoplyLeadForm = ShoplyLeadForm;
      _push(ssrRenderComponent(_component_UModal, mergeProps({
        open: isOpen.value,
        "onUpdate:open": ($event) => isOpen.value = $event,
        ui: { content: "w-[calc(100vw-2rem)] max-w-lg rounded-3xl" }
      }, _attrs), {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-h-[85vh] overflow-y-auto p-6 sm:p-7"${_scopeId}><div class="flex items-start justify-between gap-4"${_scopeId}><div${_scopeId}><h2 class="text-xl font-black text-slate-950"${_scopeId}>${ssrInterpolate(_ctx.$t("shoply.lead.dialogTitle"))}</h2><p class="mt-2 text-sm leading-6 text-slate-500"${_scopeId}>${ssrInterpolate(_ctx.$t("shoply.lead.dialogDescription"))}</p></div>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              icon: "ph:x-bold",
              size: "sm",
              class: "shrink-0 rounded-full",
              "aria-label": _ctx.$t("shoply.nav.closeMenu"),
              onClick: ($event) => isOpen.value = false
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ShoplyLeadForm, { source: __props.source }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "max-h-[85vh] overflow-y-auto p-6 sm:p-7" }, [
                createVNode("div", { class: "flex items-start justify-between gap-4" }, [
                  createVNode("div", null, [
                    createVNode("h2", { class: "text-xl font-black text-slate-950" }, toDisplayString(_ctx.$t("shoply.lead.dialogTitle")), 1),
                    createVNode("p", { class: "mt-2 text-sm leading-6 text-slate-500" }, toDisplayString(_ctx.$t("shoply.lead.dialogDescription")), 1)
                  ]),
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    icon: "ph:x-bold",
                    size: "sm",
                    class: "shrink-0 rounded-full",
                    "aria-label": _ctx.$t("shoply.nav.closeMenu"),
                    onClick: ($event) => isOpen.value = false
                  }, null, 8, ["aria-label", "onClick"])
                ]),
                createVNode("div", { class: "mt-6" }, [
                  createVNode(_component_ShoplyLeadForm, { source: __props.source }, null, 8, ["source"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shoply/components/ShoplyConsultDialog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main, { __name: "ShoplyConsultDialog" });

export { __nuxt_component_2 as default };
//# sourceMappingURL=ShoplyConsultDialog-DqQPD2xx.mjs.map
