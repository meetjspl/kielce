module.exports = {
  globDirectory: 'dist/',
  globPatterns: ['index.html', '*.js', '*.css', 'assets/**/*.png'],
  dontCacheBustUrlsMatching: new RegExp('.+.[a-f0-9]{20}..+'),
  maximumFileSizeToCacheInBytes: 5000000,
  swSrc: 'src/service-worker.js',
  swDest: 'dist/service-worker.js'
};
