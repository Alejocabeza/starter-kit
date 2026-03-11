import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = "es";
  return {
    locale,
    messages: (
      (await import(`../messages/${locale}.json`)) as {
        default: Record<string, string>;
      }
    ).default,
  };
});
