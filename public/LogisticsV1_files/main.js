import { injectQuery as __vite__injectQuery } from "/@vite/client";import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/main.js");// src/main.ts
import { bootstrapApplication } from "/@fs/Users/akashkumar/Desktop/gaurav_bhaiya/logistics-v1/.angular/cache/22.0.5/logistics-v1/vite/deps/@angular_platform-browser.js?v=49e0e38e";

// src/app/app.config.ts
import { provideBrowserGlobalErrorListeners } from "/@fs/Users/akashkumar/Desktop/gaurav_bhaiya/logistics-v1/.angular/cache/22.0.5/logistics-v1/vite/deps/@angular_core.js?v=49e0e38e";
import { provideRouter } from "/@fs/Users/akashkumar/Desktop/gaurav_bhaiya/logistics-v1/.angular/cache/22.0.5/logistics-v1/vite/deps/@angular_router.js?v=49e0e38e";

// src/app/pages/home/home.ts
import { Component as Component2 } from "/@fs/Users/akashkumar/Desktop/gaurav_bhaiya/logistics-v1/.angular/cache/22.0.5/logistics-v1/vite/deps/@angular_core.js?v=49e0e38e";

// src/app/layouts/navbar/navbar.ts
import { Component } from "/@fs/Users/akashkumar/Desktop/gaurav_bhaiya/logistics-v1/.angular/cache/22.0.5/logistics-v1/vite/deps/@angular_core.js?v=49e0e38e";
import { RouterLink, RouterLinkActive } from "/@fs/Users/akashkumar/Desktop/gaurav_bhaiya/logistics-v1/.angular/cache/22.0.5/logistics-v1/vite/deps/@angular_router.js?v=49e0e38e";
import * as i0 from "/@fs/Users/akashkumar/Desktop/gaurav_bhaiya/logistics-v1/.angular/cache/22.0.5/logistics-v1/vite/deps/@angular_core.js?v=49e0e38e";
var Navbar = class _Navbar {
  static \u0275fac = function Navbar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Navbar)();
  };
  static \u0275cmp = /* @__PURE__ */ i0.\u0275\u0275defineComponent({ type: _Navbar, selectors: [["app-navbar"]], decls: 22, vars: 0, consts: [[1, "fixed", "top-0", "left-0", "w-full", "z-100", "backdrop-blur-xl", "bg-slate-950/55", "border-b", "border-white/10"], [1, "max-w-7xl", "mx-auto", "h-20", "px-6", "flex", "items-center"], [1, "flex-1", "flex", "justify-start"], ["src", "SITE-LOGO.-1.png", "alt", "Company Logo", 1, "h-10", "sm:h-12", "sm:w-14", "md:h-14", "md:w-14", "lg:h-16", "lg:w-16", "rounded-full", "w-auto", "object-cover"], [1, "hidden", "lg:flex", "flex-1", "justify-center"], [1, "flex", "items-center", "gap-10"], ["routerLink", "/", 1, "relative", "text-white", "font-medium", "hover:text-sky-400", "transition-all", "duration-300", "after:absolute", "after:left-0", "after:-bottom-2", "after:h-0.5", "after:w-0", "after:bg-sky-400", "after:transition-all", "hover:after:w-full"], ["routerLink", "/about", 1, "relative", "text-white", "font-medium", "hover:text-sky-400", "transition-all", "duration-300", "after:absolute", "after:left-0", "after:-bottom-2", "after:h-0.5", "after:w-0", "after:bg-sky-400", "after:transition-all", "hover:after:w-full"], ["routerLink", "/gallary", 1, "relative", "text-white", "font-medium", "hover:text-sky-400", "transition-all", "duration-300", "after:absolute", "after:left-0", "after:-bottom-2", "after:h-0.5", "after:w-0", "after:bg-sky-400", "after:transition-all", "hover:after:w-full"], ["routerLink", "/contact", 1, "relative", "text-white", "font-medium", "hover:text-sky-400", "transition-all", "duration-300", "after:absolute", "after:left-0", "after:-bottom-2", "after:h-0.5", "after:w-0", "after:bg-sky-400", "after:transition-all", "hover:after:w-full"], [1, "flex-1", "flex", "justify-end"], [1, "lg:hidden", "text-white"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-8", "h-8"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 6h16M4 12h16M4 18h16"]], template: function Navbar_Template(rf, ctx) {
    if (rf & 1) {
      i0.\u0275\u0275elementStart(0, "nav", 0)(1, "div", 1)(2, "div", 2);
      i0.\u0275\u0275element(3, "img", 3);
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(4, "div", 4)(5, "ul", 5)(6, "li")(7, "a", 6);
      i0.\u0275\u0275text(8, " Home ");
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(9, "li")(10, "a", 7);
      i0.\u0275\u0275text(11, " About Us ");
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(12, "li")(13, "a", 8);
      i0.\u0275\u0275text(14, " Gallary ");
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(15, "li")(16, "a", 9);
      i0.\u0275\u0275text(17, " Contact ");
      i0.\u0275\u0275elementEnd()()()();
      i0.\u0275\u0275elementStart(18, "div", 10)(19, "button", 11);
      i0.\u0275\u0275namespaceSVG();
      i0.\u0275\u0275elementStart(20, "svg", 12);
      i0.\u0275\u0275element(21, "path", 13);
      i0.\u0275\u0275elementEnd()()()()();
    }
  }, dependencies: [RouterLink, RouterLinkActive], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(Navbar, [{
    type: Component,
    args: [{ selector: "app-navbar", imports: [RouterLink, RouterLinkActive], template: '<nav class="fixed top-0 left-0 w-full z-100 backdrop-blur-xl bg-slate-950/55 border-b border-white/10">\n    <div class="max-w-7xl mx-auto h-20 px-6 flex items-center">\n\n        <!-- Left: Logo -->\n        <div class="flex-1 flex justify-start">\n            <img src="SITE-LOGO.-1.png" alt="Company Logo"\n                class="h-10 sm:h-12 sm:w-14 md:h-14 md:w-14 lg:h-16 lg:w-16 rounded-full w-auto object-cover" />\n        </div>\n\n        <!-- Center: Navigation -->\n        <div class="hidden lg:flex flex-1 justify-center">\n            <ul class="flex items-center gap-10">\n                <li>\n                    <a routerLink="/" class="relative text-white font-medium hover:text-sky-400 transition-all duration-300\n             after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0\n             after:bg-sky-400 after:transition-all hover:after:w-full">\n                        Home\n                    </a>\n                </li>\n                <li>\n                    <a routerLink="/about" class="relative text-white font-medium hover:text-sky-400 transition-all duration-300\n             after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0\n             after:bg-sky-400 after:transition-all hover:after:w-full">\n                        About Us\n                    </a>\n                </li>\n\n                <li>\n                    <a routerLink="/gallary" class="relative text-white font-medium hover:text-sky-400 transition-all duration-300\n             after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0\n             after:bg-sky-400 after:transition-all hover:after:w-full">\n                        Gallary\n                    </a>\n                </li>\n\n                <li>\n                    <a routerLink="/contact" class="relative text-white font-medium hover:text-sky-400 transition-all duration-300\n             after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0\n             after:bg-sky-400 after:transition-all hover:after:w-full">\n                        Contact\n                    </a>\n                </li>\n            </ul>\n        </div>\n\n        <!-- Right: Placeholder / Mobile Menu -->\n        <div class="flex-1 flex justify-end">\n            <button class="lg:hidden text-white">\n                <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24"\n                    stroke="currentColor">\n                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />\n                </svg>\n            </button>\n        </div>\n\n    </div>\n</nav>' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassDebugInfo(Navbar, { className: "Navbar", filePath: "src/app/layouts/navbar/navbar.ts", lineNumber: 10 });
})();
(() => {
  const id = "src%2Fapp%2Flayouts%2Fnavbar%2Fnavbar.ts%40Navbar";
  function Navbar_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i0.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i0.\u0275\u0275replaceMetadata(Navbar, m.default, [i0], [RouterLink, RouterLinkActive, Component], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && Navbar_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && Navbar_HmrLoad(d.timestamp)));
})();

// src/app/pages/home/home.ts
import * as i02 from "/@fs/Users/akashkumar/Desktop/gaurav_bhaiya/logistics-v1/.angular/cache/22.0.5/logistics-v1/vite/deps/@angular_core.js?v=49e0e38e";
var Home = class _Home {
  static \u0275fac = function Home_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Home)();
  };
  static \u0275cmp = /* @__PURE__ */ i02.\u0275\u0275defineComponent({ type: _Home, selectors: [["app-home"]], decls: 44, vars: 0, consts: [[1, "relative", "min-h-screen", "bg-slate-950", "overflow-hidden", "flex", "items-center", "p-10"], [1, "absolute", "w-125", "h-125", "bg-blue-600/30", "blur-[120px]", "-left-40", "-top-40", "rounded-full"], [1, "absolute", "w-100", "h-100", "bg-sky-500/30", "blur-[120px]", "-right-28", "-bottom-28", "rounded-full"], [1, "w-[92%]", "max-w-7xl", "mx-auto", "grid", "grid-cols-1", "lg:grid-cols-2", "gap-16", "items-center", "pt-24"], [1, "z-10"], [1, "inline-block", "px-5", "py-3", "rounded-full", "text-sky-400", "bg-blue-600/10", "border", "border-sky-400/30", "text-sm"], [1, "text-4xl", "sm:text-5xl", "lg:text-7xl", "font-bold", "leading-tight", "mt-6", "text-white"], [1, "text-sky-400"], [1, "mt-6", "text-slate-400", "text-base", "sm:text-lg", "leading-relaxed", "max-w-xl"], [1, "flex", "flex-wrap", "gap-4", "mt-10"], [1, "px-7", "py-4", "rounded-full", "bg-blue-600", "text-white", "hover:bg-blue-700", "transition"], [1, "px-7", "py-4", "rounded-full", "border", "border-white/20", "text-white", "hover:border-sky-400", "hover:text-sky-400", "transition"], [1, "flex", "gap-12", "mt-16"], [1, "text-3xl", "text-sky-400", "font-bold"], [1, "text-slate-400"], [1, "relative", "h-125", "lg:h-175"], [1, "truck"], [1, "card", "card1"], [1, "card", "card2"], [1, "card", "card3"]], template: function Home_Template(rf, ctx) {
    if (rf & 1) {
      i02.\u0275\u0275elementStart(0, "section", 0);
      i02.\u0275\u0275element(1, "div", 1)(2, "div", 2)(3, "app-navbar");
      i02.\u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "span", 5);
      i02.\u0275\u0275text(7, " \u{1F680} Smart Logistics Platform ");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275elementStart(8, "h1", 6);
      i02.\u0275\u0275text(9, " Logistics Made ");
      i02.\u0275\u0275elementStart(10, "span", 7);
      i02.\u0275\u0275text(11, "Smarter");
      i02.\u0275\u0275elementEnd()();
      i02.\u0275\u0275elementStart(12, "p", 8);
      i02.\u0275\u0275text(13, " Delivering intelligent transportation, AI-powered shipment tracking, warehouse automation, and global supply chain solutions. ");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275elementStart(14, "div", 9)(15, "button", 10);
      i02.\u0275\u0275text(16, " Track Shipment \u2192 ");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275elementStart(17, "button", 11);
      i02.\u0275\u0275text(18, " Get Quote ");
      i02.\u0275\u0275elementEnd()();
      i02.\u0275\u0275elementStart(19, "div", 12)(20, "div")(21, "h2", 13);
      i02.\u0275\u0275text(22, "12K+");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275elementStart(23, "p", 14);
      i02.\u0275\u0275text(24, "Shipments");
      i02.\u0275\u0275elementEnd()();
      i02.\u0275\u0275elementStart(25, "div")(26, "h2", 13);
      i02.\u0275\u0275text(27, "85+");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275elementStart(28, "p", 14);
      i02.\u0275\u0275text(29, "Countries");
      i02.\u0275\u0275elementEnd()();
      i02.\u0275\u0275elementStart(30, "div")(31, "h2", 13);
      i02.\u0275\u0275text(32, "99%");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275elementStart(33, "p", 14);
      i02.\u0275\u0275text(34, "Success");
      i02.\u0275\u0275elementEnd()()()();
      i02.\u0275\u0275elementStart(35, "div", 15)(36, "div", 16);
      i02.\u0275\u0275text(37, "\u{1F69A}");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275elementStart(38, "div", 17);
      i02.\u0275\u0275text(39, "\u{1F4E6} Delivered");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275elementStart(40, "div", 18);
      i02.\u0275\u0275text(41, "\u2708 Air Freight");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275elementStart(42, "div", 19);
      i02.\u0275\u0275text(43, "\u{1F6A2} Ocean Cargo");
      i02.\u0275\u0275elementEnd()()()();
    }
  }, dependencies: [Navbar], styles: ["\n.truck[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 220px;\n  animation: _ngcontent-%COMP%_floatTruck 5s ease-in-out infinite;\n}\n.card[_ngcontent-%COMP%] {\n  position: absolute;\n  background: rgba(15, 23, 42, 0.9);\n  color: white;\n  padding: 18px 24px;\n  border-radius: 20px;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  -webkit-backdrop-filter: blur(15px);\n  backdrop-filter: blur(15px);\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);\n}\n.card1[_ngcontent-%COMP%] {\n  top: 100px;\n  left: 20px;\n  animation: _ngcontent-%COMP%_floatCard 4s infinite ease-in-out;\n}\n.card2[_ngcontent-%COMP%] {\n  top: 220px;\n  right: 0;\n  animation: _ngcontent-%COMP%_floatCard 5s infinite ease-in-out;\n}\n.card3[_ngcontent-%COMP%] {\n  bottom: 120px;\n  left: 70px;\n  animation: _ngcontent-%COMP%_floatCard 6s infinite ease-in-out;\n}\n@keyframes _ngcontent-%COMP%_floatTruck {\n  0% {\n    transform: translate(-50%, -50%);\n  }\n  50% {\n    transform: translate(-50%, -54%);\n  }\n  100% {\n    transform: translate(-50%, -50%);\n  }\n}\n@keyframes _ngcontent-%COMP%_floatCard {\n  0% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-15px);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=home.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassMetadata(Home, [{
    type: Component2,
    args: [{ selector: "app-home", imports: [Navbar], template: '<section class="relative min-h-screen bg-slate-950 overflow-hidden flex items-center p-10">\n\n    <!-- Background -->\n    <div class="absolute w-125 h-125 bg-blue-600/30 blur-[120px] -left-40 -top-40 rounded-full"></div>\n    <div class="absolute w-100 h-100 bg-sky-500/30 blur-[120px] -right-28 -bottom-28 rounded-full"></div>\n\n    <app-navbar></app-navbar>\n\n    <div class="w-[92%] max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-24">\n\n        <!-- LEFT -->\n        <div class="z-10">\n\n            <span\n                class="inline-block px-5 py-3 rounded-full text-sky-400 bg-blue-600/10 border border-sky-400/30 text-sm">\n                \u{1F680} Smart Logistics Platform\n            </span>\n\n            <h1 class="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mt-6 text-white">\n                Logistics Made\n                <span class="text-sky-400">Smarter</span>\n            </h1>\n\n            <p class="mt-6 text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl">\n                Delivering intelligent transportation, AI-powered shipment tracking,\n                warehouse automation, and global supply chain solutions.\n            </p>\n\n            <div class="flex flex-wrap gap-4 mt-10">\n                <button class="px-7 py-4 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">\n                    Track Shipment \u2192\n                </button>\n\n                <button\n                    class="px-7 py-4 rounded-full border border-white/20 text-white hover:border-sky-400 hover:text-sky-400 transition">\n                    Get Quote\n                </button>\n            </div>\n\n            <div class="flex gap-12 mt-16">\n                <div>\n                    <h2 class="text-3xl text-sky-400 font-bold">12K+</h2>\n                    <p class="text-slate-400">Shipments</p>\n                </div>\n\n                <div>\n                    <h2 class="text-3xl text-sky-400 font-bold">85+</h2>\n                    <p class="text-slate-400">Countries</p>\n                </div>\n\n                <div>\n                    <h2 class="text-3xl text-sky-400 font-bold">99%</h2>\n                    <p class="text-slate-400">Success</p>\n                </div>\n            </div>\n\n        </div>\n\n        <!-- RIGHT -->\n        <div class="relative h-125 lg:h-175">\n\n            <div class="truck">\u{1F69A}</div>\n\n            <div class="card card1">\u{1F4E6} Delivered</div>\n            <div class="card card2">\u2708 Air Freight</div>\n            <div class="card card3">\u{1F6A2} Ocean Cargo</div>\n\n        </div>\n\n    </div>\n</section>', styles: ["/* src/app/pages/home/home.css */\n.truck {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 220px;\n  animation: floatTruck 5s ease-in-out infinite;\n}\n.card {\n  position: absolute;\n  background: rgba(15, 23, 42, 0.9);\n  color: white;\n  padding: 18px 24px;\n  border-radius: 20px;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  -webkit-backdrop-filter: blur(15px);\n  backdrop-filter: blur(15px);\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);\n}\n.card1 {\n  top: 100px;\n  left: 20px;\n  animation: floatCard 4s infinite ease-in-out;\n}\n.card2 {\n  top: 220px;\n  right: 0;\n  animation: floatCard 5s infinite ease-in-out;\n}\n.card3 {\n  bottom: 120px;\n  left: 70px;\n  animation: floatCard 6s infinite ease-in-out;\n}\n@keyframes floatTruck {\n  0% {\n    transform: translate(-50%, -50%);\n  }\n  50% {\n    transform: translate(-50%, -54%);\n  }\n  100% {\n    transform: translate(-50%, -50%);\n  }\n}\n@keyframes floatCard {\n  0% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-15px);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=home.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassDebugInfo(Home, { className: "Home", filePath: "src/app/pages/home/home.ts", lineNumber: 10 });
})();
(() => {
  const id = "src%2Fapp%2Fpages%2Fhome%2Fhome.ts%40Home";
  function Home_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i02.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i02.\u0275\u0275replaceMetadata(Home, m.default, [i02], [Navbar, Component2], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && Home_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && Home_HmrLoad(d.timestamp)));
})();

// src/app/pages/about/about.ts
import { Component as Component3 } from "/@fs/Users/akashkumar/Desktop/gaurav_bhaiya/logistics-v1/.angular/cache/22.0.5/logistics-v1/vite/deps/@angular_core.js?v=49e0e38e";
import * as i03 from "/@fs/Users/akashkumar/Desktop/gaurav_bhaiya/logistics-v1/.angular/cache/22.0.5/logistics-v1/vite/deps/@angular_core.js?v=49e0e38e";
var About = class _About {
  static \u0275fac = function About_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _About)();
  };
  static \u0275cmp = /* @__PURE__ */ i03.\u0275\u0275defineComponent({ type: _About, selectors: [["app-about"]], decls: 2, vars: 0, template: function About_Template(rf, ctx) {
    if (rf & 1) {
      i03.\u0275\u0275domElementStart(0, "p");
      i03.\u0275\u0275text(1, "about works!");
      i03.\u0275\u0275domElementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i03.\u0275setClassMetadata(About, [{
    type: Component3,
    args: [{ selector: "app-about", imports: [], template: "<p>about works!</p>\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i03.\u0275setClassDebugInfo(About, { className: "About", filePath: "src/app/pages/about/about.ts", lineNumber: 9 });
})();
(() => {
  const id = "src%2Fapp%2Fpages%2Fabout%2Fabout.ts%40About";
  function About_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i03.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i03.\u0275\u0275replaceMetadata(About, m.default, [i03], [Component3], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && About_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && About_HmrLoad(d.timestamp)));
})();

// src/app/pages/contact/contact.ts
import { Component as Component4 } from "/@fs/Users/akashkumar/Desktop/gaurav_bhaiya/logistics-v1/.angular/cache/22.0.5/logistics-v1/vite/deps/@angular_core.js?v=49e0e38e";
import * as i04 from "/@fs/Users/akashkumar/Desktop/gaurav_bhaiya/logistics-v1/.angular/cache/22.0.5/logistics-v1/vite/deps/@angular_core.js?v=49e0e38e";
var Contact = class _Contact {
  static \u0275fac = function Contact_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Contact)();
  };
  static \u0275cmp = /* @__PURE__ */ i04.\u0275\u0275defineComponent({ type: _Contact, selectors: [["app-contact"]], decls: 2, vars: 0, template: function Contact_Template(rf, ctx) {
    if (rf & 1) {
      i04.\u0275\u0275domElementStart(0, "p");
      i04.\u0275\u0275text(1, "contact works!");
      i04.\u0275\u0275domElementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i04.\u0275setClassMetadata(Contact, [{
    type: Component4,
    args: [{ selector: "app-contact", imports: [], template: "<p>contact works!</p>\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i04.\u0275setClassDebugInfo(Contact, { className: "Contact", filePath: "src/app/pages/contact/contact.ts", lineNumber: 9 });
})();
(() => {
  const id = "src%2Fapp%2Fpages%2Fcontact%2Fcontact.ts%40Contact";
  function Contact_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i04.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i04.\u0275\u0275replaceMetadata(Contact, m.default, [i04], [Component4], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && Contact_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && Contact_HmrLoad(d.timestamp)));
})();

// src/app/gallary/gallary.ts
import { Component as Component5 } from "/@fs/Users/akashkumar/Desktop/gaurav_bhaiya/logistics-v1/.angular/cache/22.0.5/logistics-v1/vite/deps/@angular_core.js?v=49e0e38e";
import * as i05 from "/@fs/Users/akashkumar/Desktop/gaurav_bhaiya/logistics-v1/.angular/cache/22.0.5/logistics-v1/vite/deps/@angular_core.js?v=49e0e38e";
var Gallary = class _Gallary {
  static \u0275fac = function Gallary_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Gallary)();
  };
  static \u0275cmp = /* @__PURE__ */ i05.\u0275\u0275defineComponent({ type: _Gallary, selectors: [["app-gallary"]], decls: 2, vars: 0, template: function Gallary_Template(rf, ctx) {
    if (rf & 1) {
      i05.\u0275\u0275domElementStart(0, "p");
      i05.\u0275\u0275text(1, "gallary works!");
      i05.\u0275\u0275domElementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i05.\u0275setClassMetadata(Gallary, [{
    type: Component5,
    args: [{ selector: "app-gallary", imports: [], template: "<p>gallary works!</p>\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i05.\u0275setClassDebugInfo(Gallary, { className: "Gallary", filePath: "src/app/gallary/gallary.ts", lineNumber: 9 });
})();
(() => {
  const id = "src%2Fapp%2Fgallary%2Fgallary.ts%40Gallary";
  function Gallary_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i05.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i05.\u0275\u0275replaceMetadata(Gallary, m.default, [i05], [Component5], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && Gallary_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && Gallary_HmrLoad(d.timestamp)));
})();

// src/app/app.routes.ts
var routes = [
  { path: "", component: Home },
  { path: "about", component: About },
  { path: "gallary", component: Gallary },
  { path: "contact", component: Contact }
];

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes)
  ]
};

// src/app/app.ts
import { Component as Component6, signal } from "/@fs/Users/akashkumar/Desktop/gaurav_bhaiya/logistics-v1/.angular/cache/22.0.5/logistics-v1/vite/deps/@angular_core.js?v=49e0e38e";
import { RouterOutlet } from "/@fs/Users/akashkumar/Desktop/gaurav_bhaiya/logistics-v1/.angular/cache/22.0.5/logistics-v1/vite/deps/@angular_router.js?v=49e0e38e";
import * as i06 from "/@fs/Users/akashkumar/Desktop/gaurav_bhaiya/logistics-v1/.angular/cache/22.0.5/logistics-v1/vite/deps/@angular_core.js?v=49e0e38e";
var App = class _App {
  title = signal(
    "logistics-v1",
    ...ngDevMode ? [{ debugName: "title" }] : (
      /* istanbul ignore next */
      []
    )
  );
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ i06.\u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 1, vars: 0, template: function App_Template(rf, ctx) {
    if (rf & 1) {
      i06.\u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterOutlet, Home], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i06.\u0275setClassMetadata(App, [{
    type: Component6,
    args: [{ selector: "app-root", imports: [RouterOutlet, Home], template: "<router-outlet></router-outlet>" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i06.\u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 11 });
})();
(() => {
  const id = "src%2Fapp%2Fapp.ts%40App";
  function App_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i06.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i06.\u0275\u0275replaceMetadata(App, m.default, [i06], [RouterOutlet, Home, Component6], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && App_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && App_HmrLoad(d.timestamp)));
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluLnRzIiwic3JjL2FwcC9hcHAuY29uZmlnLnRzIiwic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUudHMiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5odG1sIiwic3JjL2FwcC9sYXlvdXRzL25hdmJhci9uYXZiYXIudHMiLCJzcmMvYXBwL2xheW91dHMvbmF2YmFyL25hdmJhci5odG1sIiwic3JjL2FwcC9wYWdlcy9hYm91dC9hYm91dC50cyIsInNyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQuaHRtbCIsInNyYy9hcHAvcGFnZXMvY29udGFjdC9jb250YWN0LnRzIiwic3JjL2FwcC9wYWdlcy9jb250YWN0L2NvbnRhY3QuaHRtbCIsInNyYy9hcHAvZ2FsbGFyeS9nYWxsYXJ5LnRzIiwic3JjL2FwcC9nYWxsYXJ5L2dhbGxhcnkuaHRtbCIsInNyYy9hcHAvYXBwLnJvdXRlcy50cyIsInNyYy9hcHAvYXBwLnRzIiwic3JjL2FwcC9hcHAuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBib290c3RyYXBBcHBsaWNhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgYXBwQ29uZmlnIH0gZnJvbSAnLi9hcHAvYXBwLmNvbmZpZyc7XG5pbXBvcnQgeyBBcHAgfSBmcm9tICcuL2FwcC9hcHAnO1xuXG5ib290c3RyYXBBcHBsaWNhdGlvbihBcHAsIGFwcENvbmZpZylcbiAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4iLCJpbXBvcnQgeyBBcHBsaWNhdGlvbkNvbmZpZywgcHJvdmlkZUJyb3dzZXJHbG9iYWxFcnJvckxpc3RlbmVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcHJvdmlkZVJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IHJvdXRlcyB9IGZyb20gJy4vYXBwLnJvdXRlcyc7XG5cbmV4cG9ydCBjb25zdCBhcHBDb25maWc6IEFwcGxpY2F0aW9uQ29uZmlnID0ge1xuICBwcm92aWRlcnM6IFtcbiAgICBwcm92aWRlQnJvd3Nlckdsb2JhbEVycm9yTGlzdGVuZXJzKCksXG4gICAgcHJvdmlkZVJvdXRlcihyb3V0ZXMpXG4gIF1cbn07XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdmJhciB9IGZyb20gJy4uLy4uL2xheW91dHMvbmF2YmFyL25hdmJhcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1ob21lJyxcbiAgaW1wb3J0czogW05hdmJhcl0sXG4gIHRlbXBsYXRlVXJsOiAnLi9ob21lLmh0bWwnLFxuICBzdHlsZVVybDogJy4vaG9tZS5jc3MnLFxufSlcbmV4cG9ydCBjbGFzcyBIb21lIHsgfVxuIiwiPHNlY3Rpb24gY2xhc3M9XCJyZWxhdGl2ZSBtaW4taC1zY3JlZW4gYmctc2xhdGUtOTUwIG92ZXJmbG93LWhpZGRlbiBmbGV4IGl0ZW1zLWNlbnRlciBwLTEwXCI+XG5cbiAgICA8IS0tIEJhY2tncm91bmQgLS0+XG4gICAgPGRpdiBjbGFzcz1cImFic29sdXRlIHctMTI1IGgtMTI1IGJnLWJsdWUtNjAwLzMwIGJsdXItWzEyMHB4XSAtbGVmdC00MCAtdG9wLTQwIHJvdW5kZWQtZnVsbFwiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJhYnNvbHV0ZSB3LTEwMCBoLTEwMCBiZy1za3ktNTAwLzMwIGJsdXItWzEyMHB4XSAtcmlnaHQtMjggLWJvdHRvbS0yOCByb3VuZGVkLWZ1bGxcIj48L2Rpdj5cblxuICAgIDxhcHAtbmF2YmFyPjwvYXBwLW5hdmJhcj5cblxuICAgIDxkaXYgY2xhc3M9XCJ3LVs5MiVdIG1heC13LTd4bCBteC1hdXRvIGdyaWQgZ3JpZC1jb2xzLTEgbGc6Z3JpZC1jb2xzLTIgZ2FwLTE2IGl0ZW1zLWNlbnRlciBwdC0yNFwiPlxuXG4gICAgICAgIDwhLS0gTEVGVCAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cInotMTBcIj5cblxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBjbGFzcz1cImlubGluZS1ibG9jayBweC01IHB5LTMgcm91bmRlZC1mdWxsIHRleHQtc2t5LTQwMCBiZy1ibHVlLTYwMC8xMCBib3JkZXIgYm9yZGVyLXNreS00MDAvMzAgdGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgIPCfmoAgU21hcnQgTG9naXN0aWNzIFBsYXRmb3JtXG4gICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgIDxoMSBjbGFzcz1cInRleHQtNHhsIHNtOnRleHQtNXhsIGxnOnRleHQtN3hsIGZvbnQtYm9sZCBsZWFkaW5nLXRpZ2h0IG10LTYgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgIExvZ2lzdGljcyBNYWRlXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXNreS00MDBcIj5TbWFydGVyPC9zcGFuPlxuICAgICAgICAgICAgPC9oMT5cblxuICAgICAgICAgICAgPHAgY2xhc3M9XCJtdC02IHRleHQtc2xhdGUtNDAwIHRleHQtYmFzZSBzbTp0ZXh0LWxnIGxlYWRpbmctcmVsYXhlZCBtYXgtdy14bFwiPlxuICAgICAgICAgICAgICAgIERlbGl2ZXJpbmcgaW50ZWxsaWdlbnQgdHJhbnNwb3J0YXRpb24sIEFJLXBvd2VyZWQgc2hpcG1lbnQgdHJhY2tpbmcsXG4gICAgICAgICAgICAgICAgd2FyZWhvdXNlIGF1dG9tYXRpb24sIGFuZCBnbG9iYWwgc3VwcGx5IGNoYWluIHNvbHV0aW9ucy5cbiAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC13cmFwIGdhcC00IG10LTEwXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInB4LTcgcHktNCByb3VuZGVkLWZ1bGwgYmctYmx1ZS02MDAgdGV4dC13aGl0ZSBob3ZlcjpiZy1ibHVlLTcwMCB0cmFuc2l0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIFRyYWNrIFNoaXBtZW50IOKGklxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInB4LTcgcHktNCByb3VuZGVkLWZ1bGwgYm9yZGVyIGJvcmRlci13aGl0ZS8yMCB0ZXh0LXdoaXRlIGhvdmVyOmJvcmRlci1za3ktNDAwIGhvdmVyOnRleHQtc2t5LTQwMCB0cmFuc2l0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIEdldCBRdW90ZVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGdhcC0xMiBtdC0xNlwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInRleHQtM3hsIHRleHQtc2t5LTQwMCBmb250LWJvbGRcIj4xMksrPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LXNsYXRlLTQwMFwiPlNoaXBtZW50czwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInRleHQtM3hsIHRleHQtc2t5LTQwMCBmb250LWJvbGRcIj44NSs8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtc2xhdGUtNDAwXCI+Q291bnRyaWVzPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwidGV4dC0zeGwgdGV4dC1za3ktNDAwIGZvbnQtYm9sZFwiPjk5JTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1zbGF0ZS00MDBcIj5TdWNjZXNzPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPCEtLSBSSUdIVCAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJlbGF0aXZlIGgtMTI1IGxnOmgtMTc1XCI+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0cnVja1wiPvCfmpo8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgY2FyZDFcIj7wn5OmIERlbGl2ZXJlZDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgY2FyZDJcIj7inIggQWlyIEZyZWlnaHQ8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGNhcmQzXCI+8J+aoiBPY2VhbiBDYXJnbzwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG48L3NlY3Rpb24+IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJMaW5rLCBSb3V0ZXJMaW5rQWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLW5hdmJhcicsXG4gIGltcG9ydHM6IFtSb3V0ZXJMaW5rLCBSb3V0ZXJMaW5rQWN0aXZlXSxcbiAgdGVtcGxhdGVVcmw6ICcuL25hdmJhci5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL25hdmJhci5jc3MnLFxufSlcbmV4cG9ydCBjbGFzcyBOYXZiYXIgeyB9XG4iLCI8bmF2IGNsYXNzPVwiZml4ZWQgdG9wLTAgbGVmdC0wIHctZnVsbCB6LTEwMCBiYWNrZHJvcC1ibHVyLXhsIGJnLXNsYXRlLTk1MC81NSBib3JkZXItYiBib3JkZXItd2hpdGUvMTBcIj5cbiAgICA8ZGl2IGNsYXNzPVwibWF4LXctN3hsIG14LWF1dG8gaC0yMCBweC02IGZsZXggaXRlbXMtY2VudGVyXCI+XG5cbiAgICAgICAgPCEtLSBMZWZ0OiBMb2dvIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC0xIGZsZXgganVzdGlmeS1zdGFydFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCJTSVRFLUxPR08uLTEucG5nXCIgYWx0PVwiQ29tcGFueSBMb2dvXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImgtMTAgc206aC0xMiBzbTp3LTE0IG1kOmgtMTQgbWQ6dy0xNCBsZzpoLTE2IGxnOnctMTYgcm91bmRlZC1mdWxsIHctYXV0byBvYmplY3QtY292ZXJcIiAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8IS0tIENlbnRlcjogTmF2aWdhdGlvbiAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhpZGRlbiBsZzpmbGV4IGZsZXgtMSBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEwXCI+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSByb3V0ZXJMaW5rPVwiL1wiIGNsYXNzPVwicmVsYXRpdmUgdGV4dC13aGl0ZSBmb250LW1lZGl1bSBob3Zlcjp0ZXh0LXNreS00MDAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXG4gICAgICAgICAgICAgYWZ0ZXI6YWJzb2x1dGUgYWZ0ZXI6bGVmdC0wIGFmdGVyOi1ib3R0b20tMiBhZnRlcjpoLTAuNSBhZnRlcjp3LTBcbiAgICAgICAgICAgICBhZnRlcjpiZy1za3ktNDAwIGFmdGVyOnRyYW5zaXRpb24tYWxsIGhvdmVyOmFmdGVyOnctZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgSG9tZVxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIHJvdXRlckxpbms9XCIvYWJvdXRcIiBjbGFzcz1cInJlbGF0aXZlIHRleHQtd2hpdGUgZm9udC1tZWRpdW0gaG92ZXI6dGV4dC1za3ktNDAwIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFxuICAgICAgICAgICAgIGFmdGVyOmFic29sdXRlIGFmdGVyOmxlZnQtMCBhZnRlcjotYm90dG9tLTIgYWZ0ZXI6aC0wLjUgYWZ0ZXI6dy0wXG4gICAgICAgICAgICAgYWZ0ZXI6Ymctc2t5LTQwMCBhZnRlcjp0cmFuc2l0aW9uLWFsbCBob3ZlcjphZnRlcjp3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFib3V0IFVzXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSByb3V0ZXJMaW5rPVwiL2dhbGxhcnlcIiBjbGFzcz1cInJlbGF0aXZlIHRleHQtd2hpdGUgZm9udC1tZWRpdW0gaG92ZXI6dGV4dC1za3ktNDAwIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFxuICAgICAgICAgICAgIGFmdGVyOmFic29sdXRlIGFmdGVyOmxlZnQtMCBhZnRlcjotYm90dG9tLTIgYWZ0ZXI6aC0wLjUgYWZ0ZXI6dy0wXG4gICAgICAgICAgICAgYWZ0ZXI6Ymctc2t5LTQwMCBhZnRlcjp0cmFuc2l0aW9uLWFsbCBob3ZlcjphZnRlcjp3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEdhbGxhcnlcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIHJvdXRlckxpbms9XCIvY29udGFjdFwiIGNsYXNzPVwicmVsYXRpdmUgdGV4dC13aGl0ZSBmb250LW1lZGl1bSBob3Zlcjp0ZXh0LXNreS00MDAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXG4gICAgICAgICAgICAgYWZ0ZXI6YWJzb2x1dGUgYWZ0ZXI6bGVmdC0wIGFmdGVyOi1ib3R0b20tMiBhZnRlcjpoLTAuNSBhZnRlcjp3LTBcbiAgICAgICAgICAgICBhZnRlcjpiZy1za3ktNDAwIGFmdGVyOnRyYW5zaXRpb24tYWxsIGhvdmVyOmFmdGVyOnctZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ29udGFjdFxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwhLS0gUmlnaHQ6IFBsYWNlaG9sZGVyIC8gTW9iaWxlIE1lbnUgLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LTEgZmxleCBqdXN0aWZ5LWVuZFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImxnOmhpZGRlbiB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3M9XCJ3LTggaC04XCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjJcIiBkPVwiTTQgNmgxNk00IDEyaDE2TTQgMThoMTZcIiAvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG48L25hdj4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWFib3V0JyxcbiAgaW1wb3J0czogW10sXG4gIHRlbXBsYXRlVXJsOiAnLi9hYm91dC5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL2Fib3V0LmNzcycsXG59KVxuZXhwb3J0IGNsYXNzIEFib3V0IHt9XG4iLCI8cD5hYm91dCB3b3JrcyE8L3A+XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWNvbnRhY3QnLFxuICBpbXBvcnRzOiBbXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbnRhY3QuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi9jb250YWN0LmNzcycsXG59KVxuZXhwb3J0IGNsYXNzIENvbnRhY3Qge31cbiIsIjxwPmNvbnRhY3Qgd29ya3MhPC9wPlxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1nYWxsYXJ5JyxcbiAgaW1wb3J0czogW10sXG4gIHRlbXBsYXRlVXJsOiAnLi9nYWxsYXJ5Lmh0bWwnLFxuICBzdHlsZVVybDogJy4vZ2FsbGFyeS5jc3MnLFxufSlcbmV4cG9ydCBjbGFzcyBHYWxsYXJ5IHt9XG4iLCI8cD5nYWxsYXJ5IHdvcmtzITwvcD5cbiIsImltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIb21lIH0gZnJvbSAnLi9wYWdlcy9ob21lL2hvbWUnO1xuaW1wb3J0IHsgQWJvdXQgfSBmcm9tICcuL3BhZ2VzL2Fib3V0L2Fib3V0JztcbmltcG9ydCB7IENvbnRhY3QgfSBmcm9tICcuL3BhZ2VzL2NvbnRhY3QvY29udGFjdCc7XG5pbXBvcnQgeyBHYWxsYXJ5IH0gZnJvbSAnLi9nYWxsYXJ5L2dhbGxhcnknO1xuXG5leHBvcnQgY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiAnJywgY29tcG9uZW50OiBIb21lIH0sXG4gICAgeyBwYXRoOiAnYWJvdXQnLCBjb21wb25lbnQ6IEFib3V0IH0sXG4gICAgeyBwYXRoOiAnZ2FsbGFyeScsIGNvbXBvbmVudDogR2FsbGFyeSB9LFxuICAgIHsgcGF0aDogJ2NvbnRhY3QnLCBjb21wb25lbnQ6IENvbnRhY3QgfVxuXTtcbiIsImltcG9ydCB7IENvbXBvbmVudCwgc2lnbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJPdXRsZXQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSG9tZSB9IGZyb20gJy4vcGFnZXMvaG9tZS9ob21lJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXJvb3QnLFxuICBpbXBvcnRzOiBbUm91dGVyT3V0bGV0LCBIb21lXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL2FwcC5jc3MnXG59KVxuZXhwb3J0IGNsYXNzIEFwcCB7XG4gIHByb3RlY3RlZCByZWFkb25seSB0aXRsZSA9IHNpZ25hbCgnbG9naXN0aWNzLXYxJyk7XG59XG4iLCI8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+Il0sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyw0QkFBNEI7OztBQ0FyQyxTQUE0QiwwQ0FBMEM7QUFDdEUsU0FBUyxxQkFBcUI7OztBQ0Q5QixTQUFTLGFBQUFBLGtCQUFpQjs7O0FFQTFCLFNBQVMsaUJBQWlCO0FBQzFCLFNBQVMsWUFBWSx3QkFBd0I7O0FBUXZDLElBQU8sU0FBUCxNQUFPLFFBQU07O3FDQUFOLFNBQU07RUFBQTs0RUFBTixTQUFNLFdBQUEsQ0FBQSxDQUFBLFlBQUEsQ0FBQSxHQUFBLE9BQUEsSUFBQSxNQUFBLEdBQUEsUUFBQSxDQUFBLENBQUEsR0FBQSxTQUFBLFNBQUEsVUFBQSxVQUFBLFNBQUEsb0JBQUEsbUJBQUEsWUFBQSxpQkFBQSxHQUFBLENBQUEsR0FBQSxhQUFBLFdBQUEsUUFBQSxRQUFBLFFBQUEsY0FBQSxHQUFBLENBQUEsR0FBQSxVQUFBLFFBQUEsZUFBQSxHQUFBLENBQUEsT0FBQSxvQkFBQSxPQUFBLGdCQUFBLEdBQUEsUUFBQSxXQUFBLFdBQUEsV0FBQSxXQUFBLFdBQUEsV0FBQSxnQkFBQSxVQUFBLGNBQUEsR0FBQSxDQUFBLEdBQUEsVUFBQSxXQUFBLFVBQUEsZ0JBQUEsR0FBQSxDQUFBLEdBQUEsUUFBQSxnQkFBQSxRQUFBLEdBQUEsQ0FBQSxjQUFBLEtBQUEsR0FBQSxZQUFBLGNBQUEsZUFBQSxzQkFBQSxrQkFBQSxnQkFBQSxrQkFBQSxnQkFBQSxtQkFBQSxlQUFBLGFBQUEsb0JBQUEsd0JBQUEsb0JBQUEsR0FBQSxDQUFBLGNBQUEsVUFBQSxHQUFBLFlBQUEsY0FBQSxlQUFBLHNCQUFBLGtCQUFBLGdCQUFBLGtCQUFBLGdCQUFBLG1CQUFBLGVBQUEsYUFBQSxvQkFBQSx3QkFBQSxvQkFBQSxHQUFBLENBQUEsY0FBQSxZQUFBLEdBQUEsWUFBQSxjQUFBLGVBQUEsc0JBQUEsa0JBQUEsZ0JBQUEsa0JBQUEsZ0JBQUEsbUJBQUEsZUFBQSxhQUFBLG9CQUFBLHdCQUFBLG9CQUFBLEdBQUEsQ0FBQSxjQUFBLFlBQUEsR0FBQSxZQUFBLGNBQUEsZUFBQSxzQkFBQSxrQkFBQSxnQkFBQSxrQkFBQSxnQkFBQSxtQkFBQSxlQUFBLGFBQUEsb0JBQUEsd0JBQUEsb0JBQUEsR0FBQSxDQUFBLEdBQUEsVUFBQSxRQUFBLGFBQUEsR0FBQSxDQUFBLEdBQUEsYUFBQSxZQUFBLEdBQUEsQ0FBQSxTQUFBLDhCQUFBLFFBQUEsUUFBQSxXQUFBLGFBQUEsVUFBQSxnQkFBQSxHQUFBLE9BQUEsS0FBQSxHQUFBLENBQUEsa0JBQUEsU0FBQSxtQkFBQSxTQUFBLGdCQUFBLEtBQUEsS0FBQSx5QkFBQSxDQUFBLEdBQUEsVUFBQSxTQUFBLGdCQUFBLElBQUEsS0FBQTtBQUFBLFFBQUEsS0FBQSxHQUFBO0FDVG5CLE1BQUEsNEJBQUEsR0FBQSxPQUFBLENBQUEsRUFBdUcsR0FBQSxPQUFBLENBQUEsRUFDeEMsR0FBQSxPQUFBLENBQUE7QUFJbkQsTUFBQSx1QkFBQSxHQUFBLE9BQUEsQ0FBQTtBQUVKLE1BQUEsMEJBQUE7QUFHQSxNQUFBLDRCQUFBLEdBQUEsT0FBQSxDQUFBLEVBQWtELEdBQUEsTUFBQSxDQUFBLEVBQ1QsR0FBQSxJQUFBLEVBQzdCLEdBQUEsS0FBQSxDQUFBO0FBSUksTUFBQSxvQkFBQSxHQUFBLFFBQUE7QUFDSixNQUFBLDBCQUFBLEVBQUk7QUFFUixNQUFBLDRCQUFBLEdBQUEsSUFBQSxFQUFJLElBQUEsS0FBQSxDQUFBO0FBSUksTUFBQSxvQkFBQSxJQUFBLFlBQUE7QUFDSixNQUFBLDBCQUFBLEVBQUk7QUFHUixNQUFBLDRCQUFBLElBQUEsSUFBQSxFQUFJLElBQUEsS0FBQSxDQUFBO0FBSUksTUFBQSxvQkFBQSxJQUFBLFdBQUE7QUFDSixNQUFBLDBCQUFBLEVBQUk7QUFHUixNQUFBLDRCQUFBLElBQUEsSUFBQSxFQUFJLElBQUEsS0FBQSxDQUFBO0FBSUksTUFBQSxvQkFBQSxJQUFBLFdBQUE7QUFDSixNQUFBLDBCQUFBLEVBQUksRUFDSCxFQUNKO0FBSVQsTUFBQSw0QkFBQSxJQUFBLE9BQUEsRUFBQSxFQUFxQyxJQUFBLFVBQUEsRUFBQTs7QUFFN0IsTUFBQSw0QkFBQSxJQUFBLE9BQUEsRUFBQTtBQUVJLE1BQUEsdUJBQUEsSUFBQSxRQUFBLEVBQUE7QUFDSixNQUFBLDBCQUFBLEVBQU0sRUFDRCxFQUNQLEVBRUo7O29CRGxERSxZQUFZLGdCQUFnQixHQUFBLGVBQUEsRUFBQSxDQUFBOzs7K0VBSTNCLFFBQU0sQ0FBQTtVQU5sQjt1QkFDVyxjQUFZLFNBQ2IsQ0FBQyxZQUFZLGdCQUFnQixHQUFDLFVBQUEsMG5GQUFBLENBQUE7Ozs7Z0ZBSTVCLFFBQU0sRUFBQSxXQUFBLFVBQUEsVUFBQSxvQ0FBQSxZQUFBLEdBQUEsQ0FBQTtBQUFBLEdBQUE7Ozs7Ozs7OERBQU4sUUFBTSxFQUFBLFNBQUEsQ0FBQSxFQUFBLEdBQUEsQ0FBQSxZQUFBLGtCQUFBLFNBQUEsR0FBQSxhQUFBLEVBQUEsQ0FBQTtFQUFBO0FBQUEsR0FBQSxPQUFBLGNBQUEsZUFBQSxjQUFBLGVBQUEsS0FBQSxJQUFBLENBQUE7QUFBQSxHQUFBLE9BQUEsY0FBQSxlQUFBLGVBQUEsWUFBQSxPQUFBLFlBQUEsSUFBQSxHQUFBLDRCQUFBLE9BQUEsRUFBQSxPQUFBLE1BQUEsZUFBQSxFQUFBLFNBQUEsQ0FBQTtBQUFBLEdBQUE7Ozs7QUZBYixJQUFPLE9BQVAsTUFBTyxNQUFJOztxQ0FBSixPQUFJO0VBQUE7NkVBQUosT0FBSSxXQUFBLENBQUEsQ0FBQSxVQUFBLENBQUEsR0FBQSxPQUFBLElBQUEsTUFBQSxHQUFBLFFBQUEsQ0FBQSxDQUFBLEdBQUEsWUFBQSxnQkFBQSxnQkFBQSxtQkFBQSxRQUFBLGdCQUFBLE1BQUEsR0FBQSxDQUFBLEdBQUEsWUFBQSxTQUFBLFNBQUEsa0JBQUEsZ0JBQUEsWUFBQSxXQUFBLGNBQUEsR0FBQSxDQUFBLEdBQUEsWUFBQSxTQUFBLFNBQUEsaUJBQUEsZ0JBQUEsYUFBQSxjQUFBLGNBQUEsR0FBQSxDQUFBLEdBQUEsV0FBQSxhQUFBLFdBQUEsUUFBQSxlQUFBLGtCQUFBLFVBQUEsZ0JBQUEsT0FBQSxHQUFBLENBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxHQUFBLGdCQUFBLFFBQUEsUUFBQSxnQkFBQSxnQkFBQSxrQkFBQSxVQUFBLHFCQUFBLFNBQUEsR0FBQSxDQUFBLEdBQUEsWUFBQSxlQUFBLGVBQUEsYUFBQSxpQkFBQSxRQUFBLFlBQUEsR0FBQSxDQUFBLEdBQUEsY0FBQSxHQUFBLENBQUEsR0FBQSxRQUFBLGtCQUFBLGFBQUEsY0FBQSxtQkFBQSxVQUFBLEdBQUEsQ0FBQSxHQUFBLFFBQUEsYUFBQSxTQUFBLE9BQUEsR0FBQSxDQUFBLEdBQUEsUUFBQSxRQUFBLGdCQUFBLGVBQUEsY0FBQSxxQkFBQSxZQUFBLEdBQUEsQ0FBQSxHQUFBLFFBQUEsUUFBQSxnQkFBQSxVQUFBLG1CQUFBLGNBQUEsd0JBQUEsc0JBQUEsWUFBQSxHQUFBLENBQUEsR0FBQSxRQUFBLFVBQUEsT0FBQSxHQUFBLENBQUEsR0FBQSxZQUFBLGdCQUFBLFdBQUEsR0FBQSxDQUFBLEdBQUEsZ0JBQUEsR0FBQSxDQUFBLEdBQUEsWUFBQSxTQUFBLFVBQUEsR0FBQSxDQUFBLEdBQUEsT0FBQSxHQUFBLENBQUEsR0FBQSxRQUFBLE9BQUEsR0FBQSxDQUFBLEdBQUEsUUFBQSxPQUFBLEdBQUEsQ0FBQSxHQUFBLFFBQUEsT0FBQSxDQUFBLEdBQUEsVUFBQSxTQUFBLGNBQUEsSUFBQSxLQUFBO0FBQUEsUUFBQSxLQUFBLEdBQUE7QUNUakIsTUFBQSw2QkFBQSxHQUFBLFdBQUEsQ0FBQTtBQUdJLE1BQUEsd0JBQUEsR0FBQSxPQUFBLENBQUEsRUFBa0csR0FBQSxPQUFBLENBQUEsRUFDRyxHQUFBLFlBQUE7QUFJckcsTUFBQSw2QkFBQSxHQUFBLE9BQUEsQ0FBQSxFQUFpRyxHQUFBLE9BQUEsQ0FBQSxFQUczRSxHQUFBLFFBQUEsQ0FBQTtBQUlWLE1BQUEscUJBQUEsR0FBQSxzQ0FBQTtBQUNKLE1BQUEsMkJBQUE7QUFFQSxNQUFBLDZCQUFBLEdBQUEsTUFBQSxDQUFBO0FBQ0ksTUFBQSxxQkFBQSxHQUFBLGtCQUFBO0FBQ0EsTUFBQSw2QkFBQSxJQUFBLFFBQUEsQ0FBQTtBQUEyQixNQUFBLHFCQUFBLElBQUEsU0FBQTtBQUFPLE1BQUEsMkJBQUEsRUFBTztBQUc3QyxNQUFBLDZCQUFBLElBQUEsS0FBQSxDQUFBO0FBQ0ksTUFBQSxxQkFBQSxJQUFBLGlJQUFBO0FBRUosTUFBQSwyQkFBQTtBQUVBLE1BQUEsNkJBQUEsSUFBQSxPQUFBLENBQUEsRUFBd0MsSUFBQSxVQUFBLEVBQUE7QUFFaEMsTUFBQSxxQkFBQSxJQUFBLHlCQUFBO0FBQ0osTUFBQSwyQkFBQTtBQUVBLE1BQUEsNkJBQUEsSUFBQSxVQUFBLEVBQUE7QUFFSSxNQUFBLHFCQUFBLElBQUEsYUFBQTtBQUNKLE1BQUEsMkJBQUEsRUFBUztBQUdiLE1BQUEsNkJBQUEsSUFBQSxPQUFBLEVBQUEsRUFBK0IsSUFBQSxLQUFBLEVBQ3RCLElBQUEsTUFBQSxFQUFBO0FBQzJDLE1BQUEscUJBQUEsSUFBQSxNQUFBO0FBQUksTUFBQSwyQkFBQTtBQUNoRCxNQUFBLDZCQUFBLElBQUEsS0FBQSxFQUFBO0FBQTBCLE1BQUEscUJBQUEsSUFBQSxXQUFBO0FBQVMsTUFBQSwyQkFBQSxFQUFJO0FBRzNDLE1BQUEsNkJBQUEsSUFBQSxLQUFBLEVBQUssSUFBQSxNQUFBLEVBQUE7QUFDMkMsTUFBQSxxQkFBQSxJQUFBLEtBQUE7QUFBRyxNQUFBLDJCQUFBO0FBQy9DLE1BQUEsNkJBQUEsSUFBQSxLQUFBLEVBQUE7QUFBMEIsTUFBQSxxQkFBQSxJQUFBLFdBQUE7QUFBUyxNQUFBLDJCQUFBLEVBQUk7QUFHM0MsTUFBQSw2QkFBQSxJQUFBLEtBQUEsRUFBSyxJQUFBLE1BQUEsRUFBQTtBQUMyQyxNQUFBLHFCQUFBLElBQUEsS0FBQTtBQUFHLE1BQUEsMkJBQUE7QUFDL0MsTUFBQSw2QkFBQSxJQUFBLEtBQUEsRUFBQTtBQUEwQixNQUFBLHFCQUFBLElBQUEsU0FBQTtBQUFPLE1BQUEsMkJBQUEsRUFBSSxFQUNuQyxFQUNKO0FBS1YsTUFBQSw2QkFBQSxJQUFBLE9BQUEsRUFBQSxFQUFxQyxJQUFBLE9BQUEsRUFBQTtBQUVkLE1BQUEscUJBQUEsSUFBQSxXQUFBO0FBQUUsTUFBQSwyQkFBQTtBQUVyQixNQUFBLDZCQUFBLElBQUEsT0FBQSxFQUFBO0FBQXdCLE1BQUEscUJBQUEsSUFBQSxxQkFBQTtBQUFZLE1BQUEsMkJBQUE7QUFDcEMsTUFBQSw2QkFBQSxJQUFBLE9BQUEsRUFBQTtBQUF3QixNQUFBLHFCQUFBLElBQUEsb0JBQUE7QUFBYSxNQUFBLDJCQUFBO0FBQ3JDLE1BQUEsNkJBQUEsSUFBQSxPQUFBLEVBQUE7QUFBd0IsTUFBQSxxQkFBQSxJQUFBLHVCQUFBO0FBQWMsTUFBQSwyQkFBQSxFQUFNLEVBRTFDLEVBRUo7O29CRGhFRSxNQUFNLEdBQUEsUUFBQSxDQUFBLHEwQ0FBQSxFQUFBLENBQUE7OztnRkFJTCxNQUFJLENBQUE7VUFOaEJDO3VCQUNXLFlBQVUsU0FDWCxDQUFDLE1BQU0sR0FBQyxVQUFBLHNvRkFBQSxRQUFBLENBQUEsNnBDQUFBLEVBQUEsQ0FBQTs7OztpRkFJTixNQUFJLEVBQUEsV0FBQSxRQUFBLFVBQUEsOEJBQUEsWUFBQSxHQUFBLENBQUE7QUFBQSxHQUFBOzs7Ozs7OytEQUFKLE1BQUksRUFBQSxTQUFBLENBQUFDLEdBQUEsR0FBQSxDQUFBLFFBQUFELFVBQUEsR0FBQSxhQUFBLEVBQUEsQ0FBQTtFQUFBO0FBQUEsR0FBQSxPQUFBLGNBQUEsZUFBQSxjQUFBLGFBQUEsS0FBQSxJQUFBLENBQUE7QUFBQSxHQUFBLE9BQUEsY0FBQSxlQUFBLGVBQUEsWUFBQSxPQUFBLFlBQUEsSUFBQSxHQUFBLDRCQUFBLE9BQUEsRUFBQSxPQUFBLE1BQUEsYUFBQSxFQUFBLFNBQUEsQ0FBQTtBQUFBLEdBQUE7OztBSVRqQixTQUFTLGFBQUFFLGtCQUFpQjs7QUFRcEIsSUFBTyxRQUFQLE1BQU8sT0FBSzs7cUNBQUwsUUFBSztFQUFBOzZFQUFMLFFBQUssV0FBQSxDQUFBLENBQUEsV0FBQSxDQUFBLEdBQUEsT0FBQSxHQUFBLE1BQUEsR0FBQSxVQUFBLFNBQUEsZUFBQSxJQUFBLEtBQUE7QUFBQSxRQUFBLEtBQUEsR0FBQTtBQ1JsQixNQUFBLGdDQUFBLEdBQUEsR0FBQTtBQUFHLE1BQUEscUJBQUEsR0FBQSxjQUFBO0FBQVksTUFBQSw4QkFBQTs7Ozs7Z0ZEUUYsT0FBSyxDQUFBO1VBTmpCQTt1QkFDVyxhQUFXLFNBQ1osQ0FBQSxHQUFFLFVBQUEsd0JBQUEsQ0FBQTs7OztpRkFJQSxPQUFLLEVBQUEsV0FBQSxTQUFBLFVBQUEsZ0NBQUEsWUFBQSxFQUFBLENBQUE7QUFBQSxHQUFBOzs7Ozs7OytEQUFMLE9BQUssRUFBQSxTQUFBLENBQUFDLEdBQUEsR0FBQSxDQUFBRCxVQUFBLEdBQUEsYUFBQSxFQUFBLENBQUE7RUFBQTtBQUFBLEdBQUEsT0FBQSxjQUFBLGVBQUEsY0FBQSxjQUFBLEtBQUEsSUFBQSxDQUFBO0FBQUEsR0FBQSxPQUFBLGNBQUEsZUFBQSxlQUFBLFlBQUEsT0FBQSxZQUFBLElBQUEsR0FBQSw0QkFBQSxPQUFBLEVBQUEsT0FBQSxNQUFBLGNBQUEsRUFBQSxTQUFBLENBQUE7QUFBQSxHQUFBOzs7QUVSbEIsU0FBUyxhQUFBRSxrQkFBaUI7O0FBUXBCLElBQU8sVUFBUCxNQUFPLFNBQU87O3FDQUFQLFVBQU87RUFBQTs2RUFBUCxVQUFPLFdBQUEsQ0FBQSxDQUFBLGFBQUEsQ0FBQSxHQUFBLE9BQUEsR0FBQSxNQUFBLEdBQUEsVUFBQSxTQUFBLGlCQUFBLElBQUEsS0FBQTtBQUFBLFFBQUEsS0FBQSxHQUFBO0FDUnBCLE1BQUEsZ0NBQUEsR0FBQSxHQUFBO0FBQUcsTUFBQSxxQkFBQSxHQUFBLGdCQUFBO0FBQWMsTUFBQSw4QkFBQTs7Ozs7Z0ZEUUosU0FBTyxDQUFBO1VBTm5CQTt1QkFDVyxlQUFhLFNBQ2QsQ0FBQSxHQUFFLFVBQUEsMEJBQUEsQ0FBQTs7OztpRkFJQSxTQUFPLEVBQUEsV0FBQSxXQUFBLFVBQUEsb0NBQUEsWUFBQSxFQUFBLENBQUE7QUFBQSxHQUFBOzs7Ozs7OytEQUFQLFNBQU8sRUFBQSxTQUFBLENBQUFDLEdBQUEsR0FBQSxDQUFBRCxVQUFBLEdBQUEsYUFBQSxFQUFBLENBQUE7RUFBQTtBQUFBLEdBQUEsT0FBQSxjQUFBLGVBQUEsY0FBQSxnQkFBQSxLQUFBLElBQUEsQ0FBQTtBQUFBLEdBQUEsT0FBQSxjQUFBLGVBQUEsZUFBQSxZQUFBLE9BQUEsWUFBQSxJQUFBLEdBQUEsNEJBQUEsT0FBQSxFQUFBLE9BQUEsTUFBQSxnQkFBQSxFQUFBLFNBQUEsQ0FBQTtBQUFBLEdBQUE7OztBRVJwQixTQUFTLGFBQUFFLGtCQUFpQjs7QUFRcEIsSUFBTyxVQUFQLE1BQU8sU0FBTzs7cUNBQVAsVUFBTztFQUFBOzZFQUFQLFVBQU8sV0FBQSxDQUFBLENBQUEsYUFBQSxDQUFBLEdBQUEsT0FBQSxHQUFBLE1BQUEsR0FBQSxVQUFBLFNBQUEsaUJBQUEsSUFBQSxLQUFBO0FBQUEsUUFBQSxLQUFBLEdBQUE7QUNScEIsTUFBQSxnQ0FBQSxHQUFBLEdBQUE7QUFBRyxNQUFBLHFCQUFBLEdBQUEsZ0JBQUE7QUFBYyxNQUFBLDhCQUFBOzs7OztnRkRRSixTQUFPLENBQUE7VUFObkJBO3VCQUNXLGVBQWEsU0FDZCxDQUFBLEdBQUUsVUFBQSwwQkFBQSxDQUFBOzs7O2lGQUlBLFNBQU8sRUFBQSxXQUFBLFdBQUEsVUFBQSw4QkFBQSxZQUFBLEVBQUEsQ0FBQTtBQUFBLEdBQUE7Ozs7Ozs7K0RBQVAsU0FBTyxFQUFBLFNBQUEsQ0FBQUMsR0FBQSxHQUFBLENBQUFELFVBQUEsR0FBQSxhQUFBLEVBQUEsQ0FBQTtFQUFBO0FBQUEsR0FBQSxPQUFBLGNBQUEsZUFBQSxjQUFBLGdCQUFBLEtBQUEsSUFBQSxDQUFBO0FBQUEsR0FBQSxPQUFBLGNBQUEsZUFBQSxlQUFBLFlBQUEsT0FBQSxZQUFBLElBQUEsR0FBQSw0QkFBQSxPQUFBLEVBQUEsT0FBQSxNQUFBLGdCQUFBLEVBQUEsU0FBQSxDQUFBO0FBQUEsR0FBQTs7O0FFRmIsSUFBTSxTQUFpQjtFQUMxQixFQUFFLE1BQU0sSUFBSSxXQUFXLEtBQUk7RUFDM0IsRUFBRSxNQUFNLFNBQVMsV0FBVyxNQUFLO0VBQ2pDLEVBQUUsTUFBTSxXQUFXLFdBQVcsUUFBTztFQUNyQyxFQUFFLE1BQU0sV0FBVyxXQUFXLFFBQU87Ozs7QVhMbEMsSUFBTSxZQUErQjtFQUMxQyxXQUFXO0lBQ1QsbUNBQWtDO0lBQ2xDLGNBQWMsTUFBTTs7Ozs7QVlSeEIsU0FBUyxhQUFBRSxZQUFXLGNBQWM7QUFDbEMsU0FBUyxvQkFBb0I7O0FBU3ZCLElBQU8sTUFBUCxNQUFPLEtBQUc7RUFDSyxRQUFRO0lBQU87Ozs7Ozs7cUNBRHZCLE1BQUc7RUFBQTs2RUFBSCxNQUFHLFdBQUEsQ0FBQSxDQUFBLFVBQUEsQ0FBQSxHQUFBLE9BQUEsR0FBQSxNQUFBLEdBQUEsVUFBQSxTQUFBLGFBQUEsSUFBQSxLQUFBO0FBQUEsUUFBQSxLQUFBLEdBQUE7QUNWaEIsTUFBQSx3QkFBQSxHQUFBLGVBQUE7O29CRE1ZLGNBQWMsSUFBSSxHQUFBLGVBQUEsRUFBQSxDQUFBOzs7Z0ZBSWpCLEtBQUcsQ0FBQTtVQU5mQzt1QkFDVyxZQUFVLFNBQ1gsQ0FBQyxjQUFjLElBQUksR0FBQyxVQUFBLGtDQUFBLENBQUE7Ozs7aUZBSWxCLEtBQUcsRUFBQSxXQUFBLE9BQUEsVUFBQSxrQkFBQSxZQUFBLEdBQUEsQ0FBQTtBQUFBLEdBQUE7Ozs7Ozs7K0RBQUgsS0FBRyxFQUFBLFNBQUEsQ0FBQUMsR0FBQSxHQUFBLENBQUEsY0FBQSxNQUFBRCxVQUFBLEdBQUEsYUFBQSxFQUFBLENBQUE7RUFBQTtBQUFBLEdBQUEsT0FBQSxjQUFBLGVBQUEsY0FBQSxZQUFBLEtBQUEsSUFBQSxDQUFBO0FBQUEsR0FBQSxPQUFBLGNBQUEsZUFBQSxlQUFBLFlBQUEsT0FBQSxZQUFBLElBQUEsR0FBQSw0QkFBQSxPQUFBLEVBQUEsT0FBQSxNQUFBLFlBQUEsRUFBQSxTQUFBLENBQUE7QUFBQSxHQUFBOzs7QWJOaEIscUJBQXFCLEtBQUssU0FBUyxFQUNoQyxNQUFNLENBQUMsUUFBUSxRQUFRLE1BQU0sR0FBRyxDQUFDOyIsIm5hbWVzIjpbIkNvbXBvbmVudCIsIkNvbXBvbmVudCIsImkwIiwiQ29tcG9uZW50IiwiaTAiLCJDb21wb25lbnQiLCJpMCIsIkNvbXBvbmVudCIsImkwIiwiQ29tcG9uZW50IiwiQ29tcG9uZW50IiwiaTAiXX0=