import logo from './logo.svg';
import './App.css';
const mailchimp = require('@mailchimp/mailchimp_marketing');


function App() {

  mailchimp.setConfig({
    apiKey: process.env.REACT_APP_MAIL_API,
    server: process.env.REACT_APP_MAIL_SERVER,
  });
  async function callPing() {
    console.log(process.env.REACT_APP_MAIL_SERVER);
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
