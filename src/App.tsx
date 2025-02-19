// App.tsx
import './App.css';
import { Outlet } from 'react-router-dom';
import { ButtomDock } from './components/docks/ButtomDock';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
        <Outlet />
      <ButtomDock />
    </div>
  );
}

export default App;
