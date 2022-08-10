export interface CityNames {
  de: string;
  en: string;
  es: string;
  fr: string;
  ja: string;
  'pt-BR': string;
  ru: string;
  'zh-CN': string;
}

export interface City {
  geoname_id: number;
  names: CityNames;
}

export interface ContinentNames {
  de: string;
  en: string;
  es: string;
  fr: string;
  ja: string;
  'pt-BR': string;
  ru: string;
  'zh-CN': string;
}

export interface Continent {
  code: string;
  geoname_id: number;
  names: ContinentNames;
}

export interface CountryNames {
  de: string;
  en: string;
  es: string;
  fr: string;
  ja: string;
  'pt-BR': string;
  ru: string;
  'zh-CN': string;
}

export interface Country {
  geoname_id: number;
  iso_code: string;
  names: CountryNames;
}

export interface Location {
  accuracy_radius: number;
  latitude: number;
  longitude: number;
  time_zone: string;
}

export interface Postal {
  code: string;
}

export interface RegisteredCountryNames {
  de: string;
  en: string;
  es: string;
  fr: string;
  ja: string;
  'pt-BR': string;
  ru: string;
  'zh-CN': string;
}

export interface RegisteredCountry {
  geoname_id: number;
  iso_code: string;
  names: RegisteredCountryNames;
}

export interface SubdivisionNames {
  en: string;
  es: string;
  ja: string;
  'pt-BR': string;
  ru: string;
  'zh-CN': string;
}

export interface Subdivision {
  geoname_id: number;
  iso_code: string;
  names: SubdivisionNames;
}

export interface LocationMaxmindResponse {
  city: City;
  continent: Continent;
  country: Country;
  location: Location;
  postal: Postal;
  registered_country: RegisteredCountry;
  subdivisions: Subdivision[];
}