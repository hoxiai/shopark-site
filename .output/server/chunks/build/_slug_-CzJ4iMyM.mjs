import { u as useI18n, D as useLocaleRouter, d as useFormatTime, y as useFetch, bG as usePageResourceState, bH as useBlogPostingJsonLd, bg as useSeoMeta, O as __nuxt_component_3$4, _ as _sfc_main$W, S as PageRequestError, bI as __nuxt_component_3$2 } from './server.mjs';
import { defineComponent, withAsyncContext, computed, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, toValue, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
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

const useLocalizedPost = () => {
  const { locale } = useI18n();
  const getLocalizedPost = (post) => {
    var _a, _b, _c, _d, _e, _f;
    const rawPost = toValue(post);
    if (!rawPost) return null;
    const postCopy = JSON.parse(JSON.stringify(rawPost));
    if (typeof postCopy.metaData === "string") {
      try {
        postCopy.metaData = JSON.parse(postCopy.metaData);
      } catch (e) {
        postCopy.metaData = {};
      }
    }
    if (postCopy.type === "blog" && typeof postCopy.locale === "string" && postCopy.locale.trim()) {
      return postCopy;
    }
    const currentLocale = toValue(locale);
    if (!((_b = (_a = postCopy.metaData) == null ? void 0 : _a.translations) == null ? void 0 : _b[currentLocale])) {
      return postCopy;
    }
    const trans = postCopy.metaData.translations[currentLocale];
    return {
      ...postCopy,
      title: trans.title || postCopy.title,
      description: trans.description || postCopy.description,
      content: trans.content || postCopy.content,
      metaData: {
        ...postCopy.metaData,
        tldr: trans.tldr || ((_c = postCopy.metaData) == null ? void 0 : _c.tldr),
        keySpecs: Array.isArray(trans.keySpecs) && trans.keySpecs.length ? trans.keySpecs : (_d = postCopy.metaData) == null ? void 0 : _d.keySpecs,
        faqs: Array.isArray(trans.faqs) && trans.faqs.length ? trans.faqs : (_e = postCopy.metaData) == null ? void 0 : _e.faqs,
        relatedLinks: Array.isArray(trans.relatedLinks) && trans.relatedLinks.length ? trans.relatedLinks : (_f = postCopy.metaData) == null ? void 0 : _f.relatedLinks
      }
    };
  };
  return {
    getLocalizedPost
  };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { t, locale } = useI18n();
    const { localePath } = useLocaleRouter();
    const { formatDate } = useFormatTime();
    const { getLocalizedPost } = useLocalizedPost();
    const segments = route.params.slug;
    const slug = Array.isArray(segments) ? String(segments.at(-1) || "") : String(segments || "");
    const { data, status, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `/api/posts/${encodeURIComponent(slug)}`,
      {
        key: `shoply-post-${slug}-${locale.value}`,
        params: { locale },
        watch: [locale]
      },
      "$jMEbcrInd6"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const post = computed(() => getLocalizedPost(data.value));
    const { pending, requestFailed } = usePageResourceState(data, status, error);
    useBlogPostingJsonLd("shoply-blog-post", post);
    const copy = computed(() => ({
      back: t("shoply.blog.back"),
      backToList: t("shoply.blog.backToList"),
      notFound: t("shoply.blog.notFound")
    }));
    useSeoMeta({
      title: () => {
        var _a;
        return ((_a = post.value) == null ? void 0 : _a.title) || t("shoply.blog.seoTitle");
      },
      description: () => {
        var _a;
        return ((_a = post.value) == null ? void 0 : _a.description) || t("shoply.blog.seoDescription");
      },
      keywords: () => {
        var _a;
        return ((_a = post.value) == null ? void 0 : _a.title) || "";
      },
      ogTitle: () => {
        var _a;
        return ((_a = post.value) == null ? void 0 : _a.title) || t("shoply.blog.seoTitle");
      },
      ogDescription: () => {
        var _a;
        return ((_a = post.value) == null ? void 0 : _a.description) || t("shoply.blog.seoDescription");
      },
      ogImage: () => {
        var _a;
        return ((_a = post.value) == null ? void 0 : _a.imageUrl) || void 0;
      },
      ogType: "article",
      twitterCard: "summary_large_image",
      twitterTitle: () => {
        var _a;
        return ((_a = post.value) == null ? void 0 : _a.title) || t("shoply.blog.seoTitle");
      },
      twitterDescription: () => {
        var _a;
        return ((_a = post.value) == null ? void 0 : _a.description) || t("shoply.blog.seoDescription");
      },
      twitterImage: () => {
        var _a;
        return ((_a = post.value) == null ? void 0 : _a.imageUrl) || void 0;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_3$4;
      const _component_UIcon = _sfc_main$W;
      const _component_PageRequestError = PageRequestError;
      const _component_LikeButton = __nuxt_component_3$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white" }, _attrs))}><article class="mx-auto max-w-[820px] px-5 py-14 sm:px-8 sm:py-20">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/blog"),
        class: "inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 transition-colors hover:text-blue-600"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:arrow-left-bold",
              class: "h-4 w-4"
            }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(copy.value.back)}`);
          } else {
            return [
              createVNode(_component_UIcon, {
                name: "ph:arrow-left-bold",
                class: "h-4 w-4"
              }),
              createTextVNode(" " + toDisplayString(copy.value.back), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(pending) && !post.value) {
        _push(`<div class="mt-10 space-y-4"><div class="h-10 w-3/4 animate-pulse rounded-2xl bg-slate-100"></div><div class="h-64 animate-pulse rounded-3xl bg-slate-100"></div></div>`);
      } else if (unref(requestFailed)) {
        _push(ssrRenderComponent(_component_PageRequestError, { retry: unref(refresh) }, null, _parent));
      } else if (!post.value) {
        _push(`<div class="mt-16 rounded-[2rem] border border-slate-200 bg-slate-50 p-12 text-center">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:file-dashed-duotone",
          class: "mx-auto h-14 w-14 text-slate-300"
        }, null, _parent));
        _push(`<h1 class="mt-5 text-2xl font-black text-slate-950">${ssrInterpolate(copy.value.notFound)}</h1>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)("/blog"),
          class: "mt-6 inline-flex rounded-full bg-blue-600 px-6 py-3 text-sm font-extrabold text-white transition-colors hover:bg-blue-700"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(copy.value.backToList)}`);
            } else {
              return [
                createTextVNode(toDisplayString(copy.value.backToList), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!--[--><header class="mt-8"><p class="text-xs font-semibold text-slate-400">${ssrInterpolate(post.value.createdAt ? unref(formatDate)(post.value.createdAt) : "")}</p><h1 class="mt-3 text-3xl font-black leading-[1.2] tracking-[-0.03em] text-slate-950 sm:text-4xl">${ssrInterpolate(post.value.title)}</h1>`);
        if (post.value.description) {
          _push(`<p class="mt-5 text-base leading-8 text-slate-600">${ssrInterpolate(post.value.description)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</header>`);
        if (post.value.imageUrl) {
          _push(`<img${ssrRenderAttr("src", post.value.imageUrl)}${ssrRenderAttr("alt", post.value.title)} class="mt-10 w-full rounded-3xl border border-slate-200 object-cover">`);
        } else {
          _push(`<!---->`);
        }
        if (post.value.content) {
          _push(`<div class="prose prose-slate mt-10 max-w-none prose-headings:font-black prose-a:text-blue-600">${(_a = post.value.content) != null ? _a : ""}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="mt-12 flex items-center justify-between border-t border-slate-100 pt-6"><div class="flex items-center gap-3">`);
        _push(ssrRenderComponent(_component_LikeButton, {
          "target-type": "post",
          "target-id": post.value.slug || post.value.id,
          "initial-count": post.value.likes || 0,
          size: "md",
          "auto-fetch": ""
        }, null, _parent));
        _push(`</div>`);
        if (post.value.views) {
          _push(`<div class="flex items-center gap-1.5 text-xs text-slate-400">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:eye",
            class: "w-4 h-4"
          }, null, _parent));
          _push(`<span>${ssrInterpolate(post.value.views)}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><!--]-->`);
      }
      _push(`</article></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shoply/pages/blog/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-CzJ4iMyM.mjs.map
