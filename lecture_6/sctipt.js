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