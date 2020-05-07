//获取新闻列表接口
var getNewList = 'http://localhost/myNews/Home/Index/getNewsList'
//根据新闻ID获取新闻内容接口
var getNewById = 'http://localhost/myNews/Home/Index/getNewsById'

//跳转新闻浏览页面
function goToDetail(id) {
  wx.navigateTo({
    url: '../detail/detail?id=' + id,
  })
}
//暴露接口
module.exports = {
  getNewList: getNewList,
  getNewById: getNewById,
  goToDetail: goToDetail
}