import Vue from "vue";
import VueMaterial from "vue-material";

Vue.use(VueMaterial);

const app = new Vue({
  el: "#app",
  delimiters: ["((", "))"]
});
