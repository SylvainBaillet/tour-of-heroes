import { Hero } from './../types/hero.type';
import { HeroesService } from './../heroes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-heroes-list",
  templateUrl: "./heroes-list.component.html",
  styleUrls: ["./heroes-list.component.css"]
})
export class HeroesListComponent implements OnInit {
    heroes : Hero[] = [];// la je definie le type avec ':'
    heroToAdd = '';
    selectedHero: Hero;
  constructor(private heroesService: HeroesService) {
  }
  // le premier 'heroesService' est le nom de l'objet, le 2eme 'HeroesService' prend une majuscule au debut et est le 'type'

  ngOnInit() {
    this.heroes = this.heroesService.getHeroes();
  }
  selectHero(hero: Hero){
    this.selectedHero = hero;
  }

  addHero(){
   // const heroName = 'Nassim';// l'orsqu'on declare un 'const' c'est quand notre élément sera constant et ne changera pas, sinon on utilise let
   // this.heroes.push(heroName)// la j'ai juste tappé heroes et angular a ajouté le this automatiquement, push va permettre de creer un nouvel élément dans heroName
  //  if (this.heroToAdd.length > 0) {
  //cette ecriture aurait fonctionné aussi: if(this.heroToAdd !== ''){}
  if (this.heroToAdd.trim().length > 0) { //cette autre ecriture, verifie avec .trim que l'input n'a pas été rempli par des espaces
  // const hero = { id: this.idToGenerate++, name: this.heroToAdd.trim()};
  // ici pour changer le numero de l'id a chaque nouveau hero entré, je declare ma variable idToGenerate dans le component  que j'incrémente avec '++'
  this.heroes.push(this.heroesService.createHero(this.heroToAdd));
  this.heroToAdd = '';
    } else {
    alert("le nom du heros ne doit pas être vide");
    }
  }
}
