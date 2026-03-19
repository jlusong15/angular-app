import { Component } from '@angular/core';
import { RandomQuoteModel, randomQuotesList } from './data';

@Component({
  selector: 'app-random-quote',
  templateUrl: './random-quote.html',
  standalone: true
})
export class RandomQuote {
  qotd: RandomQuoteModel | undefined;

  constructor() {
    this.qotd = this.getRandomQuote();
  }

  getRandomQuote = () => randomQuotesList[Math.floor(Math.random() * randomQuotesList.length)]

}
