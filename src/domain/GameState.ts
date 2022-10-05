import PlayerCard from 'src/components/PlayerCard'
import { Player } from './Player'

export interface GameState {
  players: Player[]
}

export interface LifeChange {
  type: 'decrease-life' | 'increase-life'
  playerIndex: number
}

export interface CommanderDamageChange {
  type: 'increase-commander-damage' | 'decrease-commander-damage'
  playerIndex: number
}

export type Action = LifeChange | CommanderDamageChange

export function gameReducer(state: GameState, action: Action): GameState {
  switch (action.type) {
    case 'increase-life':
    case 'decrease-life':
      return {
        ...state,
        players: state.players.map(player =>
          player.index == action.playerIndex
            ? {
                ...player,
                health:
                  action.type == 'increase-life'
                    ? player.health + 1
                    : player.health - 1,
              }
            : player
        ),
      }
    case 'decrease-commander-damage':
    case 'increase-commander-damage':
      return {
        ...state,
        players: state.players.map(player =>
          player.index == action.playerIndex
            ? {
                ...player,
                commanderDamage:
                  action.type == 'increase-commander-damage'
                    ? player.commanderDamage + 1
                    : player.commanderDamage - 1,
              }
            : player
        ),
      }
  }
}
