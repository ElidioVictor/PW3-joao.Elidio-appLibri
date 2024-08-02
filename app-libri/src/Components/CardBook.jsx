import Styles from './CardBook.module.css';

const BookCard = ({titulo, autor})=> {
    return(
        <div>
            <h3>{titulo}</h3>
            <h4>{autor}</h4>
        </div>
    )
}

export default BookCard;