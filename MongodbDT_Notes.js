/*
1)How to create database
=> use inventory(database name)
=> use admin

2) check database where are you
=> db

3) Create collection
=> db.createCollection("products") ==>like Table name

4) Delete
=> db.collectionName.drop();

5) insert sngle data to collection
=> db.products.insertOne({"p_name":"laptop","p_price":2500,"p_brand":"apple","_id":101});

6) How to insert multible data, i should use []
[{},   {},  {}]
db.products.insertMany([{"p_name":"laptop","p_price":1200,"p_brand":"dell"},{"p_name":"laptop","p_price":500},{"p_name":"laptop","p_price":4500,"p_brand":"dell"}]);

7) Terminali temizlemek icin 
=> cls

8) How to insert single and multible data use just insert
db.products.insert([{"p_name":"laptop","p_price":4000,"p_brand":"dell"},{"p_name":"laptop","p_price":55000,"p_brand":"ibm"}]);

9) How to see all data?
=> db.products.find();

10) How to see JSON data format our data
=> db.products.find().pretty();

11) How to find specific data:
=> db.products.find({"p_name":"apple"});

12) How to find whose is p_price:2500
=> db.products.find({"p_price":2500});

13) How to read just prices of the "p_brand" and "p_price"
=> db.products.find({"p_brand":"dell"},{"p_price":1,"_id":0});
=> db.products.find({"p_brand":"dell"},{"p_price":1});

14) to see some field
db.products.find({"p_brand":"dell"},{"p_price":1,"_id":0});


15) For see first 2 data
=> db.products.find({"p_brand":"dell"},{"p_brand":1,"p_price":1,"_id":0}).limit(2);

16) pass first data and fetce two another two
=>db.products.find({"p_brand":"dell"},{"p_brand":1,"p_price":1,"_id":0}).skip(1).limit(2);

17) To fetch first document
=> db.products.find({"p_brand":"dell"},{"p_brand":1,"p_price":1,"_id":0}).limit(1);

18)To use AND OR operator $and ,  $or
=> db.products.find({$and:[{"p_price":1200},{"p_brand":"dell"}]});
=> db.products.find({$or:[{"p_price":1200},{"p_brand":"dell"}]});












*/