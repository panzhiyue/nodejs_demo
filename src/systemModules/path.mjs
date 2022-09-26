import path from "path";

console.log("属性:");
//平台的文件路径分隔符，'\\' 或 '/'。
console.log("平台的文件路径分隔符:" + path.sep);
//平台的分隔符, ; or ':'.
console.log("平台的分隔符:" + path.delimiter);
//提供上述 path 的方法，不过总是以 posix 兼容的方式交互。
console.log("输出属性:" + path.posix);
//提供上述 path 的方法，不过总是以 win32 兼容的方式交互。
console.log("输出属性:" + path.win32);

console.log("方法:");
// 规范化路径，注意'..' 和 '.'。
console.log(
  "normalization : " + path.normalize("/test/test1//2slashes/1slash/tab/..")
); //\test\test1\2slashes\1slash

// 连接路径
console.log(
  "joint path : " + path.join("/test", "test1", "2slashes/1slash", "tab", "..")
); //\test\test1\2slashes\1slash

// 转换为绝对路径
console.log("resolve : " + path.resolve("main.js")); //Z:\PZYDemo\NodeJS_Demo\SystemModule\path\main.js

// 是否为绝对路径
console.log("isAbsolute : " + path.isAbsolute("main.js"));

// 返回路径中代表文件夹的部分
console.log(
  "dirname : " + path.dirname("/test/test1//2slashes/1slash/tab/main.js")
);

// 返回路径中的最后一部分
console.log(
  "basename : " + path.basename("/test/test1//2slashes/1slash/tab/main.js")
);
console.log(
  "basename : " +
    path.basename("/test/test1//2slashes/1slash/tab/main.js", ".js")
);
console.log("basename : " + path.basename("/test/test1//2slashes/1slash/tab"));

// 路径中文件的后缀名
console.log("extname : " + path.extname("main.js")); //.js

// 返回路径字符串的对象
console.log(
  "parse : ",
  path.parse("Z:\\PZYDemo\\NodeJS_Demo\\SystemModule\\pathmain.js")
);

// 从对象中返回路径字符串，和 path.parse 相反
console.log(
  "format : " +
    path.format({ root: "", dir: "", base: "", ext: ".js", name: "test" })
);
