import { v4 as uuidv4 } from "uuid";

const goods = {
    state: {
        goods: [
            {
                id: uuidv4(),
                img: "coffee-1.jpg",
                name: "Solimo Coffee Beans 2kg",
                price: 10.73,
            },
            {
                id: uuidv4(),
                img: "coffee-1.jpg",
                name: "Solimo Coffee Beans 2kg",
                price: 10.73,
            },
            {
                id: uuidv4(),
                img: "coffee-1.jpg",
                name: "Solimo Coffee Beans 2kg",
                price: 10.73,
            },
            {
                id: uuidv4(),
                img: "coffee-1.jpg",
                name: "Solimo Coffee Beans 2kg",
                price: 10.73,
            },
            {
                id: uuidv4(),
                img: "coffee-1.jpg",
                name: "Solimo Coffee Beans 2kg",
                price: 10.73,
            },
            {
                id: uuidv4(),
                img: "coffee-1.jpg",
                name: "Solimo Coffee Beans 2kg",
                price: 10.73,
            },
        ]
    },
    getters: {
        getGoods(state) {
            return state.goods;
        }
    }
}

export default goods;