import { computed } from 'vue';
import { u as useI18n } from './server.mjs';

const SHOPARK_PLAN_KEYS = ["free", "showcase", "starter", "professional", "premium", "enterprise"];
const SHOPARK_PLAN_CATALOG = {
  free: { rank: 0, products: 0, pages: 0, domains: 0, staff: 0, storageBytes: 0, aiMonthly: 0 },
  showcase: { rank: 1, products: 20, pages: 5, domains: 1, staff: 0, storageBytes: 2e8, aiMonthly: 0 },
  starter: { rank: 2, products: 500, pages: null, domains: 1, staff: 2, storageBytes: 5e9, aiMonthly: 100 },
  professional: { rank: 3, products: 5e3, pages: null, domains: 3, staff: 5, storageBytes: 2e10, aiMonthly: 300 },
  premium: { rank: 4, products: 2e4, pages: null, domains: 10, staff: 15, storageBytes: 1e11, aiMonthly: 1e3 },
  // Contract overrides are not yet supported by Shopark; the current baseline is Premium.
  enterprise: { rank: 5, products: 2e4, pages: null, domains: 10, staff: 15, storageBytes: 1e11, aiMonthly: 1e3 }
};
const SHOPARK_PRICE_OPTIONS = [
  { planKey: "showcase", interval: "year", price: 399, planCode: "showcase-yearly" },
  { planKey: "starter", interval: "month", price: 199, planCode: "starter-monthly" },
  { planKey: "starter", interval: "year", price: 1999, planCode: "starter-yearly" },
  { planKey: "professional", interval: "month", price: 299, planCode: "professional-monthly" },
  { planKey: "professional", interval: "year", price: 2999, planCode: "professional-yearly" },
  { planKey: "premium", interval: "month", price: 599, planCode: "premium-monthly" },
  { planKey: "premium", interval: "year", price: 5999, planCode: "premium-yearly" }
];
const isShoparkPlanKey = (value) => typeof value === "string" && SHOPARK_PLAN_KEYS.some((key) => key === value);
function resolveShoparkPlanKey(planKey, planCode) {
  if (planKey !== void 0 && planKey !== null && planKey !== "") return isShoparkPlanKey(planKey) ? planKey : null;
  const code = planCode.replace(/-(monthly|yearly)$/, "");
  if (planCode === "enterprise-custom") return "enterprise";
  if (code === "enterprise") return "premium";
  if (code === "standard") return "starter";
  if (code === "pro") return "professional";
  if (!code || code === "custom") return "free";
  return isShoparkPlanKey(code) ? code : null;
}
function parseShoparkMeta(value) {
  if (typeof value === "string") {
    try {
      value = JSON.parse(value);
    } catch {
      return {};
    }
  }
  return value && typeof value === "object" && !Array.isArray(value) ? value : {};
}
function readShoparkPlanMeta(value) {
  var _a;
  const meta = parseShoparkMeta(value);
  const planCode = String((_a = meta.shopark_plan_code) != null ? _a : "").trim().toLowerCase();
  if (!/^[a-z0-9][a-z0-9_-]{0,63}$/.test(planCode)) return null;
  const planKey = resolveShoparkPlanKey(meta.shopark_plan_key, planCode);
  if (!planKey) return null;
  const limit = meta.shopark_store_limit;
  const storeLimit = limit !== null && limit !== void 0 && limit !== "" && Number.isInteger(Number(limit)) && Number(limit) >= 0 && Number(limit) <= 1e4 ? Number(limit) : null;
  return { planCode, planKey, storeLimit };
}
function readShoparkPriceOption(metaData, price, interval, intervalCount) {
  const plan = readShoparkPlanMeta(metaData);
  if (!plan || intervalCount !== 1) return null;
  const option = SHOPARK_PRICE_OPTIONS.find((item) => item.planKey === plan.planKey && item.planCode === plan.planCode && item.interval === interval);
  if (!option) return null;
  if (Number(parseShoparkMeta(metaData).level) !== SHOPARK_PLAN_CATALOG[plan.planKey].rank) return null;
  const quotes = Object.values(parseShoparkMeta(parseShoparkMeta(metaData).locale_prices)).map(parseShoparkMeta);
  if (quotes.some((quote) => !(Number(quote.price) > 0))) return null;
  const cnyQuotes = quotes.filter((quote) => String(quote.currency || "").toUpperCase() === "CNY");
  if (cnyQuotes.length > 0) {
    if (cnyQuotes.some((quote) => Number(quote.price) !== option.price)) return null;
  } else if (Number(price) !== option.price) {
    return null;
  }
  return option;
}
const isShoparkDowngrade = (current, next) => SHOPARK_PLAN_CATALOG[next].rank < SHOPARK_PLAN_CATALOG[current].rank;
function resolveShoparkPlanCycle(value) {
  var _a;
  const meta = parseShoparkMeta(value);
  let interval = String(meta.interval || "month").toLowerCase();
  let intervalCount = Number.parseInt(String((_a = meta.interval_count) != null ? _a : 1), 10) || 1;
  const cycle = String(meta.subscription_cycle || meta.billing_cycle || "");
  const match = cycle.match(/^(\d+)_([a-z]+?)s?$/i);
  if (match) {
    intervalCount = Number(match[1]) || 1;
    interval = String(match[2]).toLowerCase();
  }
  if (cycle === "lifetime") interval = "lifetime";
  return { interval, intervalCount, cycle: cycle || `${intervalCount}_${interval}` };
}
const shoparkPlanLocales = {
  zh: {
    downgradeBlocked: "\u6709\u6548\u8BA2\u9605\u671F\u95F4\u6682\u4E0D\u652F\u6301\u964D\u7EA7\u8D2D\u4E70\u3002\u8BF7\u5728\u5F53\u524D\u5468\u671F\u7ED3\u675F\u540E\u9009\u62E9\u8F83\u4F4E\u5957\u9910\u3002",
    names: { free: "\u672A\u4ED8\u8D39 / \u5DF2\u5230\u671F", showcase: "\u4F01\u4E1A\u5C55\u793A\u7248", starter: "\u5165\u95E8\u7ECF\u8425\u7248", professional: "\u4E13\u4E1A\u7ECF\u8425\u7248", premium: "\u65D7\u8230\u7ECF\u8425\u7248", enterprise: "\u4F01\u4E1A\u5B9A\u5236\u7248" },
    unknown: "\u5176\u4ED6\u5957\u9910",
    downgrade: "\u964D\u7EA7\u6388\u6743\u5C06\u5728 Shopark \u7ACB\u5373\u751F\u6548\u3002\u5DF2\u6709\u8D85\u989D\u6570\u636E\u4FDD\u7559\uFF0C\u4F46\u5C06\u9650\u5236\u65B0\u589E\u5546\u54C1\u3001\u4E0A\u4F20\u3001\u5458\u5DE5\u3001\u57DF\u540D\u53CA AI \u4F7F\u7528\u3002",
    confirm: "\u786E\u8BA4\u5E76\u7EE7\u7EED",
    cancel: "\u53D6\u6D88",
    pending: "\u5F85\u540C\u6B65",
    ai: "AI \u70B9\u6570\u7531 Shopark \u9010\u6708\u8865\u53D1\uFF0C\u5E74\u4ED8\u4E5F\u9010\u6708\u53D1\u653E\u3001\u4E0D\u7ED3\u8F6C\uFF1B\u5347\u7EA7\u4EC5\u8865\u5F53\u671F\u5DEE\u989D\uFF0C\u4FDD\u7559\u5DF2\u7528\u70B9\u6570\u3002"
  },
  "zh-HK": {
    downgradeBlocked: "\u6709\u6548\u8A02\u95B1\u671F\u9593\u66AB\u4E0D\u652F\u63F4\u964D\u7D1A\u8CFC\u8CB7\u3002\u8ACB\u5728\u76EE\u524D\u9031\u671F\u7D50\u675F\u5F8C\u9078\u64C7\u8F03\u4F4E\u65B9\u6848\u3002",
    names: { free: "\u672A\u4ED8\u8CBB / \u5DF2\u5230\u671F", showcase: "\u4F01\u696D\u5C55\u793A\u7248", starter: "\u5165\u9580\u7D93\u71DF\u7248", professional: "\u5C08\u696D\u7D93\u71DF\u7248", premium: "\u65D7\u8266\u7D93\u71DF\u7248", enterprise: "\u4F01\u696D\u5B9A\u5236\u7248" },
    unknown: "\u5176\u4ED6\u65B9\u6848",
    downgrade: "\u964D\u7D1A\u6388\u6B0A\u5C07\u5728 Shopark \u5373\u6642\u751F\u6548\u3002\u5DF2\u6709\u8D85\u984D\u8CC7\u6599\u4FDD\u7559\uFF0C\u4F46\u5C07\u9650\u5236\u65B0\u589E\u5546\u54C1\u3001\u4E0A\u50B3\u3001\u54E1\u5DE5\u3001\u7DB2\u57DF\u53CA AI \u4F7F\u7528\u3002",
    confirm: "\u78BA\u8A8D\u4E26\u7E7C\u7E8C",
    cancel: "\u53D6\u6D88",
    pending: "\u5F85\u540C\u6B65",
    ai: "AI \u9EDE\u6578\u7531 Shopark \u9010\u6708\u88DC\u767C\uFF0C\u5E74\u4ED8\u4E5F\u9010\u6708\u767C\u653E\u3001\u4E0D\u7D50\u8F49\uFF1B\u5347\u7D1A\u50C5\u88DC\u7576\u671F\u5DEE\u984D\uFF0C\u4FDD\u7559\u5DF2\u7528\u9EDE\u6578\u3002"
  },
  en: {
    downgradeBlocked: "Purchasing a lower plan is blocked while your subscription is active. Choose it after the current period ends.",
    names: { free: "Unpaid / expired", showcase: "Showcase", starter: "Starter", professional: "Professional", premium: "Premium", enterprise: "Enterprise Custom" },
    unknown: "Other plan",
    downgrade: "A lower license takes effect in Shopark immediately. Existing excess data is kept, but new products, uploads, staff, domains and AI use are restricted.",
    confirm: "Confirm and continue",
    cancel: "Cancel",
    pending: "Pending sync",
    ai: "Shopark grants AI points monthly, including annual plans, with no rollover. Upgrades add only the current-month difference and preserve used points."
  },
  ru: {
    downgradeBlocked: "\u041F\u043E\u043A\u0443\u043F\u043A\u0430 \u0431\u043E\u043B\u0435\u0435 \u043D\u0438\u0437\u043A\u043E\u0433\u043E \u0442\u0430\u0440\u0438\u0444\u0430 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430 \u043F\u0440\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0439 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0435. \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0435\u0433\u043E \u043F\u043E\u0441\u043B\u0435 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F \u0442\u0435\u043A\u0443\u0449\u0435\u0433\u043E \u043F\u0435\u0440\u0438\u043E\u0434\u0430.",
    names: { free: "\u041D\u0435 \u043E\u043F\u043B\u0430\u0447\u0435\u043D / \u0438\u0441\u0442\u0451\u043A", showcase: "\u0412\u0438\u0442\u0440\u0438\u043D\u0430", starter: "\u041D\u0430\u0447\u0430\u043B\u044C\u043D\u044B\u0439", professional: "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439", premium: "\u041F\u0440\u0435\u043C\u0438\u0443\u043C", enterprise: "\u041A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u0439 \u043F\u043E \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0443" },
    unknown: "\u0414\u0440\u0443\u0433\u043E\u0439 \u0442\u0430\u0440\u0438\u0444",
    downgrade: "\u041F\u043E\u043D\u0438\u0436\u0435\u043D\u0438\u0435 \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0432 Shopark \u0441\u0440\u0430\u0437\u0443. \u0414\u0430\u043D\u043D\u044B\u0435 \u0441\u0432\u0435\u0440\u0445 \u043B\u0438\u043C\u0438\u0442\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u044E\u0442\u0441\u044F, \u043D\u043E \u043D\u043E\u0432\u044B\u0435 \u0442\u043E\u0432\u0430\u0440\u044B, \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438, \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438, \u0434\u043E\u043C\u0435\u043D\u044B \u0438 AI \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0438\u0432\u0430\u044E\u0442\u0441\u044F.",
    confirm: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u0438 \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C",
    cancel: "\u041E\u0442\u043C\u0435\u043D\u0430",
    pending: "\u041E\u0436\u0438\u0434\u0430\u0435\u0442 \u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0430\u0446\u0438\u0438",
    ai: "Shopark \u043D\u0430\u0447\u0438\u0441\u043B\u044F\u0435\u0442 AI-\u0431\u0430\u043B\u043B\u044B \u0435\u0436\u0435\u043C\u0435\u0441\u044F\u0447\u043D\u043E, \u0432 \u0442\u043E\u043C \u0447\u0438\u0441\u043B\u0435 \u043F\u0440\u0438 \u0433\u043E\u0434\u043E\u0432\u043E\u0439 \u043E\u043F\u043B\u0430\u0442\u0435, \u0431\u0435\u0437 \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u0430 \u043E\u0441\u0442\u0430\u0442\u043A\u0430. \u041F\u0440\u0438 \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u0438 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u0440\u0430\u0437\u043D\u0438\u0446\u0430 \u0442\u0435\u043A\u0443\u0449\u0435\u0433\u043E \u043C\u0435\u0441\u044F\u0446\u0430 \u0441 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435\u043C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u0431\u0430\u043B\u043B\u043E\u0432."
  }
};
function useShoparkPlanName() {
  const { locale } = useI18n();
  const planCopy = computed(() => shoparkPlanLocales[locale.value] || shoparkPlanLocales.en);
  const planName = (planKey, edition = "") => {
    const key = resolveShoparkPlanKey(planKey, edition.toLowerCase());
    return key ? planCopy.value.names[key] : planCopy.value.unknown;
  };
  return { planCopy, planName };
}

export { SHOPARK_PLAN_CATALOG as S, isShoparkDowngrade as a, readShoparkPlanMeta as b, resolveShoparkPlanCycle as c, isShoparkPlanKey as i, readShoparkPriceOption as r, useShoparkPlanName as u };
//# sourceMappingURL=useShoparkPlanName-DlYj_Dxm.mjs.map
