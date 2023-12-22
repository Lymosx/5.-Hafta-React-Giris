import React from 'react';
import Header from './components/Header';
import NumberList from './components/Accounts';

const users = ["Ali", "Ahmet", "Mehmet"];
const numbers = [1, 2, 3, 4, 5];
const user = "Admin"
function App() {
  return (
    <div>
      <Header />
      <div style={{ backgroundColor: 'beige', flex: 'auto', justifyContent: 'right' }}> Hoşgeldin {user} </div>
      <div>
        <img src='https://picsum.photos/id/237/200/300' />
      </div>
      <div>
        Users
        <ul>
          {users.map((user, index) => <li>{user}</li>)}
        </ul>
      </div>
      <NumberList numbers={numbers} />
    </div>
  );
}

export default App;