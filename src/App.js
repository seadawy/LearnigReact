import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './navbar';
import Home from './home';
import Create from './CreateBlog';
import BlogDetails from './BlogDetails';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="className">
          <center>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/create">
                <Create></Create>
              </Route>
              <Route path="/blog/:id">
                <BlogDetails></BlogDetails>
              </Route>
            </Switch>
          </center>
        </div>
      </div>
    </Router>
  );
}

export default App;
