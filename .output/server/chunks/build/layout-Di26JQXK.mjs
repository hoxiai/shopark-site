import { D as useLocaleRouter, bi as useCustomerAuth, N as stripLocalePrefix, aE as _sfc_main$U, O as __nuxt_component_3$4, _ as _sfc_main$W } from './server.mjs';
import { defineComponent, computed, ref, mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderSlot, ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { u as useNotificationState } from './useNotificationState-CKG5uYoC.mjs';
import { u as useShoparkConsoleCopy } from './useShoparkConsole-R5T7lfU2.mjs';
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

const persistentDirectoryLayout = true;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "layout",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const { localePath } = useLocaleRouter();
    const { user } = useCustomerAuth();
    const { unreadCount } = useNotificationState();
    const { copy } = useShoparkConsoleCopy();
    const isBare = computed(() => stripLocalePrefix(route.path).startsWith("/user/invoice/"));
    const navItems = computed(() => [
      { to: "/user/dashboard", label: copy.value.nav.dashboard, icon: "ph:squares-four-bold", badge: 0 },
      { to: "/user/stores", label: copy.value.nav.stores, icon: "ph:storefront-bold", badge: 0 },
      { to: "/user/subscription", label: copy.value.nav.subscription, icon: "ph:crown-simple-bold", badge: 0 },
      { to: "/user/orders", label: copy.value.nav.orders, icon: "ph:receipt-bold", badge: 0 },
      { to: "/user/tickets", label: copy.value.nav.tickets, icon: "ph:lifebuoy-bold", badge: 0 },
      { to: "/user/notifications", label: copy.value.nav.notifications, icon: "ph:bell-bold", badge: Number(unreadCount.value || 0) },
      { to: "/user/account", label: copy.value.nav.account, icon: "ph:user-circle-bold", badge: 0 }
    ]);
    const isActive = (path) => {
      const target = localePath(path);
      return route.path === target || route.path.startsWith(`${target}/`);
    };
    const userEmail = computed(() => {
      var _a;
      return String(((_a = user.value) == null ? void 0 : _a.email) || "");
    });
    const userLabel = computed(() => {
      var _a, _b;
      return String(((_a = user.value) == null ? void 0 : _a.nickname) || ((_b = user.value) == null ? void 0 : _b.nickName) || userEmail.value.split("@")[0] || copy.value.common.guest);
    });
    const userAvatar = computed(() => {
      var _a, _b;
      return String(((_a = user.value) == null ? void 0 : _a.avatarUrl) || ((_b = user.value) == null ? void 0 : _b.avatar) || "") || void 0;
    });
    const signingOut = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UAvatar = _sfc_main$U;
      const _component_NuxtLink = __nuxt_component_3$4;
      const _component_UIcon = _sfc_main$W;
      if (isBare.value) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-[calc(100vh-80px)] bg-slate-50" }, _attrs))}><div class="mx-auto grid max-w-[1440px] gap-6 px-4 py-6 sm:px-8 sm:py-8 lg:grid-cols-[248px_minmax(0,1fr)] lg:gap-8 lg:px-12"><aside class="min-w-0 lg:sticky lg:top-28 lg:self-start"><div class="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm"><div class="flex items-center gap-3 rounded-2xl bg-slate-50 p-3">`);
        _push(ssrRenderComponent(_component_UAvatar, {
          src: userAvatar.value,
          alt: userLabel.value,
          size: "md"
        }, null, _parent));
        _push(`<div class="min-w-0"><p class="truncate text-sm font-bold text-slate-900">${ssrInterpolate(userLabel.value)}</p><p class="truncate text-xs text-slate-500">${ssrInterpolate(userEmail.value)}</p></div></div><nav class="mt-4 flex gap-1 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0"${ssrRenderAttr("aria-label", unref(copy).nav.menu)}><!--[-->`);
        ssrRenderList(navItems.value, (item) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: item.to,
            to: unref(localePath)(item.to),
            class: ["flex shrink-0 items-center justify-between gap-2.5 rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors", isActive(item.to) ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"],
            "aria-current": isActive(item.to) ? "page" : void 0
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span class="flex items-center gap-2.5"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: item.icon,
                  class: "h-5 w-5 shrink-0"
                }, null, _parent2, _scopeId));
                _push2(`<span${_scopeId}>${ssrInterpolate(item.label)}</span></span>`);
                if (item.badge && item.badge > 0) {
                  _push2(`<span class="rounded-full bg-blue-600 px-2 py-0.5 text-[10px] font-bold text-white"${_scopeId}>${ssrInterpolate(item.badge > 99 ? "99+" : item.badge)}</span>`);
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  createVNode("span", { class: "flex items-center gap-2.5" }, [
                    createVNode(_component_UIcon, {
                      name: item.icon,
                      class: "h-5 w-5 shrink-0"
                    }, null, 8, ["name"]),
                    createVNode("span", null, toDisplayString(item.label), 1)
                  ]),
                  item.badge && item.badge > 0 ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "rounded-full bg-blue-600 px-2 py-0.5 text-[10px] font-bold text-white"
                  }, toDisplayString(item.badge > 99 ? "99+" : item.badge), 1)) : createCommentVNode("", true)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></nav><div class="mt-4 hidden border-t border-slate-100 pt-4 lg:block"><button type="button" class="flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-500 transition-colors hover:bg-rose-50 hover:text-rose-600"${ssrIncludeBooleanAttr(signingOut.value) ? " disabled" : ""}>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:sign-out-bold",
          class: "h-5 w-5"
        }, null, _parent));
        _push(`<span>${ssrInterpolate(unref(copy).nav.signOut)}</span></button></div></div></aside><main class="min-w-0 space-y-6">`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`<button type="button" class="flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-500 lg:hidden"${ssrIncludeBooleanAttr(signingOut.value) ? " disabled" : ""}>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:sign-out-bold",
          class: "h-4 w-4"
        }, null, _parent));
        _push(` ${ssrInterpolate(unref(copy).nav.signOut)}</button></main></div></div>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shopark/pages/user/layout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default, persistentDirectoryLayout };
//# sourceMappingURL=layout-Di26JQXK.mjs.map
