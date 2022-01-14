$(function () {
  var form = layui.form
  // alert(99)
  form.verify({
    nickname: function (value) {
      if (value.length > 6) {
        return '昵称长度必须在 1 ~ 6 个字符之间！'
      }
    }
  })
  initUserInfo()
  function initUserInfo() {
    $.ajax({
      url: '/my/userinfo',
      type: 'GET',
      success: function (res) {
        console.log(res);
        if (res.status !== 0) {
          return layer.msg('获取用户信息失败！')
        }
        form.val('formUserInfo', res.data)
      }
    })
  }
  $('#btnReset').on('click', function (e) {
    e.preventDefault()
    initUserInfo()
  })



})