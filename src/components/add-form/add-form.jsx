import './add-form.css';

const AddForm = ({name, author, setName, setAuthor, onKeyPressAdd, addBook}) => {
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