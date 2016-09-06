module.exports = {
    entry: {
    	app: ["./src/app.js"]
    },
    output: {
    	path: './public',
	filename: 'main.js'
    },
    devServer: {
	    inline: true,
	    contentBase: './public',
	    port: 3000
	}
}