import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
        { id: 11, name: 'Jon Snow' },
        { id: 12, name: 'Daenerys Targaryen' },
        { id: 13, name: 'Sansa Stark' },
        { id: 14, name: 'Cersei Lannister' },
        { id: 15, name: 'Arya Stark' },
        { id: 16, name: 'Tyrion Lannister' },
        { id: 17, name: 'Jamie Lannister' },
        { id: 18, name: 'Brienne of Tarth' },
        { id: 19, name: 'Theon Greyjoy' },
        { id: 20, name: 'Samwell Tarly' }
    ];
    return {heroes};
  }
}