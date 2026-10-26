import { bJ as useState } from './server.mjs';
import { computed, readonly } from 'vue';

const useNotificationState = () => {
  const unreadCount = useState("notification-unread-count", () => 0);
  const initialized = useState("notification-count-initialized", () => false);
  const activeScope = useState("notification-count-scope", () => "");
  const activeRequests = useState("notification-count-active-requests", () => 0);
  const requestSequence = useState("notification-count-request-sequence", () => 0);
  const mutationRevision = useState("notification-count-mutation-revision", () => 0);
  const pending = computed(() => activeRequests.value > 0);
  const resetNotificationState = () => {
    requestSequence.value += 1;
    mutationRevision.value += 1;
    activeScope.value = "";
    unreadCount.value = 0;
    initialized.value = false;
  };
  const refreshUnreadCount = async () => {
    const requestId = ++requestSequence.value;
    const revision = mutationRevision.value;
    activeRequests.value += 1;
    try {
      const response = await $fetch("/api/users/notifications/count");
      if (requestId !== requestSequence.value || revision !== mutationRevision.value) return false;
      unreadCount.value = Math.max(0, Number(response.unreadCount) || 0);
      initialized.value = true;
      return true;
    } catch {
      return false;
    } finally {
      activeRequests.value = Math.max(0, activeRequests.value - 1);
    }
  };
  const markNotificationRead = async (notificationId) => {
    await $fetch(`/api/users/notifications/${notificationId}`, { method: "PUT" });
    mutationRevision.value += 1;
    unreadCount.value = Math.max(0, unreadCount.value - 1);
    void refreshUnreadCount();
  };
  const markAllNotificationsRead = async () => {
    await $fetch("/api/users/notifications/read-all", { method: "PUT" });
    mutationRevision.value += 1;
    unreadCount.value = 0;
    void refreshUnreadCount();
  };
  const deleteNotification = async (notificationId) => {
    await $fetch(`/api/users/notifications/${notificationId}`, { method: "DELETE" });
    mutationRevision.value += 1;
    void refreshUnreadCount();
  };
  const clearAllNotifications = async () => {
    await $fetch("/api/users/notifications/clear-all", { method: "DELETE" });
    mutationRevision.value += 1;
    unreadCount.value = 0;
    void refreshUnreadCount();
  };
  const syncNotificationScope = (scope) => {
    if (scope === activeScope.value) {
      if (scope && !initialized.value) void refreshUnreadCount();
      return;
    }
    resetNotificationState();
    activeScope.value = scope;
    if (scope) void refreshUnreadCount();
  };
  return {
    unreadCount: readonly(unreadCount),
    initialized: readonly(initialized),
    pending,
    refreshUnreadCount,
    resetNotificationState,
    syncNotificationScope,
    markNotificationRead,
    markAllNotificationsRead,
    deleteNotification,
    clearAllNotifications
  };
};

export { useNotificationState as u };
//# sourceMappingURL=useNotificationState-CKG5uYoC.mjs.map
