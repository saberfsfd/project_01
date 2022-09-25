$(function () {
  const TODO_LIST = 'TODO_LIST' // 更推荐的写法

  loadData()

  // 入口
  $('#title').on('keydown', function (e) {
    // 其实我们只关心 回车键
    if (e.keyCode === 13) {
      // 判断输入框为空的情况下
      const content = $(this).val().trim()
      if (!content) {
        return alert('请输入待办项')
      }
      // 尝试着先读取本地数据
      const list = getLocalData()
      const event = {
        content, // 待办项的内容
        done: false // 待办项的状态
      }
      list.unshift(event) // 返回的是数组的最新的长度
      // 清空一下待办项的输入框
      $('#title').val('')
      // 把最新的数据，再存到缓存中
      setLocalData(list)
      // 加载页面结构
      loadData() // Date -> 日期的意思  Data  -> 数据的意思
    }
  })

  $('ol, ul').on('click', 'input', function (e) {
    console.log(e) // e.target.checked 可以标识当前是否处于勾选状态

    const list = getLocalData()
    const index = +$(this).siblings('a').attr('index')
    // console.log()
    // 修改当前待办项的状态
    // list[index]['done'] = $(this).prop('checked')
    // list[index]['done'] = !list[index]['done']
    list[index]['done'] = e.target.checked // 推荐这种姿势
    setLocalData(list)
    loadData()
  })

  // 给删除按钮添加点击事件（事件委托）
  $('ol').on('click', 'a', function () {
    // 删除逻辑
    const list = getLocalData()
    // debugger
    // 我要删哪个？
    const index = +$(this).attr('index')
    // 根据 index 删除元素
    list.splice(index, 1) // 能够直接更改原数组的api（push pop unshift shift sort reverse）

    // 数据发生变化之后，记得要立即在缓存中存储一份
    setLocalData(list)
    // 哪些方法不会修改原数组：contact map(是会重新生成一个新数组的)  js进阶（都是面试题）
    // 重新加载页面
    loadData()
  })

  function getLocalData() {
    const data = localStorage.getItem(TODO_LIST)
    // if (data) {
    //   return JSON.parse(data)
    // } esle {
    //   return []
    // }
    // return data ? JSON.parse(data) : []
    // 以后，推荐三目运算符或逻辑或
    return JSON.parse(data) || []
    // return (data && JSON.parse(data)) || []
  }

  function setLocalData(data) {
    localStorage.setItem(TODO_LIST, JSON.stringify(data))
  }

  function loadData() {
    const list = getLocalData()
    // 为了每次渲染都是最新的数据，需要提前清空一下 ol 标签
    $('#todolist, #donelist').empty() // 清空里面的内容

    $.each(list, function (index, event) {
      // 这里是 通过 索引当做唯一值
      let el = null
      // try try see 试试看
      el = event.done ? $('#donelist') : $('#todolist')
      el.append(`
        <li>
            ${
              event.done
                ? '<input type="checkbox" checked />'
                : '<input type="checkbox" />'
            }
            <p>${event.content}</p>
            <a href="javascript:;" index=${index}></a>
        </li>
      `)
    })
  }
})

// slice(开始位置的索引, 结束位置的索引) 截取字符串，数组
// splice(开始位置的索引, 要删除的个数, [你要插入的元素]) 对数组进行操作

const str = '[object Number]'
// 我想要：Number
console.log(str.slice(8, -1))
// Number -> number 大写转小写
console.log(str.slice(8, -1).toLowerCase()) // toUpperCase() 小写转大写

const path = '#/home' // -> home
console.log(path.slice(2))

const arr = [1, 2, 3, 4]
console.log(arr.splice(3, 1)) // 返回的是你要删除的那个人
console.log(arr)

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
// contact 做合并数组的
console.log(arr1.concat(arr2), arr1, arr2)

const arr3 = [4, 5, 6]
// target: [{ score: 4 }, { score: 5 }, { score: 6 }]
console.log(
  arr3.map(function (item) {
    return {
      score: item
    }
  })
)
console.log(arr3)
// })
