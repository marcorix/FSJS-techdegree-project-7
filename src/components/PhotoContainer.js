import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Photo from './Photo';
import NotFound from './Not-Found';

class PhotoContainer extends Component {
  render() {
    const query = this.props.query;
    let photos;
    let title = this.props.title;
    let currentUrl = this.props.history.location.pathname;

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
      title = <NotFound />;
    }

    if (currentUrl.includes('/search')) {
      let keyword = currentUrl.replace('/search/', '');
      if (keyword !== query) {
        this.props.onSearch(keyword);
      }
    }
    return (
      <div className="photo-container">
        <h2>{title}</h2>
        <ul>{photos}</ul>
      </div>
    );
  }
}

export default withRouter(PhotoContainer);
