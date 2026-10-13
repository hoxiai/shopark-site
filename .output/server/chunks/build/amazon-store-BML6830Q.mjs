import { dk as buildAssetsURL } from '../nitro/nitro.mjs';
import { r as useSettings, u as useI18n, bf as useSeoMeta, _ as _sfc_main$R } from './server.mjs';
import __nuxt_component_2 from './ShoplyConsultDialog-BkiMWPem.mjs';
import { defineComponent, computed, ref, unref, isRef, useSSRContext } from 'vue';
import { ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { u as useShoplyConsult } from './useShoplyConsult-Bc6OO7cj.mjs';
import { u as useShoplyAuthLinks } from './useShoplyAuthLinks-CNxPcIoY.mjs';
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
import './ShoplyLeadForm-12rK7weU.mjs';
import './CaptchaSlider-BJqv3jPw.mjs';

const bannerImg = "" + buildAssetsURL("banner.CSQBdV_V.jpg");
const drainageImg = "" + buildAssetsURL("drainage.BOMywPz2.png");
const socialMediaImg = "" + buildAssetsURL("social_media.0KKxHB61.png");
const dataImg = "" + buildAssetsURL("data.pFvYjMul.png");
const marketingImg = "" + buildAssetsURL("marketing.D-kC_2sn.png");
const amazonStoreLocales = {
  zh: {
    seo: {
      title: "\u4E9A\u9A6C\u900A\u5356\u5BB6\u8425\u9500\u72EC\u7ACB\u7AD9",
      description: "\u4E3A\u4E9A\u9A6C\u900A\u5356\u5BB6\u6253\u9020\u54C1\u724C\u8425\u9500\u72EC\u7ACB\u7AD9\uFF0C\u6253\u7834\u5355\u9875\u4E0E\u5E73\u53F0\u9650\u5236\u3002\u627F\u63A5\u5E7F\u544A\u4E0E\u793E\u5A92\u6D41\u91CF\uFF0C\u6C89\u6DC0\u81EA\u4E3B\u4E70\u5BB6\u8D44\u4EA7\uFF0C\u5F00\u8F9F\u7AD9\u5916\u5F15\u6D41\u4E0E\u589E\u957F\u65B0\u8DEF\u5F84\u3002",
      keywords: "\u4E9A\u9A6C\u900A\u8425\u9500\u7AD9,\u7AD9\u5916\u5F15\u6D41,\u54C1\u724C\u72EC\u7ACB\u7AD9"
    },
    hero: {
      badge: "\u4E9A\u9A6C\u900A\u5356\u5BB6\u4E13\u5C5E\u8425\u9500\u72EC\u7ACB\u7AD9\u89E3\u51B3\u65B9\u6848",
      titleMain: "\u65B0\u8DE8\u5883\u7535\u5546\u6A21\u5F0F\u52A9\u529B\u4E9A\u9A6C\u900A\u5356\u5BB6",
      titleHighlight: "\u51B2\u51FA\u91CD\u56F4\uFF0C\u5F00\u542F\u5168\u65B0\u589E\u957F\u5C40\u52BF",
      description: "\u4E13\u4E1A\u4E9A\u9A6C\u900A\u7AD9\u5916\u5F15\u6D41\u7CFB\u7EDF\uFF1A\u6253\u7834\u7AD9\u5185 CPC \u7ADE\u4EF7\u5185\u5377\u4E0E\u6D41\u91CF\u58C1\u5792\u3002\u901A\u8FC7\u201C\u54C1\u724C\u5316\u5305\u88C5 + \u7AD9\u5916\u7CBE\u51C6\u5F15\u6D41 + Buy on Amazon \u4E00\u952E\u76F4\u8FBE + \u79C1\u57DF\u6570\u636E\u6C89\u6DC0\u201D\uFF0C\u5168\u9762\u63D0\u5347 Listing \u641C\u7D22\u6743\u91CD\u4E0E\u5E97\u94FA\u9500\u91CF\u3002",
      primaryCta: "\u514D\u8D39\u6CE8\u518C\u8BD5\u7528",
      secondaryCta: "\u9884\u7EA6\u65B9\u6848\u6F14\u793A",
      proofPills: ["14\u5E74\u6D77\u5916\u5E7F\u544A\u6295\u653E\u7ECF\u9A8C", "Listing \u6743\u91CD\u52A0\u901F\u63D0\u5347", "100% \u81EA\u4E3B\u79C1\u57DF\u7528\u6237\u6C60", "\u652F\u6301 Amazon \u5B98\u65B9\u5F52\u56E0"],
      floatingCard1Title: "BSR \u641C\u7D22\u6743\u91CD\u63D0\u5347",
      floatingCard1Subtitle: "\u5173\u952E\u8BCD\u81EA\u7136\u6392\u540D\u52A0\u901F\u4E0A\u5347",
      floatingCard2Title: "Buy on Amazon",
      floatingCard2Subtitle: "\u6BEB\u79D2\u7EA7\u76F4\u8FBE Amazon Listing",
      trustPills: ["\u5408\u89C4\u5F15\u6D41\u9632\u5C01\u5E97", "\u63D0\u5347 Listing \u641C\u7D22\u6743\u91CD", "\u6C89\u6DC0\u81EA\u4E3B\u79C1\u57DF\u4E70\u5BB6\u6C60"],
      showcase: {
        attributionBadge: "Amazon Attribution \xB7 10% \u5B98\u65B9\u5F52\u56E0\u8FD4\u5229",
        relayNote: "\u6BEB\u79D2\u7EA7\u8DF3\u8F6C Listing \xB7 Prime \u514D\u8D39\u9694\u65E5\u8FBE",
        relayCta: "\u8DF3\u8F6C\u8D2D\u4E70",
        dtcTitle: "\u72EC\u7ACB\u7AD9\u76F4\u8D2D (\u4EAB\u9996\u5355 9 \u6298)",
        dtcSubtitle: "\u6C89\u6DC0\u7B2C\u4E00\u65B9\u4E70\u5BB6\u8D44\u4EA7 \xB7 0% \u5E73\u53F0\u62BD\u6210",
        dtcCta: "\u79C1\u57DF\u7ED3\u8D26",
        advA9: "A9 \u641C\u7D22\u52A0\u6743",
        advA9Sub: "\u7CBE\u51C6\u610F\u5411\u8FC7\u6EE4",
        advBrb: "10% BRB \u8FD4\u5229",
        advBrbSub: "\u5B98\u65B9\u5F52\u56E0\u5956\u52B1",
        advAudience: "\u4E70\u5BB6\u79C1\u57DF\u6C89\u6DC0",
        advAudienceSub: "\u6301\u7EED\u590D\u8D2D\u88C2\u53D8",
        complianceArch: "\u5408\u89C4\u9632\u5173\u8054\u67B6\u6784",
        pixelTracking: "Meta / Google / TikTok \u50CF\u7D20\u8FFD\u8E2A",
        ownDomain: "\u81EA\u6709\u54C1\u724C\u72EC\u7ACB\u57DF\u540D"
      }
    },
    overview: {
      tag: "\u7834\u5C40\u4E4B\u9053",
      titleLine1: "\u4E13\u4E1A\u4E9A\u9A6C\u900A\u7AD9\u5916\u5F15\u6D41",
      titleLine2: "\u52A9\u529B\u5E73\u53F0\u5E97\u94FA\u9AD8\u6536\u76CA",
      description: "\u7AD9\u5916\u5F15\u6D41\uFF0C\u5373\u5C06\u7535\u5546\u5E73\u53F0\u5916\u7684\u5BA2\u6237\u901A\u8FC7\u5E7F\u544A\u6295\u653E\u7B49\u65B9\u6CD5\u5438\u5F15\u5230\u5E73\u53F0\u7AD9\u5185\u3002\u968F\u7740\u4E9A\u9A6C\u900A\u7B49\u5E73\u53F0\u7AD9\u5185\u6D41\u91CF\u65E5\u8D8B\u7D27\u5F20\uFF0C\u60F3\u8981\u6253\u7834\u5E97\u94FA\u589E\u957F\u58C1\u5792\uFF0C\u8FDB\u884C\u7AD9\u5916\u5F15\u6D41\u662F\u4E0D\u53EF\u6216\u7F3A\u7684\u8FD0\u8425\u65B9\u6CD5\u3002",
      bulletPoints: [
        {
          title: "\u610F\u5411\u6F0F\u6597\u8FC7\u6EE4\u673A\u5236",
          desc: "\u72EC\u7ACB\u7AD9\u8BE6\u60C5\u9875\u5145\u5206\u5C55\u793A\u89C6\u9891\u4E0E\u5356\u70B9\uFF0C\u8FDB\u5E97\u4E70\u5BB6\u8D2D\u4E70\u610F\u5411\u6781\u9AD8\uFF0C\u907F\u514D\u65E0\u6548\u70B9\u51FB\u62C9\u4F4E Listing \u8F6C\u5316\u7387\u3002"
        },
        {
          title: "\u652F\u6301 Amazon Attribution \u5B98\u65B9\u5F52\u56E0",
          desc: "\u65E0\u7F1D\u5BF9\u63A5\u4E9A\u9A6C\u900A\u54C1\u724C\u5F15\u6D41\u5956\u52B1\u8BA1\u5212\uFF08Brand Referral Bonus\uFF09\uFF0C\u4EAB\u53D7\u5E73\u5747 10% \u9500\u552E\u8FD4\u5229\u3002"
        },
        {
          title: "\u89C4\u907F\u5355\u4E00\u5E73\u53F0\u5C01\u5E97\u4E0E\u89C4\u5219\u98CE\u9669",
          desc: "\u62E5\u6709\u5C5E\u4E8E\u81EA\u5DF1\u7684\u72EC\u7ACB\u57DF\u540D\u4E0E\u54C1\u724C\u8D44\u4EA7\uFF0C\u5373\u4F7F\u5E73\u53F0\u89C4\u5219\u53D8\u52A8\uFF0C\u6D41\u91CF\u547D\u8109\u59CB\u7EC8\u7262\u7262\u638C\u63E1\u5728\u81EA\u5DF1\u624B\u4E2D\u3002"
        }
      ],
      ctaText: "\u514D\u8D39\u5F00\u59CB\u8BD5\u7528"
    },
    comparison: {
      cardTitle: "\u4F20\u7EDF\u5E73\u53F0\u7ADE\u4EF7 vs \u72EC\u7ACB\u7AD9\u7AD9\u5916\u5F15\u6D41",
      cardSubtitle: "\u4E3A\u4EC0\u4E48\u5934\u90E8\u5927\u5356\u90FD\u5728\u5E03\u5C40\u72EC\u7ACB\u8425\u9500\u7AD9\uFF1F",
      traditionalLabel: "\u4F20\u7EDF\u5355\u4E00\u5E73\u53F0",
      ownedLabel: "\u8F7B\u94FA \u72EC\u7ACB\u7AD9\u65B9\u6848",
      items: [
        {
          dimension: "\u6D41\u91CF\u5F52\u5C5E",
          traditional: "\u516C\u57DF\u516C\u6C60\u7ADE\u4EF7\uFF0C\u6D41\u91CF\u7528\u5B8C\u5373\u8D70\uFF0C\u6210\u672C\u9010\u5E74\u7FFB\u500D",
          qingpu: "\u6C89\u6DC0\u4E3A\u4E13\u5C5E\u7B2C\u4E00\u65B9\u79C1\u57DF\u6D41\u91CF\u6C60\uFF0C\u7EC8\u8EAB\u514D\u8D39\u591A\u6B21\u89E6\u8FBE"
        },
        {
          dimension: "\u8F6C\u5316\u7387\u6307\u6807",
          traditional: "\u7AD9\u5916\u76F4\u63A5\u5F15\u6D41\u81F3 Listing \u6613\u62C9\u4F4E\u8F6C\u5316\u7387\u4F24\u6743\u91CD",
          qingpu: "\u72EC\u7ACB\u7AD9\u524D\u7F6E\u610F\u5411\u8FC7\u6EE4\uFF0C\u8FDB\u5E97\u6D41\u91CF\u9AD8\u8F6C\u5316\uFF0C\u53CD\u54FA A9 \u6392\u540D"
        },
        {
          dimension: "\u54C1\u724C\u8868\u73B0\u529B",
          traditional: "\u53D7\u9650\u5E73\u53F0\u8BE6\u60C5\u9875\u6A21\u677F\u4E0E\u4E25\u683C\u5B57\u6570\uFF0C\u96BE\u4EE5\u8BB2\u51FA\u6EA2\u4EF7",
          qingpu: "\u5BCC\u5A92\u4F53\u89C6\u9891\u3001\u7EA2\u4EBA\u5F00\u7BB1\u4E0E\u591A\u56FE\u753B\u5ECA\uFF0C\u5145\u5206\u8868\u8FBE\u54C1\u724C\u4EF7\u503C"
        },
        {
          dimension: "\u83B7\u5BA2\u4E0E\u590D\u8D2D",
          traditional: "\u4E70\u5BB6\u4FE1\u606F\u5168\u53D7\u5E73\u53F0\u5C4F\u853D\uFF0C\u65E0\u6CD5\u8FDB\u884C\u4E8C\u6B21\u8425\u9500",
          qingpu: "\u6C89\u6DC0\u90AE\u7BB1\u4E0E\u8054\u7CFB\u65B9\u5F0F\uFF0C\u7ED3\u5408\u81EA\u52A8\u5316\u90AE\u4EF6\u9A71\u52A8\u9AD8\u9891\u590D\u8D2D"
        }
      ]
    },
    pillarsHeader: {
      badge: "\u56DB\u5927\u6838\u5FC3\u80FD\u529B",
      title: "\u6253\u9020\u4E9A\u9A6C\u900A\u7AD9\u5916\u6301\u7EED\u589E\u957F\u5F15\u64CE",
      description: "\u4ECE\u7CBE\u51C6\u83B7\u5BA2\u5230\u54C1\u724C\u6EA2\u4EF7\uFF0C\u4ECE\u6570\u636E\u6C89\u6DC0\u5230\u4E00\u952E\u8DF3\u8F6C\uFF0C\u63D0\u4F9B\u5168\u94FE\u8DEF\u95ED\u73AF\u5DE5\u5177"
    },
    pillar1: {
      tag: "\u7CBE\u51C6\u5F15\u6D41 \xB7 \u63D0\u5347\u6743\u91CD",
      title: "\u7CBE\u51C6\u5F15\u6D41\uFF0C\u63D0\u5347\u4EA7\u54C1\u6392\u540D",
      description: "\u501F\u52A9 \u8F7B\u94FA \u56E2\u961F 14 \u5E74\u6D77\u5916\u5E7F\u544A\u6295\u653E\u7ECF\u9A8C\uFF0C\u901A\u8FC7\u7CBE\u51C6\u5F15\u6D41\u5C06\u4F18\u8D28\u7528\u6237\u6D41\u91CF\u5438\u5F15\u81F3\u5E73\u53F0\u5E97\u94FA\uFF0C\u4EE5\u6B64\u6765\u63D0\u5347\u4EA7\u54C1\u6743\u91CD\u53CA\u4EA7\u54C1\u6392\u540D\u3002\u53EA\u5C06\u9AD8\u8D2D\u4E70\u610F\u5411\u7684\u6D41\u91CF\u5BFC\u5165\u4E9A\u9A6C\u900A\uFF0C\u5F62\u6210\u826F\u6027\u98DE\u8F6E\u3002",
      bullets: [
        "\u57FA\u4E8E Google Search\u3001Meta \u4E0E TikTok \u7684\u7CBE\u51C6\u4EBA\u7FA4\u5B9A\u5411",
        "\u610F\u5411\u8FC7\u6EE4\u673A\u5236\u6709\u6548\u4FDD\u62A4\u5E76\u63D0\u5347 Listing \u8F6C\u5316\u7387",
        "\u4E9A\u9A6C\u900A A9 \u7B97\u6CD5\u6781\u5176\u5956\u52B1\u5916\u90E8\u5E26\u6765\u7684\u4F18\u8D28\u589E\u91CF\u9500\u552E"
      ],
      ctaText: "\u4F53\u9A8C\u7CBE\u51C6\u5F15\u6D41"
    },
    pillar2: {
      tag: "\u793E\u5A92\u77E9\u9635 \xB7 \u54C1\u724C\u6EA2\u4EF7",
      title: "\u793E\u5A92\u8425\u9500\uFF0C\u6253\u9020\u54C1\u724C\u5F62\u8C61",
      description: "\u901A\u8FC7 \u8F7B\u94FA \u5EFA\u7ACB\u72EC\u7ACB\u7AD9 + Facebook / YouTube / TikTok / Instagram \u7B49\u793E\u4EA4\u5A92\u4F53\u7684\u7EC4\u5408\u8425\u9500\u77E9\u9635\uFF0C\u9010\u6B65\u6253\u9020\u54C1\u724C\u5F62\u8C61\uFF0C\u5EFA\u7ACB\u4F18\u8D28\u6D41\u91CF\u6C60\uFF0C\u83B7\u5F97\u54C1\u724C\u6EA2\u4EF7\u3002",
      bullets: [
        "\u4E3A\u6D77\u5916\u7EA2\u4EBA\u5E26\u8D27\u91CF\u8EAB\u5B9A\u5236\u4E13\u5C5E\u843D\u5730\u9875\u4E0E\u63A8\u5E7F\u77ED\u94FE",
        "\u6253\u7834\u5E73\u53F0\u5355\u4E00\u56FE\u6587\u9650\u5236\uFF0C\u652F\u6301\u9AD8\u6E05\u89C6\u9891\u4E0E\u771F\u5B9E\u6D4B\u8BC4",
        "\u6C89\u6DC0\u54C1\u724C\u7C89\u4E1D\uFF0C\u4ECE\u767D\u724C\u4F4E\u4EF7\u7ADE\u4E89\u8D70\u5411\u9AD8\u6EA2\u4EF7\u51FA\u6D77\u54C1\u724C"
      ],
      ctaText: "\u5F00\u542F\u793E\u5A92\u8425\u9500"
    },
    pillar3: {
      tag: "\u6570\u636E\u8D44\u4EA7 \xB7 \u9A71\u52A8\u590D\u8D2D",
      title: "\u638C\u63E1\u6570\u636E\uFF0C\u4FC3\u8FDB\u7528\u6237\u590D\u8D2D",
      description: "\u4F7F\u7528 \u8F7B\u94FA \u63D0\u4F9B\u7684\u987E\u5BA2\u7BA1\u7406\u529F\u80FD\uFF0C\u5E2E\u52A9\u5356\u5BB6\u5EFA\u7ACB\u81EA\u5DF1\u7684\u79C1\u57DF\u6D41\u91CF\uFF0C\u501F\u52A9\u5404\u79CD\u8425\u9500\u5DE5\u5177\u6765\u4FC3\u8FDB\u590D\u8D2D\u3002\u6446\u8131\u5355\u4E00\u4EA4\u6613\u5173\u7CFB\uFF0C\u5EFA\u7ACB\u6301\u7EED\u4EA7\u751F\u5229\u6DA6\u7684\u957F\u671F\u7528\u6237\u6C60\u3002",
      bullets: [
        "\u5408\u89C4\u6C89\u6DC0\u7B2C\u4E00\u65B9\u4E70\u5BB6\u90AE\u7BB1\u3001\u7535\u8BDD\u4E0E\u8D2D\u4E70\u504F\u597D\u6807\u7B7E",
        "\u5185\u7F6E\u5F03\u8D2D\u633D\u56DE\u3001\u8282\u65E5\u4F18\u60E0\u4E0E\u65B0\u54C1\u4E0A\u65B0\u81EA\u52A8\u5316\u90AE\u4EF6\u6D41",
        "\u901A\u8FC7\u4F1A\u5458\u79EF\u5206\u4E0E\u72EC\u5BB6\u6298\u6263\uFF0C\u5927\u5E45\u63D0\u9AD8\u5355\u5BA2\u7EC8\u8EAB\u4EF7\u503C\uFF08LTV\uFF09"
      ],
      ctaText: "\u5EFA\u7ACB\u79C1\u57DF\u6D41\u91CF"
    },
    pillar4: {
      tag: "\u8425\u9500\u5229\u5668 \xB7 \u6781\u901F\u76F4\u8FBE",
      title: "\u8425\u9500\u5229\u5668\uFF0C\u4E00\u952E\u8F7B\u677E\u5F15\u6D41",
      description: "\u901A\u8FC7\u5728 \u8F7B\u94FA \u540E\u53F0\u6DFB\u52A0 Buy on Amazon \u6309\u94AE\u7684\u5546\u54C1\u94FE\u63A5\uFF0C\u72EC\u7ACB\u7AD9\u524D\u53F0\u7684\u5546\u54C1\u8BE6\u60C5\u9875\u5C06\u663E\u793A\u4E9A\u9A6C\u900A\u5F15\u6D41\u6309\u94AE\uFF0C\u70B9\u51FB\u5C06\u81EA\u52A8\u8DF3\u8F6C\u5230\u5BF9\u5E94\u7684\u4E9A\u9A6C\u900A listing \u9875\u9762\uFF0C\u52A9\u529B\u5E73\u53F0\u5356\u5BB6\u4E00\u952E\u8F7B\u677E\u5F00\u542F\u5F15\u6D41\u3002",
      bullets: [
        "\u539F\u751F Amazon \u5B98\u65B9\u98CE\u683C\u76F4\u8FBE\u6309\u94AE\uFF0C\u7B26\u5408\u6D77\u5916\u4E70\u5BB6\u5FC3\u667A",
        "\u591A\u53D8\u4F53\u5C3A\u5BF8/\u989C\u8272\u7CBE\u51C6\u6620\u5C04\u4E0D\u540C ASIN\uFF0C\u65E0\u7F1D\u76F4\u8FBE",
        "\u5B8C\u7F8E\u652F\u6301 Amazon Attribution\uFF0C\u7545\u4EAB 10% \u5B98\u65B9\u54C1\u724C\u8FD4\u5229"
      ],
      ctaText: "\u4E00\u952E\u5F00\u542F\u5F15\u6D41"
    },
    workflow: {
      eyebrow: "\u95ED\u73AF\u8FD0\u8F6C\u673A\u5236",
      title: "4 \u6B65\u6253\u9020\u7AD9\u5916\u5230\u7AD9\u5185\u7684\u9500\u552E\u98DE\u8F6E",
      subtitle: "\u5168\u94FE\u8DEF\u6253\u901A\u516C\u57DF\u6295\u653E\u3001\u72EC\u7ACB\u7AD9\u627F\u63A5\u3001\u5E73\u53F0\u7ED3\u7B97\u4E0E\u79C1\u57DF\u7559\u5B58",
      steps: [
        {
          title: "\u5168\u7F51\u591A\u6E20\u9053\u89E6\u8FBE",
          desc: "\u901A\u8FC7 TikTok \u7EA2\u4EBA\u77ED\u89C6\u9891\u3001Google \u641C\u7D22\u5173\u952E\u8BCD\u6216 Meta \u5E7F\u544A\u5B9E\u73B0\u5168\u57DF\u66DD\u5149\u79CD\u8349\u3002",
          icon: "ph:megaphone-duotone"
        },
        {
          title: "\u72EC\u7ACB\u7AD9\u6DF1\u5EA6\u627F\u63A5",
          desc: "\u4E70\u5BB6\u8FDB\u5165\u54C1\u724C\u72EC\u7ACB\u7AD9\u67E5\u770B\u8BE6\u7EC6\u5356\u70B9\u3001\u8BC4\u6D4B\u89C6\u9891\u4E0E\u4F7F\u7528\u573A\u666F\uFF0C\u5B8C\u6210\u610F\u5411\u8FC7\u6EE4\u4E0E\u5FC3\u7406\u79CD\u8349\u3002",
          icon: "ph:storefront-duotone"
        },
        {
          title: "\u4E00\u952E\u76F4\u8FBE Amazon",
          desc: "\u9AD8\u610F\u5411\u4E70\u5BB6\u70B9\u51FB\u201CBuy on Amazon\u201D\u76F4\u8FBE Listing\uFF0C\u4EAB\u53D7 Prime \u6781\u901F\u914D\u9001\u5B89\u5FC3\u5B8C\u6210\u7ED3\u7B97\u3002",
          icon: "ph:arrow-square-out-duotone"
        },
        {
          title: "\u79C1\u57DF\u6C89\u6DC0\u4E0E\u590D\u8D2D",
          desc: "\u4E70\u5BB6\u9886\u5238\u7559\u8D44\u6C89\u6DC0\u8FDB\u4E13\u5C5E CRM\uFF0C\u540E\u7EED\u901A\u8FC7\u81EA\u52A8\u5316\u90AE\u4EF6\u548C\u77ED\u4FE1\u5B9E\u73B0 0 \u6210\u672C\u4E8C\u6B21\u89E6\u8FBE\u3002",
          icon: "ph:arrows-clockwise-duotone"
        }
      ]
    },
    faq: {
      title: "\u5E38\u89C1\u7591\u95EE\u89E3\u7B54",
      subtitle: "\u89E3\u7B54\u4E9A\u9A6C\u900A\u5356\u5BB6\u6700\u5173\u5FC3\u7684\u5F15\u6D41\u4E0E\u8F6C\u5316\u95EE\u9898",
      items: [
        {
          question: "\u7AD9\u5916\u5F15\u6D41\u4F1A\u4E0D\u4F1A\u62C9\u4F4E\u4E9A\u9A6C\u900A Listing \u8F6C\u5316\u7387\u4ECE\u800C\u5F71\u54CD\u641C\u7D22\u6743\u91CD\uFF1F",
          answer: "\u6070\u6070\u76F8\u53CD\uFF01\u76F4\u63A5\u6295\u653E\u5E7F\u544A\u5230\u4E9A\u9A6C\u900A\u5BB9\u6613\u56E0\u4E3A\u53D7\u4F17\u51B2\u52A8\u70B9\u51FB\u800C\u8F6C\u5316\u7387\u504F\u4F4E\u3002\u800C\u901A\u8FC7 \u8F7B\u94FA \u72EC\u7ACB\u7AD9\u4F5C\u4E3A\u4E2D\u8F6C\u7AD9\uFF0C\u4E70\u5BB6\u5728\u72EC\u7ACB\u7AD9\u5DF2\u7ECF\u6DF1\u5165\u4E86\u89E3\u4E86\u5546\u54C1\u529F\u80FD\u3001\u89C4\u683C\u4E0E\u89C6\u9891\uFF0C\u53EA\u6709\u5177\u5907\u5F3A\u8D2D\u4E70\u610F\u5411\u7684\u5BA2\u6237\u624D\u4F1A\u70B9\u51FB\u201CBuy on Amazon\u201D\u3002\u6D41\u5165\u4E9A\u9A6C\u900A\u7684\u6D41\u91CF\u5177\u5907\u6781\u9AD8\u7684\u8F6C\u5316\u7387\uFF0C\u53CD\u800C\u4F1A\u5411 A9 \u7B97\u6CD5\u91CA\u653E\u5F3A\u70C8\u4FE1\u53F7\uFF0C\u5E26\u52A8\u81EA\u7136\u641C\u7D22\u6392\u540D\u5927\u5E45\u4E0A\u5347\uFF01"
        },
        {
          question: "\u4EC0\u4E48\u662F\u4E9A\u9A6C\u900A\u54C1\u724C\u5F15\u6D41\u5956\u52B1\u8BA1\u5212\uFF08Brand Referral Bonus\uFF09\uFF1F",
          answer: "\u8FD9\u662F\u4E9A\u9A6C\u900A\u5B98\u65B9\u4E3A\u9F13\u52B1\u5356\u5BB6\u7AD9\u5916\u5F15\u6D41\u63A8\u51FA\u7684\u91CD\u78C5\u8FD4\u5229\u653F\u7B56\u3002\u5356\u5BB6\u901A\u8FC7\u7AD9\u5916\u5F15\u6D41\u5E76\u5728\u4E9A\u9A6C\u900A\u4EA7\u751F\u8D2D\u4E70\uFF0C\u4E9A\u9A6C\u900A\u5B98\u65B9\u5C06\u6309\u9500\u552E\u989D\u5E73\u5747\u8FD4\u8FD8\u7EA6 10% \u7684\u4F63\u91D1\u5956\u52B1\uFF01\u8F7B\u94FA \u5B8C\u7F8E\u652F\u6301\u914D\u7F6E\u5305\u542B Amazon Attribution \u6807\u7B7E\u7684\u8DF3\u8F6C\u94FE\u63A5\uFF0C\u52A9\u60A8\u5728\u7206\u5355\u7684\u540C\u65F6\u76F4\u63A5\u8D5A\u53D6\u9AD8\u989D\u4F63\u91D1\u8865\u8D34\u3002"
        },
        {
          question: "\u72EC\u7ACB\u7AD9\u53EF\u4EE5\u540C\u65F6\u652F\u6301\u81EA\u4E3B\u7ED3\u8D26\u548C\u4E9A\u9A6C\u900A\u8DF3\u8F6C\u5417\uFF1F",
          answer: "\u5B8C\u5168\u652F\u6301\uFF01\u60A8\u53EF\u4EE5\u7075\u6D3B\u914D\u7F6E\uFF1A\u65E2\u53EF\u4EE5\u5F00\u542F\u201C\u4EC5 Buy on Amazon\u201D\u7684\u7EAF\u5F15\u6D41\u6A21\u5F0F\uFF0C\u4E5F\u53EF\u4EE5\u540C\u65F6\u5F00\u542F\u72EC\u7ACB\u7AD9\u4FE1\u7528\u5361/PayPal \u7ED3\u8D26\u901A\u9053\u3002\u65E2\u4E0D\u9519\u8FC7\u4E60\u60EF\u5728\u4E9A\u9A6C\u900A Prime \u4E0B\u5355\u7684\u7528\u6237\uFF0C\u53C8\u80FD\u6293\u4F4F\u5E0C\u671B\u5728\u72EC\u7ACB\u7AD9\u76F4\u63A5\u652F\u4ED8\u7684\u5BA2\u7FA4\u3002"
        },
        {
          question: "\u642D\u5EFA\u8FD9\u6837\u7684\u8425\u9500\u72EC\u7ACB\u7AD9\u9700\u8981\u61C2\u4EE3\u7801\u6216\u8D2D\u4E70\u670D\u52A1\u5668\u5417\uFF1F",
          answer: "\u5B8C\u5168\u4E0D\u9700\u8981\uFF01\u8F7B\u94FA \u662F\u771F\u6B63\u7684\u5F00\u7BB1\u5373\u7528 SaaS \u7CFB\u7EDF\uFF0C\u65E0\u9700\u8D2D\u4E70\u670D\u52A1\u5668\u3001\u65E0\u9700\u914D\u7F6E\u73AF\u5883\u3002\u7CFB\u7EDF\u5185\u7F6E\u4E13\u4E1A\u9488\u5BF9\u8DE8\u5883\u7535\u5546\u4E0E\u4E9A\u9A6C\u900A\u5F15\u6D41\u4F18\u5316\u7684\u54CD\u5E94\u5F0F\u6A21\u677F\u4E0E\u5546\u54C1\u7BA1\u7406\u540E\u53F0\uFF0C\u65B0\u624B\u5356\u5BB6\u4EC5\u9700 10 \u5206\u949F\u5373\u53EF\u5B8C\u6210\u4E0A\u7EBF\u3002"
        }
      ]
    },
    bottomCta: {
      title: "\u62E5\u62B1 \u8F7B\u94FA \u7ED9\u60A8\u5E26\u6765\u7684\u8425\u6536\u589E\u957F\u65B0\u65F6\u4EE3\uFF01",
      subtitle: "0 \u5143\u5FEB\u901F\u6CE8\u518C\uFF0C\u7ACB\u5373\u5F00\u542F\u4E9A\u9A6C\u900A\u7AD9\u5916\u7CBE\u51C6\u5F15\u6D41\u4E0E\u79C1\u57DF\u589E\u957F\u65B0\u5F15\u64CE\u3002",
      notes: ["14\u5929\u514D\u8D39\u8BD5\u7528", "\u65E0\u9700\u7ED1\u5B9A\u4FE1\u7528\u5361", "\u5B98\u65B9\u51FA\u6D77\u987E\u95EE\u652F\u6301"],
      primaryText: "\u7ACB\u5373\u514D\u8D39\u6CE8\u518C",
      secondaryText: "\u9884\u7EA6\u4E13\u5C5E\u6F14\u793A"
    }
  },
  "zh-HK": {
    seo: {
      title: "\u4E9E\u99AC\u905C\u8CE3\u5BB6\u71DF\u92B7\u7368\u7ACB\u7AD9",
      description: "\u70BA\u4E9E\u99AC\u905C\u8CE3\u5BB6\u6253\u9020\u54C1\u724C\u71DF\u92B7\u7368\u7ACB\u7AD9\uFF0C\u6253\u7834\u55AE\u9801\u8207\u5E73\u53F0\u9650\u5236\u3002\u627F\u63A5\u5EE3\u544A\u8207\u793E\u5A92\u6D41\u91CF\uFF0C\u6C89\u6FB1\u81EA\u4E3B\u8CB7\u5BB6\u8CC7\u7522\uFF0C\u958B\u95E2\u7AD9\u5916\u5F15\u6D41\u8207\u589E\u9577\u65B0\u8DEF\u5F91\u3002",
      keywords: "\u4E9E\u99AC\u905C\u71DF\u92B7\u7AD9,\u7AD9\u5916\u5F15\u6D41,\u54C1\u724C\u7368\u7ACB\u7AD9"
    },
    hero: {
      badge: "\u4E9E\u99AC\u905C\u8CE3\u5BB6\u5C08\u5C6C\u71DF\u92B7\u7368\u7ACB\u7AD9\u89E3\u6C7A\u65B9\u6848",
      titleMain: "\u65B0\u8DE8\u5883\u96FB\u5546\u6A21\u5F0F\u52A9\u529B\u4E9E\u99AC\u905C\u8CE3\u5BB6",
      titleHighlight: "\u885D\u51FA\u91CD\u570D\uFF0C\u958B\u555F\u5168\u65B0\u589E\u9577\u5C40\u52E2",
      description: "\u5C08\u696D\u4E9E\u99AC\u905C\u7AD9\u5916\u5F15\u6D41\u7CFB\u7D71\uFF1A\u6253\u7834\u7AD9\u5167 CPC \u7AF6\u50F9\u5167\u6372\u8207\u6D41\u91CF\u58C1\u58D8\u3002\u901A\u904E\u201C\u54C1\u724C\u5316\u5305\u88DD + \u7AD9\u5916\u7CBE\u6E96\u5F15\u6D41 + Buy on Amazon \u4E00\u9375\u76F4\u9054 + \u79C1\u57DF\u6578\u64DA\u6C89\u6FB1\u201D\uFF0C\u5168\u9762\u63D0\u5347 Listing \u641C\u7D22\u6B0A\u91CD\u8207\u5E97\u92EA\u92B7\u91CF\u3002",
      primaryCta: "\u514D\u8CBB\u8A3B\u518A\u8A66\u7528",
      secondaryCta: "\u9810\u7D04\u65B9\u6848\u6F14\u793A",
      proofPills: ["14\u5E74\u6D77\u5916\u5EE3\u544A\u6295\u653E\u7D93\u9A57", "Listing \u6B0A\u91CD\u52A0\u901F\u63D0\u5347", "100% \u81EA\u4E3B\u79C1\u57DF\u7528\u6236\u6C60", "\u652F\u6301 Amazon \u5B98\u65B9\u6B78\u56E0"],
      floatingCard1Title: "BSR \u641C\u7D22\u6B0A\u91CD\u63D0\u5347",
      floatingCard1Subtitle: "\u95DC\u9375\u8A5E\u81EA\u7136\u6392\u540D\u52A0\u901F\u4E0A\u5347",
      floatingCard2Title: "Buy on Amazon",
      floatingCard2Subtitle: "\u6BEB\u79D2\u7D1A\u76F4\u9054 Amazon Listing",
      trustPills: ["\u5408\u898F\u5F15\u6D41\u9632\u5C01\u5E97", "\u63D0\u5347 Listing \u641C\u7D22\u6B0A\u91CD", "\u6C89\u6FB1\u81EA\u4E3B\u79C1\u57DF\u8CB7\u5BB6\u6C60"],
      showcase: {
        attributionBadge: "Amazon Attribution \xB7 10% \u5B98\u65B9\u6B78\u56E0\u8FD4\u5229",
        relayNote: "\u6BEB\u79D2\u7D1A\u8DF3\u8F49 Listing \xB7 Prime \u514D\u8CBB\u9694\u65E5\u9054",
        relayCta: "\u8DF3\u8F49\u8CFC\u8CB7",
        dtcTitle: "\u7368\u7ACB\u7AD9\u76F4\u8CFC (\u4EAB\u9996\u55AE 9 \u6298)",
        dtcSubtitle: "\u6C89\u6FB1\u7B2C\u4E00\u65B9\u8CB7\u5BB6\u8CC7\u7522 \xB7 0% \u5E73\u53F0\u62BD\u6210",
        dtcCta: "\u79C1\u57DF\u7D50\u8CEC",
        advA9: "A9 \u641C\u7D22\u52A0\u6B0A",
        advA9Sub: "\u7CBE\u6E96\u610F\u5411\u904E\u6FFE",
        advBrb: "10% BRB \u8FD4\u5229",
        advBrbSub: "\u5B98\u65B9\u6B78\u56E0\u734E\u52F5",
        advAudience: "\u8CB7\u5BB6\u79C1\u57DF\u6C89\u6FB1",
        advAudienceSub: "\u6301\u7E8C\u5FA9\u8CFC\u88C2\u8B8A",
        complianceArch: "\u5408\u898F\u9632\u95DC\u806F\u67B6\u69CB",
        pixelTracking: "Meta / Google / TikTok \u50CF\u7D20\u8FFD\u8E64",
        ownDomain: "\u81EA\u6709\u54C1\u724C\u7368\u7ACB\u57DF\u540D"
      }
    },
    overview: {
      tag: "\u7834\u5C40\u4E4B\u9053",
      titleLine1: "\u5C08\u696D\u4E9E\u99AC\u905C\u7AD9\u5916\u5F15\u6D41",
      titleLine2: "\u52A9\u529B\u5E73\u53F0\u5E97\u92EA\u9AD8\u6536\u76CA",
      description: "\u7AD9\u5916\u5F15\u6D41\uFF0C\u5373\u5C07\u96FB\u5546\u5E73\u53F0\u5916\u7684\u5BA2\u6236\u901A\u904E\u5EE3\u544A\u6295\u653E\u7B49\u65B9\u6CD5\u5438\u5F15\u5230\u5E73\u53F0\u7AD9\u5167\u3002\u96A8\u7740\u4E9E\u99AC\u905C\u7B49\u5E73\u53F0\u7AD9\u5167\u6D41\u91CF\u65E5\u8DA8\u7DCA\u5F35\uFF0C\u60F3\u8981\u6253\u7834\u5E97\u92EA\u589E\u9577\u58C1\u58D8\uFF0C\u9032\u884C\u7AD9\u5916\u5F15\u6D41\u662F\u4E0D\u53EF\u6216\u7F3A\u7684\u904B\u71DF\u65B9\u6CD5\u3002",
      bulletPoints: [
        {
          title: "\u610F\u5411\u6F0F\u6597\u904E\u6FFE\u6A5F\u5236",
          desc: "\u7368\u7ACB\u7AD9\u8A73\u60C5\u9801\u5145\u5206\u5C55\u793A\u8996\u983B\u8207\u8CE3\u9EDE\uFF0C\u9032\u5E97\u8CB7\u5BB6\u8CFC\u8CB7\u610F\u5411\u6975\u9AD8\uFF0C\u907F\u514D\u7121\u6548\u9EDE\u64CA\u62C9\u4F4E Listing \u8F49\u5316\u7387\u3002"
        },
        {
          title: "\u652F\u6301 Amazon Attribution \u5B98\u65B9\u6B78\u56E0",
          desc: "\u7121\u7E2B\u5C0D\u63A5\u4E9E\u99AC\u905C\u54C1\u724C\u5F15\u6D41\u734E\u52F5\u8A08\u5283\uFF08Brand Referral Bonus\uFF09\uFF0C\u4EAB\u53D7\u5E73\u5747 10% \u92B7\u552E\u8FD4\u5229\u3002"
        },
        {
          title: "\u898F\u907F\u55AE\u4E00\u5E73\u53F0\u5C01\u5E97\u8207\u898F\u5247\u98A8\u96AA",
          desc: "\u64C1\u6709\u5C6C\u65BC\u81EA\u5DF1\u7684\u7368\u7ACB\u57DF\u540D\u8207\u54C1\u724C\u8CC7\u7522\uFF0C\u5373\u4F7F\u5E73\u53F0\u898F\u5247\u8B8A\u52D5\uFF0C\u6D41\u91CF\u547D\u8108\u59CB\u7D42\u7262\u7262\u638C\u63E1\u5728\u81EA\u5DF1\u624B\u4E2D\u3002"
        }
      ],
      ctaText: "\u514D\u8CBB\u958B\u59CB\u8A66\u7528"
    },
    comparison: {
      cardTitle: "\u50B3\u7D71\u5E73\u53F0\u7AF6\u50F9 vs \u7368\u7ACB\u7AD9\u7AD9\u5916\u5F15\u6D41",
      cardSubtitle: "\u70BA\u4EC0\u9EBC\u982D\u90E8\u5927\u8CE3\u90FD\u5728\u4F48\u5C40\u7368\u7ACB\u71DF\u92B7\u7AD9\uFF1F",
      traditionalLabel: "\u50B3\u7D71\u55AE\u4E00\u5E73\u53F0",
      ownedLabel: "\u8F15\u92EA \u7368\u7ACB\u7AD9\u65B9\u6848",
      items: [
        {
          dimension: "\u6D41\u91CF\u6B78\u5C6C",
          traditional: "\u516C\u57DF\u516C\u6C60\u7AF6\u50F9\uFF0C\u6D41\u91CF\u7528\u5B8C\u5373\u8D70\uFF0C\u6210\u672C\u9010\u5E74\u7FFB\u500D",
          qingpu: "\u6C89\u6FB1\u70BA\u5C08\u5C6C\u7B2C\u4E00\u65B9\u79C1\u57DF\u6D41\u91CF\u6C60\uFF0C\u7D42\u8EAB\u514D\u8CBB\u591A\u6B21\u89F8\u9054"
        },
        {
          dimension: "\u8F49\u5316\u7387\u6307\u6A19",
          traditional: "\u7AD9\u5916\u76F4\u63A5\u5F15\u6D41\u81F3 Listing \u6613\u62C9\u4F4E\u8F49\u5316\u7387\u50B7\u6B0A\u91CD",
          qingpu: "\u7368\u7ACB\u7AD9\u524D\u7F6E\u610F\u5411\u904E\u6FFE\uFF0C\u9032\u5E97\u6D41\u91CF\u9AD8\u8F49\u5316\uFF0C\u53CD\u54FA A9 \u6392\u540D"
        },
        {
          dimension: "\u54C1\u724C\u8868\u73FE\u529B",
          traditional: "\u53D7\u9650\u5E73\u53F0\u8A73\u60C5\u9801\u6A21\u677F\u8207\u56B4\u683C\u5B57\u6578\uFF0C\u96E3\u4EE5\u8B1B\u51FA\u6EA2\u50F9",
          qingpu: "\u5BCC\u5A92\u9AD4\u8996\u983B\u3001\u7D05\u4EBA\u958B\u7BB1\u8207\u591A\u5716\u756B\u5ECA\uFF0C\u5145\u5206\u8868\u9054\u54C1\u724C\u50F9\u503C"
        },
        {
          dimension: "\u7372\u5BA2\u8207\u5FA9\u8CFC",
          traditional: "\u8CB7\u5BB6\u4FE1\u606F\u5168\u53D7\u5E73\u53F0\u5C4F\u853D\uFF0C\u7121\u6CD5\u9032\u884C\u4E8C\u6B21\u71DF\u92B7",
          qingpu: "\u6C89\u6FB1\u90F5\u7BB1\u8207\u806F\u7E6B\u65B9\u5F0F\uFF0C\u7D50\u5408\u81EA\u52D5\u5316\u90F5\u4EF6\u9A45\u52D5\u9AD8\u983B\u5FA9\u8CFC"
        }
      ]
    },
    pillarsHeader: {
      badge: "\u56DB\u5927\u6838\u5FC3\u80FD\u529B",
      title: "\u6253\u9020\u4E9E\u99AC\u905C\u7AD9\u5916\u6301\u7E8C\u589E\u9577\u5F15\u64CE",
      description: "\u5F9E\u7CBE\u6E96\u7372\u5BA2\u5230\u54C1\u724C\u6EA2\u50F9\uFF0C\u5F9E\u6578\u64DA\u6C89\u6FB1\u5230\u4E00\u9375\u8DF3\u8F49\uFF0C\u63D0\u4F9B\u5168\u93C8\u8DEF\u9589\u74B0\u5DE5\u5177"
    },
    pillar1: {
      tag: "\u7CBE\u6E96\u5F15\u6D41 \xB7 \u63D0\u5347\u6B0A\u91CD",
      title: "\u7CBE\u6E96\u5F15\u6D41\uFF0C\u63D0\u5347\u7522\u54C1\u6392\u540D",
      description: "\u501F\u52A9 \u8F15\u92EA \u5718\u968A 14 \u5E74\u6D77\u5916\u5EE3\u544A\u6295\u653E\u7D93\u9A57\uFF0C\u901A\u904E\u7CBE\u6E96\u5F15\u6D41\u5C07\u512A\u8CEA\u7528\u6236\u6D41\u91CF\u5438\u5F15\u81F3\u5E73\u53F0\u5E97\u92EA\uFF0C\u4EE5\u6B64\u4F86\u63D0\u5347\u7522\u54C1\u6B0A\u91CD\u53CA\u7522\u54C1\u6392\u540D\u3002\u53EA\u5C07\u9AD8\u8CFC\u8CB7\u610F\u5411\u7684\u6D41\u91CF\u5C0E\u5165\u4E9E\u99AC\u905C\uFF0C\u5F62\u6210\u826F\u6027\u98DB\u8F2A\u3002",
      bullets: [
        "\u57FA\u65BC Google Search\u3001Meta \u8207 TikTok \u7684\u7CBE\u6E96\u4EBA\u7FA4\u5B9A\u5411",
        "\u610F\u5411\u904E\u6FFE\u6A5F\u5236\u6709\u6548\u4FDD\u8B77\u4E26\u63D0\u5347 Listing \u8F49\u5316\u7387",
        "\u4E9E\u99AC\u905C A9 \u7B97\u6CD5\u6975\u5176\u734E\u52F5\u5916\u90E8\u5E36\u4F86\u7684\u512A\u8CEA\u589E\u91CF\u92B7\u552E"
      ],
      ctaText: "\u9AD4\u9A57\u7CBE\u6E96\u5F15\u6D41"
    },
    pillar2: {
      tag: "\u793E\u5A92\u77E9\u9663 \xB7 \u54C1\u724C\u6EA2\u50F9",
      title: "\u793E\u5A92\u71DF\u92B7\uFF0C\u6253\u9020\u54C1\u724C\u5F62\u8C61",
      description: "\u901A\u904E \u8F15\u92EA \u5EFA\u7ACB\u7368\u7ACB\u7AD9 + Facebook / YouTube / TikTok / Instagram \u7B49\u793E\u4EA4\u5A92\u9AD4\u7684\u7D44\u5408\u71DF\u92B7\u77E9\u9663\uFF0C\u9010\u6B65\u6253\u9020\u54C1\u724C\u5F62\u8C61\uFF0C\u5EFA\u7ACB\u512A\u8CEA\u6D41\u91CF\u6C60\uFF0C\u7372\u5F97\u54C1\u724C\u6EA2\u50F9\u3002",
      bullets: [
        "\u70BA\u6D77\u5916\u7D05\u4EBA\u5E36\u8CA8\u91CF\u8EAB\u5B9A\u88FD\u5C08\u5C6C\u843D\u5730\u9801\u8207\u63A8\u5EE3\u77ED\u93C8",
        "\u6253\u7834\u5E73\u53F0\u55AE\u4E00\u5716\u6587\u9650\u5236\uFF0C\u652F\u6301\u9AD8\u6E05\u8996\u983B\u8207\u771F\u5BE6\u6E2C\u8A55",
        "\u6C89\u6FB1\u54C1\u724C\u7C89\u7D72\uFF0C\u5F9E\u767D\u724C\u4F4E\u50F9\u7AF6\u722D\u8D70\u5411\u9AD8\u6EA2\u50F9\u51FA\u6D77\u54C1\u724C"
      ],
      ctaText: "\u958B\u555F\u793E\u5A92\u71DF\u92B7"
    },
    pillar3: {
      tag: "\u6578\u64DA\u8CC7\u7522 \xB7 \u9A45\u52D5\u5FA9\u8CFC",
      title: "\u638C\u63E1\u6578\u64DA\uFF0C\u4FC3\u9032\u7528\u6236\u5FA9\u8CFC",
      description: "\u4F7F\u7528 \u8F15\u92EA \u63D0\u4F9B\u7684\u9867\u5BA2\u7BA1\u7406\u529F\u80FD\uFF0C\u5E6B\u52A9\u8CE3\u5BB6\u5EFA\u7ACB\u81EA\u5DF1\u7684\u79C1\u57DF\u6D41\u91CF\uFF0C\u501F\u52A9\u5404\u7A2E\u71DF\u92B7\u5DE5\u5177\u4F86\u4FC3\u9032\u5FA9\u8CFC\u3002\u64FA\u812B\u55AE\u4E00\u4EA4\u6613\u95DC\u4FC2\uFF0C\u5EFA\u7ACB\u6301\u7E8C\u7522\u751F\u5229\u6F64\u7684\u9577\u671F\u7528\u6236\u6C60\u3002",
      bullets: [
        "\u5408\u898F\u6C89\u6FB1\u7B2C\u4E00\u65B9\u8CB7\u5BB6\u90F5\u7BB1\u3001\u96FB\u8A71\u8207\u8CFC\u8CB7\u504F\u597D\u6A19\u7C64",
        "\u5167\u7F6E\u68C4\u8CFC\u633D\u56DE\u3001\u7BC0\u65E5\u512A\u60E0\u8207\u65B0\u54C1\u4E0A\u65B0\u81EA\u52D5\u5316\u90F5\u4EF6\u6D41",
        "\u901A\u904E\u6703\u54E1\u7A4D\u5206\u8207\u7368\u5BB6\u6298\u6263\uFF0C\u5927\u5E45\u63D0\u9AD8\u55AE\u5BA2\u7D42\u8EAB\u50F9\u503C\uFF08LTV\uFF09"
      ],
      ctaText: "\u5EFA\u7ACB\u79C1\u57DF\u6D41\u91CF"
    },
    pillar4: {
      tag: "\u71DF\u92B7\u5229\u5668 \xB7 \u6975\u901F\u76F4\u9054",
      title: "\u71DF\u92B7\u5229\u5668\uFF0C\u4E00\u9375\u8F15\u9B06\u5F15\u6D41",
      description: "\u901A\u904E\u5728 \u8F15\u92EA \u5F8C\u53F0\u6DFB\u52A0 Buy on Amazon \u6309\u9215\u7684\u5546\u54C1\u93C8\u63A5\uFF0C\u7368\u7ACB\u7AD9\u524D\u53F0\u7684\u5546\u54C1\u8A73\u60C5\u9801\u5C07\u986F\u793A\u4E9E\u99AC\u905C\u5F15\u6D41\u6309\u9215\uFF0C\u9EDE\u64CA\u5C07\u81EA\u52D5\u8DF3\u8F49\u5230\u5C0D\u61C9\u7684\u4E9E\u99AC\u905C listing \u9801\u9762\uFF0C\u52A9\u529B\u5E73\u53F0\u8CE3\u5BB6\u4E00\u9375\u8F15\u9B06\u958B\u555F\u5F15\u6D41\u3002",
      bullets: [
        "\u539F\u751F Amazon \u5B98\u65B9\u98A8\u683C\u76F4\u9054\u6309\u9215\uFF0C\u7B26\u5408\u6D77\u5916\u8CB7\u5BB6\u5FC3\u667A",
        "\u591A\u8B8A\u9AD4\u5C3A\u5BF8/\u984F\u8272\u7CBE\u6E96\u6620\u5C04\u4E0D\u540C ASIN\uFF0C\u7121\u7E2B\u76F4\u9054",
        "\u5B8C\u7F8E\u652F\u6301 Amazon Attribution\uFF0C\u66A2\u4EAB 10% \u5B98\u65B9\u54C1\u724C\u8FD4\u5229"
      ],
      ctaText: "\u4E00\u9375\u958B\u555F\u5F15\u6D41"
    },
    workflow: {
      eyebrow: "\u9589\u74B0\u904B\u8F49\u6A5F\u5236",
      title: "4 \u6B65\u6253\u9020\u7AD9\u5916\u5230\u7AD9\u5167\u7684\u92B7\u552E\u98DB\u8F2A",
      subtitle: "\u5168\u93C8\u8DEF\u6253\u901A\u516C\u57DF\u6295\u653E\u3001\u7368\u7ACB\u7AD9\u627F\u63A5\u3001\u5E73\u53F0\u7D50\u7B97\u8207\u79C1\u57DF\u7559\u5B58",
      steps: [
        {
          title: "\u5168\u7DB2\u591A\u6E20\u9053\u89F8\u9054",
          desc: "\u901A\u904E TikTok \u7D05\u4EBA\u77ED\u8996\u983B\u3001Google \u641C\u7D22\u95DC\u9375\u8A5E\u6216 Meta \u5EE3\u544A\u5BE6\u73FE\u5168\u57DF\u66DD\u5149\u7A2E\u8349\u3002",
          icon: "ph:megaphone-duotone"
        },
        {
          title: "\u7368\u7ACB\u7AD9\u6DF1\u5EA6\u627F\u63A5",
          desc: "\u8CB7\u5BB6\u9032\u5165\u54C1\u724C\u7368\u7ACB\u7AD9\u67E5\u770B\u8A73\u7D30\u8CE3\u9EDE\u3001\u8A55\u6E2C\u8996\u983B\u8207\u4F7F\u7528\u5834\u666F\uFF0C\u5B8C\u6210\u610F\u5411\u904E\u6FFE\u8207\u5FC3\u7406\u7A2E\u8349\u3002",
          icon: "ph:storefront-duotone"
        },
        {
          title: "\u4E00\u9375\u76F4\u9054 Amazon",
          desc: "\u9AD8\u610F\u5411\u8CB7\u5BB6\u9EDE\u64CA\u201CBuy on Amazon\u201D\u76F4\u9054 Listing\uFF0C\u4EAB\u53D7 Prime \u6975\u901F\u914D\u9001\u5B89\u5FC3\u5B8C\u6210\u7D50\u7B97\u3002",
          icon: "ph:arrow-square-out-duotone"
        },
        {
          title: "\u79C1\u57DF\u6C89\u6FB1\u8207\u5FA9\u8CFC",
          desc: "\u8CB7\u5BB6\u9818\u5238\u7559\u8CC7\u6C89\u6FB1\u9032\u5C08\u5C6C CRM\uFF0C\u5F8C\u7E8C\u901A\u904E\u81EA\u52D5\u5316\u90F5\u4EF6\u548C\u77ED\u4FE1\u5BE6\u73FE 0 \u6210\u672C\u4E8C\u6B21\u89F8\u9054\u3002",
          icon: "ph:arrows-clockwise-duotone"
        }
      ]
    },
    faq: {
      title: "\u5E38\u898B\u7591\u554F\u89E3\u7B54",
      subtitle: "\u89E3\u7B54\u4E9E\u99AC\u905C\u8CE3\u5BB6\u6700\u95DC\u5FC3\u7684\u5F15\u6D41\u8207\u8F49\u5316\u554F\u984C",
      items: [
        {
          question: "\u7AD9\u5916\u5F15\u6D41\u6703\u4E0D\u6703\u62C9\u4F4E\u4E9E\u99AC\u905C Listing \u8F49\u5316\u7387\u5F9E\u800C\u5F71\u97FF\u641C\u7D22\u6B0A\u91CD\uFF1F",
          answer: "\u6070\u6070\u76F8\u53CD\uFF01\u76F4\u63A5\u6295\u653E\u5EE3\u544A\u5230\u4E9E\u99AC\u905C\u5BB9\u6613\u56E0\u70BA\u53D7\u773E\u885D\u52D5\u9EDE\u64CA\u800C\u8F49\u5316\u7387\u504F\u4F4E\u3002\u800C\u901A\u904E \u8F15\u92EA \u7368\u7ACB\u7AD9\u4F5C\u70BA\u4E2D\u8F49\u7AD9\uFF0C\u8CB7\u5BB6\u5728\u7368\u7ACB\u7AD9\u5DF2\u7D93\u6DF1\u5165\u4E86\u89E3\u4E86\u5546\u54C1\u529F\u80FD\u3001\u898F\u683C\u8207\u8996\u983B\uFF0C\u53EA\u6709\u5177\u5099\u5F37\u8CFC\u8CB7\u610F\u5411\u7684\u5BA2\u6236\u624D\u6703\u9EDE\u64CA\u201CBuy on Amazon\u201D\u3002\u6D41\u5165\u4E9E\u99AC\u905C\u7684\u6D41\u91CF\u5177\u5099\u6975\u9AD8\u7684\u8F49\u5316\u7387\uFF0C\u53CD\u800C\u6703\u5411 A9 \u7B97\u6CD5\u91CB\u653E\u5F37\u70C8\u4FE1\u865F\uFF0C\u5E36\u52D5\u81EA\u7136\u641C\u7D22\u6392\u540D\u5927\u5E45\u4E0A\u5347\uFF01"
        },
        {
          question: "\u4EC0\u9EBC\u662F\u4E9E\u99AC\u905C\u54C1\u724C\u5F15\u6D41\u734E\u52F5\u8A08\u5283\uFF08Brand Referral Bonus\uFF09\uFF1F",
          answer: "\u9019\u662F\u4E9E\u99AC\u905C\u5B98\u65B9\u70BA\u9F13\u52F5\u8CE3\u5BB6\u7AD9\u5916\u5F15\u6D41\u63A8\u51FA\u7684\u91CD\u78C5\u8FD4\u5229\u653F\u7B56\u3002\u8CE3\u5BB6\u901A\u904E\u7AD9\u5916\u5F15\u6D41\u4E26\u5728\u4E9E\u99AC\u905C\u7522\u751F\u8CFC\u8CB7\uFF0C\u4E9E\u99AC\u905C\u5B98\u65B9\u5C07\u6309\u92B7\u552E\u984D\u5E73\u5747\u8FD4\u9084\u7D04 10% \u7684\u4F63\u91D1\u734E\u52F5\uFF01\u8F15\u92EA \u5B8C\u7F8E\u652F\u6301\u914D\u7F6E\u5305\u542B Amazon Attribution \u6A19\u7C64\u7684\u8DF3\u8F49\u93C8\u63A5\uFF0C\u52A9\u60A8\u5728\u7206\u55AE\u7684\u540C\u6642\u76F4\u63A5\u8CFA\u53D6\u9AD8\u984D\u4F63\u91D1\u88DC\u8CBC\u3002"
        },
        {
          question: "\u7368\u7ACB\u7AD9\u53EF\u4EE5\u540C\u6642\u652F\u6301\u81EA\u4E3B\u7D50\u8CEC\u548C\u4E9E\u99AC\u905C\u8DF3\u8F49\u55CE\uFF1F",
          answer: "\u5B8C\u5168\u652F\u6301\uFF01\u60A8\u53EF\u4EE5\u9748\u6D3B\u914D\u7F6E\uFF1A\u65E2\u53EF\u4EE5\u958B\u555F\u201C\u50C5 Buy on Amazon\u201D\u7684\u7D14\u5F15\u6D41\u6A21\u5F0F\uFF0C\u4E5F\u53EF\u4EE5\u540C\u6642\u958B\u555F\u7368\u7ACB\u7AD9\u4FE1\u7528\u5361/PayPal \u7D50\u8CEC\u901A\u9053\u3002\u65E2\u4E0D\u932F\u904E\u7FD2\u6163\u5728\u4E9E\u99AC\u905C Prime \u4E0B\u55AE\u7684\u7528\u6236\uFF0C\u53C8\u80FD\u6293\u4F4F\u5E0C\u671B\u5728\u7368\u7ACB\u7AD9\u76F4\u63A5\u652F\u4ED8\u7684\u5BA2\u7FA4\u3002"
        },
        {
          question: "\u642D\u5EFA\u9019\u6A23\u7684\u71DF\u92B7\u7368\u7ACB\u7AD9\u9700\u8981\u61C2\u4EE3\u78BC\u6216\u8CFC\u8CB7\u670D\u52D9\u5668\u55CE\uFF1F",
          answer: "\u5B8C\u5168\u4E0D\u9700\u8981\uFF01\u8F15\u92EA \u662F\u771F\u6B63\u7684\u958B\u7BB1\u5373\u7528 SaaS \u7CFB\u7D71\uFF0C\u7121\u9700\u8CFC\u8CB7\u670D\u52D9\u5668\u3001\u7121\u9700\u914D\u7F6E\u74B0\u5883\u3002\u7CFB\u7D71\u5167\u7F6E\u5C08\u696D\u91DD\u5C0D\u8DE8\u5883\u96FB\u5546\u8207\u4E9E\u99AC\u905C\u5F15\u6D41\u512A\u5316\u7684\u97FF\u61C9\u5F0F\u6A21\u677F\u8207\u5546\u54C1\u7BA1\u7406\u5F8C\u53F0\uFF0C\u65B0\u624B\u8CE3\u5BB6\u50C5\u9700 10 \u5206\u9418\u5373\u53EF\u5B8C\u6210\u4E0A\u7DDA\u3002"
        }
      ]
    },
    bottomCta: {
      title: "\u64C1\u62B1 \u8F15\u92EA \u7D66\u60A8\u5E36\u4F86\u7684\u71DF\u6536\u589E\u9577\u65B0\u6642\u4EE3\uFF01",
      subtitle: "0 \u5143\u5FEB\u901F\u8A3B\u518A\uFF0C\u7ACB\u5373\u958B\u555F\u4E9E\u99AC\u905C\u7AD9\u5916\u7CBE\u6E96\u5F15\u6D41\u8207\u79C1\u57DF\u589E\u9577\u65B0\u5F15\u64CE\u3002",
      notes: ["14\u5929\u514D\u8CBB\u8A66\u7528", "\u7121\u9700\u7D81\u5B9A\u4FE1\u7528\u5361", "\u5B98\u65B9\u51FA\u6D77\u9867\u554F\u652F\u6301"],
      primaryText: "\u7ACB\u5373\u514D\u8CBB\u8A3B\u518A",
      secondaryText: "\u9810\u7D04\u5C08\u5C6C\u6F14\u793A"
    }
  },
  en: {
    seo: {
      title: "Amazon Seller Marketing Storefront",
      description: "Build a dedicated marketing storefront for Amazon products. Direct advertising and social traffic to branded pages, present complete product value and capture customer relationships.",
      keywords: "Amazon marketing storefront,external traffic,brand store"
    },
    hero: {
      badge: "Amazon Seller Marketing Storefront Solution",
      titleMain: "Empower Amazon Sellers with",
      titleHighlight: "A High-Growth Off-Site Engine",
      description: "Overcome ad bid inflation and on-site saturation. Combine brand presentation, multi-channel off-site ads, seamless Buy on Amazon redirects, and first-party customer data into an unstoppable flywheel.",
      primaryCta: "Start free trial",
      secondaryCta: "Book a demo",
      proofPills: ["14 years ad experience", "Accelerated BSR boost", "100% owned customer data", "Official Attribution support"],
      floatingCard1Title: "BSR Rank Boost",
      floatingCard1Subtitle: "Accelerate organic keyword ranking",
      floatingCard2Title: "Buy on Amazon",
      floatingCard2Subtitle: "Instant redirect to Amazon listing",
      trustPills: ["Compliant traffic, no store risk", "Boost Listing search ranking", "Build an owned buyer pool"],
      showcase: {
        attributionBadge: "Amazon Attribution \xB7 10% Official Bonus",
        relayNote: "Instant jump to Listing \xB7 Free Prime next-day delivery",
        relayCta: "Buy on Amazon",
        dtcTitle: "Buy direct on the storefront (10% off first order)",
        dtcSubtitle: "Own first-party buyer data \xB7 0% platform commission",
        dtcCta: "Private checkout",
        advA9: "A9 Search Boost",
        advA9Sub: "Intent filtering",
        advBrb: "10% BRB Bonus",
        advBrbSub: "Official attribution",
        advAudience: "Owned Buyers",
        advAudienceSub: "Repeat purchases",
        complianceArch: "Compliant anti-association setup",
        pixelTracking: "Meta / Google / TikTok pixel tracking",
        ownDomain: "Own branded domain"
      }
    },
    overview: {
      tag: "Strategic Advantage",
      titleLine1: "Professional Off-Site Traffic",
      titleLine2: "Higher Margins & Listing Velocity",
      description: "Off-site traffic means driving high-intent shoppers from external channels into Amazon. As internal CPC ad costs climb, building an owned marketing bridge is indispensable for breaking sales ceilings.",
      bulletPoints: [
        {
          title: "High-Intent Funnel Filtering",
          desc: "Showcase immersive rich media and reviews on your owned storefront before sending high-converting shoppers to Amazon."
        },
        {
          title: "Amazon Attribution Bonus Supported",
          desc: "Seamlessly qualify for the official Brand Referral Bonus and earn back an average 10% on generated sales."
        },
        {
          title: "Mitigate Marketplace Lock-in Risks",
          desc: "Own your independent domain and customer relationships, insulating your revenue from sudden platform policy changes."
        }
      ],
      ctaText: "Start free trial"
    },
    comparison: {
      cardTitle: "Amazon On-Site Bidding vs Owned Marketing Funnel",
      cardSubtitle: "Why top tier sellers deploy off-site storefronts",
      traditionalLabel: "Marketplace Only",
      ownedLabel: "Qingpu Storefront Plan",
      items: [
        {
          dimension: "Audience Ownership",
          traditional: "Public ad pool bidding; visitor data disappears once clicked",
          qingpu: "Captured into your owned private CRM for unlimited free outreach"
        },
        {
          dimension: "Conversion Health",
          traditional: "Direct cold traffic to listing degrades conversion & organic rank",
          qingpu: "Pre-filtered high-intent buyers boost listing conversion and A9 rank"
        },
        {
          dimension: "Brand Expression",
          traditional: "Restricted by rigid listing templates and text character limits",
          qingpu: "Interactive video, influencer reviews, and unconstrained storytelling"
        },
        {
          dimension: "Repeat Purchases",
          traditional: "Customer contact details hidden by marketplace policies",
          qingpu: "Own customer emails and phone numbers with automated email workflows"
        }
      ]
    },
    pillarsHeader: {
      badge: "Four Core Pillars",
      title: "Your Growth Engine for Amazon Sales",
      description: "From precision audience targeting to high-converting 1-click Amazon relays"
    },
    pillar1: {
      tag: "Targeted Traffic \xB7 Organic Rank",
      title: "Precision Traffic to Boost Product Ranking",
      description: "Leveraging our team's 14 years of global advertising experience, attract high-intent shoppers from Google, Meta, and TikTok to your storefront before routing qualified buyers into Amazon.",
      bullets: [
        "Precision audience targeting across Google Search, Meta, and TikTok",
        "Funnel filtering protects and elevates Amazon listing conversion rates",
        "Amazon's A9 algorithm heavily rewards external sales velocity"
      ],
      ctaText: "Explore targeted traffic"
    },
    pillar2: {
      tag: "Social Media \xB7 Brand Equity",
      title: "Social Media Matrix for Premium Brand Equity",
      description: "Build an interconnected presence across your storefront and TikTok, Instagram, YouTube, and Facebook. Tell compelling product stories, build an owned community, and escape race-to-the-bottom pricing.",
      bullets: [
        "Custom landing pages tailored for creator and influencer partnerships",
        "Full multimedia support with HD video and unboxing demonstrations",
        "Transform one-off shoppers into loyal, high-margin brand advocates"
      ],
      ctaText: "Start social campaigns"
    },
    pillar3: {
      tag: "Data Ownership \xB7 Repeat Sales",
      title: "Own Customer Data to Fuel Repeat Purchases",
      description: "Marketplaces own the customer relationship, leaving sellers without remarketing capability. Qingpu gives you full customer CRM tools to capture contacts and automate lifetime value.",
      bullets: [
        "Compliantly collect first-party buyer emails, phones, and preferences",
        "Automated abandoned checkout, seasonal promo, and new release emails",
        "Boost customer lifetime value (LTV) through loyalty discounts"
      ],
      ctaText: "Build your audience"
    },
    pillar4: {
      tag: "Instant Relay \xB7 Buy on Amazon",
      title: "One-Click Buy on Amazon Button Relay",
      description: "Configure official-styled 'Buy on Amazon' buttons with tracking links in seconds. Shoppers enjoy trusted storefront browsing and transition smoothly to Amazon Prime checkout.",
      bullets: [
        "Authentic Amazon button styling matching overseas buyer expectations",
        "Intelligent variant mapping directly linking colors/sizes to exact ASINs",
        "Full Amazon Attribution support to earn ~10% Brand Referral Bonus"
      ],
      ctaText: "Enable Amazon relay"
    },
    workflow: {
      eyebrow: "Closed-Loop Workflow",
      title: "The 4-Step Flywheel from Social Ad to Amazon Order",
      subtitle: "Connecting multi-channel acquisition, storefront filtering, and Prime checkout",
      steps: [
        {
          title: "Multi-Channel Acquisition",
          desc: "Drive awareness through TikTok creator videos, Google search keywords, and Meta campaigns.",
          icon: "ph:megaphone-duotone"
        },
        {
          title: "Storefront Pre-filtering",
          desc: "Shoppers explore in-depth product demos, specifications, and customer proof in a branded environment.",
          icon: "ph:storefront-duotone"
        },
        {
          title: "Instant Amazon Relay",
          desc: "High-intent buyers click 'Buy on Amazon' to purchase on Prime with trusted one-click fulfillment.",
          icon: "ph:arrow-square-out-duotone"
        },
        {
          title: "Private Audience Retention",
          desc: "Shoppers redeem coupons and join the loyalty list, enabling zero-cost future re-engagement.",
          icon: "ph:arrows-clockwise-duotone"
        }
      ]
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Answers to key questions on traffic, conversions, and ranking",
      items: [
        {
          question: "Will off-site traffic lower my Amazon listing conversion rate?",
          answer: "Not with Qingpu! Sending raw cold traffic directly to an Amazon listing can hurt conversion rates. With Qingpu as an intermediate storefront, visitors evaluate the full product story first. Only customers ready to buy click through to Amazon, resulting in superior listing conversion that signals Amazon's A9 algorithm to rank you higher."
        },
        {
          question: "What is the Amazon Brand Referral Bonus and how does it work?",
          answer: "Amazon provides an official Brand Referral Bonus that rewards sellers an average of 10% cash bonus on sales generated from non-Amazon marketing efforts. Qingpu fully supports Amazon Attribution parameter tagging so you capture every earned dollar."
        },
        {
          question: "Can my storefront accept direct orders as well as Amazon clicks?",
          answer: "Yes! You have full flexibility: choose Amazon-only relay mode, independent credit card/PayPal checkout, or both side-by-side so international shoppers can choose their preferred buying method."
        },
        {
          question: "Do I need server administration or technical coding skills?",
          answer: "None at all! Qingpu is a fully managed cloud SaaS platform. Themes, mobile optimization, hosting, and updates are all handled for you. You can launch your dedicated Amazon marketing storefront in under 15 minutes."
        }
      ]
    },
    bottomCta: {
      title: "Embrace the Next Era of Revenue Growth with Qingpu!",
      subtitle: "Start free today and launch your off-site Amazon marketing flywheel.",
      notes: ["14-day free trial", "No credit card required", "Dedicated launch advisor"],
      primaryText: "Start free trial",
      secondaryText: "Book a demo"
    }
  },
  id: {
    seo: {
      title: "Sistem Toko Mandiri Lalu Lintas Amazon",
      description: "Ubah lalu lintas eksternal menjadi penjualan Amazon berperingkat tinggi. Qingpu memberdayakan penjual Amazon dengan etalase pemasaran berkonversi tinggi, saluran media sosial, dan tombol Buy on Amazon."
    },
    hero: {
      badge: "Solusi Etalase Pemasaran Penjual Amazon",
      titleMain: "Model E-commerce Baru untuk Penjual Amazon",
      titleHighlight: "Buka Peluang Baru dan Dorong Pertumbuhan",
      description: "Sistem lalu lintas luar Amazon profesional: atasi persaingan iklan platform dan saturasi. Gabungkan branding independen, pengalihan instan ke Amazon, dan retensi data pelanggan.",
      primaryCta: "Mulai uji coba gratis",
      secondaryCta: "Jadwalkan demo",
      proofPills: ["14 tahun pengalaman iklan", "Peningkatan peringkat BSR", "100% data pelanggan mandiri", "Dukungan resmi Amazon"],
      floatingCard1Title: "Peringkat BSR Meningkat",
      floatingCard1Subtitle: "Peringkat kata kunci organik lebih cepat",
      floatingCard2Title: "Buy on Amazon",
      floatingCard2Subtitle: "Pengalihan instan ke listing Amazon"
    },
    overview: {
      tag: "Keunggulan Strategis",
      titleLine1: "Lalu Lintas Luar Platform Profesional",
      titleLine2: "Mendorong Profitabilitas Toko Platform",
      description: "Lalu lintas eksternal berarti menarik pembeli di luar platform belanja ke listing Amazon Anda melalui iklan dan konten. Strategi ini sangat penting untuk menembus batas pertumbuhan.",
      bulletPoints: [
        {
          title: "Penyaringan Minat Pembeli",
          desc: "Tampilkan video dan ulasan mendalam di etalase mandiri sebelum mengarahkan pembeli berkonversi tinggi ke Amazon."
        },
        {
          title: "Mendukung Amazon Attribution Resmi",
          desc: "Dapatkan pengembalian komisi penjualan rata-rata 10% melalui Program Bonus Rujukan Merek Amazon."
        },
        {
          title: "Mengurangi Risiko Ketergantungan Platform",
          desc: "Miliki domain mandiri dan aset pelanggan Anda sendiri, melindungi bisnis dari perubahan kebijakan platform."
        }
      ],
      ctaText: "Mulai uji coba gratis"
    },
    comparison: {
      cardTitle: "Iklan Platform Tradisional vs Saluran Mandiri Qingpu",
      cardSubtitle: "Mengapa penjual teratas membangun etalase pemasaran luar?",
      items: [
        {
          dimension: "Kepemilikan Audiens",
          traditional: "Biaya iklan naik terus; data hilang begitu pembeli mengklik",
          qingpu: "Disimpan dalam CRM mandiri untuk penjangkauan gratis tanpa batas"
        },
        {
          dimension: "Tingkat Konversi",
          traditional: "Lalu lintas dingin langsung ke listing menurunkan konversi",
          qingpu: "Lalu lintas tersaring meningkatkan konversi listing dan peringkat A9"
        },
        {
          dimension: "Penyampaian Merek",
          traditional: "Terbatas oleh template listing standar dan batas karakter",
          qingpu: "Video kaya media dan ulasan kreator tanpa batasan ruang"
        },
        {
          dimension: "Pembelian Berulang",
          traditional: "Kontak pembeli disembunyikan oleh kebijakan platform",
          qingpu: "Kumpulkan email dan nomor telepon untuk kampanye otomatis"
        }
      ]
    },
    pillarsHeader: {
      badge: "Empat Kemampuan Utama",
      title: "Mesin Pertumbuhan Penjualan Amazon Anda",
      description: "Dari penargetan presisi hingga pengalihan instan Buy on Amazon"
    },
    pillar1: {
      tag: "Lalu Lintas Presisi \xB7 Peringkat",
      title: "Lalu Lintas Tepat Sasaran, Tingkatkan Peringkat",
      description: "Memanfaatkan 14 tahun pengalaman iklan global tim Qingpu, tarik pembeli berkualitas dari Google, Meta, dan TikTok ke toko mandiri sebelum diarahkan ke Amazon.",
      bullets: [
        "Penargetan presisi di Google Search, Meta, dan TikTok",
        "Penyaringan minat melindungi dan meningkatkan konversi listing",
        "Algoritma Amazon A9 sangat menyukai lonjakan penjualan eksternal"
      ],
      ctaText: "Coba lalu lintas presisi"
    },
    pillar2: {
      tag: "Media Sosial \xB7 Ekuitas Merek",
      title: "Pemasaran Media Sosial, Bangun Citra Merek",
      description: "Bangun matriks pemasaran terintegrasi antara toko mandiri dan TikTok, Instagram, YouTube, serta Facebook untuk menciptakan ekuitas merek bernilai tinggi.",
      bullets: [
        "Halaman arahan khusus untuk kerja sama kreator dan influencer",
        "Dukungan penuh multimedia dengan video demo HD tanpa batasan",
        "Ubah pembeli satu kali menjadi pendukung merek setia"
      ],
      ctaText: "Mulai kampanye sosial"
    },
    pillar3: {
      tag: "Aset Data \xB7 Pembelian Berulang",
      title: "Kuasai Data, Dorong Pembelian Berulang",
      description: "Gunakan fitur manajemen pelanggan Qingpu untuk mengumpulkan aset audiens Anda sendiri dan meningkatkan nilai seumur hidup pelanggan.",
      bullets: [
        "Kumpulkan email dan telepon pembeli secara patuh",
        "Otomatisasi email keranjang belanja dan promosi berkala",
        "Tingkatkan nilai pesanan pelanggan melalui program loyalitas"
      ],
      ctaText: "Bangun audiens mandiri"
    },
    pillar4: {
      tag: "Alat Pemasaran \xB7 Pengalihan Cepat",
      title: "Alat Pemasaran, Arahkan dengan Satu Klik",
      description: "Konfigurasikan tombol 'Buy on Amazon' di panel Qingpu. Pengunjung dapat berpindah ke listing Amazon dengan tautan atribusi hanya dalam satu klik.",
      bullets: [
        "Desain tombol Amazon asli yang sesuai dengan kebiasaan pembeli global",
        "Pemetaan varian cerdas langsung ke ASIN yang tepat di Amazon",
        "Dukungan penuh Amazon Attribution untuk bonus komisi ~10%"
      ],
      ctaText: "Aktifkan pengalihan"
    },
    workflow: {
      eyebrow: "Mekanisme Operasi",
      title: "Alur 4 Langkah dari Media Sosial ke Pesanan Amazon",
      subtitle: "Menghubungkan akuisisi multi-saluran, penyaringan etalase, dan checkout Prime",
      steps: [
        {
          title: "Jangkauan Multi-Saluran",
          desc: "Tarik perhatian lewat video kreator TikTok, pencarian Google, dan iklan Meta.",
          icon: "ph:megaphone-duotone"
        },
        {
          title: "Penyaringan di Etalase",
          desc: "Pembeli mempelajari demo produk dan ulasan lengkap di etalase mandiri.",
          icon: "ph:storefront-duotone"
        },
        {
          title: "Pengalihan ke Amazon",
          desc: "Pembeli bertekad klik 'Buy on Amazon' untuk checkout terpercaya di Prime.",
          icon: "ph:arrow-square-out-duotone"
        },
        {
          title: "Retensi Data Pelanggan",
          desc: "Kumpulkan kontak pembeli untuk pemasaran ulang gratis berkelanjutan.",
          icon: "ph:arrows-clockwise-duotone"
        }
      ]
    },
    faq: {
      title: "Pertanyaan yang Sering Diajukan",
      subtitle: "Jawaban atas pertanyaan seputar lalu lintas dan konversi",
      items: [
        {
          question: "Apakah lalu lintas eksternal akan menurunkan tingkat konversi listing Amazon saya?",
          answer: "Sama sekali tidak dengan Qingpu! Mengirim lalu lintas dingin langsung ke Amazon dapat menurunkan konversi. Namun dengan etalase mandiri Qingpu sebagai filter, pengunjung sudah memahami produk sepenuhnya sehingga hanya pembeli berkeinginan kuat yang mengklik ke Amazon, mendorong peringkat A9 naik lebih cepat!"
        },
        {
          question: "Apa itu Amazon Brand Referral Bonus dan bagaimana cara kerjanya?",
          answer: "Amazon memberikan bonus rata-rata 10% untuk penjualan yang dihasilkan dari upaya pemasaran luar platform. Qingpu mendukung penuh tag atribusi Amazon sehingga Anda otomatis mengklaim bonus ini."
        },
        {
          question: "Bisakah etalase mandiri menerima pesanan langsung sekaligus tautan Amazon?",
          answer: "Tentu saja! Anda dapat memilih mode hanya tautan Amazon, mode pembayaran mandiri kartu kredit/PayPal, atau keduanya secara bersamaan."
        },
        {
          question: "Apakah saya memerlukan keahlian coding atau server?",
          answer: "Tidak sama sekali! Qingpu adalah platform SaaS siap pakai. Hosting, optimasi seluler, dan pembaruan ditangani secara otomatis."
        }
      ]
    },
    bottomCta: {
      title: "Raih Era Baru Pertumbuhan Pendapatan bersama Qingpu!",
      subtitle: "Daftar gratis hari ini dan luncurkan mesin pertumbuhan luar Amazon Anda.",
      primaryText: "Mulai daftar gratis",
      secondaryText: "Jadwalkan demo"
    }
  },
  ru: {
    seo: {
      title: "\u041C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u043E\u0432\u0430\u044F \u0432\u0438\u0442\u0440\u0438\u043D\u0430 Amazon",
      description: "\u0421\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u043D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u0443\u044E \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u043E\u0432\u0443\u044E \u0432\u0438\u0442\u0440\u0438\u043D\u0443 \u0434\u043B\u044F \u0442\u043E\u0432\u0430\u0440\u043E\u0432 Amazon. \u041F\u0440\u0438\u0432\u043B\u0435\u043A\u0430\u0439\u0442\u0435 \u0442\u0440\u0430\u0444\u0438\u043A \u0438\u0437 \u0440\u0435\u043A\u043B\u0430\u043C\u044B \u0438 \u0441\u043E\u0446\u0441\u0435\u0442\u0435\u0439, \u0444\u043E\u0440\u043C\u0438\u0440\u0443\u0439\u0442\u0435 \u0431\u0430\u0437\u0443 \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u044B\u0445 \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0435\u0439.",
      keywords: "\u0432\u0438\u0442\u0440\u0438\u043D\u0430 Amazon,\u0432\u043D\u0435\u0448\u043D\u0438\u0439 \u0442\u0440\u0430\u0444\u0438\u043A,\u0431\u0440\u0435\u043D\u0434"
    },
    hero: {
      badge: "\u041C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u043E\u0432\u043E\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u043F\u0440\u043E\u0434\u0430\u0432\u0446\u043E\u0432 Amazon",
      titleMain: "\u041D\u043E\u0432\u0430\u044F \u043C\u043E\u0434\u0435\u043B\u044C \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043A\u043E\u043C\u043C\u0435\u0440\u0446\u0438\u0438 \u0434\u043B\u044F \u043F\u0440\u043E\u0434\u0430\u0432\u0446\u043E\u0432 Amazon",
      titleHighlight: "\u0412\u044B\u0445\u043E\u0434\u0438\u0442\u0435 \u043D\u0430 \u043D\u043E\u0432\u044B\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0440\u043E\u0441\u0442\u0430",
      description: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u0432\u043D\u0435\u0448\u043D\u0435\u0433\u043E \u0442\u0440\u0430\u0444\u0438\u043A\u0430 \u0434\u043B\u044F Amazon: \u043F\u0440\u0435\u043E\u0434\u043E\u043B\u0435\u0439\u0442\u0435 \u0440\u043E\u0441\u0442 \u0441\u0442\u0430\u0432\u043E\u043A \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0435\u0439 \u0440\u0435\u043A\u043B\u0430\u043C\u044B. \u041E\u0431\u044A\u0435\u0434\u0438\u043D\u0438\u0442\u0435 \u043D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u044B\u0439 \u0431\u0440\u0435\u043D\u0434\u0438\u043D\u0433, \u043C\u0433\u043D\u043E\u0432\u0435\u043D\u043D\u0443\u044E \u043F\u0435\u0440\u0435\u0430\u0434\u0440\u0435\u0441\u0430\u0446\u0438\u044E \u0432 Amazon \u0438 \u0443\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u0441\u043A\u0438\u0445 \u0434\u0430\u043D\u043D\u044B\u0445.",
      primaryCta: "\u041F\u043E\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u0442\u044C \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E",
      secondaryCta: "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u0434\u0435\u043C\u043E",
      proofPills: ["14 \u043B\u0435\u0442 \u043E\u043F\u044B\u0442\u0430 \u0432 \u0440\u0435\u043A\u043B\u0430\u043C\u0435", "\u0423\u0441\u043A\u043E\u0440\u0435\u043D\u0438\u0435 \u0440\u043E\u0441\u0442\u0430 \u0440\u0435\u0439\u0442\u0438\u043D\u0433\u0430 BSR", "100% \u0432\u043B\u0430\u0434\u0435\u043D\u0438\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u0441\u043A\u043E\u0439 \u0431\u0430\u0437\u043E\u0439", "\u041E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u0430\u044F \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 Amazon"],
      floatingCard1Title: "\u0420\u043E\u0441\u0442 BSR \u0440\u0435\u0439\u0442\u0438\u043D\u0433\u0430",
      floatingCard1Subtitle: "\u0423\u0441\u043A\u043E\u0440\u0435\u043D\u0438\u0435 \u043E\u0440\u0433\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0440\u0430\u043D\u0436\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F",
      floatingCard2Title: "Buy on Amazon",
      floatingCard2Subtitle: "\u041C\u0433\u043D\u043E\u0432\u0435\u043D\u043D\u044B\u0439 \u043F\u0435\u0440\u0435\u0445\u043E\u0434 \u043D\u0430 \u043B\u0438\u0441\u0442\u0438\u043D\u0433 Amazon",
      trustPills: ["\u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u044B\u0439 \u0442\u0440\u0430\u0444\u0438\u043A \u0431\u0435\u0437 \u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u043E\u043A", "\u0420\u043E\u0441\u0442 \u043F\u043E\u0437\u0438\u0446\u0438\u0439 Listing \u0432 \u043F\u043E\u0438\u0441\u043A\u0435", "\u0421\u0432\u043E\u044F \u0431\u0430\u0437\u0430 \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0435\u0439"],
      showcase: {
        attributionBadge: "Amazon Attribution \xB7 10% \u043E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0439 \u0431\u043E\u043D\u0443\u0441",
        relayNote: "\u041C\u0433\u043D\u043E\u0432\u0435\u043D\u043D\u044B\u0439 \u043F\u0435\u0440\u0435\u0445\u043E\u0434 \u043A Listing \xB7 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0430\u044F \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430 Prime",
        relayCta: "\u041A\u0443\u043F\u0438\u0442\u044C \u043D\u0430 Amazon",
        dtcTitle: "\u041F\u043E\u043A\u0443\u043F\u043A\u0430 \u043D\u0430 \u0432\u0438\u0442\u0440\u0438\u043D\u0435 (\u0441\u043A\u0438\u0434\u043A\u0430 10% \u043D\u0430 \u043F\u0435\u0440\u0432\u044B\u0439 \u0437\u0430\u043A\u0430\u0437)",
        dtcSubtitle: "\u0421\u0432\u043E\u044F \u0431\u0430\u0437\u0430 \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0435\u0439 \xB7 0% \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u0438 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B",
        dtcCta: "\u041E\u043F\u043B\u0430\u0442\u0430 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435",
        advA9: "\u0420\u043E\u0441\u0442 \u0432 \u043F\u043E\u0438\u0441\u043A\u0435 A9",
        advA9Sub: "\u0424\u0438\u043B\u044C\u0442\u0440 \u043D\u0430\u043C\u0435\u0440\u0435\u043D\u0438\u0439",
        advBrb: "10% \u0431\u043E\u043D\u0443\u0441 BRB",
        advBrbSub: "\u041E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u0430\u044F \u0430\u0442\u0440\u0438\u0431\u0443\u0446\u0438\u044F",
        advAudience: "\u0421\u0432\u043E\u0438 \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0438",
        advAudienceSub: "\u041F\u043E\u0432\u0442\u043E\u0440\u043D\u044B\u0435 \u043F\u0440\u043E\u0434\u0430\u0436\u0438",
        complianceArch: "\u0417\u0430\u0449\u0438\u0442\u0430 \u043E\u0442 \u0441\u0432\u044F\u0437\u044B\u0432\u0430\u043D\u0438\u044F \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u043E\u0432",
        pixelTracking: "\u041F\u0438\u043A\u0441\u0435\u043B\u0438 Meta / Google / TikTok",
        ownDomain: "\u0421\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0434\u043E\u043C\u0435\u043D \u0431\u0440\u0435\u043D\u0434\u0430"
      }
    },
    overview: {
      tag: "\u0421\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u043E",
      titleLine1: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u0432\u043D\u0435\u0448\u043D\u0438\u0439 \u0442\u0440\u0430\u0444\u0438\u043A",
      titleLine2: "\u041F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u0435 \u0434\u043E\u0445\u043E\u0434\u043D\u043E\u0441\u0442\u0438 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430 \u043D\u0430 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0435",
      description: "\u0412\u043D\u0435\u0448\u043D\u0438\u0439 \u0442\u0440\u0430\u0444\u0438\u043A \u2014 \u044D\u0442\u043E \u043F\u0440\u0438\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u0435 \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0435\u0439 \u0438\u0437\u0432\u043D\u0435 \u043D\u0430 \u043B\u0438\u0441\u0442\u0438\u043D\u0433\u0438 Amazon \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0440\u0435\u043A\u043B\u0430\u043C\u044B \u0438 \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0430. \u0412 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u0445 \u0440\u0430\u0441\u0442\u0443\u0449\u0435\u0439 \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0446\u0438\u0438 \u043D\u0430 Amazon \u044D\u0442\u043E \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0439 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442 \u0440\u043E\u0441\u0442\u0430.",
      bulletPoints: [
        {
          title: "\u0424\u0438\u043B\u044C\u0442\u0440\u0430\u0446\u0438\u044F \u0446\u0435\u043B\u0435\u0432\u043E\u0439 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0438",
          desc: "\u0414\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435 \u0432\u0438\u0434\u0435\u043E \u0438 \u043F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430 \u043D\u0430 \u043D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0439 \u0432\u0438\u0442\u0440\u0438\u043D\u0435 \u043F\u0435\u0440\u0435\u0434 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u043E\u0439 \u0433\u043E\u0442\u043E\u0432\u044B\u0445 \u043A \u043F\u043E\u043A\u0443\u043F\u043A\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u043D\u0430 Amazon."
        },
        {
          title: "\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 Amazon Attribution",
          desc: "\u041F\u043E\u043B\u0443\u0447\u0430\u0439\u0442\u0435 \u043E\u043A\u043E\u043B\u043E 10% \u043A\u044D\u0448\u0431\u044D\u043A\u0430 \u043E\u0442 \u0441\u0443\u043C\u043C\u044B \u043F\u0440\u043E\u0434\u0430\u0436 \u043F\u043E \u043E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0439 \u0431\u043E\u043D\u0443\u0441\u043D\u043E\u0439 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0435 Amazon Brand Referral Bonus."
        },
        {
          title: "\u0421\u043D\u0438\u0436\u0435\u043D\u0438\u0435 \u0440\u0438\u0441\u043A\u043E\u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0438 \u043E\u0442 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B",
          desc: "\u0412\u043B\u0430\u0434\u0435\u0439\u0442\u0435 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u043C \u0434\u043E\u043C\u0435\u043D\u043E\u043C \u0438 \u0431\u0430\u0437\u043E\u0439 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432, \u0437\u0430\u0449\u0438\u0449\u0430\u044F \u0431\u0438\u0437\u043D\u0435\u0441 \u043E\u0442 \u0432\u043D\u0435\u0437\u0430\u043F\u043D\u044B\u0445 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439 \u043F\u0440\u0430\u0432\u0438\u043B \u043C\u0430\u0440\u043A\u0435\u0442\u043F\u043B\u0435\u0439\u0441\u0430."
        }
      ],
      ctaText: "\u041F\u043E\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u0442\u044C \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E"
    },
    comparison: {
      cardTitle: "\u0420\u0435\u043A\u043B\u0430\u043C\u0430 \u043D\u0430 \u043C\u0430\u0440\u043A\u0435\u0442\u043F\u043B\u0435\u0439\u0441\u0435 vs \u0412\u043D\u0435\u0448\u043D\u044F\u044F \u0432\u043E\u0440\u043E\u043D\u043A\u0430 Qingpu",
      cardSubtitle: "\u041F\u043E\u0447\u0435\u043C\u0443 \u0432\u0435\u0434\u0443\u0449\u0438\u0435 \u0441\u0435\u043B\u043B\u0435\u0440\u044B \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u044E\u0442 \u043D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u044B\u0435 \u0432\u0438\u0442\u0440\u0438\u043D\u044B?",
      traditionalLabel: "\u0422\u043E\u043B\u044C\u043A\u043E \u043C\u0430\u0440\u043A\u0435\u0442\u043F\u043B\u0435\u0439\u0441",
      ownedLabel: "\u0412\u0438\u0442\u0440\u0438\u043D\u0430 Qingpu",
      items: [
        {
          dimension: "\u0412\u043B\u0430\u0434\u0435\u043D\u0438\u0435 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0435\u0439",
          traditional: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043A\u043B\u0438\u043A\u043E\u0432 \u0440\u0430\u0441\u0442\u0435\u0442; \u043A\u043E\u043D\u0442\u0430\u043A\u0442 \u0441 \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0435\u043C \u0442\u0435\u0440\u044F\u0435\u0442\u0441\u044F \u0441\u0440\u0430\u0437\u0443",
          qingpu: "\u0411\u0430\u0437\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u0442\u0441\u044F \u0432 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 CRM \u0434\u043B\u044F \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0445 \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u044B\u0445 \u043F\u0440\u043E\u0434\u0430\u0436"
        },
        {
          dimension: "\u041A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u044F \u043B\u0438\u0441\u0442\u0438\u043D\u0433\u0430",
          traditional: "\u041F\u0440\u044F\u043C\u043E\u0439 \u0445\u043E\u043B\u043E\u0434\u043D\u044B\u0439 \u0442\u0440\u0430\u0444\u0438\u043A \u043D\u0430 \u043B\u0438\u0441\u0442\u0438\u043D\u0433 \u0441\u043D\u0438\u0436\u0430\u0435\u0442 \u043A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u044E \u0438 \u0440\u0435\u0439\u0442\u0438\u043D\u0433",
          qingpu: "\u041F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0444\u0438\u043B\u044C\u0442\u0440\u0430\u0446\u0438\u044F \u043F\u043E\u0432\u044B\u0448\u0430\u0435\u0442 \u043A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u044E \u043D\u0430 Amazon \u0438 \u043F\u043E\u0437\u0438\u0446\u0438\u044E A9"
        },
        {
          dimension: "\u041F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u044F \u0431\u0440\u0435\u043D\u0434\u0430",
          traditional: "\u041E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F \u0448\u0430\u0431\u043B\u043E\u043D\u043E\u0432 \u043C\u0430\u0440\u043A\u0435\u0442\u043F\u043B\u0435\u0439\u0441\u0430 \u0438 \u0441\u0442\u0440\u043E\u0433\u0438\u0435 \u0440\u0430\u043C\u043A\u0438 \u0442\u0435\u043A\u0441\u0442\u0430",
          qingpu: "\u0421\u0432\u043E\u0431\u043E\u0434\u043D\u043E\u0435 \u0432\u0438\u0434\u0435\u043E, \u043E\u0431\u0437\u043E\u0440\u044B \u0438\u043D\u0444\u043B\u044E\u0435\u043D\u0441\u0435\u0440\u043E\u0432 \u0438 \u0438\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0439 \u043A\u043E\u043D\u0442\u0435\u043D\u0442"
        },
        {
          dimension: "\u041F\u043E\u0432\u0442\u043E\u0440\u043D\u044B\u0435 \u043F\u0440\u043E\u0434\u0430\u0436\u0438",
          traditional: "\u0414\u0430\u043D\u043D\u044B\u0435 \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0435\u0439 \u0441\u043A\u0440\u044B\u0442\u044B \u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043C\u0430\u0440\u043A\u0435\u0442\u043F\u043B\u0435\u0439\u0441\u0430",
          qingpu: "\u0421\u0431\u043E\u0440 email \u0438 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u043E\u0432 \u0434\u043B\u044F \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0445 email-\u0440\u0430\u0441\u0441\u044B\u043B\u043E\u043A"
        }
      ]
    },
    pillarsHeader: {
      badge: "\u0427\u0435\u0442\u044B\u0440\u0435 \u043A\u043B\u044E\u0447\u0435\u0432\u044B\u0445 \u043F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430",
      title: "\u0412\u0430\u0448 \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044C \u043F\u0440\u043E\u0434\u0430\u0436 \u043D\u0430 Amazon",
      description: "\u041E\u0442 \u0442\u043E\u0447\u043D\u043E\u0433\u043E \u0442\u0430\u0440\u0433\u0435\u0442\u0438\u043D\u0433\u0430 \u0434\u043E \u0431\u044B\u0441\u0442\u0440\u043E\u0433\u043E \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0430 Buy on Amazon"
    },
    pillar1: {
      tag: "\u0422\u043E\u0447\u043D\u044B\u0439 \u0442\u0440\u0430\u0444\u0438\u043A \xB7 \u0420\u0430\u043D\u0436\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435",
      title: "\u0422\u043E\u0447\u043D\u044B\u0439 \u0442\u0440\u0430\u0444\u0438\u043A \u0434\u043B\u044F \u0440\u043E\u0441\u0442\u0430 \u043F\u043E\u0437\u0438\u0446\u0438\u0439 \u0442\u043E\u0432\u0430\u0440\u043E\u0432",
      description: "\u041E\u043F\u0438\u0440\u0430\u044F\u0441\u044C \u043D\u0430 14-\u043B\u0435\u0442\u043D\u0438\u0439 \u043E\u043F\u044B\u0442 \u043D\u0430\u0448\u0435\u0439 \u043A\u043E\u043C\u0430\u043D\u0434\u044B \u0432 \u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u043E\u0439 \u0440\u0435\u043A\u043B\u0430\u043C\u0435, \u043F\u0440\u0438\u0432\u043B\u0435\u043A\u0430\u0439\u0442\u0435 \u0446\u0435\u043B\u0435\u0432\u044B\u0445 \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0435\u0439 \u0438\u0437 Google, Meta \u0438 TikTok \u043D\u0430 \u0432\u0438\u0442\u0440\u0438\u043D\u0443 \u043F\u0435\u0440\u0435\u0434 \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u043E\u043C \u043D\u0430 Amazon.",
      bullets: [
        "\u0422\u043E\u0447\u043D\u044B\u0439 \u0442\u0430\u0440\u0433\u0435\u0442\u0438\u043D\u0433 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0438 \u0432 Google Search, Meta \u0438 TikTok",
        "\u041F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0444\u0438\u043B\u044C\u0442\u0440\u0430\u0446\u0438\u044F \u0437\u0430\u0449\u0438\u0449\u0430\u0435\u0442 \u0438 \u043F\u043E\u0432\u044B\u0448\u0430\u0435\u0442 \u043A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u044E \u043B\u0438\u0441\u0442\u0438\u043D\u0433\u0430",
        "\u0410\u043B\u0433\u043E\u0440\u0438\u0442\u043C Amazon A9 \u0430\u043A\u0442\u0438\u0432\u043D\u043E \u043F\u043E\u043E\u0449\u0440\u044F\u0435\u0442 \u0432\u043D\u0435\u0448\u043D\u0438\u0439 \u0432\u0445\u043E\u0434\u044F\u0449\u0438\u0439 \u0442\u0440\u0430\u0444\u0438\u043A"
      ],
      ctaText: "\u041E\u0446\u0435\u043D\u0438\u0442\u044C \u0442\u043E\u0447\u043D\u044B\u0439 \u0442\u0440\u0430\u0444\u0438\u043A"
    },
    pillar2: {
      tag: "\u0421\u043E\u0446\u0441\u0435\u0442\u0438 \xB7 \u0421\u0438\u043B\u0430 \u0431\u0440\u0435\u043D\u0434\u0430",
      title: "\u041C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433 \u0432 \u0441\u043E\u0446\u0441\u0435\u0442\u044F\u0445 \u0434\u043B\u044F \u0432\u044B\u0441\u043E\u043A\u043E\u0439 \u043C\u0430\u0440\u0436\u0438\u043D\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
      description: "\u0421\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u0435\u0434\u0438\u043D\u0443\u044E \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u043E\u0432\u0443\u044E \u043C\u0430\u0442\u0440\u0438\u0446\u0443 \u0432\u0438\u0442\u0440\u0438\u043D\u044B \u0438 \u0441\u043E\u0446\u0441\u0435\u0442\u0435\u0439 TikTok, Instagram, YouTube \u0438 Facebook, \u0444\u043E\u0440\u043C\u0438\u0440\u0443\u044F \u043F\u0443\u043B \u043B\u043E\u044F\u043B\u044C\u043D\u043E\u0439 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0438 \u0438 \u0446\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u0431\u0440\u0435\u043D\u0434\u0430.",
      bullets: [
        "\u0421\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0435 \u043F\u043E\u0441\u0430\u0434\u043E\u0447\u043D\u044B\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0434\u043B\u044F \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0439 \u0441 \u0431\u043B\u043E\u0433\u0435\u0440\u0430\u043C\u0438",
        "\u041F\u043E\u043B\u043D\u043E\u0446\u0435\u043D\u043D\u0430\u044F \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 HD-\u0432\u0438\u0434\u0435\u043E \u0438 \u0440\u0430\u0441\u043F\u0430\u043A\u043E\u0432\u043E\u043A \u0431\u0435\u0437 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u0439",
        "\u041F\u0440\u0435\u0432\u0440\u0430\u0449\u0430\u0439\u0442\u0435 \u0440\u0430\u0437\u043E\u0432\u044B\u0445 \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0435\u0439 \u0432 \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u044B\u0445 \u0441\u0442\u043E\u0440\u043E\u043D\u043D\u0438\u043A\u043E\u0432 \u0431\u0440\u0435\u043D\u0434\u0430"
      ],
      ctaText: "\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u043A\u0430\u043C\u043F\u0430\u043D\u0438\u0438 \u0432 \u0441\u043E\u0446\u0441\u0435\u0442\u044F\u0445"
    },
    pillar3: {
      tag: "\u0410\u043A\u0442\u0438\u0432\u044B \u0434\u0430\u043D\u043D\u044B\u0445 \xB7 \u041F\u043E\u0432\u0442\u043E\u0440\u043D\u044B\u0435 \u043F\u0440\u043E\u0434\u0430\u0436\u0438",
      title: "\u0412\u043B\u0430\u0434\u0435\u0439\u0442\u0435 \u0434\u0430\u043D\u043D\u044B\u043C\u0438, \u0441\u0442\u0438\u043C\u0443\u043B\u0438\u0440\u0443\u0439\u0442\u0435 \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u044B\u0435 \u0437\u0430\u043A\u0430\u0437\u044B",
      description: "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C\u0438 Qingpu \u0434\u043B\u044F \u0441\u0431\u043E\u0440\u0430 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u0431\u0430\u0437\u044B \u0438 \u0437\u0430\u043F\u0443\u0441\u043A\u0430 \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u044B\u0445 \u043F\u0440\u043E\u0434\u0430\u0436 \u0431\u0435\u0437 \u0437\u0430\u0442\u0440\u0430\u0442 \u043D\u0430 \u0440\u0435\u043A\u043B\u0430\u043C\u0443.",
      bullets: [
        "\u0421\u0431\u043E\u0440 email, \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u043E\u0432 \u0438 \u043F\u0440\u0435\u0434\u043F\u043E\u0447\u0442\u0435\u043D\u0438\u0439 \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0435\u0439",
        "\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0440\u0430\u0441\u0441\u044B\u043B\u043A\u0438 \u043F\u043E \u0431\u0440\u043E\u0448\u0435\u043D\u043D\u044B\u043C \u043A\u043E\u0440\u0437\u0438\u043D\u0430\u043C \u0438 \u0441\u043F\u0435\u0446\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F\u043C",
        "\u041F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u0435 \u0436\u0438\u0437\u043D\u0435\u043D\u043D\u043E\u0433\u043E \u0446\u0438\u043A\u043B\u0430 \u043A\u043B\u0438\u0435\u043D\u0442\u0430 (LTV) \u0437\u0430 \u0441\u0447\u0435\u0442 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C \u043B\u043E\u044F\u043B\u044C\u043D\u043E\u0441\u0442\u0438"
      ],
      ctaText: "\u0421\u043E\u0431\u0440\u0430\u0442\u044C \u0431\u0430\u0437\u0443 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432"
    },
    pillar4: {
      tag: "\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442 \u043F\u0440\u043E\u0434\u0430\u0436 \xB7 \u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u043F\u0435\u0440\u0435\u0445\u043E\u0434",
      title: "\u041C\u0433\u043D\u043E\u0432\u0435\u043D\u043D\u044B\u0439 \u043F\u0435\u0440\u0435\u0445\u043E\u0434 \u0447\u0435\u0440\u0435\u0437 \u043A\u043D\u043E\u043F\u043A\u0443 Buy on Amazon",
      description: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u0442\u0435 \u043A\u043D\u043E\u043F\u043A\u0443 Buy on Amazon \u0432 \u043F\u0430\u043D\u0435\u043B\u0438 Qingpu \u0437\u0430 \u043F\u0430\u0440\u0443 \u043A\u043B\u0438\u043A\u043E\u0432. \u041F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u044C \u0438\u0437\u0443\u0447\u0430\u0435\u0442 \u0442\u043E\u0432\u0430\u0440 \u043D\u0430 \u0432\u0438\u0442\u0440\u0438\u043D\u0435 \u0438 \u0432 \u043E\u0434\u0438\u043D \u043A\u043B\u0438\u043A \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0438\u0442 \u043D\u0430 \u043B\u0438\u0441\u0442\u0438\u043D\u0433 Amazon \u0441 Prime-\u0434\u043E\u0441\u0442\u0430\u0432\u043A\u043E\u0439.",
      bullets: [
        "\u041E\u0440\u0438\u0433\u0438\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u0441\u0442\u0438\u043B\u044C \u043A\u043D\u043E\u043F\u043A\u0438 Amazon, \u043F\u0440\u0438\u0432\u044B\u0447\u043D\u044B\u0439 \u0434\u043B\u044F \u0437\u0430\u0440\u0443\u0431\u0435\u0436\u043D\u044B\u0445 \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0435\u0439",
        "\u0422\u043E\u0447\u043D\u0430\u044F \u043F\u0440\u0438\u0432\u044F\u0437\u043A\u0430 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432 \u0446\u0432\u0435\u0442\u043E\u0432 \u0438 \u0440\u0430\u0437\u043C\u0435\u0440\u043E\u0432 \u043A \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u044B\u043C ASIN",
        "\u041F\u043E\u043B\u043D\u0430\u044F \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 Amazon Attribution \u0434\u043B\u044F \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F 10% \u0431\u043E\u043D\u0443\u0441\u0430"
      ],
      ctaText: "\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043F\u0435\u0440\u0435\u0445\u043E\u0434"
    },
    workflow: {
      eyebrow: "\u041C\u0435\u0445\u0430\u043D\u0438\u0437\u043C \u0440\u0430\u0431\u043E\u0442\u044B",
      title: "4 \u0448\u0430\u0433\u0430 \u043E\u0442 \u0440\u0435\u043A\u043B\u0430\u043C\u044B \u0432 \u0441\u043E\u0446\u0441\u0435\u0442\u044F\u0445 \u0434\u043E \u0437\u0430\u043A\u0430\u0437\u0430 \u043D\u0430 Amazon",
      subtitle: "\u041F\u043E\u043B\u043D\u044B\u0439 \u0446\u0438\u043A\u043B: \u043F\u0440\u0438\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u0435, \u0432\u043E\u0440\u043E\u043D\u043A\u0430 \u043D\u0430 \u0432\u0438\u0442\u0440\u0438\u043D\u0435 \u0438 \u043F\u043E\u043A\u0443\u043F\u043A\u0430 \u043D\u0430 Amazon",
      steps: [
        {
          title: "\u041E\u0445\u0432\u0430\u0442 \u0432 \u0441\u043E\u0446\u0441\u0435\u0442\u044F\u0445 \u0438 \u043F\u043E\u0438\u0441\u043A\u0435",
          desc: "\u041F\u0440\u0438\u0432\u043B\u0435\u043A\u0430\u0439\u0442\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u0447\u0435\u0440\u0435\u0437 \u0440\u043E\u043B\u0438\u043A\u0438 \u0432 TikTok, \u043F\u043E\u0438\u0441\u043A Google \u0438 \u0442\u0430\u0440\u0433\u0435\u0442\u0438\u043D\u0433 \u0432 Meta.",
          icon: "ph:megaphone-duotone"
        },
        {
          title: "\u0424\u0438\u043B\u044C\u0442\u0440\u0430\u0446\u0438\u044F \u043D\u0430 \u0432\u0438\u0442\u0440\u0438\u043D\u0435",
          desc: "\u041F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0438 \u0434\u0435\u0442\u0430\u043B\u044C\u043D\u043E \u0438\u0437\u0443\u0447\u0430\u044E\u0442 \u0434\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0430\u0446\u0438\u044E \u0442\u043E\u0432\u0430\u0440\u0430 \u0438 \u043E\u0442\u0437\u044B\u0432\u044B \u043D\u0430 \u0432\u0430\u0448\u0435\u043C \u0441\u0430\u0439\u0442\u0435.",
          icon: "ph:storefront-duotone"
        },
        {
          title: "\u041F\u0435\u0440\u0435\u0445\u043E\u0434 \u043D\u0430 Amazon",
          desc: "\u0417\u0430\u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u044B \u043D\u0430\u0436\u0438\u043C\u0430\u044E\u0442 Buy on Amazon \u0438 \u0437\u0430\u0432\u0435\u0440\u0448\u0430\u044E\u0442 \u043F\u043E\u043A\u0443\u043F\u043A\u0443 \u0441 Prime.",
          icon: "ph:arrow-square-out-duotone"
        },
        {
          title: "\u0423\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432",
          desc: "\u0421\u0431\u043E\u0440 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043E\u0432 \u0434\u043B\u044F \u0440\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u044B\u0445 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0445 \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u044B\u0445 \u043F\u0440\u043E\u0434\u0430\u0436 \u0447\u0435\u0440\u0435\u0437 \u0440\u0430\u0441\u0441\u044B\u043B\u043A\u0438.",
          icon: "ph:arrows-clockwise-duotone"
        }
      ]
    },
    faq: {
      title: "\u0427\u0430\u0441\u0442\u043E \u0437\u0430\u0434\u0430\u0432\u0430\u0435\u043C\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B",
      subtitle: "\u041E\u0442\u0432\u0435\u0442\u044B \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0441\u0435\u043B\u043B\u0435\u0440\u043E\u0432 \u043E \u0442\u0440\u0430\u0444\u0438\u043A\u0435 \u0438 \u043A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u0438",
      items: [
        {
          question: "\u041D\u0435 \u0441\u043D\u0438\u0437\u0438\u0442 \u043B\u0438 \u0432\u043D\u0435\u0448\u043D\u0438\u0439 \u0442\u0440\u0430\u0444\u0438\u043A \u043A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u044E \u043B\u0438\u0441\u0442\u0438\u043D\u0433\u0430 Amazon?",
          answer: "\u0422\u043E\u0447\u043D\u043E \u043D\u0435\u0442 \u0441 Qingpu! \u041F\u0440\u044F\u043C\u043E\u0439 \u0445\u043E\u043B\u043E\u0434\u043D\u044B\u0439 \u0442\u0440\u0430\u0444\u0438\u043A \u043D\u0430 \u043B\u0438\u0441\u0442\u0438\u043D\u0433 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043C\u043E\u0436\u0435\u0442 \u0443\u0445\u0443\u0434\u0448\u0438\u0442\u044C \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u0438. \u041D\u043E \u0432\u0438\u0442\u0440\u0438\u043D\u0430 Qingpu \u0441\u043B\u0443\u0436\u0438\u0442 \u043F\u0440\u043E\u043C\u0435\u0436\u0443\u0442\u043E\u0447\u043D\u044B\u043C \u0444\u0438\u043B\u044C\u0442\u0440\u043E\u043C: \u043F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u044C \u0443\u0436\u0435 \u0438\u0437\u0443\u0447\u0438\u043B \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438 \u0438 \u043E\u0442\u0437\u044B\u0432\u044B, \u0438 \u043D\u0430 Amazon \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u044F\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u0442\u0435, \u043A\u0442\u043E \u043D\u0430\u043C\u0435\u0440\u0435\u043D \u043A\u0443\u043F\u0438\u0442\u044C. \u0422\u0430\u043A\u0430\u044F \u0432\u044B\u0441\u043E\u043A\u0430\u044F \u043A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u044F \u0434\u0430\u0435\u0442 \u043C\u043E\u0449\u043D\u044B\u0439 \u043F\u043E\u0437\u0438\u0442\u0438\u0432\u043D\u044B\u0439 \u0441\u0438\u0433\u043D\u0430\u043B \u0430\u043B\u0433\u043E\u0440\u0438\u0442\u043C\u0443 A9!"
        },
        {
          question: "\u0427\u0442\u043E \u0442\u0430\u043A\u043E\u0435 Amazon Brand Referral Bonus \u0438 \u043A\u0430\u043A \u0435\u0433\u043E \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u044C?",
          answer: "Amazon \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0441\u0435\u043B\u043B\u0435\u0440\u0430\u043C \u0432 \u0441\u0440\u0435\u0434\u043D\u0435\u043C \u043E\u043A\u043E\u043B\u043E 10% \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u0438 \u043E\u0442 \u0441\u0443\u043C\u043C\u044B \u043F\u0440\u043E\u0434\u0430\u0436, \u043F\u0440\u0438\u0432\u043B\u0435\u0447\u0435\u043D\u043D\u044B\u0445 \u0438\u0437 \u0432\u043D\u0435\u0448\u043D\u0438\u0445 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u043E\u0432. Qingpu \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u0440\u0430\u0437\u043C\u0435\u0442\u043A\u0443 Amazon Attribution, \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u044F \u043B\u0435\u0433\u043A\u043E \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u044C \u044D\u0442\u043E\u0442 \u0431\u043E\u043D\u0443\u0441."
        },
        {
          question: "\u041C\u043E\u0436\u0435\u0442 \u043B\u0438 \u0441\u0430\u0439\u0442 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u044C \u043F\u0440\u044F\u043C\u0443\u044E \u043E\u043F\u043B\u0430\u0442\u0443 \u043F\u0430\u0440\u0430\u043B\u043B\u0435\u043B\u044C\u043D\u043E \u0441 Amazon?",
          answer: "\u0414\u0430! \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u043B\u044E\u0431\u043E\u0439 \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439: \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u0435\u0440\u0435\u0445\u043E\u0434 \u043D\u0430 Amazon, \u043F\u0440\u044F\u043C\u0430\u044F \u043E\u043F\u043B\u0430\u0442\u0430 \u043A\u0430\u0440\u0442\u0430\u043C\u0438/PayPal \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 \u0438\u043B\u0438 \u043E\u0431\u0430 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u0430 \u043E\u0434\u043D\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E \u043D\u0430 \u0432\u044B\u0431\u043E\u0440 \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u044F."
        },
        {
          question: "\u041D\u0443\u0436\u043D\u044B \u043B\u0438 \u043D\u0430\u0432\u044B\u043A\u0438 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0438\u043B\u0438 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0439 \u0441\u0435\u0440\u0432\u0435\u0440?",
          answer: "\u0410\u0431\u0441\u043E\u043B\u044E\u0442\u043D\u043E \u043D\u0435\u0442! Qingpu \u2014 \u044D\u0442\u043E \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u0433\u043E\u0442\u043E\u0432\u0430\u044F \u043E\u0431\u043B\u0430\u0447\u043D\u0430\u044F SaaS-\u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430. \u0425\u043E\u0441\u0442\u0438\u043D\u0433, \u0430\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C \u0438 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u044B \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E."
        }
      ]
    },
    bottomCta: {
      title: "\u041E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 \u043D\u043E\u0432\u0443\u044E \u044D\u0440\u0443 \u0440\u043E\u0441\u0442\u0430 \u0434\u043E\u0445\u043E\u0434\u043E\u0432 \u0432\u043C\u0435\u0441\u0442\u0435 \u0441 Qingpu!",
      subtitle: "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044C \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E \u0441\u0435\u0433\u043E\u0434\u043D\u044F \u0438 \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0435 \u0432\u043D\u0435\u0448\u043D\u0438\u0439 \u0442\u0440\u0430\u0444\u0438\u043A \u043D\u0430 Amazon.",
      notes: ["14 \u0434\u043D\u0435\u0439 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E", "\u0411\u0435\u0437 \u043F\u0440\u0438\u0432\u044F\u0437\u043A\u0438 \u043A\u0430\u0440\u0442\u044B", "\u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u043D\u0442"],
      primaryText: "\u041D\u0430\u0447\u0430\u0442\u044C \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E",
      secondaryText: "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u0434\u0435\u043C\u043E"
    }
  }
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "amazon-store",
  __ssrInlineRender: true,
  setup(__props) {
    useSettings();
    const { locale } = useI18n();
    const { signUpUrl } = useShoplyAuthLinks();
    const { consultUrl, isOpen: isConsultOpen } = useShoplyConsult();
    const currentLocale = computed(() => {
      const current = locale.value;
      if (current === "zh" || current === "zh-HK" || current === "en" || current === "ru") return current;
      return "zh";
    });
    const copy = computed(() => amazonStoreLocales[currentLocale.value]);
    const brandName = computed(() => {
      if (currentLocale.value === "zh-HK") return "\u8F15\u92EA";
      if (currentLocale.value === "zh") return "\u8F7B\u94FA";
      return "Qingpu";
    });
    const openFaqIndex = ref(0);
    useSeoMeta({
      title: () => copy.value.seo.title,
      description: () => copy.value.seo.description,
      keywords: () => copy.value.seo.keywords,
      ogTitle: () => copy.value.seo.title,
      ogDescription: () => copy.value.seo.description,
      ogType: "website",
      ogImage: () => bannerImg,
      twitterCard: "summary_large_image",
      twitterTitle: () => copy.value.seo.title,
      twitterDescription: () => copy.value.seo.description,
      twitterImage: () => bannerImg
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$R;
      const _component_ShoplyConsultDialog = __nuxt_component_2;
      _push(`<!--[--><div class="bg-white font-sans text-slate-900 selection:bg-blue-200"><section class="relative isolate flex min-h-[100dvh] flex-col justify-center overflow-hidden bg-gradient-to-b from-[#2678ff] via-[#1e6df0] to-[#155fc8] px-5 pt-20 pb-10 text-white sm:px-8 sm:pt-24 sm:pb-12 lg:px-12"><div class="pointer-events-none absolute inset-0 -z-10"><div class="animate-shoply-glow absolute -left-20 top-10 h-[420px] w-[420px] rounded-full bg-cyan-300/20 blur-3xl"></div><div class="animate-shoply-float-delayed absolute -right-20 bottom-10 h-[460px] w-[460px] rounded-full bg-indigo-900/30 blur-3xl"></div><div class="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-blue-800/25 to-transparent"></div></div><div class="mx-auto w-full max-w-[1380px]"><div class="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 xl:gap-16"><div class="relative z-10 text-left"><div class="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3.5 py-1 text-xs font-bold tracking-wider text-blue-50 backdrop-blur-sm"><span class="h-2 w-2 rounded-full bg-amber-300 animate-pulse"></span> ${ssrInterpolate(copy.value.hero.badge)}</div><h1 class="mt-4 text-3xl font-black leading-tight tracking-tight sm:text-5xl lg:text-[3.25rem]">${ssrInterpolate(copy.value.hero.titleMain)} <span class="mt-1.5 block text-amber-300">${ssrInterpolate(copy.value.hero.titleHighlight)}</span></h1><p class="mt-4 max-w-lg text-sm leading-relaxed text-blue-50/90 sm:text-base sm:leading-7">${ssrInterpolate(copy.value.hero.description)}</p><div class="mt-6 flex flex-col items-stretch gap-3.5 sm:flex-row sm:items-center"><a${ssrRenderAttr("href", unref(signUpUrl))} class="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-extrabold text-blue-600 shadow-xl shadow-blue-950/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl active:scale-95 sm:w-auto sm:text-base"><span>${ssrInterpolate(copy.value.hero.primaryCta)}</span>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:arrow-right-bold",
        class: "h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
      }, null, _parent));
      _push(`</a><a${ssrRenderAttr("href", unref(consultUrl))} class="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3 text-sm font-bold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 active:scale-95 sm:w-auto sm:text-base">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:chat-circle-dots-bold",
        class: "h-4 w-4 text-amber-300"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(copy.value.hero.secondaryCta)}</span></a></div><div class="mt-6 flex flex-wrap items-center gap-2 text-xs font-semibold text-blue-100"><span class="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 backdrop-blur-sm">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:shield-check-fill",
        class: "h-3.5 w-3.5 text-emerald-300"
      }, null, _parent));
      _push(` ${ssrInterpolate(copy.value.hero.trustPills[0])}</span><span class="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 backdrop-blur-sm">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:trend-up-bold",
        class: "h-3.5 w-3.5 text-amber-300"
      }, null, _parent));
      _push(` ${ssrInterpolate(copy.value.hero.trustPills[1])}</span><span class="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 backdrop-blur-sm">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:users-three-fill",
        class: "h-3.5 w-3.5 text-cyan-300"
      }, null, _parent));
      _push(` ${ssrInterpolate(copy.value.hero.trustPills[2])}</span></div></div><div class="relative mx-auto w-full max-w-[580px] lg:max-w-none"><div class="absolute -top-3.5 -right-1.5 z-20 hidden items-center gap-1.5 rounded-full border border-white/90 bg-white/95 px-3 py-1 text-xs font-black text-slate-800 shadow-lg backdrop-blur-md transition-transform hover:scale-105 sm:inline-flex"><span class="flex h-4 w-4 items-center justify-center rounded-full bg-amber-500 text-white shadow-xs">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:seal-percent-fill",
        class: "h-2.5 w-2.5"
      }, null, _parent));
      _push(`</span><span>${ssrInterpolate(copy.value.hero.showcase.attributionBadge)}</span></div><div class="overflow-hidden rounded-2xl border border-white/30 bg-slate-900/85 p-2.5 shadow-[0_30px_80px_rgba(13,45,120,0.4)] backdrop-blur-xl sm:p-3"><div class="flex items-center justify-between border-b border-white/10 px-3 py-1.5 text-xs text-white/60"><div class="flex items-center gap-1.5"><span class="h-2.5 w-2.5 rounded-full bg-rose-500/80"></span><span class="h-2.5 w-2.5 rounded-full bg-amber-500/80"></span><span class="h-2.5 w-2.5 rounded-full bg-emerald-500/80"></span></div><div class="flex items-center gap-1 rounded-md bg-white/10 px-3 py-0.5 font-mono text-[11px] text-blue-100">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:lock-key-fill",
        class: "h-3 w-3 text-emerald-400"
      }, null, _parent));
      _push(`<span>https://yourbrand.store/products/pro-series</span></div><div class="flex items-center gap-1"><span class="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse"></span><span class="text-[10px] font-bold text-amber-300">Amazon Direct</span></div></div><div class="rounded-b-xl bg-slate-950/90 p-3.5 sm:p-4.5"><div class="flex items-center justify-between border-b border-white/10 pb-3 text-xs"><div><div class="flex items-center gap-2"><span class="font-bold text-white">Smart Wireless Headphones Pro</span><span class="rounded bg-amber-400/20 px-1.5 py-0.2 text-[10px] font-semibold text-amber-300">ASIN: B09XKZ89Y</span></div><div class="mt-0.5 flex items-center gap-1 text-[11px] text-slate-400"><span class="text-amber-400">\u2605\u2605\u2605\u2605\u2605</span><span>4.9 (3,280+ Reviews)</span></div></div><div class="text-right"><span class="text-base font-black text-white sm:text-lg">$149.00</span><span class="ml-1 text-[10px] text-slate-400 line-through">$179.00</span></div></div><div class="mt-3.5 space-y-2.5"><div class="flex items-center justify-between rounded-xl border border-amber-500/40 bg-gradient-to-r from-amber-500/20 via-amber-500/10 to-transparent p-2.5 transition-colors hover:border-amber-400"><div class="flex items-center gap-2.5"><div class="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FF9900] text-slate-950 font-black">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:amazon-logo-bold",
        class: "h-5 w-5"
      }, null, _parent));
      _push(`</div><div><div class="flex items-center gap-1.5"><span class="text-xs font-extrabold text-white">Buy on Amazon</span><span class="rounded bg-blue-500/30 px-1.5 py-0.2 text-[9px] font-bold text-blue-200">prime</span></div><p class="text-[10px] text-amber-200/80">${ssrInterpolate(copy.value.hero.showcase.relayNote)}</p></div></div><div class="flex items-center gap-1 rounded-lg bg-[#FF9900] px-3 py-1.5 text-xs font-black text-slate-950 shadow-sm transition-transform hover:scale-105"><span>${ssrInterpolate(copy.value.hero.showcase.relayCta)}</span>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:arrow-square-out-bold",
        class: "h-3.5 w-3.5"
      }, null, _parent));
      _push(`</div></div><div class="flex items-center justify-between rounded-xl border border-slate-700/60 bg-slate-900/90 p-2.5 transition-colors hover:border-blue-400"><div class="flex items-center gap-2.5"><div class="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:storefront-bold",
        class: "h-5 w-5"
      }, null, _parent));
      _push(`</div><div><div class="text-xs font-bold text-white">${ssrInterpolate(copy.value.hero.showcase.dtcTitle)}</div><p class="text-[10px] text-slate-400">${ssrInterpolate(copy.value.hero.showcase.dtcSubtitle)}</p></div></div><span class="rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold text-white">${ssrInterpolate(copy.value.hero.showcase.dtcCta)}</span></div></div><div class="mt-3.5 grid grid-cols-3 gap-2 border-t border-white/10 pt-3 text-center"><div class="rounded-lg bg-white/5 p-1.5"><div class="text-xs font-bold text-amber-300">${ssrInterpolate(copy.value.hero.showcase.advA9)}</div><div class="text-[10px] text-slate-400">${ssrInterpolate(copy.value.hero.showcase.advA9Sub)}</div></div><div class="rounded-lg bg-white/5 p-1.5"><div class="text-xs font-bold text-emerald-300">${ssrInterpolate(copy.value.hero.showcase.advBrb)}</div><div class="text-[10px] text-slate-400">${ssrInterpolate(copy.value.hero.showcase.advBrbSub)}</div></div><div class="rounded-lg bg-white/5 p-1.5"><div class="text-xs font-bold text-cyan-300">${ssrInterpolate(copy.value.hero.showcase.advAudience)}</div><div class="text-[10px] text-slate-400">${ssrInterpolate(copy.value.hero.showcase.advAudienceSub)}</div></div></div><div class="mt-3 flex items-center justify-between rounded-lg bg-white/5 px-2.5 py-1.5 text-[10px] text-slate-300"><div class="flex items-center gap-1">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:shield-check-fill",
        class: "h-3.5 w-3.5 text-emerald-400"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(copy.value.hero.showcase.complianceArch)}</span></div><div class="flex items-center gap-1">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:chart-line-up-bold",
        class: "h-3.5 w-3.5 text-amber-400"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(copy.value.hero.showcase.pixelTracking)}</span></div><div class="flex items-center gap-1">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:lock-key-fill",
        class: "h-3.5 w-3.5 text-cyan-400"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(copy.value.hero.showcase.ownDomain)}</span></div></div></div></div></div></div></div></section><section class="py-20 sm:py-28"><div class="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12"><div class="grid items-center gap-12 lg:grid-cols-12 lg:gap-16"><div class="lg:col-span-6"><div class="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold text-blue-600">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:crosshair-duotone",
        class: "h-4 w-4"
      }, null, _parent));
      _push(` ${ssrInterpolate(copy.value.overview.tag)}</div><h2 class="mt-4 text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">${ssrInterpolate(copy.value.overview.titleLine1)} <span class="relative inline-block mt-1"><span class="relative z-10">${ssrInterpolate(copy.value.overview.titleLine2)}</span><span class="absolute bottom-1 left-0 -z-0 h-3.5 w-full bg-amber-200/80 rounded-sm"></span></span></h2><p class="mt-6 text-base leading-8 text-slate-600 sm:text-lg sm:leading-8">${ssrInterpolate(copy.value.overview.description)}</p><div class="mt-8 space-y-3.5"><!--[-->`);
      ssrRenderList(copy.value.overview.bulletPoints, (point) => {
        _push(`<div class="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/80 p-4 transition-colors hover:border-blue-200 hover:bg-blue-50/40"><span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm mt-0.5">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:check-bold",
          class: "h-3.5 w-3.5"
        }, null, _parent));
        _push(`</span><div><h4 class="text-sm font-bold text-slate-900">${ssrInterpolate(point.title)}</h4><p class="mt-0.5 text-xs leading-relaxed text-slate-500 sm:text-sm">${ssrInterpolate(point.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div><div class="mt-9"><a${ssrRenderAttr("href", unref(signUpUrl))} class="inline-flex items-center gap-2 rounded-full bg-slate-950 px-8 py-3.5 text-sm font-extrabold text-white shadow-lg transition-all hover:bg-blue-600 hover:shadow-xl active:scale-95"><span>${ssrInterpolate(copy.value.overview.ctaText)}</span>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:arrow-right-bold",
        class: "h-4 w-4"
      }, null, _parent));
      _push(`</a></div></div><div class="lg:col-span-6"><div class="rounded-[2.5rem] border border-slate-200/90 bg-gradient-to-b from-white to-slate-50/70 p-6 shadow-xl sm:p-8"><h3 class="text-lg font-black tracking-tight text-slate-950 sm:text-xl">${ssrInterpolate(copy.value.comparison.cardTitle)}</h3><p class="mt-1 text-xs text-slate-500 sm:text-sm">${ssrInterpolate(copy.value.comparison.cardSubtitle)}</p><div class="mt-6 space-y-4"><!--[-->`);
      ssrRenderList(copy.value.comparison.items, (item) => {
        _push(`<div class="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"><div class="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider"><span>${ssrInterpolate(item.dimension)}</span></div><div class="mt-2.5 grid grid-cols-2 gap-3 text-xs sm:text-sm"><div class="rounded-xl bg-slate-50 p-2.5 text-slate-500 border border-slate-100"><p class="text-[11px] font-bold text-slate-400 mb-1">${ssrInterpolate(copy.value.comparison.traditionalLabel)}</p><p class="leading-relaxed">${ssrInterpolate(item.traditional)}</p></div><div class="rounded-xl bg-blue-50/70 p-2.5 text-blue-900 border border-blue-200/70 font-medium"><p class="text-[11px] font-bold text-blue-600 mb-1">${ssrInterpolate(copy.value.comparison.ownedLabel)}</p><p class="leading-relaxed">${ssrInterpolate(item.qingpu)}</p></div></div></div>`);
      });
      _push(`<!--]--></div></div></div></div></div></section><section class="bg-slate-50/60 py-20 sm:py-28"><div class="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12"><div class="mx-auto max-w-3xl text-center"><div class="inline-flex items-center gap-2 rounded-full bg-blue-100/70 px-4 py-1 text-xs font-bold text-blue-700">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:sparkle-fill",
        class: "h-3.5 w-3.5 text-blue-600"
      }, null, _parent));
      _push(` ${ssrInterpolate(copy.value.pillarsHeader.badge)}</div><h2 class="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">${ssrInterpolate(copy.value.pillarsHeader.title)}</h2><p class="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">${ssrInterpolate(copy.value.pillarsHeader.description)}</p></div><div class="mt-16 space-y-20 lg:space-y-24"><div class="grid items-center gap-10 lg:grid-cols-12 lg:gap-16"><div class="lg:col-span-6 lg:order-2"><div class="relative group"><div class="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 blur-xl opacity-60 transition-opacity group-hover:opacity-90"></div><div class="relative overflow-hidden rounded-[2.5rem] border border-slate-200/80 bg-white p-3 shadow-xl"><img${ssrRenderAttr("src", unref(drainageImg))}${ssrRenderAttr("alt", copy.value.pillar1.title)} class="w-full rounded-[2rem] object-cover"></div></div></div><div class="lg:col-span-6 lg:order-1"><div class="inline-flex items-center gap-1.5 text-xs font-extrabold tracking-widest text-blue-600 uppercase"><span class="flex h-5 w-5 items-center justify-center rounded-md bg-blue-600 text-[10px] text-white">01</span> ${ssrInterpolate(copy.value.pillar1.tag)}</div><h3 class="mt-3 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">${ssrInterpolate(copy.value.pillar1.title)}</h3><p class="mt-5 text-base leading-8 text-slate-600">${ssrInterpolate(copy.value.pillar1.description)}</p><ul class="mt-6 space-y-3"><!--[-->`);
      ssrRenderList(copy.value.pillar1.bullets, (bullet) => {
        _push(`<li class="flex items-center gap-3 text-sm font-semibold text-slate-700"><span class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:check-bold",
          class: "h-3 w-3"
        }, null, _parent));
        _push(`</span><span>${ssrInterpolate(bullet)}</span></li>`);
      });
      _push(`<!--]--></ul><div class="mt-8"><a${ssrRenderAttr("href", unref(signUpUrl))} class="inline-flex items-center gap-2 rounded-full border-2 border-blue-600 px-7 py-3 text-sm font-bold text-blue-600 transition-all hover:bg-blue-600 hover:text-white active:scale-95"><span>${ssrInterpolate(copy.value.pillar1.ctaText)}</span>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:arrow-right-bold",
        class: "h-4 w-4"
      }, null, _parent));
      _push(`</a></div></div></div><div class="grid items-center gap-10 lg:grid-cols-12 lg:gap-16"><div class="lg:col-span-6"><div class="relative group"><div class="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-tr from-pink-500/20 to-purple-500/20 blur-xl opacity-60 transition-opacity group-hover:opacity-90"></div><div class="relative overflow-hidden rounded-[2.5rem] border border-slate-200/80 bg-white p-3 shadow-xl"><img${ssrRenderAttr("src", unref(socialMediaImg))}${ssrRenderAttr("alt", copy.value.pillar2.title)} class="w-full rounded-[2rem] object-cover"></div></div></div><div class="lg:col-span-6"><div class="inline-flex items-center gap-1.5 text-xs font-extrabold tracking-widest text-purple-600 uppercase"><span class="flex h-5 w-5 items-center justify-center rounded-md bg-purple-600 text-[10px] text-white">02</span> ${ssrInterpolate(copy.value.pillar2.tag)}</div><h3 class="mt-3 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">${ssrInterpolate(copy.value.pillar2.title)}</h3><p class="mt-5 text-base leading-8 text-slate-600">${ssrInterpolate(copy.value.pillar2.description)}</p><ul class="mt-6 space-y-3"><!--[-->`);
      ssrRenderList(copy.value.pillar2.bullets, (bullet) => {
        _push(`<li class="flex items-center gap-3 text-sm font-semibold text-slate-700"><span class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-600">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:check-bold",
          class: "h-3 w-3"
        }, null, _parent));
        _push(`</span><span>${ssrInterpolate(bullet)}</span></li>`);
      });
      _push(`<!--]--></ul><div class="mt-8"><a${ssrRenderAttr("href", unref(signUpUrl))} class="inline-flex items-center gap-2 rounded-full border-2 border-purple-600 px-7 py-3 text-sm font-bold text-purple-600 transition-all hover:bg-purple-600 hover:text-white active:scale-95"><span>${ssrInterpolate(copy.value.pillar2.ctaText)}</span>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:arrow-right-bold",
        class: "h-4 w-4"
      }, null, _parent));
      _push(`</a></div></div></div><div class="grid items-center gap-10 lg:grid-cols-12 lg:gap-16"><div class="lg:col-span-6 lg:order-2"><div class="relative group"><div class="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-tr from-emerald-500/20 to-teal-500/20 blur-xl opacity-60 transition-opacity group-hover:opacity-90"></div><div class="relative overflow-hidden rounded-[2.5rem] border border-slate-200/80 bg-white p-3 shadow-xl"><img${ssrRenderAttr("src", unref(dataImg))}${ssrRenderAttr("alt", copy.value.pillar3.title)} class="w-full rounded-[2rem] object-cover"></div></div></div><div class="lg:col-span-6 lg:order-1"><div class="inline-flex items-center gap-1.5 text-xs font-extrabold tracking-widest text-emerald-600 uppercase"><span class="flex h-5 w-5 items-center justify-center rounded-md bg-emerald-600 text-[10px] text-white">03</span> ${ssrInterpolate(copy.value.pillar3.tag)}</div><h3 class="mt-3 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">${ssrInterpolate(copy.value.pillar3.title)}</h3><p class="mt-5 text-base leading-8 text-slate-600">${ssrInterpolate(copy.value.pillar3.description)}</p><ul class="mt-6 space-y-3"><!--[-->`);
      ssrRenderList(copy.value.pillar3.bullets, (bullet) => {
        _push(`<li class="flex items-center gap-3 text-sm font-semibold text-slate-700"><span class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:check-bold",
          class: "h-3 w-3"
        }, null, _parent));
        _push(`</span><span>${ssrInterpolate(bullet)}</span></li>`);
      });
      _push(`<!--]--></ul><div class="mt-8"><a${ssrRenderAttr("href", unref(signUpUrl))} class="inline-flex items-center gap-2 rounded-full border-2 border-emerald-600 px-7 py-3 text-sm font-bold text-emerald-600 transition-all hover:bg-emerald-600 hover:text-white active:scale-95"><span>${ssrInterpolate(copy.value.pillar3.ctaText)}</span>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:arrow-right-bold",
        class: "h-4 w-4"
      }, null, _parent));
      _push(`</a></div></div></div><div class="grid items-center gap-10 lg:grid-cols-12 lg:gap-16"><div class="lg:col-span-6"><div class="relative group"><div class="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-tr from-amber-500/20 to-orange-500/20 blur-xl opacity-60 transition-opacity group-hover:opacity-90"></div><div class="relative overflow-hidden rounded-[2.5rem] border border-slate-200/80 bg-white p-3 shadow-xl"><img${ssrRenderAttr("src", unref(marketingImg))}${ssrRenderAttr("alt", copy.value.pillar4.title)} class="w-full rounded-[2rem] object-cover"></div></div></div><div class="lg:col-span-6"><div class="inline-flex items-center gap-1.5 text-xs font-extrabold tracking-widest text-amber-600 uppercase"><span class="flex h-5 w-5 items-center justify-center rounded-md bg-amber-600 text-[10px] text-white">04</span> ${ssrInterpolate(copy.value.pillar4.tag)}</div><h3 class="mt-3 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">${ssrInterpolate(copy.value.pillar4.title)}</h3><p class="mt-5 text-base leading-8 text-slate-600">${ssrInterpolate(copy.value.pillar4.description)}</p><ul class="mt-6 space-y-3"><!--[-->`);
      ssrRenderList(copy.value.pillar4.bullets, (bullet) => {
        _push(`<li class="flex items-center gap-3 text-sm font-semibold text-slate-700"><span class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:check-bold",
          class: "h-3 w-3"
        }, null, _parent));
        _push(`</span><span>${ssrInterpolate(bullet)}</span></li>`);
      });
      _push(`<!--]--></ul><div class="mt-8"><a${ssrRenderAttr("href", unref(signUpUrl))} class="inline-flex items-center gap-2 rounded-full border-2 border-amber-600 px-7 py-3 text-sm font-bold text-amber-600 transition-all hover:bg-amber-600 hover:text-white active:scale-95"><span>${ssrInterpolate(copy.value.pillar4.ctaText)}</span>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:arrow-right-bold",
        class: "h-4 w-4"
      }, null, _parent));
      _push(`</a></div></div></div></div></div></section><section class="py-20 sm:py-28"><div class="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12"><div class="mx-auto max-w-3xl text-center"><p class="text-xs font-black tracking-[0.18em] text-blue-600 uppercase">${ssrInterpolate(copy.value.workflow.eyebrow)}</p><h2 class="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">${ssrInterpolate(copy.value.workflow.title)}</h2><p class="mt-4 text-base text-slate-600">${ssrInterpolate(copy.value.workflow.subtitle)}</p></div><div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"><!--[-->`);
      ssrRenderList(copy.value.workflow.steps, (step, idx) => {
        _push(`<div class="relative rounded-3xl border border-slate-200/90 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl group"><div class="flex items-center justify-between"><span class="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 font-black text-lg transition-transform group-hover:scale-110"> 0${ssrInterpolate(idx + 1)}</span>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: step.icon,
          class: "h-6 w-6 text-slate-300 group-hover:text-blue-500 transition-colors"
        }, null, _parent));
        _push(`</div><h3 class="mt-6 text-lg font-bold text-slate-900">${ssrInterpolate(step.title)}</h3><p class="mt-2.5 text-xs leading-relaxed text-slate-500 sm:text-sm sm:leading-6">${ssrInterpolate(step.desc)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="border-t border-slate-200/80 bg-slate-50/50 py-20 sm:py-28"><div class="mx-auto max-w-4xl px-5 sm:px-8"><div class="text-center"><div class="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3.5 py-1 text-xs font-bold text-blue-700">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:question-fill",
        class: "h-3.5 w-3.5"
      }, null, _parent));
      _push(` FAQ </div><h2 class="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">${ssrInterpolate(copy.value.faq.title)}</h2><p class="mt-3 text-sm text-slate-600 sm:text-base">${ssrInterpolate(copy.value.faq.subtitle)}</p></div><div class="mt-12 space-y-4"><!--[-->`);
      ssrRenderList(copy.value.faq.items, (item, index) => {
        _push(`<div class="${ssrRenderClass([openFaqIndex.value === index ? "shadow-md border-blue-200" : "hover:border-slate-300", "overflow-hidden rounded-2xl border border-slate-200/90 bg-white transition-all duration-200"])}"><button type="button" class="flex w-full items-center justify-between p-5 sm:p-6 text-left font-bold text-slate-900 focus:outline-none"><span class="text-base sm:text-lg">${ssrInterpolate(item.question)}</span>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:caret-down-bold",
          class: ["h-4 w-4 shrink-0 transition-transform duration-200 text-slate-400", { "rotate-180 text-blue-600": openFaqIndex.value === index }]
        }, null, _parent));
        _push(`</button><div class="px-5 pb-6 pt-0 text-sm leading-relaxed text-slate-600 sm:px-6 sm:text-base sm:leading-7 border-t border-slate-100/80 mt-1" style="${ssrRenderStyle(openFaqIndex.value === index ? null : { display: "none" })}">${ssrInterpolate(item.answer)}</div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="relative isolate overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 px-5 py-24 text-white sm:px-8 sm:py-28 lg:px-12"><div class="pointer-events-none absolute inset-0 -z-10"><div class="animate-shoply-glow absolute -left-20 -top-20 h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl"></div><div class="animate-shoply-float-delayed absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"></div></div><div class="mx-auto max-w-4xl text-center"><p class="text-xs font-black tracking-[0.2em] text-cyan-300 uppercase">${ssrInterpolate(brandName.value)}</p><h2 class="mt-5 text-3xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">${ssrInterpolate(copy.value.bottomCta.title)}</h2><p class="mx-auto mt-6 max-w-xl text-base text-blue-100/80 sm:text-lg">${ssrInterpolate(copy.value.bottomCta.subtitle)}</p><div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"><a${ssrRenderAttr("href", unref(signUpUrl))} class="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-9 py-4 text-base font-black text-blue-700 shadow-2xl transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-50 active:scale-95 sm:w-auto"><span>${ssrInterpolate(copy.value.bottomCta.primaryText)}</span>`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:arrow-right-bold",
        class: "h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
      }, null, _parent));
      _push(`</a><a${ssrRenderAttr("href", unref(consultUrl))} class="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 active:scale-95 sm:w-auto">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:chat-circle-dots-bold",
        class: "h-5 w-5 text-amber-300"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(copy.value.bottomCta.secondaryText)}</span></a></div><div class="mt-8 flex items-center justify-center gap-6 text-xs text-blue-200/70"><span class="flex items-center gap-1.5">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:check-bold",
        class: "h-3.5 w-3.5 text-emerald-400"
      }, null, _parent));
      _push(` ${ssrInterpolate(copy.value.bottomCta.notes[0])}</span><span class="flex items-center gap-1.5">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:check-bold",
        class: "h-3.5 w-3.5 text-emerald-400"
      }, null, _parent));
      _push(` ${ssrInterpolate(copy.value.bottomCta.notes[1])}</span><span class="flex items-center gap-1.5">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:check-bold",
        class: "h-3.5 w-3.5 text-emerald-400"
      }, null, _parent));
      _push(` ${ssrInterpolate(copy.value.bottomCta.notes[2])}</span></div></div></section></div>`);
      _push(ssrRenderComponent(_component_ShoplyConsultDialog, {
        open: unref(isConsultOpen),
        "onUpdate:open": ($event) => isRef(isConsultOpen) ? isConsultOpen.value = $event : null,
        source: "amazon-store"
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shoply/pages/page/amazon-store.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=amazon-store-BML6830Q.mjs.map
