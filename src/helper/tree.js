// class Queue {
//   constructor() {
//     this.items = {};
//     this.frontIndex = 0;
//     this.backIndex = 0;
//   }
//   enqueue(item) {
//     this.items[this.backIndex] = item;
//     this.backIndex++;
//   }
//   dequeue() {
//     const item = this.items[this.frontIndex];
//     delete this.items[frontIndex];
//     this.frontIndex++;
//     return item;
//   }
//   peek() {
//     return this.items[frontIndex];
//   }
//   logQueue() {
//     console.log(this.items);
//   }
// }


export class Tree {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

export class Operations {
  constructor() {}

  static add(root, val){
    if(!root){
      return new Tree(val,null,null)
    }
    const queue = [];
    queue.push(root)
    while(queue.length > 0){
      const currentNode = queue.shift();
      if(!currentNode.left){
        currentNode.left = new Tree(val, null, null);
        break;
      }else{
        queue.push(currentNode.left);
      }
      if(!currentNode.right){
        currentNode.right = new Tree(val, null, null);
        break;
      }else{
        queue.push(currentNode.right);
      }
    }
    return root;
  }

  static levelOrder(root) {
    if (!root) {
      console.log("empty");
      return;
    }
    
    const queue = [];
    let depth = - 1;
    
    queue.push(root);
    while (queue.length > 0) {
    
      const level = [];
      const levelSize = queue.length;
      depth = depth + 1;
      for (let i = 0; i < levelSize; i++) {
      
        const currentNode = queue.shift();
        level.push(currentNode.val);
        
        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);
      }
      console.log(level.join(" "));
      console.log(depth);
    }
  }
}
