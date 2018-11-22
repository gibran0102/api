import React from 'react'

import { getBooks } from '../utils'
import List from '../components/booklist'

class BookList extends React.PureComponent {
    constructor(props){
        super(props)
        this.state = {
            books: []
        }
    }

    componentWillMount() {
        this.fetchBook()
    }


    fetchBook() {
        let _this = this
        fetch('./api/books/all')
        .then(function(res) { return res.json() })
        .then(function(data) {
            return _this.setState({books: data})
        })
    }

    render() {
        return(
            <List books={this.state.books}/>
        )
    }
}

export default BookList;