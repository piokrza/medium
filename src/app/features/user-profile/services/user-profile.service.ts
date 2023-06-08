import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { GetUserProfileResponse } from '@user-profile/models/get-user-profile-response.model';
import { UserProfile } from '@user-profile/models/user-profile.model';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({ providedIn: 'root' })
export class UserProfileService {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly baseUrl: string = environment.baseApiUrl;

  public getUserProfile$(slug: string): Observable<UserProfile> {
    return this.http.get<GetUserProfileResponse>(`${this.baseUrl}/profiles/${slug}`).pipe(map(({ profile }): UserProfile => profile));
  }
}
