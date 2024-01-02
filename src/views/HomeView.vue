<template>
  <div class="home">
    <HelloWorld msg="DM Giỏi" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import userData from "@/assets/data/user.json";

export default {
  name: "HomeView",
  data() {
    return {
      users: userData,
    };
  },
  components: {
    HelloWorld,
  },
};
</script>
