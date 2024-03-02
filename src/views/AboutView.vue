<template>
  <div>
    <HeaderBar />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderBar from "@/components/common/HeaderBar.vue";
import userData from "@/assets/data/user.json";

export default {
  name: "AboutView",
  data() {
    return {
      users: userData,
      welcomeMessage: this.$t("message.hello"),
    };
  },
  components: { HeaderBar },
};
</script>
