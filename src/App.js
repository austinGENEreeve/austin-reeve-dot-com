import logo from './logo.svg';
import './App.css';
require('dotenv').config();
const mailchimp = require('@mailchimp/mailchimp_marketing');

mailchimp.setConfig({
  apiKey: process.env.MAIL_API,
  server: process.env.MAIL_SERVER,
});

function App() {

  async function callPing() {
    const response = await mailchimp.ping.get();
    console.log(response);
  }

  callPing();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Austin Reeve</h1>
      </header>
    </div>
  );
}

export default App;
