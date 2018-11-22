import mongoose from 'mongoose'
import { Schema } from 'mongoose'


const BookShema = new Schema({
    title: String,
    author: String
})

const Book = mongoose.model('Book', BookShema)

export default Book