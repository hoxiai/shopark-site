import { u as useI18n, e as useToast, w as useFetch, bE as _sfc_main$m, bf as _sfc_main$l, _ as _sfc_main$Q, i as _sfc_main$L, b as _sfc_main$s } from './server.mjs';
import { defineComponent, computed, ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "shoply-connection",
  __ssrInlineRender: true,
  setup(__props) {
    const { t, tm } = useI18n({
      useScope: "local",
      messages: {
        en: {
          title: "Shoply store service",
          subtitle: "Accounts and plans live in APay. Stores run on Shoply and are managed through its signed partner API.",
          loadFailed: "Unable to load the connection status",
          status: "Status",
          configured: "Configured",
          baseUrl: "Partner API URL",
          problem: {
            missing_url: "SHOPLY_PARTNER_API_URL is not set",
            invalid_url: "SHOPLY_PARTNER_API_URL is not a plain HTTP(S) URL",
            private_network: "Private address requires SHOPLY_PARTNER_ALLOW_PRIVATE_NETWORK=true",
            missing_secret: "SHOPLY_PARTNER_SECRET is not set",
            weak_secret: "SHOPLY_PARTNER_SECRET must contain at least 32 characters"
          },
          test: "Test connection",
          testOk: "Shoply accepted the signed request.",
          testFailed: "Connection test failed",
          refresh: "Refresh",
          resyncTitle: "Re-sync store licenses",
          resyncDesc: "Push the current APay plan of a user to every Shoply store they own, overwriting edition and expiry.",
          userIdPlaceholder: "APay user ID",
          resync: "Re-sync",
          resyncFailed: "Re-sync failed",
          readinessTitle: "Integration self-check",
          readinessDesc: "Four links that fail silently when misconfigured: nothing errors, things just stop converging.",
          lastRun: "last run",
          checks: {
            partner: {
              title: "Partner connection",
              reason: { ok: "Signed partner API is reachable from this server." }
            },
            cron: {
              title: "License re-push job",
              reason: {
                ok: "Scheduled and last run succeeded.",
                job_missing: "No scheduler job points at /api/shoply/cron/license-sync \u2014 expired plans never fall back to free.",
                job_disabled: "The job exists but is disabled.",
                job_method: "The job must use method GET.",
                job_unsigned: "Enable useCronSecret on the job, otherwise the endpoint rejects it.",
                secret_missing: "CRON_SECRET is not set on this server, so the job cannot authenticate.",
                never_run: "Configured but has not run yet \u2014 it fires within a minute of the next tick.",
                last_run_failed: "The last run failed; see the detail below and /admin/scheduler."
              }
            },
            leads: {
              title: "Inquiry inbox",
              reason: {
                ok: "Website inquiry forms deliver to this inbox.",
                inbox_missing: 'No inbox resolved \u2014 every website inquiry is rejected with "not configured".',
                mailer_missing: "No active email provider, so leads cannot be delivered.",
                inbox_fallback: "Falling back to the site company_email; leads mix into general support mail.",
                store_only: "Leads are stored by the shoply extension but nobody is notified by email."
              }
            },
            plans: {
              title: "Plan products",
              reason: {
                ok: "Subscription products declare plan code and store limit.",
                no_plan_product: "No active subscription product carries shoply_plan_code \u2014 nothing to buy, everyone stays on free.",
                plans_untagged: "There are subscription products on sale, but none of them declares shoply_plan_code, so they belong to another product line. Tag the Shoply plans or create them.",
                missing_store_limit: "Some plans have no shoply_store_limit and fall back to the free store quota."
              }
            }
          },
          setupTitle: "Setup checklist",
          setupSteps: [
            "APay server: set SHOPLY_PARTNER_API_URL (e.g. https://shoply.page/app/saas/partner/apay) and SHOPLY_PARTNER_SECRET.",
            "Shoply server: set the same secret as SHOPLY_APAY_PARTNER_SECRET and run the Saas app migrations.",
            "Products: add shoply_plan_code and shoply_store_limit to the subscription product meta presets, then fill them on each plan.",
            "Scheduler: add a job in /admin/scheduler with path /api/shoply/cron/license-sync, method GET, schedule daily and useCronSecret enabled, so expiring plans fall back to free.",
            'Leads: enable the shoply extension in /admin/extensions so inquiries are stored, and set the notification inbox in the theme settings (shoply_lead_inbox) or the SHOPLY_LEAD_INBOX variable. With neither, website inquiry forms report "not configured".'
          ]
        },
        zh: {
          title: "Shoply \u5E97\u94FA\u670D\u52A1",
          subtitle: "\u8D26\u53F7\u4E0E\u5957\u9910\u5728 APay\uFF0C\u5E97\u94FA\u8FD0\u884C\u5728 Shoply\uFF0C\u901A\u8FC7\u5E26\u7B7E\u540D\u7684\u5408\u4F5C\u65B9\u63A5\u53E3\u7BA1\u7406\u3002",
          loadFailed: "\u65E0\u6CD5\u8BFB\u53D6\u8FDE\u63A5\u72B6\u6001",
          status: "\u72B6\u6001",
          configured: "\u5DF2\u914D\u7F6E",
          baseUrl: "\u5408\u4F5C\u65B9\u63A5\u53E3\u5730\u5740",
          problem: {
            missing_url: "\u672A\u8BBE\u7F6E SHOPLY_PARTNER_API_URL",
            invalid_url: "SHOPLY_PARTNER_API_URL \u4E0D\u662F\u5408\u6CD5\u7684 HTTP(S) \u5730\u5740",
            private_network: "\u5185\u7F51\u5730\u5740\u9700\u8981\u8BBE\u7F6E SHOPLY_PARTNER_ALLOW_PRIVATE_NETWORK=true",
            missing_secret: "\u672A\u8BBE\u7F6E SHOPLY_PARTNER_SECRET",
            weak_secret: "SHOPLY_PARTNER_SECRET \u81F3\u5C11\u9700\u8981 32 \u4E2A\u5B57\u7B26"
          },
          test: "\u6D4B\u8BD5\u8FDE\u63A5",
          testOk: "Shoply \u5DF2\u63A5\u53D7\u7B7E\u540D\u8BF7\u6C42\u3002",
          testFailed: "\u8FDE\u63A5\u6D4B\u8BD5\u5931\u8D25",
          refresh: "\u5237\u65B0",
          resyncTitle: "\u91CD\u63A8\u5E97\u94FA\u6743\u76CA",
          resyncDesc: "\u628A\u67D0\u4E2A\u7528\u6237\u5F53\u524D\u7684 APay \u5957\u9910\u63A8\u9001\u5230\u4ED6\u540D\u4E0B\u5168\u90E8 Shoply \u5E97\u94FA\uFF0C\u8986\u76D6\u7248\u672C\u4E0E\u5230\u671F\u65F6\u95F4\u3002",
          userIdPlaceholder: "APay \u7528\u6237 ID",
          resync: "\u91CD\u63A8",
          resyncFailed: "\u91CD\u63A8\u5931\u8D25",
          readinessTitle: "\u63A5\u5165\u81EA\u68C0",
          readinessDesc: "\u8FD9\u56DB\u6761\u94FE\u8DEF\u914D\u9519\u4E86\u4E0D\u4F1A\u62A5\u9519\uFF0C\u53EA\u4F1A\u9759\u9ED8\u5931\u6548\uFF0C\u6240\u4EE5\u5728\u8FD9\u91CC\u67E5\u771F\u5B9E\u72B6\u6001\u3002",
          lastRun: "\u6700\u8FD1\u8FD0\u884C",
          checks: {
            partner: {
              title: "\u5408\u4F5C\u65B9\u8FDE\u63A5",
              reason: { ok: "\u672C\u673A\u53EF\u4EE5\u7528\u7B7E\u540D\u8BF7\u6C42\u8BBF\u95EE\u5408\u4F5C\u65B9\u63A5\u53E3\u3002" }
            },
            cron: {
              title: "\u6743\u76CA\u8865\u63A8\u5B9A\u65F6\u4EFB\u52A1",
              reason: {
                ok: "\u5DF2\u914D\u7F6E\uFF0C\u6700\u8FD1\u4E00\u6B21\u8FD0\u884C\u6210\u529F\u3002",
                job_missing: "\u8C03\u5EA6\u5668\u91CC\u6CA1\u6709\u6307\u5411 /api/shoply/cron/license-sync \u7684\u4EFB\u52A1\u2014\u2014\u5957\u9910\u5230\u671F\u540E\u5E97\u94FA\u4E0D\u4F1A\u56DE\u843D\u514D\u8D39\u7248\u3002",
                job_disabled: "\u4EFB\u52A1\u5B58\u5728\u4F46\u88AB\u505C\u7528\u4E86\u3002",
                job_method: "\u4EFB\u52A1\u7684\u65B9\u6CD5\u5FC5\u987B\u662F GET\u3002",
                job_unsigned: "\u4EFB\u52A1\u8981\u5F00\u542F useCronSecret\uFF0C\u5426\u5219\u63A5\u53E3\u4F1A\u62D2\u7EDD\u3002",
                secret_missing: "\u672C\u673A\u6CA1\u6709\u8BBE\u7F6E CRON_SECRET\uFF0C\u4EFB\u52A1\u65E0\u6CD5\u901A\u8FC7\u9274\u6743\u3002",
                never_run: "\u5DF2\u914D\u7F6E\u4F46\u8FD8\u6CA1\u8DD1\u8FC7\u2014\u2014\u8C03\u5EA6\u5668\u4E0B\u4E00\u8F6E\u5C31\u4F1A\u89E6\u53D1\u3002",
                last_run_failed: "\u6700\u8FD1\u4E00\u6B21\u8FD0\u884C\u5931\u8D25\uFF0C\u770B\u4E0B\u9762\u7684\u8BE6\u60C5\u548C /admin/scheduler\u3002"
              }
            },
            leads: {
              title: "\u7EBF\u7D22\u6536\u4EF6\u7BB1",
              reason: {
                ok: "\u5B98\u7F51\u54A8\u8BE2\u8868\u5355\u4F1A\u6295\u9012\u5230\u8FD9\u4E2A\u90AE\u7BB1\u3002",
                inbox_missing: "\u6CA1\u6709\u53EF\u7528\u6536\u4EF6\u7BB1\u2014\u2014\u5B98\u7F51\u54A8\u8BE2\u5168\u90E8\u88AB\u62D2\uFF0C\u7EBF\u7D22\u76F4\u63A5\u4E22\u3002",
                mailer_missing: "\u6CA1\u6709\u542F\u7528\u7684\u90AE\u4EF6\u670D\u52A1\u5546\uFF0C\u7EBF\u7D22\u53D1\u4E0D\u51FA\u53BB\u3002",
                inbox_fallback: "\u5F53\u524D\u56DE\u843D\u5230\u7AD9\u70B9 company_email\uFF0C\u7EBF\u7D22\u4F1A\u6DF7\u8FDB\u666E\u901A\u5BA2\u670D\u90AE\u4EF6\u3002",
                store_only: "\u7EBF\u7D22\u4F1A\u5B58\u8FDB shoply \u6269\u5C55\uFF0C\u4F46\u6CA1\u6709\u90AE\u4EF6\u901A\u77E5\uFF0C\u5F97\u6709\u4EBA\u4E3B\u52A8\u53BB\u540E\u53F0\u770B\u3002"
              }
            },
            plans: {
              title: "\u5957\u9910\u5546\u54C1",
              reason: {
                ok: "\u8BA2\u9605\u5546\u54C1\u5DF2\u58F0\u660E\u5957\u9910 code \u4E0E\u53EF\u5F00\u5E97\u6570\u3002",
                no_plan_product: "\u6CA1\u6709\u4EFB\u4F55\u4E0A\u67B6\u8BA2\u9605\u5546\u54C1\u5E26 shoply_plan_code\u2014\u2014\u5B9A\u4EF7\u9875\u65E0\u8D27\u53EF\u4E70\uFF0C\u6240\u6709\u4EBA\u505C\u5728\u514D\u8D39\u7248\u3002",
                plans_untagged: "\u5E93\u91CC\u6709\u5728\u552E\u7684\u8BA2\u9605\u5957\u9910\uFF0C\u4F46\u6CA1\u6709\u4E00\u4E2A\u5E26 shoply_plan_code\uFF0C\u90FD\u5C5E\u4E8E\u522B\u7684\u4EA7\u54C1\u7EBF\u3002\u7ED9 Shoply \u7684\u5957\u9910\u6253\u4E0A\u8FD9\u4E2A\u6807\u8BB0\uFF0C\u6216\u8005\u65B0\u5EFA\u3002",
                missing_store_limit: "\u6709\u5957\u9910\u6CA1\u586B shoply_store_limit\uFF0C\u4E70\u4E86\u4E5F\u53EA\u6709\u514D\u8D39\u7248\u7684\u5F00\u5E97\u6570\u3002"
              }
            }
          },
          setupTitle: "\u63A5\u5165\u6E05\u5355",
          setupSteps: [
            "APay \u670D\u52A1\u7AEF\uFF1A\u8BBE\u7F6E SHOPLY_PARTNER_API_URL\uFF08\u4F8B\u5982 https://qingpu.pro/app/saas/partner/apay\uFF09\u548C SHOPLY_PARTNER_SECRET\u3002",
            "Shoply \u670D\u52A1\u7AEF\uFF1A\u628A\u540C\u4E00\u4E2A\u5BC6\u94A5\u8BBE\u4E3A SHOPLY_APAY_PARTNER_SECRET\uFF0C\u5E76\u6267\u884C Saas \u5E94\u7528\u7684\u6570\u636E\u8FC1\u79FB\u3002",
            "\u5546\u54C1\uFF1A\u5728\u8BA2\u9605\u5546\u54C1\u7684\u5143\u6570\u636E\u9884\u8BBE\u91CC\u52A0 shoply_plan_code \u4E0E shoply_store_limit\uFF0C\u518D\u5728\u6BCF\u4E2A\u5957\u9910\u4E0A\u586B\u5199\u3002",
            "\u5B9A\u65F6\u4EFB\u52A1\uFF1A\u5728 /admin/scheduler \u6DFB\u52A0\u4E00\u6761\u2014\u2014\u8DEF\u5F84 /api/shoply/cron/license-sync\u3001\u65B9\u6CD5 GET\u3001\u9891\u7387 daily\u3001\u5F00\u542F useCronSecret\uFF0C\u5957\u9910\u5230\u671F\u540E\u5E97\u94FA\u624D\u4F1A\u56DE\u843D\u514D\u8D39\u7248\u3002",
            "\u7EBF\u7D22\u63A5\u6536\uFF1A\u5728 /admin/extensions \u542F\u7528 shoply \u6269\u5C55\u8BA9\u7EBF\u7D22\u843D\u5E93\uFF0C\u5E76\u5728\u4E3B\u9898\u8BBE\u7F6E\u91CC\u586B shoply_lead_inbox\uFF08\u6216\u8BBE\u7F6E SHOPLY_LEAD_INBOX \u73AF\u5883\u53D8\u91CF\uFF09\u505A\u90AE\u4EF6\u901A\u77E5\u3002\u4E24\u8005\u90FD\u6CA1\u6709\uFF0C\u5B98\u7F51\u54A8\u8BE2\u8868\u5355\u4F1A\u63D0\u793A\u672A\u914D\u7F6E\u3002"
          ]
        },
        "zh-HK": {
          title: "Shoply \u5E97\u8216\u670D\u52D9",
          subtitle: "\u5E33\u865F\u8207\u65B9\u6848\u5728 APay\uFF0C\u5E97\u8216\u904B\u884C\u5728 Shoply\uFF0C\u900F\u904E\u5E36\u7C3D\u540D\u7684\u5408\u4F5C\u65B9\u4ECB\u9762\u7BA1\u7406\u3002",
          loadFailed: "\u7121\u6CD5\u8B80\u53D6\u9023\u7DDA\u72C0\u614B",
          status: "\u72C0\u614B",
          configured: "\u5DF2\u8A2D\u5B9A",
          baseUrl: "\u5408\u4F5C\u65B9\u4ECB\u9762\u5730\u5740",
          problem: {
            missing_url: "\u672A\u8A2D\u5B9A SHOPLY_PARTNER_API_URL",
            invalid_url: "SHOPLY_PARTNER_API_URL \u4E0D\u662F\u5408\u6CD5\u7684 HTTP(S) \u5730\u5740",
            private_network: "\u5167\u7DB2\u5730\u5740\u9700\u8981\u8A2D\u5B9A SHOPLY_PARTNER_ALLOW_PRIVATE_NETWORK=true",
            missing_secret: "\u672A\u8A2D\u5B9A SHOPLY_PARTNER_SECRET",
            weak_secret: "SHOPLY_PARTNER_SECRET \u81F3\u5C11\u9700\u8981 32 \u500B\u5B57\u5143"
          },
          test: "\u6E2C\u8A66\u9023\u7DDA",
          testOk: "Shoply \u5DF2\u63A5\u53D7\u7C3D\u540D\u8ACB\u6C42\u3002",
          testFailed: "\u9023\u7DDA\u6E2C\u8A66\u5931\u6557",
          refresh: "\u91CD\u65B0\u6574\u7406",
          resyncTitle: "\u91CD\u63A8\u5E97\u8216\u6B0A\u76CA",
          resyncDesc: "\u628A\u67D0\u500B\u7528\u6236\u76EE\u524D\u7684 APay \u65B9\u6848\u63A8\u9001\u5230\u4ED6\u540D\u4E0B\u5168\u90E8 Shoply \u5E97\u8216\uFF0C\u8986\u84CB\u7248\u672C\u8207\u5230\u671F\u6642\u9593\u3002",
          userIdPlaceholder: "APay \u7528\u6236 ID",
          resync: "\u91CD\u63A8",
          resyncFailed: "\u91CD\u63A8\u5931\u6557",
          readinessTitle: "\u63A5\u5165\u81EA\u6AA2",
          readinessDesc: "\u9019\u56DB\u689D\u93C8\u8DEF\u8A2D\u5B9A\u932F\u4E86\u4E0D\u6703\u5831\u932F\uFF0C\u53EA\u6703\u975C\u9ED8\u5931\u6548\uFF0C\u6240\u4EE5\u5728\u9019\u88E1\u67E5\u771F\u5BE6\u72C0\u614B\u3002",
          lastRun: "\u6700\u8FD1\u57F7\u884C",
          checks: {
            partner: {
              title: "\u5408\u4F5C\u65B9\u9023\u7DDA",
              reason: { ok: "\u672C\u6A5F\u53EF\u4EE5\u7528\u7C3D\u540D\u8ACB\u6C42\u5B58\u53D6\u5408\u4F5C\u65B9\u4ECB\u9762\u3002" }
            },
            cron: {
              title: "\u6B0A\u76CA\u88DC\u63A8\u6392\u7A0B\u4EFB\u52D9",
              reason: {
                ok: "\u5DF2\u8A2D\u5B9A\uFF0C\u6700\u8FD1\u4E00\u6B21\u57F7\u884C\u6210\u529F\u3002",
                job_missing: "\u6392\u7A0B\u5668\u88E1\u6C92\u6709\u6307\u5411 /api/shoply/cron/license-sync \u7684\u4EFB\u52D9\u2014\u2014\u65B9\u6848\u5230\u671F\u5F8C\u5E97\u8216\u4E0D\u6703\u56DE\u843D\u514D\u8CBB\u7248\u3002",
                job_disabled: "\u4EFB\u52D9\u5B58\u5728\u4F46\u5DF2\u505C\u7528\u3002",
                job_method: "\u4EFB\u52D9\u7684\u65B9\u6CD5\u5FC5\u9808\u662F GET\u3002",
                job_unsigned: "\u4EFB\u52D9\u8981\u958B\u555F useCronSecret\uFF0C\u5426\u5247\u4ECB\u9762\u6703\u62D2\u7D55\u3002",
                secret_missing: "\u672C\u6A5F\u6C92\u6709\u8A2D\u5B9A CRON_SECRET\uFF0C\u4EFB\u52D9\u7121\u6CD5\u901A\u904E\u9A57\u8B49\u3002",
                never_run: "\u5DF2\u8A2D\u5B9A\u4F46\u9084\u6C92\u57F7\u884C\u904E\u2014\u2014\u6392\u7A0B\u5668\u4E0B\u4E00\u8F2A\u5C31\u6703\u89F8\u767C\u3002",
                last_run_failed: "\u6700\u8FD1\u4E00\u6B21\u57F7\u884C\u5931\u6557\uFF0C\u770B\u4E0B\u9762\u7684\u8A73\u60C5\u8207 /admin/scheduler\u3002"
              }
            },
            leads: {
              title: "\u7DDA\u7D22\u6536\u4EF6\u7BB1",
              reason: {
                ok: "\u5B98\u7DB2\u8AEE\u8A62\u8868\u55AE\u6703\u6295\u905E\u5230\u9019\u500B\u4FE1\u7BB1\u3002",
                inbox_missing: "\u6C92\u6709\u53EF\u7528\u4FE1\u7BB1\u2014\u2014\u5B98\u7DB2\u8AEE\u8A62\u5168\u90E8\u88AB\u62D2\uFF0C\u7DDA\u7D22\u76F4\u63A5\u907A\u5931\u3002",
                mailer_missing: "\u6C92\u6709\u555F\u7528\u7684\u90F5\u4EF6\u670D\u52D9\u5546\uFF0C\u7DDA\u7D22\u5BC4\u4E0D\u51FA\u53BB\u3002",
                inbox_fallback: "\u76EE\u524D\u56DE\u843D\u5230\u7DB2\u7AD9 company_email\uFF0C\u7DDA\u7D22\u6703\u6DF7\u9032\u4E00\u822C\u5BA2\u670D\u90F5\u4EF6\u3002",
                store_only: "\u7DDA\u7D22\u6703\u5B58\u9032 shoply \u64F4\u5145\uFF0C\u4F46\u6C92\u6709\u90F5\u4EF6\u901A\u77E5\uFF0C\u5F97\u6709\u4EBA\u4E3B\u52D5\u53BB\u5F8C\u53F0\u770B\u3002"
              }
            },
            plans: {
              title: "\u65B9\u6848\u5546\u54C1",
              reason: {
                ok: "\u8A02\u95B1\u5546\u54C1\u5DF2\u5BA3\u544A\u65B9\u6848 code \u8207\u53EF\u958B\u5E97\u6578\u3002",
                no_plan_product: "\u6C92\u6709\u4EFB\u4F55\u4E0A\u67B6\u8A02\u95B1\u5546\u54C1\u5E36 shoply_plan_code\u2014\u2014\u5B9A\u50F9\u9801\u7121\u8CA8\u53EF\u8CB7\uFF0C\u6240\u6709\u4EBA\u505C\u5728\u514D\u8CBB\u7248\u3002",
                plans_untagged: "\u5EAB\u88E1\u6709\u5728\u552E\u7684\u8A02\u95B1\u65B9\u6848\uFF0C\u4F46\u6C92\u6709\u4E00\u500B\u5E36 shoply_plan_code\uFF0C\u90FD\u5C6C\u65BC\u5225\u7684\u7522\u54C1\u7DDA\u3002\u7D66 Shoply \u7684\u65B9\u6848\u6253\u4E0A\u9019\u500B\u6A19\u8A18\uFF0C\u6216\u8005\u65B0\u5EFA\u3002",
                missing_store_limit: "\u6709\u65B9\u6848\u6C92\u586B shoply_store_limit\uFF0C\u8CB7\u4E86\u4E5F\u53EA\u6709\u514D\u8CBB\u7248\u7684\u958B\u5E97\u6578\u3002"
              }
            }
          },
          setupTitle: "\u63A5\u5165\u6E05\u55AE",
          setupSteps: [
            "APay \u4F3A\u670D\u5668\uFF1A\u8A2D\u5B9A SHOPLY_PARTNER_API_URL\uFF08\u4F8B\u5982 https://qingpu.pro/app/saas/partner/apay\uFF09\u548C SHOPLY_PARTNER_SECRET\u3002",
            "Shoply \u4F3A\u670D\u5668\uFF1A\u628A\u540C\u4E00\u500B\u5BC6\u9470\u8A2D\u70BA SHOPLY_APAY_PARTNER_SECRET\uFF0C\u4E26\u57F7\u884C Saas \u61C9\u7528\u7684\u8CC7\u6599\u9077\u79FB\u3002",
            "\u5546\u54C1\uFF1A\u5728\u8A02\u95B1\u5546\u54C1\u7684\u5143\u6578\u64DA\u9810\u8A2D\u88E1\u52A0 shoply_plan_code \u8207 shoply_store_limit\uFF0C\u518D\u5728\u6BCF\u500B\u65B9\u6848\u4E0A\u586B\u5BEB\u3002",
            "\u6392\u7A0B\u4EFB\u52D9\uFF1A\u5728 /admin/scheduler \u65B0\u589E\u4E00\u689D\u2014\u2014\u8DEF\u5F91 /api/shoply/cron/license-sync\u3001\u65B9\u6CD5 GET\u3001\u983B\u7387 daily\u3001\u958B\u555F useCronSecret\uFF0C\u65B9\u6848\u5230\u671F\u5F8C\u5E97\u8216\u624D\u6703\u56DE\u843D\u514D\u8CBB\u7248\u3002",
            "\u7DDA\u7D22\u63A5\u6536\uFF1A\u5728 /admin/extensions \u555F\u7528 shoply \u64F4\u5145\u8B93\u7DDA\u7D22\u843D\u5EAB\uFF0C\u4E26\u5728\u4E3B\u984C\u8A2D\u5B9A\u586B\u5BEB shoply_lead_inbox\uFF08\u6216\u8A2D\u5B9A SHOPLY_LEAD_INBOX \u74B0\u5883\u8B8A\u6578\uFF09\u505A\u90F5\u4EF6\u901A\u77E5\u3002\u5169\u8005\u90FD\u6C92\u6709\uFF0C\u5B98\u7DB2\u8AEE\u8A62\u8868\u55AE\u6703\u63D0\u793A\u672A\u8A2D\u5B9A\u3002"
          ]
        },
        ru: {
          title: "\u041C\u0430\u0433\u0430\u0437\u0438\u043D\u044B Shoply",
          subtitle: "\u0410\u043A\u043A\u0430\u0443\u043D\u0442\u044B \u0438 \u0442\u0430\u0440\u0438\u0444\u044B \u0445\u0440\u0430\u043D\u044F\u0442\u0441\u044F \u0432 APay. \u041C\u0430\u0433\u0430\u0437\u0438\u043D\u044B \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u0432 Shoply \u0438 \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0447\u0435\u0440\u0435\u0437 \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u043D\u043D\u044B\u0439 \u043F\u0430\u0440\u0442\u043D\u0451\u0440\u0441\u043A\u0438\u0439 API.",
          loadFailed: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F",
          status: "\u0421\u0442\u0430\u0442\u0443\u0441",
          configured: "\u041D\u0430\u0441\u0442\u0440\u043E\u0435\u043D\u043E",
          baseUrl: "URL \u043F\u0430\u0440\u0442\u043D\u0451\u0440\u0441\u043A\u043E\u0433\u043E API",
          problem: {
            missing_url: "\u041D\u0435 \u0437\u0430\u0434\u0430\u043D SHOPLY_PARTNER_API_URL",
            invalid_url: "SHOPLY_PARTNER_API_URL \u043D\u0435 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u043C HTTP(S) \u0430\u0434\u0440\u0435\u0441\u043E\u043C",
            private_network: "\u0414\u043B\u044F \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0435\u0433\u043E \u0430\u0434\u0440\u0435\u0441\u0430 \u043D\u0443\u0436\u0435\u043D SHOPLY_PARTNER_ALLOW_PRIVATE_NETWORK=true",
            missing_secret: "\u041D\u0435 \u0437\u0430\u0434\u0430\u043D SHOPLY_PARTNER_SECRET",
            weak_secret: "SHOPLY_PARTNER_SECRET \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u043D\u0435 \u043C\u0435\u043D\u0435\u0435 32 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432"
          },
          test: "\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435",
          testOk: "Shoply \u043F\u0440\u0438\u043D\u044F\u043B \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u043D\u043D\u044B\u0439 \u0437\u0430\u043F\u0440\u043E\u0441.",
          testFailed: "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u043D\u0435 \u0443\u0434\u0430\u043B\u0430\u0441\u044C",
          refresh: "\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C",
          resyncTitle: "\u041F\u043E\u0432\u0442\u043E\u0440\u043D\u0430\u044F \u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u0439",
          resyncDesc: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0442\u0435\u043A\u0443\u0449\u0438\u0439 \u0442\u0430\u0440\u0438\u0444 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F APay \u0432\u043E \u0432\u0441\u0435 \u0435\u0433\u043E \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u044B Shoply \u0441 \u043F\u0435\u0440\u0435\u0437\u0430\u043F\u0438\u0441\u044C\u044E \u0440\u0435\u0434\u0430\u043A\u0446\u0438\u0438 \u0438 \u0441\u0440\u043E\u043A\u0430.",
          userIdPlaceholder: "ID \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F APay",
          resync: "\u0421\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
          resyncFailed: "\u0421\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u043D\u0435 \u0443\u0434\u0430\u043B\u0430\u0441\u044C",
          readinessTitle: "\u0421\u0430\u043C\u043E\u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438",
          readinessDesc: "\u0427\u0435\u0442\u044B\u0440\u0435 \u0441\u0432\u044F\u0437\u043A\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u0440\u0438 \u043D\u0435\u0432\u0435\u0440\u043D\u043E\u0439 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0435 \u043D\u0435 \u0432\u044B\u0434\u0430\u044E\u0442 \u043E\u0448\u0438\u0431\u043E\u043A \u2014 \u043F\u0440\u043E\u0441\u0442\u043E \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u044E\u0442 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C.",
          lastRun: "\u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0437\u0430\u043F\u0443\u0441\u043A",
          checks: {
            partner: {
              title: "\u041F\u0430\u0440\u0442\u043D\u0451\u0440\u0441\u043A\u043E\u0435 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435",
              reason: { ok: "\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u043D\u043D\u044B\u0439 \u043F\u0430\u0440\u0442\u043D\u0451\u0440\u0441\u043A\u0438\u0439 API \u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D \u0441 \u044D\u0442\u043E\u0433\u043E \u0441\u0435\u0440\u0432\u0435\u0440\u0430." }
            },
            cron: {
              title: "\u0417\u0430\u0434\u0430\u043D\u0438\u0435 \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u043E\u0439 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u0439",
              reason: {
                ok: "\u041D\u0430\u0441\u0442\u0440\u043E\u0435\u043D\u043E, \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0437\u0430\u043F\u0443\u0441\u043A \u0443\u0441\u043F\u0435\u0448\u0435\u043D.",
                job_missing: "\u0412 \u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0449\u0438\u043A\u0435 \u043D\u0435\u0442 \u0437\u0430\u0434\u0430\u043D\u0438\u044F \u043D\u0430 /api/shoply/cron/license-sync \u2014 \u043F\u043E\u0441\u043B\u0435 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0438 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u044B \u043D\u0435 \u0432\u0435\u0440\u043D\u0443\u0442\u0441\u044F \u043D\u0430 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439 \u0442\u0430\u0440\u0438\u0444.",
                job_disabled: "\u0417\u0430\u0434\u0430\u043D\u0438\u0435 \u0435\u0441\u0442\u044C, \u043D\u043E \u043E\u0442\u043A\u043B\u044E\u0447\u0435\u043D\u043E.",
                job_method: "\u041C\u0435\u0442\u043E\u0434 \u0437\u0430\u0434\u0430\u043D\u0438\u044F \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C GET.",
                job_unsigned: "\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u0435 useCronSecret, \u0438\u043D\u0430\u0447\u0435 \u044D\u043D\u0434\u043F\u043E\u0438\u043D\u0442 \u043E\u0442\u043A\u043B\u043E\u043D\u0438\u0442 \u0437\u0430\u043F\u0440\u043E\u0441.",
                secret_missing: "\u041D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u043D\u0435 \u0437\u0430\u0434\u0430\u043D CRON_SECRET, \u0437\u0430\u0434\u0430\u043D\u0438\u0435 \u043D\u0435 \u043F\u0440\u043E\u0439\u0434\u0451\u0442 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044E.",
                never_run: "\u041D\u0430\u0441\u0442\u0440\u043E\u0435\u043D\u043E, \u043D\u043E \u0435\u0449\u0451 \u043D\u0435 \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u043B\u043E\u0441\u044C \u2014 \u0441\u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u043D\u0430 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0435\u043C \u0442\u0438\u043A\u0435.",
                last_run_failed: "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0437\u0430\u043F\u0443\u0441\u043A \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u043B\u0441\u044F \u043E\u0448\u0438\u0431\u043A\u043E\u0439, \u0441\u043C. \u0434\u0435\u0442\u0430\u043B\u0438 \u043D\u0438\u0436\u0435 \u0438 /admin/scheduler."
              }
            },
            leads: {
              title: "\u042F\u0449\u0438\u043A \u0434\u043B\u044F \u0437\u0430\u044F\u0432\u043E\u043A",
              reason: {
                ok: "\u0424\u043E\u0440\u043C\u044B \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 \u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0432 \u044D\u0442\u043E\u0442 \u044F\u0449\u0438\u043A.",
                inbox_missing: "\u042F\u0449\u0438\u043A \u043D\u0435 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0451\u043D \u2014 \u0432\u0441\u0435 \u0437\u0430\u044F\u0432\u043A\u0438 \u0441 \u0441\u0430\u0439\u0442\u0430 \u043E\u0442\u043A\u043B\u043E\u043D\u044F\u044E\u0442\u0441\u044F \u0438 \u0442\u0435\u0440\u044F\u044E\u0442\u0441\u044F.",
                mailer_missing: "\u041D\u0435\u0442 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u043F\u043E\u0447\u0442\u043E\u0432\u043E\u0433\u043E \u043F\u0440\u043E\u0432\u0430\u0439\u0434\u0435\u0440\u0430, \u0437\u0430\u044F\u0432\u043A\u0438 \u043D\u0435 \u0434\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C.",
                inbox_fallback: "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F company_email \u0441\u0430\u0439\u0442\u0430: \u0437\u0430\u044F\u0432\u043A\u0438 \u0441\u043C\u0435\u0448\u0438\u0432\u0430\u044E\u0442\u0441\u044F \u0441 \u043E\u0431\u044B\u0447\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u043E\u0439 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438.",
                store_only: "\u0417\u0430\u044F\u0432\u043A\u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u044E\u0442\u0441\u044F \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0438\u0435\u043C shoply, \u043D\u043E \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F \u043F\u043E \u043F\u043E\u0447\u0442\u0435 \u043D\u0435 \u0443\u0445\u043E\u0434\u044F\u0442."
              }
            },
            plans: {
              title: "\u0422\u0430\u0440\u0438\u0444\u043D\u044B\u0435 \u0442\u043E\u0432\u0430\u0440\u044B",
              reason: {
                ok: "\u0423 \u043F\u043E\u0434\u043F\u0438\u0441\u043E\u043A \u0437\u0430\u0434\u0430\u043D\u044B \u043A\u043E\u0434 \u0442\u0430\u0440\u0438\u0444\u0430 \u0438 \u043B\u0438\u043C\u0438\u0442 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u043E\u0432.",
                no_plan_product: "\u041D\u0438 \u0443 \u043E\u0434\u043D\u043E\u0433\u043E \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u0442\u043E\u0432\u0430\u0440\u0430-\u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0438 \u043D\u0435\u0442 shoply_plan_code \u2014 \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u044C \u043D\u0435\u0447\u0435\u0433\u043E, \u0432\u0441\u0435 \u043E\u0441\u0442\u0430\u044E\u0442\u0441\u044F \u043D\u0430 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E\u043C \u0442\u0430\u0440\u0438\u0444\u0435.",
                plans_untagged: "\u0412 \u043F\u0440\u043E\u0434\u0430\u0436\u0435 \u0435\u0441\u0442\u044C \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0438, \u043D\u043E \u043D\u0438 \u043E\u0434\u043D\u0430 \u043D\u0435 \u043E\u0431\u044A\u044F\u0432\u043B\u044F\u0435\u0442 shoply_plan_code \u2014 \u043E\u043D\u0438 \u043E\u0442\u043D\u043E\u0441\u044F\u0442\u0441\u044F \u043A \u0434\u0440\u0443\u0433\u043E\u0439 \u043B\u0438\u043D\u0435\u0439\u043A\u0435. \u041E\u0442\u043C\u0435\u0442\u044C\u0442\u0435 \u0442\u0430\u0440\u0438\u0444\u044B Shoply \u0438\u043B\u0438 \u0441\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u043D\u043E\u0432\u044B\u0435.",
                missing_store_limit: "\u0423 \u0447\u0430\u0441\u0442\u0438 \u0442\u0430\u0440\u0438\u0444\u043E\u0432 \u043D\u0435 \u0437\u0430\u0434\u0430\u043D shoply_store_limit, \u043B\u0438\u043C\u0438\u0442 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u043E\u0432 \u043E\u0441\u0442\u0430\u043D\u0435\u0442\u0441\u044F \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u043C."
              }
            }
          },
          setupTitle: "\u0427\u0435\u043A-\u043B\u0438\u0441\u0442 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F",
          setupSteps: [
            "\u0421\u0435\u0440\u0432\u0435\u0440 APay: \u0437\u0430\u0434\u0430\u0439\u0442\u0435 SHOPLY_PARTNER_API_URL (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, https://qingpu.pro/app/saas/partner/apay) \u0438 SHOPLY_PARTNER_SECRET.",
            "\u0421\u0435\u0440\u0432\u0435\u0440 Shoply: \u0437\u0430\u0434\u0430\u0439\u0442\u0435 \u0442\u043E\u0442 \u0436\u0435 \u0441\u0435\u043A\u0440\u0435\u0442 \u043A\u0430\u043A SHOPLY_APAY_PARTNER_SECRET \u0438 \u0432\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u043C\u0438\u0433\u0440\u0430\u0446\u0438\u0438 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F Saas.",
            "\u0422\u043E\u0432\u0430\u0440\u044B: \u0434\u043E\u0431\u0430\u0432\u044C\u0442\u0435 shoply_plan_code \u0438 shoply_store_limit \u0432 \u043F\u0440\u0435\u0441\u0435\u0442\u044B \u043C\u0435\u0442\u0430\u0434\u0430\u043D\u043D\u044B\u0445 \u043F\u043E\u0434\u043F\u0438\u0441\u043E\u043A \u0438 \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0438\u0445 \u0434\u043B\u044F \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0442\u0430\u0440\u0438\u0444\u0430.",
            "\u041F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0449\u0438\u043A: \u0434\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u0435 \u0432 /admin/scheduler \u2014 \u043F\u0443\u0442\u044C /api/shoply/cron/license-sync, \u043C\u0435\u0442\u043E\u0434 GET, \u0440\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435 daily, \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u0435 useCronSecret, \u0438\u043D\u0430\u0447\u0435 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u044B \u043D\u0435 \u0432\u0435\u0440\u043D\u0443\u0442\u0441\u044F \u043D\u0430 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439 \u0442\u0430\u0440\u0438\u0444 \u043F\u043E\u0441\u043B\u0435 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0438.",
            "\u0417\u0430\u044F\u0432\u043A\u0438: \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u0435 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0438\u0435 shoply \u0432 /admin/extensions, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u044F\u0432\u043A\u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u043B\u0438\u0441\u044C, \u0438 \u0437\u0430\u0434\u0430\u0439\u0442\u0435 \u044F\u0449\u0438\u043A \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0439 \u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0435 \u0442\u0435\u043C\u044B shoply_lead_inbox \u0438\u043B\u0438 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 SHOPLY_LEAD_INBOX. \u0411\u0435\u0437 \u043E\u0431\u043E\u0438\u0445 \u0444\u043E\u0440\u043C\u044B \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 \u0441\u043E\u043E\u0431\u0449\u0430\u0442 \u043E \u043D\u0435\u0433\u043E\u0442\u043E\u0432\u043E\u0439 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0435."
          ]
        }
      }
    });
    const toast = useToast();
    const { data, pending, error, refresh } = useFetch(
      "/api/admin/shoply/connection",
      { server: false, lazy: true },
      "$-WA7SH-q_Q"
      /* nuxt-injected */
    );
    const connection = computed(() => {
      var _a;
      return (_a = data.value) == null ? void 0 : _a.data;
    });
    const {
      data: readinessData,
      pending: readinessPending,
      error: readinessError,
      refresh: refreshReadiness
    } = useFetch(
      "/api/admin/shoply/readiness",
      { server: false, lazy: true },
      "$IiT0t_lbF5"
      /* nuxt-injected */
    );
    const readiness = computed(() => {
      var _a;
      return (_a = readinessData.value) == null ? void 0 : _a.data;
    });
    const statusIcon = (status) => status === "ok" ? "ph:check-circle-fill" : status === "warn" ? "ph:warning-circle-fill" : "ph:x-circle-fill";
    const statusClass = (status) => status === "ok" ? "text-emerald-600" : status === "warn" ? "text-amber-600" : "text-red-600";
    const reasonText = (check) => check.key === "partner" && check.reason !== "ok" ? t(`problem.${check.reason}`) : t(`checks.${check.key}.reason.${check.reason}`);
    const checkDetail = (check) => {
      const detail = check.detail || {};
      if (check.key === "partner") return String(detail.baseUrl || "");
      if (check.key === "cron") {
        const parts = [];
        if (detail.jobName) parts.push(`${detail.jobName} \xB7 ${detail.method || "POST"} \xB7 ${detail.schedule}`);
        if (detail.lastRun) parts.push(`${t("lastRun")} ${new Date(Number(detail.lastRun)).toLocaleString()}`);
        if (detail.lastResult) parts.push(String(detail.lastResult));
        return parts.join("   ");
      }
      if (check.key === "leads") {
        const parts = [];
        if (detail.inbox) parts.push(`${detail.inbox} \xB7 ${detail.source}`);
        parts.push(detail.storage ? "shoply: on" : "shoply: off");
        return parts.join("   ");
      }
      if (check.key === "plans") {
        const plans = Array.isArray(detail.plans) ? detail.plans : [];
        const untagged = Array.isArray(detail.untagged) ? detail.untagged : [];
        const parts = [`free \xD7${detail.freeStoreLimit}`, ...plans.map((plan) => {
          var _a;
          return `${plan.planCode} \xD7${(_a = plan.storeLimit) != null ? _a : "?"}`;
        })];
        if (untagged.length) parts.push(`untagged: ${untagged.slice(0, 6).join(" / ")}`);
        return parts.join(", ");
      }
      return "";
    };
    const setupSteps = computed(() => tm("setupSteps").map((item) => String(item)));
    const errorText = (err) => {
      var _a, _b;
      const value = err && typeof err === "object" ? err : {};
      return ((_a = value.data) == null ? void 0 : _a.statusMessage) || ((_b = value.data) == null ? void 0 : _b.message) || value.statusMessage || "";
    };
    const testing = ref(false);
    const testConnection = async () => {
      testing.value = true;
      try {
        await $fetch("/api/admin/shoply/connection/test", { method: "POST" });
        toast.add({ title: t("testOk"), color: "success" });
      } catch (err) {
        toast.add({ title: t("testFailed"), description: errorText(err), color: "error" });
      } finally {
        testing.value = false;
      }
    };
    const resyncUserId = ref("");
    const validUserId = computed(() => /^[1-9]\d*$/.test(resyncUserId.value.trim()));
    const resyncing = ref(false);
    const resyncResult = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      const _component_USkeleton = _sfc_main$m;
      const _component_UAlert = _sfc_main$l;
      const _component_UIcon = _sfc_main$Q;
      const _component_UButton = _sfc_main$L;
      const _component_UInput = _sfc_main$s;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex max-w-3xl flex-col gap-6 pb-6" }, _attrs))}><div><h1 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">${ssrInterpolate(unref(t)("title"))}</h1><p class="mt-2 text-sm text-gray-500 dark:text-gray-400">${ssrInterpolate(unref(t)("subtitle"))}</p></div><section class="rounded-2xl border border-gray-200 bg-white p-6 dark:border-white/10 dark:bg-[#121214]">`);
      if (unref(pending)) {
        _push(ssrRenderComponent(_component_USkeleton, { class: "h-24 w-full" }, null, _parent));
      } else if (unref(error)) {
        _push(ssrRenderComponent(_component_UAlert, {
          icon: "ph:warning",
          color: "error",
          variant: "subtle",
          title: unref(t)("loadFailed")
        }, null, _parent));
      } else {
        _push(`<div class="space-y-5"><div class="grid gap-4 sm:grid-cols-2"><div class="rounded-xl bg-gray-50 p-4 dark:bg-white/5"><p class="text-xs font-medium uppercase tracking-wide text-gray-500">${ssrInterpolate(unref(t)("status"))}</p><p class="${ssrRenderClass([((_a = connection.value) == null ? void 0 : _a.configured) ? "text-emerald-600" : "text-amber-600", "mt-2 flex items-center gap-2 text-sm font-semibold"])}">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: ((_b = connection.value) == null ? void 0 : _b.configured) ? "ph:check-circle-fill" : "ph:warning-circle-fill",
          class: "h-4 w-4"
        }, null, _parent));
        _push(` ${ssrInterpolate(((_c = connection.value) == null ? void 0 : _c.configured) ? unref(t)("configured") : unref(t)(`problem.${((_d = connection.value) == null ? void 0 : _d.problem) || "missing_url"}`))}</p></div><div class="min-w-0 rounded-xl bg-gray-50 p-4 dark:bg-white/5"><p class="text-xs font-medium uppercase tracking-wide text-gray-500">${ssrInterpolate(unref(t)("baseUrl"))}</p><p class="mt-2 truncate font-mono text-sm text-gray-900 dark:text-white">${ssrInterpolate(((_e = connection.value) == null ? void 0 : _e.baseUrl) || "\u2014")}</p></div></div><div class="flex flex-wrap gap-3">`);
        _push(ssrRenderComponent(_component_UButton, {
          icon: "ph:heartbeat",
          loading: testing.value,
          disabled: !((_f = connection.value) == null ? void 0 : _f.configured),
          onClick: testConnection
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(t)("test"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(t)("test")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UButton, {
          color: "neutral",
          variant: "ghost",
          icon: "ph:arrow-clockwise",
          onClick: ($event) => unref(refresh)()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(t)("refresh"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(t)("refresh")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      }
      _push(`</section><section class="rounded-2xl border border-gray-200 bg-white p-6 dark:border-white/10 dark:bg-[#121214]"><h2 class="text-base font-semibold text-gray-900 dark:text-white">${ssrInterpolate(unref(t)("resyncTitle"))}</h2><p class="mt-1 text-sm text-gray-500 dark:text-gray-400">${ssrInterpolate(unref(t)("resyncDesc"))}</p><form class="mt-4 flex flex-col gap-3 sm:flex-row">`);
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: resyncUserId.value,
        "onUpdate:modelValue": ($event) => resyncUserId.value = $event,
        inputmode: "numeric",
        placeholder: unref(t)("userIdPlaceholder"),
        class: "w-full sm:max-w-xs"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        type: "submit",
        icon: "ph:arrows-clockwise",
        loading: resyncing.value,
        disabled: !validUserId.value || !((_g = connection.value) == null ? void 0 : _g.configured)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("resync"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("resync")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form>`);
      if (resyncResult.value) {
        _push(`<pre class="mt-4 overflow-x-auto rounded-xl bg-gray-50 p-4 text-xs text-gray-700 dark:bg-white/5 dark:text-gray-300">${ssrInterpolate(resyncResult.value)}</pre>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section><section class="rounded-2xl border border-gray-200 bg-white p-6 dark:border-white/10 dark:bg-[#121214]"><div class="flex items-start justify-between gap-4"><div><h2 class="text-base font-semibold text-gray-900 dark:text-white">${ssrInterpolate(unref(t)("readinessTitle"))}</h2><p class="mt-1 text-sm text-gray-500 dark:text-gray-400">${ssrInterpolate(unref(t)("readinessDesc"))}</p></div>`);
      _push(ssrRenderComponent(_component_UButton, {
        color: "neutral",
        variant: "ghost",
        icon: "ph:arrow-clockwise",
        loading: unref(readinessPending),
        onClick: ($event) => unref(refreshReadiness)()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("refresh"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("refresh")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (!readiness.value && !unref(readinessError)) {
        _push(ssrRenderComponent(_component_USkeleton, { class: "mt-4 h-40 w-full" }, null, _parent));
      } else if (unref(readinessError)) {
        _push(ssrRenderComponent(_component_UAlert, {
          class: "mt-4",
          icon: "ph:warning",
          color: "error",
          variant: "subtle",
          title: unref(t)("loadFailed")
        }, null, _parent));
      } else {
        _push(`<ul class="mt-4 space-y-3"><!--[-->`);
        ssrRenderList(((_h = readiness.value) == null ? void 0 : _h.checks) || [], (check) => {
          _push(`<li class="flex gap-3 rounded-xl bg-gray-50 p-4 dark:bg-white/5">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: statusIcon(check.status),
            class: ["mt-0.5 h-5 w-5 shrink-0", statusClass(check.status)]
          }, null, _parent));
          _push(`<div class="min-w-0"><p class="text-sm font-semibold text-gray-900 dark:text-white">${ssrInterpolate(unref(t)(`checks.${check.key}.title`))}</p><p class="${ssrRenderClass([statusClass(check.status), "mt-0.5 text-sm"])}">${ssrInterpolate(reasonText(check))}</p>`);
          if (checkDetail(check)) {
            _push(`<p class="mt-1 break-words font-mono text-xs text-gray-500 dark:text-gray-400">${ssrInterpolate(checkDetail(check))}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></li>`);
        });
        _push(`<!--]--></ul>`);
      }
      _push(`</section><section class="rounded-2xl border border-gray-200 bg-white p-6 text-sm leading-6 text-gray-600 dark:border-white/10 dark:bg-[#121214] dark:text-gray-300"><h2 class="text-base font-semibold text-gray-900 dark:text-white">${ssrInterpolate(unref(t)("setupTitle"))}</h2><ol class="mt-3 list-decimal space-y-2 pl-5"><!--[-->`);
      ssrRenderList(setupSteps.value, (step) => {
        _push(`<li>${ssrInterpolate(step)}</li>`);
      });
      _push(`<!--]--></ol></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shoply/admin/pages/shoply-connection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
