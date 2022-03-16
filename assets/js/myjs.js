var slideNo=1;
var tellmeSlideTimer;
$(document).ready(function() {

$.each($('.page-header'),function(i,v){
    var inview = new Waypoint.Inview({
    element: v,
    enter: function(direction) {
        $(this.element).addClass('animated fadeIn animate-base-setting');                    
    },
    exited: function(direction) {
        $(this.element).removeClass('animated fadeIn animate-base-setting');  
    }
    });
});

$.each($('.circle'),function(i,v){
    var inview = new Waypoint.Inview({
    element: v,
    enter: function(direction) {
        $(this.element).addClass('animated rotateIn animate-base-setting');                    
    },
    exited: function(direction) {
        $(this.element).removeClass('animated rotateIn animate-base-setting');
    }
    });
});

$.each($("img[name='left-image']"),function(i,v){
    var inview = new Waypoint.Inview({
    element: v,
    enter: function(direction) {
        $(this.element).addClass('animated fadeInLeftBig animate-base-setting-fast');                    
    },
    exited: function(direction) {
        $(this.element).removeClass('animated fadeInLeftBig animate-base-setting-fast');
    }
    });
});

$.each($("div[name='right-panel']"),function(i,v){
    var inview = new Waypoint.Inview({
    element: v,
    enter: function(direction) {
        //$(this.element).addClass('animated fadeInRightBig animate-base-setting-fast');                    
    },
    exited: function(direction) {
        //$(this.element).removeClass('animated fadeInRightBig animate-base-setting-fast');
    }
    });
});

$.each($("div[name='left-panel']"),function(i,v){
    var inview = new Waypoint.Inview({
    element: v,
    enter: function(direction) {
        $(this.element).addClass('animated fadeInLeftBig animate-base-setting-fast');                    
    },
    exited: function(direction) {
        $(this.element).removeClass('animated fadeInLeftBig animate-base-setting-fast');
    }
    });
});

$.each($("img[name='qrcode']"),function(i,v){
    var inview = new Waypoint.Inview({
    element: v,
    enter: function(direction) {
        $(this.element).addClass('animated zoomIn animate-base-setting-fast');                    
    },
    exited: function(direction) {
        $(this.element).removeClass('animated zoomIn animate-base-setting-fast');
    }
    });
});

$.each($("img[name='structure']"),function(i,v){
    var inview = new Waypoint.Inview({
    element: v,
    enter: function(direction) {
        $(this.element).addClass('animated zoomIn animate-base-setting-fast');                    
    },
    exited: function(direction) {
        $(this.element).removeClass('animated zoomIn animate-base-setting-fast');
    }
    });
});

$.each($("a[name='weblink']"),function(i,v){
    var inview = new Waypoint.Inview({
    element: v,
    enter: function(direction) {
        $(this.element).addClass('animated zoomIn animate-base-setting-fast');                    
    },
    exited: function(direction) {
        $(this.element).removeClass('animated zoomIn animate-base-setting-fast');
    }
    });
});

$.each($("img[name='homepage']"),function(i,v){
    var inview = new Waypoint.Inview({
    element: v,
    enter: function(direction) {
        $(this.element).addClass('animated slideInUp animate-base-setting-fast');                    
    },
    exited: function(direction) {
        this.destroy();
    }
    });
});

$.each($("img[name='menubar']"),function(i,v){
    var inview = new Waypoint.Inview({
    element: v,
    enter: function(direction) {
        $(this.element).addClass('animated pulse animate-base-setting-fast');                    
    },
    exited: function(direction) {
        $(this.element).removeClass('animated pulse animate-base-setting-fast');
    }
    });
});

$.each($("img[name='normalpage']"),function(i,v){
    var inview = new Waypoint.Inview({
    element: v,
    enter: function(direction) {
        $(this.element).addClass('animated bounce animate-base-setting-fast');                    
    },
    exited: function(direction) {
        $(this.element).removeClass('animated bounce animate-base-setting-fast');
    }
    });
});


var inview_tellme = new Waypoint.Inview({
element: ("#tellme-interface"),
entered: function(direction) {
    playSlide();               
},
exited: function(direction) {
    clearInterval(tellmeSlideTimer);
}
});

var inview_experience = new Waypoint.Inview({
element: ("#flip_title"),
enter: function(direction) {
    $(this.element).addClass('animated flipInY animate-base-setting');             
},
exited: function(direction) {
    $(this.element).removeClass('animated flipInY animate-base-setting');
}
});



$("html").niceScroll({
    cursorcolor: "rgba(255, 255, 255, 0.3)",
    cursorwidth: "10px",
    cursorborder: "1.5px solid #E2D4D4",
    cursorborderradius: "10px",
    zindex: "9999",
    scrollspeed: 45,
    mousescrollstep: 25, 
});


$('#about_me,#about_me_play').click(function() {        
    Jump('#about_me_section', {
    duration: 1000,
    offset: -50,
    callback: undefined,
    a11y: false
    })        
});

$('#weather').click(function() {        
    Jump('#weather_section', {
    duration: 1000,
    offset: -50,
    callback: undefined,
    a11y: false
    })        
});

$('#itree').click(function() {        
    Jump('#itree_section', {
    duration: 1000,
    offset: -50,
    callback: undefined,
    a11y: false
    })        
});

$('#thing').click(function() {        
    Jump('#thing_section', {
    duration: 1000,
    offset: -50,
    callback: undefined,
    a11y: false
    })        
});

$('#tellme').click(function() {        
    Jump('#tellme_section', {
    duration: 1000,
    offset: -50,
    callback: undefined,
    a11y: false
    })        
});

var myCareerData = {
labels: [
    "資訊傳播學系",
    "動態攝影師",
    "網路程式設計師",
    "軟體工程師"            
],
datasets: [
    {
        backgroundColor: [
            "#067CC3",
            "#1DA1AB",
            "#2E5074",
            "#1BC6FF"
        ],
        borderColor: [
            "#FAD223",
            "#FAD223",
            "#FAD223",
            "#FAD223"
        ],
        borderWidth: 0,
        data: [4,2.3,1.5,6.9],
    }
]        
};


var myCareer = $("#myCareerChart");
var mySkillChart = new Chart(myCareer, {
type: 'horizontalBar',
data: myCareerData,
options: {
    legend: {
        display: false
    },
    scales: {
        xAxes: [{
            stacked: true,
            scaleLabel: {
                display: true,
                labelString: '時間(年)'             
            }  
        }],        
        yAxes: [{
            stacked: true,
            ticks: {
                min: 0                    
            }                          
        }]
    }
}
});



var myPersonalityData = {
    labels: ["團隊精神", "溝通協調", "同理關懷", "抗壓能力", "分析思考"],
    pointStyle:'star',
    datasets: [
        {            
            backgroundColor: "rgba(31, 184, 244, 0.3)",
            borderColor: "rgba(31, 184, 244, 1)",
            pointBackgroundColor: "rgba(31, 184, 244, 1)",
            pointBorderColor: "#FC660B",
            pointHoverBackgroundColor: "#FC660B",
            pointHoverBorderColor: "rgba(31, 184, 244, 1)",
            data: [88,69,69,100,69]
        }
    ]
};

var myPersonality = $("#myPersonalityChart");
var myPersonalityChart = new Chart(myPersonality, {
    type: 'radar',
    data: myPersonalityData,
    options: {
        legend: {
            display: false
        },
        scale: {            
            ticks: {
                beginAtZero: true
            }
        }    
    }
});
  

$("#tellme-interface li[role='presentation'] a").click(function (e) {
  e.preventDefault();
  slideNo=parseInt($(this).attr('href').substr(-1,1));
  $(this).tab('show');  
});

$("#tellme-interface li[role='presentation'] a").mouseover(function (e) {
    pauseSlide();
});
  
});





function slideTellmeInterface(){     
    if(slideNo<7){        
    }else{
        slideNo=0;
    }                     
    $("#tellme-interface li[role='presentation']:eq("+slideNo+") a").trigger('click'); 
     
}

function pauseSlide(){    
    clearInterval(tellmeSlideTimer);
    $('#playImg').attr('src','/MyExperience/assets/img/icon/ic_play_circle_outline_white_24dp_1x.png');
    $('#playImg').attr('alt','play');
}

function playSlide(){
    
    if($('#playImg').attr('alt')=='play'){
        clearInterval(tellmeSlideTimer);
        tellmeSlideTimer=window.setInterval(slideTellmeInterface,3500);   
        $('#playImg').attr('src','/MyExperience/assets/img/icon/ic_pause_circle_outline_white_24dp_1x.png');
        $('#playImg').attr('alt','pause');        
    }else{
        clearInterval(tellmeSlideTimer);
        $('#playImg').attr('src','/MyExperience/assets/img/icon/ic_play_circle_outline_white_24dp_1x.png');
        $('#playImg').attr('alt','play');        
    }       

}

