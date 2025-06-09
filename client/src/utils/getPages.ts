export const getPages = (currentPage: number, totalPages: number) => {
  const pages = [];
  const maxVisiblePages = 4; // Сколько страниц показывать вокруг текущей

  // Всегда добавляем первую страницу
  pages.push(1);

  // Определяем диапазон вокруг текущей страницы
  const startPage = Math.max(2, currentPage - Math.floor(maxVisiblePages / 2));
  const endPage = Math.min(totalPages - 1, currentPage + Math.floor(maxVisiblePages / 2));

  // Если разрыв между первой и началом диапазона > 1, добавляем "..."
  if (startPage > 2) {
    pages.push("...");
  }

  // Добавляем страницы в диапазоне
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  // Если разрыв между концом диапазона и последней страницей > 1, добавляем "..."
  if (endPage < totalPages - 1) {
    pages.push("...");
  }

  // Всегда добавляем последнюю страницу (если она не совпадает с первой)
  if (totalPages > 1) {
    pages.push(totalPages);
  }

  return pages;
}