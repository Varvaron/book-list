import './book-item.css';

const BookItem = ({id, name, editBook, author, deleteBook}) => {
  return (
    <li
      className='book-item'
    >
      <input 
        type='text'
        className='book-item__input'
        defaultValue={name}
        onBlur={(evt) => editBook(id, evt.currentTarget.value, 'name')}
      />
      <input 
        type='text'
        className='book-item__input'
        defaultValue={author}
        onBlur={(evt) => editBook(id, evt.currentTarget.value, 'author')}
        />
      <button
        type='button'
        className='book-item__button'
          onClick={() => deleteBook(id)}
      >
        Удалить
      </button>
    </li>
  )
}

export default BookItem;