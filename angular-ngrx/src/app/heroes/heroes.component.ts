import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Store } from '@ngrx/store';
import { AppState } from '../models/app-state';
import { Observable } from 'rxjs/Observable';
import * as heroActions from './../actions/hero.actions';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  //heroes: Hero[];
  heroes$: Observable<Hero[]>;

  constructor(private store:Store<AppState>) { }

  ngOnInit() {
    this.heroes$ = this.store.select(state => state.heroes.heroes);
    this.getHeroes();

  }

  getHeroes(): void {
    this.store.dispatch(new heroActions.LoadHeroesAction())
    // this.heroService.getHeroes()
    //   .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    this.store.dispatch(new heroActions.AddHeroAction({ name } as Hero));
    // name = name.trim();
    // if (!name) { return; }
    // this.heroService.addHero({ name } as Hero)
    //   .subscribe(hero => {
    //     this.heroes.push(hero);
    //   });
  }

  delete(hero: Hero): void {
    this.store.dispatch(new heroActions.DeleteHeroAction(hero.id));
    //this.heroes = this.heroes.filter(h => h !== hero);
    // this.heroService.deleteHero(hero).subscribe();
  }

}
