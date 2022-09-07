import fs from "fs";

//读取目录
fs.readdir("test", function (err, files) {
    if (err) {
        return console.error(err);
    }
    files.forEach(function (file) {
        console.log(file);
    });
});

//文件是否存在
fs.exists('test.txt', function (exists) {
    if (exists) {
        console.log("文件存在！");
    } else {
        console.log("文件不存在！");
    }
});

// 异步读取
fs.readFile('test.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("异步读取: " + data.toString());
});



//获取文件信息
fs.stat('test.txt', function (err, stats) {
    console.log(stats);

    console.log("是否为文件:" + stats.isFile());         //true
    console.log("是否为目录:" + stats.isDirectory());         //false
    console.log("是否为块设备:" + stats.isBlockDevice());         //false
    console.log("是否为字符设备:" + stats.isCharacterDevice());         //false
    console.log("是否为软链接:" + stats.isSymbolicLink());         //false
    console.log("是否为FIFO:" + stats.isFIFO());         //false
    console.log("是否为Socket :" + stats.isSocket());         //false
})
