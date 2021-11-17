import mongoose from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    deafult: 0,
    validate(value) {
      if (value < 0) {
        throw new Error('Age must be a positive number')
      }
    },
  },
  email: {
    type: String,
    unique: true,
    requried: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid')
      }
    },
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
    },
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
})

userSchema.methods.generateAuthToken = async function () {
  const user = this
  const token = jwt.sign({ _id: user._id.toString() }, 'Thisisasecret')
  
  user.tokens.push({ token })
  await user.save()

  return token
}

userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email })
  if (!user) throw new Error('Unable to log in')

  const isMatch = await bcrypt.compare(password, user.password)

  if (!isMatch) throw new Error('Unable to log in')

  return user
}
// Hash the plaintext password before saving

userSchema.pre('save', async function (next) {
  const user = this

  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8)
  }

  next()
})

const User = mongoose.model('User', userSchema)

export default User
