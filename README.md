# Phase 2 React-App: Four-Gables App

## Demo

This is a link to the demo video of how the app works. 

``
frontend link
``
![frontend link](https://four-gables-app.herokuapp.com/)

``
backend link
``
![backend link](https://powerful-gorge-80946.herokuapp.com/houseData)

## Introduction

Welcome to Fo-Gab, where dreams come home! We encourage you to search, see, explore, love and let us guide you home. Our layout is extremely user friendly, offering a beautiful interface as the homes we offer. Our mantra being the magnitude of the minute, we showcase simplicity in its most grandiose form. 

Join us as we take you through what you expect from us.

## Setup

After unbundling the project:

1. Run `npm install` in your terminal.
2. Run `npm run server`. This will run your backend on port `8004`.
3. In a new terminal, run `npm start`. This will run your React app on port `8000`.

Make sure to open [http://localhost:8004/houseData](http://localhost:8004/houseData) in the browser to verify that your backend is working before you proceed!

The base URL for your backend is: `http://localhost:8004`

## Core Deliverables

As a user:

1. When the app starts, I can see all currently uploaded homes.
2. I can sign-up and add a new home to the list of homes while sending that data back to the server.
3. I can delete homes and add homes at will.
4. I am yet to redirect the user to the more detailed content about the home.

### Endpoints for Core Deliverables

#### GET /homes

Example Response:

```json
[
  {
      "id": 2,
      "firstName": "Baraza",
      "secondName": "Okwetu",
      "email": "barazaokwetu@gmail.com",
      "country": "Kenya",
      "password": "abcdefg",
      "imgUrl": "./images/img-2.jpg",
      "label": ".Feel the Nature",
      "path": "./Services",
      "description": "Get woken up by the cool breeze of the ocean."
    },
    {
      "id": 3,
      "firstName": "Esther",
      "secondName": "Hoyt",
      "email": "estherhoyt@gmail.com",
      "country": "South Africa",
      "password": "12345",
      "imgUrl": "./images/img-9.jpg",
      "label": ".Feel the Nature",
      "path": "./About",
      "description": "Beautiful waterfall scenery."
    },
]
```

#### POST `/homes`

Required Headers:

```js
{
  "Content-Type": "application/json"
}
```

Request Object:

```json
{
  "firstName": "Billy",
  "secondName": "Omollo",
  "email": "billyomollo@gmail.com",
  "country": "Tanzania",
  "password": "12345",
  "imgUrl": "./images/img-5.jpg",
  "label": ".Feel the Nature",
  "path": "./About",
  "description": "When you want a town setting."
},   
```

Example Response:

```json
{
  "id": 4,
  "firstName": "Billy",
  "secondName": "Omollo",
  "email": "billyomollo@gmail.com",
  "country": "Tanzania",
  "password": "12345",
  "imgUrl": "./images/img-5.jpg",
  "label": ".Feel the Nature",
  "path": "./About",
  "description": "When you want a town setting."
},
```
#### DELETE `/homes/:id`

```
Using a button, function and the filter method, a home can be deleted and the remaining homes displayed.

Example Response:

```json
{}
```

#### Advanced Deliverables

```
As a user:

1. I can add a home to my favorites and see it on a separate list.
2. I can click on a home and see it on a separate page with more detailed content.

```
