import { defineComponent as i, computed as N, openBlock as a, createElementBlock as c, mergeProps as D, createElementVNode as p, unref as u, ref as B, normalizeClass as I, createBlock as b, createCommentVNode as f, renderSlot as d, Teleport as j, createVNode as g, Transition as T, withCtx as m, createTextVNode as w, provide as G, inject as L, toRefs as M, toDisplayString as O, normalizeStyle as A } from "vue";
const K = ["xlink:href"], Y = {
  name: "w-icon",
  inheritAttrs: !1
}, q = /* @__PURE__ */ i({
  ...Y,
  props: {
    prefix: {
      type: String,
      default: "icon"
    },
    name: {
      type: String,
      required: !0
    },
    color: {
      type: String,
      default: "#333"
    }
  },
  setup(e) {
    const t = e, s = N(() => `#${t.prefix}-${t.name}`);
    return (o, n) => (a(), c("svg", D({ class: "w-icon" }, o.$attrs, { "aria-hidden": "true" }), [
      p("use", { "xlink:href": u(s) }, null, 8, K)
    ], 16));
  }
});
const _ = (e) => (e.install = (t) => {
  t.component(e.name, e);
}, e), k = Symbol("W_INSTALLED_KEY"), R = "1.0.0", F = (e) => ({
  version: R,
  install: (s, o) => {
    s[k] || (s[k] = !0, e.forEach((n) => s.use(n)));
  }
}), h = _(q), H = {
  type: {
    type: String,
    dafault: "default"
  },
  size: String,
  icon: {
    type: String,
    default: ""
  },
  attrType: {
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
}, J = {
  click: (e) => e instanceof MouseEvent
}, Q = (e, t) => ({ _ref: B(), handleClick: (n) => {
  t("click", n);
} }), U = ["disabled", "autofocus", "type"], X = { key: 2 }, Z = i({
  name: "w-button"
}), x = /* @__PURE__ */ i({
  ...Z,
  props: H,
  emits: J,
  setup(e, { expose: t, emit: s }) {
    const o = e, { _ref: n, handleClick: l } = Q(o, s);
    return t({
      ref: n
    }), (r, v) => (a(), c("button", {
      ref_key: "_ref",
      ref: n,
      class: I(["w-button", [
        r.type ? "w-button-" + r.type : "",
        r.size ? "w-button-" + r.size : "",
        {
          "is-disabled": r.disabled,
          "is-loading": r.loading,
          "is-plain": r.plain,
          "is-round": r.round,
          "is-circle": r.circle
        }
      ]]),
      onClick: v[0] || (v[0] = (...z) => u(l) && u(l)(...z)),
      disabled: r.disabled || r.loading,
      autofocus: r.autofocus,
      type: r.attrType
    }, [
      r.loading ? (a(), b(u(h), {
        key: 0,
        class: "w-icon-loading w-icon--left",
        name: "loading"
      })) : f("", !0),
      r.icon && !r.loading ? (a(), b(u(h), {
        key: 1,
        class: "w-icon--left",
        name: r.icon
      }, null, 8, ["name"])) : f("", !0),
      r.$slots.default ? (a(), c("span", X, [
        d(r.$slots, "default")
      ])) : f("", !0)
    ], 10, U));
  }
});
const $ = _(x), ee = {
  key: 0,
  class: "modal-mask"
}, te = { class: "modal-wrapper" }, se = { class: "modal-container" }, oe = { class: "modal-header" }, ne = { class: "modal-body" }, re = { class: "modal-footer" }, ae = i({
  name: "w-modal"
}), le = /* @__PURE__ */ i({
  ...ae,
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    },
    to: {
      type: String,
      default: "body"
    }
  },
  emits: ["close", "update:modelValue"],
  setup(e, { emit: t }) {
    const s = e;
    return (o, n) => (a(), b(j, {
      to: s.to
    }, [
      g(T, { name: "modal" }, {
        default: m(() => [
          s.modelValue ? (a(), c("div", ee, [
            p("div", te, [
              p("div", se, [
                p("div", oe, [
                  d(o.$slots, "header", {}, void 0, !0)
                ]),
                p("div", ne, [
                  d(o.$slots, "body", {}, void 0, !0)
                ]),
                p("div", re, [
                  d(o.$slots, "footer", {}, () => [
                    g(u($), {
                      type: "primary",
                      onClick: n[0] || (n[0] = (l) => o.$emit("close"))
                    }, {
                      default: m(() => [
                        w("Comfirm")
                      ]),
                      _: 1
                    }),
                    g(u($), {
                      type: "default",
                      onClick: n[1] || (n[1] = (l) => o.$emit("close"))
                    }, {
                      default: m(() => [
                        w("Cancel")
                      ]),
                      _: 1
                    })
                  ], !0)
                ])
              ])
            ])
          ])) : f("", !0)
        ]),
        _: 3
      })
    ], 8, ["to"]));
  }
});
const y = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [o, n] of t)
    s[o] = n;
  return s;
}, ie = /* @__PURE__ */ y(le, [["__scopeId", "data-v-13b3c658"]]), ce = _(ie), de = /* @__PURE__ */ i({
  name: "w-grid"
});
const ue = { class: "w-grid" };
function _e(e, t, s, o, n, l) {
  return a(), c("div", ue, [
    d(e.$slots, "default")
  ]);
}
const pe = /* @__PURE__ */ y(de, [["render", _e]]), fe = /* @__PURE__ */ i({
  name: "w-grid-item"
}), me = { class: "w-grid-item" };
function be(e, t, s, o, n, l) {
  return a(), c("div", me, [
    d(e.$slots, "default")
  ]);
}
const ye = /* @__PURE__ */ y(fe, [["render", be]]), W = _(pe), E = _(ye);
W.WItem = E;
const ge = {
  separator: {
    type: String,
    default: "\u2022"
  }
}, he = i({
  name: "w-breadcrumb"
}), $e = /* @__PURE__ */ i({
  ...he,
  props: ge,
  setup(e, { expose: t }) {
    const s = e, o = B();
    return G("breadcrumb", s), t({
      ref: o
    }), (n, l) => (a(), c("ul", {
      ref_key: "_ref",
      ref: o,
      class: "w-breadcrumb"
    }, [
      d(n.$slots, "default")
    ], 512));
  }
});
const ve = { class: "w-breadcrumb-item" }, we = { class: "w-breadcrumb-item-separator" }, ke = i({
  name: "w-breadcrumb-item"
}), Se = /* @__PURE__ */ i({
  ...ke,
  setup(e) {
    const t = L("breadcrumb", void 0), { separator: s } = M(t);
    return (o, n) => (a(), c("li", ve, [
      d(o.$slots, "default"),
      p("span", we, O(u(s)), 1)
    ]));
  }
}), V = _($e), P = _(Se);
V.WBreadcrumbItem = P;
const S = (e, t) => {
  const o = (e.$options || {}).propsData || {};
  return t in o;
};
const Ce = {
  name: "w-tag",
  model: {
    prop: "visible",
    event: "close.visible"
  },
  props: {
    color: String,
    visible: {
      type: Boolean,
      default: void 0
    },
    closable: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    tagStyle() {
      return {
        backgroundColor: this.color
      };
    },
    hasColor() {
      const { color: e } = this.$props, t = [
        "primary",
        "success",
        "warning",
        "danger",
        "dark",
        "metal",
        "info",
        "light",
        "brand",
        "focus"
      ];
      return e ? t.includes(e) ? "w-tag-" + e : "w-tag-has-color" : null;
    }
  },
  data() {
    let e = !0;
    return S(this, "visible") && (e = this.visible), {
      isShow: e
    };
  },
  watch: {
    visible(e) {
      this.isShow = e;
    }
  },
  methods: {
    setVisible(e, t) {
      this.$emit("close", t), this.$emit("close.visible", e), !t.defaultPrevented && (S(this, "visible") || (this.isShow = this.visible));
    },
    handleClick(e) {
      e.stopPropagation(), this.setVisible(!1, e);
    }
  }
};
function Be(e, t, s, o, n, l) {
  return a(), b(T, null, {
    default: m(() => [
      n.isShow ? (a(), c("span", {
        key: 0,
        class: I(["w-tag", l.hasColor]),
        style: A(l.tagStyle)
      }, [
        d(e.$slots, "default"),
        s.closable ? (a(), c("span", {
          key: 0,
          onClick: t[0] || (t[0] = (...r) => l.handleClick && l.handleClick(...r)),
          class: "w-tag-close"
        })) : f("", !0)
      ], 6)) : f("", !0)
    ]),
    _: 3
  });
}
const Ie = /* @__PURE__ */ y(Ce, [["render", Be]]), Te = _(Ie), C = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  WIcon: h,
  WButton: $,
  WModal: ce,
  WGrid: W,
  WGridItem: E,
  WBreadcrumb: V,
  WBreadcrumbItem: P,
  WTag: Te
}, Symbol.toStringTag, { value: "Module" })), We = Object.keys(C).map((e) => C[e]), Ve = F(We);
export {
  V as WBreadcrumb,
  P as WBreadcrumbItem,
  $ as WButton,
  W as WGrid,
  E as WGridItem,
  h as WIcon,
  ce as WModal,
  Te as WTag,
  Ve as default
};
