// Composables
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: "",
    redirect: "/artikels",
  },
  {
    path: "/artikels",
    component: () =>
      import(/* webpackChunkName: "articles" */ "@/views/Articles.vue"),
  },
  {
    path: "/artikels/:id",
    component: () =>
      import(/* webpackChunkName: "articles" */ "@/views/articles/Article.vue"),
  },
  {
    path: "/welcome",
    component: () =>
      import(/* webpackChunkName: "welcome" */ "@/views/Welcome.vue"),
  },
  {
    path: "/club-info",
    children: [
      {
        path: "",
        redirect: "/club-info/bestuur",
      },
      {
        path: "bestuur",
        component: () =>
          import(
            /* webpackChunkName: "clubInfo" */ "@/views/club-info/Management.vue"
          ),
      },
      {
        path: "feestbestuur",
        component: () =>
          import(
            /* webpackChunkName: "clubInfo" */ "@/views/club-info/PartyManagement.vue"
          ),
      },
      {
        path: "vertrouwenspersoon",
        component: () =>
          import(
            /* webpackChunkName: "clubInfo" */ "@/views/club-info/Confidant.vue"
          ),
      },
      {
        path: "officielen",
        component: () =>
          import(
            /* webpackChunkName: "clubInfo" */ "@/views/club-info/Officials.vue"
          ),
      },
      {
        path: "trainers",
        children: [
          {
            path: "",
            redirect: "/club-info/trainers/jeugd",
          },
          {
            path: "jeugd",
            component: () =>
              import(
                /* webpackChunkName: "clubInfo" */ "@/views/club-info/trainers/Youth.vue"
              ),
          },
          {
            path: "vanaf-cadet",
            component: () =>
              import(
                /* webpackChunkName: "clubInfo" */ "@/views/club-info/trainers/Cadets.vue"
              ),
          },
          {
            path: "g-team",
            component: () =>
              import(
                /* webpackChunkName: "clubInfo" */ "@/views/club-info/trainers/GTeam.vue"
              ),
          },
          {
            path: "joggers",
            component: () =>
              import(
                /* webpackChunkName: "clubInfo" */ "@/views/club-info/trainers/Joggers.vue"
              ),
          },
        ],
      },
    ],
  },
  {
    path: "/wedstrijden",
    children: [
      {
        path: "",
        redirect: "/wedstrijden/onze-organisaties",
      },
      {
        path: "onze-organisaties",
        component: () =>
          import(
            /* webpackChunkName: "contests" */ "@/views/contests/Contests.vue"
          ),
      },
      {
        path: "uitslagen",
        component: () =>
          import(
            /* webpackChunkName: "contests" */ "@/views/contests/Results.vue"
          ),
      },
      {
        path: "inschrijvingen",
        component: () =>
          import(
            /* webpackChunkName: "contests" */ "@/views/contests/Registrations.vue"
          ),
      },
    ],
  },
  {
    path: "/atleten",
    children: [
      {
        path: "",
        redirect: "/atleten/jeugd",
      },
      {
        path: "jeugd",
        component: () =>
          import(
            /* webpackChunkName: "athletes" */ "@/views/athletes/Youth.vue"
          ),
      },
      {
        path: "vanaf-cadet",
        component: () =>
          import(
            /* webpackChunkName: "athletes" */ "@/views/athletes/Cadets.vue"
          ),
      },
      {
        path: "g-team",
        component: () =>
          import(
            /* webpackChunkName: "athletes" */ "@/views/athletes/GTeam.vue"
          ),
      },
      {
        path: "records",
        component: () =>
          import(
            /* webpackChunkName: "athletes" */ "@/views/athletes/Records.vue"
          ),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
