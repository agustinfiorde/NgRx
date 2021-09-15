import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Message } from "../model/message";
import { tap } from "rxjs/operators";
import { MessagesService } from "./message.service";

@Component({
  selector: "messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.css"]
})
export class MessagesComponent implements OnInit {

  showMessages = false;
  errors$: Observable<string[]>;

  constructor(public messageServices: MessagesService) {
    console.log("se creo el message component");
  }

  ngOnInit() {
    this.errors$ = this.messageServices.errors$
    .pipe(
      tap(()=>this.showMessages = true)
    );
  }

  onClose() {
    this.showMessages = false;
  }
}
