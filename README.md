# postgres-express-backend
TD: 
draft up the db diagram
  - consider adding methods
add prettier config file
add sequelize logger
- check all http status codes
consider refactoring httperror.js



>methods needed: (bulleted ones are for sure needed)
- given a stateCode, find all forms for that state 

- given a form id, be able to get all q's associated with that form

answers eager load their question's attributes
submissions eager load answers

given a submission id, get all answers to that submission (eager load questions?)

given a form id, get all submission id's to that form (eager load answers?)







>Repo or DB name references: 
>> `server/db/_db.js` on line 4
