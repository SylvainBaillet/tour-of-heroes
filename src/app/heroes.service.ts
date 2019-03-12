import { Injectable } from '@angular/core';
import { Hero } from './types/hero.type';

@Injectable({
  providedIn: "root"
})
export class HeroesService {
  // on rajoute private pour rendre l'objet non utisisable, en dehors de la class, par defaut c'est publique et les elements sont reutilisables ailleurs, (dans l'html par ex...)
  private heroes: Hero[] = [
    { id: 1, name: "superman" },
    { id: 2, name: "wonderwoman" },
    { id: 3, name: "Prettywoman" }
  ];
  idToGenerate: number = this.heroes.length + 1;
  // on cree une fonction getHeroes qui va retourner le contenu des heros
  getHeroes() {
    return this.heroes;
  }
  createHero(name: string){
    return {id: this.idToGenerate++ , name};
  }
}
