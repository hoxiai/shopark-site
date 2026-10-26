import { u as useI18n, D as useLocaleRouter, bg as useSeoMeta, _ as _sfc_main$W, O as __nuxt_component_3$4, n as _sfc_main$G, i as _sfc_main$R } from './server.mjs';
import { defineComponent, computed, ref, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { u as useShoplyAuthLinks } from './useShoplyAuthLinks-1qS_J9sZ.mjs';
import ShoplyLeadForm from './ShoplyLeadForm-D_0Jyd2M.mjs';
import '../nitro/nitro.mjs';
import 'drizzle-orm';
import 'node:crypto';
import 'zod';
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
import '@iconify/utils';
import 'consola';
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
import './CaptchaSlider-BJqv3jPw.mjs';

const solutionsLocales = {
  zh: {
    categoryTabs: [
      { id: "all", label: "\u5168\u90E8\u573A\u666F", icon: "ph:squares-four-bold" },
      { id: "b2b", label: "B2B \u8BE2\u76D8\u83B7\u5BA2", icon: "ph:buildings-bold" },
      { id: "b2c", label: "DTC \u54C1\u724C\u96F6\u552E", icon: "ph:globe-stand-bold" },
      { id: "wholesale", label: "\u5927\u5B97\u6279\u53D1\u4E0E\u5206\u9500", icon: "ph:stack-bold" },
      { id: "amazon", label: "\u4E9A\u9A6C\u900A/\u5E73\u53F0\u5F15\u6D41", icon: "ph:amazon-logo-bold" },
      { id: "custom", label: "\u5168\u573A\u666F\u6309\u9700\u5B9A\u5236", icon: "ph:code-bold" },
      { id: "migration", label: "\u4E00\u952E\u65E0\u635F\u642C\u5BB6", icon: "ph:arrows-left-right-bold" }
    ],
    solutions: [
      {
        id: "b2b-website",
        slug: "b2b-website",
        title: "B2B \u5916\u8D38\u8425\u9500\u4E0E\u7CBE\u51C6\u8BE2\u76D8\u72EC\u7ACB\u7AD9",
        subtitle: "\u544A\u522B\u5C55\u4F1A\u5185\u5377\u4E0E\u5E73\u53F0\u4F4E\u4EF7\u6BD4\u4EF7\uFF0C\u6253\u9020\u76F4\u63A5\u5E26\u6765\u9AD8\u4EF7\u503C\u6D77\u5916\u5546\u4E1A\u8BE2\u76D8\u7684\u6743\u5A01\u5B98\u7F51",
        badge: "\u5916\u8D38\u9996\u9009",
        badgeColor: "blue",
        category: "b2b",
        categoryLabel: "\u5916\u8D38 B2B \u5236\u9020\u4E0E\u5DE5\u8D38\u4E00\u4F53",
        targetAudience: "\u5DE5\u8D38\u4E00\u4F53\u4F01\u4E1A\u3001\u5916\u8D38\u51FA\u53E3\u5236\u9020\u5382\u3001\u8DE8\u5883 OEM/ODM \u4F9B\u5E94\u5546",
        summary: "\u4E0D\u4EC5\u63D0\u4F9B\u7B26\u5408\u6B27\u7F8E\u4E3B\u6D41\u5BA1\u7F8E\u7684\u54CD\u5E94\u5F0F\u54C1\u724C\u7AD9\u70B9\uFF0C\u66F4\u5185\u7F6E Google \u7ED3\u6784\u5316 SEO \u67B6\u6784\u300115 \u8BED\u79CD\u56FD\u9645\u5316\u652F\u6301\uFF0C\u4EE5\u53CA\u5E26\u5546\u54C1\u89C4\u683C\u3001\u6570\u91CF\u4E0E\u56FE\u7EB8\u9644\u4EF6\u7684\u8BE2\u76D8\u5DE5\u4F5C\u53F0\u3002",
        painPoints: [
          { title: "\u5C55\u4F1A\u5185\u5377\u83B7\u5BA2\u6210\u672C\u9AD8", desc: "\u4F20\u7EDF\u5C55\u4F1A\u5DEE\u65C5\u4E0E\u644A\u4F4D\u6210\u672C\u5E74\u5E74\u6500\u5347\uFF0C\u5BA2\u6237\u540D\u7247\u6613\u6D41\u5931\uFF0C\u96BE\u4EE5\u957F\u671F\u6C89\u6DC0\u6570\u5B57\u8D44\u4EA7\u3002" },
          { title: "\u5E73\u53F0\u540C\u884C\u65E0\u5E8F\u6740\u4EF7", desc: "\u4F20\u7EDF B2B \u5E73\u53F0\u6BD4\u4EF7\u6781\u5176\u6FC0\u70C8\uFF0C\u7F3A\u4E4F\u54C1\u724C\u72EC\u7ACB\u5C55\u793A\u7A7A\u95F4\uFF0C\u5229\u6DA6\u88AB\u538B\u7F29\u5230\u5E95\u7EBF\u3002" },
          { title: "\u666E\u901A\u5EFA\u7AD9\u8BE2\u76D8\u4E0D\u89C4\u8303", desc: "\u7B80\u5355\u7684\u7559\u8A00\u677F\u4E70\u5BB6\u4FE1\u606F\u96F6\u6563\uFF0C\u7F3A\u4E4F\u91C7\u8D2D\u89C4\u683C\u3001\u7269\u6599\u6E05\u5355\u4E0E\u56FE\u7EB8\uFF0C\u6C9F\u901A\u6765\u56DE\u62C9\u626F\u3002" }
        ],
        features: [
          { icon: "ph:chat-teardrop-text-bold", title: "\u5E26\u89C4\u683C\u4E0E\u6570\u91CF\u660E\u7EC6\u7684\u6DF1\u5EA6\u8BE2\u76D8", desc: "\u4E70\u5BB6\u76F4\u63A5\u5728\u5546\u54C1\u9875\u53D1\u8D77\u7CBE\u51C6\u8BE2\u76D8\uFF0C\u652F\u6301\u4E0A\u4F20\u5DE5\u7A0B\u56FE\u7EB8\u4E0E\u7269\u6599\u6E05\u5355\u9644\u4EF6\uFF0C\u544A\u522B\u65E0\u6548\u8BE2\u4EF7\u3002" },
          { icon: "ph:globe-hemisphere-west-bold", title: "15 \u79CD\u56FD\u9645\u6BCD\u8BED\u5168\u91CF\u652F\u6301", desc: "\u5185\u7F6E\u82F1\u3001\u5FB7\u3001\u6CD5\u3001\u897F\u3001\u4FC4\u3001\u963F\u3001\u65E5\u3001\u97E9\u7B49\u591A\u8BED\u8A00\u5305\uFF0C\u52A9\u529B\u5FEB\u901F\u6253\u901A\u975E\u82F1\u8BED\u91C7\u8D2D\u5E02\u573A\u3002" },
          { icon: "ph:magnifying-glass-plus-bold", title: "Google SEO \u7ED3\u6784\u5316\u6570\u636E\u67B6\u6784", desc: "\u8BED\u4E49\u5316 HTML5\u3001\u81EA\u52A8\u751F\u6210 Sitemap\u3001\u89C4\u8303\u5316\u9759\u6001 URL \u4E0E\u5BCC\u5A92\u4F53 Schema \u6807\u7B7E\u63D0\u5347\u81EA\u7136\u6392\u540D\u3002" },
          { icon: "ph:users-three-bold", title: "\u5916\u8D38\u56E2\u961F\u8BE2\u76D8\u534F\u540C\u5DE5\u4F5C\u53F0", desc: "\u8BE2\u76D8\u5E26\u6765\u6E90\u56FD\u5BB6\u4E0E\u72EC\u7ACB\u7F16\u53F7\uFF0C\u6309\u5DF2\u8BFB/\u672A\u8BFB\u72B6\u6001\u7BA1\u7406\uFF0C\u4E1A\u52A1\u5458\u53EF\u76F4\u63A5\u5728\u540E\u53F0\u90AE\u4EF6\u56DE\u590D\u3002" }
        ],
        metricValue: "+280%",
        metricLabel: "\u6D77\u5916\u771F\u5B9E\u5546\u4E1A\u8BE2\u76D8\u63D0\u5347",
        secondaryMetricValue: "15 \u8BED\u79CD",
        secondaryMetricLabel: "\u5168\u7403\u6BCD\u8BED\u8986\u76D6",
        previewType: "inquiry",
        detailRoute: "/page/b2b-website",
        isFeatured: true,
        status: 1,
        sortOrder: 10,
        tags: ["Google SEO", "15 \u8BED\u79CD", "\u5916\u8D38\u8BE2\u76D8", "\u5DE5\u8D38\u4E00\u4F53", "\u5DE5\u5355\u534F\u4F5C"]
      },
      {
        id: "b2c-store",
        slug: "b2c-store",
        title: "\u8DE8\u5883 DTC \u54C1\u724C\u51FA\u6D77\u72EC\u7ACB\u5546\u57CE",
        subtitle: "\u9762\u5411\u6B27\u7F8E\u4E0E\u5168\u7403\u4E3B\u6D41\u6D88\u8D39\u5E02\u573A\uFF0C\u642D\u5EFA\u9AD8\u8F6C\u5316\u3001\u5F3A\u4FE1\u4EFB\u611F\u7684\u54C1\u724C\u81EA\u8425\u7535\u5546\u7AD9",
        badge: "\u7206\u6B3E\u63A8\u8350",
        badgeColor: "emerald",
        category: "b2c",
        categoryLabel: "DTC \u8DE8\u5883\u96F6\u552E\u4E0E\u7CBE\u54C1\u54C1\u724C",
        targetAudience: "\u51FA\u6D77\u6D88\u8D39\u54C1\u724C\u3001\u8DE8\u5883\u7535\u5546\u81EA\u5EFA\u7AD9\u5356\u5BB6\u3001\u72EC\u7ACB\u7CBE\u54C1\u8BBE\u8BA1\u54C1\u724C",
        summary: "\u6446\u8131\u7B2C\u4E09\u65B9\u7535\u5546\u5E73\u53F0\u4F63\u91D1\u62BD\u6210\u4E0E\u5C01\u5E97\u98CE\u9669\uFF0C\u62E5\u6709 100% \u7B2C\u4E00\u65B9\u4E70\u5BB6\u6570\u636E\uFF0C\u652F\u6301\u5168\u7403\u4E3B\u6D41\u672C\u5730\u652F\u4ED8\u4E0E\u591A\u5E01\u79CD\u81EA\u9002\u5E94\u7ED3\u7B97\uFF0C14ms \u6781\u901F\u54CD\u5E94\u63D0\u5347\u7ED3\u8D26\u8F6C\u5316\u7387\u3002",
        painPoints: [
          { title: "\u5E73\u53F0\u4F63\u91D1\u4E0E\u62BD\u6210\u9AD8\u6602", desc: "\u7B2C\u4E09\u65B9\u5E73\u53F0\u62BD\u6210\u9AD8\u8FBE 15%~30%\uFF0C\u52A0\u4E4B\u5404\u73AF\u8282\u9690\u5F62\u6263\u8D39\uFF0C\u5356\u5BB6\u5229\u6DA6\u7A7A\u95F4\u88AB\u4E25\u91CD\u8695\u98DF\u3002" },
          { title: "\u5C01\u5E97\u98CE\u9669\u5E38\u6001\u5316", desc: "\u5E73\u53F0\u89C4\u5219\u9891\u7E41\u53D8\u52A8\uFF0C\u7F3A\u5C11\u4E70\u5BB6\u76F4\u63A5\u8054\u7CFB\u65B9\u5F0F\uFF0C\u96BE\u4EE5\u6C89\u6DC0\u957F\u671F\u590D\u5229\u7684\u7528\u6237\u8D44\u4EA7\u3002" },
          { title: "\u6D77\u5916\u9875\u9762\u6253\u5F00\u6162\u6D41\u5931\u9AD8", desc: "\u4F20\u7EDF\u5EFA\u7AD9\u7CFB\u7EDF TTFB \u5F80\u5F80\u5728 800ms \u4EE5\u4E0A\uFF0C\u6D88\u8D39\u8005\u56E0\u5361\u987F\u76F4\u63A5\u8DF3\u51FA\u5F03\u8D2D\u3002" }
        ],
        features: [
          { icon: "ph:seal-percent-bold", title: "0% \u5E73\u53F0\u4EA4\u6613\u62BD\u6210", desc: "\u8425\u4E1A\u989D 100% \u76F4\u8FBE\u60A8\u7684 Stripe\u3001PayPal \u6216\u6536\u5355\u8D26\u6237\uFF0C\u6CA1\u6709\u4EFB\u4F55\u5E73\u53F0\u4EA4\u6613\u4F63\u91D1\u622A\u7559\u3002" },
          { icon: "ph:credit-card-bold", title: "\u5168\u7403\u4E3B\u6D41\u652F\u4ED8\u4E0E\u591A\u5E01\u79CD\u7ED3\u7B97", desc: "\u652F\u6301\u4FE1\u7528\u5361\u3001Apple Pay\u3001Google Pay \u53CA\u5404\u56FD\u672C\u5730\u4E3B\u6D41\u94B1\u5305\uFF0C\u667A\u80FD\u8BC6\u522B\u8BBF\u5BA2\u5C5E\u5730\u6C47\u7387\u3002" },
          { icon: "ph:lightning-bold", title: "14ms \u6781\u901F\u9996\u5B57\u8282\u54CD\u5E94 (TTFB)", desc: "\u8FB9\u7F18\u5206\u5E03\u5F0F\u52A0\u901F\u4E0E Go \u534F\u7A0B\u6781\u901F\u5F15\u64CE\uFF0C\u6BEB\u79D2\u7EA7\u5FEB\u901F\u5F00\u5E97\u8FCE\u5BA2\uFF0C\u5927\u5E45\u964D\u4F4E\u7ED3\u8D26\u6D41\u5931\u3002" },
          { icon: "ph:sparkle-bold", title: "\u73B0\u4EE3\u9AD8\u7AEF\u4E3B\u9898\u89C6\u89C9\u4F53\u9A8C", desc: "\u7B26\u5408\u6D77\u5916\u4E3B\u6D41\u7528\u6237\u5BA1\u7F8E\u7684\u73B0\u4EE3\u8BBE\u8BA1\u8BED\u8A00\uFF0C\u81EA\u9002\u5E94\u79FB\u52A8\u7AEF\u4E0E\u684C\u9762\u7AEF\u8D2D\u7269\u4EA4\u4E92\u3002" }
        ],
        metricValue: "0%",
        metricLabel: "\u5E73\u53F0\u4EA4\u6613\u62BD\u6210\u622A\u7559",
        secondaryMetricValue: "14ms",
        secondaryMetricLabel: "\u6781\u901F TTFB \u54CD\u5E94",
        previewType: "checkout",
        detailRoute: "/page/b2c-store",
        isFeatured: true,
        status: 1,
        sortOrder: 20,
        tags: ["0%\u62BD\u6210", "Stripe/PayPal", "\u6781\u901FTTFB", "\u591A\u5E01\u79CD\u7ED3\u7B97", "DTC\u54C1\u724C"]
      },
      {
        id: "wholesale",
        slug: "wholesale",
        title: "B2B \u5927\u5B97\u6279\u53D1\u4E0E\u6E20\u9053\u5206\u9500\u534F\u540C\u7AD9",
        subtitle: "\u4E00\u5F20\u8868\u5FEB\u901F\u9009\u9F50\u6240\u6709\u5C3A\u7801\u4E0E\u989C\u8272\uFF0C\u5927\u5B97\u6279\u91CF\u8BA2\u8D27\u4E0D\u518D\u6765\u56DE\u5FAE\u4FE1\u90AE\u4EF6\u53CD\u590D\u786E\u8BA4",
        badge: "\u9AD8\u80FD\u6548\u7387",
        badgeColor: "indigo",
        category: "wholesale",
        categoryLabel: "\u5927\u5B97\u6279\u53D1\u4E0E\u5206\u9500\u6E20\u9053\u5546",
        targetAudience: "\u5916\u8D38\u6279\u53D1\u5546\u3001\u5206\u9500\u4F9B\u8D27\u5546\u3001\u5DE5\u5546\u4E1A\u7269\u6599\u4E0E\u670D\u9970\u7BB1\u5305\u5927\u5B97\u6279\u53D1",
        summary: "\u4E3A B \u7AEF\u91C7\u8D2D\u5BA2\u5546\u91CF\u8EAB\u6253\u9020\u7684\u6279\u91CF\u8BA2\u8D2D\u77E9\u9635\u3002\u652F\u6301\u4E8C\u7EF4\u591A\u5C5E\u6027\u6279\u91CF\u52A0\u8D2D\u3001\u5404\u89C4\u683C\u5B9E\u65F6\u5E93\u5B58\u6821\u9A8C\u4E0E\u5C0F\u8BA1\u81EA\u52A8\u6C47\u603B\uFF0C\u5E76\u652F\u6301\u5927\u5B97\u5728\u7EBF\u6536\u5355\u4E0E\u6DF1\u5EA6\u5B9A\u5236\u8BE2\u76D8\u540C\u5E97\u5E76\u884C\u3002",
        painPoints: [
          { title: "\u5355\u4EF6\u52A0\u8D2D\u6548\u7387\u6781\u5176\u4F4E\u4E0B", desc: "\u4F20\u7EDF\u96F6\u552E\u72EC\u7ACB\u7AD9\u53EA\u80FD\u4E00\u4EF6\u4E00\u4EF6\u9009\u89C4\u683C\uFF0C\u6279\u53D1\u4E70\u5BB6\u9009\u6570\u5341\u4E2A SKU \u8981\u70B9\u51FB\u51E0\u767E\u6B21\u3002" },
          { title: "\u7EBF\u4E0B\u8868\u683C\u6838\u5BF9\u6613\u51FA\u9519", desc: "\u624B\u5DE5\u8868\u683C\u7248\u672C\u4F17\u591A\uFF0C\u4EF7\u683C\u53D8\u52A8\u4E0E\u5404\u5C3A\u7801\u5E93\u5B58\u65E0\u6CD5\u5B9E\u65F6\u540C\u6B65\uFF0C\u5BB9\u6613\u9020\u6210\u8D85\u5356\u6216\u6F0F\u53D1\u3002" },
          { title: "\u73B0\u8D27\u4E0E\u5B9A\u5236\u9700\u6C42\u5272\u88C2", desc: "\u6807\u51C6\u73B0\u8D27\u53EF\u76F4\u63A5\u4ED8\u6B3E\u62FF\u8D27\uFF0C\u800C\u5927\u5B97\u8D34\u724C\u9700\u6C42\u9700\u8981\u63D0\u4EA4\u89C4\u683C\u56FE\u7EB8\u6D3D\u8C08\uFF0C\u4F20\u7EDF\u7AD9\u70B9\u96BE\u4EE5\u517C\u987E\u3002" }
        ],
        features: [
          { icon: "ph:table-bold", title: "\u4E8C\u7EF4\u89C4\u683C\u77E9\u9635\u6279\u91CF\u9009\u8D27\u8868", desc: "\u989C\u8272 x \u5C3A\u7801\u4EA4\u53C9\u4E8C\u7EF4\u8868\uFF0C\u4E70\u5BB6\u5728\u5355\u9875\u76F4\u63A5\u586B\u5165\u5404\u89C4\u683C\u91C7\u8D2D\u6570\u91CF\uFF0C\u6574\u8868\u4E00\u952E\u52A0\u5165\u8D2D\u7269\u8F66\u3002" },
          { icon: "ph:calculator-bold", title: "\u5404\u89C4\u683C\u5B9E\u65F6\u5E93\u5B58\u4E0E\u5C0F\u8BA1\u6C47\u603B", desc: "\u6BCF\u4E2A\u5C3A\u7801\u4E0E\u989C\u8272\u7684\u53EF\u7528\u5E93\u5B58\u6E05\u6670\u53EF\u89C1\uFF0C\u8F93\u5165\u6570\u91CF\u5B9E\u65F6\u8BA1\u7B97\u4EF6\u6570\u4E0E\u91D1\u989D\u6C47\u603B\uFF0C\u675C\u7EDD\u8D85\u5356\u3002" },
          { icon: "ph:chat-teardrop-text-bold", title: "\u5728\u7EBF\u6536\u5355\u4E0E\u5B9A\u5236\u8BE2\u76D8\u540C\u5E97\u5E76\u884C", desc: "\u6807\u51C6\u6279\u53D1\u8BA2\u5355\u76F4\u63A5\u8D70\u8D2D\u7269\u8F66\u7ED3\u8D26\uFF0COEM/ODM \u5B9A\u5236\u5546\u54C1\u53EF\u4E00\u952E\u53D1\u8D77\u5E26\u89C4\u683C\u4E0E\u9644\u4EF6\u7684\u8BE2\u76D8\u3002" },
          { icon: "ph:globe-hemisphere-west-bold", title: "\u591A\u8BED\u79CD\u4E0E\u591A\u5E01\u79CD\u5168\u7403\u5206\u9500\u4F53\u9A8C", desc: "\u5185\u7F6E 15 \u79CD\u56FD\u9645\u8BED\u8A00\u4E0E\u591A\u5E01\u79CD\u6C47\u7387\u5207\u6362\uFF0C\u65B9\u4FBF\u5168\u7403\u5404\u5730\u7ECF\u9500\u5546\u4EE5\u672C\u5730\u6BCD\u8BED\u9AD8\u6548\u9009\u8D27\u3002" }
        ],
        metricValue: "5\u500D+",
        metricLabel: "B\u7AEF\u6279\u91CF\u9009\u8D27\u4E0B\u5355\u6548\u7387\u63D0\u5347",
        secondaryMetricValue: "100% \u51C6\u786E",
        secondaryMetricLabel: "\u591A\u89C4\u683C\u6279\u91CF\u5E93\u5B58\u9632\u8D85\u5356",
        previewType: "wholesale-table",
        detailRoute: "/page/wholesale",
        isFeatured: true,
        status: 1,
        sortOrder: 30,
        tags: ["\u77E9\u9635\u8BA2\u8D27\u8868", "\u591A\u89C4\u683C\u6279\u91CF\u52A0\u8D2D", "\u5B9E\u65F6\u5E93\u5B58\u6821\u9A8C", "\u8BE2\u76D8\u4E0E\u7ED3\u8D26\u5E76\u884C", "\u5927\u5B97\u8BA2\u5355"]
      },
      {
        id: "amazon-store",
        slug: "amazon-store",
        title: "\u4E9A\u9A6C\u900A\u5356\u5BB6\u5F15\u6D41\u4E0E\u7B2C\u4E00\u65B9\u79C1\u57DF\u6C89\u6DC0\u7AD9",
        subtitle: "\u7AD9\u5916 Deals \u4FC3\u9500\u627F\u63A5\u4E0E\u5408\u89C4\u8FD4\u73B0\uFF0C\u5C06\u4E00\u6B21\u6027\u4E70\u5BB6\u8F6C\u5316\u4E3A\u54C1\u724C\u9AD8\u4EF7\u503C\u79C1\u57DF\u8D44\u4EA7",
        badge: "\u5927\u5356\u6807\u914D",
        badgeColor: "amber",
        category: "amazon",
        categoryLabel: "\u4E9A\u9A6C\u900A\u4E0E\u7B2C\u4E09\u65B9\u5E73\u53F0\u5927\u5356",
        targetAudience: "\u4E9A\u9A6C\u900A\u7CBE\u54C1\u5356\u5BB6\u3001Walmart/eBay \u8DE8\u5E73\u53F0\u5927\u5356\u3001\u54C1\u724C\u51FA\u6D77\u51FA\u5708\u56E2\u961F",
        summary: "\u6784\u5EFA\u7AD9\u5916\u843D\u5730\u9875\u627F\u63A5 TikTok\u3001Google\u3001Facebook \u6D41\u91CF\uFF0C\u5229\u7528\u4E13\u5C5E\u6298\u6263\u7801\u76F4\u63A5\u8DF3\u8F6C\u4E9A\u9A6C\u900A\u63D0\u5347 BSR \u6392\u540D\uFF1B\u901A\u8FC7\u552E\u540E\u8D28\u4FDD\u5361\u6FC0\u6D3B\u4E70\u5BB6\u90AE\u7BB1\uFF0C\u6C89\u6DC0\u7B2C\u4E00\u65B9 CRM\u3002",
        painPoints: [
          { title: "\u5E73\u53F0\u4E70\u5BB6\u6570\u636E\u5B8C\u5168\u5C01\u95ED", desc: "\u4E9A\u9A6C\u900A\u65E0\u6CD5\u83B7\u5F97\u5BA2\u6237\u771F\u5B9E\u90AE\u7BB1\uFF0C\u63A8\u65B0\u53EA\u80FD\u4F9D\u8D56\u6602\u8D35\u7684\u7AD9\u5185\u5E7F\u544A\u91CD\u65B0\u6253\u635E\u3002" },
          { title: "\u7AD9\u5185\u7ADE\u4EF7\u5E7F\u544A\u65E5\u8D8B\u767D\u70ED\u5316", desc: "PPC \u5E7F\u544A\u70B9\u51FB\u6210\u672C\u9010\u5E74\u6500\u5347\uFF0C\u4FB5\u8680\u5FAE\u8584\u5229\u6DA6\uFF0C\u6781\u5EA6\u7F3A\u4E4F\u81EA\u6709\u7AD9\u5916\u6D41\u91CF\u6760\u6746\u3002" },
          { title: "\u7AD9\u5916\u76F4\u94FE\u5F15\u6D41\u62C9\u4F4E\u8F6C\u5316\u7387", desc: "\u4F4E\u610F\u5411\u6D41\u91CF\u76F4\u51B2 Listing \u4F1A\u964D\u4F4E\u9875\u9762\u8F6C\u5316\u7387\u8FDB\u800C\u88AB\u7B97\u6CD5\u964D\u6743\uFF0C\u9700\u8981\u4E13\u4E1A\u843D\u5730\u9875\u8FC7\u6EE4\u3002" }
        ],
        features: [
          { icon: "ph:amazon-logo-bold", title: "Buy on Amazon \u667A\u80FD\u5F52\u56E0\u8DF3\u8F6C", desc: "\u843D\u5730\u9875\u667A\u80FD\u5C55\u793A\u4E9A\u9A6C\u900A\u4E13\u5C5E\u4F18\u60E0\u7801\uFF0C\u70B9\u51FB\u4E00\u952E\u8DF3\u8F6C\u5BF9\u5E94\u56FD\u5BB6 Listing \u4FC3\u6210\u7206\u5355\u3002" },
          { icon: "ph:envelope-simple-open-bold", title: "\u552E\u540E\u8D28\u4FDD\u4E0E\u4E70\u5BB6\u79C1\u57DF\u90AE\u7BB1\u6355\u83B7", desc: "\u5305\u88C5\u5185\u9644\u5E26\u8D28\u4FDD\u5361\u5F15\u5BFC\u7528\u6237\u5230\u72EC\u7ACB\u7AD9\u6CE8\u518C\u5EF6\u4FDD\uFF0C\u5408\u89C4\u6C89\u6DC0\u7B2C\u4E00\u65B9\u771F\u5B9E\u4E70\u5BB6\u540D\u5355\u3002" },
          { icon: "ph:chart-bar-bold", title: "\u4E9A\u9A6C\u900A\u5F52\u56E0 (Amazon Attribution)", desc: "\u5B8C\u6574\u8DDF\u8E2A\u7AD9\u5916\u6295\u653E\u5404\u6E20\u9053\u8DF3\u51FA\u4E0E\u6210\u4EA4\u8F6C\u5316\uFF0C\u8D5A\u53D6\u6700\u9AD8 10% \u54C1\u724C\u5F15\u6D41\u5956\u52B1\u91D1\u3002" },
          { icon: "ph:sparkle-bold", title: "\u65B0\u54C1\u51B7\u542F\u52A8\u5168\u81EA\u52A8\u4FC3\u9500\u53D1\u653E", desc: "\u4E00\u4EBA\u4E00\u7801\u81EA\u52A8\u6D3E\u53D1\uFF0C\u9632\u6B62\u6298\u6263\u7801\u5916\u6CC4\u88AB\u79D2\u6740\u6253\u7A7F\u5E93\u5B58\uFF0C\u6709\u6548\u62C9\u5347\u9500\u91CF\u6392\u540D\u3002" }
        ],
        metricValue: "3.4\u500D",
        metricLabel: "\u4E70\u5BB6\u7B2C\u4E00\u65B9\u79C1\u57DF\u6C89\u6DC0",
        secondaryMetricValue: "10%",
        secondaryMetricLabel: "\u6700\u9AD8\u4EAB\u4E9A\u9A6C\u900A\u54C1\u724C\u5F15\u6D41\u8FD4\u5229",
        previewType: "amazon-funnel",
        detailRoute: "/page/amazon-store",
        isFeatured: true,
        status: 1,
        sortOrder: 40,
        tags: ["Amazon\u5F15\u6D41", "Buy on Amazon", "\u79C1\u57DF\u90AE\u7BB1\u6355\u83B7", "\u552E\u540E\u5EF6\u4FDD\u5361", "\u5F52\u56E0\u5956\u52B1"]
      },
      {
        id: "custom",
        slug: "custom",
        title: "\u4F01\u4E1A\u7EA7\u5168\u573A\u666F\u4E1A\u52A1\u7CFB\u7EDF\u6309\u9700\u5B9A\u5236\u5F00\u53D1",
        subtitle: "\u5F53\u6807\u51C6 SaaS \u65E0\u6CD5\u652F\u6491\u7279\u5B9A\u4E1A\u52A1\u6D41\uFF0C\u6309\u60A8\u7684\u4F01\u4E1A\u6A21\u5F0F\u5B9A\u5236\u5F00\u53D1\u4E0E\u6DF1\u5EA6\u7CFB\u7EDF\u6253\u901A",
        badge: "\u6E90\u7801\u7EA7\u638C\u63A7",
        badgeColor: "cyan",
        category: "custom",
        categoryLabel: "\u4F01\u4E1A\u79C1\u6709\u5316\u4E0E\u5927\u578B\u5B9A\u5236",
        targetAudience: "\u62E5\u6709\u7279\u5B9A\u5546\u4E1A\u6A21\u5F0F\u7684\u51FA\u6D77\u4F01\u4E1A\u3001\u9700\u8981\u4E0E\u81EA\u6709 ERP/WMS/MES \u6DF1\u5EA6\u6253\u901A\u7684\u96C6\u56E2\u5546\u5BB6",
        summary: "\u57FA\u4E8E Go \u8BED\u8A00\u9AD8\u5E76\u53D1\u5FAE\u5185\u6838\u3001Nuxt 4 \u5168\u54CD\u5E94\u5F0F\u67B6\u6784\u53CA\u5F00\u653E\u6570\u636E\u63A5\u53E3\uFF0C\u4E0D\u4EC5\u63D0\u4F9B\u654F\u6377\u7684\u5B9A\u5236\u5F00\u53D1\u670D\u52A1\uFF0C\u8FD8\u652F\u6301\u5168\u91CF\u79C1\u6709\u5316\u5BB9\u5668\u90E8\u7F72\uFF0C\u4FDD\u969C\u5546\u4E1A\u673A\u5BC6\u4E0E\u6570\u636E\u81EA\u4E3B\u3002",
        painPoints: [
          { title: "\u6D77\u5916\u4F01\u4E1A\u7EA7 SaaS \u5E74\u8D39\u9AD8\u6602", desc: "Shopify Plus \u7B49\u65B9\u6848\u6BCF\u5E74\u6388\u6743\u8D39\u52A8\u8F84\u6570\u4E07\u7F8E\u5143\uFF0C\u4E14\u53D7\u9650\u4E8E\u6C99\u7BB1\u73AF\u5883\uFF0C\u81EA\u7531\u5EA6\u6709\u9650\u3002" },
          { title: "\u5185\u90E8 ERP/WMS \u7CFB\u7EDF\u96BE\u4EE5\u6253\u901A", desc: "\u73B0\u5B58\u91D1\u8776\u3001\u7528\u53CB\u3001\u805A\u6C34\u6F6D\u3001\u4E07\u91CC\u725B\u7B49\u7CFB\u7EDF\u65E0\u6CD5\u4E0E\u72EC\u7ACB\u7AD9\u6253\u901A\uFF0C\u4EBA\u5DE5\u5BF9\u8D26\u9891\u9891\u51FA\u9519\u3002" },
          { title: "\u516C\u6709\u4E91\u6570\u636E\u5B89\u5168\u987E\u8651", desc: "\u5BA2\u6237\u4FE1\u606F\u4E0E\u6838\u5FC3\u4F9B\u5E94\u94FE\u6570\u636E\u6258\u7BA1\u5728\u6D77\u5916\u7B2C\u4E09\u65B9\u4E91\u7AEF\u5B58\u5728\u5408\u89C4\u4E0E\u6CC4\u9732\u98CE\u9669\u3002" }
        ],
        features: [
          { icon: "ph:code-bold", title: "Go 1.22 \u6838\u5FC3\u534F\u7A0B\u9AD8\u5E76\u53D1\u5F15\u64CE", desc: "\u5355\u673A\u541E\u5410\u8D85 12,800 QPS\uFF0C\u9ED1\u4E94\u5927\u4FC3\u5343\u4E07\u7EA7\u7A81\u53D1\u6D41\u91CF\u4ECE\u5BB9\u5E94\u5BF9\uFF0C\u5185\u5B58\u5F00\u9500\u4EC5 64MB\u3002" },
          { icon: "ph:plugs-connected-bold", title: "OpenAPI & Webhooks \u53CC\u5411\u5B9E\u65F6\u4E92\u901A", desc: "\u6807\u51C6\u5316 RESTful \u63A5\u53E3\u4E0E\u4E8B\u4EF6\u9A71\u52A8\u89C4\u5219\uFF0C\u4E00\u952E\u8FDE\u63A5\u81EA\u6709 ERP\u3001WMS \u6216\u5185\u90E8\u4E2D\u53F0\u7CFB\u7EDF\u3002" },
          { icon: "ph:shield-check-bold", title: "100% \u6570\u636E\u8D44\u4EA7\u79C1\u6709\u5316", desc: "\u652F\u6301 Docker / Podman \u5BB9\u5668\u4E00\u952E\u90E8\u7F72\u5728\u81EA\u6709\u963F\u91CC\u4E91\u3001AWS \u6216\u672C\u5730 IDC \u673A\u623F\u3002" },
          { icon: "ph:git-branch-bold", title: "\u5DE5\u7A0B\u89C4\u8303\u5316\u4E0E\u654F\u6377\u4EA4\u4ED8\u4F53\u7CFB", desc: "\u4E25\u683C\u7684\u4EE3\u7801\u89C4\u8303\u4E0E\u67B6\u6784\u5206\u5C42\uFF0C\u652F\u6301\u4F01\u4E1A\u672A\u6765\u81EA\u4E3B\u4E8C\u6B21\u5F00\u53D1\u6216\u957F\u671F\u6280\u672F\u6258\u7BA1\u3002" }
        ],
        metricValue: "12,800+",
        metricLabel: "\u5355\u673A\u534F\u7A0B\u5E76\u53D1 QPS \u541E\u5410",
        secondaryMetricValue: "64MB",
        secondaryMetricLabel: "\u5FAE\u5185\u6838\u8D85\u4F4E\u5185\u5B58\u5F00\u9500",
        previewType: "custom-code",
        detailRoute: "/page/custom",
        isFeatured: true,
        status: 1,
        sortOrder: 50,
        tags: ["Go\u5FAE\u5185\u6838", "OpenAPI", "ERP/WMS\u6253\u901A", "\u79C1\u6709\u5316\u90E8\u7F72", "\u5B9A\u5236\u5F00\u53D1"]
      },
      {
        id: "migration",
        slug: "migration",
        title: "\u4E00\u952E\u667A\u80FD\u8FC1\u79FB\u4E0E\u72EC\u7ACB\u7AD9\u65E0\u635F\u642C\u5BB6\u670D\u52A1",
        subtitle: "\u96F6\u4EE3\u7801\u65E0\u7F1D\u5E73\u79FB\u5546\u54C1\u3001\u5206\u7C7B\u3001\u5386\u53F2\u5BA2\u6237\u4E0E\u8BA2\u5355\uFF0C\u96F6\u505C\u673A\u5E73\u7A33\u5F00\u542F\u591A\u6E20\u9053\u589E\u957F",
        badge: "\u65E0\u635F\u5E73\u79FB",
        badgeColor: "rose",
        category: "migration",
        categoryLabel: "\u8001\u7AD9\u5E73\u7A33\u642C\u5BB6\u4E0E\u6570\u636E\u8FC1\u79FB",
        targetAudience: "\u6B63\u5728\u4F7F\u7528 Shopify\u3001WooCommerce\u3001Shoplazza\u3001Shopline \u6216\u5FAE\u5E97\u7684\u5356\u5BB6",
        summary: "\u544A\u522B\u9AD8\u6602\u5E73\u53F0\u4F63\u91D1\u4E0E\u529F\u80FD\u53D7\u9650\u3002\u4E13\u5C5E\u6570\u636E\u8FC1\u79FB\u52A9\u7406\u5168\u81EA\u52A8\u89E3\u6790\u6E90\u7AD9\u6570\u636E\uFF0C\u667A\u80FD\u5B8C\u6210\u5B57\u6BB5\u5BF9\u9F50\uFF0C\u5E7F\u544A\u4E0E Google \u81EA\u7136\u641C\u7D22\u6743\u91CD\u5E73\u7A33\u8FC7\u6E21\uFF0C\u5F53\u5929\u5373\u53EF\u5F00\u95E8\u8FCE\u5BA2\u3002",
        painPoints: [
          { title: "\u5386\u53F2\u6570\u636E\u5E9E\u5927\u91CD\u5F55\u56F0\u96BE", desc: "\u6210\u5343\u4E0A\u4E07\u6B3E\u5546\u54C1\u3001\u591A\u5C5E\u6027 SKU\u3001\u4F1A\u5458\u6570\u636E\u548C\u5386\u53F2\u8BA2\u5355\uFF0C\u624B\u52A8\u8FC1\u79FB\u9700\u8981\u8017\u8D39\u6570\u6708\u3002" },
          { title: "\u62C5\u5FE7\u5DF2\u6709 SEO \u6392\u540D\u6D41\u5931", desc: "\u66F4\u6362\u7CFB\u7EDF\u82E5\u672A\u5904\u7406\u597D\u539F\u7F51\u9875 URL\uFF0C\u53EF\u80FD\u5BFC\u81F4\u591A\u5E74\u79EF\u7D2F\u7684 Google \u641C\u7D22\u6743\u91CD\u65AD\u5D16\u4E0B\u8DCC\u3002" },
          { title: "\u505C\u673A\u5207\u6362\u5E26\u6765\u8BA2\u5355\u635F\u5931", desc: "\u4F20\u7EDF\u5EFA\u7AD9\u8FC1\u79FB\u901A\u5E38\u9700\u8981\u6682\u505C\u5E97\u94FA\u6570\u5929\uFF0C\u4E25\u91CD\u5F71\u54CD\u6B63\u5728\u8DD1\u7684\u6295\u653E\u5E7F\u544A\u4E0E\u5BA2\u6237\u4E0B\u5355\u3002" }
        ],
        features: [
          { icon: "ph:arrows-left-right-bold", title: "\u4E00\u952E\u96F6\u4EE3\u7801\u8DE8\u5E73\u53F0\u6570\u636E\u6293\u53D6", desc: "\u6388\u6743\u540E\u5168\u81EA\u52A8\u63D0\u53D6\u5546\u54C1\u56FE\u7247\u76F8\u518C\u3001\u53D8\u4F53 SKU\u3001\u5E93\u5B58\u6570\u91CF\u3001\u5BA2\u6237\u540D\u5F55\u4E0E\u5386\u53F2\u8BA2\u5355\u3002" },
          { icon: "ph:path-bold", title: "301 \u6743\u91CD\u65E0\u635F\u5B9A\u5411\u4E0E SEO \u7EE7\u627F", desc: "\u81EA\u52A8\u5EFA\u7ACB\u539F\u7AD9\u5546\u54C1\u4E0E\u5206\u7C7B URL \u7684 301 \u6C38\u4E45\u91CD\u5B9A\u5411\uFF0C\u4FDD\u969C Google \u5DF2\u6709\u6392\u540D\u65E0\u635F\u3002" },
          { icon: "ph:clock-countdown-bold", title: "\u4E91\u7AEF\u9AD8\u5E76\u53D1\u96F6\u505C\u673A\u642C\u8FC1", desc: "\u540E\u53F0\u5F02\u6B65\u5E76\u53D1\u540C\u6B65\u6570\u636E\uFF0C\u539F\u6709\u8001\u7AD9\u7EE7\u7EED\u6B63\u5E38\u8FD0\u8425\uFF0C\u6570\u636E\u6838\u9A8C\u4E00\u81F4\u540E\u518D\u4E00\u952E\u89E3\u6790\u5207\u6362\u3002" },
          { icon: "ph:headset-bold", title: "\u4E00\u5BF9\u4E00\u6280\u672F\u4E13\u5BB6\u4E13\u5C5E\u4FDD\u9A7E\u62A4\u822A", desc: "\u4E13\u4E1A\u8FD0\u7EF4\u4E0E\u51FA\u6D77\u987E\u95EE\u5168\u7A0B\u8DDF\u8FDB\u57DF\u540D\u89E3\u6790\u3001\u652F\u4ED8\u63A5\u5165\u4E0E\u6570\u636E\u5BF9\u8D26\uFF0C\u786E\u4FDD\u4E07\u65E0\u4E00\u5931\u3002" }
        ],
        metricValue: "0 \u505C\u673A",
        metricLabel: "\u5168\u6D41\u7A0B\u4E1A\u52A1\u65E0\u635F\u5E73\u7A33\u8FC7\u6E21",
        secondaryMetricValue: "100% \u7EE7\u627F",
        secondaryMetricLabel: "\u5546\u54C1/\u5BA2\u6237/\u5386\u53F2SEO\u6743\u91CD",
        previewType: "migration",
        detailRoute: "/page/migration",
        isFeatured: true,
        status: 1,
        sortOrder: 60,
        tags: ["Shopify\u642C\u5BB6", "WooCommerce\u5BFC\u5165", "\u96F6\u505C\u673A", "301\u6743\u91CD\u7EE7\u627F", "\u6570\u636E\u65E0\u635F"]
      }
    ],
    comparisonRows: [
      {
        scenario: "B2B \u5916\u8D38\u8425\u9500\u5B98\u7F51",
        model: "\u5DE5\u8D38\u4E00\u4F53 / \u5916\u8D38\u51FA\u53E3",
        targetBuyer: "\u5168\u7403\u6D77\u5916\u4E13\u4E1A\u91C7\u8D2D\u5546/\u5DE5\u7A0B\u5546",
        paymentMode: "\u5E26\u660E\u7EC6\u8BE2\u76D8 / \u6837\u54C1\u5355\u5728\u7EBF\u4ED8 / \u7EBF\u4E0BTT",
        coreCapability: "Google SEO / 15\u8BED\u79CD / \u6DF1\u5EA6\u8BE2\u76D8\u5DE5\u4F5C\u53F0",
        recommendedPlan: "Showcase \u4F01\u4E1A\u5C55\u793A\u7248 / Starter \u5165\u95E8\u7ECF\u8425\u7248"
      },
      {
        scenario: "\u8DE8\u5883 DTC \u54C1\u724C\u96F6\u552E",
        model: "\u54C1\u724C\u81EA\u8425 / \u8DE8\u5883\u7CBE\u54C1",
        targetBuyer: "\u6B27\u7F8E\u65E5\u97E9\u7EC8\u7AEF\u6D88\u8D39\u8005",
        paymentMode: "Stripe / PayPal / \u4FE1\u7528\u5361 / \u672C\u5730\u94B1\u5305",
        coreCapability: "0% \u4EA4\u6613\u62BD\u6210 / 14ms \u6781\u901F\u54CD\u5E94 / \u73B0\u4EE3\u4E3B\u9898",
        recommendedPlan: "Professional \u4E13\u4E1A\u7ECF\u8425\u7248"
      },
      {
        scenario: "\u5927\u5B97\u6279\u53D1\u4E0E\u6E20\u9053\u5206\u9500",
        model: "\u5DE5\u5546\u4E1A\u6279\u53D1 / \u6E20\u9053\u4F9B\u8D27",
        targetBuyer: "\u4EE3\u7406\u5546 / \u6E20\u9053\u5546 / \u91C7\u8D2D\u529E\u4E8B\u5904",
        paymentMode: "\u591A\u89C4\u683C\u6279\u91CF\u7ED3\u8D26 / \u5B9A\u5236\u8BE2\u76D8\u5E76\u884C",
        coreCapability: "\u4E8C\u7EF4\u89C4\u683C\u6279\u91CF\u52A0\u8D2D\u8868 / \u5B9E\u65F6\u5E93\u5B58\u6821\u9A8C / \u591A\u5E01\u79CD\u7ED3\u7B97",
        recommendedPlan: "Professional \u4E13\u4E1A\u7ECF\u8425\u7248 / Premium \u65D7\u8230\u7ECF\u8425\u7248"
      },
      {
        scenario: "\u4E9A\u9A6C\u900A\u5356\u5BB6\u7AD9\u5916\u5F15\u6D41",
        model: "\u5E73\u53F0\u7CBE\u54C1\u5927\u5356 / \u591A\u6E20\u9053\u8FD0\u4F5C",
        targetBuyer: "\u4E9A\u9A6C\u900A\u8001\u4E70\u5BB6\u4E0E\u793E\u5A92\u79CD\u8349\u5BA2\u7FA4",
        paymentMode: "Buy on Amazon \u8DF3\u8F6C / \u4E9A\u9A6C\u900A\u5B98\u65B9\u7ED3\u7B97",
        coreCapability: "\u7AD9\u5916\u4F18\u60E0\u5238\u5206\u53D1 / \u5EF6\u4FDD\u8D28\u4FDD\u5361 / \u79C1\u57DF\u90AE\u7BB1\u5F52\u96C6",
        recommendedPlan: "Starter \u5165\u95E8\u7ECF\u8425\u7248 / Professional \u4E13\u4E1A\u7ECF\u8425\u7248"
      },
      {
        scenario: "\u5168\u573A\u666F\u7CFB\u7EDF\u6309\u9700\u5B9A\u5236",
        model: "\u7279\u5B9A\u5546\u4E1A\u6A21\u5F0F / \u96C6\u56E2\u4F01\u4E1A",
        targetBuyer: "\u5B9A\u5236\u9700\u6C42\u4E70\u5BB6 / \u4F9B\u5E94\u94FE\u4F19\u4F34",
        paymentMode: "\u6DF1\u5EA6\u6253\u901A\u81EA\u6709\u6536\u94F6\u53F0 / \u4F01\u4E1A\u5BF9\u516C",
        coreCapability: "Go\u5FAE\u5185\u6838 / OpenAPI \u5B9E\u65F6\u4E92\u901A / \u5BB9\u5668\u79C1\u6709\u5316",
        recommendedPlan: "Enterprise \u4F01\u4E1A\u7248"
      },
      {
        scenario: "\u8001\u7AD9\u6570\u636E\u667A\u80FD\u8FC1\u79FB",
        model: "\u65E2\u6709\u72EC\u7ACB\u7AD9\u5356\u5BB6\u62D3\u5C55",
        targetBuyer: "\u65E2\u6709\u5E73\u53F0\u8001\u5BA2\u6237\u5E73\u7A33\u8FC7\u6E21",
        paymentMode: "\u539F\u652F\u4ED8\u901A\u9053\u65E0\u7F1D\u5207\u6362",
        coreCapability: "\u4E00\u952E\u96F6\u4EE3\u7801\u6293\u53D6 / 301 SEO \u65E0\u635F\u7EE7\u627F / 0 \u505C\u673A",
        recommendedPlan: "\u5168\u7CFB\u7ECF\u8425\u7248\u5747\u652F\u6301"
      }
    ]
  },
  "zh-HK": {
    categoryTabs: [
      { id: "all", label: "\u5168\u90E8\u5834\u666F", icon: "ph:squares-four-bold" },
      { id: "b2b", label: "B2B \u8A62\u76E4\u7372\u5BA2", icon: "ph:buildings-bold" },
      { id: "b2c", label: "DTC \u54C1\u724C\u96F6\u552E", icon: "ph:globe-stand-bold" },
      { id: "wholesale", label: "\u5927\u5B97\u6279\u767C\u8207\u5206\u92B7", icon: "ph:stack-bold" },
      { id: "amazon", label: "\u4E9E\u99AC\u905C/\u5E73\u53F0\u5F15\u6D41", icon: "ph:amazon-logo-bold" },
      { id: "custom", label: "\u5168\u5834\u666F\u6309\u9700\u5B9A\u88FD", icon: "ph:code-bold" },
      { id: "migration", label: "\u4E00\u9375\u7121\u640D\u642C\u5BB6", icon: "ph:arrows-left-right-bold" }
    ],
    solutions: [
      {
        id: "b2b-website",
        slug: "b2b-website",
        title: "B2B \u5916\u8CBF\u71DF\u92B7\u8207\u7CBE\u6E96\u8A62\u76E4\u7368\u7ACB\u7AD9",
        subtitle: "\u544A\u5225\u5C55\u6703\u5167\u6372\u8207\u5E73\u53F0\u4F4E\u50F9\u6BD4\u50F9\uFF0C\u6253\u9020\u76F4\u63A5\u5E36\u4F86\u9AD8\u50F9\u503C\u6D77\u5916\u5546\u696D\u8A62\u76E4\u7684\u6B0A\u5A01\u5B98\u7DB2",
        badge: "\u5916\u8CBF\u9996\u9078",
        badgeColor: "blue",
        category: "b2b",
        categoryLabel: "\u5916\u8CBF B2B \u88FD\u9020\u8207\u5DE5\u8CBF\u4E00\u9AD4",
        targetAudience: "\u5DE5\u8CBF\u4E00\u9AD4\u4F01\u696D\u3001\u5916\u8CBF\u51FA\u53E3\u88FD\u9020\u5EE0\u3001\u8DE8\u5883 OEM/ODM \u4F9B\u61C9\u5546",
        summary: "\u4E0D\u50C5\u63D0\u4F9B\u7B26\u5408\u6B50\u7F8E\u4E3B\u6D41\u5BE9\u7F8E\u7684\u97FF\u61C9\u5F0F\u54C1\u724C\u7AD9\u9EDE\uFF0C\u66F4\u5167\u7F6E Google \u7D50\u69CB\u5316 SEO \u67B6\u69CB\u300115 \u8A9E\u7A2E\u570B\u969B\u5316\u652F\u6301\uFF0C\u4EE5\u53CA\u5E36\u5546\u54C1\u898F\u683C\u3001\u6578\u91CF\u8207\u5716\u7D19\u9644\u4EF6\u7684\u8A62\u76E4\u5DE5\u4F5C\u53F0\u3002",
        painPoints: [
          { title: "\u5C55\u6703\u5167\u6372\u7372\u5BA2\u6210\u672C\u9AD8", desc: "\u50B3\u7D71\u5C55\u6703\u5DEE\u65C5\u8207\u6524\u4F4D\u6210\u672C\u5E74\u5E74\u6500\u5347\uFF0C\u5BA2\u6236\u540D\u7247\u6613\u6D41\u5931\uFF0C\u96E3\u4EE5\u9577\u671F\u6C89\u6FB1\u6578\u5B57\u8CC7\u7522\u3002" },
          { title: "\u5E73\u53F0\u540C\u884C\u7121\u5E8F\u6BBA\u50F9", desc: "\u50B3\u7D71 B2B \u5E73\u53F0\u6BD4\u50F9\u6975\u5176\u6FC0\u70C8\uFF0C\u7F3A\u4E4F\u54C1\u724C\u7368\u7ACB\u5C55\u793A\u7A7A\u9593\uFF0C\u5229\u6F64\u88AB\u58D3\u7E2E\u5230\u5E95\u7DDA\u3002" },
          { title: "\u666E\u901A\u5EFA\u7AD9\u8A62\u76E4\u4E0D\u898F\u7BC4", desc: "\u7C21\u55AE\u7684\u7559\u8A00\u677F\u8CB7\u5BB6\u4FE1\u606F\u96F6\u6563\uFF0C\u7F3A\u4E4F\u63A1\u8CFC\u898F\u683C\u3001\u7269\u6599\u6E05\u55AE\u8207\u5716\u7D19\uFF0C\u6E9D\u901A\u4F86\u56DE\u62C9\u626F\u3002" }
        ],
        features: [
          { icon: "ph:chat-teardrop-text-bold", title: "\u5E36\u898F\u683C\u8207\u6578\u91CF\u660E\u7D30\u7684\u6DF1\u5EA6\u8A62\u76E4", desc: "\u8CB7\u5BB6\u76F4\u63A5\u5728\u5546\u54C1\u9801\u767C\u8D77\u7CBE\u6E96\u8A62\u76E4\uFF0C\u652F\u6301\u4E0A\u50B3\u5DE5\u7A0B\u5716\u7D19\u8207\u7269\u6599\u6E05\u55AE\u9644\u4EF6\uFF0C\u544A\u5225\u7121\u6548\u8A62\u50F9\u3002" },
          { icon: "ph:globe-hemisphere-west-bold", title: "15 \u7A2E\u570B\u969B\u6BCD\u8A9E\u5168\u91CF\u652F\u6301", desc: "\u5167\u7F6E\u82F1\u3001\u5FB7\u3001\u6CD5\u3001\u897F\u3001\u4FC4\u3001\u963F\u3001\u65E5\u3001\u97D3\u7B49\u591A\u8A9E\u8A00\u5305\uFF0C\u52A9\u529B\u5FEB\u901F\u6253\u901A\u975E\u82F1\u8A9E\u63A1\u8CFC\u5E02\u5834\u3002" },
          { icon: "ph:magnifying-glass-plus-bold", title: "Google SEO \u7D50\u69CB\u5316\u6578\u64DA\u67B6\u69CB", desc: "\u8A9E\u7FA9\u5316 HTML5\u3001\u81EA\u52D5\u751F\u6210 Sitemap\u3001\u898F\u7BC4\u5316\u975C\u614B URL \u8207\u5BCC\u5A92\u9AD4 Schema \u6A19\u7C64\u63D0\u5347\u81EA\u7136\u6392\u540D\u3002" },
          { icon: "ph:users-three-bold", title: "\u5916\u8CBF\u5718\u968A\u8A62\u76E4\u5354\u540C\u5DE5\u4F5C\u53F0", desc: "\u8A62\u76E4\u5E36\u4F86\u6E90\u570B\u5BB6\u8207\u7368\u7ACB\u7DE8\u865F\uFF0C\u6309\u5DF2\u8B80/\u672A\u8B80\u72C0\u614B\u7BA1\u7406\uFF0C\u696D\u52D9\u54E1\u53EF\u76F4\u63A5\u5728\u5F8C\u53F0\u90F5\u4EF6\u56DE\u8986\u3002" }
        ],
        metricValue: "+280%",
        metricLabel: "\u6D77\u5916\u771F\u5BE6\u5546\u696D\u8A62\u76E4\u63D0\u5347",
        secondaryMetricValue: "15 \u8A9E\u7A2E",
        secondaryMetricLabel: "\u5168\u7403\u6BCD\u8A9E\u8986\u84CB",
        previewType: "inquiry",
        detailRoute: "/page/b2b-website",
        isFeatured: true,
        status: 1,
        sortOrder: 10,
        tags: ["Google SEO", "15 \u8A9E\u7A2E", "\u5916\u8CBF\u8A62\u76E4", "\u5DE5\u8CBF\u4E00\u9AD4", "\u5DE5\u55AE\u5354\u4F5C"]
      },
      {
        id: "b2c-store",
        slug: "b2c-store",
        title: "\u8DE8\u5883 DTC \u54C1\u724C\u51FA\u6D77\u7368\u7ACB\u5546\u57CE",
        subtitle: "\u9762\u5411\u6B50\u7F8E\u8207\u5168\u7403\u4E3B\u6D41\u6D88\u8CBB\u5E02\u5834\uFF0C\u642D\u5EFA\u9AD8\u8F49\u5316\u3001\u5F37\u4FE1\u4EFB\u611F\u7684\u54C1\u724C\u81EA\u71DF\u96FB\u5546\u7AD9",
        badge: "\u7206\u6B3E\u63A8\u85A6",
        badgeColor: "emerald",
        category: "b2c",
        categoryLabel: "DTC \u8DE8\u5883\u96F6\u552E\u8207\u7CBE\u54C1\u54C1\u724C",
        targetAudience: "\u51FA\u6D77\u6D88\u8CBB\u54C1\u724C\u3001\u8DE8\u5883\u96FB\u5546\u81EA\u5EFA\u7AD9\u8CE3\u5BB6\u3001\u7368\u7ACB\u7CBE\u54C1\u8A2D\u8A08\u54C1\u724C",
        summary: "\u64FA\u812B\u7B2C\u4E09\u65B9\u96FB\u5546\u5E73\u53F0\u4F63\u91D1\u62BD\u6210\u8207\u5C01\u5E97\u98A8\u96AA\uFF0C\u64C1\u6709 100% \u7B2C\u4E00\u65B9\u8CB7\u5BB6\u6578\u64DA\uFF0C\u652F\u6301\u5168\u7403\u4E3B\u6D41\u672C\u5730\u652F\u4ED8\u8207\u591A\u5E63\u7A2E\u81EA\u9069\u61C9\u7D50\u7B97\uFF0C14ms \u6975\u901F\u97FF\u61C9\u63D0\u5347\u7D50\u8CEC\u8F49\u5316\u7387\u3002",
        painPoints: [
          { title: "\u5E73\u53F0\u4F63\u91D1\u8207\u62BD\u6210\u9AD8\u6602", desc: "\u7B2C\u4E09\u65B9\u5E73\u53F0\u62BD\u6210\u9AD8\u9054 15%~30%\uFF0C\u52A0\u4E4B\u5404\u74B0\u7BC0\u96B1\u5F62\u6263\u8CBB\uFF0C\u8CE3\u5BB6\u5229\u6F64\u7A7A\u9593\u88AB\u56B4\u91CD\u8836\u98DF\u3002" },
          { title: "\u5C01\u5E97\u98A8\u96AA\u5E38\u614B\u5316", desc: "\u5E73\u53F0\u898F\u5247\u983B\u7E41\u8B8A\u52D5\uFF0C\u7F3A\u5C11\u8CB7\u5BB6\u76F4\u63A5\u806F\u7E6B\u65B9\u5F0F\uFF0C\u96E3\u4EE5\u6C89\u6FB1\u9577\u671F\u8907\u5229\u7684\u7528\u6236\u8CC7\u7522\u3002" },
          { title: "\u6D77\u5916\u9801\u9762\u6253\u958B\u6162\u6D41\u5931\u9AD8", desc: "\u50B3\u7D71\u5EFA\u7AD9\u7CFB\u7D71 TTFB \u5F80\u5F80\u5728 800ms \u4EE5\u4E0A\uFF0C\u6D88\u8CBB\u8005\u56E0\u5361\u9813\u76F4\u63A5\u8DF3\u51FA\u68C4\u8CFC\u3002" }
        ],
        features: [
          { icon: "ph:seal-percent-bold", title: "0% \u5E73\u53F0\u4EA4\u6613\u62BD\u6210", desc: "\u71DF\u696D\u984D 100% \u76F4\u9054\u60A8\u7684 Stripe\u3001PayPal \u6216\u6536\u55AE\u8CEC\u6236\uFF0C\u6C92\u6709\u4EFB\u4F55\u5E73\u53F0\u4EA4\u6613\u4F63\u91D1\u622A\u7559\u3002" },
          { icon: "ph:credit-card-bold", title: "\u5168\u7403\u4E3B\u6D41\u652F\u4ED8\u8207\u591A\u5E63\u7A2E\u7D50\u7B97", desc: "\u652F\u6301\u4FE1\u7528\u5361\u3001Apple Pay\u3001Google Pay \u53CA\u5404\u570B\u672C\u5730\u4E3B\u6D41\u9322\u5305\uFF0C\u667A\u80FD\u8B58\u5225\u8A2A\u5BA2\u5C6C\u5730\u532F\u7387\u3002" },
          { icon: "ph:lightning-bold", title: "14ms \u6975\u901F\u9996\u5B57\u7BC0\u97FF\u61C9 (TTFB)", desc: "\u908A\u7DE3\u5206\u4F48\u5F0F\u52A0\u901F\u8207 Go \u5354\u7A0B\u6975\u901F\u5F15\u64CE\uFF0C\u6BEB\u79D2\u7D1A\u5FEB\u901F\u958B\u5E97\u8FCE\u5BA2\uFF0C\u5927\u5E45\u964D\u4F4E\u7D50\u8CEC\u6D41\u5931\u3002" },
          { icon: "ph:sparkle-bold", title: "\u73FE\u4EE3\u9AD8\u7AEF\u4E3B\u984C\u8996\u89BA\u9AD4\u9A57", desc: "\u7B26\u5408\u6D77\u5916\u4E3B\u6D41\u7528\u6236\u5BE9\u7F8E\u7684\u73FE\u4EE3\u8A2D\u8A08\u8A9E\u8A00\uFF0C\u81EA\u9069\u61C9\u79FB\u52D5\u7AEF\u8207\u684C\u9762\u7AEF\u8CFC\u7269\u4EA4\u4E92\u3002" }
        ],
        metricValue: "0%",
        metricLabel: "\u5E73\u53F0\u4EA4\u6613\u62BD\u6210\u622A\u7559",
        secondaryMetricValue: "14ms",
        secondaryMetricLabel: "\u6975\u901F TTFB \u97FF\u61C9",
        previewType: "checkout",
        detailRoute: "/page/b2c-store",
        isFeatured: true,
        status: 1,
        sortOrder: 20,
        tags: ["0%\u62BD\u6210", "Stripe/PayPal", "\u6975\u901FTTFB", "\u591A\u5E63\u7A2E\u7D50\u7B97", "DTC\u54C1\u724C"]
      },
      {
        id: "wholesale",
        slug: "wholesale",
        title: "B2B \u5927\u5B97\u6279\u767C\u8207\u6E20\u9053\u5206\u92B7\u5354\u540C\u7AD9",
        subtitle: "\u4E00\u5F35\u8868\u5FEB\u901F\u9078\u9F4A\u6240\u6709\u5C3A\u78BC\u8207\u984F\u8272\uFF0C\u5927\u5B97\u6279\u91CF\u8A02\u8CA8\u4E0D\u518D\u4F86\u56DE\u5FAE\u4FE1\u90F5\u4EF6\u53CD\u8986\u78BA\u8A8D",
        badge: "\u9AD8\u80FD\u6548\u7387",
        badgeColor: "indigo",
        category: "wholesale",
        categoryLabel: "\u5927\u5B97\u6279\u767C\u8207\u5206\u92B7\u6E20\u9053\u5546",
        targetAudience: "\u5916\u8CBF\u6279\u767C\u5546\u3001\u5206\u92B7\u4F9B\u8CA8\u5546\u3001\u5DE5\u5546\u696D\u7269\u6599\u8207\u670D\u98FE\u7BB1\u5305\u5927\u5B97\u6279\u767C",
        summary: "\u70BA B \u7AEF\u63A1\u8CFC\u5BA2\u5546\u91CF\u8EAB\u6253\u9020\u7684\u6279\u91CF\u8A02\u8CFC\u77E9\u9663\u3002\u652F\u6301\u4E8C\u7DAD\u591A\u5C6C\u6027\u6279\u91CF\u52A0\u8CFC\u3001\u5404\u898F\u683C\u5BE6\u6642\u5EAB\u5B58\u6821\u9A57\u8207\u5C0F\u8A08\u81EA\u52D5\u532F\u7E3D\uFF0C\u4E26\u652F\u6301\u5927\u5B97\u5728\u7DDA\u6536\u55AE\u8207\u6DF1\u5EA6\u5B9A\u88FD\u8A62\u76E4\u540C\u5E97\u4E26\u884C\u3002",
        painPoints: [
          { title: "\u55AE\u4EF6\u52A0\u8CFC\u6548\u7387\u6975\u5176\u4F4E\u4E0B", desc: "\u50B3\u7D71\u96F6\u552E\u7368\u7ACB\u7AD9\u53EA\u80FD\u4E00\u4EF6\u4E00\u4EF6\u9078\u898F\u683C\uFF0C\u6279\u767C\u8CB7\u5BB6\u9078\u6578\u5341\u500B SKU \u8981\u9EDE\u64CA\u5E7E\u767E\u6B21\u3002" },
          { title: "\u7DDA\u4E0B\u8868\u683C\u6838\u5C0D\u6613\u51FA\u932F", desc: "\u624B\u5DE5\u8868\u683C\u7248\u672C\u773E\u591A\uFF0C\u50F9\u683C\u8B8A\u52D5\u8207\u5404\u5C3A\u78BC\u5EAB\u5B58\u7121\u6CD5\u5BE6\u6642\u540C\u6B65\uFF0C\u5BB9\u6613\u9020\u6210\u8D85\u8CE3\u6216\u6F0F\u767C\u3002" },
          { title: "\u73FE\u8CA8\u8207\u5B9A\u88FD\u9700\u6C42\u5272\u88C2", desc: "\u6A19\u6E96\u73FE\u8CA8\u53EF\u76F4\u63A5\u4ED8\u6B3E\u62FF\u8CA8\uFF0C\u800C\u5927\u5B97\u8CBC\u724C\u9700\u6C42\u9700\u8981\u63D0\u4EA4\u898F\u683C\u5716\u7D19\u6D3D\u8AC7\uFF0C\u50B3\u7D71\u7AD9\u9EDE\u96E3\u4EE5\u517C\u9867\u3002" }
        ],
        features: [
          { icon: "ph:table-bold", title: "\u4E8C\u7DAD\u898F\u683C\u77E9\u9663\u6279\u91CF\u9078\u8CA8\u8868", desc: "\u984F\u8272 x \u5C3A\u78BC\u4EA4\u53C9\u4E8C\u7DAD\u8868\uFF0C\u8CB7\u5BB6\u5728\u55AE\u9801\u76F4\u63A5\u586B\u5165\u5404\u898F\u683C\u63A1\u8CFC\u6578\u91CF\uFF0C\u6574\u8868\u4E00\u9375\u52A0\u5165\u8CFC\u7269\u8ECA\u3002" },
          { icon: "ph:calculator-bold", title: "\u5404\u898F\u683C\u5BE6\u6642\u5EAB\u5B58\u8207\u5C0F\u8A08\u532F\u7E3D", desc: "\u6BCF\u500B\u5C3A\u78BC\u8207\u984F\u8272\u7684\u53EF\u7528\u5EAB\u5B58\u6E05\u6670\u53EF\u898B\uFF0C\u8F38\u5165\u6578\u91CF\u5BE6\u6642\u8A08\u7B97\u4EF6\u6578\u8207\u91D1\u984D\u532F\u7E3D\uFF0C\u675C\u7D55\u8D85\u8CE3\u3002" },
          { icon: "ph:chat-teardrop-text-bold", title: "\u5728\u7DDA\u6536\u55AE\u8207\u5B9A\u88FD\u8A62\u76E4\u540C\u5E97\u4E26\u884C", desc: "\u6A19\u6E96\u6279\u767C\u8A02\u55AE\u76F4\u63A5\u8D70\u8CFC\u7269\u8ECA\u7D50\u8CEC\uFF0COEM/ODM \u5B9A\u88FD\u5546\u54C1\u53EF\u4E00\u9375\u767C\u8D77\u5E36\u898F\u683C\u8207\u9644\u4EF6\u7684\u8A62\u76E4\u3002" },
          { icon: "ph:globe-hemisphere-west-bold", title: "\u591A\u8A9E\u7A2E\u8207\u591A\u5E63\u7A2E\u5168\u7403\u5206\u92B7\u9AD4\u9A57", desc: "\u5167\u7F6E 15 \u7A2E\u570B\u969B\u8A9E\u8A00\u8207\u591A\u5E63\u7A2E\u532F\u7387\u5207\u63DB\uFF0C\u65B9\u4FBF\u5168\u7403\u5404\u5730\u7D93\u92B7\u5546\u4EE5\u672C\u5730\u6BCD\u8A9E\u9AD8\u6548\u9078\u8CA8\u3002" }
        ],
        metricValue: "5\u500D+",
        metricLabel: "B\u7AEF\u6279\u91CF\u9078\u8CA8\u4E0B\u55AE\u6548\u7387\u63D0\u5347",
        secondaryMetricValue: "100% \u6E96\u78BA",
        secondaryMetricLabel: "\u591A\u898F\u683C\u6279\u91CF\u5EAB\u5B58\u9632\u8D85\u8CE3",
        previewType: "wholesale-table",
        detailRoute: "/page/wholesale",
        isFeatured: true,
        status: 1,
        sortOrder: 30,
        tags: ["\u77E9\u9663\u8A02\u8CA8\u8868", "\u591A\u898F\u683C\u6279\u91CF\u52A0\u8CFC", "\u5BE6\u6642\u5EAB\u5B58\u6821\u9A57", "\u8A62\u76E4\u8207\u7D50\u8CEC\u4E26\u884C", "\u5927\u5B97\u8A02\u55AE"]
      },
      {
        id: "amazon-store",
        slug: "amazon-store",
        title: "\u4E9E\u99AC\u905C\u8CE3\u5BB6\u5F15\u6D41\u8207\u7B2C\u4E00\u65B9\u79C1\u57DF\u6C89\u6FB1\u7AD9",
        subtitle: "\u7AD9\u5916 Deals \u4FC3\u92B7\u627F\u63A5\u8207\u5408\u898F\u8FD4\u73FE\uFF0C\u5C07\u4E00\u6B21\u6027\u8CB7\u5BB6\u8F49\u5316\u70BA\u54C1\u724C\u9AD8\u50F9\u503C\u79C1\u57DF\u8CC7\u7522",
        badge: "\u5927\u8CE3\u6A19\u914D",
        badgeColor: "amber",
        category: "amazon",
        categoryLabel: "\u4E9E\u99AC\u905C\u8207\u7B2C\u4E09\u65B9\u5E73\u53F0\u5927\u8CE3",
        targetAudience: "\u4E9E\u99AC\u905C\u7CBE\u54C1\u8CE3\u5BB6\u3001Walmart/eBay \u8DE8\u5E73\u53F0\u5927\u8CE3\u3001\u54C1\u724C\u51FA\u6D77\u51FA\u5708\u5718\u968A",
        summary: "\u69CB\u5EFA\u7AD9\u5916\u843D\u5730\u9801\u627F\u63A5 TikTok\u3001Google\u3001Facebook \u6D41\u91CF\uFF0C\u5229\u7528\u5C08\u5C6C\u6298\u6263\u78BC\u76F4\u63A5\u8DF3\u8F49\u4E9E\u99AC\u905C\u63D0\u5347 BSR \u6392\u540D\uFF1B\u901A\u904E\u552E\u5F8C\u8CEA\u4FDD\u5361\u6FC0\u6D3B\u8CB7\u5BB6\u90F5\u7BB1\uFF0C\u6C89\u6FB1\u7B2C\u4E00\u65B9 CRM\u3002",
        painPoints: [
          { title: "\u5E73\u53F0\u8CB7\u5BB6\u6578\u64DA\u5B8C\u5168\u5C01\u9589", desc: "\u4E9E\u99AC\u905C\u7121\u6CD5\u7372\u5F97\u5BA2\u6236\u771F\u5BE6\u90F5\u7BB1\uFF0C\u63A8\u65B0\u53EA\u80FD\u4F9D\u8CF4\u6602\u8CB4\u7684\u7AD9\u5167\u5EE3\u544A\u91CD\u65B0\u6253\u6488\u3002" },
          { title: "\u7AD9\u5167\u7AF6\u50F9\u5EE3\u544A\u65E5\u8DA8\u767D\u71B1\u5316", desc: "PPC \u5EE3\u544A\u9EDE\u64CA\u6210\u672C\u9010\u5E74\u6500\u5347\uFF0C\u4FB5\u8755\u5FAE\u8584\u5229\u6F64\uFF0C\u6975\u5EA6\u7F3A\u4E4F\u81EA\u6709\u7AD9\u5916\u6D41\u91CF\u69D3\u687F\u3002" },
          { title: "\u7AD9\u5916\u76F4\u93C8\u5F15\u6D41\u62C9\u4F4E\u8F49\u5316\u7387", desc: "\u4F4E\u610F\u5411\u6D41\u91CF\u76F4\u885D Listing \u6703\u964D\u4F4E\u9801\u9762\u8F49\u5316\u7387\u9032\u800C\u88AB\u7B97\u6CD5\u964D\u6B0A\uFF0C\u9700\u8981\u5C08\u696D\u843D\u5730\u9801\u904E\u6FFE\u3002" }
        ],
        features: [
          { icon: "ph:amazon-logo-bold", title: "Buy on Amazon \u667A\u80FD\u6B78\u56E0\u8DF3\u8F49", desc: "\u843D\u5730\u9801\u667A\u80FD\u5C55\u793A\u4E9E\u99AC\u905C\u5C08\u5C6C\u512A\u60E0\u78BC\uFF0C\u9EDE\u64CA\u4E00\u9375\u8DF3\u8F49\u5C0D\u61C9\u570B\u5BB6 Listing \u4FC3\u6210\u7206\u55AE\u3002" },
          { icon: "ph:envelope-simple-open-bold", title: "\u552E\u5F8C\u8CEA\u4FDD\u8207\u8CB7\u5BB6\u79C1\u57DF\u90F5\u7BB1\u6355\u7372", desc: "\u5305\u88DD\u5167\u9644\u5E36\u8CEA\u4FDD\u5361\u5F15\u5C0E\u7528\u6236\u5230\u7368\u7ACB\u7AD9\u8A3B\u518A\u5EF6\u4FDD\uFF0C\u5408\u898F\u6C89\u6FB1\u7B2C\u4E00\u65B9\u771F\u5BE6\u8CB7\u5BB6\u540D\u55AE\u3002" },
          { icon: "ph:chart-bar-bold", title: "\u4E9E\u99AC\u905C\u6B78\u56E0 (Amazon Attribution)", desc: "\u5B8C\u6574\u8DDF\u8E64\u7AD9\u5916\u6295\u653E\u5404\u6E20\u9053\u8DF3\u51FA\u8207\u6210\u4EA4\u8F49\u5316\uFF0C\u8CFA\u53D6\u6700\u9AD8 10% \u54C1\u724C\u5F15\u6D41\u734E\u52F5\u91D1\u3002" },
          { icon: "ph:sparkle-bold", title: "\u65B0\u54C1\u51B7\u555F\u52D5\u5168\u81EA\u52D5\u4FC3\u92B7\u767C\u653E", desc: "\u4E00\u4EBA\u4E00\u78BC\u81EA\u52D5\u6D3E\u767C\uFF0C\u9632\u6B62\u6298\u6263\u78BC\u5916\u6D29\u88AB\u79D2\u6BBA\u6253\u7A7F\u5EAB\u5B58\uFF0C\u6709\u6548\u62C9\u5347\u92B7\u91CF\u6392\u540D\u3002" }
        ],
        metricValue: "3.4\u500D",
        metricLabel: "\u8CB7\u5BB6\u7B2C\u4E00\u65B9\u79C1\u57DF\u6C89\u6FB1",
        secondaryMetricValue: "10%",
        secondaryMetricLabel: "\u6700\u9AD8\u4EAB\u4E9E\u99AC\u905C\u54C1\u724C\u5F15\u6D41\u8FD4\u5229",
        previewType: "amazon-funnel",
        detailRoute: "/page/amazon-store",
        isFeatured: true,
        status: 1,
        sortOrder: 40,
        tags: ["Amazon\u5F15\u6D41", "Buy on Amazon", "\u79C1\u57DF\u90F5\u7BB1\u6355\u7372", "\u552E\u5F8C\u5EF6\u4FDD\u5361", "\u6B78\u56E0\u734E\u52F5"]
      },
      {
        id: "custom",
        slug: "custom",
        title: "\u4F01\u696D\u7D1A\u5168\u5834\u666F\u696D\u52D9\u7CFB\u7D71\u6309\u9700\u5B9A\u88FD\u958B\u767C",
        subtitle: "\u7576\u6A19\u6E96 SaaS \u7121\u6CD5\u652F\u6490\u7279\u5B9A\u696D\u52D9\u6D41\uFF0C\u6309\u60A8\u7684\u4F01\u696D\u6A21\u5F0F\u5B9A\u88FD\u958B\u767C\u8207\u6DF1\u5EA6\u7CFB\u7D71\u6253\u901A",
        badge: "\u6E90\u78BC\u7D1A\u638C\u63A7",
        badgeColor: "cyan",
        category: "custom",
        categoryLabel: "\u4F01\u696D\u79C1\u6709\u5316\u8207\u5927\u578B\u5B9A\u88FD",
        targetAudience: "\u64C1\u6709\u7279\u5B9A\u5546\u696D\u6A21\u5F0F\u7684\u51FA\u6D77\u4F01\u696D\u3001\u9700\u8981\u8207\u81EA\u6709 ERP/WMS/MES \u6DF1\u5EA6\u6253\u901A\u7684\u96C6\u5718\u5546\u5BB6",
        summary: "\u57FA\u65BC Go \u8A9E\u8A00\u9AD8\u4E26\u767C\u5FAE\u5167\u6838\u3001Nuxt 4 \u5168\u97FF\u61C9\u5F0F\u67B6\u69CB\u53CA\u958B\u653E\u6578\u64DA\u63A5\u53E3\uFF0C\u4E0D\u50C5\u63D0\u4F9B\u654F\u6377\u7684\u5B9A\u88FD\u958B\u767C\u670D\u52D9\uFF0C\u9084\u652F\u6301\u5168\u91CF\u79C1\u6709\u5316\u5BB9\u5668\u90E8\u7F72\uFF0C\u4FDD\u969C\u5546\u696D\u6A5F\u5BC6\u8207\u6578\u64DA\u81EA\u4E3B\u3002",
        painPoints: [
          { title: "\u6D77\u5916\u4F01\u696D\u7D1A SaaS \u5E74\u8CBB\u9AD8\u6602", desc: "Shopify Plus \u7B49\u65B9\u6848\u6BCF\u5E74\u6388\u6B0A\u8CBB\u52D5\u8F12\u6578\u842C\u7F8E\u5143\uFF0C\u4E14\u53D7\u9650\u65BC\u6C99\u7BB1\u74B0\u5883\uFF0C\u81EA\u7531\u5EA6\u6709\u9650\u3002" },
          { title: "\u5167\u90E8 ERP/WMS \u7CFB\u7D71\u96E3\u4EE5\u6253\u901A", desc: "\u73FE\u5B58\u91D1\u8776\u3001\u7528\u53CB\u3001\u805A\u6C34\u6F6D\u3001\u842C\u91CC\u725B\u7B49\u7CFB\u7D71\u7121\u6CD5\u8207\u7368\u7ACB\u7AD9\u6253\u901A\uFF0C\u4EBA\u5DE5\u5C0D\u8CEC\u983B\u983B\u51FA\u932F\u3002" },
          { title: "\u516C\u6709\u96F2\u6578\u64DA\u5B89\u5168\u9867\u616E", desc: "\u5BA2\u6236\u4FE1\u606F\u8207\u6838\u5FC3\u4F9B\u61C9\u93C8\u6578\u64DA\u8A17\u7BA1\u5728\u6D77\u5916\u7B2C\u4E09\u65B9\u96F2\u7AEF\u5B58\u5728\u5408\u898F\u8207\u6D29\u9732\u98A8\u96AA\u3002" }
        ],
        features: [
          { icon: "ph:code-bold", title: "Go 1.22 \u6838\u5FC3\u5354\u7A0B\u9AD8\u4E26\u767C\u5F15\u64CE", desc: "\u55AE\u6A5F\u541E\u5410\u8D85 12,800 QPS\uFF0C\u9ED1\u4E94\u5927\u4FC3\u5343\u842C\u7D1A\u7A81\u767C\u6D41\u91CF\u5F9E\u5BB9\u61C9\u5C0D\uFF0C\u5167\u5B58\u958B\u92B7\u50C5 64MB\u3002" },
          { icon: "ph:plugs-connected-bold", title: "OpenAPI & Webhooks \u96D9\u5411\u5BE6\u6642\u4E92\u901A", desc: "\u6A19\u6E96\u5316 RESTful \u63A5\u53E3\u8207\u4E8B\u4EF6\u9A45\u52D5\u898F\u5247\uFF0C\u4E00\u9375\u9023\u63A5\u81EA\u6709 ERP\u3001WMS \u6216\u5167\u90E8\u4E2D\u53F0\u7CFB\u7D71\u3002" },
          { icon: "ph:shield-check-bold", title: "100% \u6578\u64DA\u8CC7\u7522\u79C1\u6709\u5316", desc: "\u652F\u6301 Docker / Podman \u5BB9\u5668\u4E00\u9375\u90E8\u7F72\u5728\u81EA\u6709\u963F\u91CC\u96F2\u3001AWS \u6216\u672C\u5730 IDC \u6A5F\u623F\u3002" },
          { icon: "ph:git-branch-bold", title: "\u5DE5\u7A0B\u898F\u7BC4\u5316\u8207\u654F\u6377\u4EA4\u4ED8\u9AD4\u7CFB", desc: "\u56B4\u683C\u7684\u4EE3\u78BC\u898F\u7BC4\u8207\u67B6\u69CB\u5206\u5C64\uFF0C\u652F\u6301\u4F01\u696D\u672A\u4F86\u81EA\u4E3B\u4E8C\u6B21\u958B\u767C\u6216\u9577\u671F\u6280\u8853\u8A17\u7BA1\u3002" }
        ],
        metricValue: "12,800+",
        metricLabel: "\u55AE\u6A5F\u5354\u7A0B\u4E26\u767C QPS \u541E\u5410",
        secondaryMetricValue: "64MB",
        secondaryMetricLabel: "\u5FAE\u5167\u6838\u8D85\u4F4E\u5167\u5B58\u958B\u92B7",
        previewType: "custom-code",
        detailRoute: "/page/custom",
        isFeatured: true,
        status: 1,
        sortOrder: 50,
        tags: ["Go\u5FAE\u5167\u6838", "OpenAPI", "ERP/WMS\u6253\u901A", "\u79C1\u6709\u5316\u90E8\u7F72", "\u5B9A\u88FD\u958B\u767C"]
      },
      {
        id: "migration",
        slug: "migration",
        title: "\u4E00\u9375\u667A\u80FD\u9077\u79FB\u8207\u7368\u7ACB\u7AD9\u7121\u640D\u642C\u5BB6\u670D\u52D9",
        subtitle: "\u96F6\u4EE3\u78BC\u7121\u7E2B\u5E73\u79FB\u5546\u54C1\u3001\u5206\u985E\u3001\u6B77\u53F2\u5BA2\u6236\u8207\u8A02\u55AE\uFF0C\u96F6\u505C\u6A5F\u5E73\u7A69\u958B\u555F\u591A\u6E20\u9053\u589E\u9577",
        badge: "\u7121\u640D\u5E73\u79FB",
        badgeColor: "rose",
        category: "migration",
        categoryLabel: "\u8001\u7AD9\u5E73\u7A69\u642C\u5BB6\u8207\u6578\u64DA\u9077\u79FB",
        targetAudience: "\u6B63\u5728\u4F7F\u7528 Shopify\u3001WooCommerce\u3001Shoplazza\u3001Shopline \u6216\u5FAE\u5E97\u7684\u8CE3\u5BB6",
        summary: "\u544A\u5225\u9AD8\u6602\u5E73\u53F0\u4F63\u91D1\u8207\u529F\u80FD\u53D7\u9650\u3002\u5C08\u5C6C\u6578\u64DA\u9077\u79FB\u52A9\u7406\u5168\u81EA\u52D5\u89E3\u6790\u6E90\u7AD9\u6578\u64DA\uFF0C\u667A\u80FD\u5B8C\u6210\u5B57\u6BB5\u5C0D\u9F4A\uFF0C\u5EE3\u544A\u8207 Google \u81EA\u7136\u641C\u7D22\u6B0A\u91CD\u5E73\u7A69\u904E\u6E21\uFF0C\u7576\u5929\u5373\u53EF\u958B\u9580\u8FCE\u5BA2\u3002",
        painPoints: [
          { title: "\u6B77\u53F2\u6578\u64DA\u9F90\u5927\u91CD\u9304\u56F0\u96E3", desc: "\u6210\u5343\u4E0A\u842C\u6B3E\u5546\u54C1\u3001\u591A\u5C6C\u6027 SKU\u3001\u6703\u54E1\u6578\u64DA\u548C\u6B77\u53F2\u8A02\u55AE\uFF0C\u624B\u52D5\u9077\u79FB\u9700\u8981\u8017\u8CBB\u6578\u6708\u3002" },
          { title: "\u64D4\u6182\u5DF2\u6709 SEO \u6392\u540D\u6D41\u5931", desc: "\u66F4\u63DB\u7CFB\u7D71\u82E5\u672A\u8655\u7406\u597D\u539F\u7DB2\u9801 URL\uFF0C\u53EF\u80FD\u5C0E\u81F4\u591A\u5E74\u7A4D\u7D2F\u7684 Google \u641C\u7D22\u6B0A\u91CD\u65B7\u5D16\u4E0B\u8DCC\u3002" },
          { title: "\u505C\u6A5F\u5207\u63DB\u5E36\u4F86\u8A02\u55AE\u640D\u5931", desc: "\u50B3\u7D71\u5EFA\u7AD9\u9077\u79FB\u901A\u5E38\u9700\u8981\u66AB\u505C\u5E97\u92EA\u6578\u5929\uFF0C\u56B4\u91CD\u5F71\u97FF\u6B63\u5728\u8DD1\u7684\u6295\u653E\u5EE3\u544A\u8207\u5BA2\u6236\u4E0B\u55AE\u3002" }
        ],
        features: [
          { icon: "ph:arrows-left-right-bold", title: "\u4E00\u9375\u96F6\u4EE3\u78BC\u8DE8\u5E73\u53F0\u6578\u64DA\u6293\u53D6", desc: "\u6388\u6B0A\u5F8C\u5168\u81EA\u52D5\u63D0\u53D6\u5546\u54C1\u5716\u7247\u76F8\u518A\u3001\u8B8A\u9AD4 SKU\u3001\u5EAB\u5B58\u6578\u91CF\u3001\u5BA2\u6236\u540D\u9304\u8207\u6B77\u53F2\u8A02\u55AE\u3002" },
          { icon: "ph:path-bold", title: "301 \u6B0A\u91CD\u7121\u640D\u5B9A\u5411\u8207 SEO \u7E7C\u627F", desc: "\u81EA\u52D5\u5EFA\u7ACB\u539F\u7AD9\u5546\u54C1\u8207\u5206\u985E URL \u7684 301 \u6C38\u4E45\u91CD\u5B9A\u5411\uFF0C\u4FDD\u969C Google \u5DF2\u6709\u6392\u540D\u7121\u640D\u3002" },
          { icon: "ph:clock-countdown-bold", title: "\u96F2\u7AEF\u9AD8\u4E26\u767C\u96F6\u505C\u6A5F\u642C\u9077", desc: "\u5F8C\u53F0\u7570\u6B65\u4E26\u767C\u540C\u6B65\u6578\u64DA\uFF0C\u539F\u6709\u8001\u7AD9\u7E7C\u7E8C\u6B63\u5E38\u904B\u71DF\uFF0C\u6578\u64DA\u6838\u9A57\u4E00\u81F4\u5F8C\u518D\u4E00\u9375\u89E3\u6790\u5207\u63DB\u3002" },
          { icon: "ph:headset-bold", title: "\u4E00\u5C0D\u4E00\u6280\u8853\u5C08\u5BB6\u5C08\u5C6C\u4FDD\u99D5\u8B77\u822A", desc: "\u5C08\u696D\u904B\u7DAD\u8207\u51FA\u6D77\u9867\u554F\u5168\u7A0B\u8DDF\u9032\u57DF\u540D\u89E3\u6790\u3001\u652F\u4ED8\u63A5\u5165\u8207\u6578\u64DA\u5C0D\u8CEC\uFF0C\u78BA\u4FDD\u842C\u7121\u4E00\u5931\u3002" }
        ],
        metricValue: "0 \u505C\u6A5F",
        metricLabel: "\u5168\u6D41\u7A0B\u696D\u52D9\u7121\u640D\u5E73\u7A69\u904E\u6E21",
        secondaryMetricValue: "100% \u7E7C\u627F",
        secondaryMetricLabel: "\u5546\u54C1/\u5BA2\u6236/\u6B77\u53F2SEO\u6B0A\u91CD",
        previewType: "migration",
        detailRoute: "/page/migration",
        isFeatured: true,
        status: 1,
        sortOrder: 60,
        tags: ["Shopify\u642C\u5BB6", "WooCommerce\u5C0E\u5165", "\u96F6\u505C\u6A5F", "301\u6B0A\u91CD\u7E7C\u627F", "\u6578\u64DA\u7121\u640D"]
      }
    ],
    comparisonRows: [
      {
        scenario: "B2B \u5916\u8CBF\u71DF\u92B7\u5B98\u7DB2",
        model: "\u5DE5\u8CBF\u4E00\u9AD4 / \u5916\u8CBF\u51FA\u53E3",
        targetBuyer: "\u5168\u7403\u6D77\u5916\u5C08\u696D\u63A1\u8CFC\u5546/\u5DE5\u7A0B\u5546",
        paymentMode: "\u5E36\u660E\u7D30\u8A62\u76E4 / \u6A23\u54C1\u55AE\u5728\u7DDA\u4ED8 / \u7DDA\u4E0BTT",
        coreCapability: "Google SEO / 15\u8A9E\u7A2E / \u6DF1\u5EA6\u8A62\u76E4\u5DE5\u4F5C\u53F0",
        recommendedPlan: "Showcase \u4F01\u696D\u5C55\u793A\u7248 / Starter \u5165\u9580\u7D93\u71DF\u7248"
      },
      {
        scenario: "\u8DE8\u5883 DTC \u54C1\u724C\u96F6\u552E",
        model: "\u54C1\u724C\u81EA\u71DF / \u8DE8\u5883\u7CBE\u54C1",
        targetBuyer: "\u6B50\u7F8E\u65E5\u97D3\u7D42\u7AEF\u6D88\u8CBB\u8005",
        paymentMode: "Stripe / PayPal / \u4FE1\u7528\u5361 / \u672C\u5730\u9322\u5305",
        coreCapability: "0% \u4EA4\u6613\u62BD\u6210 / 14ms \u6975\u901F\u97FF\u61C9 / \u73FE\u4EE3\u4E3B\u984C",
        recommendedPlan: "Professional \u5C08\u696D\u7D93\u71DF\u7248"
      },
      {
        scenario: "\u5927\u5B97\u6279\u767C\u8207\u6E20\u9053\u5206\u92B7",
        model: "\u5DE5\u5546\u696D\u6279\u767C / \u6E20\u9053\u4F9B\u8CA8",
        targetBuyer: "\u4EE3\u7406\u5546 / \u6E20\u9053\u5546 / \u63A1\u8CFC\u8FA6\u4E8B\u8655",
        paymentMode: "\u591A\u898F\u683C\u6279\u91CF\u7D50\u8CEC / \u5B9A\u88FD\u8A62\u76E4\u4E26\u884C",
        coreCapability: "\u4E8C\u7DAD\u898F\u683C\u6279\u91CF\u52A0\u8CFC\u8868 / \u5BE6\u6642\u5EAB\u5B58\u6821\u9A57 / \u591A\u5E63\u7A2E\u7D50\u7B97",
        recommendedPlan: "Professional \u5C08\u696D\u7D93\u71DF\u7248 / Premium \u65D7\u8266\u7D93\u71DF\u7248"
      },
      {
        scenario: "\u4E9E\u99AC\u905C\u8CE3\u5BB6\u7AD9\u5916\u5F15\u6D41",
        model: "\u5E73\u53F0\u7CBE\u54C1\u5927\u8CE3 / \u591A\u6E20\u9053\u904B\u4F5C",
        targetBuyer: "\u4E9E\u99AC\u905C\u8001\u8CB7\u5BB6\u8207\u793E\u5A92\u7A2E\u8349\u5BA2\u7FA4",
        paymentMode: "Buy on Amazon \u8DF3\u8F49 / \u4E9E\u99AC\u905C\u5B98\u65B9\u7D50\u7B97",
        coreCapability: "\u7AD9\u5916\u512A\u60E0\u5238\u5206\u767C / \u5EF6\u4FDD\u8CEA\u4FDD\u5361 / \u79C1\u57DF\u90F5\u7BB1\u6B78\u96C6",
        recommendedPlan: "Starter \u5165\u9580\u7D93\u71DF\u7248 / Professional \u5C08\u696D\u7D93\u71DF\u7248"
      },
      {
        scenario: "\u5168\u5834\u666F\u7CFB\u7D71\u6309\u9700\u5B9A\u88FD",
        model: "\u7279\u5B9A\u5546\u696D\u6A21\u5F0F / \u96C6\u5718\u4F01\u696D",
        targetBuyer: "\u5B9A\u88FD\u9700\u6C42\u8CB7\u5BB6 / \u4F9B\u61C9\u93C8\u5925\u4F34",
        paymentMode: "\u6DF1\u5EA6\u6253\u901A\u81EA\u6709\u6536\u9280\u53F0 / \u4F01\u696D\u5C0D\u516C",
        coreCapability: "Go\u5FAE\u5167\u6838 / OpenAPI \u5BE6\u6642\u4E92\u901A / \u5BB9\u5668\u79C1\u6709\u5316",
        recommendedPlan: "Enterprise \u4F01\u696D\u7248"
      },
      {
        scenario: "\u8001\u7AD9\u6578\u64DA\u667A\u80FD\u9077\u79FB",
        model: "\u65E2\u6709\u7368\u7ACB\u7AD9\u8CE3\u5BB6\u62D3\u5C55",
        targetBuyer: "\u65E2\u6709\u5E73\u53F0\u8001\u5BA2\u6236\u5E73\u7A69\u904E\u6E21",
        paymentMode: "\u539F\u652F\u4ED8\u901A\u9053\u7121\u7E2B\u5207\u63DB",
        coreCapability: "\u4E00\u9375\u96F6\u4EE3\u78BC\u6293\u53D6 / 301 SEO \u7121\u640D\u7E7C\u627F / 0 \u505C\u6A5F",
        recommendedPlan: "\u5168\u7CFB\u7D93\u71DF\u7248\u5747\u652F\u6301"
      }
    ]
  },
  en: {
    categoryTabs: [
      { id: "all", label: "All Scenarios", icon: "ph:squares-four-bold" },
      { id: "b2b", label: "B2B Inquiries", icon: "ph:buildings-bold" },
      { id: "b2c", label: "DTC Brand Retail", icon: "ph:globe-stand-bold" },
      { id: "wholesale", label: "Wholesale & Distribution", icon: "ph:stack-bold" },
      { id: "amazon", label: "Amazon/Platform Traffic", icon: "ph:amazon-logo-bold" },
      { id: "custom", label: "Custom Solutions", icon: "ph:code-bold" },
      { id: "migration", label: "Seamless Migration", icon: "ph:arrows-left-right-bold" }
    ],
    solutions: [
      {
        id: "b2b-website",
        slug: "b2b-website",
        title: "B2B Foreign Trade Marketing & Precision Inquiry Site",
        subtitle: "Move beyond crowded trade shows and platform price wars to an authoritative site that delivers high-value overseas business inquiries directly",
        badge: "Top Pick for Trade",
        badgeColor: "blue",
        category: "b2b",
        categoryLabel: "B2B Foreign Trade Manufacturing",
        targetAudience: "Integrated industry-trade firms, export manufacturers, cross-border OEM/ODM suppliers",
        summary: "Not only a responsive brand site aligned with mainstream Western aesthetics, but a built-in Google structured SEO architecture, 15-language internationalization, and an inquiry workbench with product specs, quantities, and drawing attachments.",
        painPoints: [
          { title: "Rising trade-show acquisition costs", desc: "Travel and booth costs climb every year, business cards get lost, and digital assets rarely accumulate." },
          { title: "Uncontrolled price wars on platforms", desc: "Traditional B2B platforms are brutally competitive on price with no room for independent brand presence, squeezing margins to the limit." },
          { title: "Unstructured inquiries from basic sites", desc: "A simple message board scatters buyer information with no purchasing specs, BOM, or drawings, forcing endless back-and-forth." }
        ],
        features: [
          { icon: "ph:chat-teardrop-text-bold", title: "In-depth inquiries with specs & quantities", desc: "Buyers submit precise inquiries right on the product page and can attach engineering drawings and BOM files, eliminating useless quotes." },
          { icon: "ph:globe-hemisphere-west-bold", title: "Full support for 15 international languages", desc: "Built-in English, German, French, Spanish, Russian, Arabic, Japanese, and Korean packs to unlock non-English procurement markets fast." },
          { icon: "ph:magnifying-glass-plus-bold", title: "Google SEO structured data architecture", desc: "Semantic HTML5, auto-generated sitemaps, canonical static URLs, and rich-media Schema tags boost organic rankings." },
          { icon: "ph:users-three-bold", title: "Inquiry collaboration workbench for trade teams", desc: "Inquiries carry source country and unique IDs, are managed by read/unread status, and sales reps reply by email right from the dashboard." }
        ],
        metricValue: "+280%",
        metricLabel: "Real overseas business inquiry growth",
        secondaryMetricValue: "15 Languages",
        secondaryMetricLabel: "Global native language coverage",
        previewType: "inquiry",
        detailRoute: "/page/b2b-website",
        isFeatured: true,
        status: 1,
        sortOrder: 10,
        tags: ["Google SEO", "15 Languages", "Trade Inquiries", "Industry & Trade", "Ticket Collaboration"]
      },
      {
        id: "b2c-store",
        slug: "b2c-store",
        title: "Cross-border DTC Brand Store",
        subtitle: "Build a high-converting, trust-building brand-owned store for Europe, the US, and mainstream global consumer markets",
        badge: "Best Seller Pick",
        badgeColor: "emerald",
        category: "b2c",
        categoryLabel: "DTC Cross-border Retail & Boutique Brands",
        targetAudience: "Global consumer brands, cross-border store owners, independent boutique design brands",
        summary: "Break free from third-party platform commissions and store-suspension risks. Own 100% of first-party buyer data, support mainstream local payments and adaptive multi-currency checkout, and lift conversion with 14ms response times.",
        painPoints: [
          { title: "High platform commissions and fees", desc: "Third-party platforms take 15%\u201330% plus hidden fees at every step, seriously eroding seller margins." },
          { title: "Store suspension as the norm", desc: "Platform rules change frequently and buyer contact details are missing, making it hard to build long-term compounding assets." },
          { title: "Slow overseas pages drive churn", desc: "Traditional site builders often have TTFB above 800ms, so shoppers bounce and abandon checkout on lag." }
        ],
        features: [
          { icon: "ph:seal-percent-bold", title: "0% platform transaction commission", desc: "100% of revenue goes straight to your Stripe, PayPal, or acquiring account, with no platform commission withheld." },
          { icon: "ph:credit-card-bold", title: "Mainstream global payments & multi-currency", desc: "Supports credit cards, Apple Pay, Google Pay, and major local wallets, with smart detection of visitor region and exchange rate." },
          { icon: "ph:lightning-bold", title: "14ms ultra-fast first-byte response (TTFB)", desc: "Edge-distributed acceleration and a Go coroutine engine open your store in milliseconds, sharply reducing checkout drop-off." },
          { icon: "ph:sparkle-bold", title: "Modern premium theme experience", desc: "A modern design language aligned with mainstream overseas tastes, with adaptive mobile and desktop shopping interactions." }
        ],
        metricValue: "0%",
        metricLabel: "Platform commission withheld",
        secondaryMetricValue: "14ms",
        secondaryMetricLabel: "Ultra-fast TTFB response",
        previewType: "checkout",
        detailRoute: "/page/b2c-store",
        isFeatured: true,
        status: 1,
        sortOrder: 20,
        tags: ["0% Commission", "Stripe/PayPal", "Fast TTFB", "Multi-currency", "DTC Brand"]
      },
      {
        id: "wholesale",
        slug: "wholesale",
        title: "B2B Wholesale & Channel Distribution Site",
        subtitle: "Fill in every size and color in one table \u2014 bulk ordering without endless chat and email confirmations",
        badge: "High Efficiency",
        badgeColor: "indigo",
        category: "wholesale",
        categoryLabel: "Wholesale & Distribution Partners",
        targetAudience: "Foreign trade wholesalers, distribution suppliers, bulk trade in industrial materials, apparel, and bags",
        summary: "A bulk ordering matrix built for B2B buyers. It supports two-dimensional multi-attribute bulk add-to-cart, real-time stock verification and subtotal calculation per variant, plus direct online checkout alongside custom OEM inquiries.",
        painPoints: [
          { title: "One-by-one add-to-cart is terribly slow", desc: "Traditional retail sites make buyers select specs item by item \u2014 choosing dozens of SKUs can take hundreds of clicks." },
          { title: "Offline spreadsheet reconciliation is error-prone", desc: "Manual spreadsheets exist in many versions, and price changes and variant stock cannot sync in real time, causing overselling." },
          { title: "Ready-to-ship and custom orders are split", desc: "Standard ready-to-ship items need instant checkout while OEM orders need spec-based inquiry forms \u2014 traditional sites struggle to support both." }
        ],
        features: [
          { icon: "ph:table-bold", title: "Two-dimensional spec matrix order table", desc: "A color-by-size cross table lets buyers enter quantities for each variant on a single page and add the whole table to the cart in one click." },
          { icon: "ph:calculator-bold", title: "Real-time variant stock & subtotal summary", desc: "Available inventory for every size and color is clearly shown, calculating total units and subtotals in real time to prevent overselling." },
          { icon: "ph:chat-teardrop-text-bold", title: "Online checkout & custom inquiries in parallel", desc: "Standard wholesale orders check out directly in the cart, while OEM/ODM custom products support one-click inquiries with specs and attachments." },
          { icon: "ph:globe-hemisphere-west-bold", title: "15-language & multi-currency distribution", desc: "Built-in 15 international languages and multi-currency conversion help global distributors order efficiently in their native language." }
        ],
        metricValue: "5x+",
        metricLabel: "Faster B2B bulk ordering",
        secondaryMetricValue: "100% Accurate",
        secondaryMetricLabel: "Multi-variant stock without overselling",
        previewType: "wholesale-table",
        detailRoute: "/page/wholesale",
        isFeatured: true,
        status: 1,
        sortOrder: 30,
        tags: ["Matrix Order Table", "Multi-SKU Bulk Add", "Real-time Stock Check", "Parallel Inquiry & Checkout", "Bulk Orders"]
      },
      {
        id: "amazon-store",
        slug: "amazon-store",
        title: "Amazon Seller Traffic & First-Party Audience Site",
        subtitle: "Host off-site deals and compliant cashback, turning one-time buyers into high-value brand-owned assets",
        badge: "Top Sellers Standard",
        badgeColor: "amber",
        category: "amazon",
        categoryLabel: "Amazon & Third-Party Platform Sellers",
        targetAudience: "Amazon premium sellers, Walmart/eBay multi-platform sellers, brand globalization teams",
        summary: "Build off-site landing pages to capture TikTok, Google, and Facebook traffic, and use exclusive discount codes to jump to Amazon and raise BSR rankings; activate buyer emails via after-sales warranty cards to grow first-party CRM.",
        painPoints: [
          { title: "Platform buyer data is fully closed", desc: "Amazon does not provide real customer emails, so new-product launches rely on expensive on-platform ads to re-engage." },
          { title: "On-platform PPC is increasingly brutal", desc: "PPC click costs rise every year, eroding thin margins, with almost no owned off-site traffic leverage." },
          { title: "Direct off-site links cut conversion", desc: "Low-intent traffic sent straight to a listing lowers conversion and gets down-weighted by the algorithm \u2014 a professional landing page is needed to filter it." }
        ],
        features: [
          { icon: "ph:amazon-logo-bold", title: "Buy on Amazon smart attribution redirect", desc: "The landing page shows exclusive Amazon coupon codes; one click jumps to the matching country listing to drive orders." },
          { icon: "ph:envelope-simple-open-bold", title: "Warranty capture of buyer email audience", desc: "A warranty card in the box guides users to register for extended coverage on the site, compliantly collecting real first-party buyer lists." },
          { icon: "ph:chart-bar-bold", title: "Amazon Attribution tracking", desc: "Fully track off-site campaign bounces and conversions across channels and earn up to 10% brand referral bonus." },
          { icon: "ph:sparkle-bold", title: "Automated cold-start promotions for new products", desc: "One code per person prevents coupon leaks that drain stock in flash sales, effectively lifting sales rankings." }
        ],
        metricValue: "3.4x",
        metricLabel: "First-party buyer audience growth",
        secondaryMetricValue: "10%",
        secondaryMetricLabel: "Up to 10% Amazon brand referral bonus",
        previewType: "amazon-funnel",
        detailRoute: "/page/amazon-store",
        isFeatured: true,
        status: 1,
        sortOrder: 40,
        tags: ["Amazon Traffic", "Buy on Amazon", "Audience Email Capture", "Warranty Card", "Attribution Bonus"]
      },
      {
        id: "custom",
        slug: "custom",
        title: "Enterprise-Grade Custom Business Systems",
        subtitle: "When standard SaaS cannot support a specific workflow, build custom development and deep system integration around your business model",
        badge: "Source-Level Control",
        badgeColor: "cyan",
        category: "custom",
        categoryLabel: "Enterprise Private Deployment & Large Custom Projects",
        targetAudience: "Global businesses with unique models, and groups needing deep integration with their ERP/WMS/MES",
        summary: "Based on a high-concurrency Go micro-kernel, a fully responsive Nuxt 4 architecture, and open data APIs, it offers agile custom development plus full private container deployment to protect trade secrets and data autonomy.",
        painPoints: [
          { title: "Overseas enterprise SaaS is costly", desc: "Solutions like Shopify Plus charge tens of thousands of dollars in annual licenses and are limited by sandbox environments with restricted freedom." },
          { title: "Internal ERP/WMS is hard to integrate", desc: "Existing Kingdee, Yonyou, Jushuitan, and Wanliniu systems cannot connect to the store, and manual reconciliation frequently errors." },
          { title: "Public-cloud data security concerns", desc: "Hosting customer information and core supply-chain data on overseas third-party clouds carries compliance and leak risks." }
        ],
        features: [
          { icon: "ph:code-bold", title: "Go 1.22 core coroutine high-concurrency engine", desc: "Throughput over 12,800 QPS per node, handling tens of millions of Black Friday spikes with only 64MB memory overhead." },
          { icon: "ph:plugs-connected-bold", title: "OpenAPI & Webhooks two-way real-time sync", desc: "Standardized RESTful APIs and event-driven rules connect your ERP, WMS, or internal platform in one click." },
          { icon: "ph:shield-check-bold", title: "100% data asset privatization", desc: "One-click Docker/Podman deployment on your own Alibaba Cloud, AWS, or on-premise IDC." },
          { icon: "ph:git-branch-bold", title: "Engineering standards and agile delivery", desc: "Strict code standards and layered architecture support future in-house secondary development or long-term technical hosting." }
        ],
        metricValue: "12,800+",
        metricLabel: "Single-node coroutine QPS throughput",
        secondaryMetricValue: "64MB",
        secondaryMetricLabel: "Micro-kernel ultra-low memory overhead",
        previewType: "custom-code",
        detailRoute: "/page/custom",
        isFeatured: true,
        status: 1,
        sortOrder: 50,
        tags: ["Go Micro-kernel", "OpenAPI", "ERP/WMS Integration", "Private Deployment", "Custom Development"]
      },
      {
        id: "migration",
        slug: "migration",
        title: "One-Click Smart Migration & Seamless Store Moving",
        subtitle: "Move products, categories, existing customers, and orders without code, and start multi-channel growth with zero downtime",
        badge: "Seamless Move",
        badgeColor: "rose",
        category: "migration",
        categoryLabel: "Seamless Migration & Data Transfer",
        targetAudience: "Sellers currently using Shopify, WooCommerce, Shoplazza, Shopline, or Weidian",
        summary: "Say goodbye to high platform commissions and limited features. A dedicated migration assistant fully parses your source store data, aligns fields intelligently, and preserves ad and Google organic ranking during a smooth transition \u2014 open for business the same day.",
        painPoints: [
          { title: "Huge historical data is hard to re-enter", desc: "Thousands of products, multi-attribute SKUs, member data, and order history would take months to migrate manually." },
          { title: "Fear of losing existing SEO rankings", desc: "Switching systems without handling original URLs can cause years of accumulated Google ranking to collapse." },
          { title: "Downtime cuts off orders", desc: "Traditional migrations often pause the store for days, badly hurting running ad campaigns and customer orders." }
        ],
        features: [
          { icon: "ph:arrows-left-right-bold", title: "One-click no-code cross-platform crawling", desc: "After authorization, automatically extract product galleries, variant SKUs, stock quantities, customer lists, and order history." },
          { icon: "ph:path-bold", title: "301 lossless redirects and SEO inheritance", desc: "Automatically create permanent 301 redirects for original product and category URLs to protect existing Google rankings." },
          { icon: "ph:clock-countdown-bold", title: "Cloud high-concurrency zero-downtime migration", desc: "Sync data asynchronously in the background while the old store keeps running; switch over with one click once verification matches." },
          { icon: "ph:headset-bold", title: "One-on-one technical expert support", desc: "Professional ops and globalization consultants follow through on DNS, payment integration, and data reconciliation to ensure nothing fails." }
        ],
        metricValue: "Zero Downtime",
        metricLabel: "Lossless end-to-end business transition",
        secondaryMetricValue: "100% Inherited",
        secondaryMetricLabel: "Products/Customers/Historical SEO equity",
        previewType: "migration",
        detailRoute: "/page/migration",
        isFeatured: true,
        status: 1,
        sortOrder: 60,
        tags: ["Shopify Migration", "WooCommerce Import", "Zero Downtime", "301 SEO Inheritance", "Lossless Data"]
      }
    ],
    comparisonRows: [
      {
        scenario: "B2B Foreign Trade Marketing Site",
        model: "Industry-trade / Export",
        targetBuyer: "Global professional buyers / engineers",
        paymentMode: "Detailed inquiries / Sample orders paid online / Offline T/T",
        coreCapability: "Google SEO / 15 languages / In-depth inquiry workbench",
        recommendedPlan: "Showcase / Starter"
      },
      {
        scenario: "Cross-border DTC Brand Retail",
        model: "Brand-owned / Niche cross-border",
        targetBuyer: "Consumers in Europe, US, Japan, Korea",
        paymentMode: "Stripe / PayPal / Credit card / Local wallets",
        coreCapability: "0% transaction commission / 14ms response / Modern theme",
        recommendedPlan: "Professional"
      },
      {
        scenario: "Wholesale & Channel Distribution",
        model: "Industrial wholesale / Channel supply",
        targetBuyer: "Agents / Distributors / Procurement offices",
        paymentMode: "Multi-SKU bulk checkout / Parallel custom inquiries",
        coreCapability: "Two-dimensional bulk order table / Real-time stock check / Multi-currency",
        recommendedPlan: "Professional / Premium"
      },
      {
        scenario: "Amazon Seller Off-Site Traffic",
        model: "Platform premium sellers / Multi-channel",
        targetBuyer: "Existing Amazon buyers & social-media shoppers",
        paymentMode: "Buy on Amazon redirect / Amazon official payout",
        coreCapability: "Off-site coupon distribution / Warranty cards / Audience email capture",
        recommendedPlan: "Starter / Professional"
      },
      {
        scenario: "Custom Full-Scenario Systems",
        model: "Unique business model / Group enterprise",
        targetBuyer: "Custom-demand buyers / Supply-chain partners",
        paymentMode: "Deep integration with own checkout / Corporate payments",
        coreCapability: "Go micro-kernel / OpenAPI real-time sync / Private containers",
        recommendedPlan: "Enterprise"
      },
      {
        scenario: "Smart Migration from Old Site",
        model: "Existing store sellers expanding",
        targetBuyer: "Existing platform customers transitioning smoothly",
        paymentMode: "Seamless switch of original payment channels",
        coreCapability: "One-click no-code crawling / 301 SEO inheritance / Zero downtime",
        recommendedPlan: "Included in all commerce plans"
      }
    ]
  },
  ru: {
    categoryTabs: [
      { id: "all", label: "\u0412\u0441\u0435 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0438", icon: "ph:squares-four-bold" },
      { id: "b2b", label: "B2B-\u0437\u0430\u044F\u0432\u043A\u0438", icon: "ph:buildings-bold" },
      { id: "b2c", label: "DTC-\u0431\u0440\u0435\u043D\u0434", icon: "ph:globe-stand-bold" },
      { id: "wholesale", label: "\u041E\u043F\u0442 \u0438 \u0434\u0438\u0441\u0442\u0440\u0438\u0431\u0443\u0446\u0438\u044F", icon: "ph:stack-bold" },
      { id: "amazon", label: "Amazon/\u0442\u0440\u0430\u0444\u0438\u043A \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C", icon: "ph:amazon-logo-bold" },
      { id: "custom", label: "\u0418\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F", icon: "ph:code-bold" },
      { id: "migration", label: "\u041F\u0435\u0440\u0435\u043D\u043E\u0441 \u0431\u0435\u0437 \u043F\u043E\u0442\u0435\u0440\u044C", icon: "ph:arrows-left-right-bold" }
    ],
    solutions: [
      {
        id: "b2b-website",
        slug: "b2b-website",
        title: "B2B-\u0441\u0430\u0439\u0442 \u0434\u043B\u044F \u0432\u043D\u0435\u0448\u043D\u0435\u0439 \u0442\u043E\u0440\u0433\u043E\u0432\u043B\u0438 \u0441 \u0442\u043E\u0447\u043D\u044B\u043C\u0438 \u0437\u0430\u044F\u0432\u043A\u0430\u043C\u0438",
        subtitle: "\u041E\u0442\u043A\u0430\u0436\u0438\u0442\u0435\u0441\u044C \u043E\u0442 \u0442\u0435\u0441\u043D\u044B\u0445 \u0432\u044B\u0441\u0442\u0430\u0432\u043E\u043A \u0438 \u0446\u0435\u043D\u043E\u0432\u044B\u0445 \u0432\u043E\u0439\u043D \u043D\u0430 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430\u0445 \u2014 \u0441\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u0430\u0432\u0442\u043E\u0440\u0438\u0442\u0435\u0442\u043D\u044B\u0439 \u0441\u0430\u0439\u0442, \u043F\u0440\u0438\u043D\u043E\u0441\u044F\u0449\u0438\u0439 \u0446\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u0440\u0443\u0431\u0435\u0436\u043D\u044B\u0435 \u0437\u0430\u044F\u0432\u043A\u0438 \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E",
        badge: "\u0412\u044B\u0431\u043E\u0440 \u044D\u043A\u0441\u043F\u043E\u0440\u0442\u0451\u0440\u0430",
        badgeColor: "blue",
        category: "b2b",
        categoryLabel: "B2B-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E \u0438 \u0442\u043E\u0440\u0433\u043E\u0432\u043B\u044F",
        targetAudience: "\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0435\u043D\u043D\u043E-\u0442\u043E\u0440\u0433\u043E\u0432\u044B\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438, \u044D\u043A\u0441\u043F\u043E\u0440\u0442\u043D\u044B\u0435 \u0437\u0430\u0432\u043E\u0434\u044B, \u043A\u0440\u043E\u0441\u0441-\u0431\u043E\u0440\u0434\u0435\u0440 OEM/ODM-\u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0438",
        summary: "\u041D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u0430\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u044B\u0439 \u0431\u0440\u0435\u043D\u0434-\u0441\u0430\u0439\u0442 \u0432 \u0437\u0430\u043F\u0430\u0434\u043D\u043E\u0439 \u044D\u0441\u0442\u0435\u0442\u0438\u043A\u0435, \u043D\u043E \u0438 \u0432\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u0430\u044F \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F SEO-\u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0430 Google, \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 15 \u044F\u0437\u044B\u043A\u043E\u0432 \u0438 \u0440\u0430\u0431\u043E\u0447\u0435\u0435 \u043C\u0435\u0441\u0442\u043E \u0434\u043B\u044F \u0437\u0430\u044F\u0432\u043E\u043A \u0441\u043E \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F\u043C\u0438, \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E\u043C \u0438 \u043F\u0440\u0438\u043A\u0440\u0435\u043F\u043B\u0451\u043D\u043D\u044B\u043C\u0438 \u0447\u0435\u0440\u0442\u0435\u0436\u0430\u043C\u0438.",
        painPoints: [
          { title: "\u0412\u044B\u0441\u043E\u043A\u0430\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043B\u0438\u0434\u043E\u0432 \u0441 \u0432\u044B\u0441\u0442\u0430\u0432\u043E\u043A", desc: "\u0420\u0430\u0441\u0445\u043E\u0434\u044B \u043D\u0430 \u043F\u043E\u0435\u0437\u0434\u043A\u0438 \u0438 \u0441\u0442\u0435\u043D\u0434\u044B \u0440\u0430\u0441\u0442\u0443\u0442 \u0435\u0436\u0435\u0433\u043E\u0434\u043D\u043E, \u0432\u0438\u0437\u0438\u0442\u043A\u0438 \u0442\u0435\u0440\u044F\u044E\u0442\u0441\u044F, \u0430 \u0446\u0438\u0444\u0440\u043E\u0432\u044B\u0435 \u0430\u043A\u0442\u0438\u0432\u044B \u043F\u043E\u0447\u0442\u0438 \u043D\u0435 \u043D\u0430\u043A\u0430\u043F\u043B\u0438\u0432\u0430\u044E\u0442\u0441\u044F." },
          { title: "\u0425\u0430\u043E\u0442\u0438\u0447\u043D\u044B\u0439 \u0434\u0435\u043C\u043F\u0438\u043D\u0433 \u043D\u0430 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430\u0445", desc: "\u041D\u0430 \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043E\u043D\u043D\u044B\u0445 B2B-\u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430\u0445 \u0436\u0451\u0441\u0442\u043A\u0430\u044F \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0446\u0438\u044F \u043F\u043E \u0446\u0435\u043D\u0435 \u0438 \u043D\u0435\u0442 \u043C\u0435\u0441\u0442\u0430 \u0434\u043B\u044F \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u0431\u0440\u0435\u043D\u0434\u0430 \u2014 \u043C\u0430\u0440\u0436\u0430 \u043F\u0430\u0434\u0430\u0435\u0442 \u0434\u043E \u043F\u0440\u0435\u0434\u0435\u043B\u0430." },
          { title: "\u041D\u0435\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0437\u0430\u044F\u0432\u043A\u0438 \u043D\u0430 \u043F\u0440\u043E\u0441\u0442\u044B\u0445 \u0441\u0430\u0439\u0442\u0430\u0445", desc: "\u041E\u0431\u044B\u0447\u043D\u0430\u044F \u0433\u043E\u0441\u0442\u0435\u0432\u0430\u044F \u043A\u043D\u0438\u0433\u0430 \u0440\u0430\u0437\u0440\u043E\u0437\u043D\u0438\u0432\u0430\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0435 \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0435\u0439: \u043D\u0435\u0442 \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0439 \u0437\u0430\u043A\u0443\u043F\u043A\u0438, \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432 \u0438 \u0447\u0435\u0440\u0442\u0435\u0436\u0435\u0439 \u2014 \u0431\u0435\u0441\u043A\u043E\u043D\u0435\u0447\u043D\u044B\u0435 \u0443\u0442\u043E\u0447\u043D\u0435\u043D\u0438\u044F." }
        ],
        features: [
          { icon: "ph:chat-teardrop-text-bold", title: "\u0413\u043B\u0443\u0431\u043E\u043A\u0438\u0435 \u0437\u0430\u044F\u0432\u043A\u0438 \u0441\u043E \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0435\u0439 \u0438 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E\u043C", desc: "\u041F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0438 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u044E\u0442 \u0442\u043E\u0447\u043D\u044B\u0435 \u0437\u0430\u044F\u0432\u043A\u0438 \u043F\u0440\u044F\u043C\u043E \u0441\u043E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0442\u043E\u0432\u0430\u0440\u0430 \u0438 \u043F\u0440\u0438\u043A\u0440\u0435\u043F\u043B\u044F\u044E\u0442 \u0438\u043D\u0436\u0435\u043D\u0435\u0440\u043D\u044B\u0435 \u0447\u0435\u0440\u0442\u0435\u0436\u0438 \u0438 \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438, \u0438\u0441\u043A\u043B\u044E\u0447\u0430\u044F \u043F\u0443\u0441\u0442\u044B\u0435 \u0437\u0430\u043F\u0440\u043E\u0441\u044B." },
          { icon: "ph:globe-hemisphere-west-bold", title: "\u041F\u043E\u043B\u043D\u0430\u044F \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 15 \u044F\u0437\u044B\u043A\u043E\u0432", desc: "\u0412\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u044B\u0435 \u044F\u0437\u044B\u043A\u043E\u0432\u044B\u0435 \u043F\u0430\u043A\u0435\u0442\u044B: \u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u0438\u0439, \u043D\u0435\u043C\u0435\u0446\u043A\u0438\u0439, \u0444\u0440\u0430\u043D\u0446\u0443\u0437\u0441\u043A\u0438\u0439, \u0438\u0441\u043F\u0430\u043D\u0441\u043A\u0438\u0439, \u0440\u0443\u0441\u0441\u043A\u0438\u0439, \u0430\u0440\u0430\u0431\u0441\u043A\u0438\u0439, \u044F\u043F\u043E\u043D\u0441\u043A\u0438\u0439, \u043A\u043E\u0440\u0435\u0439\u0441\u043A\u0438\u0439 \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u2014 \u0431\u044B\u0441\u0442\u0440\u044B\u0439 \u0432\u044B\u0445\u043E\u0434 \u043D\u0430 \u043D\u0435\u0430\u043D\u0433\u043B\u043E\u044F\u0437\u044B\u0447\u043D\u044B\u0435 \u0440\u044B\u043D\u043A\u0438." },
          { icon: "ph:magnifying-glass-plus-bold", title: "\u0421\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F SEO-\u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0430 Google", desc: "\u0421\u0435\u043C\u0430\u043D\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 HTML5, \u0430\u0432\u0442\u043E-\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u0443\u0435\u043C\u044B\u0439 Sitemap, \u043A\u0430\u043D\u043E\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0441\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 URL \u0438 Schema-\u0442\u0435\u0433\u0438 \u0441 \u043C\u0435\u0434\u0438\u0430 \u043F\u043E\u0432\u044B\u0448\u0430\u044E\u0442 \u043E\u0440\u0433\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043F\u043E\u0437\u0438\u0446\u0438\u0438." },
          { icon: "ph:users-three-bold", title: "\u0420\u0430\u0431\u043E\u0447\u0435\u0435 \u043C\u0435\u0441\u0442\u043E \u0434\u043B\u044F \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B \u0441 \u0437\u0430\u044F\u0432\u043A\u0430\u043C\u0438", desc: "\u0417\u0430\u044F\u0432\u043A\u0438 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442 \u0441\u0442\u0440\u0430\u043D\u0443 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0430 \u0438 \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440, \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043F\u043E \u0441\u0442\u0430\u0442\u0443\u0441\u0443 \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u043D\u043E/\u043D\u0435 \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u043D\u043E, \u0430 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u044B \u043E\u0442\u0432\u0435\u0447\u0430\u044E\u0442 \u043F\u0438\u0441\u044C\u043C\u043E\u043C \u043F\u0440\u044F\u043C\u043E \u0438\u0437 \u043F\u0430\u043D\u0435\u043B\u0438." }
        ],
        metricValue: "+280%",
        metricLabel: "\u0420\u043E\u0441\u0442 \u0440\u0435\u0430\u043B\u044C\u043D\u044B\u0445 \u0437\u0430\u0440\u0443\u0431\u0435\u0436\u043D\u044B\u0445 \u0437\u0430\u044F\u0432\u043E\u043A",
        secondaryMetricValue: "15 \u044F\u0437\u044B\u043A\u043E\u0432",
        secondaryMetricLabel: "\u041F\u043E\u043A\u0440\u044B\u0442\u0438\u0435 \u0440\u043E\u0434\u043D\u044B\u043C\u0438 \u044F\u0437\u044B\u043A\u0430\u043C\u0438 \u043C\u0438\u0440\u0430",
        previewType: "inquiry",
        detailRoute: "/page/b2b-website",
        isFeatured: true,
        status: 1,
        sortOrder: 10,
        tags: ["Google SEO", "15 \u044F\u0437\u044B\u043A\u043E\u0432", "\u0417\u0430\u044F\u0432\u043A\u0438", "\u041E\u0442\u0440\u0430\u0441\u043B\u044C \u0438 \u0442\u043E\u0440\u0433\u043E\u0432\u043B\u044F", "\u0421\u043E\u0432\u043C\u0435\u0441\u0442\u043D\u0430\u044F \u0440\u0430\u0431\u043E\u0442\u0430"]
      },
      {
        id: "b2c-store",
        slug: "b2c-store",
        title: "\u041A\u0440\u043E\u0441\u0441-\u0431\u043E\u0440\u0434\u0435\u0440 DTC-\u043C\u0430\u0433\u0430\u0437\u0438\u043D \u0431\u0440\u0435\u043D\u0434\u0430",
        subtitle: "\u0421\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u043A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u043E\u043D\u043D\u044B\u0439 \u0438 \u0432\u044B\u0437\u044B\u0432\u0430\u044E\u0449\u0438\u0439 \u0434\u043E\u0432\u0435\u0440\u0438\u0435 \u0444\u0438\u0440\u043C\u0435\u043D\u043D\u044B\u0439 \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u0434\u043B\u044F \u0440\u044B\u043D\u043A\u043E\u0432 \u0415\u0432\u0440\u043E\u043F\u044B, \u0421\u0428\u0410 \u0438 \u043C\u0438\u0440\u0430",
        badge: "\u0425\u0438\u0442 \u043F\u0440\u043E\u0434\u0430\u0436",
        badgeColor: "emerald",
        category: "b2c",
        categoryLabel: "DTC-\u0440\u0438\u0442\u0435\u0439\u043B \u0438 \u043D\u0438\u0448\u0435\u0432\u044B\u0435 \u0431\u0440\u0435\u043D\u0434\u044B",
        targetAudience: "\u041F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0435 \u0431\u0440\u0435\u043D\u0434\u044B, \u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u044B \u043A\u0440\u043E\u0441\u0441-\u0431\u043E\u0440\u0434\u0435\u0440 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u043E\u0432, \u043D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u044B\u0435 \u0434\u0438\u0437\u0430\u0439\u043D-\u0431\u0440\u0435\u043D\u0434\u044B",
        summary: "\u0418\u0437\u0431\u0430\u0432\u044C\u0442\u0435\u0441\u044C \u043E\u0442 \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u0439 \u0441\u0442\u043E\u0440\u043E\u043D\u043D\u0438\u0445 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C \u0438 \u0440\u0438\u0441\u043A\u0430 \u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u043A\u0438 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430. \u0412\u043B\u0430\u0434\u0435\u0439\u0442\u0435 100% \u0434\u0430\u043D\u043D\u044B\u0445 \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0435\u0439, \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0439\u0442\u0435 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u043F\u043B\u0430\u0442\u0435\u0436\u0438 \u0438 \u043C\u0443\u043B\u044C\u0442\u0438\u0432\u0430\u043B\u044E\u0442\u043D\u044B\u0435 \u0440\u0430\u0441\u0447\u0451\u0442\u044B, \u043F\u043E\u0432\u044B\u0448\u0430\u0439\u0442\u0435 \u043A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u044E \u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u043E\u0442\u043A\u043B\u0438\u043A\u0443 14 \u043C\u0441.",
        painPoints: [
          { title: "\u0412\u044B\u0441\u043E\u043A\u0438\u0435 \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u0438 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C", desc: "\u0421\u0442\u043E\u0440\u043E\u043D\u043D\u0438\u0435 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B \u0431\u0435\u0440\u0443\u0442 15\u201330% \u043F\u043B\u044E\u0441 \u0441\u043A\u0440\u044B\u0442\u044B\u0435 \u0441\u0431\u043E\u0440\u044B \u043D\u0430 \u043A\u0430\u0436\u0434\u043E\u043C \u044D\u0442\u0430\u043F\u0435, \u0441\u0435\u0440\u044C\u0451\u0437\u043D\u043E \u0441\u043E\u043A\u0440\u0430\u0449\u0430\u044F \u043C\u0430\u0440\u0436\u0443 \u043F\u0440\u043E\u0434\u0430\u0432\u0446\u0430." },
          { title: "\u0411\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u043A\u0430 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430 \u0441\u0442\u0430\u043B\u0430 \u043D\u043E\u0440\u043C\u043E\u0439", desc: "\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C \u0447\u0430\u0441\u0442\u043E \u043C\u0435\u043D\u044F\u044E\u0442\u0441\u044F, \u0430 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u044B \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0435\u0439 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B \u2014 \u0441\u043B\u043E\u0436\u043D\u043E \u043D\u0430\u043A\u0430\u043F\u043B\u0438\u0432\u0430\u0442\u044C \u0434\u043E\u043B\u0433\u043E\u0441\u0440\u043E\u0447\u043D\u044B\u0435 \u0430\u043A\u0442\u0438\u0432\u044B." },
          { title: "\u041C\u0435\u0434\u043B\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u0440\u0443\u0431\u0435\u0436\u043D\u044B\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0442\u0435\u0440\u044F\u044E\u0442 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432", desc: "\u0423 \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440\u043E\u0432 TTFB \u0447\u0430\u0441\u0442\u043E \u0432\u044B\u0448\u0435 800 \u043C\u0441, \u0438 \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0438 \u0443\u0445\u043E\u0434\u044F\u0442 \u0438\u0437-\u0437\u0430 \u0437\u0430\u0434\u0435\u0440\u0436\u0435\u043A." }
        ],
        features: [
          { icon: "ph:seal-percent-bold", title: "0% \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u0438 \u0437\u0430 \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0438", desc: "100% \u0432\u044B\u0440\u0443\u0447\u043A\u0438 \u043F\u043E\u0441\u0442\u0443\u043F\u0430\u0435\u0442 \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E \u043D\u0430 \u0432\u0430\u0448 Stripe, PayPal \u0438\u043B\u0438 \u044D\u043A\u0432\u0430\u0439\u0440\u0438\u043D\u0433-\u0441\u0447\u0451\u0442 \u0431\u0435\u0437 \u0443\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u044F \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u0438 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B." },
          { icon: "ph:credit-card-bold", title: "\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u043F\u043B\u0430\u0442\u0435\u0436\u0438 \u0438 \u043C\u0443\u043B\u044C\u0442\u0438\u0432\u0430\u043B\u044E\u0442\u043D\u043E\u0441\u0442\u044C", desc: "\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 \u043A\u0430\u0440\u0442, Apple Pay, Google Pay \u0438 \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u044B\u0445 \u043A\u043E\u0448\u0435\u043B\u044C\u043A\u043E\u0432 \u0441 \u0443\u043C\u043D\u044B\u043C \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435\u043C \u0440\u0435\u0433\u0438\u043E\u043D\u0430 \u0438 \u043A\u0443\u0440\u0441\u0430 \u0434\u043B\u044F \u043F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u044F." },
          { icon: "ph:lightning-bold", title: "\u0421\u0432\u0435\u0440\u0445\u0431\u044B\u0441\u0442\u0440\u044B\u0439 \u043E\u0442\u043A\u043B\u0438\u043A 14 \u043C\u0441 (TTFB)", desc: "Edge-\u0443\u0441\u043A\u043E\u0440\u0435\u043D\u0438\u0435 \u0438 \u0434\u0432\u0438\u0436\u043E\u043A Go-\u0433\u043E\u0440\u0443\u0442\u0438\u043D \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u044E\u0442 \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u0437\u0430 \u043C\u0438\u043B\u043B\u0438\u0441\u0435\u043A\u0443\u043D\u0434\u044B, \u0440\u0435\u0437\u043A\u043E \u0441\u043D\u0438\u0436\u0430\u044F \u043E\u0442\u043A\u0430\u0437\u044B \u043D\u0430 \u043E\u043F\u043B\u0430\u0442\u0435." },
          { icon: "ph:sparkle-bold", title: "\u0421\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0439 \u043F\u0440\u0435\u043C\u0438\u0430\u043B\u044C\u043D\u044B\u0439 \u0434\u0438\u0437\u0430\u0439\u043D", desc: "\u0421\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0439 \u044F\u0437\u044B\u043A \u0434\u0438\u0437\u0430\u0439\u043D\u0430 \u043F\u043E\u0434 \u0432\u043A\u0443\u0441\u044B \u0437\u0430\u0440\u0443\u0431\u0435\u0436\u043D\u044B\u0445 \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0435\u0439 \u0441 \u0430\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u044B\u043C \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043E\u043C \u0434\u043B\u044F \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0445 \u0438 \u0434\u0435\u0441\u043A\u0442\u043E\u043F\u0430." }
        ],
        metricValue: "0%",
        metricLabel: "\u0423\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0435 \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u0438 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B",
        secondaryMetricValue: "14ms",
        secondaryMetricLabel: "\u0421\u0432\u0435\u0440\u0445\u0431\u044B\u0441\u0442\u0440\u044B\u0439 \u043E\u0442\u043A\u043B\u0438\u043A TTFB",
        previewType: "checkout",
        detailRoute: "/page/b2c-store",
        isFeatured: true,
        status: 1,
        sortOrder: 20,
        tags: ["0% \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u0438", "Stripe/PayPal", "\u0411\u044B\u0441\u0442\u0440\u044B\u0439 TTFB", "\u041C\u0443\u043B\u044C\u0442\u0438\u0432\u0430\u043B\u044E\u0442\u043D\u043E\u0441\u0442\u044C", "DTC-\u0431\u0440\u0435\u043D\u0434"]
      },
      {
        id: "wholesale",
        slug: "wholesale",
        title: "B2B-\u0441\u0430\u0439\u0442 \u043E\u043F\u0442\u0430 \u0438 \u043A\u0430\u043D\u0430\u043B\u043E\u0432 \u0434\u0438\u0441\u0442\u0440\u0438\u0431\u0443\u0446\u0438\u0438",
        subtitle: "\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0432\u0441\u0435 \u0440\u0430\u0437\u043C\u0435\u0440\u044B \u0438 \u0446\u0432\u0435\u0442\u0430 \u0432 \u043E\u0434\u043D\u043E\u0439 \u0442\u0430\u0431\u043B\u0438\u0446\u0435 \u2014 \u043E\u043F\u0442\u043E\u0432\u044B\u0435 \u0437\u0430\u043A\u0430\u0437\u044B \u0431\u0435\u0437 \u0431\u0435\u0441\u043A\u043E\u043D\u0435\u0447\u043D\u044B\u0445 \u043F\u0435\u0440\u0435\u043F\u0438\u0441\u043E\u043A",
        badge: "\u0412\u044B\u0441\u043E\u043A\u0430\u044F \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C",
        badgeColor: "indigo",
        category: "wholesale",
        categoryLabel: "\u041E\u043F\u0442 \u0438 \u0434\u0438\u0441\u0442\u0440\u0438\u0431\u0443\u0446\u0438\u044F",
        targetAudience: "\u041E\u043F\u0442\u043E\u0432\u0438\u043A\u0438, \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0438 \u0434\u0438\u0441\u0442\u0440\u0438\u0431\u0443\u0446\u0438\u0438, \u043E\u043F\u0442 \u043F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u044B\u0445 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432, \u043E\u0434\u0435\u0436\u0434\u044B \u0438 \u0441\u0443\u043C\u043E\u043A",
        summary: "\u041C\u0430\u0442\u0440\u0438\u0446\u0430 \u043E\u043F\u0442\u043E\u0432\u044B\u0445 \u0437\u0430\u043A\u0430\u0437\u043E\u0432, \u0441\u043E\u0437\u0434\u0430\u043D\u043D\u0430\u044F \u0434\u043B\u044F B2B-\u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0435\u0439. \u041F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0434\u0432\u0443\u0445\u043C\u0435\u0440\u043D\u0443\u044E \u043C\u0443\u043B\u044C\u0442\u0438\u0430\u0442\u0440\u0438\u0431\u0443\u0442\u043D\u0443\u044E \u043A\u043E\u0440\u0437\u0438\u043D\u0443, \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0443 \u043E\u0441\u0442\u0430\u0442\u043A\u043E\u0432 \u0438 \u0440\u0430\u0441\u0447\u0451\u0442 \u0441\u0443\u043C\u043C\u044B \u043F\u043E \u043A\u0430\u0436\u0434\u043E\u043C\u0443 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u0443 \u0432 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u043C \u0432\u0440\u0435\u043C\u0435\u043D\u0438, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043E\u043D\u043B\u0430\u0439\u043D-\u043E\u043F\u043B\u0430\u0442\u0443 \u0438 OEM-\u0437\u0430\u044F\u0432\u043A\u0438 \u043F\u0430\u0440\u0430\u043B\u043B\u0435\u043B\u044C\u043D\u043E.",
        painPoints: [
          { title: "\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u043F\u043E\u0448\u0442\u0443\u0447\u043D\u043E \u043A\u0440\u0430\u0439\u043D\u0435 \u043C\u0435\u0434\u043B\u0435\u043D\u043D\u043E", desc: "\u041D\u0430 \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430\u0445 \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0438 \u0432\u044B\u0431\u0438\u0440\u0430\u044E\u0442 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u043F\u043E \u043E\u0434\u043D\u043E\u043C\u0443: \u0434\u0435\u0441\u044F\u0442\u043A\u0438 SKU \u2014 \u044D\u0442\u043E \u0441\u043E\u0442\u043D\u0438 \u043A\u043B\u0438\u043A\u043E\u0432." },
          { title: "\u041E\u0448\u0438\u0431\u043A\u0438 \u043F\u0440\u0438 \u0441\u0432\u0435\u0440\u043A\u0435 \u043E\u0444\u043B\u0430\u0439\u043D-\u0442\u0430\u0431\u043B\u0438\u0446", desc: "\u0420\u0443\u0447\u043D\u044B\u0435 \u0442\u0430\u0431\u043B\u0438\u0446\u044B \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0442 \u0432\u043E \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0435 \u0432\u0435\u0440\u0441\u0438\u0439, \u0430 \u0446\u0435\u043D\u044B \u0438 \u043E\u0441\u0442\u0430\u0442\u043A\u0438 \u043F\u043E \u0440\u0430\u0437\u043C\u0435\u0440\u0430\u043C \u043D\u0435 \u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0438\u0440\u0443\u044E\u0442\u0441\u044F \u0432 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u043C \u0432\u0440\u0435\u043C\u0435\u043D\u0438." },
          { title: "\u0413\u043E\u0442\u043E\u0432\u044B\u0439 \u0442\u043E\u0432\u0430\u0440 \u0438 \u043A\u0430\u0441\u0442\u043E\u043C\u043D\u044B\u0435 \u0437\u0430\u043A\u0430\u0437\u044B \u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u044B", desc: "\u0414\u043B\u044F \u0433\u043E\u0442\u043E\u0432\u044B\u0445 \u043F\u0430\u0440\u0442\u0438\u0439 \u043D\u0443\u0436\u043D\u0430 \u0431\u044B\u0441\u0442\u0440\u0430\u044F \u043E\u043F\u043B\u0430\u0442\u0430, \u0430 \u0434\u043B\u044F OEM-\u0437\u0430\u043A\u0430\u0437\u043E\u0432 \u2014 \u0444\u043E\u0440\u043C\u0430 \u0437\u0430\u044F\u0432\u043A\u0438 \u0441 \u0447\u0435\u0440\u0442\u0435\u0436\u0430\u043C\u0438; \u043E\u0431\u044B\u0447\u043D\u044B\u0435 \u0441\u0430\u0439\u0442\u044B \u043D\u0435 \u0441\u043E\u0432\u043C\u0435\u0449\u0430\u044E\u0442 \u043E\u0431\u0430 \u0440\u0435\u0436\u0438\u043C\u0430." }
        ],
        features: [
          { icon: "ph:table-bold", title: "\u0414\u0432\u0443\u0445\u043C\u0435\u0440\u043D\u0430\u044F \u043C\u0430\u0442\u0440\u0438\u0446\u0430 \u0437\u0430\u043A\u0430\u0437\u0430 \u043F\u043E \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u0430\u043C", desc: "\u0422\u0430\u0431\u043B\u0438\u0446\u0430 \xAB\u0446\u0432\u0435\u0442 \xD7 \u0440\u0430\u0437\u043C\u0435\u0440\xBB \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u044E \u0443\u043A\u0430\u0437\u0430\u0442\u044C \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u043E \u043A\u0430\u0436\u0434\u043E\u043C\u0443 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u0443 \u043D\u0430 \u043E\u0434\u043D\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u0438 \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432\u0441\u044E \u0442\u0430\u0431\u043B\u0438\u0446\u0443 \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443 \u043E\u0434\u043D\u0438\u043C \u043A\u043B\u0438\u043A\u043E\u043C." },
          { icon: "ph:calculator-bold", title: "\u041E\u0441\u0442\u0430\u0442\u043A\u0438 \u0438 \u043F\u0440\u043E\u043C\u0435\u0436\u0443\u0442\u043E\u0447\u043D\u044B\u0439 \u0438\u0442\u043E\u0433 \u0432 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u043C \u0432\u0440\u0435\u043C\u0435\u043D\u0438", desc: "\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0439 \u043E\u0441\u0442\u0430\u0442\u043E\u043A \u043F\u043E \u043A\u0430\u0436\u0434\u043E\u043C\u0443 \u0440\u0430\u0437\u043C\u0435\u0440\u0443 \u0438 \u0446\u0432\u0435\u0442\u0443 \u0432\u0438\u0434\u0435\u043D \u0441\u0440\u0430\u0437\u0443, \u0430 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0438 \u0441\u0443\u043C\u043C\u0430 \u043F\u0435\u0440\u0435\u0441\u0447\u0438\u0442\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u043C\u0433\u043D\u043E\u0432\u0435\u043D\u043D\u043E \u0431\u0435\u0437 \u0440\u0438\u0441\u043A\u0430 \u043F\u0435\u0440\u0435\u043F\u0440\u043E\u0434\u0430\u0436\u0438." },
          { icon: "ph:chat-teardrop-text-bold", title: "\u041E\u043D\u043B\u0430\u0439\u043D-\u043E\u043F\u043B\u0430\u0442\u0430 \u0438 \u043A\u0430\u0441\u0442\u043E\u043C\u043D\u044B\u0435 \u0437\u0430\u044F\u0432\u043A\u0438 \u0432 \u043E\u0434\u043D\u043E\u043C \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0435", desc: "\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 \u043E\u043F\u0442\u043E\u0432\u044B\u0435 \u0437\u0430\u043A\u0430\u0437\u044B \u043E\u043F\u043B\u0430\u0447\u0438\u0432\u0430\u044E\u0442\u0441\u044F \u0447\u0435\u0440\u0435\u0437 \u043A\u043E\u0440\u0437\u0438\u043D\u0443, \u0430 \u0434\u043B\u044F OEM/ODM-\u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0430 \u0437\u0430\u044F\u0432\u043A\u0438 \u0441\u043E \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0435\u0439 \u0438 \u0444\u0430\u0439\u043B\u0430\u043C\u0438." },
          { icon: "ph:globe-hemisphere-west-bold", title: "15 \u044F\u0437\u044B\u043A\u043E\u0432 \u0438 \u043C\u0443\u043B\u044C\u0442\u0438\u0432\u0430\u043B\u044E\u0442\u043D\u043E\u0441\u0442\u044C \u0434\u043B\u044F \u0434\u0438\u0441\u0442\u0440\u0438\u0431\u044C\u044E\u0442\u043E\u0440\u043E\u0432", desc: "\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 15 \u044F\u0437\u044B\u043A\u043E\u0432 \u0438 \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0432\u0430\u043B\u044E\u0442 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0442 \u0434\u0438\u0441\u0442\u0440\u0438\u0431\u044C\u044E\u0442\u043E\u0440\u0430\u043C \u043F\u043E \u0432\u0441\u0435\u043C\u0443 \u043C\u0438\u0440\u0443 \u0443\u0434\u043E\u0431\u043D\u043E \u0437\u0430\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u043D\u0430 \u0440\u043E\u0434\u043D\u043E\u043C \u044F\u0437\u044B\u043A\u0435." }
        ],
        metricValue: "5x+",
        metricLabel: "\u0423\u0441\u043A\u043E\u0440\u0435\u043D\u0438\u0435 \u043E\u043F\u0442\u043E\u0432\u044B\u0445 \u0437\u0430\u043A\u0430\u0437\u043E\u0432",
        secondaryMetricValue: "100% \u0442\u043E\u0447\u043D\u043E",
        secondaryMetricLabel: "\u0417\u0430\u0449\u0438\u0442\u0430 \u043E\u0442 \u043F\u0435\u0440\u0435\u043F\u0440\u043E\u0434\u0430\u0436\u0438 \u043F\u043E \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u0430\u043C",
        previewType: "wholesale-table",
        detailRoute: "/page/wholesale",
        isFeatured: true,
        status: 1,
        sortOrder: 30,
        tags: ["\u041C\u0430\u0442\u0440\u0438\u0446\u0430 \u0437\u0430\u043A\u0430\u0437\u043E\u0432", "\u041C\u0430\u0441\u0441\u043E\u0432\u043E\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 SKU", "\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u043E\u0441\u0442\u0430\u0442\u043A\u043E\u0432", "\u0417\u0430\u044F\u0432\u043A\u0438 \u0438 \u043E\u043F\u043B\u0430\u0442\u0430", "\u041E\u043F\u0442\u043E\u0432\u044B\u0435 \u0437\u0430\u043A\u0430\u0437\u044B"]
      },
      {
        id: "amazon-store",
        slug: "amazon-store",
        title: "\u0421\u0430\u0439\u0442 \u0442\u0440\u0430\u0444\u0438\u043A\u0430 \u0434\u043B\u044F \u043F\u0440\u043E\u0434\u0430\u0432\u0446\u043E\u0432 Amazon \u0438 \u0441\u0431\u043E\u0440\u0430 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0438",
        subtitle: "\u041F\u0440\u0438\u043D\u0438\u043C\u0430\u0439\u0442\u0435 \u0432\u043D\u0435\u0448\u043D\u0438\u0435 \u0430\u043A\u0446\u0438\u0438 \u0438 \u043B\u0435\u0433\u0430\u043B\u044C\u043D\u044B\u0439 \u043A\u044D\u0448\u0431\u044D\u043A, \u043F\u0440\u0435\u0432\u0440\u0430\u0449\u0430\u044F \u0440\u0430\u0437\u043E\u0432\u044B\u0445 \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0435\u0439 \u0432 \u0446\u0435\u043D\u043D\u044B\u0435 \u0430\u043A\u0442\u0438\u0432\u044B \u0431\u0440\u0435\u043D\u0434\u0430",
        badge: "\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442 \u0442\u043E\u043F-\u043F\u0440\u043E\u0434\u0430\u0432\u0446\u043E\u0432",
        badgeColor: "amber",
        category: "amazon",
        categoryLabel: "\u041F\u0440\u043E\u0434\u0430\u0432\u0446\u044B \u043D\u0430 Amazon \u0438 \u0441\u0442\u043E\u0440\u043E\u043D\u043D\u0438\u0445 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430\u0445",
        targetAudience: "\u041F\u0440\u0435\u043C\u0438\u0443\u043C-\u043F\u0440\u043E\u0434\u0430\u0432\u0446\u044B Amazon, \u043C\u0443\u043B\u044C\u0442\u0438\u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0435\u043D\u043D\u044B\u0435 \u043F\u0440\u043E\u0434\u0430\u0432\u0446\u044B Walmart/eBay, \u043A\u043E\u043C\u0430\u043D\u0434\u044B \u0432\u044B\u0432\u043E\u0434\u0430 \u0431\u0440\u0435\u043D\u0434\u043E\u0432",
        summary: "\u0421\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u0432\u043D\u0435\u0448\u043D\u0438\u0435 \u043B\u0435\u043D\u0434\u0438\u043D\u0433\u0438 \u0434\u043B\u044F \u043F\u0440\u0438\u0451\u043C\u0430 \u0442\u0440\u0430\u0444\u0438\u043A\u0430 \u0438\u0437 TikTok, Google \u0438 Facebook \u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u044D\u043A\u0441\u043A\u043B\u044E\u0437\u0438\u0432\u043D\u044B\u0435 \u043F\u0440\u043E\u043C\u043E\u043A\u043E\u0434\u044B \u0434\u043B\u044F \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0430 \u043D\u0430 Amazon \u0438 \u0440\u043E\u0441\u0442\u0430 \u043F\u043E\u0437\u0438\u0446\u0438\u0439 BSR; \u0441\u043E\u0431\u0438\u0440\u0430\u0439\u0442\u0435 e-mail \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0435\u0439 \u0447\u0435\u0440\u0435\u0437 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0439\u043D\u044B\u0435 \u043A\u0430\u0440\u0442\u044B \u0438 \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u0439\u0442\u0435 first-party CRM.",
        painPoints: [
          { title: "\u0414\u0430\u043D\u043D\u044B\u0435 \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0435\u0439 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u0437\u0430\u043A\u0440\u044B\u0442\u044B", desc: "Amazon \u043D\u0435 \u0434\u0430\u0451\u0442 \u0440\u0435\u0430\u043B\u044C\u043D\u044B\u0435 e-mail \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0437\u0430\u043F\u0443\u0441\u043A \u043D\u043E\u0432\u0438\u043D\u043E\u043A \u043E\u043F\u0438\u0440\u0430\u0435\u0442\u0441\u044F \u043D\u0430 \u0434\u043E\u0440\u043E\u0433\u0443\u044E \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u044E\u044E \u0440\u0435\u043A\u043B\u0430\u043C\u0443." },
          { title: "\u0412\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u044F\u044F PPC-\u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0446\u0438\u044F \u0440\u0430\u0441\u0442\u0451\u0442", desc: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043A\u043B\u0438\u043A\u0430 \u0432 PPC \u0440\u0430\u0441\u0442\u0451\u0442 \u0435\u0436\u0435\u0433\u043E\u0434\u043D\u043E, \u0441\u044A\u0435\u0434\u0430\u044F \u0442\u043E\u043D\u043A\u0443\u044E \u043C\u0430\u0440\u0436\u0443, \u0430 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u0432\u043D\u0435\u0448\u043D\u0435\u0433\u043E \u0442\u0440\u0430\u0444\u0438\u043A\u0430 \u043F\u043E\u0447\u0442\u0438 \u043D\u0435\u0442." },
          { title: "\u041F\u0440\u044F\u043C\u044B\u0435 \u0432\u043D\u0435\u0448\u043D\u0438\u0435 \u0441\u0441\u044B\u043B\u043A\u0438 \u0441\u043D\u0438\u0436\u0430\u044E\u0442 \u043A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u044E", desc: "\u0422\u0440\u0430\u0444\u0438\u043A \u0441 \u043D\u0438\u0437\u043A\u0438\u043C \u043D\u0430\u043C\u0435\u0440\u0435\u043D\u0438\u0435\u043C \u043F\u0440\u044F\u043C\u043E \u043D\u0430 \u043B\u0438\u0441\u0442\u0438\u043D\u0433 \u0441\u043D\u0438\u0436\u0430\u0435\u0442 \u043A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u044E \u0438 \u043F\u043E\u043D\u0438\u0436\u0430\u0435\u0442\u0441\u044F \u0430\u043B\u0433\u043E\u0440\u0438\u0442\u043C\u043E\u043C \u2014 \u043D\u0443\u0436\u0435\u043D \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u043B\u0435\u043D\u0434\u0438\u043D\u0433 \u0434\u043B\u044F \u0444\u0438\u043B\u044C\u0442\u0440\u0430\u0446\u0438\u0438." }
        ],
        features: [
          { icon: "ph:amazon-logo-bold", title: "\u0423\u043C\u043D\u044B\u0439 \u0440\u0435\u0434\u0438\u0440\u0435\u043A\u0442 \u0441 \u0430\u0442\u0440\u0438\u0431\u0443\u0446\u0438\u0435\u0439 Buy on Amazon", desc: "\u041B\u0435\u043D\u0434\u0438\u043D\u0433 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u044D\u043A\u0441\u043A\u043B\u044E\u0437\u0438\u0432\u043D\u044B\u0435 \u043F\u0440\u043E\u043C\u043E\u043A\u043E\u0434\u044B Amazon; \u043E\u0434\u0438\u043D \u043A\u043B\u0438\u043A \u0432\u0435\u0434\u0451\u0442 \u043D\u0430 \u043B\u0438\u0441\u0442\u0438\u043D\u0433 \u043D\u0443\u0436\u043D\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u044B, \u0441\u0442\u0438\u043C\u0443\u043B\u0438\u0440\u0443\u044F \u0437\u0430\u043A\u0430\u0437\u044B." },
          { icon: "ph:envelope-simple-open-bold", title: "\u0413\u0430\u0440\u0430\u043D\u0442\u0438\u044F \u0438 \u0441\u0431\u043E\u0440 e-mail \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0438 \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0435\u0439", desc: "\u0413\u0430\u0440\u0430\u043D\u0442\u0438\u0439\u043D\u0430\u044F \u043A\u0430\u0440\u0442\u0430 \u0432 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0435 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442 \u043D\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044E \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u043D\u043E\u0439 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0438 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435, \u043B\u0435\u0433\u0430\u043B\u044C\u043D\u043E \u0441\u043E\u0431\u0438\u0440\u0430\u044F \u0441\u043F\u0438\u0441\u043E\u043A \u0440\u0435\u0430\u043B\u044C\u043D\u044B\u0445 \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0435\u0439." },
          { icon: "ph:chart-bar-bold", title: "\u0410\u0442\u0440\u0438\u0431\u0443\u0446\u0438\u044F Amazon (Amazon Attribution)", desc: "\u041F\u043E\u043B\u043D\u043E\u0435 \u043E\u0442\u0441\u043B\u0435\u0436\u0438\u0432\u0430\u043D\u0438\u0435 \u043E\u0442\u043A\u0430\u0437\u043E\u0432 \u0438 \u043A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u0439 \u043F\u043E \u043A\u0430\u043D\u0430\u043B\u0430\u043C \u0438 \u0434\u043E 10% \u0431\u043E\u043D\u0443\u0441\u0430 \u0437\u0430 \u0431\u0440\u0435\u043D\u0434-\u0440\u0435\u0444\u0435\u0440\u0430\u043B." },
          { icon: "ph:sparkle-bold", title: "\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043F\u0440\u043E\u043C\u043E \u0434\u043B\u044F \u0437\u0430\u043F\u0443\u0441\u043A\u0430 \u043D\u043E\u0432\u0438\u043D\u043E\u043A", desc: "\u041E\u0434\u0438\u043D \u043A\u043E\u0434 \u043D\u0430 \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430 \u043F\u0440\u0435\u0434\u043E\u0442\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0443\u0442\u0435\u0447\u043A\u0443 \u043A\u0443\u043F\u043E\u043D\u043E\u0432, \u043E\u043F\u0443\u0441\u0442\u043E\u0448\u0430\u044E\u0449\u0438\u0445 \u0441\u043A\u043B\u0430\u0434 \u0432\u043E \u0444\u043B\u0435\u0448-\u0440\u0430\u0441\u043F\u0440\u043E\u0434\u0430\u0436\u0430\u0445, \u0438 \u043F\u043E\u0434\u043D\u0438\u043C\u0430\u0435\u0442 \u0440\u0435\u0439\u0442\u0438\u043D\u0433 \u043F\u0440\u043E\u0434\u0430\u0436." }
        ],
        metricValue: "3,4x",
        metricLabel: "\u0420\u043E\u0441\u0442 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0438 \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0435\u0439",
        secondaryMetricValue: "10%",
        secondaryMetricLabel: "\u0414\u043E 10% \u0431\u043E\u043D\u0443\u0441\u0430 Amazon \u0437\u0430 \u0431\u0440\u0435\u043D\u0434-\u0440\u0435\u0444\u0435\u0440\u0430\u043B",
        previewType: "amazon-funnel",
        detailRoute: "/page/amazon-store",
        isFeatured: true,
        status: 1,
        sortOrder: 40,
        tags: ["\u0422\u0440\u0430\u0444\u0438\u043A Amazon", "Buy on Amazon", "\u0421\u0431\u043E\u0440 e-mail \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0438", "\u0413\u0430\u0440\u0430\u043D\u0442\u0438\u0439\u043D\u0430\u044F \u043A\u0430\u0440\u0442\u0430", "\u0411\u043E\u043D\u0443\u0441 \u0437\u0430 \u0430\u0442\u0440\u0438\u0431\u0443\u0446\u0438\u044E"]
      },
      {
        id: "custom",
        slug: "custom",
        title: "\u041A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u0435 \u043A\u0430\u0441\u0442\u043E\u043C\u043D\u044B\u0435 \u0431\u0438\u0437\u043D\u0435\u0441-\u0441\u0438\u0441\u0442\u0435\u043C\u044B",
        subtitle: "\u041A\u043E\u0433\u0434\u0430 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 SaaS \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u043D\u0443\u0436\u043D\u044B\u0439 \u043F\u0440\u043E\u0446\u0435\u0441\u0441 \u2014 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043F\u043E\u0434 \u0432\u0430\u0448\u0443 \u043C\u043E\u0434\u0435\u043B\u044C \u0438 \u0433\u043B\u0443\u0431\u043E\u043A\u0430\u044F \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044F",
        badge: "\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u043D\u0430\u0434 \u0438\u0441\u0445\u043E\u0434\u043D\u044B\u043C \u043A\u043E\u0434\u043E\u043C",
        badgeColor: "cyan",
        category: "custom",
        categoryLabel: "\u041F\u0440\u0438\u0432\u0430\u0442\u043D\u043E\u0435 \u0440\u0430\u0437\u0432\u0451\u0440\u0442\u044B\u0432\u0430\u043D\u0438\u0435 \u0438 \u043A\u0440\u0443\u043F\u043D\u044B\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B",
        targetAudience: "\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0441 \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u043C\u0438 \u043C\u043E\u0434\u0435\u043B\u044F\u043C\u0438 \u0438 \u0433\u0440\u0443\u043F\u043F\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u043C \u043D\u0443\u0436\u043D\u0430 \u0433\u043B\u0443\u0431\u043E\u043A\u0430\u044F \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044F \u0441 ERP/WMS/MES",
        summary: "\u041D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 \u0432\u044B\u0441\u043E\u043A\u043E\u043D\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043D\u043E\u0433\u043E Go-\u043C\u0438\u043A\u0440\u043E\u044F\u0434\u0440\u0430, \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u0430\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u043E\u0439 \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u044B Nuxt 4 \u0438 \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u0445 API: \u0433\u0438\u0431\u043A\u0430\u044F \u043A\u0430\u0441\u0442\u043E\u043C\u043D\u0430\u044F \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0438 \u043F\u043E\u043B\u043D\u043E\u0435 \u043F\u0440\u0438\u0432\u0430\u0442\u043D\u043E\u0435 \u0440\u0430\u0437\u0432\u0451\u0440\u0442\u044B\u0432\u0430\u043D\u0438\u0435 \u0432 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u0430\u0445 \u0434\u043B\u044F \u0437\u0430\u0449\u0438\u0442\u044B \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0439 \u0442\u0430\u0439\u043D\u044B \u0438 \u0434\u0430\u043D\u043D\u044B\u0445.",
        painPoints: [
          { title: "\u0414\u043E\u0440\u043E\u0433\u043E\u0439 \u0437\u0430\u0440\u0443\u0431\u0435\u0436\u043D\u044B\u0439 \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u0439 SaaS", desc: "\u0420\u0435\u0448\u0435\u043D\u0438\u044F \u0432\u0440\u043E\u0434\u0435 Shopify Plus \u0431\u0435\u0440\u0443\u0442 \u0434\u0435\u0441\u044F\u0442\u043A\u0438 \u0442\u044B\u0441\u044F\u0447 \u0434\u043E\u043B\u043B\u0430\u0440\u043E\u0432 \u0432 \u0433\u043E\u0434 \u0438 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u044B \u043F\u0435\u0441\u043E\u0447\u043D\u0438\u0446\u0435\u0439 \u0441 \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u0441\u0432\u043E\u0431\u043E\u0434\u043E\u0439." },
          { title: "\u0421\u043B\u043E\u0436\u043D\u043E \u0438\u043D\u0442\u0435\u0433\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u0435 ERP/WMS", desc: "\u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043C\u044B Kingdee, Yonyou, Jushuitan \u0438 Wanliniu \u043D\u0435 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0430\u044E\u0442\u0441\u044F \u043A \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0443, \u0430 \u0440\u0443\u0447\u043D\u0430\u044F \u0441\u0432\u0435\u0440\u043A\u0430 \u0447\u0430\u0441\u0442\u043E \u043E\u0448\u0438\u0431\u0430\u0435\u0442\u0441\u044F." },
          { title: "\u041E\u043F\u0430\u0441\u0435\u043D\u0438\u044F \u0437\u0430 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0445 \u0432 \u043F\u0443\u0431\u043B\u0438\u0447\u043D\u043E\u043C \u043E\u0431\u043B\u0430\u043A\u0435", desc: "\u0425\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u0438 \u0446\u0435\u043F\u043E\u0447\u043A\u0438 \u043F\u043E\u0441\u0442\u0430\u0432\u043E\u043A \u0432 \u0437\u0430\u0440\u0443\u0431\u0435\u0436\u043D\u044B\u0445 \u043F\u0443\u0431\u043B\u0438\u0447\u043D\u044B\u0445 \u043E\u0431\u043B\u0430\u043A\u0430\u0445 \u043D\u0435\u0441\u0451\u0442 \u0440\u0438\u0441\u043A\u0438 \u043A\u043E\u043C\u043F\u043B\u0430\u0435\u043D\u0441\u0430 \u0438 \u0443\u0442\u0435\u0447\u0435\u043A." }
        ],
        features: [
          { icon: "ph:code-bold", title: "\u0412\u044B\u0441\u043E\u043A\u043E\u043D\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043D\u044B\u0439 \u0434\u0432\u0438\u0436\u043E\u043A Go 1.22 \u043D\u0430 \u0433\u043E\u0440\u0443\u0442\u0438\u043D\u0430\u0445", desc: "\u041F\u0440\u043E\u043F\u0443\u0441\u043A\u043D\u0430\u044F \u0441\u043F\u043E\u0441\u043E\u0431\u043D\u043E\u0441\u0442\u044C \u0441\u0432\u044B\u0448\u0435 12 800 QPS \u0441 \u043E\u0434\u043D\u043E\u0433\u043E \u0443\u0437\u043B\u0430 \u0438 \u043C\u0438\u043B\u043B\u0438\u043E\u043D\u044B \u043F\u0438\u043A\u043E\u0432\u044B\u0445 \u0437\u0430\u043F\u0440\u043E\u0441\u043E\u0432 \u0432 \u0427\u0451\u0440\u043D\u0443\u044E \u043F\u044F\u0442\u043D\u0438\u0446\u0443 \u043F\u0440\u0438 \u043F\u0430\u043C\u044F\u0442\u0438 \u0432\u0441\u0435\u0433\u043E 64 \u041C\u0411." },
          { icon: "ph:plugs-connected-bold", title: "\u0414\u0432\u0443\u0441\u0442\u043E\u0440\u043E\u043D\u043D\u044F\u044F \u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0430\u0446\u0438\u044F OpenAPI & Webhooks", desc: "\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0435 RESTful API \u0438 \u0441\u043E\u0431\u044B\u0442\u0438\u0439\u043D\u044B\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0430\u044E\u0442 \u0432\u0430\u0448\u0438 ERP, WMS \u0438\u043B\u0438 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u044E\u044E \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0443 \u0432 \u043E\u0434\u0438\u043D \u043A\u043B\u0438\u043A." },
          { icon: "ph:shield-check-bold", title: "100% \u043F\u0440\u0438\u0432\u0430\u0442\u043D\u043E\u0441\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0445", desc: "\u0420\u0430\u0437\u0432\u0451\u0440\u0442\u044B\u0432\u0430\u043D\u0438\u0435 Docker/Podman \u0432 \u043E\u0434\u0438\u043D \u043A\u043B\u0438\u043A \u043D\u0430 \u0432\u0430\u0448\u0435\u043C Alibaba Cloud, AWS \u0438\u043B\u0438 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u043C IDC." },
          { icon: "ph:git-branch-bold", title: "\u0418\u043D\u0436\u0435\u043D\u0435\u0440\u043D\u044B\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u044B \u0438 \u0433\u0438\u0431\u043A\u0430\u044F \u043F\u043E\u0441\u0442\u0430\u0432\u043A\u0430", desc: "\u0421\u0442\u0440\u043E\u0433\u0438\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u044B \u043A\u043E\u0434\u0430 \u0438 \u0441\u043B\u043E\u0438\u0441\u0442\u0430\u044F \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0430 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0442 \u0432\u0435\u0441\u0442\u0438 \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u0443\u044E \u0434\u043E\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u0438\u043B\u0438 \u0434\u043E\u043B\u0433\u043E\u0441\u0440\u043E\u0447\u043D\u044B\u0439 \u0442\u0435\u0445\u0445\u043E\u0441\u0442\u0438\u043D\u0433." }
        ],
        metricValue: "12,800+",
        metricLabel: "\u041F\u0440\u043E\u043F\u0443\u0441\u043A\u043D\u0430\u044F \u0441\u043F\u043E\u0441\u043E\u0431\u043D\u043E\u0441\u0442\u044C QPS \u043D\u0430 \u0443\u0437\u0435\u043B",
        secondaryMetricValue: "64MB",
        secondaryMetricLabel: "\u0421\u0432\u0435\u0440\u0445\u043D\u0438\u0437\u043A\u0438\u0439 \u0440\u0430\u0441\u0445\u043E\u0434 \u043F\u0430\u043C\u044F\u0442\u0438 \u043C\u0438\u043A\u0440\u043E\u044F\u0434\u0440\u0430",
        previewType: "custom-code",
        detailRoute: "/page/custom",
        isFeatured: true,
        status: 1,
        sortOrder: 50,
        tags: ["Go-\u043C\u0438\u043A\u0440\u043E\u044F\u0434\u0440\u043E", "OpenAPI", "\u0418\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044F ERP/WMS", "\u041F\u0440\u0438\u0432\u0430\u0442\u043D\u043E\u0435 \u0440\u0430\u0437\u0432\u0451\u0440\u0442\u044B\u0432\u0430\u043D\u0438\u0435", "\u041A\u0430\u0441\u0442\u043E\u043C\u043D\u0430\u044F \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430"]
      },
      {
        id: "migration",
        slug: "migration",
        title: "\u0423\u043C\u043D\u044B\u0439 \u043F\u0435\u0440\u0435\u043D\u043E\u0441 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430 \u0432 \u043E\u0434\u0438\u043D \u043A\u043B\u0438\u043A \u0431\u0435\u0437 \u043F\u043E\u0442\u0435\u0440\u044C",
        subtitle: "\u041F\u0435\u0440\u0435\u043D\u043E\u0441\u0438\u0442\u0435 \u0442\u043E\u0432\u0430\u0440\u044B, \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438, \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u0438 \u0437\u0430\u043A\u0430\u0437\u044B \u0431\u0435\u0437 \u043A\u043E\u0434\u0430 \u0438 \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u0439\u0442\u0435 \u043C\u0443\u043B\u044C\u0442\u0438\u043A\u0430\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u0440\u043E\u0441\u0442 \u0431\u0435\u0437 \u043F\u0440\u043E\u0441\u0442\u043E\u044F",
        badge: "\u041F\u0435\u0440\u0435\u043D\u043E\u0441 \u0431\u0435\u0437 \u043F\u043E\u0442\u0435\u0440\u044C",
        badgeColor: "rose",
        category: "migration",
        categoryLabel: "\u041F\u0435\u0440\u0435\u043D\u043E\u0441 \u0441\u043E \u0441\u0442\u0430\u0440\u043E\u0433\u043E \u0441\u0430\u0439\u0442\u0430 \u0438 \u043C\u0438\u0433\u0440\u0430\u0446\u0438\u044F \u0434\u0430\u043D\u043D\u044B\u0445",
        targetAudience: "\u041F\u0440\u043E\u0434\u0430\u0432\u0446\u044B \u043D\u0430 Shopify, WooCommerce, Shoplazza, Shopline \u0438\u043B\u0438 Weidian",
        summary: "\u041F\u043E\u043F\u0440\u043E\u0449\u0430\u0439\u0442\u0435\u0441\u044C \u0441 \u0432\u044B\u0441\u043E\u043A\u0438\u043C\u0438 \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u044F\u043C\u0438 \u0438 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u043D\u044B\u043C \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u043E\u043C. \u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u043E\u043C\u043E\u0449\u043D\u0438\u043A \u043C\u0438\u0433\u0440\u0430\u0446\u0438\u0438 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0440\u0430\u0437\u0431\u0438\u0440\u0430\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0435 \u0438\u0441\u0445\u043E\u0434\u043D\u043E\u0433\u043E \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430, \u0441\u043E\u043F\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u043F\u043E\u043B\u044F \u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u0442 \u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u0432 \u0440\u0435\u043A\u043B\u0430\u043C\u0435 \u0438 \u043E\u0440\u0433\u0430\u043D\u0438\u043A\u0435 Google \u2014 \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0432 \u0442\u043E\u0442 \u0436\u0435 \u0434\u0435\u043D\u044C.",
        painPoints: [
          { title: "\u041E\u0433\u0440\u043E\u043C\u043D\u044B\u0435 \u0438\u0441\u0442\u043E\u0440\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0442\u0440\u0443\u0434\u043D\u043E \u0432\u0432\u043E\u0434\u0438\u0442\u044C \u0437\u0430\u043D\u043E\u0432\u043E", desc: "\u0422\u044B\u0441\u044F\u0447\u0438 \u0442\u043E\u0432\u0430\u0440\u043E\u0432, SKU \u0441 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u0430\u043C\u0438, \u0434\u0430\u043D\u043D\u044B\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u0438 \u0438\u0441\u0442\u043E\u0440\u0438\u044F \u0437\u0430\u043A\u0430\u0437\u043E\u0432 \u2014 \u0432\u0440\u0443\u0447\u043D\u0443\u044E \u044D\u0442\u043E \u0437\u0430\u0439\u043C\u0451\u0442 \u043C\u0435\u0441\u044F\u0446\u044B." },
          { title: "\u0421\u0442\u0440\u0430\u0445 \u043F\u043E\u0442\u0435\u0440\u044F\u0442\u044C \u0442\u0435\u043A\u0443\u0449\u0438\u0435 \u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u0432 SEO", desc: "\u0421\u043C\u0435\u043D\u0430 \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u0431\u0435\u0437 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0441\u0442\u0430\u0440\u044B\u0445 URL \u043C\u043E\u0436\u0435\u0442 \u043E\u0431\u0440\u0443\u0448\u0438\u0442\u044C \u043D\u0430\u043A\u043E\u043F\u043B\u0435\u043D\u043D\u044B\u0435 \u0437\u0430 \u0433\u043E\u0434\u044B \u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u0432 Google." },
          { title: "\u041F\u0440\u043E\u0441\u0442\u043E\u0439 \u043E\u0442\u0441\u0435\u043A\u0430\u0435\u0442 \u0437\u0430\u043A\u0430\u0437\u044B", desc: "\u0422\u0440\u0430\u0434\u0438\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u043C\u0438\u0433\u0440\u0430\u0446\u0438\u044F \u0447\u0430\u0441\u0442\u043E \u043E\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u0442 \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u043D\u0430 \u0434\u043D\u0438, \u0447\u0442\u043E \u0441\u0438\u043B\u044C\u043D\u043E \u0432\u0440\u0435\u0434\u0438\u0442 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0439 \u0440\u0435\u043A\u043B\u0430\u043C\u0435 \u0438 \u0437\u0430\u043A\u0430\u0437\u0430\u043C." }
        ],
        features: [
          { icon: "ph:arrows-left-right-bold", title: "\u041A\u0440\u043E\u0441\u0441-\u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0435\u043D\u043D\u044B\u0439 \u0441\u0431\u043E\u0440 \u0434\u0430\u043D\u043D\u044B\u0445 \u0432 \u043E\u0434\u0438\u043D \u043A\u043B\u0438\u043A \u0431\u0435\u0437 \u043A\u043E\u0434\u0430", desc: "\u041F\u043E\u0441\u043B\u0435 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0438\u0437\u0432\u043B\u0435\u043A\u0430\u044E\u0442\u0441\u044F \u0433\u0430\u043B\u0435\u0440\u0435\u0438 \u0442\u043E\u0432\u0430\u0440\u043E\u0432, SKU \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432, \u043E\u0441\u0442\u0430\u0442\u043A\u0438, \u0441\u043F\u0438\u0441\u043A\u0438 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u0438 \u0438\u0441\u0442\u043E\u0440\u0438\u044F \u0437\u0430\u043A\u0430\u0437\u043E\u0432." },
          { icon: "ph:path-bold", title: "\u0420\u0435\u0434\u0438\u0440\u0435\u043A\u0442\u044B 301 \u0431\u0435\u0437 \u043F\u043E\u0442\u0435\u0440\u044C \u0438 \u043D\u0430\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0435 SEO", desc: "\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0441\u043E\u0437\u0434\u0430\u044E\u0442\u0441\u044F \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u044B\u0435 \u0440\u0435\u0434\u0438\u0440\u0435\u043A\u0442\u044B 301 \u0434\u043B\u044F \u0441\u0442\u0430\u0440\u044B\u0445 URL \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u0438 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0439, \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u044F \u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u0432 Google." },
          { icon: "ph:clock-countdown-bold", title: "\u041E\u0431\u043B\u0430\u0447\u043D\u0430\u044F \u043C\u0438\u0433\u0440\u0430\u0446\u0438\u044F \u0431\u0435\u0437 \u043F\u0440\u043E\u0441\u0442\u043E\u044F", desc: "\u0414\u0430\u043D\u043D\u044B\u0435 \u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0438\u0440\u0443\u044E\u0442\u0441\u044F \u0430\u0441\u0438\u043D\u0445\u0440\u043E\u043D\u043D\u043E \u0432 \u0444\u043E\u043D\u0435, \u0441\u0442\u0430\u0440\u044B\u0439 \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0430\u0435\u0442 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C; \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u043E\u0434\u043D\u0438\u043C \u043A\u043B\u0438\u043A\u043E\u043C \u043F\u043E\u0441\u043B\u0435 \u0441\u0432\u0435\u0440\u043A\u0438." },
          { icon: "ph:headset-bold", title: "\u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0430\u044F \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0430", desc: "\u0421\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u044B \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0430\u044E\u0442 DNS, \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u043F\u043B\u0430\u0442\u0435\u0436\u0435\u0439 \u0438 \u0441\u0432\u0435\u0440\u043A\u0443 \u0434\u0430\u043D\u043D\u044B\u0445, \u0447\u0442\u043E\u0431\u044B \u0438\u0441\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0441\u0431\u043E\u0438." }
        ],
        metricValue: "\u0411\u0435\u0437 \u043F\u0440\u043E\u0441\u0442\u043E\u044F",
        metricLabel: "\u0411\u0435\u0441\u0448\u043E\u0432\u043D\u044B\u0439 \u043F\u0435\u0440\u0435\u0445\u043E\u0434 \u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u0431\u0435\u0437 \u043F\u043E\u0442\u0435\u0440\u044C",
        secondaryMetricValue: "100% \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u0442\u0441\u044F",
        secondaryMetricLabel: "\u0422\u043E\u0432\u0430\u0440\u044B/\u043A\u043B\u0438\u0435\u043D\u0442\u044B/\u0438\u0441\u0442\u043E\u0440\u0438\u0447\u0435\u0441\u043A\u043E\u0435 SEO",
        previewType: "migration",
        detailRoute: "/page/migration",
        isFeatured: true,
        status: 1,
        sortOrder: 60,
        tags: ["\u041F\u0435\u0440\u0435\u043D\u043E\u0441 Shopify", "\u0418\u043C\u043F\u043E\u0440\u0442 WooCommerce", "\u0411\u0435\u0437 \u043F\u0440\u043E\u0441\u0442\u043E\u044F", "\u041D\u0430\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0435 301", "\u0411\u0435\u0437 \u043F\u043E\u0442\u0435\u0440\u044C \u0434\u0430\u043D\u043D\u044B\u0445"]
      }
    ],
    comparisonRows: [
      {
        scenario: "B2B-\u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433 \u0432\u043D\u0435\u0448\u043D\u0435\u0439 \u0442\u043E\u0440\u0433\u043E\u0432\u043B\u0438",
        model: "\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E \u0438 \u0442\u043E\u0440\u0433\u043E\u0432\u043B\u044F / \u042D\u043A\u0441\u043F\u043E\u0440\u0442",
        targetBuyer: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0437\u0430\u043A\u0443\u043F\u0449\u0438\u043A\u0438 \u0438 \u0438\u043D\u0436\u0435\u043D\u0435\u0440\u044B",
        paymentMode: "\u0417\u0430\u044F\u0432\u043A\u0438 \u0441\u043E \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0435\u0439 / \u041E\u043D\u043B\u0430\u0439\u043D-\u043E\u043F\u043B\u0430\u0442\u0430 \u043E\u0431\u0440\u0430\u0437\u0446\u043E\u0432 / \u041E\u0444\u043B\u0430\u0439\u043D T/T",
        coreCapability: "Google SEO / 15 \u044F\u0437\u044B\u043A\u043E\u0432 / \u0420\u0430\u0431\u043E\u0447\u0435\u0435 \u043C\u0435\u0441\u0442\u043E \u0437\u0430\u044F\u0432\u043E\u043A",
        recommendedPlan: "Showcase / Starter"
      },
      {
        scenario: "\u041A\u0440\u043E\u0441\u0441-\u0431\u043E\u0440\u0434\u0435\u0440 DTC-\u0440\u0438\u0442\u0435\u0439\u043B",
        model: "\u0421\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0431\u0440\u0435\u043D\u0434 / \u041D\u0438\u0448\u0435\u0432\u044B\u0439 \u043A\u0440\u043E\u0441\u0441-\u0431\u043E\u0440\u0434\u0435\u0440",
        targetBuyer: "\u041A\u043E\u043D\u0435\u0447\u043D\u044B\u0435 \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0438 \u0415\u0432\u0440\u043E\u043F\u044B, \u0421\u0428\u0410, \u0410\u0437\u0438\u0438",
        paymentMode: "Stripe / PayPal / \u041A\u0430\u0440\u0442\u044B / \u041B\u043E\u043A\u0430\u043B\u044C\u043D\u044B\u0435 \u043A\u043E\u0448\u0435\u043B\u044C\u043A\u0438",
        coreCapability: "0% \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u0438 / \u041E\u0442\u043A\u043B\u0438\u043A 14 \u043C\u0441 / \u0421\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u0430\u044F \u0442\u0435\u043C\u0430",
        recommendedPlan: "Professional"
      },
      {
        scenario: "\u041E\u043F\u0442 \u0438 \u0434\u0438\u0441\u0442\u0440\u0438\u0431\u0443\u0446\u0438\u044F",
        model: "\u041F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u044B\u0439 \u043E\u043F\u0442 / \u041F\u043E\u0441\u0442\u0430\u0432\u043A\u0438 \u043A\u0430\u043D\u0430\u043B\u043E\u0432",
        targetBuyer: "\u0410\u0433\u0435\u043D\u0442\u044B / \u0414\u0438\u0441\u0442\u0440\u0438\u0431\u044C\u044E\u0442\u043E\u0440\u044B / \u0417\u0430\u043A\u0443\u043F\u043E\u0447\u043D\u044B\u0435 \u043E\u0444\u0438\u0441\u044B",
        paymentMode: "\u041C\u0430\u0441\u0441\u043E\u0432\u043E\u0435 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435 \u043F\u043E SKU / \u041F\u0430\u0440\u0430\u043B\u043B\u0435\u043B\u044C\u043D\u044B\u0435 OEM-\u0437\u0430\u044F\u0432\u043A\u0438",
        coreCapability: "\u041C\u0430\u0442\u0440\u0438\u0446\u0430 \u0437\u0430\u043A\u0430\u0437\u043E\u0432 / \u041A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u043E\u0441\u0442\u0430\u0442\u043A\u043E\u0432 / \u041C\u0443\u043B\u044C\u0442\u0438\u0432\u0430\u043B\u044E\u0442\u043D\u043E\u0441\u0442\u044C",
        recommendedPlan: "Professional / Premium"
      },
      {
        scenario: "\u0412\u043D\u0435\u0448\u043D\u0438\u0439 \u0442\u0440\u0430\u0444\u0438\u043A \u0434\u043B\u044F \u043F\u0440\u043E\u0434\u0430\u0432\u0446\u043E\u0432 Amazon",
        model: "\u041F\u0440\u0435\u043C\u0438\u0443\u043C-\u043F\u0440\u043E\u0434\u0430\u0432\u0446\u044B / \u041C\u0443\u043B\u044C\u0442\u0438\u043A\u0430\u043D\u0430\u043B",
        targetBuyer: "\u041F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u044B\u0435 \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0438 Amazon \u0438 \u0441\u043E\u0446\u0441\u0435\u0442\u0435\u0439",
        paymentMode: "\u041F\u0435\u0440\u0435\u0445\u043E\u0434 Buy on Amazon / \u0412\u044B\u043F\u043B\u0430\u0442\u044B Amazon",
        coreCapability: "\u0420\u0430\u0437\u0434\u0430\u0447\u0430 \u043A\u0443\u043F\u043E\u043D\u043E\u0432 / \u0413\u0430\u0440\u0430\u043D\u0442\u0438\u0439\u043D\u044B\u0435 \u043A\u0430\u0440\u0442\u044B / \u0421\u0431\u043E\u0440 e-mail",
        recommendedPlan: "Starter / Professional"
      },
      {
        scenario: "\u041A\u0430\u0441\u0442\u043E\u043C\u043D\u044B\u0435 \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u043F\u043E\u0434 \u0437\u0430\u0434\u0430\u0447\u0443",
        model: "\u0423\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u0430\u044F \u043C\u043E\u0434\u0435\u043B\u044C / \u0413\u0440\u0443\u043F\u043F\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439",
        targetBuyer: "\u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0438 \u043A\u0430\u0441\u0442\u043E\u043C\u0430 / \u041F\u0430\u0440\u0442\u043D\u0451\u0440\u044B \u0446\u0435\u043F\u043E\u0447\u043A\u0438 \u043F\u043E\u0441\u0442\u0430\u0432\u043E\u043A",
        paymentMode: "\u0413\u043B\u0443\u0431\u043E\u043A\u0430\u044F \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044F \u0441 \u043A\u0430\u0441\u0441\u043E\u0439 / \u0420\u0430\u0441\u0447\u0451\u0442\u044B \u044E\u0440\u043B\u0438\u0446",
        coreCapability: "Go-\u043C\u0438\u043A\u0440\u043E\u044F\u0434\u0440\u043E / OpenAPI / \u041F\u0440\u0438\u0432\u0430\u0442\u043D\u044B\u0435 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u044B",
        recommendedPlan: "Enterprise"
      },
      {
        scenario: "\u0423\u043C\u043D\u0430\u044F \u043C\u0438\u0433\u0440\u0430\u0446\u0438\u044F \u0441\u043E \u0441\u0442\u0430\u0440\u043E\u0433\u043E \u0441\u0430\u0439\u0442\u0430",
        model: "\u0420\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0445 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u043E\u0432",
        targetBuyer: "\u041F\u043B\u0430\u0432\u043D\u044B\u0439 \u043F\u0435\u0440\u0435\u0445\u043E\u0434 \u0441\u0442\u0430\u0440\u044B\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432",
        paymentMode: "\u0411\u0435\u0441\u0448\u043E\u0432\u043D\u0430\u044F \u0441\u043C\u0435\u043D\u0430 \u043F\u043B\u0430\u0442\u0451\u0436\u043D\u044B\u0445 \u043A\u0430\u043D\u0430\u043B\u043E\u0432",
        coreCapability: "\u0421\u0431\u043E\u0440 \u0434\u0430\u043D\u043D\u044B\u0445 \u0431\u0435\u0437 \u043A\u043E\u0434\u0430 / \u041D\u0430\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0435 301 SEO / \u0411\u0435\u0437 \u043F\u0440\u043E\u0441\u0442\u043E\u044F",
        recommendedPlan: "\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u043E \u0432\u043E \u0432\u0441\u0435\u0445 \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u0438\u0445 \u0442\u0430\u0440\u0438\u0444\u0430\u0445"
      }
    ]
  }
};
const solutionsPageLocales = {
  zh: {
    hero: {
      badge: "\u5168\u573A\u666F\u5168\u7403\u72EC\u7ACB\u5546\u4E1A\u89E3\u51B3\u65B9\u6848",
      titleMain: "\u9762\u5411\u5168\u7403\u5546\u4E1A\u6A21\u5F0F\u7684",
      titleHighlight: "\u5168\u573A\u666F\u51FA\u6D77\u72EC\u7ACB\u7AD9\u89E3\u51B3\u65B9\u6848",
      description: "\u4ECE B2B \u8BE2\u76D8\u83B7\u5BA2\u3001DTC \u54C1\u724C\u81EA\u8425\u3001\u5927\u5B97\u6279\u53D1\u4E0E\u5206\u9500\uFF0C\u5230\u4E9A\u9A6C\u900A\u5356\u5BB6\u5F15\u6D41\u3001\u4F01\u4E1A\u7EA7\u4E1A\u52A1\u5B9A\u5236\u4E0E\u96F6\u505C\u673A\u65E0\u635F\u642C\u5BB6\uFF0C\u4E3A\u4E0D\u540C\u53D1\u5C55\u9636\u6BB5\u63D0\u4F9B\u9AD8\u5E76\u53D1\u30010% \u62BD\u6210\u7684\u6570\u5B57\u5316\u51FA\u6D77\u9635\u5730\u3002",
      primaryCta: "\u514D\u8D39\u5F00\u59CB\u642D\u5EFA",
      secondaryCta: "\u9884\u7EA6\u65B9\u6848\u4E13\u5BB6\u6F14\u793A",
      proofPills: ["0% \u5E73\u53F0\u4EA4\u6613\u62BD\u6210", "15 \u79CD\u56FD\u9645\u6BCD\u8BED\u5168\u91CF\u652F\u6301", "14ms \u6781\u901F TTFB \u54CD\u5E94", "100% \u6570\u636E\u8D44\u4EA7\u79C1\u6709\u5316", "Google \u7ED3\u6784\u5316 SEO \u67B6\u6784"],
      metrics: [
        { value: "+280%", title: "\u6D77\u5916\u771F\u5B9E\u8BE2\u76D8\u8F6C\u5316\u63D0\u5347", desc: "\u5DE5\u8D38\u4E00\u4F53\u4E0E\u5916\u8D38 B2B \u5236\u9020" },
        { value: "0%", title: "\u5E73\u53F0\u4EA4\u6613\u4F63\u91D1\u622A\u7559\u62BD\u6210", desc: "\u8D44\u91D1 100% \u76F4\u8FBE\u6536\u5355\u8D26\u6237" },
        { value: "12,800+", title: "QPS \u5355\u673A\u9AD8\u5E76\u53D1\u534F\u7A0B\u5F15\u64CE", desc: "\u6781\u8F7B 64MB \u5185\u5B58\u5BB9\u5668\u79C1\u6709\u5316" }
      ]
    },
    nav: { quickNav: "\u5FEB\u901F\u76F4\u8FBE:", help: "\u4E0D\u77E5\u5982\u4F55\u9009\u62E9\uFF1F\u54A8\u8BE2\u65B9\u6848\u4E13\u5BB6" },
    scenes: { global: "\u5168\u5C40\u89E3\u51B3\u65B9\u6848\u54A8\u8BE2", selection: "\u65B9\u6848\u9009\u578B\u534F\u52A9", bottom: "\u5E95\u90E8\u5168\u573A\u666F\u65B9\u6848\u9884\u7EA6" },
    card: { audiencePrefix: "\u9002\u7528\u5BF9\u8C61\uFF1A", viewDetail: "\u67E5\u770B\u65B9\u6848\u8BE6\u60C5", bookDemo: "\u9884\u7EA6\u6F14\u793A" },
    hud: {
      city: "\u6C49\u5821",
      withDrawings: "\u5E26\u56FE\u7EB8\u7269\u6599\u6E05\u5355",
      productInquiry: "\u5DE5\u4E1A\u9AD8\u538B\u7403\u9600 \xB7 \u8BA2\u8D2D 5,000 \u5957",
      seoScore: "Google SEO \u7ED3\u6784\u8BC4\u5206",
      perfectScore: "100 / 100 \u6EE1\u5206",
      langSupport: "\u8BED\u8A00\u4E0E\u65F6\u533A\u652F\u6301",
      langValue: "15 \u56FD\u56FD\u9645\u6BCD\u8BED",
      inquiryNote: "\u4E70\u5BB6\u5728\u8BE6\u60C5\u9875\u4E00\u952E\u63D0\u4EA4\u91C7\u8D2D\u610F\u5411\uFF0C\u56E2\u961F\u540E\u53F0\u90AE\u4EF6\u76F4\u63A5\u56DE\u590D",
      multiCurrency: "\u81EA\u9002\u5E94\u591A\u5E01\u79CD\u7ED3\u7B97",
      platformFeeLabel: "\u5E73\u53F0\u4EA4\u6613\u62BD\u6210",
      zeroFeeLabel: "0% \u62BD\u6210",
      ttfbLabel: "\u9996\u5B57\u8282 TTFB \u6781\u901F",
      expressPay: "Apple Pay / Credit Card \u6781\u901F\u652F\u4ED8",
      toteMatrix: "\u7ECF\u5178\u5E06\u5E03\u6258\u7279\u5305 \xB7 \u89C4\u683C\u77E9\u9635",
      bulkPurchase: "\u5927\u5B97\u6279\u91CF\u91C7\u8D2D",
      colorSize: "\u989C\u8272/\u5C3A\u7801",
      ivory: "\u8C61\u7259\u767D",
      deepBlue: "\u6DF1\u9083\u84DD",
      totalItems: "\u5408\u8BA1\u4EF6\u6570\uFF1A380 \u4EF6",
      tierReached: "\u5171 6 \u4E2A\u89C4\u683C \xB7 \u5B9E\u65F6\u5E93\u5B58\u5DF2\u6838\u9A8C",
      addAll: "\u6574\u8868\u4E00\u952E\u52A0\u8D2D",
      socialStep: "1. \u793E\u5A92 TikTok/Facebook \u79CD\u8349\u76F4\u8FBE",
      visitors: "10,000+ \u8BBF\u5BA2",
      landingStep: "2. \u8F7B\u94FA \u843D\u5730\u9875\u6D3E\u53D1\u4E13\u5C5E\u4F18\u60E0\u5238",
      couponRate: "\u9886\u5238\u7387 38.6%",
      listingStep: "3. Buy on Amazon \u5B98\u65B9 Listing \u8F6C\u5316",
      bsrTop: "BSR #1 \u51B2\u9876",
      crmStep: "4. \u5305\u88C5\u5185\u7F6E\u552E\u540E\u5EF6\u4FDD\u5361\uFF0C\u6C89\u6DC0\u7B2C\u4E00\u65B9\u4E70\u5BB6\u90AE\u7BB1 CRM",
      erpNote: "\u652F\u6301 OpenAPI & Webhook \u6DF1\u5EA6\u6253\u901A\u7528\u53CB/\u91D1\u8776/\u4E07\u91CC\u725B ERP",
      migrationStatus: "\u8DE8\u5E73\u53F0\u6570\u636E\u6293\u53D6\u4E0E\u8FC1\u79FB\u72B6\u6001",
      migrationDone: "100% \u5B8C\u6210",
      productsSkus: "\u5546\u54C1\u4E0E\u591ASKU",
      members: "\u5386\u53F2\u5BA2\u6237\u4F1A\u5458",
      zeroDowntime: "0 \u505C\u673A",
      smoothTransition: "\u5E73\u7A33\u65E0\u635F\u8FC7\u6E21",
      seoProtect: "301 \u6C38\u4E45\u91CD\u5B9A\u5411\u5B8C\u6574\u4FDD\u62A4\u5DF2\u6709 Google SEO \u6743\u91CD\u4E0E\u5916\u94FE"
    },
    matrix: {
      guide: "\u5FEB\u901F\u9009\u578B\u6307\u5357",
      title: "\u4E0D\u77E5\u9053\u5982\u4F55\u9009\u62E9\uFF1F30 \u79D2\u627E\u5230\u6700\u5951\u5408\u60A8\u7684\u5546\u4E1A\u65B9\u6848",
      desc: "\u6839\u636E\u60A8\u5F53\u524D\u7684\u5546\u4E1A\u6A21\u5F0F\u3001\u4E3B\u8981\u5BA2\u6237\u7FA4\u4F53\u4E0E\u7ED3\u7B97\u5F62\u6001\uFF0C\u5339\u914D\u6700\u7CBE\u51C6\u7684\u8F7B\u94FA\u51FA\u6D77\u7CFB\u7EDF\u3002",
      headers: ["\u4E1A\u52A1\u573A\u666F", "\u5546\u4E1A\u6A21\u5F0F", "\u76EE\u6807\u91C7\u8D2D/\u6D88\u8D39\u5BA2\u7FA4", "\u7ED3\u7B97\u4E0E\u4EA4\u4E92\u5F62\u6001", "\u6838\u5FC3\u7CFB\u7EDF\u80FD\u529B", "\u63A8\u8350\u5339\u914D\u65B9\u6848"]
    },
    bottom: {
      title: "\u7ACB\u5373\u5F00\u542F\u60A8\u7684\u5168\u573A\u666F\u5168\u7403\u5546\u4E1A\u72EC\u7ACB\u7AD9",
      desc: "\u65E0\u8BBA\u60A8\u662F\u5BFB\u6C42\u6D77\u5916\u7CBE\u51C6\u5DE5\u7A0B\u8BE2\u76D8\u7684\u5DE5\u8D38\u4F01\u4E1A\uFF0C\u8FD8\u662F\u6253\u9020\u5168\u7403\u54C1\u724C\u7684 DTC \u5356\u5BB6\uFF0C\u8F7B\u94FA \u90FD\u4E3A\u60A8\u63D0\u4F9B\u575A\u5B9E\u5F3A\u5927\u7684\u51FA\u6D77\u6570\u5B57\u5E95\u5EA7\u3002",
      primary: "\u7ACB\u5373\u514D\u8D39\u5F00\u5E97",
      secondary: "\u9884\u7EA6\u65B9\u6848\u4E13\u5BB6 1 \u5BF9 1 \u54A8\u8BE2"
    },
    consult: {
      title: "\u9884\u7EA6\u4E13\u5C5E\u51FA\u6D77\u89E3\u51B3\u65B9\u6848\u54A8\u8BE2",
      description: "\u65B9\u6848\u987E\u95EE\u5C06\u5728 15 \u5206\u949F\u5185\u4E0E\u60A8\u8054\u7CFB\uFF0C\u63D0\u4F9B\u9488\u5BF9\u6027\u5EFA\u7AD9\u89C4\u5212\u4E0E\u6F14\u793A\u3002",
      placeholder: "\u8BF7\u7B80\u8FF0\u60A8\u7684\u4E1A\u52A1\u9700\u6C42\uFF08\u5982\uFF1A{scene}\uFF09"
    },
    seo: {
      title: "\u5168\u7403\u5546\u4E1A\u51FA\u6D77\u5168\u573A\u666F\u72EC\u7ACB\u7AD9\u89E3\u51B3\u65B9\u6848 | \u8F7B\u94FA",
      description: "\u8F7B\u94FA \u4E3A\u5916\u8D38 B2B \u5236\u9020\u3001\u8DE8\u5883 DTC \u54C1\u724C\u3001\u5927\u5B97\u6279\u53D1\u5206\u9500\u3001\u4E9A\u9A6C\u900A\u5E73\u53F0\u5927\u5356\u63D0\u4F9B\u5168\u573A\u666F\u51FA\u6D77\u72EC\u7ACB\u7AD9\u89E3\u51B3\u65B9\u6848\u30020% \u5E73\u53F0\u62BD\u6210\u300115 \u8BED\u79CD\u56FD\u9645\u5316\u300114ms \u6781\u901F\u54CD\u5E94\u3002",
      keywords: "\u72EC\u7ACB\u7AD9\u89E3\u51B3\u65B9\u6848,B2B\u72EC\u7ACB\u7AD9,\u8DE8\u5883DTC\u5546\u57CE,\u6279\u53D1\u5206\u9500\u7CFB\u7EDF,\u4E9A\u9A6C\u900A\u5F15\u6D41,\u4F01\u4E1A\u5EFA\u7AD9\u5B9A\u5236",
      ogTitle: "\u5168\u7403\u5546\u4E1A\u51FA\u6D77\u5168\u573A\u666F\u72EC\u7ACB\u7AD9\u89E3\u51B3\u65B9\u6848 | \u8F7B\u94FA",
      ogDescription: "\u6DB5\u76D6 B2B \u5916\u8D38\u8BE2\u76D8\u3001DTC \u54C1\u724C\u96F6\u552E\u3001\u5927\u5B97\u6279\u53D1\u77E9\u9635\u3001\u4E9A\u9A6C\u900A\u79C1\u57DF\u6C89\u6DC0\u4E0E\u4F01\u4E1A\u7EA7\u6E90\u7801\u5B9A\u5236\u3002"
    }
  },
  "zh-HK": {
    hero: {
      badge: "\u5168\u5834\u666F\u5168\u7403\u7368\u7ACB\u5546\u696D\u89E3\u6C7A\u65B9\u6848",
      titleMain: "\u9762\u5411\u5168\u7403\u5546\u696D\u6A21\u5F0F\u7684",
      titleHighlight: "\u5168\u5834\u666F\u51FA\u6D77\u7368\u7ACB\u7AD9\u89E3\u6C7A\u65B9\u6848",
      description: "\u5F9E B2B \u8A62\u76E4\u7372\u5BA2\u3001DTC \u54C1\u724C\u81EA\u71DF\u3001\u5927\u5B97\u6279\u767C\u8207\u5206\u92B7\uFF0C\u5230\u4E9E\u99AC\u905C\u8CE3\u5BB6\u5F15\u6D41\u3001\u4F01\u696D\u7D1A\u696D\u52D9\u5B9A\u88FD\u8207\u96F6\u505C\u6A5F\u7121\u640D\u642C\u5BB6\uFF0C\u70BA\u4E0D\u540C\u767C\u5C55\u968E\u6BB5\u63D0\u4F9B\u9AD8\u4E26\u767C\u30010% \u62BD\u6210\u7684\u6578\u5B57\u5316\u51FA\u6D77\u9663\u5730\u3002",
      primaryCta: "\u514D\u8CBB\u958B\u59CB\u642D\u5EFA",
      secondaryCta: "\u9810\u7D04\u65B9\u6848\u5C08\u5BB6\u6F14\u793A",
      proofPills: ["0% \u5E73\u53F0\u4EA4\u6613\u62BD\u6210", "15 \u7A2E\u570B\u969B\u6BCD\u8A9E\u5168\u91CF\u652F\u6301", "14ms \u6975\u901F TTFB \u97FF\u61C9", "100% \u6578\u64DA\u8CC7\u7522\u79C1\u6709\u5316", "Google \u7D50\u69CB\u5316 SEO \u67B6\u69CB"],
      metrics: [
        { value: "+280%", title: "\u6D77\u5916\u771F\u5BE6\u8A62\u76E4\u8F49\u5316\u63D0\u5347", desc: "\u5DE5\u8CBF\u4E00\u9AD4\u8207\u5916\u8CBF B2B \u88FD\u9020" },
        { value: "0%", title: "\u5E73\u53F0\u4EA4\u6613\u4F63\u91D1\u622A\u7559\u62BD\u6210", desc: "\u8CC7\u91D1 100% \u76F4\u9054\u6536\u55AE\u8CEC\u6236" },
        { value: "12,800+", title: "QPS \u55AE\u6A5F\u9AD8\u4E26\u767C\u5354\u7A0B\u5F15\u64CE", desc: "\u6975\u8F15 64MB \u5167\u5B58\u5BB9\u5668\u79C1\u6709\u5316" }
      ]
    },
    nav: { quickNav: "\u5FEB\u901F\u76F4\u9054:", help: "\u4E0D\u77E5\u5982\u4F55\u9078\u64C7\uFF1F\u8AEE\u8A62\u65B9\u6848\u5C08\u5BB6" },
    scenes: { global: "\u5168\u5C40\u89E3\u6C7A\u65B9\u6848\u8AEE\u8A62", selection: "\u65B9\u6848\u9078\u578B\u5354\u52A9", bottom: "\u5E95\u90E8\u5168\u5834\u666F\u65B9\u6848\u9810\u7D04" },
    card: { audiencePrefix: "\u9069\u7528\u5C0D\u8C61\uFF1A", viewDetail: "\u67E5\u770B\u65B9\u6848\u8A73\u60C5", bookDemo: "\u9810\u7D04\u6F14\u793A" },
    hud: {
      city: "\u6F22\u5821",
      withDrawings: "\u5E36\u5716\u7D19\u7269\u6599\u6E05\u55AE",
      productInquiry: "\u5DE5\u696D\u9AD8\u58D3\u7403\u95A5 \xB7 \u8A02\u8CFC 5,000 \u5957",
      seoScore: "Google SEO \u7D50\u69CB\u8A55\u5206",
      perfectScore: "100 / 100 \u6EFF\u5206",
      langSupport: "\u8A9E\u8A00\u8207\u6642\u5340\u652F\u6301",
      langValue: "15 \u570B\u570B\u969B\u6BCD\u8A9E",
      inquiryNote: "\u8CB7\u5BB6\u5728\u8A73\u60C5\u9801\u4E00\u9375\u63D0\u4EA4\u63A1\u8CFC\u610F\u5411\uFF0C\u5718\u968A\u5F8C\u53F0\u90F5\u4EF6\u76F4\u63A5\u56DE\u8986",
      multiCurrency: "\u81EA\u9069\u61C9\u591A\u5E63\u7A2E\u7D50\u7B97",
      platformFeeLabel: "\u5E73\u53F0\u4EA4\u6613\u62BD\u6210",
      zeroFeeLabel: "0% \u62BD\u6210",
      ttfbLabel: "\u9996\u5B57\u7BC0 TTFB \u6975\u901F",
      expressPay: "Apple Pay / Credit Card \u6975\u901F\u652F\u4ED8",
      toteMatrix: "\u7D93\u5178\u5E06\u5E03\u6258\u7279\u5305 \xB7 \u898F\u683C\u77E9\u9663",
      bulkPurchase: "\u5927\u5B97\u6279\u91CF\u63A1\u8CFC",
      colorSize: "\u984F\u8272/\u5C3A\u78BC",
      ivory: "\u8C61\u7259\u767D",
      deepBlue: "\u6DF1\u9083\u85CD",
      totalItems: "\u5408\u8A08\u4EF6\u6578\uFF1A380 \u4EF6",
      tierReached: "\u5171 6 \u500B\u898F\u683C \xB7 \u5BE6\u6642\u5EAB\u5B58\u5DF2\u6838\u9A57",
      addAll: "\u6574\u8868\u4E00\u9375\u52A0\u8CFC",
      socialStep: "1. \u793E\u5A92 TikTok/Facebook \u7A2E\u8349\u76F4\u9054",
      visitors: "10,000+ \u8A2A\u5BA2",
      landingStep: "2. \u8F15\u92EA \u843D\u5730\u9801\u6D3E\u767C\u5C08\u5C6C\u512A\u60E0\u5238",
      couponRate: "\u9818\u5238\u7387 38.6%",
      listingStep: "3. Buy on Amazon \u5B98\u65B9 Listing \u8F49\u5316",
      bsrTop: "BSR #1 \u885D\u9802",
      crmStep: "4. \u5305\u88DD\u5167\u7F6E\u552E\u5F8C\u5EF6\u4FDD\u5361\uFF0C\u6C89\u6FB1\u7B2C\u4E00\u65B9\u8CB7\u5BB6\u90F5\u7BB1 CRM",
      erpNote: "\u652F\u6301 OpenAPI & Webhook \u6DF1\u5EA6\u6253\u901A\u7528\u53CB/\u91D1\u8776/\u842C\u91CC\u725B ERP",
      migrationStatus: "\u8DE8\u5E73\u53F0\u6578\u64DA\u6293\u53D6\u8207\u9077\u79FB\u72C0\u614B",
      migrationDone: "100% \u5B8C\u6210",
      productsSkus: "\u5546\u54C1\u8207\u591ASKU",
      members: "\u6B77\u53F2\u5BA2\u6236\u6703\u54E1",
      zeroDowntime: "0 \u505C\u6A5F",
      smoothTransition: "\u5E73\u7A69\u7121\u640D\u904E\u6E21",
      seoProtect: "301 \u6C38\u4E45\u91CD\u5B9A\u5411\u5B8C\u6574\u4FDD\u8B77\u5DF2\u6709 Google SEO \u6B0A\u91CD\u8207\u5916\u93C8"
    },
    matrix: {
      guide: "\u5FEB\u901F\u9078\u578B\u6307\u5357",
      title: "\u4E0D\u77E5\u9053\u5982\u4F55\u9078\u64C7\uFF1F30 \u79D2\u627E\u5230\u6700\u5951\u5408\u60A8\u7684\u5546\u696D\u65B9\u6848",
      desc: "\u6839\u64DA\u60A8\u7576\u524D\u7684\u5546\u696D\u6A21\u5F0F\u3001\u4E3B\u8981\u5BA2\u6236\u7FA4\u9AD4\u8207\u7D50\u7B97\u5F62\u614B\uFF0C\u5339\u914D\u6700\u7CBE\u6E96\u7684\u8F15\u92EA\u51FA\u6D77\u7CFB\u7D71\u3002",
      headers: ["\u696D\u52D9\u5834\u666F", "\u5546\u696D\u6A21\u5F0F", "\u76EE\u6A19\u63A1\u8CFC/\u6D88\u8CBB\u5BA2\u7FA4", "\u7D50\u7B97\u8207\u4EA4\u4E92\u5F62\u614B", "\u6838\u5FC3\u7CFB\u7D71\u80FD\u529B", "\u63A8\u85A6\u5339\u914D\u65B9\u6848"]
    },
    bottom: {
      title: "\u7ACB\u5373\u958B\u555F\u60A8\u7684\u5168\u5834\u666F\u5168\u7403\u5546\u696D\u7368\u7ACB\u7AD9",
      desc: "\u7121\u8AD6\u60A8\u662F\u5C0B\u6C42\u6D77\u5916\u7CBE\u6E96\u5DE5\u7A0B\u8A62\u76E4\u7684\u5DE5\u8CBF\u4F01\u696D\uFF0C\u9084\u662F\u6253\u9020\u5168\u7403\u54C1\u724C\u7684 DTC \u8CE3\u5BB6\uFF0C\u8F15\u92EA \u90FD\u70BA\u60A8\u63D0\u4F9B\u5805\u5BE6\u5F37\u5927\u7684\u51FA\u6D77\u6578\u5B57\u5E95\u5EA7\u3002",
      primary: "\u7ACB\u5373\u514D\u8CBB\u958B\u5E97",
      secondary: "\u9810\u7D04\u65B9\u6848\u5C08\u5BB6 1 \u5C0D 1 \u8AEE\u8A62"
    },
    consult: {
      title: "\u9810\u7D04\u5C08\u5C6C\u51FA\u6D77\u89E3\u6C7A\u65B9\u6848\u8AEE\u8A62",
      description: "\u65B9\u6848\u9867\u554F\u5C07\u5728 15 \u5206\u9418\u5167\u8207\u60A8\u806F\u7E6B\uFF0C\u63D0\u4F9B\u91DD\u5C0D\u6027\u5EFA\u7AD9\u898F\u5283\u8207\u6F14\u793A\u3002",
      placeholder: "\u8ACB\u7C21\u8FF0\u60A8\u7684\u696D\u52D9\u9700\u6C42\uFF08\u5982\uFF1A{scene}\uFF09"
    },
    seo: {
      title: "\u5168\u7403\u5546\u696D\u51FA\u6D77\u5168\u5834\u666F\u7368\u7ACB\u7AD9\u89E3\u6C7A\u65B9\u6848 | \u8F15\u92EA",
      description: "\u8F15\u92EA \u70BA\u5916\u8CBF B2B \u88FD\u9020\u3001\u8DE8\u5883 DTC \u54C1\u724C\u3001\u5927\u5B97\u6279\u767C\u5206\u92B7\u3001\u4E9E\u99AC\u905C\u5E73\u53F0\u5927\u8CE3\u63D0\u4F9B\u5168\u5834\u666F\u51FA\u6D77\u7368\u7ACB\u7AD9\u89E3\u6C7A\u65B9\u6848\u30020% \u5E73\u53F0\u62BD\u6210\u300115 \u8A9E\u7A2E\u570B\u969B\u5316\u300114ms \u6975\u901F\u97FF\u61C9\u3002",
      keywords: "\u7368\u7ACB\u7AD9\u89E3\u6C7A\u65B9\u6848,B2B\u7368\u7ACB\u7AD9,\u8DE8\u5883DTC\u5546\u57CE,\u6279\u767C\u5206\u92B7\u7CFB\u7D71,\u4E9E\u99AC\u905C\u5F15\u6D41,\u4F01\u696D\u5EFA\u7AD9\u5B9A\u88FD",
      ogTitle: "\u5168\u7403\u5546\u696D\u51FA\u6D77\u5168\u5834\u666F\u7368\u7ACB\u7AD9\u89E3\u6C7A\u65B9\u6848 | \u8F15\u92EA",
      ogDescription: "\u6DB5\u84CB B2B \u5916\u8CBF\u8A62\u76E4\u3001DTC \u54C1\u724C\u96F6\u552E\u3001\u5927\u5B97\u6279\u767C\u77E9\u9663\u3001\u4E9E\u99AC\u905C\u79C1\u57DF\u6C89\u6FB1\u8207\u4F01\u696D\u7D1A\u6E90\u78BC\u5B9A\u88FD\u3002"
    }
  },
  en: {
    hero: {
      badge: "Comprehensive Global Commerce Solutions",
      titleMain: "Tailored for Global Commerce,",
      titleHighlight: "All-in-One Independent Store Solutions",
      description: "From B2B inquiries, DTC retail, wholesale ordering, and Amazon off-site traffic, to enterprise customization and seamless migration, Shoply powers your cross-border business with 0% platform fees.",
      primaryCta: "Start Free Store",
      secondaryCta: "Schedule Solution Demo",
      proofPills: ["0% platform transaction commission", "Full support for 15 native languages", "14ms ultra-fast TTFB response", "100% data asset privatization", "Google structured SEO architecture"],
      metrics: [
        { value: "+280%", title: "Real overseas inquiry conversion growth", desc: "Industry-trade & B2B manufacturing" },
        { value: "0%", title: "Platform commission withheld", desc: "100% of funds reach your acquiring account" },
        { value: "12,800+", title: "QPS single-node coroutine engine", desc: "Ultra-light 64MB private container" }
      ]
    },
    nav: { quickNav: "Quick jump:", help: "Not sure which to pick? Ask a solution expert" },
    scenes: { global: "Global solution consultation", selection: "Solution selection help", bottom: "Bottom full-scenario booking" },
    card: { audiencePrefix: "Best for: ", viewDetail: "View solution", bookDemo: "Book a demo" },
    hud: {
      city: "Hamburg",
      withDrawings: "With drawings & BOM",
      productInquiry: "Industrial high-pressure ball valve \xB7 Order 5,000 units",
      seoScore: "Google SEO structure score",
      perfectScore: "100 / 100 Perfect",
      langSupport: "Language & timezone support",
      langValue: "15 native languages",
      inquiryNote: "Buyers submit purchase intent on the product page and the team replies by email from the dashboard",
      multiCurrency: "Adaptive multi-currency checkout",
      platformFeeLabel: "Platform transaction fee",
      zeroFeeLabel: "0% fee",
      ttfbLabel: "First-byte TTFB speed",
      expressPay: "Apple Pay / Credit Card express checkout",
      toteMatrix: "Classic canvas tote \xB7 Spec matrix",
      bulkPurchase: "Bulk purchase",
      colorSize: "Color/Size",
      ivory: "Ivory White",
      deepBlue: "Deep Blue",
      totalItems: "Total: 380 units",
      tierReached: "6 variants selected \xB7 Real-time stock verified",
      addAll: "Add whole table to cart",
      socialStep: "1. Social TikTok/Facebook discovery traffic",
      visitors: "10,000+ visitors",
      landingStep: "2. Shoply landing page distributes exclusive coupons",
      couponRate: "Coupon claim rate 38.6%",
      listingStep: "3. Buy on Amazon official listing conversion",
      bsrTop: "BSR #1 top rank",
      crmStep: "4. In-box warranty card captures first-party buyer email CRM",
      erpNote: "Supports OpenAPI & Webhook deep integration with Yonyou/Kingdee/Wanliniu ERP",
      migrationStatus: "Cross-platform data crawl & migration status",
      migrationDone: "100% complete",
      productsSkus: "Products & multi-SKU",
      members: "Existing customer members",
      zeroDowntime: "Zero downtime",
      smoothTransition: "Smooth lossless transition",
      seoProtect: "301 permanent redirects fully protect existing Google SEO equity and backlinks"
    },
    matrix: {
      guide: "Quick Selection Guide",
      title: "Not sure which to choose? Find your best fit in 30 seconds",
      desc: "Match the most precise Shoply globalization system to your current business model, main customer segments, and settlement style.",
      headers: ["Scenario", "Business model", "Target buyer segment", "Settlement & interaction", "Core system capability", "Recommended solution"]
    },
    bottom: {
      title: "Launch your all-scenario global commerce store today",
      desc: "Whether you are an industry-trade firm seeking precise overseas engineering inquiries or a DTC seller building a global brand, Shoply gives you a solid, powerful digital foundation for going global.",
      primary: "Start free store",
      secondary: "Book a 1-on-1 solution expert"
    },
    consult: {
      title: "Book an exclusive globalization solution consultation",
      description: "Our solution experts will contact you within 15 minutes to provide planning and a live demo.",
      placeholder: "Please describe your business needs ({scene})"
    },
    seo: {
      title: "Comprehensive Global Commerce Solutions | Shoply",
      description: "Discover Shoply all-in-one independent eCommerce solutions for B2B foreign trade, DTC brand stores, wholesale ordering, and Amazon off-site expansion with 0% platform fees.",
      keywords: "ecommerce solutions,B2B independent store,cross-border DTC store,wholesale distribution system,Amazon off-site traffic,enterprise custom development",
      ogTitle: "Comprehensive Global Commerce Solutions | Shoply",
      ogDescription: "Explore tailored commerce architectures for B2B inquiry, DTC retail, wholesale, and Amazon traffic capture."
    }
  },
  ru: {
    hero: {
      badge: "\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u044B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u043E\u0439 \u0442\u043E\u0440\u0433\u043E\u0432\u043B\u0438",
      titleMain: "\u041F\u043E\u0434 \u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u044B\u0435 \u0431\u0438\u0437\u043D\u0435\u0441-\u043C\u043E\u0434\u0435\u043B\u0438",
      titleHighlight: "\u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u0437\u0430\u0440\u0443\u0431\u0435\u0436\u043D\u044B\u0445 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u043E\u0432",
      description: "\u041E\u0442 B2B-\u0437\u0430\u044F\u0432\u043E\u043A, DTC-\u0440\u0438\u0442\u0435\u0439\u043B\u0430, \u043E\u043F\u0442\u0430 \u0438 \u0434\u0438\u0441\u0442\u0440\u0438\u0431\u0443\u0446\u0438\u0438 \u0434\u043E \u0442\u0440\u0430\u0444\u0438\u043A\u0430 \u0434\u043B\u044F \u043F\u0440\u043E\u0434\u0430\u0432\u0446\u043E\u0432 Amazon, \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u043A\u0430\u0441\u0442\u043E\u043C\u0430 \u0438 \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u0430 \u0431\u0435\u0437 \u043F\u043E\u0442\u0435\u0440\u044C \u2014 Shoply \u0434\u0430\u0451\u0442 \u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0443 \u0434\u043B\u044F \u0432\u044B\u0445\u043E\u0434\u0430 \u0437\u0430 \u0440\u0443\u0431\u0435\u0436 \u0441 \u0432\u044B\u0441\u043E\u043A\u043E\u0439 \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u043E\u0439 \u0438 0% \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u0438.",
      primaryCta: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E",
      secondaryCta: "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u0434\u0435\u043C\u043E \u0440\u0435\u0448\u0435\u043D\u0438\u044F",
      proofPills: ["0% \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u0438 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B", "\u041F\u043E\u043B\u043D\u0430\u044F \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 15 \u044F\u0437\u044B\u043A\u043E\u0432", "\u0421\u0432\u0435\u0440\u0445\u0431\u044B\u0441\u0442\u0440\u044B\u0439 \u043E\u0442\u043A\u043B\u0438\u043A TTFB 14 \u043C\u0441", "100% \u043F\u0440\u0438\u0432\u0430\u0442\u043D\u043E\u0441\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0445", "\u0421\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F SEO-\u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0430 Google"],
      metrics: [
        { value: "+280%", title: "\u0420\u043E\u0441\u0442 \u0440\u0435\u0430\u043B\u044C\u043D\u044B\u0445 \u0437\u0430\u0440\u0443\u0431\u0435\u0436\u043D\u044B\u0445 \u0437\u0430\u044F\u0432\u043E\u043A", desc: "\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E \u0438 \u0442\u043E\u0440\u0433\u043E\u0432\u043B\u044F \u0438 B2B" },
        { value: "0%", title: "\u0423\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0435 \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u0438 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B", desc: "100% \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u043F\u043E\u0441\u0442\u0443\u043F\u0430\u044E\u0442 \u043D\u0430 \u044D\u043A\u0432\u0430\u0439\u0440\u0438\u043D\u0433" },
        { value: "12,800+", title: "QPS-\u0434\u0432\u0438\u0436\u043E\u043A \u043D\u0430 \u0433\u043E\u0440\u0443\u0442\u0438\u043D\u0430\u0445", desc: "\u0421\u0432\u0435\u0440\u0445\u043B\u0451\u0433\u043A\u0438\u0439 \u043F\u0440\u0438\u0432\u0430\u0442\u043D\u044B\u0439 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440 64 \u041C\u0411" }
      ]
    },
    nav: { quickNav: "\u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u043F\u0435\u0440\u0435\u0445\u043E\u0434:", help: "\u041D\u0435 \u0437\u043D\u0430\u0435\u0442\u0435, \u0447\u0442\u043E \u0432\u044B\u0431\u0440\u0430\u0442\u044C? \u0421\u043F\u0440\u043E\u0441\u0438\u0442\u0435 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0430" },
    scenes: { global: "\u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044F \u043F\u043E \u0440\u0435\u0448\u0435\u043D\u0438\u044F\u043C", selection: "\u041F\u043E\u043C\u043E\u0449\u044C \u0441 \u0432\u044B\u0431\u043E\u0440\u043E\u043C", bottom: "\u0411\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0432\u043D\u0438\u0437\u0443 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B" },
    card: { audiencePrefix: "\u041A\u043E\u043C\u0443 \u043F\u043E\u0434\u0445\u043E\u0434\u0438\u0442: ", viewDetail: "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0440\u0435\u0448\u0435\u043D\u0438\u0435", bookDemo: "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u0434\u0435\u043C\u043E" },
    hud: {
      city: "\u0413\u0430\u043C\u0431\u0443\u0440\u0433",
      withDrawings: "\u0421 \u0447\u0435\u0440\u0442\u0435\u0436\u0430\u043C\u0438 \u0438 \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0435\u0439",
      productInquiry: "\u041F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u044B\u0439 \u0448\u0430\u0440\u043E\u0432\u043E\u0439 \u043A\u0440\u0430\u043D \xB7 \u0437\u0430\u043A\u0430\u0437 5 000 \u0448\u0442.",
      seoScore: "\u041E\u0446\u0435\u043D\u043A\u0430 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u044B Google SEO",
      perfectScore: "100 / 100 \u043C\u0430\u043A\u0441\u0438\u043C\u0443\u043C",
      langSupport: "\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 \u044F\u0437\u044B\u043A\u043E\u0432 \u0438 \u0447\u0430\u0441\u043E\u0432\u044B\u0445 \u043F\u043E\u044F\u0441\u043E\u0432",
      langValue: "15 \u0440\u043E\u0434\u043D\u044B\u0445 \u044F\u0437\u044B\u043A\u043E\u0432",
      inquiryNote: "\u041F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0438 \u043E\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0442 \u0437\u0430\u044F\u0432\u043A\u0443 \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u0442\u043E\u0432\u0430\u0440\u0430, \u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043E\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u043F\u0438\u0441\u044C\u043C\u043E\u043C \u0438\u0437 \u043F\u0430\u043D\u0435\u043B\u0438",
      multiCurrency: "\u0410\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u044B\u0435 \u043C\u0443\u043B\u044C\u0442\u0438\u0432\u0430\u043B\u044E\u0442\u043D\u044B\u0435 \u0440\u0430\u0441\u0447\u0451\u0442\u044B",
      platformFeeLabel: "\u041A\u043E\u043C\u0438\u0441\u0441\u0438\u044F \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B",
      zeroFeeLabel: "0% \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u0438",
      ttfbLabel: "\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u0431\u0430\u0439\u0442\u0430 TTFB",
      expressPay: "\u0411\u044B\u0441\u0442\u0440\u0430\u044F \u043E\u043F\u043B\u0430\u0442\u0430 Apple Pay / Credit Card",
      toteMatrix: "\u041A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0441\u0443\u043C\u043A\u0430-\u0442\u043E\u0443\u0442 \xB7 \u043C\u0430\u0442\u0440\u0438\u0446\u0430 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432",
      bulkPurchase: "\u041E\u043F\u0442\u043E\u0432\u0430\u044F \u0437\u0430\u043A\u0443\u043F\u043A\u0430",
      colorSize: "\u0426\u0432\u0435\u0442/\u0420\u0430\u0437\u043C\u0435\u0440",
      ivory: "\u0421\u043B\u043E\u043D\u043E\u0432\u0430\u044F \u043A\u043E\u0441\u0442\u044C",
      deepBlue: "\u0413\u043B\u0443\u0431\u043E\u043A\u0438\u0439 \u0441\u0438\u043D\u0438\u0439",
      totalItems: "\u0418\u0442\u043E\u0433\u043E: 380 \u0448\u0442.",
      tierReached: "\u0412\u044B\u0431\u0440\u0430\u043D\u043E 6 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432 \xB7 \u041E\u0441\u0442\u0430\u0442\u043A\u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u044B",
      addAll: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432\u0441\u044E \u0442\u0430\u0431\u043B\u0438\u0446\u0443 \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443",
      socialStep: "1. \u0422\u0440\u0430\u0444\u0438\u043A \u0438\u0437 \u0441\u043E\u0446\u0441\u0435\u0442\u0435\u0439 TikTok/Facebook",
      visitors: "10 000+ \u043F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u0435\u0439",
      landingStep: "2. Shoply-\u043B\u0435\u043D\u0434\u0438\u043D\u0433 \u0440\u0430\u0437\u0434\u0430\u0451\u0442 \u044D\u043A\u0441\u043A\u043B\u044E\u0437\u0438\u0432\u043D\u044B\u0435 \u043A\u0443\u043F\u043E\u043D\u044B",
      couponRate: "\u0414\u043E\u043B\u044F \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u043A\u0443\u043F\u043E\u043D\u043E\u0432 38,6%",
      listingStep: "3. \u041A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u044F \u043E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043B\u0438\u0441\u0442\u0438\u043D\u0433\u0430 Buy on Amazon",
      bsrTop: "BSR #1 \u0432 \u0442\u043E\u043F\u0435",
      crmStep: "4. \u0413\u0430\u0440\u0430\u043D\u0442\u0438\u0439\u043D\u0430\u044F \u043A\u0430\u0440\u0442\u0430 \u0432 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0435 \u0441\u043E\u0431\u0438\u0440\u0430\u0435\u0442 e-mail \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0435\u0439 \u0432 CRM",
      erpNote: "\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 OpenAPI & Webhook \u0441 \u0433\u043B\u0443\u0431\u043E\u043A\u043E\u0439 \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0435\u0439 \u0441 ERP Yonyou/Kingdee/Wanliniu",
      migrationStatus: "\u0421\u0442\u0430\u0442\u0443\u0441 \u0441\u0431\u043E\u0440\u0430 \u0438 \u043C\u0438\u0433\u0440\u0430\u0446\u0438\u0438 \u0434\u0430\u043D\u043D\u044B\u0445",
      migrationDone: "100% \u0433\u043E\u0442\u043E\u0432\u043E",
      productsSkus: "\u0422\u043E\u0432\u0430\u0440\u044B \u0438 \u043C\u0443\u043B\u044C\u0442\u0438-SKU",
      members: "\u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u044B",
      zeroDowntime: "\u0411\u0435\u0437 \u043F\u0440\u043E\u0441\u0442\u043E\u044F",
      smoothTransition: "\u041F\u043B\u0430\u0432\u043D\u044B\u0439 \u043F\u0435\u0440\u0435\u0445\u043E\u0434 \u0431\u0435\u0437 \u043F\u043E\u0442\u0435\u0440\u044C",
      seoProtect: "\u041F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u044B\u0435 \u0440\u0435\u0434\u0438\u0440\u0435\u043A\u0442\u044B 301 \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u044E\u0442 \u043F\u043E\u0437\u0438\u0446\u0438\u0438 Google SEO \u0438 \u0432\u043D\u0435\u0448\u043D\u0438\u0435 \u0441\u0441\u044B\u043B\u043A\u0438"
    },
    matrix: {
      guide: "\u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u0433\u0438\u0434 \u043F\u043E \u0432\u044B\u0431\u043E\u0440\u0443",
      title: "\u041D\u0435 \u0437\u043D\u0430\u0435\u0442\u0435, \u0447\u0442\u043E \u0432\u044B\u0431\u0440\u0430\u0442\u044C? \u041E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u0435 \u043B\u0443\u0447\u0448\u0438\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442 \u0437\u0430 30 \u0441\u0435\u043A\u0443\u043D\u0434",
      desc: "\u041F\u043E\u0434\u0431\u0435\u0440\u0451\u043C \u043D\u0430\u0438\u0431\u043E\u043B\u0435\u0435 \u0442\u043E\u0447\u043D\u0443\u044E \u0441\u0438\u0441\u0442\u0435\u043C\u0443 Shoply \u043F\u043E\u0434 \u0432\u0430\u0448\u0443 \u0431\u0438\u0437\u043D\u0435\u0441-\u043C\u043E\u0434\u0435\u043B\u044C, \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u0438 \u0444\u043E\u0440\u043C\u0430\u0442 \u0440\u0430\u0441\u0447\u0451\u0442\u043E\u0432.",
      headers: ["\u0421\u0446\u0435\u043D\u0430\u0440\u0438\u0439", "\u0411\u0438\u0437\u043D\u0435\u0441-\u043C\u043E\u0434\u0435\u043B\u044C", "\u0426\u0435\u043B\u0435\u0432\u0430\u044F \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F", "\u0420\u0430\u0441\u0447\u0451\u0442\u044B \u0438 \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435", "\u041A\u043B\u044E\u0447\u0435\u0432\u044B\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438", "\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C\u043E\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435"]
    },
    bottom: {
      title: "\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0435 \u0441\u0432\u043E\u0439 \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u044B\u0439 \u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u044B\u0439 \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u0441\u0435\u0433\u043E\u0434\u043D\u044F",
      desc: "\u0418\u0449\u0435\u0442\u0435 \u0442\u043E\u0447\u043D\u044B\u0435 \u0438\u043D\u0436\u0435\u043D\u0435\u0440\u043D\u044B\u0435 \u0437\u0430\u044F\u0432\u043A\u0438 \u0438\u0437-\u0437\u0430 \u0440\u0443\u0431\u0435\u0436\u0430 \u0438\u043B\u0438 \u0441\u0442\u0440\u043E\u0438\u0442\u0435 \u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u044B\u0439 DTC-\u0431\u0440\u0435\u043D\u0434 \u2014 Shoply \u0434\u0430\u0451\u0442 \u043F\u0440\u043E\u0447\u043D\u0443\u044E \u0446\u0438\u0444\u0440\u043E\u0432\u0443\u044E \u043E\u0441\u043D\u043E\u0432\u0443 \u0434\u043B\u044F \u0432\u044B\u0445\u043E\u0434\u0430 \u043D\u0430 \u043C\u0438\u0440\u043E\u0432\u043E\u0439 \u0440\u044B\u043D\u043E\u043A.",
      primary: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E",
      secondary: "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044E 1-\u043D\u0430-1"
    },
    consult: {
      title: "\u0417\u0430\u043A\u0430\u0436\u0438\u0442\u0435 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0443\u044E \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044E \u043F\u043E \u0432\u044B\u0445\u043E\u0434\u0443 \u0437\u0430 \u0440\u0443\u0431\u0435\u0436",
      description: "\u041D\u0430\u0448\u0438 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u044B \u0441\u0432\u044F\u0436\u0443\u0442\u0441\u044F \u0441 \u0432\u0430\u043C\u0438 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 15 \u043C\u0438\u043D\u0443\u0442 \u0438 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0430\u0442 \u043F\u043B\u0430\u043D \u0438 \u0434\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0430\u0446\u0438\u044E.",
      placeholder: "\u041E\u043F\u0438\u0448\u0438\u0442\u0435 \u0432\u0430\u0448\u0438 \u0437\u0430\u0434\u0430\u0447\u0438 ({scene})"
    },
    seo: {
      title: "\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u044B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u043E\u0439 \u0442\u043E\u0440\u0433\u043E\u0432\u043B\u0438 | Shoply",
      description: "Shoply \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u0442 \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u0432\u044B\u0445\u043E\u0434\u0430 \u0437\u0430 \u0440\u0443\u0431\u0435\u0436: B2B-\u0432\u043D\u0435\u0448\u043D\u044F\u044F \u0442\u043E\u0440\u0433\u043E\u0432\u043B\u044F, DTC-\u0431\u0440\u0435\u043D\u0434\u044B, \u043E\u043F\u0442 \u0438 \u0434\u0438\u0441\u0442\u0440\u0438\u0431\u0443\u0446\u0438\u044F, \u0442\u0440\u0430\u0444\u0438\u043A \u0434\u043B\u044F Amazon \u2014 \u0441 0% \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u0438 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B.",
      keywords: "\u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430,B2B-\u0441\u0430\u0439\u0442,\u043A\u0440\u043E\u0441\u0441-\u0431\u043E\u0440\u0434\u0435\u0440 DTC,\u043E\u043F\u0442 \u0438 \u0434\u0438\u0441\u0442\u0440\u0438\u0431\u0443\u0446\u0438\u044F,\u0442\u0440\u0430\u0444\u0438\u043A Amazon,\u043A\u0430\u0441\u0442\u043E\u043C\u043D\u0430\u044F \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430",
      ogTitle: "\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u044B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u043E\u0439 \u0442\u043E\u0440\u0433\u043E\u0432\u043B\u0438 | Shoply",
      ogDescription: "B2B-\u0437\u0430\u044F\u0432\u043A\u0438, DTC-\u0440\u0438\u0442\u0435\u0439\u043B, \u043E\u043F\u0442\u043E\u0432\u044B\u0435 \u043C\u0430\u0442\u0440\u0438\u0446\u044B, \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F Amazon \u0438 \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u0439 \u043A\u0430\u0441\u0442\u043E\u043C \u0438\u0441\u0445\u043E\u0434\u043D\u043E\u0433\u043E \u043A\u043E\u0434\u0430."
    }
  }
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale } = useI18n();
    const { localePath } = useLocaleRouter();
    const { signUpUrl } = useShoplyAuthLinks();
    const currentLocale = computed(() => {
      const current = locale.value;
      if (current in solutionsLocales) return current;
      return "zh";
    });
    const copy = computed(() => solutionsPageLocales[currentLocale.value] || solutionsPageLocales.zh);
    const solutions = computed(() => (solutionsLocales[currentLocale.value] || solutionsLocales.zh).solutions);
    const solutionCategoryTabs = computed(() => (solutionsLocales[currentLocale.value] || solutionsLocales.zh).categoryTabs);
    const solutionComparisonRows = computed(() => (solutionsLocales[currentLocale.value] || solutionsLocales.zh).comparisonRows);
    const activeCategory = ref("all");
    const isConsultOpen = ref(false);
    const activeConsultScene = ref(copy.value.scenes.global);
    const demandPlaceholder = computed(() => copy.value.consult.placeholder.replace("{scene}", activeConsultScene.value));
    useSeoMeta({
      title: () => copy.value.seo.title,
      description: () => copy.value.seo.description,
      keywords: () => copy.value.seo.keywords,
      ogTitle: () => copy.value.seo.ogTitle,
      ogDescription: () => copy.value.seo.ogDescription,
      ogType: "website",
      twitterCard: "summary_large_image"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$W;
      const _component_NuxtLink = __nuxt_component_3$4;
      const _component_UModal = _sfc_main$G;
      const _component_UButton = _sfc_main$R;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white font-sans text-slate-900 selection:bg-blue-200" }, _attrs))}><section class="relative isolate overflow-hidden bg-gradient-to-b from-[#2678ff] via-[#1e6df0] to-[#155fc8] px-5 pb-20 pt-28 text-white sm:px-8 sm:pb-28 sm:pt-36 lg:px-12 lg:pt-40"><div class="pointer-events-none absolute inset-0 -z-10"><div class="animate-shoply-glow absolute -left-20 top-10 h-96 w-96 rounded-full bg-cyan-300/25 blur-3xl"></div><div class="animate-shoply-float-delayed absolute -right-20 bottom-10 h-[480px] w-[480px] rounded-full bg-indigo-900/30 blur-3xl"></div><div class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-blue-800/20 to-transparent"></div></div><div class="mx-auto max-w-[1360px]"><div class="mx-auto max-w-4xl text-center"><div class="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-bold tracking-wider text-blue-50 backdrop-blur-sm"><span class="h-2 w-2 rounded-full bg-amber-300 animate-pulse"></span><span>${ssrInterpolate(copy.value.hero.badge)}</span></div><h1 class="mt-6 text-4xl font-black leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">${ssrInterpolate(copy.value.hero.titleMain)} <span class="mt-2 block text-amber-300">${ssrInterpolate(copy.value.hero.titleHighlight)}</span></h1><p class="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-blue-50/90 sm:text-lg sm:leading-8">${ssrInterpolate(copy.value.hero.description)}</p><div class="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"><a${ssrRenderAttr("href", unref(signUpUrl))} class="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-white px-8 py-4 text-base font-extrabold text-blue-600 shadow-xl shadow-blue-950/15 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl active:scale-95 sm:w-auto"><span>${ssrInterpolate(copy.value.hero.primaryCta)}</span>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:arrow-right-bold",
        class: "h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
      }, null, _parent));
      _push(`</a><button type="button" class="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 active:scale-95 sm:w-auto">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:calendar-check-bold",
        class: "h-5 w-5 text-amber-300"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(copy.value.hero.secondaryCta)}</span></button></div><div class="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-blue-100 sm:text-sm"><!--[-->`);
      ssrRenderList(copy.value.hero.proofPills, (pill) => {
        _push(`<span class="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 backdrop-blur-sm">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:check-circle-fill",
          class: "h-4 w-4 text-emerald-300"
        }, null, _parent));
        _push(` ${ssrInterpolate(pill)}</span>`);
      });
      _push(`<!--]--></div></div><div class="mt-14 mx-auto max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(copy.value.hero.metrics, (metric, index) => {
        _push(`<div class="rounded-3xl border border-white/15 bg-white/5 p-6 text-center backdrop-blur-md transition-transform hover:-translate-y-1"><div class="${ssrRenderClass([["text-amber-300", "text-emerald-300", "text-cyan-300"][index], "text-4xl font-black"])}">${ssrInterpolate(metric.value)}</div><div class="mt-2 text-sm font-semibold text-white">${ssrInterpolate(metric.title)}</div><div class="mt-1 text-xs text-blue-200/70">${ssrInterpolate(metric.desc)}</div></div>`);
      });
      _push(`<!--]--></div></div></section><nav class="sticky top-[72px] sm:top-20 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur-md py-3.5 shadow-sm"><div class="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12 flex items-center justify-between gap-4 overflow-x-auto scrollbar-none"><div class="flex items-center gap-2 shrink-0"><span class="text-xs font-bold text-slate-400 uppercase tracking-wider hidden md:inline-block">${ssrInterpolate(copy.value.nav.quickNav)}</span><!--[-->`);
      ssrRenderList(solutionCategoryTabs.value, (tab) => {
        _push(`<button type="button" class="${ssrRenderClass([activeCategory.value === tab.id ? "bg-blue-600 text-white shadow-md shadow-blue-600/20" : "bg-slate-100 text-slate-700 hover:bg-slate-200/80", "inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold transition-all"])}">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: tab.icon,
          class: "h-3.5 w-3.5"
        }, null, _parent));
        _push(`<span>${ssrInterpolate(tab.label)}</span></button>`);
      });
      _push(`<!--]--></div><button type="button" class="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 shrink-0">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:question-bold",
        class: "h-4 w-4"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(copy.value.nav.help)}</span></button></div></nav><section class="py-16 sm:py-24 bg-slate-50/60 relative"><div class="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000004_1px,transparent_1px),linear-gradient(to_bottom,#00000004_1px,transparent_1px)] bg-[size:4rem_4rem]"></div><div class="relative mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12 space-y-16 sm:space-y-24"><!--[-->`);
      ssrRenderList(solutions.value, (solution, index) => {
        _push(`<article${ssrRenderAttr("id", `solution-${solution.id}`)} class="group relative rounded-3xl sm:rounded-[2.5rem] border border-slate-200/90 bg-white p-7 sm:p-10 lg:p-14 shadow-xl shadow-slate-900/5 transition-all duration-300 hover:border-blue-300 hover:shadow-2xl overflow-hidden scroll-mt-32"><div class="${ssrRenderClass([solution.category === "b2b" ? "bg-blue-400" : solution.category === "b2c" ? "bg-emerald-400" : solution.category === "wholesale" ? "bg-indigo-400" : solution.category === "amazon" ? "bg-amber-400" : solution.category === "custom" ? "bg-cyan-400" : "bg-rose-400", "pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full blur-3xl opacity-30 transition-opacity duration-300 group-hover:opacity-60"])}"></div><div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"><div class="lg:col-span-7 flex flex-col justify-between"><div><div class="flex flex-wrap items-center gap-2.5"><span class="${ssrRenderClass([solution.category === "b2b" ? "bg-blue-600" : solution.category === "b2c" ? "bg-emerald-600" : solution.category === "wholesale" ? "bg-indigo-600" : solution.category === "amazon" ? "bg-amber-600" : solution.category === "custom" ? "bg-cyan-700" : "bg-rose-600", "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-black uppercase tracking-wider text-white shadow-sm"])}"><span class="h-1.5 w-1.5 rounded-full bg-white animate-ping"></span> ${ssrInterpolate(solution.badge)}</span><span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">${ssrInterpolate(solution.categoryLabel)}</span><span class="hidden sm:inline-flex items-center gap-1 text-xs text-slate-400 font-mono"> SCENARIO #0${ssrInterpolate(index + 1)}</span></div><h2 class="mt-5 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 leading-snug">${ssrInterpolate(solution.title)}</h2><p class="mt-3 text-base sm:text-lg font-bold text-blue-600/90 leading-relaxed">${ssrInterpolate(solution.subtitle)}</p><div class="mt-4 inline-flex items-center gap-2 rounded-xl bg-slate-50 border border-slate-200/80 px-3.5 py-2 text-xs font-semibold text-slate-600">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:target-bold",
          class: "h-4 w-4 text-blue-600 shrink-0"
        }, null, _parent));
        _push(`<span>${ssrInterpolate(copy.value.card.audiencePrefix)}${ssrInterpolate(solution.targetAudience)}</span></div><p class="mt-4 text-sm sm:text-base leading-7 text-slate-600">${ssrInterpolate(solution.summary)}</p><div class="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4"><!--[-->`);
        ssrRenderList(solution.features, (feat) => {
          _push(`<div class="rounded-2xl border border-slate-100 bg-slate-50/70 p-4 transition-colors hover:bg-blue-50/40 hover:border-blue-200"><div class="flex items-center gap-2.5"><span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: feat.icon,
            class: "h-4 w-4"
          }, null, _parent));
          _push(`</span><h4 class="text-sm font-bold text-slate-900">${ssrInterpolate(feat.title)}</h4></div><p class="mt-2 text-xs leading-relaxed text-slate-500">${ssrInterpolate(feat.desc)}</p></div>`);
        });
        _push(`<!--]--></div></div><div class="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-5"><div class="flex items-center gap-3"><div class="text-3xl font-black text-slate-900 tracking-tight">${ssrInterpolate(solution.metricValue)}</div><div class="text-xs font-medium text-slate-500 leading-tight"><span class="block font-bold text-slate-800">${ssrInterpolate(solution.metricLabel)}</span><span>${ssrInterpolate(solution.secondaryMetricValue)} ${ssrInterpolate(solution.secondaryMetricLabel)}</span></div></div><div class="flex items-center gap-3">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)(solution.detailRoute),
          class: "inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-blue-600 hover:shadow-lg transition-all duration-200 group-hover:bg-blue-600"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(copy.value.card.viewDetail)}</span>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:arrow-right-bold",
                class: "h-4 w-4 transition-transform group-hover:translate-x-1"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode("span", null, toDisplayString(copy.value.card.viewDetail), 1),
                createVNode(_component_UIcon, {
                  name: "ph:arrow-right-bold",
                  class: "h-4 w-4 transition-transform group-hover:translate-x-1"
                })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<button type="button" class="inline-flex items-center justify-center gap-1.5 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:calendar-check-bold",
          class: "h-4 w-4 text-blue-600"
        }, null, _parent));
        _push(`<span>${ssrInterpolate(copy.value.card.bookDemo)}</span></button></div></div></div><div class="lg:col-span-5"><div class="overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 text-white p-5 shadow-2xl shadow-slate-900/20 relative"><div class="flex items-center justify-between pb-3.5 border-b border-slate-800 text-xs"><div class="flex items-center gap-2"><span class="h-3 w-3 rounded-full bg-rose-500/80 inline-block"></span><span class="h-3 w-3 rounded-full bg-amber-500/80 inline-block"></span><span class="h-3 w-3 rounded-full bg-emerald-500/80 inline-block"></span><span class="ml-2 font-mono text-[11px] text-slate-400">${ssrInterpolate(solution.slug)}.iqingpu.com</span></div><span class="rounded-full bg-slate-800 px-2.5 py-0.5 font-mono text-[10px] text-cyan-400"> LIVE PREVIEW </span></div>`);
        if (solution.previewType === "inquiry") {
          _push(`<div class="mt-4 space-y-3 font-sans text-xs"><div class="rounded-2xl bg-slate-800/80 p-3.5 border border-slate-700/80"><div class="flex items-center justify-between"><div class="flex items-center gap-2"><span class="text-base">\u{1F1E9}\u{1F1EA}</span><div><p class="font-bold text-white">Michael Vance</p><p class="text-[11px] text-slate-400">Hansa Dynamics GmbH \xB7 ${ssrInterpolate(copy.value.hud.city)}</p></div></div><span class="rounded-full bg-emerald-500/20 border border-emerald-500/40 px-2 py-0.5 text-[10px] font-bold text-emerald-300">${ssrInterpolate(copy.value.hud.withDrawings)}</span></div><div class="mt-3 pt-2.5 border-t border-slate-700 flex items-center justify-between text-[11px]"><span class="text-slate-300">${ssrInterpolate(copy.value.hud.productInquiry)}</span><span class="font-mono text-cyan-400">RFQ-20260318</span></div></div><div class="grid grid-cols-2 gap-2 text-[11px]"><div class="rounded-xl bg-slate-800/50 p-2.5 border border-slate-700/50"><div class="text-slate-400">${ssrInterpolate(copy.value.hud.seoScore)}</div><div class="mt-1 font-bold text-emerald-400 flex items-center gap-1">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:check-circle-fill",
            class: "h-3.5 w-3.5"
          }, null, _parent));
          _push(` ${ssrInterpolate(copy.value.hud.perfectScore)}</div></div><div class="rounded-xl bg-slate-800/50 p-2.5 border border-slate-700/50"><div class="text-slate-400">${ssrInterpolate(copy.value.hud.langSupport)}</div><div class="mt-1 font-bold text-cyan-300">${ssrInterpolate(copy.value.hud.langValue)}</div></div></div><div class="rounded-xl bg-blue-900/40 border border-blue-500/30 p-3 text-[11px] text-blue-200 flex items-center justify-between"><span>${ssrInterpolate(copy.value.hud.inquiryNote)}</span>`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:paper-plane-tilt-bold",
            class: "h-4 w-4 text-blue-400"
          }, null, _parent));
          _push(`</div></div>`);
        } else if (solution.previewType === "checkout") {
          _push(`<div class="mt-4 space-y-3 font-sans text-xs"><div class="rounded-2xl bg-slate-800/80 p-3.5 border border-slate-700/80"><div class="flex items-center justify-between"><span class="font-bold text-white">${ssrInterpolate(copy.value.hud.multiCurrency)}</span><div class="flex items-center gap-1 font-mono text-[10px]"><span class="rounded bg-blue-600 px-1.5 py-0.5 text-white">USD $</span><span class="rounded bg-slate-700 px-1.5 py-0.5 text-slate-300">EUR \u20AC</span><span class="rounded bg-slate-700 px-1.5 py-0.5 text-slate-300">GBP \xA3</span></div></div><div class="mt-3 flex items-center justify-between bg-slate-900/80 rounded-xl p-2.5 border border-slate-700/60"><div class="flex items-center gap-2"><div class="h-8 w-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm"> \u{1F6D2} </div><div><div class="font-bold text-white">Nordic Lounge Chair</div><div class="text-[10px] text-slate-400">Natural Ash / Wool Fabric</div></div></div><div class="text-right font-mono font-bold text-emerald-400 text-sm">$389.00</div></div></div><div class="grid grid-cols-2 gap-2 text-[11px]"><div class="rounded-xl bg-emerald-950/40 border border-emerald-500/30 p-2.5 text-emerald-300"><div class="text-slate-400">${ssrInterpolate(copy.value.hud.platformFeeLabel)}</div><div class="text-lg font-black text-emerald-400">${ssrInterpolate(copy.value.hud.zeroFeeLabel)}</div></div><div class="rounded-xl bg-slate-800/50 border border-slate-700/50 p-2.5"><div class="text-slate-400">${ssrInterpolate(copy.value.hud.ttfbLabel)}</div><div class="text-lg font-black text-amber-400 font-mono">14ms</div></div></div><div class="rounded-xl bg-white text-slate-900 font-bold p-2.5 text-center flex items-center justify-center gap-2 shadow-sm">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:apple-logo-fill",
            class: "h-4 w-4"
          }, null, _parent));
          _push(`<span>${ssrInterpolate(copy.value.hud.expressPay)}</span></div></div>`);
        } else if (solution.previewType === "wholesale-table") {
          _push(`<div class="mt-4 space-y-3 font-sans text-xs"><div class="rounded-2xl bg-slate-800/80 p-3 border border-slate-700/80 overflow-x-auto"><div class="flex items-center justify-between pb-2 mb-2 border-b border-slate-700 text-[11px]"><span class="font-bold text-white">${ssrInterpolate(copy.value.hud.toteMatrix)}</span><span class="rounded bg-indigo-600 px-2 py-0.5 text-[10px] font-bold text-white">${ssrInterpolate(copy.value.hud.bulkPurchase)}</span></div><table class="w-full text-[10px] text-slate-300"><thead><tr class="text-slate-400 border-b border-slate-700/60"><th class="py-1 text-left">${ssrInterpolate(copy.value.hud.colorSize)}</th><th class="py-1 text-center">S</th><th class="py-1 text-center">M</th><th class="py-1 text-center">L</th></tr></thead><tbody><tr class="border-b border-slate-800"><td class="py-1 font-bold text-white">${ssrInterpolate(copy.value.hud.ivory)}</td><td class="py-1 text-center"><span class="bg-slate-700 rounded px-1.5 py-0.5 font-mono text-cyan-300">120</span></td><td class="py-1 text-center"><span class="bg-slate-700 rounded px-1.5 py-0.5 font-mono text-cyan-300">80</span></td><td class="py-1 text-center"><span class="bg-slate-700 rounded px-1.5 py-0.5 font-mono text-cyan-300">60</span></td></tr><tr><td class="py-1 font-bold text-white">${ssrInterpolate(copy.value.hud.deepBlue)}</td><td class="py-1 text-center"><span class="bg-slate-700 rounded px-1.5 py-0.5 font-mono text-cyan-300">50</span></td><td class="py-1 text-center"><span class="bg-slate-700 rounded px-1.5 py-0.5 font-mono text-cyan-300">40</span></td><td class="py-1 text-center"><span class="bg-slate-700 rounded px-1.5 py-0.5 font-mono text-cyan-300">30</span></td></tr></tbody></table></div><div class="rounded-xl bg-indigo-950/50 border border-indigo-500/30 p-3 text-[11px] flex items-center justify-between text-indigo-200"><div><div class="font-bold text-white">${ssrInterpolate(copy.value.hud.totalItems)}</div><div class="text-[10px] text-indigo-300">${ssrInterpolate(copy.value.hud.tierReached)}</div></div><span class="rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-bold text-white">${ssrInterpolate(copy.value.hud.addAll)}</span></div></div>`);
        } else if (solution.previewType === "amazon-funnel") {
          _push(`<div class="mt-4 space-y-3 font-sans text-xs"><div class="space-y-2"><div class="rounded-xl bg-slate-800/80 p-2.5 border border-slate-700/80 flex items-center justify-between text-[11px]"><div class="flex items-center gap-2"><span class="h-2 w-2 rounded-full bg-amber-400"></span><span class="text-slate-300">${ssrInterpolate(copy.value.hud.socialStep)}</span></div><span class="font-mono text-amber-300 font-bold">${ssrInterpolate(copy.value.hud.visitors)}</span></div><div class="rounded-xl bg-slate-800/80 p-2.5 border border-slate-700/80 flex items-center justify-between text-[11px]"><div class="flex items-center gap-2"><span class="h-2 w-2 rounded-full bg-cyan-400"></span><span class="text-slate-300">${ssrInterpolate(copy.value.hud.landingStep)}</span></div><span class="font-mono text-cyan-300 font-bold">${ssrInterpolate(copy.value.hud.couponRate)}</span></div><div class="rounded-xl bg-slate-800/80 p-2.5 border border-slate-700/80 flex items-center justify-between text-[11px]"><div class="flex items-center gap-2"><span class="h-2 w-2 rounded-full bg-emerald-400"></span><span class="text-slate-300">${ssrInterpolate(copy.value.hud.listingStep)}</span></div><span class="font-mono text-emerald-400 font-bold">${ssrInterpolate(copy.value.hud.bsrTop)}</span></div><div class="rounded-xl bg-blue-900/40 border border-blue-500/40 p-2.5 flex items-center justify-between text-[11px] text-blue-200"><span>${ssrInterpolate(copy.value.hud.crmStep)}</span>`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:users-four-bold",
            class: "h-4 w-4 text-blue-300"
          }, null, _parent));
          _push(`</div></div></div>`);
        } else if (solution.previewType === "custom-code") {
          _push(`<div class="mt-4 space-y-3 font-mono text-xs"><div class="rounded-2xl bg-black/60 p-3 border border-slate-800 space-y-1.5 text-[11px]"><div class="text-cyan-400">$ shoply kernel --specs</div><div class="text-slate-400">Kernel: <span class="text-white">Go 1.22 Goroutine Engine</span></div><div class="text-slate-400">Database: <span class="text-white">PostgreSQL 18 + Redis 8</span></div><div class="text-slate-400">Throughput: <span class="text-emerald-400 font-bold">12,800+ QPS</span></div><div class="text-slate-400">Memory: <span class="text-amber-400 font-bold">64MB Lightweight</span></div><div class="text-slate-400">Deployment: <span class="text-cyan-300">Docker / Podman / K8s</span></div></div><div class="rounded-xl bg-cyan-950/40 border border-cyan-500/30 p-2.5 text-[11px] text-cyan-200 flex items-center justify-between"><span>${ssrInterpolate(copy.value.hud.erpNote)}</span>`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:plugs-connected-bold",
            class: "h-4 w-4 text-cyan-400"
          }, null, _parent));
          _push(`</div></div>`);
        } else if (solution.previewType === "migration") {
          _push(`<div class="mt-4 space-y-3 font-sans text-xs"><div class="rounded-2xl bg-slate-800/80 p-3.5 border border-slate-700/80"><div class="flex items-center justify-between text-[11px]"><span class="font-bold text-white">${ssrInterpolate(copy.value.hud.migrationStatus)}</span><span class="font-mono text-emerald-400 font-bold">${ssrInterpolate(copy.value.hud.migrationDone)}</span></div><div class="mt-2.5 w-full bg-slate-700 h-2 rounded-full overflow-hidden"><div class="bg-gradient-to-r from-emerald-500 to-cyan-400 h-full w-full rounded-full"></div></div><div class="mt-3 grid grid-cols-3 gap-2 text-center text-[10px]"><div class="rounded bg-slate-900/60 p-1.5 border border-slate-700"><div class="font-mono font-bold text-white">12,450</div><div class="text-slate-400">${ssrInterpolate(copy.value.hud.productsSkus)}</div></div><div class="rounded bg-slate-900/60 p-1.5 border border-slate-700"><div class="font-mono font-bold text-white">8,600+</div><div class="text-slate-400">${ssrInterpolate(copy.value.hud.members)}</div></div><div class="rounded bg-slate-900/60 p-1.5 border border-slate-700"><div class="font-mono font-bold text-emerald-400">${ssrInterpolate(copy.value.hud.zeroDowntime)}</div><div class="text-slate-400">${ssrInterpolate(copy.value.hud.smoothTransition)}</div></div></div></div><div class="rounded-xl bg-rose-950/40 border border-rose-500/30 p-2.5 text-[11px] text-rose-200 flex items-center justify-between"><span>${ssrInterpolate(copy.value.hud.seoProtect)}</span>`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:shield-check-bold",
            class: "h-4 w-4 text-rose-300"
          }, null, _parent));
          _push(`</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400 font-mono"><span>DEPLOYED ON SHOPLY ENGINE</span><span class="text-emerald-400 flex items-center gap-1"><span class="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span> SYSTEM STABLE </span></div></div></div></div></article>`);
      });
      _push(`<!--]--></div></section><section class="py-20 sm:py-28 bg-white border-t border-slate-200/80"><div class="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12"><div class="text-center max-w-3xl mx-auto"><span class="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3.5 py-1.5 text-xs font-bold text-blue-700">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:arrows-split-bold",
        class: "h-3.5 w-3.5"
      }, null, _parent));
      _push(` ${ssrInterpolate(copy.value.matrix.guide)}</span><h2 class="mt-4 text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">${ssrInterpolate(copy.value.matrix.title)}</h2><p class="mt-3 text-base text-slate-600">${ssrInterpolate(copy.value.matrix.desc)}</p></div><div class="mt-12 overflow-x-auto rounded-3xl border border-slate-200 shadow-sm"><table class="w-full text-left text-sm border-collapse min-w-[760px]"><thead><tr class="bg-slate-50/80 text-xs font-bold text-slate-500 border-b border-slate-200 uppercase tracking-wider"><th class="p-4 sm:p-5">${ssrInterpolate(copy.value.matrix.headers[0])}</th><th class="p-4 sm:p-5">${ssrInterpolate(copy.value.matrix.headers[1])}</th><th class="p-4 sm:p-5">${ssrInterpolate(copy.value.matrix.headers[2])}</th><th class="p-4 sm:p-5">${ssrInterpolate(copy.value.matrix.headers[3])}</th><th class="p-4 sm:p-5">${ssrInterpolate(copy.value.matrix.headers[4])}</th><th class="p-4 sm:p-5 text-right">${ssrInterpolate(copy.value.matrix.headers[5])}</th></tr></thead><tbody class="divide-y divide-slate-100"><!--[-->`);
      ssrRenderList(solutionComparisonRows.value, (row, idx) => {
        _push(`<tr class="${ssrRenderClass([idx % 2 === 1 ? "bg-slate-50/40" : "bg-white", "hover:bg-blue-50/30 transition-colors"])}"><td class="p-4 sm:p-5 font-bold text-slate-900">${ssrInterpolate(row.scenario)}</td><td class="p-4 sm:p-5 text-slate-600">${ssrInterpolate(row.model)}</td><td class="p-4 sm:p-5 text-slate-600">${ssrInterpolate(row.targetBuyer)}</td><td class="p-4 sm:p-5 text-slate-600 text-xs">${ssrInterpolate(row.paymentMode)}</td><td class="p-4 sm:p-5 text-slate-700 text-xs font-medium">${ssrInterpolate(row.coreCapability)}</td><td class="p-4 sm:p-5 text-right font-bold text-blue-600">${ssrInterpolate(row.recommendedPlan)}</td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div></section><section class="relative isolate overflow-hidden bg-gradient-to-b from-[#2678ff] to-[#155fc8] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12 text-center"><div class="mx-auto max-w-4xl"><h2 class="text-3xl sm:text-5xl font-black tracking-tight leading-tight">${ssrInterpolate(copy.value.bottom.title)}</h2><p class="mt-5 text-base sm:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">${ssrInterpolate(copy.value.bottom.desc)}</p><div class="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4"><a${ssrRenderAttr("href", unref(signUpUrl))} class="group inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full bg-white px-8 py-4 text-base font-extrabold text-blue-600 shadow-xl hover:shadow-2xl transition-all duration-200 active:scale-95"><span>${ssrInterpolate(copy.value.bottom.primary)}</span>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:arrow-right-bold",
        class: "h-5 w-5 transition-transform group-hover:translate-x-1"
      }, null, _parent));
      _push(`</a><button type="button" class="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-sm hover:bg-white/20 transition-all duration-200 active:scale-95">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:calendar-check-bold",
        class: "h-5 w-5 text-amber-300"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(copy.value.bottom.secondary)}</span></button></div></div></section>`);
      _push(ssrRenderComponent(_component_UModal, {
        open: isConsultOpen.value,
        "onUpdate:open": ($event) => isConsultOpen.value = $event,
        ui: { content: "w-[calc(100vw-2rem)] max-w-lg rounded-3xl" }
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-h-[85vh] overflow-y-auto p-6 sm:p-7"${_scopeId}><div class="flex items-start justify-between gap-4 pb-4 border-b border-slate-100"${_scopeId}><div${_scopeId}><h3 class="text-lg font-bold text-slate-900"${_scopeId}>${ssrInterpolate(copy.value.consult.title)}</h3><p class="text-xs text-slate-500 mt-1"${_scopeId}>${ssrInterpolate(copy.value.consult.description)}</p></div>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              icon: "ph:x-bold",
              size: "sm",
              class: "shrink-0 rounded-full",
              "aria-label": _ctx.$t("shoply.nav.closeMenu"),
              onClick: ($event) => isConsultOpen.value = false
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-6"${_scopeId}>`);
            _push2(ssrRenderComponent(ShoplyLeadForm, {
              source: `solutions-${activeConsultScene.value}`,
              "demand-placeholder": demandPlaceholder.value
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "max-h-[85vh] overflow-y-auto p-6 sm:p-7" }, [
                createVNode("div", { class: "flex items-start justify-between gap-4 pb-4 border-b border-slate-100" }, [
                  createVNode("div", null, [
                    createVNode("h3", { class: "text-lg font-bold text-slate-900" }, toDisplayString(copy.value.consult.title), 1),
                    createVNode("p", { class: "text-xs text-slate-500 mt-1" }, toDisplayString(copy.value.consult.description), 1)
                  ]),
                  createVNode(_component_UButton, {
                    color: "neutral",
                    variant: "ghost",
                    icon: "ph:x-bold",
                    size: "sm",
                    class: "shrink-0 rounded-full",
                    "aria-label": _ctx.$t("shoply.nav.closeMenu"),
                    onClick: ($event) => isConsultOpen.value = false
                  }, null, 8, ["aria-label", "onClick"])
                ]),
                createVNode("div", { class: "mt-6" }, [
                  createVNode(ShoplyLeadForm, {
                    source: `solutions-${activeConsultScene.value}`,
                    "demand-placeholder": demandPlaceholder.value
                  }, null, 8, ["source", "demand-placeholder"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shoply/pages/solutions/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-_6d5GcFk.mjs.map
