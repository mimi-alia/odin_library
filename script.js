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
const newBookForm = document.createElement("form");

bookButton.addEventListener("click", () =>{
    createBookForm("title", "author", "pages");
})

formSubmitButton.addEventListener("click", (e) => {
    e.preventDefault();
    // myLibrary.push(newBookForm);
    

    for (let i = 0; i < newBookForm.length; i++){
        myLibrary.push(newBookForm[i]);
    }
    // newBookForm.forEach((x) => {
    //     if(x === input){
    //         myLibrary.push(x.value);
    //     }
    // })


})

/************************************************* Helper Functions ***************************************************/ 
// Hides the bookButton and creates a new form
function createBookForm(...params){
    bookButton.hidden = true;
    libraryContainer.appendChild(newBookForm);
    params.forEach((param) => {
        const formSection = document.createElement("div");
        const formTitle = document.createElement("label");
        formTitle.innerText = param + ": ";
        formTitle.htmlFor = param;
        const formInput = document.createElement("input");
        formInput.name = param;
        formInput.id = param;
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