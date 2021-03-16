// 1 
for (var i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 100);
}

// 2
function job() {
    return new Promise(function (resolve, reject) {
        reject();
    });
}

let promise = job();

promise
    .then(() => console.log('Success 1'))
    .then(() => console.log('Success 2'))
    .then(() => console.log('Success 3'))
    .catch(() => console.log('Error 1'))
    .then(() => console.log('Success 4'));

// 3
let user = {
    firstName: "Scott",
    lastName: "Tiger",
    getFirstName: () => {
        return this.firstName;
    },
    getLastName: function () {
        return this.lastName;
    }
};
console.log(user.getFirstName(), user.getLastName());

// 4
var x = 5;

(function () {
    console.log(x);
    var x = 10;
    console.log(x);
})();