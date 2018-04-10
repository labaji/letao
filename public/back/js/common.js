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


})