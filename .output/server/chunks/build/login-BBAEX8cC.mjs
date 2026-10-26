import __nuxt_component_0 from './ShoplyAuthShell-2q-qSahQ.mjs';
import { bi as useCustomerAuth, r as useSettings, D as useLocaleRouter, o as navigateTo, bg as useSeoMeta, i as _sfc_main$R, a as _sfc_main$w, b as _sfc_main$v, _ as _sfc_main$W, O as __nuxt_component_3$4, v as _sfc_main$o } from './server.mjs';
import { _ as _sfc_main$1 } from './Form-3sBlM4qD.mjs';
import { _ as __nuxt_component_1 } from './CaptchaSlider-BJqv3jPw.mjs';
import { defineComponent, withAsyncContext, reactive, ref, computed, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
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
    const showPassword = ref(false);
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
      const _component_UButton = _sfc_main$R;
      const _component_UForm = _sfc_main$1;
      const _component_UFormField = _sfc_main$w;
      const _component_UInput = _sfc_main$v;
      const _component_UIcon = _sfc_main$W;
      const _component_NuxtLink = __nuxt_component_3$4;
      const _component_UAlert = _sfc_main$o;
      const _component_CaptchaSlider = __nuxt_component_1;
      _push(ssrRenderComponent(_component_ShoplyAuthShell, mergeProps({
        title: unref(copy).auth.loginTitle,
        subtitle: unref(copy).auth.loginSubtitle,
        "hero-title": unref(copy).auth.loginTitle,
        "hero-subtitle": unref(copy).auth.loginSubtitle
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (oauthProviders.value.length) {
              _push2(`<div class="space-y-4"${_scopeId}><div class="${ssrRenderClass([oauthProviders.value.length > 1 ? "sm:grid-cols-2" : "", "grid gap-3"])}"${_scopeId}><!--[-->`);
              ssrRenderList(oauthProviders.value, (provider) => {
                _push2(ssrRenderComponent(_component_UButton, {
                  key: provider.key,
                  href: provider.href,
                  external: "",
                  color: "neutral",
                  variant: "outline",
                  size: "xl",
                  class: "justify-center rounded-xl font-bold border-slate-200 py-3 shadow-xs hover:border-slate-300 hover:bg-slate-50 transition-all active:scale-[0.99]",
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
              _push2(`<!--]--></div><div class="relative flex items-center justify-center py-1"${_scopeId}><span class="absolute inset-x-0 h-px bg-slate-200/80"${_scopeId}></span><span class="relative bg-white px-3 text-xs font-medium uppercase tracking-wider text-slate-400"${_scopeId}>${ssrInterpolate(unref(copy).auth.orContinue)}</span></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_UForm, {
              state: form,
              class: "space-y-5",
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
                          size: "xl",
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
                            size: "xl",
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
                          type: showPassword.value ? "text" : "password",
                          autocomplete: "current-password",
                          size: "xl",
                          class: "w-full",
                          placeholder: unref(copy).auth.passwordPlaceholder
                        }, {
                          trailing: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<button type="button" tabindex="-1" class="flex items-center text-slate-400 hover:text-slate-600 focus:outline-none transition-colors"${ssrRenderAttr("aria-label", showPassword.value ? "Hide password" : "Show password")}${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_UIcon, {
                                name: showPassword.value ? "ph:eye-slash-bold" : "ph:eye-bold",
                                class: "h-5 w-5"
                              }, null, _parent5, _scopeId4));
                              _push5(`</button>`);
                            } else {
                              return [
                                createVNode("button", {
                                  type: "button",
                                  tabindex: "-1",
                                  class: "flex items-center text-slate-400 hover:text-slate-600 focus:outline-none transition-colors",
                                  "aria-label": showPassword.value ? "Hide password" : "Show password",
                                  onClick: ($event) => showPassword.value = !showPassword.value
                                }, [
                                  createVNode(_component_UIcon, {
                                    name: showPassword.value ? "ph:eye-slash-bold" : "ph:eye-bold",
                                    class: "h-5 w-5"
                                  }, null, 8, ["name"])
                                ], 8, ["aria-label", "onClick"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UInput, {
                            modelValue: form.password,
                            "onUpdate:modelValue": ($event) => form.password = $event,
                            type: showPassword.value ? "text" : "password",
                            autocomplete: "current-password",
                            size: "xl",
                            class: "w-full",
                            placeholder: unref(copy).auth.passwordPlaceholder
                          }, {
                            trailing: withCtx(() => [
                              createVNode("button", {
                                type: "button",
                                tabindex: "-1",
                                class: "flex items-center text-slate-400 hover:text-slate-600 focus:outline-none transition-colors",
                                "aria-label": showPassword.value ? "Hide password" : "Show password",
                                onClick: ($event) => showPassword.value = !showPassword.value
                              }, [
                                createVNode(_component_UIcon, {
                                  name: showPassword.value ? "ph:eye-slash-bold" : "ph:eye-bold",
                                  class: "h-5 w-5"
                                }, null, 8, ["name"])
                              ], 8, ["aria-label", "onClick"])
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue", "type", "placeholder"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex items-center justify-end"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: unref(localePath)("/auth/forgot-password"),
                    class: "text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors"
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
                          size: "xl",
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
                          type: showPassword.value ? "text" : "password",
                          autocomplete: "current-password",
                          size: "xl",
                          class: "w-full",
                          placeholder: unref(copy).auth.passwordPlaceholder
                        }, {
                          trailing: withCtx(() => [
                            createVNode("button", {
                              type: "button",
                              tabindex: "-1",
                              class: "flex items-center text-slate-400 hover:text-slate-600 focus:outline-none transition-colors",
                              "aria-label": showPassword.value ? "Hide password" : "Show password",
                              onClick: ($event) => showPassword.value = !showPassword.value
                            }, [
                              createVNode(_component_UIcon, {
                                name: showPassword.value ? "ph:eye-slash-bold" : "ph:eye-bold",
                                class: "h-5 w-5"
                              }, null, 8, ["name"])
                            ], 8, ["aria-label", "onClick"])
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue", "type", "placeholder"])
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    createVNode("div", { class: "flex items-center justify-end" }, [
                      createVNode(_component_NuxtLink, {
                        to: unref(localePath)("/auth/forgot-password"),
                        class: "text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors"
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
                      description: errorMessage.value,
                      class: "rounded-xl"
                    }, null, 8, ["description"])) : createCommentVNode("", true),
                    createVNode(_component_UButton, {
                      type: "submit",
                      size: "xl",
                      block: "",
                      class: "rounded-xl bg-blue-600 hover:bg-blue-700 py-3.5 text-base font-bold text-white shadow-lg shadow-blue-600/20 transition-all hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 cursor-pointer",
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
            _push2(`<div class="mt-6 text-center text-sm text-slate-500"${_scopeId}><span${_scopeId}>${ssrInterpolate(unref(copy).auth.noAccount)}</span>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(withRedirect)("/auth/register"),
              class: "ml-1.5 font-bold text-blue-600 hover:text-blue-700"
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
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_CaptchaSlider, {
              ref_key: "captchaRef",
              ref: captchaRef,
              onSuccess: handleCaptchaSuccess
            }, null, _parent2, _scopeId));
          } else {
            return [
              oauthProviders.value.length ? (openBlock(), createBlock("div", {
                key: 0,
                class: "space-y-4"
              }, [
                createVNode("div", {
                  class: ["grid gap-3", oauthProviders.value.length > 1 ? "sm:grid-cols-2" : ""]
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(oauthProviders.value, (provider) => {
                    return openBlock(), createBlock(_component_UButton, {
                      key: provider.key,
                      href: provider.href,
                      external: "",
                      color: "neutral",
                      variant: "outline",
                      size: "xl",
                      class: "justify-center rounded-xl font-bold border-slate-200 py-3 shadow-xs hover:border-slate-300 hover:bg-slate-50 transition-all active:scale-[0.99]",
                      icon: provider.icon
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(provider.label), 1)
                      ]),
                      _: 2
                    }, 1032, ["href", "icon"]);
                  }), 128))
                ], 2),
                createVNode("div", { class: "relative flex items-center justify-center py-1" }, [
                  createVNode("span", { class: "absolute inset-x-0 h-px bg-slate-200/80" }),
                  createVNode("span", { class: "relative bg-white px-3 text-xs font-medium uppercase tracking-wider text-slate-400" }, toDisplayString(unref(copy).auth.orContinue), 1)
                ])
              ])) : createCommentVNode("", true),
              createVNode(_component_UForm, {
                state: form,
                class: "space-y-5",
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
                        size: "xl",
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
                        type: showPassword.value ? "text" : "password",
                        autocomplete: "current-password",
                        size: "xl",
                        class: "w-full",
                        placeholder: unref(copy).auth.passwordPlaceholder
                      }, {
                        trailing: withCtx(() => [
                          createVNode("button", {
                            type: "button",
                            tabindex: "-1",
                            class: "flex items-center text-slate-400 hover:text-slate-600 focus:outline-none transition-colors",
                            "aria-label": showPassword.value ? "Hide password" : "Show password",
                            onClick: ($event) => showPassword.value = !showPassword.value
                          }, [
                            createVNode(_component_UIcon, {
                              name: showPassword.value ? "ph:eye-slash-bold" : "ph:eye-bold",
                              class: "h-5 w-5"
                            }, null, 8, ["name"])
                          ], 8, ["aria-label", "onClick"])
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue", "type", "placeholder"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  createVNode("div", { class: "flex items-center justify-end" }, [
                    createVNode(_component_NuxtLink, {
                      to: unref(localePath)("/auth/forgot-password"),
                      class: "text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors"
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
                    description: errorMessage.value,
                    class: "rounded-xl"
                  }, null, 8, ["description"])) : createCommentVNode("", true),
                  createVNode(_component_UButton, {
                    type: "submit",
                    size: "xl",
                    block: "",
                    class: "rounded-xl bg-blue-600 hover:bg-blue-700 py-3.5 text-base font-bold text-white shadow-lg shadow-blue-600/20 transition-all hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 cursor-pointer",
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
              createVNode("div", { class: "mt-6 text-center text-sm text-slate-500" }, [
                createVNode("span", null, toDisplayString(unref(copy).auth.noAccount), 1),
                createVNode(_component_NuxtLink, {
                  to: unref(withRedirect)("/auth/register"),
                  class: "ml-1.5 font-bold text-blue-600 hover:text-blue-700"
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
//# sourceMappingURL=login-BBAEX8cC.mjs.map
