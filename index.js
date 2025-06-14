const getdata=require('./mongodb')
// getdata().then((res)=>{
//      res.find({}).toArray().then((data)=>{
//        console.log(data)
//      })
// })
// console.log(getdata())

const main = async ()=>{
  let data=await getdata()
  data=await data.find().toArray()
  console.log(data)

}
main()