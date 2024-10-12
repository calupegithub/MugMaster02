const db = require("../db");

const { changeScreen, randomKeys, verifyKeys, animationKeys } = require("../events-server/events-server")
const { reciveKeys, reciveAnimation } = require("../events-users/eventsExampleHandlers")
const { keyspressed } = require("../events-arduino/arduino-events")

const serverEvents = (socket, io) => {
  socket.on("event-user", changeScreen(socket, db, io));
  socket.on("event-user", randomKeys(socket, db, io));
  socket.on("event-user", verifyKeys(socket, db, io));
  socket.on("event-user", animationKeys(socket, db, io));
};

const userEvents = () =>{
  socket.on("event-user", reciveKeys(socket, db, io));
  socket.on("event-user", reciveAnimation(socket, db, io));
};

const arduinoEvents = () =>{
  socket.on("event-user", keyspressed(socket, db, io));
};

module.exports = { 
  serverEvents,
  userEvents,
  arduinoEvents
 };
