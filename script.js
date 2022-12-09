/*Javascript*/
function signin(){
    var users = "orivinabon159@gmail.com";
    var passs = "13082001phubon";
    var user = document.getElementById("user").value;
    var pass = document.getElementById("password").value;
    if(user == users && pass == passs)
        alert("Đăng nhập thành công")
    else
        alert("Đăng nhập thất bại")
}
function signup(){
    var names = "Thiên Phú"
    var users = "orivinabon159@gmail.com";
    var passs = "13082001phubon";
    var name = document.getElementById("name").value;
    var user = document.getElementById("user").value;
    var pass = document.getElementById("password").value;
    var confirmpass = document.getElementById("confirm-password").value;
    if(name == names && user == users && pass == passs && confirmpass == passs)
        alert("Đăng ký thành công")
    else
        alert("Thông tin sai không phù hợp, đăng ký không thành công")
}

function daoTT(){
    var pass = document.getElementById("password")
    pass.type = (pass.type === "password")? "text":"password";confirm-password

    var pass = document.getElementById("confirm-password")
    pass.type = (pass.type === "password")? "text":"password";confirm-password
}
/*jQuery*/
$(document).ready(function(){
    $("#top").hide()
    $(window).scroll(function(){
        if($(this).scrollTop() >= 100)
            $("#top").show("slow")
        else
            $("#top").hide("slow")
    })
    $("#top").click(function(){
        $("html,body").animate({
            scrollTop:0
        },1000);
    })
    $(window).scroll(function(){
        if($(this).scrollTop() >= 100){
            $("nav").css({
                "position" : "fixed",
                "left": 0,
                "right": 0,
                "top": 0,
                "z-index" : "9999"
            })
        }else{
            $("nav").css({
                "position" : "relative",
            })
        }
    })
    $(".shape a").click(function(){
        let idx = $(this).attr("rel");
        $(".works .tabs-contents").removeClass("active");
        $(`.works .tabs-contents:nth-child(${idx})`).addClass("active")
    })
    let go = ['Thành Phố Hồ Chí Minh','Hà Nội',"Đà Nẵng","Nha Trang","Huế"]
    $(".goInput").keyup(function(){
        let text = $(this).val().toLowerCase();

        let h =''; 
        for(let c of go)
            if(c.toLowerCase().indexOf(text) >= 0){
                h += `
                <li><a href = "javascript:;">${c}</a></li>
                `
            }
            if(h != ''){
            $(".go").html(h);
            $(".go").show();
            }
    });

    $(".go").on("click","a",function(){
        $(".goInput").val($(this).text());
        $(".go").hide();
    })

    $(".endInput").keyup(function(){
        let text = $(this).val().toLowerCase();

        let h =''; 
        for(let c of go)
            if(c.toLowerCase().indexOf(text) >= 0){
                h += `
                <li><a href = "javascript:;">${c}</a></li>
                `
            }
            if(h != ''){
            $(".end").html(h);
            $(".end").show();
            }
    });

    $(".end").on("click","a",function(){
        $(".endInput").val($(this).text());
        $(".end").hide();
    })
   

    $("#submenulanguage").hide()
    $(".click").click(function(){
        $("#submenulanguage").show()
    })
    $("#exit").click(function(){
        $("#submenulanguage").hide()
    })
})
function alo(){
    var names = "15032002";
    var name = document.getElementById("name").value;
    if( name == names ){
        window.location.href="love.html"
    }
    else
        alert("Giợi ý : ngày sinh của ai đó =))")
}