import { type } from "@testing-library/user-event/dist/type";

interface ICountry {
    name: any;
    capital: string;
    population: number;
    flags: any;
    continents : Array<string>;
}

export default ICountry;

export type TCountryList = ICountry[];