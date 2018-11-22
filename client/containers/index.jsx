import React, { Component } from 'react'

import Form from '../components/forms'
import BookList from './booksList'
import { runInThisContext } from 'vm';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            books: []
        }
    }

    render() {
        return (
            <div>
                <Form />
                <BookList books={ this.state.books}/>
            </div>
        )
    }

}

export default App;