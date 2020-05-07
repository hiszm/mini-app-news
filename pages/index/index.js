// pages/detail/detail.js
var common = require('../../utils/common.js')


//当前页数和是否加载结束

var isEnd = false
var currentPage = 1

Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsList: [],
    loading: false,
    loadMoreText: "加载更多"
  },
  goToDetail:function(e){
    //获取携带data-id的数据
    let id = e.currentTarget.dataset.id
    //console.log(e)
    //携带新闻ID进行页面跳转
   common.goToDetail(id)

  },
 //获取指定页数的新闻列表

  getNewsByPage: function (page) {
    var that = this
    wx.request({
      url: common.getNewList,
      data: {
        page: page
      },
      success: function (res) {
        //获取新闻总数
        let total = res.data.total
        //追加更多新闻数据
        let list = that.data.newsList.concat(res.data.list)
        that.setData({
          newsList: list,
          total: total
        })
        //如果已经显示全部新闻
        if (list.length == total) {
          isEnd = true
          that.setData({
            loadMoreText: "已无更多"
          })
        }
        else {
          currentPage++
        }
      }
    })
  },
  loadMoreContent: function () {
    //有个延迟的效果
    //如果新闻尚未全部加载完毕，并且按钮不处于正在加载的状态
    if (!isEnd && !this.data.loading) {
      //让按钮出现加载动画
      this.setData({
        loading: true
      })
      setTimeout(() => {
        //加载当前页面新闻数据
        this.getNewsByPage(currentPage)
        //停止按钮加载动画
        this.setData({
          loading: false
        })
      }, 1000)
    }
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNewsByPage(1)

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})