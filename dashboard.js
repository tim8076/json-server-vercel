
let token;
// 後台管理者註冊
function register() {
  axios.post('http://localhost:3000/register', {
    "email": "andy@gmail.com",
    "password": "123456",
    "userName": "Andy",
    "role": ["admin"],
  })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  })
}

// 後台管理者登入
function login() {
  axios.post('http://localhost:3000/login', {
    "email": "andy@gmail.com",
    "password": "123456",
  })
  .then(response => {
    console.log(response.data);
    token = response.data.accessToken;
  })
  .catch(error => {
    console.log(error);
  })
}

// 修改密碼
function updatePassword() {
  axios.patch('http://localhost:3000/users/1', {
    "password": "123456",
  }, {
    headers: {
      "authorization": `Bearer ${token}`,
    }
  })
  .then((res) => {
    console.log(res.data);
  })
  .catch(err => {
    console.log('錯誤資訊', err.response)
  })
}

// 新增商品
function addProduct() {
  axios.post('http://localhost:3000/660/products', {
    "title": "[賣]動物園造型衣服2",
    "category": "衣服",
    "origin_price": 100,
    "price": 300,
    "unit": "個",
    "description": "Sit down please 名設計師設計",
    "content": "這是內容",
    "is_enabled": 1,
    "imageUrl": "主圖網址",
    "imagesUrl": [
      "圖片網址一",
      "圖片網址二",
      "圖片網址三",
      "圖片網址四",
      "圖片網址五"
    ]
  }, {
    headers: {
      "authorization": `Bearer ${token}`,
    }
  })
  .then((res) => {
    console.log(res.data);
  })
  .catch(err => {
    console.log('錯誤資訊', err.response)
  })
}

// 取得商品列表
function getProducts() {
  axios.get('http://localhost:3000/660/products', {
    headers: {
      "authorization": `Bearer ${token}`,
    }
  })
  .then((res) => {
    console.log(res.data);
  })
  .catch(err => {
    console.log('錯誤資訊', err.response)
  })
}

// 刪除單一產品
function deleteProduct(id) {
  axios.delete(`http://localhost:3000/660/products/${id}`, {
    headers: {
      "authorization": `Bearer ${token}`,
    }
  })
  .then((res) => {
    console.log(res.data);
  })
  .catch(err => {
    console.log('錯誤資訊', err.response)
  })
}

// 修改單一產品
function modifyProduct(id) {
  axios.put(`http://localhost:3000/660/products/${id}`, {
    "title": "[賣]動物園造型衣服4",
    "category": "衣服",
    "origin_price": 100,
    "price": 300,
    "unit": "個",
    "description": "Sit down please 名設計師設計",
    "content": "這是內容",
    "is_enabled": 1,
    "imageUrl": "主圖網址",
    "imagesUrl": [
      "圖片網址一",
      "圖片網址二",
      "圖片網址三",
      "圖片網址四",
      "圖片網址五"
    ]
  },
  {
    headers: {
      "authorization": `Bearer ${token}`,
    }
  })
  .then((res) => {
    console.log(res.data);
  })
  .catch(err => {
    console.log('錯誤資訊', err.response)
  })
}

// 新增優惠券

function addCoupon() {
  axios.post('http://localhost:3000/660/coupons', {
    "title": "超級特惠價格2",
    "is_enabled": 1,
    "percent": 80,
    "due_date": '2025-01-01',
    "code": "testCode"
  }, {
    headers: {
      "authorization": `Bearer ${token}`,
    }
  })
  .then((res) => {
    console.log(res.data);
  })
  .catch(err => {
    console.log('錯誤資訊', err.response)
  })
}

// 取得優惠券列表

function getCoupons() {
  axios.get('http://localhost:3000/660/coupons', {
    headers: {
      "authorization": `Bearer ${token}`,
    }
  })
  .then((res) => {
    console.log(res.data);
  })
  .catch(err => {
    console.log('錯誤資訊', err.response)
  })
}

