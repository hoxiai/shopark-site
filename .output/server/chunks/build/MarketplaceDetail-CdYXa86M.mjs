import { D as useLocaleRouter, U as useLocaleCurrency, E as useRoute, u as useI18n, bj as useJsonLd, L as __nuxt_component_3$3, _ as _sfc_main$R } from './server.mjs';
import { defineComponent, computed, ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import MarketplaceVisual from './MarketplaceVisual-Cr5WaubP.mjs';
import { el as SEO_LOCALE_LANGUAGE } from '../nitro/nitro.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MarketplaceDetail",
  __ssrInlineRender: true,
  props: {
    kind: {},
    entry: {},
    copy: {},
    category: {}
  },
  setup(__props) {
    const props = __props;
    const { localePath } = useLocaleRouter();
    const { formatAmount } = useLocaleCurrency();
    const route = useRoute();
    const { locale } = useI18n();
    const brandName = computed(() => {
      if (locale.value === "zh-HK") return "\u8F15\u92EA";
      if (locale.value.startsWith("zh")) return "\u8F7B\u94FA";
      return "Qingpu";
    });
    const { currency, convertAmount } = useLocaleCurrency();
    const statusLabel = computed(() => props.entry ? props.copy.package.status[props.entry.packageStatus] : "");
    const statusClass = computed(() => {
      var _a, _b, _c;
      if (((_a = props.entry) == null ? void 0 : _a.packageStatus) === "active" || ((_b = props.entry) == null ? void 0 : _b.packageStatus) === "enabled") return "border-emerald-200 bg-emerald-50 text-emerald-700";
      if (((_c = props.entry) == null ? void 0 : _c.packageStatus) === "ready") return "border-blue-200 bg-blue-50 text-blue-700";
      return "border-slate-200 bg-slate-50 text-slate-500";
    });
    const showAllReleases = ref(false);
    const releasesList = computed(() => {
      var _a, _b;
      if (((_a = props.entry) == null ? void 0 : _a.releases) && props.entry.releases.length > 0) {
        return props.entry.releases;
      }
      if ((_b = props.entry) == null ? void 0 : _b.version) {
        return [{
          version: props.entry.version,
          notes: "",
          createdAt: props.entry.updatedAt || props.entry.publishedAt || ""
        }];
      }
      return [];
    });
    const visibleReleases = computed(() => {
      if (showAllReleases.value) return releasesList.value;
      return releasesList.value.slice(0, 3);
    });
    useJsonLd("shoply-marketplace-detail", computed(() => {
      const entry = props.entry;
      if (!entry) return null;
      const path = route.path;
      const entity = entry.kind === "app" ? {
        "@type": "SoftwareApplication",
        "@id": `${path}#software`,
        name: entry.name,
        description: entry.summary,
        image: entry.imageUrl || void 0,
        applicationCategory: entry.category,
        softwareVersion: entry.version || void 0,
        inLanguage: SEO_LOCALE_LANGUAGE[locale.value] || locale.value,
        offers: entry.productSlug ? {
          "@type": "Offer",
          url: path,
          price: convertAmount(entry.price),
          priceCurrency: currency.value
        } : void 0
      } : {
        "@type": "Product",
        "@id": `${path}#theme`,
        name: entry.name,
        description: entry.summary,
        image: entry.imageUrl || void 0,
        inLanguage: SEO_LOCALE_LANGUAGE[locale.value] || locale.value,
        offers: entry.productSlug ? {
          "@type": "Offer",
          url: path,
          price: convertAmount(entry.price),
          priceCurrency: currency.value
        } : void 0
      };
      return [entity, {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: brandName.value, item: "/" },
          { "@type": "ListItem", position: 2, name: entry.name, item: path }
        ]
      }];
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_3$3;
      const _component_UIcon = _sfc_main$R;
      if (__props.entry) {
        _push(`<main${ssrRenderAttrs(mergeProps({ class: "px-5 pb-20 pt-28 sm:px-8 sm:pt-36 lg:px-12" }, _attrs))}><div class="mx-auto max-w-6xl">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)(`/${__props.entry.kind === "app" ? "apps" : "themes"}`),
          class: "inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u2190 ${ssrInterpolate(__props.copy.common.back)}`);
            } else {
              return [
                createTextVNode("\u2190 " + toDisplayString(__props.copy.common.back), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<section class="mt-8 grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-start"><div>`);
        _push(ssrRenderComponent(MarketplaceVisual, {
          name: __props.entry.name,
          mark: __props.entry.mark,
          accent: __props.entry.accent,
          "image-url": __props.entry.imageUrl
        }, null, _parent));
        _push(`<article class="mt-8 space-y-10 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-10"><div><p class="text-xs font-black uppercase tracking-[0.18em] text-blue-600">${ssrInterpolate(__props.entry.contentTitle)}</p><p class="mt-4 text-lg leading-8 text-slate-600">${ssrInterpolate(__props.entry.summary)}</p></div><!--[-->`);
        ssrRenderList(__props.entry.sections, (section) => {
          _push(`<section><h2 class="text-2xl font-black text-slate-950">${ssrInterpolate(section.title)}</h2><!--[-->`);
          ssrRenderList(section.paragraphs, (paragraph) => {
            _push(`<p class="mt-4 leading-8 text-slate-600">${ssrInterpolate(paragraph)}</p>`);
          });
          _push(`<!--]--></section>`);
        });
        _push(`<!--]-->`);
        if (__props.entry.kind === "theme") {
          _push(`<section><h2 class="text-2xl font-black text-slate-950">${ssrInterpolate(__props.copy.themes.included)}</h2><ul class="mt-5 grid gap-3 sm:grid-cols-2"><!--[-->`);
          ssrRenderList(__props.copy.detail.themeSections, (item) => {
            _push(`<li class="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700"><span class="text-blue-600 font-bold">\u2713</span>${ssrInterpolate(item)}</li>`);
          });
          _push(`<!--]--></ul></section>`);
        } else {
          _push(`<!---->`);
        }
        if (releasesList.value.length > 0) {
          _push(`<section class="pt-8 border-t border-slate-100"><div class="flex items-center justify-between"><h2 class="text-2xl font-black text-slate-950">${ssrInterpolate(__props.copy.detail.versionsTitle)}</h2><span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">${ssrInterpolate(releasesList.value.length)} ${ssrInterpolate(__props.copy.common.version)}</span></div><div class="mt-6 space-y-4"><!--[-->`);
          ssrRenderList(visibleReleases.value, (rel, index) => {
            _push(`<div class="rounded-2xl border border-slate-100 bg-slate-50/80 p-5 transition-all hover:border-blue-100 hover:bg-blue-50/20"><div class="flex flex-wrap items-center justify-between gap-2"><div class="flex items-center gap-2.5"><span class="font-mono text-base font-black text-slate-950">v${ssrInterpolate(rel.version)}</span>`);
            if (index === 0) {
              _push(`<span class="rounded-full bg-blue-100 px-2 py-0.5 text-[11px] font-black text-blue-700 uppercase tracking-wider">${ssrInterpolate(__props.copy.detail.latestBadge)}</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
            if (rel.createdAt) {
              _push(`<time class="text-xs font-medium text-slate-400">${ssrInterpolate(rel.createdAt)}</time>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div><p class="mt-3 text-sm leading-6 text-slate-600 whitespace-pre-wrap">${ssrInterpolate(rel.notes || __props.copy.detail.noReleaseNotes)}</p></div>`);
          });
          _push(`<!--]--></div>`);
          if (releasesList.value.length > 3) {
            _push(`<div class="mt-4 text-center"><button type="button" class="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"><span>${ssrInterpolate(showAllReleases.value ? __props.copy.detail.collapseVersions : __props.copy.detail.showAllVersions)}</span>`);
            _push(ssrRenderComponent(_component_UIcon, {
              name: showAllReleases.value ? "ph:caret-up-bold" : "ph:caret-down-bold",
              class: "h-3.5 w-3.5"
            }, null, _parent));
            _push(`</button></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</section>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</article></div><aside class="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-blue-900/5 transition-shadow hover:shadow-2xl lg:sticky lg:top-28"><p class="text-xs font-black uppercase tracking-[0.18em] text-blue-600">${ssrInterpolate(__props.category)}</p><h1 class="mt-3 text-3xl font-black text-slate-950">${ssrInterpolate(__props.entry.name)}</h1><p class="mt-4 leading-7 text-slate-600">${ssrInterpolate(__props.entry.summary)}</p><dl class="mt-6 grid grid-cols-2 gap-3 text-sm">`);
        if (__props.entry.version) {
          _push(`<div class="rounded-2xl bg-slate-50 p-4"><dt class="text-slate-400">${ssrInterpolate(__props.copy.common.version)}</dt><dd class="mt-1 font-black">${ssrInterpolate(__props.entry.version)}</dd></div>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.entry.updatedAt || __props.entry.publishedAt) {
          _push(`<div class="rounded-2xl bg-slate-50 p-4"><dt class="text-slate-400">${ssrInterpolate(__props.copy.common.updated)}</dt><dd class="mt-1 font-black">${ssrInterpolate(__props.entry.updatedAt || __props.entry.publishedAt)}</dd></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</dl>`);
        if (__props.entry.kind === "app") {
          _push(`<div class="${ssrRenderClass([statusClass.value, "mt-6 rounded-2xl border px-4 py-3"])}"><p class="text-xs font-black uppercase tracking-[0.16em]">${ssrInterpolate(__props.copy.package.label)}</p><p class="mt-1 text-sm font-bold">${ssrInterpolate(statusLabel.value)}</p>`);
          if (__props.entry.artifactId) {
            _push(`<code class="mt-2 block text-xs opacity-70">${ssrInterpolate(__props.entry.packageKind)}/${ssrInterpolate(__props.entry.artifactId)}</code>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<div class="mt-6 flex flex-wrap gap-2"><span class="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-black text-blue-700">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:device-mobile-camera-bold",
            class: "h-3.5 w-3.5"
          }, null, _parent));
          _push(`<span>${ssrInterpolate(__props.copy.common.responsiveTag)}</span></span><span class="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-black text-emerald-700">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:seal-percent-fill",
            class: "h-3.5 w-3.5 text-emerald-500"
          }, null, _parent));
          _push(`<span>${ssrInterpolate(__props.copy.common.noFeeTag)}</span></span><span class="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1.5 text-xs font-black text-amber-700">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:lightning-fill",
            class: "h-3.5 w-3.5 text-amber-500"
          }, null, _parent));
          _push(`<span>${ssrInterpolate(__props.copy.common.fastSpeedTag)}</span></span></div>`);
        }
        _push(`<div class="mt-6 text-3xl font-black text-slate-950">${ssrInterpolate(__props.entry.price ? unref(formatAmount)(__props.entry.price) : __props.copy.common.free)}</div>`);
        if (__props.entry.kind === "theme") {
          _push(`<!--[-->`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(localePath)(`/user/stores?applyTheme=${encodeURIComponent(__props.entry.slug)}&themeName=${encodeURIComponent(__props.entry.name)}`),
            class: "mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 font-black text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700 hover:-translate-y-0.5 active:scale-95"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:sparkle-bold",
                  class: "h-5 w-5"
                }, null, _parent2, _scopeId));
                _push2(`<span${_scopeId}>${ssrInterpolate(__props.copy.common.useTheme || __props.copy.themes.buy)}</span>`);
              } else {
                return [
                  createVNode(_component_UIcon, {
                    name: "ph:sparkle-bold",
                    class: "h-5 w-5"
                  }),
                  createVNode("span", null, toDisplayString(__props.copy.common.useTheme || __props.copy.themes.buy), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
          if (__props.entry.demoUrl) {
            _push(`<a${ssrRenderAttr("href", __props.entry.demoUrl)} target="_blank" rel="noopener noreferrer" class="mt-3 flex w-full justify-center rounded-full border border-slate-200 px-6 py-3.5 font-black text-slate-700 transition-all hover:border-blue-300 hover:text-blue-600 active:scale-95">${ssrInterpolate(__props.copy.themes.preview)}</a>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        } else if (__props.entry.kind === "app") {
          _push(`<!--[-->`);
          if (!__props.entry.price || !__props.entry.productSlug) {
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)(`/user/stores?applyApp=${encodeURIComponent(__props.entry.slug)}&appName=${encodeURIComponent(__props.entry.name)}`),
              class: "mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 font-black text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700 hover:-translate-y-0.5 active:scale-95"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: "ph:package-bold",
                    class: "h-5 w-5"
                  }, null, _parent2, _scopeId));
                  _push2(`<span${_scopeId}>${ssrInterpolate(__props.copy.apps.buy)}</span>`);
                } else {
                  return [
                    createVNode(_component_UIcon, {
                      name: "ph:package-bold",
                      class: "h-5 w-5"
                    }),
                    createVNode("span", null, toDisplayString(__props.copy.apps.buy), 1)
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: unref(localePath)(`/products/${__props.entry.productSlug}`),
              class: "mt-6 flex w-full justify-center rounded-full bg-blue-600 px-6 py-3.5 font-black text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700 hover:-translate-y-0.5 active:scale-95"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(__props.copy.apps.buy)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(__props.copy.apps.buy), 1)
                  ];
                }
              }),
              _: 1
            }, _parent));
          }
          _push(`<!--]-->`);
        } else if (__props.entry.managementPath) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: __props.entry.managementPath,
            class: "mt-6 flex w-full justify-center rounded-full bg-blue-600 px-6 py-3.5 font-black text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700 hover:-translate-y-0.5 active:scale-95"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(__props.copy.package.manage)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(__props.copy.package.manage), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else if (__props.entry.productSlug) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(localePath)(`/products/${__props.entry.productSlug}`),
            class: "mt-6 flex w-full justify-center rounded-full bg-blue-600 px-6 py-3.5 font-black text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700 hover:-translate-y-0.5 active:scale-95"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(__props.copy.apps.buy)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(__props.copy.apps.buy), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<button type="button" disabled class="mt-6 w-full cursor-not-allowed rounded-full bg-slate-200 px-6 py-3.5 font-black text-slate-500">${ssrInterpolate(__props.copy.package.unavailable)}</button>`);
        }
        _push(`</aside></section></div></main>`);
      } else {
        _push(`<main${ssrRenderAttrs(mergeProps({ class: "flex min-h-[70vh] flex-col items-center justify-center px-5 pt-24 text-center" }, _attrs))}><h1 class="text-3xl font-black text-slate-950">404</h1><p class="mt-4 text-slate-500">${ssrInterpolate(__props.copy.common.notFound)}</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)(__props.kind === "app" ? "/apps" : "/themes"),
          class: "mt-6 rounded-full bg-blue-600 px-6 py-3 font-black text-white"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(__props.copy.common.back)}`);
            } else {
              return [
                createTextVNode(toDisplayString(__props.copy.common.back), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</main>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shoply/components/MarketplaceDetail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MarketplaceDetail = Object.assign(_sfc_main, { __name: "MarketplaceDetail" });

export { MarketplaceDetail as default };
//# sourceMappingURL=MarketplaceDetail-CdYXa86M.mjs.map
