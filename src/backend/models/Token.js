import mongoose from 'mongoose'

import {
  uuidValidator
} from '../helpers/validators'

const TokenSchema = new mongoose.Schema({
  uuid: { type: String, required: true, validate: uuidValidator },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  updatedAt: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now }
})

TokenSchema.index({ createdAt: 1 }, { name: 'createdAtIndex', expires: 60 * 60 * 24 * 30 })
TokenSchema.index({ uuid: 1 }, { name: 'uuidIndex', unique: true })

export default mongoose.model('Token', TokenSchema)
