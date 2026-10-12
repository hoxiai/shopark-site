import { computed } from 'vue';
import { u as useI18n, r as useSettings, G as useExtensions, bs as publishedOptionalThemeSet } from './server.mjs';
import { s as shoplyMarketplaceLocales } from './marketplace-6HVcFXY0.mjs';

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
  const packageState = (packageKind, artifactId) => {
    if (!artifactId) return { packageStatus: "not_built", managementPath: null };
    if (packageKind === "extension") {
      if (!installedExtensionIds.value.has(artifactId)) return { packageStatus: "not_built", managementPath: null };
      return {
        packageStatus: enabledExtensionIds.value.has(artifactId) ? "enabled" : "ready",
        managementPath: "/admin/settings/extensions"
      };
    }
    if (!publishedOptionalThemeSet.has(artifactId)) return { packageStatus: "not_built", managementPath: null };
    return {
      packageStatus: getSetting("active_theme") === artifactId ? "active" : "ready",
      managementPath: "/admin/settings/themes"
    };
  };
  return { packageState };
};
const toMarketplaceAppEntry = (item, copy, packageStateFn) => {
  var _a;
  const categoryCandidate = item.category;
  const category = appCategories.has(categoryCandidate) ? categoryCandidate : "utility";
  const state = packageStateFn("extension", item.uniqueName);
  const categoryCopy = copy.appCategories[category];
  const summary = item.subtitle || (categoryCopy ? categoryCopy[1] : copy.detail.appGeneric);
  let sections = [
    {
      title: copy.detail.appTitle,
      paragraphs: item.content ? [item.content.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim()] : [summary]
    }
  ];
  if (item.slug === "paddle") {
    sections = copy.detail.paddle.map((section) => ({ title: section.title, paragraphs: [...section.paragraphs] }));
  }
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
    publishedAt: item.createdAt ? item.createdAt.slice(0, 10) : void 0,
    downloads: item.downs || 0,
    version: item.version,
    summary,
    contentTitle: copy.detail.appTitle,
    sections,
    price: (_a = item.salesPrice) != null ? _a : item.priceAmount ? item.priceAmount / 100 : 0,
    productSlug: null,
    imageUrl: item.imageUrl || null,
    packageStatus: state.packageStatus,
    managementPath: state.managementPath
  };
};
const toMarketplaceThemeEntry = (item, copy, packageStateFn) => {
  var _a;
  const categoryCandidate = item.category;
  const category = themeCategories.has(categoryCandidate) ? categoryCandidate : "fashion";
  const state = packageStateFn("theme", item.uniqueName);
  const summary = item.subtitle || copy.detail.themeGeneric;
  const sections = [
    {
      title: copy.detail.themeTitle,
      paragraphs: item.content ? [item.content.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim()] : [copy.detail.themeGeneric]
    }
  ];
  return {
    kind: "theme",
    packageKind: "theme",
    slug: item.slug,
    name: item.name,
    category,
    artifactId: item.uniqueName,
    mark: (item.name || item.slug).slice(0, 2).toUpperCase(),
    accent: "#0ea5e9",
    publishedAt: item.createdAt ? item.createdAt.slice(0, 10) : void 0,
    downloads: item.downs || 0,
    version: item.version,
    demoUrl: item.demoUrl || (item.uniqueName ? `https://${item.uniqueName}.shoply.page` : void 0),
    summary,
    contentTitle: copy.detail.themeTitle,
    sections,
    price: (_a = item.salesPrice) != null ? _a : item.priceAmount ? item.priceAmount / 100 : 0,
    productSlug: null,
    imageUrl: item.imageUrl || null,
    packageStatus: state.packageStatus,
    managementPath: state.managementPath
  };
};

export { useMarketplacePackageState as a, toMarketplaceThemeEntry as b, toMarketplaceAppEntry as t, useMarketplaceCopy as u };
