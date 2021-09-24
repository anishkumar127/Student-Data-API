const home = {
     getData(req, res, next) {

          console.log('hello anish ');
          res.json('hey anish')
          next();
     }
}
export default home;