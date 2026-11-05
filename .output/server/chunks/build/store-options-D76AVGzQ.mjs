const SHOPARK_STORE_LANGS = ["en", "zh", "zh-HK", "id", "ru"];
const SHOPARK_STORE_CURRENCIES = ["USD", "CNY", "EUR", "GBP", "HKD", "JPY", "SGD", "AUD", "CAD", "IDR", "MYR", "THB", "RUB"];
const SHOPARK_STORE_TIMEZONES = [
  "America/New_York",
  "America/Chicago",
  "America/Los_Angeles",
  "Europe/London",
  "Europe/Berlin",
  "Europe/Moscow",
  "Asia/Shanghai",
  "Asia/Hong_Kong",
  "Asia/Singapore",
  "Asia/Tokyo",
  "Asia/Jakarta",
  "Asia/Bangkok",
  "Asia/Dubai",
  "Australia/Sydney",
  "UTC"
];
const SHOPARK_STORE_DEFAULTS = {
  en: { currency: "USD", timezone: "America/New_York" },
  zh: { currency: "USD", timezone: "Asia/Shanghai" },
  "zh-HK": { currency: "USD", timezone: "Asia/Hong_Kong" },
  id: { currency: "USD", timezone: "Asia/Jakarta" },
  ru: { currency: "USD", timezone: "Europe/Moscow" }
};
const isShoparkStoreLang = (value) => typeof value === "string" && SHOPARK_STORE_LANGS.includes(value);
const SHOPARK_STORE_NAME_MIN = 2;
const SHOPARK_STORE_NAME_MAX = 64;
const SHOPARK_STORE_DOMAIN_MIN = 3;
const SHOPARK_STORE_DOMAIN_MAX = 32;
const SHOPARK_STORE_DOMAIN_PATTERN = /^[a-z0-9][a-z0-9-]{1,30}[a-z0-9]$/;
const isShoparkStoreDomain = (value) => SHOPARK_STORE_DOMAIN_PATTERN.test(value) && !value.includes("--");

export { SHOPARK_STORE_DOMAIN_MIN as S, SHOPARK_STORE_DOMAIN_MAX as a, SHOPARK_STORE_TIMEZONES as b, SHOPARK_STORE_LANGS as c, SHOPARK_STORE_NAME_MIN as d, SHOPARK_STORE_NAME_MAX as e, SHOPARK_STORE_DEFAULTS as f, SHOPARK_STORE_CURRENCIES as g, isShoparkStoreLang as h, isShoparkStoreDomain as i };
//# sourceMappingURL=store-options-D76AVGzQ.mjs.map
