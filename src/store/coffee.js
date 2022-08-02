import { v4 as uuidv4 } from "uuid";

const coffee = {
    state: {
        coffee: [
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
        ],
    },
    getters: {
        getCoffee(state) {
            return state.coffee;
        }
    }
}

export default coffee;