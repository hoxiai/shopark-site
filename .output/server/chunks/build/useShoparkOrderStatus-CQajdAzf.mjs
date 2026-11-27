import { u as useShoparkConsoleCopy } from './useShoparkConsole-CNYTvsYD.mjs';

const useShoparkOrderStatus = () => {
  const { copy } = useShoparkConsoleCopy();
  const payStatusLabel = (payStatus) => {
    const labels = copy.value.orders.payStatus;
    return payStatus in labels ? labels[payStatus] : payStatus || labels.pending;
  };
  const payStatusColor = (payStatus) => {
    if (payStatus === "paid" || payStatus === "delivered") return "success";
    if (payStatus === "failed" || payStatus === "expired") return "error";
    if (payStatus === "cancelled" || payStatus === "refunded") return "neutral";
    return "warning";
  };
  const isPaid = (payStatus) => payStatus === "paid" || payStatus === "delivered";
  return { payStatusLabel, payStatusColor, isPaid };
};

export { useShoparkOrderStatus as u };
//# sourceMappingURL=useShoparkOrderStatus-CQajdAzf.mjs.map
