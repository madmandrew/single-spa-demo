import { registerApplication, start, LifeCycles } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import<LifeCycles>(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

const newPagesWhiteList = new Set(["/react-test"]);

registerApplication({
  name: "@madmandrews-org/single-spa-demo",
  app: () => System.import<LifeCycles>(
      "http://localhost:8080/madmandrews-org-single-spa-demo.js"
    ),
  // activeWhen: (location) => newPagesWhiteList.has(location.pathname)
  activeWhen: ['/']
});

registerApplication({
  name: "@madmandrews-org/vue-app",
  app: () => System.import<LifeCycles>(
    "http://localhost:8082/js/app.js"
  ),
  activeWhen: (location )=> !newPagesWhiteList.has(location.pathname)
});

start({
  urlRerouteOnly: true,
});
