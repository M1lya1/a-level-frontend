// задание 4
let mass = [100, -5, 44, 645, -12, 78, 15, 581, 32];
        
 
        function sum(array) {
            return array.slice().sort((a, b)  => b > 0 ? a - b : b, 0).slice(0, 2).reduce((a, b) => a + b);
        }
        console.log(sum(mass));
       
        
// задание 2
const nameOfDays = {
    ru: ['', 'Понедельник', 'Вторник','Среда','Четверг','Пятница','Суббота','Воскресение'],
    en: ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
}
const getNameOfDay = (day, lang) => {
    if(day > 7) {
        return 'Вы ввели некорректное число'
    } else if(lang === 'ru') {
        return nameOfDays.ru[day]
    } else if(lang === 'en'){
        return nameOfDays.en[day]
    }
    
    for(let i = 1; i < arr.length; i++) {
        return nameOfDays[day].ru
    }
}

console.log(getNameOfDay(1,'ru'));

// задание 3 доделаю позже, не до конца разобрался
// const citiesAndCountries = {
//     Kyiv: 'Ukraine',
//     Washington: 'USA',
//     Odessa: 'Ukraine',
//     Munich: 'Germany',
//     Kharkiv: 'Ukraine',
//     'New-York': 'USA',
//     Amsterdam: 'Netherlands',
//     Berlin: 'Germany',
//     Chicago: 'USA',
//     Lisabon: 'Portugal',
//     Lviv: 'Ukraine',
//     Humburg: 'Germany'
// };

// 