function addShake(){
  shake = shake + 0.1;
  document.getElementsByTagName(p).style.animation-duration = shake;
  document.getElementById('pee').innerHTML = shake;
}
