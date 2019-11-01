////实现点击某个元素（此处为图片）即可切换图片
//将<img>元素的引用存放在变量中
let myImage = document.querySelector('img');
//绑定变量与事件
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/DB.png') {
      myImage.setAttribute('src', 'images/DB2.png');
    } else {
      myImage.setAttribute('src', 'images/DB.png');
    }
}
//获取<button>（在html文件中定义button：在<script>标签前添加  <button>切换用户</button>  ）和<h1>元素
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');  //弹出提示框，并要求输入信息，再输入存在变量中
    if(!myName || myName === null)     //如果myName变量中没有值 或者 此时用户没有输入内容（null）
    {
        setUserName();  //重新弹出此提示框
    }
    else
    {
        localStorage.setItem('name', myName);  //localStorage这个API可以将数据存储在浏览器中（此处创建了一个'name'数据项）供后续获取
        myHeading.innerHTML = '欢迎访问  轻量化数据库' + myName;
    }
  }

  if(!localStorage.getItem('name')) {      //检测数据项'name'是否存在
    setUserName();    //若不存在，调用函数来创建
  } else {
    let storedName = localStorage.getItem('name');    //获取数据项'name'中保存的值要用getItem()函数)
    myHeading.textContent = '欢迎访问  轻量化数据库，' + storedName;
  }
//绑定函数和事件
  myButton.onclick = function() {
    setUserName();
 }