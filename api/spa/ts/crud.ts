class Crud implements EventListenerObject, POSTResponseListener {

  api = new API();


  handlePOSTResponse(status:number, response:string):void {
    window.location.replace("/index.html")
  }

  main():void {
      document.getElementById("boton-agregar").addEventListener("click",this);
  }

  handleEvent(evt:Event):void{
    let deviceId = <HTMLInputElement>document.getElementById("device-id");
    let deviceName = <HTMLInputElement>document.getElementById("device-name");
    let deviceKey = <HTMLInputElement>document.getElementById("device-key");
    this.api.requestPost(deviceId.value, deviceName.value, deviceKey.value, this);
   
  }
}

window.onload = function(){
    let crud:Crud = new Crud();
    crud.main()
};
