// pages/calander/calander.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    hidden: true,
    loading: false,
    color: '#fff',
    background: '#732FEA',
    show: true,
    animated: false,
    weekDayArr: ["一", "二", "三", "四", "五", "六", "日"],
    //七天，每一天上午的状态，0位正常工作，1为休假，2位出差
    mDayArray: [0, 0, 0, 0, 1, 0, 0],
    //七天，每一天上午的状态，0位正常工作，1为休假，2位出差
    aDayArray: [0, 2, 0, 0, 0, 0, 0],
    //七天，每一天上午四个时间段的空闲情况，0为空闲，1为繁忙
    mArray: [[0, 0, 1, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
    //七天，每一天下午四个时间段的空闲情况，0为空闲，1为繁忙
    aArray: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  gotoAddItem: function(e) {
    wx.navigateTo({
      url: '../addItem/addItem'
    })
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