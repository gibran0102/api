import express from 'express'
import Book from '../db/models/book'

const router = express.Router();

router.post('/books/new', (req, res) => {
    let { title, author } = req.body
    let book = new Book({title: title, author: author})
    book.save().then(() => console.log('book save'))
    res.json('ok')
    res.status(200)
    res.end()
})

router.post('/books/delete', (req, res) => {
    let { title } = req.body
    Book.deleteOne({ title: title } ,function(err) {
        if (err) return console.err(err)
        res.status(200)
        res.send(`${title} delete on the data base`)
        res.end()
    })
})


router.get('/books/all', (req, res) => {
    Book.find(function(err, books) {
        if (err) return console.err(err)
        res.status(200)
        res.send(books)
        res.end()
    })
})

router.get('/books/:id', (req, res) => {
    let { id } = req.params
    Book.findOne({title: id}, function(err, book) {
        if(err){
            console.log(err)
            res.status(500)
            res.send('Error')
            res.end()
        }
        else {
            res.contentType('json')
            res.status(200)
            res.json(book)
            res.end()
        }
    })
})


export default router;


      

