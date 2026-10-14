import { D as useLocaleRouter, r as useSettings, F as useCurrencyFormat, y as useFetch, bg as useSeoMeta, i as _sfc_main$N, J as useHead, o as navigateTo } from './server.mjs';
import { defineComponent, computed, mergeProps, withCtx, unref, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { useRoute, useRouter } from 'vue-router';
import { u as useShoplyConsoleCopy, f as formatCopy } from './useShoplyConsole-BQNzlTF_.mjs';
import { u as useShoplyOrderStatus } from './useShoplyOrderStatus-BwupVc_x.mjs';
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

function usePagePrintStyles(css, key) {
  return useHead({ style: [{ key: `page-print:${key}`, media: "print", textContent: css }] });
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[order_id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const router = useRouter();
    const { copy } = useShoplyConsoleCopy();
    const { localePath } = useLocaleRouter();
    const { getSetting } = useSettings();
    const { formatCurrencyAmount } = useCurrencyFormat();
    const { payStatusLabel } = useShoplyOrderStatus();
    const orderId = computed(() => {
      const slug = route.params.slug;
      if (Array.isArray(slug) && slug.length) return String(slug.at(-1) || "");
      return typeof slug === "string" ? slug : "";
    });
    const { data: invoice, error } = useFetch(
      () => `/api/users/invoice/${encodeURIComponent(orderId.value)}`,
      {
        lazy: true,
        key: computed(() => `shoply-invoice-${orderId.value}`)
      },
      "$7O5RJWjOdz"
      /* nuxt-injected */
    );
    const printInvoice = () => (void 0).print();
    const goBack = () => {
      if ((void 0).history.length > 1) router.back();
      else navigateTo(localePath("/user/orders"));
    };
    useSeoMeta({
      title: () => formatCopy(copy.value.invoice.title, { id: orderId.value.slice(0, 8).toUpperCase() }),
      robots: "noindex, nofollow"
    });
    usePagePrintStyles("@page {\n    size: A4 portrait;\n    margin: 12mm 15mm;\n  }\nheader,\n  footer {\n    display: none !important;\n  }\nmain {\n    padding-top: 0 !important;\n  }", "shoply-invoice");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = _sfc_main$N;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-slate-100 px-4 py-8 print:min-h-0 print:bg-white print:p-0 sm:py-12" }, _attrs))}><div class="mx-auto max-w-3xl"><div class="mb-6 flex flex-wrap items-center justify-between gap-3 print:hidden">`);
      _push(ssrRenderComponent(_component_UButton, {
        color: "neutral",
        variant: "ghost",
        icon: "ph:arrow-left-bold",
        class: "rounded-full",
        onClick: goBack
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(copy).invoice.back)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(copy).invoice.back), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(invoice)) {
        _push(ssrRenderComponent(_component_UButton, {
          icon: "ph:printer-bold",
          class: "rounded-full font-bold",
          onClick: printInvoice
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(copy).invoice.print)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(copy).invoice.print), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="rounded-3xl bg-white p-6 shadow-xl shadow-slate-900/5 print:rounded-none print:p-0 print:shadow-none sm:p-12">`);
      if (!unref(invoice) && !unref(error)) {
        _push(`<p class="py-20 text-center text-sm text-slate-500">${ssrInterpolate(unref(copy).invoice.loading)}</p>`);
      } else if (unref(error) || !unref(invoice)) {
        _push(`<p class="py-20 text-center text-sm text-slate-500">${ssrInterpolate(unref(copy).invoice.notFound)}</p>`);
      } else {
        _push(`<!--[--><div class="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between"><div><p class="text-2xl font-black tracking-tight text-slate-950">${ssrInterpolate(unref(getSetting)("site_name") || unref(copy).brand)}</p>`);
        if (unref(getSetting)("site_url")) {
          _push(`<p class="mt-1 text-xs text-slate-500">${ssrInterpolate(unref(getSetting)("site_url"))}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="text-left sm:text-right"><h1 class="text-3xl font-black text-slate-950">${ssrInterpolate(unref(copy).invoice.invoice)}</h1><dl class="mt-3 space-y-1 text-sm"><div class="flex gap-2 sm:justify-end"><dt class="text-slate-500">${ssrInterpolate(unref(copy).invoice.number)}</dt><dd class="font-mono font-semibold text-slate-900">INV-${ssrInterpolate(unref(invoice).id.slice(0, 8).toUpperCase())}</dd></div><div class="flex gap-2 sm:justify-end"><dt class="text-slate-500">${ssrInterpolate(unref(copy).invoice.issued)}</dt><dd class="font-semibold text-slate-900">${ssrInterpolate(unref(invoice).dateIssue)}</dd></div><div class="flex gap-2 sm:justify-end"><dt class="text-slate-500">${ssrInterpolate(unref(copy).invoice.status)}</dt><dd class="font-semibold text-slate-900">${ssrInterpolate(unref(payStatusLabel)(unref(invoice).status))}</dd></div></dl></div></div><div class="mt-10 grid gap-8 border-t border-slate-100 pt-8 sm:grid-cols-2"><div><p class="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">${ssrInterpolate(unref(copy).invoice.from)}</p><p class="mt-2 font-bold text-slate-900">${ssrInterpolate(unref(getSetting)("company_name") || unref(getSetting)("site_name"))}</p>`);
        if (unref(getSetting)("company_address")) {
          _push(`<p class="mt-1 text-sm leading-6 text-slate-500">${ssrInterpolate(unref(getSetting)("company_address"))}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(getSetting)("company_email")) {
          _push(`<p class="mt-1 text-sm text-blue-600">${ssrInterpolate(unref(getSetting)("company_email"))}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div><p class="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">${ssrInterpolate(unref(copy).invoice.billTo)}</p><p class="mt-2 break-all font-bold text-slate-900">${ssrInterpolate(unref(invoice).client.name)}</p>`);
        if (unref(invoice).client.email && unref(invoice).client.email !== unref(invoice).client.name) {
          _push(`<p class="mt-1 break-all text-sm text-slate-500">${ssrInterpolate(unref(invoice).client.email)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="mt-10 overflow-x-auto"><table class="w-full min-w-[480px] text-left text-sm"><thead><tr class="border-b border-slate-200 text-xs text-slate-500"><th class="py-3 font-semibold">${ssrInterpolate(unref(copy).invoice.description)}</th><th class="py-3 text-center font-semibold">${ssrInterpolate(unref(copy).invoice.qty)}</th><th class="py-3 text-right font-semibold">${ssrInterpolate(unref(copy).invoice.rate)}</th><th class="py-3 text-right font-semibold">${ssrInterpolate(unref(copy).invoice.amount)}</th></tr></thead><tbody><tr class="border-b border-slate-100"><td class="py-4 font-semibold text-slate-900">${ssrInterpolate(unref(invoice).description)}</td><td class="py-4 text-center text-slate-600">${ssrInterpolate(unref(invoice).qty)}</td><td class="py-4 text-right text-slate-600">${ssrInterpolate(unref(formatCurrencyAmount)(unref(invoice).rate, unref(invoice).currency))}</td><td class="py-4 text-right font-bold text-slate-900">${ssrInterpolate(unref(formatCurrencyAmount)(unref(invoice).amount, unref(invoice).currency))}</td></tr></tbody></table></div><div class="mt-6 ml-auto w-full max-w-xs space-y-2 text-sm"><div class="flex justify-between text-slate-500"><span>${ssrInterpolate(unref(copy).invoice.subtotal)}</span><span class="text-slate-900">${ssrInterpolate(unref(formatCurrencyAmount)(unref(invoice).amount, unref(invoice).currency))}</span></div><div class="flex justify-between text-slate-500"><span>${ssrInterpolate(unref(copy).invoice.tax)}</span><span class="text-slate-900">${ssrInterpolate(unref(formatCurrencyAmount)(0, unref(invoice).currency))}</span></div><div class="flex justify-between border-t border-slate-200 pt-3 text-base font-black text-slate-950"><span>${ssrInterpolate(unref(formatCopy)(unref(copy).invoice.total, { currency: unref(invoice).currency }))}</span><span>${ssrInterpolate(unref(formatCurrencyAmount)(unref(invoice).amount, unref(invoice).currency))}</span></div></div><div class="mt-12 border-t border-slate-100 pt-6 text-center text-xs leading-6 text-slate-400"><p>${ssrInterpolate(unref(copy).invoice.thanks)}</p><p>${ssrInterpolate(unref(copy).invoice.generated)}</p></div><!--]-->`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shoply/pages/user/invoice/[order_id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_order_id_-B5TKUuVb.mjs.map
