import React, { Component } from 'react'

import Form from '../components/forms'
import BookList from './booksList'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }


    render() {
        return (
            <div>
                <Form />
                <BookList/>
            </div>
        )
    }

}

export default App;