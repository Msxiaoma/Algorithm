let data = [
  { id: 3, parentId: 1},
  { id: 2, parentId: 1},
  { id: 4, parentId: 2},
  { id: 5, parentId: 4},
  { id: 6, parentId: 5},
  { id: 7, parentId: 3},
  { id: 1, parentId: 0},
]

// 转成
//   {
//     id: 1,
//     parentId: 0,
//     children: [
//       {
//         id: 2,
//         parentId: 1
//       }
//     ]
//   }

function listToTree(data) {
    const map = {};
    let treeData = {};
    for(let i = 0; i < data.length; i++) {
        map[data[i].id] = data[i];
    }
    for(let id in map) {
        let parentId = map[id].parentId;
        if(parentId) {
            if(!map[parentId].children) {
                map[parentId].children = [];
            }
            map[map[id].parentId].children.push(map[id]);
        } else {
            treeData = map[id];
        }
    }
    return treeData;
}

console.log(JSON.stringify(listToTree(data)));