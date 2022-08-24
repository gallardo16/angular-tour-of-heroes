import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs';

import { Store, Select }     from '@ngxs/store';

import { HeroAction }        from '../hero.actions';
import { HeroState }         from '../hero.state';
import { Hero }              from '../hero';

@Component({
  selector:    'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls:   ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  /** ngxs Selector **/
  @Select(HeroState.heroes) heroes$: Observable<Hero[]> | undefined;

  constructor(
    private store: Store
  ) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.store.dispatch(new HeroAction.GetAll())
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }

    this.store.dispatch(new HeroAction.Add({ name } as Hero))
  }

  delete(hero: Hero): void {
    this.store.dispatch(new HeroAction.Delete(hero))
  }
}
