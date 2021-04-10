//searchBar.jsx

import React, { Component } from 'react';

import Gif from './gif.jsx';


class GifList extends Component {

  // constructor (props) {
  //   super(props)

  //   this.state = { gifs: ['mFqh5Ha6IHyrcLipUH/200w.gif?cid=ecf05e47cmeywhx0f41pfe3ytr58tx2650m77wn8q4vvl65j&amp', 2, 3, 4 ,4 , 4] };
  // }

  handleClick = (event) => {
    const id = event.target.src.replace(/(.*media\/)(.*)(\/giphy.gif)/, '$2');
    console.log(id);
    this.props.funcChange(id);
  }

  render () {
    return (
      <div className="gif-list" onClick={this.handleClick}>
        {this.props.gifs.map( (gif) => {
          {/*console.log(gif.id);*/}
          return <Gif id={gif.id} key={gif.id}/>;
        }) }
      </div>
    );
  }
}

export default GifList;
