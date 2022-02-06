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

Лекция 8

Функции
function function_name(argument1, arg2, arg_n){ fucntion body};
function ();
аргументы - параметры наших функций
fuction (...number) unknown argument
return ...
arrow function
(arg) => {body}
with inline body let funct = (a,b) => a+b;
we can get execution context using this

Лекция 9
Condition and loops
1. if-else
2. switch (condition) {case:1; case:2;}
3. ternary operator  condition ? value1 : value2
Loops
1 while(condition) {repeat code}
2 do{} while()
3 for (initial data, condition, action after cycle) {
// repeat some code
}
4 for (element of array) {
// repeat some code
}
5 for (property in object) {
// repeat some code
}
break stops (breaks) the loop.
keyword continue - skips the iteration

Лекция 10
DOM part 1
dom => document
getElementsByTagName() - returns a collection of  HTMLElement objects based on tag name
getElementsByClassName() - returns a collection of  HTMLElement objects based on class name
getElementById() - returns an  HTMLElement object with current id (only first one)
querySelector() - returns the first HTMLElement object based on CSS selectors

Element.id - to get id
Element.classList - to work with classes
Element.attributes - to work with attributes
Element.style - to work with styles
Element.children - to get child nodes
Element.innerHTML - to update HTML inside the element
Element.textContent - to update inner text

Element.addEventListener() - to handle events
Element.click() - to handle click event
Element.appendChild() - to add new child node
Add new elements
appendChild() - gets a new element and add it into the current element.
 insertBefore() - gets 2 arguments: element that we want to add, element after which to add
 
 Additional properties
 parentNode - прямой родитель;
firstChild - первый прямой дочерний элемент;
lastChild - последний прямой дочерний элемент;
nextSibling - следующий элемент в структуре, находящийся на одном уровне иерархии с текущим элементом;
previousSibling - предыдущий элемент в структуре, находящийся на одном уровне иерархии с текущим элементом.

Change attributes
getAttribute() - takes attr name and gets its value
setAttribute() - takes attr name with its value and sets it
hasAttribute() - true or false if attr exists
removeAttribute() - delete the attr

Remove elements
removeChild() - вызывается применительно к элементу, у которого необходимо удалить прямой дочерний элемент, аргументом принимает удаляемый HTML-тег и возвращает ссылку на него;

remove() - вызывается применительно к элементу, который необходимо удалить из DOM.

Лекция 12
Events
1. Browser events
DOMContentLoaded - DOM structure was built
load - DOM structure was built + all scripts and styles files was loaded
resize - change browser’s window size
scroll - scrolls the page or an element
beforeunload / unload - before/when page will be closed
online / offline - detects if user is online/offline

Control events 
focus - element becomes in the focus
blur - element loses out the focus
copy/ cut / paste - work with user selection events

2. Forms object
name - the value of the name attribute
action - the value of the action attribute
method - the value of the method attribute
novalidate - true if the form has the novalidate attribute
elements - contains an HTMLFormControlsCollection object with all form fields
length - number of form fields
3. Forms methods
 submit() - initiates a submit event relative to the form and sends its value to the URL specified in the action attribute using the HTTP method specified in the method;
reset() - resets the form value to its initial state;
checkValidity() - returns true if all form fields are valid, otherwise returns false;
reportValidity() - returns true if all form fields are valid, otherwise it triggers an invalid event for each invalid form field element.
4. Form validation
checkValidity() / reportValidity() - indicates if form is valid;

5. Form element validity
 valueMissing - true if the required attribute is set and the field is empty;
patternMismatch - true if the field value does not match the regular expression specified by the pattern attribute;
typeMismatch - true if the field value does not match the type specified by the type attribute;
stepMismatch - true if the value does not match the limit specified by the step attribute;
tooLong - true if the field value by the number of characters exceeds the limit specified by the maxlength attribute;
tooShort - true if the field value is less than the limit specified by the minlength attribute by the number of characters;
rangeUnderflow - true if the field value is greater than the value specified by the max attribute;
rangeOverflow - true if the field value is less than the value specified by the min attribute;
valid - true if the field's value complies with all constraints set for it;
customError - true if the field has custom validation set.

Лекция 13 
OOP

OOP models complex things as reproducible, simple structures
Reusable, OOP objects can be used across programs
Allows for class-specific behavior through polymorphism
Easier to debug, classes often contain all applicable information to them
Secure, protects information through encapsulation

Encapsulation is the mechanism of hiding of data implementation by restricting access to public methods. Instance variables are kept private and accessor methods are made public to achieve this.
Abstract means a concept or an idea which is not associated with any particular instance. 
E.g., one class should not know the inner details of another in order to use it, just knowing the interfaces should be good enough.
Inheritance expresses “is-a” and/or “has-a” relationship between two objects. Using Inheritance, In derived classes we can reuse the code of existing super classes.
Polymorphism means one name (or method) could have many forms (implementations).






 
