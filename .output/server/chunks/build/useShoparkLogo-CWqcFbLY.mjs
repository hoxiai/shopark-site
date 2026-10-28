import { eV as buildAssetsURL } from '../nitro/nitro.mjs';

const logoUrl = "" + buildAssetsURL("logo.B9vgFdvV.svg");
const inverseLogoUrl = "" + buildAssetsURL("logo-inverse.CewQgBd6.svg");
function useShoparkLogo() {
  return {
    logoUrl,
    inverseLogoUrl,
    logoWidth: 684,
    logoAlt: "ShopArk"
  };
}

export { useShoparkLogo as u };
//# sourceMappingURL=useShoparkLogo-CWqcFbLY.mjs.map
