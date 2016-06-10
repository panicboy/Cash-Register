var btnBox = document.getElementById('btnBox');
var screen = document.getElementById('display');
for (var i = 0; i < 10; i++) {
  var btn = document.createElement('button');
  btn.id = i;
  //btn.innerHTML = 'Button ' + i;
  btn.innerHTML = i;
  btn.addEventListener('click', function(event) {
    //var sendVal = this.innerHTML;
    screen.innerHTML = screen.innerHTML + this.innerHTML;
  });

  btnBox.appendChild(btn);
}