// const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().split("\n");

//덱

// const input = [
//   '15',
// 'push_back 1',
// 'push_front 2',
// 'front',
// 'back',
// 'size',
// 'empty',
// 'pop_front',
// 'pop_back',
// 'pop_front',
// 'size',
// 'empty',
// 'pop_back',
// 'push_front 3',
// 'empty',
// 'front'
// ]
const input = [
  '15',
'push 1',
'push 2',
'front',
'back',
'size',
'empty',
'pop',
'pop',
'pop',
'size',
'empty',
'pop',
'push 3',
'empty',
'front'
]

class Queue {
  constructor() {
    this.storage = {};	// 값을 저장할 객체
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
        return this.rear - this.front + 1;
      }
    }
    push(value){
      if (this.size() === 0) {
        this.storage['0'] = value;
      } else {
        this.rear += 1;
        this.storage[this.rear] = value;
      }
    }
    pop() {
      if (this.size() === 0) {
        // this.storage['0'] = value;
        return -1;
      }
      let temp;	// 첫 원소 값을 임시로 담을 변수
      if (this.front === this.rear) {
        temp = this.storage[this.front];
        delete this.storage[this.front];
        this.front = 0;
        this.rear = 0;
      } else {
        temp = this.storage[this.front];
        delete this.storage[this.front];
        this.front += 1;
      }
      return temp;
    }
    empty() {
      if (this.size() === 0) {
        return 1;
      }
      return 0
    }
    frontLeft(){
      if (this.size() === 0) {
        return -1;
      }
      return this.storage[this.front]
    }
    back() {
      if (this.size() === 0) {
        return -1;
      }
      return this.storage[this.rear]
    }
}

// push X: 정수 X를 큐에 넣는 연산이다.
// pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// size: 큐에 들어있는 정수의 개수를 출력한다.
// empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
// front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.

const length = input.shift();
const queue = new Queue();
const result = [];
for (let i =0; i<length ;i++){
  const comd = input[i].split(' ')[0]
  const num = input[i].split(' ')[1]
  if(comd === 'push'){
    queue.push(num)
  } else if(comd === 'pop'){
    result.push(queue.pop())
  } else if(comd === 'size'){
    result.push(queue.size())
  } else if(comd === 'empty'){
    result.push(queue.empty())
  } else if(comd === 'front'){
    result.push(queue.frontLeft())
  } else if(comd === 'back'){
    result.push(queue.back())
  }
}
console.log(result.join('\n'))