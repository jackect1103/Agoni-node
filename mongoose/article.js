var collections = require('./collections');
var articleCol = collections.articleCol;
// 获取所有文章
var findAllArticle  = articleCol.find({})

//删除某篇文章
var deleteArticle = articleCol.remove(query)

//添加文章
var insertArticle = articleCol.insert(document)

//修改文章
var updateArticle = articleCol.update(oldParam, newParam)


export default {
    findAllArticle,
    deleteArticle,
    insertArticle,
    updateArticle
}