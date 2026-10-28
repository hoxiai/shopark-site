import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SectionHeading",
  __ssrInlineRender: true,
  props: {
    label: {},
    title: {},
    description: {},
    align: { default: "center" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: __props.align === "left" ? "max-w-2xl" : "mx-auto max-w-3xl text-center"
      }, _attrs))}><p class="text-xs font-black tracking-[0.18em] text-blue-600 uppercase">${ssrInterpolate(__props.label)}</p><h2 class="mt-4 text-3xl font-black leading-tight tracking-[-0.035em] text-slate-900 sm:text-5xl">${ssrInterpolate(__props.title)}</h2><p class="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">${ssrInterpolate(__props.description)}</p></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shopark/components/SectionHeading.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main, { __name: "SectionHeading" });

export { __nuxt_component_1 as default };
//# sourceMappingURL=SectionHeading-BJpRVepO.mjs.map
