import { computed } from 'vue';
import { r as readShoparkPriceOption, S as SHOPARK_PLAN_CATALOG, b as readShoparkPlanMeta, c as resolveShoparkPlanCycle } from './useShoparkPlanName-DlYj_Dxm.mjs';
import { u as useI18n, y as useFetch } from './server.mjs';

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
const resolvePlanCycle = resolveShoparkPlanCycle;
const PLAN_CODE_PATTERN = /^[a-z0-9][a-z0-9_-]{0,63}$/;
function useShoparkPlans(key = "shopark-pricing-plans") {
  const { locale } = useI18n();
  const { data: productsData, status, error, refresh } = useFetch(
    "/api/products",
    {
      key,
      query: { pageSize: 100 }
    },
    "$RlzGHZ60a_"
    /* nuxt-injected */
  );
  const plans = computed(() => {
    var _a;
    return (((_a = productsData.value) == null ? void 0 : _a.data) || []).flatMap((product) => {
      var _a2, _b, _c;
      const meta = parseProductMeta(product.metaData);
      if (product.type !== "subscription" || meta.is_pricing_plan !== true) return [];
      const planCode = String(meta.shopark_plan_code || "").trim().toLowerCase();
      if (!PLAN_CODE_PATTERN.test(planCode)) return [];
      const translation = (_a2 = meta.translations) == null ? void 0 : _a2[locale.value];
      const { interval, intervalCount, cycle } = resolvePlanCycle(meta);
      const offering = readShoparkPriceOption(meta, product.price, interval, intervalCount);
      if (!offering) return [];
      return [{
        id: Number(product.id),
        slug: product.slug,
        name: (translation == null ? void 0 : translation.name) || product.name,
        description: (translation == null ? void 0 : translation.description) || product.description || "",
        price: Number(product.price || 0),
        metaData: meta,
        badge: (translation == null ? void 0 : translation.plan_badge) || meta.plan_badge || "",
        features: parsePlanFeatures((translation == null ? void 0 : translation.plan_features) || meta.plan_features),
        interval,
        intervalCount,
        cycle,
        level: SHOPARK_PLAN_CATALOG[offering.planKey].rank,
        planKey: offering.planKey,
        planCode,
        storeLimit: (_c = (_b = readShoparkPlanMeta(meta)) == null ? void 0 : _b.storeLimit) != null ? _c : null
      }];
    }).sort((left, right) => left.price - right.price);
  });
  return { plans, status, error, refresh };
}

export { useShoparkPlans as u };
//# sourceMappingURL=useShoparkPlans-CEL07kg8.mjs.map
