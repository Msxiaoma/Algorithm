{/* <div>
  <span>
    <a></a>
  </span>
  <span>
    <a></a>
    <a></a>
  </span>
</div>

把上诉dom结构转成下面的JSON格式

{
  tag: 'DIV',
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
} */}

    function domToJson(dom) {
        const vnode = {};
        vnode.tag = dom.tagName;
        vnode.chidren = [];
        dom.childNodes.forEach(node => {
            if(node.nodeType != 3){  // 判断换行之后的空白 text节点
                vnode.chidren.push(domToJson(node))
            }
        })
        return vnode;
    }