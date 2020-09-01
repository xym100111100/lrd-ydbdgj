var API = require('../../utils/api.js')
//require("../../static/js/manifest"), require("../../static/js/vendor"), require("../../static/js/pages/login/main");
var app = getApp();


Page({
  data: {
    env: !1,
    disabled: !0,
    cell: "",
    verifyCode: "",
    countdownFlag: !1,
    countdownVal: "获取验证码",
    timerFn: null,
    smsCode: "",
    token: "",
    miniVer: '1.4.7',
  },
  onLoad: function (a) {
    wx.setNavigationBarTitle({
      title: '登录'
    });
    this.init()
  },
  init() {

  },
  handleInput(val) {
    let value = {}
    value[val.target.dataset.eventname] = val.detail.value
    this.setData(
      value
    )
  },

  getAuthCode() {
    console.log(this.data)
   
    API.request('/login/getAuthCode', {}, 'get', (res) => {

    })
  }
});