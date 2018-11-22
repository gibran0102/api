import React from 'react'

import List from '../components/booklist'

class BookList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            books :[]
        }

        this.request = this.request.bind(this)
    }
    
    componentDidMount(){
        this.request()
    }

    

    shouldComponentUpdate(nextProps, nextState){
        if(nextState.books != this.state.books)
            this.request()
            return true
        return false
    }

    request() {
        let is = this
        fetch('./api/books/all')
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            is.setState({books: data})
        })
    }



    render() {
        return(
            <List books={this.state.books}/>
        )
    }
}

export default BookList;