import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { Emittable, Emitter } from '@ngxs-labs/emitter';
import { Select, Store } from '@ngxs/store';

import { Hero } from '../hero';
import { HeroAction } from '../hero.actions';
import { HeroState, HeroStateModel } from '../hero.state';

@Component({
  selector:    'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls:   ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  /** ngxs Selector **/
  @Select(HeroState.heroes) heroes$: Observable<Hero[]> | undefined;

  constructor(
    private store: Store,
  ) { }

  ngOnInit() {
  }

  @Emitter(HeroState.getAllHeroes)
  getAllHeroes: Emittable;
}
