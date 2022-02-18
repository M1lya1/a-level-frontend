// задание 3
let mass = [100, -5, 44, 645, -12, 78, 15, 581, 32];
        
 
        function sum(array) {
            return array.slice().sort((a, b)  => b > 0 ? a - b : b, 0).slice(0, 2).reduce((a, b) => a + b); // could you plz describe your code?
        }
        console.log(sum(mass));
       
        
// задание 1
const nameOfDays = {
    ru: ['', 'Понедельник', 'Вторник','Среда','Четверг','Пятница','Суббота','Воскресение'],
    en: ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
}
const getNameOfDay = (day, lang = 'en') => {
    if(day > 7) {
        return 'Вы ввели некорректное число'
    }

    return namesOfDays[lang][day];
    
    // why do you need this code?
    for(let i = 1; i < arr.length; i++) { // where do you see 'arr'?
        return nameOfDays[day].ru
    }
}

console.log(getNameOfDay(1,'ru'));

// задание 2 доделаю позже, не до конца разобрался
const citiesAndCountries = {
    Kyiv: 'Ukraine',
    Washington: 'USA',
    Odessa: 'Ukraine',
    Munich: 'Germany',
    Kharkiv: 'Ukraine',
    'New-York': 'USA',
    Amsterdam: 'Netherlands',
    Berlin: 'Germany',
    Chicago: 'USA',
    Lisbon: 'Portugal',
    Lviv: 'Ukraine',
    Hamburg: 'Germany'
};

const countriesData = {};

for (const key in citiesAndCountries) {
    // check if property is in the object
    if (!countriesData[citiesAndCountries[key]]) {
        // if not
        // set a new array with initial value
        countriesData[citiesAndCountries[key]] = [key];
    } else {
        // add new value to existing property
        countriesData[citiesAndCountries[key]].push(key);
    }
}