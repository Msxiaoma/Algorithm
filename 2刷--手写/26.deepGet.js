
const deepGet = (obj, path) => {
  const keyArr = path.split('.').map(item => item)

  const result = keyArr.reduce((acc, cur) => {
    const objKey = cur.includes('[') && cur.replace(/[\[?=0-9\]$]/gi, '')
    if (Array.isArray(acc[objKey])) {
      cur = cur.replace(/[^?=0-9]/gi, '')
      return acc[objKey][cur] || {}
    }
    return acc[cur] ? acc[cur] : {}
  }, obj)

  return Object.keys(result).length ? result : undefined;
}

/** 以下为测试代码 */
console.log(deepGet(
  {
    school: {
      student: { name: 'Tomy' }
    }
  },
  'school.student.name'
)) // => 'Tomy'

deepGet(
  {
    school: {
      students: [{ name: 'Tomy' }, { name: 'Lucy' }]
    }
  },
  'school.students[1].name'
) // => 'Lucy'

// 对于不存在的属性，返回 undefined
deepGet({ user: { name: 'Tomy' } }, 'user.age') // => undefined
deepGet({ user: { name: 'Tomy' } }, 'school.user.age') // => undefined