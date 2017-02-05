/**
 * Created by francis on 13/04/2016.
 */

import {Http, Headers} from "@angular/http";
import {Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {contentHeaders} from "./headers";

@Injectable()
export class BackendApis {

    // base_url = "http://lb.tumacredo-stag.a087b769.svc.dockerapp.io:9000";
    // base_url = 'http://127.0.0.1:8085';
    base_url = window.location.origin;

    scheme = window.location.protocol == "https:" ? "wss" : "ws";
    ws_scheme = this.scheme + "://";
    ws_base_url = this.ws_scheme + window.location.host;

    local_host_name = ["localhost", "127.0.0.1", "192.168.99.100"];


    constructor(public router:Router, public http:Http) {

            if (this.local_host_name.indexOf(window.location.hostname) > -1){
                this.base_url = window.location.protocol + "//" + window.location.hostname + ":8000";
                this.ws_base_url = this.ws_scheme + window.location.hostname + ":8080";
            }
    }

    get_headers() {
        // var token:string = localStorage.getItem('jwt');
        const headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        // headers.append("Authorization", "jwt " + token);
        return {headers: headers}
    }


    get_screen_content() {
        let url = this.base_url + '/visulizer';
        return this.http.get(url, this.get_headers());
    }



}
