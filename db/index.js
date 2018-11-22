import mongoose from 'mongoose'
import { connection } from 'mongoose'


function ConnectDB(){

    try {  
        mongoose.connect('mongodb://localhost/library');        
        let db = connection;
        db.on('error', console.error.bind(console, 'connection error: '));
        db.once('open', function() {
            console.log('connection with database')
        })
    } catch (error) {
        console.log(err)
    }

}


export default ConnectDB