
let token;

// 用戶註冊
function register() {
  axios.post('http://localhost:3000/register', {
    "email": "Lisa@gmail.com",
    "password": "123456",
    "userName": "Lisa",
    "role": ["user"],
  })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  })
}
// 用戶登入
function login() {
  axios.post('http://localhost:3000/login', {
    "email": "Lisa@gmail.com",
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
  axios.patch('http://localhost:3000/600/users/6', {
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


// 取得商品列表
function getProducts() {
  axios.get('http://localhost:3000/products')
  .then((res) => {
    console.log(res.data);
  })
  .catch(err => {
    console.log('錯誤資訊', err.response)
  })
}

// 取得單一商品
function getProduct() {
  axios.get('http://localhost:3000/products/1')
  .then((res) => {
    console.log(res.data);
  })
  .catch(err => {
    console.log('錯誤資訊', err.response)
  })
}

// 收藏商品
function addFavorite() {
  axios.post('http://localhost:3000/600/users/3/favorites', {
    "productId": "1",
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

// 加入購物車
function addCart() {
  axios.post('http://localhost:3000/600/users/1/carts', {
    "productId": "1",
    "qty": 1,
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

// 取得購物車列表
function getCartLists() {
  axios.get('http://localhost:3000/600/users/3/carts?_expand=product', {
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

// 修改單一購物車
function modifyCart() {
  axios.patch('http://localhost:3000/600/carts/2', {
    "productId": "1",
    "qty": 66
   } , {
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

// 刪除單一購物車
function deleteCart() {
  axios.delete('http://localhost:3000/600/carts/1', {
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


// 送出訂單
function sendOrder() {
  axios.post(`http://localhost:3000/660/orders`, {
    "create_at": "2024-12-14",
    "is_paid": false,
    "message": "這是留言3",
    "products": [
      {
        "productId": 1,
        "productPrice": 500,
        "qty": "4"
      }
    ],
    "total": 2000,
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

