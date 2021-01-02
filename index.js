const express = require('express')
const fs = require('fs')

const app = express()
const port = 3333
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));

const categories = [];
const books = [];

function setBooks(){
     fs.readFile('store.json', 'utf8', function (err, data) {
          var jsonData = JSON.parse(data)
          jsonData.forEach(function(book){
               books.push(book)
          })
     })
     
}

function setCategories(){
     fs.readFile('categories.json', 'utf8', function (err, data) {
          var jsonData = JSON.parse(data)
          jsonData.forEach(function(book){
               categories.push(book)
          })
     })
}


setCategories()
setBooks()


const banner = [
     {id:1, title:'', description:'', image:'banner1.jpg'},
     {id:2, title:'', description:'', image:'banner2.jpg'},
     {id:3, title:'', description:'', image:'banner3.jpg'},
     {id:4, title:'', description:'', image:'banner4.jpg'},
     {id:5, title:'', description:'', image:'banner5.jpg'},
     {id:6, title:'', description:'', image:'banner6.jpg'},
]





app.get('/', function(req, res){
     const model = { categories, banner }
     res.render('index', model)
})

app.get('/books/:category', function(req, res){

     const cat_books= books.filter(function(book){
          return book.categories.includes(req.params.category)
     })

     const category = categories.filter(function(cat){
          return cat.slug == req.params.category
     })
     
     const model = {categories, cat_books, category}

     res.render('books', model)
})


app.get('/book/:isbn', function(req, res){

     const book = books.filter(function(bk){
          return bk.isbn == req.params.isbn
     })

     const model = {categories, cisbn}

     res.render('book', model)
})



app.listen(process.env.PORT || port, function(){
     console.log('Server is running')
})