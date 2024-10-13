  
  
  const changeScreen = (socket, io) => {
          socket.emit('navigateTo', 'tutorialPage')
  };  

  // const randomKeys = (socket, db, io) => {
    //socket.emit
  // };

  const verifyKeys = (socket, db, io) => {
    
  };

  const animationKeys = (socket, db, io) => {
    
  };

  

  module.exports = {
    changeScreen,
    verifyKeys,
    animationKeys
  };