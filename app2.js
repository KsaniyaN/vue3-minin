const App = {
    data: () => ({
        myHtml: '<h1>Vue3 App</h1>', title: 'Cupcake ipsum Title', person: {
            firstName: 'Xenia', lastName: 'N', age: 40
        }, //myItems: [],
        myItems: ['one', 2, 'three'], myNumbers: [1, 2, 3, 4, 5, 6]
    }),

    methods: {
        addNewListItem(event) {
            // console.log(this.$refs.myInput.value);
            if (this.$refs.myInput.value) {
                this.myNumbers.unshift(this.$refs.myInput.value);
                this.$refs.myInput.value = '';
                //console.log(event.key)
            }
        },

        removeItem(i) {
            this.myNumbers.splice(i, 1);
        },

        logItem(item) {
            console.log('Log item: ', item);
        }
    },

    computed: {
        evenItems() {
            return this.myNumbers.filter(i => i % 2 === 0)
        }
    }
};

Vue.createApp(App).mount('#app');