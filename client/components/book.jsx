import React, { Component } from 'react'

import { deleteBook } from '../utils'

class List extends Component{
    constructor(props){
        super(props)
        this.state = {}
        
        this.hanldeRemove = this.hanldeRemove.bind(this)
    }

    hanldeRemove(e) {
        let id = e.target.id
        e.preventDefault()
        deleteBook(id)   
    }

    render() {
        let { books } = this.props
        let listbook = books.map((book) => 
            <div key={book._id}>
                <li>
                    <span>{book.title},</span>
                    <span>{book.author}</span>
                    <span><a href="" id={ book._id } onClick={ this.hanldeRemove}> Delete </a></span>
                </li>
                
            </div>
        ) 
        return (    
            <div>
                { listbook }
            </div>
        
        )
    }
}

export default List