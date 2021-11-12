export type RootStackParamList = {
  Home: undefined;
  Search: {type: 'country' | 'city'}
  City: {
    city: string,
    population?: number
  };
  Country: {country: string};
}
