let vnode = {
  tag: 'DIV',
  attrs:{
  id:'app'
  },
  children: [
    {
      tag: 'SPAN',
      children: [
        { tag: 'A', children: [] }
      ]
    },
    {
      tag: 'SPAN',
      children: [
        { tag: 'A', children: [] },
        { tag: 'A', children: [] }
      ]
    }
  ]
}
// 把上诉虚拟Dom转化成下方真实Dom
// <div id="app">
//   <span>
//     <a></a>
//   </span>
//   <span>
//     <a></a>
//     <a></a>
//   </span>
// </div>

function _render(vnode) {
    if(typeof vnode === "string") {
        return document.createTextNode(vnode);
    }
    const dom = document.createElement(vnode.tag);
    if(vnode.attrs) {
        Object.keys(vnode.attrs).keys(key => {
            document.setAttribute(key, vnode.attrs[key]);
        })
    }
    if(vnode.children) {
        vnode.children.forEach(child => {
            document.appendChild(_render(child));
        })
    }
    return dom;
}

console.log(_render(vnode))