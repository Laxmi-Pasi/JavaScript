console.log("Line 1");

async function hello(){
    console.log("Inside hello function");
    const response = await fetch("https://dummyjson.com/products/1");
    console.log("before response");
    const products = await response.json();
    console.log("products resolved");
    return products;
}

console.log("before calling hello")
let a = hello();
console.log("after calling hello");
console.log(a);
a.then(data => console.log(data));
console.log("last line");
