import { computed } from 'vue';
import { u as useI18n, w as useFetch } from './server.mjs';

const parseProductMeta = (value) => {
  if (value && typeof value === "object" && !Array.isArray(value)) return value;
  if (typeof value !== "string") return {};
  try {
    const parsed = JSON.parse(value);
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
};
const parsePlanFeatures = (value) => {
  let parsed = value;
  if (typeof value === "string") {
    try {
      parsed = JSON.parse(value);
    } catch {
      return [];
    }
  }
  if (!Array.isArray(parsed)) return [];
  return parsed.flatMap((item) => {
    if (typeof item === "string" && item.trim()) return [{ name: item.trim(), included: true }];
    if (!item || typeof item !== "object" || Array.isArray(item)) return [];
    const record = item;
    const name = String(record.name || "").trim();
    return name ? [{ name, included: record.included !== false }] : [];
  });
};
const resolvePlanCycle = (meta) => {
  var _a;
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
};
const PLAN_CODE_PATTERN = /^[a-z0-9][a-z0-9_-]{0,63}$/;
const parseStoreLimit = (value) => {
  if (value === null || value === void 0 || value === "") return null;
  const limit = Number(value);
  return Number.isInteger(limit) && limit >= 0 ? limit : null;
};
function useShoplyPlans(key = "shoply-pricing-plans") {
  const { locale } = useI18n();
  const { data: productsData, status, error, refresh } = useFetch(
    "/api/products",
    {
      key,
      query: { pageSize: 100 }
    },
    "$Ch-0dyAggT"
    /* nuxt-injected */
  );
  const plans = computed(() => {
    var _a;
    return (((_a = productsData.value) == null ? void 0 : _a.data) || []).flatMap((product) => {
      var _a2, _b;
      const meta = parseProductMeta(product.metaData);
      if (product.type !== "subscription" || meta.is_pricing_plan !== true) return [];
      const planCode = String(meta.shoply_plan_code || "").trim().toLowerCase();
      if (!PLAN_CODE_PATTERN.test(planCode)) return [];
      const translation = (_a2 = meta.translations) == null ? void 0 : _a2[locale.value];
      const { interval, intervalCount, cycle } = resolvePlanCycle(meta);
      return [{
        id: Number(product.id),
        slug: product.slug,
        name: (translation == null ? void 0 : translation.name) || product.name,
        description: (translation == null ? void 0 : translation.description) || product.description || "",
        price: Number(product.price || 0),
        badge: (translation == null ? void 0 : translation.plan_badge) || meta.plan_badge || "",
        features: parsePlanFeatures((translation == null ? void 0 : translation.plan_features) || meta.plan_features),
        interval,
        intervalCount,
        cycle,
        level: Number((_b = meta.level) != null ? _b : 0) || 0,
        planCode,
        storeLimit: parseStoreLimit(meta.shoply_store_limit)
      }];
    }).sort((left, right) => left.price - right.price);
  });
  return { plans, status, error, refresh };
}

export { useShoplyPlans as u };
