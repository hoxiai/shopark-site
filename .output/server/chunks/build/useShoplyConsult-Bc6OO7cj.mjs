import { computed, ref } from 'vue';
import { r as useSettings } from './server.mjs';

const useShoplyConsult = () => {
  const { getSetting } = useSettings();
  const consultUrl = computed(() => String(getSetting("shoply_consult_url", "mailto:support@qingpu.ai")));
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

export { useShoplyConsult as u };
