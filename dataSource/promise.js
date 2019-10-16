/** 
 * 爬取小说网站数据
 * request 使用第三方工具包
 * cheerio 解析html模块 类似于jquery
 * iconv-lite 是用于处理数据乱码
 * mongoose 操作mongodb数据库模块;
 * 
 * 爬取的网站
 * eg: https://www.wodeshucheng.com/
 * 
 * https://www.wodeshucheng.com/book_1/
 * 
 * （玄幻，都市，武侠，文学，穿越，悬疑，历史，游戏）
 *  - Fantasy urban knightErrant literature passThrough suspense history game
*/
const request = require('request');
const cheerio = require('cheerio');
const iconvLite = require('iconv-lite');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/agoniDB', { useUnifiedTopology: true, useNewUrlParser: true });

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

var storyBg = mongoose.model('story', storySchema);   //创建model
const baseUrl = 'https://www.wodeshucheng.com/book_'

var book_id = 50;
var maxId = 100;

function fetchPage(baseUrl, book_id) {     //封装了一层函数
    var url = `${baseUrl}` + `${book_id}` + '/';
    console.log('开始抓取数据...');
    console.log('url=' + url);
    var data = request({ url: url, encoding: null }, function (error, response, body) {
        console.log('require 内部');
        if (!error && response.statusCode === 200) {
            console.log('response.statusCode===200');
            var buf = iconvLite.decode(body, 'gbk');
            var $ = cheerio.load(buf);//采用cheerio模块解析html
            var $storyContent = $('.articleTop');   //读取出当前小说的详细信息;
            var categorys = ['Fantasy', 'urban', 'knightErrant', 'literature', 'passThrough', 'suspense', 'history', 'game'];
            var gender = ['boy', 'girl'];
            var story = {
                storyId: `${book_id}`,
                name: '',
                author: '',
                storyImg: '',
                role: '',
                clickRaid: '',
                desc: '',
                category: '',
                sex: ''
            }
            $storyContent.each((i, obj) => {
                console.log('each');
                story.name = $(obj).children('div.articleTitle').find('h2').text();
                story.author = $(obj).children('div.articleTitle').find('span').text().split(' ')[0];
                story.storyImg = $(obj).children('div.bookImg').find('img').attr('src');
                story.role = $(obj).children('div.role').find('b').text();
                story.clickRaid = $(obj).children('div.words').find('span').eq(2).text().split(' ')[2];
                story.desc = $(obj).children('p').text();
                story.category = categorys[Math.floor((Math.random() * 10) - 1)];
                story.sex = gender[Math.floor((Math.random() * 2))];
            })
            var storyList = new storyBg(data);
            storyList.save(err => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('success');
                }
            })
        }
    })

    return new Promise((resolve, reject) => {
        if (data) {
            reject("出错了");
        }
        console.log(data instanceof Object);
        resolve(data);
    });
}
function funThen(data) {
    console.log('调用funThen');
    var storyList = new storyBg(data);
    storyList.save(err => {
        if (err) {
            console.log(err);
        } else {
            console.log('success');
        }
    })
    ++book_id;
    if (book_id < maxId) {
        console.log("book_id:" + book_id);
        fetchPage(baseUrl, book_id).then(funThen)
    }
}
fetchPage(baseUrl, book_id)
    .then(funThen)
    .catch((error) => {
        console.log(error);
    })


