import { Hero } from "../hero";
import { Action } from '@ngrx/store';


export const LOAD_HEROES = 'LOAD_HEROES';
export const LOAD_HEROES_SUCCESS = 'LOAD_HEROES_SUCCESS';
export const ADD_HERO = 'ADD_HERO';
export const ADD_HERO_SUCCESS = 'ADD_HERO_SUCCESS';
export const UPDATE_HERO = 'UPDATE_HERO';
export const UPDATE_HERO_SUCCESS = 'UPDATE_HERO_SUCCESS';
export const DELETE_HERO = 'DELETE_HERO';
export const DELETE_HERO_SUCCESS = 'DELETE_HERO_SUCCESS';

export class LoadHeroesAction implements Action {
    readonly type = LOAD_HEROES;
    constructor() {};
}

export class LoadHeroesSuccessAction implements Action {
    readonly type = LOAD_HEROES_SUCCESS;
    constructor(public payload:Hero[]) {};
}


export class AddHeroAction implements Action {
    readonly type = ADD_HERO;

    constructor(public payload: Hero) { }
}

export class AddHeroSuccessAction implements Action {
    readonly type = ADD_HERO_SUCCESS;

    constructor(public payload: Hero) { }
}

export class UpdateHeroAction implements Action {
    readonly type = UPDATE_HERO;

    constructor(public payload: string) { }
}

export class UpdateHeroSuccessAction implements Action {
    readonly type = UPDATE_HERO_SUCCESS;

    constructor(public payload: number) { }
}

export class DeleteHeroAction implements Action {
    readonly type = DELETE_HERO;

    constructor(public payload: number) { }
}

export class DeleteHeroSuccessAction implements Action {
    readonly type = DELETE_HERO_SUCCESS;

    constructor(public payload: number) { }
}

export type Actions
    = LoadHeroesAction
    | LoadHeroesSuccessAction
    | AddHeroAction
    | AddHeroSuccessAction
    | UpdateHeroAction
    | UpdateHeroSuccessAction
    | DeleteHeroAction
    | DeleteHeroSuccessAction;