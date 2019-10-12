/**
 * 爬取人人文学网 中的tab选项框
 * eg:http://www.renrenwenxue.com/html/jingpinjiazuo/jingpinduanpian/
 * 分别爬取文章类别 （书讯，童书，活动）（article_category）
 * BookNews ChildrensBooks activity
 */
const request = require('request');
const cheerio = require('cheerio');
const iconvLite = require('iconv-lite');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/article', { useUnifiedTopology: true, useNewUrlParser: true });

var articleSchema = new mongoose.Schema({          //json的结构;
    articleyId: String,  //定义一个属性articleyId
    title: String,   //定义一个属性articleyId
    category: String,
    articleyImg: String,   //定义一个属性articleyId
    desc: String, //定义一个属性 小说简介
    content: String,//内容
    date: String
});

var articleBg = mongoose.model('article', articleSchema);   //创建model
const baseUrl = 'http://www.renrenwenxue.com/html/jingpinjiazuo/jingpinduanpian/'

function fetchPage(baseUrl) {     //封装了一层函数
    return new Promise((resolve, reject) => {
        console.log('开始抓取数据...');
        request({ url: baseUrl, encoding: null }, function (error, response, body) {
            if (!error && response.statusCode === 200) {
                var buf = iconvLite.decode(body, 'gbk');
                var $ = cheerio.load(buf);//采用cheerio模块解析html
                resolve($);
            }
            reject(error);
        })
    })
}
//主程序开始运行
fetchPage(baseUrl)
    .then(($) => {
        var $date = $('.e2 li');
        var imgUrl = 'http://www.renrenwenxue.com'
        var articleDb = {
            title: "",   //定义一个属性articleyId
            category: "",
            articleyImg: "",   //定义一个属性articleyId
            desc: "", //定义一个属性 小说简介
            content: "",//内容
            date:''
        };
        var category = ["BookNews", "ChildrensBooks", "activity"];
        $date.each((i, obj) => {
            articleDb.title = $(obj).children('a.title').text();
            articleDb.category = category[Math.floor(Math.random() * 3)];
            articleDb.articleyImg = imgUrl + $(obj).children('a.preview').find('img').attr('src');
            articleDb.desc = $(obj).children('p.intro').text();
            articleDb.content = $(obj).children();
            articleDb.date = $(obj).children('span.info').text();
            console.log(articleDb.date);
        })
    }).catch((error) => {
        console.log(error);
    })


