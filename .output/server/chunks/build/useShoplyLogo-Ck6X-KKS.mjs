import { dk as buildAssetsURL } from '../nitro/nitro.mjs';
import { computed } from 'vue';
import { u as useI18n } from './server.mjs';

const englishLogoUrl = "" + buildAssetsURL("logo.CKNP-F1u.svg");
const englishInverseLogoUrl = "" + buildAssetsURL("logo-inverse.BSYu5SdS.svg");
const chineseLogoUrl = "" + buildAssetsURL("logo-zh.B3CLcEFe.svg");
const chineseInverseLogoUrl = "" + buildAssetsURL("logo-zh-inverse.DCSF8Ubw.svg");
function useShoplyLogo() {
  const { locale } = useI18n();
  const isChinese = computed(() => locale.value === "zh" || locale.value === "zh-HK");
  return {
    logoUrl: computed(() => isChinese.value ? chineseLogoUrl : englishLogoUrl),
    inverseLogoUrl: computed(() => isChinese.value ? chineseInverseLogoUrl : englishInverseLogoUrl),
    logoWidth: computed(() => isChinese.value ? 462 : 771),
    logoAlt: computed(() => isChinese.value ? "\u8F7B\u94FA" : "runShoply")
  };
}

export { useShoplyLogo as u };
//# sourceMappingURL=useShoplyLogo-Ck6X-KKS.mjs.map
