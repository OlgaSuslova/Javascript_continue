// Дан блок, внутри него необходимо создать элемент div с классом item, разместить текст“Элемент внутри” и задать стили
// Цвет текста синий
// Рамка сплошная черная
// Цвет фона #f8f8f8
// Внутренний отступ 16px
// Добавить данному блоку класс item_1 (использовать setAttribute)

const blockElement = document.querySelector('.block');
const itemElement = document.createElement('div');
itemElement.className = 'item';
itemElement.textContent = 'Элемент внутри';
blockElement.append(itemElement);
blockElement.setAttribute('class', 'item_1');