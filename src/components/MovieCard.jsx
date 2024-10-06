

import { PropTypes } from 'prop-types'
const MovieCard = ({ movie, onClick }) => {
  return (
    <div className="bg-white shadow-inner shadow-gray-300 hover:scale-105 transition rounded-lg p-4 space-y-6 mb-10" onClick={onClick}>
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "placeholder.jpg"}
        alt={movie.Title}
        className="w-full h-64  rounded-md cursor-pointer"
      />
      <div className=''>

      <h3 className="text-lg font-bold  font-poppins mt-2">{movie.Title}</h3>
      <p className="text-gray-600 font-poppins">{movie.Year}</p>
      </div>
      <div>

      <button className="bg-black text-white hover:font-bold mt-2 font-poppins rounded-lg w-full py-2">
        View Details
      </button>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MovieCard;
