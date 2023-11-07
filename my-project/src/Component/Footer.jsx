import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

function Footer() {
  const { page, totalPage, handlerPageChange } = useContext(AppContext);
  return (
    <div className="fixed bottom-0 flex items-center shadow-lg border-2 bg-blend-darken justify-evenly bg-white w-full py-3">
      <div className="flex space-x-7">
        {page > 1 && (
          <button
            className="py-1 px-5 rounded-lg border border-gray-500"
            onClick={() => handlerPageChange(page - 1)}
          >
            Previous
          </button>
        )}
        {page < totalPage && (
          <button
            className="py-1 px-5 rounded-lg border border-gray-500"
            onClick={() => handlerPageChange(page + 1)}
          >
            Next
          </button>
        )}
      </div>
      <p>{`Page ${page} of ${totalPage}`}</p>
    </div>
  );
}

export default Footer
