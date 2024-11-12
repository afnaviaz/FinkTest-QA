import { CallAnApi } from '../abilities/CallAnApi';

export class Actor {
  private abilities: any = {};

  static named(name: string) {
    return new Actor(name);
  }

  constructor(private name: string) {}

  whoCan(ability: any) {
    this.abilities[ability.constructor.name] = ability;
    return this;
  }

  abilityTo(abilityClass: any) {
    return this.abilities[abilityClass.name];
  }

  attemptsTo(task: any) {
    return task.performAs(this);
  }
}