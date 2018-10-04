import React from "react"

class RadioStation extends React.Component {

  render() {
    const channelColor = {
      backgroundColor: {
        backgroundColor: `#${this.props.color}`
      }
    }
    return (
      <div className="channelContainer" style={channelColor.backgroundColor}>
        <div className="channelLogo"> <img src={this.props.image} alt="Channel logo" /> </div>
        <div className="channelContainer-text">
          <h2>{this.props.name}</h2>
          <h3>{this.props.channeltype}</h3>
          <p>{this.props.tagline}</p>
        </div>
        <audio controls className="audioplayer">
          <source src={this.props.audio} type="audio/mpeg" />
        Your browser does not support the audio element.
        </audio>
      </div>

    )
  }

}

export default RadioStation
