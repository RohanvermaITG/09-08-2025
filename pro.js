let prom = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log("dfafhh");
        resolve();
    }, 5000);
});
prom.then(function() {
    console.log("ho gya");
});

let promiseone = new Promise(function(resolve, reject) {
    let name = false;
    if (name) {
        console.log("name is true");
        resolve();
    } else {
        console.log("name is false");
        reject()
    }
});
promiseone.then(function() {
    console.log("then");

}).catch(function() {
    console.log("catch");

})