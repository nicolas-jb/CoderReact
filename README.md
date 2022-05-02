<img src="coderhouse.png" align="right" width=300px />

# CoderReact

Here is the detail of my final project of a Coderhouse React programming course.<br/><br/>



# Demo
![Alt Text](Demo.gif)
<br/><br/>

# Application

The idea of the application is to make an e-commerce focusing on the frontend using React <img class="ml-4 w-8 h-8 sm:w-10 sm:h-10" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" height=30px> and using firebase <img class="ml-4 w-8 h-8 sm:w-10 sm:h-10" src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" height=30px > as BaaS (Backend as a Service).
We use firebase databases and their hosting to be able to publish the application.

> ## **URL:** https://bernastore-b013d.web.app/
 
 <br/>

## Functionality

This _readme_ will describe how the app works and the details of each page.
In the database we have three very specific collections. <br/>
The categories whose titles are the following:

```json
[
  { "title": "CELULARES" },
  { "title": "COMPUTACIÓN" },
  { "title": "CONSOLAS" },
  { "title": "ELECTRÓNICA" }
]
```

Products with the following format:

```json
{
  "categoria": "...",
  "condition": "...",
  "description": "...",
  "imageUrl": "...",
  "initial": 1,
  "price": 1,
  "soldQuantity": 1,
  "stock": 1,
  "title": "..."
}
```

And the orders:

```json
{
  "buyer": {
    "email": "...",
    "name": "...",
    "phone": "..."
  },
  "date": "...",
  "items": [
    {
      "id": "...",
      "price": 1,
      "quantity": 1,
      "title": "...",
      "total": 1,
      ...
    }
  ]
}
```

The flow of the functionalities, is that the user enters to a home page where he sees the products of a random category.

Then you have a navbar where you can filter to a certain category.

Once a product is selected, you can enter the detail by clicking on it and you can add a desired quantity to the cart.

The cart is accessible from the navigation bar at all times and within it you have the options to remove the products, remove the product one unit at a time or directly empty the cart. And obviously, the option to **buy**!

In this case, a modal is displayed that requests registration data (name, telephone and email - data that will be validated) and if everything is correct, the order will be generated.



## Routes
Home:

> /


 The first route is the home, on that page 6 products of those categories described above, will be shown at random.

 6 cards are shown, one per product, with the following information:

- Image 
- Title
- Price
- Stock

All results are provided by the API. Clicking on a product opens another route with its details

> /item/:itemId

In this case, there is the detail of the item with the following information:

- Image
- Title
- Condition
- Quantity Sold
- Price
- Description
- "+" and "-" buttons to add to cart (and when you add, appear another button "Ir al carrito")

Once they are added, they are sent to the cart.

#### NavBar

The NavBar is present on all screens, when you click on the logo you go to the home and when you click on each link you go to the corresponding category:

> /category/:categoryId

Then we have the cart path:

> /cart

In this route we have the summary of all the products that were added, with their quantity and price. We also have some buttons to remove products or empty the cart.

In the event that we do not have products or the cart is empty, an image related to this situation will be displayed, different from when we have products added.

The buy button causes a modal to be displayed that requests user data to then register the order. The generation of the order is linked to the checking of the current stock of each product to avoid errors, that is, the updating and generation actions are carried out in the base in an atomic way to avoid competition problems. If all goes well, a modal confirming the registration of the order will be displayed and if something goes wrong the modal will indicate an error reason. Then the cart is emptied and will be redirected to home.

<br/>

Finally, for all the rest of the routes that were not detailed, there is a 404 message with a redirection button to home.

<br/><br/>

The extra libraries that I used for the project are ui material <img src="https://img.icons8.com/color/480/material-ui.png" alt="Material UI LOGO" height=30px/> for certain design styles, firebase <img class="ml-4 w-8 h-8 sm:w-10 sm:h-10" src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" height=30px > for data management and hosting, and react-hook-form <img src="https://pbs.twimg.com/profile_images/1373527896472489987/YjVZynHb_400x400.jpg" height=30px/> for everything related to the form and data validation.



