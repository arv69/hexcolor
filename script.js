
function changeColors(){
  var hex_no= ['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
  var hax_codes='';
  for(var i=0;i<6;i++){
    var random_idx=Math.floor(Math.random()*hex_no.length);
  hax_codes+=hex_no[random_idx];
  }
 document.getElementsByClassName("box1").innerHTML=hax_codes;
 document.getElementsByTagName('body')[0].style.background="#"+hax_codes;
}
 