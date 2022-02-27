# Bonsai Frontend Interview Assignment

## Table of contents
<!--ts-->
  * [Introduction](#introduction)
  * [Structure](#structure)
  * [Features](#features)
  * [Instructions](#instructions)
<!--te-->

## Introduction

Welcome to the Frontend interview test at [Shop Bonsai](https://www.shopbonsai.ca/). 
This interview test simulates an environment that is similar to working at Shop Bonsai.

## Structure

The project repository files are organized according to the diagram:

```shell
project/
├── frontend
│   ├── build
│   │	└── ...
│   ├── public
│   │    └── ...
│   └── src
│        ├── components
│        ├── features
│        ├── pages
│        ├── services
│        ├── styles
│        └── tests
├── App.tsx
├── CartContext.tsx
├── index.tsx
├── interfaces.ts
├── reducer.ts
├── Routes.tsx
├── store.ts
├── backend/
└── images/
```

Files summary and description:
* *components*: Commom shared components
* *features*: Main app features (Cart & Product)
* *pages*: Application pages, used for routing
* *services*: Application services (axios api setup)
* *styles*: Global styles and theme
* *tests*: Tests setup
* *CartContext*: Application Context for Cart modal
* *interfaces*: Shared TS interfaces
* *reducer*: Root reducer
* *Routes*: Routes file
* *store*: Redux Store
* *backend*: Backend API

* *images*: Main components printscreens, displaying the implemented features. [Features]

## Stack
This assessment rely on the following technologies:
* *Frontend*: ReactJS
* *Backend*: NodeJS
* *Styles*: styled-components
* *Global state*: Redux
* *Tests*: Jest

## Features

For this assignment, all the features bellow were implemented using Redux, Redux Thunk and _functional programming_.

1. **Products should show selectable options based on each `Product` data.**

   Inherently, selectable options are dynamic and each product can have different ones.
   You should be able to select any combination of provided selectable options, but only be able to add to cart a _valid_ product variant. `SelectionOption` is not known ahead of time and is derived from each product.

   A valid variant is one where:

   - it's parent `Product` is not discontinued
   - it's quantity is greater than 0
   - is not discontinued

2. **Products should show OOS label if**

   - all variants are invalid
   - product is discontinued

3. **Fully functional cart**

   - You should be able to add to cart _valid_ variants
   - You should be able to change the quantity in the cart.
   - You should be able to remove items from cart.

Every `Product` is a collection of `Variants` where each `Variant` contains `selectableOptions`. A `Variant` represents a purchasable product.
All `selectableOptions` will have the same structure accross all variants (for a given product).

For a given product, all of its variants will have the same structure of selectable options. For example, if selectable options for one variant of the product contain:

```typescript
[
  {
    type: 'color',
    value: 'red',
  },
  {
    type: 'size',
    value: 'L',
  },
];
```

that means that _all_ variants for that product will contain `color` and `size` selectable options. Not all permutations of `selectableOptions` match to a valid `Variant`.

## Instructions

Ensure [yarn](https://yarnpkg.com/) is installed.

### Server

Start backend server with:

```sh
cd ./server
yarn && yarn start
```

Server should be running at `http://localhost:8000` and product endpoint (GET) is located at `http://localhost:8000/products`

### Frontend

Start frontend server with:

```sh
cd ./frontend
yarn && yarn start
```
