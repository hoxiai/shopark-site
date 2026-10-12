import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MarketplaceHero",
  __ssrInlineRender: true,
  props: {
    eyebrow: {},
    title: {},
    description: {},
    modelValue: {},
    searchPlaceholder: {},
    searchable: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden bg-gradient-to-b from-[#2678ff] via-[#1e6df0] to-[#155fc8] px-5 pb-20 pt-32 text-white sm:px-8 sm:pb-24 sm:pt-40 lg:px-12" }, _attrs))}><div class="pointer-events-none absolute inset-0 -z-10"><div class="animate-shoply-glow absolute -left-20 top-10 h-96 w-96 rounded-full bg-cyan-300/25 blur-3xl"></div><div class="animate-shoply-float-delayed absolute -right-20 bottom-10 h-[480px] w-[480px] rounded-full bg-indigo-900/30 blur-3xl"></div><div class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-blue-800/20 to-transparent"></div></div><div class="relative mx-auto max-w-5xl text-center"><p class="animate-shoply-fade-in text-xs font-black tracking-[0.25em] text-blue-200 sm:text-sm">${ssrInterpolate(__props.eyebrow)}</p><h1 class="animate-shoply-fade-in-up mx-auto mt-5 max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">${ssrInterpolate(__props.title)}</h1><p class="animate-shoply-fade-in-up animate-delay-100 mx-auto mt-6 max-w-3xl text-base leading-8 text-blue-100/80 sm:text-lg">${ssrInterpolate(__props.description)}</p>`);
      if (__props.searchable) {
        _push(`<label class="animate-shoply-fade-in-up animate-delay-180 mx-auto mt-10 flex max-w-2xl items-center gap-3 rounded-2xl bg-white p-2 pl-5 shadow-2xl shadow-black/20 ring-1 ring-white/20 transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-400 focus-within:shadow-blue-500/20"><span aria-hidden="true" class="text-xl text-slate-400">\u2315</span><span class="sr-only">${ssrInterpolate(__props.searchPlaceholder)}</span><input${ssrRenderAttr("value", __props.modelValue)} type="search" class="min-w-0 flex-1 border-0 bg-transparent py-3 text-base text-slate-900 outline-none"${ssrRenderAttr("placeholder", __props.searchPlaceholder)}></label>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shoply/components/MarketplaceHero.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main, { __name: "MarketplaceHero" });

export { __nuxt_component_0 as default };
