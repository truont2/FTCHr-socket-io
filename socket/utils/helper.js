let deployed = true;

let prefixURL = deployed
  ? "https://ftchrapp.herokuapp.com/"
  : "http://localhost:3000";

export default prefixURL;
