import AdminContainer from './components/AdminContainer/AdminContainer';
import{BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div>
     <BrowserRouter>
       <AdminContainer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
