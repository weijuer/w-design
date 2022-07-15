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
import { computed, openBlock, createElementBlock, normalizeStyle, unref, renderSlot, h, provide, inject, createElementVNode, toDisplayString, mergeProps, resolveComponent, normalizeClass, createBlock, createCommentVNode, createTextVNode, Teleport, createVNode, Transition, withCtx, withDirectives, isRef, Fragment, renderList, vModelSelect, ref, watch, nextTick, reactive, vShow, vModelDynamic, onMounted, defineComponent, toHandlers, TransitionGroup, onBeforeUnmount } from "vue";
var aside_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const __default__$m = {
  name: "w-aside"
};
const _sfc_main$q = /* @__PURE__ */ Object.assign(__default__$m, {
  props: {
    width: {
      type: [String, Number],
      default: 200
    }
  },
  setup(__props) {
    const props = __props;
    const asideWith = computed(() => typeof props.width === "string" ? props.width : `${props.width}px`);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("aside", {
        class: "w-aside",
        style: normalizeStyle({ "--w-aside-width": unref(asideWith) })
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 4);
    };
  }
});
var WAside = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["__scopeId", "data-v-b70ec9e4"]]);
WAside.install = (Vue) => {
  Vue.component(WAside.name, WAside);
};
var __glob_2_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": WAside
}, Symbol.toStringTag, { value: "Module" }));
const WBadge = ({ type, vertical, text }, { slots }) => {
  const name = "w-badge";
  return h("span", {
    class: [name, name + "--" + type, vertical]
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
WBadge.install = (Vue) => {
  Vue.component(WBadge.name, WBadge);
};
var __glob_2_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": WBadge
}, Symbol.toStringTag, { value: "Module" }));
var Breadcrumb_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$g = { class: "w-breadcrumb" };
const __default__$l = {
  name: "w-breadcrumb"
};
const _sfc_main$p = /* @__PURE__ */ Object.assign(__default__$l, {
  props: {
    separator: {
      type: String,
      default: "\u2022"
    }
  },
  setup(__props) {
    const props = __props;
    provide("breadcrumb", { separator: props.separator });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("ul", _hoisted_1$g, [
        renderSlot(_ctx.$slots, "default")
      ]);
    };
  }
});
const _hoisted_1$f = { class: "w-breadcrumb-item" };
const _hoisted_2$9 = { class: "w-breadcrumb-item-separator" };
const __default__$k = {
  name: "w-breadcrumb-item"
};
const _sfc_main$o = /* @__PURE__ */ Object.assign(__default__$k, {
  setup(__props) {
    const breadcrumb = inject("breadcrumb");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("li", _hoisted_1$f, [
        renderSlot(_ctx.$slots, "default"),
        createElementVNode("span", _hoisted_2$9, toDisplayString(unref(breadcrumb).separator), 1)
      ]);
    };
  }
});
_sfc_main$p.BreadcrumbItem = _sfc_main$o;
_sfc_main$p.install = (Vue) => {
  Vue.component(_sfc_main$p.name, _sfc_main$p);
  Vue.component(_sfc_main$o.name, _sfc_main$o);
};
var __glob_2_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$p
}, Symbol.toStringTag, { value: "Module" }));
if (typeof window !== "undefined") {
  let loadSvg = function() {
    var body = document.body;
    var svgDom = document.getElementById("__w_svg_icons__");
    if (!svgDom) {
      svgDom = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svgDom.style.position = "absolute";
      svgDom.style.width = "0";
      svgDom.style.height = "0";
      svgDom.id = "__w_svg_icons__";
      svgDom.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      svgDom.setAttribute("xmlns:link", "http://www.w3.org/1999/xlink");
    }
    svgDom.innerHTML = '<symbol class="icon" viewBox="0 0 1024 1024"  id="icon-delete"><path d="M874.048 874.048c-199.936 199.936-524.16 199.936-724.096 0-199.936-199.936-199.936-524.16 0-724.096 199.936-199.936 524.16-199.936 724.096 0 199.936 199.936 199.936 524.16 0 724.096zM512 48C255.744 48 48 255.744 48 512s207.744 464 464 464 464-207.744 464-464S768.256 48 512 48zm209.536 684.736c-15.808 15.744-41.344 15.744-57.152-.064L511.808 580.096 359.424 732.48c-15.744 15.808-41.344 15.808-57.088.064-15.808-15.744-15.744-41.344 0-57.152L454.72 523.008 302.784 371.072c-15.808-15.808-15.808-41.408-.064-57.152 15.808-15.744 41.344-15.744 57.152.064L511.808 465.92 664 313.792c15.744-15.808 41.344-15.808 57.088-.064 15.744 15.808 15.744 41.344 0 57.152L568.896 523.008l152.576 152.576c15.808 15.808 15.808 41.344.064 57.152z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-error"><path d="M464 720a48 48 0 1 0 96 0 48 48 0 1 0-96 0ZM480 416v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8z" /><path d="m955.7 856-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zm-783.5-27.9L512 239.9l339.8 588.2H172.2z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-file"><path d="m792.371 342.733-184.115-177.46c-8.602-8.294-20.07-12.902-32.154-12.902l-289.28-.614s-69.017 4.505-69.017 67.584v585.42s3.072 67.585 69.017 67.585h450.356s69.017-3.175 69.017-67.584V374.886c0-12.083-5.017-23.654-13.824-32.153zM609.178 228.25l120.627 117.145h-97.69s-23.04-1.024-23.04-22.528c.103-21.504.103-94.617.103-94.617zm151.04 576.41c0 22.63-23.04 22.527-23.04 22.527H286.822c-21.504 0-23.04-22.528-23.04-22.528V219.24c0-20.993 23.04-22.529 23.04-22.529H563.2v126.055c0 62.464 69.018 67.584 69.018 67.584h128v414.31z" /><path d="M365.363 477.594c0 12.492 10.343 22.528 23.04 22.528h248.32c12.698 0 23.04-10.138 23.04-22.528s-10.342-22.528-23.04-22.528h-248.32c-12.697 0-23.04 10.137-23.04 22.528zm271.36 91.136h-248.32c-12.697 0-23.04 10.137-23.04 22.528s10.343 22.528 23.04 22.528h248.32c12.698 0 23.04-10.138 23.04-22.528s-10.342-22.528-23.04-22.528zm0 113.664h-248.32c-12.697 0-23.04 10.137-23.04 22.528s10.343 22.528 23.04 22.528h248.32c12.698 0 23.04-10.138 23.04-22.528s-10.342-22.528-23.04-22.528z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-loading"><path d="M511.883 287.998h-.362a31.999 31.999 0 0 1-31.66-31.977v-.361c0-.105.117-11.723.117-63.659v-96a31.999 31.999 0 1 1 64.001 0v96c0 52.586-.112 63.882-.12 64.338a32.003 32.003 0 0 1-31.976 31.66zm.115 672A31.999 31.999 0 0 1 480 928v-96.38c0-51.61-.112-63.174-.115-63.286s0-.242 0-.361a31.999 31.999 0 0 1 63.998-.314c0 .455.119 11.711.119 64.034v96.307a31.999 31.999 0 0 1-32.003 32zM330.9 363.021a31.898 31.898 0 0 1-22.866-9.612c-.076-.076-8.208-8.37-44.932-45.095l-67.903-67.885a31.999 31.999 0 0 1 45.257-45.253l67.881 67.882c37.183 37.183 45.09 45.253 45.412 45.578A31.999 31.999 0 0 1 330.9 363.02zm475.238 475.094a31.901 31.901 0 0 1-22.628-9.375l-67.885-67.88c-36.724-36.725-45.018-44.86-45.098-44.94a31.999 31.999 0 0 1 44.777-45.73c.325.318 8.395 8.23 45.578 45.412l67.881 67.882a31.999 31.999 0 0 1-22.625 54.63zm-582.137 0a31.901 31.901 0 0 0 22.628-9.375l67.882-67.88c36.724-36.725 45.022-44.86 45.097-44.94a31.999 31.999 0 0 0-44.776-45.73c-.325.318-8.395 8.23-45.578 45.412l-67.881 67.885A31.999 31.999 0 0 0 224 838.115zm31.949-294.056h-.362c-.104 0-11.722-.116-63.658-.116H95.943a31.999 31.999 0 1 1 0-64.002h95.997c52.586 0 63.882.112 64.337.12a31.999 31.999 0 0 1 31.66 31.977v.361a32.003 32.003 0 0 1-31.988 31.66zm511.99 0a32.003 32.003 0 0 1-31.995-31.667v-.361a31.999 31.999 0 0 1 31.66-31.97c.455 0 11.754-.12 64.34-.12h96.001a31.999 31.999 0 0 1 0 64.002h-96c-51.936 0-63.554.112-63.666.116h-.336zM693 363.018a31.999 31.999 0 0 1-22.863-54.382c.318-.325 8.23-8.395 45.412-45.578l67.882-67.885a31.999 31.999 0 1 1 45.263 45.256l-67.892 67.882c-31.02 31.023-41.644 41.76-44.241 44.393l-.697.723a31.909 31.909 0 0 1-22.864 9.59z" /></symbol><symbol class="icon" viewBox="0 0 1024 1024"  id="icon-upload"><path d="M782.725 327.91 540.18 85.366a35.845 35.845 0 0 0-13.762-10.701c-.22-.097-.44-.205-.67-.302a33.976 33.976 0 0 0-13.344-2.734l-.087.005-.322-.015c-.092 0-.18.015-.271.015-.098 0-.19-.015-.282-.015a33.766 33.766 0 0 0-20.214 6.666 35.963 35.963 0 0 0-6.8 6.277L241.076 327.926c-6.978 6.978-10.86 15.98-11.085 25.42a35.43 35.43 0 0 0 9.37 24.935l.512.512a34.493 34.493 0 0 0 24.018 9.58 36.557 36.557 0 0 0 26.337-11.295L476.16 191.145v499.999a35.84 35.84 0 1 0 71.68 0V191.329l185.733 185.733c6.979 6.979 15.98 10.86 25.416 11.085l.86.01a35.473 35.473 0 0 0 24.08-9.38l.511-.511c13.302-13.835 12.77-36.383-1.715-50.356z" /><path d="M880.64 747.576v61.44c0 39.588-32.092 71.68-71.68 71.68H215.04c-39.588 0-71.68-32.092-71.68-71.68v-61.44a35.84 35.84 0 1 0-71.68 0v61.44c0 79.176 64.184 143.36 143.36 143.36h593.92c79.176 0 143.36-64.184 143.36-143.36v-61.44a35.84 35.84 0 1 0-71.68 0z" /></symbol>';
    body.insertBefore(svgDom, body.firstChild);
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadSvg);
  } else {
    loadSvg();
  }
}
var icon_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$e = ["xlink:href"];
const __default__$j = {
  name: "w-icon",
  inheritAttrs: false
};
const _sfc_main$n = /* @__PURE__ */ Object.assign(__default__$j, {
  props: {
    prefix: {
      type: String,
      default: "icon"
    },
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: "#333"
    }
  },
  setup(__props) {
    const props = __props;
    const symbolId = computed(() => `#${props.prefix}-${props.name}`);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", mergeProps({ class: "w-icon" }, _ctx.$attrs, { "aria-hidden": "true" }), [
        createElementVNode("use", { "xlink:href": unref(symbolId) }, null, 8, _hoisted_1$e)
      ], 16);
    };
  }
});
_sfc_main$n.install = (Vue) => {
  Vue.component(_sfc_main$n.name, _sfc_main$n);
};
var __glob_2_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$n
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$d = ["disabled", "autofocus", "type"];
const _hoisted_2$8 = { key: 2 };
const __default__$i = {
  name: "w-button"
};
const _sfc_main$m = /* @__PURE__ */ Object.assign(__default__$i, {
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
      const _component_w_icon = resolveComponent("w-icon");
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
        __props.loading ? (openBlock(), createBlock(_component_w_icon, {
          key: 0,
          class: "w-icon-loading w-icon--left",
          name: "loading"
        })) : createCommentVNode("", true),
        __props.icon && !__props.loading ? (openBlock(), createBlock(_component_w_icon, {
          key: 1,
          class: "w-icon--left",
          name: __props.icon
        }, null, 8, ["name"])) : createCommentVNode("", true),
        _ctx.$slots.default ? (openBlock(), createElementBlock("span", _hoisted_2$8, [
          renderSlot(_ctx.$slots, "default")
        ])) : createCommentVNode("", true)
      ], 10, _hoisted_1$d);
    };
  }
});
_sfc_main$m.install = (Vue) => {
  Vue.component(_sfc_main$m.name, _sfc_main$m);
};
var __glob_2_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$m
}, Symbol.toStringTag, { value: "Module" }));
var card_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$c = { class: "w-card-header" };
const _hoisted_2$7 = {
  key: 0,
  class: "w-card-title"
};
const _hoisted_3$7 = { class: "w-card-body" };
const _hoisted_4$5 = {
  key: 0,
  class: "w-card-footer"
};
const __default__$h = {
  name: "w-card"
};
const _sfc_main$l = /* @__PURE__ */ Object.assign(__default__$h, {
  props: {
    type: String,
    title: { default: () => {
    }, type: [Object, String] },
    footer: { default: () => {
    }, type: [Object, String] },
    desc: String
  },
  setup(__props) {
    const props = __props;
    const cardType = computed(() => props.type ? `w-card-${props.type}` : "");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["w-card", [unref(cardType)]])
      }, [
        createElementVNode("div", _hoisted_1$c, [
          _ctx.$slots.title || __props.title ? (openBlock(), createElementBlock("h3", _hoisted_2$7, [
            renderSlot(_ctx.$slots, "title", {}, () => [
              createTextVNode(toDisplayString(__props.title), 1)
            ])
          ])) : createCommentVNode("", true),
          _ctx.$slots.desc || __props.desc ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: "w-card-desc",
            onClick: _cache[0] || (_cache[0] = (...args) => _ctx.descHandler && _ctx.descHandler(...args))
          }, [
            renderSlot(_ctx.$slots, "desc", {}, () => [
              createTextVNode(toDisplayString(__props.desc), 1)
            ])
          ])) : createCommentVNode("", true)
        ]),
        createElementVNode("div", _hoisted_3$7, [
          renderSlot(_ctx.$slots, "default")
        ]),
        _ctx.$slots.footer || __props.footer ? (openBlock(), createElementBlock("div", _hoisted_4$5, [
          renderSlot(_ctx.$slots, "footer")
        ])) : createCommentVNode("", true)
      ], 2);
    };
  }
});
_sfc_main$l.install = (app) => {
  app.component(_sfc_main$l.name, _sfc_main$l);
};
var __glob_2_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$l
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$k = {};
_sfc_main$k.install = (Vue) => {
  Vue.component(_sfc_main$k.name, _sfc_main$k);
};
var __glob_2_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$k
}, Symbol.toStringTag, { value: "Module" }));
var container_vue_vue_type_style_index_0_lang = "";
const __default__$g = {
  name: "w-container"
};
const _sfc_main$j = /* @__PURE__ */ Object.assign(__default__$g, {
  props: {
    direction: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const isVertical = computed(() => {
      if (props.direction === "vertical") {
        return true;
      } else if (props.direction === "horizontal") {
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
});
_sfc_main$j.install = (Vue) => {
  Vue.component(_sfc_main$j.name, _sfc_main$j);
};
var __glob_2_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$j
}, Symbol.toStringTag, { value: "Module" }));
var footer_vue_vue_type_style_index_0_scoped_true_lang = "";
const __default__$f = {
  name: "w-footer"
};
const _sfc_main$i = /* @__PURE__ */ Object.assign(__default__$f, {
  props: {
    height: {
      type: [String, Number],
      default: null
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("footer", {
        class: "w-footer",
        style: normalizeStyle({ "--w-footer-height": __props.height })
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 4);
    };
  }
});
var WFooter = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-e25276d0"]]);
WFooter.install = (Vue) => {
  Vue.component(WFooter.name, WFooter);
};
var __glob_2_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": WFooter
}, Symbol.toStringTag, { value: "Module" }));
var header_vue_vue_type_style_index_0_lang = "";
const __default__$e = {
  name: "w-header"
};
const _sfc_main$h = /* @__PURE__ */ Object.assign(__default__$e, {
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
});
_sfc_main$h.install = (Vue) => {
  Vue.component(_sfc_main$h.name, _sfc_main$h);
};
var __glob_2_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$h
}, Symbol.toStringTag, { value: "Module" }));
var Layout_vue_vue_type_style_index_0_lang = "";
const __default__$d = {
  name: "w-layout"
};
const _sfc_main$g = /* @__PURE__ */ Object.assign(__default__$d, {
  props: {
    hasAside: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", {
        class: normalizeClass(["w-layout", { "w-layout--has-aside": __props.hasAside }])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
_sfc_main$g.install = (Vue) => {
  Vue.component(_sfc_main$g.name, _sfc_main$g);
};
var __glob_2_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$g
}, Symbol.toStringTag, { value: "Module" }));
var main_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$f = {
  name: "w-main"
};
const _hoisted_1$b = { class: "w-main" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("main", _hoisted_1$b, [
    renderSlot(_ctx.$slots, "default", {}, void 0, true)
  ]);
}
var WMain = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$1], ["__scopeId", "data-v-f91d6a48"]]);
WMain.install = (Vue) => {
  Vue.component(WMain.name, WMain);
};
var __glob_2_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": WMain
}, Symbol.toStringTag, { value: "Module" }));
var Menu_vue_vue_type_style_index_0_scoped_true_lang = "";
const __default__$c = {
  name: "w-menu"
};
const _sfc_main$e = /* @__PURE__ */ Object.assign(__default__$c, {
  props: {
    mode: {
      type: String,
      validator(value) {
        return ["vertical", "horizontal", "vertical-right", "inline"].includes(value);
      },
      default: "vertical"
    },
    theme: {
      type: String,
      validator(value) {
        return ["light", "dark"].includes(value);
      },
      default: "light"
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("ul", {
        role: "menu",
        class: normalizeClass(["w-menu", __props.mode ? "w-menu-" + __props.mode : "", __props.theme ? "w-menu-" + __props.theme : ""])
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 2);
    };
  }
});
var Menu = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-c47f7128"]]);
var MenuItem_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$a = {
  role: "menu-item",
  class: /* @__PURE__ */ normalizeClass(["w-menu-item"])
};
const __default__$b = {
  name: "w-menu-item"
};
const _sfc_main$d = /* @__PURE__ */ Object.assign(__default__$b, {
  props: {
    disabled: Boolean,
    key: String,
    title: String
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("li", _hoisted_1$a, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ]);
    };
  }
});
var MenuItem = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-60a094c6"]]);
Menu.Panel = MenuItem;
Menu.install = (Vue) => {
  Vue.component(Menu.name, Menu);
  Vue.component(MenuItem.name, MenuItem);
};
var __glob_2_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": Menu
}, Symbol.toStringTag, { value: "Module" }));
var modal_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$9 = {
  key: 0,
  class: "modal-mask"
};
const _hoisted_2$6 = { class: "modal-wrapper" };
const _hoisted_3$6 = { class: "modal-container" };
const _hoisted_4$4 = { class: "modal-header" };
const _hoisted_5$3 = /* @__PURE__ */ createTextVNode("default header");
const _hoisted_6$2 = { class: "modal-body" };
const _hoisted_7$2 = /* @__PURE__ */ createTextVNode("default body");
const _hoisted_8$2 = { class: "modal-footer" };
const _hoisted_9$2 = /* @__PURE__ */ createTextVNode(" default footer ");
const __default__$a = {
  name: "w-modal"
};
const _sfc_main$c = /* @__PURE__ */ Object.assign(__default__$a, {
  props: {
    value: Boolean
  },
  emits: ["close"],
  setup(__props, { emit }) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Teleport, { to: "body" }, [
        createVNode(Transition, { name: "modal" }, {
          default: withCtx(() => [
            _ctx.show ? (openBlock(), createElementBlock("div", _hoisted_1$9, [
              createElementVNode("div", _hoisted_2$6, [
                createElementVNode("div", _hoisted_3$6, [
                  createElementVNode("div", _hoisted_4$4, [
                    renderSlot(_ctx.$slots, "header", {}, () => [
                      _hoisted_5$3
                    ])
                  ]),
                  createElementVNode("div", _hoisted_6$2, [
                    renderSlot(_ctx.$slots, "body", {}, () => [
                      _hoisted_7$2
                    ])
                  ]),
                  createElementVNode("div", _hoisted_8$2, [
                    renderSlot(_ctx.$slots, "footer", {}, () => [
                      _hoisted_9$2,
                      createElementVNode("button", {
                        class: "modal-default-button",
                        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close"))
                      }, "OK")
                    ])
                  ])
                ])
              ])
            ])) : createCommentVNode("", true)
          ]),
          _: 3
        })
      ]);
    };
  }
});
var Modal = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-2db97884"]]);
Modal.install = (app) => {
  app.component(Modal.name, Modal);
};
var __glob_2_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": Modal
}, Symbol.toStringTag, { value: "Module" }));
var pagination_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$8 = { class: "w-pagination" };
const _hoisted_2$5 = { class: "w-pagination-info" };
const _hoisted_3$5 = { class: "w-pagination-info-text" };
const _hoisted_4$3 = /* @__PURE__ */ createTextVNode(" \u5171 ");
const _hoisted_5$2 = { class: "w-pagination-info-total" };
const _hoisted_6$1 = /* @__PURE__ */ createTextVNode(" \u6761\u8BB0\u5F55 ");
const _hoisted_7$1 = { class: "w-pagination-info-text" };
const _hoisted_8$1 = /* @__PURE__ */ createTextVNode(" \u6BCF\u9875\u663E\u793A ");
const _hoisted_9$1 = ["value"];
const _hoisted_10$1 = /* @__PURE__ */ createTextVNode(" \u6761 ");
const _hoisted_11$1 = { class: "w-pagination-list" };
const _hoisted_12$1 = {
  key: 0,
  class: "w-pagination-item"
};
const _hoisted_13$1 = {
  key: 1,
  class: "w-pagination-item"
};
const _hoisted_14$1 = ["onClick"];
const _hoisted_15$1 = {
  key: 2,
  class: "w-pagination-item"
};
const _hoisted_16$1 = {
  key: 3,
  class: "w-pagination-item"
};
const __default__$9 = {
  name: "w-pagination"
};
const _sfc_main$b = /* @__PURE__ */ Object.assign(__default__$9, {
  props: {
    total: {
      type: Number,
      default: 100
    },
    current: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 10
    },
    pageSizes: {
      type: Array,
      default: []
    },
    locale: {
      type: Object,
      default: () => {
        return {
          total: "\u5171",
          count: "\u6761",
          perPage: "\u6BCF\u9875"
        };
      }
    }
  },
  emits: ["change", "update:current"],
  setup(__props, { emit }) {
    const props = __props;
    const pages = computed(() => {
      const { total, current } = props;
      const totalArray = [];
      if (total <= 5) {
        for (let i = 1; i <= total; i++) {
          totalArray.push(i);
        }
      } else {
        if (current <= 3) {
          for (let i = 1; i <= 5; i++) {
            totalArray.push(i);
          }
          totalArray.push("...");
          totalArray.push(total);
        } else if (current >= total - 2) {
          totalArray.push(1);
          totalArray.push("...");
          for (let i = total - 4; i <= total; i++) {
            totalArray.push(i);
          }
        } else {
          totalArray.push(1);
          totalArray.push("...");
          for (let i = current - 2; i <= current + 2; i++) {
            totalArray.push(i);
          }
          totalArray.push("...");
          totalArray.push(total);
        }
      }
      return totalArray;
    });
    const onPageSizeChange = () => {
      emit("update:current", 1);
      emit("change", {
        current: 1,
        pageSize: props.pageSize
      });
    };
    const changePage = (page2) => {
      if (page2 < 1) {
        page2 = 1;
      }
      if (page2 > props.total) {
        page2 = props.total;
      }
      emit("update:current", page2);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$8, [
        createElementVNode("div", _hoisted_2$5, [
          createElementVNode("span", _hoisted_3$5, [
            _hoisted_4$3,
            createElementVNode("span", _hoisted_5$2, toDisplayString(__props.total), 1),
            _hoisted_6$1
          ]),
          createElementVNode("span", _hoisted_7$1, [
            _hoisted_8$1,
            withDirectives(createElementVNode("select", {
              class: "w-pagination-info-select",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(pageSize) ? pageSize.value = $event : null),
              onChange: onPageSizeChange
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.pageSizes, (item) => {
                return openBlock(), createElementBlock("option", { value: item }, toDisplayString(item), 9, _hoisted_9$1);
              }), 256))
            ], 544), [
              [vModelSelect, __props.pageSize]
            ]),
            _hoisted_10$1
          ])
        ]),
        createElementVNode("ul", _hoisted_11$1, [
          __props.total > 1 ? (openBlock(), createElementBlock("li", _hoisted_12$1, [
            createElementVNode("a", {
              class: "w-pagination-link",
              href: "javascript:;",
              onClick: _cache[1] || (_cache[1] = ($event) => changePage(1))
            }, "\u9996\u9875")
          ])) : createCommentVNode("", true),
          __props.total > 1 ? (openBlock(), createElementBlock("li", _hoisted_13$1, [
            createElementVNode("a", {
              class: "w-pagination-link",
              href: "javascript:;",
              onClick: _cache[2] || (_cache[2] = ($event) => changePage(__props.current - 1))
            }, "\u4E0A\u4E00\u9875")
          ])) : createCommentVNode("", true),
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(pages), (page2) => {
            return openBlock(), createElementBlock("li", {
              class: normalizeClass(["w-pagination-item", { "w-pagination-item-active": page2 === __props.current }])
            }, [
              createElementVNode("a", {
                class: "w-pagination-link",
                href: "javascript:;",
                onClick: ($event) => changePage(page2)
              }, toDisplayString(page2), 9, _hoisted_14$1)
            ], 2);
          }), 256)),
          __props.total > 1 ? (openBlock(), createElementBlock("li", _hoisted_15$1, [
            createElementVNode("a", {
              class: "w-pagination-link",
              href: "javascript:;",
              onClick: _cache[3] || (_cache[3] = ($event) => changePage(__props.current + 1))
            }, "\u4E0B\u4E00\u9875")
          ])) : createCommentVNode("", true),
          __props.total > 1 ? (openBlock(), createElementBlock("li", _hoisted_16$1, [
            createElementVNode("a", {
              class: "w-pagination-link",
              href: "javascript:;",
              onClick: _cache[4] || (_cache[4] = ($event) => changePage(__props.total))
            }, "\u5C3E\u9875")
          ])) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
