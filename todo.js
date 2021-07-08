const listContainer = document.querySelector('[data-lists]');
const newListForm = document.querySelector('[data-new-list-form]');
const newListInput = document.querySelector('[data-new-list-input]');

let lists = []

newListForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const listName = newListInput.value;
  if (listName === null || listName === '') return;
  const list = createList (listName);
  newListInput.value = null;
  lists.push(list);
  render();
});

const createList = (name) => {
  return {id: Date.now().toString(), name: name}
}

const render = () => {
  clearElement(listContainer);
  lists.forEach((list) =>{
    const item = document.createElement('li');
    item.classList.add('item');
    item.innerText = list.name;
    listContainer.appendChild(item);
  })
}

const clearElement = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild)
  }
}
