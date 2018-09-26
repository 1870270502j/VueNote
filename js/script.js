
//第一步：获取p标签的文本内容
var text = document.querySelector("#pid").innerText;

//第二步：截取p标签的文本内容
var getText = _.truncate(text, {'length': 30});

//第三步：把截取的值赋给h1标题
document.querySelector("#hid").innerHTML = getText;
