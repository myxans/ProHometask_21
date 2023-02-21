const array = [
    { name: "Jojo", age: 50 },
    { name: "Boji", age: 35 },
    { name: "Lufy", age: 18 }
];

function mapping (array, callback) {
    let new_array = [];
    array.forEach(function (element, index, array) {
       new_array.push(callback(element)); 
    });
    return new_array;
};

const callback = (item, index, array) => item.age;
const callback2 = (item, index, array) => item.age > 36;

console.log(mapping(array, callback));
console.log(mapping(array, callback2));
console.log(array);