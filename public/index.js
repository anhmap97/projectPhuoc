const data = {
  bookingapp: {
    ios: null,
    android:
      "https://play.google.com/store/apps/details?id=com.eplus.flybooking",
  },
  vemaybaybmt: {
    ios: "https://apps.apple.com/us/app/travelaki/id1249951325",
    android:
      "https://play.google.com/store/apps/details?id=com.eplus.vemaybaybmt.flybooking",
  },
  agentvemaybaybmt: {
    ios: null,
    android:
      "https://play.google.com/store/apps/details?id=vn.eplus.vemaybaybmt.flyagent",
  },
  hopdenoto: {
    ios: null,
    android: "https://play.google.com/store/apps/details?id=vn.eplus.blackbox",
  },
  smeplatform: {
    ios: null,
    android:
      "https://play.google.com/store/apps/details?id=vn.eplus.smeplatform",
  },
  timebit: {
    ios: null,
    android:
      "https://play.google.com/store/apps/details?id=vn.eplus.news",
  },
  netvas: {
    ios: "https://apps.apple.com/us/app/netvas-company/id1523015148",
    android:
      "https://play.google.com/store/apps/details?id=com.netvas.technical",
  },
  mydas: {
    ios: null,
    android: "https://play.google.com/store/apps/details?id=com.eplus.mydas",
  },
  sale68: {
    ios: null,
    android: "https://play.google.com/store/apps/details?id=com.eplus.sales68",
  },
  travelaki: {
    ios: null,
    android: "https://play.google.com/store/apps/details?id=com.eplus.travelaki.flybooking",
  },
  chongluadao: {
    ios: null,
    android: "https://play.google.com/store/apps/details?id=vn.eplus.chongluadao",
  },
};

const app = new Vue({
  el: "#app",
  data() {
    return {
      data: data,
      android: null,
      ios: null,
      isLoading: false,
    };
  },
  created() {
    const params = new URLSearchParams(window.location.search);
    if (params.has("app")) {
      const dataQuery = params.get("app");
      const data = this.data;
      if (data.hasOwnProperty(`${dataQuery}`) === true) {
        this.ios = data[dataQuery].ios;
        this.android = data[dataQuery].android;
        this.isLoading = true;
      }
    }
  },
  mounted() {
    const ios = document.getElementById("ios");
    const android = document.getElementById("android");
    if (ios) {
      ios.addEventListener("click", function () {
        if (!ios.href) {
          alert("Ứng dụng đang cập nhật !!!");
        }
      });
    }
    if (android) {
      android.addEventListener("click", function () {
        if (!android.href) {
          alert("Ứng dụng đang cập nhật !!!");
        }
      });
    }
  },
});
