import __nuxt_component_0 from './ShoplyConsoleHeader-DroiRVCS.mjs';
import { d as useFormatTime, e as useToast, bg as useSeoMeta, i as _sfc_main$R, _ as _sfc_main$W, k as _sfc_main$M, z as _sfc_main$y, n as _sfc_main$G, c as _sfc_main$r, a as _sfc_main$w, l as _sfc_main$u, b as _sfc_main$v } from './server.mjs';
import { _ as __nuxt_component_7 } from './TicketAttachments-ldA3n0nM.mjs';
import { defineComponent, ref, computed, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { u as useShoplyConsoleCopy, f as formatCopy } from './useShoplyConsole-qBrGWuE8.mjs';
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
  __name: "tickets",
  __ssrInlineRender: true,
  setup(__props) {
    const { copy } = useShoplyConsoleCopy();
    const { formatDate } = useFormatTime();
    const toast = useToast();
    const loading = ref(false);
    const tickets = ref([]);
    const activeStatusFilter = ref("");
    const page = ref(1);
    const pageSize = ref(15);
    const totalCount = ref(0);
    const totalPages = ref(1);
    const filterTabs = computed(() => [
      { key: "", label: copy.value.tickets.filterAll },
      { key: "open", label: copy.value.tickets.filterOpen },
      { key: "in_progress", label: copy.value.tickets.filterInProgress },
      { key: "auto_resolved", label: copy.value.tickets.filterAutoResolved },
      { key: "resolved", label: copy.value.tickets.filterResolved },
      { key: "closed", label: copy.value.tickets.filterClosed }
    ]);
    const categoryOptions = computed(() => [
      { label: copy.value.tickets.categories.store, value: "store" },
      { label: copy.value.tickets.categories.subscription, value: "subscription" },
      { label: copy.value.tickets.categories.billing, value: "billing" },
      { label: copy.value.tickets.categories.bind, value: "bind" },
      { label: copy.value.tickets.categories.other, value: "other" }
    ]);
    const detailModalOpen = ref(false);
    const detailLoading = ref(false);
    const currentTicket = ref(null);
    const messages = ref([]);
    const replyText = ref("");
    const replyAttachments = ref([]);
    const replySubmitting = ref(false);
    const newTicketModalOpen = ref(false);
    const newTicketSubmitting = ref(false);
    const newTicketAttachments = ref([]);
    const newTicket = ref({
      category: "store",
      title: "",
      content: ""
    });
    const loadTickets = async (p = page.value) => {
      var _a, _b;
      loading.value = true;
      page.value = p;
      try {
        const params = {
          page: page.value,
          pageSize: pageSize.value
        };
        if (activeStatusFilter.value) {
          params.status = activeStatusFilter.value;
        }
        const res = await $fetch("/api/users/tickets", { params });
        if ((res == null ? void 0 : res.code) === 200) {
          tickets.value = res.data || [];
          totalCount.value = ((_a = res.pagination) == null ? void 0 : _a.total) || 0;
          totalPages.value = ((_b = res.pagination) == null ? void 0 : _b.totalPages) || 1;
        }
      } finally {
        loading.value = false;
      }
    };
    const openDetail = async (id) => {
      var _a, _b;
      detailModalOpen.value = true;
      detailLoading.value = true;
      replyText.value = "";
      try {
        const res = await $fetch(`/api/users/tickets/${id}`);
        if ((res == null ? void 0 : res.code) === 200) {
          currentTicket.value = (_a = res.data) == null ? void 0 : _a.ticket;
          messages.value = ((_b = res.data) == null ? void 0 : _b.messages) || [];
        }
      } finally {
        detailLoading.value = false;
      }
    };
    const submitReply = async () => {
      if (!replyText.value.trim() || !currentTicket.value) return;
      replySubmitting.value = true;
      try {
        const res = await $fetch(`/api/users/tickets/${currentTicket.value.id}/reply`, {
          method: "POST",
          body: {
            content: replyText.value.trim(),
            attachments: replyAttachments.value.length > 0 ? replyAttachments.value : null
          }
        });
        if ((res == null ? void 0 : res.code) === 200) {
          replyText.value = "";
          replyAttachments.value = [];
          toast.add({ title: copy.value.tickets.repliedToast, color: "success" });
          await openDetail(currentTicket.value.id);
          void loadTickets();
        }
      } finally {
        replySubmitting.value = false;
      }
    };
    const updateStatus = async (status) => {
      if (!currentTicket.value) return;
      await $fetch(`/api/users/tickets/${currentTicket.value.id}/status`, {
        method: "PUT",
        body: { status }
      });
      toast.add({ title: copy.value.tickets.statusUpdatedToast, color: "success" });
      await openDetail(currentTicket.value.id);
      void loadTickets();
    };
    const submitNewTicket = async () => {
      var _a;
      if (!newTicket.value.title.trim() || !newTicket.value.content.trim()) return;
      newTicketSubmitting.value = true;
      try {
        const res = await $fetch("/api/users/tickets", {
          method: "POST",
          body: {
            ...newTicket.value,
            attachments: newTicketAttachments.value.length > 0 ? newTicketAttachments.value : null
          }
        });
        if ((res == null ? void 0 : res.code) === 200) {
          newTicketModalOpen.value = false;
          newTicket.value = { category: "store", title: "", content: "" };
          newTicketAttachments.value = [];
          toast.add({ title: copy.value.tickets.submittedToast, color: "success" });
          await loadTickets(1);
          if ((_a = res.data) == null ? void 0 : _a.id) {
            await openDetail(res.data.id);
          }
        }
      } finally {
        newTicketSubmitting.value = false;
      }
    };
    const statusBadgeColor = (status) => {
      switch (status) {
        case "open":
          return "warning";
        case "in_progress":
          return "info";
        case "auto_resolved":
          return "success";
        case "resolved":
          return "neutral";
        case "closed":
          return "neutral";
        default:
          return "neutral";
      }
    };
    const statusLabel = (status) => {
      const map = copy.value.tickets.statuses;
      return map[status] || status;
    };
    const categoryLabel = (cat) => {
      const map = copy.value.tickets.categories;
      return map[cat] || cat;
    };
    const senderLabel = (senderType) => {
      const map = copy.value.tickets.senders;
      return map[senderType] || senderType;
    };
    useSeoMeta({
      title: () => copy.value.tickets.title,
      robots: "noindex, nofollow"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ShoplyConsoleHeader = __nuxt_component_0;
      const _component_UButton = _sfc_main$R;
      const _component_UIcon = _sfc_main$W;
      const _component_UBadge = _sfc_main$M;
      const _component_UPagination = _sfc_main$y;
      const _component_UModal = _sfc_main$G;
      const _component_UTextarea = _sfc_main$r;
      const _component_TicketAttachments = __nuxt_component_7;
      const _component_UFormField = _sfc_main$w;
      const _component_USelect = _sfc_main$u;
      const _component_UInput = _sfc_main$v;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ShoplyConsoleHeader, {
        title: unref(copy).tickets.title,
        subtitle: unref(copy).tickets.subtitle
      }, {
        actions: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UButton, {
              color: "primary",
              class: "rounded-full font-bold",
              icon: "ph:plus-bold",
              onClick: ($event) => newTicketModalOpen.value = true
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(copy).tickets.createBtn)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(copy).tickets.createBtn), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UButton, {
                color: "primary",
                class: "rounded-full font-bold",
                icon: "ph:plus-bold",
                onClick: ($event) => newTicketModalOpen.value = true
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(copy).tickets.createBtn), 1)
                ]),
                _: 1
              }, 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex items-center gap-2 overflow-x-auto pb-1"><!--[-->`);
      ssrRenderList(filterTabs.value, (tab) => {
        _push(`<button type="button" class="${ssrRenderClass([activeStatusFilter.value === tab.key ? "bg-slate-900 text-white shadow-xs" : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900", "flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold transition-colors"])}"><span>${ssrInterpolate(tab.label)}</span></button>`);
      });
      _push(`<!--]--></div><section class="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">`);
      if (loading.value) {
        _push(`<div class="space-y-3 p-6"><!--[-->`);
        ssrRenderList(4, (i) => {
          _push(`<div class="h-16 animate-pulse rounded-2xl bg-slate-50"></div>`);
        });
        _push(`<!--]--></div>`);
      } else if (tickets.value.length === 0) {
        _push(`<div class="flex flex-col items-center justify-center px-6 py-16 text-center"><span class="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:lifebuoy-duotone",
          class: "h-7 w-7"
        }, null, _parent));
        _push(`</span><h2 class="mt-4 text-base font-black text-slate-900">${ssrInterpolate(unref(copy).tickets.emptyTitle)}</h2><p class="mt-1.5 max-w-md text-sm text-slate-500">${ssrInterpolate(unref(copy).tickets.emptyDesc)}</p>`);
        _push(ssrRenderComponent(_component_UButton, {
          color: "primary",
          variant: "soft",
          class: "mt-5 rounded-full font-bold",
          icon: "ph:plus-bold",
          onClick: ($event) => newTicketModalOpen.value = true
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(copy).tickets.createBtn)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(copy).tickets.createBtn), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<ul class="divide-y divide-slate-100"><!--[-->`);
        ssrRenderList(tickets.value, (item) => {
          _push(`<li class="flex cursor-pointer flex-col justify-between gap-3 p-5 transition-colors hover:bg-slate-50/80 sm:flex-row sm:items-center sm:px-6"><div class="min-w-0 flex-1 space-y-1.5"><div class="flex flex-wrap items-center gap-2"><span class="font-mono text-xs font-bold text-blue-600">${ssrInterpolate(item.ticketNo)}</span>`);
          _push(ssrRenderComponent(_component_UBadge, {
            size: "xs",
            color: "neutral",
            variant: "subtle"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(categoryLabel(item.category))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(categoryLabel(item.category)), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(ssrRenderComponent(_component_UBadge, {
            size: "xs",
            color: statusBadgeColor(item.status),
            variant: "soft"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(statusLabel(item.status))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(statusLabel(item.status)), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div><p class="truncate text-sm font-bold text-slate-900">${ssrInterpolate(item.title)}</p><p class="text-xs text-slate-500">${ssrInterpolate(unref(formatCopy)(unref(copy).tickets.updatedAt, { time: unref(formatDate)(item.lastRepliedAt || item.createdAt) }))}</p></div><div class="shrink-0">`);
          _push(ssrRenderComponent(_component_UButton, {
            size: "xs",
            color: "neutral",
            variant: "outline",
            class: "rounded-full font-bold",
            "trailing-icon": "ph:arrow-right-bold",
            onClick: ($event) => openDetail(item.id)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(copy).tickets.viewConversation)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(copy).tickets.viewConversation), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></li>`);
        });
        _push(`<!--]--></ul>`);
      }
      if (totalPages.value > 1) {
        _push(`<div class="flex items-center justify-end gap-2 border-t border-slate-100 px-6 py-4">`);
        _push(ssrRenderComponent(_component_UPagination, {
          page: page.value,
          "onUpdate:page": [($event) => page.value = $event, (val) => loadTickets(val)],
          "items-per-page": pageSize.value,
          total: totalCount.value
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
      _push(ssrRenderComponent(_component_UModal, {
        open: detailModalOpen.value,
        "onUpdate:open": ($event) => detailModalOpen.value = $event,
        ui: { content: "w-[calc(100vw-2rem)] sm:max-w-3xl rounded-3xl overflow-hidden" }
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (detailLoading.value) {
              _push2(`<div class="space-y-4 p-8"${_scopeId}><div class="h-10 animate-pulse rounded-2xl bg-slate-50"${_scopeId}></div><div class="h-40 animate-pulse rounded-2xl bg-slate-50"${_scopeId}></div></div>`);
            } else if (currentTicket.value) {
              _push2(`<div class="max-h-[85vh] space-y-5 overflow-y-auto p-6 sm:p-7"${_scopeId}><div class="flex items-center justify-between border-b border-slate-100 pb-3"${_scopeId}><div class="flex items-center gap-2"${_scopeId}><span class="rounded-lg bg-slate-100 px-2.5 py-0.5 font-mono text-xs font-bold text-slate-700"${_scopeId}>${ssrInterpolate(currentTicket.value.ticketNo)}</span>`);
              _push2(ssrRenderComponent(_component_UBadge, {
                size: "xs",
                color: statusBadgeColor(currentTicket.value.status),
                variant: "soft"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(statusLabel(currentTicket.value.status))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(statusLabel(currentTicket.value.status)), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_UButton, {
                color: "neutral",
                variant: "ghost",
                icon: "ph:x-bold",
                size: "xs",
                class: "rounded-full",
                onClick: ($event) => detailModalOpen.value = false
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-slate-50/70 p-4"${_scopeId}><div class="min-w-0"${_scopeId}><h3 class="text-base font-black text-slate-900"${_scopeId}>${ssrInterpolate(currentTicket.value.title)}</h3><p class="mt-1 text-xs text-slate-500"${_scopeId}>${ssrInterpolate(categoryLabel(currentTicket.value.category))} \xB7 ${ssrInterpolate(unref(formatDate)(currentTicket.value.createdAt))}</p></div>`);
              if (currentTicket.value.status !== "closed") {
                _push2(`<div class="flex items-center gap-2"${_scopeId}>`);
                if (currentTicket.value.status !== "resolved") {
                  _push2(ssrRenderComponent(_component_UButton, {
                    size: "xs",
                    color: "success",
                    variant: "soft",
                    icon: "ph:check-bold",
                    class: "rounded-full font-bold",
                    onClick: ($event) => updateStatus("resolved")
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(unref(copy).tickets.markResolved)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(copy).tickets.markResolved), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(ssrRenderComponent(_component_UButton, {
                  size: "xs",
                  color: "neutral",
                  variant: "ghost",
                  class: "rounded-full",
                  onClick: ($event) => updateStatus("closed")
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(unref(copy).tickets.closeTicket)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(unref(copy).tickets.closeTicket), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="space-y-3"${_scopeId}><h4 class="text-xs font-bold uppercase tracking-[0.14em] text-slate-400"${_scopeId}>${ssrInterpolate(unref(copy).tickets.conversationTitle)}</h4><div class="space-y-3"${_scopeId}><!--[-->`);
              ssrRenderList(messages.value, (msg) => {
                _push2(`<div class="${ssrRenderClass([msg.senderType === "admin" ? "border-blue-200 bg-blue-50/50" : msg.senderType === "bot" ? "border-emerald-200 bg-emerald-50/50" : "border-slate-200 bg-white", "flex gap-3 rounded-2xl border p-4 text-sm"])}"${_scopeId}><span class="${ssrRenderClass([msg.senderType === "admin" ? "bg-blue-600" : msg.senderType === "bot" ? "bg-emerald-600" : "bg-slate-700", "flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-white"])}"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: msg.senderType === "admin" ? "ph:shield-check-bold" : msg.senderType === "bot" ? "ph:robot-bold" : "ph:user-bold",
                  class: "h-4 w-4"
                }, null, _parent2, _scopeId));
                _push2(`</span><div class="min-w-0 flex-1 space-y-1"${_scopeId}><div class="flex items-center justify-between gap-2 text-xs"${_scopeId}><span class="font-bold text-slate-900"${_scopeId}>${ssrInterpolate(msg.senderName || senderLabel(msg.senderType))}</span><span class="text-slate-400"${_scopeId}>${ssrInterpolate(unref(formatDate)(msg.createdAt))}</span></div><p class="whitespace-pre-wrap leading-relaxed text-slate-700"${_scopeId}>${ssrInterpolate(msg.content)}</p>`);
                if (msg.attachments && msg.attachments.length > 0) {
                  _push2(`<div class="flex flex-wrap gap-2 pt-2"${_scopeId}><!--[-->`);
                  ssrRenderList(msg.attachments, (att, idx) => {
                    _push2(`<a${ssrRenderAttr("href", att.url)} target="_blank" rel="noopener noreferrer" class="h-16 w-16 overflow-hidden rounded-xl border border-slate-200 bg-slate-50"${_scopeId}><img${ssrRenderAttr("src", att.url)}${ssrRenderAttr("alt", att.name || "attachment")} class="h-full w-full object-cover"${_scopeId}></a>`);
                  });
                  _push2(`<!--]--></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div>`);
              });
              _push2(`<!--]--></div></div>`);
              if (currentTicket.value.status !== "closed") {
                _push2(`<div class="space-y-3 border-t border-slate-100 pt-4"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UTextarea, {
                  modelValue: replyText.value,
                  "onUpdate:modelValue": ($event) => replyText.value = $event,
                  placeholder: unref(copy).tickets.replyPlaceholder,
                  rows: 3,
                  class: "w-full"
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_TicketAttachments, {
                  modelValue: replyAttachments.value,
                  "onUpdate:modelValue": ($event) => replyAttachments.value = $event
                }, null, _parent2, _scopeId));
                _push2(`<div class="flex items-center justify-end gap-2"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UButton, {
                  color: "neutral",
                  variant: "ghost",
                  class: "rounded-full",
                  onClick: ($event) => detailModalOpen.value = false
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(unref(copy).common.close)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(unref(copy).common.close), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_UButton, {
                  color: "primary",
                  class: "rounded-full font-bold",
                  icon: "ph:paper-plane-tilt-bold",
                  loading: replySubmitting.value,
                  disabled: !replyText.value.trim(),
                  onClick: submitReply
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(unref(copy).tickets.sendReply)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(unref(copy).tickets.sendReply), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              detailLoading.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "space-y-4 p-8"
              }, [
                createVNode("div", { class: "h-10 animate-pulse rounded-2xl bg-slate-50" }),
                createVNode("div", { class: "h-40 animate-pulse rounded-2xl bg-slate-50" })
              ])) : currentTicket.value ? (openBlock(), createBlock("div", {
                key: 1,
                class: "max-h-[85vh] space-y-5 overflow-y-auto p-6 sm:p-7"
              }, [
                createVNode("div", { class: "flex items-center justify-between border-b border-slate-100 pb-3" }, [
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode("span", { class: "rounded-lg bg-slate-100 px-2.5 py-0.5 font-mono text-xs font-bold text-slate-700" }, toDisplayString(currentTicket.value.ticketNo), 1),
                    createVNode(_component_UBadge, {
                      size: "xs",
                      color: statusBadgeColor(currentTicket.value.status),
                      variant: "soft"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(statusLabel(currentTicket.value.status)), 1)
                      ]),
                      _: 1
                    }, 8, ["color"])
                  ]),
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    icon: "ph:x-bold",
                    size: "xs",
                    class: "rounded-full",
                    onClick: ($event) => detailModalOpen.value = false
                  }, null, 8, ["onClick"])
                ]),
                createVNode("div", { class: "flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-slate-50/70 p-4" }, [
                  createVNode("div", { class: "min-w-0" }, [
                    createVNode("h3", { class: "text-base font-black text-slate-900" }, toDisplayString(currentTicket.value.title), 1),
                    createVNode("p", { class: "mt-1 text-xs text-slate-500" }, toDisplayString(categoryLabel(currentTicket.value.category)) + " \xB7 " + toDisplayString(unref(formatDate)(currentTicket.value.createdAt)), 1)
                  ]),
                  currentTicket.value.status !== "closed" ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "flex items-center gap-2"
                  }, [
                    currentTicket.value.status !== "resolved" ? (openBlock(), createBlock(_component_UButton, {
                      key: 0,
                      size: "xs",
                      color: "success",
                      variant: "soft",
                      icon: "ph:check-bold",
                      class: "rounded-full font-bold",
                      onClick: ($event) => updateStatus("resolved")
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(copy).tickets.markResolved), 1)
                      ]),
                      _: 1
                    }, 8, ["onClick"])) : createCommentVNode("", true),
                    createVNode(_component_UButton, {
                      size: "xs",
                      color: "neutral",
                      variant: "ghost",
                      class: "rounded-full",
                      onClick: ($event) => updateStatus("closed")
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(copy).tickets.closeTicket), 1)
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ])) : createCommentVNode("", true)
                ]),
                createVNode("div", { class: "space-y-3" }, [
                  createVNode("h4", { class: "text-xs font-bold uppercase tracking-[0.14em] text-slate-400" }, toDisplayString(unref(copy).tickets.conversationTitle), 1),
                  createVNode("div", { class: "space-y-3" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(messages.value, (msg) => {
                      return openBlock(), createBlock("div", {
                        key: msg.id,
                        class: ["flex gap-3 rounded-2xl border p-4 text-sm", msg.senderType === "admin" ? "border-blue-200 bg-blue-50/50" : msg.senderType === "bot" ? "border-emerald-200 bg-emerald-50/50" : "border-slate-200 bg-white"]
                      }, [
                        createVNode("span", {
                          class: ["flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-white", msg.senderType === "admin" ? "bg-blue-600" : msg.senderType === "bot" ? "bg-emerald-600" : "bg-slate-700"]
                        }, [
                          createVNode(_component_UIcon, {
                            name: msg.senderType === "admin" ? "ph:shield-check-bold" : msg.senderType === "bot" ? "ph:robot-bold" : "ph:user-bold",
                            class: "h-4 w-4"
                          }, null, 8, ["name"])
                        ], 2),
                        createVNode("div", { class: "min-w-0 flex-1 space-y-1" }, [
                          createVNode("div", { class: "flex items-center justify-between gap-2 text-xs" }, [
                            createVNode("span", { class: "font-bold text-slate-900" }, toDisplayString(msg.senderName || senderLabel(msg.senderType)), 1),
                            createVNode("span", { class: "text-slate-400" }, toDisplayString(unref(formatDate)(msg.createdAt)), 1)
                          ]),
                          createVNode("p", { class: "whitespace-pre-wrap leading-relaxed text-slate-700" }, toDisplayString(msg.content), 1),
                          msg.attachments && msg.attachments.length > 0 ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "flex flex-wrap gap-2 pt-2"
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(msg.attachments, (att, idx) => {
                              return openBlock(), createBlock("a", {
                                key: att.url || idx,
                                href: att.url,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                class: "h-16 w-16 overflow-hidden rounded-xl border border-slate-200 bg-slate-50"
                              }, [
                                createVNode("img", {
                                  src: att.url,
                                  alt: att.name || "attachment",
                                  class: "h-full w-full object-cover"
                                }, null, 8, ["src", "alt"])
                              ], 8, ["href"]);
                            }), 128))
                          ])) : createCommentVNode("", true)
                        ])
                      ], 2);
                    }), 128))
                  ])
                ]),
                currentTicket.value.status !== "closed" ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "space-y-3 border-t border-slate-100 pt-4"
                }, [
                  createVNode(_component_UTextarea, {
                    modelValue: replyText.value,
                    "onUpdate:modelValue": ($event) => replyText.value = $event,
                    placeholder: unref(copy).tickets.replyPlaceholder,
                    rows: 3,
                    class: "w-full"
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]),
                  createVNode(_component_TicketAttachments, {
                    modelValue: replyAttachments.value,
                    "onUpdate:modelValue": ($event) => replyAttachments.value = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode("div", { class: "flex items-center justify-end gap-2" }, [
                    createVNode(_component_UButton, {
                      color: "neutral",
                      variant: "ghost",
                      class: "rounded-full",
                      onClick: ($event) => detailModalOpen.value = false
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(copy).common.close), 1)
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_UButton, {
                      color: "primary",
                      class: "rounded-full font-bold",
                      icon: "ph:paper-plane-tilt-bold",
                      loading: replySubmitting.value,
                      disabled: !replyText.value.trim(),
                      onClick: submitReply
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(copy).tickets.sendReply), 1)
                      ]),
                      _: 1
                    }, 8, ["loading", "disabled"])
                  ])
                ])) : createCommentVNode("", true)
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        open: newTicketModalOpen.value,
        "onUpdate:open": ($event) => newTicketModalOpen.value = $event,
        ui: { content: "w-[calc(100vw-2rem)] sm:max-w-xl rounded-3xl overflow-hidden" }
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-5 p-6 sm:p-7"${_scopeId}><div class="flex items-center justify-between border-b border-slate-100 pb-3"${_scopeId}><div${_scopeId}><h3 class="text-lg font-black text-slate-950"${_scopeId}>${ssrInterpolate(unref(copy).tickets.modalTitle)}</h3><p class="mt-0.5 text-xs text-slate-500"${_scopeId}>${ssrInterpolate(unref(copy).tickets.modalSubtitle)}</p></div>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              icon: "ph:x-bold",
              size: "xs",
              class: "rounded-full",
              onClick: ($event) => newTicketModalOpen.value = false
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_UFormField, {
              label: unref(copy).tickets.categoryLabel,
              required: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_USelect, {
                    modelValue: newTicket.value.category,
                    "onUpdate:modelValue": ($event) => newTicket.value.category = $event,
                    items: categoryOptions.value,
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_USelect, {
                      modelValue: newTicket.value.category,
                      "onUpdate:modelValue": ($event) => newTicket.value.category = $event,
                      items: categoryOptions.value,
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, {
              label: unref(copy).tickets.subjectLabel,
              required: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: newTicket.value.title,
                    "onUpdate:modelValue": ($event) => newTicket.value.title = $event,
                    placeholder: unref(copy).tickets.subjectPlaceholder,
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: newTicket.value.title,
                      "onUpdate:modelValue": ($event) => newTicket.value.title = $event,
                      placeholder: unref(copy).tickets.subjectPlaceholder,
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, {
              label: unref(copy).tickets.contentLabel,
              required: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UTextarea, {
                    modelValue: newTicket.value.content,
                    "onUpdate:modelValue": ($event) => newTicket.value.content = $event,
                    placeholder: unref(copy).tickets.contentPlaceholder,
                    rows: 4,
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UTextarea, {
                      modelValue: newTicket.value.content,
                      "onUpdate:modelValue": ($event) => newTicket.value.content = $event,
                      placeholder: unref(copy).tickets.contentPlaceholder,
                      rows: 4,
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormField, {
              label: unref(copy).tickets.attachmentsLabel
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_TicketAttachments, {
                    modelValue: newTicketAttachments.value,
                    "onUpdate:modelValue": ($event) => newTicketAttachments.value = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_TicketAttachments, {
                      modelValue: newTicketAttachments.value,
                      "onUpdate:modelValue": ($event) => newTicketAttachments.value = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex items-center justify-end gap-2 border-t border-slate-100 pt-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              class: "rounded-full",
              onClick: ($event) => newTicketModalOpen.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(copy).common.cancel)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(copy).common.cancel), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              color: "primary",
              class: "rounded-full font-bold",
              loading: newTicketSubmitting.value,
              disabled: !newTicket.value.title.trim() || !newTicket.value.content.trim(),
              onClick: submitNewTicket
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(copy).tickets.submitBtn)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(copy).tickets.submitBtn), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-5 p-6 sm:p-7" }, [
                createVNode("div", { class: "flex items-center justify-between border-b border-slate-100 pb-3" }, [
                  createVNode("div", null, [
                    createVNode("h3", { class: "text-lg font-black text-slate-950" }, toDisplayString(unref(copy).tickets.modalTitle), 1),
                    createVNode("p", { class: "mt-0.5 text-xs text-slate-500" }, toDisplayString(unref(copy).tickets.modalSubtitle), 1)
                  ]),
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    icon: "ph:x-bold",
                    size: "xs",
                    class: "rounded-full",
                    onClick: ($event) => newTicketModalOpen.value = false
                  }, null, 8, ["onClick"])
                ]),
                createVNode(_component_UFormField, {
                  label: unref(copy).tickets.categoryLabel,
                  required: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_USelect, {
                      modelValue: newTicket.value.category,
                      "onUpdate:modelValue": ($event) => newTicket.value.category = $event,
                      items: categoryOptions.value,
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                createVNode(_component_UFormField, {
                  label: unref(copy).tickets.subjectLabel,
                  required: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      modelValue: newTicket.value.title,
                      "onUpdate:modelValue": ($event) => newTicket.value.title = $event,
                      placeholder: unref(copy).tickets.subjectPlaceholder,
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                createVNode(_component_UFormField, {
                  label: unref(copy).tickets.contentLabel,
                  required: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UTextarea, {
                      modelValue: newTicket.value.content,
                      "onUpdate:modelValue": ($event) => newTicket.value.content = $event,
                      placeholder: unref(copy).tickets.contentPlaceholder,
                      rows: 4,
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                createVNode(_component_UFormField, {
                  label: unref(copy).tickets.attachmentsLabel
                }, {
                  default: withCtx(() => [
                    createVNode(_component_TicketAttachments, {
                      modelValue: newTicketAttachments.value,
                      "onUpdate:modelValue": ($event) => newTicketAttachments.value = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                createVNode("div", { class: "flex items-center justify-end gap-2 border-t border-slate-100 pt-3" }, [
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    class: "rounded-full",
                    onClick: ($event) => newTicketModalOpen.value = false
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(copy).common.cancel), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_UButton, {
                    color: "primary",
                    class: "rounded-full font-bold",
                    loading: newTicketSubmitting.value,
                    disabled: !newTicket.value.title.trim() || !newTicket.value.content.trim(),
                    onClick: submitNewTicket
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(copy).tickets.submitBtn), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled"])
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shoply/pages/user/tickets.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=tickets-C4Yc7-N-.mjs.map
