/**
 * 写入缓冲区
 * buf.write(string[, offset[, length]][, encoding])
 *  - string - 写入缓冲区的字符串。
 *  - offset - 缓冲区开始写入的索引值，默认为 0 。
 *  - length - 写入的字节数，默认为 buffer.length
 *  - encoding - 使用的编码。默认为 'utf8' 。
 */


 const writeBuffer1=()=>{
   let buf=Buffer.alloc(256);
   let len=buf.write("www.baidu.com");

   //写入字节数：13
   console.log("写入字节数：" + len)
 }

 writeBuffer1();

