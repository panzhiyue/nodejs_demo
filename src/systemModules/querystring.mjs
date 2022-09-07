import querystring from 'querystring'

console.log(querystring);

let str1 = "username=panzhiyue&password=123456";
let str2 = "username%3Dpanzhiyue%26password%3D123456";
let obj = { username: 'panzhiyue', password: '123456' };

//将 URL 查询字符串 `str` 解析为键值对的集合。
console.log(querystring.decode(str1));
console.log(querystring.parse(str2));

//通过遍历对象的自身属性从给定的 `obj` 生成 URL 查询字符串。
console.log(querystring.encode(obj));
console.log(querystring.stringify(obj));

//方法以对 URL 查询字符串的特定要求进行了优化的方式对给定的 `str` 执行 URL 百分比编码。
console.log(querystring.escape(str2));
//方法在给定的 `str` 上执行 URL 百分比编码字符的解码。
console.log(querystring.unescape(str1));

//把str转为Buffer
console.log(querystring.unescapeBuffer(str1));