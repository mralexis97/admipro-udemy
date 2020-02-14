import { Component, OnInit, Input, Output , EventEmitter, ViewChild, ElementRef} from '@angular/core';
import { element } from 'protractor';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef; // referencia a un elemento HTML

  @Input() progreso: number = 50;
  @Input('nombre') leyenda: string = 'Leyenda';

  @Output('actualizaValor') cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    // console log
    console.log('Leyenda', this.leyenda);
    console.log('progreso', this.progreso);
  }

  ngOnInit() {
    console.log('progreso', this.progreso);
  }

  onChanges( newValue: number ) {
    // tslint:disable-next-line:align
    if ( newValue >= 100 ) {
      this.progreso = 100;
    } else if ( newValue <= 0) {
      this.progreso = 0;
    } else  {
         this.progreso = newValue;
    }
    // tslint:disable-next-line:align
    this.txtProgress.nativeElement.value = Number(this.progreso);

    this.cambioValor.emit(this.progreso);


  }

  cambiarValor( valor: number ) {
    if ( this.progreso >= 100 && valor > 0 ) {
      return;
    }
    if ( this.progreso <= 0 && valor < 0 ) {
      return;
    }

    this.progreso = this.progreso + valor;

    this.cambioValor.emit(this.progreso);

    this.txtProgress.nativeElement.focus();
  }


}

