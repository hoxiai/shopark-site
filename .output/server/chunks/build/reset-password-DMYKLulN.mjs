import __nuxt_component_0 from './ShoplyAuthShell-Du1ST2c8.mjs';
import { D as useLocaleRouter, bg as useSeoMeta, _ as _sfc_main$S, i as _sfc_main$N, v as _sfc_main$l, a as _sfc_main$t, b as _sfc_main$s, N as __nuxt_component_3$4 } from './server.mjs';
import { _ as _sfc_main$1 } from './Form-3sBlM4qD.mjs';
import { defineComponent, computed, reactive, ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, Fragment, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { u as useShoplyConsoleCopy } from './useShoplyConsole-D77xzs3r.mjs';
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
import 'node:child_process';
import 'process';
import 'buffer';
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
    const showPassword = ref(false);
    const showConfirmPassword = ref(false);
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
      const _component_UIcon = _sfc_main$S;
      const _component_UButton = _sfc_main$N;
      const _component_UAlert = _sfc_main$l;
      const _component_UForm = _sfc_main$1;
      const _component_UFormField = _sfc_main$t;
      const _component_UInput = _sfc_main$s;
      const _component_NuxtLink = __nuxt_component_3$4;
      _push(ssrRenderComponent(_component_ShoplyAuthShell, mergeProps({
        title: unref(copy).auth.resetTitle,
        subtitle: unref(copy).auth.resetSubtitle,
        "hero-title": unref(copy).auth.resetTitle,
        "hero-subtitle": unref(copy).auth.resetSubtitle
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (done.value) {
              _push2(`<!--[--><div class="rounded-2xl border border-emerald-200/80 bg-emerald-50/80 p-6 text-center"${_scopeId}><span class="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 shadow-sm"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:check-circle-bold",
                class: "h-7 w-7"
              }, null, _parent2, _scopeId));
              _push2(`</span><p class="mt-4 text-sm font-medium leading-relaxed text-emerald-950"${_scopeId}>${ssrInterpolate(unref(copy).auth.resetDone)}</p></div>`);
              _push2(ssrRenderComponent(_component_UButton, {
                to: unref(localePath)("/auth/login"),
                size: "xl",
                block: "",
                class: "mt-6 rounded-xl bg-blue-600 hover:bg-blue-700 py-3.5 text-base font-bold text-white shadow-lg shadow-blue-600/20 transition-all hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
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
                description: unref(copy).auth.resetInvalid,
                class: "rounded-xl"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UButton, {
                to: unref(localePath)("/auth/forgot-password"),
                size: "xl",
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
                class: "space-y-5",
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
                            type: showPassword.value ? "text" : "password",
                            autocomplete: "new-password",
                            size: "xl",
                            class: "w-full",
                            placeholder: unref(copy).auth.passwordPlaceholder,
                            autofocus: ""
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
                              placeholder: unref(copy).auth.passwordPlaceholder,
                              autofocus: ""
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
                            type: showPassword.value ? "text" : "password",
                            autocomplete: "new-password",
                            size: "xl",
                            class: "w-full",
                            placeholder: unref(copy).auth.passwordPlaceholder,
                            autofocus: ""
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
                createVNode("div", { class: "rounded-2xl border border-emerald-200/80 bg-emerald-50/80 p-6 text-center" }, [
                  createVNode("span", { class: "mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 shadow-sm" }, [
                    createVNode(_component_UIcon, {
                      name: "ph:check-circle-bold",
                      class: "h-7 w-7"
                    })
                  ]),
                  createVNode("p", { class: "mt-4 text-sm font-medium leading-relaxed text-emerald-950" }, toDisplayString(unref(copy).auth.resetDone), 1)
                ]),
                createVNode(_component_UButton, {
                  to: unref(localePath)("/auth/login"),
                  size: "xl",
                  block: "",
                  class: "mt-6 rounded-xl bg-blue-600 hover:bg-blue-700 py-3.5 text-base font-bold text-white shadow-lg shadow-blue-600/20 transition-all hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
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
                  description: unref(copy).auth.resetInvalid,
                  class: "rounded-xl"
                }, null, 8, ["description"]),
                createVNode(_component_UButton, {
                  to: unref(localePath)("/auth/forgot-password"),
                  size: "xl",
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
                  class: "space-y-5",
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
                          type: showPassword.value ? "text" : "password",
                          autocomplete: "new-password",
                          size: "xl",
                          class: "w-full",
                          placeholder: unref(copy).auth.passwordPlaceholder,
                          autofocus: ""
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
//# sourceMappingURL=reset-password-DMYKLulN.mjs.map
