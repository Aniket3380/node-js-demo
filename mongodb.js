const {MongoClient} =require('mongodb')
const path="mongodb://localhost:27017"
const database="e-com"
const client=new MongoClient(path)

async function getdata(){
    const result=await client.connect()
    const db=result.db(database)
    return db.collection('product')
 
    
}
module.exports=getdata