import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Nassiiiiiiiiim';
  heroes = [
    'superman', 
    'wonderwoman',
    'Prettywoman'
  ];
  name = '';
  heroToAdd = '';
  //
  addHero(){
    // const heroName = 'Nassim';// l'orsqu'on declare un 'const' c'est quand notre élément sera constant et ne changera pas, sinon on utilise let
    // this.heroes.push(heroName)// la j'ai juste tappé heroes et angular a ajouté le this automatiquement, push va permettre de creer un nouvel élément dans heroName
    if(this.heroToAdd.length >0){//cette ecriture aurait fonctionné aussi: if(this.heroToAdd !== ''){}
    // if (this.heroToAdd.trim().length > 0) { //cette autre ecriture, verifie avec .trim que l'input n'a pas été rempli par des espaces 
      this.heroes.push(this.heroToAdd);
      this.heroToAdd ='';
      
    }else{
      alert('le nom du heros ne doit pas être vide')
    }
  }
}
