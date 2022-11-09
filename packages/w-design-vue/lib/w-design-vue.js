import { defineComponent as _, computed as h, openBlock as d, createElementBlock as u, mergeProps as v, createElementVNode as a, unref as i, ref as $, normalizeClass as w, createBlock as m, createCommentVNode as r, renderSlot as c, Teleport as B, createVNode as S, Transition as C, withCtx as V, createTextVNode as f } from "vue";
const T = ["xlink:href"], z = {
  name: "w-icon",
  inheritAttrs: !1
}, E = /* @__PURE__ */ _({
  ...z,
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
  setup(o) {
    const n = o, s = h(() => `#${n.prefix}-${n.name}`);
    return (t, l) => (d(), u("svg", v({ class: "w-icon" }, t.$attrs, { "aria-hidden": "true" }), [
      a("use", { "xlink:href": i(s) }, null, 8, T)
    ], 16));
  }
});
const y = (o, n) => {
  if (o.install = (s) => {
    for (const t of [o, ...Object.values(n != null ? n : {})])
      s.component(t.name, t);
  }, n)
    for (const [s, t] of Object.entries(n))
      o[s] = t;
  return o;
}, g = y(E), I = {
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
}, N = {
  click: (o) => o instanceof MouseEvent
}, O = (o, n) => ({ _ref: $(), handleClick: (l) => {
  n("click", l);
} }), M = ["disabled", "autofocus", "type"], W = { key: 2 }, j = {
  name: "w-button"
}, P = /* @__PURE__ */ _({
  ...j,
  props: I,
  emits: N,
  setup(o, { expose: n, emit: s }) {
    const t = o, { _ref: l, handleClick: p } = O(t, s);
    return n({
      ref: l
    }), (e, b) => (d(), u("button", {
      ref_key: "_ref",
      ref: l,
      class: w(["w-button", [
        e.type ? "w-button-" + e.type : "",
        e.size ? "w-button-" + e.size : "",
        {
          "is-disabled": e.disabled,
          "is-loading": e.loading,
          "is-plain": e.plain,
          "is-round": e.round,
          "is-circle": e.circle
        }
      ]]),
      onClick: b[0] || (b[0] = (...k) => i(p) && i(p)(...k)),
      disabled: e.disabled || e.loading,
      autofocus: e.autofocus,
      type: e.attrType
    }, [
      e.loading ? (d(), m(i(g), {
        key: 0,
        class: "w-icon-loading w-icon--left",
        name: "loading"
      })) : r("", !0),
      e.icon && !e.loading ? (d(), m(i(g), {
        key: 1,
        class: "w-icon--left",
        name: e.icon
      }, null, 8, ["name"])) : r("", !0),
      e.$slots.default ? (d(), u("span", W, [
        c(e.$slots, "default")
      ])) : r("", !0)
    ], 10, M));
  }
}), U = y(P), q = {
  key: 0,
  class: "modal-mask"
}, A = { class: "modal-wrapper" }, K = { class: "modal-container" }, D = { class: "modal-header" }, F = { class: "modal-body" }, G = { class: "modal-footer" }, H = {
  name: "w-modal"
}, J = /* @__PURE__ */ _({
  ...H,
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
  setup(o, { emit: n }) {
    const s = o;
    return (t, l) => (d(), m(B, {
      to: s.to
    }, [
      S(C, { name: "modal" }, {
        default: V(() => [
          s.modelValue ? (d(), u("div", q, [
            a("div", A, [
              a("div", K, [
                a("div", D, [
                  c(t.$slots, "header", {}, () => [
                    f("default header")
                  ])
                ]),
                a("div", F, [
                  c(t.$slots, "body", {}, () => [
                    f("default body")
                  ])
                ]),
                a("div", G, [
                  c(t.$slots, "footer", {}, () => [
                    f(" default footer "),
                    a("button", {
                      class: "modal-default-button",
                      onClick: l[0] || (l[0] = (p) => t.$emit("close"))
                    }, "OK")
                  ])
                ])
              ])
            ])
          ])) : r("", !0)
        ]),
        _: 3
      })
    ], 8, ["to"]));
  }
});
const L = (o, n) => {
  const s = o.__vccOpts || o;
  for (const [t, l] of n)
    s[t] = l;
  return s;
}, Q = /* @__PURE__ */ L(J, [["__scopeId", "data-v-47573564"]]), X = y(Q);
export {
  U as WButton,
  g as WIcon,
  X as WModal
};
