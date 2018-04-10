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
                    }
                }
            }
        }
    })


});