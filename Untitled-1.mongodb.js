1) How to create DB
    use product; ==> switched to db product
​
2)How to see which database are you in
   db; ==> products
​
3) How to add a collection into a DB
    db.createCollection("products"); ==> { "ok" : 1 }
​
4)How to insert a single Document into a collection 
    db.products.insertOne({ "product_name":"Laptop", "price" : 800, "tax": 32});
​
5)How to insert multiple Documents into a collection
db.electronics.insertMany([{"name":"ipod", "price":111}, {"name":"iphone 11"}, {"name":"radio", "price":53, "tax":10}]);
​
6)How to insert a single or many documents into a collection
  db.electronics.insert({"name":"iron", "tax":12});
  db.electronics.insert([{"price":123}, {"name":"radio", "tax":8}]);
​
7)How to create our own index
  db.electronics.ensureIndex({"name":1});
​
8)How to drop database
  db.dropDatabase();
​
9)How to drop collection
  db.electronics.drop();
​
10)How to read all documents from a collection
  db.clothes.find();
  db.clothes.find().pretty(); ==> Makes the output more readable
​
11)How to read limited number of Documents
  db.clothes.find().pretty().limit(2); ==> It will display just first 2 documents
​
12) How to read 3rd document
  db.clothes.find().pretty().skip(2).limit(1);
​
13)How to read documents whose names are Shirt
db.clothes.find({$and:[{"name":"Shirt"}]});
​
14)How to read documents whose name is "Shirt" AND priceis "34"
  db.clothes.find({$and:[{"name":"Shirt"}, {"price":34}]}).pretty();
​
15)How to read documents whose names are "Shirt" OR "Trouser"
  db.clothes.find({$or:[{"name":"Shirt"}, {"name":"Trouser"}]}).pretty();
​
16)How to read just prices of the Shirts
  db.clothes.find({"name":"Shirt"},{"price":1,"_id":0}).pretty();