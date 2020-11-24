import { Component, OnInit } from "@angular/core";
import { MessageService } from "src/app/services/message.service";

@Component({
  selector: "app-global-alert",
  templateUrl: "./global-alert.component.html",
  styleUrls: ["./global-alert.component.css"],
})
export class GlobalAlertComponent implements OnInit {
  msg: string = "";
  type: string = "";

  // inject the messageService:
  constructor(private messageService: MessageService) {}

  ngOnInit() {
    // call the getMsg() method, to get the messages for any change:
    this.messageService.getMsg().subscribe((data) => {
      this.msg = data.msg;
      this.type = data.type;
    });
  }
}
