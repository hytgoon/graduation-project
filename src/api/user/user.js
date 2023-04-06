import request from '@/request/request'

/** 查询所有用户信息 */
export function getUserList(page,pageSize) {
  return request({
    url: '/user/findAll?page=' + page + '&pageSize=' +  pageSize,
    method: 'get'
  })
}

/** 新增用户 */
export function addUser(data) {
  return request({
    url: '/user/save',
    method: 'post',
    data: data
  })
}

/** 删除用户信息 */
export function delUser(id) {
  return request({
    url: '/user/delete?id=' + id,
    method: 'delete'
  })
}

/** 修改用户信息 */
export function editUser(data) {
  return request({
    url: '/user/update',
    method: 'put',
    data: data
  })
}

/** 根据账号称查询用户信息 */
export function getUserInfo(loginName) {
  return request({
    url: '/user/fingByLoginName?=' + loginName,
    method: 'get'
  })
}

/** 根据用户名查询用户信息 */
export function getUserListByName(userName, page, pageSize) {
  return request({
    url: '/user/findByUserName?userName=' + userName + '&page=' + page + '&pageSize=' + pageSize,
    method: 'get'
  })
}