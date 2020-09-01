
const TokenKey = 'X-Auth-Token'
const AdminUserNoKey = 'AdminUserNoKey'
const UsernameKey = 'UsernameKey'

const UserRoleKey = 'UserRoleKey'

const UserInfoKey = "UserInfoKey"

const UserOpenIdKey = "UserOpenIdKey"




export function getUserInfo() {
  
  return wx.getStorageSync(UserInfoKey)
}

export function setUserInfo(UserInfo) {
  return  wx.setStorageSync(UserInfoKey, UserInfo)
}

export function removeUserInfo() {
  return wx.removeStorageSync(UserInfoKey)
}


export function getToken() {
  
  return wx.getStorageSync(TokenKey)
}

export function setToken(token) {
  return  wx.setStorageSync(TokenKey, token)
}

export function removeToken() {
  return wx.removeStorageSync(TokenKey)
}




export function getAdminUserNo() {
  return wx.getStorageSync(AdminUserNoKey)
}

export function setAdminUserNo(AdminUserNo) {
  return  wx.setStorageSync(AdminUserNoKey, AdminUserNo)
}

export function removeAdminUserNo() {
  return wx.removeStorageSync(AdminUserNoKey)
}


export function getUsername() {
  return wx.getStorageSync(UsernameKey)
}

export function setUsername(username) {
  return  wx.setStorageSync(UsernameKey, username)
}

export function removeUsername() {
  return wx.removeStorageSync(UsernameKey)
}



export function getUserRole() {
  return wx.getStorageSync(UserRoleKey)
}

export function setUserRole(userRole) {
  return  wx.setStorageSync(UserRoleKey, userRole)
}

export function removeUserRole() {
  return wx.removeStorageSync(UserRoleKey)
}



export function getUserOpenIdKey() {
  return wx.getStorageSync(UserOpenIdKey)
}

export function setUserOpenIdKey(userOpenIdKey) {
  return  wx.setStorageSync(UserOpenIdKey, userOpenIdKey)
}

export function removeUserOpenIdKey() {
  return wx.removeStorageSync(UserOpenIdKey)
}


