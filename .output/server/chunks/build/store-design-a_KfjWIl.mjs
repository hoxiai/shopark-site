import { u as useI18n, D as useLocaleRouter, bg as useSeoMeta, _ as _sfc_main$W, O as __nuxt_component_3$4 } from './server.mjs';
import __nuxt_component_1 from './PageCta-BrOq22xB.mjs';
import { defineComponent, computed, ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { u as useShoplyAuthLinks } from './useShoplyAuthLinks-1qS_J9sZ.mjs';
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

const storeDesignLocales = {
  zh: {
    seo: {
      title: "AI \u53EF\u89C6\u5316\u88C5\u4FEE",
      description: "\u8F7B\u94FA\u7684 AI \u53EF\u89C6\u5316\u88C5\u4FEE\u5DE5\u4F5C\u53F0\u76F4\u63A5\u5728\u771F\u5B9E\u5E97\u94FA\u9875\u9762\u4E0A\u7F16\u8F91\uFF1A\u652F\u6301 AI \u667A\u80FD\u63A8\u8350\u914D\u8272\u4E0E\u5E03\u5C40\uFF0C\u62D6\u62FD\u8C03\u6574\u533A\u5757\u987A\u5E8F\uFF0C\u70B9\u5F00\u5373\u6539\u6587\u5B57\u4E0E\u56FE\u7247\uFF0C53 \u79CD\u5185\u5BB9\u533A\u5757\u4E0E 14 \u5957\u9875\u9762\u6A21\u677F\uFF0C76 \u9879\u4E3B\u9898\u8BBE\u7F6E\u4E00\u5904\u6539\u5168\u7AD9\u3002\u6539\u52A8\u5148\u8FDB\u8349\u7A3F\uFF0C\u786E\u8BA4\u53D1\u5E03\u987E\u5BA2\u624D\u770B\u5F97\u5230\uFF0C\u6BCF\u6B21\u53D1\u5E03\u7559\u53EF\u6062\u590D\u7684\u5FEB\u7167\u3002",
      keywords: "AI\u53EF\u89C6\u5316\u88C5\u4FEE,AI\u5E97\u94FA\u88C5\u4FEE,\u72EC\u7ACB\u7AD9\u8BBE\u8BA1,\u53EF\u89C6\u5316\u88C5\u4FEE"
    },
    hero: {
      badge: "AI \u53EF\u89C6\u5316\u88C5\u4FEE",
      titleMain: "AI \u667A\u80FD\u6392\u7248\uFF0C",
      titleHighlight: "\u5982\u642D\u79EF\u6728\u822C\u81EA\u7531\u6784\u5EFA",
      description: "\u771F\u5B9E\u7EC4\u4EF6\u5B9E\u65F6\u6E32\u67D3\uFF0CAI \u4E00\u952E\u5339\u914D\u51FA\u6D77\u8272\u7CFB\u4E0E\u9AD8\u8F6C\u5316\u6392\u7248\u3002\u6539\u52A8\u5148\u8FDB\u8349\u7A3F\uFF0C\u53D1\u5E03\u81EA\u52A8\u5F52\u6863\u5386\u53F2\u5FEB\u7167\u3002",
      primaryCta: "\u514D\u8D39\u5F00\u5E97\u8BD5\u8BD5",
      secondaryCta: "\u6D4F\u89C8\u4E3B\u9898",
      canvasTitle: "AI \u88C5\u4FEE\u5DE5\u4F5C\u53F0",
      canvasHint: "\u5DE6\u8FB9\u667A\u80FD\u533A\u5757\u5E93\uFF0C\u4E2D\u95F4\u771F\u5B9E\u9875\u9762\uFF0C\u652F\u6301 AI \u4E00\u952E\u667A\u80FD\u6392\u7248\u4E0E\u6362\u8272",
      canvasBlocks: ["\u9996\u5C4F\u6A2A\u5E45", "\u7279\u8272\u5546\u54C1", "\u56FE\u6587\u4ECB\u7ECD", "\u5BA2\u6237\u8BC4\u4EF7", "\u5E38\u89C1\u95EE\u9898"],
      canvasDrag: "\u62D6\u52A8\u8C03\u6574\u987A\u5E8F",
      pills: ["53 \u79CD\u539F\u5B50\u533A\u5757", "8 \u5957 AI \u667A\u80FD\u8272\u7CFB", "\u72EC\u7ACB\u8349\u7A3F\u5FEB\u7167", "\u4E09\u7AEF\u81EA\u9002\u5E94"]
    },
    editor: {
      layoutGrid: "\u7206\u6B3E\u7F51\u683C",
      layoutFocus: "\u6C89\u6D78\u7126\u70B9",
      aiRestyle: "AI \u6362\u88C5",
      inlineEdit: "\u70B9\u5F00\u5373\u6539",
      aiProductPick: "AI \u9009\u54C1",
      moreBlocks: "\u66F4\u591A\u539F\u5B50\u533A\u5757",
      draftNote: "\u6539\u52A8\u5148\u8FDB\u9694\u79BB\u8349\u7A3F \xB7 \u7EBF\u4E0A\u5FEB\u7167\u4FDD\u62A4",
      liveHint: "\u70B9\u51FB\u4E0A\u65B9\u6309\u94AE\u5373\u523B\u4F53\u9A8C\u4EA4\u4E92 \u2191",
      themeNames: ["\u6781\u5BA2\u79D1\u6280\u84DD", "\u66DC\u77F3\u6781\u7B80\u9ED1\u91D1", "\u5C71\u7CFB\u6237\u5916\u68EE\u7EFF"]
    },
    atomic: {
      title: "53 \u79CD\u539F\u5B50\u7EA7\u7535\u5546\u533A\u5757\uFF0C\u81EA\u7531\u7EC4\u5408\u9AD8\u8F6C\u5316\u9875\u9762",
      description: "\u8986\u76D6\u4ECE\u9996\u5C4F\u5438\u5F15\u3001\u5546\u54C1\u4FC3\u5355\u3001\u793E\u4EA4\u80CC\u4E66\u5230\u987A\u7545\u7ED3\u7B97\u7684\u5168\u94FE\u8DEF\u9AD8\u9891\u573A\u666F\u3002\u5168\u5957\u7EC4\u4EF6\u5747\u7531\u539F\u751F Go \u5F15\u64CE\u9884\u7F16\u8BD1\uFF0C0 \u81C3\u80BF\u8FD0\u884C\u65F6\u3002",
      specNative: "Go \u539F\u751F HTML \u6E32\u67D3",
      specFlex: "100% \u5F39\u6027\u76D2\u6D41\u5F0F\u54CD\u5E94\u5F0F",
      specXss: "XSS \u767D\u540D\u5355\u6DF1\u5EA6\u6E05\u6D17",
      categories: [
        {
          id: "hero",
          name: "\u9996\u5C4F\u4E0E\u6838\u5FC3\u8F6C\u5316",
          blocks: [
            { name: "\u5168\u5C4F\u7834\u98CE\u6A2A\u5E45", desc: "\u9996\u5C4F LCP \u4F18\u5316\uFF0C\u652F\u6301\u9AD8\u8D28\u91CF\u89C6\u9891\u80CC\u666F\u4E0E\u591A\u7EF4 CTA \u6309\u94AE" },
            { name: "\u52A8\u6001\u9650\u65F6\u5012\u8BA1\u65F6", desc: "\u51FA\u6D77\u7206\u6B3E\u9AD8\u9891\u4FC3\u5355\u5229\u5668\uFF0C\u9AD8\u7CBE\u5EA6\u65F6\u533A\u81EA\u9002\u5E94" },
            { name: "\u4FE1\u4EFB\u516C\u544A\u8DD1\u9A6C\u706F", desc: "\u5168\u7AD9\u5E7F\u64AD\u5168\u7403\u5305\u90AE\u4E0E\u9000\u8D27\u653F\u7B56\uFF0C\u5E73\u6ED1\u65E0\u9650\u8F6E\u64AD" },
            { name: "\u6C89\u6D78\u5355\u54C1\u805A\u7126\u5361", desc: "\u4E3B\u63A8\u6B3E 1 \u5BF9 1 \u6DF1\u5EA6\u5448\u73B0\uFF0C\u652F\u6301\u4E00\u952E\u52A0\u5165\u8D2D\u7269\u8F66" }
          ]
        },
        {
          id: "products",
          name: "\u5546\u54C1\u4E0E\u96C6\u5408\u5C55\u793A",
          blocks: [
            { name: "\u591A\u56FE\u7126\u70B9\u8F6E\u64AD", desc: "\u89E6\u5C4F\u6ED1\u52A8\u4E0E\u9F20\u6807\u60AC\u505C\u5207\u6362\uFF0C\u591A\u89D2\u5EA6\u5C55\u73B0\u4EA7\u54C1\u7EC6\u8282" },
            { name: "\u8272\u5757\u4E0E\u5C3A\u7801\u8054\u52A8\u5668", desc: "\u4E0E\u5546\u54C1 SKU \u5B9E\u65F6\u540C\u6B65\uFF0C\u65E0\u611F\u5207\u6362\u53D8\u4F53\u4E0E\u5E93\u5B58\u72B6\u6001" },
            { name: "\u7EC4\u5408\u642D\u914D\u52A0\u8D2D (Bundle)", desc: "\u667A\u80FD\u7EC4\u5408\u4FC3\u9500\uFF0C\u81EA\u52A8\u8BA1\u7B97\u4F18\u60E0\u5E76\u63D0\u5347\u5BA2\u5355\u4EF7" },
            { name: "\u731C\u4F60\u559C\u6B22\u667A\u80FD\u63A8\u8350", desc: "\u6309\u6D4F\u89C8\u8DEF\u5F84\u4E0E\u54C1\u7C7B\u81EA\u52A8\u5173\u8054\uFF0C\u589E\u52A0\u9875\u9762\u6D4F\u89C8\u6DF1\u5EA6" }
          ]
        },
        {
          id: "media",
          name: "\u56FE\u6587\u4E0E\u5A92\u4F53\u6545\u4E8B",
          blocks: [
            { name: "Before/After \u5BF9\u6BD4\u6ED1\u5757", desc: "\u62D6\u52A8\u6ED1\u5757\u76F4\u89C2\u5BF9\u6BD4\u4F7F\u7528\u524D\u540E\u5DEE\u5F02\uFF0C\u5F3A\u5316\u4EA7\u54C1\u8BF4\u670D\u529B" },
            { name: "\u4E70\u5BB6\u5F00\u7BB1\u7011\u5E03\u6D41", desc: "UGC \u77ED\u89C6\u9891\u4E0E\u5B9E\u62CD\u56FE\u7011\u5E03\u5448\u73B0\uFF0C\u589E\u5F3A\u771F\u5B9E\u51FA\u6D77\u4FE1\u4EFB" },
            { name: "\u54C1\u724C\u53D1\u5C55\u91CC\u7A0B\u7891", desc: "\u65F6\u5149\u8F74\u8BB2\u8FF0\u54C1\u724C\u5386\u7A0B\u4E0E\u8BBE\u8BA1\u7406\u5FF5\uFF0C\u63D0\u5347\u54C1\u724C\u6EA2\u4EF7" },
            { name: "\u5E38\u89C1\u95EE\u9898\u4EA4\u4E92\u6298\u53E0", desc: "\u89E3\u7B54\u4E70\u5BB6\u552E\u524D\u7591\u8651\uFF0C\u652F\u6301\u7ED3\u6784\u5316 FAQ \u641C\u7D22\u5F15\u64CE\u6807\u8BB0" }
          ]
        },
        {
          id: "trust",
          name: "\u51FA\u6D77\u4FE1\u4EFB\u4E0E\u5408\u89C4",
          blocks: [
            { name: "Trustpilot \u8BC4\u5206\u5899", desc: "\u5BF9\u63A5\u6743\u5A01\u4E09\u65B9\u4E70\u5BB6\u771F\u5B9E\u8BC4\u5206\u4E0E\u661F\u7EA7\uFF0C\u51FA\u6D77\u8F6C\u5316\u57FA\u77F3" },
            { name: "\u5168\u7403\u5B89\u5168\u652F\u4ED8\u5FBD\u7AE0", desc: "Visa/Master/PayPal/ApplePay \u4E00\u5E94\u4FF1\u5168\uFF0C\u6D88\u9664\u652F\u4ED8\u7591\u8651" },
            { name: "\u591A\u8D27\u5E01\u6C47\u7387\u6362\u7B97\u5668", desc: "\u6839\u636E\u4E70\u5BB6 IP \u81EA\u52A8\u8F6C\u6362\u672C\u571F\u8D27\u5E01\u4E0E\u683C\u5F0F\uFF0C\u7ED3\u7B97\u65E0\u5FE7" },
            { name: "\u5168\u7403\u53D1\u8D27\u65F6\u6548\u8BA1\u7B97", desc: "\u8F93\u5165\u76EE\u7684\u5730\u5B9E\u65F6\u9884\u4F30\u59A5\u6295\u65F6\u95F4\uFF0C\u589E\u5F3A\u4E0B\u5355\u786E\u5B9A\u6027" }
          ]
        }
      ]
    },
    features: {
      title: "\u5B83\u5177\u4F53\u80FD\u505A\u4EC0\u4E48",
      subtitle: "\u4E0B\u9762\u6BCF\u4E00\u6761\u90FD\u662F\u73B0\u5728\u5C31\u80FD\u7528\u7684",
      items: [
        {
          icon: "ph:hand-grabbing-bold",
          title: "\u62D6\u62FD\u6392\u5E8F\uFF0C\u70B9\u5F00\u6539\u5B57",
          desc: "\u4ECE\u533A\u5757\u5E93\u62D6\u5230\u9875\u9762\u4EFB\u610F\u63D2\u5165\u4F4D\u7F6E\uFF0C\u4E5F\u80FD\u62D6\u8FDB\u5BB9\u5668\u4E0E\u6805\u683C\uFF1B\u9F20\u6807\u548C\u89E6\u5C4F\u957F\u6309\u90FD\u652F\u6301\uFF0C\u4E0D\u60F3\u62D6\u8FD8\u6709\u4E0A\u4E0B\u79FB\u52A8\u6309\u94AE\u300259 \u4E2A\u5E38\u7528\u5B57\u6BB5\u652F\u6301\u5728\u753B\u5E03\u4E0A\u76F4\u63A5\u70B9\u5F00\u5C31\u6539\uFF0C\u4E0D\u7528\u53BB\u8868\u5355\u91CC\u6765\u56DE\u627E\u3002\u64A4\u9500\u91CD\u505A\u3001\u8DE8\u9875\u590D\u5236\u7C98\u8D34\u3001\u591A\u9009\u90FD\u6709\u3002"
        },
        {
          icon: "ph:squares-four-bold",
          title: "53 \u79CD\u5185\u5BB9\u533A\u5757\uFF0C14 \u5957\u9875\u9762\u6A21\u677F",
          desc: "\u9996\u5C4F\u6A2A\u5E45\u3001\u5546\u54C1\u4E0E\u5185\u5BB9\u3001\u56FE\u6587\u5A92\u4F53\u3001\u4FE1\u4EFB\u8BF4\u660E\u3001\u8425\u9500\u8F6C\u5316\u3001\u57FA\u7840\u5E03\u5C40\u516D\u7C7B\u533A\u5757\u81EA\u7531\u7EC4\u5408\uFF1B\u5546\u54C1\u8BE6\u60C5\u3001\u5546\u54C1\u5217\u8868\u3001\u641C\u7D22\u7ED3\u679C\u3001\u6587\u7AE0\u8BE6\u60C5\u3001\u8D2D\u7269\u8F66\u3001\u7ED3\u7B97\u3001\u652F\u4ED8\u5B8C\u6210\u7B49\u9875\u9762\u53E6\u6709\u5BF9\u5E94\u7684\u6574\u9875\u6A21\u677F\u3002"
        },
        {
          icon: "ph:palette-bold",
          title: "76 \u9879\u4E3B\u9898\u8BBE\u7F6E\uFF0C\u4E00\u5904\u6539\u5168\u7AD9",
          desc: "\u57FA\u7840\u914D\u8272\u4E0E\u6700\u591A 8 \u5957\u8272\u7CFB\u30018 \u79CD\u5B57\u4F53\u3001\u5B57\u53F7\u5B57\u91CD\u884C\u9AD8\u3001\u9875\u9762\u5BBD\u5EA6\u3001\u533A\u5757\u95F4\u8DDD\u3001\u5706\u89D2\u4E0E\u9634\u5F71\u3001\u6392\u5E03\u5BC6\u5EA6\u3001\u9875\u5934\u9875\u811A\u4E0E\u9996\u5C4F\u51E0\u4F55\u300111 \u9879\u5546\u54C1\u5361\u5F00\u5173\u3002\u7248\u5757\u6807\u9898\u98CE\u683C\u4E00\u4E2A\u8BBE\u7F6E\u5C31\u6539\u6389 24 \u79CD\u533A\u5757\u7684\u6807\u9898\u3002"
        },
        {
          icon: "ph:database-bold",
          title: "\u7ED1\u7684\u662F\u771F\u5B9E\u6570\u636E\uFF0C\u4E0D\u662F\u5360\u4F4D\u56FE",
          desc: "\u5546\u54C1\u3001\u5206\u7C7B\u3001\u96C6\u5408\u3001\u6587\u7AE0\u3001\u8BC4\u4EF7\u3001\u4F18\u60E0\u5238\u3001\u4FC3\u9500\u8FD9\u4E9B\u533A\u5757\u53D6\u7684\u662F\u5E97\u91CC\u7684\u771F\u5B9E\u6570\u636E\uFF0C\u7F16\u8F91\u65F6\u770B\u5230\u4EC0\u4E48\uFF0C\u987E\u5BA2\u5C31\u770B\u5230\u4EC0\u4E48\u3002\u670D\u52A1\u7AEF\u5728\u9996\u5C4F\u5C31\u628A\u5185\u5BB9\u6E32\u67D3\u51FA\u6765\uFF0C\u5BF9\u6536\u5F55\u53CB\u597D\u3002"
        },
        {
          icon: "ph:shield-check-bold",
          title: "\u8349\u7A3F\u4E0E\u7EBF\u4E0A\u5206\u5F00\uFF0C\u53D1\u5E03\u7559\u5FEB\u7167",
          desc: "\u4FDD\u5B58\u53EA\u5199\u8349\u7A3F\uFF0C\u987E\u5BA2\u770B\u5230\u7684\u4ECD\u662F\u4E0A\u4E00\u4E2A\u5DF2\u53D1\u5E03\u7248\u672C\u3002\u6BCF\u6B21\u53D1\u5E03\u90FD\u7559\u4E00\u4EFD\u4E0D\u53EF\u6539\u7684\u5FEB\u7167\uFF0C\u53EF\u4EE5\u6062\u590D\u2014\u2014\u6062\u590D\u4F1A\u751F\u6210\u4E00\u4EFD\u65B0\u8349\u7A3F\uFF0C\u9700\u8981\u4F60\u518D\u786E\u8BA4\u53D1\u5E03\u4E00\u6B21\uFF0C\u4E0D\u4F1A\u6709\u4EBA\u8BEF\u70B9\u4E00\u4E0B\u5C31\u6539\u4E86\u7EBF\u4E0A\u3002\u591A\u4EBA\u540C\u65F6\u6539\u4F1A\u63D0\u793A\u7248\u672C\u51B2\u7A81\uFF0C\u4E0D\u4F1A\u9759\u9ED8\u8986\u76D6\u3002"
        },
        {
          icon: "ph:devices-bold",
          title: "\u684C\u9762\u3001\u5E73\u677F\u3001\u624B\u673A\u4E09\u6863\u9884\u89C8",
          desc: "\u540C\u4E00\u4EFD\u5185\u5BB9\u81EA\u9002\u5E94\u4E09\u79CD\u5C4F\u5E55\uFF0C\u7F16\u8F91\u5668\u91CC\u53EF\u4EE5\u5207\u7740\u770B\u3002\u9700\u8981\u533A\u522B\u5BF9\u5F85\u7684\u5730\u65B9\u53EF\u4EE5\u5355\u72EC\u6765\uFF1A\u79FB\u52A8\u7AEF\u5355\u72EC\u8BBE\u56FE\u3001\u5355\u72EC\u8BBE\u5217\u6570\uFF0C\u67D0\u4E2A\u533A\u5757\u4E5F\u53EF\u4EE5\u6309\u7AEF\u9690\u85CF\u3002"
        }
      ]
    },
    flow: {
      title: "\u4ECE\u96F6\u5230\u4E0A\u7EBF\uFF0C\u56DB\u6B65",
      badge: "\u6807\u51C6\u5316\u4E0A\u7EBF\u6D41\u6C34\u7EBF",
      steps: [
        { step: "01", title: "\u9009\u4E00\u5957\u4E3B\u9898", desc: "\u591A\u5957\u4E3B\u9898\u53EF\u4EE5\u5207\u6362\uFF0C\u6BCF\u5957\u5404\u81EA\u4FDD\u7559\u81EA\u5DF1\u7684\u88C5\u4FEE\u5185\u5BB9\u2014\u2014\u5207\u56DE\u53BB\uFF0C\u4E4B\u524D\u6539\u7684\u8FD8\u5728\u3002" },
        { step: "02", title: "\u642D\u9875\u9762", desc: "\u62D6\u533A\u5757\u3001\u70B9\u5F00\u6539\u6587\u5B57\u548C\u56FE\u7247\uFF0C\u9700\u8981\u7EDF\u4E00\u7684\u5730\u65B9\u53BB\u6539\u4E3B\u9898\u8BBE\u7F6E\u3002" },
        { step: "03", title: "\u4E09\u6863\u770B\u4E00\u904D", desc: "\u684C\u9762\u3001\u5E73\u677F\u3001\u624B\u673A\u5207\u7740\u770B\uFF0C\u79FB\u52A8\u7AEF\u8981\u5355\u72EC\u8BBE\u7684\u56FE\u548C\u5217\u6570\u5728\u8FD9\u4E00\u6B65\u8C03\u3002" },
        { step: "04", title: "\u53D1\u5E03", desc: "\u786E\u8BA4\u540E\u987E\u5BA2\u624D\u770B\u5F97\u5230\uFF0C\u540C\u65F6\u7559\u4E0B\u4E00\u4EFD\u53EF\u4EE5\u6062\u590D\u7684\u5FEB\u7167\u3002" }
      ]
    },
    safety: {
      title: "\u53D1\u5E03\u524D\u4F1A\u88AB\u62E6\u4E0B\u6765\u7684\u4E1C\u897F",
      subtitle: "\u8FD9\u4E9B\u6821\u9A8C\u5728\u670D\u52A1\u7AEF\uFF0C\u4E0D\u662F\u524D\u7AEF\u63D0\u793A\uFF0C\u7ED5\u4E0D\u8FC7\u53BB",
      items: [
        "\u6CA1\u6CE8\u518C\u8FC7\u7684\u533A\u5757\u7C7B\u578B\u3001\u975E\u6CD5\u7684\u5D4C\u5957\u5173\u7CFB\u3001\u4E0D\u8BA4\u8BC6\u7684\u5B57\u6BB5",
        "\u811A\u672C\u3001iframe\u3001\u8868\u5355\u548C javascript: \u94FE\u63A5\u2014\u2014\u81EA\u5B9A\u4E49 HTML \u533A\u5757\u4F1A\u8FC7\u5B89\u5168\u767D\u540D\u5355\u6E05\u6D17",
        "\u4E3B\u9898\u8BBE\u7F6E\u91CC\u5199 CSS\uFF1A\u989C\u8272\u5FC5\u987B\u662F\u5341\u516D\u8FDB\u5236\uFF0C\u5E26\u5206\u53F7\u82B1\u62EC\u53F7\u7684\u503C\u76F4\u63A5\u62D2\u7EDD",
        "\u7248\u672C\u5BF9\u4E0D\u4E0A\u7684\u53D1\u5E03\uFF1A\u522B\u4EBA\u6539\u8FC7\u4E86\u4F1A\u660E\u786E\u51B2\u7A81\uFF0C\u800C\u4E0D\u662F\u76D6\u6389"
      ]
    },
    limits: {
      title: "\u6709\u51E0\u4EF6\u4E8B\u5B83\u73B0\u5728\u505A\u4E0D\u4E86",
      subtitle: "\u5199\u5728\u8FD9\u91CC\u514D\u5F97\u4F60\u4E0A\u624B\u624D\u53D1\u73B0",
      items: [
        { title: "\u4E0D\u662F\u81EA\u7531\u753B\u5E03", desc: "\u533A\u5757\u6309\u4E0A\u4E0B\u987A\u5E8F\u6392\u5E03\uFF0C\u62D6\u62FD\u6539\u7684\u662F\u987A\u5E8F\u548C\u63D2\u5165\u4F4D\u7F6E\u3002\u4E0D\u80FD\u7EDD\u5BF9\u5B9A\u4F4D\uFF0C\u4E5F\u4E0D\u80FD\u62D6\u62FD\u6539\u5BBD\u9AD8\u3002" },
        { title: "\u4E0D\u662F\u4E3A\u624B\u673A\u5355\u72EC\u505A\u4E00\u5957", desc: "\u540C\u4E00\u4EFD\u5185\u5BB9\u54CD\u5E94\u5F0F\u9002\u914D\u4E09\u79CD\u5C4F\u5E55\u3002\u53EF\u4EE5\u5355\u72EC\u8BBE\u56FE\u3001\u8BBE\u5217\u6570\u3001\u6309\u7AEF\u9690\u85CF\uFF0C\u4F46\u4E0D\u662F\u4E24\u5957\u72EC\u7ACB\u7ED3\u6784\u3002" },
        { title: "\u88C5\u4FEE\u5185\u5BB9\u662F\u5355\u8BED\u7684", desc: "\u540C\u4E00\u4E2A\u9875\u9762\u7684\u88C5\u4FEE\u6570\u636E\u4E0D\u6309\u8BED\u8A00\u5206\u7248\u672C\uFF0C\u591A\u8BED\u8A00\u7AD9\u70B9\u7684\u6587\u6848\u9700\u8981\u53E6\u884C\u5B89\u6392\u3002" },
        { title: "\u65B0\u5E97\u5148\u5907\u597D\u56DB\u5904", desc: "\u65B0\u5E97\u5F00\u51FA\u6765\u65F6\uFF0C\u9996\u9875\u3001\u9875\u5934\u3001\u9875\u811A\u4E0E\u4E3B\u9898\u8BBE\u7F6E\u5DF2\u7ECF\u5728\u88C5\u4FEE\u94FE\u8DEF\u4E0A\uFF1B\u5176\u4ED6\u9875\u9762\u5148\u6309\u4E3B\u9898\u81EA\u5E26\u7684\u6A21\u677F\u6E32\u67D3\u3002" }
      ]
    },
    faq: {
      title: "\u5E38\u89C1\u95EE\u9898",
      items: [
        { question: "\u6362\u4E3B\u9898\u4EE5\u540E\uFF0C\u4E4B\u524D\u7684\u88C5\u4FEE\u4F1A\u4E22\u5417\uFF1F", answer: "\u4E0D\u4F1A\u3002\u88C5\u4FEE\u6570\u636E\u6309\u4E3B\u9898\u5206\u522B\u4FDD\u5B58\uFF0C\u6362\u8FC7\u53BB\u662F\u65B0\u4E3B\u9898\u81EA\u5DF1\u7684\u4E00\u4EFD\uFF0C\u5207\u56DE\u6765\u4E4B\u524D\u6539\u7684\u8FD8\u5728\u3002" },
        { question: "\u6211\u4FDD\u5B58\u4E00\u4E0B\uFF0C\u987E\u5BA2\u4F1A\u7ACB\u523B\u770B\u5230\u5417\uFF1F", answer: "\u4E0D\u4F1A\u3002\u4FDD\u5B58\u53EA\u5199\u8349\u7A3F\uFF0C\u987E\u5BA2\u770B\u5230\u7684\u4ECD\u662F\u4E0A\u4E00\u4E2A\u5DF2\u53D1\u5E03\u7684\u7248\u672C\uFF0C\u76F4\u5230\u4F60\u70B9\u53D1\u5E03\u3002" },
        { question: "\u53D1\u5E03\u4E4B\u540E\u53D1\u73B0\u6539\u9519\u4E86\u600E\u4E48\u529E\uFF1F", answer: "\u6BCF\u6B21\u53D1\u5E03\u90FD\u7559\u4E86\u5FEB\u7167\uFF0C\u53EF\u4EE5\u6062\u590D\u3002\u6062\u590D\u51FA\u6765\u7684\u662F\u4E00\u4EFD\u65B0\u8349\u7A3F\uFF0C\u4F60\u786E\u8BA4\u6CA1\u95EE\u9898\u518D\u53D1\u5E03\u4E00\u6B21\u2014\u2014\u8FD9\u6837\u4E0D\u4F1A\u4E00\u952E\u5C31\u628A\u7EBF\u4E0A\u53C8\u6362\u6389\u3002" },
        { question: "\u80FD\u8D34\u81EA\u5B9A\u4E49 HTML \u5417\uFF1F", answer: "\u6709\u4E00\u4E2A HTML \u533A\u5757\u3002\u5185\u5BB9\u4F1A\u7ECF\u8FC7\u5B89\u5168\u767D\u540D\u5355\u6E05\u6D17\uFF0C\u811A\u672C\u3001iframe\u3001\u8868\u5355\u8FD9\u7C7B\u4F1A\u88AB\u79FB\u9664\uFF0C\u6240\u4EE5\u7B2C\u4E09\u65B9\u4EE3\u7801\u7247\u6BB5\u4E0D\u4E00\u5B9A\u80FD\u539F\u6837\u5DE5\u4F5C\u3002" },
        { question: "\u624B\u673A\u7AEF\u8981\u4E0D\u8981\u5355\u72EC\u505A\u4E00\u904D\uFF1F", answer: "\u4E0D\u7528\u3002\u540C\u4E00\u4EFD\u5185\u5BB9\u4F1A\u81EA\u9002\u5E94\uFF0C\u7F16\u8F91\u5668\u91CC\u53EF\u4EE5\u5207\u5230\u624B\u673A\u89C6\u53E3\u786E\u8BA4\u3002\u9700\u8981\u533A\u522B\u5BF9\u5F85\u65F6\uFF0C\u53EF\u4EE5\u4E3A\u79FB\u52A8\u7AEF\u5355\u72EC\u8BBE\u56FE\u7247\u548C\u5217\u6570\uFF0C\u6216\u8005\u628A\u67D0\u4E2A\u533A\u5757\u5728\u624B\u673A\u4E0A\u9690\u85CF\u3002" }
      ]
    },
    cta: {
      title: "\u5F00\u4E00\u5BB6\u5E97\uFF0C\u8FDB\u53BB\u70B9\u4E24\u4E0B\u5C31\u77E5\u9053\u4E86",
      description: "\u514D\u8D39\u7248\u5C31\u80FD\u8FDB\u88C5\u4FEE\u5DE5\u4F5C\u53F0\uFF0C\u5148\u628A\u9996\u9875\u642D\u51FA\u6765\u518D\u8BF4\u3002",
      primary: "\u514D\u8D39\u5F00\u5E97",
      secondary: "\u6D4F\u89C8\u4E3B\u9898"
    }
  },
  en: {
    seo: {
      title: "AI Visual Builder",
      description: "Qingpu's AI-powered design workspace edits your real storefront page: smart layout and color recommendations, drag sections into place, click text to change it, 53 content sections and 14 page templates, 76 theme settings that apply site-wide. Changes stay in a draft until you publish, and every publish keeps a restorable snapshot.",
      keywords: "AI storefront design,AI visual builder,store editor"
    },
    hero: {
      badge: "AI Visual Builder",
      titleMain: "AI-Guided Layouts, ",
      titleHighlight: "Build Like Blocks",
      description: "Real components rendered with store data. AI-assisted color schemes and high-converting layouts with draft protection.",
      primaryCta: "Open a free store",
      secondaryCta: "Browse themes",
      canvasTitle: "AI Design Workspace",
      canvasHint: "Sections on the left, live real page in the middle, AI one-click themes and styling",
      canvasBlocks: ["Hero banner", "Featured products", "Image with text", "Testimonials", "FAQ"],
      canvasDrag: "Drag to reorder",
      pills: ["53 Atomic Blocks", "8 AI Color Schemes", "Draft & Snapshots", "Responsive Viewports"]
    },
    editor: {
      layoutGrid: "Grid mode",
      layoutFocus: "Focus mode",
      aiRestyle: "AI Restyle",
      inlineEdit: "Click to edit",
      aiProductPick: "AI picks",
      moreBlocks: "More blocks",
      draftNote: "Changes go to an isolated draft \xB7 Live site snapshot protected",
      liveHint: "Click the buttons above to try the interaction \u2191",
      themeNames: ["Tech Blue", "Obsidian Black & Gold", "Alpine Forest Green"]
    },
    atomic: {
      title: "53 atomic commerce sections, freely combined into high-converting pages",
      description: "Covering the full journey from first-screen hooks and product promotion to social proof and smooth checkout. Every section is precompiled by the native Go engine with zero runtime bloat.",
      specNative: "Native Go HTML rendering",
      specFlex: "100% flexbox fluid responsive",
      specXss: "Deep XSS allow-list sanitising",
      categories: [
        {
          id: "hero",
          name: "Hero & core conversion",
          blocks: [
            { name: "Full-screen statement banner", desc: "Optimised for first-screen LCP, with HD video backgrounds and multiple CTAs" },
            { name: "Live countdown timer", desc: "A high-frequency booster for winning products, with timezone awareness" },
            { name: "Trust announcement ticker", desc: "Broadcasts worldwide shipping and return policy in a smooth endless loop" },
            { name: "Immersive product spotlight", desc: "Deep one-to-one focus on a hero product, with one-click add to cart" }
          ]
        },
        {
          id: "products",
          name: "Products & collections",
          blocks: [
            { name: "Multi-image focus carousel", desc: "Swipe on touch or hover on desktop to show product detail from every angle" },
            { name: "Swatch & size linker", desc: "Syncs with product SKUs in real time, switching variants and stock instantly" },
            { name: "Bundle add-on", desc: "Smart bundle promotions that calculate the discount and lift average order value" },
            { name: "Recommended for you", desc: "Auto-associates by browsing path and category to deepen page engagement" }
          ]
        },
        {
          id: "media",
          name: "Story & media",
          blocks: [
            { name: "Before/After comparison slider", desc: "Drag the slider to compare before and after and strengthen the product story" },
            { name: "Customer unboxing masonry", desc: "UGC short videos and photos in a masonry grid build authentic trust" },
            { name: "Brand milestones timeline", desc: "A timeline of brand history and design philosophy that raises brand equity" },
            { name: "FAQ accordion", desc: "Answers pre-sale questions and supports structured FAQ markup for search engines" }
          ]
        },
        {
          id: "trust",
          name: "Trust & compliance",
          blocks: [
            { name: "Trustpilot review wall", desc: "Real ratings and star levels from an authoritative third party" },
            { name: "Global secure payment badges", desc: "Visa/Master/PayPal/ApplePay all in one place to remove payment doubts" },
            { name: "Multi-currency converter", desc: "Auto-converts to local currency and format based on buyer IP" },
            { name: "Shipping estimate", desc: "Enter a destination to estimate delivery time and increase purchase certainty" }
          ]
        }
      ]
    },
    features: {
      title: "What it actually does",
      subtitle: "Everything below works today",
      items: [
        {
          icon: "ph:hand-grabbing-bold",
          title: "Drag to place, click to edit",
          desc: "Drag a section from the library to any insertion point, including inside containers and grids. Works with a mouse and with long-press on touch, and there are move up/down buttons if you would rather not drag. 59 common fields can be edited straight on the canvas. Undo/redo, copy-paste across pages and multi-select are all there."
        },
        {
          icon: "ph:squares-four-bold",
          title: "53 content sections, 14 page templates",
          desc: "Six families to combine freely \u2014 hero and banners, products and content, image and media, trust and explanation, marketing and conversion, basic layout. Product detail, product list, search results, article, cart, checkout and thank-you pages each have their own page template."
        },
        {
          icon: "ph:palette-bold",
          title: "76 theme settings, changed once",
          desc: "Core colours plus up to 8 colour schemes, 8 typefaces, size/weight/line-height, page width, section spacing, corner radius and shadow, layout density, header/footer/hero geometry, 11 product-card switches. One heading-style setting restyles the headings of 24 section types at once."
        },
        {
          icon: "ph:database-bold",
          title: "Bound to real data, not placeholders",
          desc: "Product, collection, category, article, review, coupon and promotion sections read your actual store data \u2014 what you see while editing is what customers get. The server renders it into the first response, which search engines can read."
        },
        {
          icon: "ph:shield-check-bold",
          title: "Draft and live are separate; every publish keeps a snapshot",
          desc: "Saving writes to a draft; customers keep seeing the last published version. Every publish stores an immutable snapshot you can restore \u2014 restoring creates a new draft that you publish again, so nobody changes the live site with one click. If someone else edited in the meantime you get a version conflict instead of a silent overwrite."
        },
        {
          icon: "ph:devices-bold",
          title: "Desktop, tablet and phone preview",
          desc: "One set of content adapts to three screens, and you can switch viewports while editing. Where phones need something different, set a separate mobile image, a separate column count, or hide a section on one breakpoint."
        }
      ]
    },
    flow: {
      title: "Four steps to live",
      badge: "Standardised launch pipeline",
      steps: [
        { step: "01", title: "Pick a theme", desc: "Switch between themes freely \u2014 each keeps its own design data, so switching back brings your edits with it." },
        { step: "02", title: "Build the page", desc: "Drag sections in, click text and images to change them, and use theme settings for anything site-wide." },
        { step: "03", title: "Check three widths", desc: "Switch between desktop, tablet and phone. Mobile-specific images and column counts get set here." },
        { step: "04", title: "Publish", desc: "Customers see it only after you publish, and the publish leaves a snapshot you can restore." }
      ]
    },
    safety: {
      title: "What gets rejected before it goes live",
      subtitle: "These checks run on the server, not as a front-end hint",
      items: [
        "Unregistered section types, illegal nesting, unknown fields",
        "Scripts, iframes, forms and javascript: links \u2014 the custom HTML section is sanitised against an allow-list",
        "CSS in theme settings: colours must be hex, and values containing semicolons or braces are refused",
        "Publishes from a stale version: you get a clear conflict instead of overwriting someone"
      ]
    },
    limits: {
      title: "A few things it does not do",
      subtitle: "Better said here than discovered later",
      items: [
        { title: "Not a free canvas", desc: "Sections stack in order; dragging changes the order and the insertion point. There is no absolute positioning and no drag-to-resize." },
        { title: "Not a separate mobile build", desc: "One set of content adapts across widths. You can set a mobile image, a mobile column count or hide a section per breakpoint, but there are not two independent layouts." },
        { title: "Design content is single-language", desc: "A page's design data is not versioned per language, so multilingual copy needs a separate plan." },
        { title: "New stores start with four surfaces", desc: "A new store comes with the home page, header, footer and theme settings on the design pipeline; other pages render from the theme's own templates." }
      ]
    },
    faq: {
      title: "Questions people ask",
      items: [
        { question: "If I switch themes, do I lose my design?", answer: "No. Design data is stored per theme, so the new theme gets its own, and switching back brings your earlier edits with it." },
        { question: "Does saving immediately affect customers?", answer: "No. Saving writes a draft; customers keep seeing the last published version until you publish." },
        { question: "What if I publish something wrong?", answer: "Every publish keeps a snapshot you can restore. Restoring gives you a new draft to review and publish again, so the live site never changes from a single click." },
        { question: "Can I paste custom HTML?", answer: "There is an HTML section. Its content is sanitised against an allow-list \u2014 scripts, iframes and forms are stripped \u2014 so third-party snippets may not work as-is." },
        { question: "Do I have to design the mobile version separately?", answer: "No. The same content adapts, and you can preview the phone viewport while editing. Where it matters, set a mobile-specific image or column count, or hide a section on phones." }
      ]
    },
    cta: {
      title: "Open a store and click around",
      description: "The design workspace is available on the free plan \u2014 start with the home page.",
      primary: "Open a free store",
      secondary: "Browse themes"
    }
  },
  "zh-HK": {
    seo: {
      title: "AI \u53EF\u8996\u5316\u88DD\u4FEE",
      description: "\u8F15\u92EA\u7684 AI \u53EF\u8996\u5316\u88DD\u4FEE\u5DE5\u4F5C\u53F0\u76F4\u63A5\u5728\u771F\u5BE6\u5E97\u92EA\u9801\u9762\u4E0A\u7DE8\u8F2F\uFF1A\u652F\u6301 AI \u667A\u80FD\u63A8\u85A6\u914D\u8272\u8207\u4F48\u5C40\uFF0C\u62D6\u66F3\u8ABF\u6574\u5340\u584A\u9806\u5E8F\uFF0C\u9EDE\u958B\u5373\u6539\u6587\u5B57\u8207\u5716\u7247\uFF0C53 \u7A2E\u5167\u5BB9\u5340\u584A\u8207 14 \u5957\u9801\u9762\u6A21\u677F\uFF0C76 \u9805\u4E3B\u984C\u8A2D\u7F6E\u4E00\u8655\u6539\u5168\u7AD9\u3002\u6539\u52D5\u5148\u9032\u8349\u7A3F\uFF0C\u78BA\u8A8D\u767C\u4F48\u9867\u5BA2\u624D\u770B\u5F97\u5230\uFF0C\u6BCF\u6B21\u767C\u4F48\u7559\u53EF\u6062\u5FA9\u7684\u5FEB\u7167\u3002",
      keywords: "AI\u53EF\u8996\u5316\u88DD\u4FEE,AI\u5E97\u92EA\u88DD\u4FEE,\u7368\u7ACB\u7AD9\u8A2D\u8A08,\u53EF\u8996\u5316\u88DD\u4FEE"
    },
    hero: {
      badge: "AI \u53EF\u8996\u5316\u88DD\u4FEE",
      titleMain: "AI \u667A\u80FD\u6392\u7248\uFF0C",
      titleHighlight: "\u5982\u642D\u7A4D\u6728\u822C\u81EA\u7531\u69CB\u5EFA",
      description: "\u771F\u5BE6\u7D44\u4EF6\u5BE6\u6642\u6E32\u67D3\uFF0CAI \u4E00\u9375\u5339\u914D\u51FA\u6D77\u8272\u7CFB\u8207\u9AD8\u8F49\u5316\u6392\u7248\u3002\u6539\u52D5\u5148\u9032\u8349\u7A3F\uFF0C\u767C\u4F48\u81EA\u52D5\u6B78\u6A94\u6B77\u53F2\u5FEB\u7167\u3002",
      primaryCta: "\u514D\u8CBB\u958B\u5E97\u8A66\u8A66",
      secondaryCta: "\u700F\u89BD\u4E3B\u984C",
      canvasTitle: "AI \u88DD\u4FEE\u5DE5\u4F5C\u53F0",
      canvasHint: "\u5DE6\u908A\u667A\u80FD\u5340\u584A\u5EAB\uFF0C\u4E2D\u9593\u771F\u5BE6\u9801\u9762\uFF0C\u652F\u6301 AI \u4E00\u9375\u667A\u80FD\u6392\u7248\u8207\u63DB\u8272",
      canvasBlocks: ["\u9996\u5C4F\u6A6B\u5E45", "\u7279\u8272\u5546\u54C1", "\u5716\u6587\u4ECB\u7D39", "\u5BA2\u6236\u8A55\u50F9", "\u5E38\u898B\u554F\u984C"],
      canvasDrag: "\u62D6\u52D5\u8ABF\u6574\u9806\u5E8F",
      pills: ["53 \u7A2E\u539F\u5B50\u5340\u584A", "8 \u5957 AI \u667A\u80FD\u8272\u7CFB", "\u7368\u7ACB\u8349\u7A3F\u5FEB\u7167", "\u4E09\u7AEF\u81EA\u9069\u61C9"]
    },
    editor: {
      layoutGrid: "\u7206\u6B3E\u7DB2\u683C",
      layoutFocus: "\u6C89\u6D78\u7126\u9EDE",
      aiRestyle: "AI \u63DB\u88DD",
      inlineEdit: "\u9EDE\u958B\u5373\u6539",
      aiProductPick: "AI \u9078\u54C1",
      moreBlocks: "\u66F4\u591A\u539F\u5B50\u5340\u584A",
      draftNote: "\u6539\u52D5\u5148\u9032\u9694\u96E2\u8349\u7A3F \xB7 \u7DDA\u4E0A\u5FEB\u7167\u4FDD\u8B77",
      liveHint: "\u9EDE\u64CA\u4E0A\u65B9\u6309\u9215\u5373\u523B\u9AD4\u9A57\u4EA4\u4E92 \u2191",
      themeNames: ["\u6975\u5BA2\u79D1\u6280\u85CD", "\u66DC\u77F3\u6975\u7C21\u9ED1\u91D1", "\u5C71\u7CFB\u6236\u5916\u68EE\u7DA0"]
    },
    atomic: {
      title: "53 \u7A2E\u539F\u5B50\u7D1A\u96FB\u5546\u5340\u584A\uFF0C\u81EA\u7531\u7D44\u5408\u9AD8\u8F49\u5316\u9801\u9762",
      description: "\u8986\u84CB\u5F9E\u9996\u5C4F\u5438\u5F15\u3001\u5546\u54C1\u4FC3\u55AE\u3001\u793E\u4EA4\u80CC\u66F8\u5230\u9806\u66A2\u7D50\u7B97\u7684\u5168\u93C8\u8DEF\u9AD8\u983B\u5834\u666F\u3002\u5168\u5957\u7D44\u4EF6\u5747\u7531\u539F\u751F Go \u5F15\u64CE\u9810\u7DE8\u8B6F\uFF0C0 \u81C3\u816B\u904B\u884C\u6642\u3002",
      specNative: "Go \u539F\u751F HTML \u6E32\u67D3",
      specFlex: "100% \u5F48\u6027\u76D2\u6D41\u5F0F\u97FF\u61C9\u5F0F",
      specXss: "XSS \u767D\u540D\u55AE\u6DF1\u5EA6\u6E05\u6D17",
      categories: [
        {
          id: "hero",
          name: "\u9996\u5C4F\u8207\u6838\u5FC3\u8F49\u5316",
          blocks: [
            { name: "\u5168\u5C4F\u7834\u98A8\u6A6B\u5E45", desc: "\u9996\u5C4F LCP \u512A\u5316\uFF0C\u652F\u6301\u9AD8\u8CEA\u91CF\u8996\u983B\u80CC\u666F\u8207\u591A\u7DAD CTA \u6309\u9215" },
            { name: "\u52D5\u614B\u9650\u6642\u5012\u8A08\u6642", desc: "\u51FA\u6D77\u7206\u6B3E\u9AD8\u983B\u4FC3\u55AE\u5229\u5668\uFF0C\u9AD8\u7CBE\u5EA6\u6642\u5340\u81EA\u9069\u61C9" },
            { name: "\u4FE1\u4EFB\u516C\u544A\u8DD1\u99AC\u71C8", desc: "\u5168\u7AD9\u5EE3\u64AD\u5168\u7403\u5305\u90F5\u8207\u9000\u8CA8\u653F\u7B56\uFF0C\u5E73\u6ED1\u7121\u9650\u8F2A\u64AD" },
            { name: "\u6C89\u6D78\u55AE\u54C1\u805A\u7126\u5361", desc: "\u4E3B\u63A8\u6B3E 1 \u5C0D 1 \u6DF1\u5EA6\u5448\u73FE\uFF0C\u652F\u6301\u4E00\u9375\u52A0\u5165\u8CFC\u7269\u8ECA" }
          ]
        },
        {
          id: "products",
          name: "\u5546\u54C1\u8207\u96C6\u5408\u5C55\u793A",
          blocks: [
            { name: "\u591A\u5716\u7126\u9EDE\u8F2A\u64AD", desc: "\u89F8\u5C4F\u6ED1\u52D5\u8207\u9F20\u6A19\u61F8\u505C\u5207\u63DB\uFF0C\u591A\u89D2\u5EA6\u5C55\u73FE\u7522\u54C1\u7D30\u7BC0" },
            { name: "\u8272\u584A\u8207\u5C3A\u78BC\u806F\u52D5\u5668", desc: "\u8207\u5546\u54C1 SKU \u5BE6\u6642\u540C\u6B65\uFF0C\u7121\u611F\u5207\u63DB\u8B8A\u9AD4\u8207\u5EAB\u5B58\u72C0\u614B" },
            { name: "\u7D44\u5408\u642D\u914D\u52A0\u8CFC (Bundle)", desc: "\u667A\u80FD\u7D44\u5408\u4FC3\u92B7\uFF0C\u81EA\u52D5\u8A08\u7B97\u512A\u60E0\u4E26\u63D0\u5347\u5BA2\u55AE\u50F9" },
            { name: "\u731C\u4F60\u559C\u6B61\u667A\u80FD\u63A8\u85A6", desc: "\u6309\u700F\u89BD\u8DEF\u5F91\u8207\u54C1\u985E\u81EA\u52D5\u95DC\u806F\uFF0C\u589E\u52A0\u9801\u9762\u700F\u89BD\u6DF1\u5EA6" }
          ]
        },
        {
          id: "media",
          name: "\u5716\u6587\u8207\u5A92\u9AD4\u6545\u4E8B",
          blocks: [
            { name: "Before/After \u5C0D\u6BD4\u6ED1\u584A", desc: "\u62D6\u52D5\u6ED1\u584A\u76F4\u89C0\u5C0D\u6BD4\u4F7F\u7528\u524D\u5F8C\u5DEE\u7570\uFF0C\u5F37\u5316\u7522\u54C1\u8AAA\u670D\u529B" },
            { name: "\u8CB7\u5BB6\u958B\u7BB1\u7011\u5E03\u6D41", desc: "UGC \u77ED\u8996\u983B\u8207\u5BE6\u62CD\u5716\u7011\u5E03\u5448\u73FE\uFF0C\u589E\u5F37\u771F\u5BE6\u51FA\u6D77\u4FE1\u4EFB" },
            { name: "\u54C1\u724C\u767C\u5C55\u91CC\u7A0B\u7891", desc: "\u6642\u5149\u8EF8\u8B1B\u8FF0\u54C1\u724C\u6B77\u7A0B\u8207\u8A2D\u8A08\u7406\u5FF5\uFF0C\u63D0\u5347\u54C1\u724C\u6EA2\u50F9" },
            { name: "\u5E38\u898B\u554F\u984C\u4EA4\u4E92\u647A\u758A", desc: "\u89E3\u7B54\u8CB7\u5BB6\u552E\u524D\u7591\u616E\uFF0C\u652F\u6301\u7D50\u69CB\u5316 FAQ \u641C\u7D22\u5F15\u64CE\u6A19\u8A18" }
          ]
        },
        {
          id: "trust",
          name: "\u51FA\u6D77\u4FE1\u4EFB\u8207\u5408\u898F",
          blocks: [
            { name: "Trustpilot \u8A55\u5206\u7246", desc: "\u5C0D\u63A5\u6B0A\u5A01\u4E09\u65B9\u8CB7\u5BB6\u771F\u5BE6\u8A55\u5206\u8207\u661F\u7D1A\uFF0C\u51FA\u6D77\u8F49\u5316\u57FA\u77F3" },
            { name: "\u5168\u7403\u5B89\u5168\u652F\u4ED8\u5FBD\u7AE0", desc: "Visa/Master/PayPal/ApplePay \u4E00\u61C9\u4FF1\u5168\uFF0C\u6D88\u9664\u652F\u4ED8\u7591\u616E" },
            { name: "\u591A\u8CA8\u5E63\u532F\u7387\u63DB\u7B97\u5668", desc: "\u6839\u64DA\u8CB7\u5BB6 IP \u81EA\u52D5\u8F49\u63DB\u672C\u571F\u8CA8\u5E63\u8207\u683C\u5F0F\uFF0C\u7D50\u7B97\u7121\u6182" },
            { name: "\u5168\u7403\u767C\u8CA8\u6642\u6548\u8A08\u7B97", desc: "\u8F38\u5165\u76EE\u7684\u5730\u5BE6\u6642\u9810\u4F30\u59A5\u6295\u6642\u9593\uFF0C\u589E\u5F37\u4E0B\u55AE\u78BA\u5B9A\u6027" }
          ]
        }
      ]
    },
    features: {
      title: "\u5B83\u5177\u9AD4\u80FD\u505A\u4EC0\u9EBC",
      subtitle: "\u4E0B\u9762\u6BCF\u4E00\u689D\u90FD\u662F\u73FE\u5728\u5C31\u80FD\u7528\u7684",
      items: [
        {
          icon: "ph:hand-grabbing-bold",
          title: "\u62D6\u66F3\u6392\u5E8F\uFF0C\u9EDE\u958B\u6539\u5B57",
          desc: "\u5F9E\u5340\u584A\u5EAB\u62D6\u5230\u9801\u9762\u4EFB\u610F\u63D2\u5165\u4F4D\u7F6E\uFF0C\u4E5F\u80FD\u62D6\u9032\u5BB9\u5668\u8207\u67F5\u683C\uFF1B\u9F20\u6A19\u548C\u89F8\u5C4F\u9577\u6309\u90FD\u652F\u6301\uFF0C\u4E0D\u60F3\u62D6\u9084\u6709\u4E0A\u4E0B\u79FB\u52D5\u6309\u9215\u300259 \u500B\u5E38\u7528\u5B57\u6BB5\u652F\u6301\u5728\u756B\u5E03\u4E0A\u76F4\u63A5\u9EDE\u958B\u5C31\u6539\uFF0C\u4E0D\u7528\u53BB\u8868\u55AE\u88E1\u4F86\u56DE\u627E\u3002\u64A4\u92B7\u91CD\u505A\u3001\u8DE8\u9801\u8907\u88FD\u7C98\u8CBC\u3001\u591A\u9078\u90FD\u6709\u3002"
        },
        {
          icon: "ph:squares-four-bold",
          title: "53 \u7A2E\u5167\u5BB9\u5340\u584A\uFF0C14 \u5957\u9801\u9762\u6A21\u677F",
          desc: "\u9996\u5C4F\u6A6B\u5E45\u3001\u5546\u54C1\u8207\u5167\u5BB9\u3001\u5716\u6587\u5A92\u9AD4\u3001\u4FE1\u4EFB\u8AAA\u660E\u3001\u71DF\u92B7\u8F49\u5316\u3001\u57FA\u790E\u4F48\u5C40\u516D\u985E\u5340\u584A\u81EA\u7531\u7D44\u5408\uFF1B\u5546\u54C1\u8A73\u60C5\u3001\u5546\u54C1\u5217\u8868\u3001\u641C\u7D22\u7D50\u679C\u3001\u6587\u7AE0\u8A73\u60C5\u3001\u8CFC\u7269\u8ECA\u3001\u7D50\u7B97\u3001\u652F\u4ED8\u5B8C\u6210\u7B49\u9801\u9762\u53E6\u6709\u5C0D\u61C9\u7684\u6574\u9801\u6A21\u677F\u3002"
        },
        {
          icon: "ph:palette-bold",
          title: "76 \u9805\u4E3B\u984C\u8A2D\u7F6E\uFF0C\u4E00\u8655\u6539\u5168\u7AD9",
          desc: "\u57FA\u790E\u914D\u8272\u8207\u6700\u591A 8 \u5957\u8272\u7CFB\u30018 \u7A2E\u5B57\u9AD4\u3001\u5B57\u865F\u5B57\u91CD\u884C\u9AD8\u3001\u9801\u9762\u5BEC\u5EA6\u3001\u5340\u584A\u9593\u8DDD\u3001\u5713\u89D2\u8207\u9670\u5F71\u3001\u6392\u5E03\u5BC6\u5EA6\u3001\u9801\u982D\u9801\u8173\u8207\u9996\u5C4F\u5E7E\u4F55\u300111 \u9805\u5546\u54C1\u5361\u958B\u95DC\u3002\u7248\u584A\u6A19\u984C\u98A8\u683C\u4E00\u500B\u8A2D\u7F6E\u5C31\u6539\u6389 24 \u7A2E\u5340\u584A\u7684\u6A19\u984C\u3002"
        },
        {
          icon: "ph:database-bold",
          title: "\u7D81\u7684\u662F\u771F\u5BE6\u6578\u64DA\uFF0C\u4E0D\u662F\u4F54\u4F4D\u5716",
          desc: "\u5546\u54C1\u3001\u5206\u985E\u3001\u96C6\u5408\u3001\u6587\u7AE0\u3001\u8A55\u50F9\u3001\u512A\u60E0\u5238\u3001\u4FC3\u92B7\u9019\u4E9B\u5340\u584A\u53D6\u7684\u662F\u5E97\u88E1\u7684\u771F\u5BE6\u6578\u64DA\uFF0C\u7DE8\u8F2F\u6642\u770B\u5230\u4EC0\u9EBC\uFF0C\u9867\u5BA2\u5C31\u770B\u5230\u4EC0\u9EBC\u3002\u670D\u52D9\u7AEF\u5728\u9996\u5C4F\u5C31\u628A\u5167\u5BB9\u6E32\u67D3\u51FA\u4F86\uFF0C\u5C0D\u6536\u9304\u53CB\u597D\u3002"
        },
        {
          icon: "ph:shield-check-bold",
          title: "\u8349\u7A3F\u8207\u7DDA\u4E0A\u5206\u958B\uFF0C\u767C\u4F48\u7559\u5FEB\u7167",
          desc: "\u4FDD\u5B58\u53EA\u5BEB\u8349\u7A3F\uFF0C\u9867\u5BA2\u770B\u5230\u7684\u4ECD\u662F\u4E0A\u4E00\u500B\u5DF2\u767C\u4F48\u7248\u672C\u3002\u6BCF\u6B21\u767C\u4F48\u90FD\u7559\u4E00\u4EFD\u4E0D\u53EF\u6539\u7684\u5FEB\u7167\uFF0C\u53EF\u4EE5\u6062\u5FA9\u2014\u2014\u6062\u5FA9\u6703\u751F\u6210\u4E00\u4EFD\u65B0\u8349\u7A3F\uFF0C\u9700\u8981\u4F60\u518D\u78BA\u8A8D\u767C\u4F48\u4E00\u6B21\uFF0C\u4E0D\u6703\u6709\u4EBA\u8AA4\u9EDE\u4E00\u4E0B\u5C31\u6539\u4E86\u7DDA\u4E0A\u3002\u591A\u4EBA\u540C\u6642\u6539\u6703\u63D0\u793A\u7248\u672C\u885D\u7A81\uFF0C\u4E0D\u6703\u975C\u9ED8\u8986\u84CB\u3002"
        },
        {
          icon: "ph:devices-bold",
          title: "\u684C\u9762\u3001\u5E73\u677F\u3001\u624B\u6A5F\u4E09\u6A94\u9810\u89BD",
          desc: "\u540C\u4E00\u4EFD\u5167\u5BB9\u81EA\u9069\u61C9\u4E09\u7A2E\u5C4F\u5E55\uFF0C\u7DE8\u8F2F\u5668\u88E1\u53EF\u4EE5\u5207\u7740\u770B\u3002\u9700\u8981\u5340\u5225\u5C0D\u5F85\u7684\u5730\u65B9\u53EF\u4EE5\u55AE\u7368\u4F86\uFF1A\u79FB\u52D5\u7AEF\u55AE\u7368\u8A2D\u5716\u3001\u55AE\u7368\u8A2D\u5217\u6578\uFF0C\u67D0\u500B\u5340\u584A\u4E5F\u53EF\u4EE5\u6309\u7AEF\u96B1\u85CF\u3002"
        }
      ]
    },
    flow: {
      title: "\u5F9E\u96F6\u5230\u4E0A\u7DDA\uFF0C\u56DB\u6B65",
      badge: "\u6A19\u6E96\u5316\u4E0A\u7DDA\u6D41\u6C34\u7DDA",
      steps: [
        { step: "01", title: "\u9078\u4E00\u5957\u4E3B\u984C", desc: "\u591A\u5957\u4E3B\u984C\u53EF\u4EE5\u5207\u63DB\uFF0C\u6BCF\u5957\u5404\u81EA\u4FDD\u7559\u81EA\u5DF1\u7684\u88DD\u4FEE\u5167\u5BB9\u2014\u2014\u5207\u56DE\u53BB\uFF0C\u4E4B\u524D\u6539\u7684\u9084\u5728\u3002" },
        { step: "02", title: "\u642D\u9801\u9762", desc: "\u62D6\u5340\u584A\u3001\u9EDE\u958B\u6539\u6587\u5B57\u548C\u5716\u7247\uFF0C\u9700\u8981\u7D71\u4E00\u7684\u5730\u65B9\u53BB\u6539\u4E3B\u984C\u8A2D\u7F6E\u3002" },
        { step: "03", title: "\u4E09\u6A94\u770B\u4E00\u904D", desc: "\u684C\u9762\u3001\u5E73\u677F\u3001\u624B\u6A5F\u5207\u7740\u770B\uFF0C\u79FB\u52D5\u7AEF\u8981\u55AE\u7368\u8A2D\u7684\u5716\u548C\u5217\u6578\u5728\u9019\u4E00\u6B65\u8ABF\u3002" },
        { step: "04", title: "\u767C\u4F48", desc: "\u78BA\u8A8D\u5F8C\u9867\u5BA2\u624D\u770B\u5F97\u5230\uFF0C\u540C\u6642\u7559\u4E0B\u4E00\u4EFD\u53EF\u4EE5\u6062\u5FA9\u7684\u5FEB\u7167\u3002" }
      ]
    },
    safety: {
      title: "\u767C\u4F48\u524D\u6703\u88AB\u6514\u4E0B\u4F86\u7684\u6771\u897F",
      subtitle: "\u9019\u4E9B\u6821\u9A57\u5728\u670D\u52D9\u7AEF\uFF0C\u4E0D\u662F\u524D\u7AEF\u63D0\u793A\uFF0C\u7E5E\u4E0D\u904E\u53BB",
      items: [
        "\u6C92\u8A3B\u518A\u904E\u7684\u5340\u584A\u985E\u578B\u3001\u975E\u6CD5\u7684\u5D4C\u5957\u95DC\u4FC2\u3001\u4E0D\u8A8D\u8B58\u7684\u5B57\u6BB5",
        "\u8173\u672C\u3001iframe\u3001\u8868\u55AE\u548C javascript: \u93C8\u63A5\u2014\u2014\u81EA\u5B9A\u7FA9 HTML \u5340\u584A\u6703\u904E\u5B89\u5168\u767D\u540D\u55AE\u6E05\u6D17",
        "\u4E3B\u984C\u8A2D\u7F6E\u88E1\u5BEB CSS\uFF1A\u984F\u8272\u5FC5\u9808\u662F\u5341\u516D\u9032\u5236\uFF0C\u5E36\u5206\u865F\u82B1\u62EC\u865F\u7684\u503C\u76F4\u63A5\u62D2\u7D55",
        "\u7248\u672C\u5C0D\u4E0D\u4E0A\u7684\u767C\u4F48\uFF1A\u5225\u4EBA\u6539\u904E\u4E86\u6703\u660E\u78BA\u885D\u7A81\uFF0C\u800C\u4E0D\u662F\u84CB\u6389"
      ]
    },
    limits: {
      title: "\u6709\u5E7E\u4EF6\u4E8B\u5B83\u73FE\u5728\u505A\u4E0D\u4E86",
      subtitle: "\u5BEB\u5728\u9019\u88E1\u514D\u5F97\u4F60\u4E0A\u624B\u624D\u767C\u73FE",
      items: [
        { title: "\u4E0D\u662F\u81EA\u7531\u756B\u5E03", desc: "\u5340\u584A\u6309\u4E0A\u4E0B\u9806\u5E8F\u6392\u5E03\uFF0C\u62D6\u66F3\u6539\u7684\u662F\u9806\u5E8F\u548C\u63D2\u5165\u4F4D\u7F6E\u3002\u4E0D\u80FD\u7D55\u5C0D\u5B9A\u4F4D\uFF0C\u4E5F\u4E0D\u80FD\u62D6\u66F3\u6539\u5BEC\u9AD8\u3002" },
        { title: "\u4E0D\u662F\u70BA\u624B\u6A5F\u55AE\u7368\u505A\u4E00\u5957", desc: "\u540C\u4E00\u4EFD\u5167\u5BB9\u97FF\u61C9\u5F0F\u9069\u914D\u4E09\u7A2E\u5C4F\u5E55\u3002\u53EF\u4EE5\u55AE\u7368\u8A2D\u5716\u3001\u8A2D\u5217\u6578\u3001\u6309\u7AEF\u96B1\u85CF\uFF0C\u4F46\u4E0D\u662F\u5169\u5957\u7368\u7ACB\u7D50\u69CB\u3002" },
        { title: "\u88DD\u4FEE\u5167\u5BB9\u662F\u55AE\u8A9E\u7684", desc: "\u540C\u4E00\u500B\u9801\u9762\u7684\u88DD\u4FEE\u6578\u64DA\u4E0D\u6309\u8A9E\u8A00\u5206\u7248\u672C\uFF0C\u591A\u8A9E\u8A00\u7AD9\u9EDE\u7684\u6587\u6848\u9700\u8981\u53E6\u884C\u5B89\u6392\u3002" },
        { title: "\u65B0\u5E97\u5148\u5099\u597D\u56DB\u8655", desc: "\u65B0\u5E97\u958B\u51FA\u4F86\u6642\uFF0C\u9996\u9801\u3001\u9801\u982D\u3001\u9801\u8173\u8207\u4E3B\u984C\u8A2D\u7F6E\u5DF2\u7D93\u5728\u88DD\u4FEE\u93C8\u8DEF\u4E0A\uFF1B\u5176\u4ED6\u9801\u9762\u5148\u6309\u4E3B\u984C\u81EA\u5E36\u7684\u6A21\u677F\u6E32\u67D3\u3002" }
      ]
    },
    faq: {
      title: "\u5E38\u898B\u554F\u984C",
      items: [
        { question: "\u63DB\u4E3B\u984C\u4EE5\u5F8C\uFF0C\u4E4B\u524D\u7684\u88DD\u4FEE\u6703\u4E1F\u55CE\uFF1F", answer: "\u4E0D\u6703\u3002\u88DD\u4FEE\u6578\u64DA\u6309\u4E3B\u984C\u5206\u5225\u4FDD\u5B58\uFF0C\u63DB\u904E\u53BB\u662F\u65B0\u4E3B\u984C\u81EA\u5DF1\u7684\u4E00\u4EFD\uFF0C\u5207\u56DE\u4F86\u4E4B\u524D\u6539\u7684\u9084\u5728\u3002" },
        { question: "\u6211\u4FDD\u5B58\u4E00\u4E0B\uFF0C\u9867\u5BA2\u6703\u7ACB\u523B\u770B\u5230\u55CE\uFF1F", answer: "\u4E0D\u6703\u3002\u4FDD\u5B58\u53EA\u5BEB\u8349\u7A3F\uFF0C\u9867\u5BA2\u770B\u5230\u7684\u4ECD\u662F\u4E0A\u4E00\u500B\u5DF2\u767C\u4F48\u7684\u7248\u672C\uFF0C\u76F4\u5230\u4F60\u9EDE\u767C\u4F48\u3002" },
        { question: "\u767C\u4F48\u4E4B\u5F8C\u767C\u73FE\u6539\u932F\u4E86\u600E\u9EBC\u8FA6\uFF1F", answer: "\u6BCF\u6B21\u767C\u4F48\u90FD\u7559\u4E86\u5FEB\u7167\uFF0C\u53EF\u4EE5\u6062\u5FA9\u3002\u6062\u5FA9\u51FA\u4F86\u7684\u662F\u4E00\u4EFD\u65B0\u8349\u7A3F\uFF0C\u4F60\u78BA\u8A8D\u6C92\u554F\u984C\u518D\u767C\u4F48\u4E00\u6B21\u2014\u2014\u9019\u6A23\u4E0D\u6703\u4E00\u9375\u5C31\u628A\u7DDA\u4E0A\u53C8\u63DB\u6389\u3002" },
        { question: "\u80FD\u8CBC\u81EA\u5B9A\u7FA9 HTML \u55CE\uFF1F", answer: "\u6709\u4E00\u500B HTML \u5340\u584A\u3002\u5167\u5BB9\u6703\u7D93\u904E\u5B89\u5168\u767D\u540D\u55AE\u6E05\u6D17\uFF0C\u8173\u672C\u3001iframe\u3001\u8868\u55AE\u9019\u985E\u6703\u88AB\u79FB\u9664\uFF0C\u6240\u4EE5\u7B2C\u4E09\u65B9\u4EE3\u78BC\u7247\u6BB5\u4E0D\u4E00\u5B9A\u80FD\u539F\u6A23\u5DE5\u4F5C\u3002" },
        { question: "\u624B\u6A5F\u7AEF\u8981\u4E0D\u8981\u55AE\u7368\u505A\u4E00\u904D\uFF1F", answer: "\u4E0D\u7528\u3002\u540C\u4E00\u4EFD\u5167\u5BB9\u6703\u81EA\u9069\u61C9\uFF0C\u7DE8\u8F2F\u5668\u88E1\u53EF\u4EE5\u5207\u5230\u624B\u6A5F\u8996\u53E3\u78BA\u8A8D\u3002\u9700\u8981\u5340\u5225\u5C0D\u5F85\u6642\uFF0C\u53EF\u4EE5\u70BA\u79FB\u52D5\u7AEF\u55AE\u7368\u8A2D\u5716\u7247\u548C\u5217\u6578\uFF0C\u6216\u8005\u628A\u67D0\u500B\u5340\u584A\u5728\u624B\u6A5F\u4E0A\u96B1\u85CF\u3002" }
      ]
    },
    cta: {
      title: "\u958B\u4E00\u5BB6\u5E97\uFF0C\u9032\u53BB\u9EDE\u5169\u4E0B\u5C31\u77E5\u9053\u4E86",
      description: "\u514D\u8CBB\u7248\u5C31\u80FD\u9032\u88DD\u4FEE\u5DE5\u4F5C\u53F0\uFF0C\u5148\u628A\u9996\u9801\u642D\u51FA\u4F86\u518D\u8AAA\u3002",
      primary: "\u514D\u8CBB\u958B\u5E97",
      secondary: "\u700F\u89BD\u4E3B\u984C"
    }
  },
  ru: {
    seo: {
      title: "AI-\u0432\u0438\u0437\u0443\u0430\u043B\u044C\u043D\u044B\u0439 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440",
      description: "\u0420\u0430\u0431\u043E\u0447\u0435\u0435 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E AI-\u0434\u0438\u0437\u0430\u0439\u043D\u0430 Qingpu \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u0443\u0435\u0442 \u0432\u0430\u0448\u0443 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430: \u0443\u043C\u043D\u044B\u0435 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0438 \u043F\u043E \u043C\u0430\u043A\u0435\u0442\u0443 \u0438 \u0446\u0432\u0435\u0442\u0443, \u043F\u0435\u0440\u0435\u0442\u0430\u0441\u043A\u0438\u0432\u0430\u043D\u0438\u0435 \u0441\u0435\u043A\u0446\u0438\u0439, \u043F\u0440\u0430\u0432\u043A\u0430 \u0442\u0435\u043A\u0441\u0442\u0430 \u043F\u043E \u043A\u043B\u0438\u043A\u0443, 53 \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u043D\u044B\u0435 \u0441\u0435\u043A\u0446\u0438\u0438 \u0438 14 \u0448\u0430\u0431\u043B\u043E\u043D\u043E\u0432 \u0441\u0442\u0440\u0430\u043D\u0438\u0446, 76 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A \u0442\u0435\u043C\u044B, \u043F\u0440\u0438\u043C\u0435\u043D\u044F\u0435\u043C\u044B\u0445 \u043A\u043E \u0432\u0441\u0435\u043C\u0443 \u0441\u0430\u0439\u0442\u0443. \u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u043E\u0441\u0442\u0430\u044E\u0442\u0441\u044F \u0432 \u0447\u0435\u0440\u043D\u043E\u0432\u0438\u043A\u0435 \u0434\u043E \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438, \u0438 \u043A\u0430\u0436\u0434\u0430\u044F \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u044F \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u0442 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u043C\u044B\u0439 \u0441\u043D\u0438\u043C\u043E\u043A.",
      keywords: "AI \u0434\u0438\u0437\u0430\u0439\u043D \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430,\u0432\u0438\u0437\u0443\u0430\u043B\u044C\u043D\u044B\u0439 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440,\u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430"
    },
    hero: {
      badge: "AI-\u0432\u0438\u0437\u0443\u0430\u043B\u044C\u043D\u044B\u0439 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440",
      titleMain: "\u041C\u0430\u043A\u0435\u0442\u044B \u0441 \u0418\u0418, ",
      titleHighlight: "\u0441\u0431\u043E\u0440\u043A\u0430 \u043A\u0430\u043A \u0438\u0437 \u0431\u043B\u043E\u043A\u043E\u0432",
      description: "\u0420\u0435\u0430\u043B\u044C\u043D\u044B\u0435 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B \u0441 \u0434\u0430\u043D\u043D\u044B\u043C\u0438 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430. \u0418\u0418 \u043F\u043E\u0434\u0431\u0438\u0440\u0430\u0435\u0442 \u0446\u0432\u0435\u0442\u043E\u0432\u044B\u0435 \u0441\u0445\u0435\u043C\u044B \u0438 \u043C\u0430\u043A\u0435\u0442\u044B \u0441 \u0432\u044B\u0441\u043E\u043A\u043E\u0439 \u043A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u0435\u0439, \u0430 \u0447\u0435\u0440\u043D\u043E\u0432\u0438\u043A \u0437\u0430\u0449\u0438\u0449\u0430\u0435\u0442 \u0441\u0430\u0439\u0442.",
      primaryCta: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E",
      secondaryCta: "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0442\u0435\u043C\u044B",
      canvasTitle: "AI-\u043C\u0430\u0441\u0442\u0435\u0440\u0441\u043A\u0430\u044F \u0434\u0438\u0437\u0430\u0439\u043D\u0430",
      canvasHint: "\u0421\u0435\u043A\u0446\u0438\u0438 \u0441\u043B\u0435\u0432\u0430, \u0436\u0438\u0432\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0432 \u0446\u0435\u043D\u0442\u0440\u0435, \u0442\u0435\u043C\u044B \u0438 \u0441\u0442\u0438\u043B\u0438 \u0432 \u043E\u0434\u0438\u043D \u043A\u043B\u0438\u043A \u0441 \u0418\u0418",
      canvasBlocks: ["\u0411\u0430\u043D\u043D\u0435\u0440 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u044D\u043A\u0440\u0430\u043D\u0430", "\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u0442\u043E\u0432\u0430\u0440\u044B", "\u0422\u0435\u043A\u0441\u0442 \u0441 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435\u043C", "\u041E\u0442\u0437\u044B\u0432\u044B", "FAQ"],
      canvasDrag: "\u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0434\u043B\u044F \u043F\u043E\u0440\u044F\u0434\u043A\u0430",
      pills: ["53 \u0430\u0442\u043E\u043C\u0430\u0440\u043D\u044B\u0445 \u0431\u043B\u043E\u043A\u0430", "8 \u0446\u0432\u0435\u0442\u043E\u0432\u044B\u0445 \u0441\u0445\u0435\u043C \u0418\u0418", "\u0427\u0435\u0440\u043D\u043E\u0432\u0438\u043A \u0438 \u0441\u043D\u0438\u043C\u043A\u0438", "\u0410\u0434\u0430\u043F\u0442\u0438\u0432 \u043F\u043E\u0434 \u044D\u043A\u0440\u0430\u043D\u044B"]
    },
    editor: {
      layoutGrid: "\u0421\u0435\u0442\u043A\u0430",
      layoutFocus: "\u0424\u043E\u043A\u0443\u0441",
      aiRestyle: "AI-\u0441\u0442\u0438\u043B\u044C",
      inlineEdit: "\u041A\u043B\u0438\u043A \u2014 \u043F\u0440\u0430\u0432\u043A\u0430",
      aiProductPick: "AI-\u043F\u043E\u0434\u0431\u043E\u0440",
      moreBlocks: "\u0411\u043E\u043B\u044C\u0448\u0435 \u0431\u043B\u043E\u043A\u043E\u0432",
      draftNote: "\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0438\u0434\u0443\u0442 \u0432 \u0447\u0435\u0440\u043D\u043E\u0432\u0438\u043A \xB7 \u0441\u043D\u0438\u043C\u043E\u043A \u0441\u0430\u0439\u0442\u0430 \u0437\u0430\u0449\u0438\u0449\u0451\u043D",
      liveHint: "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043A\u043D\u043E\u043F\u043A\u0438 \u0432\u044B\u0448\u0435, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u0442\u044C \u2191",
      themeNames: ["\u0422\u0435\u0445\u043D\u043E-\u0441\u0438\u043D\u0438\u0439", "\u041E\u0431\u0441\u0438\u0434\u0438\u0430\u043D \u0447\u0451\u0440\u043D\u043E\u0435 \u0437\u043E\u043B\u043E\u0442\u043E", "\u041B\u0435\u0441\u043D\u043E\u0439 \u0437\u0435\u043B\u0451\u043D\u044B\u0439"]
    },
    atomic: {
      title: "53 \u0430\u0442\u043E\u043C\u0430\u0440\u043D\u044B\u0445 \u0441\u0435\u043A\u0446\u0438\u0438 \u0434\u043B\u044F \u0431\u044B\u0441\u0442\u0440\u043E\u0439 \u0441\u0431\u043E\u0440\u043A\u0438 \u0441\u0442\u0440\u0430\u043D\u0438\u0446 \u0441 \u0432\u044B\u0441\u043E\u043A\u043E\u0439 \u043A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u0435\u0439",
      description: "\u041F\u043E\u043B\u043D\u044B\u0439 \u043F\u0443\u0442\u044C \u043E\u0442 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u044D\u043A\u0440\u0430\u043D\u0430 \u0438 \u043F\u0440\u043E\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u044F \u0442\u043E\u0432\u0430\u0440\u0430 \u0434\u043E \u0441\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0434\u043E\u0432\u0435\u0440\u0438\u044F \u0438 \u0443\u0434\u043E\u0431\u043D\u043E\u0439 \u043E\u043F\u043B\u0430\u0442\u044B. \u0412\u0441\u0435 \u0441\u0435\u043A\u0446\u0438\u0438 \u043F\u0440\u0435\u0434\u043A\u043E\u043C\u043F\u0438\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u044B \u043D\u0430\u0442\u0438\u0432\u043D\u044B\u043C \u0434\u0432\u0438\u0436\u043A\u043E\u043C Go \u0431\u0435\u0437 \u043B\u0438\u0448\u043D\u0435\u0433\u043E \u0440\u0430\u043D\u0442\u0430\u0439\u043C\u0430.",
      specNative: "\u041D\u0430\u0442\u0438\u0432\u043D\u044B\u0439 HTML-\u0440\u0435\u043D\u0434\u0435\u0440\u0438\u043D\u0433 \u043D\u0430 Go",
      specFlex: "100% \u043F\u043E\u0442\u043E\u043A\u043E\u0432\u044B\u0439 \u0430\u0434\u0430\u043F\u0442\u0438\u0432 \u043D\u0430 flexbox",
      specXss: "\u0413\u043B\u0443\u0431\u043E\u043A\u0430\u044F \u043E\u0447\u0438\u0441\u0442\u043A\u0430 \u043F\u043E \u0431\u0435\u043B\u043E\u043C\u0443 \u0441\u043F\u0438\u0441\u043A\u0443 XSS",
      categories: [
        {
          id: "hero",
          name: "\u041F\u0435\u0440\u0432\u044B\u0439 \u044D\u043A\u0440\u0430\u043D \u0438 \u043A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u044F",
          blocks: [
            { name: "\u041F\u043E\u043B\u043D\u043E\u044D\u043A\u0440\u0430\u043D\u043D\u044B\u0439 \u0431\u0430\u043D\u043D\u0435\u0440", desc: "\u041E\u043F\u0442\u0438\u043C\u0438\u0437\u0430\u0446\u0438\u044F LCP \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u044D\u043A\u0440\u0430\u043D\u0430, \u0432\u0438\u0434\u0435\u043E\u0444\u043E\u043D \u0438 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E CTA" },
            { name: "\u0414\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0442\u0430\u0439\u043C\u0435\u0440", desc: "\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442 \u0434\u043B\u044F \u0447\u0430\u0441\u0442\u044B\u0445 \u0440\u0430\u0441\u043F\u0440\u043E\u0434\u0430\u0436 \u0441 \u0443\u0447\u0451\u0442\u043E\u043C \u0447\u0430\u0441\u043E\u0432\u043E\u0433\u043E \u043F\u043E\u044F\u0441\u0430" },
            { name: "\u0411\u0435\u0433\u0443\u0449\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430 \u0434\u043E\u0432\u0435\u0440\u0438\u044F", desc: "\u0422\u0440\u0430\u043D\u0441\u043B\u044F\u0446\u0438\u044F \u0443\u0441\u043B\u043E\u0432\u0438\u0439 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438 \u0438 \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0430 \u043F\u043E \u0432\u0441\u0435\u043C\u0443 \u0441\u0430\u0439\u0442\u0443" },
            { name: "\u0418\u043C\u043C\u0435\u0440\u0441\u0438\u0432\u043D\u044B\u0439 \u0430\u043A\u0446\u0435\u043D\u0442 \u043D\u0430 \u0442\u043E\u0432\u0430\u0440\u0435", desc: "\u0413\u043B\u0443\u0431\u043E\u043A\u0438\u0439 \u043F\u043E\u043A\u0430\u0437 \u0433\u043B\u0430\u0432\u043D\u043E\u0433\u043E \u0442\u043E\u0432\u0430\u0440\u0430 \u0441 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435\u043C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443 \u0432 \u043E\u0434\u0438\u043D \u043A\u043B\u0438\u043A" }
          ]
        },
        {
          id: "products",
          name: "\u0422\u043E\u0432\u0430\u0440\u044B \u0438 \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u0438",
          blocks: [
            { name: "\u041A\u0430\u0440\u0443\u0441\u0435\u043B\u044C \u0441 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u043C\u0438 \u0444\u043E\u0442\u043E", desc: "\u0421\u0432\u0430\u0439\u043F \u043D\u0430 \u0442\u0430\u0447\u0441\u043A\u0440\u0438\u043D\u0435 \u0438 \u043D\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u043C\u044B\u0448\u044C\u044E \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u044E\u0442 \u0434\u0435\u0442\u0430\u043B\u0438 \u0441\u043E \u0432\u0441\u0435\u0445 \u0441\u0442\u043E\u0440\u043E\u043D" },
            { name: "\u0421\u0432\u044F\u0437\u043A\u0430 \u0446\u0432\u0435\u0442\u0430 \u0438 \u0440\u0430\u0437\u043C\u0435\u0440\u0430", desc: "\u0421\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u0441 SKU \u0432 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u043C \u0432\u0440\u0435\u043C\u0435\u043D\u0438, \u043C\u0433\u043D\u043E\u0432\u0435\u043D\u043D\u043E\u0435 \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432" },
            { name: "\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u0430\u044F \u043F\u043E\u043A\u0443\u043F\u043A\u0430 (Bundle)", desc: "\u0423\u043C\u043D\u044B\u0435 \u043D\u0430\u0431\u043E\u0440\u044B \u0441 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u0440\u0430\u0441\u0447\u0451\u0442\u043E\u043C \u0441\u043A\u0438\u0434\u043A\u0438 \u0438 \u0440\u043E\u0441\u0442\u043E\u043C \u0441\u0440\u0435\u0434\u043D\u0435\u0433\u043E \u0447\u0435\u043A\u0430" },
            { name: "\u0423\u043C\u043D\u044B\u0435 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0438", desc: "\u0410\u0432\u0442\u043E\u0441\u0432\u044F\u0437\u044C \u043F\u043E \u0438\u0441\u0442\u043E\u0440\u0438\u0438 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u043E\u0432 \u0438 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F\u043C \u0434\u043B\u044F \u0431\u043E\u043B\u044C\u0448\u0435\u0439 \u0433\u043B\u0443\u0431\u0438\u043D\u044B \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0430" }
          ]
        },
        {
          id: "media",
          name: "\u0418\u0441\u0442\u043E\u0440\u0438\u0438 \u0438 \u043C\u0435\u0434\u0438\u0430",
          blocks: [
            { name: "\u0421\u043B\u0430\u0439\u0434\u0435\u0440 \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u044F \u0414\u043E/\u041F\u043E\u0441\u043B\u0435", desc: "\u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u043F\u043E\u043B\u0437\u0443\u043D\u043E\u043A, \u0447\u0442\u043E\u0431\u044B \u043D\u0430\u0433\u043B\u044F\u0434\u043D\u043E \u0441\u0440\u0430\u0432\u043D\u0438\u0442\u044C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442" },
            { name: "\u041B\u0435\u043D\u0442\u0430 \u0440\u0430\u0441\u043F\u0430\u043A\u043E\u0432\u043E\u043A \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0435\u0439", desc: "\u041A\u043E\u0440\u043E\u0442\u043A\u0438\u0435 UGC-\u0432\u0438\u0434\u0435\u043E \u0438 \u0444\u043E\u0442\u043E \u0432 \u0441\u0435\u0442\u043A\u0435 \u0443\u0441\u0438\u043B\u0438\u0432\u0430\u044E\u0442 \u0434\u043E\u0432\u0435\u0440\u0438\u0435" },
            { name: "\u0425\u0440\u043E\u043D\u043E\u043B\u043E\u0433\u0438\u044F \u0431\u0440\u0435\u043D\u0434\u0430", desc: "\u0422\u0430\u0439\u043C\u043B\u0430\u0439\u043D \u0438\u0441\u0442\u043E\u0440\u0438\u0438 \u0438 \u0444\u0438\u043B\u043E\u0441\u043E\u0444\u0438\u0438 \u0431\u0440\u0435\u043D\u0434\u0430 \u043F\u043E\u0432\u044B\u0448\u0430\u0435\u0442 \u0435\u0433\u043E \u0446\u0435\u043D\u043D\u043E\u0441\u0442\u044C" },
            { name: "\u0420\u0430\u0441\u043A\u0440\u044B\u0432\u0430\u044E\u0449\u0438\u0439\u0441\u044F FAQ", desc: "\u041E\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u043D\u0430 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0434\u043E \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0438 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0443\u044E \u0440\u0430\u0437\u043C\u0435\u0442\u043A\u0443 FAQ" }
          ]
        },
        {
          id: "trust",
          name: "\u0414\u043E\u0432\u0435\u0440\u0438\u0435 \u0438 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435",
          blocks: [
            { name: "\u0421\u0442\u0435\u043D\u0430 \u043E\u0442\u0437\u044B\u0432\u043E\u0432 Trustpilot", desc: "\u0420\u0435\u0430\u043B\u044C\u043D\u044B\u0435 \u043E\u0446\u0435\u043D\u043A\u0438 \u0438 \u0437\u0432\u0451\u0437\u0434\u044B \u0430\u0432\u0442\u043E\u0440\u0438\u0442\u0435\u0442\u043D\u043E\u0439 \u0442\u0440\u0435\u0442\u044C\u0435\u0439 \u0441\u0442\u043E\u0440\u043E\u043D\u044B" },
            { name: "\u0417\u043D\u0430\u0447\u043A\u0438 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0439 \u043E\u043F\u043B\u0430\u0442\u044B", desc: "Visa/Master/PayPal/ApplePay \u0432 \u043E\u0434\u043D\u043E\u043C \u043C\u0435\u0441\u0442\u0435 \u0441\u043D\u0438\u043C\u0430\u044E\u0442 \u0441\u043E\u043C\u043D\u0435\u043D\u0438\u044F" },
            { name: "\u041A\u043E\u043D\u0432\u0435\u0440\u0442\u0435\u0440 \u0432\u0430\u043B\u044E\u0442", desc: "\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043A\u043E\u043D\u0432\u0435\u0440\u0442\u0430\u0446\u0438\u044F \u0432 \u043C\u0435\u0441\u0442\u043D\u0443\u044E \u0432\u0430\u043B\u044E\u0442\u0443 \u0438 \u0444\u043E\u0440\u043C\u0430\u0442 \u043F\u043E IP \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u044F" },
            { name: "\u041E\u0446\u0435\u043D\u043A\u0430 \u0441\u0440\u043E\u043A\u043E\u0432 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438", desc: "\u0412\u0432\u043E\u0434 \u043F\u0443\u043D\u043A\u0442\u0430 \u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0434\u0430\u0451\u0442 \u043F\u0440\u043E\u0433\u043D\u043E\u0437 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438 \u0438 \u0443\u0432\u0435\u0440\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u0432 \u0437\u0430\u043A\u0430\u0437\u0435" }
          ]
        }
      ]
    },
    features: {
      title: "\u0427\u0442\u043E \u043E\u043D \u043D\u0430 \u0441\u0430\u043C\u043E\u043C \u0434\u0435\u043B\u0435 \u0443\u043C\u0435\u0435\u0442",
      subtitle: "\u0412\u0441\u0451 \u043D\u0438\u0436\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0443\u0436\u0435 \u0441\u0435\u0439\u0447\u0430\u0441",
      items: [
        {
          icon: "ph:hand-grabbing-bold",
          title: "\u041F\u0435\u0440\u0435\u0442\u0430\u0441\u043A\u0438\u0432\u0430\u043D\u0438\u0435 \u0438 \u043F\u0440\u0430\u0432\u043A\u0430 \u043F\u043E \u043A\u043B\u0438\u043A\u0443",
          desc: "\u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0441\u0435\u043A\u0446\u0438\u044E \u0438\u0437 \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0438 \u0432 \u043B\u044E\u0431\u0443\u044E \u0442\u043E\u0447\u043A\u0443 \u0432\u0441\u0442\u0430\u0432\u043A\u0438, \u0432 \u0442\u043E\u043C \u0447\u0438\u0441\u043B\u0435 \u0432\u043D\u0443\u0442\u0440\u044C \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u043E\u0432 \u0438 \u0441\u0435\u0442\u043E\u043A. \u0420\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u043C\u044B\u0448\u044C\u044E \u0438 \u0434\u043E\u043B\u0433\u0438\u043C \u043D\u0430\u0436\u0430\u0442\u0438\u0435\u043C \u043D\u0430 \u0442\u0430\u0447\u0441\u043A\u0440\u0438\u043D\u0435, \u0430 \u0435\u0441\u043B\u0438 \u043D\u0435 \u0445\u043E\u0447\u0435\u0442\u0441\u044F \u0442\u044F\u043D\u0443\u0442\u044C \u2014 \u0435\u0441\u0442\u044C \u043A\u043D\u043E\u043F\u043A\u0438 \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u0432\u0432\u0435\u0440\u0445 \u0438 \u0432\u043D\u0438\u0437. 59 \u0447\u0430\u0441\u0442\u044B\u0445 \u043F\u043E\u043B\u0435\u0439 \u043C\u043E\u0436\u043D\u043E \u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043F\u0440\u044F\u043C\u043E \u043D\u0430 \u0445\u043E\u043B\u0441\u0442\u0435. \u0415\u0441\u0442\u044C \u043E\u0442\u043C\u0435\u043D\u0430/\u043F\u043E\u0432\u0442\u043E\u0440, \u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043C\u0435\u0436\u0434\u0443 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430\u043C\u0438 \u0438 \u043C\u0443\u043B\u044C\u0442\u0438\u0432\u044B\u0431\u043E\u0440."
        },
        {
          icon: "ph:squares-four-bold",
          title: "53 \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u043D\u044B\u0435 \u0441\u0435\u043A\u0446\u0438\u0438, 14 \u0448\u0430\u0431\u043B\u043E\u043D\u043E\u0432 \u0441\u0442\u0440\u0430\u043D\u0438\u0446",
          desc: "\u0428\u0435\u0441\u0442\u044C \u0441\u0435\u043C\u0435\u0439\u0441\u0442\u0432 \u0434\u043B\u044F \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u043E\u0439 \u043A\u043E\u043C\u0431\u0438\u043D\u0430\u0446\u0438\u0438: \u043F\u0435\u0440\u0432\u044B\u0439 \u044D\u043A\u0440\u0430\u043D \u0438 \u0431\u0430\u043D\u043D\u0435\u0440\u044B, \u0442\u043E\u0432\u0430\u0440\u044B \u0438 \u043A\u043E\u043D\u0442\u0435\u043D\u0442, \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0438 \u043C\u0435\u0434\u0438\u0430, \u0434\u043E\u0432\u0435\u0440\u0438\u0435 \u0438 \u043F\u043E\u044F\u0441\u043D\u0435\u043D\u0438\u044F, \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433 \u0438 \u043A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u044F, \u0431\u0430\u0437\u043E\u0432\u0430\u044F \u0440\u0430\u0441\u043A\u043B\u0430\u0434\u043A\u0430. \u0414\u043B\u044F \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u0442\u043E\u0432\u0430\u0440\u0430, \u0441\u043F\u0438\u0441\u043A\u0430 \u0442\u043E\u0432\u0430\u0440\u043E\u0432, \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432 \u043F\u043E\u0438\u0441\u043A\u0430, \u0441\u0442\u0430\u0442\u044C\u0438, \u043A\u043E\u0440\u0437\u0438\u043D\u044B, \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u044F \u0438 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u043D\u043E\u0441\u0442\u0438 \u0435\u0441\u0442\u044C \u0441\u0432\u043E\u0438 \u0448\u0430\u0431\u043B\u043E\u043D\u044B."
        },
        {
          icon: "ph:palette-bold",
          title: "76 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A \u0442\u0435\u043C\u044B, \u043F\u0440\u0430\u0432\u043A\u0430 \u0432 \u043E\u0434\u043D\u043E\u043C \u043C\u0435\u0441\u0442\u0435",
          desc: "\u0411\u0430\u0437\u043E\u0432\u044B\u0435 \u0446\u0432\u0435\u0442\u0430 \u0438 \u0434\u043E 8 \u0441\u0445\u0435\u043C, 8 \u0448\u0440\u0438\u0444\u0442\u043E\u0432, \u0440\u0430\u0437\u043C\u0435\u0440/\u043D\u0430\u0441\u044B\u0449\u0435\u043D\u043D\u043E\u0441\u0442\u044C/\u0432\u044B\u0441\u043E\u0442\u0430 \u0441\u0442\u0440\u043E\u043A\u0438, \u0448\u0438\u0440\u0438\u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B, \u043E\u0442\u0441\u0442\u0443\u043F\u044B \u0441\u0435\u043A\u0446\u0438\u0439, \u0440\u0430\u0434\u0438\u0443\u0441 \u0438 \u0442\u0435\u043D\u044C, \u043F\u043B\u043E\u0442\u043D\u043E\u0441\u0442\u044C \u0440\u0430\u0441\u043A\u043B\u0430\u0434\u043A\u0438, \u0433\u0435\u043E\u043C\u0435\u0442\u0440\u0438\u044F \u0448\u0430\u043F\u043A\u0438/\u043F\u043E\u0434\u0432\u0430\u043B\u0430/\u043F\u0435\u0440\u0432\u043E\u0433\u043E \u044D\u043A\u0440\u0430\u043D\u0430, 11 \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0430\u0442\u0435\u043B\u0435\u0439 \u043A\u0430\u0440\u0442\u043E\u0447\u0435\u043A \u0442\u043E\u0432\u0430\u0440\u0430. \u041E\u0434\u043D\u0430 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u0441\u0442\u0438\u043B\u044F \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u043E\u0432 \u043C\u0435\u043D\u044F\u0435\u0442 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0438 24 \u0442\u0438\u043F\u043E\u0432 \u0441\u0435\u043A\u0446\u0438\u0439 \u0441\u0440\u0430\u0437\u0443."
        },
        {
          icon: "ph:database-bold",
          title: "\u041F\u0440\u0438\u0432\u044F\u0437\u0430\u043D\u043E \u043A \u0440\u0435\u0430\u043B\u044C\u043D\u044B\u043C \u0434\u0430\u043D\u043D\u044B\u043C, \u0430 \u043D\u0435 \u043A \u0437\u0430\u0433\u043B\u0443\u0448\u043A\u0430\u043C",
          desc: "\u0421\u0435\u043A\u0446\u0438\u0438 \u0442\u043E\u0432\u0430\u0440\u043E\u0432, \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u0439, \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0439, \u0441\u0442\u0430\u0442\u0435\u0439, \u043E\u0442\u0437\u044B\u0432\u043E\u0432, \u043A\u0443\u043F\u043E\u043D\u043E\u0432 \u0438 \u0430\u043A\u0446\u0438\u0439 \u0447\u0438\u0442\u0430\u044E\u0442 \u0440\u0435\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430: \u0447\u0442\u043E \u0432\u0438\u0434\u0438\u0442\u0435 \u043F\u0440\u0438 \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0438, \u0442\u043E \u0438 \u043F\u043E\u043B\u0443\u0447\u0430\u044E\u0442 \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0438. \u0421\u0435\u0440\u0432\u0435\u0440 \u043E\u0442\u0434\u0430\u0451\u0442 \u044D\u0442\u043E \u0432 \u043F\u0435\u0440\u0432\u043E\u043C \u043E\u0442\u0432\u0435\u0442\u0435, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0447\u0438\u0442\u0430\u044E\u0442 \u043F\u043E\u0438\u0441\u043A\u043E\u0432\u0438\u043A\u0438."
        },
        {
          icon: "ph:shield-check-bold",
          title: "\u0427\u0435\u0440\u043D\u043E\u0432\u0438\u043A \u0438 \u0436\u0438\u0432\u043E\u0439 \u0441\u0430\u0439\u0442 \u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u044B; \u043A\u0430\u0436\u0434\u0430\u044F \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u044F \u0445\u0440\u0430\u043D\u0438\u0442 \u0441\u043D\u0438\u043C\u043E\u043A",
          desc: "\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u043F\u0438\u0448\u0435\u0442 \u0447\u0435\u0440\u043D\u043E\u0432\u0438\u043A; \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0438 \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0430\u044E\u0442 \u0432\u0438\u0434\u0435\u0442\u044C \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u044E\u044E \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u043D\u0443\u044E \u0432\u0435\u0440\u0441\u0438\u044E. \u041A\u0430\u0436\u0434\u0430\u044F \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u044F \u0445\u0440\u0430\u043D\u0438\u0442 \u043D\u0435\u0438\u0437\u043C\u0435\u043D\u044F\u0435\u043C\u044B\u0439 \u0441\u043D\u0438\u043C\u043E\u043A, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043C\u043E\u0436\u043D\u043E \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u2014 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u0441\u043E\u0437\u0434\u0430\u0451\u0442 \u043D\u043E\u0432\u044B\u0439 \u0447\u0435\u0440\u043D\u043E\u0432\u0438\u043A \u0434\u043B\u044F \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u043E\u0439 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u043D\u0438\u043A\u0442\u043E \u043D\u0435 \u043C\u0435\u043D\u044F\u0435\u0442 \u0441\u0430\u0439\u0442 \u043E\u0434\u043D\u0438\u043C \u043A\u043B\u0438\u043A\u043E\u043C. \u0415\u0441\u043B\u0438 \u043A\u0442\u043E-\u0442\u043E \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043B \u043F\u0430\u0440\u0430\u043B\u043B\u0435\u043B\u044C\u043D\u043E, \u0432\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u043A\u043E\u043D\u0444\u043B\u0438\u043A\u0442 \u0432\u0435\u0440\u0441\u0438\u0439 \u0432\u043C\u0435\u0441\u0442\u043E \u043C\u043E\u043B\u0447\u0430\u043B\u0438\u0432\u043E\u0439 \u043F\u0435\u0440\u0435\u0437\u0430\u043F\u0438\u0441\u0438."
        },
        {
          icon: "ph:devices-bold",
          title: "\u041F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u043D\u0430 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0435, \u043F\u043B\u0430\u043D\u0448\u0435\u0442\u0435 \u0438 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0435",
          desc: "\u041E\u0434\u0438\u043D \u043D\u0430\u0431\u043E\u0440 \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0430 \u0430\u0434\u0430\u043F\u0442\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u043F\u043E\u0434 \u0442\u0440\u0438 \u044D\u043A\u0440\u0430\u043D\u0430, \u0430 \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0430\u0442\u044C \u0432\u044C\u044E\u043F\u043E\u0440\u0442\u044B \u043C\u043E\u0436\u043D\u043E \u043F\u0440\u044F\u043C\u043E \u043F\u0440\u0438 \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0438. \u0422\u0430\u043C, \u0433\u0434\u0435 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443 \u043D\u0443\u0436\u043D\u043E \u0438\u043D\u043E\u0435, \u0437\u0430\u0434\u0430\u0439\u0442\u0435 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E\u0435 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435, \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E\u0435 \u0447\u0438\u0441\u043B\u043E \u043A\u043E\u043B\u043E\u043D\u043E\u043A \u0438\u043B\u0438 \u0441\u043A\u0440\u043E\u0439\u0442\u0435 \u0441\u0435\u043A\u0446\u0438\u044E \u043D\u0430 \u043D\u0443\u0436\u043D\u043E\u043C \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0438."
        }
      ]
    },
    flow: {
      title: "\u0427\u0435\u0442\u044B\u0440\u0435 \u0448\u0430\u0433\u0430 \u0434\u043E \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438",
      badge: "\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u043E\u043D\u0432\u0435\u0439\u0435\u0440 \u0437\u0430\u043F\u0443\u0441\u043A\u0430",
      steps: [
        { step: "01", title: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0435\u043C\u0443", desc: "\u0422\u0435\u043C\u044B \u043C\u043E\u0436\u043D\u043E \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0430\u0442\u044C \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u043E \u2014 \u0443 \u043A\u0430\u0436\u0434\u043E\u0439 \u0441\u0432\u043E\u0439 \u0434\u0438\u0437\u0430\u0439\u043D, \u0438 \u043F\u0440\u0438 \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0435 \u043F\u0440\u0430\u0432\u043A\u0438 \u043E\u0441\u0442\u0430\u044E\u0442\u0441\u044F \u043D\u0430 \u043C\u0435\u0441\u0442\u0435." },
        { step: "02", title: "\u0421\u043E\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443", desc: "\u0414\u043E\u0431\u0430\u0432\u043B\u044F\u0439\u0442\u0435 \u0441\u0435\u043A\u0446\u0438\u0438, \u043F\u0440\u0430\u0432\u044C\u0442\u0435 \u0442\u0435\u043A\u0441\u0442 \u0438 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u043A\u043B\u0438\u043A\u043E\u043C, \u0430 \u043E\u0431\u0449\u0435\u0435 \u043C\u0435\u043D\u044F\u0439\u0442\u0435 \u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u0445 \u0442\u0435\u043C\u044B." },
        { step: "03", title: "\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0442\u0440\u0438 \u0448\u0438\u0440\u0438\u043D\u044B", desc: "\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0430\u0439\u0442\u0435\u0441\u044C \u043C\u0435\u0436\u0434\u0443 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043E\u043C, \u043F\u043B\u0430\u043D\u0448\u0435\u0442\u043E\u043C \u0438 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u043E\u043C. \u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0438 \u0447\u0438\u0441\u043B\u043E \u043A\u043E\u043B\u043E\u043D\u043E\u043A \u0437\u0430\u0434\u0430\u044E\u0442\u0441\u044F \u0437\u0434\u0435\u0441\u044C." },
        { step: "04", title: "\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u0443\u0439\u0442\u0435", desc: "\u041F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0438 \u0443\u0432\u0438\u0434\u044F\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u0441\u043B\u0435 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438, \u0438 \u043E\u043D\u0430 \u043E\u0441\u0442\u0430\u0432\u0438\u0442 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u043C\u044B\u0439 \u0441\u043D\u0438\u043C\u043E\u043A." }
      ]
    },
    safety: {
      title: "\u0427\u0442\u043E \u043E\u0442\u0441\u0435\u043A\u0430\u0435\u0442\u0441\u044F \u0434\u043E \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438",
      subtitle: "\u042D\u0442\u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u0438\u0434\u0443\u0442 \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435, \u0430 \u043D\u0435 \u043A\u0430\u043A \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430 \u0432\u043E \u0444\u0440\u043E\u043D\u0442\u0435\u043D\u0434\u0435",
      items: [
        "\u041D\u0435\u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0442\u0438\u043F\u044B \u0441\u0435\u043A\u0446\u0438\u0439, \u043D\u0435\u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u0430\u044F \u0432\u043B\u043E\u0436\u0435\u043D\u043D\u043E\u0441\u0442\u044C, \u043D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0435 \u043F\u043E\u043B\u044F",
        "\u0421\u043A\u0440\u0438\u043F\u0442\u044B, iframe, \u0444\u043E\u0440\u043C\u044B \u0438 \u0441\u0441\u044B\u043B\u043A\u0438 javascript: \u2014 \u0441\u0435\u043A\u0446\u0438\u044F \u0441\u0432\u043E\u0435\u0433\u043E HTML \u043E\u0447\u0438\u0449\u0430\u0435\u0442\u0441\u044F \u043F\u043E \u0431\u0435\u043B\u043E\u043C\u0443 \u0441\u043F\u0438\u0441\u043A\u0443",
        "CSS \u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u0445 \u0442\u0435\u043C\u044B: \u0446\u0432\u0435\u0442\u0430 \u0442\u043E\u043B\u044C\u043A\u043E \u0432 hex, \u0430 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0441 \u0442\u043E\u0447\u043A\u0430\u043C\u0438 \u0441 \u0437\u0430\u043F\u044F\u0442\u043E\u0439 \u0438\u043B\u0438 \u0441\u043A\u043E\u0431\u043A\u0430\u043C\u0438 \u043E\u0442\u043A\u043B\u043E\u043D\u044F\u044E\u0442\u0441\u044F",
        "\u041F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u044F \u0443\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0438: \u0432\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u044F\u0432\u043D\u044B\u0439 \u043A\u043E\u043D\u0444\u043B\u0438\u043A\u0442 \u0432\u043C\u0435\u0441\u0442\u043E \u043F\u0435\u0440\u0435\u0437\u0430\u043F\u0438\u0441\u0438 \u0447\u0443\u0436\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B"
      ]
    },
    limits: {
      title: "\u041D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0432\u0435\u0449\u0435\u0439, \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043E\u043D \u043D\u0435 \u0434\u0435\u043B\u0430\u0435\u0442",
      subtitle: "\u041B\u0443\u0447\u0448\u0435 \u0441\u043A\u0430\u0437\u0430\u0442\u044C \u0441\u0440\u0430\u0437\u0443, \u0447\u0435\u043C \u043E\u0431\u043D\u0430\u0440\u0443\u0436\u0438\u0442\u044C \u043F\u043E\u0437\u0436\u0435",
      items: [
        { title: "\u042D\u0442\u043E \u043D\u0435 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u044B\u0439 \u0445\u043E\u043B\u0441\u0442", desc: "\u0421\u0435\u043A\u0446\u0438\u0438 \u0438\u0434\u0443\u0442 \u043F\u043E \u043F\u043E\u0440\u044F\u0434\u043A\u0443; \u043F\u0435\u0440\u0435\u0442\u0430\u0441\u043A\u0438\u0432\u0430\u043D\u0438\u0435 \u043C\u0435\u043D\u044F\u0435\u0442 \u043F\u043E\u0440\u044F\u0434\u043E\u043A \u0438 \u0442\u043E\u0447\u043A\u0443 \u0432\u0441\u0442\u0430\u0432\u043A\u0438. \u0410\u0431\u0441\u043E\u043B\u044E\u0442\u043D\u043E\u0433\u043E \u043F\u043E\u0437\u0438\u0446\u0438\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0438 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0440\u0430\u0437\u043C\u0435\u0440\u0430 \u043F\u0435\u0440\u0435\u0442\u0430\u0441\u043A\u0438\u0432\u0430\u043D\u0438\u0435\u043C \u043D\u0435\u0442." },
        { title: "\u042D\u0442\u043E \u043D\u0435 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u0430\u044F \u0441\u0431\u043E\u0440\u043A\u0430 \u0434\u043B\u044F \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430", desc: "\u041E\u0434\u0438\u043D \u043D\u0430\u0431\u043E\u0440 \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0430 \u0430\u0434\u0430\u043F\u0442\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u043F\u043E\u0434 \u0448\u0438\u0440\u0438\u043D\u044B. \u041C\u043E\u0436\u043D\u043E \u0437\u0430\u0434\u0430\u0442\u044C \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435, \u0447\u0438\u0441\u043B\u043E \u043A\u043E\u043B\u043E\u043D\u043E\u043A \u0438\u043B\u0438 \u0441\u043A\u0440\u044B\u0442\u044C \u0441\u0435\u043A\u0446\u0438\u044E \u043D\u0430 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0438, \u043D\u043E \u0434\u0432\u0443\u0445 \u043D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u044B\u0445 \u043C\u0430\u043A\u0435\u0442\u043E\u0432 \u043D\u0435\u0442." },
        { title: "\u041A\u043E\u043D\u0442\u0435\u043D\u0442 \u0434\u0438\u0437\u0430\u0439\u043D\u0430 \u043E\u0434\u043D\u043E\u044F\u0437\u044B\u0447\u043D\u044B\u0439", desc: "\u0414\u0430\u043D\u043D\u044B\u0435 \u0434\u0438\u0437\u0430\u0439\u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043D\u0435 \u0440\u0430\u0437\u043B\u0438\u0447\u0430\u044E\u0442\u0441\u044F \u043F\u043E \u044F\u0437\u044B\u043A\u0430\u043C, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u043C\u043D\u043E\u0433\u043E\u044F\u0437\u044B\u0447\u043D\u044B\u0439 \u043A\u043E\u043D\u0442\u0435\u043D\u0442 \u043D\u0443\u0436\u043D\u043E \u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E." },
        { title: "\u041D\u043E\u0432\u044B\u0439 \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442 \u0447\u0435\u0442\u044B\u0440\u0435 \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u0438", desc: "\u041D\u043E\u0432\u044B\u0439 \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u043F\u0440\u0438\u0445\u043E\u0434\u0438\u0442 \u0441 \u0433\u043B\u0430\u0432\u043D\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435\u0439, \u0448\u0430\u043F\u043A\u043E\u0439, \u043F\u043E\u0434\u0432\u0430\u043B\u043E\u043C \u0438 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u043C\u0438 \u0442\u0435\u043C\u044B \u0432 \u043A\u043E\u043D\u0432\u0435\u0439\u0435\u0440\u0435 \u0434\u0438\u0437\u0430\u0439\u043D\u0430; \u043E\u0441\u0442\u0430\u043B\u044C\u043D\u044B\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0440\u0435\u043D\u0434\u0435\u0440\u044F\u0442\u0441\u044F \u0438\u0437 \u0448\u0430\u0431\u043B\u043E\u043D\u043E\u0432 \u0442\u0435\u043C\u044B." }
      ]
    },
    faq: {
      title: "\u0427\u0430\u0441\u0442\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B",
      items: [
        { question: "\u0415\u0441\u043B\u0438 \u044F \u0441\u043C\u0435\u043D\u044E \u0442\u0435\u043C\u0443, \u043F\u043E\u0442\u0435\u0440\u044F\u044E \u043B\u0438 \u044F \u0434\u0438\u0437\u0430\u0439\u043D?", answer: "\u041D\u0435\u0442. \u0414\u0430\u043D\u043D\u044B\u0435 \u0434\u0438\u0437\u0430\u0439\u043D\u0430 \u0445\u0440\u0430\u043D\u044F\u0442\u0441\u044F \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u043A\u0430\u0436\u0434\u043E\u0439 \u0442\u0435\u043C\u044B, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u043D\u043E\u0432\u0430\u044F \u0442\u0435\u043C\u0430 \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442 \u0441\u0432\u043E\u0438, \u0430 \u043F\u0440\u0438 \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0435 \u043F\u0440\u0435\u0436\u043D\u0438\u0435 \u043F\u0440\u0430\u0432\u043A\u0438 \u043E\u0441\u0442\u0430\u044E\u0442\u0441\u044F \u043D\u0430 \u043C\u0435\u0441\u0442\u0435." },
        { question: "\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u0441\u0440\u0430\u0437\u0443 \u0432\u043B\u0438\u044F\u0435\u0442 \u043D\u0430 \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0435\u0439?", answer: "\u041D\u0435\u0442. \u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u043F\u0438\u0448\u0435\u0442 \u0447\u0435\u0440\u043D\u043E\u0432\u0438\u043A; \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0438 \u0432\u0438\u0434\u044F\u0442 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u044E\u044E \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u043D\u0443\u044E \u0432\u0435\u0440\u0441\u0438\u044E, \u043F\u043E\u043A\u0430 \u0432\u044B \u043D\u0435 \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u0443\u0435\u0442\u0435." },
        { question: "\u0427\u0442\u043E \u0435\u0441\u043B\u0438 \u044F \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u0443\u044E \u0447\u0442\u043E-\u0442\u043E \u043D\u0435 \u0442\u043E?", answer: "\u041A\u0430\u0436\u0434\u0430\u044F \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u044F \u0445\u0440\u0430\u043D\u0438\u0442 \u0441\u043D\u0438\u043C\u043E\u043A, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043C\u043E\u0436\u043D\u043E \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C. \u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u0434\u0430\u0451\u0442 \u043D\u043E\u0432\u044B\u0439 \u0447\u0435\u0440\u043D\u043E\u0432\u0438\u043A \u0434\u043B\u044F \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u0438 \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u043E\u0439 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0436\u0438\u0432\u043E\u0439 \u0441\u0430\u0439\u0442 \u043D\u0435 \u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u043E\u0434\u043D\u0438\u043C \u043A\u043B\u0438\u043A\u043E\u043C." },
        { question: "\u041C\u043E\u0436\u043D\u043E \u0432\u0441\u0442\u0430\u0432\u043B\u044F\u0442\u044C \u0441\u0432\u043E\u0439 HTML?", answer: "\u0415\u0441\u0442\u044C HTML-\u0441\u0435\u043A\u0446\u0438\u044F. \u0415\u0451 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435 \u043E\u0447\u0438\u0449\u0430\u0435\u0442\u0441\u044F \u043F\u043E \u0431\u0435\u043B\u043E\u043C\u0443 \u0441\u043F\u0438\u0441\u043A\u0443 \u2014 \u0441\u043A\u0440\u0438\u043F\u0442\u044B, iframe \u0438 \u0444\u043E\u0440\u043C\u044B \u0443\u0434\u0430\u043B\u044F\u044E\u0442\u0441\u044F, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0441\u0442\u043E\u0440\u043E\u043D\u043D\u0438\u0435 \u0444\u0440\u0430\u0433\u043C\u0435\u043D\u0442\u044B \u043C\u043E\u0433\u0443\u0442 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u043D\u0435 \u043A\u0430\u043A \u0435\u0441\u0442\u044C." },
        { question: "\u041D\u0443\u0436\u043D\u043E \u043B\u0438 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E \u0434\u0435\u043B\u0430\u0442\u044C \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u0443\u044E \u0432\u0435\u0440\u0441\u0438\u044E?", answer: "\u041D\u0435\u0442. \u0422\u043E\u0442 \u0436\u0435 \u043A\u043E\u043D\u0442\u0435\u043D\u0442 \u0430\u0434\u0430\u043F\u0442\u0438\u0440\u0443\u0435\u0442\u0441\u044F, \u0430 \u0432\u044C\u044E\u043F\u043E\u0440\u0442 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043F\u0440\u0438 \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0438. \u0413\u0434\u0435 \u0432\u0430\u0436\u043D\u043E \u2014 \u0437\u0430\u0434\u0430\u0439\u0442\u0435 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0438\u043B\u0438 \u0447\u0438\u0441\u043B\u043E \u043A\u043E\u043B\u043E\u043D\u043E\u043A \u043B\u0438\u0431\u043E \u0441\u043A\u0440\u043E\u0439\u0442\u0435 \u0441\u0435\u043A\u0446\u0438\u044E \u043D\u0430 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0435." }
      ]
    },
    cta: {
      title: "\u041E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u0438 \u043F\u043E\u0449\u0451\u043B\u043A\u0430\u0439\u0442\u0435",
      description: "\u041C\u0430\u0441\u0442\u0435\u0440\u0441\u043A\u0430\u044F \u0434\u0438\u0437\u0430\u0439\u043D\u0430 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430 \u043D\u0430 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E\u043C \u0442\u0430\u0440\u0438\u0444\u0435 \u2014 \u043D\u0430\u0447\u043D\u0438\u0442\u0435 \u0441 \u0433\u043B\u0430\u0432\u043D\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B.",
      primary: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E",
      secondary: "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0442\u0435\u043C\u044B"
    }
  }
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "store-design",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale } = useI18n();
    const { localePath } = useLocaleRouter();
    const { signUpUrl } = useShoplyAuthLinks();
    const currentLocale = computed(() => {
      const current = locale.value;
      if (current in storeDesignLocales) return current;
      return "zh";
    });
    const copy = computed(() => storeDesignLocales[currentLocale.value] || storeDesignLocales.zh);
    const openFaq = ref(0);
    const aiThemes = [
      {
        id: "tech-blue",
        accentColor: "text-blue-600",
        badgeClass: "bg-blue-100 text-blue-700",
        buttonClass: "bg-blue-600 hover:bg-blue-700 text-white",
        bannerGrad: "from-blue-600 via-indigo-600 to-blue-700",
        bannerTitle: "Next-Gen ANC Studio Headphones",
        bannerSub: "40dB Hybrid Noise Cancelling \xB7 65H Battery",
        products: [
          { name: "StudioPro Headset", price: "$189.00", oldPrice: "$249.00", tag: "Hot", icon: "ph:headphones-bold" },
          { name: "Wireless Charging Pad", price: "$49.00", oldPrice: "$69.00", tag: "New", icon: "ph:battery-charging-vertical-bold" },
          { name: "Ergonomic Desk Mat", price: "$35.00", oldPrice: "$45.00", tag: "Sale", icon: "ph:keyboard-bold" }
        ]
      },
      {
        id: "gold-dark",
        accentColor: "text-amber-400",
        badgeClass: "bg-amber-100 text-amber-900",
        buttonClass: "bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold",
        bannerGrad: "from-slate-950 via-slate-900 to-black",
        bannerTitle: "Obsidian Minimalist Luxury Collection",
        bannerSub: "Handcrafted Precision Aerospace Aluminum",
        products: [
          { name: "Titanium Mechanical Watch", price: "$420.00", oldPrice: "$550.00", tag: "Limited", icon: "ph:watch-bold" },
          { name: "Leather Passport Sleeve", price: "$78.00", oldPrice: "$98.00", tag: "VIP", icon: "ph:wallet-bold" },
          { name: "Brass Fountain Pen", price: "$85.00", oldPrice: "$110.00", tag: "Craft", icon: "ph:pen-nib-bold" }
        ]
      },
      {
        id: "forest-green",
        accentColor: "text-emerald-600",
        badgeClass: "bg-emerald-100 text-emerald-800",
        buttonClass: "bg-emerald-600 hover:bg-emerald-700 text-white",
        bannerGrad: "from-emerald-800 via-teal-900 to-emerald-950",
        bannerTitle: "Wilderness Ultralight Camping Gear",
        bannerSub: "Waterproof Ripstop Fabric \xB7 Built for Alpine Peaks",
        products: [
          { name: "Carbon Fiber Trekking Pole", price: "$89.00", oldPrice: "$120.00", tag: "Ultralight", icon: "ph:compass-bold" },
          { name: "Waterproof Dry Backpack 35L", price: "$135.00", oldPrice: "$175.00", tag: "Stormproof", icon: "ph:backpack-bold" },
          { name: "Titanium Camping Cookware", price: "$62.00", oldPrice: "$80.00", tag: "Best Seller", icon: "ph:fire-bold" }
        ]
      }
    ];
    const currentThemeIdx = ref(0);
    const currentTheme = computed(() => aiThemes[currentThemeIdx.value] || aiThemes[0]);
    const currentThemeName = computed(() => copy.value.editor.themeNames[currentThemeIdx.value] || copy.value.editor.themeNames[0]);
    const isGenerating = ref(false);
    const aiLayoutMode = ref("grid");
    const atomicMeta = {
      hero: {
        icon: "ph:lightning-bold",
        blocks: [
          { tag: "HERO_PARALLAX", icon: "ph:image-square-bold" },
          { tag: "URGENCY_TICK", icon: "ph:timer-bold" },
          { tag: "TICKER_STREAM", icon: "ph:broadcast-bold" },
          { tag: "DIRECT_ATC", icon: "ph:sparkle-bold" }
        ]
      },
      products: {
        icon: "ph:t-shirt-bold",
        blocks: [
          { tag: "GALLERY_SLIDER", icon: "ph:images-bold" },
          { tag: "SWATCH_SYNC", icon: "ph:palette-bold" },
          { tag: "CROSS_SELL", icon: "ph:shopping-bag-open-bold" },
          { tag: "RECOMMEND", icon: "ph:arrows-clockwise-bold" }
        ]
      },
      media: {
        icon: "ph:film-slate-bold",
        blocks: [
          { tag: "COMPARISON", icon: "ph:split-horizontal-bold" },
          { tag: "UGC_REEL", icon: "ph:play-circle-bold" },
          { tag: "TIMELINE", icon: "ph:book-open-bold" },
          { tag: "FAQ_ACCORDION", icon: "ph:question-bold" }
        ]
      },
      trust: {
        icon: "ph:shield-check-bold",
        blocks: [
          { tag: "TRUST_SCORE", icon: "ph:star-bold" },
          { tag: "PCI_COMPLIANCE", icon: "ph:credit-card-bold" },
          { tag: "GEO_CURRENCY", icon: "ph:currency-dollar-bold" },
          { tag: "EST_DELIVERY", icon: "ph:truck-bold" }
        ]
      }
    };
    const atomicCategories = computed(
      () => copy.value.atomic.categories.map((cat) => {
        const meta = atomicMeta[cat.id];
        return {
          id: cat.id,
          name: cat.name,
          icon: meta.icon,
          blocks: cat.blocks.map((block, index) => ({
            name: block.name,
            desc: block.desc,
            tag: meta.blocks[index].tag,
            icon: meta.blocks[index].icon
          }))
        };
      })
    );
    const activeAtomicCat = ref("hero");
    const currentCategoryBlocks = computed(() => {
      const cat = atomicCategories.value.find((c) => c.id === activeAtomicCat.value);
      return cat ? cat.blocks : atomicCategories.value[0].blocks;
    });
    useSeoMeta({
      title: () => copy.value.seo.title,
      description: () => copy.value.seo.description,
      keywords: () => copy.value.seo.keywords,
      ogTitle: () => copy.value.seo.title,
      ogDescription: () => copy.value.seo.description,
      ogType: "website",
      twitterCard: "summary_large_image",
      twitterTitle: () => copy.value.seo.title,
      twitterDescription: () => copy.value.seo.description
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$W;
      const _component_NuxtLink = __nuxt_component_3$4;
      const _component_PageCta = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white" }, _attrs))}><section class="relative isolate overflow-hidden bg-gradient-to-b from-[#1b64e4] via-[#2472f8] to-[#1d63e0] text-white"><div class="absolute inset-0 -z-10 overflow-hidden"><div class="animate-shoply-glow absolute -left-28 -top-20 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl"></div><div class="animate-shoply-float-delayed absolute -right-20 top-20 h-[30rem] w-[30rem] rounded-full bg-indigo-900/35 blur-3xl"></div><div class="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] opacity-60"></div><div class="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/10 to-transparent"></div></div><div class="mx-auto grid max-w-[1240px] items-center gap-10 px-5 pt-28 pb-16 sm:px-8 sm:pt-36 sm:pb-20 lg:grid-cols-[1.05fr_1.15fr] lg:gap-12 lg:px-12 lg:pt-40 lg:pb-24"><div><div class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-bold tracking-wider text-cyan-200 backdrop-blur-md">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:sparkle-bold",
        class: "h-3.5 w-3.5 text-amber-300"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(copy.value.hero.badge)}</span></div><h1 class="mt-5 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">${ssrInterpolate(copy.value.hero.titleMain)} <span class="bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-300 bg-clip-text text-transparent">${ssrInterpolate(copy.value.hero.titleHighlight)}</span></h1><p class="mt-4 max-w-xl text-sm leading-relaxed text-blue-50/90 sm:text-base sm:leading-8">${ssrInterpolate(copy.value.hero.description)}</p><div class="mt-6 grid grid-cols-2 gap-2 max-w-md sm:grid-cols-2"><!--[-->`);
      ssrRenderList(copy.value.hero.pills, (pill) => {
        _push(`<div class="flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.07] px-3 py-2 text-xs font-semibold text-white/95 backdrop-blur-sm transition-all hover:bg-white/15">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:check-circle-bold",
          class: "h-4 w-4 shrink-0 text-cyan-300"
        }, null, _parent));
        _push(`<span class="truncate">${ssrInterpolate(pill)}</span></div>`);
      });
      _push(`<!--]--></div><div class="mt-8 flex flex-wrap items-center gap-3"><a${ssrRenderAttr("href", unref(signUpUrl))} class="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-extrabold text-blue-700 shadow-xl shadow-blue-950/20 transition-all hover:-translate-y-0.5 hover:bg-blue-50 active:scale-95"><span>${ssrInterpolate(copy.value.hero.primaryCta)}</span>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:arrow-up-right-bold",
        class: "h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      }, null, _parent));
      _push(`</a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/themes"),
        class: "rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 active:scale-95"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(copy.value.hero.secondaryCta)}`);
          } else {
            return [
              createTextVNode(toDisplayString(copy.value.hero.secondaryCta), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="relative rounded-3xl border border-white/20 bg-slate-950/85 p-3.5 shadow-2xl shadow-blue-950/40 backdrop-blur-xl sm:p-5 text-white"><div class="flex flex-col gap-2.5 border-b border-slate-800 pb-3 sm:flex-row sm:items-center sm:justify-between"><div class="flex items-center gap-3"><div class="flex items-center gap-1.5"><span class="h-2.5 w-2.5 rounded-full bg-rose-500/80"></span><span class="h-2.5 w-2.5 rounded-full bg-amber-500/80"></span><span class="h-2.5 w-2.5 rounded-full bg-emerald-500/80"></span></div><div class="h-3 w-px bg-slate-800"></div><div class="flex items-center gap-1.5 text-[11px] font-mono font-bold text-cyan-300">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:sparkle-fill",
        class: "h-3.5 w-3.5 animate-pulse text-cyan-400"
      }, null, _parent));
      _push(`<span>AI DECOR STUDIO</span></div></div><div class="flex flex-wrap items-center gap-1.5 text-[11px] font-bold"><button type="button" class="${ssrRenderClass([{ "opacity-50 pointer-events-none": isGenerating.value }, "flex items-center gap-1 rounded-lg border border-slate-700 bg-slate-800/90 px-2.5 py-1 text-slate-200 transition-all hover:border-amber-400 hover:text-amber-300 active:scale-95"])}">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:palette-bold",
        class: "h-3.5 w-3.5 text-amber-400"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(currentThemeName.value)}</span></button><button type="button" class="flex items-center gap-1 rounded-lg border border-slate-700 bg-slate-800/90 px-2.5 py-1 text-slate-200 transition-all hover:border-cyan-400 hover:text-cyan-300 active:scale-95">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:layout-bold",
        class: "h-3.5 w-3.5 text-cyan-400"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(aiLayoutMode.value === "grid" ? copy.value.editor.layoutGrid : copy.value.editor.layoutFocus)}</span></button><button type="button" class="flex items-center gap-1 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-3 py-1 text-white shadow-sm transition-all hover:brightness-110 active:scale-95">`);
      if (isGenerating.value) {
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:magic-wand-bold",
          class: "h-3.5 w-3.5 animate-spin"
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:sparkle-bold",
          class: "h-3.5 w-3.5"
        }, null, _parent));
      }
      _push(`<span>${ssrInterpolate(copy.value.editor.aiRestyle)}</span></button></div></div><div class="mt-3 grid grid-cols-[96px_minmax(0,1fr)] gap-2.5 font-sans sm:grid-cols-[108px_minmax(0,1fr)]"><div class="space-y-1.5 text-[10px] font-semibold text-slate-400"><span class="block px-1 text-[9px] uppercase tracking-wider text-slate-500 font-mono">53 BLOCKS</span><!--[-->`);
      ssrRenderList(copy.value.hero.canvasBlocks, (block) => {
        _push(`<div class="flex items-center justify-between rounded-lg bg-slate-900/90 border border-slate-800/80 px-2 py-1.5 transition-colors hover:border-blue-500 hover:text-white"><span class="truncate">${ssrInterpolate(block)}</span><span class="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/60"></span></div>`);
      });
      _push(`<!--]--><div class="rounded-lg border border-dashed border-slate-800 p-1.5 text-center text-[9px] text-slate-500"> + ${ssrInterpolate(copy.value.editor.moreBlocks)}</div></div><div class="relative overflow-hidden rounded-2xl border border-slate-700 bg-white text-slate-900 shadow-xl transition-all duration-300"><div class="flex items-center justify-between border-b border-slate-100 bg-slate-50 px-3 py-1.5 text-[10px]"><div class="flex items-center gap-1.5"><span class="font-black tracking-wider text-slate-900 uppercase">STOREFRONT</span><span class="${ssrRenderClass([currentTheme.value.badgeClass, "rounded px-1 text-[9px] font-mono font-bold"])}">AI Active</span></div><div class="flex items-center gap-2 text-slate-400 text-[9px] font-mono"><span>14ms TTFB</span>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:shopping-bag-bold",
        class: "h-3 w-3 text-slate-700"
      }, null, _parent));
      _push(`</div></div><div class="p-2.5 sm:p-3 space-y-2.5 max-h-[290px] overflow-y-auto"><div class="${ssrRenderClass([currentTheme.value.bannerGrad, "group relative overflow-hidden rounded-xl bg-gradient-to-r p-3 text-white transition-all duration-300 hover:ring-2 hover:ring-blue-500 sm:p-3.5"])}"><div class="flex items-center justify-between"><span class="rounded bg-white/20 px-1.5 py-0.5 text-[9px] font-bold uppercase backdrop-blur">AI Banner</span><span class="hidden group-hover:inline-flex items-center gap-1 rounded bg-slate-950/80 px-1.5 py-0.5 text-[9px] text-cyan-300 backdrop-blur">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:pencil-simple-bold",
        class: "h-2.5 w-2.5"
      }, null, _parent));
      _push(` ${ssrInterpolate(copy.value.editor.inlineEdit)}</span></div><h4 class="mt-2 text-xs sm:text-sm font-black leading-snug line-clamp-1">${ssrInterpolate(currentTheme.value.bannerTitle)}</h4><p class="mt-0.5 text-[10px] text-white/80 line-clamp-1">${ssrInterpolate(currentTheme.value.bannerSub)}</p><div class="mt-2.5"><span class="${ssrRenderClass([currentTheme.value.buttonClass, "inline-block rounded-md px-2.5 py-1 text-[10px] font-bold shadow-xs transition-transform"])}"> Shop Now \u2192 </span></div></div><div class="group relative rounded-xl border border-slate-100 bg-slate-50/60 p-2.5 transition-all hover:border-blue-400 hover:bg-blue-50/20"><div class="flex items-center justify-between mb-2"><span class="text-[10px] font-black text-slate-800">Featured Products</span><span class="text-[9px] text-blue-600 font-bold flex items-center gap-0.5">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:sparkle-bold",
        class: "h-2.5 w-2.5"
      }, null, _parent));
      _push(` ${ssrInterpolate(copy.value.editor.aiProductPick)}</span></div>`);
      if (aiLayoutMode.value === "grid") {
        _push(`<div class="grid grid-cols-3 gap-1.5"><!--[-->`);
        ssrRenderList(currentTheme.value.products, (prod) => {
          _push(`<div class="flex flex-col justify-between rounded-lg bg-white p-2 border border-slate-100 shadow-2xs"><div class="flex h-8 items-center justify-center rounded bg-slate-50 text-slate-700">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: prod.icon,
            class: ["h-4 w-4", currentTheme.value.accentColor]
          }, null, _parent));
          _push(`</div><p class="mt-1 text-[9px] font-bold text-slate-900 truncate">${ssrInterpolate(prod.name)}</p><div class="mt-0.5 flex items-baseline justify-between"><span class="text-[10px] font-black text-slate-900">${ssrInterpolate(prod.price)}</span><span class="text-[8px] text-slate-400 line-through">${ssrInterpolate(prod.oldPrice)}</span></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else if (currentTheme.value.products[0]) {
        _push(`<div class="flex items-center gap-3 rounded-lg bg-white p-2 border border-slate-100 shadow-2xs"><div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-700">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: currentTheme.value.products[0].icon,
          class: ["h-7 w-7", currentTheme.value.accentColor]
        }, null, _parent));
        _push(`</div><div class="min-w-0 flex-1"><span class="rounded bg-red-100 text-red-600 px-1 py-0.2 text-[8px] font-bold">Best Seller</span><p class="text-xs font-black text-slate-900 truncate mt-0.5">${ssrInterpolate(currentTheme.value.products[0].name)}</p><p class="text-[11px] font-black text-slate-900 mt-0.5">${ssrInterpolate(currentTheme.value.products[0].price)} <span class="text-[9px] text-slate-400 line-through font-normal">${ssrInterpolate(currentTheme.value.products[0].oldPrice)}</span></p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex items-center justify-between rounded-lg border border-slate-100 bg-white px-2.5 py-1.5 text-[9px] text-slate-500 font-medium"><span class="flex items-center gap-1">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:truck-bold",
        class: "h-3 w-3 text-emerald-500"
      }, null, _parent));
      _push(` Free Global Shipping</span><span class="flex items-center gap-1">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:shield-check-bold",
        class: "h-3 w-3 text-blue-500"
      }, null, _parent));
      _push(` 30-Day Guarantee</span></div></div></div></div><div class="mt-2.5 flex items-center justify-between px-1 text-[10px] font-mono text-slate-400"><span class="flex items-center gap-1">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:check-circle-fill",
        class: "h-3 w-3 text-emerald-400"
      }, null, _parent));
      _push(` ${ssrInterpolate(copy.value.editor.draftNote)}</span><span class="text-cyan-300">${ssrInterpolate(copy.value.editor.liveHint)}</span></div></div></div></section><section class="border-b border-slate-100 bg-slate-900 py-16 px-5 sm:px-8 lg:px-12 text-white"><div class="mx-auto max-w-[1240px]"><div class="flex flex-col md:flex-row md:items-end justify-between gap-6"><div><div class="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-mono font-bold text-blue-400">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:squares-four-bold",
        class: "h-3.5 w-3.5"
      }, null, _parent));
      _push(`<span>ATOMIC COMPONENT SPECTRUM</span></div><h2 class="mt-3 text-2xl font-black sm:text-3xl lg:text-4xl tracking-tight">${ssrInterpolate(copy.value.atomic.title)}</h2><p class="mt-2 max-w-2xl text-sm text-slate-400">${ssrInterpolate(copy.value.atomic.description)}</p></div><div class="flex flex-wrap gap-1.5 rounded-2xl bg-slate-800/80 p-1.5 border border-slate-700/60 text-xs font-bold"><!--[-->`);
      ssrRenderList(atomicCategories.value, (cat) => {
        _push(`<button type="button" class="${ssrRenderClass([activeAtomicCat.value === cat.id ? "bg-blue-600 text-white shadow-md" : "text-slate-400 hover:text-slate-200 hover:bg-slate-700/50", "flex items-center gap-1.5 rounded-xl px-3 py-1.5 transition-all"])}">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: cat.icon,
          class: "h-3.5 w-3.5"
        }, null, _parent));
        _push(`<span>${ssrInterpolate(cat.name)}</span></button>`);
      });
      _push(`<!--]--></div></div><div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"><!--[-->`);
      ssrRenderList(currentCategoryBlocks.value, (block) => {
        _push(`<div class="group relative rounded-2xl border border-slate-800 bg-slate-950/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-slate-800/50 hover:shadow-xl hover:shadow-blue-900/10"><div class="flex items-center justify-between"><span class="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: block.icon,
          class: "h-5 w-5"
        }, null, _parent));
        _push(`</span><span class="rounded px-1.5 py-0.5 text-[10px] font-mono font-bold text-slate-400 bg-slate-800 border border-slate-700">${ssrInterpolate(block.tag)}</span></div><h3 class="mt-4 text-base font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">${ssrInterpolate(block.name)}</h3><p class="mt-1.5 text-xs leading-relaxed text-slate-400">${ssrInterpolate(block.desc)}</p></div>`);
      });
      _push(`<!--]--></div><div class="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-slate-800 bg-slate-950/40 px-5 py-3 text-xs text-slate-400"><div class="flex items-center gap-6"><span class="flex items-center gap-1.5">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:lightning-bold",
        class: "h-3.5 w-3.5 text-amber-400"
      }, null, _parent));
      _push(` ${ssrInterpolate(copy.value.atomic.specNative)}</span><span class="flex items-center gap-1.5">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:device-mobile-camera-bold",
        class: "h-3.5 w-3.5 text-cyan-400"
      }, null, _parent));
      _push(` ${ssrInterpolate(copy.value.atomic.specFlex)}</span><span class="flex items-center gap-1.5">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:shield-check-bold",
        class: "h-3.5 w-3.5 text-emerald-400"
      }, null, _parent));
      _push(` ${ssrInterpolate(copy.value.atomic.specXss)}</span></div><span class="font-mono text-[11px] text-slate-500">Shoply Decor Schema Engine v2.0</span></div></div></section><section class="relative bg-slate-50/70 px-5 py-20 sm:px-8 sm:py-24 lg:px-12"><div class="mx-auto max-w-[1240px]"><div class="text-center"><div class="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:cpu-bold",
        class: "h-3.5 w-3.5"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(copy.value.features.subtitle)}</span></div><h2 class="mt-3 text-3xl font-black text-slate-900 sm:text-4xl tracking-tight">${ssrInterpolate(copy.value.features.title)}</h2></div><div class="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3"><!--[-->`);
      ssrRenderList(copy.value.features.items, (item, idx) => {
        _push(`<article class="group relative rounded-3xl border border-slate-200/90 bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5 overflow-hidden"><div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div><div class="flex items-center justify-between"><span class="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: item.icon,
          class: "h-6 w-6"
        }, null, _parent));
        _push(`</span><span class="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-mono font-bold text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors"> #FEATURE_0${ssrInterpolate(idx + 1)}</span></div><h3 class="mt-5 text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors">${ssrInterpolate(item.title)}</h3><p class="mt-3 text-sm leading-7 text-slate-600">${ssrInterpolate(item.desc)}</p></article>`);
      });
      _push(`<!--]--></div></div></section><section class="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12 border-t border-slate-100"><div class="mx-auto max-w-[1240px]"><div class="text-center"><div class="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 border border-emerald-200">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:flow-arrow-bold",
        class: "h-3.5 w-3.5"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(copy.value.flow.badge)}</span></div><h2 class="mt-3 text-3xl font-black text-slate-900 sm:text-4xl tracking-tight">${ssrInterpolate(copy.value.flow.title)}</h2></div><ol class="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4 relative"><!--[-->`);
      ssrRenderList(copy.value.flow.steps, (item, idx) => {
        _push(`<li class="group relative rounded-3xl border border-slate-200 bg-slate-50/50 p-7 transition-all duration-300 hover:bg-white hover:border-blue-400 hover:shadow-xl"><div class="flex items-center justify-between"><span class="text-4xl font-black tracking-tighter text-blue-600/20 group-hover:text-blue-600/40 transition-colors font-mono">${ssrInterpolate(item.step)}</span><span class="rounded px-2 py-0.5 text-[10px] font-mono font-bold text-slate-500 bg-white border border-slate-200"> PHASE 0${ssrInterpolate(idx + 1)}</span></div><h3 class="mt-4 text-base font-black text-slate-900 group-hover:text-blue-600 transition-colors">${ssrInterpolate(item.title)}</h3><p class="mt-2 text-sm leading-7 text-slate-600">${ssrInterpolate(item.desc)}</p></li>`);
      });
      _push(`<!--]--></ol></div></section><section class="bg-slate-950 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 text-white border-t border-slate-800"><div class="mx-auto max-w-[1240px]"><div class="grid gap-10 lg:grid-cols-2"><div class="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-7 sm:p-8 backdrop-blur"><div class="flex items-center justify-between"><h2 class="flex items-center gap-2.5 text-xl font-black text-emerald-400">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:shield-check-fill",
        class: "h-6 w-6 text-emerald-400"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(copy.value.safety.title)}</span></h2><span class="rounded-full bg-emerald-400/10 px-2.5 py-0.5 text-[10px] font-mono font-bold text-emerald-300 border border-emerald-500/30"> SERVER GUARANTEED </span></div><p class="mt-2 text-sm text-emerald-200/70">${ssrInterpolate(copy.value.safety.subtitle)}</p><div class="mt-6 space-y-3"><!--[-->`);
      ssrRenderList(copy.value.safety.items, (item) => {
        _push(`<div class="flex items-start gap-3 rounded-2xl bg-emerald-950/40 border border-emerald-500/20 p-3.5 text-sm text-emerald-100">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:check-circle-bold",
          class: "mt-1 h-4 w-4 shrink-0 text-emerald-400"
        }, null, _parent));
        _push(`<span class="leading-relaxed">${ssrInterpolate(item)}</span></div>`);
      });
      _push(`<!--]--></div></div><div class="rounded-3xl border border-slate-800 bg-slate-900/60 p-7 sm:p-8 backdrop-blur"><div class="flex items-center justify-between"><h2 class="flex items-center gap-2.5 text-xl font-black text-slate-100">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:compass-tool-bold",
        class: "h-6 w-6 text-blue-400"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(copy.value.limits.title)}</span></h2><span class="rounded-full bg-slate-800 px-2.5 py-0.5 text-[10px] font-mono font-bold text-slate-400 border border-slate-700"> ENGINEERING REALITY </span></div><p class="mt-2 text-sm text-slate-400">${ssrInterpolate(copy.value.limits.subtitle)}</p><div class="mt-6 space-y-3"><!--[-->`);
      ssrRenderList(copy.value.limits.items, (item) => {
        _push(`<div class="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 transition-colors hover:border-slate-700"><div class="flex items-center gap-2"><span class="h-2 w-2 rounded-full bg-amber-400/80"></span><h3 class="text-sm font-black text-slate-200">${ssrInterpolate(item.title)}</h3></div><p class="mt-1.5 pl-4 text-xs leading-relaxed text-slate-400">${ssrInterpolate(item.desc)}</p></div>`);
      });
      _push(`<!--]--></div></div></div></div></section><section class="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12 border-t border-slate-100"><div class="mx-auto max-w-[900px]"><div class="text-center"><div class="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:question-bold",
        class: "h-3.5 w-3.5"
      }, null, _parent));
      _push(`<span>KNOWLEDGE BASE</span></div><h2 class="mt-3 text-3xl font-black text-slate-900 sm:text-4xl tracking-tight">${ssrInterpolate(copy.value.faq.title)}</h2></div><div class="mt-12 space-y-4"><!--[-->`);
      ssrRenderList(copy.value.faq.items, (item, index) => {
        _push(`<div class="${ssrRenderClass([openFaq.value === index ? "border-blue-400 bg-blue-50/40 shadow-sm" : "border-slate-200 bg-slate-50/30 hover:border-slate-300", "overflow-hidden rounded-2xl border transition-all duration-200"])}"><button type="button" class="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left font-bold text-slate-900"${ssrRenderAttr("aria-expanded", openFaq.value === index)}><span class="text-base sm:text-lg">${ssrInterpolate(item.question)}</span>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:caret-down-bold",
          class: ["h-4 w-4 shrink-0 transition-transform duration-200", openFaq.value === index ? "rotate-180 text-blue-600" : "text-slate-400"]
        }, null, _parent));
        _push(`</button><div class="border-t border-slate-100 px-5 pb-5 pt-3 sm:px-6 sm:pb-6 text-sm leading-7 text-slate-600 sm:text-base" style="${ssrRenderStyle(openFaq.value === index ? null : { display: "none" })}">${ssrInterpolate(item.answer)}</div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
      _push(ssrRenderComponent(_component_PageCta, {
        title: copy.value.cta.title,
        description: copy.value.cta.description,
        "primary-label": copy.value.cta.primary,
        "secondary-label": copy.value.cta.secondary,
        "primary-url": unref(signUpUrl),
        "secondary-url": unref(localePath)("/themes")
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shoply/pages/page/store-design.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=store-design-a_KfjWIl.mjs.map
