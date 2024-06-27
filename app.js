const app = Vue.createApp({
    data() {
        return {
            url: "https://github.com/ShafwanHaque",
            image: "",
            bikes: [
                {
                    title: "Aprilia fx150",
                    descrpition:
                        "Aprilia FX 150 is a high performing bike which is available in the Bangladesh motorcycle market.",
                    price: 135000.0,
                    img: "assets/pic-1.jpeg",
                    isFav: true,
                },
                {
                    title: "Aprilia fx110",
                    descrpition:
                        "Aprilia FX 110 is a high performing bike which is available in the Bangladesh motorcycle market.",
                    price: 110000.0,
                    img: "assets/pic-2.jpeg",
                    isFav: false,
                },
                {
                    title: "Apache RR 310",
                    descrpition:
                        "Apache RR 310 is a high performing bike which is available in the Bangladesh motorcycle market.",
                    price: 500000.0,
                    img: "assets/pic-3.jpeg",
                    isFav: true,
                },
            ],
            showProduct: true,
            showEvent: false,
            x: 0,
            y: 0,
        };
    },
    computed: {
        // Computed property to format price (assuming you want to show formatted prices for all bikes)
        formattedPrices() {
            return this.bikes.map((bike) => ({
                ...bike,
                formattedPrice: bike.price.toFixed(2) + " Tk.",
            }));
        },
    },
    methods: {
        increasePrice(bike) {
            bike.price += 1000;
        },
        decreasePrice(bike) {
            bike.price -= 1000;
        },
        changeTitle(bike, title) {
            bike.title = title;
        },
        changeShowStatus() {
            this.showProduct = !this.showProduct;
        },
        handleEvent(event, data) {
            console.log(event, event.type);
            if (data) {
                console.log(data);
            }
        },
        mouseMoveEvent(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
            this.showEvent = !this.showEvent;
        },
        toggleFav(bike) {
            bike.isFav = !bike.isFav;
        },
    },
    computed: {
        filteredBikes(){
            return this.bikes.filter((bike) => bike.isFav);
        }
    },
});

app.mount("#app");
