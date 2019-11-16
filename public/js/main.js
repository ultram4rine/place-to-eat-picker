new Vue({
  el: "#app",
  components: {
    axios
  },
  data() {
    return {
      freeze: false,
      rolling: false,
      wheelDeg: 0,
      placesCount: 0,
      placesList: null
    };
  },
  mounted() {
    axios
      .get("/getplaces")
      .then(
        resp => (
          console.log(resp),
          (this.placesList = resp.data.places),
          (this.placesCount = resp.data.places.length)
        )
      );
  },
  computed: {
    places() {
      return this.placesList.slice(0, this.placesCount);
    }
  },
  methods: {
    onClickRotate() {
      if (this.rolling) {
        return;
      }
      this.rolling = true;
      const { wheelDeg, places } = this;
      const random = Math.floor(Math.random() * places.length);
      console.log(random);
      this.wheelDeg =
        wheelDeg -
        (wheelDeg % 360) +
        6 * 360 +
        (360 - (360 / places.length) * random);
      setTimeout(() => {
        this.rolling = false;
        alert("Result：" + places[random].name);
      }, 4500);
    }
  },
  watch: {
    prizeNumber() {
      this.freeze = true;
      this.wheelDeg = 0;

      setTimeout(() => {
        this.freeze = false;
      }, 0);
    }
  }
});
