import React, { Component } from 'react'

import { getBooks } from '../utils'
import List from '../components/book'

class BookList extends Component {
    constructor(props){
        super(props)
        this.state = {
            books: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        setInterval(() => {
            fetch('./api/books/all')
            .then(res => res.json())
            .then((result) => {
                console.log(result)
                this.setState({
                    isLoaded: true,
                    books: result
                })
            })
        }, 2000)
    }
    
    render() {
        const { isLoaded, books } = this.state
        if(!isLoaded) {
            return <div>Loading...</div>
        }else {
            return(
                <List books={books}/>
            )
        }
    }
}

export default BookList;