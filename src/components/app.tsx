import { h } from 'preact'
import { useReducer } from 'preact/hooks'
import { gameReducer } from '../domain/GameState'
import { GameContext } from '../domain/GameContext'
import CardGrid from './CardGrid'

const App = () => {
  const [state, dispatch] = useReducer(gameReducer, {
    players: [
      { index: 0, health: 40, commanderDamage: 0 },
      { index: 1, health: 40, commanderDamage: 0 },
      { index: 2, health: 40, commanderDamage: 0 },
      { index: 3, health: 40, commanderDamage: 0 },
    ],
  })

  return (
    <div id="app">
      <GameContext.Provider value={dispatch}>
        <CardGrid players={state.players} />
      </GameContext.Provider>
    </div>
  )
}

export default App
