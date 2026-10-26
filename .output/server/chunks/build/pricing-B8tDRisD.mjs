import { u as useI18n, D as useLocaleRouter, V as useLocaleCurrency, E as useProductPricing, F as useCurrencyFormat, bg as useSeoMeta, _ as _sfc_main$W, O as __nuxt_component_3$4, bn as __nuxt_component_3$3, v as _sfc_main$o, i as _sfc_main$R } from './server.mjs';
import __nuxt_component_2 from './ShoplyCheckoutModal-BbRTNtIw.mjs';
import __nuxt_component_2$1 from './ShoplyConsultDialog-DqQPD2xx.mjs';
import { defineComponent, computed, ref, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, createTextVNode, isRef, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderAttr, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
import { u as useShoplyPlanName } from './useShoplyPlanName-ClvbNIbj.mjs';
import { u as useShoplyConsult } from './useShoplyConsult-Bc6OO7cj.mjs';
import { useRouter } from 'vue-router';
import { r as ru, e as en, a as zhHK, z as zh } from './zh-HK-C4q0Dgg9.mjs';
import { u as useShoplyAuthLinks } from './useShoplyAuthLinks-1qS_J9sZ.mjs';
import { u as useShoplyConsoleCopy, f as formatCopy } from './useShoplyConsole-qBrGWuE8.mjs';
import { u as useShoplyPlans } from './useShoplyPlans-DRsm02Gg.mjs';
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
import 'ioredis';
import 'jose';
import 'node:child_process';
import 'process';
import 'buffer';
import 'node:fs/promises';
import 'node:dns/promises';
import 'node:net';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
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
import './ShoplyLeadForm-D_0Jyd2M.mjs';
import './CaptchaSlider-BJqv3jPw.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "pricing",
  __ssrInlineRender: true,
  setup(__props) {
    const { planCopy } = useShoplyPlanName();
    const { locale } = useI18n();
    const brandName = computed(() => {
      if (locale.value === "zh-HK") return "\u8F15\u92EA";
      if (locale.value.startsWith("zh")) return "\u8F7B\u94FA";
      return "Qingpu";
    });
    const { localePath } = useLocaleRouter();
    useLocaleCurrency();
    const { productQuote } = useProductPricing();
    const { formatCurrencyAmount } = useCurrencyFormat();
    const router = useRouter();
    const localeMessages = { zh, "zh-HK": zhHK, en, ru };
    const copy = computed(() => (localeMessages[locale.value] || zh).pages.pricing);
    const { consultUrl, isOpen: isConsultOpen } = useShoplyConsult();
    const { copy: consoleCopy } = useShoplyConsoleCopy();
    const { loggedIn, signUpUrl } = useShoplyAuthLinks();
    const isBannerVisible = ref(true);
    const billingCycle = ref("yearly");
    const { plans, status, refresh } = useShoplyPlans();
    const subscribeSignInUrl = computed(() => `${localePath("/auth/login")}?redirect=${encodeURIComponent(localePath("/page/pricing"))}`);
    const handlePurchased = () => router.push(localePath("/user/subscription"));
    const formatCycle = (cycle) => {
      if (cycle === "lifetime") return copy.value.cycle.lifetime;
      const match = cycle.match(/^(\d+)_(month|year)s?$/);
      if (!match) return cycle.replaceAll("_", " ");
      const count = Number(match[1]);
      const unit = copy.value.cycle[match[2]];
      return count === 1 ? unit : `${count} ${unit}`;
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
      return plans.value.find((p) => resolvePlanGroupKey(p) === "showcase" || p.planCode === "showcase-yearly" || p.slug === "showcase-yearly") || null;
    });
    const planGroups = computed(() => {
      const map = /* @__PURE__ */ new Map();
      for (const plan of plans.value) {
        const key = resolvePlanGroupKey(plan);
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
            storeLimit: plan.storeLimit,
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
          if (plan.storeLimit !== null && existing.storeLimit === null) existing.storeLimit = plan.storeLimit;
          if (plan.features.length > existing.features.length) existing.features = plan.features;
          if (!existing.description && plan.description) existing.description = plan.description;
        }
      }
      return Array.from(map.values()).sort((a, b) => a.level - b.level);
    });
    const commercePlanGroups = computed(() => {
      return planGroups.value.filter((g) => g.key !== "showcase" && g.key !== "enterprise");
    });
    const enterpriseFeatureList = computed(() => [
      copy.value.enterpriseFeatAccount,
      copy.value.enterpriseFeatMultiStore,
      copy.value.enterpriseFeatCheckout,
      copy.value.enterpriseFeatApi,
      copy.value.enterpriseFeatZeroFee,
      copy.value.enterpriseFeatSupport
    ]);
    const displayPlans = computed(() => {
      const groups = commercePlanGroups.value;
      return groups.map((group) => {
        const isYearlyMode = billingCycle.value === "yearly";
        const activeProduct = isYearlyMode ? group.yearlyPlan || group.monthlyPlan : group.monthlyPlan || group.yearlyPlan;
        if (!activeProduct) return null;
        const isYearlyOnly = !group.monthlyPlan && Boolean(group.yearlyPlan);
        let monthlyEquivalent = "";
        let savingsAmountText = "";
        let savingsBadge = "";
        let originalAnnualPrice = "";
        if (group.monthlyPlan && group.yearlyPlan) {
          const yearlyQuote = productQuote(group.yearlyPlan);
          const monthlyQuote = productQuote(group.monthlyPlan);
          if (yearlyQuote.amount > 0 && monthlyQuote.amount > 0) {
            const annualFromMonthly = monthlyQuote.amount * 12;
            const savingsAmount = Math.max(0, annualFromMonthly - yearlyQuote.amount);
            const monthlyEquivalentAmount = Math.round(yearlyQuote.amount / 12);
            if (savingsAmount > 0) {
              const discountPercent = Math.round(savingsAmount / annualFromMonthly * 100);
              savingsBadge = discountPercent > 0 ? formatCopy(copy.value.saveYearlyPercent, { percent: discountPercent }) : copy.value.saveBadge;
              savingsAmountText = formatCopy(copy.value.saveYearlyAmount, {
                amount: formatCurrencyAmount(savingsAmount, yearlyQuote.currency)
              });
              originalAnnualPrice = formatCurrencyAmount(annualFromMonthly, yearlyQuote.currency);
            }
            monthlyEquivalent = formatCopy(copy.value.monthlyEquivalent, {
              price: formatCurrencyAmount(monthlyEquivalentAmount, yearlyQuote.currency)
            });
          }
        }
        const { eyebrow, displayTitle } = splitPlanTitle(group.name, group.key);
        const rawFeatures = activeProduct.features.length ? activeProduct.features : group.features;
        return {
          key: group.key,
          id: activeProduct.id,
          slug: activeProduct.slug,
          name: group.name,
          eyebrow,
          displayTitle,
          description: activeProduct.description || group.description,
          badge: group.badge || activeProduct.badge,
          featured: group.featured,
          activeProduct,
          storeLimit: group.storeLimit,
          features: normalizeFeatureList(rawFeatures),
          isYearlyOnly,
          monthlyEquivalent,
          savingsAmountText,
          savingsBadge,
          originalAnnualPrice
        };
      }).filter((p) => Boolean(p));
    });
    useSeoMeta({
      title: () => copy.value.seoTitle,
      description: () => copy.value.seoDescription,
      keywords: () => copy.value.seoKeywords,
      ogTitle: () => copy.value.seoTitle,
      ogDescription: () => copy.value.seoDescription,
      ogType: "website",
      twitterCard: "summary_large_image",
      twitterTitle: () => copy.value.seoTitle,
      twitterDescription: () => copy.value.seoDescription
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIcon = _sfc_main$W;
      const _component_NuxtLink = __nuxt_component_3$4;
      const _component_ProductPrice = __nuxt_component_3$3;
      const _component_ShoplyCheckoutModal = __nuxt_component_2;
      const _component_UAlert = _sfc_main$o;
      const _component_UButton = _sfc_main$R;
      const _component_ShoplyConsultDialog = __nuxt_component_2$1;
      _push(`<!--[--><div class="bg-slate-50">`);
      if (isBannerVisible.value) {
        _push(`<div class="relative z-20 border-b border-blue-500/25 bg-gradient-to-r from-slate-950 via-[#061b69] to-slate-950 text-white shadow-sm"><div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.22),transparent_55%)]"></div><div class="relative mx-auto flex max-w-[1440px] flex-col gap-3 px-5 py-3 pr-11 sm:px-8 sm:py-3.5 lg:min-h-[88px] lg:flex-row lg:items-center lg:justify-between lg:pr-8"><div class="flex flex-wrap items-center gap-2.5 sm:gap-3.5"><span class="inline-flex items-center gap-1.5 rounded-full border border-blue-400/35 bg-blue-500/20 px-3 py-1 text-xs font-black text-blue-200">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:rocket-launch-fill",
          class: "h-3.5 w-3.5 text-blue-400"
        }, null, _parent));
        _push(` ${ssrInterpolate(copy.value.trialBadge)}</span><div class="text-xs sm:text-sm"><span class="font-extrabold text-white">${ssrInterpolate(copy.value.trialTitle)}</span><span class="hidden xl:inline text-blue-200/80 ml-2">\xB7 ${ssrInterpolate(copy.value.trialDescription)}</span></div>`);
        if (unref(loggedIn)) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(localePath)("/user/stores"),
            class: "inline-flex shrink-0 items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-xs font-black text-slate-950 shadow-sm transition hover:bg-blue-50 active:scale-95"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span${_scopeId}>${ssrInterpolate(unref(consoleCopy).nav.stores)}</span>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:arrow-right-bold",
                  class: "h-3 w-3"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode("span", null, toDisplayString(unref(consoleCopy).nav.stores), 1),
                  createVNode(_component_UIcon, {
                    name: "ph:arrow-right-bold",
                    class: "h-3 w-3"
                  })
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(signUpUrl),
            class: "inline-flex shrink-0 items-center gap-1.5 rounded-full bg-blue-600 px-4 py-1.5 text-xs font-black text-white shadow-md shadow-blue-600/30 transition hover:bg-blue-500 active:scale-95"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span${_scopeId}>${ssrInterpolate(copy.value.trialAction)}</span>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:arrow-right-bold",
                  class: "h-3 w-3"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode("span", null, toDisplayString(copy.value.trialAction), 1),
                  createVNode(_component_UIcon, {
                    name: "ph:arrow-right-bold",
                    class: "h-3 w-3"
                  })
                ];
              }
            }),
            _: 1
          }, _parent));
        }
        _push(`</div>`);
        if (showcasePlan.value) {
          _push(`<div class="hidden lg:block h-7 w-px shrink-0 bg-white/15"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex items-center justify-between gap-4 lg:justify-end">`);
        if (showcasePlan.value) {
          _push(`<div class="flex flex-wrap items-center gap-2.5 sm:gap-3"><span class="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-xs font-black text-white">${ssrInterpolate(copy.value.showcaseBadge)}</span><div class="text-xs sm:text-sm"><strong class="font-black text-amber-300">`);
          _push(ssrRenderComponent(_component_ProductPrice, { product: showcasePlan.value }, null, _parent));
          _push(`</strong><span class="text-blue-200/80 font-bold"> / ${ssrInterpolate(formatCycle(showcasePlan.value.cycle))}</span><span class="hidden 2xl:inline text-xs text-blue-200/75 ml-2">\xB7 ${ssrInterpolate(copy.value.showcaseHint)}</span></div>`);
          if (unref(loggedIn)) {
            _push(ssrRenderComponent(_component_ShoplyCheckoutModal, {
              "product-id": showcasePlan.value.id,
              "plan-key": showcasePlan.value.planKey,
              onSuccess: handlePurchased
            }, {
              trigger: withCtx(({ loading, open }, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<button type="button" class="inline-flex shrink-0 items-center gap-1 rounded-full border border-white/25 bg-white/15 px-3.5 py-1.5 text-xs font-black text-white transition hover:bg-white/25 active:scale-95 cursor-pointer disabled:opacity-60"${ssrIncludeBooleanAttr(loading) ? " disabled" : ""}${_scopeId}>`);
                  if (loading) {
                    _push2(ssrRenderComponent(_component_UIcon, {
                      name: "ph:spinner-gap-bold",
                      class: "h-3.5 w-3.5 animate-spin"
                    }, null, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`<span${_scopeId}>${ssrInterpolate(copy.value.showcaseAction)}</span>`);
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: "ph:arrow-right-bold",
                    class: "h-3 w-3"
                  }, null, _parent2, _scopeId));
                  _push2(`</button>`);
                } else {
                  return [
                    createVNode("button", {
                      type: "button",
                      class: "inline-flex shrink-0 items-center gap-1 rounded-full border border-white/25 bg-white/15 px-3.5 py-1.5 text-xs font-black text-white transition hover:bg-white/25 active:scale-95 cursor-pointer disabled:opacity-60",
                      disabled: loading,
                      onClick: open
                    }, [
                      loading ? (openBlock(), createBlock(_component_UIcon, {
                        key: 0,
                        name: "ph:spinner-gap-bold",
                        class: "h-3.5 w-3.5 animate-spin"
                      })) : createCommentVNode("", true),
                      createVNode("span", null, toDisplayString(copy.value.showcaseAction), 1),
                      createVNode(_component_UIcon, {
                        name: "ph:arrow-right-bold",
                        class: "h-3 w-3"
                      })
                    ], 8, ["disabled", "onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: subscribeSignInUrl.value,
              class: "inline-flex shrink-0 items-center gap-1 rounded-full border border-white/25 bg-white/15 px-3.5 py-1.5 text-xs font-black text-white transition hover:bg-white/25 active:scale-95"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<span${_scopeId}>${ssrInterpolate(copy.value.showcaseAction)}</span>`);
                  _push2(ssrRenderComponent(_component_UIcon, {
                    name: "ph:arrow-right-bold",
                    class: "h-3 w-3"
                  }, null, _parent2, _scopeId));
                } else {
                  return [
                    createVNode("span", null, toDisplayString(copy.value.showcaseAction), 1),
                    createVNode(_component_UIcon, {
                      name: "ph:arrow-right-bold",
                      class: "h-3 w-3"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent));
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<button type="button" class="absolute right-3 top-3 lg:static shrink-0 rounded-full p-1.5 text-white/60 transition hover:bg-white/10 hover:text-white cursor-pointer"${ssrRenderAttr("title", unref(consoleCopy).common.close || "Close")}>`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:x-bold",
          class: "h-4 w-4"
        }, null, _parent));
        _push(`</button></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="px-5 py-14 sm:px-8 sm:py-20"><div class="mx-auto max-w-[1440px]"><div class="mx-auto max-w-3xl text-center"><p class="text-sm font-black tracking-[0.18em] text-blue-600 uppercase">${ssrInterpolate(brandName.value)} Pricing</p><h1 class="mt-3 text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">${ssrInterpolate(copy.value.title)}</h1><p class="mt-4 text-base leading-7 text-slate-600 sm:text-lg">${ssrInterpolate(copy.value.description)}</p></div><div class="mt-10 flex flex-col items-center"><div class="inline-flex items-center rounded-full border border-slate-200 bg-white p-1 shadow-xs"><button type="button" class="${ssrRenderClass([billingCycle.value === "monthly" ? "bg-slate-950 text-white shadow-xs" : "text-slate-500 hover:text-slate-950", "rounded-full px-7 py-2 text-xs sm:text-sm font-black transition-all cursor-pointer"])}">${ssrInterpolate(copy.value.tabMonthly)}</button><button type="button" class="${ssrRenderClass([billingCycle.value === "yearly" ? "bg-blue-600 text-white shadow-md shadow-blue-600/25" : "text-slate-500 hover:text-slate-950", "flex items-center gap-2 rounded-full px-7 py-2 text-xs sm:text-sm font-black transition-all cursor-pointer"])}"><span>${ssrInterpolate(copy.value.tabYearly)}</span><span class="${ssrRenderClass([billingCycle.value === "yearly" ? "bg-emerald-400 text-slate-950" : "bg-emerald-100 text-emerald-800", "rounded-full px-2 py-0.5 text-[10px] font-black transition-colors"])}">${ssrInterpolate(copy.value.saveBadge)}</span></button></div><p class="mt-2.5 text-xs font-medium text-slate-500">${ssrInterpolate(billingCycle.value === "yearly" ? copy.value.yearlyHint : copy.value.monthlyHint)}</p></div>`);
      if (unref(status) === "pending") {
        _push(`<div class="flex justify-center py-24">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:spinner-gap-bold",
          class: "h-10 w-10 animate-spin text-blue-600"
        }, null, _parent));
        _push(`</div>`);
      } else if (unref(status) === "error") {
        _push(ssrRenderComponent(_component_UAlert, {
          color: "error",
          variant: "subtle",
          title: unref(consoleCopy).subscription.loadFailed,
          class: "mt-14"
        }, {
          actions: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UButton, {
                color: "neutral",
                variant: "outline",
                onClick: ($event) => unref(refresh)()
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(consoleCopy).common.retry)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(consoleCopy).common.retry), 1)
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
                  onClick: ($event) => unref(refresh)()
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(consoleCopy).common.retry), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else if (displayPlans.value.length) {
        _push(`<div class="mt-10 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-4"><!--[-->`);
        ssrRenderList(displayPlans.value, (plan) => {
          _push(`<article class="${ssrRenderClass([[
            plan.featured ? "border-blue-500 ring-2 ring-blue-500/20 shadow-lg shadow-blue-900/5" : "border-slate-200"
          ], "relative flex min-w-0 flex-col justify-between rounded-[2rem] border bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"])}">`);
          if (plan.featured) {
            _push(`<span class="absolute -top-3.5 left-7 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-1 text-xs font-black text-white shadow-md shadow-blue-600/30"> \u2605 ${ssrInterpolate(plan.badge || copy.value.mostPopular)}</span>`);
          } else if (plan.badge) {
            _push(`<span class="absolute -top-3.5 left-7 rounded-full bg-blue-600 px-4 py-1 text-xs font-black text-white shadow-md shadow-blue-600/30">${ssrInterpolate(plan.badge)}</span>`);
          } else {
            _push(`<!---->`);
          }
          if (billingCycle.value === "yearly" && plan.savingsBadge) {
            _push(`<span class="absolute -top-3.5 right-7 rounded-full bg-emerald-500 px-3 py-1 text-[11px] font-black text-white shadow-xs">${ssrInterpolate(plan.savingsBadge)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div><p class="${ssrRenderClass([plan.featured ? "text-blue-600" : "text-slate-400", "text-xs font-black tracking-[0.14em] uppercase"])}">${ssrInterpolate(plan.eyebrow)}</p><h2 class="mt-1.5 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">${ssrInterpolate(plan.displayTitle)}</h2><p class="mt-2.5 min-h-[44px] text-xs sm:text-sm leading-relaxed text-slate-600">${ssrInterpolate(plan.description)}</p><div class="mt-5 flex min-h-[72px] flex-col justify-center"><div class="flex flex-wrap items-baseline gap-1.5"><span class="text-3xl font-black tracking-[-0.04em] text-slate-950 sm:text-4xl">`);
          _push(ssrRenderComponent(_component_ProductPrice, {
            product: plan.activeProduct
          }, null, _parent));
          _push(`</span><span class="text-xs font-bold text-slate-500"> / ${ssrInterpolate(formatCycle(plan.activeProduct.cycle))}</span></div><div class="mt-1.5 flex min-h-[22px] flex-wrap items-center gap-2">`);
          if (billingCycle.value === "yearly" && plan.monthlyEquivalent) {
            _push(`<!--[--><span class="inline-flex items-center rounded-full border border-blue-200/60 bg-blue-50 px-2 py-0.5 text-[11px] font-extrabold text-blue-700">${ssrInterpolate(plan.monthlyEquivalent)}</span>`);
            if (plan.savingsAmountText) {
              _push(`<span class="text-xs font-bold text-emerald-600">${ssrInterpolate(plan.savingsAmountText)}</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<!--]-->`);
          } else if (plan.isYearlyOnly && billingCycle.value === "monthly") {
            _push(`<span class="inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-bold text-slate-600">${ssrInterpolate(copy.value.yearlyOnlyBadge)}</span>`);
          } else {
            _push(`<span class="text-xs font-medium text-slate-400">${ssrInterpolate(billingCycle.value === "yearly" ? copy.value.billedAnnually : copy.value.billedMonthly)}</span>`);
          }
          _push(`</div></div><div class="my-5 border-t border-slate-100"></div><div><p class="text-xs font-black tracking-wide text-slate-900">${ssrInterpolate(copy.value.included)}</p><ul class="mt-3.5 space-y-3"><!--[-->`);
          ssrRenderList(plan.features, (feature) => {
            _push(`<li class="${ssrRenderClass([feature.included ? "text-slate-700" : "text-slate-400 line-through", "flex items-start gap-2.5 text-xs sm:text-sm leading-5"])}">`);
            _push(ssrRenderComponent(_component_UIcon, {
              name: feature.included ? "ph:check-circle-fill" : "ph:x-circle",
              class: ["mt-0.5 h-4 w-4 shrink-0", feature.included ? "text-emerald-500" : "text-slate-300"]
            }, null, _parent));
            _push(`<span>${ssrInterpolate(feature.name)}</span></li>`);
          });
          _push(`<!--]--></ul></div></div><div class="mt-8 pt-2">`);
          if (unref(loggedIn)) {
            _push(ssrRenderComponent(_component_ShoplyCheckoutModal, {
              "product-id": plan.id,
              onSuccess: handlePurchased
            }, {
              trigger: withCtx(({ loading, open }, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<button type="button" class="${ssrRenderClass([[
                    plan.featured ? "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/25" : "bg-slate-900 text-white hover:bg-slate-800"
                  ], "inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-center text-sm font-black shadow-sm transition-all active:scale-95 disabled:opacity-60 cursor-pointer"])}"${ssrIncludeBooleanAttr(loading) ? " disabled" : ""}${_scopeId}>`);
                  if (loading) {
                    _push2(ssrRenderComponent(_component_UIcon, {
                      name: "ph:spinner-gap-bold",
                      class: "h-4 w-4 animate-spin"
                    }, null, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(` ${ssrInterpolate(copy.value.action)}</button>`);
                } else {
                  return [
                    createVNode("button", {
                      type: "button",
                      class: ["inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-center text-sm font-black shadow-sm transition-all active:scale-95 disabled:opacity-60 cursor-pointer", [
                        plan.featured ? "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/25" : "bg-slate-900 text-white hover:bg-slate-800"
                      ]],
                      disabled: loading,
                      onClick: open
                    }, [
                      loading ? (openBlock(), createBlock(_component_UIcon, {
                        key: 0,
                        name: "ph:spinner-gap-bold",
                        class: "h-4 w-4 animate-spin"
                      })) : createCommentVNode("", true),
                      createTextVNode(" " + toDisplayString(copy.value.action), 1)
                    ], 10, ["disabled", "onClick"])
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: subscribeSignInUrl.value,
              class: ["inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-center text-sm font-black shadow-sm transition-all active:scale-95", [
                plan.featured ? "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/25" : "bg-slate-900 text-white hover:bg-slate-800"
              ]]
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(copy.value.action)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(copy.value.action), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          }
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(localePath)(`/products/${plan.slug}`),
            class: "mt-3 block w-full text-center text-xs font-bold text-slate-400 transition-colors hover:text-blue-600"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(consoleCopy).subscription.details)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(consoleCopy).subscription.details), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></article>`);
        });
        _push(`<!--]--><article class="relative flex min-w-0 flex-col justify-between overflow-hidden rounded-[2rem] border border-blue-400/30 bg-gradient-to-b from-[#0b38d0] via-[#051c78] to-[#020b33] p-7 text-white shadow-2xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_25px_60px_rgba(11,56,208,0.35)]"><div class="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-400/20 blur-3xl"></div><div><p class="text-xs font-black tracking-[0.14em] text-blue-200 uppercase">${ssrInterpolate(copy.value.enterpriseBadge)}</p><h2 class="mt-1.5 text-2xl font-black tracking-tight text-white sm:text-3xl">${ssrInterpolate(copy.value.enterpriseTitle)}</h2><p class="mt-2.5 min-h-[44px] whitespace-pre-line text-xs sm:text-sm leading-relaxed text-blue-100/90">${ssrInterpolate(copy.value.enterpriseDesc)}</p><div class="mt-5 flex min-h-[72px] flex-col justify-center"><div class="text-2xl font-black tracking-tight text-white sm:text-3xl">${ssrInterpolate(copy.value.enterprisePrice)}</div><div class="mt-1.5 flex min-h-[22px] items-center"><span class="text-xs font-medium text-blue-200/80">${ssrInterpolate(copy.value.enterprisePriceSub)}</span></div></div><div class="my-5 border-t border-white/20"></div><div><p class="text-xs font-black tracking-wide text-white">${ssrInterpolate(copy.value.enterpriseFeatureTitle)}</p><ul class="mt-3.5 space-y-3 text-xs sm:text-sm font-medium leading-5 text-white/95"><!--[-->`);
        ssrRenderList(enterpriseFeatureList.value, (feature) => {
          _push(`<li class="flex items-start gap-2.5">`);
          _push(ssrRenderComponent(_component_UIcon, {
            name: "ph:check-circle-fill",
            class: "mt-0.5 h-4 w-4 shrink-0 text-blue-300"
          }, null, _parent));
          _push(`<span>${ssrInterpolate(feature)}</span></li>`);
        });
        _push(`<!--]--></ul></div></div><div class="mt-8 pt-2"><button type="button" class="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-center text-sm font-black text-[#0b38d0] shadow-xl shadow-black/20 transition-all hover:bg-blue-50 hover:scale-[1.01] active:scale-95 cursor-pointer"><span>${ssrInterpolate(copy.value.enterpriseAction)}</span></button><button type="button" class="mt-3 block w-full text-center text-xs font-bold text-blue-200/80 transition-colors hover:text-white cursor-pointer">${ssrInterpolate(copy.value.enterpriseSubAction)}</button></div></article></div>`);
      } else {
        _push(`<div class="mx-auto mt-14 max-w-2xl rounded-[2rem] border border-slate-200 bg-white p-10 text-center shadow-sm">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:package-duotone",
          class: "mx-auto h-14 w-14 text-blue-500"
        }, null, _parent));
        _push(`<h2 class="mt-5 text-2xl font-black text-slate-950">${ssrInterpolate(copy.value.emptyTitle)}</h2><p class="mt-3 text-sm leading-7 text-slate-600">${ssrInterpolate(copy.value.emptyDescription)}</p><a${ssrRenderAttr("href", unref(consultUrl))} class="mt-7 inline-flex rounded-full bg-blue-600 px-7 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700 hover:-translate-y-0.5 active:scale-95">${ssrInterpolate(copy.value.contact)}</a></div>`);
      }
      if (unref(plans).length) {
        _push(`<p class="mt-6 text-xs leading-6 text-slate-500">${ssrInterpolate(unref(planCopy).ai)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mt-20 border-t border-slate-200/80 pt-16"><div class="mx-auto max-w-2xl text-center"><p class="text-xs font-black tracking-[0.18em] text-blue-600 uppercase">${ssrInterpolate(copy.value.faqLabel)}</p><h2 class="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">${ssrInterpolate(copy.value.faqTitle)}</h2></div><div class="mt-10 grid gap-6 md:grid-cols-2"><!--[-->`);
      ssrRenderList(copy.value.faqs, (item, idx) => {
        _push(`<div class="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-2xs"><h3 class="flex items-start gap-2.5 text-base font-black text-slate-950">`);
        _push(ssrRenderComponent(_component_UIcon, {
          name: "ph:question-fill",
          class: "mt-0.5 h-5 w-5 shrink-0 text-blue-600"
        }, null, _parent));
        _push(`<span>${ssrInterpolate(item.q)}</span></h3><p class="mt-2.5 pl-7 text-xs sm:text-sm leading-relaxed text-slate-600">${ssrInterpolate(item.a)}</p></div>`);
      });
      _push(`<!--]--></div></div></div></div></div>`);
      _push(ssrRenderComponent(_component_ShoplyConsultDialog, {
        open: unref(isConsultOpen),
        "onUpdate:open": ($event) => isRef(isConsultOpen) ? isConsultOpen.value = $event : null,
        source: "pricing"
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shoply/pages/page/pricing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=pricing-B8tDRisD.mjs.map
