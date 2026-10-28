import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ShoparkConsoleHeader",
  __ssrInlineRender: true,
  props: {
    title: {},
    subtitle: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between" }, _attrs))}><div class="min-w-0"><h1 class="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">${ssrInterpolate(__props.title)}</h1>`);
      if (__props.subtitle) {
        _push(`<p class="mt-2 max-w-2xl text-sm leading-6 text-slate-500">${ssrInterpolate(__props.subtitle)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (_ctx.$slots.actions) {
        _push(`<div class="flex shrink-0 flex-wrap items-center gap-2">`);
        ssrRenderSlot(_ctx.$slots, "actions", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shopark/components/ShoparkConsoleHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main, { __name: "ShoparkConsoleHeader" });

export { __nuxt_component_0 as default };
//# sourceMappingURL=ShoparkConsoleHeader-D-VQHPXh.mjs.map
