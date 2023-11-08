import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { CarSchema } from '../models/Car.js';
import { CommentSchema } from '../models/Comment.js';
import { ModificationSchema } from '../models/Modification.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Cars = mongoose.model('Car', CarSchema);
  Comments = mongoose.model('Comment', CommentSchema);
  Modifications = mongoose.model('Modification', ModificationSchema);
}

export const dbContext = new DbContext()
