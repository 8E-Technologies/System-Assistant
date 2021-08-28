FileSync = require('fs');

FileSync.readdir('./Commands/', (err, files) => {
  if (err) {console.error(err)}
  
  files.forEach(file => {
    
    if (!file.endsWith('.js')) {return}
    
    let Event = require(`./Commands/${file}`);
    
    let Name = file.split('.')[0];
    console.log(`File: ${Name}.js`);

  });
});
