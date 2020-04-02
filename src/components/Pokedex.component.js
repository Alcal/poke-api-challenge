import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {PokedexEntry} from './PokedexEntry.component';

export const Pokedex = ({state: {currentPokemon}, actions: {nextPokemon, lastPokemon}}) => {
  const {id, name, description, sprite, genus} = currentPokemon;
  return <React.Fragment>
    <div>
      <PokedexEntry
        id={id}
        name={name}
        genus={genus}
        description={description}
        sprite={sprite}
      />
    </div>
    <div>
      <span>
        <IconButton color="secondary" onClick={lastPokemon}>
          <ChevronLeftIcon/>
        </IconButton>
      </span>
      <span>
        <IconButton color="secondary" onClick={nextPokemon}>
          <ChevronRightIcon/>
        </IconButton>
      </span>
    </div>
  </React.Fragment>
}