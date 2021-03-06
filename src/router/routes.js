import home from "../pages/home.vue";
import about from "../pages/about.vue";
import rating from "../pages/rating.vue";
import investor from "../pages/investor.vue";
import contact from "../pages/contact.vue";
import terms from "../pages/terms.vue";
import notice from "../pages/notice.vue";
import PageNotFound from "../pages/404.vue";

const routes = [
  {
    path: "*",
    component: PageNotFound
  },
  {
    path: "/",
    name: "home",
    component: home
  },
  {
    path: "/about-us",
    name: "about",
    component: about
  },
  {
    path: "/rate-your-project",
    name: "rating",
    component: rating
  },
  {
    path: "/investors-criteria",
    name: "investor",
    component: investor
  },
  {
    path: "/contact-us",
    name: "contact",
    component: contact
  },
  {
    path: "/legal-notice",
    name: "notice",
    component: notice
  },
  {
    path: "/terms-of-use",
    name: "terms",
    component: terms
  }
];

export default routes;
