export type RootStackParamList = {
  Home: undefined;
  Search: {type: 'country' | 'city'}
  City: {city: string};
  Country: {country: string};
}
