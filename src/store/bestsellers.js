import { v4 as uuidv4 } from "uuid";

const bestsellers = {
    state: {
        bestsellers: [
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
        getBestsellers(state) {
            return state.bestsellers;
        }
    }
}

export default bestsellers;