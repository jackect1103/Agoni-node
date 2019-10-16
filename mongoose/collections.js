var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/agoniDB', { useUnifiedTopology: true, useNewUrlParser: true })
// 创建用户数据表
var user = new mongoose.Schema({
    userName: { type: String, require },
    password: { type: String, require },
    birthday:String,
    registerDate:String
})
var userCol = mongoose.model('user', user)

// 创建管理员数据表
var manager = new mongoose.Schema({
    userName: { type: String, require },
    password: { type: String, require },
    birthday:String,
    registerDate:String
})
var managerCol = mongoose.model('manager', manager)

// 创建小说数据表用户后台
var storySchema = new mongoose.Schema({          //json的结构;
    storyId: String,  //定义一个属性storyId
    name: String,   //定义一个属性storyId
    author: String,  //定义一个属性storyId
    storyImg: String,   //定义一个属性storyId
    role: String, //定义一个属性主角
    clickRaid: String, //定义一个属性点击率
    desc: String, //定义一个属性 小说简介
    category: String,
    sex: String
});
var storyCol = mongoose.model('story', storySchema);   //创建model

// 创建文章数据表用户后台
var articleSchema = new mongoose.Schema({          //json的结构;
    articleyId: String,  //定义一个属性articleyId
    title: String,   //定义一个属性articleyId
    category: String,
    articleyImg: String,   //定义一个属性articleyId
    desc: String, //定义一个属性 小说简介
    content: String,//内容
    date: String
});
var articleCol = mongoose.model('article', articleSchema);   //创建model

export default {
    userCol,
    managerCol,
    storyCol,
    articleCol
};