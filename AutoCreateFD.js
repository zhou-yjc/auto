const fs = require('fs');
const path=require('path');
const os=require('os');
const platform=os.platform();
function mkf(MyPath,FileData){
	if(platform=='win32'){
		MyPath=MyPath.replace(/\//g,"\\");
	}
	if(FileData!=false){
		var dirname=path.dirname(MyPath);
	}else{
		dirname=MyPath;
	}
	var dir=dirname.split(path.sep);
	var dirn='';
	dir.forEach(function(e){
		dirn+=e+'/';
		if(!fs.existsSync(dirn)){
			fs.mkdirSync(dirn);
		}
	})
	if(FileData!=false){
		fs.writeFile(MyPath, FileData, (err) => {
		  if (err) throw err;
		  console.log('It\'s saved!');
		});
	}
}
