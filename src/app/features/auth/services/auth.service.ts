import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { AuthResponse } from '@auth/models/auth-response.model';
import { CurrentUser } from '@auth/models/current-user.model';
import { RegisterRequest } from '@auth/models/register-request.model';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly baseUrl: string = environment.baseApiUrl;

  public register$(registerRequest: RegisterRequest): Observable<CurrentUser> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/users`, registerRequest).pipe(map(({ user }: AuthResponse) => user));
  }
}
