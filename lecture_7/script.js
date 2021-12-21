const vowel_count = string => [...string].filter(c => 'aeiou'.includes(c.toLowerCase())).length;

console.log(vowel_count('anladfadfh')); 

const createArrayWithObjects=(name1, name2, ...name_n)=>{
    let arr = [name1, name2, ...name_n]
    let result = arr.forEach((el, index)=> console.log(`name: ${el}; id: ${index}`));
    return result;
}
createArrayWithObjects('jae', 'anna', 'Dan', 'July');


const filterArray = (arr, conditionNumber)=>{
    let result=arr.filter((el, index) =>el>conditionNumber);
    console.log(result);
}

filterArray([1,2,15,6,8,13],9);