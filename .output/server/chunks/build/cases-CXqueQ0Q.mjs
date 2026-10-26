import { e as useToast, v as _sfc_main$o, _ as _sfc_main$W, i as _sfc_main$R, G as _sfc_main$n, b as _sfc_main$v, l as _sfc_main$u, k as _sfc_main$M, n as _sfc_main$G, a as _sfc_main$w, c as _sfc_main$r } from './server.mjs';
import { _ as _sfc_main$1 } from './Switch-ABf4y-g_.mjs';
import { defineComponent, defineAsyncComponent, ref, computed, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderAttr } from 'vue/server-renderer';
import { d as defaultShoplyCases } from './cases-D3C6Yoau.mjs';
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
  __name: "cases",
  __ssrInlineRender: true,
  setup(__props) {
    const RichEditor = defineAsyncComponent(() => import('./RichEditor-CbpDc1nF.mjs'));
    const toast = useToast();
    const list = ref([]);
    const stats = ref({
      total: 0,
      published: 0,
      featured: 0,
      categoriesCount: 0
    });
    const loading = ref(false);
    const saving = ref(false);
    const modalSaving = ref(false);
    const deleting = ref(false);
    const resetting = ref(false);
    const errorMsg = ref("");
    const isUploadingCover = ref(false);
    const coverFileInput = ref(null);
    const triggerCoverUpload = () => {
      var _a;
      (_a = coverFileInput.value) == null ? void 0 : _a.click();
    };
    const handleCoverFileChange = async (event) => {
      var _a, _b;
      const target = event.target;
      const file = (_a = target.files) == null ? void 0 : _a[0];
      if (!file) return;
      isUploadingCover.value = true;
      try {
        const formData = new FormData();
        formData.append("files", file);
        const res = await $fetch("/api/admin/upload", {
          method: "POST",
          body: formData
        });
        const uploadedUrl = ((_b = res == null ? void 0 : res.urls) == null ? void 0 : _b[0]) || (res == null ? void 0 : res.url);
        if (uploadedUrl && editingItem.value) {
          editingItem.value.coverImage = uploadedUrl;
          toast.add({ title: "\u5C01\u9762\u56FE\u7247\u4E0A\u4F20\u6210\u529F", color: "success" });
        }
      } catch (err) {
        toast.add({
          title: "\u5C01\u9762\u4E0A\u4F20\u5931\u8D25",
          description: (err == null ? void 0 : err.message) || "\u8BF7\u91CD\u8BD5",
          color: "error"
        });
      } finally {
        isUploadingCover.value = false;
        if (coverFileInput.value) coverFileInput.value.value = "";
      }
    };
    const searchQuery = ref("");
    const selectedCategory = ref("all");
    const selectedStatus = ref("all");
    const categoryFilterOptions = [
      { label: "\u5168\u90E8\u5206\u7C7B", value: "all" },
      { label: "\u5916\u8D38 B2B \u5236\u9020", value: "b2b" },
      { label: "\u4E9A\u9A6C\u900A\u54C1\u724C\u5356\u5BB6", value: "amazon" },
      { label: "\u5782\u76F4\u54C1\u7C7B DTC", value: "dtc" },
      { label: "\u8DE8\u5883\u7EFC\u5408\u96F6\u552E", value: "retail" }
    ];
    const statusFilterOptions = [
      { label: "\u5168\u90E8\u72B6\u6001", value: "all" },
      { label: "\u5DF2\u4E0A\u67B6", value: "1" },
      { label: "\u8349\u7A3F\u4E0B\u67B6", value: "0" }
    ];
    const categorySelectOptions = [
      { label: "\u5916\u8D38 B2B \u5236\u9020\u4F01\u4E1A (b2b)", value: "b2b" },
      { label: "\u4E9A\u9A6C\u900A\u54C1\u724C\u5356\u5BB6 (amazon)", value: "amazon" },
      { label: "\u5782\u76F4\u54C1\u7C7B DTC \u54C1\u724C (dtc)", value: "dtc" },
      { label: "\u8DE8\u5883\u7EFC\u5408\u96F6\u552E (retail)", value: "retail" }
    ];
    const categoryBadgeColor = (cat) => {
      switch (cat) {
        case "b2b":
          return "primary";
        case "amazon":
          return "warning";
        case "dtc":
          return "success";
        case "retail":
          return "info";
        default:
          return "neutral";
      }
    };
    const getCategoryLabel = (cat) => {
      switch (cat) {
        case "b2b":
          return "\u5916\u8D38 B2B \u5236\u9020\u4F01\u4E1A";
        case "amazon":
          return "\u4E9A\u9A6C\u900A\u54C1\u724C\u5356\u5BB6";
        case "dtc":
          return "\u5782\u76F4\u54C1\u7C7B DTC \u54C1\u724C";
        case "retail":
          return "\u8DE8\u5883\u7EFC\u5408\u96F6\u552E";
        default:
          return cat;
      }
    };
    const onCategoryChange = (val) => {
      if (!editingItem.value) return;
      editingItem.value.categoryLabel = getCategoryLabel(val);
    };
    const loadData = async () => {
      loading.value = true;
      errorMsg.value = "";
      try {
        const res = await $fetch("/api/admin/shoply/cases");
        if (res && Array.isArray(res.cases)) {
          list.value = res.cases;
          stats.value = res.stats || {
            total: res.cases.length,
            published: res.cases.filter((c) => c.status === 1).length,
            featured: res.cases.filter((c) => c.isFeatured).length,
            categoriesCount: new Set(res.cases.map((c) => c.category)).size
          };
          return;
        }
      } catch (err) {
        errorMsg.value = (err == null ? void 0 : err.message) || "\u8BFB\u53D6\u6848\u4F8B\u6570\u636E\u5E93\u5931\u8D25";
        list.value = defaultShoplyCases.map((c) => ({ ...c }));
        stats.value = {
          total: list.value.length,
          published: list.value.filter((c) => c.status === 1).length,
          featured: list.value.filter((c) => c.isFeatured).length,
          categoriesCount: new Set(list.value.map((c) => c.category)).size
        };
      } finally {
        loading.value = false;
      }
    };
    const filteredList = computed(() => {
      let result = list.value;
      if (selectedCategory.value !== "all") {
        result = result.filter((item) => item.category === selectedCategory.value);
      }
      if (selectedStatus.value !== "all") {
        const targetStatus = Number(selectedStatus.value);
        result = result.filter((item) => item.status === targetStatus);
      }
      if (searchQuery.value.trim()) {
        const q = searchQuery.value.trim().toLowerCase();
        result = result.filter(
          (item) => item.title.toLowerCase().includes(q) || item.subtitle && item.subtitle.toLowerCase().includes(q) || item.clientName.toLowerCase().includes(q) || item.categoryLabel.toLowerCase().includes(q) || item.industry && item.industry.toLowerCase().includes(q) || item.summary.toLowerCase().includes(q) || item.tags.some((t) => t.toLowerCase().includes(q))
        );
      }
      return result;
    });
    const moveUp = (index) => {
      if (index <= 0) return;
      const current = filteredList.value[index];
      const prev = filteredList.value[index - 1];
      if (!current || !prev) return;
      const temp = current.sortOrder;
      current.sortOrder = prev.sortOrder;
      prev.sortOrder = temp;
      list.value.sort((a, b) => a.sortOrder - b.sortOrder);
    };
    const moveDown = (index) => {
      if (index >= filteredList.value.length - 1) return;
      const current = filteredList.value[index];
      const next = filteredList.value[index + 1];
      if (!current || !next) return;
      const temp = current.sortOrder;
      current.sortOrder = next.sortOrder;
      next.sortOrder = temp;
      list.value.sort((a, b) => a.sortOrder - b.sortOrder);
    };
    const toggleFeatured = (item) => {
      item.isFeatured = !item.isFeatured;
      void saveSingle(item, false);
    };
    const toggleStatus = (item) => {
      item.status = item.status === 1 ? 0 : 1;
      void saveSingle(item, false);
    };
    const isEditModalOpen = ref(false);
    const isEditingNew = ref(false);
    const editingItem = ref(null);
    const tagsInput = ref("");
    const openAddModal = () => {
      isEditingNew.value = true;
      const maxOrder = list.value.reduce((max, c) => Math.max(max, c.sortOrder), 0);
      editingItem.value = {
        id: `case-${Date.now().toString(36)}`,
        title: "",
        subtitle: "",
        clientName: "",
        category: "b2b",
        categoryLabel: "\u5916\u8D38 B2B \u5236\u9020\u4F01\u4E1A",
        industry: "",
        coverImage: "/themes/shoply/assets/cases/case-b2b.png",
        logoUrl: "",
        summary: "",
        content: "",
        metricValue: "+200%",
        metricLabel: "\u7EFC\u5408\u6548\u76CA\u63D0\u5347",
        secondaryMetricValue: "",
        secondaryMetricLabel: "",
        deliveryPeriod: "1 \u5468",
        tags: ["\u72EC\u7ACB\u7AD9\u4EA4\u4ED8", "\u591A\u8BED\u79CD\u672C\u5730\u5316"],
        websiteUrl: "https://demo.iqingpu.com",
        isFeatured: false,
        status: 1,
        sortOrder: maxOrder + 10,
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      tagsInput.value = editingItem.value.tags.join(", ");
      isEditModalOpen.value = true;
    };
    const openEditModal = (item) => {
      isEditingNew.value = false;
      editingItem.value = {
        id: item.id,
        title: item.title,
        subtitle: item.subtitle || "",
        clientName: item.clientName,
        category: item.category,
        categoryLabel: item.categoryLabel,
        industry: item.industry || "",
        coverImage: item.coverImage || "",
        logoUrl: item.logoUrl || "",
        summary: item.summary,
        content: item.content || "",
        metricValue: item.metricValue,
        metricLabel: item.metricLabel,
        secondaryMetricValue: item.secondaryMetricValue || "",
        secondaryMetricLabel: item.secondaryMetricLabel || "",
        deliveryPeriod: item.deliveryPeriod || "",
        tags: Array.isArray(item.tags) ? [...item.tags] : [],
        websiteUrl: item.websiteUrl || "",
        isFeatured: Boolean(item.isFeatured),
        status: item.status,
        sortOrder: item.sortOrder,
        createdAt: item.createdAt,
        updatedAt: item.updatedAt
      };
      tagsInput.value = editingItem.value.tags.join(", ");
      isEditModalOpen.value = true;
    };
    const saveModalItem = async () => {
      var _a;
      if (!editingItem.value) return;
      if (!editingItem.value.id.trim()) {
        toast.add({ title: "\u8BF7\u8F93\u5165\u6848\u4F8B\u552F\u4E00\u6807\u8BC6 ID", color: "error" });
        return;
      }
      if (!editingItem.value.title.trim()) {
        toast.add({ title: "\u8BF7\u8F93\u5165\u6848\u4F8B\u4E3B\u6807\u9898", color: "error" });
        return;
      }
      if (!editingItem.value.clientName.trim()) {
        toast.add({ title: "\u8BF7\u8F93\u5165\u5BA2\u6237\u6216\u54C1\u724C\u540D\u79F0", color: "error" });
        return;
      }
      if (!editingItem.value.summary.trim()) {
        toast.add({ title: "\u8BF7\u8F93\u5165\u6848\u4F8B\u6838\u5FC3\u6458\u8981", color: "error" });
        return;
      }
      editingItem.value.tags = tagsInput.value.split(/[,，]/).map((s) => s.trim()).filter(Boolean);
      const form = editingItem.value;
      const toSave = {
        id: form.id.trim(),
        title: form.title.trim(),
        subtitle: form.subtitle.trim() || null,
        clientName: form.clientName.trim(),
        category: form.category,
        categoryLabel: ((_a = form.categoryLabel) == null ? void 0 : _a.trim()) || getCategoryLabel(form.category),
        industry: form.industry.trim() || null,
        coverImage: form.coverImage.trim() || null,
        logoUrl: form.logoUrl.trim() || null,
        summary: form.summary.trim(),
        content: form.content.trim() || null,
        metricValue: form.metricValue.trim(),
        metricLabel: form.metricLabel.trim(),
        secondaryMetricValue: form.secondaryMetricValue.trim() || null,
        secondaryMetricLabel: form.secondaryMetricLabel.trim() || null,
        deliveryPeriod: form.deliveryPeriod.trim() || null,
        tags: form.tags,
        websiteUrl: form.websiteUrl.trim() || null,
        isFeatured: form.isFeatured,
        status: form.status,
        sortOrder: form.sortOrder,
        createdAt: form.createdAt || (/* @__PURE__ */ new Date()).toISOString(),
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      modalSaving.value = true;
      try {
        await saveSingle(toSave, true);
        isEditModalOpen.value = false;
      } finally {
        modalSaving.value = false;
      }
    };
    const saveSingle = async (caseItem, showToast = true) => {
      try {
        const res = await $fetch("/api/admin/shoply/cases", {
          method: "POST",
          body: caseItem
        });
        if (res.ok && res.case) {
          const idx = list.value.findIndex((c) => c.id === res.case.id);
          if (idx >= 0) {
            list.value[idx] = res.case;
          } else {
            list.value.push(res.case);
          }
          if (res.stats) stats.value = res.stats;
          if (showToast) {
            toast.add({ title: "\u6848\u4F8B\u4FDD\u5B58\u6210\u529F\uFF0C\u5DF2\u540C\u6B65\u81F3\u6570\u636E\u5E93", color: "success" });
          }
        }
      } catch (err) {
        toast.add({
          title: "\u4FDD\u5B58\u5931\u8D25",
          description: (err == null ? void 0 : err.message) || String(err),
          color: "error"
        });
      }
    };
    const saveBatch = async () => {
      saving.value = true;
      try {
        const res = await $fetch("/api/admin/shoply/cases", {
          method: "POST",
          body: {
            action: "batch",
            cases: list.value
          }
        });
        if (res.ok) {
          if (res.cases) list.value = res.cases;
          if (res.stats) stats.value = res.stats;
          toast.add({ title: "\u5DF2\u6210\u529F\u4FDD\u5B58\u6240\u6709\u6539\u52A8\u81F3\u6570\u636E\u5E93", color: "success" });
        }
      } catch (err) {
        toast.add({
          title: "\u6279\u91CF\u4FDD\u5B58\u5931\u8D25",
          description: (err == null ? void 0 : err.message) || String(err),
          color: "error"
        });
      } finally {
        saving.value = false;
      }
    };
    const isDeleteModalOpen = ref(false);
    const deletingItem = ref(null);
    const openDeleteModal = (item) => {
      deletingItem.value = item;
      isDeleteModalOpen.value = true;
    };
    const confirmDelete = async () => {
      if (!deletingItem.value) return;
      deleting.value = true;
      try {
        await $fetch(`/api/admin/shoply/cases/${deletingItem.value.id}`, {
          method: "DELETE"
        });
        list.value = list.value.filter((c) => c.id !== deletingItem.value.id);
        stats.value.total = list.value.length;
        stats.value.published = list.value.filter((c) => c.status === 1).length;
        stats.value.featured = list.value.filter((c) => c.isFeatured).length;
        stats.value.categoriesCount = new Set(list.value.map((c) => c.category)).size;
        toast.add({ title: "\u6848\u4F8B\u5DF2\u6210\u529F\u5220\u9664", color: "success" });
        isDeleteModalOpen.value = false;
      } catch (err) {
        toast.add({
          title: "\u5220\u9664\u5931\u8D25",
          description: (err == null ? void 0 : err.message) || String(err),
          color: "error"
        });
      } finally {
        deleting.value = false;
      }
    };
    const confirmResetToDefault = async () => {
      if (!confirm("\u786E\u5B9A\u8981\u6062\u590D\u81F3\u5B98\u65B9\u63A8\u8350\u6848\u4F8B\u9884\u8BBE\u5417\uFF1F\u5F53\u524D\u81EA\u5B9A\u4E49\u6539\u52A8\u5C06\u88AB\u5B98\u65B9\u9884\u8BBE\u66FF\u6362\u3002")) return;
      resetting.value = true;
      try {
        const res = await $fetch("/api/admin/shoply/cases", {
          method: "POST",
          body: {
            action: "reset"
          }
        });
        if (res.ok) {
          list.value = res.cases;
          if (res.stats) stats.value = res.stats;
          toast.add({ title: "\u5DF2\u6210\u529F\u91CD\u7F6E\u5E76\u5BFC\u5165\u5B98\u65B9\u5BA2\u6237\u6848\u4F8B\u9884\u8BBE", color: "success" });
        }
      } catch (err) {
        toast.add({
          title: "\u91CD\u7F6E\u5931\u8D25",
          description: (err == null ? void 0 : err.message) || String(err),
          color: "error"
        });
      } finally {
        resetting.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_UAlert = _sfc_main$o;
      const _component_UIcon = _sfc_main$W;
      const _component_UButton = _sfc_main$R;
      const _component_UCard = _sfc_main$n;
      const _component_UInput = _sfc_main$v;
      const _component_USelect = _sfc_main$u;
      const _component_UBadge = _sfc_main$M;
      const _component_UModal = _sfc_main$G;
      const _component_UFormField = _sfc_main$w;
      const _component_UTextarea = _sfc_main$r;
      const _component_USwitch = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}>`);
      if (errorMsg.value) {
        _push(ssrRenderComponent(_component_UAlert, {
          color: "error",
          variant: "subtle",
          title: "\u63A5\u53E3\u5F02\u5E38",
          description: errorMsg.value,
          class: "mb-4"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4"><div><h1 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex items-center gap-2.5">`);
      _push(ssrRenderComponent(_component_UIcon, {
        name: "ph:briefcase-bold",
        class: "w-7 h-7 text-blue-600 dark:text-blue-400"
      }, null, _parent));
      _push(`<span>\u5B98\u7F51\u5BA2\u6237\u6848\u4F8B\u7BA1\u7406</span></h1><p class="mt-1 text-sm text-gray-500 dark:text-gray-400"> \u6570\u636E\u6301\u4E45\u5316\u5B58\u50A8\u81F3 <code class="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-xs font-mono">shoply_cases</code> \u6570\u636E\u8868\u3002\u7BA1\u7406\u5B98\u7F51\u5C55\u793A\u7684\u5BA2\u6237\u5EFA\u7AD9\u6848\u4F8B\u3001\u5173\u952E\u6210\u6548\u6570\u636E\u4E0E\u63A8\u8350\u6392\u4F4D\u3002 </p></div><div class="flex flex-wrap items-center gap-2.5">`);
      _push(ssrRenderComponent(_component_UButton, {
        color: "neutral",
        variant: "outline",
        icon: "ph:arrow-counter-clockwise",
        size: "sm",
        loading: resetting.value,
        onClick: confirmResetToDefault
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u6062\u590D\u5B98\u65B9\u9884\u8BBE `);
          } else {
            return [
              createTextVNode(" \u6062\u590D\u5B98\u65B9\u9884\u8BBE ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        color: "neutral",
        variant: "outline",
        icon: "ph:arrows-clockwise",
        size: "sm",
        loading: loading.value,
        onClick: loadData
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u5237\u65B0 `);
          } else {
            return [
              createTextVNode(" \u5237\u65B0 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        color: "primary",
        icon: "ph:plus-bold",
        size: "sm",
        onClick: openAddModal
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u65B0\u589E\u6848\u4F8B `);
          } else {
            return [
              createTextVNode(" \u65B0\u589E\u6848\u4F8B ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        color: "success",
        icon: "ph:floppy-disk-bold",
        size: "sm",
        loading: saving.value,
        onClick: saveBatch
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u4FDD\u5B58\u6240\u6709\u6539\u52A8 `);
          } else {
            return [
              createTextVNode(" \u4FDD\u5B58\u6240\u6709\u6539\u52A8 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="grid grid-cols-2 sm:grid-cols-4 gap-4">`);
      _push(ssrRenderComponent(_component_UCard, { class: "border border-gray-200 dark:border-gray-800" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between text-gray-500 dark:text-gray-400 text-xs font-medium"${_scopeId}><span${_scopeId}>\u603B\u6536\u5F55\u6848\u4F8B</span>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:folder-bold",
              class: "w-4 h-4 text-blue-500"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-2 text-2xl font-bold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate(stats.value.total)}</div><div class="mt-1 text-xs text-gray-400"${_scopeId}>\u5DF2\u767B\u8BB0\u7684\u5168\u90E8\u51FA\u6D77\u6848\u4F8B</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between text-gray-500 dark:text-gray-400 text-xs font-medium" }, [
                createVNode("span", null, "\u603B\u6536\u5F55\u6848\u4F8B"),
                createVNode(_component_UIcon, {
                  name: "ph:folder-bold",
                  class: "w-4 h-4 text-blue-500"
                })
              ]),
              createVNode("div", { class: "mt-2 text-2xl font-bold text-gray-900 dark:text-white" }, toDisplayString(stats.value.total), 1),
              createVNode("div", { class: "mt-1 text-xs text-gray-400" }, "\u5DF2\u767B\u8BB0\u7684\u5168\u90E8\u51FA\u6D77\u6848\u4F8B")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UCard, { class: "border border-gray-200 dark:border-gray-800" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between text-gray-500 dark:text-gray-400 text-xs font-medium"${_scopeId}><span${_scopeId}>\u5B98\u7F51\u5C55\u793A\u4E2D</span>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:check-circle-bold",
              class: "w-4 h-4 text-emerald-500"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-2 text-2xl font-bold text-emerald-600 dark:text-emerald-400"${_scopeId}>${ssrInterpolate(stats.value.published)}</div><div class="mt-1 text-xs text-gray-400"${_scopeId}>\u524D\u53F0\u6B63\u5E38\u516C\u5F00\u53EF\u8BFB</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between text-gray-500 dark:text-gray-400 text-xs font-medium" }, [
                createVNode("span", null, "\u5B98\u7F51\u5C55\u793A\u4E2D"),
                createVNode(_component_UIcon, {
                  name: "ph:check-circle-bold",
                  class: "w-4 h-4 text-emerald-500"
                })
              ]),
              createVNode("div", { class: "mt-2 text-2xl font-bold text-emerald-600 dark:text-emerald-400" }, toDisplayString(stats.value.published), 1),
              createVNode("div", { class: "mt-1 text-xs text-gray-400" }, "\u524D\u53F0\u6B63\u5E38\u516C\u5F00\u53EF\u8BFB")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UCard, { class: "border border-gray-200 dark:border-gray-800" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between text-gray-500 dark:text-gray-400 text-xs font-medium"${_scopeId}><span${_scopeId}>\u7CBE\u9009\u91CD\u70B9\u63A8\u8350</span>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:star-fill",
              class: "w-4 h-4 text-amber-500"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-2 text-2xl font-bold text-amber-500"${_scopeId}>${ssrInterpolate(stats.value.featured)}</div><div class="mt-1 text-xs text-gray-400"${_scopeId}>\u9876\u90E8\u6545\u4E8B\u91CD\u70B9\u66DD\u5149</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between text-gray-500 dark:text-gray-400 text-xs font-medium" }, [
                createVNode("span", null, "\u7CBE\u9009\u91CD\u70B9\u63A8\u8350"),
                createVNode(_component_UIcon, {
                  name: "ph:star-fill",
                  class: "w-4 h-4 text-amber-500"
                })
              ]),
              createVNode("div", { class: "mt-2 text-2xl font-bold text-amber-500" }, toDisplayString(stats.value.featured), 1),
              createVNode("div", { class: "mt-1 text-xs text-gray-400" }, "\u9876\u90E8\u6545\u4E8B\u91CD\u70B9\u66DD\u5149")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UCard, { class: "border border-gray-200 dark:border-gray-800" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between text-gray-500 dark:text-gray-400 text-xs font-medium"${_scopeId}><span${_scopeId}>\u6DB5\u76D6\u54C1\u7C7B\u5206\u7C7B</span>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "ph:squares-four-bold",
              class: "w-4 h-4 text-purple-500"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-2 text-2xl font-bold text-purple-600 dark:text-purple-400"${_scopeId}>${ssrInterpolate(stats.value.categoriesCount)}</div><div class="mt-1 text-xs text-gray-400"${_scopeId}>\u591A\u54C1\u7C7B\u591A\u6A21\u5F0F\u8986\u76D6</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between text-gray-500 dark:text-gray-400 text-xs font-medium" }, [
                createVNode("span", null, "\u6DB5\u76D6\u54C1\u7C7B\u5206\u7C7B"),
                createVNode(_component_UIcon, {
                  name: "ph:squares-four-bold",
                  class: "w-4 h-4 text-purple-500"
                })
              ]),
              createVNode("div", { class: "mt-2 text-2xl font-bold text-purple-600 dark:text-purple-400" }, toDisplayString(stats.value.categoriesCount), 1),
              createVNode("div", { class: "mt-1 text-xs text-gray-400" }, "\u591A\u54C1\u7C7B\u591A\u6A21\u5F0F\u8986\u76D6")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UCard, { class: "border border-gray-200 dark:border-gray-800" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-100 dark:border-gray-800"${_scopeId}><div class="flex flex-wrap items-center gap-2.5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UInput, {
              modelValue: searchQuery.value,
              "onUpdate:modelValue": ($event) => searchQuery.value = $event,
              icon: "ph:magnifying-glass",
              placeholder: "\u6309\u6807\u9898 / \u5BA2\u6237\u540D / \u7EC6\u5206\u884C\u4E1A / \u6807\u7B7E\u641C\u7D22...",
              size: "sm",
              class: "w-72"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_USelect, {
              modelValue: selectedCategory.value,
              "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
              items: categoryFilterOptions,
              size: "sm",
              class: "w-44"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_USelect, {
              modelValue: selectedStatus.value,
              "onUpdate:modelValue": ($event) => selectedStatus.value = $event,
              items: statusFilterOptions,
              size: "sm",
              class: "w-32"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="text-xs text-gray-500 dark:text-gray-400"${_scopeId}> \u5171 ${ssrInterpolate(list.value.length)} \u6761 \xB7 \u5339\u914D\u663E\u793A ${ssrInterpolate(filteredList.value.length)} \u6761 </div></div><div class="overflow-x-auto mt-4"${_scopeId}><table class="w-full text-left text-xs divide-y divide-gray-100 dark:divide-gray-800"${_scopeId}><thead class="bg-gray-50/75 dark:bg-gray-800/50 text-gray-500 font-medium"${_scopeId}><tr${_scopeId}><th class="w-16 px-3 py-3 text-center"${_scopeId}>\u6392\u5E8F</th><th class="px-3 py-3 min-w-[200px]"${_scopeId}>\u6848\u4F8B\u6807\u9898 / \u5BA2\u6237</th><th class="px-3 py-3"${_scopeId}>\u5206\u7C7B / \u7EC6\u5206\u884C\u4E1A</th><th class="px-3 py-3"${_scopeId}>\u6838\u5FC3\u6210\u6548\u6307\u6807</th><th class="px-3 py-3"${_scopeId}>\u4EA4\u4ED8\u5468\u671F</th><th class="px-3 py-3"${_scopeId}>\u6807\u7B7E</th><th class="w-20 px-3 py-3 text-center"${_scopeId}>\u7CBE\u9009\u63A8\u8350</th><th class="w-20 px-3 py-3 text-center"${_scopeId}>\u72B6\u6001</th><th class="w-28 px-3 py-3 text-right"${_scopeId}>\u64CD\u4F5C</th></tr></thead><tbody class="divide-y divide-gray-100 dark:divide-gray-800"${_scopeId}><!--[-->`);
            ssrRenderList(filteredList.value, (item, index) => {
              _push2(`<tr class="${ssrRenderClass([{ "opacity-60 bg-gray-50/30": item.status === 0 }, "hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors"])}"${_scopeId}><td class="px-3 py-3 text-center whitespace-nowrap"${_scopeId}><div class="flex items-center justify-center gap-1"${_scopeId}><span class="font-mono text-gray-400 text-xs w-6 text-center"${_scopeId}>${ssrInterpolate(item.sortOrder)}</span><div class="flex flex-col"${_scopeId}><button type="button"${ssrIncludeBooleanAttr(index === 0) ? " disabled" : ""} class="text-gray-400 hover:text-blue-600 disabled:opacity-20 p-0.5"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:caret-up-bold",
                class: "w-3 h-3"
              }, null, _parent2, _scopeId));
              _push2(`</button><button type="button"${ssrIncludeBooleanAttr(index === filteredList.value.length - 1) ? " disabled" : ""} class="text-gray-400 hover:text-blue-600 disabled:opacity-20 p-0.5"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:caret-down-bold",
                class: "w-3 h-3"
              }, null, _parent2, _scopeId));
              _push2(`</button></div></div></td><td class="px-3 py-3"${_scopeId}><div class="font-semibold text-gray-900 dark:text-white line-clamp-1"${_scopeId}>${ssrInterpolate(item.title)}</div><div class="mt-0.5 text-gray-500 text-[11px] flex items-center gap-2"${_scopeId}><span class="font-medium text-blue-600 dark:text-blue-400"${_scopeId}>${ssrInterpolate(item.clientName)}</span>`);
              if (item.subtitle) {
                _push2(`<span class="text-gray-400 truncate max-w-[200px]"${_scopeId}>\xB7 ${ssrInterpolate(item.subtitle)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></td><td class="px-3 py-3 whitespace-nowrap"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UBadge, {
                color: categoryBadgeColor(item.category),
                variant: "subtle",
                size: "xs"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.categoryLabel || item.category)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.categoryLabel || item.category), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              if (item.industry) {
                _push2(`<div class="mt-1 text-[11px] text-gray-400"${_scopeId}>${ssrInterpolate(item.industry)}</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</td><td class="px-3 py-3 whitespace-nowrap"${_scopeId}><div class="font-bold text-blue-600 dark:text-blue-400"${_scopeId}>${ssrInterpolate(item.metricValue)}</div><div class="text-[11px] text-gray-500"${_scopeId}>${ssrInterpolate(item.metricLabel)}</div></td><td class="px-3 py-3 whitespace-nowrap text-gray-600 dark:text-gray-300"${_scopeId}><div class="inline-flex items-center gap-1 text-[11px]"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:clock",
                class: "w-3.5 h-3.5 text-gray-400"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>${ssrInterpolate(item.deliveryPeriod || "-")}</span></div></td><td class="px-3 py-3 max-w-[160px]"${_scopeId}><div class="flex flex-wrap gap-1"${_scopeId}><!--[-->`);
              ssrRenderList(item.tags.slice(0, 3), (t) => {
                _push2(`<span class="inline-block px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[10px] text-gray-600 dark:text-gray-300"${_scopeId}>${ssrInterpolate(t)}</span>`);
              });
              _push2(`<!--]-->`);
              if (item.tags.length > 3) {
                _push2(`<span class="text-[10px] text-gray-400"${_scopeId}> +${ssrInterpolate(item.tags.length - 3)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></td><td class="px-3 py-3 text-center whitespace-nowrap"${_scopeId}><button type="button" class="inline-flex items-center justify-center p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"${ssrRenderAttr("title", item.isFeatured ? "\u53D6\u6D88\u7CBE\u9009\u63A8\u8350" : "\u8BBE\u4E3A\u7CBE\u9009\u63A8\u8350\u6848\u4F8B")}${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: item.isFeatured ? "ph:star-fill" : "ph:star",
                class: ["w-4 h-4", item.isFeatured ? "text-amber-500" : "text-gray-300 dark:text-gray-600"]
              }, null, _parent2, _scopeId));
              _push2(`</button></td><td class="px-3 py-3 text-center whitespace-nowrap"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UButton, {
                color: item.status === 1 ? "success" : "neutral",
                variant: "subtle",
                size: "xs",
                onClick: ($event) => toggleStatus(item)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.status === 1 ? "\u4E0A\u67B6\u4E2D" : "\u8349\u7A3F")}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.status === 1 ? "\u4E0A\u67B6\u4E2D" : "\u8349\u7A3F"), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</td><td class="px-3 py-3 text-right whitespace-nowrap"${_scopeId}><div class="flex items-center justify-end gap-1"${_scopeId}>`);
              if (item.websiteUrl) {
                _push2(`<a${ssrRenderAttr("href", item.websiteUrl)} target="_blank" rel="noopener" class="p-1 rounded text-gray-400 hover:text-blue-600 dark:hover:text-blue-400" title="\u65B0\u7A97\u53E3\u9884\u89C8\u6848\u4F8B\u72EC\u7ACB\u7AD9"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UIcon, {
                  name: "ph:arrow-square-out",
                  class: "w-4 h-4"
                }, null, _parent2, _scopeId));
                _push2(`</a>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(_component_UButton, {
                color: "neutral",
                variant: "ghost",
                size: "xs",
                icon: "ph:pencil-simple",
                onClick: ($event) => openEditModal(item)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u7F16\u8F91 `);
                  } else {
                    return [
                      createTextVNode(" \u7F16\u8F91 ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UButton, {
                color: "error",
                variant: "ghost",
                size: "xs",
                icon: "ph:trash",
                onClick: ($event) => openDeleteModal(item)
              }, null, _parent2, _scopeId));
              _push2(`</div></td></tr>`);
            });
            _push2(`<!--]-->`);
            if (filteredList.value.length === 0) {
              _push2(`<tr${_scopeId}><td colspan="9" class="px-4 py-12 text-center text-gray-400"${_scopeId}><div class="flex flex-col items-center justify-center gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "ph:tray",
                class: "w-8 h-8 text-gray-300 dark:text-gray-600"
              }, null, _parent2, _scopeId));
              _push2(`<p class="text-sm"${_scopeId}>\u672A\u627E\u5230\u7B26\u5408\u6761\u4EF6\u7684\u5BA2\u6237\u6848\u4F8B</p>`);
              if (list.value.length === 0) {
                _push2(ssrRenderComponent(_component_UButton, {
                  color: "primary",
                  variant: "soft",
                  size: "xs",
                  icon: "ph:arrow-counter-clockwise",
                  class: "mt-1",
                  onClick: confirmResetToDefault
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` \u4E00\u952E\u5BFC\u5165\u5B98\u65B9\u63A8\u8350\u6848\u4F8B\u9884\u8BBE `);
                    } else {
                      return [
                        createTextVNode(" \u4E00\u952E\u5BFC\u5165\u5B98\u65B9\u63A8\u8350\u6848\u4F8B\u9884\u8BBE ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></td></tr>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</tbody></table></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-100 dark:border-gray-800" }, [
                createVNode("div", { class: "flex flex-wrap items-center gap-2.5" }, [
                  createVNode(_component_UInput, {
                    modelValue: searchQuery.value,
                    "onUpdate:modelValue": ($event) => searchQuery.value = $event,
                    icon: "ph:magnifying-glass",
                    placeholder: "\u6309\u6807\u9898 / \u5BA2\u6237\u540D / \u7EC6\u5206\u884C\u4E1A / \u6807\u7B7E\u641C\u7D22...",
                    size: "sm",
                    class: "w-72"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_USelect, {
                    modelValue: selectedCategory.value,
                    "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                    items: categoryFilterOptions,
                    size: "sm",
                    class: "w-44"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_USelect, {
                    modelValue: selectedStatus.value,
                    "onUpdate:modelValue": ($event) => selectedStatus.value = $event,
                    items: statusFilterOptions,
                    size: "sm",
                    class: "w-32"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "text-xs text-gray-500 dark:text-gray-400" }, " \u5171 " + toDisplayString(list.value.length) + " \u6761 \xB7 \u5339\u914D\u663E\u793A " + toDisplayString(filteredList.value.length) + " \u6761 ", 1)
              ]),
              createVNode("div", { class: "overflow-x-auto mt-4" }, [
                createVNode("table", { class: "w-full text-left text-xs divide-y divide-gray-100 dark:divide-gray-800" }, [
                  createVNode("thead", { class: "bg-gray-50/75 dark:bg-gray-800/50 text-gray-500 font-medium" }, [
                    createVNode("tr", null, [
                      createVNode("th", { class: "w-16 px-3 py-3 text-center" }, "\u6392\u5E8F"),
                      createVNode("th", { class: "px-3 py-3 min-w-[200px]" }, "\u6848\u4F8B\u6807\u9898 / \u5BA2\u6237"),
                      createVNode("th", { class: "px-3 py-3" }, "\u5206\u7C7B / \u7EC6\u5206\u884C\u4E1A"),
                      createVNode("th", { class: "px-3 py-3" }, "\u6838\u5FC3\u6210\u6548\u6307\u6807"),
                      createVNode("th", { class: "px-3 py-3" }, "\u4EA4\u4ED8\u5468\u671F"),
                      createVNode("th", { class: "px-3 py-3" }, "\u6807\u7B7E"),
                      createVNode("th", { class: "w-20 px-3 py-3 text-center" }, "\u7CBE\u9009\u63A8\u8350"),
                      createVNode("th", { class: "w-20 px-3 py-3 text-center" }, "\u72B6\u6001"),
                      createVNode("th", { class: "w-28 px-3 py-3 text-right" }, "\u64CD\u4F5C")
                    ])
                  ]),
                  createVNode("tbody", { class: "divide-y divide-gray-100 dark:divide-gray-800" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(filteredList.value, (item, index) => {
                      return openBlock(), createBlock("tr", {
                        key: item.id,
                        class: ["hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors", { "opacity-60 bg-gray-50/30": item.status === 0 }]
                      }, [
                        createVNode("td", { class: "px-3 py-3 text-center whitespace-nowrap" }, [
                          createVNode("div", { class: "flex items-center justify-center gap-1" }, [
                            createVNode("span", { class: "font-mono text-gray-400 text-xs w-6 text-center" }, toDisplayString(item.sortOrder), 1),
                            createVNode("div", { class: "flex flex-col" }, [
                              createVNode("button", {
                                type: "button",
                                disabled: index === 0,
                                class: "text-gray-400 hover:text-blue-600 disabled:opacity-20 p-0.5",
                                onClick: ($event) => moveUp(index)
                              }, [
                                createVNode(_component_UIcon, {
                                  name: "ph:caret-up-bold",
                                  class: "w-3 h-3"
                                })
                              ], 8, ["disabled", "onClick"]),
                              createVNode("button", {
                                type: "button",
                                disabled: index === filteredList.value.length - 1,
                                class: "text-gray-400 hover:text-blue-600 disabled:opacity-20 p-0.5",
                                onClick: ($event) => moveDown(index)
                              }, [
                                createVNode(_component_UIcon, {
                                  name: "ph:caret-down-bold",
                                  class: "w-3 h-3"
                                })
                              ], 8, ["disabled", "onClick"])
                            ])
                          ])
                        ]),
                        createVNode("td", { class: "px-3 py-3" }, [
                          createVNode("div", { class: "font-semibold text-gray-900 dark:text-white line-clamp-1" }, toDisplayString(item.title), 1),
                          createVNode("div", { class: "mt-0.5 text-gray-500 text-[11px] flex items-center gap-2" }, [
                            createVNode("span", { class: "font-medium text-blue-600 dark:text-blue-400" }, toDisplayString(item.clientName), 1),
                            item.subtitle ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "text-gray-400 truncate max-w-[200px]"
                            }, "\xB7 " + toDisplayString(item.subtitle), 1)) : createCommentVNode("", true)
                          ])
                        ]),
                        createVNode("td", { class: "px-3 py-3 whitespace-nowrap" }, [
                          createVNode(_component_UBadge, {
                            color: categoryBadgeColor(item.category),
                            variant: "subtle",
                            size: "xs"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.categoryLabel || item.category), 1)
                            ]),
                            _: 2
                          }, 1032, ["color"]),
                          item.industry ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "mt-1 text-[11px] text-gray-400"
                          }, toDisplayString(item.industry), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("td", { class: "px-3 py-3 whitespace-nowrap" }, [
                          createVNode("div", { class: "font-bold text-blue-600 dark:text-blue-400" }, toDisplayString(item.metricValue), 1),
                          createVNode("div", { class: "text-[11px] text-gray-500" }, toDisplayString(item.metricLabel), 1)
                        ]),
                        createVNode("td", { class: "px-3 py-3 whitespace-nowrap text-gray-600 dark:text-gray-300" }, [
                          createVNode("div", { class: "inline-flex items-center gap-1 text-[11px]" }, [
                            createVNode(_component_UIcon, {
                              name: "ph:clock",
                              class: "w-3.5 h-3.5 text-gray-400"
                            }),
                            createVNode("span", null, toDisplayString(item.deliveryPeriod || "-"), 1)
                          ])
                        ]),
                        createVNode("td", { class: "px-3 py-3 max-w-[160px]" }, [
                          createVNode("div", { class: "flex flex-wrap gap-1" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(item.tags.slice(0, 3), (t) => {
                              return openBlock(), createBlock("span", {
                                key: t,
                                class: "inline-block px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[10px] text-gray-600 dark:text-gray-300"
                              }, toDisplayString(t), 1);
                            }), 128)),
                            item.tags.length > 3 ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "text-[10px] text-gray-400"
                            }, " +" + toDisplayString(item.tags.length - 3), 1)) : createCommentVNode("", true)
                          ])
                        ]),
                        createVNode("td", { class: "px-3 py-3 text-center whitespace-nowrap" }, [
                          createVNode("button", {
                            type: "button",
                            class: "inline-flex items-center justify-center p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
                            title: item.isFeatured ? "\u53D6\u6D88\u7CBE\u9009\u63A8\u8350" : "\u8BBE\u4E3A\u7CBE\u9009\u63A8\u8350\u6848\u4F8B",
                            onClick: ($event) => toggleFeatured(item)
                          }, [
                            createVNode(_component_UIcon, {
                              name: item.isFeatured ? "ph:star-fill" : "ph:star",
                              class: ["w-4 h-4", item.isFeatured ? "text-amber-500" : "text-gray-300 dark:text-gray-600"]
                            }, null, 8, ["name", "class"])
                          ], 8, ["title", "onClick"])
                        ]),
                        createVNode("td", { class: "px-3 py-3 text-center whitespace-nowrap" }, [
                          createVNode(_component_UButton, {
                            color: item.status === 1 ? "success" : "neutral",
                            variant: "subtle",
                            size: "xs",
                            onClick: ($event) => toggleStatus(item)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.status === 1 ? "\u4E0A\u67B6\u4E2D" : "\u8349\u7A3F"), 1)
                            ]),
                            _: 2
                          }, 1032, ["color", "onClick"])
                        ]),
                        createVNode("td", { class: "px-3 py-3 text-right whitespace-nowrap" }, [
                          createVNode("div", { class: "flex items-center justify-end gap-1" }, [
                            item.websiteUrl ? (openBlock(), createBlock("a", {
                              key: 0,
                              href: item.websiteUrl,
                              target: "_blank",
                              rel: "noopener",
                              class: "p-1 rounded text-gray-400 hover:text-blue-600 dark:hover:text-blue-400",
                              title: "\u65B0\u7A97\u53E3\u9884\u89C8\u6848\u4F8B\u72EC\u7ACB\u7AD9"
                            }, [
                              createVNode(_component_UIcon, {
                                name: "ph:arrow-square-out",
                                class: "w-4 h-4"
                              })
                            ], 8, ["href"])) : createCommentVNode("", true),
                            createVNode(_component_UButton, {
                              color: "neutral",
                              variant: "ghost",
                              size: "xs",
                              icon: "ph:pencil-simple",
                              onClick: ($event) => openEditModal(item)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u7F16\u8F91 ")
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_UButton, {
                              color: "error",
                              variant: "ghost",
                              size: "xs",
                              icon: "ph:trash",
                              onClick: ($event) => openDeleteModal(item)
                            }, null, 8, ["onClick"])
                          ])
                        ])
                      ], 2);
                    }), 128)),
                    filteredList.value.length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [
                      createVNode("td", {
                        colspan: "9",
                        class: "px-4 py-12 text-center text-gray-400"
                      }, [
                        createVNode("div", { class: "flex flex-col items-center justify-center gap-2" }, [
                          createVNode(_component_UIcon, {
                            name: "ph:tray",
                            class: "w-8 h-8 text-gray-300 dark:text-gray-600"
                          }),
                          createVNode("p", { class: "text-sm" }, "\u672A\u627E\u5230\u7B26\u5408\u6761\u4EF6\u7684\u5BA2\u6237\u6848\u4F8B"),
                          list.value.length === 0 ? (openBlock(), createBlock(_component_UButton, {
                            key: 0,
                            color: "primary",
                            variant: "soft",
                            size: "xs",
                            icon: "ph:arrow-counter-clockwise",
                            class: "mt-1",
                            onClick: confirmResetToDefault
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u4E00\u952E\u5BFC\u5165\u5B98\u65B9\u63A8\u8350\u6848\u4F8B\u9884\u8BBE ")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ])
                      ])
                    ])) : createCommentVNode("", true)
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        open: isEditModalOpen.value,
        "onUpdate:open": ($event) => isEditModalOpen.value = $event,
        title: isEditingNew.value ? "\u65B0\u589E\u5BA2\u6237\u6848\u4F8B" : `\u7F16\u8F91\u6848\u4F8B \xB7 ${((_a = editingItem.value) == null ? void 0 : _a.clientName) || ((_b = editingItem.value) == null ? void 0 : _b.id)}`,
        ui: { content: "max-w-4xl sm:max-w-4xl" }
      }, {
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (editingItem.value) {
              _push2(`<div class="space-y-4 py-1"${_scopeId}><div class="grid grid-cols-1 sm:grid-cols-3 gap-3"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u6848\u4F8B Slug (ID)",
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.id,
                      "onUpdate:modelValue": ($event) => editingItem.value.id = $event,
                      placeholder: "\u4F8B\u5982: b2b-valve-trade",
                      size: "sm",
                      disabled: !isEditingNew.value,
                      class: "w-full font-mono"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.id,
                        "onUpdate:modelValue": ($event) => editingItem.value.id = $event,
                        placeholder: "\u4F8B\u5982: b2b-valve-trade",
                        size: "sm",
                        disabled: !isEditingNew.value,
                        class: "w-full font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u5BA2\u6237 / \u54C1\u724C",
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.clientName,
                      "onUpdate:modelValue": ($event) => editingItem.value.clientName = $event,
                      placeholder: "\u4F8B\u5982: \u6052\u529B\u6D41\u4F53\u667A\u9020",
                      size: "sm",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.clientName,
                        "onUpdate:modelValue": ($event) => editingItem.value.clientName = $event,
                        placeholder: "\u4F8B\u5982: \u6052\u529B\u6D41\u4F53\u667A\u9020",
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u4E1A\u52A1\u5206\u7C7B",
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_USelect, {
                      modelValue: editingItem.value.category,
                      "onUpdate:modelValue": [($event) => editingItem.value.category = $event, onCategoryChange],
                      items: categorySelectOptions,
                      size: "sm",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_USelect, {
                        modelValue: editingItem.value.category,
                        "onUpdate:modelValue": [($event) => editingItem.value.category = $event, onCategoryChange],
                        items: categorySelectOptions,
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="grid grid-cols-1 sm:grid-cols-3 gap-3"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u6848\u4F8B\u4E3B\u6807\u9898",
                required: "",
                class: "sm:col-span-2"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.title,
                      "onUpdate:modelValue": ($event) => editingItem.value.title = $event,
                      placeholder: "\u4F8B\u5982: \u4ECE\u4F20\u7EDF\u5916\u8D38\u5230 Google \u641C\u7D22\u5934\u7248",
                      size: "sm",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.title,
                        "onUpdate:modelValue": ($event) => editingItem.value.title = $event,
                        placeholder: "\u4F8B\u5982: \u4ECE\u4F20\u7EDF\u5916\u8D38\u5230 Google \u641C\u7D22\u5934\u7248",
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, { label: "\u72EC\u7ACB\u7AD9\u4F53\u9A8C\u94FE\u63A5" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.websiteUrl,
                      "onUpdate:modelValue": ($event) => editingItem.value.websiteUrl = $event,
                      placeholder: "https://...",
                      size: "sm",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.websiteUrl,
                        "onUpdate:modelValue": ($event) => editingItem.value.websiteUrl = $event,
                        placeholder: "https://...",
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="grid grid-cols-1 sm:grid-cols-3 gap-3"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u6838\u5FC3\u6210\u6548\u6307\u6807",
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.metricValue,
                      "onUpdate:modelValue": ($event) => editingItem.value.metricValue = $event,
                      placeholder: "+280%",
                      size: "sm",
                      class: "w-full font-bold text-blue-600 dark:text-blue-400"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.metricValue,
                        "onUpdate:modelValue": ($event) => editingItem.value.metricValue = $event,
                        placeholder: "+280%",
                        size: "sm",
                        class: "w-full font-bold text-blue-600 dark:text-blue-400"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u6210\u6548\u6307\u6807\u8BF4\u660E",
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.metricLabel,
                      "onUpdate:modelValue": ($event) => editingItem.value.metricLabel = $event,
                      placeholder: "\u6D77\u5916\u771F\u5B9E\u8BE2\u76D8\u63D0\u5347",
                      size: "sm",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.metricLabel,
                        "onUpdate:modelValue": ($event) => editingItem.value.metricLabel = $event,
                        placeholder: "\u6D77\u5916\u771F\u5B9E\u8BE2\u76D8\u63D0\u5347",
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, { label: "\u9879\u76EE\u4EA4\u4ED8\u5468\u671F" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.deliveryPeriod,
                      "onUpdate:modelValue": ($event) => editingItem.value.deliveryPeriod = $event,
                      placeholder: "\u4F8B\u5982: 1 \u5468",
                      size: "sm",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.deliveryPeriod,
                        "onUpdate:modelValue": ($event) => editingItem.value.deliveryPeriod = $event,
                        placeholder: "\u4F8B\u5982: 1 \u5468",
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><div class="grid grid-cols-1 sm:grid-cols-2 gap-3"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UFormField, { label: "\u5C01\u9762\u56FE\u7247" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="space-y-2"${_scopeId2}><div class="flex items-center gap-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: editingItem.value.coverImage,
                      "onUpdate:modelValue": ($event) => editingItem.value.coverImage = $event,
                      placeholder: "\u8F93\u5165\u56FE\u7247 URL \u6216\u70B9\u51FB\u53F3\u4FA7\u4E0A\u4F20",
                      size: "sm",
                      class: "flex-1 font-mono text-xs"
                    }, null, _parent3, _scopeId2));
                    _push3(`<input type="file" class="hidden" accept="image/png, image/jpeg, image/webp, image/gif"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UButton, {
                      color: "neutral",
                      variant: "outline",
                      size: "sm",
                      icon: "ph:cloud-arrow-up-bold",
                      loading: isUploadingCover.value,
                      onClick: triggerCoverUpload
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u4E0A\u4F20\u56FE\u7247 `);
                        } else {
                          return [
                            createTextVNode(" \u4E0A\u4F20\u56FE\u7247 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                    if (editingItem.value.coverImage) {
                      _push3(`<div class="inline-flex items-center gap-2 p-1.5 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/40"${_scopeId2}><img${ssrRenderAttr("src", editingItem.value.coverImage)} class="h-8 w-14 object-cover rounded" alt="Preview"${_scopeId2}><span class="text-xs text-gray-500 truncate max-w-[200px]"${_scopeId2}>${ssrInterpolate(editingItem.value.coverImage)}</span>`);
                      _push3(ssrRenderComponent(_component_UButton, {
                        color: "neutral",
                        variant: "ghost",
                        size: "xs",
                        icon: "ph:x",
                        onClick: ($event) => editingItem.value.coverImage = ""
                      }, null, _parent3, _scopeId2));
                      _push3(`</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "space-y-2" }, [
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode(_component_UInput, {
                            modelValue: editingItem.value.coverImage,
                            "onUpdate:modelValue": ($event) => editingItem.value.coverImage = $event,
                            placeholder: "\u8F93\u5165\u56FE\u7247 URL \u6216\u70B9\u51FB\u53F3\u4FA7\u4E0A\u4F20",
                            size: "sm",
                            class: "flex-1 font-mono text-xs"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode("input", {
                            ref_key: "coverFileInput",
                            ref: coverFileInput,
                            type: "file",
                            class: "hidden",
                            accept: "image/png, image/jpeg, image/webp, image/gif",
                            onChange: handleCoverFileChange
                          }, null, 544),
                          createVNode(_component_UButton, {
                            color: "neutral",
                            variant: "outline",
                            size: "sm",
                            icon: "ph:cloud-arrow-up-bold",
                            loading: isUploadingCover.value,
                            onClick: triggerCoverUpload
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u4E0A\u4F20\u56FE\u7247 ")
                            ]),
                            _: 1
                          }, 8, ["loading"])
                        ]),
                        editingItem.value.coverImage ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "inline-flex items-center gap-2 p-1.5 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/40"
                        }, [
                          createVNode("img", {
                            src: editingItem.value.coverImage,
                            class: "h-8 w-14 object-cover rounded",
                            alt: "Preview"
                          }, null, 8, ["src"]),
                          createVNode("span", { class: "text-xs text-gray-500 truncate max-w-[200px]" }, toDisplayString(editingItem.value.coverImage), 1),
                          createVNode(_component_UButton, {
                            color: "neutral",
                            variant: "ghost",
                            size: "xs",
                            icon: "ph:x",
                            onClick: ($event) => editingItem.value.coverImage = ""
                          }, null, 8, ["onClick"])
                        ])) : createCommentVNode("", true)
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, { label: "\u6807\u7B7E (\u9017\u53F7\u5206\u9694)" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UInput, {
                      modelValue: tagsInput.value,
                      "onUpdate:modelValue": ($event) => tagsInput.value = $event,
                      placeholder: "\u5916\u8D38B2B, 15\u8BED\u79CD, SEO",
                      size: "sm",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UInput, {
                        modelValue: tagsInput.value,
                        "onUpdate:modelValue": ($event) => tagsInput.value = $event,
                        placeholder: "\u5916\u8D38B2B, 15\u8BED\u79CD, SEO",
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_UFormField, {
                label: "\u6848\u4F8B\u6458\u8981 (\u7B80\u8981\u6210\u6548\u63D0\u70BC)",
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UTextarea, {
                      modelValue: editingItem.value.summary,
                      "onUpdate:modelValue": ($event) => editingItem.value.summary = $event,
                      rows: 2,
                      placeholder: "\u6982\u62EC\u8BE5\u5BA2\u6237\u6838\u5FC3\u8BC9\u6C42\u3001\u65B9\u6848\u7A81\u7834\u4E0E\u589E\u957F\u6210\u6548...",
                      size: "sm",
                      class: "w-full text-xs"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UTextarea, {
                        modelValue: editingItem.value.summary,
                        "onUpdate:modelValue": ($event) => editingItem.value.summary = $event,
                        rows: 2,
                        placeholder: "\u6982\u62EC\u8BE5\u5BA2\u6237\u6838\u5FC3\u8BC9\u6C42\u3001\u65B9\u6848\u7A81\u7834\u4E0E\u589E\u957F\u6210\u6548...",
                        size: "sm",
                        class: "w-full text-xs"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UFormField, { label: "\u6848\u4F8B\u6B63\u6587\u4E0E\u65B9\u6848\u62C6\u89E3 (\u5BCC\u6587\u672C / Markdown \u7F16\u8F91\u5668)" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(RichEditor), {
                      modelValue: editingItem.value.content,
                      "onUpdate:modelValue": ($event) => editingItem.value.content = $event
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(RichEditor), {
                        modelValue: editingItem.value.content,
                        "onUpdate:modelValue": ($event) => editingItem.value.content = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-gray-100 dark:border-gray-800 items-center"${_scopeId}><div class="flex items-center justify-between p-2.5 rounded-lg border border-gray-200 dark:border-gray-800"${_scopeId}><span class="text-xs font-medium text-gray-900 dark:text-white"${_scopeId}>\u7CBE\u9009\u6807\u6746\u63A8\u8350</span>`);
              _push2(ssrRenderComponent(_component_USwitch, {
                modelValue: editingItem.value.isFeatured,
                "onUpdate:modelValue": ($event) => editingItem.value.isFeatured = $event
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="flex items-center justify-between p-2.5 rounded-lg border border-gray-200 dark:border-gray-800"${_scopeId}><span class="text-xs font-medium text-gray-900 dark:text-white"${_scopeId}>\u516C\u5F00\u4E0A\u67B6\u5C55\u793A</span>`);
              _push2(ssrRenderComponent(_component_USwitch, {
                "model-value": editingItem.value.status === 1,
                "onUpdate:modelValue": (val) => editingItem.value.status = val ? 1 : 0
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="flex items-center gap-2"${_scopeId}><span class="text-xs text-gray-500 whitespace-nowrap"${_scopeId}>\u6392\u5E8F\u6743\u91CD:</span>`);
              _push2(ssrRenderComponent(_component_UInput, {
                modelValue: editingItem.value.sortOrder,
                "onUpdate:modelValue": ($event) => editingItem.value.sortOrder = $event,
                modelModifiers: { number: true },
                type: "number",
                size: "sm",
                class: "w-full font-mono"
              }, null, _parent2, _scopeId));
              _push2(`</div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              editingItem.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "space-y-4 py-1"
              }, [
                createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-3 gap-3" }, [
                  createVNode(_component_UFormField, {
                    label: "\u6848\u4F8B Slug (ID)",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.id,
                        "onUpdate:modelValue": ($event) => editingItem.value.id = $event,
                        placeholder: "\u4F8B\u5982: b2b-valve-trade",
                        size: "sm",
                        disabled: !isEditingNew.value,
                        class: "w-full font-mono"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, {
                    label: "\u5BA2\u6237 / \u54C1\u724C",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.clientName,
                        "onUpdate:modelValue": ($event) => editingItem.value.clientName = $event,
                        placeholder: "\u4F8B\u5982: \u6052\u529B\u6D41\u4F53\u667A\u9020",
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, {
                    label: "\u4E1A\u52A1\u5206\u7C7B",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_USelect, {
                        modelValue: editingItem.value.category,
                        "onUpdate:modelValue": [($event) => editingItem.value.category = $event, onCategoryChange],
                        items: categorySelectOptions,
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-3 gap-3" }, [
                  createVNode(_component_UFormField, {
                    label: "\u6848\u4F8B\u4E3B\u6807\u9898",
                    required: "",
                    class: "sm:col-span-2"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.title,
                        "onUpdate:modelValue": ($event) => editingItem.value.title = $event,
                        placeholder: "\u4F8B\u5982: \u4ECE\u4F20\u7EDF\u5916\u8D38\u5230 Google \u641C\u7D22\u5934\u7248",
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, { label: "\u72EC\u7ACB\u7AD9\u4F53\u9A8C\u94FE\u63A5" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.websiteUrl,
                        "onUpdate:modelValue": ($event) => editingItem.value.websiteUrl = $event,
                        placeholder: "https://...",
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-3 gap-3" }, [
                  createVNode(_component_UFormField, {
                    label: "\u6838\u5FC3\u6210\u6548\u6307\u6807",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.metricValue,
                        "onUpdate:modelValue": ($event) => editingItem.value.metricValue = $event,
                        placeholder: "+280%",
                        size: "sm",
                        class: "w-full font-bold text-blue-600 dark:text-blue-400"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, {
                    label: "\u6210\u6548\u6307\u6807\u8BF4\u660E",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.metricLabel,
                        "onUpdate:modelValue": ($event) => editingItem.value.metricLabel = $event,
                        placeholder: "\u6D77\u5916\u771F\u5B9E\u8BE2\u76D8\u63D0\u5347",
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, { label: "\u9879\u76EE\u4EA4\u4ED8\u5468\u671F" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: editingItem.value.deliveryPeriod,
                        "onUpdate:modelValue": ($event) => editingItem.value.deliveryPeriod = $event,
                        placeholder: "\u4F8B\u5982: 1 \u5468",
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-3" }, [
                  createVNode(_component_UFormField, { label: "\u5C01\u9762\u56FE\u7247" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "space-y-2" }, [
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          createVNode(_component_UInput, {
                            modelValue: editingItem.value.coverImage,
                            "onUpdate:modelValue": ($event) => editingItem.value.coverImage = $event,
                            placeholder: "\u8F93\u5165\u56FE\u7247 URL \u6216\u70B9\u51FB\u53F3\u4FA7\u4E0A\u4F20",
                            size: "sm",
                            class: "flex-1 font-mono text-xs"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode("input", {
                            ref_key: "coverFileInput",
                            ref: coverFileInput,
                            type: "file",
                            class: "hidden",
                            accept: "image/png, image/jpeg, image/webp, image/gif",
                            onChange: handleCoverFileChange
                          }, null, 544),
                          createVNode(_component_UButton, {
                            color: "neutral",
                            variant: "outline",
                            size: "sm",
                            icon: "ph:cloud-arrow-up-bold",
                            loading: isUploadingCover.value,
                            onClick: triggerCoverUpload
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u4E0A\u4F20\u56FE\u7247 ")
                            ]),
                            _: 1
                          }, 8, ["loading"])
                        ]),
                        editingItem.value.coverImage ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "inline-flex items-center gap-2 p-1.5 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/40"
                        }, [
                          createVNode("img", {
                            src: editingItem.value.coverImage,
                            class: "h-8 w-14 object-cover rounded",
                            alt: "Preview"
                          }, null, 8, ["src"]),
                          createVNode("span", { class: "text-xs text-gray-500 truncate max-w-[200px]" }, toDisplayString(editingItem.value.coverImage), 1),
                          createVNode(_component_UButton, {
                            color: "neutral",
                            variant: "ghost",
                            size: "xs",
                            icon: "ph:x",
                            onClick: ($event) => editingItem.value.coverImage = ""
                          }, null, 8, ["onClick"])
                        ])) : createCommentVNode("", true)
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UFormField, { label: "\u6807\u7B7E (\u9017\u53F7\u5206\u9694)" }, {
                    default: withCtx(() => [
                      createVNode(_component_UInput, {
                        modelValue: tagsInput.value,
                        "onUpdate:modelValue": ($event) => tagsInput.value = $event,
                        placeholder: "\u5916\u8D38B2B, 15\u8BED\u79CD, SEO",
                        size: "sm",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                createVNode(_component_UFormField, {
                  label: "\u6848\u4F8B\u6458\u8981 (\u7B80\u8981\u6210\u6548\u63D0\u70BC)",
                  required: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UTextarea, {
                      modelValue: editingItem.value.summary,
                      "onUpdate:modelValue": ($event) => editingItem.value.summary = $event,
                      rows: 2,
                      placeholder: "\u6982\u62EC\u8BE5\u5BA2\u6237\u6838\u5FC3\u8BC9\u6C42\u3001\u65B9\u6848\u7A81\u7834\u4E0E\u589E\u957F\u6210\u6548...",
                      size: "sm",
                      class: "w-full text-xs"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_UFormField, { label: "\u6848\u4F8B\u6B63\u6587\u4E0E\u65B9\u6848\u62C6\u89E3 (\u5BCC\u6587\u672C / Markdown \u7F16\u8F91\u5668)" }, {
                  default: withCtx(() => [
                    createVNode(unref(RichEditor), {
                      modelValue: editingItem.value.content,
                      "onUpdate:modelValue": ($event) => editingItem.value.content = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-gray-100 dark:border-gray-800 items-center" }, [
                  createVNode("div", { class: "flex items-center justify-between p-2.5 rounded-lg border border-gray-200 dark:border-gray-800" }, [
                    createVNode("span", { class: "text-xs font-medium text-gray-900 dark:text-white" }, "\u7CBE\u9009\u6807\u6746\u63A8\u8350"),
                    createVNode(_component_USwitch, {
                      modelValue: editingItem.value.isFeatured,
                      "onUpdate:modelValue": ($event) => editingItem.value.isFeatured = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "flex items-center justify-between p-2.5 rounded-lg border border-gray-200 dark:border-gray-800" }, [
                    createVNode("span", { class: "text-xs font-medium text-gray-900 dark:text-white" }, "\u516C\u5F00\u4E0A\u67B6\u5C55\u793A"),
                    createVNode(_component_USwitch, {
                      "model-value": editingItem.value.status === 1,
                      "onUpdate:modelValue": (val) => editingItem.value.status = val ? 1 : 0
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    createVNode("span", { class: "text-xs text-gray-500 whitespace-nowrap" }, "\u6392\u5E8F\u6743\u91CD:"),
                    createVNode(_component_UInput, {
                      modelValue: editingItem.value.sortOrder,
                      "onUpdate:modelValue": ($event) => editingItem.value.sortOrder = $event,
                      modelModifiers: { number: true },
                      type: "number",
                      size: "sm",
                      class: "w-full font-mono"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-end gap-2.5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              size: "sm",
              onClick: ($event) => isEditModalOpen.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u53D6\u6D88 `);
                } else {
                  return [
                    createTextVNode(" \u53D6\u6D88 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              color: "primary",
              size: "sm",
              loading: modalSaving.value,
              onClick: saveModalItem
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u4FDD\u5B58\u5E76\u5E94\u7528 `);
                } else {
                  return [
                    createTextVNode(" \u4FDD\u5B58\u5E76\u5E94\u7528 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-end gap-2.5" }, [
                createVNode(_component_UButton, {
                  color: "neutral",
                  variant: "ghost",
                  size: "sm",
                  onClick: ($event) => isEditModalOpen.value = false
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u53D6\u6D88 ")
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode(_component_UButton, {
                  color: "primary",
                  size: "sm",
                  loading: modalSaving.value,
                  onClick: saveModalItem
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u4FDD\u5B58\u5E76\u5E94\u7528 ")
                  ]),
                  _: 1
                }, 8, ["loading"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UModal, {
        open: isDeleteModalOpen.value,
        "onUpdate:open": ($event) => isDeleteModalOpen.value = $event,
        title: "\u786E\u8BA4\u5220\u9664\u8BE5\u6848\u4F8B\uFF1F"
      }, {
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2, _c, _d;
          if (_push2) {
            _push2(`<p class="text-sm text-gray-600 dark:text-gray-300"${_scopeId}> \u60A8\u786E\u5B9A\u8981\u5220\u9664\u6848\u4F8B <span class="font-bold text-gray-900 dark:text-white"${_scopeId}>${ssrInterpolate((_a2 = deletingItem.value) == null ? void 0 : _a2.title)}</span> (${ssrInterpolate((_b2 = deletingItem.value) == null ? void 0 : _b2.id)}) \u5417\uFF1F \u5220\u9664\u540E\u8BE5\u6848\u4F8B\u5C06\u65E0\u6CD5\u5728\u5B98\u7F51\u524D\u53F0\u5C55\u793A\u3002 </p>`);
          } else {
            return [
              createVNode("p", { class: "text-sm text-gray-600 dark:text-gray-300" }, [
                createTextVNode(" \u60A8\u786E\u5B9A\u8981\u5220\u9664\u6848\u4F8B "),
                createVNode("span", { class: "font-bold text-gray-900 dark:text-white" }, toDisplayString((_c = deletingItem.value) == null ? void 0 : _c.title), 1),
                createTextVNode(" (" + toDisplayString((_d = deletingItem.value) == null ? void 0 : _d.id) + ") \u5417\uFF1F \u5220\u9664\u540E\u8BE5\u6848\u4F8B\u5C06\u65E0\u6CD5\u5728\u5B98\u7F51\u524D\u53F0\u5C55\u793A\u3002 ", 1)
              ])
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-end gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "ghost",
              size: "sm",
              onClick: ($event) => isDeleteModalOpen.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u53D6\u6D88 `);
                } else {
                  return [
                    createTextVNode(" \u53D6\u6D88 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              color: "error",
              size: "sm",
              loading: deleting.value,
              onClick: confirmDelete
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u786E\u8BA4\u5220\u9664 `);
                } else {
                  return [
                    createTextVNode(" \u786E\u8BA4\u5220\u9664 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-end gap-2" }, [
                createVNode(_component_UButton, {
                  color: "neutral",
                  variant: "ghost",
                  size: "sm",
                  onClick: ($event) => isDeleteModalOpen.value = false
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u53D6\u6D88 ")
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode(_component_UButton, {
                  color: "error",
                  size: "sm",
                  loading: deleting.value,
                  onClick: confirmDelete
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u786E\u8BA4\u5220\u9664 ")
                  ]),
                  _: 1
                }, 8, ["loading"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("themes/shoply/admin/pages/cases.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=cases-CXqueQ0Q.mjs.map
