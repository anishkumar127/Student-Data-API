import mongoose from 'mongoose';
import { DB_URL } from '../config';
const connectionDB = async () => {


     try {
          await mongoose.connect(DB_URL, {
               useCreateIndex: true,
               useFindAndModify: false,
               useNewUrlParser: true,
               useUnifiedTopology: true
          });
          console.log('Database connected.')


     } catch (err) {
          console.log('Database connection failed');
          console.log(err);
          process.exit(1);
     }


}

export default connectionDB;