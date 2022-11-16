((win)=>{
  'use strict';
  win.$=function(input,type=true){
    const output=document.querySelectorAll(input);
    if(output.length==0)
      return undefined;
    else if(output.length==1&&type)
      return output[0];
    else
      return output;
  }
  win.atr=function(input,name,value=false){
    if(value){
      input.setAttribute(name,value);
    }else{
      return input.getAttribute(name);
    }
  }
  win.get=function(url){
    return new Promise(function(resolve,reject){
      let get = new XMLHttpRequest();
      get.onload=function(){
        if(this.status==200){
          resolve(this.responseText);
        }else{
          reject(this.statusText);
        }
      };
      get.open('GET',url);
      get.send();
    });
  }
  win.loc=function(name,value=false){
    if(value){
      localStorage.setItem(name,value);
    }else{
      return localStorage.getItem(name);
    }
    //localStorage.removeItem('myCat');localStorage.clear();
  }
})(window);