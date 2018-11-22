export function saveBook(_title, _author) {
    let url = './api/books/new'
    let data  = { title: _title, author: _author }
    fetch(url, {
        method: 'POST', 
        body: JSON.stringify(data), 
        headers:{
          'content-Type': 'application/json'
        }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
}

export function getBooks (_this) {
    fetch('./api/books/all')
    .then(function(res) {
        return res.json()
    })
    .then(function(data) {
        return _this.setState({books: data})
    })
}

export function deleteBook(_id) {
    let url = './api/books/delete'
    let data = { id: _id }
    fetch(url,{
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'content-Type': 'application/json'
        }
    }).then(res => res.json())
    .catch(error => console.error('Error: ', error))
    .then(response => console.log('Sucess:', response));
}

