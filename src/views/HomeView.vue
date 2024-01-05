<template>
  <div class="home">
    {{ $t("message.hello", { msg: "hello" }) }}
    <HelloWorld :msg="welcomeMessage" />
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
      welcomeMessage: this.$t("message.hello"),
    };
  },
  components: {
    HelloWorld,
  },
};
</script>
