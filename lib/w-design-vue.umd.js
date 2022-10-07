function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

(function (l, r) {
  if (!l || l.getElementById('livereloadscript')) return;
  r = l.createElement('script');
  r.async = 1;
  r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1';
  r.id = 'livereloadscript';
  l.getElementsByTagName('head')[0].appendChild(r);
})(self.document);

(function (global, factory) {
  (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory(exports, require('virtual:svg-icons-register')) : typeof define === 'function' && define.amd ? define(['exports', 'virtual:svg-icons-register'], factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.myLib = {}));
})(this, function (exports) {
  'use strict';

  var version = "0.0.11";

  var install = function install(app) {
    var components = undefined('./*/index.js');
    Object.values(components).map(function (_ref) {
      var component = _ref.default;

      if (component.install) {
        app.use(component);
      }
    });

    app.config.globalProperties.$message = function (message) {
      console.log(message);
    };

    return app;
  };

  var index = {
    version: version,
    install: install
  };
  exports["default"] = index;
  exports.install = install;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});
