//Sempre que for importar algum arquivo de estilização, sempre devo importar
//apartir do javascript
import { ExperienceBar } from './components/ExperienceBar';
import './styles/global.css';

function App() {
  return (
    <div className="container">
      <ExperienceBar />
    </div>
    );
}

export default App;
