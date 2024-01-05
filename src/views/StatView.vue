<template>
  <div style="width: 100%">
    <div class="sc-5584a246-0 eAquzM">
      <div class="container">
        <div class="card-info">
          <div class="img-holder pc">
            <img
              class="avatar-img-pc"
              src="https://raw.githubusercontent.com/paKymoK/Memories/main/assets/icons/21.png"
              alt="avatar-img"
            />
          </div>
          <div class="profile-contents">
            <div class="avatar">
              <div>
                <div class="profile">
                  <div class="name">Estelle</div>
                  <div class="server">America</div>
                </div>
              </div>
            </div>
            <div class="section-update">
              <div class="button-update">Update</div>
              <div class="button-custom">
                <div class="inner"><span>DAK.GG Card</span></div>
              </div>
            </div>
            <div class="last-updated">Last Updated: 1d ago</div>
          </div>
        </div>
      </div>
    </div>
    <highcharts :options="chartOptions" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const chartOptions = ref({
  credits: { enabled: false },
  chart: {
    polar: true,
    type: "line",
  },
  accessibility: {
    description: "TADA",
  },
  title: {
    text: "Power",
    x: 0,
  },

  pane: {
    size: "80%",
  },

  xAxis: {
    categories: [
      "Sales",
      "Marketing",
      "Development",
      "Customer Support",
      "Information Technology",
      "Administration",
    ],
    tickmarkPlacement: "on",
    lineWidth: 0,
  },

  yAxis: {
    gridLineInterpolation: "polygon",
    lineWidth: 0,
    min: 0,
  },

  tooltip: {
    shared: true,
    pointFormat:
      '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>',
  },

  legend: {
    align: "right",
    verticalAlign: "middle",
    layout: "vertical",
  },

  series: [
    {
      name: "Allocated Budget",
      data: [43000, 19000, 60000, 35000, 17000, 10000],
      pointPlacement: "on",
    },
    {
      name: "Actual Spending",
      data: [50000, 39000, 42000, 31000, 26000, 14000],
      pointPlacement: "on",
    },
  ],

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500,
        },
        chartOptions: {
          legend: {
            align: "center",
            verticalAlign: "bottom",
            layout: "horizontal",
          },
          pane: {
            size: "70%",
          },
        },
      },
    ],
  },
});
</script>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import userData from "@/assets/data/user.json";

export default {
  name: "HomeView",
  data() {
    return {
      users: userData,
    };
  },
  // components: {
  //   HelloWorld,
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 1080px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  padding-top: 10px;
}
.card-info {
  row-gap: 12px;
  display: flex;
  flex-direction: row;
  column-gap: 16px;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px;
}
.img-holder.pc {
  border: 4px solid rgba(255, 255, 255, 0.5);
  width: 80px;
  height: 80px;
  border-radius: 80px;
  overflow: hidden;
  background: linear-gradient(rgb(144, 105, 72) 0%, rgb(191, 133, 81) 100%);
  display: flex;
}
.avatar-img-pc {
  vertical-align: middle;
  max-width: 100%;
  height: auto;
  display: flex;
}
.profile-contents {
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  -webkit-box-pack: center;
  justify-content: center;
  align-items: flex-start;
}
.avatar {
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
}
.profile {
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  column-gap: 6px;
}
.name {
  font-weight: 600;
  /* color: white; */
  font-size: 24px;
  line-height: 24px;
}
.server {
  background-color: rgba(0, 0, 0, 0.4);
  /* color: white; */
  font-size: 12px;
  line-height: 12px;
  font-weight: 600;
  padding: 3px 6px;
  border-radius: 2px;
}
.section-update {
  display: flex;
  column-gap: 6px;
}
.button-update {
  cursor: pointer;
  font-weight: 600;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  height: 40px;
  text-align: center;
  background-color: rgb(17, 178, 136);
  border-radius: 4px;
  padding: 0px 16px;
  font-size: 14px;
  line-height: 14px;
  color: white;
  -webkit-box-flex: 0;
  flex-grow: 0;
  flex-basis: auto;
}
.button-custom {
  cursor: pointer;
  position: relative;
  display: flex;
  border-radius: 4px;
  background-image: linear-gradient(
    to right,
    rgb(220, 186, 65) 10%,
    rgb(63, 185, 253) 60%,
    rgb(174, 19, 248) 100%
  );
  background-clip: border-box;
  background-origin: border-box;
  border: 2px solid transparent;
  padding: 0px !important;
}
.inner {
  flex: 1 1 0%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  height: 36px;
  padding: 0px 12px;
  color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 600;
  border-radius: 4px;
  background-color: rgb(27, 27, 30);
}
.last-updated {
  font-size: 12px;
  line-height: 12px;
  /* color: white; */
}
</style>
