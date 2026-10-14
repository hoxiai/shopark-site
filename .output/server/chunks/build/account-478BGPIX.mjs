import __nuxt_component_0 from './ShoplyConsoleHeader-DroiRVCS.mjs';
import { bi as useCustomerAuth, e as useToast, y as useFetch, bg as useSeoMeta, aE as _sfc_main$Q, i as _sfc_main$N, a as _sfc_main$t, b as _sfc_main$s, _ as _sfc_main$S, k as _sfc_main$I, v as _sfc_main$l } from './server.mjs';
import { _ as _sfc_main$1 } from './Form-3sBlM4qD.mjs';
import { defineComponent, computed, ref, reactive, watch, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useShoplyConsoleCopy, f as formatCopy } from './useShoplyConsole-BQNzlTF_.mjs';
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
  __name: "account",
  __ssrInlineRender: true,
  setup(__props) {
    const { copy } = useShoplyConsoleCopy();
    const { fetchSession } = useCustomerAuth();
    const toast = useToast();
    const readErrorMessage = (error, fallback) => {
      var _a, _b, _c, _d;
      const value = error && typeof error === "object" ? error : {};
      const message = String((_d = (_c = (_a = value.data) == null ? void 0 : _a.message) != null ? _c : (_b = value.data) == null ? void 0 : _b.statusMessage) != null ? _d : "");
      if (message && !message.startsWith("<")) return message;
      return Number(value.statusCode) === 403 ? copy.value.errors.email_unverified : fallback;
    };
    const { data, error: overviewError, refresh } = useFetch(
      "/api/shoply/account/overview",
      {
        server: false,
        lazy: true
      },
      "$xE1P-ynzdw"
      /* nuxt-injected */
    );
    const overview = computed(() => {
      var _a, _b;
      return (_b = (_a = data.value) == null ? void 0 : _a.data) != null ? _b : null;
    });
    const providers = computed(() => {
      var _a, _b;
      return (_b = (_a = overview.value) == null ? void 0 : _a.providers) != null ? _b : [];
    });
    const providerName = (provider) => provider.charAt(0).toUpperCase() + provider.slice(1);
    const providerLabel = computed(() => providers.value.map(providerName).join(" / ") || "OAuth");
    const avatarInput = ref(null);
    const profile = reactive({ nickname: "", avatarUrl: "" });
    const savingProfile = ref(false);
    const uploading = ref(false);
    const profileMessage = ref("");
    watch(overview, (value) => {
      if (!value) return;
      profile.nickname = value.nickname;
      profile.avatarUrl = value.avatarUrl;
    }, { immediate: true });
    const profileChanged = computed(() => Boolean(overview.value) && (profile.nickname.trim() !== overview.value.nickname || profile.avatarUrl !== overview.value.avatarUrl));
    const pickAvatar = () => {
      var _a;
      return (_a = avatarInput.value) == null ? void 0 : _a.click();
    };
    const saveProfile = async () => {
      if (savingProfile.value || !profileChanged.value) return;
      savingProfile.value = true;
      profileMessage.value = "";
      try {
        const result = await $fetch("/api/users/profile", {
          method: "PUT",
          body: { nickname: profile.nickname.trim(), avatarUrl: profile.avatarUrl }
        });
        if ((result == null ? void 0 : result.code) && result.code !== 0) throw new Error(result.message || "");
        profileMessage.value = copy.value.account.saved;
        await Promise.all([refresh(), fetchSession()]);
      } catch (err) {
        toast.add({
          title: readErrorMessage(err, copy.value.account.saveFailed),
          color: "error",
          icon: "ph:warning-circle-bold"
        });
      } finally {
        savingProfile.value = false;
      }
    };
    const emailForm = reactive({ newEmail: "", password: "" });
    const savingEmail = ref(false);
    const resending = ref(false);
    const emailError = ref("");
    const emailMessage = ref("");
    const emailReady = computed(() => emailForm.newEmail.includes("@") && emailForm.password.length > 0);
    const resendVerification = async () => {
      if (resending.value) return;
      resending.value = true;
      try {
        await $fetch("/api/auth/resend-verification", { method: "POST", body: {} });
        toast.add({ title: copy.value.account.resendSent, color: "success", icon: "ph:paper-plane-tilt-bold" });
      } catch (err) {
        toast.add({
          title: readErrorMessage(err, copy.value.account.resendFailed),
          color: "error",
          icon: "ph:warning-circle-bold"
        });
      } finally {
        resending.value = false;
      }
    };
    const changeEmail = async () => {
      if (savingEmail.value || !emailReady.value) return;
      savingEmail.value = true;
      emailError.value = "";
      emailMessage.value = "";
      try {
        const result = await $fetch("/api/users/email", {
          method: "PUT",
          body: { newEmail: emailForm.newEmail.trim().toLowerCase(), password: emailForm.password }
        });
        if ((result == null ? void 0 : result.code) && result.code !== 0) {
          emailError.value = result.message || copy.value.account.updateFailed;
          return;
        }
        emailForm.newEmail = "";
        emailForm.password = "";
        emailMessage.value = copy.value.account.emailUpdated;
        await Promise.all([refresh(), fetchSession()]);
      } catch (err) {
        emailError.value = readErrorMessage(err, copy.value.account.updateFailed);
      } finally {
        savingEmail.value = false;
      }
    };
    const passwordForm = reactive({ oldPassword: "", newPassword: "", confirmPassword: "" });
    const savingPassword = ref(false);
    const passwordError = ref("");
    const passwordMessage = ref("");
    const passwordReady = computed(() => {
      var _a;
      if (((_a = overview.value) == null ? void 0 : _a.hasPassword) && !passwordForm.oldPassword) return false;
      return Boolean(passwordForm.newPassword && passwordForm.confirmPassword);
    });
    const submitPassword = async () => {
      var _a;
      if (savingPassword.value || !passwordReady.value) return;
      passwordError.value = "";
      passwordMessage.value = "";
      if (passwordForm.newPassword.length < MIN_PASSWORD_LENGTH) {
        passwordError.value = copy.value.auth.passwordTooShort;
        return;
      }
      if (passwordForm.newPassword !== passwordForm.confirmPassword) {
        passwordError.value = copy.value.auth.passwordMismatch;
        return;
      }
      savingPassword.value = true;
      try {
        if ((_a = overview.value) == null ? void 0 : _a.hasPassword) {
          const result = await $fetch("/api/users/password", {
            method: "PUT",
            body: { oldPassword: passwordForm.oldPassword, newPassword: passwordForm.newPassword }
          });
          if ((result == null ? void 0 : result.code) && result.code !== 0) {
            passwordError.value = result.message || copy.value.account.updateFailed;
            return;
          }
          passwordMessage.value = copy.value.account.passwordUpdated;
        } else {
          await $fetch("/api/shoply/account/set-password", { method: "POST", body: { password: passwordForm.newPassword } });
          passwordMessage.value = copy.value.account.passwordSet;
        }
        passwordForm.oldPassword = "";
        passwordForm.newPassword = "";
        passwordForm.confirmPassword = "";
        await refresh();
      } catch (err) {
        passwordError.value = readErrorMessage(err, copy.value.account.updateFailed);
      } finally {
        savingPassword.value = false;
      }
    };
    useSeoMeta({
      title: () => copy.value.account.title,
      robots: "noindex, nofollow"
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f;
      const _component_ShoplyConsoleHeader = __nuxt_component_0;
      const _component_UAvatar = _sfc_main$Q;
      const _component_UButton = _sfc_main$N;
      const _component_UFormField = _sfc_main$t;
      const _component_UInput = _sfc_main$s;
      const _component_UIcon = _sfc_main$S;
      const _component_UBadge = _sfc_main$I;
      const _component_UForm = _sfc_main$1;
      const _component_UAlert = _sfc_main$l;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ShoplyConsoleHeader, {
        title: unref(copy).account.title,
        subtitle: unref(copy).account.subtitle
      }, null, _parent));
      if (!overview.value && !unref(overviewError)) {
        _push(`<div class="space-y-6"><!--[-->`);
        ssrRenderList(3, (index) => {
          _push(`<div class="h-56 animate-pulse rounded-3xl border border-slate-200 bg-white"></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!--[--><section class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7"><h2 class="text-base font-black text-slate-900">${ssrInterpolate(unref(copy).account.profileTitle)}</h2><p class="mt-1 text-sm leading-6 text-slate-500">${ssrInterpolate(unref(copy).account.profileDescription)}</p><div class="mt-6 flex flex-col gap-5 sm:flex-row sm:items-start"><div class="flex items-center gap-4">`);
        _push(ssrRenderComponent(_component_UAvatar, {
          src: profile.avatarUrl || void 0,
          alt: profile.nickname,
          size: "xl"
        }, null, _parent));
        _push(`<div>`);
        _push(ssrRenderComponent(_component_UButton, {
          color: "neutral",
          variant: "outline",
          size: "sm",
          class: "rounded-full font-bold",
          icon: "ph:image-square-bold",
          loading: uploading.value,
          onClick: pickAvatar
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(copy).account.avatarAction)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(copy).account.avatarAction), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<p class="mt-2 text-xs text-slate-400">${ssrInterpolate(unref(copy).account.avatarHint)}</p></div><input type="file" accept="image/jpeg,image/png,image/webp,image/gif,image/avif" class="sr-only" tabindex="-1" aria-hidden="true"></div><div class="min-w-0 flex-1">`);
        _push(ssrRenderComponent(_component_UFormField, {
          label: unref(copy).account.nickname,
          name: "nickname"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: profile.nickname,
                "onUpdate:modelValue": ($event) => profile.nickname = $event,
                size: "lg",
                class: "w-full",
                maxlength: 40,
                placeholder: unref(copy).account.nicknamePlaceholder
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UInput, {
                  modelValue: profile.nickname,
                  "onUpdate:modelValue": ($event) => profile.nickname = $event,
                  size: "lg",
                  class: "w-full",
                  maxlength: 40,
                  placeholder: unref(copy).account.nicknamePlaceholder
                }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><div class="mt-6 flex flex-wrap items-center gap-3 border-t border-slate-100 pt-5">`);
        _push(ssrRenderComponent(_component_UButton, {
          class: "rounded-full px-5 font-bold",
          loading: savingProfile.value,
          disabled: !profileChanged.value,
          onClick: saveProfile
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(copy).account.save)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(copy).account.save), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        if (profileMessage.value) {
          _push(`<p class="text-sm font-semibold text-emerald-600">${ssrInterpolate(profileMessage.value)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></section><section class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7"><h2 class="text-base font-black text-slate-900">${ssrInterpolate(unref(copy).account.emailTitle)}</h2><p class="mt-1 text-sm leading-6 text-slate-500">${ssrInterpolate(unref(copy).account.emailDescription)}</p><div class="mt-5 flex flex-wrap items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:envelope-simple-bold",
          class: "h-5 w-5 shrink-0 text-slate-400"
        }, null, _parent));
        _push(`<span class="min-w-0 break-all text-sm font-bold text-slate-900">${ssrInterpolate((_a = overview.value) == null ? void 0 : _a.email)}</span>`);
        _push(ssrRenderComponent(_component_UBadge, {
          color: ((_b = overview.value) == null ? void 0 : _b.emailVerified) ? "success" : "warning",
          variant: "subtle",
          class: "shrink-0"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b2;
            if (_push2) {
              _push2(`${ssrInterpolate(((_a2 = overview.value) == null ? void 0 : _a2.emailVerified) ? unref(copy).account.verified : unref(copy).account.unverified)}`);
            } else {
              return [
                createTextVNode(toDisplayString(((_b2 = overview.value) == null ? void 0 : _b2.emailVerified) ? unref(copy).account.verified : unref(copy).account.unverified), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
        if (!((_c = overview.value) == null ? void 0 : _c.emailVerified)) {
          _push(`<div class="mt-4 flex flex-col gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"><p class="text-sm leading-6 text-amber-800">${ssrInterpolate(unref(copy).account.verifyHint)}</p>`);
          _push(ssrRenderComponent(_component_UButton, {
            color: "warning",
            variant: "soft",
            class: "shrink-0 self-start rounded-full font-bold sm:self-auto",
            icon: "ph:paper-plane-tilt-bold",
            loading: resending.value,
            onClick: resendVerification
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(copy).account.resend)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(copy).account.resend), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if ((_d = overview.value) == null ? void 0 : _d.hasPassword) {
          _push(ssrRenderComponent(_component_UForm, {
            state: emailForm,
            class: "mt-6 space-y-4 border-t border-slate-100 pt-5",
            onSubmit: changeEmail
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="grid gap-4 sm:grid-cols-2"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UFormField, {
                  label: unref(copy).account.newEmail,
                  name: "newEmail",
                  required: ""
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_UInput, {
                        modelValue: emailForm.newEmail,
                        "onUpdate:modelValue": ($event) => emailForm.newEmail = $event,
                        type: "email",
                        autocomplete: "email",
                        size: "lg",
                        class: "w-full",
                        placeholder: unref(copy).auth.emailPlaceholder
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_UInput, {
                          modelValue: emailForm.newEmail,
                          "onUpdate:modelValue": ($event) => emailForm.newEmail = $event,
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
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_UFormField, {
                  label: unref(copy).account.currentPassword,
                  name: "password",
                  required: ""
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_UInput, {
                        modelValue: emailForm.password,
                        "onUpdate:modelValue": ($event) => emailForm.password = $event,
                        type: "password",
                        autocomplete: "current-password",
                        size: "lg",
                        class: "w-full"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_UInput, {
                          modelValue: emailForm.password,
                          "onUpdate:modelValue": ($event) => emailForm.password = $event,
                          type: "password",
                          autocomplete: "current-password",
                          size: "lg",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div>`);
                if (emailError.value) {
                  _push2(ssrRenderComponent(_component_UAlert, {
                    color: "error",
                    variant: "subtle",
                    icon: "ph:warning-circle-bold",
                    description: emailError.value
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<div class="flex flex-wrap items-center gap-3"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UButton, {
                  type: "submit",
                  color: "neutral",
                  variant: "outline",
                  class: "rounded-full font-bold",
                  loading: savingEmail.value,
                  disabled: !emailReady.value
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(unref(copy).account.changeEmail)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(unref(copy).account.changeEmail), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                if (emailMessage.value) {
                  _push2(`<p class="text-sm font-semibold text-emerald-600"${_scopeId}>${ssrInterpolate(emailMessage.value)}</p>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              } else {
                return [
                  createVNode("div", { class: "grid gap-4 sm:grid-cols-2" }, [
                    createVNode(_component_UFormField, {
                      label: unref(copy).account.newEmail,
                      name: "newEmail",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: emailForm.newEmail,
                          "onUpdate:modelValue": ($event) => emailForm.newEmail = $event,
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
                      label: unref(copy).account.currentPassword,
                      name: "password",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: emailForm.password,
                          "onUpdate:modelValue": ($event) => emailForm.password = $event,
                          type: "password",
                          autocomplete: "current-password",
                          size: "lg",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }, 8, ["label"])
                  ]),
                  emailError.value ? (openBlock(), createBlock(_component_UAlert, {
                    key: 0,
                    color: "error",
                    variant: "subtle",
                    icon: "ph:warning-circle-bold",
                    description: emailError.value
                  }, null, 8, ["description"])) : createCommentVNode("", true),
                  createVNode("div", { class: "flex flex-wrap items-center gap-3" }, [
                    createVNode(_component_UButton, {
                      type: "submit",
                      color: "neutral",
                      variant: "outline",
                      class: "rounded-full font-bold",
                      loading: savingEmail.value,
                      disabled: !emailReady.value
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(copy).account.changeEmail), 1)
                      ]),
                      _: 1
                    }, 8, ["loading", "disabled"]),
                    emailMessage.value ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "text-sm font-semibold text-emerald-600"
                    }, toDisplayString(emailMessage.value), 1)) : createCommentVNode("", true)
                  ])
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</section><section class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7"><h2 class="text-base font-black text-slate-900">${ssrInterpolate(((_e = overview.value) == null ? void 0 : _e.hasPassword) ? unref(copy).account.passwordTitle : unref(copy).account.setPasswordTitle)}</h2><p class="mt-1 text-sm leading-6 text-slate-500">${ssrInterpolate(((_f = overview.value) == null ? void 0 : _f.hasPassword) ? unref(copy).account.passwordDescription : unref(formatCopy)(unref(copy).account.setPasswordDescription, { provider: providerLabel.value }))}</p>`);
        _push(ssrRenderComponent(_component_UForm, {
          state: passwordForm,
          class: "mt-6 space-y-4",
          onSubmit: submitPassword
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b2;
            if (_push2) {
              if ((_a2 = overview.value) == null ? void 0 : _a2.hasPassword) {
                _push2(ssrRenderComponent(_component_UFormField, {
                  label: unref(copy).account.currentPassword,
                  name: "oldPassword",
                  required: ""
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_UInput, {
                        modelValue: passwordForm.oldPassword,
                        "onUpdate:modelValue": ($event) => passwordForm.oldPassword = $event,
                        type: "password",
                        autocomplete: "current-password",
                        size: "lg",
                        class: "w-full sm:max-w-md"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_UInput, {
                          modelValue: passwordForm.oldPassword,
                          "onUpdate:modelValue": ($event) => passwordForm.oldPassword = $event,
                          type: "password",
                          autocomplete: "current-password",
                          size: "lg",
                          class: "w-full sm:max-w-md"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="grid gap-4 sm:grid-cols-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: unref(copy).account.newPassword,
                name: "newPassword",
                hint: unref(copy).auth.passwordHint,
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: passwordForm.newPassword,
                      "onUpdate:modelValue": ($event) => passwordForm.newPassword = $event,
                      type: "password",
                      autocomplete: "new-password",
                      size: "lg",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: passwordForm.newPassword,
                        "onUpdate:modelValue": ($event) => passwordForm.newPassword = $event,
                        type: "password",
                        autocomplete: "new-password",
                        size: "lg",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, {
                label: unref(copy).account.confirmPassword,
                name: "confirmPassword",
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: passwordForm.confirmPassword,
                      "onUpdate:modelValue": ($event) => passwordForm.confirmPassword = $event,
                      type: "password",
                      autocomplete: "new-password",
                      size: "lg",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: passwordForm.confirmPassword,
                        "onUpdate:modelValue": ($event) => passwordForm.confirmPassword = $event,
                        type: "password",
                        autocomplete: "new-password",
                        size: "lg",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
              if (passwordError.value) {
                _push2(ssrRenderComponent(_component_UAlert, {
                  color: "error",
                  variant: "subtle",
                  icon: "ph:warning-circle-bold",
                  description: passwordError.value
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="flex flex-wrap items-center gap-3"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UButton, {
                type: "submit",
                class: "rounded-full px-5 font-bold",
                loading: savingPassword.value,
                disabled: !passwordReady.value
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a3, _b3;
                  if (_push3) {
                    _push3(`${ssrInterpolate(((_a3 = overview.value) == null ? void 0 : _a3.hasPassword) ? unref(copy).account.updatePassword : unref(copy).account.setPassword)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(((_b3 = overview.value) == null ? void 0 : _b3.hasPassword) ? unref(copy).account.updatePassword : unref(copy).account.setPassword), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              if (passwordMessage.value) {
                _push2(`<p class="text-sm font-semibold text-emerald-600"${_scopeId}>${ssrInterpolate(passwordMessage.value)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              return [
                ((_b2 = overview.value) == null ? void 0 : _b2.hasPassword) ? (openBlock(), createBlock(_component_UFormField, {
                  key: 0,
                  label: unref(copy).account.currentPassword,
                  name: "oldPassword",
                  required: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      modelValue: passwordForm.oldPassword,
                      "onUpdate:modelValue": ($event) => passwordForm.oldPassword = $event,
                      type: "password",
                      autocomplete: "current-password",
                      size: "lg",
                      class: "w-full sm:max-w-md"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"])) : createCommentVNode("", true),
                createVNode("div", { class: "grid gap-4 sm:grid-cols-2" }, [
                  createVNode(_component_UFormField, {
                    label: unref(copy).account.newPassword,
                    name: "newPassword",
                    hint: unref(copy).auth.passwordHint,
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: passwordForm.newPassword,
                        "onUpdate:modelValue": ($event) => passwordForm.newPassword = $event,
                        type: "password",
                        autocomplete: "new-password",
                        size: "lg",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }, 8, ["label", "hint"]),
                  createVNode(_component_UFormField, {
                    label: unref(copy).account.confirmPassword,
                    name: "confirmPassword",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: passwordForm.confirmPassword,
                        "onUpdate:modelValue": ($event) => passwordForm.confirmPassword = $event,
                        type: "password",
                        autocomplete: "new-password",
                        size: "lg",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }, 8, ["label"])
                ]),
                passwordError.value ? (openBlock(), createBlock(_component_UAlert, {
                  key: 1,
                  color: "error",
                  variant: "subtle",
                  icon: "ph:warning-circle-bold",
                  description: passwordError.value
                }, null, 8, ["description"])) : createCommentVNode("", true),
                createVNode("div", { class: "flex flex-wrap items-center gap-3" }, [
                  createVNode(_component_UButton, {
                    type: "submit",
                    class: "rounded-full px-5 font-bold",
                    loading: savingPassword.value,
                    disabled: !passwordReady.value
                  }, {
                    default: withCtx(() => {
                      var _a3;
                      return [
                        createTextVNode(toDisplayString(((_a3 = overview.value) == null ? void 0 : _a3.hasPassword) ? unref(copy).account.updatePassword : unref(copy).account.setPassword), 1)
                      ];
                    }),
                    _: 1
                  }, 8, ["loading", "disabled"]),
                  passwordMessage.value ? (openBlock(), createBlock("p", {
                    key: 0,
                    class: "text-sm font-semibold text-emerald-600"
                  }, toDisplayString(passwordMessage.value), 1)) : createCommentVNode("", true)
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        if (providers.value.length) {
          _push(`<p class="mt-5 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-5 text-sm text-slate-500">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:link-simple-bold",
            class: "h-4 w-4 shrink-0"
          }, null, _parent));
          _push(`<span>${ssrInterpolate(unref(copy).account.linkedAccounts)}:</span><!--[-->`);
          ssrRenderList(providers.value, (provider) => {
            _push(ssrRenderComponent(_component_UBadge, {
              key: provider,
              color: "neutral",
              variant: "soft"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(providerName(provider))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(providerName(provider)), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          });
          _push(`<!--]--></p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</section><!--]-->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shoply/pages/user/account.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=account-478BGPIX.mjs.map
