import { useTranslations } from "next-intl";
import { useMemo } from "react";

export const useTranslatedData = <T>(
  namespace: string,
  dataFactory: (t: (key: string) => string) => T
) => {
  const t = useTranslations(namespace);

  return useMemo(() => dataFactory(t), [t]);
};
