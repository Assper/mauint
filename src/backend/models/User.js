    
import mongoose from 'mongoose'
import uuid from 'uuid/v1'
import {
  uuidValidator,
  emailValidator,
  userNameValidator,
  passwordHashValidator
} from '../helpers/validators'

const { Schema } = mongoose
const UserSchema = new Schema({
  uuid: { type: String, required: true, validate: uuidValidator, default: uuid },
  name: { type: String, required: true, validate: userNameValidator },
  email: { type: String, required: true, validate: emailValidator },
  password: { type: String, required: true, validate: passwordHashValidator },
  salt: { type: String, required: true },
  rememberToken: { type: String }
})

UserSchema.index({ uuid: 1 }, { name: 'uuidIndex', unique: true })
UserSchema.index({ email: 1 }, { name: 'emailIndex', unique: true })

export default mongoose.model('User', UserSchema)
