import mongoose, { Schema } from 'mongoose'

const listSchema = new Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  address: {
    type: String
  },
  phone: {
    type: String
  },
  email: {
    type: String
  },
  city: {
    type: String
  },
  uf: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

listSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      name: this.name,
      description: this.description,
      address: this.address,
      phone: this.phone,
      email: this.email,
      city: this.city,
      uf: this.uf,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('List', listSchema)

export const schema = model.schema
export default model
