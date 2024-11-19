// Array com informações dos livros
const books = [
    {
        title: "Dom Quixote",
        description: "Um clássico da literatura mundial escrito por Miguel de Cervantes.",
        image: "https://via.placeholder.com/150x200.png?text=Dom+Quixote",
    },
    {
        title: "1984",
        description: "Um romance distópico de George Orwell.",
        image: "https://via.placeholder.com/150x200.png?text=1984",
    },
    {
        title: "O Pequeno Príncipe",
        description: "Uma história encantadora de Antoine de Saint-Exupéry.",
        image: "https://via.placeholder.com/150x200.png?text=O+Pequeno+Pr%C3%ADncipe",
    },
    {
        title: "Orgulho e Preconceito",
        description: "Uma das obras mais populares de Jane Austen.",
        image: "https://via.placeholder.com/150x200.png?text=Orgulho+e+Preconceito",
    },
];

// Carregar os livros na página
function loadBooks() {
    const bookSlider = document.getElementById("book-slider");

    books.forEach(book => {
        const bookDiv = document.createElement("div");
        bookDiv.className = "book";
        bookDiv.style.backgroundImage = `url(${book.image})`;
        bookDiv.title = book.title;

        // Evento de clique para mostrar detalhes
        bookDiv.addEventListener("click", () => {
            showBookDetails(book);
        });

        bookSlider.appendChild(bookDiv);
    });
}

// Mostrar detalhes do livro
function showBookDetails(book) {
    const bookDetails = `
        <div id="book-details-overlay">
            <div id="book-details">
                <h2>${book.title}</h2>
                <img src="${book.image}" alt="${book.title}">
                <p>${book.description}</p>
                <button id="close-details">Fechar</button>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML("beforeend", bookDetails);

    // Fechar os detalhes
    document.getElementById("close-details").addEventListener("click", () => {
        document.getElementById("book-details-overlay").remove();
    });
}

// Filtrar livros
document.getElementById("search-bar").addEventListener("input", function (e) {
    const searchText = e.target.value.toLowerCase();
    const bookElements = document.querySelectorAll(".book");

    bookElements.forEach((book, index) => {
        if (books[index].title.toLowerCase().includes(searchText)) {
            book.style.display = "block";
        } else {
            book.style.display = "none";
        }
    });
});

// Inicializar os livros
loadBooks();
