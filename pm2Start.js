var fs = require('fs');
var path = require('path');
var pm2GlobalPath = path.resolve(process.env.APPDATA, 'npm/node_modules/pm2');
var pm2 = require(pm2GlobalPath);

if (!process.env.JSBIN_CONFIG) {

    var filepath = path.join(__dirname, 'config.node.json');

    try {
        if (fs.statSync(filepath).isFile()) {
            process.env.JSBIN_CONFIG = filepath;
        }
    } catch (error) {
        // Ignore if file wasn't found.
        if (error.errno !== 34 /* ENOENT */) {
            throw error;
        }
    }
}

var instances = process.env.INSTANCES || 1;
var serverName = process.env.SERVER_NAME || 'jsbin';
var maxMemory = process.env.MAX_MEMORY || '390M';

pm2.connect(function() {
  pm2.start({
    name: serverName,
    script: 'lib/app.js',
    'exec_mode': 'cluster',
    instances: instances,
    'max_memory_restart': maxMemory
  }, function() {
    console.log(
      'pm2 started %s with %s instances at %s max memory',
      serverName,
      instances,
      maxMemory
    );
    pm2.disconnect();
  });
});