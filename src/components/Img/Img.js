import React, { Component } from 'react';
import { omit } from 'lodash';
import path from 'path';
import { isDev } from '../../libs/env';

class Img extends Component {
  render() {
    const params = { ...this.props };
    const src = this.props.src;
    omit(params, 'src');
    omit(params, 'alt');
    const alt = this.props.alt ? this.props.alt : 'img';
    const prePath = global.__dirname;
    const imgSrc = isDev ? src : path.resolve(prePath, src);
    return <img {...params} src={imgSrc} alt={alt} />;
  }
}

export default Img;
