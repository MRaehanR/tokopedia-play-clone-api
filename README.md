# Tokopedia Play Clone API

## Table of Contents

- [Database Schema](#database-schema)
- [API List](#api-list)
  - [Videos](#videos)
  - [Products](#products)
  - [Comments](#comments)
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
      "id": "VideoID01",
      "title": "Diskon Peripheral Gaming",
      "imgUrl": "https://localhost:3000/images/diskon-peripheral-gaming.jpg",
      "videoUrl": "https://localhost:3000/api/videos/asodiuhjas890u123"
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

- Path Params
  - videoId\
    required: true\
    example: http://localhost:3000/videos/jhkasd0jhkjh234ks
- Headers\
  Content-Type: application/json
- Responses

##### ✅ 200 Success Added Video

```
{
  "status": true,
  "code": 200,
  "message": "Success Added Video",
  "data": {
    "id": "VideoID01",
    "title": "Diskon Peripheral Gaming",
    "imgUrl": "https://localhost:3000/images/diskon-peripheral-gaming.jpg",
    "videoUrl": "https://localhost:3000/api/videos/asodiuhjas890u123"
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
      "id": "ProductID01",
      "videoId": "VideoID01",
      "title": "Mouse Gaming Murah",
      "imgUrl": "https://localhost:3000/images/mouse-gaming-murah.jpg",
      "price": 20000,
      "priceFormat": "Rp. 20.000",
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
- Responses

##### ✅ 200 Success Added Product

```
{
  "status": true,
  "code": 200,
  "message": "Success Added Product",
  "data": [
    {
      "id": "ProductID01",
      "videoId": "VideoID01",
      "title": "Mouse Gaming Murah",
      "imgUrl": "https://localhost:3000/images/mouse-gaming-murah.jpg",
      "price": 20000,
      "priceFormat": "Rp. 20.000",
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
    timestamp: string
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
      "timestamp": "2023-07-26T12:03:18.273Z"
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

## Swagger

Default Swagger documentation api at [localhost:3000/docs/api](http://localhost:3000/docs/api)

## License

[MIT LICENSE](./LICENSE)
