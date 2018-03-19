var libraries = [
  {
    'url': [
      '/js/vendor/mocha/1.9.0/mocha.js',
      '/js/vendor/codecamp/bundle.js'
    ],
    'label': 'CodeCamp Test Suite',
    'group': 'CodeCamp Test Suite'
  },
  {
    'url': 'http://cc0304/assets/css/simple-css-reset.css',
    'label': 'Simple CSS Reset',
    'group': 'CSS Reset'
  },
  {
    'url': 'http://cc0304/assets/js/bootstrap/4.0.0.-beta.3/css/bootstrap-reboot.css',
    'label': 'Bootstrap Reboot',
    'group': 'CSS Reset'
  },
  {
    'url': [
      'http://cc0304/assets/js/jquery/3.2.1/jquery.js',
      'http://cc0304/assets/js/bootstrap/4.0.0.-beta.3/css/bootstrap.css',
      'http://cc0304/assets/js/bootstrap/4.0.0.-beta.3/js/bootstrap.js'
    ],
    'label': 'Bootstrap 4.0.0.beta.3',
    'group': 'Bootstrap'
  },
  {
    'url': 'http://cc0304/assets/fonts/font-awesome/4.7.0/css/font-awesome.min.css',
    'label': 'Font Awesome 4.7.0',
    'group': 'Font Awesome'
  },
  {
    'url': 'http://cc0304/assets/js/jquery/3.2.1/jquery.js',
    'label': 'jQuery 3.2.1',
    'group': 'jQuery'
  }
];

window.libraries = libraries; // expose a command line API

libraries.userSpecified = JSON.parse(store.localStorage.getItem('libraries') || '[]');
for (var i = 0; i < libraries.userSpecified.length; i++) {
  libraries.push(libraries.userSpecified[i]);
}

libraries.add = function (lib) {
  // Extract each script from a list (as documented) or use the default way
  if (lib.scripts) {
    lib.scripts.forEach(function (script) {
      script.group = lib.text;
      script.label = script.text;
      libraries.userSpecified.push(script);
      libraries.push(script);
    });
  } else {
    // Adding a lib according to the above schema
    lib.group = 'Custom';
    libraries.userSpecified.push(lib);
    libraries.push(lib);
  }
  try {
    store.localStorage.setItem('libraries', JSON.stringify(this.userSpecified));
  } catch (e) {} // just in case of DOM_22 error, makes me so sad to use this :(
  $('#library').trigger('init');
};

libraries.clear = function () {
  libraries.userSpecified = [];
  store.localStorage.removeItem('libraries');
  var length = libraries.length;
  for (var i = 0; i < length; i++) {
    if (libraries[i].group === 'Custom') {
      libraries.splice(i, 1);
      length--;
    }
  }
  // force a refresh?
  $('#library').trigger('init');
};
