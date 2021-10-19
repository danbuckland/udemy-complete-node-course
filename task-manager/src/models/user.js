import mongoose from "mongoose"
import validator from 'validator'

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true
  },
  age: {
    type: Number,
    deafult: 0,
    validate(value) {
      if (value < 0) {
        throw new Error('Age must be a positive number')
      }
    }
  },
  email: {
    type: String,
    requried: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid')
      }
    }
  },
  password: {
    type: String,
    minLength: 6,
    trim: true,
    required: true,
    validate(password) {
      if (password.includes('password')) {
        throw new Error('Password should not be "password"')
      }
    }
  }
})

export default User