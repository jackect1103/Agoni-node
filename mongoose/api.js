var article = require('./article');
var story = require('./story');
var { insertUser,
    updateUser,
    deleteUser,
    getAllUser,
    getSingleUser,
    insertAdmin,
    updateAdmin,
    deleteAdmin,
    getAllAdmin } = require('./people');

insertUser({name:'agoni'}).then((res,err)=>{
    console.log(err);
})