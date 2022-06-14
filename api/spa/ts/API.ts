interface GETResponseListener {
  handleGETResponse(status:number, response:string): void;
}

interface POSTResponseListener {
  handlePOSTResponse(status:number, response:string): void;
}

interface DELETEResponseListener {
  handleDELETEResponse(status:number, response:string): void;
}

class API{

  requestGET(url:string, listener: GETResponseListener):void {
    let xhr:XMLHttpRequest = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if(xhr.readyState == 4) {
        if(xhr.status == 200) {
          listener.handleGETResponse(xhr.status,xhr.responseText);
        } else {
          listener.handleGETResponse(xhr.status,null);
        }
      }
    };
    xhr.open('GET', url, true);
    xhr.send(null);
  }

  requestPost(id: string, name:string, key:string, listener: POSTResponseListener):void{
    let xhr:XMLHttpRequest = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if(xhr.readyState == 4) {
        if(xhr.status == 200) {
          listener.handlePOSTResponse(xhr.status,xhr.responseText);
        } else {
          listener.handlePOSTResponse(xhr.status,null);
        }
      }
    };

    let body = {
      "id": id,
      "n": name,
      "k": key
    }

    var params ="id="+id+"&n="+name+"&k="+key
    xhr.open("POST", "http://localhost:8080/device");
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(params);
  }

  requestDelete(id: string, listener: DELETEResponseListener):void{
    debugger
    let xhr:XMLHttpRequest = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if(xhr.readyState == 4) {
        if(xhr.status == 200) {
          listener.handleDELETEResponse(xhr.status,xhr.responseText);
        } else {
          listener.handleDELETEResponse(xhr.status,null);
        }
      }
    };

    //var params ="id="+id;
    xhr.open("DELETE", "http://localhost:8080/device/" + id);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send();
  }
}
