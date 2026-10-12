import __nuxt_component_0 from './ShoplyAuthShell-CZBbWXxK.mjs';
import { bd as useCustomerAuth, r as useSettings, B as useLocaleRouter, o as navigateTo, bc as useSeoMeta, i as _sfc_main$L, a as _sfc_main$t, b as _sfc_main$s, J as __nuxt_component_3$3, bf as _sfc_main$l } from './server.mjs';
import { _ as _sfc_main$1 } from './Form-CYIN9NOp.mjs';
import { _ as __nuxt_component_1 } from './CaptchaSlider-BJqv3jPw.mjs';
import { defineComponent, withAsyncContext, reactive, ref, computed, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useShoplyAuthRedirect } from './useShoplyAuthRedirect-MWGE_DKe.mjs';
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
  __name: "login",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { copy } = useShoplyConsoleCopy();
    const { login, loggedIn } = useCustomerAuth();
    const { getSetting } = useSettings();
    const { localePath } = useLocaleRouter();
    const { redirectPath, withRedirect } = useShoplyAuthRedirect();
    if (loggedIn.value) [__temp, __restore] = withAsyncContext(() => navigateTo(redirectPath.value, { replace: true })), await __temp, __restore();
    const form = reactive({ email: "", password: "" });
    const loading = ref(false);
    const errorMessage = ref("");
    const captchaRef = ref(null);
    const captchaTicket = ref("");
    const oauthProviders = computed(() => {
      const enabled = new Set(String(getSetting("shoply_oauth_providers", "")).split(",").map((item) => item.trim().toLowerCase()));
      return [
        { key: "google", label: "Google", icon: "logos:google-icon", href: "/api/auth/google" },
        { key: "github", label: "GitHub", icon: "ph:github-logo-bold", href: "/api/auth/github" }
      ].filter((provider) => enabled.has(provider.key));
    });
    const handleCaptchaSuccess = async (ticket) => {
      captchaTicket.value = ticket;
      await handleLogin();
    };
    const handleLogin = async () => {
      var _a, _b;
      if (loading.value) return;
      loading.value = true;
      errorMessage.value = "";
      try {
        await login({ email: form.email.trim(), password: form.password, captchaTicket: captchaTicket.value || void 0 });
        captchaTicket.value = "";
        await navigateTo(redirectPath.value, { replace: true });
      } catch (err) {
        const error = err && typeof err === "object" ? err : {};
        errorMessage.value = error.message || error.statusMessage || copy.value.auth.loginFailed;
        if (error.needCaptcha || ((_a = error.data) == null ? void 0 : _a.needCaptcha) || error.statusCode === 403) {
          captchaTicket.value = "";
          (_b = captchaRef.value) == null ? void 0 : _b.show();
        }
      } finally {
        loading.value = false;
      }
    };
    useSeoMeta({
      title: () => copy.value.auth.seoLoginTitle,
      description: () => copy.value.auth.seoLoginDescription,
      robots: "noindex, nofollow"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ShoplyAuthShell = __nuxt_component_0;
      const _component_UButton = _sfc_main$L;
      const _component_UForm = _sfc_main$1;
      const _component_UFormField = _sfc_main$t;
      const _component_UInput = _sfc_main$s;
      const _component_NuxtLink = __nuxt_component_3$3;
      const _component_UAlert = _sfc_main$l;
      const _component_CaptchaSlider = __nuxt_component_1;
      _push(ssrRenderComponent(_component_ShoplyAuthShell, mergeProps({
        title: unref(copy).auth.loginTitle,
        subtitle: unref(copy).auth.loginSubtitle
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (oauthProviders.value.length) {
              _push2(`<div class="grid gap-3 sm:grid-cols-2"${_scopeId}><!--[-->`);
              ssrRenderList(oauthProviders.value, (provider) => {
                _push2(ssrRenderComponent(_component_UButton, {
                  key: provider.key,
                  href: provider.href,
                  external: "",
                  color: "neutral",
                  variant: "outline",
                  size: "lg",
                  class: "justify-center rounded-xl",
                  icon: provider.icon
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(provider.label)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(provider.label), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (oauthProviders.value.length) {
              _push2(`<div class="my-6 flex items-center gap-3 text-xs text-slate-400"${_scopeId}><span class="h-px flex-1 bg-slate-200"${_scopeId}></span> ${ssrInterpolate(unref(copy).auth.orContinue)} <span class="h-px flex-1 bg-slate-200"${_scopeId}></span></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_UForm, {
              state: form,
              class: "space-y-4",
              onSubmit: handleLogin
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
                          size: "lg",
                          class: "w-full",
                          placeholder: unref(copy).auth.emailPlaceholder
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UInput, {
                            modelValue: form.email,
                            "onUpdate:modelValue": ($event) => form.email = $event,
                            type: "email",
                            autocomplete: "email",
                            size: "lg",
                            class: "w-full",
                            placeholder: unref(copy).auth.emailPlaceholder
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UFormField, {
                    label: unref(copy).auth.password,
                    name: "password",
                    required: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UInput, {
                          modelValue: form.password,
                          "onUpdate:modelValue": ($event) => form.password = $event,
                          type: "password",
                          autocomplete: "current-password",
                          size: "lg",
                          class: "w-full",
                          placeholder: unref(copy).auth.passwordPlaceholder
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UInput, {
                            modelValue: form.password,
                            "onUpdate:modelValue": ($event) => form.password = $event,
                            type: "password",
                            autocomplete: "current-password",
                            size: "lg",
                            class: "w-full",
                            placeholder: unref(copy).auth.passwordPlaceholder
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex justify-end"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: unref(localePath)("/auth/forgot-password"),
                    class: "text-sm font-semibold text-slate-500 hover:text-blue-600"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(copy).auth.forgotPassword)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(copy).auth.forgotPassword), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
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
                    disabled: !form.email || !form.password
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(copy).auth.signIn)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(copy).auth.signIn), 1)
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
                          size: "lg",
                          class: "w-full",
                          placeholder: unref(copy).auth.emailPlaceholder
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    createVNode(_component_UFormField, {
                      label: unref(copy).auth.password,
                      name: "password",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: form.password,
                          "onUpdate:modelValue": ($event) => form.password = $event,
                          type: "password",
                          autocomplete: "current-password",
                          size: "lg",
                          class: "w-full",
                          placeholder: unref(copy).auth.passwordPlaceholder
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    createVNode("div", { class: "flex justify-end" }, [
                      createVNode(_component_NuxtLink, {
                        to: unref(localePath)("/auth/forgot-password"),
                        class: "text-sm font-semibold text-slate-500 hover:text-blue-600"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(copy).auth.forgotPassword), 1)
                        ]),
                        _: 1
                      }, 8, ["to"])
                    ]),
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
                      disabled: !form.email || !form.password
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(copy).auth.signIn), 1)
                      ]),
                      _: 1
                    }, 8, ["loading", "disabled"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p class="mt-6 text-center text-sm text-slate-500"${_scopeId}>${ssrInterpolate(unref(copy).auth.noAccount)} `);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(withRedirect)("/auth/register"),
              class: "font-bold text-blue-600 hover:text-blue-700"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(copy).auth.createAccount)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(copy).auth.createAccount), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</p>`);
            _push2(ssrRenderComponent(_component_CaptchaSlider, {
              ref_key: "captchaRef",
              ref: captchaRef,
              onSuccess: handleCaptchaSuccess
            }, null, _parent2, _scopeId));
          } else {
            return [
              oauthProviders.value.length ? (openBlock(), createBlock("div", {
                key: 0,
                class: "grid gap-3 sm:grid-cols-2"
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(oauthProviders.value, (provider) => {
                  return openBlock(), createBlock(_component_UButton, {
                    key: provider.key,
                    href: provider.href,
                    external: "",
                    color: "neutral",
                    variant: "outline",
                    size: "lg",
                    class: "justify-center rounded-xl",
                    icon: provider.icon
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(provider.label), 1)
                    ]),
                    _: 2
                  }, 1032, ["href", "icon"]);
                }), 128))
              ])) : createCommentVNode("", true),
              oauthProviders.value.length ? (openBlock(), createBlock("div", {
                key: 1,
                class: "my-6 flex items-center gap-3 text-xs text-slate-400"
              }, [
                createVNode("span", { class: "h-px flex-1 bg-slate-200" }),
                createTextVNode(" " + toDisplayString(unref(copy).auth.orContinue) + " ", 1),
                createVNode("span", { class: "h-px flex-1 bg-slate-200" })
              ])) : createCommentVNode("", true),
              createVNode(_component_UForm, {
                state: form,
                class: "space-y-4",
                onSubmit: handleLogin
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
                        size: "lg",
                        class: "w-full",
                        placeholder: unref(copy).auth.emailPlaceholder
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  createVNode(_component_UFormField, {
                    label: unref(copy).auth.password,
                    name: "password",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: form.password,
                        "onUpdate:modelValue": ($event) => form.password = $event,
                        type: "password",
                        autocomplete: "current-password",
                        size: "lg",
                        class: "w-full",
                        placeholder: unref(copy).auth.passwordPlaceholder
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  createVNode("div", { class: "flex justify-end" }, [
                    createVNode(_component_NuxtLink, {
                      to: unref(localePath)("/auth/forgot-password"),
                      class: "text-sm font-semibold text-slate-500 hover:text-blue-600"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(copy).auth.forgotPassword), 1)
                      ]),
                      _: 1
                    }, 8, ["to"])
                  ]),
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
                    disabled: !form.email || !form.password
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(copy).auth.signIn), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled"])
                ]),
                _: 1
              }, 8, ["state"]),
              createVNode("p", { class: "mt-6 text-center text-sm text-slate-500" }, [
                createTextVNode(toDisplayString(unref(copy).auth.noAccount) + " ", 1),
                createVNode(_component_NuxtLink, {
                  to: unref(withRedirect)("/auth/register"),
                  class: "font-bold text-blue-600 hover:text-blue-700"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(copy).auth.createAccount), 1)
                  ]),
                  _: 1
                }, 8, ["to"])
              ]),
              createVNode(_component_CaptchaSlider, {
                ref_key: "captchaRef",
                ref: captchaRef,
                onSuccess: handleCaptchaSuccess
              }, null, 512)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shoply/pages/auth/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
