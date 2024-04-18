import React from 'react';
import {Link} from 'react-router-dom'
function Error() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Error
        </h1>
        <p className="mt-2 text-center text-sm text-gray-600">
          Sorry, something went wrong.
        </p>
        <div className="mt-8 space-x-4 flex justify-center">
          <Link to="/" className="text-white bg-red-500 hover:bg-red-700 py-2 px-4 rounded">
            Go back
          </Link>
          </div>
      </div>
    </div>
  );
}

export default Error;