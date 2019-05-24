var now_num = 0;
var timeoutId;
var scroll = 100;
var flag = true;
var st_flag = true;

var agent
var chrome


function sr(num){
    if(now_num != num){
        var cover = document.querySelector('.cover');
        var parallax = document.querySelector('.parallax');
        cover.classList.add("c_" + num);
        cover.classList.remove("c_" + now_num);
        parallax.classList.add("p_" + num);
        parallax.classList.remove("p_" + now_num);
        document.querySelector('.in_cover' + now_num).classList.remove("on");
        document.querySelector('.b_' + now_num).classList.remove('b_on');
        window.setTimeout(() => {
            document.querySelector('.in_cover' + num).classList.add("on");
            document.querySelector('.b_' + num).classList.add('b_on');
        },1000);
        now_num = num;
    }
}

window.onload = ()=>{
    document.querySelector(".main").addEventListener("scroll", function() {
        
    }, false);
    agent = window.navigator.userAgent.toLowerCase();
    chrome = (agent.indexOf('chrome') !== -1) && (agent.indexOf('edge') === -1)  && (agent.indexOf('opr') === -1);
    const myMain = document.querySelector('.center');
    const rect = myMain.getBoundingClientRect();
    const scrollTop = window.pageXOffset || document.documentElement.scrollTop;
    const Top = rect.top + scrollTop;
    window.scrollTo({
        top: Top
    });
    if(chrome == false){
        var main = document.querySelector(".main");
        main.classList.add('m_scroll');
        var b_list = document.querySelector(".button_list");
        b_list.classList.add('delete');
        var up = document.querySelector('.up');
        up.parentNode.removeChild(up);
        var center = document.querySelector('.center');
        center.parentNode.removeChild(center);
        var down = document.querySelector('.down');
        down.parentNode.removeChild(down);
    }
}


window.onscroll = () => {
    if(chrome == true){
        scroll = document.documentElement.scrollTop || document.body.scrollTop;
    
        if(scroll > 100 && flag == true && now_num < 4){
            console.log(scroll)
            flag = false;
            sr(now_num + 1);
            window.setTimeout(() => {
                flag = true;
            },1500)
        }else if (scroll < 100 && flag == true && now_num > 0){
            console.log(scroll)
            flag = false;
            sr(now_num - 1);
            window.setTimeout(() => {
                flag = true;
            },1500)
        }

        const myMain = document.querySelector('.center');
        const rect = myMain.getBoundingClientRect();
        const scrollTop = window.pageXOffset || document.documentElement.scrollTop;
        const Top = rect.top + scrollTop;
        window.scrollTo({
            top: Top
        });

    }
}


function ViwWork(num){
    const w_area = document.querySelector('.w_back' + num);
    w_area.classList.add('viw_work');
}
function CloseWork(num){
    const w_area = document.querySelector('.w_back' + num);
    w_area.classList.remove('viw_work');
}

function SkillViw(num) {
    const s_toggle = document.querySelector('#s_toggle' + num);
    s_toggle.removeAttribute('onclick');
    const s_link = document.querySelector('.s_link' + num);
    s_link.classList.add('s_over');
    s_link.classList.add('skill_viw');
    window.setTimeout(() => {
        s_link.firstElementChild.classList.add('s_area_view');
        window.setTimeout(() => {
            s_toggle.setAttribute('onclick', 'CloseSkill('+ num +')');
        },500)
    },500)
}

function CloseSkill(num){
    const s_toggle = document.querySelector('#s_toggle' + num);
    s_toggle.removeAttribute('onclick');
    const s_link = document.querySelector('.s_link' + num);
    s_link.firstElementChild.classList.remove('s_area_view');
    window.setTimeout(() => {
        s_link.classList.remove('skill_viw');
        window.setTimeout(() => {
            s_link.classList.remove('s_over');
            s_toggle.setAttribute('onclick', 'SkillViw('+ num +')');
        },500)
    },500)
}