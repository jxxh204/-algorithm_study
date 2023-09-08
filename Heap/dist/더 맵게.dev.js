"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PriorityQueue =
/*#__PURE__*/
function () {
  function PriorityQueue() {
    _classCallCheck(this, PriorityQueue);

    this.value = [];
  }

  _createClass(PriorityQueue, [{
    key: "bubbleUp",
    value: function bubbleUp() {
      var heapIndex = this.value.length - 1;

      while (heapIndex > 0) {
        var element = this.value[heapIndex]; // bubbleUp

        var parentIdx = Math.floor((heapIndex - 1) / 2);
        var parent = this.value[parentIdx]; //swap

        if (element <= parent) break; // 같은 뎁스일 경우에만 스왑한다.

        this.value[heapIndex] = parent;
        this.value[parentIdx] = element;
        heapIndex = parentIdx;
      }
    }
  }, {
    key: "enqueue",
    value: function enqueue(val) {
      this.value.push(val);
      this.bubbleUp();
    }
  }, {
    key: "sinkDown",
    value: function sinkDown() {
      var index = 0;
      var length = this.value.length;
      var parent = this.value[index];

      while (true) {
        var l_childIndex = 2 * index + 1;
        var r_childIndex = 2 * index + 2;
        var l_child = void 0,
            r_child = void 0;
        var swap = null;

        if (l_childIndex < length) {
          l_child = this.value[l_childIndex];

          if (l_child < parent) {
            swap = l_childIndex;
          }
        }

        if (r_childIndex < length) {
          r_child = this.value[r_childIndex];

          if (swap === null && r_child < parent || swap !== null && r_child < l_child) {
            // swap이 null이라는 건 l_childIndex가 swap에 들어가지 않았을 때 라는 말.
            // left가 부모보다 작거나
            // left가 부모보다 클 때 right보다 left가 작을 경우 if 적용.
            swap = r_childIndex;
          }
        }

        if (swap === null) break;
        this.value[index] = this.value[swap];
        this.value[swap] = parent;
        index = swap;
      }
    }
  }, {
    key: "dequeue",
    value: function dequeue() {
      var root = this.value[0];
      var end = this.value.pop();

      if (this.value.length > 0) {
        this.value[0] = end;
        this.sinkDown();
      }

      console.log("dequeue", end);
      return end;
    }
  }]);

  return PriorityQueue;
}();

function solution(scoville, K) {
  var count = 0;
  var priority = new PriorityQueue();
  scoville.forEach(function (s) {
    return priority.enqueue(s);
  }); //   while (true) {
  //     let first = priority.dequeue();
  //     if (first >= K) return count; // 모든 스코빌 지수가 K 이상일 경우
  //     if (scoville.length === 0) return -1; // 더 이상 섞을 음식이 없는 경우
  //     let second = priority.dequeue();
  //     let mixed = first + second * 2;
  //     console.log("mixed", mixed);
  //     priority.enqueue(mixed, mixed);
  //     count++;
  //   }

  while (priority.value[0] > K && priority.value.length > 1) {
    var first = priority.dequeue();
    var second = priority.dequeue();
    console.log(first, second, priority.value);
    count++;
    priority.enqueue(first + second * 2);
  }

  return priority.value[0] >= K ? count : -1;
}

console.log(solution([1, 2, 3, 9, 10, 12], 7));