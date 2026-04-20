// --------------- Task 1: .map() - Transform Each Item ---------------
// const shopName: string = "My Hair Shop";
const visitorCount: number = 0;
const isOpen: boolean = true;

// Try uncommenting to see TypeScript catch the error:
// const price: number = "120";

// --------------- Task 2: Typing Function Parameters ---------------
function greet(name: string): string {
    return `Hello, ${name}!`;
}

console.log(greet("Nettie")); // OK

// Try uncommenting to see TypeScript catch the error:
// console.log(greet(42));

// --------------- Task 3: Interfaces - Typing Objects ---------------
interface Product {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
}

const curlCream: Product = {
    id: 1,
    name: "Curl Cream",
    price: 120,
    inStock: true,
};

// --------------- Task 4: Typing Arrays Of Objects ---------------
const products: Product[] = [
    { id: 1, name: "Curl Cream", price: 120, inStock: true },
    { id: 2, name: "Scalp Oil", price: 90, inStock: true },
];

// --------------- Task 5: Optional Properties ---------------
interface Product {
    id: number;
    name: string;
    price: number;
    description?: string; // optional
}
