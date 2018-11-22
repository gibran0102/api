import React, { Component } from 'react'

import { saveBook } from '../utils'

class Form extends Component {
    constructor(props){
        super(props)
        this.state = {}
        this.hanldeFetch = this.hanldeFetch.bind(this)
        this.hanldeChange = this.hanldeChange.bind(this)
        
    }

    hanldeChange(event){
        let target = event.target.name
        this.setState({[target]: event.target.value})
    }
    
    hanldeFetch(e){
        let { title, author } = this.state
        saveBook(title, author)
        this.forceUpdate()
    }

    render() {
        return(
            <form>
                <input name="title" id="title" type="text" placeholder="title" onChange={this.hanldeChange}/>
                <input name="author" id="author" type="text" placeholder="author" onChange={this.hanldeChange}/>
                <input type="button" value="Guardar" onClick={this.hanldeFetch}/>
            </form>
        )
    }
}

export default Form