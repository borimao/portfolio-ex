var now_num = 1;
var timeoutId;
var scroll = 100;
var flag = true;
var st_flag = true;

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
        const myMain = document.querySelector('.center');
        const rect = myMain.getBoundingClientRect();
        const scrollTop = window.pageXOffset || document.documentElement.scrollTop;
        const Top = rect.top + scrollTop;
        console.log('pokotin')
        window.scrollTo({
            top: Top
        });
}


window.onscroll = () => {
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