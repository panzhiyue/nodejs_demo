import fs from "fs";
//写入文件
fs.writeFile('test.txt', '我是通 过fs.writeFile 写入文件的内容', function (err) {
    if (err) {
        return console.error(err);
    }
    console.log("数据写入成功！");
});


//最近写入文件
fs.appendFile('test.txt', '（我是追加的内容）', function (err) {
    if (err) {
        return console.error(err);
    }
    console.log("数据追加成功！");
});
