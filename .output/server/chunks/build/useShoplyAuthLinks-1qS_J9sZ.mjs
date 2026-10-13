import { computed } from 'vue';
import { bi as useCustomerAuth, D as useLocaleRouter } from './server.mjs';

const useShoplyAuthLinks = () => {
  const { loggedIn } = useCustomerAuth();
  const { localePath } = useLocaleRouter();
  const withRedirect = (path, redirect) => `${localePath(path)}?redirect=${encodeURIComponent(localePath(redirect))}`;
  const signInUrl = computed(() => localePath("/auth/login"));
  const consoleUrl = computed(() => localePath("/user/dashboard"));
  const signUpUrl = computed(() => loggedIn.value ? localePath("/user/stores") : withRedirect("/auth/register", "/user/stores"));
  return { loggedIn, signInUrl, signUpUrl, consoleUrl };
};

export { useShoplyAuthLinks as u };
//# sourceMappingURL=useShoplyAuthLinks-1qS_J9sZ.mjs.map
