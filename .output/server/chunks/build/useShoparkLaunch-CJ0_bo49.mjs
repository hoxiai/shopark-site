import { bv as useState } from './server.mjs';

const useShoparkLaunch = () => {
  const open = useState("shopark-launch-open", () => false);
  const seed = useState("shopark-launch-seed", () => null);
  const show = (input) => {
    if (typeof input === "string") {
      const trimmed = input.trim();
      seed.value = trimmed ? { prompt: trimmed, autoSend: true } : null;
    } else if (input && typeof input === "object" && !("target" in input)) {
      seed.value = { ...input };
    }
    open.value = true;
  };
  const consumeSeed = () => {
    const current = seed.value;
    seed.value = null;
    return current;
  };
  return {
    open,
    seed,
    show,
    consumeSeed,
    hide: () => {
      open.value = false;
    }
  };
};

export { useShoparkLaunch as u };
//# sourceMappingURL=useShoparkLaunch-CJ0_bo49.mjs.map
