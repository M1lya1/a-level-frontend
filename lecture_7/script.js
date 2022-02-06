const vowel_count = string => [...string].filter(c => 'aeiou'.includes(c.toLowerCase())).length; // could yo please describe each step in your approach?

console.log(vowel_count('anladfadfh')); 



const createArrayWithObjects=(...names)=>{ // in this case all arguments you get will store in the array 'names' 
    let result = names.map((el, index)=> { // forEach doesn't return nothing
        // you have to return objects
        return {name: el, id: index}
    });
    return result;
}
createArrayWithObjects('jae', 'anna', 'Dan', 'July');



const filterArray = (arr, conditionNumber)=>{
    let result=arr.filter((el, index) =>el>conditionNumber);
    console.log(result);
}

filterArray([1,2,15,6,8,13],9);