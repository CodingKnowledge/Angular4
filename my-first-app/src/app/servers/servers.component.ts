import { Component, OnInit } from '@angular/core';

@Component({
  /* Component selector*/
  selector: 'app-servers',

  /* Attribute selector */
  // selector: '[app-servers]',

  /*select by class  */
  // selector: '.app-servers',

  templateUrl: './servers.component.html'
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  ServerCreationStatus = 'No server was created!';
  serverName='TestServer';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;

    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.ServerCreationStatus = "Server was Created " + this.serverName;
  }

  onUpdateServerName(event: Event) {
    // console.log(event);
    this.serverName=(<HTMLInputElement>event.target).value;
  }
}
