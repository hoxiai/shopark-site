import { defineComponent, ref, watch, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MarketplaceVisual",
  __ssrInlineRender: true,
  props: {
    name: {},
    mark: {},
    accent: {},
    imageUrl: {}
  },
  setup(__props) {
    const props = __props;
    const imageFailed = ref(false);
    watch(() => props.imageUrl, () => {
      imageFailed.value = false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-[1.75rem] text-white",
        style: { background: `linear-gradient(135deg, ${__props.accent}, #071e49)` }
      }, _attrs))}>`);
      if (__props.imageUrl && !imageFailed.value) {
        _push(`<img${ssrRenderAttr("src", __props.imageUrl)}${ssrRenderAttr("alt", __props.name)} class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105">`);
      } else {
        _push(`<!--[--><div class="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/15 transition-transform duration-500 group-hover:scale-110"></div><div class="absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-black/15 transition-transform duration-500 group-hover:scale-110"></div><span class="relative text-5xl font-black tracking-tight transition-transform duration-500 group-hover:scale-105 sm:text-6xl">${ssrInterpolate(__props.mark)}</span><!--]-->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shopark/components/MarketplaceVisual.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MarketplaceVisual = Object.assign(_sfc_main, { __name: "MarketplaceVisual" });

export { MarketplaceVisual as default };
//# sourceMappingURL=MarketplaceVisual-DI-8P_MU.mjs.map
