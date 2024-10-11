const db = require("../db");

const { changeScreen, randomKeys, verifyKeys } = require("../events-server/events-server")
const { usersKeys } = require("../events-users/eventsExampleHandlers")
const { keyspressed } = require("../events-arduino/arduino-events")

const serverEvents = (socket, io) => {
  socket.on("event-user", changeScreen(socket, db, io));
  socket.on("event-user", randomKeys(socket, db, io));
  socket.on("event-user", verifyKeys(socket, db, io));
};

const userEvents = () =>{
  socket.on("event-user", usersKeys(socket, db, io));
};

const arduinoEvents = () =>{
  socket.on("event-user", keyspressed(socket, db, io));
};

module.exports = { 
  serverEvents,
  userEvents,
  arduinoEvents
 };
