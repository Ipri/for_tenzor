let mainItem = document.getElementById("main");
let mainItemIcon = mainItem.getElementsByTagName('img')[0];

mainItem.className = 'active';
mainItemIcon.src = mainItemIcon.src.replace('.png', '-w.png');




