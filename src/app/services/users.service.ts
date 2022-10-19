import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Users} from "../model/users";
import {catchError, map, Subject, throwError} from "rxjs";

@Injectable({providedIn:"root"})
export class UsersService {
  error = new Subject<string>();
  constructor(private http: HttpClient) {
  }

  addUser(user: Users){
    const headers = new HttpHeaders({user:'rijil'})
    this.http.post<{name:string}>
    ('https://portfoliorijil-default-rtdb.firebaseio.com/user.json',
      user, {headers:headers})
      .subscribe((res)=>{
        console.log(res);
      }, (err)=> this.error.next(err.message));
  }

  fetchUserDetails(){
    const header = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-llow-Origin', '*');
    const params = new HttpParams().set('print', 'pretty');
    return this.http.get<{[key:string]: Users }>
    ('https://portfoliorijil-default-rtdb.firebaseio.com/user.json', {'headers': header, params: params}).
    pipe(map((res: {// @ts-ignore
      [key:string], Feedback})=> {
      const users=[];
      for (const key in res){
        if(res.hasOwnProperty(key)) {
          users.push({...res[key], id: key});
        }
      }
      return users;
    }), catchError((err)=> {
      return throwError(err);
    })
    );
  }

  deleteUser(id){
    let header = new HttpHeaders();
    header = header.append('headerRijil1', 'value1');
    header = header.append('headerRijil2', 'value2');

    this.http.delete('https://portfoliorijil-default-rtdb.firebaseio.com/user/' + id + '.json', {headers: header})
      .subscribe(()=> this.fetchUserDetails());
  }

  updateUser(id, value){
    this.http.put('https://portfoliorijil-default-rtdb.firebaseio.com/user/'+ id + '.json', value).subscribe()
  }
  deleteAllUser(){}
}
