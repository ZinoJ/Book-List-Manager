function Book (title, author, isbn ) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

function UI (){}

UI.prototype.addBookToList = function (book){
  const list = document.getElementById('book-list')
  const row = document.createElement('tr')
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" class="delete">X</a></td>
  `
  list.appendChild(row)
}

UI.prototype.clearFields = function(){
  document.getElementById('title').value = ''
  document.getElementById('author').value = ''
  document.getElementById('isbn').value = ''
}

UI.prototype.showAlert = function (message, className){
  const div = document.createElement('div')
  div.className = `alert ${className}`
  div.appendChild(document.createTextNode(message))
  const form = document.getElementById('book-form')
  const container = document.querySelector('.container')
  container.insertBefore(div, form)

  setTimeout(function(){
    document.querySelector('.alert').remove()
  }, 3000)
}

UI.prototype.deleteBook = function (target){
  if (target.className === 'delete') {
    target.parentElement.parentElement.remove()
  }
}

document.getElementById('book-form').addEventListener('submit', function(e){
  const title = document.getElementById('title').value
  const author = document.getElementById('author').value
  const isbn = document.getElementById('isbn').value

  const book = new Book(title, author, isbn)
  const ui = new UI()

  if (title === '' || author === '' || isbn === '' ) {
    ui.showAlert("You need to fill the fields" , 'error')
    
  }
  else {

    ui.showAlert('Book Added Successfully', 'success')
    ui.addBookToList(book)
    ui.clearFields()
  
  }
e.preventDefault()
})

document.getElementById('book-list').addEventListener('click', function(e){
  const ui = new UI()
  ui.deleteBook(e.target)
  ui.showAlert('Book Deleted Successfully', 'success')

  e.preventDefault();
})