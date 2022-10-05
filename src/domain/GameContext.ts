import { createContext } from 'preact'
import { Action } from './GameState'

export const GameContext = createContext((_: Action) => {})
