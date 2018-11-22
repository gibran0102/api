import React from 'react'


function List(props) {
    let { books } = props
    let listbook = books.map((book) => 
        <div key={book._id}>
            <li>
                <span>{book.title}, </span>
                <span>{book.author}</span>
            </li>
        </div>
    ) 
    return (
        <div>
            {listbook}
        </div>
    )
}

export default List