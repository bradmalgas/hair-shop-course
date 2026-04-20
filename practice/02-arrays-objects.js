// Each task is wrapped in { } so we can reuse names like products across tasks.
{
    console.log("--------------- Task 1: Arrays ---------------");
    const products = ["Curl Cream", "Scalp Oil", "Bonnet"];

    console.log(products[0]); // "Curl Cream" (arrays start at 0)
    console.log(products.length); // 3

    products.push("Hair Mask"); // adds to the end
    console.log(products); // ["Curl Cream", "Scalp Oil", "Bonnet", "Hair Mask"]
}
{
    console.log("--------------- Task 2: Objects ---------------");
    const product = {
        name: "Curl Cream",
        price: 120,
        inStock: true,
    };

    console.log(product.name); // "Curl Cream"
    console.log(product.price); // 120
}
{
    const products = [
        { name: "Curl Cream", price: 120 },
        { name: "Scalp Oil", price: 90 },
        { name: "Bonnet", price: 80 },
    ];

    console.log(products[0].name); // "Curl Cream"
    console.log(products[1].price); // 90
}
{
    console.log("--------------- Task 3: Arrow functions ---------------");
    // Old style
    function doubleOld(n) {
        return n * 2;
    }

    // Arrow function
    const double = (n) => {
        return n * 2;
    };

    // Arrow function (short version, when the body is one expression)
    const doubleShort = (n) => n * 2;

    console.log(doubleOld(2));
    console.log(double(3));
    console.log(doubleShort(4));
}
{
    console.log("--------------- Task 4: Destructuring ---------------");
    const product = { name: "Curl Cream", price: 120 };

    // Without destructuring
    const productName = product.name;
    const productPrice = product.price;

    // With destructuring
    const { name, price } = product;

    console.log(productName); // "Curl Cream"
    console.log(productPrice); // 120
    console.log(name); // "Curl Cream"
    console.log(price); // 120
}
{
    const colours = ["red", "green", "blue"];
    const [first, second] = colours;
    console.log(first); // "red"
    console.log(second); // "green"
}
{
    console.log("--------------- Task 5: Template Literals ---------------");
    const name = "Curl Cream";
    const price = 120;

    // Old way
    console.log("The " + name + " costs R" + price);

    // Template literal
    console.log(`The ${name} costs R${price}`);
}
{
    console.log("--------------- Task 6: Spread Operator ---------------");
    const products = ["Curl Cream", "Scalp Oil"];
    const moreProducts = [...products, "Bonnet", "Hair Mask"];
    console.log(moreProducts); // ["Curl Cream", "Scalp Oil", "Bonnet", "Hair Mask"]

    const product = { name: "Curl Cream", price: 120 };
    const updatedProduct = { ...product, price: 100 };
    console.log(updatedProduct); // { name: "Curl Cream", price: 100 }
}
