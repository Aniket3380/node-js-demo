const getdata=require('./mongodb')

async function main(){
    const db= await getdata();
    const result=await db.insertOne(
        {name:"aniket",brand:"vipo",color:"red"}
    )

    console.log(result)
    if(result.acknowledged){
        console.log("data inserted")
    }
}
main()