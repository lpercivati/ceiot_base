class Crud implements EventListenerObject, POSTResponseListener, DELETEResponseListener {

  api = new API();


  handlePOSTResponse(status:number, response:string):void {
    window.location.replace("/index.html")
  }

  handleDELETEResponse(status:number, response:string):void {
    debugger;
    window.location.replace("/index.html")
  }

  main():void {
      document.getElementById("boton-agregar").addEventListener("click",this);
      document.getElementById("boton-borrar").addEventListener("click",this);
  }

  handleEvent(evt:Event):void{
    let target = <HTMLElement>evt.target;

    if (target.id=="boton-agregar") {
      let deviceId = <HTMLInputElement>document.getElementById("device-id");
      let deviceName = <HTMLInputElement>document.getElementById("device-name");
      let deviceKey = <HTMLInputElement>document.getElementById("device-key");
      this.api.requestPost(deviceId.value, deviceName.value, deviceKey.value, this);
    }
    else{
      debugger;
      let deviceId = <HTMLInputElement>document.getElementById("device-delete-id");
      this.api.requestDelete(deviceId.value, this);
    }
  }
}

window.onload = function(){
    let crud:Crud = new Crud();
    crud.main()
};
