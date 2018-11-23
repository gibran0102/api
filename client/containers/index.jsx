import React, { Component } from 'react'

import Form from '../components/forms'
import BookList from './book'


class App extends Component {
    constructor(props){
        super(props)
        
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