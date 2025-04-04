import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class GraphqlService {
  constructor(private apollo: Apollo) {}

  getMissions() {
    return this.apollo.watchQuery<any>({
      query: gql`
        query {
          missions {
            mission_name
            launch_year
          }
        }
      `
    }).valueChanges;
  }
}
