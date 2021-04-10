//searchBar.jsx

import React, { Component } from 'react';

class Gif extends Component {

  // constructor (props) {
  //   super(props)

  //   this.state = { id: 'mFqh5Ha6IHyrcLipUH/200w.gif?cid=ecf05e47cmeywhx0f41pfe3ytr58tx2650m77wn8q4vvl65j&amp' }
  // }

  render () {
    let source = `https://media3.giphy.com/media/${this.props.id}/giphy.gif`
    return (
      <img src={source} className="gif"/>
    );
  }
}

export default Gif;


// "https://media4.giphy.com/media/QBGxylAmyP6X0BYUll/200w.gif?cid=ecf05e47cmeywhx0f41pfe3ytr58tx2650m77wn8q4vvl65j&amp;rid=200w.gif"
//dl-a93jwI0wkWTQs
//https://media3.giphy.com/media/a93jwI0wkWTQs/giphy.gif
