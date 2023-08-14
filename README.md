# Tokopedia Play Clone API

## Table of Contents

- [Database Schema](#database-schema)
- [API List](#api-list)
  - [Videos](#videos)
  - [Products](#products)
  - [Comments](#comments)
- [How To Run](#how-to-run)
- [Swagger](#swagger)
- [License](#license)

## Database Schema

Database Schema for Tokopedia Play Clone

![Table Videos](./docs/images/table-videos.png) ![Table Products](./docs/images/table-products.png)

![Table Comments](./docs/images/table-comments.png)

## API List

## Videos

Schema for videos

```
{
    id: ObjectId
    title: string
    imgUrl: string
    videoUrl: string
    totalView: number
    storeName: string
    discountCoupon: boolean
    onlyAtLiveonlyAtLive: boolean
    categories: array
    createdAt: timestamp
    updatedAt: timestamp
}
```

## GET /videos

Return All Videos

- Query Params
  - search\
    required: false\
    example: http://localhost:3000/videos?search=gebyardiskon
- Headers\
  Content-Type: application/json
- Responses

##### ✅ 200 Success Get All Videos

```
{
  "status": true,
  "code": 200,
  "message": "Success Get All Videos",
  "data": [
    {
      "id": "64d90813ca0d755458124bf8",
      "title": "Review Iphone 13 mini",
      "imgUrl": "https://i.ytimg.com/vi/NXIPoWHl3q0/hqdefault.jpg",
      "videoUrl": "https://youtu.be/t2Y7Ct6WxMM",
      "totalView": 567,
      "storeName": "Brian Solid",
      "discountCoupon": true,
      "onlyAtLive": true,
      "categories": [
          "live",
          "apple",
          "promo"
      ],
      "createdAt": "2023-08-13T16:42:59.297Z",
      "updatedAt": "2023-08-13T16:42:59.297Z"
    }
  ]
}
```

##### ❌ 404 Data Not Found

```
{
  "status": false,
  "code": 404,
  "message": "Data Not Found",
  "data": [],
  "errors": []
}
```

##### ❌ 500 Internal Server Error

```
{
  "status": false,
  "code": 500,
  "message": "Internal Server Error",
  "data": [],
  "errors": []
}
```

## POST /videos

Return Added Video

- Headers\
  Content-Type: application/json
- Request Body

```
{
  "title": "Unboxing Macbook m2",
  "imgUrl": "https://i.ytimg.com/vi/c5WDE95oe08/maxresdefault.jpg",
  "videoUrl": "https://youtu.be/JbySX-g-WcY",
  "totalView": 876,
  "storeName": "Chomp Pirampa",
  "discountCoupon": false,
  "onlyAtLive": false,
  "categories": ["apple"]
}
```

- Responses

##### ✅ 200 Success Added Video

```
{
  "status": true,
  "code": 200,
  "message": "Success Added Video",
  "data": {
    "id": "64da3f1aa4355c184b57ddfb",
    "title": "Unboxing Macbook m2",
    "imgUrl": "https://i.ytimg.com/vi/c5WDE95oe08/maxresdefault.jpg",
    "videoUrl": "https://youtu.be/JbySX-g-WcY",
    "totalView": 876,
    "storeName": "Chomp Pirampa",
    "discountCoupon": false,
    "onlyAtLive": false,
    "createdAt": "2023-08-14T14:50:02.186Z",
    "updatedAt": "2023-08-14T14:50:02.186Z"
  }
}
```

##### ❌ 400 Failed to Add Video

```
{
  "status": false,
  "code": 400,
  "message": "Failed to Add Video",
  "data": [],
  "errors": []
}
```

##### ❌ 500 Internal Server Error

```
{
  "status": false,
  "code": 500,
  "message": "Internal Server Error",
  "data": [],
  "errors": []
}
```

## Products

Schema for Products

```
{
    id: ObjectId
    videoId: ObjectId
    title: string
    imgUrl: string
    price: number
    priceFormat: string
    productUrl: string
    createdAt: timestamp
    updatedAt: timestamp
}
```

## GET /products/{videoID}

Return All Products

- Path Params
  - videoID\
    required: true\
    example: http://localhost:3000/videos/videoID01
- Headers\
  Content-Type: application/json
- Responses

##### ✅ 200 Success Get All Products

```
{
  "status": true,
  "code": 200,
  "message": "Success Get All Products",
  "data": [
    {
      "id": "64d8ce896ad855e4d65436ea",
      "videoId": "64d8ce066ad855e4d65436e6",
      "title": "Macbook",
      "imgUrl": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202206?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664497359481",
      "price": 20000,
      "priceFormat": "Rp. 20000",
      "productUrl": "https://tokopedia.link/VdpQYtlleCb",
      "createdAt": "2023-08-13T12:37:29.419Z",
      "updatedAt": "2023-08-13T12:37:29.419Z"
    }
  ]
}
```

##### ❌ 404 Data Not Found

```
{
  "status": false,
  "code": 404,
  "message": "Data Not Found",
  "data": [],
  "errors": []
}
```

##### ❌ 500 Internal Server Error

```
{
  "status": false,
  "code": 500,
  "message": "Internal Server Error",
  "data": [],
  "errors": []
}
```

## POST /products/{videoID}

Return Added Product

- Path Params
  - videoID\
    required: true\
    example: http://localhost:3000/videos/videoID01
- Headers\
  Content-Type: application/json
- Request Body

```
{
  "title": "Gebyar Tahun Baru",
  "imgUrl": "https://localhost:3000/images/diskon-peripheral-gaming.jpg",
  "price": 200000
}
```

- Responses

##### ✅ 200 Success Added Product

```
{
  "status": true,
  "code": 200,
  "message": "Success Added Product",
  "data": [
    {
      "id": "64da3f7da4355c184b57ddfd",
      "videoId": "64da3f1aa4355c184b57ddfb",
      "title": "Apple MacBook Air M1 Chip 2020 256GB 8GB",
      "imgUrl": "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/7/24/4eb93636-506b-4ab8-8ad5-0cd6edab0acd.png",
      "price": 11899000,
      "priceFormat": "Rp. 11899000",
      "productUrl": "https://tokopedia.link/pxdl5KFAeCb",
      "createdAt": "2023-08-14T14:51:41.632Z",
      "updatedAt": "2023-08-14T14:51:41.632Z"
    }
  ]
}
```

##### ❌ 400 Failed to Add Video

```
{
  "status": false,
  "code": 400,
  "message": "Failed to Add Product",
  "data": [],
  "errors": []
}
```

##### ❌ 500 Internal Server Error

```
{
  "status": false,
  "code": 500,
  "message": "Internal Server Error",
  "data": [],
  "errors": []
}
```

## Comments

Schema for Comments

```
{
    id: ObjectId
    videoId: ObjectId
    username: string
    text: string
    createdAt: timestamp
    updatedAt: timestamp
}
```

## GET /comments/{videoID}

Return All Comments

- Path Params
  - videoID\
    required: true\
    example: http://localhost:3000/videos/videoID01
- Headers\
  Content-Type: application/json
- Responses

##### ✅ 200 Success Get All Comments

```
{
  "status": true,
  "code": 200,
  "message": "Success Get All Comments",
  "data": [
    {
      "id": "CommentID01",
      "videoId": "VideoID01",
      "username": "MRaehanR",
      "text": "Murah Banget Kak!",
      "createdAt": "2023-08-13T18:02:44.809Z",
      "updatedAt": "2023-08-13T18:02:44.809Z"
    }
  ]
}
```

##### ❌ 404 Data Not Found

```
{
  "status": false,
  "code": 404,
  "message": "Data Not Found",
  "data": [],
  "errors": []
}
```

##### ❌ 500 Internal Server Error

```
{
  "status": false,
  "code": 500,
  "message": "Internal Server Error",
  "data": [],
  "errors": []
}
```

## POST /comments/{videoID}

Return Posted Comment

- Path Params
  - videoID\
    required: true\
    example: http://localhost:3000/videos/videoID01
- Headers\
  Content-Type: application/json
- Request Body

```
{
    "username": "MRaehanR",
    "text": "Mouse nomor 1 kak!"
}
```

- Responses

##### ✅ 200 Success Added Comment

```
{
  "status": true,
  "code": 200,
  "message": "Success Added Comment",
  "data": [
    {
      "id": "CommentID01",
      "videoId": "VideoID01",
      "username": "MRaehanR",
      "text": "Murah Banget Kak!",
      "timestamp": "2023-07-26T12:03:18.273Z"
    }
  ]
}
```

##### ❌ 400 Failed to Post Comment

```
{
  "status": false,
  "code": 400,
  "message": "Failed to Post Comment",
  "data": [],
  "errors": []
}
```

##### ❌ 500 Internal Server Error

```
{
  "status": false,
  "code": 500,
  "message": "Internal Server Error",
  "data": [],
  "errors": []
}
```

## How To Run

Prerequisite

- [Node^20.0.0](https://nodejs.org/en/download/current)
- NPM^9.6.7
- [MongoDB^6.0.6](https://www.mongodb.com/try/download/community)

1. Clone This Repo

```
git clone https://github.com/MRaehanR/tokopedia-play-clone-api.git
```

2. Go to The Project Folder

```
cd tokopedia-play-clone-api
```

3. Install Dependencies

```
npm install
```

4. Install MongoDB Community
5. Setup The Environment or Rename .env.example to .env
6. Run The Project

```
npm start
```

## Swagger

Default Swagger documentation api at [localhost:3000/docs/api](http://localhost:3000/docs/api)

## License

[MIT LICENSE](./LICENSE)
