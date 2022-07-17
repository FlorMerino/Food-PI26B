import './App.css';
import { Route } from "react-router-dom";
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import RecipeDetail from './components/RecipeCards/RecipeDetails';

function App() {
  return (
    <div className="App">
    <Route exact path="/" component={Home} />
    <Route path="/home" component={Nav}/>
    <Route path="/recipeDetails/:id" component={RecipeDetail}/>
    </div>
  );
}

export default App;
