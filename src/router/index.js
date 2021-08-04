import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Vuerepo from "../views/Vue.vue";
import Angular from "../views/Angular.vue";
import Ember from "../views/Ember.vue";
import Svelte from "../views/Svelte.vue";
import React from "../views/React.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/vue",
    name: "Vue",
    component: Vuerepo,
  },
  {
    path: "/angular",
    name: "Angular",
    component: Angular,
  },
  {
    path: "/ember",
    name: "Ember",
    component: Ember,
  },
  {
    path: "/svelte",
    name: "Svelte",
    component: Svelte,
  },
  {
    path: "/react",
    name: "React",
    component: React,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
