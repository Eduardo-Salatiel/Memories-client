import './style.scss';

const ResponseError = ({msg}) => {
    return ( 
        <p className="response-error-msg">{msg}</p>
     );
}
 
export default ResponseError;