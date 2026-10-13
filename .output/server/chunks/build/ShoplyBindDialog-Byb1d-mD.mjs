import { u as useI18n, d as useFormatTime, n as _sfc_main$C, _ as _sfc_main$S, i as _sfc_main$N, a as _sfc_main$t, b as _sfc_main$s, v as _sfc_main$l, B as _sfc_main$i } from './server.mjs';
import { defineComponent, useModel, computed, ref, watch, mergeProps, withCtx, unref, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, createCommentVNode, withModifiers, renderList, mergeModels, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { f as formatCopy } from './useShoplyConsole-2rVhyTbW.mjs';
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

const shoplyBindLocales = {
  en: {
    entryTitle: "Already selling on Qingpu?",
    entryDescription: "Link the account you already have and its stores show up here.",
    entryAction: "Link existing account",
    title: "Link your existing account",
    subtitle: "We ask Qingpu to send a code to the phone or email registered on that account. Your password stays with Qingpu \u2014 we never see it.",
    accountLabel: "Account",
    accountPlaceholder: "Email or mobile number",
    isdCodeLabel: "Country code",
    sendCode: "Send code",
    sending: "Sending\u2026",
    codeLabel: "Verification code",
    codePlaceholder: "Code from the message",
    codeSent: "If that account exists, a code is on its way to {target}.",
    changeAccount: "Use another account",
    resend: "Send again",
    next: "Next",
    previewTitle: "What linking changes",
    previewStores: "These stores move to this account:",
    previewEmpty: "That account has no stores yet \u2014 linking still connects it, and stores you open here will belong to it.",
    columnCurrent: "Now",
    columnNext: "After linking",
    perpetual: "No expiry",
    downgradeTitle: "These stores will follow your plan here",
    downgradeBody: "Their edition and expiry are taken over by your plan on this site. Time you paid for directly on Qingpu does not carry over.",
    downgradeAck: "I understand, link anyway",
    confirm: "Link account",
    linking: "Linking\u2026",
    cancel: "Cancel",
    close: "Close",
    successTitle: "Account linked",
    licensePending: "Account linked. Plan activation is pending; please refresh shortly.",
    successStores: "{count} stores are now managed here.",
    successNoStores: "The account is linked. Stores you open here belong to it.",
    done: "Done",
    errors: {
      invalid_account: "Enter the email address or mobile number of that account.",
      invalid_input: "Some information is invalid. Please check and try again.",
      invalid_code: "That code is incorrect or has expired.",
      challenge_expired: "This request expired. Start again to get a new code.",
      too_many_attempts: "Too many attempts. Start again to get a new code.",
      too_many_requests: "Too many code requests. Please wait a while and try again.",
      already_bound: "That account is already linked to another account here.",
      has_stores: "This account already owns stores, so it cannot take over another account. Contact support to merge them.",
      acknowledge_required: "Confirm the plan change on those stores first.",
      ticket_expired: "The confirmation window closed. Start again.",
      busy: "Another operation is still running. Please try again in a moment.",
      rejected: "The store service rejected the request.",
      unavailable: "The store service is temporarily unavailable. Please try again later.",
      generic: "Something went wrong. Please try again."
    }
  },
  zh: {
    entryTitle: "\u5DF2\u7ECF\u5728\u8F7B\u94FA\u5F00\u8FC7\u5E97\uFF1F",
    entryDescription: "\u628A\u539F\u6765\u7684\u8D26\u53F7\u7ED1\u8FC7\u6765\uFF0C\u540D\u4E0B\u5E97\u94FA\u5C31\u4F1A\u51FA\u73B0\u5728\u8FD9\u91CC\u3002",
    entryAction: "\u7ED1\u5B9A\u5DF2\u6709\u8D26\u53F7",
    title: "\u7ED1\u5B9A\u5DF2\u6709\u8D26\u53F7",
    subtitle: "\u6211\u4EEC\u4F1A\u8BF7\u8F7B\u94FA\u628A\u9A8C\u8BC1\u7801\u53D1\u5230\u8BE5\u8D26\u53F7\u767B\u8BB0\u7684\u624B\u673A\u6216\u90AE\u7BB1\u3002\u5BC6\u7801\u59CB\u7EC8\u7559\u5728\u8F7B\u94FA\uFF0C\u6211\u4EEC\u770B\u4E0D\u5230\u3002",
    accountLabel: "\u8D26\u53F7",
    accountPlaceholder: "\u90AE\u7BB1\u6216\u624B\u673A\u53F7",
    isdCodeLabel: "\u533A\u53F7",
    sendCode: "\u53D1\u9001\u9A8C\u8BC1\u7801",
    sending: "\u53D1\u9001\u4E2D\u2026",
    codeLabel: "\u9A8C\u8BC1\u7801",
    codePlaceholder: "\u77ED\u4FE1\u6216\u90AE\u4EF6\u91CC\u7684\u9A8C\u8BC1\u7801",
    codeSent: "\u5982\u679C\u8BE5\u8D26\u53F7\u5B58\u5728\uFF0C\u9A8C\u8BC1\u7801\u5DF2\u53D1\u5F80 {target}\u3002",
    changeAccount: "\u6362\u4E00\u4E2A\u8D26\u53F7",
    resend: "\u91CD\u65B0\u53D1\u9001",
    next: "\u4E0B\u4E00\u6B65",
    previewTitle: "\u7ED1\u5B9A\u4F1A\u5E26\u6765\u4EC0\u4E48\u53D8\u5316",
    previewStores: "\u8FD9\u4E9B\u5E97\u94FA\u4F1A\u8F6C\u5230\u5F53\u524D\u8D26\u53F7\u4E0B\uFF1A",
    previewEmpty: "\u8BE5\u8D26\u53F7\u540D\u4E0B\u8FD8\u6CA1\u6709\u5E97\u94FA\u2014\u2014\u7ED1\u5B9A\u4ECD\u7136\u4F1A\u63A5\u4E0A\uFF0C\u4E4B\u540E\u5728\u8FD9\u91CC\u5F00\u7684\u5E97\u90FD\u5F52\u5B83\u3002",
    columnCurrent: "\u5F53\u524D",
    columnNext: "\u7ED1\u5B9A\u540E",
    perpetual: "\u957F\u671F\u6709\u6548",
    downgradeTitle: "\u8FD9\u4E9B\u5E97\u94FA\u5C06\u6539\u7531\u672C\u7AD9\u7684\u5957\u9910\u51B3\u5B9A",
    downgradeBody: "\u5B83\u4EEC\u7684\u7248\u672C\u4E0E\u5230\u671F\u65F6\u95F4\u4F1A\u88AB\u672C\u7AD9\u5957\u9910\u63A5\u7BA1\u3002\u4F60\u6B64\u524D\u76F4\u63A5\u5728\u8F7B\u94FA\u4ED8\u8D39\u4E70\u5230\u7684\u65F6\u957F\u4E0D\u4F1A\u5EF6\u7EED\u3002",
    downgradeAck: "\u6211\u77E5\u9053\u4E86\uFF0C\u7EE7\u7EED\u7ED1\u5B9A",
    confirm: "\u786E\u8BA4\u7ED1\u5B9A",
    linking: "\u7ED1\u5B9A\u4E2D\u2026",
    cancel: "\u53D6\u6D88",
    close: "\u5173\u95ED",
    successTitle: "\u7ED1\u5B9A\u5B8C\u6210",
    licensePending: "\u8D26\u53F7\u5DF2\u7ED1\u5B9A\uFF0C\u5957\u9910\u6B63\u5728\u540C\u6B65\uFF0C\u8BF7\u7A0D\u540E\u5237\u65B0\u3002",
    successStores: "{count} \u5BB6\u5E97\u94FA\u5DF2\u7ECF\u53EF\u4EE5\u5728\u8FD9\u91CC\u7BA1\u7406\u3002",
    successNoStores: "\u8D26\u53F7\u5DF2\u7ED1\u5B9A\uFF0C\u4E4B\u540E\u5728\u8FD9\u91CC\u5F00\u7684\u5E97\u90FD\u5F52\u5B83\u3002",
    done: "\u5B8C\u6210",
    errors: {
      invalid_account: "\u8BF7\u586B\u5199\u8BE5\u8D26\u53F7\u7684\u90AE\u7BB1\u6216\u624B\u673A\u53F7\u3002",
      invalid_input: "\u586B\u5199\u7684\u4FE1\u606F\u4E0D\u6B63\u786E\uFF0C\u8BF7\u68C0\u67E5\u540E\u91CD\u8BD5\u3002",
      invalid_code: "\u9A8C\u8BC1\u7801\u4E0D\u6B63\u786E\u6216\u5DF2\u8FC7\u671F\u3002",
      challenge_expired: "\u672C\u6B21\u9A8C\u8BC1\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u83B7\u53D6\u9A8C\u8BC1\u7801\u3002",
      too_many_attempts: "\u5C1D\u8BD5\u6B21\u6570\u8FC7\u591A\uFF0C\u8BF7\u91CD\u65B0\u83B7\u53D6\u9A8C\u8BC1\u7801\u3002",
      too_many_requests: "\u83B7\u53D6\u9A8C\u8BC1\u7801\u592A\u9891\u7E41\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u3002",
      already_bound: "\u8BE5\u8D26\u53F7\u5DF2\u7ECF\u7ED1\u5B9A\u5230\u8FD9\u91CC\u7684\u53E6\u4E00\u4E2A\u8D26\u53F7\u3002",
      has_stores: "\u5F53\u524D\u8D26\u53F7\u540D\u4E0B\u5DF2\u7ECF\u6709\u5E97\u94FA\uFF0C\u4E0D\u80FD\u518D\u63A5\u7BA1\u53E6\u4E00\u4E2A\u8D26\u53F7\u3002\u9700\u8981\u5408\u5E76\u8BF7\u8054\u7CFB\u5BA2\u670D\u3002",
      acknowledge_required: "\u8BF7\u5148\u786E\u8BA4\u8FD9\u4E9B\u5E97\u94FA\u7684\u5957\u9910\u53D8\u5316\u3002",
      ticket_expired: "\u786E\u8BA4\u5DF2\u8D85\u65F6\uFF0C\u8BF7\u91CD\u65B0\u5F00\u59CB\u3002",
      busy: "\u6709\u64CD\u4F5C\u6B63\u5728\u8FDB\u884C\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002",
      rejected: "\u5E97\u94FA\u670D\u52A1\u62D2\u7EDD\u4E86\u8FD9\u6B21\u8BF7\u6C42\u3002",
      unavailable: "\u5E97\u94FA\u670D\u52A1\u6682\u65F6\u4E0D\u53EF\u7528\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002",
      generic: "\u51FA\u4E86\u70B9\u95EE\u9898\uFF0C\u8BF7\u91CD\u8BD5\u3002"
    }
  },
  "zh-HK": {
    entryTitle: "\u5DF2\u7D93\u5728\u8F15\u92EA\u958B\u904E\u5E97\uFF1F",
    entryDescription: "\u628A\u539F\u4F86\u7684\u5E33\u865F\u7D81\u904E\u4F86\uFF0C\u540D\u4E0B\u5E97\u8216\u5C31\u6703\u51FA\u73FE\u5728\u9019\u88E1\u3002",
    entryAction: "\u7D81\u5B9A\u5DF2\u6709\u5E33\u865F",
    title: "\u7D81\u5B9A\u5DF2\u6709\u5E33\u865F",
    subtitle: "\u6211\u5011\u6703\u8ACB\u8F15\u92EA\u628A\u9A57\u8B49\u78BC\u767C\u5230\u8A72\u5E33\u865F\u767B\u8A18\u7684\u624B\u6A5F\u6216\u96FB\u90F5\u3002\u5BC6\u78BC\u59CB\u7D42\u7559\u5728\u8F15\u92EA\uFF0C\u6211\u5011\u770B\u4E0D\u5230\u3002",
    accountLabel: "\u5E33\u865F",
    accountPlaceholder: "\u96FB\u90F5\u6216\u624B\u6A5F\u865F\u78BC",
    isdCodeLabel: "\u5340\u865F",
    sendCode: "\u767C\u9001\u9A57\u8B49\u78BC",
    sending: "\u767C\u9001\u4E2D\u2026",
    codeLabel: "\u9A57\u8B49\u78BC",
    codePlaceholder: "\u77ED\u8A0A\u6216\u96FB\u90F5\u88E1\u7684\u9A57\u8B49\u78BC",
    codeSent: "\u5982\u679C\u8A72\u5E33\u865F\u5B58\u5728\uFF0C\u9A57\u8B49\u78BC\u5DF2\u767C\u5F80 {target}\u3002",
    changeAccount: "\u63DB\u4E00\u500B\u5E33\u865F",
    resend: "\u91CD\u65B0\u767C\u9001",
    next: "\u4E0B\u4E00\u6B65",
    previewTitle: "\u7D81\u5B9A\u6703\u5E36\u4F86\u4EC0\u9EBC\u8B8A\u5316",
    previewStores: "\u9019\u4E9B\u5E97\u8216\u6703\u8F49\u5230\u76EE\u524D\u5E33\u865F\u4E0B\uFF1A",
    previewEmpty: "\u8A72\u5E33\u865F\u540D\u4E0B\u9084\u6C92\u6709\u5E97\u8216\u2014\u2014\u7D81\u5B9A\u4ECD\u7136\u6703\u63A5\u4E0A\uFF0C\u4E4B\u5F8C\u5728\u9019\u88E1\u958B\u7684\u5E97\u90FD\u6B78\u5B83\u3002",
    columnCurrent: "\u76EE\u524D",
    columnNext: "\u7D81\u5B9A\u5F8C",
    perpetual: "\u9577\u671F\u6709\u6548",
    downgradeTitle: "\u9019\u4E9B\u5E97\u8216\u5C07\u6539\u7531\u672C\u7AD9\u7684\u65B9\u6848\u6C7A\u5B9A",
    downgradeBody: "\u5B83\u5011\u7684\u7248\u672C\u8207\u5230\u671F\u6642\u9593\u6703\u88AB\u672C\u7AD9\u65B9\u6848\u63A5\u7BA1\u3002\u4F60\u6B64\u524D\u76F4\u63A5\u5728\u8F15\u92EA\u4ED8\u8CBB\u8CB7\u5230\u7684\u6642\u9577\u4E0D\u6703\u5EF6\u7E8C\u3002",
    downgradeAck: "\u6211\u660E\u767D\uFF0C\u7E7C\u7E8C\u7D81\u5B9A",
    confirm: "\u78BA\u8A8D\u7D81\u5B9A",
    linking: "\u7D81\u5B9A\u4E2D\u2026",
    cancel: "\u53D6\u6D88",
    close: "\u95DC\u9589",
    successTitle: "\u7D81\u5B9A\u5B8C\u6210",
    licensePending: "\u5E33\u865F\u5DF2\u7D81\u5B9A\uFF0C\u65B9\u6848\u6B63\u5728\u540C\u6B65\uFF0C\u8ACB\u7A0D\u5F8C\u91CD\u65B0\u6574\u7406\u3002",
    successStores: "{count} \u5BB6\u5E97\u8216\u5DF2\u7D93\u53EF\u4EE5\u5728\u9019\u88E1\u7BA1\u7406\u3002",
    successNoStores: "\u5E33\u865F\u5DF2\u7D81\u5B9A\uFF0C\u4E4B\u5F8C\u5728\u9019\u88E1\u958B\u7684\u5E97\u90FD\u6B78\u5B83\u3002",
    done: "\u5B8C\u6210",
    errors: {
      invalid_account: "\u8ACB\u586B\u5BEB\u8A72\u5E33\u865F\u7684\u96FB\u90F5\u6216\u624B\u6A5F\u865F\u78BC\u3002",
      invalid_input: "\u586B\u5BEB\u7684\u8CC7\u6599\u4E0D\u6B63\u78BA\uFF0C\u8ACB\u6AA2\u67E5\u5F8C\u91CD\u8A66\u3002",
      invalid_code: "\u9A57\u8B49\u78BC\u4E0D\u6B63\u78BA\u6216\u5DF2\u904E\u671F\u3002",
      challenge_expired: "\u672C\u6B21\u9A57\u8B49\u5DF2\u904E\u671F\uFF0C\u8ACB\u91CD\u65B0\u53D6\u5F97\u9A57\u8B49\u78BC\u3002",
      too_many_attempts: "\u5617\u8A66\u6B21\u6578\u904E\u591A\uFF0C\u8ACB\u91CD\u65B0\u53D6\u5F97\u9A57\u8B49\u78BC\u3002",
      too_many_requests: "\u53D6\u5F97\u9A57\u8B49\u78BC\u592A\u983B\u7E41\uFF0C\u8ACB\u7A0D\u5F8C\u518D\u8A66\u3002",
      already_bound: "\u8A72\u5E33\u865F\u5DF2\u7D93\u7D81\u5B9A\u5230\u9019\u88E1\u7684\u53E6\u4E00\u500B\u5E33\u865F\u3002",
      has_stores: "\u76EE\u524D\u5E33\u865F\u540D\u4E0B\u5DF2\u7D93\u6709\u5E97\u8216\uFF0C\u4E0D\u80FD\u518D\u63A5\u7BA1\u53E6\u4E00\u500B\u5E33\u865F\u3002\u9700\u8981\u5408\u4F75\u8ACB\u806F\u7D61\u5BA2\u670D\u3002",
      acknowledge_required: "\u8ACB\u5148\u78BA\u8A8D\u9019\u4E9B\u5E97\u8216\u7684\u65B9\u6848\u8B8A\u5316\u3002",
      ticket_expired: "\u78BA\u8A8D\u5DF2\u903E\u6642\uFF0C\u8ACB\u91CD\u65B0\u958B\u59CB\u3002",
      busy: "\u6709\u64CD\u4F5C\u6B63\u5728\u9032\u884C\uFF0C\u8ACB\u7A0D\u5F8C\u91CD\u8A66\u3002",
      rejected: "\u5E97\u8216\u670D\u52D9\u62D2\u7D55\u4E86\u9019\u6B21\u8ACB\u6C42\u3002",
      unavailable: "\u5E97\u8216\u670D\u52D9\u66AB\u6642\u7121\u6CD5\u4F7F\u7528\uFF0C\u8ACB\u7A0D\u5F8C\u91CD\u8A66\u3002",
      generic: "\u51FA\u4E86\u9EDE\u554F\u984C\uFF0C\u8ACB\u91CD\u8A66\u3002"
    }
  },
  ru: {
    entryTitle: "\u0423\u0436\u0435 \u0435\u0441\u0442\u044C \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u0432 Qingpu?",
    entryDescription: "\u041F\u0440\u0438\u0432\u044F\u0436\u0438\u0442\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0439 \u0430\u043A\u043A\u0430\u0443\u043D\u0442 \u2014 \u0435\u0433\u043E \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u044B \u043F\u043E\u044F\u0432\u044F\u0442\u0441\u044F \u0437\u0434\u0435\u0441\u044C.",
    entryAction: "\u041F\u0440\u0438\u0432\u044F\u0437\u0430\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442",
    title: "\u041F\u0440\u0438\u0432\u044F\u0437\u043A\u0430 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0433\u043E \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430",
    subtitle: "\u041C\u044B \u043F\u043E\u043F\u0440\u043E\u0441\u0438\u043C Qingpu \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u0434 \u043D\u0430 \u0442\u0435\u043B\u0435\u0444\u043E\u043D \u0438\u043B\u0438 \u043F\u043E\u0447\u0442\u0443, \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0435 \u0432 \u0442\u043E\u043C \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0435. \u041F\u0430\u0440\u043E\u043B\u044C \u043E\u0441\u0442\u0430\u0451\u0442\u0441\u044F \u0432 Qingpu, \u043C\u044B \u0435\u0433\u043E \u043D\u0435 \u0432\u0438\u0434\u0438\u043C.",
    accountLabel: "\u0410\u043A\u043A\u0430\u0443\u043D\u0442",
    accountPlaceholder: "\u041F\u043E\u0447\u0442\u0430 \u0438\u043B\u0438 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430",
    isdCodeLabel: "\u041A\u043E\u0434 \u0441\u0442\u0440\u0430\u043D\u044B",
    sendCode: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u0434",
    sending: "\u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430\u2026",
    codeLabel: "\u041A\u043E\u0434 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F",
    codePlaceholder: "\u041A\u043E\u0434 \u0438\u0437 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F",
    codeSent: "\u0415\u0441\u043B\u0438 \u0442\u0430\u043A\u043E\u0439 \u0430\u043A\u043A\u0430\u0443\u043D\u0442 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442, \u043A\u043E\u0434 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D \u043D\u0430 {target}.",
    changeAccount: "\u0414\u0440\u0443\u0433\u043E\u0439 \u0430\u043A\u043A\u0430\u0443\u043D\u0442",
    resend: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0435\u0449\u0451 \u0440\u0430\u0437",
    next: "\u0414\u0430\u043B\u0435\u0435",
    previewTitle: "\u0427\u0442\u043E \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u0441\u044F \u043F\u043E\u0441\u043B\u0435 \u043F\u0440\u0438\u0432\u044F\u0437\u043A\u0438",
    previewStores: "\u042D\u0442\u0438 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u044B \u043F\u0435\u0440\u0435\u0439\u0434\u0443\u0442 \u043A \u0442\u0435\u043A\u0443\u0449\u0435\u043C\u0443 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0443:",
    previewEmpty: "\u0423 \u0442\u043E\u0433\u043E \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u043E\u0432 \u2014 \u043F\u0440\u0438\u0432\u044F\u0437\u043A\u0430 \u0432\u0441\u0451 \u0440\u0430\u0432\u043D\u043E \u0432\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u0441\u044F, \u0438 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u044B, \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u0435 \u0437\u0434\u0435\u0441\u044C, \u0431\u0443\u0434\u0443\u0442 \u043F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u0430\u0442\u044C \u0435\u043C\u0443.",
    columnCurrent: "\u0421\u0435\u0439\u0447\u0430\u0441",
    columnNext: "\u041F\u043E\u0441\u043B\u0435 \u043F\u0440\u0438\u0432\u044F\u0437\u043A\u0438",
    perpetual: "\u0411\u0435\u0437 \u0441\u0440\u043E\u043A\u0430",
    downgradeTitle: "\u042D\u0442\u0438 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u044B \u043F\u0435\u0440\u0435\u0439\u0434\u0443\u0442 \u043D\u0430 \u0432\u0430\u0448 \u0442\u0430\u0440\u0438\u0444 \u0437\u0434\u0435\u0441\u044C",
    downgradeBody: "\u0418\u0445 \u0440\u0435\u0434\u0430\u043A\u0446\u0438\u044F \u0438 \u0441\u0440\u043E\u043A \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0431\u0443\u0434\u0443\u0442 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0442\u044C\u0441\u044F \u0432\u0430\u0448\u0438\u043C \u0442\u0430\u0440\u0438\u0444\u043E\u043C \u043D\u0430 \u044D\u0442\u043E\u043C \u0441\u0430\u0439\u0442\u0435. \u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043D\u043E\u0435 \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E \u0432 Qingpu \u0432\u0440\u0435\u043C\u044F \u043D\u0435 \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u0438\u0442\u0441\u044F.",
    downgradeAck: "\u041F\u043E\u043D\u0438\u043C\u0430\u044E, \u0432\u0441\u0451 \u0440\u0430\u0432\u043D\u043E \u043F\u0440\u0438\u0432\u044F\u0437\u0430\u0442\u044C",
    confirm: "\u041F\u0440\u0438\u0432\u044F\u0437\u0430\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442",
    linking: "\u041F\u0440\u0438\u0432\u044F\u0437\u043A\u0430\u2026",
    cancel: "\u041E\u0442\u043C\u0435\u043D\u0430",
    close: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
    successTitle: "\u0410\u043A\u043A\u0430\u0443\u043D\u0442 \u043F\u0440\u0438\u0432\u044F\u0437\u0430\u043D",
    licensePending: "\u0410\u043A\u043A\u0430\u0443\u043D\u0442 \u043F\u0440\u0438\u0432\u044F\u0437\u0430\u043D. \u0422\u0430\u0440\u0438\u0444 \u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0438\u0440\u0443\u0435\u0442\u0441\u044F; \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u043F\u043E\u0437\u0436\u0435.",
    successStores: "\u041C\u0430\u0433\u0430\u0437\u0438\u043D\u043E\u0432 \u043F\u043E\u0434 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435\u043C \u0437\u0434\u0435\u0441\u044C: {count}.",
    successNoStores: "\u0410\u043A\u043A\u0430\u0443\u043D\u0442 \u043F\u0440\u0438\u0432\u044F\u0437\u0430\u043D. \u041C\u0430\u0433\u0430\u0437\u0438\u043D\u044B, \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u0435 \u0437\u0434\u0435\u0441\u044C, \u0431\u0443\u0434\u0443\u0442 \u043F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u0430\u0442\u044C \u0435\u043C\u0443.",
    done: "\u0413\u043E\u0442\u043E\u0432\u043E",
    errors: {
      invalid_account: "\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u043F\u043E\u0447\u0442\u0443 \u0438\u043B\u0438 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 \u0442\u043E\u0433\u043E \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430.",
      invalid_input: "\u041D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u043D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B. \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0438 \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435.",
      invalid_code: "\u041A\u043E\u0434 \u043D\u0435\u0432\u0435\u0440\u0435\u043D \u0438\u043B\u0438 \u0438\u0441\u0442\u0451\u043A.",
      challenge_expired: "\u0417\u0430\u043F\u0440\u043E\u0441 \u0438\u0441\u0442\u0451\u043A. \u041D\u0430\u0447\u043D\u0438\u0442\u0435 \u0437\u0430\u043D\u043E\u0432\u043E, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043D\u043E\u0432\u044B\u0439 \u043A\u043E\u0434.",
      too_many_attempts: "\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u043D\u043E\u0433\u043E \u043F\u043E\u043F\u044B\u0442\u043E\u043A. \u041D\u0430\u0447\u043D\u0438\u0442\u0435 \u0437\u0430\u043D\u043E\u0432\u043E, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043D\u043E\u0432\u044B\u0439 \u043A\u043E\u0434.",
      too_many_requests: "\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u0447\u0430\u0441\u0442\u044B\u0435 \u0437\u0430\u043F\u0440\u043E\u0441\u044B \u043A\u043E\u0434\u0430. \u041F\u043E\u0434\u043E\u0436\u0434\u0438\u0442\u0435 \u0438 \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0441\u043D\u043E\u0432\u0430.",
      already_bound: "\u0422\u043E\u0442 \u0430\u043A\u043A\u0430\u0443\u043D\u0442 \u0443\u0436\u0435 \u043F\u0440\u0438\u0432\u044F\u0437\u0430\u043D \u043A \u0434\u0440\u0443\u0433\u043E\u043C\u0443 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0443 \u0437\u0434\u0435\u0441\u044C.",
      has_stores: "\u0423 \u044D\u0442\u043E\u0433\u043E \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430 \u0443\u0436\u0435 \u0435\u0441\u0442\u044C \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u044B, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u043E\u043D \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u043F\u0440\u0438\u043D\u044F\u0442\u044C \u0434\u0440\u0443\u0433\u043E\u0439 \u0430\u043A\u043A\u0430\u0443\u043D\u0442. \u0414\u043B\u044F \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u044F \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C \u0432 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0443.",
      acknowledge_required: "\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u0442\u0430\u0440\u0438\u0444\u0430 \u044D\u0442\u0438\u0445 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u043E\u0432.",
      ticket_expired: "\u0412\u0440\u0435\u043C\u044F \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F \u0438\u0441\u0442\u0435\u043A\u043B\u043E. \u041D\u0430\u0447\u043D\u0438\u0442\u0435 \u0437\u0430\u043D\u043E\u0432\u043E.",
      busy: "\u0414\u0440\u0443\u0433\u0430\u044F \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044F \u0435\u0449\u0451 \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u0435\u0442\u0441\u044F. \u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u0447\u0443\u0442\u044C \u043F\u043E\u0437\u0436\u0435.",
      rejected: "\u0421\u0435\u0440\u0432\u0438\u0441 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u043E\u0432 \u043E\u0442\u043A\u043B\u043E\u043D\u0438\u043B \u0437\u0430\u043F\u0440\u043E\u0441.",
      unavailable: "\u0421\u0435\u0440\u0432\u0438\u0441 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u043E\u0432 \u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043F\u043E\u0437\u0436\u0435.",
      generic: "\u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."
    }
  }
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ShoplyBindDialog",
  __ssrInlineRender: true,
  props: {
    "open": { type: Boolean, ...{ default: false } },
    "openModifiers": {}
  },
  emits: /* @__PURE__ */ mergeModels(["bound"], ["update:open"]),
  setup(__props, { emit: __emit }) {
    const isOpen = useModel(__props, "open");
    const emit = __emit;
    const { locale } = useI18n();
    const { formatDate } = useFormatTime();
    const copy = computed(() => {
      const code2 = locale.value in shoplyBindLocales ? locale.value : "zh";
      return shoplyBindLocales[code2];
    });
    const step = ref("account");
    const account = ref("");
    const isdCode = ref("86");
    const code = ref("");
    const target = ref("");
    const preview = ref(null);
    const acknowledged = ref(false);
    const boundStores = ref(0);
    const licensePending = ref(false);
    const busy = ref(false);
    const errorReason = ref("");
    const isMobileInput = computed(() => account.value.trim() !== "" && !account.value.includes("@"));
    const errorText = computed(() => errorReason.value ? copy.value.errors[errorReason.value] : "");
    const expiryText = (value) => {
      if (!value) return copy.value.perpetual;
      const year = new Date(value).getUTCFullYear();
      return year >= 2099 ? copy.value.perpetual : formatDate(value);
    };
    const KNOWN_REASONS = new Set(Object.keys(shoplyBindLocales.en.errors));
    const readReason = (error) => {
      var _a, _b, _c, _d, _e, _f;
      const value = error && typeof error === "object" ? error : {};
      const status = Number((_a = value.statusCode) != null ? _a : 0);
      if (status === 502 || status === 503 || status === 504) return "unavailable";
      const reason = String((_f = (_e = (_c = (_b = value.data) == null ? void 0 : _b.data) == null ? void 0 : _c.reason) != null ? _e : (_d = value.data) == null ? void 0 : _d.reason) != null ? _f : "");
      return KNOWN_REASONS.has(reason) ? reason : "generic";
    };
    const reset = () => {
      step.value = "account";
      account.value = "";
      code.value = "";
      target.value = "";
      preview.value = null;
      acknowledged.value = false;
      boundStores.value = 0;
      licensePending.value = false;
      errorReason.value = "";
    };
    const restart = () => {
      step.value = "account";
      code.value = "";
      errorReason.value = "";
    };
    watch(isOpen, (open) => {
      if (open) reset();
    });
    const sendCode = async () => {
      if (busy.value) return;
      busy.value = true;
      errorReason.value = "";
      try {
        const res = await $fetch("/api/shoply/stores/bind/challenge", {
          method: "POST",
          body: { account: account.value.trim(), isdCode: isMobileInput.value ? isdCode.value.trim() : "" }
        });
        target.value = res.data.target;
        step.value = "code";
      } catch (error) {
        errorReason.value = readReason(error);
      } finally {
        busy.value = false;
      }
    };
    const verifyCode = async () => {
      if (busy.value) return;
      busy.value = true;
      errorReason.value = "";
      try {
        const res = await $fetch("/api/shoply/stores/bind/verify", {
          method: "POST",
          body: { code: code.value.trim() }
        });
        preview.value = res.data;
        acknowledged.value = false;
        step.value = "preview";
      } catch (error) {
        errorReason.value = readReason(error);
        if (errorReason.value === "challenge_expired" || errorReason.value === "too_many_attempts") {
          step.value = "account";
        }
      } finally {
        busy.value = false;
      }
    };
    const confirmBind = async () => {
      var _a, _b, _c, _d;
      if (busy.value || !preview.value) return;
      busy.value = true;
      errorReason.value = "";
      try {
        const res = await $fetch("/api/shoply/stores/bind/confirm", {
          method: "POST",
          body: { ticket: preview.value.ticket, acknowledgeDowngrade: acknowledged.value }
        });
        boundStores.value = Number((_b = (_a = res.data) == null ? void 0 : _a.stores) != null ? _b : 0) || 0;
        licensePending.value = Boolean((_d = (_c = res.data) == null ? void 0 : _c.failed) == null ? void 0 : _d.length);
        step.value = "done";
      } catch (error) {
        errorReason.value = readReason(error);
        if (errorReason.value === "ticket_expired") step.value = "account";
      } finally {
        busy.value = false;
      }
    };
    const finish = () => {
      isOpen.value = false;
      emit("bound", boundStores.value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UModal = _sfc_main$C;
      const _component_UIcon = _sfc_main$S;
      const _component_UButton = _sfc_main$N;
      const _component_UFormField = _sfc_main$t;
      const _component_UInput = _sfc_main$s;
      const _component_UAlert = _sfc_main$l;
      const _component_UCheckbox = _sfc_main$i;
      _push(ssrRenderComponent(_component_UModal, mergeProps({
        open: isOpen.value,
        "onUpdate:open": ($event) => isOpen.value = $event,
        ui: { content: "w-[calc(100vw-2rem)] max-w-xl rounded-3xl" }
      }, _attrs), {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f;
          if (_push2) {
            _push2(`<div class="max-h-[85vh] overflow-y-auto p-6 sm:p-7"${_scopeId}>`);
            if (step.value === "done") {
              _push2(`<!--[--><span class="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:link-simple-bold",
                class: "h-7 w-7"
              }, null, _parent2, _scopeId));
              _push2(`</span><h2 class="mt-5 text-xl font-black text-slate-950"${_scopeId}>${ssrInterpolate(copy.value.successTitle)}</h2>`);
              if (licensePending.value) {
                _push2(`<p class="mt-2 text-sm text-amber-700"${_scopeId}>${ssrInterpolate(copy.value.licensePending)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<p class="mt-2 text-sm leading-6 text-slate-500"${_scopeId}>${ssrInterpolate(boundStores.value > 0 ? unref(formatCopy)(copy.value.successStores, { count: boundStores.value }) : copy.value.successNoStores)}</p><div class="mt-6 flex justify-end"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UButton, {
                class: "rounded-full px-5 font-bold",
                onClick: finish
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(copy.value.done)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(copy.value.done), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><!--]-->`);
            } else {
              _push2(`<!--[--><h2 class="text-xl font-black text-slate-950"${_scopeId}>${ssrInterpolate(copy.value.title)}</h2><p class="mt-2 text-sm leading-6 text-slate-500"${_scopeId}>${ssrInterpolate(copy.value.subtitle)}</p>`);
              if (step.value === "account") {
                _push2(`<form class="mt-6 space-y-4"${_scopeId}><div class="flex gap-3"${_scopeId}>`);
                if (isMobileInput.value) {
                  _push2(ssrRenderComponent(_component_UFormField, {
                    label: copy.value.isdCodeLabel,
                    class: "w-28 shrink-0"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(_component_UInput, {
                          modelValue: isdCode.value,
                          "onUpdate:modelValue": ($event) => isdCode.value = $event,
                          class: "w-full",
                          inputmode: "numeric",
                          placeholder: "86",
                          maxlength: "6"
                        }, null, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(_component_UInput, {
                            modelValue: isdCode.value,
                            "onUpdate:modelValue": ($event) => isdCode.value = $event,
                            class: "w-full",
                            inputmode: "numeric",
                            placeholder: "86",
                            maxlength: "6"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(ssrRenderComponent(_component_UFormField, {
                  label: copy.value.accountLabel,
                  class: "min-w-0 flex-1",
                  required: ""
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_UInput, {
                        modelValue: account.value,
                        "onUpdate:modelValue": ($event) => account.value = $event,
                        class: "w-full",
                        placeholder: copy.value.accountPlaceholder,
                        maxlength: "190",
                        autocomplete: "off",
                        autofocus: ""
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_UInput, {
                          modelValue: account.value,
                          "onUpdate:modelValue": ($event) => account.value = $event,
                          class: "w-full",
                          placeholder: copy.value.accountPlaceholder,
                          maxlength: "190",
                          autocomplete: "off",
                          autofocus: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div>`);
                if (errorReason.value) {
                  _push2(ssrRenderComponent(_component_UAlert, {
                    color: "error",
                    variant: "subtle",
                    icon: "ph:warning-circle-bold",
                    description: errorText.value
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<div class="flex justify-end gap-2 pt-2"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UButton, {
                  color: "neutral",
                  variant: "ghost",
                  class: "rounded-full font-bold",
                  onClick: ($event) => isOpen.value = false
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(copy.value.cancel)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(copy.value.cancel), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_UButton, {
                  type: "submit",
                  class: "rounded-full px-5 font-bold",
                  loading: busy.value,
                  disabled: !account.value.trim()
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(busy.value ? copy.value.sending : copy.value.sendCode)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(busy.value ? copy.value.sending : copy.value.sendCode), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div></form>`);
              } else if (step.value === "code") {
                _push2(`<form class="mt-6 space-y-4"${_scopeId}><p class="rounded-2xl bg-blue-50 px-4 py-3 text-sm leading-6 text-blue-900"${_scopeId}>${ssrInterpolate(unref(formatCopy)(copy.value.codeSent, { target: target.value }))}</p>`);
                _push2(ssrRenderComponent(_component_UFormField, {
                  label: copy.value.codeLabel,
                  required: ""
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_UInput, {
                        modelValue: code.value,
                        "onUpdate:modelValue": ($event) => code.value = $event,
                        class: "w-full",
                        inputmode: "numeric",
                        autocomplete: "one-time-code",
                        placeholder: copy.value.codePlaceholder,
                        maxlength: "8",
                        autofocus: ""
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_UInput, {
                          modelValue: code.value,
                          "onUpdate:modelValue": ($event) => code.value = $event,
                          class: "w-full",
                          inputmode: "numeric",
                          autocomplete: "one-time-code",
                          placeholder: copy.value.codePlaceholder,
                          maxlength: "8",
                          autofocus: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                if (errorReason.value) {
                  _push2(ssrRenderComponent(_component_UAlert, {
                    color: "error",
                    variant: "subtle",
                    icon: "ph:warning-circle-bold",
                    description: errorText.value
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<div class="flex flex-wrap items-center justify-between gap-2 pt-2"${_scopeId}><div class="flex gap-2"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UButton, {
                  color: "neutral",
                  variant: "ghost",
                  size: "sm",
                  class: "rounded-full",
                  onClick: restart
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(copy.value.changeAccount)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(copy.value.changeAccount), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_UButton, {
                  color: "neutral",
                  variant: "ghost",
                  size: "sm",
                  class: "rounded-full",
                  loading: busy.value,
                  onClick: sendCode
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(copy.value.resend)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(copy.value.resend), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div>`);
                _push2(ssrRenderComponent(_component_UButton, {
                  type: "submit",
                  class: "rounded-full px-5 font-bold",
                  loading: busy.value,
                  disabled: !/^\d{4,8}$/.test(code.value.trim())
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(copy.value.next)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(copy.value.next), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div></form>`);
              } else {
                _push2(`<div class="mt-6 space-y-4"${_scopeId}><h3 class="text-sm font-black text-slate-900"${_scopeId}>${ssrInterpolate(copy.value.previewTitle)}</h3>`);
                if (!((_a = preview.value) == null ? void 0 : _a.stores.length)) {
                  _push2(`<p class="rounded-2xl bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-600"${_scopeId}>${ssrInterpolate(copy.value.previewEmpty)}</p>`);
                } else {
                  _push2(`<!--[--><p class="text-sm text-slate-600"${_scopeId}>${ssrInterpolate(copy.value.previewStores)}</p><ul class="space-y-2"${_scopeId}><!--[-->`);
                  ssrRenderList(preview.value.stores, (store) => {
                    _push2(`<li class="${ssrRenderClass([store.downgrade ? "border-amber-200 bg-amber-50" : "border-slate-200 bg-white", "rounded-2xl border px-4 py-3"])}"${_scopeId}><p class="truncate text-sm font-bold text-slate-900"${_scopeId}>${ssrInterpolate(store.name)}</p><p class="truncate text-xs text-slate-500"${_scopeId}>${ssrInterpolate(store.domain)}</p><dl class="mt-2 grid grid-cols-2 gap-2 text-xs"${_scopeId}><div${_scopeId}><dt class="text-slate-400"${_scopeId}>${ssrInterpolate(copy.value.columnCurrent)}</dt><dd class="font-semibold text-slate-700"${_scopeId}>${ssrInterpolate(store.currentEdition || "\u2014")} \xB7 ${ssrInterpolate(expiryText(store.currentExpireAt))}</dd></div><div${_scopeId}><dt class="text-slate-400"${_scopeId}>${ssrInterpolate(copy.value.columnNext)}</dt><dd class="${ssrRenderClass([store.downgrade ? "text-amber-700" : "text-slate-700", "font-semibold"])}"${_scopeId}>${ssrInterpolate(store.nextEdition)} \xB7 ${ssrInterpolate(expiryText(store.nextExpireAt))}</dd></div></dl></li>`);
                  });
                  _push2(`<!--]--></ul><!--]-->`);
                }
                if ((_b = preview.value) == null ? void 0 : _b.downgrade) {
                  _push2(`<div class="rounded-2xl border border-amber-200 bg-amber-50 p-4"${_scopeId}><p class="flex items-center gap-2 text-sm font-black text-amber-900"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: "ph:warning-bold",
                    class: "h-4 w-4 shrink-0"
                  }, null, _parent2, _scopeId));
                  _push2(` ${ssrInterpolate(copy.value.downgradeTitle)}</p><p class="mt-1 text-xs leading-6 text-amber-900/80"${_scopeId}>${ssrInterpolate(copy.value.downgradeBody)}</p>`);
                  _push2(ssrRenderComponent(_component_UCheckbox, {
                    modelValue: acknowledged.value,
                    "onUpdate:modelValue": ($event) => acknowledged.value = $event,
                    class: "mt-3",
                    label: copy.value.downgradeAck
                  }, null, _parent2, _scopeId));
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (errorReason.value) {
                  _push2(ssrRenderComponent(_component_UAlert, {
                    color: "error",
                    variant: "subtle",
                    icon: "ph:warning-circle-bold",
                    description: errorText.value
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<div class="flex justify-end gap-2 pt-2"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UButton, {
                  color: "neutral",
                  variant: "ghost",
                  class: "rounded-full font-bold",
                  onClick: ($event) => isOpen.value = false
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(copy.value.cancel)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(copy.value.cancel), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_UButton, {
                  class: "rounded-full px-5 font-bold",
                  loading: busy.value,
                  disabled: ((_c = preview.value) == null ? void 0 : _c.downgrade) && !acknowledged.value,
                  onClick: confirmBind
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(busy.value ? copy.value.linking : copy.value.confirm)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(busy.value ? copy.value.linking : copy.value.confirm), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div></div>`);
              }
              _push2(`<!--]-->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "max-h-[85vh] overflow-y-auto p-6 sm:p-7" }, [
                step.value === "done" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                  createVNode("span", { class: "flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600" }, [
                    createVNode(_component_UIcon, {
                      name: "ph:link-simple-bold",
                      class: "h-7 w-7"
                    })
                  ]),
                  createVNode("h2", { class: "mt-5 text-xl font-black text-slate-950" }, toDisplayString(copy.value.successTitle), 1),
                  licensePending.value ? (openBlock(), createBlock("p", {
                    key: 0,
                    class: "mt-2 text-sm text-amber-700"
                  }, toDisplayString(copy.value.licensePending), 1)) : createCommentVNode("", true),
                  createVNode("p", { class: "mt-2 text-sm leading-6 text-slate-500" }, toDisplayString(boundStores.value > 0 ? unref(formatCopy)(copy.value.successStores, { count: boundStores.value }) : copy.value.successNoStores), 1),
                  createVNode("div", { class: "mt-6 flex justify-end" }, [
                    createVNode(_component_UButton, {
                      class: "rounded-full px-5 font-bold",
                      onClick: finish
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(copy.value.done), 1)
                      ]),
                      _: 1
                    })
                  ])
                ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                  createVNode("h2", { class: "text-xl font-black text-slate-950" }, toDisplayString(copy.value.title), 1),
                  createVNode("p", { class: "mt-2 text-sm leading-6 text-slate-500" }, toDisplayString(copy.value.subtitle), 1),
                  step.value === "account" ? (openBlock(), createBlock("form", {
                    key: 0,
                    class: "mt-6 space-y-4",
                    onSubmit: withModifiers(sendCode, ["prevent"])
                  }, [
                    createVNode("div", { class: "flex gap-3" }, [
                      isMobileInput.value ? (openBlock(), createBlock(_component_UFormField, {
                        key: 0,
                        label: copy.value.isdCodeLabel,
                        class: "w-28 shrink-0"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: isdCode.value,
                            "onUpdate:modelValue": ($event) => isdCode.value = $event,
                            class: "w-full",
                            inputmode: "numeric",
                            placeholder: "86",
                            maxlength: "6"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }, 8, ["label"])) : createCommentVNode("", true),
                      createVNode(_component_UFormField, {
                        label: copy.value.accountLabel,
                        class: "min-w-0 flex-1",
                        required: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: account.value,
                            "onUpdate:modelValue": ($event) => account.value = $event,
                            class: "w-full",
                            placeholder: copy.value.accountPlaceholder,
                            maxlength: "190",
                            autocomplete: "off",
                            autofocus: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                        ]),
                        _: 1
                      }, 8, ["label"])
                    ]),
                    errorReason.value ? (openBlock(), createBlock(_component_UAlert, {
                      key: 0,
                      color: "error",
                      variant: "subtle",
                      icon: "ph:warning-circle-bold",
                      description: errorText.value
                    }, null, 8, ["description"])) : createCommentVNode("", true),
                    createVNode("div", { class: "flex justify-end gap-2 pt-2" }, [
                      createVNode(_component_UButton, {
                        color: "neutral",
                        variant: "ghost",
                        class: "rounded-full font-bold",
                        onClick: ($event) => isOpen.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(copy.value.cancel), 1)
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_UButton, {
                        type: "submit",
                        class: "rounded-full px-5 font-bold",
                        loading: busy.value,
                        disabled: !account.value.trim()
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(busy.value ? copy.value.sending : copy.value.sendCode), 1)
                        ]),
                        _: 1
                      }, 8, ["loading", "disabled"])
                    ])
                  ], 32)) : step.value === "code" ? (openBlock(), createBlock("form", {
                    key: 1,
                    class: "mt-6 space-y-4",
                    onSubmit: withModifiers(verifyCode, ["prevent"])
                  }, [
                    createVNode("p", { class: "rounded-2xl bg-blue-50 px-4 py-3 text-sm leading-6 text-blue-900" }, toDisplayString(unref(formatCopy)(copy.value.codeSent, { target: target.value })), 1),
                    createVNode(_component_UFormField, {
                      label: copy.value.codeLabel,
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UInput, {
                          modelValue: code.value,
                          "onUpdate:modelValue": ($event) => code.value = $event,
                          class: "w-full",
                          inputmode: "numeric",
                          autocomplete: "one-time-code",
                          placeholder: copy.value.codePlaceholder,
                          maxlength: "8",
                          autofocus: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    errorReason.value ? (openBlock(), createBlock(_component_UAlert, {
                      key: 0,
                      color: "error",
                      variant: "subtle",
                      icon: "ph:warning-circle-bold",
                      description: errorText.value
                    }, null, 8, ["description"])) : createCommentVNode("", true),
                    createVNode("div", { class: "flex flex-wrap items-center justify-between gap-2 pt-2" }, [
                      createVNode("div", { class: "flex gap-2" }, [
                        createVNode(_component_UButton, {
                          color: "neutral",
                          variant: "ghost",
                          size: "sm",
                          class: "rounded-full",
                          onClick: restart
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(copy.value.changeAccount), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UButton, {
                          color: "neutral",
                          variant: "ghost",
                          size: "sm",
                          class: "rounded-full",
                          loading: busy.value,
                          onClick: sendCode
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(copy.value.resend), 1)
                          ]),
                          _: 1
                        }, 8, ["loading"])
                      ]),
                      createVNode(_component_UButton, {
                        type: "submit",
                        class: "rounded-full px-5 font-bold",
                        loading: busy.value,
                        disabled: !/^\d{4,8}$/.test(code.value.trim())
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(copy.value.next), 1)
                        ]),
                        _: 1
                      }, 8, ["loading", "disabled"])
                    ])
                  ], 32)) : (openBlock(), createBlock("div", {
                    key: 2,
                    class: "mt-6 space-y-4"
                  }, [
                    createVNode("h3", { class: "text-sm font-black text-slate-900" }, toDisplayString(copy.value.previewTitle), 1),
                    !((_d = preview.value) == null ? void 0 : _d.stores.length) ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "rounded-2xl bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-600"
                    }, toDisplayString(copy.value.previewEmpty), 1)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                      createVNode("p", { class: "text-sm text-slate-600" }, toDisplayString(copy.value.previewStores), 1),
                      createVNode("ul", { class: "space-y-2" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(preview.value.stores, (store) => {
                          return openBlock(), createBlock("li", {
                            key: store.id,
                            class: ["rounded-2xl border px-4 py-3", store.downgrade ? "border-amber-200 bg-amber-50" : "border-slate-200 bg-white"]
                          }, [
                            createVNode("p", { class: "truncate text-sm font-bold text-slate-900" }, toDisplayString(store.name), 1),
                            createVNode("p", { class: "truncate text-xs text-slate-500" }, toDisplayString(store.domain), 1),
                            createVNode("dl", { class: "mt-2 grid grid-cols-2 gap-2 text-xs" }, [
                              createVNode("div", null, [
                                createVNode("dt", { class: "text-slate-400" }, toDisplayString(copy.value.columnCurrent), 1),
                                createVNode("dd", { class: "font-semibold text-slate-700" }, toDisplayString(store.currentEdition || "\u2014") + " \xB7 " + toDisplayString(expiryText(store.currentExpireAt)), 1)
                              ]),
                              createVNode("div", null, [
                                createVNode("dt", { class: "text-slate-400" }, toDisplayString(copy.value.columnNext), 1),
                                createVNode("dd", {
                                  class: ["font-semibold", store.downgrade ? "text-amber-700" : "text-slate-700"]
                                }, toDisplayString(store.nextEdition) + " \xB7 " + toDisplayString(expiryText(store.nextExpireAt)), 3)
                              ])
                            ])
                          ], 2);
                        }), 128))
                      ])
                    ], 64)),
                    ((_e = preview.value) == null ? void 0 : _e.downgrade) ? (openBlock(), createBlock("div", {
                      key: 2,
                      class: "rounded-2xl border border-amber-200 bg-amber-50 p-4"
                    }, [
                      createVNode("p", { class: "flex items-center gap-2 text-sm font-black text-amber-900" }, [
                        createVNode(_component_UIcon, {
                          name: "ph:warning-bold",
                          class: "h-4 w-4 shrink-0"
                        }),
                        createTextVNode(" " + toDisplayString(copy.value.downgradeTitle), 1)
                      ]),
                      createVNode("p", { class: "mt-1 text-xs leading-6 text-amber-900/80" }, toDisplayString(copy.value.downgradeBody), 1),
                      createVNode(_component_UCheckbox, {
                        modelValue: acknowledged.value,
                        "onUpdate:modelValue": ($event) => acknowledged.value = $event,
                        class: "mt-3",
                        label: copy.value.downgradeAck
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                    ])) : createCommentVNode("", true),
                    errorReason.value ? (openBlock(), createBlock(_component_UAlert, {
                      key: 3,
                      color: "error",
                      variant: "subtle",
                      icon: "ph:warning-circle-bold",
                      description: errorText.value
                    }, null, 8, ["description"])) : createCommentVNode("", true),
                    createVNode("div", { class: "flex justify-end gap-2 pt-2" }, [
                      createVNode(_component_UButton, {
                        color: "neutral",
                        variant: "ghost",
                        class: "rounded-full font-bold",
                        onClick: ($event) => isOpen.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(copy.value.cancel), 1)
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_UButton, {
                        class: "rounded-full px-5 font-bold",
                        loading: busy.value,
                        disabled: ((_f = preview.value) == null ? void 0 : _f.downgrade) && !acknowledged.value,
                        onClick: confirmBind
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(busy.value ? copy.value.linking : copy.value.confirm), 1)
                        ]),
                        _: 1
                      }, 8, ["loading", "disabled"])
                    ])
                  ]))
                ], 64))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shoply/components/ShoplyBindDialog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_6 = Object.assign(_sfc_main, { __name: "ShoplyBindDialog" });
const ShoplyBindDialog = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __nuxt_component_6
}, Symbol.toStringTag, { value: "Module" }));

export { ShoplyBindDialog as S, __nuxt_component_6 as _, shoplyBindLocales as s };
//# sourceMappingURL=ShoplyBindDialog-Byb1d-mD.mjs.map
