// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


jQuery(function($) {
  "use strict";
   /* ----------------------------------------------------------- */
   /*  Fixed header


 $("#navbar-toggle").click(function(){
        $(this).toggleClass('close-bar');
        if ($(".navbar-collapse").hasClass("in")) {
             $(".navbar-collapse").removeClass('in').addClass("out");
        } else {
            $(".navbar-collapse").removeClass('out').addClass("in");
        }
   })
 homeFooter.$wrapperEl.transitionEnd(function () {
        if ((location1 - location2) > 20) {
            homeFooter.setTranslate(0);
        }
    });
    
 /* ----------------------------------------------------------- */

   $(window).on('mousewheel', function(event){
        if (event.deltaY > 0) {
             $('.home-page .fh-header').css({'position':'fixed'});
             $('.inside-page .fh-header').css({'position':'fixed'});

        } else {
            $('.home-page .fh-header').css({'position':'absolute'});
            $('.inside-page .fh-header').css({'position':'absolute'});

        }
   });
    
     if ($(window).width() > 1200) {
          $(".navbar-collapse .navbar-nav").on("mouseenter",function(){
             $("#header").addClass('in-enter');
          }).on("mouseleave",function(){
             $("#header").removeClass('in-enter');
          });   
     } else {
        $(".navbar-collapse .navbar-nav").off("mouseenter").off("mouseleave");
    }
  
  /* ----------------------------------------------------------- */
   /*  首页
   var culturePage = $('#home-fullpage').fullpage({
        //options here
        licenseKey:"OPEN-SOURCE-GPLV3-LICENSE",
        navigation:true,
        sectionsColor: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff'],
        lazyLoading: true,
     });
   /* ----------------------------------------------------------- */
    // home-fullpage
    var lastTranslate = 0;
    var homefullpage = new Swiper('#home-fullpage', {
        direction: 'vertical',
        speed:800,
        mousewheel:{
            releaseOnEdges:true
        },
        lazy: {
            loadPrevNext: true
        },
        simulateTouch:false,
        on:{
            init: function(){
                swiperAnimateCache(this); //隐藏动画元素 
                swiperAnimate(this); //初始化完成开始动画
            },
            slideChangeTransitionStart: function(){ 
                swiperAnimate(this);
                if (this.activeIndex >= 1) {

                  $("#fh-logo-img").attr("src","/images/logo02.png");
                  if(!$("#header").hasClass("fh-dark-header")) $("#header").addClass("fh-dark-header");
                  if(!$("#home-toggle-btn").hasClass("fh-dark-btn")) $("#home-toggle-btn").addClass("fh-dark-btn");

                } else {
                    $("#fh-logo-img").attr("src","/images/logo-white.png");
                    $("#header").removeClass("fh-dark-header");
                    $("#home-toggle-btn").removeClass("fh-dark-btn");
              }
            }, 
            slideChangeTransitionEnd: function(){ 
                 //每个slide切换结束时也运行当前slide动画
                //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
            } 
        }
    });
    // home-banner
    var homeBanner = new Swiper('#home-banner', {
        mousewheel: false,
        simulateTouch: false,
        autoplay:true,
        pagination: {
          el: '#home-banner-pagination',
          clickable: true,
        },
        loop:true,
        navigation:{
          nextEl: '.home-page-swiper-button-next',
          prevEl: '.home-page-swiper-button-prev',
        },
         on:{
            init: function(){
                swiperAnimateCache(this); //隐藏动画元素 
                swiperAnimate(this); //初始化完成开始动画
            }, 

            slideChangeTransitionStart: function(){ 
                swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
                //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
            } 
        }
    });

     // home-page2
    var homePage2 = new Swiper('#home-page2-swiper', {
        mousewheel: false,
        simulateTouch:false,
        navigation:{
          nextEl: '.home-page-swiper-button-next',
          prevEl: '.home-page-swiper-button-prev',
        },
        on:{
            init: function(){
                swiperAnimateCache(this); //隐藏动画元素 
                swiperAnimate(this); //初始化完成开始动画
            }, 
            slideChangeTransitionStart: function(){ 
                swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
                //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
            } 
        }
    });



    // home-footer
    var location1 = 0,location2 = 0;
    var homeFooter = new Swiper('#home-footer', {
         direction: 'vertical',
         freeMode: true,
         freeModeMinimumVelocity : 1,
          //speed:800,  
         simulateTouch: false,   
         mousewheel:{
            releaseOnEdges:false
         },
         on:{
            progress:function(progress){
                if (progress == 0) {
                    $("#home-toggle-btn").show();
                    homefullpage.mousewheel.enable();
                } else {
                    $("#home-toggle-btn").hide();
                    homefullpage.mousewheel.disable();
                }
            },
            setTranslate:function(translate){
                if (translate < (-$("#footerView").height())) {
                    homeFooter.setTranslate(-$("#footerView").height());
                    location1 = location2 = $("#footerView").height();
                    $("#footerView").offset().top;
                } else {
                     location1 = location2;
                     location2 = Math.abs(translate);
                }
                 if (translate > 0) {
                   homefullpage.slideTo(homefullpage.slides.length - 2,800,false);  
                }
            }
        },
    });

    $("#home-footer .swiper-slide").css({height:"auto"});
     $("#home-footer .swiper-slide.home-page2").css({height:"100%"});
    $("#home-footer .swiper-slide .page-content").css({height:$(document).height() - 187});


    // home-toggle-btn
    $("#home-toggle-btn").click(function(){
        if (homefullpage.progress < 1) {
            homefullpage.slideNext();
        } else {
            homeFooter.slideNext();
            $("#home-toggle-btn").hide();
        }   
    })

// 首页--服务网络
var geoCoordMap = {
    '深圳总部': [114.040869, 22.565638],
    "上海": [121.626691, 31.268675],
    '江苏': [118.766535, 32.085065],
    '苏州': [120.644155, 31.285365],
    '浙江': [120.215401, 30.268806],
    '宁波': [121.523992, 29.87385],
    '安徽': [117.278362, 31.865647],
    '广州': [113.395822, 23.13302],
    '深圳': [114.037269,22.565695],
    '广西': [108.373611, 22.816631],
    '海南': [110.328359, 20.032549],
    '湖南': [113.024055, 28.200808],
    '河南': [113.674203, 34.773611],
    '江西': [115.852801, 28.692831],
    '福建': [119.275432, 26.056117],
    '湖北': [114.259201, 30.584774],
    '四川': [104.07051, 30.5595],
    '云南': [102.74443, 25.088479],
    '贵州': [106.626665, 26.653114],
    '重庆': [106.573339, 29.537724],
    '西藏': [91.093585, 29.623951],
    '北京': [116.388499, 39.978343],
    '河北': [114.540649, 38.015559],
    '内蒙': [111.664055, 40.819209],
    '山西': [112.564387, 37.80913],
    '天津': [117.171611, 39.11974],
    '山东': [117.080904, 36.678527],
    '青岛': [120.468269, 36.106275],
    '辽宁': [123.441232,41.820299],
    '大连': [121.66885,38.928929],
    '吉林': [125.256058, 43.891109],
    '黑龙江': [126.616674, 45.758702],
    '陕西': [108.904045, 34.25095],
    '新疆': [87.633637, 43.794624],
    '甘肃': [103.781324, 36.075213],
    '青海': [101.761236, 36.64348],
    '宁夏': [106.253066, 38.501134]
};

    var phoneNumbers = {
        "上海": { "上海分公司": 18566630029, "泛华天衡": 18566630053 },
        "江苏": { "江苏分公司": 18566630061 },
        "苏州": { "苏州分公司": 18566630061 },
        "浙江": { "浙江分公司": 18566630086 },
        "宁波": { "宁波分公司": 18566630039 },
        "安徽": { "安徽分公司": 18566630363 },
        "广州": { "广州分公司": 18566630162 },
        "深圳": { "深圳分公司": 18566630139 },
        "广西": { "广西分公司": 18566630189 },
        "海南": { "海南分公司": 18566630193 },
        "湖南": { "湖南分公司": 18566630230 },
        "河南": { "河南分公司": 18566630231 },
        "江西": { "江西分公司": 18566630235 },
        "福建": { "福建分公司": 18566630251 },
        "湖北": { "湖北分公司": 18566630262 },
        "四川": { "四川分公司": 18566630289 },
        "云南": { "云南分公司": 18566630290 },
        "贵州": { "贵州分公司": 18566630253 },
        "重庆": { "重庆分公司": 18566630338 },
        "西藏": { "西藏分公司": 18566631351 },
        "北京": { "北京分公司": 18566630359 },
        "河北": { "河北分公司": 18566630269 },
        "内蒙": { "内蒙分公司": 18566630365 },
        "山西": { "山西分公司": 18566630368 },
        "天津": { "天津分公司": 18566630385 },
        "山东": { "山东分公司": 18566638523 },
        "青岛": { "青岛分公司": 18566630389 },
        "辽宁": { "辽宁分公司": 18566630390 },
        "大连": { "大连分公司": 18566630390 },
        "吉林": { "吉林分公司": 18566630393 },
        "黑龙江": { "黑龙江分公司": 18566638405 },
        "陕西": { "陕西分公司": 18566630292 },
        "新疆": { "新疆分公司": 18566630295 },
        "甘肃": { "甘肃分公司": 18566630353 },
        "青海": { "青海分公司": 18566630356 },
        "宁夏": { "宁夏营业部": 18566638517 }
    };
var SZData = [
    [{ name: '深圳总部' }, { name:'上海',value:95}],
    [{ name: '深圳总部' }, { name:'江苏',value:90}],
    [{ name: '深圳总部' }, { name:'苏州',value:80}],
    [{ name: '深圳总部' }, { name:'浙江',value:70}],
    [{name:'深圳总部'},{name:'宁波',value:60}],
    [{name:'深圳总部'},{name:'安徽',value:50}],
    [{name:'深圳总部'},{name:'广州',value:40}],
    [{name:'深圳总部'},{name:'深圳',value:30}],
    [{name:'深圳总部'},{name:'广西',value:20}],
    [{name:'深圳总部'},{name:'海南',value:10}],
    [{name:'深圳总部'},{name:'湖南',value:20}],
    [{name:'深圳总部'},{name:'河南',value:20}],
    [{name:'深圳总部'},{name:'江西',value:20}],
    [{name:'深圳总部'},{name:'福建',value:20}],
    [{name:'深圳总部'},{name:'湖北',value:20}],
    [{name:'深圳总部'},{name:'四川',value:20}],
    [{name:'深圳总部'},{name:'云南',value:20}],
    [{name:'深圳总部'},{name:'贵州',value:20}],
    [{name:'深圳总部'},{name:'重庆',value:20}],
    [{name:'深圳总部'},{name:'西藏',value:20}],
    [{name:'深圳总部'},{name:'北京',value:20}],
    [{name:'深圳总部'},{name:'河北',value:20}],
    [{name:'深圳总部'},{name:'内蒙',value:20}],
    [{name:'深圳总部'},{name:'山西',value:20}],
    [{name:'深圳总部'},{name:'天津',value:20}],
    [{name:'深圳总部'},{name:'山东',value:20}],
    [{name:'深圳总部'},{name:'青岛',value:20}],
    [{name:'深圳总部'},{name:'辽宁',value:20}],
    [{name:'深圳总部'},{name:'大连',value:20}],
    [{name:'深圳总部'},{name:'吉林',value:20}],
    [{name:'深圳总部'},{name:'黑龙江',value:20}],
    [{name:'深圳总部'},{name:'陕西',value:20}],
    [{name:'深圳总部'},{name:'新疆',value:20}],
    [{name:'深圳总部'},{name:'甘肃',value:20}],
    [{name:'深圳总部'},{name:'青海',value:20}],
    [{name:'深圳总部'},{name:'宁夏',value:20}]
];

var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
            res.push({
                fromName: dataItem[0].name,
                toName: dataItem[1].name,
                coords: [fromCoord, toCoord]
            });
        }
    }
    return res;
};

