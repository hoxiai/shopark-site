import { u as useI18n, D as useLocaleRouter, t as useAsyncData, bg as useSeoMeta, _ as _sfc_main$V, N as __nuxt_component_3$4 } from './server.mjs';
import ShoplyLeadForm from './ShoplyLeadForm-BPVVz4Cl.mjs';
import { defineComponent, computed, withAsyncContext, ref, mergeProps, unref, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { u as useShoplyAuthLinks } from './useShoplyAuthLinks-1qS_J9sZ.mjs';
import { c as casesBanner } from './cases-banner-orEhwJ1M.mjs';
import { h as heroImg } from './b2b-hero-BmxDzkof.mjs';
import { b as bannerImg } from './banner-CA2b0UIS.mjs';
import { l as logisticsImg, a as advantageImg } from './b2c-logistics-DYQpObZh.mjs';
import { s as shoplyCaseLocales, d as defaultShoplyCases, l as localizeShoplyCase } from './cases-D3C6Yoau.mjs';
import { m as markdownToHtml } from './markdown-CTbgD6Gu.mjs';
import { s as sanitizeRichHtml } from './sanitize-html-6xfxlt13.mjs';
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
import './CaptchaSlider-BJqv3jPw.mjs';
import 'marked';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const presetCaseCovers = {
      "b2b-valve-manufacturing": heroImg,
      "amazon-auker-electronics": bannerImg,
      "dtc-nordiq-furniture": advantageImg,
      "dtc-solara-swimwear": casesBanner,
      "b2b-autoparts-wholesale": logisticsImg,
      "/themes/shoply/assets/cases/case-b2b.png": heroImg,
      "/themes/shoply/assets/cases/case-amazon.png": bannerImg,
      "/themes/shoply/assets/cases/case-dtc.png": advantageImg,
      "/themes/shoply/assets/cases/case-swim.png": casesBanner,
      "/themes/shoply/assets/cases/case-auto.png": logisticsImg
    };
    const resolveCaseCover = (item) => {
      if (!item) return casesBanner;
      if (item.coverImage && presetCaseCovers[item.coverImage]) {
        return presetCaseCovers[item.coverImage];
      }
      if (item.coverImage && !item.coverImage.startsWith("/themes/shoply/")) {
        return item.coverImage;
      }
      return presetCaseCovers[item.id] || casesBanner;
    };
    const route = useRoute();
    const { locale } = useI18n();
    const { localePath } = useLocaleRouter();
    const { signUpUrl } = useShoplyAuthLinks();
    const slug = computed(() => String(route.params.slug || ""));
    const caseLang = computed(
      () => shoplyCaseLocales.includes(locale.value) ? locale.value : "zh"
    );
    const caseDetailLocales = {
      zh: {
        notFound: {
          title: "\u672A\u627E\u5230\u8BE5\u5BA2\u6237\u6848\u4F8B",
          description: "\u8BE5\u6848\u4F8B\u53EF\u80FD\u5DF2\u66F4\u540D\u3001\u5DF2\u4E0B\u67B6\u6216\u6682\u672A\u516C\u5F00\u5C55\u793A\u3002",
          back: "\u8FD4\u56DE\u6848\u4F8B\u5E93"
        },
        breadcrumb: { home: "\u9996\u9875", cases: "\u5BA2\u6237\u6848\u4F8B" },
        backToCases: "\u8FD4\u56DE\u5168\u90E8\u6848\u4F8B",
        featured: "\u7CBE\u9009",
        clientLabel: "\u5BA2\u6237\uFF1A",
        deliveryLabel: "\u4E0A\u7EBF\u5468\u671F\uFF1A",
        defaultSecondaryMetricLabel: "\u5173\u952E\u6210\u6548",
        visitSite: "\u5728\u7EBF\u4F53\u9A8C\u7AD9\u70B9",
        consult: "\u65B9\u6848\u4EA4\u6D41",
        profile: {
          title: "\u6848\u4F8B\u57FA\u672C\u6863\u6848",
          clientName: "\u5BA2\u6237\u540D\u79F0",
          category: "\u6240\u5C5E\u6A21\u5F0F",
          industry: "\u7EC6\u5206\u884C\u4E1A",
          delivery: "\u4E0A\u7EBF\u5468\u671F",
          website: "\u6F14\u793A\u7AD9\u70B9",
          visit: "\u8BBF\u95EE",
          cta: "\u9884\u7EA6\u4E1A\u52A1\u65B9\u6848\u4EA4\u6D41"
        },
        related: { title: "\u66F4\u591A\u540C\u7C7B\u6848\u4F8B" },
        bottom: {
          title: "\u60F3\u63A2\u8BA8\u9002\u5408\u60A8\u4E1A\u52A1\u7684\u72EC\u7ACB\u7AD9\u642D\u5EFA\u65B9\u6848\uFF1F",
          subtitle: "\u7ED3\u5408\u60A8\u7684\u4EA7\u54C1\u7279\u70B9\u4E0E\u5BA2\u6237\u7FA4\u4F53\uFF0C\u5236\u5B9A\u52A1\u5B9E\u53EF\u884C\u7684\u72EC\u7ACB\u7AD9\u914D\u7F6E\u4E0E\u4E0A\u7EBF\u6B65\u9AA4\u3002",
          primaryText: "\u514D\u8D39\u4F53\u9A8C",
          secondaryText: "\u9884\u7EA6\u54A8\u8BE2"
        },
        consultModal: {
          title: "\u4E1A\u52A1\u5EFA\u7AD9\u54A8\u8BE2",
          subtitle: "\u6C9F\u901A\u4EA7\u54C1\u54C1\u7C7B\u4E0E\u5EFA\u7AD9\u914D\u7F6E\u7EC6\u8282"
        },
        seo: {
          titleSuffix: "\u5BA2\u6237\u6848\u4F8B",
          defaultTitle: "\u5BA2\u6237\u6848\u4F8B",
          defaultDescription: "\u8F7B\u94FA \u72EC\u7ACB\u7AD9\u5BA2\u6237\u771F\u5B9E\u5EFA\u7AD9\u5B9E\u8DF5\u53C2\u8003\u3002",
          defaultKeywords: "\u8F7B\u94FA\u5BA2\u6237\u6848\u4F8B, \u72EC\u7ACB\u7AD9\u51FA\u6D77"
        }
      },
      "zh-HK": {
        notFound: {
          title: "\u672A\u627E\u5230\u8A72\u5BA2\u6236\u6848\u4F8B",
          description: "\u8A72\u6848\u4F8B\u53EF\u80FD\u5DF2\u66F4\u540D\u3001\u5DF2\u4E0B\u67B6\u6216\u66AB\u672A\u516C\u958B\u767C\u5E03\u3002",
          back: "\u8FD4\u56DE\u6848\u4F8B\u5EAB"
        },
        breadcrumb: { home: "\u9996\u9801", cases: "\u5BA2\u6236\u6848\u4F8B" },
        backToCases: "\u8FD4\u56DE\u5168\u90E8\u6848\u4F8B",
        featured: "\u7CBE\u9078",
        clientLabel: "\u5BA2\u6236\uFF1A",
        deliveryLabel: "\u4E0A\u7DDA\u9031\u671F\uFF1A",
        defaultSecondaryMetricLabel: "\u95DC\u9375\u6210\u6548",
        visitSite: "\u7DDA\u4E0A\u9AD4\u9A57\u7AD9\u9EDE",
        consult: "\u65B9\u6848\u4EA4\u6D41",
        profile: {
          title: "\u6848\u4F8B\u57FA\u672C\u6A94\u6848",
          clientName: "\u5BA2\u6236\u540D\u7A31",
          category: "\u6240\u5C6C\u6A21\u5F0F",
          industry: "\u7D30\u5206\u884C\u696D",
          delivery: "\u4E0A\u7DDA\u9031\u671F",
          website: "\u6F14\u793A\u7AD9\u9EDE",
          visit: "\u8A2A\u554F",
          cta: "\u9810\u7D04\u696D\u52D9\u65B9\u6848\u4EA4\u6D41"
        },
        related: { title: "\u66F4\u591A\u540C\u985E\u6848\u4F8B" },
        bottom: {
          title: "\u60F3\u63A2\u8A0E\u9069\u5408\u60A8\u696D\u52D9\u7684\u7368\u7ACB\u7AD9\u642D\u5EFA\u65B9\u6848\uFF1F",
          subtitle: "\u7D50\u5408\u60A8\u7684\u7522\u54C1\u7279\u9EDE\u8207\u5BA2\u6236\u7FA4\u9AD4\uFF0C\u5236\u5B9A\u52D9\u5BE6\u53EF\u884C\u7684\u7368\u7ACB\u7AD9\u914D\u7F6E\u8207\u4E0A\u7DDA\u6B65\u9A5F\u3002",
          primaryText: "\u514D\u8CBB\u9AD4\u9A57",
          secondaryText: "\u9810\u7D04\u8AEE\u8A62"
        },
        consultModal: {
          title: "\u696D\u52D9\u5EFA\u7AD9\u8AEE\u8A62",
          subtitle: "\u6E9D\u901A\u7522\u54C1\u54C1\u985E\u8207\u5EFA\u7AD9\u914D\u7F6E\u7D30\u7BC0"
        },
        seo: {
          titleSuffix: "\u5BA2\u6236\u6848\u4F8B",
          defaultTitle: "\u5BA2\u6236\u6848\u4F8B",
          defaultDescription: "\u8F15\u92EA \u7368\u7ACB\u7AD9\u5BA2\u6236\u771F\u5BE6\u5EFA\u7AD9\u5BE6\u8E10\u53C3\u8003\u3002",
          defaultKeywords: "\u8F15\u92EA\u6848\u4F8B,\u5EFA\u7AD9\u6848\u4F8B,\u7368\u7ACB\u7AD9\u5BE6\u8E10"
        }
      },
      en: {
        notFound: {
          title: "Case not found",
          description: "This case may have been renamed, unpublished, or is not yet public.",
          back: "Back to cases"
        },
        breadcrumb: { home: "Home", cases: "Customer cases" },
        backToCases: "Back to all cases",
        featured: "Featured",
        clientLabel: "Client: ",
        deliveryLabel: "Launch time: ",
        defaultSecondaryMetricLabel: "Key result",
        visitSite: "Visit live site",
        consult: "Discuss a plan",
        profile: {
          title: "Case profile",
          clientName: "Client",
          category: "Business model",
          industry: "Industry",
          delivery: "Launch time",
          website: "Demo site",
          visit: "Visit",
          cta: "Book a plan consultation"
        },
        related: { title: "More cases like this" },
        bottom: {
          title: "Want to discuss a standalone site that fits your business?",
          subtitle: "We shape a practical storefront setup and launch plan around your products and customers.",
          primaryText: "Start for free",
          secondaryText: "Book a consultation"
        },
        consultModal: {
          title: "Storefront consultation",
          subtitle: "Tell us about your product category and storefront setup"
        },
        seo: {
          titleSuffix: "case study",
          defaultTitle: "Customer cases",
          defaultDescription: "Real storefront case studies from Qingpu customers.",
          defaultKeywords: "Qingpu cases,storefront cases,ecommerce case studies"
        }
      },
      ru: {
        notFound: {
          title: "\u041A\u0435\u0439\u0441 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D",
          description: "\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u043A\u0435\u0439\u0441 \u043F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D, \u0441\u043D\u044F\u0442 \u0441 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438 \u0438\u043B\u0438 \u0435\u0449\u0451 \u043D\u0435 \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D.",
          back: "\u041D\u0430\u0437\u0430\u0434 \u043A \u043A\u0435\u0439\u0441\u0430\u043C"
        },
        breadcrumb: { home: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F", cases: "\u041A\u0435\u0439\u0441\u044B \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432" },
        backToCases: "\u0412\u0441\u0435 \u043A\u0435\u0439\u0441\u044B",
        featured: "\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435",
        clientLabel: "\u041A\u043B\u0438\u0435\u043D\u0442: ",
        deliveryLabel: "\u0421\u0440\u043E\u043A \u0437\u0430\u043F\u0443\u0441\u043A\u0430: ",
        defaultSecondaryMetricLabel: "\u041A\u043B\u044E\u0447\u0435\u0432\u043E\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442",
        visitSite: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0441\u0430\u0439\u0442",
        consult: "\u041E\u0431\u0441\u0443\u0434\u0438\u0442\u044C \u0440\u0435\u0448\u0435\u043D\u0438\u0435",
        profile: {
          title: "\u041E \u043A\u0435\u0439\u0441\u0435",
          clientName: "\u041A\u043B\u0438\u0435\u043D\u0442",
          category: "\u041C\u043E\u0434\u0435\u043B\u044C \u0431\u0438\u0437\u043D\u0435\u0441\u0430",
          industry: "\u041E\u0442\u0440\u0430\u0441\u043B\u044C",
          delivery: "\u0421\u0440\u043E\u043A \u0437\u0430\u043F\u0443\u0441\u043A\u0430",
          website: "\u0414\u0435\u043C\u043E-\u0441\u0430\u0439\u0442",
          visit: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C",
          cta: "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044E"
        },
        related: { title: "\u041F\u043E\u0445\u043E\u0436\u0438\u0435 \u043A\u0435\u0439\u0441\u044B" },
        bottom: {
          title: "\u0425\u043E\u0442\u0438\u0442\u0435 \u043E\u0431\u0441\u0443\u0434\u0438\u0442\u044C \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0439 \u0441\u0430\u0439\u0442 \u043F\u043E\u0434 \u0432\u0430\u0448 \u0431\u0438\u0437\u043D\u0435\u0441?",
          subtitle: "\u0421\u043E\u0431\u0435\u0440\u0451\u043C \u043F\u0440\u0430\u043A\u0442\u0438\u0447\u043D\u0443\u044E \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044E \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430 \u0438 \u043F\u043B\u0430\u043D \u0437\u0430\u043F\u0443\u0441\u043A\u0430 \u043F\u043E\u0434 \u0432\u0430\u0448\u0438 \u0442\u043E\u0432\u0430\u0440\u044B \u0438 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432.",
          primaryText: "\u041F\u043E\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u0442\u044C \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E",
          secondaryText: "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044E"
        },
        consultModal: {
          title: "\u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044F \u043F\u043E \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0443",
          subtitle: "\u0420\u0430\u0441\u0441\u043A\u0430\u0436\u0438\u0442\u0435 \u043E \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u0438 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u0445 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430"
        },
        seo: {
          titleSuffix: "\u043A\u0435\u0439\u0441",
          defaultTitle: "\u041A\u0435\u0439\u0441\u044B \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432",
          defaultDescription: "\u0420\u0435\u0430\u043B\u044C\u043D\u044B\u0435 \u043A\u0435\u0439\u0441\u044B \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u043E\u0432 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 Qingpu.",
          defaultKeywords: "\u043A\u0435\u0439\u0441\u044B Qingpu,\u043A\u0435\u0439\u0441\u044B \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u043E\u0432,\u043A\u0435\u0439\u0441\u044B \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043C\u0430\u0433\u0430\u0437\u0438\u043D\u043E\u0432"
        }
      }
    };
    const copy = computed(() => caseDetailLocales[caseLang.value]);
    const { data: detailData } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      `shoply-case-${slug.value}`,
      () => $fetch(`/api/shoply/cases/${slug.value}`).catch(() => null)
    )), __temp = await __temp, __restore(), __temp);
    const { data: listData } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "shoply-cases-list",
      () => $fetch("/api/shoply/cases").catch(() => ({ cases: [] }))
    )), __temp = await __temp, __restore(), __temp);
    const caseItem = computed(() => {
      var _a;
      const base = ((_a = detailData.value) == null ? void 0 : _a.case) || defaultShoplyCases.find((c) => c.id === slug.value) || null;
      return base ? localizeShoplyCase(base, caseLang.value) : null;
    });
    const renderedContent = computed(() => {
      var _a;
      if (!((_a = caseItem.value) == null ? void 0 : _a.content)) return "";
      return sanitizeRichHtml(markdownToHtml(caseItem.value.content));
    });
    const allCases = computed(() => {
      var _a;
      const source = ((_a = listData.value) == null ? void 0 : _a.cases) && listData.value.cases.length > 0 ? listData.value.cases : defaultShoplyCases;
      return source.map((item) => localizeShoplyCase(item, caseLang.value));
    });
    const relatedCases = computed(() => {
      if (!caseItem.value) return [];
      return allCases.value.filter((c) => c.id !== caseItem.value.id).slice(0, 3);
    });
    const isConsultOpen = ref(false);
    useSeoMeta({
      title: () => caseItem.value ? `${caseItem.value.title} \xB7 ${caseItem.value.clientName} ${copy.value.seo.titleSuffix}` : copy.value.seo.defaultTitle,
      description: () => {
        var _a;
        return ((_a = caseItem.value) == null ? void 0 : _a.summary) || copy.value.seo.defaultDescription;
      },
      keywords: () => {
        var _a;
        return ((_a = caseItem.value) == null ? void 0 : _a.tags) ? caseItem.value.tags.join(", ") : copy.value.seo.defaultKeywords;
      },
      ogTitle: () => caseItem.value ? `${caseItem.value.title} - ${caseItem.value.clientName}` : copy.value.seo.defaultTitle,
      ogDescription: () => {
        var _a;
        return ((_a = caseItem.value) == null ? void 0 : _a.summary) || copy.value.seo.defaultDescription;
      },
      ogType: "article",
      ogImage: () => casesBanner,
      twitterCard: "summary_large_image",
      twitterTitle: () => caseItem.value ? `${caseItem.value.title} - ${caseItem.value.clientName}` : copy.value.seo.defaultTitle,
      twitterDescription: () => {
        var _a;
        return ((_a = caseItem.value) == null ? void 0 : _a.summary) || copy.value.seo.defaultDescription;
      },
      twitterImage: () => casesBanner
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_UIcon = _sfc_main$V;
      const _component_NuxtLink = __nuxt_component_3$4;
      const _component_ShoplyLeadForm = ShoplyLeadForm;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-slate-50/50 font-sans text-slate-900 selection:bg-blue-100" }, _attrs))}>`);
      if (!caseItem.value) {
        _push(`<div class="mx-auto max-w-4xl px-5 py-28 text-center sm:px-8"><div class="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:briefcase-duotone",
          class: "h-8 w-8"
        }, null, _parent));
        _push(`</div><h1 class="mt-6 text-2xl font-bold text-slate-900 sm:text-3xl">${ssrInterpolate(copy.value.notFound.title)}</h1><p class="mt-3 text-sm text-slate-500">${ssrInterpolate(copy.value.notFound.description)}</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)("/cases"),
          class: "mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:arrow-left-bold",
                class: "h-4 w-4"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>${ssrInterpolate(copy.value.notFound.back)}</span>`);
            } else {
              return [
                createVNode(_component_UIcon, {
                  name: "ph:arrow-left-bold",
                  class: "h-4 w-4"
                }),
                createVNode("span", null, toDisplayString(copy.value.notFound.back), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<article class="relative"><section class="border-b border-slate-200/80 bg-white px-5 pt-8 pb-8 sm:px-8 sm:pt-12 sm:pb-10 lg:px-12"><div class="mx-auto max-w-[1140px]"><div class="flex items-center justify-between gap-4 text-xs text-slate-500">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)("/cases"),
          class: "group inline-flex items-center gap-1.5 font-medium hover:text-blue-600 transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:arrow-left-bold",
                class: "h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>${ssrInterpolate(copy.value.backToCases)}</span>`);
            } else {
              return [
                createVNode(_component_UIcon, {
                  name: "ph:arrow-left-bold",
                  class: "h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5"
                }),
                createVNode("span", null, toDisplayString(copy.value.backToCases), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="hidden sm:flex items-center gap-2 text-slate-400">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)("/"),
          class: "hover:text-slate-600"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(copy.value.breadcrumb.home)}`);
            } else {
              return [
                createTextVNode(toDisplayString(copy.value.breadcrumb.home), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<span>/</span>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)("/cases"),
          class: "hover:text-slate-600"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(copy.value.breadcrumb.cases)}`);
            } else {
              return [
                createTextVNode(toDisplayString(copy.value.breadcrumb.cases), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<span>/</span><span class="text-slate-700 font-medium truncate max-w-[200px]">${ssrInterpolate(caseItem.value.clientName)}</span></div></div><div class="mt-6"><div class="flex flex-wrap items-center gap-2"><span class="rounded-full bg-slate-100 px-3 py-0.5 text-xs font-medium text-slate-700">${ssrInterpolate(caseItem.value.categoryLabel)}</span>`);
        if (caseItem.value.industry) {
          _push(`<span class="rounded-full bg-slate-100 px-3 py-0.5 text-xs text-slate-600">${ssrInterpolate(caseItem.value.industry)}</span>`);
        } else {
          _push(`<!---->`);
        }
        if (caseItem.value.isFeatured) {
          _push(`<span class="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">${ssrInterpolate(copy.value.featured)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><h1 class="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">${ssrInterpolate(caseItem.value.title)}</h1><p class="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">${ssrInterpolate(caseItem.value.summary)}</p><div class="mt-5 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500"><span class="font-medium text-slate-700">${ssrInterpolate(copy.value.clientLabel)}${ssrInterpolate(caseItem.value.clientName)}</span>`);
        if (caseItem.value.deliveryPeriod) {
          _push(`<span>${ssrInterpolate(copy.value.deliveryLabel)}${ssrInterpolate(caseItem.value.deliveryPeriod)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="mt-8 flex flex-wrap items-center justify-between gap-6 border-t border-slate-100 pt-6"><div class="flex flex-wrap items-center gap-8 sm:gap-12"><div><div class="text-2xl sm:text-3xl font-bold text-blue-600">${ssrInterpolate(caseItem.value.metricValue)}</div><div class="mt-0.5 text-xs text-slate-500">${ssrInterpolate(caseItem.value.metricLabel)}</div></div>`);
        if (caseItem.value.secondaryMetricValue) {
          _push(`<div><div class="text-2xl sm:text-3xl font-bold text-slate-800">${ssrInterpolate(caseItem.value.secondaryMetricValue)}</div><div class="mt-0.5 text-xs text-slate-500">${ssrInterpolate(caseItem.value.secondaryMetricLabel || copy.value.defaultSecondaryMetricLabel)}</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="flex items-center gap-3">`);
        if (caseItem.value.websiteUrl) {
          _push(`<a${ssrRenderAttr("href", caseItem.value.websiteUrl)} target="_blank" rel="noopener" class="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-50"><span>${ssrInterpolate(copy.value.visitSite)}</span>`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:arrow-square-out",
            class: "h-3.5 w-3.5 text-slate-400"
          }, null, _parent));
          _push(`</a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<button type="button" class="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-5 py-2 text-xs font-semibold text-white transition-colors hover:bg-blue-700">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:chats-teardrop-bold",
          class: "h-3.5 w-3.5"
        }, null, _parent));
        _push(`<span>${ssrInterpolate(copy.value.consult)}</span></button></div></div></div></section><section class="mx-auto max-w-[1140px] px-5 pt-8 sm:px-8 lg:px-12"><div class="overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-xs"><img${ssrRenderAttr("src", resolveCaseCover(caseItem.value))}${ssrRenderAttr("alt", caseItem.value.title)} class="w-full object-cover max-h-[380px]" loading="lazy"></div></section><section class="mx-auto max-w-[1140px] px-5 py-10 sm:px-8 sm:py-14 lg:px-12"><div class="grid gap-10 lg:grid-cols-12"><div class="lg:col-span-8">`);
        if (caseItem.value.content) {
          _push(`<div class="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8"><div class="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-h2:text-lg prose-h2:mt-6 prose-h2:pb-2 prose-h2:border-b prose-h2:border-slate-100 prose-p:text-sm prose-p:leading-relaxed prose-li:text-sm prose-li:leading-relaxed prose-img:rounded-xl prose-img:shadow-sm">${(_a = renderedContent.value) != null ? _a : ""}</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><aside class="lg:col-span-4 space-y-6"><div class="rounded-2xl border border-slate-200/80 bg-white p-5"><h3 class="text-xs font-bold text-slate-900 uppercase tracking-wider">${ssrInterpolate(copy.value.profile.title)}</h3><dl class="mt-3 divide-y divide-slate-100 text-xs"><div class="py-2.5 flex justify-between"><dt class="text-slate-400">${ssrInterpolate(copy.value.profile.clientName)}</dt><dd class="font-medium text-slate-800">${ssrInterpolate(caseItem.value.clientName)}</dd></div><div class="py-2.5 flex justify-between"><dt class="text-slate-400">${ssrInterpolate(copy.value.profile.category)}</dt><dd class="font-medium text-slate-700">${ssrInterpolate(caseItem.value.categoryLabel)}</dd></div>`);
        if (caseItem.value.industry) {
          _push(`<div class="py-2.5 flex justify-between"><dt class="text-slate-400">${ssrInterpolate(copy.value.profile.industry)}</dt><dd class="font-medium text-slate-700">${ssrInterpolate(caseItem.value.industry)}</dd></div>`);
        } else {
          _push(`<!---->`);
        }
        if (caseItem.value.deliveryPeriod) {
          _push(`<div class="py-2.5 flex justify-between"><dt class="text-slate-400">${ssrInterpolate(copy.value.profile.delivery)}</dt><dd class="font-medium text-slate-700">${ssrInterpolate(caseItem.value.deliveryPeriod)}</dd></div>`);
        } else {
          _push(`<!---->`);
        }
        if (caseItem.value.websiteUrl) {
          _push(`<div class="py-2.5 flex justify-between items-center"><dt class="text-slate-400">${ssrInterpolate(copy.value.profile.website)}</dt><dd><a${ssrRenderAttr("href", caseItem.value.websiteUrl)} target="_blank" rel="noopener" class="text-blue-600 hover:underline flex items-center gap-1"><span>${ssrInterpolate(copy.value.profile.visit)}</span>`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:arrow-square-out",
            class: "w-3 h-3"
          }, null, _parent));
          _push(`</a></dd></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</dl><div class="mt-4 pt-4 border-t border-slate-100"><button type="button" class="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-blue-700">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:chats-teardrop-bold",
          class: "h-4 w-4"
        }, null, _parent));
        _push(`<span>${ssrInterpolate(copy.value.profile.cta)}</span></button></div></div>`);
        if (relatedCases.value.length) {
          _push(`<div class="rounded-2xl border border-slate-200/80 bg-white p-5"><h3 class="text-xs font-bold text-slate-900 uppercase tracking-wider">${ssrInterpolate(copy.value.related.title)}</h3><div class="mt-3 space-y-3"><!--[-->`);
          ssrRenderList(relatedCases.value, (rel) => {
            _push(ssrRenderComponent(_component_NuxtLink, {
              key: rel.id,
              to: unref(localePath)("/cases/" + rel.id),
              class: "group block rounded-xl border border-slate-100 bg-slate-50/60 p-3 transition-colors hover:border-slate-200 hover:bg-slate-100/60"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<div class="text-xs font-semibold text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-1"${_scopeId}>${ssrInterpolate(rel.title)}</div><div class="mt-1 flex items-center justify-between text-[11px] text-slate-500"${_scopeId}><span${_scopeId}>${ssrInterpolate(rel.clientName)}</span><span class="font-bold text-blue-600"${_scopeId}>${ssrInterpolate(rel.metricValue)}</span></div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-xs font-semibold text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-1" }, toDisplayString(rel.title), 1),
                    createVNode("div", { class: "mt-1 flex items-center justify-between text-[11px] text-slate-500" }, [
                      createVNode("span", null, toDisplayString(rel.clientName), 1),
                      createVNode("span", { class: "font-bold text-blue-600" }, toDisplayString(rel.metricValue), 1)
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent));
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</aside></div></section><section class="border-t border-slate-200/80 bg-white py-12 px-5 text-center"><div class="mx-auto max-w-xl"><p class="text-sm font-semibold text-slate-800">${ssrInterpolate(copy.value.bottom.title)}</p><p class="mt-1 text-xs text-slate-500">${ssrInterpolate(copy.value.bottom.subtitle)}</p><div class="mt-5 flex items-center justify-center gap-3"><a${ssrRenderAttr("href", unref(signUpUrl))} class="rounded-full bg-blue-600 px-5 py-2 text-xs font-semibold text-white transition-colors hover:bg-blue-700">${ssrInterpolate(copy.value.bottom.primaryText)}</a><button type="button" class="rounded-full border border-slate-200 bg-white px-5 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-50">${ssrInterpolate(copy.value.bottom.secondaryText)}</button></div></div></section></article>`);
      }
      if (isConsultOpen.value) {
        _push(`<div class="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm"><div class="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl sm:p-7"><button type="button" class="absolute right-4 top-4 rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:x-bold",
          class: "h-4 w-4"
        }, null, _parent));
        _push(`</button><div class="text-center"><h3 class="text-base font-bold text-slate-900">${ssrInterpolate(copy.value.consultModal.title)}</h3><p class="mt-1 text-xs text-slate-500">${ssrInterpolate(copy.value.consultModal.subtitle)}</p></div>`);
        _push(ssrRenderComponent(_component_ShoplyLeadForm, {
          class: "mt-5",
          source: `case-${((_b = caseItem.value) == null ? void 0 : _b.id) || "detail"}`
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shoply/pages/cases/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-DnhCHFWi.mjs.map
