export function isSystemDarkTheme() {
  return (
    !!window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
}

export function isDocumentDarkTheme() {
  return document.documentElement.classList.contains("dark");
}

export function isSettingDark() {
  return localStorage.theme
    ? localStorage.theme === "dark"
    : isSystemDarkTheme();
}

export function toggleDarkTheme(flag?: boolean) {
  const next = flag ?? !isSettingDark();

  document.documentElement.classList.toggle("dark", next);
  localStorage.setItem("theme", next ? "dark" : "light");

  return next;
}
