$(function () {

    //1 校验表单
    $('form').bootstrapValidator({
        fields:{

            username:{
                validators:{
                    //不能为空
                    notEmpty:{
                        message:'用户名不能为空'
                    },

                    stringLength: {
                        min:2,
                        max:12,
                        message:'用户名在2-12位之间'
                    },
                    callback:{
                        message:'用户名不存在'
                    }
                }
            },

            password:{
                validators:{
                    //不能为空
                    notEmpty:{
                        message:'密码不能为空'
                    },

                    stringLength: {
                        min:6,
                        max:12,
                        message:'密码在6-12位之间'
                    },
                    callback:{
                        message:'密码错误'
                    }
                }
            }


        },

        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
          },
    })


    //2 阻止默认时间,发送ajax请求 成功跳转页面
    $('form').on('success.form.bv',function (e) { 
        //阻止浏览器默认时间
        e.preventDefault();
        
        //发送ajax请求
        $.ajax({
            type:'post',
            url:'/employee/employeeLogin',
            data:$('form').serialize(),
            success:function (info) { 
                if(info.error===1000){
                   $('form').data('bootstrapValidator').updateStatus('username','INVALID','callback')
                }

                if(info.error===1001){
                    $('form').data('bootstrapValidator').updateStatus('password','INVALID','callback')
                }

                if(info.success){
                   location.href="index.html"
                }
             }
        })
     })


     //3 重置表单 
     $("[type='reset']").on('click',function () { 
        $('form').data('bootstrapValidator').resetForm()
      })
    


  })