import './book-item.css';

const BookItem = ({id, name, author, cover, editBook, deleteBook}) => {

  const image =  cover ? 
    <img src={cover} alt='Обложка для книги' className='book-item__image'/> 
    :
    <div className='book-item__image book-item__image--text'>
      <p>Обложка не загружена</p>
    </div>;

  return (
    <li
      className='book-item'
    >
      {image}
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