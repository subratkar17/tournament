import { Component, OnInit, OnChanges } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {TournamentserviceService} from '../tournamentservice.service'
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})



export class TeamComponent implements OnInit {
teamNames:String
teams:String[]=[]
groupA:String[]=[]
groupB:String[]=[]
shuffleResult
result:any
temp:any[]=[]
participant:any[]=[]

  subscription:Subscription;
  constructor(private tournamentService:TournamentserviceService) { 
this.teamNames=""



  }

  ngOnInit() {

    //this.shuffleTeam()
    
  }

 addMyTeams(){
   console.log(this.teamNames)
  this.tournamentService.addTeam(this.teamNames)
  this.result=this.tournamentService.getTeams()
  console.log(this.result)
  this.teams = JSON.parse(localStorage.getItem('teams'));
    console.log(this.teams);
    /*this.groupA=this.teams.splice(0, Math.ceil(this.teams.length/2));
    this.groupB=this.teams;
    console.log(this.groupA);
    console.log(this.groupB)*/
  }
  

  shuffleTeam(){
    this.tournamentService.shuffle(this.teams)
    this.shuffleResult=this.tournamentService.getShuffleTeam()
    console.log(this.shuffleResult)
    this.groupA=this.shuffleResult.splice(0, Math.ceil(this.teams.length/2));
    this.groupB=this.shuffleResult;
    console.log(this.groupA);
    console.log(this.groupB)
  }


  fixture(){
    let count=2
    for(let i=0; i<this.groupA.length;i++){
      for(let j=0; j<this.groupB.length;j++){
        this.temp.push(this.groupA[i])
        this.temp.push(this.groupB[j])
      }
    }
    while(this.temp.length>0){
      this.participant.push(this.temp.splice(0, count));
    }
    console.log(this.participant)
  }
}
