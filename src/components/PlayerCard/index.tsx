import { h } from 'preact'
import { useContext } from 'preact/hooks'
import { GameContext } from '../../domain/GameContext'
import { Player } from '../../domain/Player'
import style from './style.css'

interface Props {
  player: Player
}

const PlayerCard = ({ player }: Props) => {
  const dispatch = useContext(GameContext)
  return (
    <div class={style.playerCard}>
      <div class={style.playerHealthRow}>
        <button
          class={style.changeButton}
          onClick={() =>
            dispatch({ type: 'decrease-life', playerIndex: player.index })
          }
        >
          -
        </button>
        <p class={style.playerHealth}>{player.health}</p>
        <button
          class={style.changeButton}
          onClick={() =>
            dispatch({ type: 'increase-life', playerIndex: player.index })
          }
        >
          +
        </button>
      </div>
      <div class={style.commanderDamageRow}>
        <button
          class={style.changeButton}
          onClick={() =>
            dispatch({
              type: 'decrease-commander-damage',
              playerIndex: player.index,
            })
          }
        >
          -
        </button>
        <p class={style.commanderDamage}>{player.commanderDamage}</p>
        <button
          class={style.changeButton}
          onClick={() =>
            dispatch({
              type: 'increase-commander-damage',
              playerIndex: player.index,
            })
          }
        >
          +
        </button>
      </div>
    </div>
  )
}

export default PlayerCard
