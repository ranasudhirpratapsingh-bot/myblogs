module.exports = (req, res, next) => {
  const currentUserHeader = req.header('x-current-user');
  req.currentUser = typeof currentUserHeader === 'string' ? currentUserHeader.trim() : '';
  next();
};
