<img src="coderhouse.png" align="right" />

# CoderReact

This readme will detail the total deliveries of a Coderhouse React programming course.

## Functionality

This *readme* will describe how the app works and the details of each page.
In order to obtain results closer to reality, the ML API was used to obtain their details.
To simplify the possibilities of results, it was decided **only** to have 4 categories:

```go

[
{
"title": "CELLULAR"
},
{
"title": "COMPUTING"
},
{
"title": "CONSOLES"
},
{
"title": "ELECTRONICS"
}

]
```
The generated routes will be described below.

## Routes
>/
>
The first route is the home, on that page 6 products (the most relevant) of a category, of those described above, will be shown at random.
6 cards are shown, one per product, with the following information:

- Image (this image is not seen with greater definition, since it is the one that the api returns as a thumbnail, within the product there is a higher quality image)
- Title
- Price
- Stock

All results are provided by the API. Clicking on a product opens another route with its details

>/item/:itemId

In this case, there is the detail of the item with the following information:

- Image
- Title
- Condition
- Quantity Sold
- Price
- Description
- Buy buttons (generates an alert) and + and - buttons to add to cart

Once they are added, they are sent to the cart and are present on each screen (when we have persistence we can improve the flow by better handling status and quantity changes).

#### NavBar
The NavBar is present on all screens, when you click on the logo you go to the start and when you click on each Link you go to the corresponding category:
>/category/:categoryId