"use client";

import React, { useTransition, type ChangeEvent } from "react";
import { Select } from "./Select";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "../../i18n/routing";

export const ChangeLanguage = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const localActive = useLocale();

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <Select defaultValue={localActive} onChange={onChange} disabled={isPending} className="rounded-full bg-secondary text-black">
      <option value="es">Es</option>
      <option value="en">En</option>
    </Select>
  );
};
