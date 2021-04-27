import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items];
    }
    fullPrice(): number {
        let summa = 0
        for (const item of this._items) {
            summa += item.price
        }
        return summa
    }
    priceWithDiscount(discount: number): number {
        let summa = this.fullPrice()
        const summaWithDiscount = summa - discount
        return summaWithDiscount
    }
    deleteItem(id: number): void {
        let index
        for (const item of this._items) {
            if (item.id === id) {
                index = this._items.indexOf(item)
                break
            }
        }
        if (typeof index == 'number') {
            this._items.splice(index, 1)
        }

        // this._items = this._items.filter(item => item.id != id)
    }

}
