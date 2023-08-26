const onReady = (client) => {
  console.log(`Logged in as ${client.user.tag}!`);
};

const onLoginSuccess = (value) => {
  console.log(`onLoginSuccess ${value}`);
};

const onLoginError = (reason) => {
  console.log(`onLoginError ${reason}`);
};

export {
  onReady,
  onLoginSuccess,
  onLoginError,
};
