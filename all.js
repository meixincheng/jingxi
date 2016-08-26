/**
 * Created by mxc on 2016/6/18.
 */

window.onload=function(){
    //banner部分小叉start
    var oWrong=document.getElementById('wrong');
    oWrong.onclick=function(){
        this.parentNode.parentNode.style.display='none';
    }
    //banner部分小叉end

    //search下 input输入框 start
    var oInput=document.getElementById('input');
    oInput.onfocus=function(){
        if(this.value==='台式机'){
            this.value='';
        }
    }
    oInput.onblur=function(){
        if(!this.value){
            this.value='台式机';
        }
    }
    //search下 input输入框 end

    //slider无缝滚动start
    var oDiv=document.getElementById('slider');
    var oUl=document.getElementById('imglist');
    //var oUl=oDiv.getElementsByTagName('ul')[0];

    var aLi=oUl.getElementsByTagName('li');
    var timer=null;
    var speed=2;

    oUl.innerHTML=oUl.innerHTML+oUl.innerHTML;
    oUl.style.width=aLi[0].offsetWidth*aLi.length+'px';

    function move(){
        oUl.style.left=oUl.offsetLeft+speed+'px';
        if(oUl.offsetLeft<-oUl.offsetWidth/2)
        {
            oUl.style.left='0';
        }
        if(oUl.offsetLeft>0){
            oUl.style.left=-oUl.offsetWidth/2+'px';
        }
    }
    timer=setInterval(move,20);
    oDiv.onmouseover=function(){
        clearInterval(timer);
    }
    oDiv.onmouseout=function(){
        timer=setInterval(move,20);
    }
    //slider无疑滚动end

    //精灵图用JS实现开始
    var oSpr=document.getElementById('sprite');
    var aI=oSpr.getElementsByTagName('i');
    for(var i=0;i<aI.length;i++)
    {
        aI[i].style.background='url(images/fly.png) 0 '+(-25*i)+'px'+' no-repeat';
    }
    //精灵图用JS实现结束

}
