let myLibrary = [];

function Book(title, author,pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = isRead;
    this.info = () => {
        return (`Title: ${this.title}, Author : ${this.author}, Pages in book: ${this.pages}, ${
            this.read ? "Read" : "Not Read"
        }`)
    };
}


/************************************************* Dom Manipulation ***************************************************/ 

const bookButton = document.querySelector(".new-book-button");
const libraryContainer = document.querySelector(".button-container");
const formSubmitButton = document.createElement("button");

bookButton.addEventListener("click", () =>{
    createBookForm("title", "author", "pages");
})

formSubmitButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e);
})

/************************************************* Helper Functions ***************************************************/ 
// Hides the bookButton and creates a new form
function createBookForm(...params){
    bookButton.hidden = true;
    const newBookForm = document.createElement("form");
    libraryContainer.appendChild(newBookForm);
    params.forEach((param) => {
        const formSection = document.createElement("div");
        const formTitle = document.createElement("p");
        formTitle.textContent = param;
        const formInput = document.createElement("input");

        if(param ==="pages"){
            formInput.type = "number";
        } else {
            formInput.type = "text";
        }

        formSection.appendChild(formTitle);
        formSection.appendChild(formInput);
        newBookForm.appendChild(formSection);
    }
    )

    formSubmitButton.innerText = "Submit to Library";
    newBookForm.appendChild(formSubmitButton);
    
}

// Takes User Input and adds it to myLibrary Arr
function addBookToLibrary(){

}

//Displays objects in myLibrary arr to the dom (in a table? a grid?)
function displayBooksInArr(){

}