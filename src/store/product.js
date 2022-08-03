import { v4 as uuidv4 } from "uuid";

const product = {
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
        ],
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
        goods: [
            {
                id: uuidv4(),
                img: "coffee-2.jpg",
                name: "AROMISTICO Coffee 1kg",
                price: 6.99,
            },
            {
                id: uuidv4(),
                img: "coffee-2.jpg",
                name: "AROMISTICO Coffee 1kg",
                price: 6.99,
            },
            {
                id: uuidv4(),
                img: "coffee-2.jpg",
                name: "AROMISTICO Coffee 1kg",
                price: 6.99,
            },
            {
                id: uuidv4(),
                img: "coffee-2.jpg",
                name: "AROMISTICO Coffee 1kg",
                price: 6.99,
            },
            {
                id: uuidv4(),
                img: "coffee-2.jpg",
                name: "AROMISTICO Coffee 1kg",
                price: 6.99,
            },
            {
                id: uuidv4(),
                img: "coffee-2.jpg",
                name: "AROMISTICO Coffee 1kg",
                price: 6.99,
            },
        ]
    },
    getters: {
        getProducts(state) {
            return (productName) => {
                return state[productName];
            };
        },
        getCardById(state) {
            return (id, product) => {
                return state[product].find(item => item.id === id);
            }
        }
    }
}

export default product