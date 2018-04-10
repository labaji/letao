$(function () {

    //1.校验表单
    $('form').bootstrapValidator({

        //要求 用户名不能为空
        //      密码不能为空  长度在6-12位
        //配置校验规则
        fields: {
            username: {
                validators: {
                    //不能为空
                    notEmpty: {
                        message: '用户名不能为空'
                    },

                    //长度校验
                    stringLength: {
                        min: 2,
                        max: 6,
                        message: '用户名长度在2-6位'
                    },
                    //专门用来提示
                    callback :{
                        message:'用户名错误'
                    }
                },

            },

            password: {
                validators: {
                    notEmpty: {
                        message: '密码不能为空'
                    },

                    //长度校验
                    stringLength: {
                        min: 6,
                        max: 12,
                        message: '密码长度在6-12位'
                    },
                     //专门用来提示
                     callback :{
                        message:'密码错误'
                    }
                }
            }
        },

        //配置小图标
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
          },
        
    })

    //2.点击登录阻止默认行为,发送ajax请求 正确跳转到主页 
    $('form').on('success.form.bv',function (e) { 
        //组织浏览器默认行为
        e.preventDefault();
        //发送请求
        $.ajax({
            type:'post',
            url:'/employee/employeeLogin',
            data:$('form').serialize(),
            datatype:'json',
            success:function (info) { 
                if(info.error===1000){
                    $("form").data('bootstrapValidator').updateStatus('username','INVALID','callback')
                }

                if(info.error===1001){
                    $("form").data('bootstrapValidator').updateStatus('password','INVALID','callback')
                }

                if(info.success){
                    //成功跳转
                    location.href ="index.html"
                }
             }
        })
     })


     //3.重置表单  清除所有样式

     $("[type='reset']").on('click',function () { 

        $("form").data('bootstrapValidator').resetForm();
      })


});