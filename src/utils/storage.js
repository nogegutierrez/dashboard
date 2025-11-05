const STORAGE_KEY = 'scannerData';

export function saveToStorage(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.warn('No se pudo guardar en localStorage:', e);
  }
}

export function loadFromStorage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.warn('No se pudo cargar desde localStorage:', e);
  }
  return null;
}

