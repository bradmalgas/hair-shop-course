// Each task is wrapped in { } so we can reuse names like products across tasks.
{
    console.log(
        "--------------- Task 1: .map() - Transform Each Item ---------------",
    );
    const numbers = [1, 2, 3, 4];
    const doubled = numbers.map((n) => n * 2);
    console.log(doubled); // [2, 4, 6, 8]
    console.log(numbers); // [1, 2, 3, 4] - original is unchanged
}
{
    console.log(
        "--------------- Task 2: .filter() - Keep Only Matching Items ---------------",
    );
    const products = [
        { name: "Curl Cream", price: 120 },
        { name: "Scalp Oil", price: 90 },
        { name: "Bonnet", price: 80 },
    ];

    const productNames = products.map((product) => product.name);
    console.log(productNames); // ["Curl Cream", "Scalp Oil", "Bonnet"]

    const formattedPrices = products.map(
        (product) => `${product.name}: R${product.price}`,
    );
    console.log(formattedPrices); // ["Curl Cream: R120", "Scalp Oil: R90", "Bonnet: R80"]
}
{
    console.log("--------------- Task 3: Chain Them ---------------");
    const products = [
        { name: "Curl Cream", price: 120 },
        { name: "Scalp Oil", price: 90 },
        { name: "Bonnet", price: 80 },
    ];

    const cheapProductNames = products
        .filter((product) => product.price < 100)
        .map((product) => product.name);

    console.log(cheapProductNames); // ["Scalp Oil", "Bonnet"]
}
{
    console.log(
        "--------------- Task 4: A Bonus - .reduce() For Totals ---------------",
    );
    const cart = [
        { name: "Curl Cream", price: 120, quantity: 2 },
        { name: "Scalp Oil", price: 90, quantity: 1 },
    ];

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
    );
    console.log(total); // 330
}
