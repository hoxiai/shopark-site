import __nuxt_component_0 from './ShoparkAuthShell-dFmK6Na8.mjs';
import { _ as _sfc_main$1 } from './Form-3sBlM4qD.mjs';
import { bi as useCustomerAuth, D as useLocaleRouter, e as useToast, o as navigateTo, bg as useSeoMeta, a as _sfc_main$w, b as _sfc_main$v, _ as _sfc_main$W, v as _sfc_main$o, i as _sfc_main$R, O as __nuxt_component_3$4 } from './server.mjs';
import { defineComponent, withAsyncContext, reactive, ref, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { u as useShoparkAuthRedirect } from './useShoparkAuthRedirect-CpJ917pf.mjs';
import { u as useShoparkConsoleCopy } from './useShoparkConsole-R5T7lfU2.mjs';
import './useShoparkLogo-CWqcFbLY.mjs';
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
import 'node:zlib';
import 'ioredis';
import 'jose';
import 'node:child_process';
import 'process';
import 'buffer';
import 'node:dns/promises';
import 'node:net';
import 'node:fs/promises';
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

const MIN_PASSWORD_LENGTH = 8;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "register",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { copy } = useShoparkConsoleCopy();
    const { register, loggedIn } = useCustomerAuth();
    const { localePath } = useLocaleRouter();
    const { redirectPath, withRedirect } = useShoparkAuthRedirect();
    const toast = useToast();
    if (loggedIn.value) [__temp, __restore] = withAsyncContext(() => navigateTo(redirectPath.value, { replace: true })), await __temp, __restore();
    const form = reactive({ nickname: "", email: "", password: "", confirmPassword: "" });
    const showPassword = ref(false);
    const showConfirmPassword = ref(false);
    const loading = ref(false);
    const errorMessage = ref("");
    const handleRegister = async () => {
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
        await register({ email: form.email.trim(), password: form.password, nickname: form.nickname.trim() || void 0 });
        toast.add({ title: copy.value.auth.registered, color: "success", icon: "ph:envelope-simple-bold" });
        await navigateTo(redirectPath.value, { replace: true });
      } catch (err) {
        const error = err && typeof err === "object" ? err : {};
        errorMessage.value = error.message || error.statusMessage || copy.value.auth.registerFailed;
      } finally {
        loading.value = false;
      }
    };
    useSeoMeta({
      title: () => copy.value.auth.seoRegisterTitle,
      description: () => copy.value.auth.seoRegisterDescription,
      robots: "noindex, nofollow"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ShoparkAuthShell = __nuxt_component_0;
      const _component_UForm = _sfc_main$1;
      const _component_UFormField = _sfc_main$w;
      const _component_UInput = _sfc_main$v;
      const _component_UIcon = _sfc_main$W;
      const _component_UAlert = _sfc_main$o;
      const _component_UButton = _sfc_main$R;
      const _component_NuxtLink = __nuxt_component_3$4;
      _push(ssrRenderComponent(_component_ShoparkAuthShell, mergeProps({
        title: unref(copy).auth.registerTitle,
        subtitle: unref(copy).auth.registerSubtitle,
        "hero-title": unref(copy).auth.registerTitle,
        "hero-subtitle": unref(copy).auth.registerSubtitle
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UForm, {
              state: form,
              class: "space-y-5",
              onSubmit: handleRegister
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UFormField, {
                    label: unref(copy).auth.nickname,
                    name: "nickname"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UInput, {
                          modelValue: form.nickname,
                          "onUpdate:modelValue": ($event) => form.nickname = $event,
                          autocomplete: "nickname",
                          size: "xl",
                          class: "w-full",
                          maxlength: 40,
                          placeholder: unref(copy).auth.nicknamePlaceholder
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UInput, {
                            modelValue: form.nickname,
                            "onUpdate:modelValue": ($event) => form.nickname = $event,
                            autocomplete: "nickname",
                            size: "xl",
                            class: "w-full",
                            maxlength: 40,
                            placeholder: unref(copy).auth.nicknamePlaceholder
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
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
                    hint: unref(copy).auth.passwordHint,
                    required: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UInput, {
                          modelValue: form.password,
                          "onUpdate:modelValue": ($event) => form.password = $event,
                          type: showPassword.value ? "text" : "password",
                          autocomplete: "new-password",
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
                            autocomplete: "new-password",
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
                          type: showConfirmPassword.value ? "text" : "password",
                          autocomplete: "new-password",
                          size: "xl",
                          class: "w-full",
                          placeholder: unref(copy).auth.confirmPassword
                        }, {
                          trailing: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<button type="button" tabindex="-1" class="flex items-center text-slate-400 hover:text-slate-600 focus:outline-none transition-colors"${ssrRenderAttr("aria-label", showConfirmPassword.value ? "Hide password" : "Show password")}${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_UIcon, {
                                name: showConfirmPassword.value ? "ph:eye-slash-bold" : "ph:eye-bold",
                                class: "h-5 w-5"
                              }, null, _parent5, _scopeId4));
                              _push5(`</button>`);
                            } else {
                              return [
                                createVNode("button", {
                                  type: "button",
                                  tabindex: "-1",
                                  class: "flex items-center text-slate-400 hover:text-slate-600 focus:outline-none transition-colors",
                                  "aria-label": showConfirmPassword.value ? "Hide password" : "Show password",
                                  onClick: ($event) => showConfirmPassword.value = !showConfirmPassword.value
                                }, [
                                  createVNode(_component_UIcon, {
                                    name: showConfirmPassword.value ? "ph:eye-slash-bold" : "ph:eye-bold",
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
                            modelValue: form.confirmPassword,
                            "onUpdate:modelValue": ($event) => form.confirmPassword = $event,
                            type: showConfirmPassword.value ? "text" : "password",
                            autocomplete: "new-password",
                            size: "xl",
                            class: "w-full",
                            placeholder: unref(copy).auth.confirmPassword
                          }, {
                            trailing: withCtx(() => [
                              createVNode("button", {
                                type: "button",
                                tabindex: "-1",
                                class: "flex items-center text-slate-400 hover:text-slate-600 focus:outline-none transition-colors",
                                "aria-label": showConfirmPassword.value ? "Hide password" : "Show password",
                                onClick: ($event) => showConfirmPassword.value = !showConfirmPassword.value
                              }, [
                                createVNode(_component_UIcon, {
                                  name: showConfirmPassword.value ? "ph:eye-slash-bold" : "ph:eye-bold",
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
                    disabled: !form.email || !form.password || !form.confirmPassword
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(copy).auth.register)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(copy).auth.register), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<p class="pt-1 text-center text-xs leading-5 text-slate-500"${_scopeId2}>${ssrInterpolate(unref(copy).auth.agreePrefix)} `);
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: unref(localePath)("/page/terms"),
                    class: "font-semibold text-blue-600 hover:underline"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(copy).auth.terms)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(copy).auth.terms), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(` ${ssrInterpolate(unref(copy).auth.and)} `);
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: unref(localePath)("/page/privacy"),
                    class: "font-semibold text-blue-600 hover:underline"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(copy).auth.privacy)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(copy).auth.privacy), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</p>`);
                } else {
                  return [
                    createVNode(_component_UFormField, {
                      label: unref(copy).auth.nickname,
                      name: "nickname"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: form.nickname,
                          "onUpdate:modelValue": ($event) => form.nickname = $event,
                          autocomplete: "nickname",
                          size: "xl",
                          class: "w-full",
                          maxlength: 40,
                          placeholder: unref(copy).auth.nicknamePlaceholder
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                      ]),
                      _: 1
                    }, 8, ["label"]),
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
                      hint: unref(copy).auth.passwordHint,
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: form.password,
                          "onUpdate:modelValue": ($event) => form.password = $event,
                          type: showPassword.value ? "text" : "password",
                          autocomplete: "new-password",
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
                          type: showConfirmPassword.value ? "text" : "password",
                          autocomplete: "new-password",
                          size: "xl",
                          class: "w-full",
                          placeholder: unref(copy).auth.confirmPassword
                        }, {
                          trailing: withCtx(() => [
                            createVNode("button", {
                              type: "button",
                              tabindex: "-1",
                              class: "flex items-center text-slate-400 hover:text-slate-600 focus:outline-none transition-colors",
                              "aria-label": showConfirmPassword.value ? "Hide password" : "Show password",
                              onClick: ($event) => showConfirmPassword.value = !showConfirmPassword.value
                            }, [
                              createVNode(_component_UIcon, {
                                name: showConfirmPassword.value ? "ph:eye-slash-bold" : "ph:eye-bold",
                                class: "h-5 w-5"
                              }, null, 8, ["name"])
                            ], 8, ["aria-label", "onClick"])
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue", "type", "placeholder"])
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
                      disabled: !form.email || !form.password || !form.confirmPassword
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(copy).auth.register), 1)
                      ]),
                      _: 1
                    }, 8, ["loading", "disabled"]),
                    createVNode("p", { class: "pt-1 text-center text-xs leading-5 text-slate-500" }, [
                      createTextVNode(toDisplayString(unref(copy).auth.agreePrefix) + " ", 1),
                      createVNode(_component_NuxtLink, {
                        to: unref(localePath)("/page/terms"),
                        class: "font-semibold text-blue-600 hover:underline"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(copy).auth.terms), 1)
                        ]),
                        _: 1
                      }, 8, ["to"]),
                      createTextVNode(" " + toDisplayString(unref(copy).auth.and) + " ", 1),
                      createVNode(_component_NuxtLink, {
                        to: unref(localePath)("/page/privacy"),
                        class: "font-semibold text-blue-600 hover:underline"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(copy).auth.privacy), 1)
                        ]),
                        _: 1
                      }, 8, ["to"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mt-6 text-center text-sm text-slate-500"${_scopeId}><span${_scopeId}>${ssrInterpolate(unref(copy).auth.haveAccount)}</span>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(withRedirect)("/auth/login"),
              class: "ml-1.5 font-bold text-blue-600 hover:text-blue-700"
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
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_UForm, {
                state: form,
                class: "space-y-5",
                onSubmit: handleRegister
              }, {
                default: withCtx(() => [
                  createVNode(_component_UFormField, {
                    label: unref(copy).auth.nickname,
                    name: "nickname"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: form.nickname,
                        "onUpdate:modelValue": ($event) => form.nickname = $event,
                        autocomplete: "nickname",
                        size: "xl",
                        class: "w-full",
                        maxlength: 40,
                        placeholder: unref(copy).auth.nicknamePlaceholder
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
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
                    hint: unref(copy).auth.passwordHint,
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: form.password,
                        "onUpdate:modelValue": ($event) => form.password = $event,
                        type: showPassword.value ? "text" : "password",
                        autocomplete: "new-password",
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
                        type: showConfirmPassword.value ? "text" : "password",
                        autocomplete: "new-password",
                        size: "xl",
                        class: "w-full",
                        placeholder: unref(copy).auth.confirmPassword
                      }, {
                        trailing: withCtx(() => [
                          createVNode("button", {
                            type: "button",
                            tabindex: "-1",
                            class: "flex items-center text-slate-400 hover:text-slate-600 focus:outline-none transition-colors",
                            "aria-label": showConfirmPassword.value ? "Hide password" : "Show password",
                            onClick: ($event) => showConfirmPassword.value = !showConfirmPassword.value
                          }, [
                            createVNode(_component_UIcon, {
                              name: showConfirmPassword.value ? "ph:eye-slash-bold" : "ph:eye-bold",
                              class: "h-5 w-5"
                            }, null, 8, ["name"])
                          ], 8, ["aria-label", "onClick"])
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue", "type", "placeholder"])
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
                    disabled: !form.email || !form.password || !form.confirmPassword
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(copy).auth.register), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled"]),
                  createVNode("p", { class: "pt-1 text-center text-xs leading-5 text-slate-500" }, [
                    createTextVNode(toDisplayString(unref(copy).auth.agreePrefix) + " ", 1),
                    createVNode(_component_NuxtLink, {
                      to: unref(localePath)("/page/terms"),
                      class: "font-semibold text-blue-600 hover:underline"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(copy).auth.terms), 1)
                      ]),
                      _: 1
                    }, 8, ["to"]),
                    createTextVNode(" " + toDisplayString(unref(copy).auth.and) + " ", 1),
                    createVNode(_component_NuxtLink, {
                      to: unref(localePath)("/page/privacy"),
                      class: "font-semibold text-blue-600 hover:underline"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(copy).auth.privacy), 1)
                      ]),
                      _: 1
                    }, 8, ["to"])
                  ])
                ]),
                _: 1
              }, 8, ["state"]),
              createVNode("div", { class: "mt-6 text-center text-sm text-slate-500" }, [
                createVNode("span", null, toDisplayString(unref(copy).auth.haveAccount), 1),
                createVNode(_component_NuxtLink, {
                  to: unref(withRedirect)("/auth/login"),
                  class: "ml-1.5 font-bold text-blue-600 hover:text-blue-700"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(copy).auth.signIn), 1)
                  ]),
                  _: 1
                }, 8, ["to"])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shopark/pages/auth/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=register-Cvy9eXdq.mjs.map
