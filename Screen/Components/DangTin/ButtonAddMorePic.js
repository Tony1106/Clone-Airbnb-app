import React from 'react'
import PropTypes from 'prop-types'

class ButtonAddMorePic extends React.Component {
  render () {
    return(
      <Image source={this.props.img} style={{width: 40, height: 40, paddingHorizontal:10, marginLeft: 10}} />
    )
  }
}

export default ButtonAddMorePic;
