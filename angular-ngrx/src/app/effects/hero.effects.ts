import { Injectable } from '@angular/core';
import { HeroService } from '../hero.service';
import { Effect, Actions } from '@ngrx/effects';

import * as heroActions from './../actions/hero.actions';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';

@Injectable()
export class HeroEffects {

    constructor(
        private heroService: HeroService,
        private actions$: Actions
    ) { }


    @Effect() loadHeroes$ = this.actions$
        .ofType(heroActions.LOAD_HEROES)
        .switchMap(() => {
            return this.heroService.getHeroes()
                .map(heroes => new heroActions.LoadHeroesSuccessAction(heroes));
        });

    @Effect() addHero$ = this.actions$
        .ofType(heroActions.ADD_HERO)
        .switchMap((action: heroActions.AddHeroAction) => {
            return this.heroService.addHero(action.payload)
                .map(hero => new heroActions.AddHeroSuccessAction(hero));
        });

    @Effect() deleteHero$ = this.actions$
        .ofType(heroActions.DELETE_HERO)
        .switchMap((action: heroActions.DeleteHeroAction) => {
            return this.heroService.deleteHero(action.payload)
                .map(hero => new heroActions.DeleteHeroSuccessAction(hero.id));
        });

}