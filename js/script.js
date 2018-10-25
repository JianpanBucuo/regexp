let reg = /\d+/g;
let str = 'abc123de45fgh6789qqq111';
console.log(str.match(reg));

//正则表达式的创建方式
 
let reg = /pattern/flags;

let reg = new RegExp(pattern,flags);

//flags: 标识 （修饰符）
标识符主要包括
1. i 忽略大小写匹配
2. g 全局匹配，模式应用于所有字符串，而非找到第一个匹配项则停止
3. m 多行匹配，多行匹配

//字面量创建方式和构造函数创建方式的区别

let regParams = "cm";
let reg1 = new RegExp(regParams+1);
let reg2 = /regParams/

//字面量创建方式不需要转义
//实例创建方式需要转义

let reg1 = /\d/;
let reg2 = new RegExp(/\\d/);
reg1 == reg2 //true

//元字符

\d 0-9之间的任意数字， \d 只占一个位置
\D  除了 \d

\w 数字，字母，下划线， 0-9 a_z A_Z _
\W 除了 \w

\s 空格或者空白
\S 除了\s

\n 匹配换行符
.  除了\n以外的其他字符

|  或者
() 分组

\b 匹配边界 字符串的开头和结尾
^  限定开始位置
$  限定结束位置
[a-z]  任意字母，[]中的任意一个都可以
[^a-z] 除了[]中的任意一个都可以
[abc]  abc字母中任意一个
[^abc] 除了abc都可以


//代表次数的量词元字符

// *  0到多个
// +  1到多个
// ?  0次或者1次，可有可无
// {n}  正好n次
// {n,} n到多次
// {n,m} n到m次


let reg =  /^\s+|\s$/g //匹配开头结尾空格

var str ='  我是空格君  ';
str.replace(reg,"");
//消除空格


// []中的字符没有特殊含义
// 就如+ 就表示+ 
// 但是向 \w还是有特殊含义的

let str = "abc";
let str2 = "dbc";
let str3 = ".bc";

let reg = /[ab.]bc/;
reg.test(str3); //true


//[]中，不会出现两位数

[12] 表示 1或2  
[0-9] 表示 0到9 
[a-z] 表示a到z

//实际上我们匹配这个 18-65 年龄段正则我们要拆开要匹配

reg = /(1[89]) | [2-5]\d |6[0-5]/g;

()的提高优先级功能 凡是有 | 出现的时候，我们一定要注意是否要加上 () 来提高优先级

只要正则中出现了，括号就会形成一个分组






