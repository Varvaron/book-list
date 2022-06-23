import { useEffect, useState } from "react";

import {useLocalStorage} from "../../localStorage/localStorage";

import './add-form.css';

const AddForm = () => {

  const [name, setName] = useLocalStorage("name", "");
  const [author, setAuthor] = useLocalStorage("author", "");
  const [books, setBooks] = useState(JSON.parse(localStorage.getItem('books')) || []);

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
  }, [name]);

  useEffect(() => {
    localStorage.setItem("author", JSON.stringify(author));
  }, [author]);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

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
      return newBook;
    }
  }

  const onKeyPressAdd = (evt) => {
    if (evt.key === 'Enter' || evt.key === 13) {
      addBook();
    }
  }
  
  const deleteBook = (id) => {
    setBooks(books.filter((item) => item.id !== id));
  }

  const editBook = (id, inputValue, keyValue) => {
    let currentBooks = JSON.parse(localStorage.getItem("books"));
    const newArray = currentBooks.map((book) => {
        if(book.id === id) {
          book[keyValue] = inputValue;
          return book;
        }
      return book;
    })
    
    localStorage.setItem("books", JSON.stringify(newArray));
  }

  return (
    <>
    <form className='add-form'>
      <h2 className='add-form__heading'>Добавить книгу в список</h2>
      <input 
        type='text' 
        placeholder='Название' 
        className='add-form__input' 
        value={name}
        onChange={(evt) => setName(evt.target.value)}
        onKeyDown={(evt) => onKeyPressAdd(evt)}
      />
      <input
        type='text' 
        placeholder='Автор' 
        className='add-form__input' 
        value={author}
        onChange={(evt) => setAuthor(evt.target.value)}
        onKeyDown={(evt) => onKeyPressAdd(evt)}
      />
      <button 
        type='button' 
        className='add-button'
        onClick={addBook}
      >
        Добавить
      </button>
    </form>
    <div className="add-container">
      <h2 className="add-heading">Список книг</h2>
      <ul className='add-list'>
      {
        books.map(({name, author, id}) => {
          return (
            <li
              key={id}
              className='add-item'
            >
              <input 
                type='text'
                className="add-item__input"
                defaultValue={name}
                onBlur={(evt) => editBook(id, evt.currentTarget.value, 'name')}
              />
              <input 
                type='text'
                className="add-item__input"
                defaultValue={author}
                onBlur={(evt) => editBook(id, evt.currentTarget.value, 'author')}
                />
              <button
                type='button'
                className='add-item__button'
                onClick={() => deleteBook(id)}
              >
                Удалить
              </button>
            </li>
          )
        })
      }
    </ul>
    </div>
    </>
  )
}

export default AddForm;