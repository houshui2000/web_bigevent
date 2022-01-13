$(function () {
  //单机登陆注册来切换页面
  $('#link_reg').on('click', function () {
    $('.login-box').hide()
    $('.reg-box').show()
  })

  // 点击“去登录”的链接
  $('#link_login').on('click', function () {
    $('.login-box').show()
    $('.reg-box').hide()
  })
  //单机登陆注册来切换页面
  // 密码的
  var form = layui.form,
    layer = layui.layer
  form.verify({
    pwd: [
      /^[\S]{6,12}$/
      , '密码必须6到12位，且不能出现空格'
    ],
    repwd: function (value) {
      let pwd = $('.reg-box [name="password"]').val()
      if (pwd !== value) {
        return '俩次密码不一样'
      }
    }
  })
  //注册表单接口
  $('#form_reg').on('submit', function (e) {
    e.preventDefault()
    var data = {
      username: $('#form_reg [name=username]').val(),
      password: $('#form_reg [name=password]').val()
    }
    $.post('api/reguser',
      data,
      function (res) {
        if (res.status !== 0) {
          return layer.msg(res.message);
        }
        layer.msg('注册成功，请登录！')
        $('#link_login').click()
      })
  })
  //登陆
  $('#form_login').on('submit', function (e) {
    e.preventDefault()
    $.ajax({
      url: '/api/login',
      type: 'POST',
      data: $(this).serialize(),
      success: function (res) {
        console.log(res);
        if (res.status !== 0) {
          return layer.msg('登录失败！')
        }
        layer.msg('成功')
        // localStorage.setItem('token', res.token)
        location.href = '/index.html'
      }
    })
  })
  $('.layui-icon-camera').on('click', function () {
    $('.loginAndRegBox [name=password]').prop('type', 'text')
    console.log(55);
  })
  //jieshu de
})