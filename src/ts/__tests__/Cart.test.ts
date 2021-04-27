import Movie from '../domain/Movies';
import Cart from '../service/Cart';
import Book from '../domain/Book';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});
test('should add movie to the cart', () => {
  const cart = new Cart();
  const movie = new Movie(1, 'movie', 45, 'Мстители', 'The Avengers', 2012, 'USA', 'Avengers Assemble!', ['фантастика', 'боевик'], 137, 'https://github.com/netology-code/ajs-homeworks/raw/ajs8/typescript/pic/avengers.png');
  cart.add(movie)
  expect(cart.items.length).toBe(1);
});
test('should count full price of the cart', () => {
  const cart = new Cart();
  const movie = new Movie(1, 'movie', 100, 'Мстители', 'The Avengers', 2012, 'USA', 'Avengers Assemble!', ['фантастика', 'боевик'], 137, 'https://github.com/netology-code/ajs-homeworks/raw/ajs8/typescript/pic/avengers.png');
  const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
  cart.add(movie);
  cart.add(book);
  expect(cart.fullPrice()).toBe(2100)
});
test('should count price with discount of the cart', () => {
  const cart = new Cart();
  const movie = new Movie(1, 'movie', 100, 'Мстители', 'The Avengers', 2012, 'USA', 'Avengers Assemble!', ['фантастика', 'боевик'], 137, 'https://github.com/netology-code/ajs-homeworks/raw/ajs8/typescript/pic/avengers.png');
  const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
  cart.add(movie);
  cart.add(book);
  expect(cart.priceWithDiscount(200)).toBe(1900)
});
test('should delete item from the cart', () => {
  const cart = new Cart();
  const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
  cart.add(book);
  cart.deleteItem(100)
  expect(cart.items.length).toBe(1);
  cart.deleteItem(1001)
  expect(cart.items.length).toBe(0);
});