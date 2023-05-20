import Book from './Book';
import BookForm from './BookForm';
import './Styles/Book.css';

const Books = () => (

  <div className="books">
    <ul className="booklist">
      <li className="item">
        <Book title="The Vicar of Wakefield" author="Oliver Goldsmith" />
      </li>
      <li className="item">
        <Book title="The Decline and Fall of the Roman Empire:" author="Edward Gibbon" />
      </li>
      <li className="item">
        <Book title="The Merchant of Venice" author="Shakespeare" />
      </li>
    </ul>
    <BookForm />
  </div>
);
export default Books;