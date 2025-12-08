// for the tests, do not modify this array of books
const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780465050659.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    bookCoverImage:
      "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780135957059.jpg",
  },
];

const readingList = document.getElementById("reading-list");

books.forEach((book) => {
  const listItem = document.createElement("li");
  listItem.style.listStyle = "none";

  listItem.style.backgroundColor = book.alreadyRead ? "green" : "red";
  listItem.style.marginBottom = "10px";
  listItem.style.padding = "10px";
  listItem.style.display = "flex";
  listItem.style.alignItems = "center";
  listItem.style.gap = "10px";

  const title = document.createElement("p");
  title.textContent = book.title;
  title.style.fontWeight = "bold";
  title.style.margin = "0";

  const author = document.createElement("p");
  author.textContent = `by ${book.author}`;
  author.style.margin = "0";

  const img = document.createElement("img");
  img.src = book.bookCoverImage;
  img.alt = `${book.title} cover`;
  img.style.height = "100px";

  const textContainer = document.createElement("div");
  textContainer.appendChild(title);
  textContainer.appendChild(author);

  listItem.appendChild(img);
  listItem.appendChild(textContainer);

  readingList.appendChild(listItem);

});