import { e as useToast, _ as _sfc_main$V, n as _sfc_main$F } from './server.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, createVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderComponent, ssrIncludeBooleanAttr, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TicketAttachments",
  __ssrInlineRender: true,
  props: {
    modelValue: { default: () => [] },
    adminMode: { type: Boolean, default: false },
    maxCount: { default: 5 }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    useToast();
    ref(null);
    const uploading = ref(false);
    const previewModalOpen = ref(false);
    const currentPreviewUrl = ref("");
    const attachments = computed({
      get: () => props.modelValue || [],
      set: (val) => emit("update:modelValue", val)
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$V;
      const _component_UModal = _sfc_main$F;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-2" }, _attrs))}>`);
      if (attachments.value.length > 0) {
        _push(`<div class="flex flex-wrap gap-2.5"><!--[-->`);
        ssrRenderList(attachments.value, (item, idx) => {
          _push(`<div class="relative group w-18 h-18 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-black/40 overflow-hidden shadow-xs"><img${ssrRenderAttr("src", item.url)}${ssrRenderAttr("alt", item.name || "\u9644\u4EF6\u622A\u56FE")} class="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform"><button type="button" class="absolute top-1 right-1 w-5 h-5 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500" title="\u79FB\u9664\u9644\u4EF6">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:x-bold",
            class: "w-3 h-3"
          }, null, _parent));
          _push(`</button></div>`);
        });
        _push(`<!--]-->`);
        if (uploading.value) {
          _push(`<div class="w-18 h-18 rounded-xl border border-dashed border-[#6d4cff]/40 bg-[#6d4cff]/5 flex flex-col items-center justify-center text-[#6d4cff] text-xs animate-pulse">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:spinner",
            class: "w-5 h-5 animate-spin"
          }, null, _parent));
          _push(`<span class="text-[10px] mt-1">\u4E0A\u4F20\u4E2D...</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (attachments.value.length < __props.maxCount) {
        _push(`<div class="flex items-center gap-2"><input type="file" accept="image/png,image/jpeg,image/jpg,image/webp" multiple class="hidden"><button type="button"${ssrIncludeBooleanAttr(uploading.value) ? " disabled" : ""} class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-dashed border-gray-300 dark:border-white/15 hover:border-[#6d4cff] hover:text-[#6d4cff] text-gray-500 dark:text-gray-400 text-xs transition-colors bg-gray-50/50 dark:bg-white/[0.02]">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:image-square-bold",
          class: "w-4 h-4"
        }, null, _parent));
        _push(`<span>\u6DFB\u52A0\u62A5\u9519\u622A\u56FE / \u51ED\u8BC1</span><span class="text-[10px] text-gray-400">(${ssrInterpolate(attachments.value.length)}/${ssrInterpolate(__props.maxCount)})</span></button><span class="text-[11px] text-gray-400 hidden sm:inline"> \u{1F4A1} \u63D0\u793A\uFF1A\u622A\u56FE\u540E\u53EF\u76F4\u63A5\u5728\u6B64\u7C98\u8D34 (Ctrl+V) </span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_UModal, {
        open: previewModalOpen.value,
        "onUpdate:open": ($event) => previewModalOpen.value = $event,
        ui: { content: "sm:max-w-3xl bg-black/90 p-2 overflow-hidden" }
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative flex items-center justify-center min-h-[50vh] p-2"${_scopeId}><button type="button" class="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:x-bold",
              class: "w-4 h-4"
            }, null, _parent2, _scopeId));
            _push2(`</button>`);
            if (currentPreviewUrl.value) {
              _push2(`<img${ssrRenderAttr("src", currentPreviewUrl.value)} alt="\u653E\u5927\u9884\u89C8" class="max-w-full max-h-[80vh] rounded-lg object-contain"${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "relative flex items-center justify-center min-h-[50vh] p-2" }, [
                createVNode("button", {
                  type: "button",
                  class: "absolute top-2 right-2 w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center",
                  onClick: ($event) => previewModalOpen.value = false
                }, [
                  createVNode(_component_UIcon, {
                    name: "ph:x-bold",
                    class: "w-4 h-4"
                  })
                ], 8, ["onClick"]),
                currentPreviewUrl.value ? (openBlock(), createBlock("img", {
                  key: 0,
                  src: currentPreviewUrl.value,
                  alt: "\u653E\u5927\u9884\u89C8",
                  class: "max-w-full max-h-[80vh] rounded-lg object-contain"
                }, null, 8, ["src"])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TicketAttachments.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_7 = Object.assign(_sfc_main, { __name: "TicketAttachments" });

export { __nuxt_component_7 as _ };
//# sourceMappingURL=TicketAttachments-ldA3n0nM.mjs.map
