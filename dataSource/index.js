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
const iconvLite = require('iconv-lite');
const cheerio = require('cheerio');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/agoniDB', { useUnifiedTopology: true, useNewUrlParser: true });      //链接数据库;

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

var book_id = 25;
var maxId = 50;

fetchPage(baseUrl, book_id);           //主程序开始运行

function fetchPage(baseUrl, book_id) {     //封装了一层函数
    console.log('开始爬取数据...');
    console.log('爬取数据需要时间，请耐心等候'+`${book_id}`);

    startRequest(baseUrl, book_id);
}

function startRequest(baseUrl, book_id) {
    var url = `${baseUrl}` + `${book_id}` + '/';

    if (book_id > maxId) return '爬取结束';

    request({ url: url, encoding: null }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            var buf = iconvLite.decode(body, 'gbk');
            var $ = cheerio.load(buf);//采用cheerio模块解析html
            var $storyContent = $('.articleTop');   //读取出当前小说的详细信息;

            try {
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
                var categorys = ['Fantasy','urban','knightErrant','literature','passThrough','suspense','history','game'];
                var gender = ['boy','girl'];

                $storyContent.each(function (i, obj) {
                    story.name = $(obj).children('div.articleTitle').find('h2').text();
                    story.author = $(obj).children('div.articleTitle').find('span').text().split(' ')[0];
                    story.storyImg = $(obj).children('div.bookImg').find('img').attr('src');
                    story.role = $(obj).children('div.role').find('b').text();
                    story.clickRaid = $(obj).children('div.words').find('span').eq(2).text().split(' ')[2];
                    story.desc = $(obj).children('p').text();
                });
                
                story.category = categorys[Math.floor((Math.random()*10)-1)];
                story.sex = gender[Math.floor((Math.random()*2))];
                // console.log(story);
                var storyList = new storyBg(story);  //存入mongodb;
                storyList.save(function (err) {
                    if (err) {
                        console.log(err);
                    }
                    console.log('success');
                });
                book_id++;
                fetchPage(baseUrl, book_id);

            } catch (err) {
                console.log(err)
            }
        }
    })
}