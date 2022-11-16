var 功德 = 0,bgm=false,bgm_load=false,大悲咒,last_gap=0,last_time=0,good=0;
if(loc('功德')){
  功德=parseInt(loc('功德'));
  $('#功德').innerText=功德;
}else{
  loc('功德',0);
}
var 敲击声 = new Audio('敲击声.mp3');
敲击声.volume=0.8;
function 敲木鱼(){
  if(last_gap){
    const speed = Date.now()-last_time-last_gap;
    if(speed>100){
      $('#note').innerText='不徐';
      good=0;
    }else if(speed<-100){
      $('#note').innerText='不急';
      good=0
    }else{
      good+=1;
      if(good>1){
        $('#note').innerText=`心如止水×${good}`;
      }else{
        $('#note').innerText='心如止水';
      } 
    }
    last_gap = Date.now() - last_time;
    last_time = Date.now();
  }else{
    if(last_time){
      last_gap = Date.now() - last_time;
    }
    last_time = Date.now();
  }

  功德+=1;
  $('#功德').innerText=功德;
  loc('功德',功德);
  $('#木鱼').style.transform = 'scale(.98)'
  setTimeout(()=>{$('#木鱼').style=null;},100);
  敲击声.load();
  敲击声.play();
}
$('#bgm').onclick=function(){
  if(bgm){
    this.innerHTML='&#xf0009;';
    bgm=false;
    大悲咒.pause();
  }else{
    this.innerHTML='&#xf0010;';
    bgm=true;
    if(!bgm_load){
      大悲咒 = new Audio('大悲咒.mp3');
      大悲咒.volume=0.2;
      大悲咒.loop=true;
      bgm_load=true;
    }
    大悲咒.play();
  }
}
onkeydown=(eve)=>{
  if(eve.code=='Space'&&eve.repeat==false){
    敲木鱼();
  }
}