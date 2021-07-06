new Vue({
    el: "#app",
    data: {
        cart: [{
            name: "ピカチュウVMAX",
            url: "./img/[s04].10031-ピカチュウVMAX.jpg",
            price: 1000,
            count: 1,
            id: "10031"
        }, {
            name: "ピカチュウV",
            url: "./img/[s04].10104-ピカチュウV.jpg",
            price: 1000,
            count: 2,
            id: "10104"
        }, {
            name: "ピカチュウVMAX",
            url: "./img/[s04].10114-ピカチュウVMAX.jpg",
            price: 5000,
            count: 1,
            id: "10114"
        }],
        cart2: [{
            id: "",
            count: 1
        }],
        itemList: [{
            name: "ピカチュウVMAX",
            url: "./img/[s04].10031-ピカチュウVMAX.jpg",
            price: 1000,
            count: 1,
            id: "10031"
        }, {
            name: "ピカチュウV",
            url: "./img/[s04].10104-ピカチュウV.jpg",
            price: 1000,
            count: 2,
            id: "10104"
        }, {
            name: "ピカチュウVMAX",
            url: "./img/[s04].10114-ピカチュウVMAX.jpg",
            price: 5000,
            count: 1,
            id: "10114"
        }, {
            name: "とりつかい",
            url: "./img/[s04a].10317-とりつかい.jpg",
            price: 1000,
            count: 1,
            id: "10317"
        }, {
            name: "ポケモンごっこ",
            url: "./img/[s04a].10321-ポケモンごっこ.jpg",
            price: 1000,
            count: 1,
            id: "10321"
        }, {
            name: "マリィ",
            url: "./img/[s04a].10322-マリィ.jpg",
            price: 1000,
            count: 1,
            id: "10322"
        }, {
            name: "名探偵ピカチュウ",
            url: "./img/[spromo-100].10099-名探偵ピカチュウ.jpg",
            price: 1000,
            count: 1,
            id: "10099"
        }, {
            name: "ピカチュウVMAX",
            url: "./img/[spromo-200].10023-ピカチュウVMAX.jpg",
            price: 1000,
            count: 1,
            id: "10023"
        }]
    },
    methods: {
        handlePlus: function (item) {
            item.count++;
        },
        handleSub: function (item) {
            if (item.count > 1) {
                item.count--;
            }
        },
        deleteItem: function (index) {
            // console.log(this);
            this.items.splice(index, 1);
        },
        addCart: function (ID) {
            ifFind = false
            for (var i = 0; i < this.cart.length; i++) {
                if (this.cart[i].id == ID) {
                    console.log(true);
                    this.cart[i].count++;
                    ifFind = true;
                }
            }
            if (!ifFind) {

                var result=this.itemList.map(function(item,index){
                    return item.id;
                }).indexOf(ID);

                console.log(result);
                this.cart.push({
                    name: this.itemList[result].name,
                    url: this.itemList[result].url,
                    price: this.itemList[result].price,
                    count: this.itemList[result].count,
                    id: this.itemList[result].id
                });
                console.log(this.cart);
            }
            
            // this.itemList.
        },
        consoleLog: function () {
            console.log(this.cart);
        }
    }



})