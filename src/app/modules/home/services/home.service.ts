import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {environment} from "../../../../environments/environment";
import 'rxjs/add/operator/map';

@Injectable()
export class HomeService {
  constructor(private http:Http) { }
  private route = 'certification-organizations/page';
  getThings() {
    return this.http.get(environment.api + this.route).map((res:Response) => res.json())
  }
}
