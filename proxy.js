const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Thiết lập middleware để chuyển hướng các yêu cầu từ trang web đến máy chủ Socket.IO
app.use('/socket.io', createProxyMiddleware({ 
  target: 'http://192.168.1.2:3000', // Địa chỉ IP và cổng của máy chủ Socket.IO
  changeOrigin: true,
  ws: true
}));

// Thiết lập middleware để xử lý yêu cầu từ trang web
app.use(express.static('public')); // Thay 'public' bằng thư mục chứa tệp HTML của bạn

// Lắng nghe cổng 5500 (hoặc cổng bạn chọn)
const port = 3000;
app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});
