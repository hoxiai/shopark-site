import { computed } from 'vue';
import { u as useI18n, bg as useLocalizedSettings, r as useSettings } from './server.mjs';

const useShoplySiteName = () => {
  const { locale } = useI18n();
  const { getLocalizedSetting } = useLocalizedSettings();
  const { getSetting } = useSettings();
  const defaultBrandName = computed(() => {
    if (locale.value === "zh-HK") return "\u8F15\u92EA";
    if (locale.value.startsWith("zh")) return "\u8F7B\u94FA";
    if (locale.value === "ru") return "Shoply";
    return "Qingpu";
  });
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
      "\u8F7B\u94FA\u72EC\u7ACB\u7AD9",
      "\u8F15\u92EA\u7DB2\u5E97",
      "Qingpu Shop",
      "\u8F7B\u94FA",
      "\u8F15\u92EA",
      "Shoply",
      "Qingpu"
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

export { useShoplySiteName as u };
//# sourceMappingURL=useShoplySiteName-LipV6hw_.mjs.map
