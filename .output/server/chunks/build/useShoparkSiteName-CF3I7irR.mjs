import { computed } from 'vue';
import { bh as useLocalizedSettings, r as useSettings } from './server.mjs';

const useShoparkSiteName = () => {
  const { getLocalizedSetting } = useLocalizedSettings();
  const { getSetting } = useSettings();
  const defaultBrandName = computed(() => "ShopArk");
  const siteName = computed(() => {
    const configured = getLocalizedSetting("site_name") || getSetting("site_name");
    return (configured == null ? void 0 : configured.trim()) || defaultBrandName.value;
  });
  const formatPageTitle = (titleChunk) => {
    if (!titleChunk) return siteName.value;
    let title = titleChunk.trim();
    if (!title) return siteName.value;
    const tokens = [
      siteName.value,
      defaultBrandName.value,
      "ShopArk\u72EC\u7ACB\u7AD9",
      "ShopArk\u7DB2\u5E97",
      "ShopArk Shop",
      "ShopArk",
      "ShopArk",
      "Shoply",
      "ShopArk"
    ].filter(Boolean);
    const escapedTokens = tokens.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|");
    const suffixPattern = new RegExp(`\\s*[-|\xB7_]\\s*(?:${escapedTokens})\\s*$`, "i");
    let prev = "";
    while (prev !== title) {
      prev = title;
      title = title.replace(suffixPattern, "").trim();
    }
    if (!title || title.toLowerCase() === siteName.value.toLowerCase()) {
      return siteName.value;
    }
    return `${title} - ${siteName.value}`;
  };
  return {
    siteName,
    defaultBrandName,
    formatPageTitle
  };
};

export { useShoparkSiteName as u };
//# sourceMappingURL=useShoparkSiteName-CF3I7irR.mjs.map
