$(function () {
  getUserInfo()
  var layer = layui.layer
  $('#btnLogout').on('click', function () {
    layer.confirm('确定退出登录?', { icon: 3, title: '提示' }, function (index) {
      //do something
      // 1. 清空本地存储中的 token
      localStorage.removeItem('token')
      // 2. 重新跳转到登录页面
      location.href = '/login.html'

      // 关闭 confirm 询问框
      layer.close(index)
    })
  })

  //eg2
  // layer.confirm('is not?', function (index) {
  //   //do something

  //   layer.close(index);
  // });
})



function getUserInfo() {
  $.ajax({
    type: "GET",
    url: '/my/userinfo',

    success: function (res) {
      console.log(res);
      if (res.status !== 0) {
        // console.log(res);
        return layer.msg('获取用户信息失败！')
      }
      // console.log(res);

      renderAvatar(res.data)
    }

  })
}
function renderAvatar(user) {
  let name = user.username || user.nickname
  console.log(name[0]);
  $('#welcome').html('欢迎&nbsp;&nbsp;' + name)
  if (user.user_pic !== null) {
    $('.layui-nav-img').attr('src', user.user_pic).show()
    $('.text_avatar').hide()
  } else {
    $('.layui-nav-img').hide()
    let first = name[0].toUpperCase()
    $('.text_avatar').html(first).show()
  }
}
// git add .
// git commit -m complete admin index.html page
// git push

// git checkout master
// git merge index

// git push origin master

// git branch user
// git checkout user    git branch user -M
