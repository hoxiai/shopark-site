import { bq as useState } from './server.mjs';

const useShoparkLaunch = () => {
  const open = useState("shopark-launch-open", () => false);
  return {
    open,
    show: () => {
      open.value = true;
    },
    hide: () => {
      open.value = false;
    }
  };
};

export { useShoparkLaunch as u };
//# sourceMappingURL=useShoparkLaunch-CSCC9z_d.mjs.map
