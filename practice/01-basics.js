{
    console.log("--------------- Task 1: Variables ---------------");
    const shopName = "My Hair Shop";
    let visitorCount = 0;

    console.log(shopName);
    console.log(visitorCount);

    visitorCount = 1;
    console.log(visitorCount);

    console.log("--------------- Task 2: Types ---------------");
    const name = "Curl Cream";
    const price = 120;
    const inStock = true;

    console.log(typeof name); // "string"
    console.log(typeof price); // "number"
    console.log(typeof inStock); // "boolean"

    console.log("--------------- Task 3: Functions ---------------");
    function greet(name) {
        return "Hello, " + name + "!";
    }

    console.log(greet("Nettie")); // "Hello, Nettie!"
    console.log(greet("Brad")); // "Hello, Brad!"

    function calculateDiscount(price, percent) {
        const discount = price * (percent / 100);
        return price - discount;
    }

    console.log(calculateDiscount(120, 10)); // 108
    console.log(calculateDiscount(80, 25)); // 60

    console.log("--------------- Task 4: Conditionals ---------------");
    function describePrice(price) {
        if (price < 50) {
            return "Cheap";
        } else if (price < 150) {
            return "Mid-range";
        } else {
            return "Expensive";
        }
    }

    console.log(describePrice(40)); // "Cheap"
    console.log(describePrice(120)); // "Mid-range"
    console.log(describePrice(300)); // "Expensive"
}
