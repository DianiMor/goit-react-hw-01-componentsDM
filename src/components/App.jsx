import React from 'react';

import Profile from './Profile/Profile';
import user from '../json/user.json';

import Statistics from './Statistics/Statistics';
import data from '../json/data.json';

import FriendList from './FriendList/FriendList';
import friends from '../json/friends.json';

import Transactions from './Transactios/TransactionHistory';
import transactions from '../json/transactions.json';

const App = () => {
  return (
    <>
      <h1>React Homework</h1>
      {/*       style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    > */}
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <h2>Statistics</h2>
      <Statistics title="Upload stats" stats={data}></Statistics>
      <h2>Friend List</h2>
      <FriendList friends={friends}></FriendList>
      <h2>Transactions</h2>
      <Transactions items={transactions}></Transactions>
    </>
  );
};

export default App;
