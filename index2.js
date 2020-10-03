var a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],
    b = document.getElementById("thumbnails").children,
    j, x, i;
for (i = a.length - 1; i > 0; i--) {
  j = Math.floor(Math.random() * (i + 1));
  x = a[i];
  a[i] = a[j];
  a[j] = x;
}
for (var i = 0; i < a.length; i++) {
    b[i].setAttribute("href","#image"+a[i]);
    document.getElementsByTagName("img")[i].setAttribute("src","thumbnail/"+a[i]+".jpg");
    document.getElementById("thumbnails").children[i].setAttribute("onclick","loadimage("+a[i]+","+(i+1)+")");    
}

function scroll(){
  var bottom = document.documentElement.scrollTop || document.body.scrollTop,
      elementno2 = document.getElementById('two'),
      elementno3 = document.getElementById('three'),
      second = elementno2.offsetTop,
      third = elementno3.offsetTop;
  if (second < bottom && third > bottom){
    document.querySelector('body').classList.remove('first');
    document.querySelector('body').classList.remove('third');
    document.querySelector('body').classList.add('second');
  }
  if (second > bottom && third > bottom){
    document.querySelector('body').classList.remove('second');
    document.querySelector('body').classList.remove('third');
    document.querySelector('body').classList.add('first');
  }
  if (third < bottom && second < bottom){
    document.querySelector('body').classList.remove('second');
    document.querySelector('body').classList.remove('first');
    document.querySelector('body').classList.add('third');
  }
}
