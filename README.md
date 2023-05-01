## App.JS

states are initialized

the data is fetched from db port 4000

function enlistBot- create a new array based on the bots array checking if the current id element is equal to id of the bot

function removeBot does the opposite of enlist bot

function deleteBot deletes the bot form Db and filters out the bot id to set the  state for the NEw array

renders the Botshow and BotCollection components

## Botshow.js

shows the records when selected and removed 

the uses the botcard reusable component to map the items items

takes in the removeBot() funtion to filterout the record from the list when clicked

## Botcollection.js

shows the all the records of bots 

the uses the botcard reusable component to map the items items

takes in the enlistBot() funtion to enlist the bot to the botshow component

# Navbar component 

Not added routes yet because uts 1 page