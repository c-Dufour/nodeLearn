console.log('Starting app...');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');
const argv = yargs.argv;
  
var command = process.argv[2];

switch (command) {
    case 'dev':
    notes.addNote(argv.title,argv.body);
        break;
    case 'list':
        notes.getAll();
        break;
    case 'remove':
        notes.removeNote(argv.title);
        break;
    case 'read':
    notes.getNote(argv.title);
        break;
		case 'great contrib':
	notes.greatContrib();
	break;
    default:
        console.log('command not recognized');
        break;
}
 