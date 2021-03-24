import notes from './notes.js'
import yargs from 'yargs'

yargs.version('1.1.1')

// Add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demand: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demand: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body)
  }
})

// Remove command
yargs.command({
  command: 'remove',
  describe: 'Remove specified note',
  builder: {
    title: {
      describe: 'Title of note to be removed',
      demand: true,
      type: 'string'
    }
  },
  handler(argv) { 
    notes.removeNote(argv.title)
  }
})

// List command
yargs.command({
  command: 'list',
  describe: 'List notes',  
  handler() {
    notes.listNotes()
  }
})

// Read command
yargs.command({
  command: 'read',
  describe: 'Read notes',
  builder: {
    title: {
      describe: 'Title of note to read',
      demand: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.readNote(argv.title)
  }
})

yargs.parse()