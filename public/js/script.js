document.getElementById('btnToogleMenu').onclick = function(){
     document.querySelector('.menu-books').style.display = "block";
     setTimeout(function(){
          document.querySelector('.menu-books').style.top="0";
     },50);
     
}

document.getElementById('btnCloseMenu').onclick = function(){
     document.querySelector('.menu-books').style.top="-300px";
     setTimeout(function(){
          document.querySelector('.menu-books').style.display = "none";
     },500);
}

