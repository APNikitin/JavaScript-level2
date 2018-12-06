//1. Запись
var regexp = new RegExp("шаблон");
var regexp = /шаблон/;

i
g
m
//2. Методы

"Люблю регэкспы я, но странною любовью"
.search( );
/лю/i 

"ОЙ-Ой-ой";
.match(  );
/ой/i

result[0];
result.index;
result.input;


"ОЙ-Ой-ой";
var result = str.match( );
/ой/ig 

'12-34-56'.split(/-/)

'12-34-56'.replace("-", ":")

var str = "Люблю регэкспы я, но странною любовью";
/лю/i.test(str)



//3. Флаги

//4. Классы
"+7(903)-123-45-67";
/\s/g;
str.match(reg); 

"Стандарт CSS4 - это здорово";
/CSS\d/
str.match(reg);

"Hello, Java!".match(/\bJava\b/);
"Hello, Javascript!".match(/\bJava\b/);

\d
\s
\w
\b


\D
\S
\W
\B

.
\
//5. Наборы
"Гоп-стоп".match(/[гт]оп/gi);
"Вуаля".match(/В[уа]ля/);

"Exception 0xAF".match(/x[0-9A-F][0-9A-F]/g);
"alice15@gmail.com".match(/[^\d\sA-Z]/gi);
[asd]
[a-z]
[^a-z]
//6. Квантификаторы

"Мне 12345 лет".match(/\d{5}/);

"Мне не 12, а 1234 года".match(/\d{3,5}/);
"Мне не 12, а 345678 лет".match(/\d{3,}/);


{5}
{3,5}

var str = "+7(903)-123-45-67";
str.match(/\d+/g);

var str = "Можно писать color или colour (британский вариант)";
str.match(/colou?r/g);

"100 10 1".match(/\d0*/g);

+
?
*

//7. Скобочные группы

alert( 'Gogogo now!'.match(/(go)+/i) );
(go)+

//8. Обратные ссылки

var name = "Александр Пушкин";
name = name.replace(/([а-яё]+) ([а-яё]+)/i, "$2, $1");
$1 $2

//9. Аллитерация |

var reg = /html|php|css|java(script)?/gi
var str = "Сначала появился HTML, затем CSS, потом JavaScript"
str.match(reg)
html|csss

//10. Начало и конец
var str = '100500 попугаев съели 500100 бананов!';
str.match(/\d+/ig);
str.match(/^\d+/ig);
str.match(/\d+$/ig);
^
$
