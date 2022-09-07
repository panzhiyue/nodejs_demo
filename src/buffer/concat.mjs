/**
 * 缓冲区合并
 * Buffer.concat(list[, totalLength])
 *  - list - 用于合并的 Buffer 对象数组列表。
 *  - totalLength - 指定合并后Buffer对象的总长度。
 */

 const concat1=()=>{
  let buffer1 = Buffer.from('菜鸟教程');
  let buffer2 = Buffer.from(('www.runoob.com'));
  let buffer3 = Buffer.concat([buffer1,buffer2]);
  //buffer3 内容: 菜鸟教程www.runoob.com
  console.log("buffer3 内容: " + buffer3.toString());
 }

 concat1();