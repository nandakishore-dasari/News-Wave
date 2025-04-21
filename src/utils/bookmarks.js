export const addBookmark = (article) => {
  const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
  if (!bookmarks.some(b => b.url === article.url)) {
    bookmarks.push(article);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }
};

export const removeBookmark = (articleUrl) => {
  const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
  const updatedBookmarks = bookmarks.filter(b => b.url !== articleUrl);
  localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
};

export const isBookmarked = (articleUrl) => {
  const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
  return bookmarks.some(b => b.url === articleUrl);
}; 