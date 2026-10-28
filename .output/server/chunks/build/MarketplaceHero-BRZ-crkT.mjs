import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MarketplaceHero",
  __ssrInlineRender: true,
  props: {
    eyebrow: {},
    title: {},
    description: {},
    modelValue: {},
    searchPlaceholder: {},
    searchable: { type: Boolean },
    compact: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: ["relative overflow-hidden bg-gradient-to-b from-[#2678ff] via-[#1e6df0] to-[#155fc8] px-5 text-white sm:px-8 lg:px-12", __props.compact ? "pb-10 pt-28 sm:pb-12 sm:pt-36 lg:pt-36" : "pb-20 pt-36 sm:pb-24 sm:pt-44"]
      }, _attrs))}><div class="pointer-events-none absolute inset-0 -z-10"><div class="animate-shopark-glow absolute -left-20 top-10 h-96 w-96 rounded-full bg-cyan-300/25 blur-3xl"></div><div class="animate-shopark-float-delayed absolute -right-20 bottom-10 h-[480px] w-[480px] rounded-full bg-indigo-900/30 blur-3xl"></div><div class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-blue-800/20 to-transparent"></div></div><div class="${ssrRenderClass([__props.compact ? "max-w-4xl" : "max-w-5xl", "relative mx-auto text-center"])}"><p class="${ssrRenderClass([__props.compact ? "text-xs" : "text-xs sm:text-sm tracking-[0.25em]", "animate-shopark-fade-in font-black tracking-[0.22em] text-blue-200 uppercase"])}">${ssrInterpolate(__props.eyebrow)}</p><h1 class="${ssrRenderClass([__props.compact ? "mt-2.5 max-w-3xl text-2xl sm:text-3xl lg:text-4xl" : "mt-5 max-w-4xl text-4xl sm:text-5xl lg:text-6xl", "animate-shopark-fade-in-up mx-auto font-black leading-tight text-white"])}">${ssrInterpolate(__props.title)}</h1><p class="${ssrRenderClass([__props.compact ? "mt-2.5 max-w-2xl text-xs sm:text-sm leading-relaxed" : "mt-6 max-w-3xl text-base leading-8 sm:text-lg", "animate-shopark-fade-in-up animate-delay-100 mx-auto text-blue-100/90"])}">${ssrInterpolate(__props.description)}</p>`);
      if (__props.searchable) {
        _push(`<label class="${ssrRenderClass([__props.compact ? "mt-5 max-w-lg p-1.5 pl-4 shadow-xl shadow-black/15" : "mt-10 max-w-2xl p-2 pl-5 shadow-2xl shadow-black/20", "animate-shopark-fade-in-up animate-delay-180 mx-auto flex items-center gap-3 rounded-2xl bg-white ring-1 ring-white/20 transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-400 focus-within:shadow-blue-500/20"])}"><span aria-hidden="true" class="${ssrRenderClass([__props.compact ? "text-lg" : "text-xl", "text-slate-400"])}">\u2315</span><span class="sr-only">${ssrInterpolate(__props.searchPlaceholder)}</span><input${ssrRenderAttr("value", __props.modelValue)} type="search" class="${ssrRenderClass([__props.compact ? "py-2 text-sm sm:text-base" : "py-3 text-base", "min-w-0 flex-1 border-0 bg-transparent text-slate-900 outline-none"])}"${ssrRenderAttr("placeholder", __props.searchPlaceholder)}></label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shopark/components/MarketplaceHero.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MarketplaceHero = Object.assign(_sfc_main, { __name: "MarketplaceHero" });

export { MarketplaceHero as default };
//# sourceMappingURL=MarketplaceHero-BRZ-crkT.mjs.map
