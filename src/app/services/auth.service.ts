import { Injectable } from 'angular2/core';
import { Http, Response, Headers } from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()

export class AuthService {

  constructor(private http: Http) { 
    this.http = http;
  }
  
  login(email, password) {
    // This will be called when the user clicks on the Login button
    event.preventDefault();

    // We call our API to log the user in. The username and password are entered by the user
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    
    this.http.post('http://localhost:3000/api/v1/auth/login',
      JSON.stringify({email, password}),
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