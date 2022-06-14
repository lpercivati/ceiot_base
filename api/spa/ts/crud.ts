class Crud implements EventListenerObject, POSTResponseListener, DELETEResponseListener {

  api = new API();


  handlePOSTResponse(status:number, response:string):void {
    if (status == 200){
      window.location.replace("/index.html");
    } else {
      alert(response);
    }
    
  }

  handleDELETEResponse(status:number, response:string):void {
    if (status == 200){
      window.location.replace("/index.html");
    } else {
      alert(response);
    }
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

      if (deviceId.value == "" || deviceName.value == "" || deviceKey.value == ""){
        alert("Por favor ingresar todos los datos");
        return;
      }

      this.api.requestPost(deviceId.value, deviceName.value, deviceKey.value, this);
    }
    else{
      let deviceId = <HTMLInputElement>document.getElementById("device-delete-id");

      if (deviceId.value == ""){
        alert("Por favor ingresar ID del dispositivo");
        return;
      }

      this.api.requestDelete(deviceId.value, this);
    }
  }
}

window.onload = function(){
    let crud:Crud = new Crud();
    crud.main()
};
