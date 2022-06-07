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
import { openBlock, createElementBlock, normalizeStyle, renderSlot, h, normalizeClass, createCommentVNode, useSlots, computed, unref, createElementVNode, createTextVNode, toDisplayString, useAttrs, createBlock, Teleport, createVNode, Transition, withCtx, withDirectives, isRef, Fragment, renderList, vModelSelect, ref, reactive, watch, vShow, vModelDynamic, mergeProps } from "vue";
const __default__$9 = {
  name: "w-aside"
};
const _sfc_main$d = /* @__PURE__ */ Object.assign(__default__$9, {
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
});
_sfc_main$d.install = (Vue) => {
  Vue.component(_sfc_main$d.name, _sfc_main$d);
};
var __glob_2_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$d
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
const _hoisted_1$6 = ["disabled", "autofocus", "type"];
const _hoisted_2$5 = {
  key: 0,
  class: /* @__PURE__ */ normalizeClass(["w-icon-loading", "w-icon--left"])
};
const _hoisted_3$4 = { key: 2 };
const __default__$8 = {
  name: "w-button"
};
const _sfc_main$c = /* @__PURE__ */ Object.assign(__default__$8, {
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
        __props.loading ? (openBlock(), createElementBlock("i", _hoisted_2$5)) : createCommentVNode("", true),
        __props.icon && !__props.loading ? (openBlock(), createElementBlock("i", {
          key: 1,
          class: normalizeClass([__props.icon, "w-icon--left"])
        }, null, 2)) : createCommentVNode("", true),
        _ctx.$slots.default ? (openBlock(), createElementBlock("span", _hoisted_3$4, [
          renderSlot(_ctx.$slots, "default")
        ])) : createCommentVNode("", true)
      ], 10, _hoisted_1$6);
    };
  }
});
_sfc_main$c.install = (Vue) => {
  Vue.component(_sfc_main$c.name, _sfc_main$c);
};
var __glob_2_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$c
}, Symbol.toStringTag, { value: "Module" }));
var card_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$5 = { class: "w-card-header" };
const _hoisted_2$4 = {
  key: 0,
  class: "w-card-title"
};
const _hoisted_3$3 = { class: "w-card-body" };
const _hoisted_4$3 = {
  key: 0,
  class: "w-card-footer"
};
const __default__$7 = {
  name: "w-card"
};
const _sfc_main$b = /* @__PURE__ */ Object.assign(__default__$7, {
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
    const slots = useSlots();
    const cardType = computed(() => props.type ? `w-card-${props.type}` : "");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["w-card", [unref(cardType)]])
      }, [
        createElementVNode("div", _hoisted_1$5, [
          unref(slots).title || __props.title ? (openBlock(), createElementBlock("h3", _hoisted_2$4, [
            renderSlot(_ctx.$slots, "title", {}, () => [
              createTextVNode(toDisplayString(__props.title), 1)
            ])
          ])) : createCommentVNode("", true),
          unref(slots).desc || __props.desc ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: "w-card-desc",
            onClick: _cache[0] || (_cache[0] = (...args) => _ctx.descHandler && _ctx.descHandler(...args))
          }, [
            renderSlot(_ctx.$slots, "desc", {}, () => [
              createTextVNode(toDisplayString(__props.desc), 1)
            ])
          ])) : createCommentVNode("", true)
        ]),
        createElementVNode("div", _hoisted_3$3, [
          renderSlot(_ctx.$slots, "default")
        ]),
        unref(slots).footer || __props.footer ? (openBlock(), createElementBlock("div", _hoisted_4$3, [
          renderSlot(_ctx.$slots, "footer")
        ])) : createCommentVNode("", true)
      ], 2);
    };
  }
});
_sfc_main$b.install = (app) => {
  app.component(_sfc_main$b.name, _sfc_main$b);
};
var __glob_2_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$b
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$a = {};
_sfc_main$a.install = (Vue) => {
  Vue.component(_sfc_main$a.name, _sfc_main$a);
};
var __glob_2_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$a
}, Symbol.toStringTag, { value: "Module" }));
var container_vue_vue_type_style_index_0_lang = "";
const __default__$6 = {
  name: "w-container"
};
const _sfc_main$9 = /* @__PURE__ */ Object.assign(__default__$6, {
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
});
_sfc_main$9.install = (Vue) => {
  Vue.component(_sfc_main$9.name, _sfc_main$9);
};
var __glob_2_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$9
}, Symbol.toStringTag, { value: "Module" }));
const __default__$5 = {
  name: "w-footer"
};
const _sfc_main$8 = /* @__PURE__ */ Object.assign(__default__$5, {
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
});
_sfc_main$8.install = (Vue) => {
  Vue.component(_sfc_main$8.name, _sfc_main$8);
};
var __glob_2_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$8
}, Symbol.toStringTag, { value: "Module" }));
const __default__$4 = {
  name: "w-header"
};
const _sfc_main$7 = /* @__PURE__ */ Object.assign(__default__$4, {
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
_sfc_main$7.install = (Vue) => {
  Vue.component(_sfc_main$7.name, _sfc_main$7);
};
var __glob_2_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$7
}, Symbol.toStringTag, { value: "Module" }));
var icon_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$4 = { class: "w-icon" };
const _hoisted_2$3 = ["xlink:href"];
const __default__$3 = {
  name: "w-icon"
};
const _sfc_main$6 = /* @__PURE__ */ Object.assign(__default__$3, {
  props: {
    name: String,
    useClass: String
  },
  setup(__props) {
    const props = __props;
    useAttrs();
    const iconName = computed(() => props.name ? `#${props.name}` : "#");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", _hoisted_1$4, [
        createElementVNode("use", {
          "xlink:href": unref(iconName),
          class: normalizeClass([__props.useClass])
        }, null, 10, _hoisted_2$3)
      ]);
    };
  }
});
_sfc_main$6.install = (Vue) => {
  Vue.component(_sfc_main$6.name, _sfc_main$6);
};
var __glob_2_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$6
}, Symbol.toStringTag, { value: "Module" }));
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$5 = {
  name: "w-main"
};
const _hoisted_1$3 = { class: "w-main" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("main", _hoisted_1$3, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var WMain = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render]]);
WMain.install = (Vue) => {
  Vue.component(WMain.name, WMain);
};
var __glob_2_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": WMain
}, Symbol.toStringTag, { value: "Module" }));
var modal_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$2 = {
  key: 0,
  class: "modal-mask"
};
const _hoisted_2$2 = { class: "modal-wrapper" };
const _hoisted_3$2 = { class: "modal-container" };
const _hoisted_4$2 = { class: "modal-header" };
const _hoisted_5$2 = /* @__PURE__ */ createTextVNode("default header");
const _hoisted_6$2 = { class: "modal-body" };
const _hoisted_7$2 = /* @__PURE__ */ createTextVNode("default body");
const _hoisted_8$2 = { class: "modal-footer" };
const _hoisted_9$2 = /* @__PURE__ */ createTextVNode(" default footer ");
const _sfc_main$4 = {
  props: {
    value: Boolean
  },
  emits: ["close"],
  setup(__props, { emit }) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Teleport, { to: "body" }, [
        createVNode(Transition, { name: "modal" }, {
          default: withCtx(() => [
            _ctx.show ? (openBlock(), createElementBlock("div", _hoisted_1$2, [
              createElementVNode("div", _hoisted_2$2, [
                createElementVNode("div", _hoisted_3$2, [
                  createElementVNode("div", _hoisted_4$2, [
                    renderSlot(_ctx.$slots, "header", {}, () => [
                      _hoisted_5$2
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
};
var Modal = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-71ae72ae"]]);
Modal.install = (app) => {
  app.component(Modal.name, Modal);
};
var __glob_2_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": Modal
}, Symbol.toStringTag, { value: "Module" }));
var pagination_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "w-pagination" };
const _hoisted_2$1 = { class: "w-pagination-info" };
const _hoisted_3$1 = { class: "w-pagination-info-text" };
const _hoisted_4$1 = /* @__PURE__ */ createTextVNode(" \u5171 ");
const _hoisted_5$1 = { class: "w-pagination-info-total" };
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
const __default__$2 = {
  name: "w-pagination"
};
const _sfc_main$3 = /* @__PURE__ */ Object.assign(__default__$2, {
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
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createElementVNode("div", _hoisted_2$1, [
          createElementVNode("span", _hoisted_3$1, [
            _hoisted_4$1,
            createElementVNode("span", _hoisted_5$1, toDisplayString(__props.total), 1),
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
_sfc_main$3.install = (Vue) => {
  Vue.component(_sfc_main$3.name, _sfc_main$3);
};
var __glob_2_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$3
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$2 = {};
_sfc_main$2.install = (Vue) => {
  Vue.component(_sfc_main$2.name, _sfc_main$2);
};
var __glob_2_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$2
}, Symbol.toStringTag, { value: "Module" }));
var table_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "w-table-wrapper" };
const _hoisted_2 = { class: "w-table-container" };
const _hoisted_3 = { class: "loading" };
const _hoisted_4 = /* @__PURE__ */ createElementVNode("svg", {
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
const _hoisted_5 = [
  _hoisted_4
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
const __default__$1 = {
  name: "w-table"
};
const _sfc_main$1 = /* @__PURE__ */ Object.assign(__default__$1, {
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
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", _hoisted_2, [
          withDirectives(createElementVNode("div", _hoisted_3, _hoisted_5, 512), [
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
        __props.pagination ? (openBlock(), createBlock(unref(_sfc_main$3), mergeProps({ key: 0 }, __spreadProps(__spreadValues({}, __props.pagination), { locale: __props.locale }), {
          onPageSizeChange,
          onChange: onPageChange
        }), null, 16)) : createCommentVNode("", true)
      ]);
    };
  }
});
_sfc_main$1.install = (Vue) => {
  Vue.component(_sfc_main$1.name, _sfc_main$1);
};
var __glob_2_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$1
}, Symbol.toStringTag, { value: "Module" }));
var tooltip_vue_vue_type_style_index_0_lang = "";
const __default__ = {
  name: "w-tooltip"
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
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
_sfc_main.install = (Vue) => {
  Vue.component(_sfc_main.name, _sfc_main);
};
var __glob_2_14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
const version = "0.0.11";
var index$1 = "";
const install = (app) => {
  const components = { "./aside/index.js": __glob_2_0, "./badge/index.js": __glob_2_1, "./button/index.js": __glob_2_2, "./card/index.js": __glob_2_3, "./checkbox/index.js": __glob_2_4, "./container/index.js": __glob_2_5, "./footer/index.js": __glob_2_6, "./header/index.js": __glob_2_7, "./icon/index.js": __glob_2_8, "./main/index.js": __glob_2_9, "./modal/index.js": __glob_2_10, "./pagination/index.js": __glob_2_11, "./radio/index.js": __glob_2_12, "./table/index.js": __glob_2_13, "./tooltip/index.js": __glob_2_14 };
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
