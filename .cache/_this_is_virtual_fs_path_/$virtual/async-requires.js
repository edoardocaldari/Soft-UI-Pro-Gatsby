// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./../../dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-coming-soon-js": () => import("./../../../src/pages/coming-soon.js" /* webpackChunkName: "component---src-pages-coming-soon-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-profile-js": () => import("./../../../src/pages/profile.js" /* webpackChunkName: "component---src-pages-profile-js" */)
}

