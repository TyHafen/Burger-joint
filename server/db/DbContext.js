import mongoose from 'mongoose'
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);

  Burgers = [{ id: 1, name: 'Mega', price: 10.50 }, { id: 2, name: 'small boi', price: 7.25 }]
}

export const dbContext = new DbContext()
