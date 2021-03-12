import { useDispatch } from 'react-redux';
import { showPostForm } from '../../redux/actions/styles';
import './style.scss'

const ShowPostForm = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(showPostForm())
  }

    return ( 
        <div className="show-post-form" onClick={handleClick}>
            <span>Agregar Memorie</span>
        </div>
     );
}
 
export default ShowPostForm;