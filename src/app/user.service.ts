import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appComparsaUtenti]'
})
export class ComparsaUtentiDirective {

    constructor(private tRef: TemplateRef<any>, private cRef: ViewContainerRef) { }

    @Input() set appComparsaUtenti(variabile: boolean) {
        if (!variabile) {
            this.cRef.createEmbeddedView(this.tRef);
        } else {
            this.cRef.clear();
        }
    }

}
import { Injectable } from '@angular/core';
import { Users } from './users';

var users:Users[];

fetch('http://localhost:3000/utenti')
  .then((response) => response.json())
  .then((data) => users = data);

export async function getUsers() {
  return await (await fetch('http://localhost:3000/utenti')).json()
}

export async function getUsersInfo(i: number) {
  return await (await fetch('http://localhost:3000/utenti/'+ i)).json()
}


export async function getUsersById(id:number) {
  return await (await fetch('http://localhost:3000/utenti/' + id)).json()
}
