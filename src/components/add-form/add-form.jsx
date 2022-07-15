import './add-form.css';

const AddForm = ({name, author, cover, setName, setAuthor, onKeyPressAdd, addBook, addCover}) => {

  const uploadInputText = cover ? 'Обложка загружена' : 'Выберите обложку (145х205)';

  return (
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
      <div 
      className='add-form__input-wrapper'>
        <input 
          type='file'
          name='book-cover'
          id='book-cover'
          accept='image/png, image/jpeg, image/jpg'
          className='add-form__file'
          onChange={(evt) => addCover(evt)}
        />
        <label 
          htmlFor="book-cover"
          className='add-form__label'
        >
          <span
          className='add-form__label-text'
          >
            {uploadInputText}
          </span>
        </label>
      </div>
      <button 
        type='button' 
        className='add-form__button'
        onClick={addBook}
      >
        Добавить
      </button>
    </form>
  )
}

export default AddForm;