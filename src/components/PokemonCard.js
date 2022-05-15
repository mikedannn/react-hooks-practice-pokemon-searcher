import React from "react";
import { Card } from "semantic-ui-react";



class PokemonCard extends React.Component {

  state = {
    clicked: false
  }

  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  }

  render() {
    return (
      <Card onClick={this.handleClick} >
        <div>
          <div className="image">
            <img src={this.state.clicked ? this.props.pokemon.sprites.back : this.props.pokemon.sprites.front} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
