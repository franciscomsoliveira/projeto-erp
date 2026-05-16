export function getStorageJson(key) {
  const stored = localStorage.getItem(key);

  if (!stored || stored === "undefined" || stored === "null") {
    localStorage.removeItem(key);

    return null;
  }

  try {
    return JSON.parse(stored);
  } catch {
    localStorage.removeItem(key);

    return null;
  }
}
