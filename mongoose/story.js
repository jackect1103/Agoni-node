var collections = require('./collections');
var storyCol = collections.storyCol;

// 获取所有小说
var findAllStory = storyCol.find({})


//删除某篇小说
var deleteStory = storyCol.remove(query)

//添加小说
var insertStory = storyCol.insert(document)
 

//修改小说
var updateStory = storyCol.update(oldParam, newParam)

export default {
    findAllStory,
    deleteStory,
    insertStory,
    updateStory
}
