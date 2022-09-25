// 拷贝对象: 就是复制一份对象(常见：{} [])  clone

// 深拷贝：就是拷贝前和拷贝后没有关系
// 浅拷贝：就是拷贝前和拷贝后有关系

const obj = {
  name: 'heima',
  age: 10,
  a: {
    b: 1
  }
}
const newObj = {}

for (let key in obj) {
  // console.log(key, obj[key])
  // 通过 ['xxProperty'] = value
  newObj[key] = obj[key]
}
// newObj['sex'] = '男'
newObj['a']['b'] = 10
// 当前 obj 只有一层属性的时候，确实是深拷贝
console.log(newObj, obj)
// 通过 for in循环的时候，遇到多层属性的属性是浅拷贝
//（修改新对象的时候，能够影响到老对象）

const obj = {
  name: 'heima',
  age: 10
}
// 最简单粗暴的形式去复制对象(深拷贝)
const newObj = JSON.parse(JSON.stringify(obj))
newObj['gender'] = '男'
console.log(newObj, obj)

const arr = [1, 2, 3, 4]
const newArr = JSON.parse(JSON.stringify(arr))
newArr.push(5)

console.log(arr, newArr)

// review 0902

// 添加事件处理函数
$('#btn').click(function () {}) // 老写法

// on 绑定  off 解绑
$('#btn').on('click', function () {}) // 新写法（推荐写法）

// 使用 on 可以对新增加的一些元素添加点击事件（先有元素 -> 再给已有元素添加事件）
// 委托
$('ul').on('click', 'btn', function () {})

// 发布微博案例（再写一遍）

// off 解绑 $('btn').off() $('btn').off('click')  $('ul').off('click', 'li')

// 模拟点击行为（自动触发xx事件）
$('.btn').click() // 实现按钮的自动触发
$('.input').focus() // 实现输入框自动聚焦

// trigger 触发的方法
$('.btn').trigger() // 实现按钮的自动触发
$('.input').trigger('focus|blur') // 实现输入框自动聚焦

$('.input').triggerHandler('focus') // 特殊：不会触发默认行为

// 事件对象 e
// e.target -> 指向当前触发该事件的那个真实的 dom 元素

// e.stopPropagation() 阻止冒泡行为
// e.preventDefault() 阻止表单提交行为

// 拷贝对象、数组（深拷贝，浅拷贝）  $.extend Object.assign 拷贝对象（需要再写两遍）
// 自己如何去实现一个深拷贝？

// 本地存储相关（sessionStorage、localStorage、cookies[曲奇饼干的意思]、indexdDB）

// 1M = 1024kb   1kb = 1024b  1024 -> 2 的 10次方
// sessionStorage：存储周期是多少呢？页面关闭之后就没了，存储周期很短（存储是页面级别）存储的体积 < 1M
// localStorage：本地存储，只要你不删除，它是永久性存储；存储的体积 大约是 5M（用的比较多）
// cookies: 一般自动存储从服务器拿过来的数据，后面去请求的数据时候，会自动携带未过期的数据（请求有关） 体积也特别小
// indexdDB: 可以存储很多很多数据，类似于数据库（视图、索引的概念）http://www.ruanyifeng.com/blog/2018/07/indexeddb.html

// todolist 今晚过完它~
