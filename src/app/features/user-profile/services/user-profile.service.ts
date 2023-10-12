import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { CurrentUser } from '@auth/models';
import { Store } from '@ngrx/store';
import { AuthSelectors } from '@store/auth';
import { UserProfileSelectors } from '@store/user-profile';
import { GetUserProfileResponse, UserProfile, UserProfileDataSet } from '@user-profile/models';
import { Observable, combineLatest, filter, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({ providedIn: 'root' })
export class UserProfileService {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly store: Store = inject(Store);
  private readonly baseUrl: string = environment.baseApiUrl;

  public loadUserProfile$(slug: string): Observable<UserProfile> {
    return this.http.get<GetUserProfileResponse>(`${this.baseUrl}/profiles/${slug}`).pipe(map(({ profile }): UserProfile => profile));
  }

  public get userProfileDataSet$(): Observable<UserProfileDataSet> {
    return combineLatest({
      userProfile: this.store.select(UserProfileSelectors.userProfile),
      isLoading: this.store.select(UserProfileSelectors.isLoading),
      error: this.store.select(UserProfileSelectors.error),
      isCurrentUserProfile: this.isCurrentUserProfile$,
    });
  }

  private get isCurrentUserProfile$(): Observable<boolean> {
    return combineLatest({
      currentUser: this.store
        .select(AuthSelectors.currentUser)
        .pipe(filter((currentUser: CurrentUser | null | undefined): currentUser is CurrentUser => Boolean(currentUser))),
      userProfile: this.store
        .select(UserProfileSelectors.userProfile)
        .pipe(filter((userProfile: UserProfile | null): userProfile is UserProfile => Boolean(userProfile))),
    }).pipe(
      map(({ currentUser, userProfile }: { currentUser: CurrentUser; userProfile: UserProfile }): boolean => {
        return currentUser.username === userProfile.username;
      })
    );
  }
}
