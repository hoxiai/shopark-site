import { u as useI18n, D as useLocaleRouter, d as useFormatTime, y as useFetch, by as useCollectionPageJsonLd, bg as useSeoMeta, _ as _sfc_main$W, O as __nuxt_component_3$4, z as _sfc_main$y } from './server.mjs';
import { defineComponent, ref, withAsyncContext, computed, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
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

const pageSize = 12;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { t } = useI18n();
    const { localePath } = useLocaleRouter();
    const { formatDate } = useFormatTime();
    const page = ref(1);
    const { data, status } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/posts",
      {
        key: "shoply-blog-list",
        query: computed(() => ({ page: page.value, pageSize, type: "blog" }))
      },
      "$ynuonBOQPd"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const posts = computed(() => {
      var _a, _b;
      return (_b = (_a = data.value) == null ? void 0 : _a.data) != null ? _b : [];
    });
    const total = computed(() => {
      var _a, _b;
      return Number((_b = (_a = data.value) == null ? void 0 : _a.total) != null ? _b : 0);
    });
    useCollectionPageJsonLd("shoply-blog-collection", {
      path: "/blog",
      name: () => t("shoply.blog.seoTitle"),
      description: () => t("shoply.blog.seoDescription"),
      items: posts
    });
    const copy = computed(() => ({
      eyebrow: t("shoply.blog.eyebrow"),
      title: t("shoply.blog.title"),
      description: t("shoply.blog.description"),
      emptyTitle: t("shoply.blog.emptyTitle"),
      emptyDescription: t("shoply.blog.emptyDescription"),
      readMore: t("shoply.blog.readMore")
    }));
    useSeoMeta({
      title: () => t("shoply.blog.seoTitle"),
      description: () => t("shoply.blog.seoDescription"),
      keywords: () => t("shoply.blog.seoKeywords"),
      ogTitle: () => t("shoply.blog.seoTitle"),
      ogDescription: () => t("shoply.blog.seoDescription"),
      ogType: "website",
      twitterCard: "summary_large_image",
      twitterTitle: () => t("shoply.blog.seoTitle"),
      twitterDescription: () => t("shoply.blog.seoDescription")
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$W;
      const _component_NuxtLink = __nuxt_component_3$4;
      const _component_UPagination = _sfc_main$y;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white" }, _attrs))}><section class="relative isolate overflow-hidden bg-gradient-to-b from-[#2678ff] via-[#1e6df0] to-[#155fc8] px-5 pt-28 pb-18 text-white sm:px-8 sm:pt-36 sm:pb-24 lg:px-12 lg:pt-40"><div class="pointer-events-none absolute inset-0 -z-10"><div class="animate-shoply-glow absolute -left-20 top-10 h-96 w-96 rounded-full bg-cyan-300/25 blur-3xl"></div><div class="animate-shoply-float-delayed absolute -right-20 bottom-10 h-[420px] w-[420px] rounded-full bg-indigo-900/30 blur-3xl"></div></div><div class="mx-auto max-w-[1280px]"><div class="max-w-3xl"><div class="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-bold tracking-wider text-blue-50 backdrop-blur-sm uppercase"><span class="h-2 w-2 rounded-full bg-amber-300 animate-pulse"></span><span>${ssrInterpolate(copy.value.eyebrow)}</span></div><h1 class="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">${ssrInterpolate(copy.value.title)}</h1><p class="mt-5 text-base leading-8 text-blue-50/90 sm:text-lg">${ssrInterpolate(copy.value.description)}</p></div></div></section><section class="bg-slate-50/70 px-5 py-16 sm:px-8 sm:py-20 lg:px-12"><div class="mx-auto max-w-[1280px]">`);
      if (unref(status) === "pending" && !posts.value.length) {
        _push(`<div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3"><!--[-->`);
        ssrRenderList(6, (index) => {
          _push(`<div class="h-72 animate-pulse rounded-3xl border border-slate-200 bg-white"></div>`);
        });
        _push(`<!--]--></div>`);
      } else if (!posts.value.length) {
        _push(`<div class="rounded-[2rem] border border-slate-200 bg-white p-12 text-center shadow-2xs">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:newspaper-duotone",
          class: "mx-auto h-14 w-14 text-blue-500"
        }, null, _parent));
        _push(`<h2 class="mt-5 text-2xl font-black text-slate-950">${ssrInterpolate(copy.value.emptyTitle)}</h2><p class="mt-3 text-sm leading-7 text-slate-600">${ssrInterpolate(copy.value.emptyDescription)}</p></div>`);
      } else {
        _push(`<!--[--><div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3"><!--[-->`);
        ssrRenderList(posts.value, (post) => {
          _push(`<article class="group flex min-w-0 flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/10">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(localePath)(`/blog/${post.slug}`),
            class: "flex h-full flex-col"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="aspect-[16/9] overflow-hidden bg-slate-100"${_scopeId}>`);
                if (post.imageUrl) {
                  _push2(`<img${ssrRenderAttr("src", post.imageUrl)}${ssrRenderAttr("alt", post.title)} loading="lazy" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"${_scopeId}>`);
                } else {
                  _push2(`<span class="flex h-full w-full items-center justify-center text-blue-200"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: "ph:article-duotone",
                    class: "h-12 w-12"
                  }, null, _parent2, _scopeId));
                  _push2(`</span>`);
                }
                _push2(`</div><div class="flex flex-1 flex-col p-6"${_scopeId}><p class="text-xs font-semibold text-slate-400"${_scopeId}>${ssrInterpolate(post.createdAt ? unref(formatDate)(post.createdAt) : "")}</p><h2 class="mt-2 line-clamp-2 text-lg font-extrabold leading-7 text-slate-900 transition-colors group-hover:text-blue-600"${_scopeId}>${ssrInterpolate(post.title)}</h2>`);
                if (post.description) {
                  _push2(`<p class="mt-3 line-clamp-3 flex-1 text-sm leading-7 text-slate-600"${_scopeId}>${ssrInterpolate(post.description)}</p>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<span class="mt-5 inline-flex items-center gap-1.5 text-sm font-extrabold text-blue-600"${_scopeId}>${ssrInterpolate(copy.value.readMore)} `);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:arrow-right-bold",
                  class: "h-4 w-4 transition-transform group-hover:translate-x-1"
                }, null, _parent2, _scopeId));
                _push2(`</span></div>`);
              } else {
                return [
                  createVNode("div", { class: "aspect-[16/9] overflow-hidden bg-slate-100" }, [
                    post.imageUrl ? (openBlock(), createBlock("img", {
                      key: 0,
                      src: post.imageUrl,
                      alt: post.title,
                      loading: "lazy",
                      class: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("span", {
                      key: 1,
                      class: "flex h-full w-full items-center justify-center text-blue-200"
                    }, [
                      createVNode(_component_UIcon, {
                        name: "ph:article-duotone",
                        class: "h-12 w-12"
                      })
                    ]))
                  ]),
                  createVNode("div", { class: "flex flex-1 flex-col p-6" }, [
                    createVNode("p", { class: "text-xs font-semibold text-slate-400" }, toDisplayString(post.createdAt ? unref(formatDate)(post.createdAt) : ""), 1),
                    createVNode("h2", { class: "mt-2 line-clamp-2 text-lg font-extrabold leading-7 text-slate-900 transition-colors group-hover:text-blue-600" }, toDisplayString(post.title), 1),
                    post.description ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "mt-3 line-clamp-3 flex-1 text-sm leading-7 text-slate-600"
                    }, toDisplayString(post.description), 1)) : createCommentVNode("", true),
                    createVNode("span", { class: "mt-5 inline-flex items-center gap-1.5 text-sm font-extrabold text-blue-600" }, [
                      createTextVNode(toDisplayString(copy.value.readMore) + " ", 1),
                      createVNode(_component_UIcon, {
                        name: "ph:arrow-right-bold",
                        class: "h-4 w-4 transition-transform group-hover:translate-x-1"
                      })
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</article>`);
        });
        _push(`<!--]--></div>`);
        if (total.value > pageSize) {
          _push(`<div class="mt-12 flex justify-center">`);
          _push(ssrRenderComponent(_component_UPagination, {
            page: page.value,
            "onUpdate:page": ($event) => page.value = $event,
            "items-per-page": pageSize,
            total: total.value
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      }
      _push(`</div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shoply/pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-D12hZHiQ.mjs.map
