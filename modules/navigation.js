const bookForm = document.getElementById('book-form');
const bookLists = document.getElementById('book-section');
const contact = document.getElementById('contact');

const add = document.getElementById('add');
const list = document.getElementById('list');
const contactInfo = document.getElementById('contact-info');

bookForm.style.display = 'flex';
bookLists.style.display = 'none';
contact.style.display = 'none';

function display(element) {
  bookForm.style.display = 'none';
  bookLists.style.display = 'none';
  contact.style.display = 'none';

  element.style.display = 'flex';
}

add.addEventListener('click', () => {
  display(bookForm);
});

list.addEventListener('click', () => {
  display(bookLists);
});

contactInfo.addEventListener('click', () => {
  display(contact);
});

export default {
  bookForm,
  bookLists,
  contact,
};
