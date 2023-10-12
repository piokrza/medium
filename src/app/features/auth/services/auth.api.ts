import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { AuthResponse, CurrentUserRequest, CurrentUser, LoginRequest, RegisterRequest } from '@auth/models';
import { getUser } from '@core/utils/get-user';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({ providedIn: 'root' })
export class AuthApi {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly baseUrl: string = environment.baseApiUrl;

  public register$(registerRequest: RegisterRequest): Observable<CurrentUser> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/users`, registerRequest).pipe(map(getUser));
  }

  public login$(loginRequest: LoginRequest): Observable<CurrentUser> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/users/login`, loginRequest).pipe(map(getUser));
  }

  public getCurrentUser$(): Observable<CurrentUser> {
    return this.http.get<AuthResponse>(`${this.baseUrl}/user`).pipe(map(getUser));
  }

  public updateCurrentUser$(currentUserRequest: CurrentUserRequest): Observable<CurrentUser> {
    return this.http.put<AuthResponse>(`${this.baseUrl}/user`, currentUserRequest).pipe(map(getUser));
  }
}
