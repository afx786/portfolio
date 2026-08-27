const ENABLED_KEY = "aaqib_cat_enabled";

export function getCatEnabled(): boolean {
  if (typeof window === "undefined") return true;
  try {
    return localStorage.getItem(ENABLED_KEY) !== "0";
  } catch {
    return true;
  }
}

export function setCatEnabled(value: boolean): void {
  try {
    localStorage.setItem(ENABLED_KEY, value ? "1" : "0");
  } catch {
    /* ignore */
  }
  window.dispatchEvent(new CustomEvent("aaqib:cat"));
}

export function subscribeCat(callback: () => void): () => void {
  window.addEventListener("aaqib:cat", callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener("aaqib:cat", callback);
    window.removeEventListener("storage", callback);
  };
}

export function getCatSnapshot(): boolean {
  return getCatEnabled();
}