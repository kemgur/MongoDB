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
  
  25) Note: How to delete a document ==> deleteOne(), deleteMany(), remove()
Note: If you ask to delete non-existing document, delete methods do not give any
      error, they tell "deletedCount" : 0"
Note: deleteMany(), and remove() do the same, just their outputs are different


26) db.grades.insertMany([
    { _id: 6305, name : "A. MacDyver", "assignment" : 5, "points" : 24 },
    { _id: 6308, name : "B. Batlock", "assignment" : 3, "points" : 22 },
    { _id: 6312, name : "M. Tagnum", "assignment" : 5, "points" : 30 },
    { _id: 6319, name : "R. Stiles", "assignment" : 2, "points" : 12 },
    { _id: 6322, name : "A. MacDyver", "assignment" : 2, "points" : 14 },
    { _id: 6234, name : "R. Stiles", "assignment" : 1, "points" : 10 }
    ]);

 27) delete whose assigment is less than 3
     db.grades.deleteMany({“p_price”:{$lt:3}});
     {acknowledged: true, deletedCount: 0 }

  28) delete whose assigment is greater than 3
      db.grades.deleteMany({"assignment":{$gt:3}});
  
  29)  remove() method is working like deleteMany() method,
       db.grades.remove({"assignment":{$gt:3}});

  30)  Update the names of all documents whose prices are less than 50 to "Wooow"
       db.clothes.update({"price":{$lt:50}},{$set:{"name":"Wooow"}}, {multi:true});
​
Note: If you do not type {multi:true}, update() will update the first one. 
If you want to update multiple documents type {multi:true}
​
Note: {multi:true} kullandigimizda tum veriler güncellenir. Aksi halde sadece birinci veri güncellenir. {upsert:true} ==>> aranan veri olmadiginda onu create eder.

Note: If you do not type {multi:true}, update() will update the first one. 
If you want to update multiple documents type {multi:true}
​
  31) Update the names of all documents whose prices are greater than 200 to "High Five"
      db.clothes.update({"price":{$gt:200}}, {$set:{"name":"High Five"}}, {multi:true, upsert:true});
​     {
  acknowledged: true,
  insertedId: ObjectId("60b9569f111e2633b75c77b7"),
  matchedCount: 0,
  modifiedCount: 0,
  upsertedCount: 1
        }
  32) How to use updateMany()
      db.clothes.updateMany({"price":{$lt:50}},{$set:{"name":"XXXXX"}});
​
  32) How to use updateOne()
      db.clothes.updateOne({"price":{$lt:50}}, {$set:{"name":"YYYYYY"}});
​
  33) How to use "upsert:true" in updateOne()
      db.clothes.updateOne({"price":{$lt:10}}, {$set:{"name":"YYYYYY"}}, {upsert:true});   
      db.grades.update({"assignment":20},{$set:{"name":"kemal","_id":123,"salary":100}},{upsert:true});
  

  34) aggregate
       db.stories.insertMany(
[{"story_author" : "dave", "score" : 60, "views" : 120 },
{"story_author" : "dave", "score" : 75, "views" : 200 },
{"story_author" : "chris", "score" : 90, "views" : 100 },
{"story_author" : "ali", "score" : 35, "views" : 3000 },
{"story_author" : "mary", "score" : 80, "views" : 350 },
{"story_author" : "veli", "score" : 54, "views" : 333 },
{"story_author" : "ocean", "score" : 97, "views" : 2000 }]);

> var  pipeline=[{$match:{}},{$group:{"_id":"$story_author",totalViews:{$sum:"$views"}}}];   
 db.stories.aggregate(pipeline);
 var pipeline=[{$match:{}},{$group:{"_id":"$story_author",totalScore:{$sum:"$score"}}}];
 db.stories.aggregate(pipeline);
 var pipeline=[{$match:{}},{$group:{"_id":"$story_author",totalScore:{$sum:"$views"}}}];
 db.stories.aggregate(pipeline);

 var pipeline = [{$match:{"$score:{$lt:80}}}, {$group:{"_id":"auther", average:{$avg:"$score"}}}];
db.article.aggregate(pipeline);


35) db.articles.insertMany(
[{"author" : "dave", "score" : 80, "views" : 100 },
{"author" : "dave", "score" : 85, "views" : 521 },
{"author" : "ahn", "score" : 60, "views" : 1000 },
{"author" : "Ali", "score" : 55, "views" : 5000 },
{"author" : "annT", "score" : 60, "views" : 50 },
{"author" : "Ali", "score" : 94, "views" : 999 },
{"author" : "ty", "score" : 95, "views" : 1000 }]);

//FIND average for views whose score is less than 80 for each names
var pipeline=[{$match:{score:{$lt:80}}},{$group:{"_id":"$author",averageofViews:{$avg:"$views"}}}];
 db.articles.aggregate(pipeline);





















*/