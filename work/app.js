var House = {
    template: '#house-template',
    props: {
      house: Object,
      houseId: String,
      currentHouse: String
    },
    computed: {
      isVisible () {
        return this.currentHouse === this.houseId
      }
    }
  }


var app = new Vue({
    el: '#app',
    components: {
        House: House
      },
    data: {
      houses: houses,
      currentHouse: null
    },
    methods: {
      showHouse (houseId) {
        this.currentHouse = houseId
      }
    }
  })
  