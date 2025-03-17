// i18n/request.ts
import { getRequestConfig } from "next-intl/server";
import { IntlErrorCode } from "next-intl";

export default getRequestConfig(async () => {
  const locale = "en";

  return {
    locale,
    messages: (await import(`@/public/locales/${locale}.json`)).default,
    onError(error) {
      if (error.code === IntlErrorCode.MISSING_MESSAGE) {
        // Missing translations are expected and should only log an error
        console.error(error);
      } else {
        // Other errors indicate a bug in the app and should be reported
        reportError(error);
      }
    },
    getMessageFallback({ namespace, key, error }) {
      const path = [namespace, key].filter((part) => part != null).join(".");

      if (error.code === IntlErrorCode.MISSING_MESSAGE) {
        return path + " is not yet translated";
      } else {
        return "Dear developer, please fix this message: " + path;
      }
    },
  };
});

export const locales = ["en", "fr"];
