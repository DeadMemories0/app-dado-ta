import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  dado: string = '';
  sorteando: boolean = false;
  constructor() { }


  async sortear() {
    for (let i = 0; i < 10; i++) {
      this.sorteando = true;
      let sorteio = Math.random();
      sorteio = Math.floor(sorteio * 6 + 1);
      this.dado = sorteio.toString();
      await new Promise(f => setTimeout(f, 100));
    }
    this.sorteando = false;
  }
}
