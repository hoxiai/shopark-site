import { u as useI18n, D as useLocaleRouter, E as useProductPricing, F as useCurrencyFormat, v as _sfc_main$o, i as _sfc_main$R, k as _sfc_main$M, bn as __nuxt_component_3$3, _ as _sfc_main$W } from './server.mjs';
import __nuxt_component_2 from './ShoparkCheckoutModal-BdRNNhl1.mjs';
import { defineComponent, computed, ref, watch, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { u as useShoparkPlanName } from './useShoparkPlanName-DlYj_Dxm.mjs';
import { r as ru, e as en, a as zhHK, z as zh } from './zh-HK-CClfjLzy.mjs';
import { u as useShoparkConsoleCopy, f as formatCopy, a as formatPlanPeriod } from './useShoparkConsole-R5T7lfU2.mjs';
import '../nitro/nitro.mjs';
import 'drizzle-orm';
import 'node:crypto';
import 'crypto';
import 'fs';
import 'path';
import 'node:path';
import '@nuxthub/blob';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:async_hooks';
import 'postgres';
import 'drizzle-orm/postgres-js';
import 'drizzle-orm/d1';
import 'node:module';
import 'mysql2/promise';
import 'drizzle-orm/mysql2';
import 'drizzle-orm/pg-core';
import 'drizzle-orm/sqlite-core';
import 'drizzle-orm/mysql-core';
import 'maxmind';
import 'node:os';
import 'node:url';
import 'zod';
import '@iconify/utils';
import 'consola';
import 'node:zlib';
import 'ioredis';
import 'jose';
import 'node:child_process';
import 'process';
import 'buffer';
import 'node:dns/promises';
import 'node:net';
import 'node:fs/promises';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'vue-router';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import 'tailwind-variants';
import '@vue/shared';
import 'embla-carousel-vue';
import 'aria-hidden';
import '@floating-ui/vue';
import '@tanstack/vue-table';
import '@tanstack/vue-virtual';
import 'framesync';
import 'popmotion';
import 'style-value-types';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ShoparkPlanCards",
  __ssrInlineRender: true,
  props: {
    plans: {},
    pending: { type: Boolean },
    failed: { type: Boolean },
    loggedIn: { type: Boolean },
    currentProductId: {},
    currentLevel: {}
  },
  emits: ["purchased", "retry"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { planCopy } = useShoparkPlanName();
    const { locale } = useI18n();
    const localeMessages = { zh, "zh-HK": zhHK, en, ru };
    const pricingCopy = computed(() => (localeMessages[locale.value] || zh).pages.pricing);
    const { copy } = useShoparkConsoleCopy();
    const { localePath } = useLocaleRouter();
    const { productQuote } = useProductPricing();
    const { formatCurrencyAmount } = useCurrencyFormat();
    const billingCycle = ref("yearly");
    watch(
      () => [props.currentProductId, props.plans],
      ([productId, planList]) => {
        if (!productId || !planList.length) return;
        const matched = planList.find((p) => p.id === productId);
        if (matched) {
          const isYearly = matched.interval === "year" || matched.interval === "month" && matched.intervalCount === 12;
          billingCycle.value = isYearly ? "yearly" : "monthly";
        }
      },
      { immediate: true }
    );
    const signInUrl = `${localePath("/auth/login")}?redirect=${encodeURIComponent(localePath("/user/subscription"))}`;
    const isCurrent = (plan) => props.currentProductId !== null && plan.id === props.currentProductId;
    const actionLabel = (plan) => {
      if (isCurrent(plan)) return copy.value.subscription.renew;
      if (props.currentLevel !== null && plan.level > props.currentLevel) return copy.value.subscription.upgrade;
      return copy.value.subscription.subscribe;
    };
    const stripIntervalKeywords = (value) => {
      return String(value || "").replace(/(（\s*(?:月付|年付|每年|每月)\s*）|\(\s*(?:monthly|yearly|annually|annual|month|year)\s*\))/gi, "").replace(/(yearly|annually|annual|quarterly|monthly|每年|年付|月付|每月)/gi, "").replace(/[-_/()（）]+/g, " ").replace(/\s+/g, " ").trim();
    };
    const splitPlanTitle = (rawName, key) => {
      const cleaned = stripIntervalKeywords(rawName) || rawName;
      const match = cleaned.match(/^([A-Za-z]+)\s+(.+)$/);
      if (match) {
        return {
          eyebrow: match[1],
          displayTitle: match[2].trim()
        };
      }
      return {
        eyebrow: key.charAt(0).toUpperCase() + key.slice(1),
        displayTitle: cleaned
      };
    };
    const normalizeFeatureList = (features) => {
      return features.map((item) => ({
        ...item,
        name: item.name.replace("\u6807\u51C6\u7ECF\u8425\u7248", "\u5165\u95E8\u7ECF\u8425\u7248").replace("\u6A19\u6E96\u7D93\u71DF\u7248", "\u5165\u9580\u7D93\u71DF\u7248")
      }));
    };
    const resolvePlanGroupKey = (plan) => plan.planKey;
    const showcasePlan = computed(() => {
      return props.plans.find((p) => resolvePlanGroupKey(p) === "showcase" || p.planCode === "showcase-yearly" || p.slug === "showcase-yearly") || null;
    });
    const commercePlanGroups = computed(() => {
      const map = /* @__PURE__ */ new Map();
      for (const plan of props.plans) {
        const key = resolvePlanGroupKey(plan);
        if (key === "showcase" || key === "enterprise") continue;
        const isYearly = plan.interval === "year" || plan.interval === "month" && plan.intervalCount === 12;
        const existing = map.get(key);
        const baseName = stripIntervalKeywords(plan.name) || plan.name;
        const isFeatured = plan.level === 3 || Boolean(plan.badge && /推荐|热门|popular|featured/i.test(plan.badge));
        if (!existing) {
          map.set(key, {
            key,
            level: plan.level,
            name: baseName,
            description: plan.description,
            badge: plan.badge,
            features: plan.features,
            featured: isFeatured,
            monthlyPlan: isYearly ? null : plan,
            yearlyPlan: isYearly ? plan : null
          });
        } else {
          if (isYearly) {
            existing.yearlyPlan = plan;
          } else {
            existing.monthlyPlan = plan;
          }
          if (!existing.badge && plan.badge) existing.badge = plan.badge;
          if (isFeatured) existing.featured = true;
          if (plan.features.length > existing.features.length) existing.features = plan.features;
          if (!existing.description && plan.description) existing.description = plan.description;
        }
      }
      return Array.from(map.values()).sort((a, b) => a.level - b.level);
    });
    const displayPlans = computed(() => {
      return commercePlanGroups.value.map((group) => {
        const isYearlyMode = billingCycle.value === "yearly";
        const activeProduct = isYearlyMode ? group.yearlyPlan || group.monthlyPlan : group.monthlyPlan || group.yearlyPlan;
        if (!activeProduct) return null;
        const isYearlyOnly = !group.monthlyPlan && Boolean(group.yearlyPlan);
        let monthlyEquivalent = "";
        let savingsAmountText = "";
        let originalAnnualPrice = "";
        if (group.monthlyPlan && group.yearlyPlan) {
          const yearlyQuote = productQuote(group.yearlyPlan);
          const monthlyQuote = productQuote(group.monthlyPlan);
          if (yearlyQuote.amount > 0 && monthlyQuote.amount > 0) {
            const annualFromMonthly = monthlyQuote.amount * 12;
            const savingsAmount = Math.max(0, annualFromMonthly - yearlyQuote.amount);
            const monthlyEquivalentAmount = Math.round(yearlyQuote.amount / 12);
            if (savingsAmount > 0) {
              savingsAmountText = formatCopy(pricingCopy.value.saveYearlyAmount, {
                amount: formatCurrencyAmount(savingsAmount, yearlyQuote.currency)
              });
              originalAnnualPrice = formatCurrencyAmount(annualFromMonthly, yearlyQuote.currency);
            }
            monthlyEquivalent = formatCopy(pricingCopy.value.monthlyEquivalent, {
              price: formatCurrencyAmount(monthlyEquivalentAmount, yearlyQuote.currency)
            });
          }
        }
        const { eyebrow, displayTitle } = splitPlanTitle(group.name, group.key);
        const rawFeatures = activeProduct.features.length ? activeProduct.features : group.features;
        return {
          key: group.key,
          eyebrow,
          displayTitle,
          description: activeProduct.description || group.description,
          badge: group.badge || activeProduct.badge,
          featured: group.featured,
          activeProduct,
          features: normalizeFeatureList(rawFeatures),
          isYearlyOnly,
          monthlyEquivalent,
          savingsAmountText,
          originalAnnualPrice
        };
      }).filter((p) => Boolean(p));
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UAlert = _sfc_main$o;
      const _component_UButton = _sfc_main$R;
      const _component_UBadge = _sfc_main$M;
      const _component_ProductPrice = __nuxt_component_3$3;
      const _component_UIcon = _sfc_main$W;
      const _component_ShoparkCheckoutModal = __nuxt_component_2;
      if (__props.pending) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid gap-5 md:grid-cols-3" }, _attrs))}><!--[-->`);
        ssrRenderList(3, (index) => {
          _push(`<div class="h-80 animate-pulse rounded-3xl border border-slate-200 bg-white"></div>`);
        });
        _push(`<!--]--></div>`);
      } else if (__props.failed) {
        _push(ssrRenderComponent(_component_UAlert, mergeProps({
          color: "error",
          variant: "subtle",
          title: unref(copy).subscription.loadFailed
        }, _attrs), {
          actions: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UButton, {
                color: "neutral",
                variant: "outline",
                onClick: ($event) => emit("retry")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(copy).common.retry)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(copy).common.retry), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UButton, {
                  color: "neutral",
                  variant: "outline",
                  onClick: ($event) => emit("retry")
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(copy).common.retry), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else if (!__props.plans.length) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center text-sm text-slate-500" }, _attrs))}>${ssrInterpolate(unref(copy).subscription.noPlans)}</div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="flex flex-wrap items-center justify-between gap-4"><div class="inline-flex items-center rounded-full border border-slate-200/90 bg-white p-1 shadow-2xs"><button type="button" class="${ssrRenderClass([billingCycle.value === "monthly" ? "bg-slate-900 text-white shadow-sm" : "text-slate-600 hover:text-slate-950", "relative rounded-full px-5 py-2 text-xs sm:text-sm font-extrabold transition-all duration-200 cursor-pointer"])}">${ssrInterpolate(pricingCopy.value.tabMonthly)}</button><button type="button" class="${ssrRenderClass([billingCycle.value === "yearly" ? "bg-blue-600 text-white shadow-sm shadow-blue-600/25" : "text-slate-600 hover:text-slate-950", "relative flex items-center gap-2 rounded-full px-5 py-2 text-xs sm:text-sm font-extrabold transition-all duration-200 cursor-pointer"])}"><span>${ssrInterpolate(pricingCopy.value.tabYearly)}</span><span class="${ssrRenderClass([billingCycle.value === "yearly" ? "bg-white text-blue-700" : "bg-emerald-50 text-emerald-700 border border-emerald-200", "rounded-full px-2 py-0.5 text-[10px] font-black tracking-wide uppercase transition-colors"])}">${ssrInterpolate(pricingCopy.value.saveBadge)}</span></button></div></div><div class="grid items-stretch gap-5 md:grid-cols-3"><!--[-->`);
        ssrRenderList(displayPlans.value, (plan) => {
          _push(`<article class="${ssrRenderClass([isCurrent(plan.activeProduct) ? "border-blue-600 ring-2 ring-blue-100" : plan.featured ? "border-blue-300 shadow-md shadow-blue-950/5" : "border-slate-200", "relative flex min-w-0 flex-col justify-between rounded-3xl border bg-white p-6 shadow-sm transition-all"])}"><div><div class="flex items-center justify-between gap-2"><span class="${ssrRenderClass([plan.featured ? "text-blue-600" : "text-slate-400", "text-xs font-black tracking-[0.14em] uppercase"])}">${ssrInterpolate(plan.eyebrow)}</span>`);
          if (isCurrent(plan.activeProduct)) {
            _push(ssrRenderComponent(_component_UBadge, {
              color: "primary",
              variant: "solid",
              class: "shrink-0"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(unref(copy).subscription.currentBadge)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(copy).subscription.currentBadge), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else if (plan.badge) {
            _push(ssrRenderComponent(_component_UBadge, {
              color: "primary",
              variant: "soft",
              class: "shrink-0"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(plan.badge)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(plan.badge), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div><h3 class="mt-1.5 text-xl font-black tracking-tight text-slate-950 sm:text-2xl">${ssrInterpolate(plan.displayTitle)}</h3>`);
          if (plan.description) {
            _push(`<p class="mt-2 min-h-[40px] text-xs sm:text-sm leading-relaxed text-slate-500">${ssrInterpolate(plan.description)}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="mt-5 flex min-h-[68px] flex-col justify-center"><div class="flex flex-wrap items-baseline gap-1.5"><span class="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">`);
          _push(ssrRenderComponent(_component_ProductPrice, {
            product: plan.activeProduct
          }, null, _parent));
          _push(`</span><span class="text-xs sm:text-sm font-bold text-slate-500">${ssrInterpolate(unref(formatCopy)(unref(copy).subscription.perPeriod, { period: unref(formatPlanPeriod)(unref(copy), plan.activeProduct.interval, plan.activeProduct.intervalCount) }))}</span>`);
          if (billingCycle.value === "yearly" && plan.originalAnnualPrice) {
            _push(`<span class="ml-1 text-xs font-semibold text-slate-400 line-through">${ssrInterpolate(plan.originalAnnualPrice)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="mt-1.5 flex min-h-[20px] flex-wrap items-center gap-2">`);
          if (billingCycle.value === "yearly" && plan.monthlyEquivalent && !plan.isYearlyOnly) {
            _push(`<!--[--><span class="text-xs font-semibold text-slate-500">${ssrInterpolate(plan.monthlyEquivalent)}</span>`);
            if (plan.savingsAmountText) {
              _push(`<span class="inline-flex items-center rounded-md bg-emerald-50 px-1.5 py-0.5 text-[11px] font-extrabold text-emerald-700 border border-emerald-200/70">${ssrInterpolate(plan.savingsAmountText)}</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<!--]-->`);
          } else {
            _push(`<span class="text-xs font-medium text-slate-400">${ssrInterpolate(billingCycle.value === "yearly" ? pricingCopy.value.billedAnnually : pricingCopy.value.billedMonthly)}</span>`);
          }
          _push(`</div></div><ul class="mt-5 space-y-2.5 border-t border-slate-100 pt-5 text-xs sm:text-sm"><!--[-->`);
          ssrRenderList(plan.features, (feature) => {
            _push(`<li class="${ssrRenderClass([feature.included ? "text-slate-700" : "text-slate-400 line-through", "flex items-start gap-2.5 leading-5"])}">`);
            _push(ssrRenderComponent(_component_UIcon, {
              name: feature.included ? "ph:check-circle-fill" : "ph:x-circle",
              class: ["mt-0.5 h-4 w-4 shrink-0", feature.included ? "text-emerald-500" : "text-slate-300"]
            }, null, _parent));
            _push(`<span>${ssrInterpolate(feature.name)}</span></li>`);
          });
          _push(`<!--]--></ul></div><div class="mt-6 pt-2">`);
          if (!__props.loggedIn) {
            _push(ssrRenderComponent(_component_UButton, {
              to: signInUrl,
              size: "lg",
              class: "w-full justify-center rounded-full font-bold",
              color: "neutral",
              variant: "outline"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(unref(copy).subscription.signInToSubscribe)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(copy).subscription.signInToSubscribe), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(ssrRenderComponent(_component_ShoparkCheckoutModal, {
              "product-id": plan.activeProduct.id,
              "plan-key": plan.activeProduct.planKey,
              onSuccess: (orderId) => emit("purchased", orderId)
            }, {
              trigger: withCtx(({ loading, open }, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_component_UButton, {
                    size: "lg",
                    class: "w-full justify-center rounded-full font-bold",
                    color: isCurrent(plan.activeProduct) ? "neutral" : "primary",
                    variant: isCurrent(plan.activeProduct) ? "outline" : "solid",
                    loading,
                    onClick: open
                  }, {
                    default: withCtx((_, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(actionLabel(plan.activeProduct))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(actionLabel(plan.activeProduct)), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                } else {
                  return [
                    createVNode(_component_UButton, {
                      size: "lg",
                      class: "w-full justify-center rounded-full font-bold",
                      color: isCurrent(plan.activeProduct) ? "neutral" : "primary",
                      variant: isCurrent(plan.activeProduct) ? "outline" : "solid",
                      loading,
                      onClick: open
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(actionLabel(plan.activeProduct)), 1)
                      ]),
                      _: 2
                    }, 1032, ["color", "variant", "loading", "onClick"])
                  ];
                }
              }),
              _: 2
            }, _parent));
          }
          _push(`</div></article>`);
        });
        _push(`<!--]--></div>`);
        if (showcasePlan.value) {
          _push(`<div class="${ssrRenderClass([isCurrent(showcasePlan.value) ? "border-blue-600 ring-2 ring-blue-100 bg-white" : "border-slate-200/90", "flex flex-col justify-between gap-4 rounded-3xl border bg-slate-50/70 p-5 sm:flex-row sm:items-center sm:px-7"])}"><div class="flex items-start gap-3.5 min-w-0"><span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 border border-blue-200/60">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:chats-teardrop-duotone",
            class: "h-5 w-5"
          }, null, _parent));
          _push(`</span><div class="min-w-0"><div class="flex flex-wrap items-center gap-2"><h4 class="text-base font-black text-slate-950">${ssrInterpolate(pricingCopy.value.showcaseBadge)}</h4>`);
          if (isCurrent(showcasePlan.value)) {
            _push(ssrRenderComponent(_component_UBadge, {
              color: "primary",
              variant: "solid",
              size: "xs"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(unref(copy).subscription.currentBadge)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(copy).subscription.currentBadge), 1)
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div><p class="mt-1 text-xs sm:text-sm text-slate-500">${ssrInterpolate(pricingCopy.value.showcaseHint)}</p></div></div><div class="flex shrink-0 items-center justify-between gap-4 sm:justify-end"><div class="flex items-baseline gap-1"><span class="text-2xl font-black tracking-tight text-slate-950">`);
          _push(ssrRenderComponent(_component_ProductPrice, { product: showcasePlan.value }, null, _parent));
          _push(`</span><span class="text-xs font-bold text-slate-500">${ssrInterpolate(unref(formatCopy)(unref(copy).subscription.perPeriod, { period: unref(formatPlanPeriod)(unref(copy), showcasePlan.value.interval, showcasePlan.value.intervalCount) }))}</span></div>`);
          if (!__props.loggedIn) {
            _push(ssrRenderComponent(_component_UButton, {
              to: signInUrl,
              size: "md",
              class: "rounded-full font-bold",
              color: "neutral",
              variant: "outline"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(unref(copy).subscription.signInToSubscribe)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(copy).subscription.signInToSubscribe), 1)
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(ssrRenderComponent(_component_ShoparkCheckoutModal, {
              "product-id": showcasePlan.value.id,
              "plan-key": showcasePlan.value.planKey,
              onSuccess: (orderId) => emit("purchased", orderId)
            }, {
              trigger: withCtx(({ loading, open }, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_component_UButton, {
                    size: "md",
                    class: "rounded-full px-5 font-bold",
                    color: isCurrent(showcasePlan.value) ? "neutral" : "primary",
                    variant: isCurrent(showcasePlan.value) ? "outline" : "soft",
                    loading,
                    onClick: open
                  }, {
                    default: withCtx((_, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(actionLabel(showcasePlan.value))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(actionLabel(showcasePlan.value)), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                } else {
                  return [
                    createVNode(_component_UButton, {
                      size: "md",
                      class: "rounded-full px-5 font-bold",
                      color: isCurrent(showcasePlan.value) ? "neutral" : "primary",
                      variant: isCurrent(showcasePlan.value) ? "outline" : "soft",
                      loading,
                      onClick: open
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(actionLabel(showcasePlan.value)), 1)
                      ]),
                      _: 1
                    }, 8, ["color", "variant", "loading", "onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent));
          }
          _push(`</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<p class="text-xs leading-6 text-slate-500">${ssrInterpolate(unref(planCopy).ai)}</p></div>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shopark/components/ShoparkPlanCards.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_6 = Object.assign(_sfc_main, { __name: "ShoparkPlanCards" });

export { __nuxt_component_6 as default };
//# sourceMappingURL=ShoparkPlanCards-DXEADjwb.mjs.map
