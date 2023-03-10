import { Component, OnInit } from '@angular/core';
import { Emploi } from 'src/core/model/emploi';

@Component({
  selector: 'app-offres-emploi',
  templateUrl: './offres-emploi.component.html',
  styleUrls: ['./offres-emploi.component.css']
})
export class OffresEmploiComponent implements OnInit {
  listEmploi: Emploi[] = [];
  companySearchTerm: string = '';
  searchResults: Emploi[] = [];

  constructor() { }

  ngOnInit(): void {
    this.listEmploi = [
      {
        reference: "good",
        entreprise: 'meg',
        titre: 'Paris',
        etat:true
      },
      {
        reference: "bad",
        entreprise: 'ver',
        titre: 'london',
        etat:false
      }
    ];
  }
  nombreOffresNonCloturees: number = 0;
  recherche: string = '';

  calculerOffresNonCloturees() {
    this.nombreOffresNonCloturees = 0;

    for (let emploi of this.listEmploi) {
      if (!emploi.etat) {
        this.nombreOffresNonCloturees++;
      }
    }

    alert(`Nombre d'offres d'emploi non clôturées : ${this.nombreOffresNonCloturees}`);
  }
  
  listeEmploiFiltree(): Emploi[] {
    return this.listEmploi.filter(emploi => {
      return emploi.entreprise.toLowerCase().includes(this.recherche.toLowerCase());
    });
  }
}
