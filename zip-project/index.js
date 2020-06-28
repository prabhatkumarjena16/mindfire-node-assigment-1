var glob = require("glob");
const zipfolder = require("zip-a-folder");
var fs = require("fs");

//moves the $file to $dir2
const moveFile = (file, dir2) => {
  //include the fs, path modules
  var fs = require("fs");
  var path = require("path");

  //gets file name and adds it to dir2
  var f = path.basename(file);
  var dest = path.resolve(dir2, f);

  fs.rename(file, dest, (err) => {
    if (err) throw err;
    else console.log("Successfully moved");
  });
};

//var oldPath = "old/path/file.txt";
//var newPath = "new/path/file.txt";
let i = 0;
glob("test/**/*.*", (err, files) => {
  files.forEach(async (file) => {
    moveFile(file, "./newFolder");
    i++;
    console.log(i);
    if (i === files.length) {
      await zipfolder.zip("./newFolder", "./data.zip");
      fs.rmdir("./newFolder", () => {
        console.log("File Deleted");
      });
    }
  });
});
