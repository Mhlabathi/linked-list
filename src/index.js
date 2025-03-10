import { LinkedList } from "./LinkedList.js";

const list = new LinkedList();

list.append('dog');
list.append('cat');
list.append('parrot');
list.prepend('hamster');

console.log(`List before pop: ${list.toString()}`);
console.log(list.size());
list.pop();
console.log(`List after pop: ${list.toString()}`);
console.log(list.size());
list.insertAt('inserted', 2);
console.log(list.contains('dog'));
console.log(list.find('dog'));
console.log(list.head());
console.log(list.tail());
console.log(list.size());
console.log(list.toString());
console.log(list.find('inserted'));
