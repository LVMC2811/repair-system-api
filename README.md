# Repair System Api

A mildly opinionated, RESTish API for `Unit Repair System` built with AWS Lambda and API Gateway

### About
Designed to minimally abstract database logic, this API based on AWS Lambda allows you to quickly distribute your data into your front end application. We have succesfully deployed this API on top of Dynamo DB.
 
### Organization

````
mapping-templates
  //...
  Here you will find all the mapping templates of the API
  ..//
methods
  //...
  Here you will find all the methods of the API
  ..//
mocks
  //...
  Here you will find all the mocks of the API, to test post methods
  ..//
models
  //...
  Here you will find all the models used by the API
  ..//
````

### Start

Call the endpoint
https://kd82ax7lik.execute-api.us-east-1.amazonaws.com/develop/ with the respective method and resource

### Routes 
#### GET Routes
````
develop/order-details/{id}
````
#### POST Routes
````
develop/order-details/{id}
````
#### PUT Routes
````

````