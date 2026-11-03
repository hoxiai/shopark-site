import { c as useSettings, j as _sfc_main$X } from './server.mjs';
import { defineComponent, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
import 'node:fs/promises';
import 'node:url';
import 'zod';
import '@iconify/utils';
import 'consola';
import 'node:zlib';
import 'ioredis';
import 'jose';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'node:child_process';
import 'process';
import 'buffer';
import 'node:dns/promises';
import 'node:net';
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
  __name: "ShoparkOAuthButtons",
  __ssrInlineRender: true,
  props: {
    continueLabel: {},
    redirect: {}
  },
  setup(__props) {
    const props = __props;
    const { getSetting } = useSettings();
    const PROVIDERS = [
      { key: "google", label: "Google", icon: "ph:google-logo-bold", path: "/api/auth/google" },
      { key: "github", label: "GitHub", icon: "ph:github-logo-bold", path: "/api/auth/github" }
    ];
    const providers = computed(() => {
      var _a;
      const enabled = new Set(
        String(getSetting("shopark_oauth_providers", "google,github")).split(",").map((item) => item.trim().toLowerCase()).filter(Boolean)
      );
      if (!enabled.size) return [];
      const redirect = ((_a = props.redirect) == null ? void 0 : _a.trim()) || "";
      const safeRedirect = redirect.startsWith("/") && !redirect.startsWith("//") && !redirect.includes("\\") ? redirect : "";
      return PROVIDERS.filter((provider) => enabled.has(provider.key)).map((provider) => ({
        ...provider,
        href: safeRedirect ? `${provider.path}?redirect=${encodeURIComponent(safeRedirect)}` : provider.path
      }));
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$X;
      if (providers.value.length) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-4" }, _attrs))}><div class="${ssrRenderClass([providers.value.length > 1 ? "sm:grid-cols-2" : "", "grid gap-3"])}"><!--[-->`);
        ssrRenderList(providers.value, (provider) => {
          _push(`<a${ssrRenderAttr("href", provider.href)} class="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-3 text-sm font-bold text-slate-700 shadow-xs transition-all hover:border-slate-300 hover:bg-slate-50 active:scale-[0.99]">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: provider.icon,
            class: "h-5 w-5"
          }, null, _parent));
          _push(`<span>${ssrInterpolate(provider.label)}</span></a>`);
        });
        _push(`<!--]--></div><div class="relative flex items-center justify-center py-1"><span class="absolute inset-x-0 h-px bg-slate-200/80"></span><span class="relative bg-white px-3 text-xs font-medium uppercase tracking-wider text-slate-400">${ssrInterpolate(__props.continueLabel)}</span></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shopark/components/ShoparkOAuthButtons.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main, { __name: "ShoparkOAuthButtons" });

export { __nuxt_component_1 as default };
//# sourceMappingURL=ShoparkOAuthButtons-CwqkhJ1k.mjs.map
