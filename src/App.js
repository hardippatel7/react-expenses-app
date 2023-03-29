import Expenses from "./components/Expenses/Expenses";



const App = () => {
  const expenses = [
    { id: 'e1', title: 'Rent', amount: '403.75', date: new Date(2023, 1, 24) },
    { id: 'e2', title: 'MomoZone', amount: '15.50', date: new Date(2023, 1, 15) },
    { id: 'e3', title: 'Walmart', amount: '50.55', date: new Date(2023, 1, 22) },
    { id: 'e4', title: 'Bowling', amount: '19.60', date: new Date(2023, 1, 7) },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses data={expenses}/>
    </div>
  );
}

export default App;
