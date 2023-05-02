const {createContext, useState} = require('react');

export const DataContext = createContext();

export const DataProvider = ({children}) => {
  const [user, setUser] = useState({
    name: 'Jane Doe',
    given: 100,
    recieved: 250,
  });
  const [reward, setReward] = useState([
    {
      name: 'David Green',
      message: 'Big thanks for your help on the outage today !!',
      amount: 20,
      by: 'Jane Doe',
    },
    {
      name: 'Alex Brown',
      message:
        'Thanks for your help in creating the product overview deck. Your help to show cases in those scenarios really helped in closing the loop on the story.',
      amount: 20,
      by: 'Jane Doe',
    },
    {
      name: 'David Green',
      message: 'Big thanks for your help on the outage today !!',
      amount: 23,
      by: 'Jane Doe',
    },
  ]);
  return (
    <DataContext.Provider value={{reward, setReward, user, setUser}}>
      {children}
    </DataContext.Provider>
  );
};
