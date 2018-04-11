$(function () {


    //禁用进度环
    NProgress.configure({
        showSpinner: false
    })
    //进度条开始
    $(document).ajaxStart(function () { 
        NProgress.start();
     })
    

    $(document).ajaxStop(function () { 
        NProgress.done();
     })


     //二级菜单的显示与隐藏;
     $('.second').prev().on('click',function () {
         $(this).next().slideToggle()
       })

    
       //给icon_1 注册点击事件;
    $('.icon_1').on('click',function () { 

        //让侧边栏隐藏
        $('.lt_aside').toggleClass('now')
        //让main的padding-left 变为0;
        $('.lt_main').toggleClass('now')
     })


})