import { u as useI18n, B as useLocaleRouter, bc as useSeoMeta, _ as _sfc_main$Q, J as __nuxt_component_3$3 } from './server.mjs';
import __nuxt_component_1 from './PageCta-BP5IliLQ.mjs';
import { defineComponent, computed, ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { u as useShoplyAuthLinks } from './useShoplyAuthLinks-B5lAxGEG.mjs';
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

const storeDesignLocales = {
  zh: {
    seo: {
      title: "\u5E97\u94FA\u88C5\u4FEE_\u5728\u771F\u5B9E\u9875\u9762\u4E0A\u62D6\u62FD\u7F16\u8F91 | \u8F7B\u94FA",
      description: "\u8F7B\u94FA\u7684\u88C5\u4FEE\u5DE5\u4F5C\u53F0\u76F4\u63A5\u5728\u771F\u5B9E\u5E97\u94FA\u9875\u9762\u4E0A\u7F16\u8F91\uFF1A\u62D6\u62FD\u8C03\u6574\u533A\u5757\u987A\u5E8F\uFF0C\u70B9\u5F00\u5373\u6539\u6587\u5B57\u4E0E\u56FE\u7247\uFF0C53 \u79CD\u5185\u5BB9\u533A\u5757\u4E0E 14 \u5957\u9875\u9762\u6A21\u677F\uFF0C76 \u9879\u4E3B\u9898\u8BBE\u7F6E\u4E00\u5904\u6539\u5168\u7AD9\u3002\u6539\u52A8\u5148\u8FDB\u8349\u7A3F\uFF0C\u786E\u8BA4\u53D1\u5E03\u987E\u5BA2\u624D\u770B\u5F97\u5230\uFF0C\u6BCF\u6B21\u53D1\u5E03\u7559\u53EF\u6062\u590D\u7684\u5FEB\u7167\u3002",
      keywords: "\u5E97\u94FA\u88C5\u4FEE,\u72EC\u7ACB\u7AD9\u53EF\u89C6\u5316\u88C5\u4FEE,\u7535\u5546\u9875\u9762\u7F16\u8F91\u5668,\u81EA\u9002\u5E94\u533A\u5757\u8BBE\u8BA1,\u514D\u4EE3\u7801\u88C5\u4FEE,\u72EC\u7ACB\u7AD9\u6A21\u677F\u7F16\u8F91"
    },
    hero: {
      badge: "\u5E97\u94FA\u88C5\u4FEE",
      titleMain: "\u5728\u771F\u5B9E\u7684\u5E97\u94FA\u9875\u9762\u4E0A",
      titleHighlight: "\u76F4\u63A5\u6539",
      description: "\u7F16\u8F91\u753B\u5E03\u5C31\u662F\u987E\u5BA2\u770B\u5230\u7684\u90A3\u4E2A\u9875\u9762\u2014\u2014\u540C\u4E00\u5957\u7EC4\u4EF6\u3001\u540C\u4E00\u4EFD\u4E3B\u9898\u8BBE\u7F6E\u3001\u540C\u4E00\u6279\u771F\u5B9E\u5546\u54C1\u6570\u636E\u3002\u62D6\u533A\u5757\u3001\u70B9\u5F00\u6539\u5B57\uFF0C\u6539\u5B8C\u5148\u8FDB\u8349\u7A3F\uFF0C\u786E\u8BA4\u53D1\u5E03\u987E\u5BA2\u624D\u770B\u5F97\u5230\u3002",
      primaryCta: "\u514D\u8D39\u5F00\u5E97\u8BD5\u8BD5",
      secondaryCta: "\u6D4F\u89C8\u4E3B\u9898",
      canvasTitle: "\u88C5\u4FEE\u5DE5\u4F5C\u53F0",
      canvasHint: "\u5DE6\u8FB9\u533A\u5757\u5E93\uFF0C\u4E2D\u95F4\u771F\u5B9E\u9875\u9762\uFF0C\u53F3\u8FB9\u5C5E\u6027",
      canvasBlocks: ["\u9996\u5C4F\u6A2A\u5E45", "\u7279\u8272\u5546\u54C1", "\u56FE\u6587\u4ECB\u7ECD", "\u5BA2\u6237\u8BC4\u4EF7", "\u5E38\u89C1\u95EE\u9898"],
      canvasDrag: "\u62D6\u52A8\u8C03\u6574\u987A\u5E8F"
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
      title: "Store design \u2014 edit on the real page | Qingpu",
      description: "Qingpu's design workspace edits your real storefront page: drag sections into place, click text to change it, 53 content sections and 14 page templates, 76 theme settings that apply site-wide. Changes stay in a draft until you publish, and every publish keeps a restorable snapshot.",
      keywords: "storefront design,visual store builder,ecommerce page editor,drag and drop sections,responsive blocks,no code ecommerce builder"
    },
    hero: {
      badge: "Store design",
      titleMain: "Edit the page",
      titleHighlight: "your customers actually see",
      description: "The canvas is the live storefront page \u2014 same components, same theme settings, same real product data. Drag sections, click to edit text. Everything stays in a draft until you publish.",
      primaryCta: "Open a free store",
      secondaryCta: "Browse themes",
      canvasTitle: "Design workspace",
      canvasHint: "Sections on the left, the real page in the middle, settings on the right",
      canvasBlocks: ["Hero banner", "Featured products", "Image with text", "Testimonials", "FAQ"],
      canvasDrag: "Drag to reorder"
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
  }
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "store-design",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale } = useI18n();
    const { localePath } = useLocaleRouter();
    const { signUpUrl } = useShoplyAuthLinks();
    const copy = computed(() => locale.value.startsWith("zh") ? storeDesignLocales.zh : storeDesignLocales.en);
    const openFaq = ref(0);
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
      const _component_UIcon = _sfc_main$Q;
      const _component_NuxtLink = __nuxt_component_3$3;
      const _component_PageCta = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white" }, _attrs))}><section class="relative isolate overflow-hidden bg-[#2678ff] text-white"><div class="absolute inset-0 -z-10"><div class="animate-shoply-glow absolute -left-28 top-10 h-80 w-80 rounded-full bg-cyan-300/25 blur-3xl"></div><div class="animate-shoply-float-delayed absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-indigo-900/30 blur-3xl"></div><div class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-blue-800/20 to-transparent"></div></div><div class="mx-auto grid max-w-[1200px] items-center gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:px-12"><div><span class="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-50 backdrop-blur-sm">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:layout-bold",
        class: "h-3.5 w-3.5"
      }, null, _parent));
      _push(` ${ssrInterpolate(copy.value.hero.badge)}</span><h1 class="mt-6 text-4xl font-black leading-tight sm:text-5xl">${ssrInterpolate(copy.value.hero.titleMain)} <span class="text-amber-300">${ssrInterpolate(copy.value.hero.titleHighlight)}</span></h1><p class="mt-5 max-w-xl text-base leading-8 text-blue-50/90">${ssrInterpolate(copy.value.hero.description)}</p><div class="mt-8 flex flex-wrap gap-3"><a${ssrRenderAttr("href", unref(signUpUrl))} class="rounded-full bg-white px-7 py-3.5 text-sm font-extrabold text-blue-600 shadow-xl shadow-blue-950/15 transition-all hover:-translate-y-0.5 hover:shadow-2xl active:scale-95">${ssrInterpolate(copy.value.hero.primaryCta)}</a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/themes"),
        class: "rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 active:scale-95"
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
      _push(`</div></div><div class="rounded-3xl border border-white/30 bg-white/15 p-4 shadow-2xl backdrop-blur"><div class="flex items-center justify-between px-2 pb-3"><p class="text-sm font-black text-white">${ssrInterpolate(copy.value.hero.canvasTitle)}</p><span class="flex gap-1.5" aria-hidden="true"><span class="h-2.5 w-2.5 rounded-full bg-white/30"></span><span class="h-2.5 w-2.5 rounded-full bg-white/30"></span><span class="h-2.5 w-2.5 rounded-full bg-blue-400"></span></span></div><div class="grid grid-cols-[92px_minmax(0,1fr)] gap-3"><ul class="space-y-2"><!--[-->`);
      ssrRenderList(copy.value.hero.canvasBlocks, (block) => {
        _push(`<li class="truncate rounded-lg bg-white/10 px-2 py-2 text-[11px] font-bold text-slate-200">${ssrInterpolate(block)}</li>`);
      });
      _push(`<!--]--></ul><div class="space-y-2 rounded-2xl bg-white p-3"><div class="flex items-center gap-2 rounded-xl border-2 border-dashed border-blue-400 bg-blue-50 px-3 py-4">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:dots-six-vertical-bold",
        class: "h-4 w-4 shrink-0 text-blue-500"
      }, null, _parent));
      _push(`<span class="text-[11px] font-black text-blue-700">${ssrInterpolate(copy.value.hero.canvasDrag)}</span></div><div class="h-16 rounded-xl bg-slate-100"></div><div class="grid grid-cols-3 gap-2"><div class="h-12 rounded-lg bg-slate-100"></div><div class="h-12 rounded-lg bg-slate-100"></div><div class="h-12 rounded-lg bg-slate-100"></div></div><div class="h-10 rounded-xl bg-slate-100"></div></div></div><p class="px-2 pt-3 text-[11px] leading-5 text-slate-400">${ssrInterpolate(copy.value.hero.canvasHint)}</p></div></div></section><section class="px-5 py-20 sm:px-8 sm:py-24 lg:px-12"><div class="mx-auto max-w-[1200px]"><div class="text-center"><h2 class="text-3xl font-black text-slate-900 sm:text-4xl">${ssrInterpolate(copy.value.features.title)}</h2><p class="mt-4 text-base text-slate-600">${ssrInterpolate(copy.value.features.subtitle)}</p></div><div class="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3"><!--[-->`);
      ssrRenderList(copy.value.features.items, (item) => {
        _push(`<article class="rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg"><span class="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: item.icon,
          class: "h-6 w-6"
        }, null, _parent));
        _push(`</span><h3 class="mt-5 text-lg font-black text-slate-900">${ssrInterpolate(item.title)}</h3><p class="mt-3 text-sm leading-7 text-slate-600">${ssrInterpolate(item.desc)}</p></article>`);
      });
      _push(`<!--]--></div></div></section><section class="bg-slate-50 px-5 py-20 sm:px-8 sm:py-24 lg:px-12"><div class="mx-auto max-w-[1200px]"><h2 class="text-center text-3xl font-black text-slate-900 sm:text-4xl">${ssrInterpolate(copy.value.flow.title)}</h2><ol class="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4"><!--[-->`);
      ssrRenderList(copy.value.flow.steps, (item) => {
        _push(`<li class="rounded-3xl border border-slate-200 bg-white p-7"><span class="text-3xl font-black text-blue-600/20">${ssrInterpolate(item.step)}</span><h3 class="mt-3 text-base font-black text-slate-900">${ssrInterpolate(item.title)}</h3><p class="mt-2 text-sm leading-7 text-slate-600">${ssrInterpolate(item.desc)}</p></li>`);
      });
      _push(`<!--]--></ol></div></section><section class="px-5 py-20 sm:px-8 sm:py-24 lg:px-12"><div class="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-2"><div class="rounded-3xl border border-emerald-200 bg-emerald-50/60 p-8"><h2 class="flex items-center gap-2 text-xl font-black text-emerald-900">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:shield-check-bold",
        class: "h-5 w-5 shrink-0"
      }, null, _parent));
      _push(` ${ssrInterpolate(copy.value.safety.title)}</h2><p class="mt-2 text-sm leading-7 text-emerald-900/70">${ssrInterpolate(copy.value.safety.subtitle)}</p><ul class="mt-5 space-y-3"><!--[-->`);
      ssrRenderList(copy.value.safety.items, (item) => {
        _push(`<li class="flex gap-3 text-sm leading-7 text-emerald-950">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:check-circle-fill",
          class: "mt-1.5 h-4 w-4 shrink-0 text-emerald-600"
        }, null, _parent));
        _push(`<span>${ssrInterpolate(item)}</span></li>`);
      });
      _push(`<!--]--></ul></div><div class="rounded-3xl border border-slate-200 bg-white p-8"><h2 class="text-xl font-black text-slate-900">${ssrInterpolate(copy.value.limits.title)}</h2><p class="mt-2 text-sm leading-7 text-slate-500">${ssrInterpolate(copy.value.limits.subtitle)}</p><dl class="mt-5 space-y-4"><!--[-->`);
      ssrRenderList(copy.value.limits.items, (item) => {
        _push(`<div class="rounded-2xl bg-slate-50 p-4"><dt class="text-sm font-black text-slate-900">${ssrInterpolate(item.title)}</dt><dd class="mt-1 text-sm leading-7 text-slate-600">${ssrInterpolate(item.desc)}</dd></div>`);
      });
      _push(`<!--]--></dl></div></div></section><section class="bg-slate-50 px-5 py-20 sm:px-8 sm:py-24 lg:px-12"><div class="mx-auto max-w-[900px]"><h2 class="text-center text-3xl font-black text-slate-900 sm:text-4xl">${ssrInterpolate(copy.value.faq.title)}</h2><div class="mt-12 space-y-4"><!--[-->`);
      ssrRenderList(copy.value.faq.items, (item, index) => {
        _push(`<div class="${ssrRenderClass([openFaq.value === index ? "border-blue-300 bg-blue-50/50 shadow-sm" : "border-slate-200 bg-white hover:border-slate-300", "overflow-hidden rounded-2xl border transition-all duration-200"])}"><button type="button" class="flex w-full items-center justify-between gap-4 p-6 text-left font-bold text-slate-900"${ssrRenderAttr("aria-expanded", openFaq.value === index)}><span class="text-base sm:text-lg">${ssrInterpolate(item.question)}</span>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:caret-down-bold",
          class: ["h-4 w-4 shrink-0 transition-transform duration-200", openFaq.value === index ? "rotate-180 text-blue-600" : "text-slate-400"]
        }, null, _parent));
        _push(`</button><div class="border-t border-slate-100 px-6 pb-6 pt-4 text-sm leading-7 text-slate-600 sm:text-base" style="${ssrRenderStyle(openFaq.value === index ? null : { display: "none" })}">${ssrInterpolate(item.answer)}</div></div>`);
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
