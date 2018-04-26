import * as fromHeroes from './../actions/hero.actions';
import { Hero } from "../hero";

export interface State {
    heroes: Hero[];
};

const initialState: State = {
    heroes: []
};

export function heroReducer(state = initialState, action: fromHeroes.Actions): State {
    switch (action.type) {
        case fromHeroes.LOAD_HEROES_SUCCESS: {
            return state = {
                heroes: action.payload
            };
        }
        
        case fromHeroes.ADD_HERO_SUCCESS: {
            return state = {
                heroes: [...state.heroes, action.payload]
            };
        }
        case fromHeroes.DELETE_HERO_SUCCESS: {
            return state = {
                heroes: state.heroes.filter(hero => hero.id !== action.payload)
            };
        }
        default: {
            return state;
        }
    }
}