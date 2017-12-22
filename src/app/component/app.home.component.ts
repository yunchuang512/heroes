import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: '../template/app-home.component.html'
})

export class AppHomeComponent implements OnInit {
  title = 'App Home';
  options: any;

  ngOnInit(): void {
    this.options = {
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      legend: {
        data: ['销量']
      },
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    };
  }

}

function printLabel(labeledObj: LabeledValue) {
  console.log(labeledObj.label);
}

let myObj = {size: 10, label: 'Size 10 Object'};
printLabel(myObj);

interface LabeledValue {
  label: string;
}

interface SquareConfig {
  readonly color: string;
  width?: number;

  [proName: string]: any;
}

function createSquare(config: SquareConfig): { color: string, area: number } {
  let newSquare = {color: 'white', area: 100};
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({color: 'black', opacity: 0.5});
console.log(mySquare.area + mySquare.color);

interface SearchFunc {
  (source: string, substring: string): boolean;
}

let mySearch: SearchFunc;

mySearch = function (source: string, substring: string) {
  let result = source.search(substring);
  return -1 !== result;
};

console.log(mySearch('hello', 'he'));

interface ClockInterface {
  tick();
}

interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) {
  }

  tick() {
    console.log('beep beep');
  }
}

class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) {
  }

  tick() {
    console.log('tick tock');
  }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);

digital.tick();
analog.tick();

interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLenth: number;
}

let square = <Square>{};
square.color = 'blue';
square.sideLenth = 10;

function buildName(firstName: string, ...resrOfName: string[]) {
  return firstName + ' ' + resrOfName.join(' ');
}

let fullName = buildName('Jhon', 'hello', 'kan');
console.log(fullName);

interface Card {
  suit: string;
  card: number;
}

interface Deck {
  suits: string[];
  cards: number[];

  createCardPicker(this: Deck): () => Card;
}

let deck: Deck = {
  suits: ['hearts', 'spades', 'clubs', 'diamonds'],
  cards: Array(52),
  createCardPicker: function () {
    return () => {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);
      return {suit: this.suits[pickedSuit], card: pickedCard % 13};
    };
  }
};

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();
console.log('card:' + pickedCard.card + ' of ' + pickedCard.suit);

class Event {
  message: string;
}

interface UIElement {
  addClickListener(onclick: (this: void, e: Event) => void): void;
}

class Element implements UIElement {
  click: (this: void, e: Event) => void;

  addClickListener(onclick: (this: void, e: Event) => void): void {
    this.click = onclick;
  }

}

class Handler {
  info: string;

  onClickBad(this: Handler, e: Event) {
    this.info = e.message;
  }

  onClickGood = (e: Event) => {
    this.info = e.message;
    console.log('Click:' + this.info);
  };
}

let el = new Element();
let h = new Handler();

el.addClickListener(h.onClickGood);
let event = new Event();
event.message = 'hello';
el.click(event);


function identity<T>(arg: T): T {
  return arg;
}

console.log(identity<string>('hello'));

interface GenericIndentityFn<T> {
  (arg: T): T;
}

let myIdentity: GenericIndentityFn<number> = identity;

console.log(myIdentity(1));

class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};

let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = '&';
stringNumeric.add = function (x, y) {
  return x + y;
};

console.log(stringNumeric.add(stringNumeric.zeroValue, 'test'));

interface Lengthwise {
  length: number;
}

function loggingIndentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

loggingIndentity({length: 3});

class BeeKeeper {
  hasMask: boolean;
}

class ZooKeeper {
  nametag: string;
}

class Animal {
  numLegs: number;
}

class Bee extends Animal {
  keeper: BeeKeeper;
}

class Lion extends Animal {
  keeper: ZooKeeper;
}

function findKeeper<A extends Animal, K>(a: { new(): A; prototype: { keeper: K } }): K {
  return a.prototype.keeper;
}

let lion = new Lion();
console.log(Lion);
console.log(findKeeper<Lion, ZooKeeper>(Lion));

enum FileAccess {
  None,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write,
  G = '123'.length
}

console.log(FileAccess.ReadWrite);
