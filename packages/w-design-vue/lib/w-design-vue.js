import { defineComponent as $, computed as g, openBlock as r, createElementBlock as _, normalizeClass as W, normalizeStyle as O, renderSlot as u, createCommentVNode as S, ref as k, provide as V, inject as j, getCurrentInstance as se, createBlock as L, Transition as P, toHandlers as oe, withCtx as x, withDirectives as z, createElementVNode as d, vShow as H, createVNode as E, mergeProps as G, unref as b, Teleport as q, createTextVNode as N, toRefs as ne, toDisplayString as Y, reactive as ae } from "vue";
const le = {
  icon: {
    type: Object,
    default: () => {
    }
  },
  shape: {
    type: String,
    dafault: "circle"
  },
  size: {
    type: [Number, String],
    dafault: ""
  },
  alt: String,
  src: String,
  srcSet: String
}, re = ["src"], ie = {
  name: "avatar"
}, ce = /* @__PURE__ */ $({
  ...ie,
  props: le,
  setup(e) {
    const s = e, t = g(() => s.shape ?? "square"), n = (o) => o + "px", a = g(() => {
      const { size: o = 0 } = s;
      if (typeof o != "number")
        return;
      const i = n(o);
      if (o)
        return {
          width: i,
          height: i,
          lineHeight: i,
          fontSize: n(o / 2)
        };
    }), l = g(() => ({
      [`avatar__${t}`]: t.value,
      [`avatar__${s.size}`]: s.size
    }));
    return (o, i) => (r(), _("div", {
      class: W(["avatar", l.value]),
      style: O(a.value)
    }, [
      u(o.$slots, "icon", {}, () => [
        s.src ? (r(), _("img", {
          key: 0,
          class: "avatar__image",
          src: s.src
        }, null, 8, re)) : S("", !0)
      ]),
      u(o.$slots, "default")
    ], 6));
  }
});
const y = (e) => (e.install = (s) => {
  s.component(e.name, e);
}, e), R = Symbol("W_INSTALLED_KEY"), de = "1.0.0", ue = (e) => ({
  version: de,
  install: (t) => {
    t[R] || (t[R] = !0, e.forEach((n) => t.use(n)));
  }
}), pe = y(ce), F = Symbol("collpase"), _e = {
  activeKey: {
    type: [String, Number, Array],
    dafault: ""
  },
  accordion: Boolean,
  bordered: {
    type: Boolean,
    default: !0
  }
}, fe = {
  title: {
    type: [String, Object],
    dafault: ""
  },
  name: {
    type: [String, Number],
    default: ""
  },
  disabled: Boolean,
  readonly: Boolean
}, ge = ["change", "update:activeKey"];
function me(e, s) {
  return s && Array.isArray(e) ? (console.error('[W] Collapse: "v-model" should not be Array in accordion mode'), !1) : !s && !Array.isArray(e) ? (console.error('[W] Collapse: "v-model" should be Array in non-accordion mode'), !1) : !0;
}
const ve = (e, s) => {
  const t = k(), n = (o) => {
    s("change", o), s("update:activeKey", o);
  }, a = (o, i) => {
    const { activeKey: c, accordion: p } = e;
    n(p ? o === c ? "" : o : i ? c.concat(o) : c.filter((w) => w !== o));
  }, l = (o) => {
    const { activeKey: i, accordion: c } = e;
    return me(i, c) ? c ? i === o : i.includes(o) : !1;
  };
  return V(F, { toggle: a, isExpanded: l }), { _ref: t, toggle: a, isExpanded: l };
}, ye = {
  name: "collapse"
}, he = /* @__PURE__ */ $({
  ...ye,
  props: _e,
  emits: ge,
  setup(e, { expose: s, emit: t }) {
    const n = e, { _ref: a } = ve(n, t);
    return s({
      ref: a
    }), (l, o) => (r(), _("div", {
      ref_key: "_ref",
      ref: a,
      class: W(["collapse", { "collapse--borderless": !n.bordered }])
    }, [
      u(l.$slots, "default")
    ], 2));
  }
});
function be(e) {
  const s = j(e, null);
  if (s) {
    const t = se(), { link: n, unlink: a, internalChildren: l } = s, o = g(() => l.indexOf(t));
    return {
      parent: s,
      index: o
    };
  }
  return {
    parent: null,
    index: k(-1)
  };
}
const $e = { class: "collapse-transition" }, we = /* @__PURE__ */ $({
  __name: "collapse-transition",
  props: { visible: Boolean },
  setup(e) {
    const s = {
      // 元素由隐藏变为可见
      enter(t) {
        t.style.height = "auto";
        const n = window.getComputedStyle(t).height;
        t.style.height = "0px", t.offsetHeight, t.style.height = n;
      },
      afterEnter(t) {
        t.style.height = "";
      },
      // 元素由可见变为隐藏
      leave(t) {
        t.style.height = window.getComputedStyle(t).height, t.offsetHeight, t.style.height = "0px";
      },
      afterLeave(t) {
        t.style.height = "";
      }
    };
    return (t, n) => (r(), L(P, oe(s), {
      default: x(() => [
        z(d("div", $e, [
          u(t.$slots, "default")
        ], 512), [
          [H, e.visible]
        ])
      ]),
      _: 3
    }, 16));
  }
});
const Se = { class: "collapse__toggle" }, ke = /* @__PURE__ */ d("div", { class: "triangle" }, null, -1), Ce = ["innerHTML"], Be = {
  name: "collapse-item"
}, xe = /* @__PURE__ */ $({
  ...Be,
  props: fe,
  setup(e, { expose: s }) {
    const t = e, n = k(), a = k(), { parent: l, index: o } = be(F), i = g(() => t.name ?? o.value), c = g(() => l == null ? void 0 : l.isExpanded(i.value)), p = g(() => ({ "collapse__item--expanded": c.value })), w = (h = !c.value) => {
      l == null || l.toggle(i.value, h);
    }, C = () => {
      const { disabled: h, readonly: f } = t;
      !h && !f && w();
    };
    return s({
      ref: n
    }), (h, f) => (r(), _("div", {
      ref_key: "_ref",
      ref: n,
      class: W(["collapse__item", p.value])
    }, [
      d("div", {
        class: "collapse__header",
        onClick: C
      }, [
        d("div", Se, [
          u(h.$slots, "icon", { expanded: c.value }, () => [
            ke
          ])
        ]),
        u(h.$slots, "title", {}, () => [
          t.title ? (r(), _("div", {
            key: 0,
            class: "collapse__title",
            innerHTML: t.title
          }, null, 8, Ce)) : S("", !0)
        ])
      ]),
      E(we, { visible: c.value }, {
        default: x(() => [
          d("div", {
            ref_key: "contentRef",
            ref: a,
            class: "collapse__content"
          }, [
            u(h.$slots, "default")
          ], 512)
        ]),
        _: 3
      }, 8, ["visible"])
    ], 2));
  }
}), X = y(he), J = y(xe);
X.WBreadcrumbItem = J;
const Te = ["xlink:href"], Ee = {
  name: "w-icon",
  inheritAttrs: !1
}, Le = /* @__PURE__ */ $({
  ...Ee,
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
    const s = e, t = g(() => `#${s.prefix}-${s.name}`);
    return (n, a) => (r(), _("svg", G({ class: "w-icon" }, n.$attrs, { "aria-hidden": "true" }), [
      d("use", { "xlink:href": t.value }, null, 8, Te)
    ], 16));
  }
});
const I = y(Le), We = {
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
}, Oe = {
  click: (e) => e instanceof MouseEvent
}, Pe = (e, s) => ({ _ref: k(), handleClick: (a) => {
  s("click", a);
} }), Me = ["disabled", "autofocus", "type"], Ie = {
  name: "w-button"
}, Ae = /* @__PURE__ */ $({
  ...Ie,
  props: We,
  emits: Oe,
  setup(e, { expose: s, emit: t }) {
    const n = e, { _ref: a, handleClick: l } = Pe(n, t);
    return s({
      ref: a
    }), (o, i) => (r(), _("button", {
      ref_key: "_ref",
      ref: a,
      class: W(["w-button", [
        o.type ? "w-button__" + o.type : "",
        o.size ? "w-button__" + o.size : "",
        {
          "is-disabled": o.disabled,
          "is-loading": o.loading,
          "is-plain": o.plain,
          "is-round": o.round,
          "is-circle": o.circle
        }
      ]]),
      onClick: i[0] || (i[0] = //@ts-ignore
      (...c) => b(l) && b(l)(...c)),
      disabled: o.disabled || o.loading,
      autofocus: o.autofocus,
      type: o.attrType
    }, [
      o.loading ? (r(), L(b(I), {
        key: 0,
        class: "w-icon-loading w-icon--left",
        name: "loading"
      })) : S("", !0),
      o.icon && !o.loading ? (r(), L(b(I), {
        key: 1,
        class: "w-icon--left",
        name: o.icon
      }, null, 8, ["name"])) : S("", !0),
      u(o.$slots, "default")
    ], 10, Me));
  }
});
const A = y(Ae), Ve = {
  key: 0,
  class: "modal-mask"
}, je = { class: "modal-wrapper" }, ze = { class: "modal-container" }, He = { class: "modal-header" }, Ne = { class: "modal-body" }, Re = { class: "modal-footer" }, De = /* @__PURE__ */ $({
  name: "w-modal",
  __name: "modal",
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
  setup(e, { emit: s }) {
    const t = e;
    return (n, a) => (r(), L(q, {
      to: t.to
    }, [
      E(P, { name: "modal" }, {
        default: x(() => [
          t.modelValue ? (r(), _("div", Ve, [
            d("div", je, [
              d("div", ze, [
                d("div", He, [
                  u(n.$slots, "header", {}, void 0, !0)
                ]),
                d("div", Ne, [
                  u(n.$slots, "body", {}, void 0, !0)
                ]),
                d("div", Re, [
                  u(n.$slots, "footer", {}, () => [
                    E(b(A), {
                      type: "primary",
                      onClick: a[0] || (a[0] = (l) => n.$emit("close"))
                    }, {
                      default: x(() => [
                        N("Comfirm")
                      ]),
                      _: 1
                    }),
                    E(b(A), {
                      type: "default",
                      onClick: a[1] || (a[1] = (l) => n.$emit("close"))
                    }, {
                      default: x(() => [
                        N("Cancel")
                      ]),
                      _: 1
                    })
                  ], !0)
                ])
              ])
            ])
          ])) : S("", !0)
        ]),
        _: 3
      })
    ], 8, ["to"]));
  }
});
const M = (e, s) => {
  const t = e.__vccOpts || e;
  for (const [n, a] of s)
    t[n] = a;
  return t;
}, Ke = /* @__PURE__ */ M(De, [["__scopeId", "data-v-400e36db"]]), Ge = y(Ke), qe = {
  name: "w-grid"
};
const Ye = { class: "w-grid" };
function Fe(e, s, t, n, a, l) {
  return r(), _("div", Ye, [
    u(e.$slots, "default")
  ]);
}
const Xe = /* @__PURE__ */ M(qe, [["render", Fe]]), Je = {
  name: "w-grid-item"
}, Qe = { class: "w-grid-item" };
function Ue(e, s, t, n, a, l) {
  return r(), _("div", Qe, [
    u(e.$slots, "default")
  ]);
}
const Ze = /* @__PURE__ */ M(Je, [["render", Ue]]), Q = y(Xe), U = y(Ze);
Q.WItem = U;
const et = {
  separator: {
    type: String,
    default: "•"
  }
}, tt = {
  name: "w-breadcrumb"
}, st = /* @__PURE__ */ $({
  ...tt,
  props: et,
  setup(e, { expose: s }) {
    const t = e, n = k();
    return V("breadcrumb", t), s({
      ref: n
    }), (a, l) => (r(), _("ul", {
      ref_key: "_ref",
      ref: n,
      class: "w-breadcrumb"
    }, [
      u(a.$slots, "default")
    ], 512));
  }
});
const ot = { class: "w-breadcrumb__item" }, nt = { class: "w-breadcrumb__item-separator" }, at = {
  name: "w-breadcrumb-item"
}, lt = /* @__PURE__ */ $({
  ...at,
  setup(e) {
    const s = j("breadcrumb", void 0), { separator: t } = ne(s);
    return (n, a) => (r(), _("li", ot, [
      u(n.$slots, "default"),
      d("span", nt, Y(b(t)), 1)
    ]));
  }
}), Z = y(st), ee = y(lt);
Z.WBreadcrumbItem = ee;
const D = (e, s) => {
  const n = (e.$options || {}).propsData || {};
  return s in n;
};
const rt = {
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
      const { color: e } = this.$props, s = [
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
      return e ? s.includes(e) ? "w-tag-" + e : "w-tag-has-color" : null;
    }
  },
  data() {
    let e = !0;
    return D(this, "visible") && (e = this.visible), {
      isShow: e
    };
  },
  watch: {
    visible(e) {
      this.isShow = e;
    }
  },
  methods: {
    setVisible(e, s) {
      this.$emit("close", s), this.$emit("close.visible", e), !s.defaultPrevented && (D(this, "visible") || (this.isShow = this.visible));
    },
    handleClick(e) {
      e.stopPropagation(), this.setVisible(!1, e);
    }
  }
};
function it(e, s, t, n, a, l) {
  return r(), L(P, null, {
    default: x(() => [
      a.isShow ? (r(), _("span", {
        key: 0,
        class: W(["w-tag", l.hasColor]),
        style: O(l.tagStyle)
      }, [
        u(e.$slots, "default"),
        t.closable ? (r(), _("span", {
          key: 0,
          onClick: s[0] || (s[0] = (...o) => l.handleClick && l.handleClick(...o)),
          class: "w-tag-close"
        })) : S("", !0)
      ], 6)) : S("", !0)
    ]),
    _: 3
  });
}
const ct = /* @__PURE__ */ M(rt, [["render", it]]), dt = y(ct), ut = {
  target: String,
  header: {
    type: [String, Object]
  },
  content: {
    type: [String, Object]
  },
  actions: {
    type: [Boolean, Object],
    default: !0
  },
  // 角标位置 top✔ | left | right | bottom
  direction: {
    type: String,
    validator(e) {
      return ["bottom", "top", "left", "right"].indexOf(e) !== -1;
    },
    default: "top"
  },
  isFirst: Boolean,
  isLast: Boolean
}, pt = {
  next: (e) => e instanceof MouseEvent,
  prev: (e) => e instanceof MouseEvent,
  skip: (e) => e instanceof MouseEvent
}, _t = (e, s) => ({ _ref: k(), next: (o) => {
  s("next", o);
}, prev: (o) => {
  s("prev", o);
}, skip: (o) => {
  s("skip", o);
} }), ft = ["innerHTML"], gt = ["innerHTML"], mt = { class: "w-step__actions" }, vt = /* @__PURE__ */ $({
  __name: "Step",
  props: ut,
  emits: pt,
  setup(e, { emit: s }) {
    const t = e, { _ref: n, next: a, prev: l, skip: o } = _t(t, s), i = j("guide");
    console.log("guide step", i);
    const c = k(), p = k(), w = g(() => i.isLast ? "完成" : "下一步"), C = () => {
      const f = document.body, v = document.documentElement, m = window.pageYOffset || v.scrollTop || f.scrollTop, T = window.pageXOffset || v.scrollLeft || f.scrollLeft, B = p.value.getBoundingClientRect();
      return {
        top: B.top + m,
        left: B.left + T,
        right: B.left + T + B.width,
        bottom: B.top + m + B.height
      };
    }, h = g(() => {
      if (p.value = document.querySelector(t.target), p.value && c.value) {
        const { bottom: v, left: m } = C(), { height: T } = c.value.getBoundingClientRect();
        console.log("stepStyle", m, T);
        const B = `${v + 20}px`, te = `${m}px`;
        return {
          top: B,
          left: te
        };
      }
    });
    return (f, v) => (r(), _("div", {
      class: W(["w-step", [f.direction]]),
      ref_key: "stepRef",
      ref: c,
      style: O(h.value)
    }, [
      u(f.$slots, "header", {}, () => [
        f.header ? (r(), _("div", {
          key: 0,
          class: "w-step__header",
          innerHTML: f.header
        }, null, 8, ft)) : S("", !0)
      ]),
      u(f.$slots, "content", {}, () => [
        f.content ? (r(), _("div", {
          key: 0,
          class: "w-step__content",
          innerHTML: f.content
        }, null, 8, gt)) : S("", !0)
      ]),
      u(f.$slots, "actions", {}, () => [
        d("div", mt, [
          d("a", {
            class: "w-step__actions-btn",
            href: "javascript:;",
            onClick: v[0] || (v[0] = (m) => b(o)(m))
          }, "跳过"),
          z(d("a", {
            class: "w-step__actions-btn",
            href: "javascript:;",
            onClick: v[1] || (v[1] = (m) => b(l)(m))
          }, "上一步", 512), [
            [H, !b(i).isFirst]
          ]),
          d("a", {
            class: "w-step__actions-btn",
            href: "javascript:;",
            onClick: v[2] || (v[2] = (m) => b(a)(m))
          }, Y(w.value), 1)
        ])
      ])
    ], 6));
  }
}), yt = { class: "w-guide" }, ht = {
  key: 0,
  class: "w-guide-overlay"
}, bt = { class: "w-guide-step" }, $t = /* @__PURE__ */ $({
  __name: "Guide",
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    },
    steps: {
      type: Array,
      default: () => []
    },
    mask: {
      type: Boolean,
      default: !0
    },
    direction: {
      type: String,
      validator(e) {
        return ["bottom", "top", "left", "right"].indexOf(e) !== -1;
      },
      default: "top"
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: s }) {
    const t = e, n = ae({
      active: 0,
      isFirst: g(() => n.active === 0),
      isLast: g(() => n.active === t.steps.length - 1),
      step: g(() => t.steps[n.active])
    });
    console.log("guide state", n.active);
    const a = g(() => {
      var w;
      const p = document.querySelector((w = n.step) == null ? void 0 : w.target);
      if (p) {
        p.setAttribute("data-target-highlighted", "");
        const { top: C, left: h, right: f, bottom: v, width: m, height: T } = p.getBoundingClientRect();
        return {
          top: `${C - 10 * 0.5}px`,
          left: `${h - 10 * 0.5}px`,
          width: `${m + 10}px`,
          height: `${T + 10}px`
        };
      }
    }), l = () => {
      n.active >= t.steps.length - 1 ? s("update:modelValue", !1) : n.active++;
    }, o = () => {
      n.active !== 0 && n.active--;
    }, i = () => {
      s("update:modelValue", !1);
    };
    return V("guide", n), (c, p) => {
      const w = vt;
      return r(), L(q, { to: "body" }, [
        z(d("section", yt, [
          e.mask ? (r(), _("div", ht)) : S("", !0),
          d("div", {
            class: "w-guide-target",
            style: O(a.value)
          }, null, 4),
          d("div", bt, [
            E(P, { name: "fade" }, {
              default: x(() => [
                E(w, G({ ...n.step, direction: e.direction }, {
                  onSkip: p[0] || (p[0] = (C) => i()),
                  onNext: p[1] || (p[1] = (C) => l()),
                  onPrev: p[2] || (p[2] = (C) => o())
                }), null, 16)
              ]),
              _: 1
            })
          ])
        ], 512), [
          [H, t.modelValue]
        ])
      ]);
    };
  }
});
const wt = y($t), K = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  WAvatar: pe,
  WBreadcrumb: Z,
  WBreadcrumbItem: ee,
  WButton: A,
  WCollapse: X,
  WCollapseItem: J,
  WGrid: Q,
  WGridItem: U,
  WGuide: wt,
  WIcon: I,
  WModal: Ge,
  WTag: dt
}, Symbol.toStringTag, { value: "Module" })), St = Object.keys(K).map((e) => K[e]), Ct = ue(St);
export {
  pe as WAvatar,
  Z as WBreadcrumb,
  ee as WBreadcrumbItem,
  A as WButton,
  X as WCollapse,
  J as WCollapseItem,
  Q as WGrid,
  U as WGridItem,
  wt as WGuide,
  I as WIcon,
  Ge as WModal,
  dt as WTag,
  Ct as default
};
