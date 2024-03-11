const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // 指定要访问的 HTML 文件的路径
  const filePath = path.join(__dirname, './new_file.html');

  // 使用 fs 模块读取文件
  fs.readFile(filePath, (err, data) => {
    if (err) {
      // 发生错误时返回 404 错误
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }

    // 发送成功响应和 HTML 文件内容
    res.writeHead(200);
    res.end(data);
  });
});

const host = '0.0.0.0';
const port = 3000;
server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});