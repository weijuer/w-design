var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { openBlock, createElementBlock, normalizeStyle, renderSlot, h, normalizeClass, createCommentVNode, computed, unref, createElementVNode, createTextVNode, toDisplayString, useSlots } from "vue";
const _sfc_main$8 = {
  props: {
    width: {
      type: String,
      default: null
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("aside", {
        class: "w-aside",
        style: normalizeStyle({ "--w-aside-width": __props.width })
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 4);
    };
  }
};
_sfc_main$8.install = (Vue) => {
  Vue.component(_sfc_main$8.name, _sfc_main$8);
};
var __glob_1_0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$8
});
var _badge = "";
const WBadge = ({ type, vertical, text }, { slots }) => {
  console.log(slots);
  const name2 = "w-badge";
  return h("span", {
    class: [name2, name2 + "--" + type, vertical]
  }, text || slots.default ? slots.default : null);
};
WBadge.props = {
  type: {
    type: String,
    default: "primary"
  },
  vertical: {
    type: String,
    default: "top"
  },
  text: String
};
var __glob_1_1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": WBadge
});
var _buttons_styl_vue_type_style_index_0_src_lang = "";
const _hoisted_1$3 = ["disabled", "autofocus", "type"];
const _hoisted_2$2 = {
  key: 0,
  class: /* @__PURE__ */ normalizeClass(["w-icon-loading", "w-icon--left"])
};
const _hoisted_3$1 = { key: 2 };
const _sfc_main$7 = {
  props: {
    type: {
      type: String,
      default: "default"
    },
    size: String,
    icon: {
      type: String,
      default: ""
    },
    nativeType: {
      type: String,
      default: "button"
    },
    outline: String,
    block: Boolean,
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean
  },
  emits: ["click"],
  setup(__props, { emit }) {
    function handleClick(event) {
      emit("click", event);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass(["w-button", [
          __props.type ? "w-button-" + __props.type : "",
          __props.size ? "w-button-" + __props.size : "",
          {
            "is-disabled": __props.disabled,
            "is-loading": __props.loading,
            "is-plain": __props.plain,
            "is-round": __props.round,
            "is-circle": __props.circle
          }
        ]]),
        onClick: handleClick,
        disabled: __props.disabled || __props.loading,
        autofocus: __props.autofocus,
        type: __props.nativeType
      }, [
        __props.loading ? (openBlock(), createElementBlock("i", _hoisted_2$2)) : createCommentVNode("", true),
        __props.icon && !__props.loading ? (openBlock(), createElementBlock("i", {
          key: 1,
          class: normalizeClass([__props.icon, "w-icon--left"])
        }, null, 2)) : createCommentVNode("", true),
        _ctx.$slots.default ? (openBlock(), createElementBlock("span", _hoisted_3$1, [
          renderSlot(_ctx.$slots, "default")
        ])) : createCommentVNode("", true)
      ], 10, _hoisted_1$3);
    };
  }
};
_sfc_main$7.install = (Vue) => {
  Vue.component(_sfc_main$7.name, _sfc_main$7);
};
var __glob_1_2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$7
});
var card_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$2 = { class: "w-card-header" };
const _hoisted_2$1 = {
  key: 0,
  class: "w-card-title"
};
const _hoisted_3 = { class: "w-card-body" };
const _hoisted_4 = {
  key: 0,
  class: "w-card-footer"
};
const __default__ = {
  name: "w-card"
};
function setup(__props, { emit }) {
  const props = __props;
  const cardType = computed(() => props.type ? `w-card-${props.type}` : "");
  function descHandler() {
    emit("desc-click");
  }
  return (_ctx, _cache) => {
    return openBlock(), createElementBlock("div", {
      class: normalizeClass(["w-card", [unref(cardType)]])
    }, [
      createElementVNode("div", _hoisted_1$2, [
        _ctx.$slots.title || __props.title ? (openBlock(), createElementBlock("h3", _hoisted_2$1, [
          renderSlot(_ctx.$slots, "title", {}, () => [
            createTextVNode(toDisplayString(__props.title), 1)
          ])
        ])) : createCommentVNode("", true),
        _ctx.$slots.desc || __props.desc ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: "w-card-desc",
          onClick: descHandler
        }, [
          renderSlot(_ctx.$slots, "desc", {}, () => [
            createTextVNode(toDisplayString(__props.desc), 1)
          ])
        ])) : createCommentVNode("", true)
      ]),
      createElementVNode("div", _hoisted_3, [
        renderSlot(_ctx.$slots, "default")
      ]),
      _ctx.$slots.footer || __props.footer ? (openBlock(), createElementBlock("div", _hoisted_4, [
        renderSlot(_ctx.$slots, "footer")
      ])) : createCommentVNode("", true)
    ], 2);
  };
}
const _sfc_main$6 = /* @__PURE__ */ Object.assign(__default__, {
  props: {
    type: String,
    title: { default: () => {
    }, type: [Object, String] },
    footer: { default: () => {
    }, type: [Object, String] },
    desc: String
  },
  emits: ["desc-click"],
  setup
});
_sfc_main$6.install = (Vue) => {
  Vue.component(_sfc_main$6.name, _sfc_main$6);
};
var __glob_1_3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$6
});
var container_vue_vue_type_style_index_0_lang = "";
const _sfc_main$5 = {
  props: {
    direction: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const isVertical = computed(() => {
      if (props.direction === "vertical") {
        return true;
      } else if (props.direction === "horizontal") {
        return false;
      }
      if (slots && slots.default) {
        const vNodes = slots.default();
        return vNodes.some((vNode) => {
          const tag = vNode.type.name;
          return tag === "ElHeader" || tag === "ElFooter";
        });
      } else {
        return false;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", {
        class: normalizeClass(["w-container", { "is-vertical": unref(isVertical) }])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
};
_sfc_main$5.install = (Vue) => {
  Vue.component(_sfc_main$5.name, _sfc_main$5);
};
var __glob_1_4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$5
});
const _sfc_main$4 = {
  props: {
    height: {
      type: String,
      default: null
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("footer", {
        class: "w-footer",
        style: normalizeStyle({ "--w-footer-height": __props.height })
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 4);
    };
  }
};
_sfc_main$4.install = (Vue) => {
  Vue.component(_sfc_main$4.name, _sfc_main$4);
};
var __glob_1_5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$4
});
const _sfc_main$3 = {
  props: {
    height: {
      type: String,
      default: null
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("header", {
        class: "w-header",
        style: normalizeStyle({ "--w-header-height": __props.height })
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 4);
    };
  }
};
_sfc_main$3.install = (Vue) => {
  Vue.component(_sfc_main$3.name, _sfc_main$3);
};
var __glob_1_6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$3
});
var icon_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  for (const [key, val] of props) {
    sfc[key] = val;
  }
  return sfc;
};
const _hoisted_1$1 = { class: "w-icon" };
const _hoisted_2 = ["xlink:href"];
const _sfc_main$2 = {
  props: {
    name: String,
    useClass: String
  },
  setup(__props) {
    const props = __props;
    const iconName = computed(() => props.name ? `#${props.name}` : "#");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", _hoisted_1$1, [
        createElementVNode("use", {
          "xlink:href": unref(iconName),
          class: normalizeClass([__props.useClass])
        }, null, 10, _hoisted_2)
      ]);
    };
  }
};
var WIcon = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-502d3554"]]);
WIcon.install = (Vue) => {
  Vue.component(WIcon.name, WIcon);
};
var __glob_1_7 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": WIcon
});
const _sfc_main$1 = {};
const _hoisted_1 = { class: "w-main" };
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("main", _hoisted_1, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var WMain = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
WMain.install = (Vue) => {
  Vue.component(WMain.name, WMain);
};
var __glob_1_8 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": WMain
});
var tooltip_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  name: "w-tooltip",
  props: {
    tip: String,
    direction: String
  },
  setup(props) {
    const tooltipType = computed(() => props.direction ? `w-tooltip-${props.direction}` : "");
    return { tooltipType };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", {
    class: normalizeClass(["w-tooltip", [$setup.tooltipType]]),
    "data-tooltip": "tip"
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var WTooltip = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
WTooltip.install = (Vue) => {
  Vue.component(WTooltip.name, WTooltip);
};
var __glob_1_9 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": WTooltip
});
const name = "w-design-vue";
const version$1 = "0.0.10";
const title = "W Design Vue";
const description = "A simple components UI based on Vue 3.x + Vite 2.x.";
const license = "MIT";
const author = "Weijuer<https://github.com/weijuer>";
const repository = {
  type: "git",
  url: "git+https://github.com/weijuer/w-design-vue.git"
};
const homepage = "https://github.com/weijuer/w-design-vue/tree/master/#readme";
const bugs = {
  url: "https://github.com/weijuer/w-design-vue/issues"
};
const keywords = [
  "vitejs",
  "vue3",
  "component",
  "components",
  "ui",
  "framework",
  "frontend"
];
const files = [
  "lib",
  "packages"
];
const main = "lib/w-design-vue.umd.js";
const module = "lib/w-design-vue.es.js";
const style = "lib/style.css";
const exports = {
  ".": {
    "import": "./lib/w-design-vue.es.js",
    require: "./lib/w-design-vue.umd.js"
  },
  "./lib/style.css": "./lib/style.css"
};
const scripts = {
  dev: "vite",
  build: "vite build",
  serve: "vite preview",
  "docs:dev": "vitepress dev docs",
  "docs:build": "vitepress build docs",
  "docs:serve": "vitepress serve docs"
};
const dependencies = {
  vue: "^3.2.21"
};
const engines = {
  node: ">=12.0.0"
};
const peerDependencies = {
  "@vue/compiler-sfc": ">=3.1.0",
  vue: ">=3.1.0",
  vite: ">=2.0.0"
};
const devDependencies = {
  "@vitejs/plugin-vue": "^1.9.4",
  "@vue/compiler-sfc": "^3.2.21",
  eslint: "^8.2.0",
  "eslint-plugin-vue": "^8.0.3",
  mockjs: "^1.1.0",
  msw: "latest",
  sass: "^1.43.4",
  stylus: "^0.55.0",
  vite: "^2.6.14",
  vitepress: "^0.20.1"
};
const msw = {
  workerDirectory: "public"
};
var pkg = {
  name,
  version: version$1,
  title,
  description,
  "private": true,
  license,
  author,
  repository,
  homepage,
  bugs,
  keywords,
  files,
  main,
  module,
  style,
  exports,
  scripts,
  dependencies,
  engines,
  peerDependencies,
  devDependencies,
  msw
};
const version = pkg.version;
const getAllModules = () => {
  const modules2 = { "./aside/index.js": __glob_1_0, "./badge/badge.js": __glob_1_1, "./button/index.js": __glob_1_2, "./card/index.js": __glob_1_3, "./container/index.js": __glob_1_4, "./footer/index.js": __glob_1_5, "./header/index.js": __glob_1_6, "./icon/index.js": __glob_1_7, "./main/index.js": __glob_1_8, "./tooltip/index.js": __glob_1_9 };
  const _modules = {};
  Object.keys(modules2).forEach((key) => {
    var _a;
    const fileName = key.split("/")[1];
    const name2 = `W${fileName.substring(0, 1).toUpperCase() + fileName.substring(1)}`;
    _modules[name2] = (_a = modules2[key]) == null ? void 0 : _a.default;
  });
  return _modules;
};
const modules = getAllModules();
const install = (Vue) => {
  Object.entries(modules).map(([name2, mod]) => {
    Vue.component(name2, mod);
  });
};
var index = __spreadProps(__spreadValues({}, modules), {
  version,
  install
});
export { index as default, install, modules, version };
