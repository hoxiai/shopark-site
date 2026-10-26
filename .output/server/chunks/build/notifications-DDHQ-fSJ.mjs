import __nuxt_component_0 from './ShoplyConsoleHeader-DroiRVCS.mjs';
import { D as useLocaleRouter, d as useFormatTime, x as usePagination, y as useFetch, bg as useSeoMeta, i as _sfc_main$R, _ as _sfc_main$W, k as _sfc_main$M, z as _sfc_main$y } from './server.mjs';
import { defineComponent, ref, withAsyncContext, computed, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { u as useNotificationState } from './useNotificationState-CKG5uYoC.mjs';
import { u as useShoplyConsoleCopy } from './useShoplyConsole-qBrGWuE8.mjs';
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
  __name: "notifications",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { copy } = useShoplyConsoleCopy();
    useLocaleRouter();
    const { formatDate } = useFormatTime();
    const { page, pageSize: pageCount, onPageChange } = usePagination(20);
    const {
      unreadCount,
      markAllNotificationsRead,
      deleteNotification,
      clearAllNotifications
    } = useNotificationState();
    const clearing = ref(false);
    const { data, pending, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/users/notifications",
      {
        query: computed(() => ({ page: page.value, pageSize: pageCount.value }))
      },
      "$6GTN-74bXq"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const notifications = computed(() => {
      var _a;
      return ((_a = data.value) == null ? void 0 : _a.data) || [];
    });
    const totalItems = computed(() => {
      var _a;
      return ((_a = data.value) == null ? void 0 : _a.total) || 0;
    });
    const getIconName = (type) => {
      switch (type) {
        case "order":
          return "ph:shopping-bag-bold";
        case "subscription":
          return "ph:crown-simple-bold";
        case "security":
          return "ph:shield-check-bold";
        default:
          return "ph:bell-bold";
      }
    };
    const markAllRead = async () => {
      await markAllNotificationsRead();
      await refresh();
    };
    const handleDelete = async (item) => {
      await deleteNotification(item.id);
      await refresh();
    };
    const confirmClearAll = async () => {
      clearing.value = true;
      try {
        await clearAllNotifications();
        page.value = 1;
        await refresh();
      } finally {
        clearing.value = false;
      }
    };
    useSeoMeta({
      title: () => copy.value.notifications.title,
      robots: "noindex, nofollow"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ShoplyConsoleHeader = __nuxt_component_0;
      const _component_UButton = _sfc_main$R;
      const _component_UIcon = _sfc_main$W;
      const _component_UBadge = _sfc_main$M;
      const _component_UPagination = _sfc_main$y;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ShoplyConsoleHeader, {
        title: unref(copy).notifications.title,
        subtitle: unref(copy).notifications.subtitle
      }, {
        actions: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-wrap items-center gap-2"${_scopeId}>`);
            if (unref(unreadCount) > 0) {
              _push2(ssrRenderComponent(_component_UButton, {
                color: "neutral",
                variant: "outline",
                class: "rounded-full font-bold",
                icon: "ph:checks-bold",
                onClick: markAllRead
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(copy).notifications.markAllRead)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(copy).notifications.markAllRead), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (notifications.value.length > 0) {
              _push2(ssrRenderComponent(_component_UButton, {
                color: "error",
                variant: "soft",
                class: "rounded-full font-bold",
                icon: "ph:trash-bold",
                loading: clearing.value,
                onClick: confirmClearAll
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(copy).notifications.clearAll)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(copy).notifications.clearAll), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-wrap items-center gap-2" }, [
                unref(unreadCount) > 0 ? (openBlock(), createBlock(_component_UButton, {
                  key: 0,
                  color: "neutral",
                  variant: "outline",
                  class: "rounded-full font-bold",
                  icon: "ph:checks-bold",
                  onClick: markAllRead
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(copy).notifications.markAllRead), 1)
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                notifications.value.length > 0 ? (openBlock(), createBlock(_component_UButton, {
                  key: 1,
                  color: "error",
                  variant: "soft",
                  class: "rounded-full font-bold",
                  icon: "ph:trash-bold",
                  loading: clearing.value,
                  onClick: confirmClearAll
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(copy).notifications.clearAll), 1)
                  ]),
                  _: 1
                }, 8, ["loading"])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section class="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">`);
      if (unref(pending)) {
        _push(`<div class="space-y-3 p-6"><!--[-->`);
        ssrRenderList(4, (i) => {
          _push(`<div class="h-16 animate-pulse rounded-2xl bg-slate-50"></div>`);
        });
        _push(`<!--]--></div>`);
      } else if (!notifications.value.length) {
        _push(`<div class="flex flex-col items-center justify-center px-6 py-16 text-center"><span class="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:bell-duotone",
          class: "h-7 w-7"
        }, null, _parent));
        _push(`</span><h2 class="mt-4 text-base font-black text-slate-900">${ssrInterpolate(unref(copy).notifications.emptyTitle)}</h2><p class="mt-1.5 max-w-md text-sm text-slate-500">${ssrInterpolate(unref(copy).notifications.emptyDesc)}</p></div>`);
      } else {
        _push(`<ul class="divide-y divide-slate-100"><!--[-->`);
        ssrRenderList(notifications.value, (item) => {
          _push(`<li class="${ssrRenderClass([{ "bg-blue-50/30": !item.isRead }, "flex cursor-pointer items-start justify-between gap-4 p-5 transition-colors hover:bg-slate-50/80 sm:px-6"])}"><div class="flex min-w-0 flex-1 items-start gap-3.5"><span class="${ssrRenderClass([!item.isRead ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-500", "mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl"])}">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: getIconName(item.type),
            class: "h-5 w-5"
          }, null, _parent));
          _push(`</span><div class="min-w-0 flex-1"><div class="flex flex-wrap items-center gap-2"><p class="text-sm font-bold text-slate-900">${ssrInterpolate(item.title)}</p>`);
          if (!item.isRead) {
            _push(ssrRenderComponent(_component_UBadge, {
              color: "primary",
              variant: "solid",
              size: "xs"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(unref(copy).notifications.unreadBadge)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(copy).notifications.unreadBadge), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div><p class="mt-1 text-sm leading-relaxed text-slate-600">${ssrInterpolate(item.message)}</p><p class="mt-1.5 text-xs text-slate-400">${ssrInterpolate(unref(formatDate)(item.createdAt))}</p></div></div><div class="shrink-0">`);
          _push(ssrRenderComponent(_component_UButton, {
            color: "neutral",
            variant: "ghost",
            size: "xs",
            icon: "ph:trash-bold",
            class: "rounded-full text-slate-400 hover:text-rose-600",
            title: unref(copy).notifications.deleteItem,
            onClick: ($event) => handleDelete(item)
          }, null, _parent));
          _push(`</div></li>`);
        });
        _push(`<!--]--></ul>`);
      }
      if (totalItems.value > unref(pageCount)) {
        _push(`<div class="flex items-center justify-end border-t border-slate-100 px-6 py-4">`);
        _push(ssrRenderComponent(_component_UPagination, {
          page: unref(page),
          "onUpdate:page": [($event) => isRef(page) ? page.value = $event : null, (value) => unref(onPageChange)(value, unref(refresh))],
          "items-per-page": unref(pageCount),
          total: totalItems.value
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shoply/pages/user/notifications.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=notifications-DDHQ-fSJ.mjs.map
