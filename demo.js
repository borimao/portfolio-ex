var now_num = 1;
var timeoutId;
var scroll = 100;
var flag = true;
var st_flag = true;

var agent
var chrome

function sr(num){
    if(now_num != num){
        var cover = document.querySelector('.cover');
        cover.classList.add("c_" + num);
        cover.classList.remove("c_" + now_num);
        document.querySelector('.in_cover' + now_num).classList.remove("on");
        window.setTimeout(() => {
            document.querySelector('.in_cover' + num).classList.add("on");
        },1000);
        now_num = num;
    }
}

window.onload = ()=>{
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
    
        if(scroll > 100 && flag == true && now_num < 7){
            console.log(scroll)
            flag = false;
            sr(now_num + 1);
            window.setTimeout(() => {
                flag = true;
            },1500)
        }else if (scroll < 100 && flag == true && now_num > 1){
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


function ViwWork(){
    const w_area = document.querySelector('.w_back');
    w_area.classList.add('viw_work');
}
function CloseWork(){
    const w_area = document.querySelector('.w_back');
    w_area.classList.remove('viw_work');
}