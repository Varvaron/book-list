import { useLocalStorage } from './localStorage/localStorage';

import AddForm from './components/add-form/add-form';
import BookList from './components/book-list/book-list';

import './App.css';

const App = () => {
  const [name, setName] = useLocalStorage('name', '');
  const [author, setAuthor] = useLocalStorage('author', '');
  const [cover, setCover] = useLocalStorage('cover', '')
  const [books, setBooks] = useLocalStorage('books', [])

  const addCover =() => {
    const file = document.querySelector('input[type=file]').files[0];
    const reader  = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
    }
  
    reader.onloadend = () => {
      setCover(reader.result);
    }
  }

  const addBook = () => { 
    if (name.length && author.length) {
      const newBook = {
        id: Date.now(),
        name: name,
        author: author,
        cover: cover
      }

      setBooks((books) => [...books, newBook]);
      setName('');
      setAuthor('');
      setCover('');
    }

    if (!name.length || !author.length) {
      alert('Hе все обязательные поля заполнены');
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
      <AddForm name={name} author={author} cover={cover} setName={setName} setAuthor={setAuthor} onKeyPressAdd={onKeyPressAdd} addBook={addBook} addCover={addCover} setCover={setCover}/>
      <BookList books={books} editBook={editBook} deleteBook={deleteBook} addCover={addCover}/>
    </div>
  );
}

export default App;
