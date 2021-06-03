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
=> db.products.find({$or:[{"p_price":1200},{"p_price":4000}]});
=> db.products.find({$and:[{"p_price":1200},{"p_brand":"dell"}]});
=> db.products.find({$and:[{"p_price":4000},{"p_brand":"ibm"}]});
=> db.products.find({$or:[{"p_price":7000},{"p_brand":"apple"}]});
 db.clothes.find({"price":{$lte:7000}}).pretty();

17) drop database
db.dropDatabase();

18) Compararison Operators
Note: Comparison Operators
      Equality ==> $eq
      Less than ==> $lt
      Greater than ==> $gt
      Less than or equal to ==> $lte
      Greater than or equal to ==> $gte 
      Not equal ==> $ne 
      In an Array ==> $in 
      Not in an Array ==> $nin

db.products.find({"p_price":{$gt:2000}},{"p_brand":1,"_id":0});
db.products.find({"price":{$in:[1200,500,4500]}}).pretty();

​
19) Fetch documents whose prices are one of the 1200,500,4500
    db.products.find({"p_price":{$in:[1200,500,4500]}},{"p_brand":1,"_id":0});

20) replace() method ==>> findOneAndReplace()
	It is finding our criteria then it is replacing and it remove to others feld	
    db.products.findOneAndReplace({"p_price":1000},{"b_brand":"asus"})
    db.products.findOneAndReplace({"p_price":{$lt:1000}},{"b_brand":"caspernirvana","p_name":"pc"});

21) replace whose p_brand is ibm  replace it with lenova p_name replace with pc p_price 5000
    db.products.findOneAndReplace({"p_brand":{$eq:"ibm"}},{"b_brand":"lenova","p_price":5000});
    db.products.findOneAndReplace({"p_brand":"ibm"},{"p_brand":"lenova","p_price":5000,"p_name":"pc"})

22) update() method ==>> findOneAndUpdate()    
     db.products.findOneAndUpdate({"p_brand":"lenova"},{$set:({"p_brand":"ibm"})});

23) update the document whose price is greater than 5000 update the brand to apple price 10000
    db.products.findOneAndUpdate({"p_price":{$gt:5000}},{$set:{"b_brand":"apple","p_price":10000}});

24) updateOne
    db.products.updateOne({"p_price":{$gt:5000}},{$set:{"b_brand":"apple","p_price":10000}});
	db.products.update({"p_price":{$lt:5000}},{$set:{"p_brand":"hp","p_price":50000}});	
	
	db.products.update({"p_price":{$lt:5000}},{$set:{"p_brand":"hp","p_price":50000}});
    DeprecationWarning: Collection.update() is deprecated. Use updateOne, updateMany, or bulkWrite.
    {
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
  }

  24) update ==>> single and multible update for multible {multi:true}
             ==>> updateMany() for update many documents
             db.products.updateMany( { "p_name":"pc" } , { $set :{"p_name":"laptop" } },{returnNewDocument:true}  ); 
      db.products.update({"p_price":{$lt:5000}}, {$set:{"p_price":6000, "p_brand":"apple"}},{multi:true});
      db.products.update({"p_price":{$lt:10000}}, {$set:{"p_price":10000, "p_brand":"apple"}},{multi:true, returnNewDocument:true});
      db.products.findOneAndReplace({"p_price":10000},{"p_brand":"toshiba"},{returnNewDocument:true});
  25) 
























*/