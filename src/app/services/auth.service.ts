
import { Injectable } from "@angular/core";
import { Http, Response, Headers } from '@angular/http';
import {RouteSegment, Router} from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/map';

@Injectable()

export class AuthService {

  constructor(private http: Http, private location: Location, private router: Router) { 
    this.http = http;
  }
  
  isAuthenticated(){
    return localStorage.getItem('jwt');
  }
  
  unAuthorized(){
    toastr.error('You are not Authorized')
    this.location.replaceState('/'); // clears browser history so they can't navigate with back button
    this.router.navigate(['Home']);
  }
  
  login(auth_params) {
    // This will be called when the user clicks on the Login button
    event.preventDefault();

    // We call our API to log the user in. The username and password are entered by the user
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    
    this.http.post('http://localhost:3000/api/v1/auth/login',
      JSON.stringify(auth_params),
      {headers: headers}
    )
    .subscribe((data) => {
      if(data.json().status == 'success'){
        // Once we get the JWT in the response, we save it into localStorage
        localStorage.setItem('jwt', data.json().token);
        toastr.success('You have successfully signed in!');
        $('.login-form').foundation('close'); 
      }
      else{
        toastr.error(data.json().message);
      }
    })
  }

}