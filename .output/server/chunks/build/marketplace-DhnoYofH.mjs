import { computed } from 'vue';
import { u as useI18n, r as useSettings, K as useExtensions, bj as publishedOptionalThemeSet } from './server.mjs';
import { s as shoplyMarketplaceLocales } from './marketplace-CT8kYQb9.mjs';

const appCategories = /* @__PURE__ */ new Set(["payment", "localization", "data", "communication", "commerce", "identity", "utility"]);
const themeCategories = /* @__PURE__ */ new Set(["business", "outdoor", "electronics", "fashion", "beauty", "home", "pets", "sports", "jewelry", "medical", "kids"]);
const useMarketplaceCopy = () => {
  const { locale } = useI18n();
  const localeCode = computed(() => locale.value in shoplyMarketplaceLocales ? locale.value : "zh");
  const copy = computed(() => shoplyMarketplaceLocales[localeCode.value]);
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
const toMarketplaceAppEntry = (item, copy, packageStateFn) => {
  var _a, _b, _c;
  const categoryCandidate = item.category;
  const category = appCategories.has(categoryCandidate) ? categoryCandidate : "utility";
  const hasPackage = Boolean(item.packageUrl && item.packageUrl.trim());
  const state = packageStateFn("extension", item.uniqueName, hasPackage);
  const categoryCopy = copy.appCategories[category];
  const rawSubtitle = sanitizeMarketplaceCopy(item.subtitle);
  const rawContent = sanitizeMarketplaceCopy(item.content);
  const summary = rawSubtitle || (categoryCopy ? categoryCopy[1] : copy.detail.appGeneric);
  let sections = [
    {
      title: copy.detail.appTitle,
      paragraphs: rawContent ? [rawContent.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim()] : [summary]
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
  return {
    kind: "app",
    packageKind: "extension",
    slug: item.slug,
    name: item.name,
    category,
    artifactId: item.uniqueName,
    runtimeKind: item.types === "theme" ? "ui" : "payment",
    mark: (item.name || item.slug).slice(0, 2).toUpperCase(),
    accent: "#2563eb",
    publishedAt,
    updatedAt,
    downloads: item.downs || 0,
    version: item.version,
    summary,
    contentTitle: copy.detail.appTitle,
    sections,
    contentHtml: rawContent || null,
    price: (_c = item.salesPrice) != null ? _c : item.priceAmount ? item.priceAmount / 100 : 0,
    productSlug: null,
    imageUrl: item.imageUrl || null,
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
const themePreviewMap = {
  "apparelx": "https://www.ueeshop.com/u_file/product/26_03_13/07b0c10b9c.jpg",
  "outdoor-equipment-mall": "https://www.ueeshop.com/u_file/product/26_06_23/c5b0daf851.png",
  "audio-headphones-mall": "https://www.ueeshop.com/u_file/product/26_03_13/ede08353a1.jpg",
  "clothing-shoes-mall": "https://www.ueeshop.com/u_file/product/26_03_13/07b0c10b9c.jpg",
  "beauty-skin-care-mall": "https://www.ueeshop.com/u_file/product/26_03_13/e379640ea5.jpg",
  "underwear-clothing-mall": "https://www.ueeshop.com/u_file/product/26_03_13/efa83528c5.jpg",
  "pet-equipment-mall": "https://www.ueeshop.com/u_file/product/26_03_13/9414ae0cbf.jpg",
  "home-textiles-mall": "https://www.ueeshop.com/u_file/product/26_03_13/ba4e55ad7f.jpg",
  "cycling-accessories-mall": "https://www.ueeshop.com/u_file/product/26_03_13/657c3e1086.jpg",
  "jewelry-accessories": "https://www.ueeshop.com/u_file/product/26_03_13/88d95f3b06.jpg",
  "medical-equipment": "https://www.ueeshop.com/u_file/product/26_01_13/0f2a997b7d.jpg",
  "furniture-mattress-mall": "https://www.ueeshop.com/u_file/product/26_01_13/560ae3e80b.jpg",
  "children-toys-mall": "https://www.ueeshop.com/u_file/product/25_09_02/f1e53d845f.jpg",
  "wig-mall": "https://www.ueeshop.com/u_file/product/25_07_30/074049e5b5.jpg",
  "shoes-mall": "https://www.ueeshop.com/u_file/product/25_07_30/61c84c59e8.jpg",
  "fitness-equipment-mall": "https://www.ueeshop.com/u_file/product/25_05_07/a837dc4d76.png",
  "handbags-mall": "https://www.ueeshop.com/u_file/product/24_12_25/24d6983109.jpg",
  "women-clothing-mall": "https://www.ueeshop.com/u_file/product/21_12_31/c16af87be3.jpg",
  "wedding-dress-mall": "https://www.ueeshop.com/u_file/product/21_12_31/f65a87e356.jpg",
  "men-clothing-mall": "https://www.ueeshop.com/u_file/product/26_03_13/07b0c10b9c.jpg",
  "cosmetic-perfume-mall": "https://www.ueeshop.com/u_file/product/26_03_13/e379640ea5.jpg",
  "phone-accessories-mall": "https://www.ueeshop.com/u_file/product/26_03_13/ede08353a1.jpg"
};
const categoryPreviewFallback = {
  outdoor: "https://www.ueeshop.com/u_file/product/26_06_23/c5b0daf851.png",
  electronics: "https://www.ueeshop.com/u_file/product/26_03_13/ede08353a1.jpg",
  fashion: "https://www.ueeshop.com/u_file/product/26_03_13/07b0c10b9c.jpg",
  beauty: "https://www.ueeshop.com/u_file/product/26_03_13/e379640ea5.jpg",
  pets: "https://www.ueeshop.com/u_file/product/26_03_13/9414ae0cbf.jpg",
  home: "https://www.ueeshop.com/u_file/product/26_03_13/ba4e55ad7f.jpg",
  sports: "https://www.ueeshop.com/u_file/product/26_03_13/657c3e1086.jpg",
  jewelry: "https://www.ueeshop.com/u_file/product/26_03_13/88d95f3b06.jpg",
  medical: "https://www.ueeshop.com/u_file/product/26_01_13/0f2a997b7d.jpg",
  kids: "https://www.ueeshop.com/u_file/product/25_09_02/f1e53d845f.jpg",
  business: "https://www.ueeshop.com/u_file/product/26_01_13/560ae3e80b.jpg"
};
const toMarketplaceThemeEntry = (item, copy, packageStateFn) => {
  var _a, _b, _c;
  const categoryCandidate = item.category;
  const category = themeCategories.has(categoryCandidate) ? categoryCandidate : "fashion";
  const hasPackage = Boolean(item.packageUrl && item.packageUrl.trim());
  const state = packageStateFn("theme", item.uniqueName, hasPackage);
  const rawSubtitle = sanitizeMarketplaceCopy(item.subtitle);
  const rawContent = sanitizeMarketplaceCopy(item.content);
  const summary = rawSubtitle || copy.detail.themeGeneric;
  const sections = [
    {
      title: copy.detail.themeTitle,
      paragraphs: rawContent ? [rawContent.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim()] : [copy.detail.themeGeneric]
    }
  ];
  const validItemImage = item.imageUrl && !item.imageUrl.includes("/uploads/themes/apparelx/preview.png") ? item.imageUrl : null;
  const imageUrl = validItemImage || themePreviewMap[item.slug] || categoryPreviewFallback[category] || null;
  const validDemoUrl = item.demoUrl && !item.demoUrl.includes(".shoply.page") ? item.demoUrl : void 0;
  const latestReleaseDate = formatMarketplaceDate((_b = (_a = item.releases) == null ? void 0 : _a[0]) == null ? void 0 : _b.createdAt);
  const itemUpdateDate = formatMarketplaceDate(item.updatedAt);
  const itemCreateDate = formatMarketplaceDate(item.createdAt);
  const updatedAt = latestReleaseDate || itemUpdateDate || itemCreateDate;
  const publishedAt = itemCreateDate || latestReleaseDate || updatedAt;
  return {
    kind: "theme",
    packageKind: "theme",
    slug: item.slug,
    name: item.name,
    category,
    artifactId: item.uniqueName,
    mark: (item.name || item.slug).slice(0, 2).toUpperCase(),
    accent: "#0ea5e9",
    publishedAt,
    updatedAt,
    downloads: item.downs || 0,
    version: item.version,
    demoUrl: validDemoUrl,
    summary,
    contentTitle: copy.detail.themeTitle,
    sections,
    contentHtml: rawContent || null,
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

export { useMarketplacePackageState as a, toMarketplaceThemeEntry as b, toMarketplaceAppEntry as t, useMarketplaceCopy as u };
//# sourceMappingURL=marketplace-DhnoYofH.mjs.map
