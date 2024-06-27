const app = Vue.createApp({
    data(){
        return {
            title: 'Aprilia fx150',
            descrpition: 'Aprilia FX 150 is a high performing bike which is available in the Bangladesh motorcycle market.',
            price: 135000.00,
            showProduct: true
        }
    },
    computed: {
        formattedPrice() {
            return this.price.toFixed(2) + ' Tk.';
        }
    },
    methods: {
        increasePrice() {
            //this.price = this.price+1000;
            this.price +=1000
        },
        decreasePrice() {
            //this.price = this.price-1000;
            this.price -=1000
        },
        changeTitle(title){
            //this.title = 'Yahamah FZX150'
            this.title = title
        },
        changeShowStatus(){
            this.showProduct = !this.showProduct
        },
        handleEvent(){
            console.log('event');
        }
    }
});

app.mount('#app');
