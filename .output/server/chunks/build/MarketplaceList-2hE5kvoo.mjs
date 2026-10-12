import __nuxt_component_0$1 from './MarketplaceHero-CYb0f7hI.mjs';
import __nuxt_component_1 from './MarketplaceCard-BEsxtHLV.mjs';
import { defineComponent, ref, computed, watch, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { B as useLocaleRouter, R as useLocaleCurrency } from './server.mjs';
import './MarketplaceVisual-AVDGulXA.mjs';
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
  __name: "MarketplaceList",
  __ssrInlineRender: true,
  props: {
    kind: {},
    entries: {},
    copy: {},
    eyebrow: {},
    title: {},
    description: {}
  },
  setup(__props) {
    const props = __props;
    const { localePath } = useLocaleRouter();
    const { formatAmount } = useLocaleCurrency();
    const keyword = ref("");
    const selectedCategory = ref("all");
    const page = ref(1);
    const categoryLabel = (category) => {
      var _a;
      if (props.kind === "app") {
        const table2 = props.copy.appCategories;
        return ((_a = table2[category]) == null ? void 0 : _a[0]) || category;
      }
      const table = props.copy.themeCategories;
      return table[category] || category;
    };
    const categories = computed(() => [
      { value: "all", label: props.copy.common.all },
      ...Array.from(new Set(props.entries.map((entry) => entry.category))).map((category) => ({ value: category, label: categoryLabel(category) }))
    ]);
    const filteredEntries = computed(() => {
      const normalizedKeyword = keyword.value.trim().toLocaleLowerCase();
      return props.entries.filter((entry) => {
        if (selectedCategory.value !== "all" && entry.category !== selectedCategory.value) return false;
        if (!normalizedKeyword) return true;
        return `${entry.name} ${entry.summary} ${entry.category}`.toLocaleLowerCase().includes(normalizedKeyword);
      });
    });
    const pageCount = computed(() => Math.max(Math.ceil(filteredEntries.value.length / pageSize), 1));
    const pageEntries = computed(() => filteredEntries.value.slice((page.value - 1) * pageSize, page.value * pageSize));
    watch([keyword, selectedCategory], () => {
      page.value = 1;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MarketplaceHero = __nuxt_component_0$1;
      const _component_MarketplaceCard = __nuxt_component_1;
      _push(`<main${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_MarketplaceHero, {
        modelValue: keyword.value,
        "onUpdate:modelValue": ($event) => keyword.value = $event,
        searchable: "",
        eyebrow: __props.eyebrow,
        title: __props.title,
        description: __props.description,
        "search-placeholder": __props.copy.common.search
      }, null, _parent));
      _push(`<section class="px-5 py-16 sm:px-8 lg:px-12 lg:py-20"><div class="mx-auto max-w-[1440px]"><div class="flex gap-2 overflow-x-auto pb-3"><!--[-->`);
      ssrRenderList(categories.value, (category) => {
        _push(`<button type="button" class="${ssrRenderClass([selectedCategory.value === category.value ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" : "bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-600", "shrink-0 rounded-full px-5 py-2.5 text-sm font-black transition-all active:scale-95 duration-200"])}">${ssrInterpolate(category.label)}</button>`);
      });
      _push(`<!--]--></div>`);
      if (pageEntries.value.length) {
        _push(`<div class="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"><!--[-->`);
        ssrRenderList(pageEntries.value, (entry) => {
          _push(ssrRenderComponent(_component_MarketplaceCard, {
            key: `${entry.kind}:${entry.slug}`,
            entry,
            to: unref(localePath)(`/${__props.kind === "app" ? "apps" : "themes"}/${entry.slug}`),
            category: categoryLabel(entry.category),
            price: entry.price ? unref(formatAmount)(entry.price) : __props.copy.common.free,
            "details-label": __props.copy.common.details,
            "downloads-label": __props.copy.common.downloads
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="mt-8 rounded-[2rem] border border-dashed border-slate-300 px-6 py-24 text-center text-slate-500">${ssrInterpolate(__props.copy.common.empty)}</div>`);
      }
      if (pageCount.value > 1) {
        _push(`<div class="mt-10 flex items-center justify-center gap-4"><button type="button" class="rounded-full border border-slate-200 px-5 py-2.5 text-sm font-bold disabled:opacity-40"${ssrIncludeBooleanAttr(page.value === 1) ? " disabled" : ""}>${ssrInterpolate(__props.copy.common.previous)}</button><span class="text-sm font-black text-slate-600">${ssrInterpolate(page.value)} / ${ssrInterpolate(pageCount.value)}</span><button type="button" class="rounded-full border border-slate-200 px-5 py-2.5 text-sm font-bold disabled:opacity-40"${ssrIncludeBooleanAttr(page.value === pageCount.value) ? " disabled" : ""}>${ssrInterpolate(__props.copy.common.next)}</button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shoply/components/MarketplaceList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main, { __name: "MarketplaceList" });

export { __nuxt_component_0 as default };
