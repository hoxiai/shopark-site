import { computed } from 'vue';
import { u as useI18n, c as useSettings, N as useExtensions, bp as publishedOptionalThemeSet } from './server.mjs';
import { s as shoparkMarketplaceLocales } from './marketplace-8UtAeo1a.mjs';

const INTERNAL_SLUGS = /* @__PURE__ */ new Set(["test", "demo-test", "diaoyu"]);
const APP_CATEGORIES = /* @__PURE__ */ new Set([
  "payment",
  "localization",
  "data",
  "communication",
  "commerce",
  "identity",
  "utility"
]);
const THEME_CATEGORIES = /* @__PURE__ */ new Set([
  "business",
  "outdoor",
  "electronics",
  "fashion",
  "beauty",
  "home",
  "pets",
  "sports",
  "jewelry",
  "medical",
  "kids"
]);
const APP_CATEGORY_BY_SLUG = {
  stripe: "payment",
  paddle: "payment",
  paypal: "payment",
  receive: "payment",
  coingate: "payment",
  ablpay: "payment",
  adyen: "payment",
  "lianlian-global": "payment",
  lianlian: "payment",
  lianlianglobal: "payment",
  maya: "payment",
  paymaya: "payment",
  "ecpay-payment": "payment",
  ecpay: "payment",
  payermax: "payment",
  "2checkout": "payment",
  verifone: "payment",
  tabby: "payment",
  klarna: "payment",
  afterpay: "payment",
  "checkout-com": "payment",
  checkout: "payment",
  checkoutcom: "payment",
  razorpay: "payment",
  payssion: "payment",
  paystack: "payment",
  airwallex: "payment",
  worldpay: "payment",
  dlocal: "payment",
  xendit: "payment",
  asiabill: "payment",
  oceanpayment: "payment",
  pingpong: "payment",
  pingpongcheckout: "payment",
  antom: "payment",
  alipay: "payment",
  wechatpay: "payment",
  "wechat-pay": "payment",
  mollie: "payment",
  mercadopago: "payment",
  "mercado-pago": "payment",
  braintree: "payment",
  square: "payment",
  cod: "payment",
  "google-translate": "localization",
  googletranslate: "localization",
  deepl: "localization",
  fastdatas: "data",
  "google-analytics": "data",
  ga4: "data",
  gtm: "data",
  "meta-pixel": "data",
  "facebook-pixel": "data",
  "tiktok-pixel": "data",
  mailer: "communication",
  alisms: "communication",
  bird: "communication",
  wechat: "communication",
  whatsapp: "communication",
  apple: "identity",
  "google-login": "identity",
  "google-auth": "identity",
  shopifyimport: "commerce",
  "shopify-import": "commerce",
  weidian: "commerce",
  abcloak: "utility",
  qrcode: "utility"
};
const THEME_CATEGORY_BY_SLUG = {
  fishing: "outdoor",
  wigx: "beauty",
  glowx: "beauty",
  smartx: "electronics",
  makerx: "electronics",
  launchx: "electronics",
  pawx: "pets",
  kiddox: "kids",
  megax: "business",
  packx: "business",
  default: "fashion",
  buyx: "fashion",
  apparelx: "fashion"
};
const APP_ACCENTS = {
  payment: "#2563eb",
  localization: "#0891b2",
  data: "#4f46e5",
  communication: "#059669",
  commerce: "#7c3aed",
  identity: "#0f172a",
  utility: "#475569"
};
const THEME_ACCENTS = {
  business: "#1e293b",
  outdoor: "#0d9488",
  electronics: "#2563eb",
  fashion: "#4f46e5",
  beauty: "#db2777",
  home: "#d97706",
  pets: "#ea580c",
  sports: "#059669",
  jewelry: "#9333ea",
  medical: "#0284c7",
  kids: "#ec4899"
};
const CURATED_THEME_LOCALES = {
  fishing: {
    en: { name: "Outdoor & Tackle Store", summary: "Responsive outdoor storefront built for fishing gear, camping kits and technical equipment catalogs." },
    zh: { name: "\u6237\u5916\u9493\u5177\u5546\u57CE", summary: "\u9762\u5411\u8DEF\u4E9A\u9493\u5177\u3001\u9732\u8425\u88C5\u5907\u4E0E\u6237\u5916\u8FD0\u52A8\u5668\u6750\u7684\u54CD\u5E94\u5F0F\u72EC\u7ACB\u7AD9\u4E3B\u9898" },
    "zh-HK": { name: "\u6236\u5916\u91E3\u5177\u5546\u57CE", summary: "\u9762\u5411\u8DEF\u4E9E\u91E3\u5177\u3001\u9732\u71DF\u88DD\u5099\u8207\u6236\u5916\u904B\u52D5\u5668\u6750\u7684\u97FF\u61C9\u5F0F\u7368\u7ACB\u7AD9\u4E3B\u984C" },
    ru: { name: "\u041C\u0430\u0433\u0430\u0437\u0438\u043D \u0440\u044B\u0431\u0430\u043B\u043A\u0438 \u0438 \u0442\u0443\u0440\u0438\u0437\u043C\u0430", summary: "\u0410\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u0430\u044F \u0432\u0438\u0442\u0440\u0438\u043D\u0430 \u0434\u043B\u044F \u0440\u044B\u0431\u043E\u043B\u043E\u0432\u043D\u044B\u0445 \u0441\u043D\u0430\u0441\u0442\u0435\u0439, \u043A\u0435\u043C\u043F\u0438\u043D\u0433\u0430 \u0438 \u0442\u0443\u0440\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0441\u043D\u0430\u0440\u044F\u0436\u0435\u043D\u0438\u044F." }
  },
  wigx: {
    en: { name: "WigX Hair & Salon Store", summary: "Visual-first beauty storefront tailored for human-hair wigs, extensions and shade selection." },
    zh: { name: "\u65F6\u5C1A\u5047\u53D1\u5546\u57CE", summary: "\u4E13\u4E3A\u771F\u4EBA\u53D1\u5047\u53D1\u3001\u63A5\u53D1\u4E0E\u591A\u8272\u53F7\u9020\u578B\u54C1\u724C\u6253\u9020\u7684\u9AD8\u89C6\u89C9\u8F6C\u5316\u4E3B\u9898" },
    "zh-HK": { name: "\u6642\u5C1A\u5047\u9AEE\u5546\u57CE", summary: "\u5C08\u70BA\u771F\u4EBA\u9AEE\u5047\u9AEE\u3001\u63A5\u9AEE\u8207\u591A\u8272\u865F\u9020\u578B\u54C1\u724C\u6253\u9020\u7684\u9AD8\u8996\u89BA\u8F49\u5316\u4E3B\u984C" },
    ru: { name: "\u0412\u0438\u0442\u0440\u0438\u043D\u0430 \u043F\u0430\u0440\u0438\u043A\u043E\u0432 \u0438 \u0441\u0442\u0430\u0439\u043B\u0438\u043D\u0433\u0430 WigX", summary: "\u0412\u0438\u0437\u0443\u0430\u043B\u044C\u043D\u0430\u044F \u0442\u0435\u043C\u0430 \u0434\u043B\u044F \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u043E\u0432 \u043F\u0430\u0440\u0438\u043A\u043E\u0432, \u043F\u0440\u044F\u0434\u0435\u0439 \u0438 \u043F\u043E\u0434\u0431\u043E\u0440\u0430 \u043E\u0442\u0442\u0435\u043D\u043A\u043E\u0432." }
  },
  smartx: {
    en: { name: "SmartX Hardware Store", summary: "Clean technical layout for smart devices, audio gear and flagship consumer electronics." },
    zh: { name: "\u667A\u80FD\u786C\u4EF6\u5546\u57CE", summary: "\u9002\u5408\u667A\u80FD\u7A7F\u6234\u3001\u97F3\u9891\u6570\u7801\u4E0E\u65D7\u8230\u6D88\u8D39\u7535\u5B50\u54C1\u724C\u7684\u79D1\u6280\u611F\u5546\u57CE\u4E3B\u9898" },
    "zh-HK": { name: "\u667A\u80FD\u786C\u4EF6\u5546\u57CE", summary: "\u9069\u5408\u667A\u80FD\u7A7F\u6234\u3001\u97F3\u983B\u6578\u78BC\u8207\u65D7\u8266\u6D88\u8CBB\u96FB\u5B50\u54C1\u724C\u7684\u79D1\u6280\u611F\u5546\u57CE\u4E3B\u984C" },
    ru: { name: "\u041C\u0430\u0433\u0430\u0437\u0438\u043D \u0443\u043C\u043D\u043E\u0439 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u0438\u043A\u0438 SmartX", summary: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u043D\u0430\u044F \u0432\u0438\u0442\u0440\u0438\u043D\u0430 \u0434\u043B\u044F \u0441\u043C\u0430\u0440\u0442-\u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432, \u0430\u0443\u0434\u0438\u043E\u0442\u0435\u0445\u043D\u0438\u043A\u0438 \u0438 \u0433\u0430\u0434\u0436\u0435\u0442\u043E\u0432." }
  },
  makerx: {
    en: { name: "MakerX 3D & Creator Store", summary: "Structured storefront for 3D printers, CNC tools, filaments and modular accessories." },
    zh: { name: "3D\u6253\u5370\u4E0E\u521B\u5BA2\u5546\u57CE", summary: "\u9762\u5411 3D \u6253\u5370\u673A\u3001\u6FC0\u5149\u96D5\u523B\u673A\u3001\u8017\u6750\u914D\u4EF6\u4E0E\u521B\u5BA2\u786C\u4EF6\u7684\u4E13\u4E1A\u5546\u57CE\u4E3B\u9898" },
    "zh-HK": { name: "3D\u5217\u5370\u8207\u5275\u5BA2\u5546\u57CE", summary: "\u9762\u5411 3D \u5217\u5370\u6A5F\u3001\u96F7\u5C04\u96D5\u523B\u6A5F\u3001\u8017\u6750\u914D\u4EF6\u8207\u5275\u5BA2\u786C\u4EF6\u7684\u5C08\u696D\u5546\u57CE\u4E3B\u984C" },
    ru: { name: "\u041C\u0430\u0433\u0430\u0437\u0438\u043D 3D-\u043F\u0435\u0447\u0430\u0442\u0438 \u0438 \u043C\u0435\u0439\u043A\u0435\u0440\u043E\u0432 MakerX", summary: "\u0421\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0432\u0438\u0442\u0440\u0438\u043D\u0430 \u0434\u043B\u044F 3D-\u043F\u0440\u0438\u043D\u0442\u0435\u0440\u043E\u0432, \u0441\u0442\u0430\u043D\u043A\u043E\u0432, \u043F\u043B\u0430\u0441\u0442\u0438\u043A\u0430 \u0438 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0443\u044E\u0449\u0438\u0445." }
  },
  pawx: {
    en: { name: "PawX Pet Lifestyle Store", summary: "Warm DTC storefront for pet nutrition, smart feeders, collars and daily care essentials." },
    zh: { name: "\u5BA0\u7269\u751F\u6D3B\u5546\u57CE", summary: "\u9762\u5411\u5BA0\u7269\u98DF\u54C1\u3001\u667A\u80FD\u5582\u517B\u8BBE\u5907\u4E0E\u51FA\u884C\u7528\u54C1\u7684\u6E29\u6696\u7CFB\u54C1\u724C\u72EC\u7ACB\u7AD9\u4E3B\u9898" },
    "zh-HK": { name: "\u5BF5\u7269\u751F\u6D3B\u5546\u57CE", summary: "\u9762\u5411\u5BF5\u7269\u98DF\u54C1\u3001\u667A\u80FD\u9935\u990A\u8A2D\u5099\u8207\u51FA\u884C\u7528\u54C1\u7684\u6EAB\u6696\u7CFB\u54C1\u724C\u7368\u7ACB\u7AD9\u4E3B\u984C" },
    ru: { name: "\u0417\u043E\u043E\u043C\u0430\u0433\u0430\u0437\u0438\u043D PawX", summary: "\u0422\u0451\u043F\u043B\u0430\u044F DTC-\u0432\u0438\u0442\u0440\u0438\u043D\u0430 \u0434\u043B\u044F \u043A\u043E\u0440\u043C\u043E\u0432, \u0443\u043C\u043D\u044B\u0445 \u043A\u043E\u0440\u043C\u0443\u0448\u0435\u043A \u0438 \u0430\u043A\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u043E\u0432 \u0434\u043B\u044F \u043F\u0438\u0442\u043E\u043C\u0446\u0435\u0432." }
  },
  kiddox: {
    en: { name: "KiddoX Kids & Toys Store", summary: "Playful, mobile-friendly storefront for STEM toys, nursery gear and children\u2019s apparel." },
    zh: { name: "\u6BCD\u5A74\u7AE5\u73A9\u5546\u57CE", summary: "\u9002\u5408\u76CA\u667A\u73A9\u5177\u3001\u6BCD\u5A74\u63A8\u8F66\u4E0E\u7AE5\u88C5\u54C1\u724C\u7684\u660E\u5FEB\u4EB2\u548C\u578B\u72EC\u7ACB\u7AD9\u4E3B\u9898" },
    "zh-HK": { name: "\u6BCD\u5B30\u7AE5\u73A9\u5546\u57CE", summary: "\u9069\u5408\u76CA\u667A\u73A9\u5177\u3001\u6BCD\u5B30\u63A8\u8ECA\u8207\u7AE5\u88DD\u54C1\u724C\u7684\u660E\u5FEB\u89AA\u548C\u578B\u7368\u7ACB\u7AD9\u4E3B\u984C" },
    ru: { name: "\u0414\u0435\u0442\u0441\u043A\u0438\u0439 \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u0438 \u0438\u0433\u0440\u0443\u0448\u043A\u0438 KiddoX", summary: "\u0423\u0434\u043E\u0431\u043D\u0430\u044F \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u0430\u044F \u0432\u0438\u0442\u0440\u0438\u043D\u0430 \u0434\u043B\u044F \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u044E\u0449\u0438\u0445 \u0438\u0433\u0440\u0443\u0448\u0435\u043A, \u043A\u043E\u043B\u044F\u0441\u043E\u043A \u0438 \u0434\u0435\u0442\u0441\u043A\u043E\u0439 \u043E\u0434\u0435\u0436\u0434\u044B." }
  },
  glowx: {
    en: { name: "GlowX Beauty & Skincare", summary: "Editorial skincare and cosmetics theme highlighting ingredients, routines and shade swatches." },
    zh: { name: "\u6F6E\u6D41\u7F8E\u5986\u5546\u57CE", summary: "\u805A\u7126\u6210\u5206\u53D9\u4E8B\u3001\u62A4\u80A4\u6B65\u9AA4\u4E0E\u8BD5\u8272\u5361\u7247\u7684\u7F8E\u5986\u4E2A\u62A4\u54C1\u724C\u72EC\u7ACB\u7AD9\u4E3B\u9898" },
    "zh-HK": { name: "\u6F6E\u6D41\u7F8E\u599D\u5546\u57CE", summary: "\u805A\u7126\u6210\u5206\u6558\u4E8B\u3001\u8B77\u819A\u6B65\u9A5F\u8207\u8A66\u8272\u5361\u7247\u7684\u7F8E\u599D\u500B\u8B77\u54C1\u724C\u7368\u7ACB\u7AD9\u4E3B\u984C" },
    ru: { name: "\u041C\u0430\u0433\u0430\u0437\u0438\u043D \u043A\u043E\u0441\u043C\u0435\u0442\u0438\u043A\u0438 \u0438 \u0443\u0445\u043E\u0434\u0430 GlowX", summary: "\u0420\u0435\u0434\u0430\u043A\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u0432\u0438\u0442\u0440\u0438\u043D\u0430 \u0434\u043B\u044F \u043A\u043E\u0441\u043C\u0435\u0442\u0438\u043A\u0438 \u0438 \u0443\u0445\u043E\u0434\u0430 \u0441 \u0430\u043A\u0446\u0435\u043D\u0442\u043E\u043C \u043D\u0430 \u0441\u043E\u0441\u0442\u0430\u0432 \u0438 \u043E\u0442\u0442\u0435\u043D\u043A\u0438." }
  },
  launchx: {
    en: { name: "LaunchX Single-Product Flagship", summary: "Story-driven launch storefront for hero products, crowdfunding pre-orders and comparison specs." },
    zh: { name: "\u65B0\u9510\u5355\u54C1\u65D7\u8230\u7AD9", summary: "\u56F4\u7ED5\u6838\u5FC3\u7206\u54C1\u5356\u70B9\u62C6\u89E3\u3001\u53C2\u6570\u5BF9\u6BD4\u4E0E\u9996\u53D1\u8F6C\u5316\u6253\u9020\u7684\u5355\u54C1\u65D7\u8230\u4E3B\u9898" },
    "zh-HK": { name: "\u65B0\u92B3\u55AE\u54C1\u65D7\u8266\u7AD9", summary: "\u570D\u7E5E\u6838\u5FC3\u7206\u54C1\u8CE3\u9EDE\u62C6\u89E3\u3001\u53C3\u6578\u5C0D\u6BD4\u8207\u9996\u767C\u8F49\u5316\u6253\u9020\u7684\u55AE\u54C1\u65D7\u8266\u4E3B\u984C" },
    ru: { name: "\u0424\u043B\u0430\u0433\u043C\u0430\u043D\u0441\u043A\u0430\u044F \u0432\u0438\u0442\u0440\u0438\u043D\u0430 \u043E\u0434\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430 LaunchX", summary: "\u041B\u0435\u043D\u0434\u0438\u043D\u0433-\u0432\u0438\u0442\u0440\u0438\u043D\u0430 \u0434\u043B\u044F \u0437\u0430\u043F\u0443\u0441\u043A\u0430 \u0444\u043B\u0430\u0433\u043C\u0430\u043D\u0441\u043A\u0438\u0445 \u043D\u043E\u0432\u0438\u043D\u043E\u043A \u0438 \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u044F \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A." }
  },
  megax: {
    en: { name: "MegaX Multi-Category Mall", summary: "High-density department layout with multi-level navigation for broad SKU catalogs." },
    zh: { name: "\u5168\u54C1\u7C7B\u8D85\u7EA7\u5546\u57CE", summary: "\u914D\u5907\u591A\u7EA7\u5206\u7C7B\u5BFC\u822A\u4E0E\u9AD8\u5BC6\u5EA6\u5546\u54C1\u9648\u5217\uFF0C\u9002\u5408\u591A SKU \u7EFC\u5408\u767E\u8D27\u4E0E\u6E20\u9053\u5927\u5356" },
    "zh-HK": { name: "\u5168\u54C1\u985E\u8D85\u7D1A\u5546\u57CE", summary: "\u914D\u5099\u591A\u7D1A\u5206\u985E\u5C0E\u822A\u8207\u9AD8\u5BC6\u5EA6\u5546\u54C1\u9673\u5217\uFF0C\u9069\u5408\u591A SKU \u7D9C\u5408\u767E\u8CA8\u8207\u6E20\u9053\u5927\u8CE3" },
    ru: { name: "\u041C\u0443\u043B\u044C\u0442\u0438\u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0439\u043D\u044B\u0439 \u043C\u0430\u0440\u043A\u0435\u0442 MegaX", summary: "\u0412\u0438\u0442\u0440\u0438\u043D\u0430 \u0441 \u043C\u043D\u043E\u0433\u043E\u0443\u0440\u043E\u0432\u043D\u0435\u0432\u043E\u0439 \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0435\u0439 \u0434\u043B\u044F \u0431\u043E\u043B\u044C\u0448\u0438\u0445 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u043E\u0432 \u0441 \u0448\u0438\u0440\u043E\u043A\u0438\u043C \u0430\u0441\u0441\u043E\u0440\u0442\u0438\u043C\u0435\u043D\u0442\u043E\u043C." }
  },
  packx: {
    en: { name: "PackX Custom Packaging B2B", summary: "B2B catalog and inquiry storefront for custom packaging, print runs and industrial supplies." },
    zh: { name: "\u5B9A\u5236\u5305\u88C5 B2B \u5546\u57CE", summary: "\u652F\u6301\u89C4\u683C\u77E9\u9635\u5C55\u793A\u4E0E\u91C7\u8D2D\u8BE2\u76D8\u8868\u5355\uFF0C\u9002\u5408\u5B9A\u5236\u5305\u88C5\u3001\u5370\u5237\u4E0E\u5DE5\u4E1A\u8017\u6750\u51FA\u6D77\u5DE5\u5382" },
    "zh-HK": { name: "\u8A02\u88FD\u5305\u88DD B2B \u5546\u57CE", summary: "\u652F\u63F4\u898F\u683C\u77E9\u9663\u5C55\u793A\u8207\u63A1\u8CFC\u8A62\u76E4\u8868\u55AE\uFF0C\u9069\u5408\u8A02\u88FD\u5305\u88DD\u3001\u5370\u5237\u8207\u5DE5\u696D\u8017\u6750\u51FA\u6D77\u5DE5\u5EE0" },
    ru: { name: "B2B-\u0432\u0438\u0442\u0440\u0438\u043D\u0430 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0438 \u043D\u0430 \u0437\u0430\u043A\u0430\u0437 PackX", summary: "\u041A\u0430\u0442\u0430\u043B\u043E\u0433 \u0438 \u043F\u0440\u0438\u0451\u043C \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u0438\u0445 \u0437\u0430\u043F\u0440\u043E\u0441\u043E\u0432 \u0434\u043B\u044F \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0438 \u0438 \u043F\u043E\u043B\u0438\u0433\u0440\u0430\u0444\u0438\u0438." }
  },
  default: {
    en: { name: "ShopArk Official Default", summary: "Balanced, fast-loading starter storefront adaptable to retail, wholesale and inquiry workflows." },
    zh: { name: "\u5B98\u65B9\u9ED8\u8BA4\u4E3B\u9898", summary: "\u8F7B\u91CF\u5747\u8861\u7684\u5B98\u65B9\u6807\u51C6\u8D77\u70B9\u4E3B\u9898\uFF0C\u539F\u751F\u9002\u914D\u96F6\u552E\u76F4\u8D2D\u3001\u6279\u53D1\u8868\u683C\u4E0E\u5916\u8D38\u8BE2\u76D8\u4E09\u79CD\u6A21\u5F0F" },
    "zh-HK": { name: "\u5B98\u65B9\u9810\u8A2D\u4E3B\u984C", summary: "\u8F15\u91CF\u5747\u8861\u7684\u5B98\u65B9\u6A19\u6E96\u8D77\u9EDE\u4E3B\u984C\uFF0C\u539F\u751F\u9069\u914D\u96F6\u552E\u76F4\u8CFC\u3001\u6279\u767C\u8868\u683C\u8207\u5916\u8CBF\u8A62\u76E4\u4E09\u7A2E\u6A21\u5F0F" },
    ru: { name: "\u041E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u0430\u044F \u0431\u0430\u0437\u043E\u0432\u0430\u044F \u0442\u0435\u043C\u0430 ShopArk", summary: "\u0411\u044B\u0441\u0442\u0440\u0430\u044F \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u0430\u044F \u0432\u0438\u0442\u0440\u0438\u043D\u0430 \u0441 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u043E\u0439 \u0440\u043E\u0437\u043D\u0438\u0446\u044B, \u043E\u043F\u0442\u0430 \u0438 B2B-\u0437\u0430\u043F\u0440\u043E\u0441\u043E\u0432." }
  },
  buyx: {
    en: { name: "BuyX Fast-Moving Retail", summary: "Conversion-focused storefront with quick variant selection, bundle prompts and mobile checkout." },
    zh: { name: "\u9AD8\u8F6C\u5316\u5FEB\u6D88\u5546\u57CE", summary: "\u5F3A\u5316\u79FB\u52A8\u7AEF\u5FEB\u901F\u9009\u89C4\u683C\u4E0E\u52A0\u8D2D\u94FE\u8DEF\uFF0C\u9002\u5408\u65E5\u7528\u767E\u8D27\u3001\u5BB6\u5C45\u5FEB\u6D88\u4E0E\u793E\u5A92\u5F15\u6D41\u5356\u5BB6" },
    "zh-HK": { name: "\u9AD8\u8F49\u5316\u5FEB\u6D88\u5546\u57CE", summary: "\u5F37\u5316\u6D41\u52D5\u7AEF\u5FEB\u901F\u9078\u898F\u683C\u8207\u52A0\u8CFC\u93C8\u8DEF\uFF0C\u9069\u5408\u65E5\u7528\u767E\u8CA8\u3001\u5BB6\u5C45\u5FEB\u6D88\u8207\u793E\u5A92\u5F15\u6D41\u8CE3\u5BB6" },
    ru: { name: "\u0411\u044B\u0441\u0442\u0440\u0430\u044F \u0440\u043E\u0437\u043D\u0438\u0447\u043D\u0430\u044F \u0432\u0438\u0442\u0440\u0438\u043D\u0430 BuyX", summary: "\u0422\u0435\u043C\u0430 \u0441 \u0431\u044B\u0441\u0442\u0440\u044B\u043C \u0432\u044B\u0431\u043E\u0440\u043E\u043C \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432 \u0438 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u0439 \u043A\u043E\u0440\u0437\u0438\u043D\u043E\u0439 \u0434\u043B\u044F \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u043F\u043E\u0432\u0441\u0435\u0434\u043D\u0435\u0432\u043D\u043E\u0433\u043E \u0441\u043F\u0440\u043E\u0441\u0430." }
  },
  apparelx: {
    en: { name: "ApparelX Global Fashion", summary: "Lookbook-ready fashion storefront with size guides, color swatches and seasonal collections." },
    zh: { name: "\u56FD\u9645\u670D\u9970\u5546\u57CE", summary: "\u652F\u6301\u753B\u518C\u5F0F\u7CFB\u5217\u9648\u5217\u3001\u8272\u5361\u5207\u6362\u4E0E\u5C3A\u7801\u6307\u5F15\uFF0C\u9002\u5408\u7537\u5973\u88C5\u3001\u8FD0\u52A8\u670D\u4E0E\u978B\u5305\u54C1\u724C" },
    "zh-HK": { name: "\u570B\u969B\u670D\u98FE\u5546\u57CE", summary: "\u652F\u63F4\u756B\u518A\u5F0F\u7CFB\u5217\u9673\u5217\u3001\u8272\u5361\u5207\u63DB\u8207\u5C3A\u78BC\u6307\u5F15\uFF0C\u9069\u5408\u7537\u5973\u88DD\u3001\u904B\u52D5\u670D\u8207\u978B\u5305\u54C1\u724C" },
    ru: { name: "\u041C\u043E\u0434\u043D\u0430\u044F \u0432\u0438\u0442\u0440\u0438\u043D\u0430 \u043E\u0434\u0435\u0436\u0434\u044B ApparelX", summary: "\u0422\u0435\u043C\u0430 \u0434\u043B\u044F \u0431\u0440\u0435\u043D\u0434\u043E\u0432 \u043E\u0434\u0435\u0436\u0434\u044B \u0438 \u043E\u0431\u0443\u0432\u0438 \u0441 \u043B\u0443\u043A\u0431\u0443\u043A\u0430\u043C\u0438, \u043F\u0430\u043B\u0438\u0442\u0440\u043E\u0439 \u0446\u0432\u0435\u0442\u043E\u0432 \u0438 \u0442\u0430\u0431\u043B\u0438\u0446\u0430\u043C\u0438 \u0440\u0430\u0437\u043C\u0435\u0440\u043E\u0432." }
  }
};
const CURATED_APP_LOCALES = {
  adyen: {
    en: { name: "Adyen", summary: "Enterprise global acquiring supporting international cards and local payment methods in one integration." },
    zh: { name: "Adyen", summary: "\u5168\u7403\u4F01\u4E1A\u7EA7\u76F4\u8FDE\u6536\u5355\u7F51\u5173\uFF0C\u4E00\u7AD9\u5F0F\u63A5\u5165\u56FD\u9645\u4FE1\u7528\u5361\u4E0E\u6B27\u6D32\u3001\u5317\u7F8E\u3001\u4E9A\u592A\u4E3B\u6D41\u672C\u5730\u652F\u4ED8\u65B9\u5F0F" },
    "zh-HK": { name: "Adyen", summary: "\u5168\u7403\u4F01\u696D\u7D1A\u76F4\u9023\u6536\u55AE\u7DB2\u95DC\uFF0C\u4E00\u7AD9\u5F0F\u63A5\u5165\u570B\u969B\u4FE1\u7528\u5361\u8207\u6B50\u7F8E\u4E9E\u592A\u4E3B\u6D41\u672C\u5730\u652F\u4ED8\u65B9\u5F0F" },
    ru: { name: "Adyen", summary: "\u0413\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u044B\u0439 \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u0439 \u044D\u043A\u0432\u0430\u0439\u0440\u0438\u043D\u0433 \u0441 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u043E\u0439 \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u044B\u0445 \u043A\u0430\u0440\u0442 \u0438 \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u044B\u0445 \u043C\u0435\u0442\u043E\u0434\u043E\u0432 \u043E\u043F\u043B\u0430\u0442\u044B." }
  },
  "lianlian-global": {
    en: { name: "LianLian Global", summary: "Cross-border acquiring and multi-currency settlement tailored for global independent storefronts." },
    zh: { name: "LianLian Global \u8FDE\u8FDE\u56FD\u9645", summary: "\u9762\u5411\u8DE8\u5883\u72EC\u7ACB\u7AD9\u7684\u56FD\u9645\u5361\u6536\u5355\u4E0E\u591A\u5E01\u79CD\u672C\u5730\u5316\u6536\u6B3E\u7ED3\u7B97\u901A\u9053" },
    "zh-HK": { name: "LianLian Global \u9023\u9023\u570B\u969B", summary: "\u9762\u5411\u8DE8\u5883\u7368\u7ACB\u7AD9\u7684\u570B\u969B\u5361\u6536\u55AE\u8207\u591A\u5E63\u7A2E\u672C\u5730\u5316\u6536\u6B3E\u7D50\u7B97\u901A\u9053" },
    ru: { name: "LianLian Global", summary: "\u0422\u0440\u0430\u043D\u0441\u0433\u0440\u0430\u043D\u0438\u0447\u043D\u044B\u0439 \u044D\u043A\u0432\u0430\u0439\u0440\u0438\u043D\u0433 \u0438 \u043C\u0443\u043B\u044C\u0442\u0438\u0432\u0430\u043B\u044E\u0442\u043D\u044B\u0435 \u0440\u0430\u0441\u0447\u0451\u0442\u044B \u0434\u043B\u044F \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u044B\u0445 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043C\u0430\u0433\u0430\u0437\u0438\u043D\u043E\u0432." }
  },
  maya: {
    en: { name: "Maya Checkout", summary: "Leading digital wallet, QR Ph and card checkout gateway for customers in the Philippines." },
    zh: { name: "Maya", summary: "\u83F2\u5F8B\u5BBE\u4E3B\u6D41\u6570\u5B57\u94F6\u884C\u4E0E\u7535\u5B50\u94B1\u5305\u6536\u6B3E\u901A\u9053\uFF0C\u652F\u6301\u672C\u5730\u94B1\u5305\u626B\u7801\u4E0E\u94F6\u884C\u5361\u7ED3\u8D26" },
    "zh-HK": { name: "Maya", summary: "\u83F2\u5F8B\u8CD3\u4E3B\u6D41\u6578\u78BC\u9280\u884C\u8207\u96FB\u5B50\u9322\u5305\u6536\u6B3E\u901A\u9053\uFF0C\u652F\u63F4\u672C\u5730\u9322\u5305\u6383\u78BC\u8207\u9280\u884C\u5361\u7D50\u8CEC" },
    ru: { name: "Maya", summary: "\u0412\u0435\u0434\u0443\u0449\u0438\u0439 \u0446\u0438\u0444\u0440\u043E\u0432\u043E\u0439 \u043A\u043E\u0448\u0435\u043B\u0451\u043A \u0438 \u043F\u043B\u0430\u0442\u0451\u0436\u043D\u044B\u0439 \u0448\u043B\u044E\u0437 \u0434\u043B\u044F \u043F\u0440\u0438\u0451\u043C\u0430 \u043A\u0430\u0440\u0442 \u0438 QR-\u043F\u043B\u0430\u0442\u0435\u0436\u0435\u0439 \u043D\u0430 \u0424\u0438\u043B\u0438\u043F\u043F\u0438\u043D\u0430\u0445." }
  },
  "ecpay-payment": {
    en: { name: "ECPay Payment", summary: "Taiwan local payment gateway supporting credit cards, ATM virtual accounts and convenience store codes." },
    zh: { name: "ECPay \u7EFF\u754C\u652F\u4ED8", summary: "\u53F0\u6E7E\u672C\u5730\u4E3B\u6D41\u805A\u5408\u6536\u6B3E\u7F51\u5173\uFF0C\u652F\u6301\u4FE1\u7528\u5361\u3001ATM \u865A\u62DF\u8D26\u53F7\u4E0E\u8D85\u5546\u4EE3\u7801\u7F34\u8D39" },
    "zh-HK": { name: "ECPay \u7DA0\u754C\u652F\u4ED8", summary: "\u53F0\u7063\u672C\u5730\u4E3B\u6D41\u805A\u5408\u6536\u6B3E\u7DB2\u95DC\uFF0C\u652F\u63F4\u4FE1\u7528\u5361\u3001ATM \u865B\u64EC\u8CEC\u865F\u8207\u8D85\u5546\u4EE3\u78BC\u7E73\u8CBB" },
    ru: { name: "ECPay Payment", summary: "\u041B\u043E\u043A\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u043B\u0430\u0442\u0451\u0436\u043D\u044B\u0439 \u0448\u043B\u044E\u0437 \u0422\u0430\u0439\u0432\u0430\u043D\u044F \u0441 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u043E\u0439 \u043A\u0430\u0440\u0442, ATM-\u043F\u0435\u0440\u0435\u0432\u043E\u0434\u043E\u0432 \u0438 \u043E\u043F\u043B\u0430\u0442\u044B \u0432 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430\u0445." }
  },
  payermax: {
    en: { name: "PayerMax", summary: "Emerging-market payment gateway covering Southeast Asia, Middle East and Latin America local wallets." },
    zh: { name: "PayerMax", summary: "\u8986\u76D6\u4E1C\u5357\u4E9A\u3001\u4E2D\u4E1C\u4E0E\u62C9\u7F8E\u65B0\u5174\u5E02\u573A\u7684\u672C\u5730\u7535\u5B50\u94B1\u5305\u3001\u7F51\u94F6\u8F6C\u8D26\u4E0E\u5361\u652F\u4ED8\u7F51\u5173" },
    "zh-HK": { name: "PayerMax", summary: "\u8986\u84CB\u6771\u5357\u4E9E\u3001\u4E2D\u6771\u8207\u62C9\u7F8E\u65B0\u8208\u5E02\u5834\u7684\u672C\u5730\u96FB\u5B50\u9322\u5305\u3001\u7DB2\u9280\u8F49\u8CEC\u8207\u5361\u652F\u4ED8\u7DB2\u95DC" },
    ru: { name: "PayerMax", summary: "\u041F\u043B\u0430\u0442\u0451\u0436\u043D\u044B\u0439 \u0448\u043B\u044E\u0437 \u0434\u043B\u044F \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u044B\u0445 \u043A\u043E\u0448\u0435\u043B\u044C\u043A\u043E\u0432 \u0438 \u043A\u0430\u0440\u0442 \u042E\u0433\u043E-\u0412\u043E\u0441\u0442\u043E\u0447\u043D\u043E\u0439 \u0410\u0437\u0438\u0438, \u0411\u043B\u0438\u0436\u043D\u0435\u0433\u043E \u0412\u043E\u0441\u0442\u043E\u043A\u0430 \u0438 \u041B\u0430\u0442\u0438\u043D\u0441\u043A\u043E\u0439 \u0410\u043C\u0435\u0440\u0438\u043A\u0438." }
  },
  "2checkout": {
    en: { name: "2Checkout (Verifone)", summary: "Global online card processing and localized checkout across international currencies." },
    zh: { name: "2Checkout (Verifone)", summary: "\u652F\u6301\u591A\u56FD\u5E01\u79CD\u4E0E\u672C\u5730\u652F\u4ED8\u65B9\u5F0F\u7684\u5168\u7403\u5728\u7EBF\u4FE1\u7528\u5361\u6536\u6B3E\u901A\u9053" },
    "zh-HK": { name: "2Checkout (Verifone)", summary: "\u652F\u63F4\u591A\u570B\u5E63\u7A2E\u8207\u672C\u5730\u652F\u4ED8\u65B9\u5F0F\u7684\u5168\u7403\u7DDA\u4E0A\u4FE1\u7528\u5361\u6536\u6B3E\u901A\u9053" },
    ru: { name: "2Checkout (Verifone)", summary: "\u041C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u044B\u0439 \u043F\u0440\u0438\u0451\u043C \u0431\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u0438\u0445 \u043A\u0430\u0440\u0442 \u0438 \u043B\u043E\u043A\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0447\u0435\u043A\u0430\u0443\u0442 \u0432 \u0440\u0430\u0437\u043D\u044B\u0445 \u0432\u0430\u043B\u044E\u0442\u0430\u0445." }
  },
  tabby: {
    en: { name: "Tabby", summary: "Buy-now-pay-later installment checkout built for UAE, Saudi Arabia and GCC shoppers." },
    zh: { name: "Tabby", summary: "\u9762\u5411\u963F\u8054\u914B\u3001\u6C99\u7279\u7B49\u4E2D\u4E1C\u6D77\u6E7E\u5E02\u573A\u7684\u5148\u4E70\u540E\u4ED8\uFF08BNPL\uFF09\u5206\u671F\u7ED3\u8D26\u7F51\u5173" },
    "zh-HK": { name: "Tabby", summary: "\u9762\u5411\u963F\u806F\u914B\u3001\u6C99\u7279\u7B49\u4E2D\u6771\u6D77\u7063\u5E02\u5834\u7684\u5148\u8CB7\u5F8C\u4ED8\uFF08BNPL\uFF09\u5206\u671F\u7D50\u8CEC\u7DB2\u95DC" },
    ru: { name: "Tabby", summary: "\u0421\u0435\u0440\u0432\u0438\u0441 \u043E\u043F\u043B\u0430\u0442\u044B \u0447\u0430\u0441\u0442\u044F\u043C\u0438 (BNPL) \u0434\u043B\u044F \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0435\u0439 \u0432 \u041E\u0410\u042D, \u0421\u0430\u0443\u0434\u043E\u0432\u0441\u043A\u043E\u0439 \u0410\u0440\u0430\u0432\u0438\u0438 \u0438 \u0441\u0442\u0440\u0430\u043D\u0430\u0445 \u041F\u0435\u0440\u0441\u0438\u0434\u0441\u043A\u043E\u0433\u043E \u0437\u0430\u043B\u0438\u0432\u0430." }
  },
  "checkout-com": {
    en: { name: "Checkout.com", summary: "High-acceptance global card acquiring and local payment rails for scaling cross-border brands." },
    zh: { name: "Checkout.com", summary: "\u9762\u5411\u51FA\u6D77\u54C1\u724C\u7684\u9AD8\u6388\u6743\u7387\u5168\u7403\u4FE1\u7528\u5361\u6536\u5355\u4E0E\u672C\u5730\u652F\u4ED8\u6E05\u7B97\u7F51\u7EDC" },
    "zh-HK": { name: "Checkout.com", summary: "\u9762\u5411\u51FA\u6D77\u54C1\u724C\u7684\u9AD8\u6388\u6B0A\u7387\u5168\u7403\u4FE1\u7528\u5361\u6536\u55AE\u8207\u672C\u5730\u652F\u4ED8\u6E05\u7B97\u7DB2\u7D61" },
    ru: { name: "Checkout.com", summary: "\u0413\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u044B\u0439 \u043A\u0430\u0440\u0442\u043E\u0447\u043D\u044B\u0439 \u044D\u043A\u0432\u0430\u0439\u0440\u0438\u043D\u0433 \u0441 \u0432\u044B\u0441\u043E\u043A\u043E\u0439 \u043A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u0435\u0439 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u0439 \u0438 \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u044B\u043C\u0438 \u043C\u0435\u0442\u043E\u0434\u0430\u043C\u0438 \u043E\u043F\u043B\u0430\u0442\u044B." }
  },
  razorpay: {
    en: { name: "Razorpay", summary: "India payment gateway supporting UPI, domestic/international cards, netbanking and wallets." },
    zh: { name: "Razorpay", summary: "\u5370\u5EA6\u4E3B\u6D41\u5728\u7EBF\u652F\u4ED8\u7F51\u5173\uFF0C\u5168\u9762\u652F\u6301 UPI\u3001\u4FE1\u7528\u5361/\u501F\u8BB0\u5361\u3001\u7F51\u94F6\u4E0E\u672C\u5730\u7535\u5B50\u94B1\u5305" },
    "zh-HK": { name: "Razorpay", summary: "\u5370\u5EA6\u4E3B\u6D41\u7DDA\u4E0A\u652F\u4ED8\u7DB2\u95DC\uFF0C\u5168\u9762\u652F\u63F4 UPI\u3001\u4FE1\u7528\u5361/\u501F\u8A18\u5361\u3001\u7DB2\u9280\u8207\u672C\u5730\u96FB\u5B50\u9322\u5305" },
    ru: { name: "Razorpay", summary: "\u041F\u043B\u0430\u0442\u0451\u0436\u043D\u044B\u0439 \u0448\u043B\u044E\u0437 \u0434\u043B\u044F \u0440\u044B\u043D\u043A\u0430 \u0418\u043D\u0434\u0438\u0438 \u0441 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u043E\u0439 UPI, \u0431\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u0438\u0445 \u043A\u0430\u0440\u0442, \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u0431\u0430\u043D\u043A\u0438\u043D\u0433\u0430 \u0438 \u043A\u043E\u0448\u0435\u043B\u044C\u043A\u043E\u0432." }
  },
  payssion: {
    en: { name: "Payssion", summary: "Alternative local payment aggregator connecting European, Latin American and Asian local methods." },
    zh: { name: "Payssion", summary: "\u5168\u7403\u672C\u5730\u5316\u66FF\u4EE3\u652F\u4ED8\u805A\u5408\u7F51\u5173\uFF0C\u4E00\u7AD9\u63A5\u5165\u6B27\u6D32\u3001\u62C9\u7F8E\u4E0E\u4E9A\u592A\u5730\u533A\u4E3B\u6D41\u672C\u5730\u652F\u4ED8" },
    "zh-HK": { name: "Payssion", summary: "\u5168\u7403\u672C\u5730\u5316\u66FF\u4EE3\u652F\u4ED8\u805A\u5408\u7DB2\u95DC\uFF0C\u4E00\u7AD9\u63A5\u5165\u6B50\u6D32\u3001\u62C9\u7F8E\u8207\u4E9E\u592A\u5730\u5340\u4E3B\u6D41\u672C\u5730\u652F\u4ED8" },
    ru: { name: "Payssion", summary: "\u0410\u0433\u0440\u0435\u0433\u0430\u0442\u043E\u0440 \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u044B\u0445 \u043C\u0435\u0442\u043E\u0434\u043E\u0432 \u043E\u043F\u043B\u0430\u0442\u044B \u0432 \u0415\u0432\u0440\u043E\u043F\u0435, \u041B\u0430\u0442\u0438\u043D\u0441\u043A\u043E\u0439 \u0410\u043C\u0435\u0440\u0438\u043A\u0435 \u0438 \u0410\u0437\u0438\u0438." }
  },
  paystack: {
    en: { name: "Paystack", summary: "Modern card, bank transfer and mobile money checkout for Nigeria, Ghana, Kenya and South Africa." },
    zh: { name: "Paystack", summary: "\u975E\u6D32\u9886\u5148\u5728\u7EBF\u6536\u6B3E\u7F51\u5173\uFF0C\u652F\u6301\u5C3C\u65E5\u5229\u4E9A\u3001\u52A0\u7EB3\u3001\u80AF\u5C3C\u4E9A\u4E0E\u5357\u975E\u7684\u94F6\u884C\u5361\u53CA\u79FB\u52A8\u8D27\u5E01\u652F\u4ED8" },
    "zh-HK": { name: "Paystack", summary: "\u975E\u6D32\u9818\u5148\u7DDA\u4E0A\u6536\u6B3E\u7DB2\u95DC\uFF0C\u652F\u63F4\u5C3C\u65E5\u5229\u4E9E\u3001\u52A0\u7D0D\u3001\u80AF\u5C3C\u4E9E\u8207\u5357\u975E\u7684\u9280\u884C\u5361\u53CA\u6D41\u52D5\u8CA8\u5E63\u652F\u4ED8" },
    ru: { name: "Paystack", summary: "\u041F\u043B\u0430\u0442\u0451\u0436\u043D\u044B\u0439 \u0448\u043B\u044E\u0437 \u0434\u043B\u044F \u043F\u0440\u0438\u0451\u043C\u0430 \u043A\u0430\u0440\u0442, \u0431\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u0438\u0445 \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u043E\u0432 \u0438 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0445 \u0434\u0435\u043D\u0435\u0433 \u0432 \u0441\u0442\u0440\u0430\u043D\u0430\u0445 \u0410\u0444\u0440\u0438\u043A\u0438." }
  },
  stripe: {
    en: { name: "Stripe", summary: "Direct global card, Apple Pay, Google Pay and local payment checkout with funds settled straight to your Stripe account." },
    zh: { name: "Stripe", summary: "\u5168\u7403\u4E3B\u6D41\u4FE1\u7528\u5361\u3001Apple Pay\u3001Google Pay \u4E0E\u672C\u5730\u652F\u4ED8\u76F4\u8FDE\u901A\u9053\uFF0C\u8D27\u6B3E\u76F4\u63A5\u7ED3\u7B97\u81F3\u5546\u5BB6\u81EA\u6709\u8D26\u6237" },
    "zh-HK": { name: "Stripe", summary: "\u5168\u7403\u4E3B\u6D41\u4FE1\u7528\u5361\u3001Apple Pay\u3001Google Pay \u8207\u672C\u5730\u652F\u4ED8\u76F4\u9023\u901A\u9053\uFF0C\u8CA8\u6B3E\u76F4\u63A5\u7D50\u7B97\u81F3\u5546\u5BB6\u81EA\u6709\u8CEC\u6236" },
    ru: { name: "Stripe", summary: "\u041F\u0440\u044F\u043C\u043E\u0439 \u043F\u0440\u0438\u0451\u043C \u043A\u0430\u0440\u0442, Apple Pay, Google Pay \u0438 \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u044B\u0445 \u043F\u043B\u0430\u0442\u0435\u0436\u0435\u0439 \u0441 \u0437\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0435\u043C \u043D\u0430 \u0432\u0430\u0448 \u0430\u043A\u043A\u0430\u0443\u043D\u0442 Stripe." }
  },
  paypal: {
    en: { name: "PayPal", summary: "Connect PayPal Express and card checkout for trusted international buyer protection and multi-currency payment." },
    zh: { name: "PayPal", summary: "\u63A5\u5165 PayPal \u5FEB\u6377\u7ED3\u8D26\u4E0E\u56FD\u9645\u4E70\u5BB6\u719F\u6089\u7684\u94B1\u5305\u6536\u6B3E\u80FD\u529B\uFF0C\u652F\u6301\u591A\u5E01\u79CD\u76F4\u8FDE\u7ED3\u7B97" },
    "zh-HK": { name: "PayPal", summary: "\u63A5\u5165 PayPal \u5FEB\u6377\u7D50\u8CEC\u8207\u570B\u969B\u8CB7\u5BB6\u719F\u6089\u7684\u9322\u5305\u6536\u6B3E\u80FD\u529B\uFF0C\u652F\u63F4\u591A\u5E63\u7A2E\u76F4\u9023\u7D50\u7B97" },
    ru: { name: "PayPal", summary: "\u042D\u043A\u0441\u043F\u0440\u0435\u0441\u0441-\u043E\u043F\u043B\u0430\u0442\u0430 \u0447\u0435\u0440\u0435\u0437 \u043A\u043E\u0448\u0435\u043B\u0451\u043A PayPal \u0438 \u043A\u0430\u0440\u0442\u044B \u0441 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u043E\u0439 \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u044B\u0445 \u0432\u0430\u043B\u044E\u0442." }
  },
  paddle: {
    en: { name: "Paddle", summary: "Global payment collection and subscription billing with built-in multi-currency tax handling." },
    zh: { name: "Paddle", summary: "\u9762\u5411\u6570\u5B57\u5546\u54C1\u4E0E\u5168\u7403\u8BA2\u9605\u4E1A\u52A1\u7684\u6536\u6B3E\u4E0E\u7A0E\u52A1\u5408\u89C4\u7ED3\u7B97\u7F51\u5173" },
    "zh-HK": { name: "Paddle", summary: "\u9762\u5411\u6578\u78BC\u5546\u54C1\u8207\u5168\u7403\u8A02\u95B1\u696D\u52D9\u7684\u6536\u6B3E\u8207\u7A05\u52D9\u5408\u898F\u7D50\u7B97\u7DB2\u95DC" },
    ru: { name: "Paddle", summary: "\u0413\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u0440\u0438\u0451\u043C \u043F\u043B\u0430\u0442\u0435\u0436\u0435\u0439 \u0438 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0430\u043C\u0438 \u0441 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u043E\u0439 \u043C\u0443\u043B\u044C\u0442\u0438\u0432\u0430\u043B\u044E\u0442\u043D\u043E\u0441\u0442\u0438." }
  },
  coingate: {
    en: { name: "CoinGate", summary: "Accept Bitcoin, USDT and major digital assets at checkout with optional fiat settlement." },
    zh: { name: "CoinGate", summary: "\u652F\u6301 BTC\u3001USDT \u7B49\u4E3B\u6D41\u6570\u5B57\u8D44\u4EA7\u5728\u7EBF\u7ED3\u8D26\u4E0E\u6CD5\u5E01\u7ED3\u7B97\u7684\u6570\u5B57\u652F\u4ED8\u7F51\u5173" },
    "zh-HK": { name: "CoinGate", summary: "\u652F\u63F4 BTC\u3001USDT \u7B49\u4E3B\u6D41\u6578\u78BC\u8CC7\u7522\u7DDA\u4E0A\u7D50\u8CEC\u8207\u6CD5\u5E63\u7D50\u7B97\u7684\u6578\u78BC\u652F\u4ED8\u7DB2\u95DC" },
    ru: { name: "CoinGate", summary: "\u041F\u0440\u0438\u0451\u043C \u043A\u0440\u0438\u043F\u0442\u043E\u0432\u0430\u043B\u044E\u0442\u043D\u044B\u0445 \u043F\u043B\u0430\u0442\u0435\u0436\u0435\u0439 (BTC, USDT \u0438 \u0434\u0440.) \u043D\u0430 \u044D\u0442\u0430\u043F\u0435 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u044F \u0437\u0430\u043A\u0430\u0437\u0430." }
  }
};
const hasCjkText = (value) => /[\u3400-\u9fff]/.test(String(value || ""));
const isCompetitorAssetUrl = (url) => {
  if (!url) return false;
  return /ueeshop\.com/i.test(url) || url.includes("/uploads/themes/apparelx/preview.png");
};
const sanitizeMarketplaceImageUrl = (url) => {
  const trimmed = String(url || "").trim();
  if (!trimmed || isCompetitorAssetUrl(trimmed)) return null;
  return trimmed;
};
const isPublicMarketplaceItem = (item) => {
  if (!item) return false;
  const slug = String(item.slug || "").trim().toLowerCase();
  const uniqueName = String(item.uniqueName || "").trim().toLowerCase();
  if (!slug && !uniqueName) return false;
  return !INTERNAL_SLUGS.has(slug) && !INTERNAL_SLUGS.has(uniqueName);
};
const humanizeCatalogSlug = (slug) => {
  const cleaned = String(slug || "").trim().replace(/[_-]+/g, " ").trim();
  if (!cleaned) return "Extension";
  return cleaned.replace(/\b[a-z]/g, (ch) => ch.toUpperCase());
};
const resolveMarketplaceMark = (name, slug) => {
  const asciiFromName = String(name || "").replace(/[^A-Za-z0-9]/g, "").slice(0, 2).toUpperCase();
  if (asciiFromName.length === 2) return asciiFromName;
  const asciiFromSlug = String(slug || "").replace(/[^A-Za-z0-9]/g, "").slice(0, 2).toUpperCase();
  if (asciiFromSlug) return asciiFromSlug.padEnd(2, "X");
  return (asciiFromName || "SA").padEnd(2, "X");
};
const resolveAppAccent = (category) => APP_ACCENTS[category] || APP_ACCENTS.utility;
const resolveThemeAccent = (category) => THEME_ACCENTS[category] || THEME_ACCENTS.fashion;
const resolveShoparkAppCategory = (input) => {
  var _a;
  const explicit = String(input.category || ((_a = input.settings) == null ? void 0 : _a.category) || "").trim().toLowerCase();
  if (explicit && explicit !== "utility" && APP_CATEGORIES.has(explicit)) {
    return explicit;
  }
  const slug = String(input.slug || "").trim().toLowerCase();
  const uniqueName = String(input.uniqueName || "").trim().toLowerCase();
  const compactSlug = slug.replace(/[^a-z0-9]/g, "");
  const compactUnique = uniqueName.replace(/[^a-z0-9]/g, "");
  for (const key of [slug, uniqueName, compactSlug, compactUnique]) {
    if (key && APP_CATEGORY_BY_SLUG[key]) return APP_CATEGORY_BY_SLUG[key];
  }
  const probe = `${slug} ${uniqueName} ${String(input.name || "")}`.toLowerCase();
  if (/\b(pay|payment|checkout|acquir|wallet|klarna|tabby|adyen|stripe|paypal|ecpay|razorpay|paystack|payssion|payermax|lianlian)\b|支付|收款|收单/.test(probe)) {
    return "payment";
  }
  if (/\b(translat|locale|i18n|currenc|multilang)\b|翻译|多语言|汇率/.test(probe)) {
    return "localization";
  }
  if (/\b(mail|smtp|sms|whatsapp|telegram|chat|messag|notify)\b|邮件|短信|客服|通知/.test(probe)) {
    return "communication";
  }
  if (/\b(oauth|sso|passkey|auth|login)\b|登录|认证/.test(probe)) {
    return "identity";
  }
  if (/\b(pixel|analytic|ga4|gtm|metric|report|webhook)\b|数据|统计|像素/.test(probe)) {
    return "data";
  }
  if (/\b(import|migrat|shopify|affiliate|review|upsell|bundle|seo)\b|搬家|迁移|分销|评论/.test(probe)) {
    return "commerce";
  }
  return APP_CATEGORIES.has(explicit) ? explicit : "utility";
};
const resolveShoparkThemeCategory = (input) => {
  const slug = String(input.slug || "").trim().toLowerCase();
  const uniqueName = String(input.uniqueName || "").trim().toLowerCase();
  const explicit = String(input.category || "").trim().toLowerCase();
  if (explicit && explicit !== "fashion" && THEME_CATEGORIES.has(explicit)) {
    return explicit;
  }
  if (THEME_CATEGORY_BY_SLUG[slug]) return THEME_CATEGORY_BY_SLUG[slug];
  if (THEME_CATEGORY_BY_SLUG[uniqueName]) return THEME_CATEGORY_BY_SLUG[uniqueName];
  return THEME_CATEGORIES.has(explicit) ? explicit : "fashion";
};
const detectLocaleFromCopy = (copy, explicitLocale) => {
  if (explicitLocale) return explicitLocale;
  if (copy.nav.apps === "Apps") return "en";
  if (copy.nav.apps === "\u041C\u0430\u0433\u0430\u0437\u0438\u043D \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439") return "ru";
  if (copy.nav.apps === "\u61C9\u7528\u5E02\u5834") return "zh-HK";
  return "zh";
};
const extractSettingsLocaleEntry = (settings, locale) => {
  if (!settings || typeof settings !== "object") return null;
  const localesObj = settings.locales || settings.i18n;
  if (!localesObj || typeof localesObj !== "object") return null;
  const hit = localesObj[locale] || (locale === "zh-HK" ? localesObj.zh : void 0);
  if (!hit || typeof hit !== "object") return null;
  return {
    name: typeof hit.name === "string" && hit.name.trim() ? hit.name.trim() : void 0,
    summary: typeof hit.summary === "string" && hit.summary.trim() ? hit.summary.trim() : typeof hit.subtitle === "string" && hit.subtitle.trim() ? hit.subtitle.trim() : void 0,
    description: typeof hit.description === "string" && hit.description.trim() ? hit.description.trim() : typeof hit.content === "string" && hit.content.trim() ? hit.content.trim() : void 0
  };
};
const isTextCompatibleWithLocale = (text, locale) => {
  const trimmed = text.trim();
  if (!trimmed) return false;
  const cjk = hasCjkText(trimmed);
  if (locale === "en" || locale === "ru") {
    return !cjk;
  }
  if (!cjk && /[A-Za-z]+\s+[A-Za-z]+\s+[A-Za-z]+/.test(trimmed)) {
    return false;
  }
  return true;
};
const resolveLocalizedCatalogCopy = (options) => {
  var _a, _b;
  const key = options.slug.trim().toLowerCase();
  const altKey = String(options.uniqueName || "").trim().toLowerCase();
  const dict = options.kind === "theme" ? CURATED_THEME_LOCALES : CURATED_APP_LOCALES;
  const curated = ((_a = dict[key]) == null ? void 0 : _a[options.locale]) || (altKey ? (_b = dict[altKey]) == null ? void 0 : _b[options.locale] : void 0);
  const settingsLocale = extractSettingsLocaleEntry(options.settings, options.locale);
  const rawName = options.rawName.trim();
  let name = (settingsLocale == null ? void 0 : settingsLocale.name) || (curated == null ? void 0 : curated.name) || rawName || humanizeCatalogSlug(options.slug);
  if ((options.locale === "en" || options.locale === "ru") && hasCjkText(name)) {
    name = (curated == null ? void 0 : curated.name) || humanizeCatalogSlug(options.slug);
  }
  const rawSub = options.rawSubtitle.trim();
  const nonDuplicateSub = rawSub && rawSub.toLowerCase() !== rawName.toLowerCase() && rawSub.toLowerCase() !== name.toLowerCase() ? rawSub : "";
  let summary = (settingsLocale == null ? void 0 : settingsLocale.summary) || "";
  if (!summary) {
    if (nonDuplicateSub && isTextCompatibleWithLocale(nonDuplicateSub, options.locale)) {
      summary = nonDuplicateSub;
    } else if (curated == null ? void 0 : curated.summary) {
      summary = curated.summary;
    } else {
      summary = options.fallbackSummary;
    }
  }
  const plainContent = options.rawContent.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  const nonDuplicateContent = plainContent && plainContent.toLowerCase() !== name.toLowerCase() ? plainContent : "";
  const contentCompatible = nonDuplicateContent && isTextCompatibleWithLocale(nonDuplicateContent, options.locale);
  const bodyParagraph = (settingsLocale == null ? void 0 : settingsLocale.description) || (contentCompatible ? nonDuplicateContent : "") || (curated == null ? void 0 : curated.description) || summary;
  const contentHtml = options.rawContent && contentCompatible ? options.rawContent : null;
  return {
    name,
    summary,
    bodyParagraph,
    contentHtml
  };
};
const useMarketplaceCopy = () => {
  const { locale } = useI18n();
  const localeCode = computed(() => locale.value in shoparkMarketplaceLocales ? locale.value : "zh");
  const copy = computed(() => shoparkMarketplaceLocales[localeCode.value]);
  return { locale, localeCode, copy };
};
const useMarketplacePackageState = () => {
  const { getSetting } = useSettings();
  const { installedExtensions, enabledExtensions } = useExtensions();
  const installedExtensionIds = computed(() => new Set(installedExtensions.value.map((extension) => extension.id)));
  const enabledExtensionIds = computed(() => new Set(enabledExtensions.value.map((extension) => extension.id)));
  const packageState = (packageKind, artifactId, hasPackage = false) => {
    if (!artifactId) return { packageStatus: "not_built", managementPath: null };
    if (packageKind === "extension") {
      if (installedExtensionIds.value.has(artifactId)) {
        return {
          packageStatus: enabledExtensionIds.value.has(artifactId) ? "enabled" : "ready",
          managementPath: "/admin/settings/extensions"
        };
      }
      if (hasPackage) {
        return {
          packageStatus: "ready",
          managementPath: "/admin/plugins/apps/catalog"
        };
      }
      return { packageStatus: "not_built", managementPath: null };
    }
    if (publishedOptionalThemeSet.has(artifactId)) {
      return {
        packageStatus: getSetting("active_theme") === artifactId ? "active" : "ready",
        managementPath: "/admin/settings/themes"
      };
    }
    if (hasPackage) {
      return {
        packageStatus: "ready",
        managementPath: "/admin/plugins/themes/catalog"
      };
    }
    return { packageStatus: "not_built", managementPath: null };
  };
  return { packageState };
};
const formatMarketplaceDate = (value) => {
  if (!value) return void 0;
  const trimmed = String(value).trim();
  if (!trimmed) return void 0;
  if (/^\d{4}-\d{2}-\d{2}/.test(trimmed)) {
    return trimmed.slice(0, 10);
  }
  const date = new Date(trimmed);
  if (!Number.isNaN(date.getTime())) {
    return date.toISOString().slice(0, 10);
  }
  return trimmed;
};
const sanitizeMarketplaceCopy = (text) => {
  if (!text) return "";
  return text.replace(/阶梯批量批发/g, "\u6279\u91CF\u91C7\u8D2D").replace(/阶梯批发/g, "\u6574\u6279\u91C7\u8D2D").replace(/低起订量（Low MOQ）/g, "\u5C0F\u6279\u91CF\u5FEB\u53CD").replace(/起订量/g, "\u8D77\u6279\u6570").replace(/自由拖拽/g, "\u53EF\u89C6\u5316\u533A\u5757");
};
const toMarketplaceAppEntry = (item, copy, packageStateFn, localeCode) => {
  var _a, _b, _c;
  const resolvedLocale = detectLocaleFromCopy(copy, localeCode);
  const category = resolveShoparkAppCategory(item);
  const hasPackage = Boolean(item.packageUrl && item.packageUrl.trim());
  const state = packageStateFn("extension", item.uniqueName, hasPackage);
  const categoryCopy = copy.appCategories[category];
  const rawSubtitle = sanitizeMarketplaceCopy(item.subtitle);
  const rawContent = sanitizeMarketplaceCopy(item.content);
  const fallbackSummary = categoryCopy ? categoryCopy[1] : copy.detail.appGeneric;
  const localized = resolveLocalizedCatalogCopy({
    kind: "app",
    slug: item.slug,
    uniqueName: item.uniqueName,
    rawName: item.name || "",
    rawSubtitle,
    rawContent,
    settings: item.settings,
    locale: resolvedLocale,
    fallbackSummary
  });
  let sections = [
    {
      title: copy.detail.appTitle,
      paragraphs: [localized.bodyParagraph]
    }
  ];
  if (item.slug === "paddle") {
    sections = copy.detail.paddle.map((section) => ({ title: section.title, paragraphs: [...section.paragraphs] }));
  }
  const latestReleaseDate = formatMarketplaceDate((_b = (_a = item.releases) == null ? void 0 : _a[0]) == null ? void 0 : _b.createdAt);
  const itemUpdateDate = formatMarketplaceDate(item.updatedAt);
  const itemCreateDate = formatMarketplaceDate(item.createdAt);
  const updatedAt = latestReleaseDate || itemUpdateDate || itemCreateDate;
  const publishedAt = itemCreateDate || latestReleaseDate || updatedAt;
  const imageUrl = sanitizeMarketplaceImageUrl(item.imageUrl || item.thumbnail);
  return {
    kind: "app",
    packageKind: "extension",
    slug: item.slug,
    name: localized.name,
    category,
    artifactId: item.uniqueName,
    runtimeKind: item.types === "theme" ? "ui" : "payment",
    mark: resolveMarketplaceMark(localized.name, item.slug),
    accent: resolveAppAccent(category),
    publishedAt,
    updatedAt,
    downloads: item.downs || 0,
    version: item.version,
    summary: localized.summary,
    contentTitle: copy.detail.appTitle,
    sections,
    contentHtml: localized.contentHtml,
    price: (_c = item.salesPrice) != null ? _c : item.priceAmount ? item.priceAmount / 100 : 0,
    productSlug: null,
    imageUrl,
    packageStatus: state.packageStatus,
    managementPath: null,
    packageUrl: item.packageUrl || null,
    releases: item.releases && item.releases.length > 0 ? item.releases.map((r) => ({
      version: r.version,
      notes: r.notes || "",
      createdAt: formatMarketplaceDate(r.createdAt)
    })) : item.version ? [{
      version: item.version,
      notes: "",
      createdAt: updatedAt || publishedAt
    }] : []
  };
};
const toMarketplaceThemeEntry = (item, copy, packageStateFn, localeCode) => {
  var _a, _b, _c;
  const resolvedLocale = detectLocaleFromCopy(copy, localeCode);
  const category = resolveShoparkThemeCategory(item);
  const hasPackage = Boolean(item.packageUrl && item.packageUrl.trim());
  const state = packageStateFn("theme", item.uniqueName, hasPackage);
  const rawSubtitle = sanitizeMarketplaceCopy(item.subtitle);
  const rawContent = sanitizeMarketplaceCopy(item.content);
  const localized = resolveLocalizedCatalogCopy({
    kind: "theme",
    slug: item.slug,
    uniqueName: item.uniqueName,
    rawName: item.name || "",
    rawSubtitle,
    rawContent,
    settings: item.settings,
    locale: resolvedLocale,
    fallbackSummary: copy.detail.themeGeneric
  });
  const sections = [
    {
      title: copy.detail.themeTitle,
      paragraphs: [localized.bodyParagraph]
    }
  ];
  const imageUrl = sanitizeMarketplaceImageUrl(item.imageUrl || item.thumbnail);
  const validDemoUrl = item.demoUrl && !item.demoUrl.includes(".myshopark.com") ? item.demoUrl : void 0;
  const latestReleaseDate = formatMarketplaceDate((_b = (_a = item.releases) == null ? void 0 : _a[0]) == null ? void 0 : _b.createdAt);
  const itemUpdateDate = formatMarketplaceDate(item.updatedAt);
  const itemCreateDate = formatMarketplaceDate(item.createdAt);
  const updatedAt = latestReleaseDate || itemUpdateDate || itemCreateDate;
  const publishedAt = itemCreateDate || latestReleaseDate || updatedAt;
  return {
    kind: "theme",
    packageKind: "theme",
    slug: item.slug,
    name: localized.name,
    category,
    artifactId: item.uniqueName,
    mark: resolveMarketplaceMark(localized.name, item.slug),
    accent: resolveThemeAccent(category),
    publishedAt,
    updatedAt,
    downloads: item.downs || 0,
    version: item.version,
    demoUrl: validDemoUrl,
    summary: localized.summary,
    contentTitle: copy.detail.themeTitle,
    sections,
    contentHtml: localized.contentHtml,
    price: (_c = item.salesPrice) != null ? _c : item.priceAmount ? item.priceAmount / 100 : 0,
    productSlug: null,
    imageUrl,
    packageStatus: state.packageStatus,
    managementPath: null,
    packageUrl: item.packageUrl || null,
    releases: item.releases && item.releases.length > 0 ? item.releases.map((r) => ({
      version: r.version,
      notes: r.notes || "",
      createdAt: formatMarketplaceDate(r.createdAt)
    })) : item.version ? [{
      version: item.version,
      notes: "",
      createdAt: updatedAt || publishedAt
    }] : []
  };
};

export { useMarketplacePackageState as a, toMarketplaceThemeEntry as b, isPublicMarketplaceItem as i, toMarketplaceAppEntry as t, useMarketplaceCopy as u };
//# sourceMappingURL=marketplace-BUNE0-pp.mjs.map
