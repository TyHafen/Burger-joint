import mongoose from 'mongoose'
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);

  Burgers = [{ id: 1, name: 'Mega', price: 10.50 }, { id: 2, name: 'Small boi', price: 7.25 }, { id: 3, name: 'med boi', price: 8.50 }]
}

export const dbContext = new DbContext()
