import './App.css'
import Layout from './components/Layout.jsx';
import Daily from './components/Daily.jsx';
import Weekly from './components/Weekly.jsx';
import { useView } from './context/ViewContext.jsx';

function App() {

  const { isDaily } = useView();

  return (
    <Layout>
      {isDaily ? <Daily /> : <Weekly />}
    </Layout>
  );
}

export default App
