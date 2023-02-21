function myFunc(array, callback) { 
    let newArray = [];
    callback(newArray, array);
}

function out(elem, arr) {
    for (let i = 0; i < arr.length; i++) {
        elem.push(arr[i] * 2)
    }
    console.log(elem);
}


myFunc([5, 3, 2], out);