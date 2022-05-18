# Inventory Management System
## Requirements
- Basic CRUD Functionality. You should be able to:

  - Create inventory items
  - Edit Them
  - Delete Them
  - View a list of them

- ONLY ONE OF THE FOLLOWING (We will only evaluate the first feature chosen, so please only choose one)
  - When deleting, allow deletion comments and undeletion
  - Ability to create warehouses/locations and assign inventory to specific locations
  - Ability to create “shipments” and assign inventory to the shipment, and adjust inventory appropriately

## Running the Application on Replit
Go to my Replit repo https://replit.com/@yilinding10171/inventory-system#README.md
1. Start the server by click Run (green button on the up right cornor) and put the following into the terminal/shell:
```
  cd server
  npm i
  npm run dev
```
When you see the following, it means that the server side is set up and running susccessfully
<img width="575" alt="image" src="https://user-images.githubusercontent.com/55115710/169143746-6261dfa4-076e-4628-804a-767917dbd325.png">
2. Then duplicate the tab to start the client by put the following into the terminal/shell:
```
  cd client
  npm i
  npm run start
```
You should be seeing the following that allow you to test the appliation
<img width="568" alt="image" src="https://user-images.githubusercontent.com/55115710/169144244-766d661b-f0a1-493e-883c-732ec6c9174f.png">




## Running the Application on Local Machine
This code requires the following prerequisites to build:
- Node.js
- MongoDB

To run the code, follow the below steps:
1. `git clone git@github.com:yilinding1017/shopify-challenge.git`
2. `cd shopify-challenge`
3. Start front end: 
  ```
  cd client
  npm i
  npm start
  ```
4. Start server:
  ```
  cd ../server
  npm i
  npm start
  ```
This will begin an instance of the server on http://localhost:3000/ by default and you can see the fronend on http://localhost:7000/. You can test the endpoint using Postman.
