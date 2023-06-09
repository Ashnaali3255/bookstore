import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Book from './Book';
import NewBookForm from './NewBookForm';
import { fetchBooks } from '../redux/books/bookSlice';
import './styles/Books.css';

const Books = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  const { books } = useSelector((state) => state.books);
  return (
    <div className="books">
      <ul className="booklist">
        {books && books.map((book) => (
          <li className="item" key={book.item_id}>
            <Book
              title={book.title}
              author={book.author}
              id={book.item_id}
              category={book.category}
            />
          </li>
        ))}
        <hr className="hr" />
      </ul>
      <NewBookForm />
    </div>
  );
};
export default Books;
