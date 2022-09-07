import fs from "fs"
//删除文件
fs.unlink('test.txt', function (err) {
    if (err) {
        return console.error(err);
    }
    console.log("文件删除成功！");

    //删除目录
    fs.rmdir("test/", function (err) {
        if (err) {
            return console.error(err);
        }
    });
});
