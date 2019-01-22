const {mongoose, Schema} = require('../config/db');

const MenuItemSchema = new Schema({
  name: {type: String, unique: true, index: true, required: true},
  desc: String,
  category: {type: Schema.Types.ObjectId, ref: 'Category'},
  availablity: [String],
  isExpertised: {type: Boolean, default: true},
  isFeasible: Boolean
},
{timestamps: true}
)

const MenuItem = mongoose.model('MenuItem', MenuItemSchema);
module.exports = MenuItem

// async function createMenuItem() {
//   try {
//     const item = await MenuItem.create({name: 'aloo parata', desc: 'all day', category: '5c3ebabfdebd23021f21f510', availablity: ['afternoon', 'morning'], isExpertised: true, isFeasible: true})
//     console.log({item})
//     process.exit(0)
//   } catch (error) {
//     console.error({error})
//     process.exit(0)
//   }
// }
// //
// // createMenuItem()
// // async function createMenuItem() {
// //   const menuItems = await MenuItem.find({isFeasible: true}, '-desc -name')
// //   console.log(menuItems)
// // }
//
// createMenuItem();
