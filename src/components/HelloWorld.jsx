/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
export const HolaMundo =({user, id, title ='Hola mundo'})=>{

    return (
    <>
    <h1>{title}</h1>
    <div>Como estas  {user.name} {user.lastName} , tu ID en fedex hasta el 2016 era {id}</div>
    </>
  );
}

HolaMundo.propTypes = {
  user: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
}