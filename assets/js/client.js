let mainItem = document.getElementById("main");
let banner1 = document.getElementById("banner-1");
let bannerSrc = `<a target=_blank href="http://ya.ru">
                    <img src="assets/img/banner.png" border=0>
                </a>`;

let requestId = requestAnimationFrame(()=>{
    mainItem.className = 'active';
    banner1.insertAdjacentHTML(`afterBegin`, bannerSrc);
});
