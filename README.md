# Cloud-native-frontend
 
 This application is part of a course called Cloud Native Apps. It is a React frontend application that makes use of the other teams API microservices to create a functional service, a simple hat store.
 
 https://master.dd1saovtaf1ro.amplifyapp.com/

 ## APIs

 - Inventory API:
 https://github.com/3nicksand2dudes/InventoryAPI
 -  Customer API: 
 https://github.com/realDanneG/cloud-native-customer/blob/master/CustomerAPI.yaml
 - Product API:
 https://github.com/nylundOfficial/CNA-product/blob/dev/index.js#L13
 - Delivery API:
[Missing]

## Installation
To run the front-end locally (Connections to the APIs will not work, however it will use mock data):

1. Clone the github repository: 
`git clone https://github.com/wickstjo/cloud-native-frontend `

2. Install project dependancies 
`npm install`

3. Start the development environment `npm start`

4. [Optional] Run the tests `CI=true npm test`

## Deployment
When a new commit is pushed to the master branch, AWS Amplify automatically takes the code and builds it, where is is then deployed as a website.

## Structure
```
/
|_  src/
|   |_  components/     # Components
|   |   |_  cart        # ..that are used by the cart page
|   |   |_  input       # ..that are used to validate input
|   |   |_  menu        # ..that are used by the menu
|   |   |_  messages    # ..that is used to render messages
|   |   |_  prompt      # ..that is used to render prompts
|   |   |_  shop        # ..that are used by the shop page
|   |
|   |_  funcs/          # Functions
|   |   |_api           # ..that use real API calls
|   |   |_mock          # ..that use Mock data
|   |       |_  data    # Mock data
|   |
|   |_  interface/      # Interface
|   |   |_  css         # CSS files
|   |   |_  fonts       # Font files
|   |   |_  images      # Image files
|   |
|   |_  pages/          # Pages
|   |
|   |_  states/         # States
|
```

