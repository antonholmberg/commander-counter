import { h } from "preact";
import { Player } from "src/domain/Player";
import PlayerCard from "../PlayerCard";
import style from "./style.css";

interface Props {
    players: Player[];
}

const CardGrid = ({ players }: Props) => {
    return (
        <div class={`${calculateStyle(players.length)} ${style.cardGrid}`}>
            {players.map((player) => <PlayerCard key={player.index} player={player} />)}
        </div>
    )
}

function calculateStyle(numPlayers: number) {
    if (numPlayers == 2) {
        return style.oneColumns;
    } else if (numPlayers > 2 && numPlayers < 5) {
        return style.twoColumns;
    } 

    return style.threeColumns
}

export default CardGrid;