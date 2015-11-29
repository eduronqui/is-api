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
		
		var cmd = 'Rscript {root}\\rscripts\\{script} {args}'
			.replace('{root}', process.cwd())
			.replace('{script}', script)
			.replace('{args}', args);
		
		childProcess.exec(cmd, function (error, stdout, stderr) {
			if (error)
				console.log(error);
				
			callback(stdout);
		});
	},
};
module.exports = r;