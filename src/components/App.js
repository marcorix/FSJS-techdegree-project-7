import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import axios from 'axios';

// App component
import SearchForm from './SearchForm';
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';
import apiKey from './Config';
import NotFound from './Not-Found';

class App extends Component {
  state = {
    romePhotos: [],
    florencePhotos: [],
    venicePhotos: [],
    naplesPhotos: [],
    searchPhotos: [],
    searchQuery: '',
    loading: true,
  };

  componentDidMount() {
    this.performSearch('rome');
    this.performSearch('florence');
    this.performSearch('venice');
    this.performSearch('naples');
  }

  performSearch = (query) => {
    this.setState({
      searchQuery: query,
    });
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((res) => {
        if (query === 'rome') {
          this.setState({
            romePhotos: res.data.photos.photo,
            loading: false,
          });
        } else if (query === 'florence') {
          this.setState({
            florencePhotos: res.data.photos.photo,
            loading: false,
          });
        } else if (query === 'venice') {
          this.setState({
            venicePhotos: res.data.photos.photo,
            loading: false,
          });
        } else if (query === 'naples') {
          this.setState({
            naplesPhotos: res.data.photos.photo,
            loading: false,
          });
        } else {
          this.setState({
            searchPhotos: res.data.photos.photo,
            loading: false,
          });
        }
      })
      .catch((error) => {
        // handle errors
        console.log(error);
      });
  };

  render() {
    return (
      <Router>
        <div className="container">
          <SearchForm onSearch={this.performSearch} />
          <Nav />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Redirect to="/rome" />}
            ></Route>
            <Route
              path="/rome"
              render={() => (
                <PhotoContainer pictures={this.state.romePhotos} title="Rome" />
              )}
            ></Route>
            <Route
              path="/florence"
              render={() => (
                <PhotoContainer
                  pictures={this.state.florencePhotos}
                  title="Florence"
                />
              )}
            ></Route>
            <Route
              path="/venice"
              render={() => (
                <PhotoContainer
                  pictures={this.state.venicePhotos}
                  title="Venice"
                />
              )}
            ></Route>
            <Route
              path="/naples"
              render={() => (
                <PhotoContainer
                  pictures={this.state.naplesPhotos}
                  title="Naples"
                />
              )}
            ></Route>
            <Route
              path="/search/:query"
              render={() => {
                if (this.state.loading) {
                  return <p>Loading...</p>;
                } else {
                  return (
                    <PhotoContainer
                      pictures={this.state.searchPhotos}
                      title={this.state.searchQuery}
                    />
                  );
                }
              }}
            ></Route>
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
