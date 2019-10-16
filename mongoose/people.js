var collections = require('./collections');
var userCol = collections.userCol;
var managerCol = collections.managerCol;

//添加用户信息
var insertUser = userCol.insert(param);

//修改用户信息
var updateUser = userCol.update(oldParam, newParam);

//删除用户信息
var deleteUser = userCol.remove(param);

//获取用户信息
var getAllUser = userCol.find();

//获取单个用户信息
var getSingleUser = userCol.find(param)

//添加管理员信息 
var insertAdmin = managerCol.insert(param);

//修改管理员信息
var updateAdmin = managerCol.update(oldParam, newParam);

//删除管理员信息
var deleteAdmin = managerCol.remove(param);

//获取管理员信息
var getAllAdmin = managerCol.find();



export default {
    insertUser,
    updateUser,
    deleteUser,
    getAllUser,
    getSingleUser,
    insertAdmin,
    updateAdmin,
    deleteAdmin,
    getAllAdmin
}