const {mongoose, Schema} = require('../config/db');

const menuItemSchema = new Schema({
  name: {type: String, unique: true, index: true, required: true},
  desc: String,

  // category: {type: Schema.Types.ObjectId, ref: 'Category'}
},

{timestamps: true}
)

const MenuItem = mongoose.model('MenuItem', menuItemSchema);

async function createMenuItem() {
  try {
    const item = await MenuItem.create({name: 'dosa'})
    console.log({item})
    process.exit(0)
  } catch (error) {
    console.error({error})
    process.exit(0)
  }
}

createMenuItem()
