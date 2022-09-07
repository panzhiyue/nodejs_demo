/**
 * 将Buffer转换为JSON对象
 * buf.toJSON()
 */

 const toJSON1=()=>{
   let buf=Buffer.from([0x1,0x2,0x3,0x4,0x5])
   const json=JSON.stringify(buf)

   //{"type":"Buffer","data":[1,2,3,4,5]}
   console.log(json);

   const copy=JSON.parse(json,(key,value)=>{
     return value && value.type=='Buffer'?Buffer.from(value.data):value
   })
   //<Buffer 01 02 03 04 05>
   console.log(copy);
 }

 toJSON1();