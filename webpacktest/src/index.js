import _ from 'lodash'
import './style.css'
import icon from './timg.jpg'
import Data from './data.xml'
import printMe from './print'
function component() {
    var element = document.createElement('div');

    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack','嘎昆仑饭店时飞龙在天'], ' ');
    element.classList.add('hello');
    // 添加图像到项目中
    var img = new Image();
    img.src = icon;
    element.appendChild(img);
    // 添加一个按钮
    var btn = document.createElement('button');
    btn.innerHTML = 'click me to check console';
    btn.onclick = printMe;

    element.appendChild(btn);
    console.log(Data);

    return element;
}

document.body.appendChild(component());


// if (module.hot) {
//    module.hot.accept('./print.js', function() {
//        console.log('Accepting the updated printMe module!');
//        printMe();
//    })
// }