var series = [];
[['深圳总部', SZData]].forEach(function (item, i) {
    series.push({
        name: item[0] + '联系方式',
        type: 'lines',
        zlevel: 1,
        effect: {
            show: true,
            period: 6,
            trailLength: 0.7,
            color: '#fff',
            symbolSize: 3
        },
        lineStyle: {
            normal: {
                color: "#f68c35",
                width: 0,
                curveness: 0.2
            }
        },
        data: convertData(item[1])
    },
    {
        name: item[0] + '：86-755-23963333',
        type: 'lines',
        zlevel: 2,
        symbol: ['none', 'arrow'],
        symbolSize: 10,
        effect: {
            show: true,
            period: 6,
            trailLength: 0,
            symbol: planePath,
            symbolSize: 15
        },
        lineStyle: {
            normal: {
                color: "#f68c35",
                width:2,
                opacity: 0.6,
                curveness: 0.2
            }
        },
        data: convertData(item[1])
    },
    {
        name: "",
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
            brushType: 'stroke'
        },
        label: {
            normal: {
                show: true,
                position: 'right',
                formatter: '{b}'
            }
        },
        symbolSize: function (val) {
            return 20;
        },
        itemStyle: {
            normal: {
                color: "#f68c35"
            }
        },
        tooltip:{
            formatter:function(params) {
                var phoneNums = phoneNumbers[params.data.name];
                var str = "";
                for (var key in phoneNums) {
                    str += key + ": " + phoneNums[key] + "<br />";
                }
                return str;
                //if (phoneNums.length == 1) {
                //    return "分公司地址: "+params.data.name + " <br/>联系方式: " + phoneNums[0];
                //} else {
                //    var str = "分公司地址: " + params.data.name;
                //    for(var i = 0; i < phoneNums.length; i++) {
                //        str +=  " <br/>联系方式"+(i+1)+": "+  phoneNums[i];
                //    }
                 
                //}
            }
        },
        data: item[1].map(function (dataItem) {
            return {
                name: dataItem[1].name,
                value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
            };
        })
    });
});

