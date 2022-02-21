// 点击外层元素，触发内部元素
 const onClickOutside = (element, callback) => {
     document.addEventListener('click', e => {
         const isClickOutside = !element.contains(e.target);
         if(isClickOutside) {
             callback()
         }
     })
};

