if(!self.define){let e,i={};const a=(a,s)=>(a=new URL(a+".js",s).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(s,t)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let b={};const r=e=>a(e,c),n={module:{uri:c},exports:b,require:r};i[c]=Promise.all(s.map((e=>n[e]||r(e)))).then((e=>(t(...e),b)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.js",revision:"3c38136e33f7c4b13e1d36448171f9b6"},{url:"static/css/app.css",revision:"e96cfde8730514a115517c545ddb6b8a"},{url:"static/icons/phone.svg",revision:"43a655058e0efe40ceba02ea04f74b1b"},{url:"static/images/404/404-Error.svg",revision:"ff09331c530f159fe98409c13a4aa8cd"},{url:"static/images/favicon.svg",revision:"91544544c12d40ce7871ae610594a0f0"},{url:"static/images/home/slide_1.webp",revision:"45e13fd18a03e30fbecc133b2864f6dd"},{url:"static/images/home/slide_2.webp",revision:"55277059b470473cf06aa32fe35ceb14"},{url:"static/images/home/taxi-4.webp",revision:"ab349d900b266463c3279fb6bef20a54"},{url:"static/images/home/taxi-7.webp",revision:"3c85f5951b67a9cbadf1d752184258c1"},{url:"static/images/home/taxi-du-lich.webp",revision:"2eff6840e86900b1d0fb7083a55de022"},{url:"static/images/news/Thue-xe-du-lich.webp",revision:"b4c9ec9f4612549d693e8ed48ec28743"},{url:"static/images/news/Tuyen-dung.webp",revision:"2d7f49f5207608b2938aaf6b27bd0806"},{url:"static/images/news/anh-taxi-taixe.webp",revision:"03be88e2d9dff271a971fb87b825e603"},{url:"static/images/news/benh-vien-tphcm.webp",revision:"0305593556816f5f0fa2124f7c050948"},{url:"static/images/news/dai-chung-vien-Long-Khanh.webp",revision:"0029e2bd126bc40345ae14bb0a052deb"},{url:"static/images/news/di-lam.webp",revision:"8b8a37678fd452b7988a868dda13b6d4"},{url:"static/images/news/ho-tri-an.webp",revision:"84ed79413f2ed82b78dd3e925a2e5353"},{url:"static/images/news/khu-du-lich-dai-nam.webp",revision:"e5762d106b60543adf7a678dd194d301"},{url:"static/images/news/nghi-le-30-4.webp",revision:"be9951c9d190130e84d54029199bbec9"},{url:"static/images/news/taxi-long-khanh-taxi-dong-nai.webp",revision:"3e03b3d930d30126af88850645316679"},{url:"static/images/newsDetail/4-chiec-taxi.webp",revision:"9962d368a521dcabdb81abd5077ad9ab"},{url:"static/images/newsDetail/Khu-du-lich-Dai-Nam-1.webp",revision:"743a41b2a8133a6a4a7ff4e76dc50d61"},{url:"static/images/newsDetail/Thue-xe-du-lich.webp",revision:"b4c9ec9f4612549d693e8ed48ec28743"},{url:"static/images/newsDetail/bang-gia-benh-vien.webp",revision:"423223df0dcd8c4fa0d9d7687f3c88ff"},{url:"static/images/newsDetail/bien-nhan-tao-dai-nam-768x512.webp",revision:"812f941b09d9b74d827a6870421d0255"},{url:"static/images/newsDetail/dai-chung-vien-02.webp",revision:"7decf4f82049a85e7c8497e02b7fa1c4"},{url:"static/images/newsDetail/dai-chung-vien-Long-Khanh.webp",revision:"0029e2bd126bc40345ae14bb0a052deb"},{url:"static/images/newsDetail/dainam1.webp",revision:"1dedd2eee25759869522733f20fde129"},{url:"static/images/newsDetail/di-lam.webp",revision:"8b8a37678fd452b7988a868dda13b6d4"},{url:"static/images/newsDetail/du-lich-dai-nam-768x576.webp",revision:"b0507430f3f30925b13a1e69573d1d98"},{url:"static/images/newsDetail/goc.webp",revision:"cb96be712e758a9abaf5b968acc38651"},{url:"static/images/newsDetail/ho-tri-an.webp",revision:"84ed79413f2ed82b78dd3e925a2e5353"},{url:"static/images/newsDetail/khu-du-lich-dai-nam.webp",revision:"e5762d106b60543adf7a678dd194d301"},{url:"static/images/newsDetail/kim-dien-dai-nam-768x576.webp",revision:"b1a4072081e43aaabe02d9e1013548ff"},{url:"static/images/newsDetail/lang-tre.webp",revision:"4776f363d046099b8c240dbf183240b1"},{url:"static/images/newsDetail/leu-cam-trai-ho-tri-an.webp",revision:"05f7161953362c979fa9c6613adb0f7b"},{url:"static/images/newsDetail/nong-trai-cang-cua-dai-nam-768x432.webp",revision:"a7c9790a17dfd74b4f20b1efe787f68e"},{url:"static/images/newsDetail/nui-bao-son-dai-nam-768x480.webp",revision:"fb42cb32bbce33ba4c6977a0e03cd4a3"},{url:"static/images/newsDetail/taxi-long-khanh-taxi-dong-nai.webp",revision:"3e03b3d930d30126af88850645316679"},{url:"static/images/newsDetail/taxi-taixe.webp",revision:"753feefc57943b7efe710d202923fe91"},{url:"static/images/newsDetail/taxi-taixe1.webp",revision:"a9edb7b7330e5587b7a5fa207fa13524"},{url:"static/images/newsDetail/thac-da-hang.webp",revision:"19367650a8faa79a6fcd6aa0fab6b74a"},{url:"static/images/newsDetail/thac-giang-dien.webp",revision:"323e897555309d0049be73f3f909a552"},{url:"static/images/newsDetail/ttxvn-grab.webp",revision:"82c65565f9c85bb4d2cbce806a3b844c"},{url:"static/images/newsDetail/vuon-quoc-gia-nam-cat-tien.webp",revision:"b64db82b9d03fd2fd164997deb5e673a"},{url:"static/images/newsDetail/vuon-thu-dai-nam-768x525.webp",revision:"cf57b9af206baa2cb3a0943d92725b5f"},{url:"static/images/service/dich-vu-long-khanh.webp",revision:"11716fd53fc8595f10932e8b8353ca7e"},{url:"static/images/service/dich-vu-thue-xe-dam-cuoi.webp",revision:"656251aaadf4052256e8a1b19d547a43"},{url:"static/images/service/dich-vu-thue-xe-du-lich.webp",revision:"6633c90241311682a38a442897dd3033"},{url:"static/images/service/dich-vu-thue-xe-phuc-vu-le-hoi.webp",revision:"94c3961add8981ab3c3d938206d8a4f1"},{url:"static/images/service/dich-vu-xe-san-bay-benh-vien.webp",revision:"eaad58f8f567f2d935119455cadc6b41"},{url:"static/images/service/dich-vu-xuan-loc.webp",revision:"5e58e8939e501ab381234e0ff6070f28"},{url:"static/js/index.js",revision:"a9e24dd1ce107816c44a94c530629d22"},{url:"static/resources/views/layouts/main.hbs",revision:"dde4801c8d14a0f01612b8bd21103bf0"},{url:"static/resources/views/layouts/no-footer.hbs",revision:"7cc275817dda2aa8e4db88cc9d349a14"},{url:"static/resources/views/pages/404.hbs",revision:"9b1eaaa2e6c09678bcc7c66ed95f41b8"},{url:"static/resources/views/pages/dich-vu.hbs",revision:"604cdd0a16bd12698e23a43466a3f615"},{url:"static/resources/views/pages/gioi-thieu.hbs",revision:"7e823c5f981393e70843a8c7167e9991"},{url:"static/resources/views/pages/home.hbs",revision:"566e8beeea01ff1de5a7426744a9f460"},{url:"static/resources/views/pages/lien-he.hbs",revision:"c04e62af449ae7d5ea4090cf0706d691"},{url:"static/resources/views/pages/tin-tuc-chi-tiet.hbs",revision:"49d12bfd8a4aba41fa109a1d15f4bfb6"},{url:"static/resources/views/pages/tin-tuc.hbs",revision:"b78135e28f4dacee75bf8291176bc98c"},{url:"static/resources/views/pages/tuyen-duong-pho-bien.hbs",revision:"f6e1929cdb6d622dd95c0443660a7734"},{url:"static/resources/views/partials/footer.hbs",revision:"15f3f744fbf59ca5e9bfb1765ff4d075"},{url:"static/resources/views/partials/header.hbs",revision:"63d92fde03aa8bb9e4c351811be7ac38"},{url:"static/robots.txt",revision:"a312f92405718cc5bacf052f6a4f793b"},{url:"static/sitemap.xml",revision:"64ae75d2bb994dfff75b61f59f7e8c5f"}],{})}));
