/**
 * 缓冲区长度
 * buf.length;
 * 返回值:返回 Buffer 对象所占据的内存长度。
 */

 const length1=()=>{
  var buffer = Buffer.from('www.runoob.com');
  //  14
  console.log("buffer length: " + buffer.length);
 }

 length1();