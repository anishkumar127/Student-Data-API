import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const studentSchema = Schema({

     firstName: { type: String, required: [true, 'Please provide a name'] },
     lastName: { type: String, required: [true, 'Please provide a last name'] },
     place: { type: String, required: [true, 'Please provide a place'] }

}, { timestamps: true });

const Student = mongoose.model('Student', studentSchema, 'Students');

export default Student;