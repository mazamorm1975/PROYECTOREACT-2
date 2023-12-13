/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import PropTypes from "prop-types";
import { Title } from "./components/Title";
import { UserDetails } from "./components/UserDetails";
import { Book } from "./components/Book";

// eslint-disable-next-line react/prop-types
export const HolaMundoApp = ({ user, id, title, book }) => {
  return (
    <>
      <Title title={title} />
      <UserDetails user={user} id={id} />
      <Book book={book} />
    </>
  );
};

HolaMundoApp.propTypes = {
  user: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

//Nota: los defaultProps SIEMPRE se evaluan antes del propTypes
HolaMundoApp.defaultProps = {
  title: "Saludos amigos en un defaultProps",
  book: "Padre pobre, Padre Rico Mario Zamora",
  id: 580065444,
};
