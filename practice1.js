// //create book constructor
// function Book(title, author, isbn){
//  this.title = title;
//  this.author = author;
//  this.isbn = isbn
// }

// //create ui constructor
// function UI(){}

// //Add Book To List
// UI.prototype.addToFields = function(book){
//  const list = document.getElementById('book-list')
//  //Create tr Element
//  const row = document.createElement('tr')
//  //Insert Cols
//  row.innerHTML = `
//  <td>${book.title}</td>
//  <td>${book.author}</td>
//  <td>${book.isbn}</td>
//  <td><a href="#" class="delete">X</a></td>
//  `
//  list.appendChild(row)
// }

// UI.prototype.clearFields = function(){
//  document.getElementById('title').value = ''
//  document.getElementById('author').value = ''
//  document.getElementById('isbn').value = ''
// }

// //add event listener
// document.getElementById('book-form').addEventListener('submit', function(e){
//  const title = document.getElementById('title').value,
//  author = document.getElementById('author').value,
//  isbn = document.getElementById('isbn').value;

//  let book = new Book(title, author, isbn)
//  let ui = new UI()
 
//  ui.addToFields(book)

//  ui.clearFields()

//  e.preventDefault();
// })

