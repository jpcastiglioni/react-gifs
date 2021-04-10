//app.jsx
import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './searchbar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {

  constructor (props) {
    super(props)

    let initID = 'mTVEqOSAp6m1a'

    //  let initGifs = ['a93jwI0wkWTQs', 2, 3, 4 ,4 , 4]

    this.state = { selectedGifID: initID,
                   gifs: []
                 }

    // this.giphy = require('giphy-api')();
    this.search('squirell');
  }

  search = (query) => {
    // Search with options using callback
    giphy('PeJbmoUhbkr4opuPdqw0Dae6sijciT4q').search({
        q: query,
        rating: 'g',
        limit: 10
    }, (err, res) => {
        // Res contains gif data!
        // console.log(res.data[0].id);
        this.setState({ gifs: res.data });
    });
  }

  changeSelected = (id) => {
    this.setState({ selectedGifID: id });
  }

  render () {

    return (
      <div>
        <div className="left-scene">
          <SearchBar funcSearch={this.search} />
          <div className="selected-gif">
            <Gif id= {this.state.selectedGifID} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} funcChange={this.changeSelected} />
        </div>
      </div>
    );
  }

}

export default App;

//https://media3.giphy.com/media/mTVEqOSAp6m1a/giphy.gif
