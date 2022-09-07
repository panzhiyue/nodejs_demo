/**
 * 缓冲区裁剪
 * buf.slice([start[, end]])
 *  - start - 数字, 可选, 默认: 0
 *  - end - 数字, 可选, 默认: buffer.length
 */

 const slice1=()=>{
  var buffer1 = Buffer.from('runoob');
  // 剪切缓冲区
  var buffer2 = buffer1.slice(0,2);

  //buffer2 content: ru
  console.log("buffer2 content: " + buffer2.toString());
 }

 /**
  * 裁剪功能返回的实际是原始缓存区 buffer 或者一部分，操作的是与原始 buffer 同一块内存区域。
  */
 const slice2=()=>{
   // 裁剪
var buffer_origin = Buffer.from('runoob');
var buffer_slice = buffer_origin.slice(0,2);
//buffer slice content: ru
console.log("buffer slice content: "+buffer_slice.toString());
//buffer origin content: runoob
console.log("buffer origin content: "+buffer_origin.toString());
buffer_slice.write("wirte"); // Write buffer slice

// 裁剪前与原始字符串的改变
//buffer slice content: wi
console.log("buffer slice content: "+buffer_slice.toString());
//buffer origin content: winoob
console.log("buffer origin content: "+buffer_origin.toString());
 }

 slice1();
 slice2();