import { Student } from '../../models';
import studentSchemaValidate from '../../validator/validation-handler';
const Student_information = {
     async create(req, res, next) {

          const { error } = studentSchemaValidate.validate(req.body);
          if (error) {
               return next(error);
          }

          const { firstName, lastName, place } = req.body;
          const student = new Student({
               firstName,
               lastName,
               place
          });

          try {
               const result = await student.save();
               console.log(result);

          } catch (err) {
               return next(err);
          }
          res.json(student);
     },
     async show(req, res, next) {
          let data;
          try {
               data = await Student.find().select('-updatedAt -__v').sort('_id:-1');
          } catch (err) {
               return next(err);
          }
          console.log(data);
          return res.json(data);

     },
     async destroy(req, res, next) {
          const data = await Student.findOneAndDelete({ _id: req.params.id });
          if (!data) {
               return next(new Error('Nothing to delete there'));
          }
          res.json(data);



     },
     async updateUser(req, res, next) {
          const { error } = studentSchemaValidate.validate(req.body);
          if (error) {
               return next(error);
          }

          const { firstName, lastName, place } = req.body;
          let data;
          try {
               data = await Student.findOneAndUpdate({ _id: req.params.id }, {
                    firstName,
                    lastName,
                    place
               }, { new: true });

          } catch (err) {
               return next(err);
          }
          res.json(data);


     }
}
export default Student_information;


