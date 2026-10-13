import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { D as useLocaleRouter } from './server.mjs';

const useShoplyAuthRedirect = () => {
  const route = useRoute();
  const { localePath } = useLocaleRouter();
  const redirectPath = computed(() => {
    const redirect = typeof route.query.redirect === "string" ? route.query.redirect : "";
    if (redirect.startsWith("/") && !redirect.startsWith("//") && !redirect.includes("\\")) return redirect;
    return localePath("/user/dashboard");
  });
  const withRedirect = (path) => {
    const redirect = typeof route.query.redirect === "string" ? route.query.redirect : "";
    return redirect ? `${localePath(path)}?redirect=${encodeURIComponent(redirectPath.value)}` : localePath(path);
  };
  return { redirectPath, withRedirect };
};

export { useShoplyAuthRedirect as u };
//# sourceMappingURL=useShoplyAuthRedirect-s4RoPFY0.mjs.map
