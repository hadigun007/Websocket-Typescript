import Chanel from "../enum/chanel.eum";

export default class RequestFormatModel {
   private chanel!:Chanel;
   private message!:string 

   set_chanel(chanel:Chanel){
    this.chanel = chanel
   }

   get_chanel():Chanel{
    return this.chanel
   }
   
   set_message(message:string){
    this.message = message
   }

   get_message():string{
    return this.message
   }

}