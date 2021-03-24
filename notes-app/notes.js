import chalk from 'chalk'
import fs from 'fs'

const addNote = (title, body) => {
  const notes = loadNotes()
  const duplicateNote = notes.find((note) => note.title === title)

  if (!duplicateNote) {
    notes.push({
      title,
      body
    })
    saveNotes(notes)
    console.log(chalk.green('New note added'))
  } else {
    console.log(chalk.red('A note already exists with this title'))
  }
}

const removeNote = (title) => {
  const notes = loadNotes()
  const notesToKeep = notes.filter(note => note.title !== title)
  if (notesToKeep.length < notes.length) {
    saveNotes(notesToKeep)
    console.log(chalk.green(`Note successfully removed`))
  } else {
    console.log(chalk.red(`Note with that title does not exist`))
  }
}

const readNote = (title) => {
  const notes = loadNotes()
  const note = notes.find((note) => note.title === title)
  if (note) {
    console.log(chalk.yellowBright(note.title))
    console.log(note.body)
  } else {
    console.log(chalk.redBright('No note exists with that title'))
  }
}

const listNotes = () => {
  console.log(chalk.yellowBright.inverse('Your notes:'))
  loadNotes().forEach((note) => {
    console.log(chalk.yellowBright(note.title))
  })
}

const saveNotes = (notes) => {
  const dataJson = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJson)
} 

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJson = dataBuffer.toString()
    return JSON.parse(dataJson)
  } catch (error) {
    return []
  }
}

export default { addNote, removeNote, listNotes, readNote }
