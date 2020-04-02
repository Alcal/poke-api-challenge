import React from 'react';

const initialState = {
  currentPokemon: {
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png',
    name: 'rayquaza',
    id: 384,
    genus: 'Sky High Pokémon',
    description: 'It flies forever through the ozone layer, consuming meteoroids for sustenance. The many meteoroids in its body provide the energy it needs to Mega Evolve.'
  }
};

export class StateProvider extends React.Component {
  
  state = initialState

  actions = {
    nextPokemon: () => {
      this.setState({
        ...this.state,
        currentPokemon: {
          ...this.state.currentPokemon,
          id: this.state.currentPokemon.id+1
        }
      })
    },  
    lastPokemon: () => {
      this.setState({
        ...this.state,
        currentPokemon: {
          ...this.state.currentPokemon,
          id: this.state.currentPokemon.id-1
        }
      })
    }
  }

  render() {
    const {children} = this.props;
    return (<React.Fragment>
    {React.Children.toArray(children).map(c => React.cloneElement(c, { state: this.state, actions: this.actions }))}
    </React.Fragment>)
  }
};