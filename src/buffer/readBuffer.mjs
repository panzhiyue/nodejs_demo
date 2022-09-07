/**
 * 从缓冲区读取数据
 * buf.toString([encoding[, start[, end]]])
 *  - encoding - 使用的编码。默认为 'utf8' 。
 *  - start - 指定开始读取的索引位置，默认为 0。
 *  - end - 结束位置，默认为缓冲区的末尾。
 */

const readBuffer1=()=>{
  let buf=Buffer.alloc(26)
  for(let i=0;i<26;i++)
  {
    buf[i]=i+97;
  }
  //abcdefghijklmnopqrstuvwxyz
  console.log( buf.toString('ascii'));  
  //abcde
  console.log( buf.toString('ascii',0,5));  
  //abcde 
  console.log( buf.toString('utf8',0,5));
  //abcde    
  console.log( buf.toString(undefined,0,5)); 
 }

readBuffer1();