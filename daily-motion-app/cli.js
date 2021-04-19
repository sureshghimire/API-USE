
const yargs = require('yargs');
const app = require('./app.js')

yargs
.usage('$0: Usage <cmd> [options]')
.command({
    command: 'search',
    desc: 'search the video of different catagories on daily motion',
    builder: (yargs)=>{
        return yargs.options('c',{
            alias: 'catagory',
            describe: 'specify the video to search'
        });
    },
    handler: (argv)=>{
        app.search(argv.catagory)
    }
})
.help('help').argv