Лекция 2: 
1.var не используеться практически всегда. Используют let and const 
2. для переменных есть 3 типа как написать: 
3. a) camel case example: veryLongTime
4. b) Snake case ex^: very_long_time
5. c)kebab case ex: very-long-time
6. Для коментирования используеться /*"" */

лекция 3
Существуют 8 типов данных
строка(string), булеан(true or false), неопределенный(undefined), число(number), symbol and BigInt, Null
object - используемая не только для хранения данных, но и для создания других структур

Лекция 4 
arhematic operators сonst a = 5 + 3; a = 5 - 2; a = 5 * 4; a = 4 / 3;
знак % используется что бы вывести остаток от деления.
assignment operators let a = 1; a += 5; a=6 
comparison operator 3 == 3;//true  1 == 3;//false  3 != 3;// false
strick mode 3 === 3;//true  3 === '3';//false 3 !== 3;/false 
loginal not !false//true и наоборот
type coersion  string(4)//convert to string,  number("4")//convert to number
type coervion:implict  5+"3"="53"; 5-"3"=2

Лекция 5

toLowerCase & toUpperCase все маленькие и болььшие символы
includes проверяет наличие в строке символа
indexOf number of index
slice обрезает
split делаем масив
replace заменет значение
toString переводит в строку
toFixed округление
Math.round Math.floor округление к большему и меньшему
Math.pow Math.sqrt степень и корень
Math.min math.max мин и макс значение

Лекция 6
Обьекты 
const help = {
  key = value
  }
this ключевое на даный обьект this.help
object.propertyName
object.method()
delete help.key
copy obj  let obj2 = obj1
let obj2 = Object.asign({}, obj1)   or  obj2= {---obj1} /// spread
configurable - логическое значение, указывает может ли быть изменено значение дескриптора и может ли свойство быть удалено из объекта (по умолчанию false);
enumerable - логическое значение, если равно false, то свойство будет пропущено при перечислении всех свойства объекта (по умолчанию false);
value - задает значение свойства (по умолчанию undefined);
writable - логическое значение, указывает, может ли значение свойства быть изменено операцией присваивания (по умолчанию false);
get - функция, возвращаемое значение которой будет возвращено в качестве значения свойства при его чтении;
set - функция, которая вызывается в момент присваивания свойству нового значения и единственным параметром принимает присваиваемое значение.

Object.getOwnPropertyDescriptor()
Object.defineProperty()
Object.keys()
Object.assign() обьединение или спрэд

Лекция 7 
Массивы
.lenght
array[index]
toString() v stroky
join()
push() unshift dobavle v array
shift() pop() delete
arr.concat spred
slice вырезает часть
splice
includes
find  dlya poiska
some() every()
sort() forEach() map() filter() reduce()
