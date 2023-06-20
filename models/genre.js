// fiction, non-fiction, history, military, etc.
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
  name: { type: String, required: true, maxLength: 100, minLength: 3 },
 
 
});
// virtuals are used to create a property that is not stored in MongoDB.
// can combine fields, set format as well as deconstruct fields into multiple properties

// Virtual for genres's URL
GenreSchema.virtual("url").get(function () {
    // We don't use an arrow function as we'll need the this object
        return `/catalog/genre/${this._id}`;
});



// Export model
module.exports = mongoose.model("Genre", GenreSchema);
