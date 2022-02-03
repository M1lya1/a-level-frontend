function getMinValue(value1, value2) {
    let result = Math.min(value1, value2);
    return result;
}
console.log(getMinValue(5,8));



let obj1 = {name: 'Joe'};
let obj2 = {age: 25};
function joinObjects (obj1, obj2) {
    const result = {...obj1, ...obj2};
    return result;
}
console.log(joinObjects(obj1, obj2));

const user={
    name:'Jack',
    age: 18
}

Object.defineProperty(user, 'toString', {
    enumerable: false, // enumerable is 'false' by default
    value: function () {
        return 'My name is' + this.name + ', ' + 'I am ' + this.age;
    }
});


for (var key in user) console.log(key);

console.log('Hello! ' + user);