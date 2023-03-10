/**
 * webpack入口文件
 */
// polyfill会转译所有的新语法
// import '@babel/polyfill'

// 引入样式文件
import '@/assets/css/index.css';
import { name,asyncRun } from '@/assets/js/public';
// 以模块的方式引入图片
import blackIcon from '@/assets/icon/blank.png';
import eyeIcon from '@/assets/icon/eye.png';
import readme from '../README.md';
const showMsg = () => {
  // eslint-disable-next-lint
  alert(name());
};
// eslint-disable-next-lint
window.showMsg = showMsg;

console.log(readme);

// eslint-disable-next-lint
const img = new Image();
import('@/assets/icon/xph.gif').then((boy)=>{
  img.src = boy.default
  // eslint-disable-next-lint
  document.body.append(img);
});

// eslint-disable-next-lint
const img1 = new Image();
img1.src = blackIcon;
// eslint-disable-next-lint
document.body.append(img1);

// eslint-disable-next-lint
const img2 = new Image();
img2.src = eyeIcon;
// eslint-disable-next-lint
document.body.append(img2);

console.log('接口地址2', API_BASE_API);

document.getElementById('btn').onclick = function () {
  // import 启动懒加载
  // webpackChunkName 指定懒加载的文件名称
  // webpackPrefetch: true 启动预加载
  import(/* webpackChunkName:"desc", webpackPrefetch: true */'./wp').then(({ desc }) => {
    alert(desc());
  });
};
