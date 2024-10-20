// 3. Build a Simple Drag and Drop UI: Implement a simple drag-and-drop interface for moving elements within a web page.

const items = [
    { id: 'item1', text: 'Item 1' },
    { id: 'item2', text: 'Item 2' },
    { id: 'item3', text: 'Item 3' },
];

const container1 = document.getElementById('container1');
const container2 = document.getElementById('container2');

items.forEach(item => {
    const draggable = document.createElement('div');
    draggable.id = item.id;
    draggable.className = 'draggable';
    draggable.draggable = true;
    draggable.innerText = item.text;

    draggable.addEventListener('dragstart', dragStart);
    draggable.addEventListener('dragend', dragEnd);

    container1.appendChild(draggable);
});

container1.addEventListener('dragover', dragOver);
container2.addEventListener('dragover', dragOver);
container1.addEventListener('drop', drop);
container2.addEventListener('drop', drop);

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);
}

function dragEnd(e) {
    e.target.classList.remove('hide');
}

function dragOver(e) {
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();
    const id = e.dataTransfer.getData('text/plain');
    const draggableElement = document.getElementById(id);
    e.target.appendChild(draggableElement);
}
