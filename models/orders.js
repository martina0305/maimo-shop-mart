import mongoose, { mongo } from 'mongoose';
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  total: { type: Number },
  products: { type: Array },
  clientID: { type: String },
  /*timestamps: true,*/
});

export default mongoose.model('Order', orderSchema, 'Orders');