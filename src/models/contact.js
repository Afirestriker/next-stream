import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true
    }
);

/**
 * Contact - The name of the model. This should be a singular, capitalized version of the collection name
 * contactSchema - The schema for the model. This is an object that defines the structure of the documents in the collection
 * contacts - The name of the collection in MongoDB. This is optional, but it is generally considered best practice to specify it explicitly.
 */
const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema, 'contacts');

export default Contact;