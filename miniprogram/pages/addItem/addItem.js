// pages/addItem/addItem.js
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
    typeIndex: 0,
    pickerTypes:["会议","出差","休假"],

    startTimeIndex: 0,
    pickerStartTimes:["上午", "下午"],
    startTime: "",

    endTimeIndex:0,
    pickerEndTimes: ["上午", "下午"],
    endTime: "",


    startDate: "",
    endDate: "",
    date: "",
    meetingStartime:"",
    pickerDurations:["0.5H","1H","1.5H","2H","2.5H","3H","3.5H"],
    durationIndex: 3,
    vocationStartDate:"",
    vocationEndDate:"",
    meetingLocation:"",
    meetingMatter:"",
    travelStartDate:"",
    travelEndDate:"",
    travelLocation:"",
    travelMatter:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      startDate: this.getFormDate(0),
      endDate: this.getFormDate(30),
      date: this.getFormDate(0),
      time: "08:00",
      vocationStartDate: this.getFormDate(0),
      vocationEndDate: this.getFormDate(1),
      travelStartDate: this.getFormDate(0),
      travelEndDate: this.getFormDate(1)
    })
  },
  bindTypePickerChange: function(e) {
    this.setData({
      typeIndex: e.detail.value
    })
  },
  bindDurationPickerChange: function(e) {
    this.setData({
      durationIndex: e.detail.value
    })
  },
  getFormDate: function(day) {
    var now = new Date()
    now.setDate(now.getDate() + day)
    var yy = new Date().getFullYear() + ""
    if (now.getMonth() + 1 > 9) {
      var mm = (now.getMonth() + 1) + ""
    }
    else {
      var mm = '0' + (now.getMonth() + 1)
    }
    if (now.getDate() > 9) {
      var dd = now.getDate() + ""
    }
    else {
      var dd = '0' + now.getDate()
    }

    var dt = yy + '-' + mm + '-' + dd

    return dt
  },
  bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function(e) {
    this.setData({
      meetingStartTime: e.detail.value
    })
  },
  getMeetingLocation: function(e) {
    this.setData({
      meetingLocation: e.detail.value
    })
  },
  getMeetingMatter: function(e) {
    this.setData({
      meetingMatter: e.detail.value
    })
  },
  getTravelLocation: function (e) {
    this.setData({
      travelLocation: e.detail.value
    })
  },
  getTravelMatter: function (e) {
    this.setData({
      travelMatter: e.detail.value
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