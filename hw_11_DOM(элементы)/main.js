//! Всем <h3> поставьте текст '!!!'.

const h3 = document.getElementsByTagName('h3')
for (i of h3) {
    i.innerText = "!!!"
}
document.body.append(h3)

// ! Всем <h3> сделайте текст зеленого цвета.
for (i of h3) {
    i.style.color = 'green'
}

// ! Создайте маркированный список. При помощи цикла добавьте в маркированный список 30 li - элементов с текстом:
// !“1 - овечка”,
// !“2 - овечка”,
// !“3 - овечка”,
// !и так до “30-овечка”;

const ul = document.createElement('ul')


for( i = 1; i <= 30; i++ ){
    const listItem = document.createElement('li')
    listItem.textContent = i, "овечка";
    ul.append(listItem)
    listItem.innerHTML = `${i} - овечка`
}
document.body.append(ul)

// ! В css создайте класс .active в котором пропишите цвет текста blue. Добавьте всем span элементам класс active через document.getElementsByTagName.

const span = document.getElementsByTagName('span')

for(let i = 0; i < span.length; i++){
    span[i].classList.add('active')
}

// ! Найдите все HTML-теги strong и окрасьте их в зеленый цвет.

const strong = document.querySelectorAll('strong')

strong.forEach(element => {
    element.style.color = 'green'
})


// ! Найдите все HTML-теги em и добавьте им класс .selected .

const em = document.querySelectorAll('em')
em.forEach(element => {
    element.classList.add('selected');
});


// ! Найдите все HTML-теги mark, которые находятся в div с классом .row и задайте им класс .selected

const row = document.querySelector('.row');

const mark = row.querySelectorAll("mark")

mark.forEach(elem => {
    elem.classList.add('selected')
})


// ! Найдите все гиперссылки и удалите у них подчеркивания.

const a = document.querySelectorAll('a')
a.forEach(elem => {
    elem.style.textDecoration = 'none'
})

// ! Переключите HTML-теги strong с классом .some в состояние без этого класса, а тем элементам (strong), у которых небыло этого класса — добавьте.

const strong1 = document.querySelectorAll('strong1')

for(let i = 0; i < strong1.length; i++){
    if (strong1[i].classList.contains('some')) {
    strong1[i].classList.remove('some');
    } else {
    strong1[i].classList.add('some');
    }
}


// ! Среди набора элементов с классом .row, удалите этот класс у второго элемента.

var row1 = document.querySelectorAll('.row');
    if (row1.length > 1) {
        row1[1].classList.remove('row');
}


// !Выведите CSS-свойство color у второй гиперсылки в тексте(при помощи метода getComputedStyle())

const a1 = document.querySelector('a')

let a2 = getComputedStyle(a1);
console.log(a2.color);


// ! Задайте третьему row дополнительный класс .third .

const thisrow = document.querySelectorAll('.row')
thisrow[1].classList.add('third')


// !Обратитесь к элементу с классом .row-inner и задайте ему цвет текста розовый.

const row_inner = document.getElementsByClassName("row-inner")
console.log(row_inner[0]);
row_inner[0].style.color = 'pink'


// !обавтье элемент input type="text" с классом .input внутри div с классом .row-input.

const input = document.createElement("input")

input.setAttribute("type", "text")
input.setAttribute("class", "input")

// !Сделайте фон желтым у нового элемента input.

var inpElem = document.createElement('input');
var rowIn = document.querySelector('.row-input');

rowIn.appendChild(inpElem);

inpElem.style.backgroundColor = 'yellow';

// !Добавтье placholder этому элементу input с классом .input.

inpElem.setAttribute("placeholder", "input yes👍🏻")
inpElem.style.color = "black"

// !Обратитесь к элементу с классом .row-outer и задайте ему размер шрифта 20px.

var rowOut = document.querySelector('.row-outer');
rowOut.style.fontSize = '20px';

// !Обратитесь к элементу с классом .last и добавьте ему текст "Last but not least".

const lastText = document.getElementsByClassName("last")

lastText[0].innerText = "Last but not least"

// !Сделайте последний текст, который вы добавили, жирным.

lastText[0].style.fontWeight = "bold"