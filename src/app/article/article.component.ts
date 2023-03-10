import { Component, OnInit } from '@angular/core';
import { article } from 'src/core/model/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  listArticle: article[] = [];

  inputValue: number = this.listArticle.length;
  defaultArticlesToShow: number = this.listArticle.length;

  constructor() { }

  ngOnInit(): void {
    this.listArticle = [
      {
        titre: "Le championnat du monde",
        contenu :'Le championnat du monde de cette années est',
        auteur: 'Med Taher',
        date: '12/12/2005',
        categorie:"Sport",
      },
      {
        titre: 'Les nouveaux parents',
        contenu :'Les nouveaux parents',
        auteur: 'Ahmed',
        date: '11/11/2018',
        categorie:'Education',
      },
      {
        titre: 'Comment ecrire votre cv',
        contenu :'Pour réussir à décraucher un emploi',
        auteur: 'Marie Elsa',
        date: '12041/2017',
        categorie:'Travail',
      }
    ];
  }

  removeTravailArticles() {
    this.listArticle = this.listArticle.filter(article => article.categorie !== 'Travail');
  }

  getColorClass(article: any) {
    if (article.categorie === 'Education') {
      return 'text-blue';
    }
    return '';
  }

}
