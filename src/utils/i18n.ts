export const LOCALES = ["ca", "es"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "ca";

const dataModules = import.meta.glob("../data/**/*.json", {
  eager: true,
  import: "default",
}) as Record<string, any>;

export function getLocaleFromPath(pathname: string): Locale {
  if (pathname === "/es" || pathname.startsWith("/es/")) {
    return "es";
  }
  return DEFAULT_LOCALE;
}

export function stripLocalePrefix(pathname: string): string {
  if (pathname === "/es") {
    return "/";
  }
  if (pathname.startsWith("/es/")) {
    return pathname.slice(3) || "/";
  }
  return pathname || "/";
}

export function localizePath(pathname: string, locale: Locale): string {
  const clean = stripLocalePrefix(pathname);
  if (locale === "es") {
    return clean === "/" ? "/es/" : `/es${clean}`;
  }
  return clean;
}

export function getLocalizedData<T = any>(locale: Locale, fileName: string): T {
  const localizedPath = `../data/${locale}/${fileName}.json`;
  const defaultPath = `../data/${fileName}.json`;

  return (dataModules[localizedPath] ?? dataModules[defaultPath]) as T;
}
