const detailsColumn = document.querySelector(".details-column");
const bookColumn = document.querySelector(".book-column");

const details = [
  { key: "date", value: "Feb 12, 2022" },
  { key: "ages", value: "12-16" },
  { key: "genre", value: "Fantasy" },
  { key: "stars", value: "*****" }
];

const book = {
  title: "Belgariad Book One: Pawn of Prophecy",
  img: {
    src: "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
    alt: "book cover"
  },
  description: "A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his Aunt Pol and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission."
};

// Create a new div to hold the book details and append them
const newBookDetails = document.createElement("ul");
newBookDetails.classList.add("book-details");

// Add details to the new book
details.forEach(detail => {
  const detailItem = document.createElement("li");
  detailItem.classList.add(detail.key);
  detailItem.textContent = detail.value;
  newBookDetails.appendChild(detailItem);
});
detailsColumn.appendChild(newBookDetails);

// Create the book content to add to the book column
const newBook = document.createElement("section");
newBook.classList.add("book");

const bookTitle = document.createElement("h2");
bookTitle.textContent = book.title;
newBook.appendChild(bookTitle);

const bookImage = document.createElement("img");
bookImage.src = book.img.src;
bookImage.alt = book.img.alt;
newBook.appendChild(bookImage);

const bookDescription = document.createElement("p");
bookDescription.textContent = book.description;
newBook.appendChild(bookDescription);

const readMoreLink = document.createElement("a");
readMoreLink.href = "#";
readMoreLink.textContent = "Read More...";
bookDescription.appendChild(readMoreLink);

bookColumn.appendChild(newBook);
