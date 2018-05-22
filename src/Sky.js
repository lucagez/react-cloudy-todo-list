import React, { Component } from 'react';

class Sky extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: []
      }
    }
    Cloud = () => {
      // var random = Math.random();
      // var top = (Math.round((random + 0.00005) * 70)) + '%';
      var top = Math.floor((Math.random() * (65) - 3)) + '%';
      var dim = (Math.floor((Math.random() + 0.3) * 80)) + 'px';
      var index = (Math.round(Math.random() * 2));
      var velocity = Math.floor((Math.random() * 5) * 10) + 's';
      console.log(top, dim, index, velocity);
      var cloudStyle = {
        top: top,
        height: dim,
        zIndex: index,
        animationDuration: velocity,
        animationTimingFunction: 'linear',
        animationName: 'cloud',
        animationDelay: '0',
        position: 'absolute',
        padding: '0',
        margin: '0',
        left: '-100px',
        visibility: 'hidden',
      }
      
      this.setState({data: [...this.state.data, cloudStyle]});
    }
    componentDidMount() {
      setInterval(() => this.Cloud(), 5000);
  
    }
    render() {
      // console.log(this.state.data);
      return (
        this.state.data.map((e, i) => {
          return (
            // <img style={e} key={i} src={require('./img/cloud.svg')} alt="cloud"/>
            <div style={e} key={i}>
              <svg height={e.height} viewBox="0 0 196 126" fill="none">
              <g id="cloud">
              <ellipse id="Ellipse 2" cx="44.5" cy="56" rx="44.5" ry="56" transform="translate(78 7)" fill="white"/>
              <circle id="Ellipse 2.1" cx="42" cy="42" r="42" transform="translate(40 35)" fill="white"/>
              <ellipse id="Ellipse 2.2" cx="33" cy="31.5" rx="33" ry="31.5" transform="translate(122 58)" fill="white"/>
              <ellipse id="Ellipse 2.3" cx="33" cy="31.5" rx="33" ry="31.5" transform="translate(7 56)" fill="white"/>
              <g id="cloud_2">
              <g id="Group">
              <path id="Vector" d="M122.5 12.6C142.621 12.6 159.011 29.31 159.25 49.9326C159.154 50.6957 159.082 51.4584 159.059 52.2459L158.748 61.499L167.265 64.5506C177.123 68.0817 183.75 77.5932 183.75 88.2C183.75 102.104 172.768 113.4 159.25 113.4H36.75C23.244 113.4 12.25 102.104 12.25 88.2C12.25 74.4432 23.0407 63.2213 36.3672 63C36.9414 63.0862 37.5397 63.1599 38.1377 63.1969L47.445 63.8245L50.5075 54.7805C53.9528 44.617 63.1882 37.8 73.5 37.8C74.6963 37.8 76.0124 37.9477 77.7829 38.2678L86.3602 39.855L90.6309 32.0414C97.1865 20.0568 109.389 12.6 122.5 12.6ZM122.5 0C104.149 0 88.3458 10.5084 79.9481 25.8647C77.8545 25.4831 75.713 25.2 73.5 25.2C57.4456 25.2 43.9396 35.8561 38.9393 50.6217C38.2097 50.5725 37.5038 50.4 36.75 50.4C16.4609 50.4 0 67.3312 0 88.2C0 109.069 16.4609 126 36.75 126H159.25C179.539 126 196 109.069 196 88.2C196 71.6869 185.64 57.7828 171.285 52.6393C171.309 51.8766 171.5 51.1631 171.5 50.4C171.5 22.567 149.56 0 122.5 0Z" fill="#292929"/>
              </g>
              </g>
              </g>
              </svg>
            </div>
          )
        })
      )
    }
  }

export default Sky;  