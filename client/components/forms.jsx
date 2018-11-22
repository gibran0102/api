import React, { Component } from 'react'

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
    
    hanldeFetch(e) {
        let url = './api/books/new'
        e.preventDefault()
        fetch(url, {
            method: 'POST', 
            body: JSON.stringify({'title': this.state.title, 'author': this.state.author}), 
            headers:{
              'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
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