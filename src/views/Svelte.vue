<template>
  <div class="svelte">
    <h1>{{ this.repo.full_name }}</h1>
    <h3>{{ this.repo.description }}</h3>
    <div>Watchers: {{ this.repo.watchers }}</div>
    <div>Stars: {{ this.repo.subscribers_count }}</div>
    <div>Forks: {{ this.repo.forks }}</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      repo: {},
      // watchers: "",
      // stars: "",
      // forks: "",
    };
  },
  created: function () {
    axios.get("https://api.github.com/repos/sveltejs/svelte").then((response) => {
      this.repo = response.data;
    });
  },
};
</script>