// 刪除單一優惠券
function deleteCoupon(id) {
  axios.delete(`http://localhost:3000/660/coupons/${id}`, {
    headers: {
      "authorization": `Bearer ${token}`,
    }
  })
  .then((res) => {
    console.log(res.data);
  })
  .catch(err => {
    console.log('錯誤資訊', err.response)
  })
}

// 修改單一優惠券
function modifyCoupon(id) {
  axios.put(`http://localhost:3000/660/coupons/${id}`, {
    "title": "超級特惠價格3",
    "is_enabled": 1,
    "percent": 70,
    "due_date": '2025-01-01',
    "code": "testCode"
  },
  {
    headers: {
      "authorization": `Bearer ${token}`,
    }
  })
  .then((res) => {
    console.log(res.data);
  })
  .catch(err => {
    console.log('錯誤資訊', err.response)
  })
}

// 新增文章
function addArticle() {
  axios.post('http://localhost:3000/660/articles', {
    "title": "新增第一篇文章",
    "description": "文章內容",
    "image": "test.testtest",
    "tag": [
      "tag1"
    ],
    "create_at": "2024-12-07",
    "author": "alice",
    "isPublic": false,
    "content": "這是內容"
  }, {
    headers: {
      "authorization": `Bearer ${token}`,
    }
  })
  .then((res) => {
    console.log(res.data);
  })
  .catch(err => {
    console.log('錯誤資訊', err.response)
  })
}

// 取得文章列表
function getArticles() {
  axios.get('http://localhost:3000/660/articles', {
    headers: {
      "authorization": `Bearer ${token}`,
    }
  })
  .then((res) => {
    console.log(res.data);
  })
  .catch(err => {
    console.log('錯誤資訊', err.response)
  })
}

// 刪除單一文章
function deleteArticle(id) {
  axios.delete(`http://localhost:3000/660/articles/${id}`, {
    headers: {
      "authorization": `Bearer ${token}`,
    }
  })
  .then((res) => {
    console.log(res.data);
  })
  .catch(err => {
    console.log('錯誤資訊', err.response)
  })
}

// 修改單一文章
function modifyArticle(id) {
  axios.put(`http://localhost:3000/660/articles/${id}`, {
    "title": "新增第一篇文章2",
    "description": "文章內容2",
    "image": "test.testtest",
    "tag": [
      "tag1"
    ],
    "create_at": "2024-12-07",
    "author": "alice",
    "isPublic": false,
    "content": "這是內容"
  },
  {
    headers: {
      "authorization": `Bearer ${token}`,
    }
  })
  .then((res) => {
    console.log(res.data);
  })
  .catch(err => {
    console.log('錯誤資訊', err.response)
  })
}

// 取得訂單列表
function getOrders() {
  axios.get('http://localhost:3000/660/orders?_expand=user', {
    headers: {
      "authorization": `Bearer ${token}`,
    }
  })
  .then((res) => {
    console.log(res.data);
  })
  .catch(err => {
    console.log('錯誤資訊', err.response)
  })
}

// 刪除單一訂單
function deleteOrder(id) {
  axios.delete(`http://localhost:3000/660/orders/${id}`, {
    headers: {
      "authorization": `Bearer ${token}`,
    }
  })
  .then((res) => {
    console.log(res.data);
  })
  .catch(err => {
    console.log('錯誤資訊', err.response)
  })
}

// 修改單一訂單
function modifyOrder(id) {
  axios.put(`http://localhost:3000/660/orders/${id}`, {
    "create_at": "2024-12-14",
    "is_paid": false,
    "message": "這是留言2",
    "products": [
      {
        "productId": 1,
        "productPrice": 500,
        "qty": "3"
      }
    ],
    "total": 1500,
    "info": {
      "address": "kaohsiung",
      "email": "test@gmail.com",
      "name": "test",
      "tel": "0912346768"
    },
    "userId": 1,
  },
  {
    headers: {
      "authorization": `Bearer ${token}`,
    }
  })
  .then((res) => {
    console.log(res.data);
  })
  .catch(err => {
    console.log('錯誤資訊', err.response)
  })
}