import __nuxt_component_0 from './ShoplyAuthShell-CZBbWXxK.mjs';
import { B as useLocaleRouter, bc as useSeoMeta, _ as _sfc_main$Q, i as _sfc_main$L, bf as _sfc_main$l, a as _sfc_main$t, b as _sfc_main$s, J as __nuxt_component_3$3 } from './server.mjs';
import { _ as _sfc_main$1 } from './Form-CYIN9NOp.mjs';
import { defineComponent, computed, reactive, ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, Fragment, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { u as useShoplyConsoleCopy } from './useShoplyConsole-Jz-jwtEc.mjs';
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
import 'node:fs/promises';
import 'node:dns/promises';
import 'node:net';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
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

const MIN_PASSWORD_LENGTH = 8;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "reset-password",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const { copy } = useShoplyConsoleCopy();
    const { localePath } = useLocaleRouter();
    const token = computed(() => typeof route.query.token === "string" ? route.query.token.trim() : "");
    const form = reactive({ password: "", confirmPassword: "" });
    const loading = ref(false);
    const done = ref(false);
    const errorMessage = ref("");
    const handleSubmit = async () => {
      var _a, _b;
      if (loading.value) return;
      errorMessage.value = "";
      if (form.password.length < MIN_PASSWORD_LENGTH) {
        errorMessage.value = copy.value.auth.passwordTooShort;
        return;
      }
      if (form.password !== form.confirmPassword) {
        errorMessage.value = copy.value.auth.passwordMismatch;
        return;
      }
      loading.value = true;
      try {
        await $fetch("/api/shoply/auth/reset-password", {
          method: "POST",
          body: { token: token.value, password: form.password }
        });
        done.value = true;
      } catch (err) {
        const status = Number((_b = (_a = err == null ? void 0 : err.statusCode) != null ? _a : err == null ? void 0 : err.status) != null ? _b : 0);
        errorMessage.value = status === 404 || status === 410 ? copy.value.auth.resetInvalid : status === 400 ? copy.value.auth.passwordTooShort : copy.value.auth.resetFailed;
      } finally {
        loading.value = false;
      }
    };
    useSeoMeta({
      title: () => copy.value.auth.seoResetTitle,
      description: () => copy.value.auth.seoResetDescription,
      robots: "noindex, nofollow"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ShoplyAuthShell = __nuxt_component_0;
      const _component_UIcon = _sfc_main$Q;
      const _component_UButton = _sfc_main$L;
      const _component_UAlert = _sfc_main$l;
      const _component_UForm = _sfc_main$1;
      const _component_UFormField = _sfc_main$t;
      const _component_UInput = _sfc_main$s;
      const _component_NuxtLink = __nuxt_component_3$3;
      _push(ssrRenderComponent(_component_ShoplyAuthShell, mergeProps({
        title: unref(copy).auth.resetTitle,
        subtitle: unref(copy).auth.resetSubtitle
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (done.value) {
              _push2(`<!--[--><div class="rounded-2xl bg-emerald-50 p-5"${_scopeId}><span class="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:check-circle-bold",
                class: "h-6 w-6"
              }, null, _parent2, _scopeId));
              _push2(`</span><p class="mt-4 text-sm leading-6 text-emerald-900"${_scopeId}>${ssrInterpolate(unref(copy).auth.resetDone)}</p></div>`);
              _push2(ssrRenderComponent(_component_UButton, {
                to: unref(localePath)("/auth/login"),
                size: "lg",
                block: "",
                class: "mt-6 rounded-xl font-bold"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(copy).auth.signIn)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(copy).auth.signIn), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<!--]-->`);
            } else if (!token.value) {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(_component_UAlert, {
                color: "error",
                variant: "subtle",
                icon: "ph:link-break-bold",
                description: unref(copy).auth.resetInvalid
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UButton, {
                to: unref(localePath)("/auth/forgot-password"),
                size: "lg",
                block: "",
                class: "mt-6 rounded-xl font-bold"
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
              _push2(`<!--]-->`);
            } else {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(_component_UForm, {
                state: form,
                class: "space-y-4",
                onSubmit: handleSubmit
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UFormField, {
                      label: unref(copy).auth.newPassword,
                      name: "password",
                      hint: unref(copy).auth.passwordHint,
                      required: ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UInput, {
                            modelValue: form.password,
                            "onUpdate:modelValue": ($event) => form.password = $event,
                            type: "password",
                            autocomplete: "new-password",
                            size: "lg",
                            class: "w-full",
                            autofocus: ""
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UInput, {
                              modelValue: form.password,
                              "onUpdate:modelValue": ($event) => form.password = $event,
                              type: "password",
                              autocomplete: "new-password",
                              size: "lg",
                              class: "w-full",
                              autofocus: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UFormField, {
                      label: unref(copy).auth.confirmPassword,
                      name: "confirmPassword",
                      required: ""
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UInput, {
                            modelValue: form.confirmPassword,
                            "onUpdate:modelValue": ($event) => form.confirmPassword = $event,
                            type: "password",
                            autocomplete: "new-password",
                            size: "lg",
                            class: "w-full"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UInput, {
                              modelValue: form.confirmPassword,
                              "onUpdate:modelValue": ($event) => form.confirmPassword = $event,
                              type: "password",
                              autocomplete: "new-password",
                              size: "lg",
                              class: "w-full"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                        description: errorMessage.value
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(ssrRenderComponent(_component_UButton, {
                      type: "submit",
                      size: "lg",
                      block: "",
                      class: "rounded-xl font-bold",
                      loading: loading.value,
                      disabled: !form.password || !form.confirmPassword
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(unref(copy).auth.resetSubmit)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(unref(copy).auth.resetSubmit), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UFormField, {
                        label: unref(copy).auth.newPassword,
                        name: "password",
                        hint: unref(copy).auth.passwordHint,
                        required: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: form.password,
                            "onUpdate:modelValue": ($event) => form.password = $event,
                            type: "password",
                            autocomplete: "new-password",
                            size: "lg",
                            class: "w-full",
                            autofocus: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }, 8, ["label", "hint"]),
                      createVNode(_component_UFormField, {
                        label: unref(copy).auth.confirmPassword,
                        name: "confirmPassword",
                        required: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: form.confirmPassword,
                            "onUpdate:modelValue": ($event) => form.confirmPassword = $event,
                            type: "password",
                            autocomplete: "new-password",
                            size: "lg",
                            class: "w-full"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }, 8, ["label"]),
                      errorMessage.value ? (openBlock(), createBlock(_component_UAlert, {
                        key: 0,
                        color: "error",
                        variant: "subtle",
                        icon: "ph:warning-circle-bold",
                        description: errorMessage.value
                      }, null, 8, ["description"])) : createCommentVNode("", true),
                      createVNode(_component_UButton, {
                        type: "submit",
                        size: "lg",
                        block: "",
                        class: "rounded-xl font-bold",
                        loading: loading.value,
                        disabled: !form.password || !form.confirmPassword
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(copy).auth.resetSubmit), 1)
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
                to: unref(localePath)("/auth/login"),
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
              done.value ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                createVNode("div", { class: "rounded-2xl bg-emerald-50 p-5" }, [
                  createVNode("span", { class: "flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600" }, [
                    createVNode(_component_UIcon, {
                      name: "ph:check-circle-bold",
                      class: "h-6 w-6"
                    })
                  ]),
                  createVNode("p", { class: "mt-4 text-sm leading-6 text-emerald-900" }, toDisplayString(unref(copy).auth.resetDone), 1)
                ]),
                createVNode(_component_UButton, {
                  to: unref(localePath)("/auth/login"),
                  size: "lg",
                  block: "",
                  class: "mt-6 rounded-xl font-bold"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(copy).auth.signIn), 1)
                  ]),
                  _: 1
                }, 8, ["to"])
              ], 64)) : !token.value ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                createVNode(_component_UAlert, {
                  color: "error",
                  variant: "subtle",
                  icon: "ph:link-break-bold",
                  description: unref(copy).auth.resetInvalid
                }, null, 8, ["description"]),
                createVNode(_component_UButton, {
                  to: unref(localePath)("/auth/forgot-password"),
                  size: "lg",
                  block: "",
                  class: "mt-6 rounded-xl font-bold"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(copy).auth.requestNewLink), 1)
                  ]),
                  _: 1
                }, 8, ["to"])
              ], 64)) : (openBlock(), createBlock(Fragment, { key: 2 }, [
                createVNode(_component_UForm, {
                  state: form,
                  class: "space-y-4",
                  onSubmit: handleSubmit
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UFormField, {
                      label: unref(copy).auth.newPassword,
                      name: "password",
                      hint: unref(copy).auth.passwordHint,
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: form.password,
                          "onUpdate:modelValue": ($event) => form.password = $event,
                          type: "password",
                          autocomplete: "new-password",
                          size: "lg",
                          class: "w-full",
                          autofocus: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }, 8, ["label", "hint"]),
                    createVNode(_component_UFormField, {
                      label: unref(copy).auth.confirmPassword,
                      name: "confirmPassword",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: form.confirmPassword,
                          "onUpdate:modelValue": ($event) => form.confirmPassword = $event,
                          type: "password",
                          autocomplete: "new-password",
                          size: "lg",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    errorMessage.value ? (openBlock(), createBlock(_component_UAlert, {
                      key: 0,
                      color: "error",
                      variant: "subtle",
                      icon: "ph:warning-circle-bold",
                      description: errorMessage.value
                    }, null, 8, ["description"])) : createCommentVNode("", true),
                    createVNode(_component_UButton, {
                      type: "submit",
                      size: "lg",
                      block: "",
                      class: "rounded-xl font-bold",
                      loading: loading.value,
                      disabled: !form.password || !form.confirmPassword
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(copy).auth.resetSubmit), 1)
                      ]),
                      _: 1
                    }, 8, ["loading", "disabled"])
                  ]),
                  _: 1
                }, 8, ["state"]),
                createVNode("p", { class: "mt-6 text-center text-sm text-slate-500" }, [
                  createVNode(_component_NuxtLink, {
                    to: unref(localePath)("/auth/login"),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shoply/pages/auth/reset-password.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
