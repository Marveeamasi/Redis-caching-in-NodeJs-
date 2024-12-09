app.use((req, res, next) => {
  res.set('Cache-Control', 'public, max-age=3600');
  next();
});
