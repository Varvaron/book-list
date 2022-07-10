import { useLocalStorage } from './localStorage/localStorage';

import AddForm from './components/add-form/add-form';
import BookList from './components/book-list/book-list';

import './App.css';

const App = () => {
  const [name, setName] = useLocalStorage('name', '');
  const [author, setAuthor] = useLocalStorage('author', '');
  const [books, setBooks] = useLocalStorage("books", [])

  const addBook = () => {
    if (name.trim() && author.trim()) {
      const lastItem = books[books.length - 1];
      const bookID = lastItem === undefined ? 1 : lastItem.id + 1;

      const newBook = {
        id: bookID,
        name: name,
        author: author
      }

      setBooks((books) => [...books, newBook]);
      setName('');
      setAuthor('');
    }
  }

  const onKeyPressAdd = (evt) => {
    if (evt.key === 'Enter' || evt.key === 13) {
      addBook();
    }
  }

  const editBook = (id, inputValue, keyValue) => {
    const newArray = books.map((book) => {
        if(book.id === id) {
          book[keyValue] = inputValue;
          return book;
        }
      return book;
    })
    
    setBooks(newArray);
  }

  const deleteBook = (id) => {
    setBooks(books.filter((item) => item.id !== id));
  }

  return (
    <div className='App'>
      <AddForm name={name} author={author} setName={setName} setAuthor={setAuthor} onKeyPressAdd={onKeyPressAdd} addBook={addBook}/>
      <BookList books={books} editBook={editBook} deleteBook={deleteBook}/>
    </div>
  );
}

export default App;
