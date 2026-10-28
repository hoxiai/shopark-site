import { computed, ref } from 'vue';
import { r as useSettings } from './server.mjs';

const useShoparkConsult = () => {
  const { getSetting } = useSettings();
  const consultUrl = computed(() => String(getSetting("shopark_consult_url", "mailto:support@qingpu.ai")));
  const isExternal = computed(() => /^https?:\/\//i.test(consultUrl.value));
  const isOpen = ref(false);
  const open = () => {
    isOpen.value = true;
  };
  const onConsultClick = (event) => {
    if (isExternal.value) return;
    event.preventDefault();
    open();
  };
  return { consultUrl, isExternal, isOpen, open, onConsultClick };
};

export { useShoparkConsult as u };
//# sourceMappingURL=useShoparkConsult-CQRP9gpM.mjs.map
