import { Observable } from 'rxjs';

import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Select, Store } from '@ngxs/store';

import { Hero } from '../hero';
import { HeroAction } from '../hero.actions';
import { HeroState } from '../hero.state';

@Component({
  selector:    'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls:   [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  /** ngxs Selector **/
  @Select(HeroState.selectedHero) hero$: Observable<Hero> | undefined;

  constructor(
    private route:    ActivatedRoute,
    private location: Location,
    private store:    Store
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.store.dispatch(new HeroAction.Get(id));
  }

  goBack(): void {
    this.location.back();
  }

  save(hero: Hero): void {
    this.store.dispatch(new HeroAction.Update(hero))
      .subscribe(() => this.goBack());
  }
}
