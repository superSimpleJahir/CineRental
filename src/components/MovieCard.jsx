/* eslint-disable react/prop-types */
import Ratting from "./Ratting"
import tag from '../assets/tag.svg'
import { getImageUrl } from "../utils/cine-utility"
import MovieDetailsModal from "./MovieDetailsModal";
import { useContext, useState } from "react";
import { MovieContext } from "../context";

function MovieCard({ movie }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const { state, dispatch } = useContext(MovieContext);

  const handleCloseModal = () => {
    setSelectedMovie(null);
    setShowModal(false);
  }
  const handleShowModal = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  }

  const addToCart = (e, movie) => {
    e.stopPropagation();

    const found = state?.cartData.find((item) => item.id === movie.id);

    if (!found) {
      dispatch({
        type: "ADD_TO_CART",
        payload: { ...movie },
      })
    } else {
      alert(`Already added to cart  ${movie.title} movie`);
    }

  }

  return (
    <>
      {
        showModal && <MovieDetailsModal onCloseModal={handleCloseModal} movie={selectedMovie} onAddToCart={addToCart} />
      }
      <figure onClick={() => handleShowModal(movie)} className="p-4 border cursor-pointer border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <img className="w-full object-cover" src={getImageUrl(movie?.cover)} alt={movie?.title} />
        <figcaption className="pt-4">
          <h3 className="text-xl mb-1">{movie?.title}</h3>
          <p className="text-[#575A6E] text-sm mb-2">{movie?.genre}</p>
          <Ratting value={movie?.rating} />
          <button onClick={(e) => addToCart(e, movie)} className="bg-primary w-full rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
            href="#">
            <img src={tag} alt="tag" />
            <span>$ {movie?.price} | Add to Cart</span>
          </button>
        </figcaption>
      </figure>
    </>
  )
}

export default MovieCard