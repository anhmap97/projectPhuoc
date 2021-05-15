const data = {
  bookingapp: {
    ios: null,
    android:
      "https://play.google.com/store/apps/details?id=com.eplus.flybooking",
  },
};

const app = new Vue({
  el: "#app",
  data() {
    return {
      data: data,
    };
  },
  mounted() {
    const params = new URLSearchParams(window.location.search);
    if (params.has("app")) {
      console.log(this.data);
      console.log(params.get("app"));
    }
  },
});
