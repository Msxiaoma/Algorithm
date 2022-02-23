let data = [
  { id: 3, parentId: 1},
  { id: 4, parentId: 2},
  { id: 5, parentId: 1},
  { id: 6, parentId: 5},
  { id: 7, parentId: 3},
  { id: 1, parentId: 0},
  { id: 2, parentId: 0},
]

// 转成
// [
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
// ]

function listToTree(data) {
    let temp = {};
    const treeData = [];
    for(let i = 0; i < data.length; i++){
        temp[data[i].id] = data[i];
    }
    for(let i in temp) {
        if(temp[i].parentId != 0) {
            if(!temp[temp[i].parentId].children) {
                temp[temp[i].parentId].children = []
            }
             temp[temp[i].parentId].children.push(temp[i]);
        } else {
            treeData.push(temp[i]);
        }
    }
    return treeData;
}

console.log(JSON.stringify(listToTree(data)));


function listToTree(data) {
    let temp = {};
    for(let i = 0; i < data.length; i++) {
        temp[data[i].id] = data[i];
    }
    let treeData = {};
    for(let i in temp) {
        if(temp[i].parent) {
            if(!temp[temp[i].parent].children) {
                temp[temp[i].parent].children = [];
            }
            temp[temp[i].parent].children.push(temp[i]);
        } else {
            delete temp[i].parent;
            treeData = temp[i];
        }
    }
    return treeData;
}
const nodes = [
 { id: 2, parent: 1 },
 { id: 1, parent: null },
 { id: 3, parent: 1 },
 { id: 4, parent: 2 },
 { id: 5, parent: 2 },
];

console.log(listToTree(nodes));