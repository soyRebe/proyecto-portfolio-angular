import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Project } from '../models/project';
import { Global } from './global';

@Injectable()
export class ProjectService {

    public url: string;

    constructor(
        private _http :HttpClient
    ){
        this.url = Global.url;
    
    }

    testService(){
        return 'Probando el servicio de Angular';
    }

    saveProject( project : Project): Observable<any> {

        let params = JSON.stringify(project);    //paso los parametros para recoger pero le digo q es un json string para que la appi pueda recogerlos
        let headers = new HttpHeaders().set('Content-Type', 'application/json'); // les paso las cabeceras con las que voy a enviar los datos

        return this._http.post( this.url+'save-project', params, {headers: headers} );
    }
}
