import Buyable from './Buyable';

export default class Movie implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly price: number,
        readonly titleRu: string,
        readonly titleEng: string,
        readonly year: number,
        readonly country: string,
        readonly tagline: string,
        readonly genres: string[],
        readonly duration: number,
        readonly pictureURL: string,
    ) { }
}
