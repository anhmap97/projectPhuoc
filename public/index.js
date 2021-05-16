const data = {
  bookingapp: {
    ios: null,
    android:
      'https://play.google.com/store/apps/details?id=com.eplus.flybooking',
  },
}

const app = new Vue({
  el: '#app',
  data() {
    return {
      data: data,
      android: null,
      ios: null,
      isLoading: false,
    }
  },
  created() {
    const params = new URLSearchParams(window.location.search)
    if (params.has('app')) {
      const dataQuery = params.get('app')
      const data = this.data
      if (data.hasOwnProperty(`${dataQuery}`) === true) {
        this.ios = data[dataQuery].ios
        this.android = data[dataQuery].android
        this.isLoading = true
      }
    }
  },
  mounted() {
    const ios = document.getElementById('ios')
    const android = document.getElementById('android')
    if (ios) {
      ios.addEventListener('click', function () {
        if (!ios.href) {
          alert('Ứng dụng đang cập nhật !!!')
        }
      })
    }
    if (android) {
      android.addEventListener('click', function () {
        if (!android.href) {
          alert('Ứng dụng đang cập nhật !!!')
        }
      })
    }
  },
})
