import { Hero } from './hero';

export module HeroAction {

  /**
   * 各クラスのtypeフィールドがActionの識別子
   * constructorに宣言しているフィールドは、各Actionに関連するメタデータを持たせるためのもの
   */
  export const LOAD_HERO   = 'Load_Hero';
  export const SELECT_HERO = 'Select_Hero';
  export const ADD_HERO    = 'Add_Hero';
  export const DELETE_HERO = 'Delete_Hero';
  export const UPDATE_HERO = 'Update_Hero';

  export class Load {
    static readonly type = LOAD_HERO;
  }

  export class Select {
    static readonly type = SELECT_HERO;

    coustructor(public id: number) {}
  }

  export class Add {
    static readonly type = ADD_HERO;

    coustructor(public payload: Hero) {}
  }

  export class Delete {
    static readonly type = Delete_HERO;

    coustructor(public payload: Hero) {}
  }

  export class Update {
    static readonly type = Update_HERO;

    coustructor(public payload: Hero) {}
  }
}
