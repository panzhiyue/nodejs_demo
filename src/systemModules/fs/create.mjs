import fs from "fs"
//创建目录
fs.mkdir("test/", function (err) {
  if (err) {
      return console.error(err);
  }
  console.log("目录创建成功。");
});

//创建文件
fs.open("test.txt", "w+", function (err) {
  if (err) {
      return console.error(err);
  }
  console.log("文件创建成功。");
});