/* eslint-disable react/prop-types */
import star from '../assets/star.svg'
function Ratting({ value }) {
  const stats = Array(value).fill(star);
  return (
    <>
      <div className="flex items-center space-x-1 mb-5">
        {
          stats.map((stat, index) => (
            <img key={index} src={stat} width="14" height="14" alt="stat" />
          ))
        }
      </div>
    </>
  )
}

export default Ratting