import { openBlock, createElementBlock, normalizeStyle, renderSlot, h, normalizeClass, createCommentVNode, computed, unref, createElementVNode, createTextVNode, toDisplayString, useSlots, withDirectives, isRef, Fragment, renderList, vModelSelect, ref, reactive, watch, vModelDynamic, createVNode, mergeProps } from "vue";
const __default__$9 = {
  name: "w-aside"
};
const _sfc_main$a = /* @__PURE__ */ Object.assign(__default__$9, {
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
_sfc_main$a.install = (Vue) => {
  Vue.component(_sfc_main$a.name, _sfc_main$a);
};
var __glob_2_0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$a
});
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
var __glob_2_1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": WBadge
});
const _hoisted_1$5 = ["disabled", "autofocus", "type"];
const _hoisted_2$4 = {
  key: 0,
  class: /* @__PURE__ */ normalizeClass(["w-icon-loading", "w-icon--left"])
};
const _hoisted_3$3 = { key: 2 };
const __default__$8 = {
  name: "w-button"
};
const _sfc_main$9 = /* @__PURE__ */ Object.assign(__default__$8, {
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
});
_sfc_main$9.install = (Vue) => {
  Vue.component(_sfc_main$9.name, _sfc_main$9);
};
var __glob_2_2 = /* @__PURE__ */ Object.freeze({
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
const __default__$7 = {
  name: "w-card"
};
const _sfc_main$8 = /* @__PURE__ */ Object.assign(__default__$7, {
  props: {
    type: String,
    title: { default: () => {
    }, type: [Object, String] },
    footer: { default: () => {
    }, type: [Object, String] },
    desc: String
  },
  emits: ["desc-click"],
  setup(__props, { emit }) {
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
});
_sfc_main$8.install = (Vue) => {
  Vue.component(_sfc_main$8.name, _sfc_main$8);
};
var __glob_2_3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$8
});
var container_vue_vue_type_style_index_0_lang = "";
const __default__$6 = {
  name: "w-container"
};
const _sfc_main$7 = /* @__PURE__ */ Object.assign(__default__$6, {
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
_sfc_main$7.install = (Vue) => {
  Vue.component(_sfc_main$7.name, _sfc_main$7);
};
var __glob_2_4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$7
});
const __default__$5 = {
  name: "w-footer"
};
const _sfc_main$6 = /* @__PURE__ */ Object.assign(__default__$5, {
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
_sfc_main$6.install = (Vue) => {
  Vue.component(_sfc_main$6.name, _sfc_main$6);
};
var __glob_2_5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$6
});
const __default__$4 = {
  name: "w-header"
};
const _sfc_main$5 = /* @__PURE__ */ Object.assign(__default__$4, {
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
_sfc_main$5.install = (Vue) => {
  Vue.component(_sfc_main$5.name, _sfc_main$5);
};
var __glob_2_6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$5
});
var icon_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$3 = { class: "w-icon" };
const _hoisted_2$2 = ["xlink:href"];
const __default__$3 = {
  name: "w-icon"
};
const _sfc_main$4 = /* @__PURE__ */ Object.assign(__default__$3, {
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
});
_sfc_main$4.install = (Vue) => {
  Vue.component(_sfc_main$4.name, _sfc_main$4);
};
var __glob_2_7 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$4
});
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$3 = {
  name: "w-main"
};
const _hoisted_1$2 = { class: "w-main" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("main", _hoisted_1$2, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var WMain = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render]]);
WMain.install = (Vue) => {
  Vue.component(WMain.name, WMain);
};
var __glob_2_8 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": WMain
});
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
const _hoisted_14 = ["onClick"];
const _hoisted_15 = {
  key: 2,
  class: "w-pagination-item"
};
const _hoisted_16 = {
  key: 3,
  class: "w-pagination-item"
};
const __default__$2 = {
  name: "w-pagination"
};
const _sfc_main$2 = /* @__PURE__ */ Object.assign(__default__$2, {
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
  emits: ["change", "update:current"],
  setup(__props, { emit }) {
    const props = __props;
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
              }, toDisplayString(page2), 9, _hoisted_14)
            ], 2);
          }), 256)),
          __props.total > 1 ? (openBlock(), createElementBlock("li", _hoisted_15, [
            createElementVNode("a", {
              class: "w-pagination-link",
              href: "javascript:;",
              onClick: _cache[3] || (_cache[3] = ($event) => changePage(__props.current + 1))
            }, "\u4E0B\u4E00\u9875")
          ])) : createCommentVNode("", true),
          __props.total > 1 ? (openBlock(), createElementBlock("li", _hoisted_16, [
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
_sfc_main$2.install = (Vue) => {
  Vue.component(_sfc_main$2.name, _sfc_main$2);
};
var __glob_2_9 = /* @__PURE__ */ Object.freeze({
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
const _hoisted_9 = { key: 0 };
const _hoisted_10 = ["type", "value", "onChange"];
const _hoisted_11 = ["title"];
const _hoisted_12 = { class: "w-table-tfoot" };
const _hoisted_13 = ["colspan"];
const __default__$1 = {
  name: "w-table"
};
const _sfc_main$1 = /* @__PURE__ */ Object.assign(__default__$1, {
  props: {
    rows: {
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
      default: "key"
    },
    rowSelection: {
      type: Object
    },
    emptyMessage: {
      type: String,
      default: "\u6682\u65E0\u6570\u636E"
    },
    pagination: {
      type: [Object, Boolean],
      default: null
    }
  },
  emits: ["change", "update:current"],
  setup(__props, { emit }) {
    const props = __props;
    const checkAll = ref(null);
    const state = reactive({
      selectedRows: [],
      selectedRowKeys: [],
      isAllSelected: false
    });
    const colspan = computed(() => {
      return props.columns.length + (props.rowSelection ? 1 : 0);
    });
    const colStyle = (column) => {
      const style = {};
      if (column.width) {
        style.width = typeof column.width === "string" ? column.width : `${column.width}px`;
      }
      return style;
    };
    const onSelect = (row, event) => {
      const isChecked = event.target.checked;
      const { onChange, onSelect: onSelect2 } = props.rowSelection;
      if (state.selectedRowKeys.length > 0 && !state.isAllSelected) {
        checkAll.value.indeterminate = true;
      } else {
        checkAll.value.indeterminate = false;
      }
      if (isChecked) {
        state.selectedRows.push(row);
      } else {
        state.selectedRows = state.selectedRows.filter((item) => item !== row);
      }
      onChange == null ? void 0 : onChange(state.selectedRowKeys, state.selectedRows);
      onSelect2 == null ? void 0 : onSelect2(row, isChecked, state.selectedRows, event);
    };
    const onSelectAll = (event) => {
      const isChecked = event.target.checked;
      const { onChange, onSelectAll: onSelectAll2 } = props.rowSelection;
      const { rows, rowKey } = props;
      if (isChecked) {
        state.selectedRows = rows;
        state.selectedRowKeys = rows.map((item) => item[rowKey]);
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
                ref_key: "checkAll",
                ref: checkAll,
                type: __props.rowSelection.type,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(state).isAllSelected = $event),
                onChange: onSelectAll
              }, null, 40, _hoisted_5), [
                [vModelDynamic, unref(state).isAllSelected]
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
          __props.rows.length === 0 ? (openBlock(), createElementBlock("tr", _hoisted_7, [
            createElementVNode("td", {
              colspan: unref(colspan),
              class: "empty-messgae"
            }, toDisplayString(__props.emptyMessage), 9, _hoisted_8)
          ])) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(__props.rows, (row, index2) => {
            return openBlock(), createElementBlock("tr", {
              key: row[__props.rowKey]
            }, [
              __props.rowSelection ? (openBlock(), createElementBlock("td", _hoisted_9, [
                withDirectives(createElementVNode("input", {
                  type: __props.rowSelection.type,
                  value: row[__props.rowKey],
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(state).selectedRowKeys = $event),
                  onChange: ($event) => onSelect(row, $event)
                }, null, 40, _hoisted_10), [
                  [vModelDynamic, unref(state).selectedRowKeys]
                ])
              ])) : createCommentVNode("", true),
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
                ], 10, _hoisted_11);
              }), 128))
            ]);
          }), 128))
        ]),
        createElementVNode("tfoot", _hoisted_12, [
          createElementVNode("tr", null, [
            createElementVNode("td", { colspan: unref(colspan) }, [
              renderSlot(_ctx.$slots, "footer"),
              renderSlot(_ctx.$slots, "pagination", {}, () => [
                createVNode(unref(_sfc_main$2), mergeProps(__props.pagination, {
                  onPageSizeChange,
                  onChange: onPageChange
                }), null, 16)
              ])
            ], 8, _hoisted_13)
          ])
        ])
      ]);
    };
  }
});
_sfc_main$1.install = (Vue) => {
  Vue.component(_sfc_main$1.name, _sfc_main$1);
};
var __glob_2_10 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$1
});
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
var __glob_2_11 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main
});
const version = "0.0.10";
const charRegx = /^[\u4e00-\u9fa5]$/;
charRegx.test.bind(charRegx);
function generateModules(modules2) {
  const _modules = {};
  Object.entries(modules2).map(([fileName, { default: component }]) => {
    const [, name] = fileName.match(/(?:\/([\w-]+)\/)?(?:[\w-]+)\.js$/);
    _modules[`W${firstToUpper(name)}`] = component;
  });
  return _modules;
}
function firstToUpper(str) {
  return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
}
const installs = { "./aside/index.js": __glob_2_0, "./badge/index.js": __glob_2_1, "./button/index.js": __glob_2_2, "./card/index.js": __glob_2_3, "./container/index.js": __glob_2_4, "./footer/index.js": __glob_2_5, "./header/index.js": __glob_2_6, "./icon/index.js": __glob_2_7, "./main/index.js": __glob_2_8, "./pagination/index.js": __glob_2_9, "./table/index.js": __glob_2_10, "./tooltip/index.js": __glob_2_11 };
const modules = generateModules(installs);
const install = (Vue) => {
  Object.values(installs).map((mod) => {
    Vue.use(mod.default);
  });
};
var index = {
  version,
  install
};
export { index as default, install, modules, version };
