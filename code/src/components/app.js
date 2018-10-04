import React from "react"
import RadioStation from "./radioStation"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      radioStations: []
    }
  }
  componentDidMount() {
    fetch("http://api.sr.se/api/v2/channels?format=json&size=100").then((response) => {
      return response.json()
    }).then((json) => {
      this.setState({
        radioStations: json.channels
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Sveriges Radio Player 📻</h1>
        <div className="allChannelsContainer">
          {this.state.radioStations.map((channels) => {
            return <RadioStation
              name={channels.name}
              image={channels.image}
              channeltype={channels.channeltype}
              audio={channels.liveaudio.url}
              tagline={channels.tagline}
              color={channels.color}/>
          })}
        </div>
      </div>
    )
  }
}

export default App
