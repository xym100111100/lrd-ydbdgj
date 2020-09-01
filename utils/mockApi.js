
const userInfo = {
  '18278904219': {
    code: 0,
    data: {
      token: "14a2d93b-6ada-4cc2-aa8c-b3a6d67ba2a4",
      info: {
        phone: '18278904219',
        busiPass: 1,
        adminUserNo: "1268793259442966528",
        userName: '杰克',
        type: 1,
        roles: [{
          roleNo: "111",
          roleName: "admin",
        }]
      }
    }
  },
  '18278904218': {
    code: 0,
    data: {
      token: "14a2d93b-6ada-4cc2-aa8c-b3a6d67ba2a4",
      info: {
        busiPass: 0,
        adminUserNo: "1268793259442966528",
        phone: '18278904218',
        type: 1,
        userName: '小明',
        roles: [{
          roleNo: "111",
          roleName: "edit",
        }]
      }
    }
  },
  '18278904217': {
    code: 0,
    data: {
      token: "14a2d93b-6ada-4cc2-aa8c-b3a6d67ba2a4",
      info: {
        adminUserNo: "1268793259442966528",
        phone: '18278904218',
        type: 1,
        busiPass: 0,
        userName: '小明',
        roles: [{
          roleNo: "111",
          roleName: "edit",
        }]
      }
    }
  }
}
const MockData = {
  '/login/wxoidLogin': (data) => {
    console.log(data)
    return userInfo[data.phone]
  },
  '/add/busi': (data) => {
    return {
      code: 0,
      msg: '创建成功'
    }
  },
  '/user/getUserWork': (data) => {
    return {
      code: 0,
      data: {
        personnelManagement: false,
        classSelect: false,
      }
    }
  },
  '/user/getMyBusi': (data) => {
    return {
      code: 0,
      data: {
        name: '尔莫科技',
        contact: '杰克',
        phone: '18278904219',
        address: '北京',
      }
    }
  },
  '/user/modifyMyBusi': (data) => {
    return {
      code: 0,
      data: {
        busiNo: 1,
        name: '尔莫科技',
        contact: '杰克',
        phone: '18278904219',
        address: '北京',
      }
    }
  },
  '/user/setUserType': (data) => {

    return {
      msg: '设置用户类型成功',
      code: 0,
    }
  },
  '/login/getOpenid': (data) => {
    return {
      "code": 0,
      "data": {
        "isNewUser": 0,
        "openid": "890808080980980980"
      },
      "msg": "获取成功"
    }
  },
  '/login/wxoidLogin': (data) => {
    return {
      "code": 0,
      "data": {
        "cell": "18278904219",
        "companyNo": "1234",
        "companyRole": 1,
        "companyType": 1,
        "status": 1,
        "userNo": "123",
        "userType": 1,
        "username": "umbrella",
      token: "14a2d93b-6ada-4cc2-aa8c-b3a6d67ba2a4",

      },
      "msg": "获取成功"
    }
  },
  '/company/getUserWork': (data) => {
    return {
      "code": 0,
      "data": {
        "applicationBindingCount": 0,
        "wasteTypeSelect": false
      },
      "msg": "获取成功"
    }
  },
  '/company/getMyBatteryCompany': (data) => {
    return {
      "code": 0,
      "data": {
        "companyAddress": "广西南宁青秀区",
        "companyContactsCell": "18278904219",
        "companyContactsName": "小明",
     //   "companyName": "产废单位",
         "companyName": "收集单位",
        "companyNo": "1234",
        //"companyType": 1,
        "companyType": 2
      },
      "msg": "获取成功"
    }
  },
  '/wasteType/getAllWasteType': (data) => {
    return {
      "code": 0,
      "data": [
        {
          "defaultMaxValue": 100,
          "wasteTypeName": "废铅蓄电池",
          "wasteTypeNo": "1"
        },
        {
          "defaultMaxValue": 100,
          "wasteTypeName": "废矿物油",
          "wasteTypeNo": "2"
        }
      ],
      "msg": "获取成功"
    }
  },
  '/wasteType/getCompanyWasteType': (data) => {
    return {
      "code": 0,
      "data": [
        {
          "defaultMaxValue": 100,
          "wasteTypeName": "废铅蓄电池",
          "wasteTypeNo": "1"
        },
        {
          "defaultMaxValue": 100,
          "wasteTypeName": "废矿物油",
          "wasteTypeNo": "2"
        }
      ],
      "msg": "获取成功"
    }
  },
  '/standingBook/getStandingBookList': (data) => {
    return {
      "code": 0,
      "data": [
        {
          "produceQuantity": 0,
          "produceWeight": 0,
          "remainderQuantity": 0,
          "remainderWeight": 0,
          "standingBookNo": "123",
          "transferOutQuantity": 0,
          "transferOutWeight": 0,
          "userName": "杰克",
          "userNo": "123",
          "wasteTypeName": "废铅蓄电池",
          "wasteTypeNo": "1"
        },
        {
          "produceQuantity": 0,
          "produceWeight": 0,
          "remainderQuantity": 0,
          "remainderWeight": 0,
          "standingBookNo": "123",
          "transferOutQuantity": 0,
          "transferOutWeight": 0,
          "userName": "杰克",
          "userNo": "123",
          "wasteTypeName": "废矿物油",
          "wasteTypeNo": "2"
        }
      ],
      "msg": "string"
    }
  },
  '/login': (data) => {
    return {
      "code": 0,
      "data": {
        "cell": "18278904219",
        "companyNo": "1234",
        "companyRole": 1,
       // "companyType": 1,
       "companyType": 2,
        "status": 1,
        "userNo": "123",
        "userType": 1,
        "username": "umbrella",
        token: "14a2d93b-6ada-4cc2-aa8c-b3a6d67ba2a4",
      },
   
      "msg": "获取成功"
    }
  },
  '/login/phoneLogin': (data) => {
    return {
      "code": 0,
      "data": {
        "cell": "18278904219",
        "companyNo": "1234",
        "companyRole": 1,
       //  "companyType": 1,
      "companyType": 2,
        "status": 1,
        "userNo": "123",
        "userType": 1,
        "username": "umbrella",
        token: "14a2d93b-6ada-4cc2-aa8c-b3a6d67ba2a4",
      },
   
      "msg": "获取成功"
    }
  },
  '/transport/getTransportList': (data) => {
    return {
      "code": 0,
      "data": [
        {
          "damagedType": 1,
          "transportCompanyNo": "1234",
          "transportNo": "1",
          "transportQuantity": 10,
          "transportTime": "2020-08-17",
          "transportUserNo": "123",
          "transportWeight": 0,
          "warehouseCompanyNo": "12345",
          "warehouseOutNo": "1",
          "wasteTypeName": "废矿物油",
          "wasteTypeNo": "2",
          "warehouseCompanyName": "产废单位",

        },
        {
          "damagedType": 1,
          "transportCompanyNo": "1234",
          "transportNo": "1",
          "transportQuantity": 10,
          "transportTime": "2020-08-17",
          "transportUserNo": "123",
          "transportWeight": 0,
          "warehouseCompanyNo": "12345",
          "wasteTypeName": "废铅蓄电池",
          "wasteTypeNo": "1",
          "warehouseCompanyName": "产废单位",
        }
      ],
      "msg": "string"
    }
  },
  '/standingBook/getStandingBookDetail': (data) => {
    return {
      "code": 0,
      "data": [
        {
          "damagedType": 1,
          "recordAction": 1,
          "recordDay": "2020-02-20",
          "recordQuantity": 10,
          "recordWeight": 10,
          "standingBookDetailNo": "11",
          "standingBookNo": "1",
          "wasteTypeNo": "1"
        },
        {
          "damagedType": 1,
          "recordAction": 2,
          "recordDay": "2020-02-20",
          "recordQuantity": 10,
          "recordWeight": 10,
          "standingBookDetailNo": "11",
          "standingBookNo": "1",
          "wasteTypeNo": "2"
        }
      ],
      "msg": "string"
    }
  },
  '/warehouse/getWarehouseListByTimeInterval': (data) => {
    return {
      "code": 0,
      "data": [
        {
          "applyCompanyName": "申请单位",
          "applyCompanyNo": "1",
          "applyQuantity": 10,
          "applyTime": "2020-08-17",
          "applyUserName": "申请人",
          "applyUserNo": "1",
          "applyWeight": 10,
          "receiveQuantity": 10,
          "receiveTime": "2020-08-17",
          "receiveWeight": 10,
          "state": 0,
          "warehouseNo": "1",
          "wasteTypeName": "废铅蓄电池",
          "wasteTypeNo": "1",
        }
      ],
      "msg": "string"
    }
  },
  '/warehouse/getWarehouseHistory': (data) => {
    return {
      "code": 0,
      "data": [
        {
          "applyCompanyName": "申请单位",
          "applyCompanyNo": "1",
          "applyQuantity": 10,
          "applyTime": "2020-08-17",
          "applyUserName": "申请人",
          "applyUserNo": "1",
          "applyWeight": 10,
          "receiveQuantity": 10,
          "receiveTime": "2020-08-17",
          "receiveWeight": 10,
          "state": 0,
          "warehouseNo": "1",
          "wasteTypeName": "废铅蓄电池",
          "wasteTypeNo": "1",
        }
      ],
      "msg": "string"
    }
  },
  '/company/getBatteryCompanyByName': (data) => {
    return {
      "code": 0,
      "data": [
        // {
        //   "companyAddress": "北京",
        //   "companyContactsCell": "18278904219",
        //   "companyContactsName": "杰克",
        //   "companyName": "收集单位",
        //   "companyNo": "123",
        //   "companyType": 2
        // },
        {
          "companyAddress": "北京",
          "companyContactsCell": "18278904219",
          "companyContactsName": "杰克",
          "companyName": "转运中心",
          "companyNo": "123",
          "companyType": 3
        }
      ],
      "msg": "string"
    }
  },

}

function MockApi(url, data) {
  let res = MockData[url]
  if (res) {
    return res(data)
  }
}



module.exports = MockApi