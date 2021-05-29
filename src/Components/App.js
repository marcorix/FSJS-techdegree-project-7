import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

// App components
import SearchForm from './SearchForm';
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';
import apiKey from './Config';

class App extends Component {
  state = {
    italyPhotos: [],
    romePhotos: [],
    florencePhotos: [],
    venicePhotos: [],
  };

  componentDidMount() {
    this.performSearch('italy');
    this.performSearch('rome');
    this.performSearch('florence');
    this.performSearch('venice');
  }

  performSearch = (query) => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((res) => {
        if (query === 'rome') {
          this.setState({ romePhotos: res.data.photos.photo });
        } else if (query === 'florence') {
          this.setState({ florencePhotos: res.data.photos.photo });
        } else if (query === 'venice') {
          this.setState({ venicePhotos: res.data.photos.photo });
        } else if (query === 'italy') {
          this.setState({ italyPhotos: res.data.photos.photo });
        }
      });
  };

  render() {
    return (
      <Router>
        <div className="container">
          <SearchForm />
          <Nav />
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <PhotoContainer pictures={this.state.italyPhotos} />
              )}
            ></Route>
            <Route
              path="/rome"
              render={() => <PhotoContainer pictures={this.state.romePhotos} />}
            ></Route>
            <Route
              path="/florence"
              render={() => (
                <PhotoContainer pictures={this.state.florencePhotos} />
              )}
            ></Route>
            <Route
              path="/venice"
              render={() => (
                <PhotoContainer pictures={this.state.venicePhotos} />
              )}
            ></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
