console.log('Starting notes.js');

var addNote = (title,body) => {
    console.log('Adding note', title, body);
};
var getNote = (title) => {
    console.log('get note', title);
};
var removeNote = (title) => {
    console.log('remove note', title);
};
var getAll = () => {
    console.log('getting all notes...');
};
var greatContrib = () => {
    console.log('great contrib...');
};

module.exports = {
    addNote,
    getAll,
    getNote,
	greatContrib,
    removeNote
};