_sfc_main$b.install = (Vue) => {
  Vue.component(_sfc_main$b.name, _sfc_main$b);
};
var __glob_2_14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$b
}, Symbol.toStringTag, { value: "Module" }));
var Progress_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$7 = { class: "w-progress" };
const __default__$8 = {
  name: "w-progress"
};
const _sfc_main$a = /* @__PURE__ */ Object.assign(__default__$8, {
  props: {
    percent: {
      type: Number,
      default: 0
    }
  },
  setup(__props) {
    const props = __props;
    const inner = ref(null);
    watch(() => props.percent, (percent) => {
      console.log("progress watch", percent);
      nextTick(() => {
        inner.value.style.width = percent + "%";
      });
    }, { immediate: true });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$7, [
        createElementVNode("div", {
          ref_key: "inner",
          ref: inner,
          class: "w-progress-inner"
        }, null, 512)
      ]);
    };
  }
});
var Progress = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-450c7176"]]);
Progress.install = (Vue) => {
  Vue.component(Progress.name, Progress);
};
var __glob_2_15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": Progress
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$9 = {
  name: "w-radio"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div");
}
var WRadio = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render]]);
WRadio.install = (Vue) => {
  Vue.component(WRadio.name, WRadio);
};
var __glob_2_16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": WRadio
}, Symbol.toStringTag, { value: "Module" }));
var table_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$6 = { class: "w-table-wrapper" };
const _hoisted_2$4 = { class: "w-table-container" };
const _hoisted_3$4 = { class: "loading" };
const _hoisted_4$2 = /* @__PURE__ */ createElementVNode("svg", {
  class: "loading-svg",
  viewBox: "0 0 50 50"
}, [
  /* @__PURE__ */ createElementVNode("circle", {
    cx: "25",
    cy: "25",
    r: "20",
    fill: "none",
    class: "circle"
  })
], -1);
const _hoisted_5$1 = [
  _hoisted_4$2
];
const _hoisted_6 = { key: 0 };
const _hoisted_7 = { class: "w-table-thead" };
const _hoisted_8 = ["type"];
const _hoisted_9 = {
  key: 0,
  class: "w-row-selection"
};
const _hoisted_10 = { class: "w-dropdown-btn" };
const _hoisted_11 = /* @__PURE__ */ createElementVNode("i", { class: "fa fa-chevron-down" }, null, -1);
const _hoisted_12 = { class: "w-dropdown-menu" };
const _hoisted_13 = ["onClick"];
const _hoisted_14 = { class: "w-table-tbody" };
const _hoisted_15 = { key: "empty-messgae" };
const _hoisted_16 = ["colspan"];
const _hoisted_17 = ["type", "value", "checked", "onChange"];
const _hoisted_18 = ["title"];
const _hoisted_19 = {
  key: 1,
  class: "w-table-tfoot"
};
const _hoisted_20 = ["colspan"];
const __default__$7 = {
  name: "w-table"
};
const _sfc_main$8 = /* @__PURE__ */ Object.assign(__default__$7, {
  props: {
    isLocal: {
      type: Boolean,
      default: false
    },
    rows: { type: Array, require: true, default: () => [] },
    columns: { type: Array, require: true, default: () => [] },
    caption: String,
    loading: {
      type: Boolean,
      default: false
    },
    responsive: {
      type: Boolean,
      default: true
    },
    striped: {
      type: Boolean,
      default: false
    },
    locale: {
      type: Object,
      default: () => {
        return {
          emptyMessage: "\u6682\u65E0\u6570\u636E",
          total: "\u5171",
          count: "\u6761",
          perPage: "\u6BCF\u9875"
        };
      }
    },
    rowKey: {
      type: String,
      default: "id"
    },
    pagination: {
      type: [Object, Boolean],
      default: function() {
        return {
          currentIndex: 1,
          pageSize: 10,
          totalCount: 0,
          pageSizes: [10, 20, 30]
        };
      }
    },
    rowSelection: {
      type: [Boolean, Object],
      default: null
    }
  },
  emits: ["change", "select", "select-all"],
  setup(__props, { emit }) {
    const props = __props;
    const checkAll = ref(null);
    const state = reactive({
      selectedRows: [],
      selectedRowKeys: [],
      isAllSelected: false
    });
    const rowKey = computed(() => {
      return props.rowKey;
    });
    const getColspan = computed(() => {
      const { columns, rowSelection } = props;
      return columns.length + (rowSelection ? 1 : 0);
    });
    const dataSource = computed(() => {
      console.log("dataSource");
      const { isLocal, rows, pagination } = props;
      if (isLocal) {
        const { currentIndex, pageSize: pageSize2 } = pagination;
        const start = (currentIndex - 1) * pageSize2;
        const end = start + pageSize2;
        return rows.slice(start, end);
      } else {
        return rows;
      }
    });
    const inputType = computed(() => {
      const { rowSelection } = props;
      return rowSelection && rowSelection.type === "radio" ? "radio" : "checkbox";
    });
    const indexStyle = computed(() => {
      const { rowSelection } = props;
      return rowSelection ? "sticky" : null;
    });
    const tableClass = computed(() => {
      const { striped, responsive, rowSelection, bordered } = props;
      return [
        "w-table",
        striped ? "w-table-striped" : null,
        responsive ? "w-table-responsive" : null,
        bordered ? "w-table-bordered" : null,
        dataSource.length > 10 ? "w-table-scroll" : null,
        rowSelection ? "w-table-row-selection" : null
      ];
    });
    const getCheckboxProps = (row) => {
      const { rowSelection } = props;
      if (rowSelection) {
        const { type, checkStrictly } = rowSelection;
        return {
          type,
          value: row[rowKey],
          checked: state.selectedRowKeys.includes(row[rowKey]),
          disabled: checkStrictly && !state.selectedRowKeys.includes(row[rowKey])
        };
      }
    };
    const isRowChecked = (row) => {
      const { rowSelection } = props;
      if (rowSelection) {
        const { type, checkStrictly } = rowSelection;
        if (type === "radio") {
          return state.selectedRowKeys.includes(row[rowKey]);
        } else if (type === "checkbox") {
          return checkStrictly ? state.selectedRowKeys.includes(row[rowKey]) : state.selectedRowKeys.some((key) => key === row[rowKey]);
        }
      }
    };
    const getIndex = (index2) => {
      const {
        pagination: { currentIndex, pageSize: pageSize2 }
      } = props;
      console.log("getIndex", currentIndex, pageSize2);
      return (currentIndex - 1) * pageSize2 + index2 + 1;
    };
    const colStyle = (column) => {
      const style = {};
      if (column.width) {
        style.width = typeof column.width === "string" ? column.width : `${column.width}px`;
      }
      return style;
    };
    const onSelect = (row, event) => {
      const { checked, disabled } = event.target;
      const { onChange, onSelect: onSelect2 } = props.rowSelection;
      if (disabled) {
        return;
      }
      if (checked) {
        state.selectedRows.push(row);
        state.selectedRowKeys.push(row[this.rowKey]);
      } else {
        state.selectedRows = state.selectedRows.filter((item) => item !== row);
        state.selectedRowKeys = state.selectedRowKeys.filter((item) => item !== row[this.rowKey]);
      }
      onChange == null ? void 0 : onChange(state.selectedRowKeys, state.selectedRows);
      onSelect2 == null ? void 0 : onSelect2(row, checked, state.selectedRows, event);
    };
    const onSelectAll = (event) => {
      const isChecked = event.target.checked;
      const { onChange, onSelectAll: onSelectAll2 } = props.rowSelection;
      const { rows, rowKey: rowKey2 } = props;
      if (isChecked) {
        state.selectedRows = rows;
      } else {
        state.selectedRows = [];
        state.selectedRowKeys = [];
      }
      onChange == null ? void 0 : onChange(state.selectedRowKeys, state.selectedRows);
      onSelectAll2 == null ? void 0 : onSelectAll2(isChecked, state.selectedRows);
    };
    watch(() => state.selectedRowKeys, (selectedRowKeys) => {
      state.isAllSelected = selectedRowKeys.length === props.rows.length;
    });
    const onPageChange = (page2, pageSize2) => {
      props.pagination.current = page2;
      props.pagination.pageSize = pageSize2;
      emit("change", props.pagination);
    };
    const onPageSizeChange = (current, pageSize2) => {
      props.pagination.current = page;
      props.pagination.pageSize = pageSize2;
      emit("change", props.pagination);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$6, [
        createElementVNode("div", _hoisted_2$4, [
          withDirectives(createElementVNode("div", _hoisted_3$4, _hoisted_5$1, 512), [
            [vShow, __props.loading]
          ]),
          createElementVNode("table", {
            class: normalizeClass(unref(tableClass))
          }, [
            __props.caption ? (openBlock(), createElementBlock("caption", _hoisted_6, toDisplayString(__props.caption), 1)) : createCommentVNode("", true),
            createElementVNode("colgroup", null, [
              __props.rowSelection ? (openBlock(), createElementBlock("col", {
                key: 0,
                style: normalizeStyle(unref(indexStyle))
              }, null, 4)) : createCommentVNode("", true),
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.columns, (column) => {
                return openBlock(), createElementBlock("col", {
                  style: normalizeStyle(colStyle(column)),
                  key: column.name
                }, null, 4);
              }), 128))
            ]),
            createElementVNode("thead", _hoisted_7, [
              createElementVNode("tr", null, [
                __props.rowSelection ? (openBlock(), createElementBlock("th", {
                  key: 0,
                  class: normalizeClass(__props.rowSelection.selections ? null : "sticky")
                }, [
                  withDirectives(createElementVNode("input", {
                    ref_key: "checkAll",
                    ref: checkAll,
                    type: unref(inputType),
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.isAllSelected = $event),
                    onChange: onSelectAll
                  }, null, 40, _hoisted_8), [
                    [vModelDynamic, _ctx.isAllSelected]
                  ]),
                  __props.rowSelection.selections ? (openBlock(), createElementBlock("div", _hoisted_9, [
                    createElementVNode("div", _hoisted_10, [
                      _hoisted_11,
                      createElementVNode("ul", _hoisted_12, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.rowSelection.selections, (selection, index2) => {
                          return openBlock(), createElementBlock("li", {
                            key: "selection" + index2
                          }, [
                            createElementVNode("a", {
                              href: "javascript:;",
                              onClick: selection.onSelect
                            }, toDisplayString(selection.text), 9, _hoisted_13)
                          ]);
                        }), 128))
                      ])
                    ])
                  ])) : createCommentVNode("", true)
                ], 2)) : createCommentVNode("", true),
                (openBlock(true), createElementBlock(Fragment, null, renderList(__props.columns, (column) => {
                  return openBlock(), createElementBlock("th", {
                    key: column.name,
                    class: normalizeClass(column.sticky ? "sticky" : null)
                  }, toDisplayString(column.title), 3);
                }), 128))
              ])
            ]),
            createElementVNode("tbody", _hoisted_14, [
              unref(dataSource).length === 0 ? (openBlock(), createElementBlock("tr", _hoisted_15, [
                createElementVNode("td", {
                  colspan: unref(getColspan),
                  class: "empty-messgae"
                }, toDisplayString(__props.locale.emptyMessage), 9, _hoisted_16)
              ])) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(unref(dataSource), (row, index2) => {
                return openBlock(), createElementBlock("tr", {
                  key: row[unref(rowKey)]
                }, [
                  __props.rowSelection ? (openBlock(), createElementBlock("td", {
                    key: 0,
                    class: normalizeClass([__props.rowSelection.selections ? "" : "sticky"])
                  }, [
                    createElementVNode("input", mergeProps({
                      type: unref(inputType),
                      value: row[unref(rowKey)],
                      checked: isRowChecked(row)
                    }, getCheckboxProps(row), {
                      onChange: ($event) => onSelect(row, $event)
                    }), null, 16, _hoisted_17)
                  ], 2)) : createCommentVNode("", true),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(__props.columns, (column) => {
                    return openBlock(), createElementBlock("td", {
                      key: column.name,
                      title: column.ellipsis ? row[column.name] : null,
                      class: normalizeClass({ sticky: column.sticky })
                    }, [
                      column.scopedSlot ? renderSlot(_ctx.$slots, column.scopedSlot, {
                        key: 0,
                        index: index2,
                        row,
                        data: row[column.name]
                      }, () => [
                        createTextVNode(toDisplayString(row[column.name]), 1)
                      ]) : (openBlock(), createElementBlock("span", {
                        key: 1,
                        class: normalizeClass(column.ellipsis ? "w-ellipsis" : null)
                      }, toDisplayString(column.name === "index" ? getIndex(index2) : row[column.name]), 3))
                    ], 10, _hoisted_18);
                  }), 128))
                ]);
              }), 128))
            ]),
            _ctx.$slots.tfoot ? (openBlock(), createElementBlock("tfoot", _hoisted_19, [
              createElementVNode("tr", null, [
                createElementVNode("td", { colspan: unref(getColspan) }, [
                  renderSlot(_ctx.$slots, "tfoot")
                ], 8, _hoisted_20)
              ])
            ])) : createCommentVNode("", true)
          ], 2)
        ]),
        __props.pagination ? (openBlock(), createBlock(unref(_sfc_main$b), mergeProps({ key: 0 }, __spreadProps(__spreadValues({}, __props.pagination), { locale: __props.locale }), {
          onPageSizeChange,
          onChange: onPageChange
        }), null, 16)) : createCommentVNode("", true)
      ]);
    };
  }
});
_sfc_main$8.install = (Vue) => {
  Vue.component(_sfc_main$8.name, _sfc_main$8);
};
var __glob_2_17 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$8
}, Symbol.toStringTag, { value: "Module" }));
var Tabs_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$5 = { class: "w-tabs" };
const _hoisted_2$3 = ["onClick"];
const _hoisted_3$3 = { class: "w-tabs-panes" };
const _hoisted_4$1 = {
  key: 0,
  class: "w-tab-pane-content"
};
const __default__$6 = {
  name: "w-tabs",
  inheritAttrs: false
};
const _sfc_main$7 = /* @__PURE__ */ Object.assign(__default__$6, {
  props: {
    modelValue: {
      type: [String, Number],
      default: 0
    }
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { emit }) {
    const props = __props;
    const panes = ref([]);
    const labelWrapper = ref();
    const labelItems = ref();
    const line = ref();
    const activeKey = ref(props.modelValue);
    const activeIndex = computed(() => panes.value.findIndex((pane) => pane.name === activeKey.value));
    provide("tabs", { activeKey, setTabPanes });
    function getLabelCls(item) {
      return {
        active: item.name === activeKey.value,
        disabled: item.disabled
      };
    }
    function setTabPanes(pane) {
      console.log("setTabPanes", pane);
      panes.value.push(pane);
    }
    function onLableClick(item, index2) {
      const { name, disabled } = item;
      if (disabled) {
        return;
      }
      activeKey.value = name || index2 + 1;
      emit("change", name, index2);
      emit("update:modelValue", name);
      calculateLinePosition();
    }
    function isActive(pane, index2) {
      return activeKey.value === pane.name ? pane.name : index2 + 1;
    }
    function calculateLinePosition() {
      nextTick(() => {
        if (activeIndex.value === -1) {
          return;
        }
        const activeLabel = labelItems.value[activeIndex.value];
        const { left: wrapperLeft } = labelWrapper.value.getBoundingClientRect();
        const { left: labelLeft, width } = activeLabel.getBoundingClientRect();
        line.value.style.left = labelLeft - wrapperLeft + labelWrapper.value.scrollLeft + "px";
        line.value.style.width = width + "px";
      });
    }
    onMounted(() => {
      calculateLinePosition();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true),
        createElementVNode("ul", {
          class: "w-tabs-label-wrapper",
          ref_key: "labelWrapper",
          ref: labelWrapper
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(panes.value, (item, index2) => {
            return openBlock(), createElementBlock("li", {
              class: normalizeClass(["w-tabs-label-item", getLabelCls(item)]),
              onClick: ($event) => onLableClick(item, index2),
              ref_for: true,
              ref_key: "labelItems",
              ref: labelItems
            }, toDisplayString(item.label), 11, _hoisted_2$3);
          }), 256)),
          createElementVNode("div", {
            class: "line",
            ref_key: "line",
            ref: line
          }, null, 512)
        ], 512),
        createElementVNode("div", _hoisted_3$3, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(panes.value, (pane, index2) => {
            return openBlock(), createElementBlock("div", {
              key: "pane-" + index2,
              ref_for: true,
              ref: "tab-pane",
              class: normalizeClass(["w-tab-pane", { active: isActive(pane, index2) }])
            }, [
              isActive(pane, index2) ? (openBlock(), createElementBlock("div", _hoisted_4$1)) : createCommentVNode("", true)
            ], 2);
          }), 128))
        ])
      ]);
    };
  }
});
var Tabs = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-35083676"]]);
const _sfc_main$6 = defineComponent({
  name: "w-tab-pane",
  props: {
    label: {
      type: [String, Number]
    },
    name: {
      type: [String, Number],
      require: true
    },
    disabled: Boolean
  },
  setup(props, { slots }) {
    const { setTabPanes } = inject("tabs");
    setTabPanes(__spreadValues(__spreadValues({}, props), slots));
  },
  render() {
    return null;
  }
});
Tabs.TabPane = _sfc_main$6;
Tabs.install = (Vue) => {
  Vue.component(Tabs.name, Tabs);
  Vue.component(_sfc_main$6.name, _sfc_main$6);
};
var __glob_2_18 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": Tabs
}, Symbol.toStringTag, { value: "Module" }));
var tooltip_vue_vue_type_style_index_0_lang = "";
const __default__$5 = {
  name: "w-tooltip"
};
const _sfc_main$5 = /* @__PURE__ */ Object.assign(__default__$5, {
  props: {
    tooltip: { type: String, default: "", required: true },
    direction: { type: String, default: "top" }
  },
  setup(__props) {
    const props = __props;
    const type = computed(() => props.direction ? `w-tooltip-${props.direction}` : "");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(["w-tooltip", [unref(type)]]),
        "data-tooltip": "tip"
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
_sfc_main$5.install = (Vue) => {
  Vue.component(_sfc_main$5.name, _sfc_main$5);
};
var __glob_2_19 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$5
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$4 = {
  key: 0,
  class: "w-tree-node__children"
};
const __default__$4 = {
  name: "w-tree-node",
  inheritAttrs: false
};
const _sfc_main$4 = /* @__PURE__ */ Object.assign(__default__$4, {
  props: {
    node: {
      type: [String, Number],
      required: true
    },
    title: {
      type: [String, Object],
      required: true
    },
    icon: {
      type: Object,
      default: null
    },
    expanded: Boolean,
    selected: Boolean,
    checked: Boolean,
    halfChecked: Boolean,
    checkable: Boolean,
    selectable: Boolean,
    disabled: Boolean
  },
  setup(__props) {
    inject("wTree", {});
    return (_ctx, _cache) => {
      const _component_w_icon = resolveComponent("w-icon");
      const _component_w_tree_node = resolveComponent("w-tree-node");
      return openBlock(), createElementBlock("li", {
        role: "tree-node",
        class: normalizeClass(["w-tree-node", { "w-tree-node-selected": __props.selected, "w-tree-node-expanded": __props.expanded }])
      }, [
        createElementVNode("div", {
          class: normalizeClass(["w-tree-node__content", { bold: _ctx.isFolder, active: __props.expanded }])
        }, [
          createElementVNode("span", {
            class: "w-tree-switcher",
            onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onExpand && _ctx.onExpand(...args))
          }, [
            _ctx.$slots.icon ? renderSlot(_ctx.$slots, "icon", { key: 0 }) : createCommentVNode("", true),
            _ctx.isFolder ? (openBlock(), createBlock(_component_w_icon, {
              key: 1,
              name: "chevron-right",
              class: normalizeClass({ "fa-rotate-90": __props.expanded })
            }, null, 8, ["class"])) : createCommentVNode("", true)
          ]),
          createElementVNode("span", {
            class: "w-tree-title",
            onClick: _cache[1] || (_cache[1] = (...args) => _ctx.onSelect && _ctx.onSelect(...args))
          }, [
            _ctx.$slots.title || __props.title ? renderSlot(_ctx.$slots, "title", { key: 0 }, () => [
              createTextVNode(toDisplayString(__props.title), 1)
            ]) : createCommentVNode("", true)
          ])
        ], 2),
        createVNode(Transition, { name: "slide-down" }, {
          default: withCtx(() => [
            _ctx.isFolder ? withDirectives((openBlock(), createElementBlock("ul", _hoisted_1$4, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.children, (node, index2) => {
                return openBlock(), createBlock(_component_w_tree_node, mergeProps({
                  key: "node" + index2,
                  node: node.key,
                  title: node.title,
                  selected: _ctx.isNodeSelected(node.key),
                  expanded: _ctx.isNodeExpanded(node.key),
                  children: node.children
                }, toHandlers(_ctx.$listeners)), null, 16, ["node", "title", "selected", "expanded", "children"]);
              }), 128))
            ], 512)), [
              [vShow, __props.expanded]
            ]) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ], 2);
    };
  }
});
var Tree_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$3 = {
  class: "w-tree",
  role: "tree"
};
const __default__$3 = {
  name: "w-tree",
  inheritAttrs: false
};
const _sfc_main$3 = /* @__PURE__ */ Object.assign(__default__$3, {
  props: {
    treeData: {
      type: Array,
      required: true
    },
    defaultSelectedNodes: Array,
    selectedNodes: Array,
    defaultCheckedNodes: Array,
    checkedNodes: Array,
    defaultExpandedNodes: Array,
    expandedNodes: Array,
    multiple: Boolean,
    disabled: Boolean
  },
  emits: ["update:checkedNodes"],
  setup(__props, { emit }) {
    const props = __props;
    provide("wTree", { onNodeSelect, onNodeExpand, isNodeSelected, isNodeExpanded });
    const state = reactive({
      _selectedNodes: [],
      _expandedNodes: []
    });
    watch(() => props.expandedNodes, (val) => {
      state._expandedNodes = [].concat(val);
    }, { immediate: true });
    watch(() => props.selectedNodes, (val) => {
      state._selectedNodes = [].concat(val);
    }, { immediate: true });
    function onNodeSelect(e, treeNode) {
      console.log("onNodeSelect", e, treeNode);
      let { _selectedNodes: selectedNodes } = state;
      const { multiple } = this.$props;
      const { node, selected } = treeNode;
      const targetSelected = !selected;
      if (targetSelected) {
        selectedNodes.push(node);
      } else if (!multiple) {
        selectedNodes = [node];
      } else {
        selectedNodes = selectedNodes.filter((item) => item !== node);
      }
      const eventObj = {
        event: "select",
        selected: targetSelected,
        node: treeNode,
        nativeEvent: e
      };
      emit("select", selectedNodes, eventObj);
    }
    function onNodeExpand(e, treeNode) {
      console.log("onNodeExpand", e, treeNode);
      let { _expandedNodes: expandedNodes } = state;
      const { node, expanded } = treeNode;
      const targetExpanded = !expanded;
      if (targetExpanded) {
        expandedNodes.push(node);
      } else {
        expandedNodes = expandedNodes.filter((item) => item !== node);
      }
      const eventObj = {
        event: "expand",
        expanded,
        node: treeNode,
        nativeEvent: e
      };
      emit("expand", expandedNodes, eventObj);
    }
    function isNodeSelected(node) {
      return state._selectedNodes.indexOf(node) !== -1;
    }
    function isNodeExpanded(node) {
      return state._expandedNodes.indexOf(node) !== -1;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("ul", _hoisted_1$3, [
        __props.treeData ? renderSlot(_ctx.$slots, "default", { key: 0 }, () => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.treeData, (node, index2) => {
            return openBlock(), createBlock(_sfc_main$4, mergeProps({
              key: "node" + index2,
              node: node.key,
              title: node.title,
              selected: isNodeSelected(node.key),
              expanded: isNodeExpanded(node.key),
              children: node.children
            }, toHandlers(_ctx.$listeners)), null, 16, ["node", "title", "selected", "expanded", "children"]);
          }), 128))
        ]) : createCommentVNode("", true)
      ]);
    };
  }
});
_sfc_main$3.TreeNode = _sfc_main$4;
_sfc_main$3.install = (Vue) => {
  Vue.component(_sfc_main$3.name, _sfc_main$3);
  Vue.component(_sfc_main$4.name, _sfc_main$4);
};
var __glob_2_20 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$3
}, Symbol.toStringTag, { value: "Module" }));
var UploaderDragger_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$2 = { class: "w-uploader-dragger-icon" };
const _hoisted_2$2 = { class: "w-uploader-dragger-describe" };
const _hoisted_3$2 = { class: "w-uploader-dragger-hint" };
const __default__$2 = {
  name: "UploadDragger"
};
const _sfc_main$2 = /* @__PURE__ */ Object.assign(__default__$2, {
  props: {
    describe: {
      type: String,
      default: "Drop file here or click to upload"
    },
    hint: String
  },
  emits: ["handle-files", "on-click"],
  setup(__props, { emit }) {
    const dragging = ref(false);
    function onDragenter(e) {
      dragging.value = true;
      e.stopPropagation();
      e.preventDefault();
    }
    function onDragleave(e) {
      dragging.value = false;
      e.stopPropagation();
      e.preventDefault();
    }
    function onDragover(e) {
      e.stopPropagation();
      e.preventDefault();
    }
    function onDrop(e) {
      dragging.value = false;
      e.stopPropagation();
      e.preventDefault();
      const files = e.dataTransfer.files;
      emit("handle-files", files);
    }
    function onClick() {
      emit("on-click");
    }
    return (_ctx, _cache) => {
      const _component_w_icon = resolveComponent("w-icon");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["w-uploader-dragger", { dragging: dragging.value }]),
        onDragenter,
        onDragleave,
        onDragover,
        onDrop,
        onClick
      }, [
        createElementVNode("div", _hoisted_1$2, [
          createVNode(_component_w_icon, { name: "upload" })
        ]),
        createElementVNode("div", _hoisted_2$2, [
          createElementVNode("span", null, toDisplayString(__props.describe), 1)
        ]),
        createElementVNode("div", _hoisted_3$2, toDisplayString(__props.hint), 1)
      ], 34);
    };
  }
});
var UploaderDragger = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-35baf5ad"]]);
var UploaderList_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$1 = { class: "w-uploader-status" };
const _hoisted_2$1 = { class: "w-uploader-main" };
const _hoisted_3$1 = ["href", "download"];
const _hoisted_4 = ["title"];
const _hoisted_5 = { class: "w-uploader-file-size" };
const __default__$1 = {
  name: "UploaderList"
};
const _sfc_main$1 = /* @__PURE__ */ Object.assign(__default__$1, {
  props: {
    files: {
      type: Array,
      default: () => []
    }
  },
  emits: ["file-click", "on-delete"],
  setup(__props, { emit }) {
    function onDelete(file) {
      emit("on-delete", file);
    }
    function getFileSize(size) {
      if (typeof size === "string") {
        return size;
      }
      var unit = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
      var i = 0;
      while (size >= 1024) {
        size /= 1024;
        i++;
      }
      return size.toFixed(2) + unit[i];
    }
    return (_ctx, _cache) => {
      const _component_w_icon = resolveComponent("w-icon");
      const _component_w_progress = resolveComponent("w-progress");
      const _component_w_button = resolveComponent("w-button");
      return openBlock(), createBlock(TransitionGroup, {
        tag: "ul",
        class: "w-uploader-list",
        name: "w-list"
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.files, (file, index2) => {
            return openBlock(), createElementBlock("li", {
              class: normalizeClass(["w-uploader-item", file.status]),
              key: file.uid
            }, [
              createElementVNode("div", _hoisted_1$1, [
                file.status === "pending" ? (openBlock(), createBlock(_component_w_icon, {
                  key: 0,
                  class: "w-icon-loading",
                  name: "loading"
                })) : file.status === "success" ? (openBlock(), createBlock(_component_w_icon, {
                  key: 1,
                  name: "file"
                })) : (openBlock(), createBlock(_component_w_icon, {
                  key: 2,
                  name: "file"
                }))
              ]),
              createElementVNode("div", _hoisted_2$1, [
                createElementVNode("a", {
                  href: file.url,
                  download: file.name,
                  target: "_blank",
                  class: "w-uploader-file"
                }, [
                  createElementVNode("span", {
                    class: "w-uploader-file-name",
                    title: file.name
                  }, toDisplayString(file.name), 9, _hoisted_4),
                  createElementVNode("span", _hoisted_5, " (" + toDisplayString(getFileSize(file.size)) + ")", 1)
                ], 8, _hoisted_3$1),
                file.status === "pending" ? (openBlock(), createBlock(_component_w_progress, {
                  key: 0,
                  percent: file.percent
                }, null, 8, ["percent"])) : createCommentVNode("", true)
              ]),
              createVNode(_component_w_button, {
                class: "w-uploader-delete",
                circle: "",
                plain: "",
                icon: "delete",
                onClick: ($event) => onDelete(file)
              }, null, 8, ["onClick"])
            ], 2);
          }), 128))
        ]),
        _: 1
      });
    };
  }
});
var UploaderList = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-e032a5ac"]]);
const processResponse = (response) => {
  if (typeof response === "string") {
    try {
      return JSON.parse(response);
    } catch (e) {
      return response;
    }
  }
  return response;
};
const request = ({
  url,
  name,
  file,
  data,
  headers,
  withCredentials,
  onSuccess,
  onError,
  onProgress
}) => {
  const xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new window.ActiveXObject("Microsoft.XMLHTTP");
  if (headers) {
    for (let key in headers) {
      if (headers.hasOwnProperty(key) && headers[key]) {
        xhr.setRequestHeader(key, headers[key]);
      }
    }
  }
  if (withCredentials) {
    xhr.withCredentials = true;
  }
  xhr.upload.addEventListener("progress", (e) => {
    e.percent = e.loaded / e.total * 100;
    onProgress(e);
  });
  const formData = new FormData();
  formData.append(name, file);
  if (data) {
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });
  }
  xhr.addEventListener("load", () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      const response = processResponse(xhr.responseText);
      onSuccess(response);
    } else {
      onError(new Error("upload request failed!"));
    }
  });
  xhr.addEventListener("error", (e) => {
    onError(e);
  });
  xhr.open("POST", url, true);
  xhr.send(formData);
  return xhr;
};
var Uploader_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1 = { class: "w-uploader" };
const _hoisted_2 = ["accept", "multiple"];
const _hoisted_3 = {
  key: 2,
  class: "w-uploader-tips"
};
const __default__ = {
  name: "w-uploader"
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  props: {
    url: { type: String, default: "" },
    multiple: { type: Boolean, default: false },
    accept: { type: String, default: "*" },
    data: { type: Object, default: () => ({}) },
    name: { type: String, default: "file" },
    disabled: { type: Boolean, default: false },
    drag: { type: Boolean, default: false },
    showRemove: { type: Boolean, default: true },
    tips: { type: String, default: "" },
    fileList: { type: Array, default: () => [] },
    defaultFileList: { type: Array, default: () => [] },
    headers: { type: Object, default: () => {
    } },
    withCredentials: { type: Boolean, default: false },
    beforeUpload: { type: Function, default: () => {
    } },
    remove: { type: Function, default: () => {
    } },
    fileClick: { type: Function, default: () => {
    } },
    chuncked: { type: Boolean, default: false },
    chunckSize: { type: Number, default: 1024 * 1024 },
    threads: { type: Number, default: 1 }
  },
  emits: ["change"],
  setup(__props, { emit }) {
    const props = __props;
    const fileInput = ref(null);
    const state = reactive({
      isUploaded: false,
      files: [],
      tempIndex: 0,
      reqs: {}
    });
    const updateFiles = (files) => {
      state.files = files.map((file) => {
        return __spreadProps(__spreadValues({}, file), {
          status: file.status || "success",
          percent: file.percent || 0,
          uid: Date.now() + state.tempIndex++
        });
      });
      state.isUploaded = files.length > 0;
      if (files.length === 0) {
        fileInput.value.value = "";
      }
    };
    function onTrigger() {
      if (!props.disabled && !state.isUploaded) {
        fileInput.value.value = null;
        fileInput.value.click();
      }
    }
    function onChange(e) {
      const rawFiles = Array.from(e.target.files);
      uploadFiles(rawFiles);
    }
    function uploadFiles(rawFiles) {
      startUpload(rawFiles);
    }
    function startUpload(rawFiles) {
      const { chuncked, beforeUpload } = props;
      rawFiles.forEach((rawFile) => {
        const file = normalizeFile(rawFile);
        if (!beforeUpload || beforeUpload(file)) {
          if (chuncked) {
            uploadChunks(file);
          } else {
            uploadSingle(file);
          }
        }
        state.files.push(file);
      });
    }
    function normalizeFile(rawFile) {
      return {
        name: rawFile.name,
        size: rawFile.size,
        type: rawFile.type,
        percent: 0,
        uid: Date.now() + state.tempIndex++,
        status: "init",
        raw: rawFile
      };
    }
    function uploadChunks(file) {
      const { uid, raw } = file;
      const { url, name, data, headers, withCredentials } = props;
      let chunks = createChunks(raw);
      const options = {
        url,
        data: __spreadProps(__spreadValues({}, data), {
          chunks: chunks.length,
          uid
        }),
        name,
        headers,
        withCredentials,
        onSuccess: handleSuccess.bind(null, file),
        onError: handleError.bind(null, file),
        onProgress: handleProgress.bind(null, file)
      };
      file.status = "pending";
      chunks.map((chunk, index2) => {
        options.data["chunk"] = index2 + 1;
        options[name] = chunk;
        request(options);
        onChangeFile(file);
        emit("change", file, state.files);
      });
    }
    function createChunks(file) {
      const { chunckSize } = props;
      const { size, uid, name } = file;
      let current = 0;
      let chunks = [];
      let chunkSize = chunckSize;
      while (current < size) {
        let end = Math.min(current + chunkSize, size);
        let chunk = file.slice(current, end);
        chunk.name = `${name}.${uid}.${current}`;
        chunks.push(chunk);
        current = end;
      }
      return chunks;
    }
    function uploadSingle(file) {
      const { url, name, data, headers, withCredentials } = props;
      const { uid, raw } = file;
      const options = {
        url,
        name,
        file: raw,
        data,
        headers,
        withCredentials,
        onSuccess: handleSuccess.bind(null, file),
        onError: handleError.bind(null, file),
        onProgress: handleProgress.bind(null, file)
      };
      file.status = "pending";
      onChangeFile(file);
      emit("change", file, state.files);
      const req = request(options);
      state.reqs[uid] = req;
    }
    function handleSuccess(file, response) {
      const { chuncked } = props;
      if (chuncked)
        ;
      else {
        file.status = "success";
        file.response = response;
        file.url = response.data;
      }
      onChangeFile(file);
      emit("change", file, state.files);
    }
    function onChangeFile(file) {
      state.files = state.files.map((item) => {
        if (file.uid === item.uid) {
          item.status = file.status;
          item.percent = file.percent;
        }
        return item;
      });
    }
    function handleProgress(file, event) {
      file.percent = event.percent;
      onChangeFile(file);
      emit("change", file, state.files);
    }
    function handleError(file, event) {
      file.status = "failure";
      onChangeFile(file);
      emit("change", file, state.files);
    }
    function onDelete(file) {
      const index2 = state.files.indexOf(file);
      state.files.splice(index2, 1);
      abort(file);
      props.remove(file);
      fileInput.value.value = "";
      state.isUploaded = false;
    }
    function abort(file) {
      const { uid } = file;
      if (state.reqs[uid]) {
        state.reqs[uid].abort();
        delete state.reqs[uid];
      }
    }
    watch(() => props.fileList, (fileList) => {
      if (fileList.length > 0) {
        updateFiles(fileList);
      }
    }, { immediate: true });
    watch(() => props.defaultFileList, (defaultFileList) => {
      if (defaultFileList.length > 0) {
        updateFiles(defaultFileList);
      }
    }, { immediate: true });
    onBeforeUnmount(() => {
      state.files.forEach((file) => {
        if (file.url && file.url.indexOf("blob:") === 0) {
          URL.revokeObjectURL(file.url);
        }
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("input", {
          class: "w-uploader-input",
          ref_key: "fileInput",
          ref: fileInput,
          type: "file",
          accept: __props.accept,
          multiple: __props.multiple,
          onChange
        }, null, 40, _hoisted_2),
        __props.drag ? (openBlock(), createBlock(UploaderDragger, {
          key: 0,
          onOnClick: onTrigger,
          onHandleFiles: uploadFiles
        })) : (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(["w-uploader-trigger", { "w-disabled": __props.disabled || state.isUploaded }]),
          onClick: onTrigger
        }, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ], 2)),
        __props.tips ? (openBlock(), createElementBlock("div", _hoisted_3, toDisplayString(__props.tips), 1)) : createCommentVNode("", true),
        createVNode(UploaderList, {
          files: state.files,
          onOnDelete: onDelete
        }, null, 8, ["files"])
      ]);
    };
  }
});
var WUploader = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-72df855a"]]);
WUploader.install = (Vue) => {
  Vue.component(WUploader.name, WUploader);
};
var __glob_2_21 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": WUploader
}, Symbol.toStringTag, { value: "Module" }));
const version = "0.0.11";
var index$1 = "";
const install = (app) => {
  const components = { "./aside/index.js": __glob_2_0, "./badge/index.js": __glob_2_1, "./breadcrumb/index.js": __glob_2_2, "./button/index.js": __glob_2_3, "./card/index.js": __glob_2_4, "./checkbox/index.js": __glob_2_5, "./container/index.js": __glob_2_6, "./footer/index.js": __glob_2_7, "./header/index.js": __glob_2_8, "./icon/index.js": __glob_2_9, "./layout/index.js": __glob_2_10, "./main/index.js": __glob_2_11, "./menu/index.js": __glob_2_12, "./modal/index.js": __glob_2_13, "./pagination/index.js": __glob_2_14, "./progress/index.js": __glob_2_15, "./radio/index.js": __glob_2_16, "./table/index.js": __glob_2_17, "./tabs/index.js": __glob_2_18, "./tooltip/index.js": __glob_2_19, "./tree/index.js": __glob_2_20, "./uploader/index.js": __glob_2_21 };
  Object.values(components).map(({ default: component }) => {
    if (component.install) {
      app.use(component);
    }
  });
  app.config.globalProperties.$message = (message) => {
    console.log(message);
  };
  return app;
};
var index = {
  version,
  install
};
export { index as default, install };
