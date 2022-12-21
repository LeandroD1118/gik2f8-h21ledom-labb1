'use strict';

let bookList = [];

window.addEventListener('load', () => {
  getAll().then((apiBooks) => (bookList = apiBooks));
});

searchField.addEventListener('keyup', (e) =>
  renderBookList(
    bookList.filter(({ title, author }) => {
      const searchTerm = e.target.value.toLowerCase();
      return (
        title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    })
  )
);

function renderBookList(bookList) {
  const existingElement = document.querySelector('.book-list'); 

  const root = document.getElementById('root');
  existingElement && root.removeChild(existingElement);

  bookList.length > 0 && searchField.value && root.insertAdjacentHTML('beforeend', BookList(bookList));


// Select the element with the class "book-list"
const element = document.querySelector(".book-list");

// Add event listeners to the element to show and hide book details
element.addEventListener("mouseover", showBookInfo);
element.addEventListener("mouseout", hideBookInfo);

// Show book details when the mouse is over the element
function showBookInfo(event) {
  if (event.target && event.target.matches("li.book-list__item")) {
    const id = event.target.value;
    const item = bookList.find((book) => book.id === id);
    if (bookList.length > 0 && searchField.value) {
      const details = BookInfo(item);
      root.insertAdjacentHTML("beforeend", details);
    }
  }
}

// Hide book details when the mouse moves out of the element
function hideBookInfo() {
  const details = document.querySelector("#bookInfo");
  details.remove();
}
}


