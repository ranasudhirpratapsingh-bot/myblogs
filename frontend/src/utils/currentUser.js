export const CURRENT_USER_KEY = 'myblogs_current_author';

export const getCurrentUser = () => {
  try {
    const storedUser = localStorage.getItem(CURRENT_USER_KEY);
    return storedUser ? storedUser.trim() : '';
  } catch (error) {
    console.error('Error reading current user from localStorage:', error);
    return '';
  }
};

export const setCurrentUser = (user) => {
  if (!user) return;
  try {
    localStorage.setItem(CURRENT_USER_KEY, user.trim());
  } catch (error) {
    console.error('Error saving current user to localStorage:', error);
  }
};

export const isOwner = (blogAuthor) => {
  const currentUser = getCurrentUser();
  if (!currentUser || !blogAuthor) return false;
  return currentUser.trim().toLowerCase() === blogAuthor.trim().toLowerCase();
};
