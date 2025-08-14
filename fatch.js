fetch("https://dummyjson.com/products").then((resposce) => {
    let data = resposce.json()
    return data


}).then((data) => {
    let reviews = data.products[0].reviews;
    return reviews;
}).then((g) => {
    console.log(g);

}).catch((er) => {
    console.log("error");

})