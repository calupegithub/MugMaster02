
const keyspressed = (socket, db, io) => {
    return (data) => {
      io.emit("showSomething");
    };
  };

  module.exports = {
    keyspressed,
  };
  