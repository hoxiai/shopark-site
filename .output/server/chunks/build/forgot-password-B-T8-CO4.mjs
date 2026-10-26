import __nuxt_component_0 from './ShoplyAuthShell-2q-qSahQ.mjs';
import { bg as useSeoMeta, _ as _sfc_main$W, i as _sfc_main$R, a as _sfc_main$w, b as _sfc_main$v, v as _sfc_main$o, O as __nuxt_component_3$4 } from './server.mjs';
import { _ as _sfc_main$1 } from './Form-3sBlM4qD.mjs';
import { defineComponent, reactive, ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, Fragment, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useShoplyAuthRedirect } from './useShoplyAuthRedirect-s4RoPFY0.mjs';
import { u as useShoplyConsoleCopy } from './useShoplyConsole-qBrGWuE8.mjs';
import './useShoplyLogo-Ck6X-KKS.mjs';
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
  __name: "forgot-password",
  __ssrInlineRender: true,
  setup(__props) {
    const { copy, locale } = useShoplyConsoleCopy();
    const { withRedirect } = useShoplyAuthRedirect();
    const form = reactive({ email: "" });
    const loading = ref(false);
    const sent = ref(false);
    const errorMessage = ref("");
    const handleSubmit = async () => {
      var _a, _b;
      if (loading.value) return;
      loading.value = true;
      errorMessage.value = "";
      try {
        await $fetch("/api/shoply/auth/forgot-password", {
          method: "POST",
          body: { email: form.email.trim(), locale: locale.value }
        });
        sent.value = true;
      } catch (err) {
        const status = Number((_b = (_a = err == null ? void 0 : err.statusCode) != null ? _a : err == null ? void 0 : err.status) != null ? _b : 0);
        errorMessage.value = status === 429 ? copy.value.auth.forgotTooMany : copy.value.auth.forgotFailed;
      } finally {
        loading.value = false;
      }
    };
    useSeoMeta({
      title: () => copy.value.auth.seoForgotTitle,
      description: () => copy.value.auth.seoForgotDescription,
      robots: "noindex, nofollow"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ShoplyAuthShell = __nuxt_component_0;
      const _component_UIcon = _sfc_main$W;
      const _component_UButton = _sfc_main$R;
      const _component_UForm = _sfc_main$1;
      const _component_UFormField = _sfc_main$w;
      const _component_UInput = _sfc_main$v;
      const _component_UAlert = _sfc_main$o;
      const _component_NuxtLink = __nuxt_component_3$4;
      _push(ssrRenderComponent(_component_ShoplyAuthShell, mergeProps({
        title: unref(copy).auth.forgotTitle,
        subtitle: unref(copy).auth.forgotSubtitle,
        "hero-title": unref(copy).auth.forgotTitle,
        "hero-subtitle": unref(copy).auth.forgotSubtitle
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (sent.value) {
              _push2(`<!--[--><div class="rounded-2xl border border-emerald-200/80 bg-emerald-50/80 p-6 text-center"${_scopeId}><span class="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 shadow-sm"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:envelope-simple-open-bold",
                class: "h-7 w-7"
              }, null, _parent2, _scopeId));
              _push2(`</span><p class="mt-4 text-sm font-medium leading-relaxed text-emerald-950"${_scopeId}>${ssrInterpolate(unref(copy).auth.forgotSent)}</p></div><div class="mt-6 flex flex-wrap justify-center gap-3"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UButton, {
                to: unref(withRedirect)("/auth/login"),
                size: "xl",
                class: "rounded-xl px-6 font-bold shadow-md shadow-blue-600/20"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(copy).auth.backToLogin)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(copy).auth.backToLogin), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UButton, {
                color: "neutral",
                variant: "outline",
                size: "xl",
                class: "rounded-xl px-5",
                onClick: ($event) => sent.value = false
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(copy).auth.requestNewLink)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(copy).auth.requestNewLink), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><!--]-->`);
            } else {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(_component_UForm, {
                state: form,
                class: "space-y-5",
                onSubmit: handleSubmit
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UFormField, {
                      label: unref(copy).auth.email,
                      name: "email",
                      required: ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UInput, {
                            modelValue: form.email,
                            "onUpdate:modelValue": ($event) => form.email = $event,
                            type: "email",
                            autocomplete: "email",
                            size: "xl",
                            class: "w-full",
                            placeholder: unref(copy).auth.emailPlaceholder,
                            autofocus: ""
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UInput, {
                              modelValue: form.email,
                              "onUpdate:modelValue": ($event) => form.email = $event,
                              type: "email",
                              autocomplete: "email",
                              size: "xl",
                              class: "w-full",
                              placeholder: unref(copy).auth.emailPlaceholder,
                              autofocus: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    if (errorMessage.value) {
                      _push3(ssrRenderComponent(_component_UAlert, {
                        color: "error",
                        variant: "subtle",
                        icon: "ph:warning-circle-bold",
                        description: errorMessage.value,
                        class: "rounded-xl"
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(ssrRenderComponent(_component_UButton, {
                      type: "submit",
                      size: "xl",
                      block: "",
                      class: "rounded-xl bg-blue-600 hover:bg-blue-700 py-3.5 text-base font-bold text-white shadow-lg shadow-blue-600/20 transition-all hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 cursor-pointer",
                      loading: loading.value,
                      disabled: !form.email
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(unref(copy).auth.forgotSubmit)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(unref(copy).auth.forgotSubmit), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UFormField, {
                        label: unref(copy).auth.email,
                        name: "email",
                        required: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: form.email,
                            "onUpdate:modelValue": ($event) => form.email = $event,
                            type: "email",
                            autocomplete: "email",
                            size: "xl",
                            class: "w-full",
                            placeholder: unref(copy).auth.emailPlaceholder,
                            autofocus: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                        ]),
                        _: 1
                      }, 8, ["label"]),
                      errorMessage.value ? (openBlock(), createBlock(_component_UAlert, {
                        key: 0,
                        color: "error",
                        variant: "subtle",
                        icon: "ph:warning-circle-bold",
                        description: errorMessage.value,
                        class: "rounded-xl"
                      }, null, 8, ["description"])) : createCommentVNode("", true),
                      createVNode(_component_UButton, {
                        type: "submit",
                        size: "xl",
                        block: "",
                        class: "rounded-xl bg-blue-600 hover:bg-blue-700 py-3.5 text-base font-bold text-white shadow-lg shadow-blue-600/20 transition-all hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 cursor-pointer",
                        loading: loading.value,
                        disabled: !form.email
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(copy).auth.forgotSubmit), 1)
                        ]),
                        _: 1
                      }, 8, ["loading", "disabled"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<p class="mt-6 text-center text-sm text-slate-500"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: unref(withRedirect)("/auth/login"),
                class: "font-bold text-blue-600 hover:text-blue-700"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(copy).auth.backToLogin)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(copy).auth.backToLogin), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</p><!--]-->`);
            }
          } else {
            return [
              sent.value ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                createVNode("div", { class: "rounded-2xl border border-emerald-200/80 bg-emerald-50/80 p-6 text-center" }, [
                  createVNode("span", { class: "mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 shadow-sm" }, [
                    createVNode(_component_UIcon, {
                      name: "ph:envelope-simple-open-bold",
                      class: "h-7 w-7"
                    })
                  ]),
                  createVNode("p", { class: "mt-4 text-sm font-medium leading-relaxed text-emerald-950" }, toDisplayString(unref(copy).auth.forgotSent), 1)
                ]),
                createVNode("div", { class: "mt-6 flex flex-wrap justify-center gap-3" }, [
                  createVNode(_component_UButton, {
                    to: unref(withRedirect)("/auth/login"),
                    size: "xl",
                    class: "rounded-xl px-6 font-bold shadow-md shadow-blue-600/20"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(copy).auth.backToLogin), 1)
                    ]),
                    _: 1
                  }, 8, ["to"]),
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "outline",
                    size: "xl",
                    class: "rounded-xl px-5",
                    onClick: ($event) => sent.value = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(copy).auth.requestNewLink), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ])
              ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                createVNode(_component_UForm, {
                  state: form,
                  class: "space-y-5",
                  onSubmit: handleSubmit
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UFormField, {
                      label: unref(copy).auth.email,
                      name: "email",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: form.email,
                          "onUpdate:modelValue": ($event) => form.email = $event,
                          type: "email",
                          autocomplete: "email",
                          size: "xl",
                          class: "w-full",
                          placeholder: unref(copy).auth.emailPlaceholder,
                          autofocus: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    errorMessage.value ? (openBlock(), createBlock(_component_UAlert, {
                      key: 0,
                      color: "error",
                      variant: "subtle",
                      icon: "ph:warning-circle-bold",
                      description: errorMessage.value,
                      class: "rounded-xl"
                    }, null, 8, ["description"])) : createCommentVNode("", true),
                    createVNode(_component_UButton, {
                      type: "submit",
                      size: "xl",
                      block: "",
                      class: "rounded-xl bg-blue-600 hover:bg-blue-700 py-3.5 text-base font-bold text-white shadow-lg shadow-blue-600/20 transition-all hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 cursor-pointer",
                      loading: loading.value,
                      disabled: !form.email
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(copy).auth.forgotSubmit), 1)
                      ]),
                      _: 1
                    }, 8, ["loading", "disabled"])
                  ]),
                  _: 1
                }, 8, ["state"]),
                createVNode("p", { class: "mt-6 text-center text-sm text-slate-500" }, [
                  createVNode(_component_NuxtLink, {
                    to: unref(withRedirect)("/auth/login"),
                    class: "font-bold text-blue-600 hover:text-blue-700"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(copy).auth.backToLogin), 1)
                    ]),
                    _: 1
                  }, 8, ["to"])
                ])
              ], 64))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shoply/pages/auth/forgot-password.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=forgot-password-B-T8-CO4.mjs.map
