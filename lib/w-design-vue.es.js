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
import { openBlock, createElementBlock, normalizeStyle, renderSlot, h, normalizeClass, createCommentVNode, computed, unref, createElementVNode, createTextVNode, toDisplayString, useSlots, Fragment, renderList, reactive, toRefs, resolveComponent, withDirectives, isRef, vModelDynamic, createVNode, mergeProps } from "vue";
const _sfc_main$a = {
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
_sfc_main$a.install = (Vue) => {
  Vue.component(_sfc_main$a.name, _sfc_main$a);
};
var __glob_1_0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$a
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
const _hoisted_1$5 = ["disabled", "autofocus", "type"];
const _hoisted_2$4 = {
  key: 0,
  class: /* @__PURE__ */ normalizeClass(["w-icon-loading", "w-icon--left"])
};
const _hoisted_3$3 = { key: 2 };
const _sfc_main$9 = {
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
        __props.loading ? (openBlock(), createElementBlock("i", _hoisted_2$4)) : createCommentVNode("", true),
        __props.icon && !__props.loading ? (openBlock(), createElementBlock("i", {
          key: 1,
          class: normalizeClass([__props.icon, "w-icon--left"])
        }, null, 2)) : createCommentVNode("", true),
        _ctx.$slots.default ? (openBlock(), createElementBlock("span", _hoisted_3$3, [
          renderSlot(_ctx.$slots, "default")
        ])) : createCommentVNode("", true)
      ], 10, _hoisted_1$5);
    };
  }
};
_sfc_main$9.install = (Vue) => {
  Vue.component(_sfc_main$9.name, _sfc_main$9);
};
var __glob_1_2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$9
});
var card_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$4 = { class: "w-card-header" };
const _hoisted_2$3 = {
  key: 0,
  class: "w-card-title"
};
const _hoisted_3$2 = { class: "w-card-body" };
const _hoisted_4$2 = {
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
      createElementVNode("div", _hoisted_1$4, [
        _ctx.$slots.title || __props.title ? (openBlock(), createElementBlock("h3", _hoisted_2$3, [
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
      createElementVNode("div", _hoisted_3$2, [
        renderSlot(_ctx.$slots, "default")
      ]),
      _ctx.$slots.footer || __props.footer ? (openBlock(), createElementBlock("div", _hoisted_4$2, [
        renderSlot(_ctx.$slots, "footer")
      ])) : createCommentVNode("", true)
    ], 2);
  };
}
const _sfc_main$8 = /* @__PURE__ */ Object.assign(__default__, {
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
_sfc_main$8.install = (Vue) => {
  Vue.component(_sfc_main$8.name, _sfc_main$8);
};
var __glob_1_3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$8
});
var container_vue_vue_type_style_index_0_lang = "";
const _sfc_main$7 = {
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
_sfc_main$7.install = (Vue) => {
  Vue.component(_sfc_main$7.name, _sfc_main$7);
};
var __glob_1_4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$7
});
const _sfc_main$6 = {
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
_sfc_main$6.install = (Vue) => {
  Vue.component(_sfc_main$6.name, _sfc_main$6);
};
var __glob_1_5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$6
});
const _sfc_main$5 = {
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
_sfc_main$5.install = (Vue) => {
  Vue.component(_sfc_main$5.name, _sfc_main$5);
};
var __glob_1_6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$5
});
var icon_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$3 = { class: "w-icon" };
const _hoisted_2$2 = ["xlink:href"];
const _sfc_main$4 = {
  props: {
    name: String,
    useClass: String
  },
  setup(__props) {
    const props = __props;
    const iconName = computed(() => props.name ? `#${props.name}` : "#");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", _hoisted_1$3, [
        createElementVNode("use", {
          "xlink:href": unref(iconName),
          class: normalizeClass([__props.useClass])
        }, null, 10, _hoisted_2$2)
      ]);
    };
  }
};
_sfc_main$4.install = (Vue) => {
  Vue.component(_sfc_main$4.name, _sfc_main$4);
};
var __glob_1_7 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$4
});
var _export_sfc = (sfc, props) => {
  for (const [key, val] of props) {
    sfc[key] = val;
  }
  return sfc;
};
const _sfc_main$3 = {};
const _hoisted_1$2 = { class: "w-main" };
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("main", _hoisted_1$2, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var WMain = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$1]]);
WMain.install = (Vue) => {
  Vue.component(WMain.name, WMain);
};
var __glob_1_8 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": WMain
});
var pagination_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "w-pagination" };
const _hoisted_2$1 = { class: "w-pagination-list" };
const _hoisted_3$1 = {
  key: 0,
  class: "w-pagination-item"
};
const _hoisted_4$1 = {
  key: 1,
  class: "w-pagination-item"
};
const _hoisted_5$1 = ["onClick"];
const _hoisted_6$1 = {
  key: 2,
  class: "w-pagination-item"
};
const _hoisted_7$1 = {
  key: 3,
  class: "w-pagination-item"
};
const _sfc_main$2 = {
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
      default: () => [10, 20, 30]
    }
  },
  emits: ["update:current"],
  setup(__props, { emit }) {
    const props = __props;
    const changePage = (page) => {
      if (page < 1) {
        page = 1;
      }
      if (page > props.total) {
        page = props.total;
      }
      emit("update:current", page);
    };
    const pages = computed(() => {
      const total = props.total;
      const currentPage = props.current;
      const totalArray = [];
      if (total <= 5) {
        for (let i = 1; i <= total; i++) {
          totalArray.push(i);
        }
      } else {
        if (currentPage <= 3) {
          for (let i = 1; i <= 5; i++) {
            totalArray.push(i);
          }
          totalArray.push("...");
          totalArray.push(total);
        } else if (currentPage >= total - 2) {
          totalArray.push(1);
          totalArray.push("...");
          for (let i = total - 4; i <= total; i++) {
            totalArray.push(i);
          }
        } else {
          totalArray.push(1);
          totalArray.push("...");
          for (let i = currentPage - 2; i <= currentPage + 2; i++) {
            totalArray.push(i);
          }
          totalArray.push("...");
          totalArray.push(total);
        }
      }
      return totalArray;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createElementVNode("ul", _hoisted_2$1, [
          __props.total > 1 ? (openBlock(), createElementBlock("li", _hoisted_3$1, [
            createElementVNode("a", {
              class: "w-pagination-link",
              href: "javascript:;",
              onClick: _cache[0] || (_cache[0] = ($event) => changePage(1))
            }, "\u9996\u9875")
          ])) : createCommentVNode("", true),
          __props.total > 1 ? (openBlock(), createElementBlock("li", _hoisted_4$1, [
            createElementVNode("a", {
              class: "w-pagination-link",
              href: "javascript:;",
              onClick: _cache[1] || (_cache[1] = ($event) => changePage(__props.current - 1))
            }, "\u4E0A\u4E00\u9875")
          ])) : createCommentVNode("", true),
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(pages), (page) => {
            return openBlock(), createElementBlock("li", {
              class: normalizeClass(["w-pagination-item", { "w-pagination-item-active": page === __props.current }])
            }, [
              createElementVNode("a", {
                class: "w-pagination-link",
                href: "javascript:;",
                onClick: ($event) => changePage(page)
              }, toDisplayString(page), 9, _hoisted_5$1)
            ], 2);
          }), 256)),
          __props.total > 1 ? (openBlock(), createElementBlock("li", _hoisted_6$1, [
            createElementVNode("a", {
              class: "w-pagination-link",
              href: "javascript:;",
              onClick: _cache[2] || (_cache[2] = ($event) => changePage(__props.current + 1))
            }, "\u4E0B\u4E00\u9875")
          ])) : createCommentVNode("", true),
          __props.total > 1 ? (openBlock(), createElementBlock("li", _hoisted_7$1, [
            createElementVNode("a", {
              class: "w-pagination-link",
              href: "javascript:;",
              onClick: _cache[3] || (_cache[3] = ($event) => changePage(__props.total))
            }, "\u5C3E\u9875")
          ])) : createCommentVNode("", true)
        ])
      ]);
    };
  }
};
_sfc_main$2.install = (Vue) => {
  Vue.component(_sfc_main$2.name, _sfc_main$2);
};
var __glob_1_9 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$2
});
var table_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "w-table w-table-bordered" };
const _hoisted_2 = {
  key: 0,
  width: "30"
};
const _hoisted_3 = { class: "w-table-thead" };
const _hoisted_4 = { key: 0 };
const _hoisted_5 = ["type"];
const _hoisted_6 = { class: "w-table-tbody" };
const _hoisted_7 = { key: "empty-messgae" };
const _hoisted_8 = ["colspan"];
const _hoisted_9 = ["type", "value"];
const _hoisted_10 = ["title"];
const _hoisted_11 = { class: "w-table-tfoot" };
const _hoisted_12 = ["colspan"];
const _sfc_main$1 = {
  props: {
    dataSource: {
      type: Array,
      required: true,
      default: () => []
    },
    columns: {
      type: Array,
      required: true,
      default: () => []
    },
    rowKey: {
      type: String,
      required: true,
      default: "id"
    },
    rowSelection: {
      type: Object,
      default: () => null
    },
    emptyMessage: {
      type: String,
      default: "\u6682\u65E0\u6570\u636E"
    },
    pagination: {
      type: Object,
      default: () => ({
        total: 0,
        current: 1,
        pageSize: 10,
        pageSizes: [10, 20, 30, 40, 50]
      })
    }
  },
  emits: ["update:current"],
  setup(__props, { emit }) {
    const props = __props;
    const state = reactive({
      isAllSelected: false,
      selectedRowKeys: []
    });
    const { isAllSelected, selectedRowKeys } = toRefs(state);
    const colspan = computed(() => {
      return props.columns.length + (props.rowSelection ? 1 : 0);
    });
    const colStyle = (column) => {
      const style2 = {};
      if (column.width) {
        style2.width = typeof column.width ? column.width : `${column.width}px`;
      }
      return style2;
    };
    const onPageChange = (page) => {
      emit("update:current", page);
    };
    return (_ctx, _cache) => {
      const _component_w_pagination = resolveComponent("w-pagination");
      return openBlock(), createElementBlock("table", _hoisted_1, [
        createElementVNode("colgroup", null, [
          __props.rowSelection ? (openBlock(), createElementBlock("col", _hoisted_2)) : createCommentVNode("", true),
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.columns, (column) => {
            return openBlock(), createElementBlock("col", {
              style: normalizeStyle(colStyle(column)),
              key: column.name
            }, null, 4);
          }), 128))
        ]),
        createElementVNode("thead", _hoisted_3, [
          createElementVNode("tr", null, [
            __props.rowSelection ? (openBlock(), createElementBlock("th", _hoisted_4, [
              withDirectives(createElementVNode("input", {
                ref: (_value, _refs) => {
                  _refs["checkAll"] = _value;
                },
                type: __props.rowSelection.type,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(isAllSelected) ? isAllSelected.value = $event : null)
              }, null, 8, _hoisted_5), [
                [vModelDynamic, unref(isAllSelected)]
              ])
            ])) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.columns, (column) => {
              return openBlock(), createElementBlock("th", {
                key: column.name
              }, toDisplayString(column.title), 1);
            }), 128))
          ])
        ]),
        createElementVNode("tbody", _hoisted_6, [
          __props.dataSource.length === 0 ? (openBlock(), createElementBlock("tr", _hoisted_7, [
            createElementVNode("td", {
              colspan: unref(colspan),
              class: "empty-messgae"
            }, toDisplayString(__props.emptyMessage), 9, _hoisted_8)
          ])) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(__props.dataSource, (row, index2) => {
            return openBlock(), createElementBlock("tr", {
              key: row[__props.rowKey]
            }, [
              createElementVNode("td", null, [
                withDirectives(createElementVNode("input", {
                  type: __props.rowSelection.type,
                  value: row[__props.rowKey],
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(selectedRowKeys) ? selectedRowKeys.value = $event : null),
                  onChange: _cache[2] || (_cache[2] = (...args) => _ctx.onSelect && _ctx.onSelect(...args))
                }, null, 40, _hoisted_9), [
                  [vModelDynamic, unref(selectedRowKeys)]
                ])
              ]),
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.columns, (column) => {
                return openBlock(), createElementBlock("td", {
                  key: column.name,
                  title: column.ellipsis ? row[column.name] : null,
                  class: normalizeClass({ "w-ellipsis": column.ellipsis })
                }, [
                  column.scopedSlot ? renderSlot(_ctx.$slots, column.scopedSlot, {
                    key: 0,
                    index: index2,
                    row,
                    data: row[column.name]
                  }, () => [
                    createTextVNode(toDisplayString(row[column.name]), 1)
                  ]) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                    createTextVNode(toDisplayString(column.name === "index" ? index2 + 1 : row[column.name]), 1)
                  ], 64))
                ], 10, _hoisted_10);
              }), 128))
            ]);
          }), 128))
        ]),
        createElementVNode("tfoot", _hoisted_11, [
          createElementVNode("tr", null, [
            createElementVNode("td", { colspan: unref(colspan) }, [
              renderSlot(_ctx.$slots, "footer"),
              renderSlot(_ctx.$slots, "pagination", {}, () => [
                createVNode(_component_w_pagination, mergeProps(__spreadValues({}, __props.pagination), { "onUpdate:current": onPageChange }), null, 16)
              ])
            ], 8, _hoisted_12)
          ])
        ])
      ]);
    };
  }
};
_sfc_main$1.install = (Vue) => {
  Vue.component(_sfc_main$1.name, _sfc_main$1);
};
var __glob_1_10 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$1
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
var __glob_1_11 = /* @__PURE__ */ Object.freeze({
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
  vue: "^3.2.22"
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
  "@vue/compiler-sfc": "^3.2.22",
  eslint: "^8.2.0",
  "eslint-plugin-vue": "^8.1.1",
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
  const modules2 = { "./aside/index.js": __glob_1_0, "./badge/badge.js": __glob_1_1, "./button/index.js": __glob_1_2, "./card/index.js": __glob_1_3, "./container/index.js": __glob_1_4, "./footer/index.js": __glob_1_5, "./header/index.js": __glob_1_6, "./icon/index.js": __glob_1_7, "./main/index.js": __glob_1_8, "./pagination/index.js": __glob_1_9, "./table/index.js": __glob_1_10, "./tooltip/index.js": __glob_1_11 };
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
