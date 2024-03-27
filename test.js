// 主线程代码
// 创建Web Worker
const worker = new Worker('worker.js');

// 监听Web Worker发送的消息
worker.onmessage = function(event) {
  console.log('Received message from worker:', event.data);
};

// 向Web Worker发送消息
worker.postMessage('Hello from main thread!');


// worker.js代码
// 监听主线程发送的消息
self.onmessage = function(event) {
  console.log('Received message from main thread:', event.data);
  
  // 模拟耗时的计算
  const result = calculate(event.data);
  
  // 向主线程发送消息
  self.postMessage(result);
};

// 执行耗时的计算
function calculate(data) {
  // ...
  return result;
}

const fn = function(){}

const fnInstance = new fn()
