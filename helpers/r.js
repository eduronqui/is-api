var childProcess = require('child_process');

var r = {
	/**
	 * Runs a process
	 * @arg {string} script Name of the script
	 * @arg {string} args Script arguments (optional)
	 * @arg {function} callback Function(stream)
	 */
	runChildProcess: function (script, args, callback) {
		if (typeof args === 'function') {
			callback = args;
			args = '';	
		}
		
		var cmd = 'Rscript ../r-scripts/' + script + ' ' + args;
		childProcess.exec(cmd, function (error, stdout, stderr) {

			callback(stdout);
		});
	},
};
module.exports = r;