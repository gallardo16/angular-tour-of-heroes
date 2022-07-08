import { finalize, tap } from 'rxjs/operators';

import { Injectable, Injector } from '@angular/core';
import { EmitterAction, Receiver } from '@ngxs-labs/emitter';
import { Action, Selector, State, StateContext } from '@ngxs/store';

import { Hero } from './hero';
import { HeroAction } from './hero.actions';
import { HeroService } from './hero.service';

export interface HeroStateModel{
  heroes: Hero[];
  selectedHero: Hero;
}

@State<HeroStateModel>({
  name:     'heroes',
  defaults: {
    heroes:       [],
    selectedHero: null,
  },
})

@Injectable()
export class HeroState {
  private static heroService: HeroService

  constructor(
  ) {}

  @Receiver()
  public static getAllHeroes(ctx: StateContext<HeroStateModel>) {
    return HeroState.heroService.getHeroes().pipe(
      tap((data) => {
        ctx.setState({
          heroes: data,
          selectedHero: null
        });
      })
    );
  }

  @Selector()
  static heroes(state: HeroStateModel) {
    return state.heroes;
  }

  @Selector()
  static selectedHero(state: HeroStateModel) {
    return state.selectedHero;
  }
}
