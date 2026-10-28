import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { D as useLocaleRouter } from './server.mjs';

const useShoparkAuthRedirect = () => {
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

export { useShoparkAuthRedirect as u };
//# sourceMappingURL=useShoparkAuthRedirect-CpJ917pf.mjs.map
