Package.describe({
  name: 'jjman505:jquery-rotate',
  version: '1.0.0',
  summary: 'A wrapper for jquery-rotate',
  git: 'https://github.com/jjman505/meteor-jquery-rotate',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.addFiles('jquery-rotate.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('jjman505:jquery-rotate');
  api.addFiles('jquery-rotate-tests.js');
});
