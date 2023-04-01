// const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().split("\n");

//덱

const input = [
  '15',
'push_back 1',
'push_front 2',
'front',
'back',
'size',
'empty',
'pop_front',
'pop_back',
'pop_front',
'size',
'empty',
'pop_back',
'push_front 3',
'empty',
'front'
]

// const input = [
//   '22',
// 'front',
// 'back',
// 'pop_front',
// 'pop_back',
// 'push_front 1',
// 'front',
// 'pop_back',
// 'push_back 2',
// 'back',
// 'pop_front',
// 'push_front 10',
// 'push_front 333',
// 'front',
// 'back',
// 'pop_back',
// 'pop_back',
// 'push_back 20',
// 'push_back 1234',
// 'front',
// 'back',
// 'pop_back',
// 'pop_back',
// ]

// push_front X: 정수 X를 덱의 앞에 넣는다.
// push_back X: 정수 X를 덱의 뒤에 넣는다.
// pop_front: 덱의 가장 앞에 있는 수를 빼고, 그 수를 출력한다. 만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// pop_back: 덱의 가장 뒤에 있는 수를 빼고, 그 수를 출력한다. 만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// size: 덱에 들어있는 정수의 개수를 출력한다.
// empty: 덱이 비어있으면 1을, 아니면 0을 출력한다.
// front: 덱의 가장 앞에 있는 정수를 출력한다. 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// back: 덱의 가장 뒤에 있는 정수를 출력한다. 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.

class Queue {
  constructor() {
    this.storage = [];	// 값을 저장할 객체
    this.front = 0;	// 첫 원소를 가리킬 포인터
    this.rear = 0;	// 마지막 원소를 가리킬 포인터
  }

    // 크기 구하기
    size() {
      // rear가 가리키는 값이 없을 때가 아무 데이터가 없는 경우이다
      
      if (this.storage[this.rear] === undefined) {
        return 0;
      } else {
        // 그 외의 경우는 앞서 구한 공식으로 크기를 구할 수 있다
        return this.storage.length;
      }
    }
    push_front(value){
      if (this.size() === 0) {
        this.storage['0'] = value;
      } else {
        // this.rear += 1;
        // this.storage[this.front] = value;
        if (this.storage['0']) {
          //스토리지에 하나라도 있으면.
          for (let i = this.storage.length; i > 0; i--) {
            this.storage[i] = this.storage[i - 1];
            //스토리지를 한칸씩 밀어낸다. 7 = 8
          }
        }
        this.storage[this.front] = value;
        this.rear++;

      }
    }
    push_back(value){
      if (this.size() === 0) {
        this.storage['0'] = value;
      } else {
        this.rear += 1;
        this.storage[this.rear] = value;
      }
    }
    pop_front(){
      let temp;
      if (this.size() === 0) {
        return -1;
      }
       temp = this.storage[this.front];
       delete this.storage[this.front]
       return temp
    }
    pop_back(){
      let temp;
      if (this.size() === 0) {
        return -1;
      }
      temp = this.storage[this.rear];
      delete this.storage[this.rear];
      if(this.rear !== 0 ){
        this.rear--;
      }
      return temp
    }
    empty() {
      if (this.size() === 0) {
        return 1;
      }
      return 0
    }
    getFront(){
      if (this.size() === 0) {
        return -1;
      }
      return this.storage[this.front]
    }
    getBack() {
      if (this.size() === 0) {
        return -1;
      }
      return this.storage[this.rear]
    }
}

const length = input.shift();
const queue = new Queue();
const result = [];
for (let i =0; i<length ;i++){
  const comd = input[i].split(' ')[0]
  const num = input[i].split(' ')[1]
  switch (comd) {
    case 'push_front':
      queue.push_front(num)
    break;
    case 'push_back':
      queue.push_back(num)
    break;
    case 'pop_front':
      result.push(queue.pop_front());
    break;
    case 'pop_back':
      result.push(queue.pop_back());
    break;
    case 'size':
      result.push(queue.size());
    break;
    case 'empty':
      result.push(queue.empty());
    break;
    case 'front':
      result.push(queue.getFront());
    break;
    case 'back':
      result.push(queue.getBack());
    break;
  }
}
console.log(result.join('\n'))
