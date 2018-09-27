import { Injectable } from '@angular/core';
import {TeamComponent} from './team/team.component';
import { Observable, Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class TournamentserviceService {
  noOfTeam:number=8;
  teamNames:String[]=[];
  groupA:String[]=[];
  groupB:String[]=[]

  constructor() { }

  

  addTeam(teamName:any){
    //check duplicacy
      //console.log(teamName)
      if(this.teamNames.indexOf(teamName)!==-1){
        alert('Teamname found')
        return;
      }
      if(this.teamNames.length==this.noOfTeam){
        alert('Only 8 team can participate')
        return;
      }
        
        this.teamNames.push(teamName);
        console.log(this.teamNames);
        localStorage.setItem('teams',JSON.stringify(this.teamNames));
      
    //check limit
   

    //addTo array
    

  }

  getTeams(){
    return this.teamNames;
  }
   
 shuffle(teamNames){
  var i = 0, j = 0, temp = null
  for (i = this.teamNames.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = this.teamNames[i]
    this.teamNames[i] = this.teamNames[j]
    this.teamNames[j] = temp
    console.log(this.teamNames)
  }
  }

  getShuffleTeam(){
    return this.teamNames
  }

  
  fixture(){
  

  
  }

  playGame(){

  }
}
