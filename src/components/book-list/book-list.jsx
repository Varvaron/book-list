import BookItem from '../book-item/book-item';

import './book-list.css';

const BookList = ({books, editBook, deleteBook, addCover}) => {
  return(
    <div className='book-container'>
    <h2 className='book-heading'>Список книг</h2>
      <ul className='book-list'>
      {
        books.map(({name, author, cover, id}) => {
          return (
            <BookItem name={name} author={author} cover={cover} key={id} id={id} editBook={editBook} deleteBook={deleteBook}/>
          )
        })
      }
      </ul>
    </div>
  )
  
}

export default BookList;