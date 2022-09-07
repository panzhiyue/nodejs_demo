/**
 * 缓冲区比较
 * buf.compare(otherBuffer);
 *  - otherBuffer - 与 buf对象比较的另外一个 Buffer 对象。
 * 返回值:返回一个数字，表示 buf 在 otherBuffer 之前(<0)，之后(>0)或相同(0)。
 */

 const compare1 =()=>{
   let buffer1 = Buffer.from('ABC')
   let buffer2 = Buffer.from('ABCD')
   let result = buffer1.compare(buffer2);

   //ABC在ABCD之前
   if(result < 0){
     console.log(buffer1+'在'+buffer2+'之前');
   }else if(result==0){
    console.log(buffer1+'与'+buffer2+'相同');
   }else {
    console.log(buffer1 + " 在 " + buffer2 + "之后");
   }
 }

 compare1();