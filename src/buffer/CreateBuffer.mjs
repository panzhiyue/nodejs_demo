/**
 * 创建Buffer的四种方式
 * 1.new Buffer()  不推荐使用
 * 2.Buffer.from
 * 3.Buffer.alloc(size[, fill[, encoding]])  //安全,效率低
 * 4.Buffer.alloUnsafe //不安全,效率高
 */



/**
 * 1.new Buffer()方式【不推荐】
 */
const createBuffer1 = () => {
  console.log("--------------1.new Buffer()方式【不推荐】 Start----------------")
  let buf = new Buffer(10); //这种方式性能非常差

  //<Buffer 00 00 00 00 00 00 00 00 00 00>
  console.log(buf);  

  console.log("--------------1.new Buffer()方式【不推荐】 End----------------")
};

/**
 * 2.Buffer.from
 */
const createBuffer2=()=>{
  console.log("--------------2.Buffer.from Start----------------")
  
  // 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
  const buf1 = Buffer.from([1, 2, 3]);

  // 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer。
  const buf2 = Buffer.from('tést');

  // 创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer。
  const buf3 = Buffer.from('tést', 'latin1');

  //<Buffer 01 02 03>
  console.log(buf1);
  //<Buffer 74 c3 a9 73 74>
  console.log(buf2);
  //<Buffer 74 e9 73 74>
  console.log(buf3);

  console.log("--------------2.Buffer.from End----------------")
}

/**
 * 3.Buffer.alloc(size[, fill[, encoding]])方式【推荐使用】
 */
const createBuffer3=()=>{
  console.log("--------------3.Buffer.alloc End----------------")

  //Buffer.alloc()方式创建Buffer实例对象比new Buffer()稍强
  let buf=Buffer.alloc(10,"李连杰","utf8"); //alloc是在堆中开辟一块空间，但是这块空间没有被用过
  //李连杰�
  console.log(buf.toString());

  console.log("--------------3.Buffer.alloc End----------------")
}

/**
 * 4.Buffer.alloUnsafe
 */
const createBuffer4=()=>{
  //Buffer.allocUnsafe()方式创建Buffer实例对象，改方式性能最强
  // 但返回的 Buffer 实例可能包含旧数据，
  // 因此需要使用 fill() 或 write() 重写。
  //allocUnsafe输出的buffer是16进制

  const buf = Buffer.allocUnsafe(10);
  //<Buffer 81 40 95 9c d4 29 00 00 00 00>
  console.log(buf);
  buf.fill(0);
  //<Buffer 00 00 00 00 00 00 00 00 00 00>
  console.log(buf);
}
createBuffer1();
createBuffer2();
createBuffer3();
createBuffer4();