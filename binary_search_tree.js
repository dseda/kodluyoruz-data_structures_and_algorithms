class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    }

    if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }

  contains(data) {
    if (this.data === data) {
      return this;
    }

    if (data < this.data && this.left) {
      return this.left.contains(data);
    } else if (data > this.data && this.right) {
      return this.right.contains(data);
    } else {
      return null;
    }
  }
}

const myArray = [7, 5, 1, 8, 3, 6, 0, 9, 4, 2];

const root = myArray[Math.floor(Math.random() * myArray.length)];

const x = new Node(root);
myArray.forEach((element) =>
  element !== root ? x.insert(element) : undefined
);

myArray.forEach((element) =>
  element == root
    ? console.log(`${root} is the root node of the binary tree`)
    : console.log(x.contains(element))
);

// ///////////// OUTPUT //////////////////

// 7 is the root node of the binary tree
// Node {
//   data: 5,
//   left: Node {
//     data: 1,
//     left: Node { data: 0, left: null, right: null },
//     right: Node { data: 3, left: [Node], right: [Node] }
//   },
//   right: Node { data: 6, left: null, right: null }
// }
// Node {
//   data: 1,
//   left: Node { data: 0, left: null, right: null },
//   right: Node {
//     data: 3,
//     left: Node { data: 2, left: null, right: null },
//     right: Node { data: 4, left: null, right: null }
//   }
// }
// Node {
//   data: 8,
//   left: null,
//   right: Node { data: 9, left: null, right: null }
// }
// Node {
//   data: 3,
//   left: Node { data: 2, left: null, right: null },
//   right: Node { data: 4, left: null, right: null }
// }
// Node { data: 6, left: null, right: null }
// Node { data: 0, left: null, right: null }
// Node { data: 9, left: null, right: null }
// Node { data: 4, left: null, right: null }
// Node { data: 2, left: null, right: null }

// Binary Tree Illustration

//            7
//          /  \
//        5     8
//      /   \     \
//     1     6     9
//   /   \
//  0     3
//      /   \
//      2    4
