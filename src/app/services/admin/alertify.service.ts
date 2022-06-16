import { Injectable } from '@angular/core';
declare var alertify : any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  message(message : string, options : Partial<AlertifyOptions>){
    alertify.set('notifier','delay', options.delay);
    alertify.set('notifier','position', options.position);
    alertify[options.messageType](message)
  }
}

export class AlertifyOptions{
  messageType : MessageType = MessageType.Success
  position :Position = Position.BottomRight
  delay : number = 3

}

export enum MessageType{
  Error = "error",
  Success = "success",
  Notify = "notify",
  Message = "message",
  Warning = "warning"
}

export enum Position{
  TopRigth = "top-right",
  TopCenter = "top-center",
  TopLeft = "top-left",
  BottomRight = "bottom-right",
  BottomCenter = "bottom-center",
  BottomLeft = "bottom-left"
}