var option = {
    title : {
        textStyle : {
            color: '#fff'
        }
    },
    tooltip : {
        trigger: 'item'
    },
    geo: {
        map: 'china',
        zoom:1.25,
        label: {
            emphasis: {
                show: false
            }
        },
        roam: false,
        itemStyle: {
            normal: {
                areaColor: '#d9dce8',
                borderColor: '#999'
            },
            emphasis: {
                areaColor: '#d9dce8'
            }
        },
        layoutCenter: ['120%', '120%']
    },
    series: series
};
    var netWork = document.getElementById("netWork");
    if (netWork) {
        var myEcharts = echarts.init(netWork);
        myEcharts.setOption(option);
    }
// 首页--产品介绍
    var modify = 1,translate = 0,scale,zIndex;
    var homeProductSwiper = new Swiper('#home-product .swiper-container', {
            watchSlidesProgress: true,
            slidesPerView: 'auto',
            centeredSlides: true,
            loop: true,
            loopedSlides: 5,
            autoplay: true,
            navigation: {
                nextEl: '.home-page-swiper-button-next',
                prevEl: '.home-page-swiper-button-prev',
            },
            pagination: {
                el: '#product-swiper-pagination',
                // clickable :true,
            },
            on: {
                progress: function (progress) {
                    for (i = 0; i < this.slides.length; i++) {
                        var slide = this.slides.eq(i);
                        var slideProgress = this.slides[i].progress;
                        modify = 1;
                        if (Math.abs(slideProgress) > 1) {
                            modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
                        }
                        translate = slideProgress * modify * 260 + 'px';
                        scale = 1 - Math.abs(slideProgress) / 5;
                        zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
                        slide.transform('translateX(' + translate + ') scale(' + scale + ')');
                        slide.css('zIndex', zIndex);
                        slide.css('opacity', 1);
                        if (Math.abs(slideProgress) > 3) {
                            slide.css('opacity', 0);
                        }
                    }
                },
                setTransition: function (transition) {
                    for (var i = 0; i < this.slides.length; i++) {
                        var slide = this.slides.eq(i)
                        slide.transition(transition);
                    }
                }
            }

        })

    // home-page-news
    var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 10,
      simulateTouch:false,
      navigation: {
        nextEl: '.home-page-swiper-button-next',
        prevEl: '.home-page-swiper-button-prev',
      },
      on:{
            init: function(){
                swiperAnimateCache(this); //隐藏动画元素 
                swiperAnimate(this); //初始化完成开始动画
            }, 

            slideChangeTransitionStart: function(){ 
                swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
                //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
            } 
        }
    });

    /* ----------------------------------------------------------- */
   /*  其他页面
   /* ----------------------------------------------------------- */
     var navTitles = new Swiper('.nav-titles', {
        mousewheel: false,
        freeMode : true,
        slidesPerView:"auto",
        centerInsufficientSlides: true,
        freeModeMomentum : false,
    });

    $(".more-menu").click(function(){
        $(".more-menu-contanier").css({right:0});
    });
    $(".more-menu-close").click(function(){
        $(".more-menu-contanier").css({right:"-250px"});
    });
    $(".report-close").click(function(){
         $("#carRisk-report-content").removeClass('active');
    })
    $(".report-menu").click(function(){
         $("#carRisk-report-content").toggleClass('active');
    })
    $(".fc-btn").click(function () {
        //console.log(111);
        $(".report-body").addClass("active");
    });
    $(".cx-btn").click(function () {
        $(".report-body").removeClass("active");
    });


     /* ----------------------------------------------------------- */
   /*  企业文化 culture
   /* ----------------------------------------------------------- */
   var lastTranslate = 0;
    var fhfullpage = new Swiper('#fh-fullpage', {
        direction: 'vertical',
        speed:800,
        mousewheel:{
            releaseOnEdges:false
        },
        lazy: {
            loadPrevNext: true
        },
        simulateTouch:false,
        on:{
            init: function(){
                swiperAnimateCache(this); //隐藏动画元素 
                swiperAnimate(this); //初始化完成开始动画
                $(".footerView").css({height: "auto"});
            },
            slideChangeTransitionStart: function(){ 
                swiperAnimate(this);
                if (this.activeIndex >= 1) {

                  $("#fh-logo-img").attr("src","/images/logo02.png");
                  if(!$("#header").hasClass("fh-dark-header")) $("#header").addClass("fh-dark-header");
                  if(!$("#home-toggle-btn").hasClass("fh-dark-btn")) $("#home-toggle-btn").addClass("fh-dark-btn");

                } else {
                    $("#fh-logo-img").attr("src","/images/logo-white.png");
                    $("#header").removeClass("fh-dark-header");
                    $("#home-toggle-btn").removeClass("fh-dark-btn");
                }

            }, 
            transitionStart:function(){

            },

            slideChangeTransitionEnd: function(){ 
                 //每个slide切换结束时也运行当前slide动画
                //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
            } 
        }
    });
    // home-footer
    var location3 = 0,location4 = 0;
    var fhfullpageFooter = new Swiper('#fh-full-page-footer', {
         direction: 'vertical',
         freeMode: true,
         freeModeMinimumVelocity : 1,
          //speed:800,  
         simulateTouch: false,   
         mousewheel:{
            releaseOnEdges:false
         },
         on:{
            progress:function(progress){
                if (progress == 0) {
                    $("#cultrue-toggle-btn").show();
                    fhfullpage.mousewheel.enable();
                } else {
                    $("#cultrue-toggle-btn").hide();
                    fhfullpage.mousewheel.disable();
                }
            },
            setTranslate:function(translate){
                //console.log(translate);
                if (translate < (-$(".footerView").height())) {
                    fhfullpageFooter.setTranslate(-$(".footerView").height());
                    location3 = location4 = $(".footerView").height();
                    $(".footerView").offset().top;
                } else {
                     location3 = location4;
                     location4 = Math.abs(translate);
                }
                if (translate > 0) {
                   fhfullpage.slideTo(fhfullpage.slides.length - 2,800,false);  
                }
            }

        },
    });

    $("#fh-full-page-footer .swiper-slide").css({height:"auto"});
    $("#fh-full-page-footer .swiper-slide.fh-fullpage").css({height:"100%"});
    $("#fh-full-page-footer .swiper-slide .page-content").css({height:$(document).height() - 187});


    $("#cultrue-toggle-btn").click(function(){
        if (fhfullpage.progress < 1) {
            fhfullpage.slideNext();
        } else {
            fhfullpageFooter.slideNext();
            $("#cultrue-toggle-btn").hide();
        }   
    })

    var zhDX = {1:"一",2:"二",3:"三",4:"四",5:"五",6:"六",7:"七",8:"八",9:"九",10:"十"};
    var careSwiper = new Swiper('#careSwiper .swiper-container', {
      slidesPerView: 2,
      spaceBetween: 30,
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
        navigation: {
            nextEl: '.careSwiper-button-next',
            prevEl: '.careSwiper-button-prev',
          },
           on:{
                slideChangeTransitionStart:function(){
                    $(".careSwiper-num").text(zhDX[this.activeIndex + 1]);
                    if (this.activeIndex > 0) {
                         $(".careSwiper-num").css({left:"30.25%"});    
                    } else {
                        $(".careSwiper-num").css({left:"13.5%"});  
                    }
                }
            }
        });
    //console.log($(window).width())
    var benefitsSwiper = new Swiper('#benefitsSwiper .swiper-container', {
          slidesPerView: 2,
          spaceBetween: 30,
          centeredSlides: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
            navigation: {
                nextEl: '.benefitsSwiper-button-next',
                prevEl: '.benefitsSwiper-button-prev',
            },
            on:{
                  slideChangeTransitionStart:function(){
                        $(".benefitsSwiper-num").text(zhDX[this.activeIndex + 1]);
                        if (this.activeIndex > 0) {
                             $(".benefitsSwiper-num").css({left:"30.25%"});    
                        } else {
                            $(".benefitsSwiper-num").css({left:"13.5%"});  
                        }
                   }
            }
        });

    function setSwiperInSmallScreen(swiperDom){
         if ($(window).width() < 768) {
             swiperDom.params.slidesPerView = 1;
             swiperDom.update();   
         } else {
             swiperDom.params.slidesPerView = 2;
             swiperDom.update();   
         }
    }
    if ($("#cultrue-toggle-btn").height()) {
        setSwiperInSmallScreen(benefitsSwiper);
        setSwiperInSmallScreen(careSwiper);
    }   

     /* ----------------------------------------------------------- */
   /*  windows resize
   /* ----------------------------------------------------------- */

    $(window).on("resize",function(){
        $("#footerView").css({height:"auto"});
        $(".footerView").css({height:"auto"});
        if (myEcharts) {
            myEcharts.resize();
        }
        if ($("#cultrue-toggle-btn").height()) {
            setSwiperInSmallScreen(benefitsSwiper);
            setSwiperInSmallScreen(careSwiper);
        }   
    });

    /* ----------------------------------------------------------- */
   /*  Back to top
   /* ----------------------------------------------------------- */

       $(window).scroll(function () {
            var winScrollTop = $(this).scrollTop();
            var winHeight = $(this).height();
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
            $("#fh-full-page-footer .swiper-slide.fh-fullpage").css({height:"100%"});
            if ($(this).scrollTop() > 120) {
                $('.inside-page').removeClass("bg-transparent");
            } else {
                 $('.inside-page').addClass("bg-transparent");    
            }
            // 内部通道
            if ($(".inner-page2").offset()){
                var itemOffsetTop = $(".inner-page2").offset().top;
                var itemOffsetHeight = $(".inner-page2").height();
                if(winScrollTop > (itemOffsetTop - itemOffsetHeight*0.8)) {
                    //console.log("出现了")
                    $(".inner-page2 .passage-flex-item").addClass("animated fadeIn rotateIn");
                }
                var itemOffsetTop = $(".inner-page3").offset().top;
                var itemOffsetHeight = $(".inner-page3").height();
                if(winScrollTop > (itemOffsetTop - itemOffsetHeight*0.8)) {
                   // console.log("出现了")
                    $(".inner-page3 .passage-mail-text").addClass("animated fadeInUp");
                    $(".inner-page3 .passage-mail-address").addClass("animated fadeInUp");
                }   
            }
        });
      // scroll body to 0px on click
      $('#back-to-top').click(function () {
          $('#back-to-top').tooltip('hide');
          $('body,html').animate({
              scrollTop: 0
          }, 800);
          return false;
      });
      
      $('#back-to-top').tooltip('hide');


});
