const notes = require('./notes');
notes.logg(notes.user, notes.process);

const _ = require('lodash');
const yargs = require('yargs');

const argv = yargs.argv;
const command = process.argv[2];
console.log('Command : ' + command);
console.log('Process : ' + process.argv);
console.log('Yargs : ' + argv);

if(command === 'add') {
    console.log('Adding new Note');
} else if (command === 'list') {
    console.log('Listing all Notes');
} else if (command === 'read') {
    console.log('Reading Note');
}else if (command === 'delete') {
    console.log('Removing Note');
} else {
    console.log('Command not Recognized');
}
 
