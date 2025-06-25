"use strict";
(self.webpackChunkreact_bootstrap_website =
  self.webpackChunkreact_bootstrap_website || []).push([
  [3237],
  {
    11572: (e, t, s) => {
      s.d(t, { Z: () => o });
      var n = s(67294),
        r = s(85893);
      const o = (e) => {
        const t = (0, n.useRef)();
        return (
          (0, n.useEffect)(() => {
           
          }, []),
          (0, r.jsx)("div", { ref: t, ...e })
        );
      };
    },
    49129: (e, t, s) => {
      s.d(t, { Z: () => r });
      var n = s(28084);
      function r() {
        return (0, n.eZ)("bootstrap-metadata-plugin");
      }
    },
    78391: (e, t, s) => {
      s.r(t), s.d(t, { default: () => f });
      s(67294);
      var n = s(90512),
        r = s(33692),
        o = s(52263),
        i = s(68632);
      const a = { features: "features_t9lD" };
      var c = s(85893);
      const l = [
       
      
       
      ];
      function d(e) {
        let { title: t, description: s } = e;
        return (0, c.jsx)("div", {
          className: (0, n.Z)("col col--4"),
          children: (0, c.jsxs)("div", {
            className: "padding-horiz--md",
            children: [
              (0, c.jsx)("h3", { children: t }),
              (0, c.jsx)("div", { children: s }),
            ],
          }),
        });
      }
      function h() {
        return (0, c.jsx)("section", {
          className: a.features,
          children: (0, c.jsx)("div", {
            className: "container",
            children: (0, c.jsx)("div", {
              className: "row",
              children: l.map((e, t) => (0, c.jsx)(d, { ...e }, t)),
            }),
          }),
        });
      }
      var u = s(11572),
        p = s(49129);
      const m = {
        heroBanner: "heroBanner_qdFl",
        buttons: "buttons_AeoN",
        
      };
      function b() {
        const { siteConfig: e } = (0, o.Z)(),
          { rbVersion: t } = (0, p.Z)();
        return (0, c.jsx)("header", {
          className: (0, n.Z)("hero", m.heroBanner),
          children: (0, c.jsxs)("div", {
            className: "container",
            children: [
              (0, c.jsx)("h1", { className: "hero__title", children: e.title }),
              (0, c.jsx)("p", {
                className: "hero__subtitle",
                children: e.tagline,
              }),
              (0, c.jsxs)("div", {
                className: m.buttons,
                children: [
                  (0, c.jsx)(r.Z, {
                    className: "button button--primary button--lg",
                    to: "/docs/getting-started/introduction",
                    children: "Bắt Đầu",
                  }),
                  (0, c.jsx)(r.Z, {
                    className: "button button--primary button--lg",
                    to: "/docs/components/accordion",
                    children: "TÌm Hiểu Thêm!",
                  }),
                ],
              }),
              
              (0, c.jsx),
            ],
          }),
        });
      }
      function f() {
        const { siteConfig: e } = (0, o.Z)();
        return (0, c.jsxs)(i.Z, {
          title: e.title,
          description:
            "The most popular front-end framework, rebuilt for React",
          children: [
            (0, c.jsx)(b, {}),
            (0, c.jsx)("main", { children: (0, c.jsx)(h, {}) }),
          ],
        });
      }
    },
  },
]);
