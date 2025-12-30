/*
==================================================
JSON & API — ADVANCED TEST CHALLENGES
==================================================

INSTRUCTIONS:
- Each challenge starts with a QUESTION
- Solve using ONLY JSON concepts:
  (JSON syntax, JSON.parse, JSON.stringify, objects, arrays)
- The ANSWER is written directly below
- The FINAL RESULT must appear as a COMMENT
==================================================
*/


/*
--------------------------------------------------
CHALLENGE 1
--------------------------------------------------
You receive the following JSON response from a server.
Convert it to a JavaScript object, then:
- Increase the user's score by 50
- Add a new property "isPremium" with value true
- Convert the result back to JSON text
--------------------------------------------------
*/

const response1 =
'{"username":"Ali","score":150,"online":true}';

const obj1 = JSON.parse(response1);
obj1.score += 50;
obj1.isPremium = true;

const result1 = JSON.stringify(obj1);

/*
RESULT:
'{"username":"Ali","score":200,"online":true,"isPremium":true}'
*/


/*
--------------------------------------------------
CHALLENGE 2
--------------------------------------------------
You receive a JSON string that contains an array of users.
Convert it to an object, then:
- Change the name of the user with id = 2 to "Hassan"
- Convert the updated data back to JSON
--------------------------------------------------
*/

const response2 =
'{"users":[{"id":1,"name":"Ali"},{"id":2,"name":"Omar"}]}';

const obj2 = JSON.parse(response2);
obj2.users[1].name = "Hassan";

const result2 = JSON.stringify(obj2);

/*
RESULT:
'{"users":[{"id":1,"name":"Ali"},{"id":2,"name":"Hassan"}]}'
*/


/*
--------------------------------------------------
CHALLENGE 3
--------------------------------------------------
The server sends JSON text containing nested data.
Convert it to an object, then:
- Update the city to "Basra"
- Set the zip code to null
- Send it back as JSON
--------------------------------------------------
*/

const response3 =
'{"profile":{"name":"Sara","address":{"city":"Baghdad","zip":10001}}}';

const obj3 = JSON.parse(response3);
obj3.profile.address.city = "Basra";
obj3.profile.address.zip = null;

const result3 = JSON.stringify(obj3);

/*
RESULT:
'{"profile":{"name":"Sara","address":{"city":"Basra","zip":null}}}'
*/


/*
--------------------------------------------------
CHALLENGE 4
--------------------------------------------------
You have a JavaScript object that must be sent to an API.
Before sending:
- Remove the "password" property
- Convert the remaining data to JSON text
--------------------------------------------------
*/

const userObject = {
  username: "admin",
  password: "123456",
  role: "manager"
};

delete userObject.password;

const result4 = JSON.stringify(userObject);

/*
RESULT:
'{"username":"admin","role":"manager"}'
*/


/*
--------------------------------------------------
CHALLENGE 5
--------------------------------------------------
An API sends a JSON string with mixed data types.
Convert it to an object, then:
- Add 20 to each number in the "scores" array
- Change "active" to false
- Convert everything back to JSON
--------------------------------------------------
*/

const response5 =
'{"scores":[10,20,30],"active":true}';

const obj5 = JSON.parse(response5);

obj5.scores[0] += 20;
obj5.scores[1] += 20;
obj5.scores[2] += 20;
obj5.active = false;

const result5 = JSON.stringify(obj5);

/*
RESULT:
'{"scores":[30,40,50],"active":false}'
*/


/*
==================================================
END OF TEST
==================================================
*/
