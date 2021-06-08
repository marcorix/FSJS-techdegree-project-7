import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Photo from './Photo';

class PhotoContainer extends Component {
  // state = {
  //   previousQuery: '',
  // };

  // When component mounts, run search on route path data prop.
  // componentDidMount() {
  //   this.props.onSearch(this.props.query);
  // }

  // componentDidUpdate() {
  //   let query;

  //   // Check if the query came from URL corresponds to a nav element or a search and assign to 'query' variable
  //   this.props.match.params.query
  //     ? (query = this.props.match.params.query)
  //     : (query = this.props.query);

  //   // Check if the new query is not equal to the previous query so that componentDidUpdate() only updates the photo list once per update
  //   if (this.state.previousQuery !== query) {
  //     // Search for photos based on URL query
  //     this.props.onSearch(query);
  //     this.setState({ previousQuery: query });
  //   }
  // }

  render() {
    let photos;
    let title = this.props.title;

    // Check if there are results
    if (this.props.pictures.length > 0) {
      // Create a Photo component for each photo in the result
      photos = this.props.pictures.map((picture) => {
        const size = 'w';
        // Create the url for the picture to display
        const url = `https://live.staticflickr.com/${picture.server}/${picture.id}_${picture.secret}_${size}.jpg`;
        return <Photo key={picture.id} url={url} />;
      });
    } else {
      title = 'Sorry no photos match your search';
    }
    return (
      <div class="photo-container">
        <h2>{title}</h2>
        <ul>{photos}</ul>
      </div>
    );
  }
}

export default withRouter(PhotoContainer);
