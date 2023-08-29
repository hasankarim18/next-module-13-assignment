/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const ResponseRedirection = () => {
    return (
      <div className="grid  grid-cols-[10fr,1fr,10fr] gap-8 my-8">
        <div>
          <p className="text-xl">
            By cliking this route you will be directed to new tag of route:
            "/api/home"
          </p>
          <a
            className="mt-4 btn btn-secondary "
            target="_blank"
            href="/api/home"
          >
            New Route and It's response
          </a>
        </div>
        <div className=" border"></div>
        <div>
          <p className="text-xl">
            By cliking this route you will be directed to new tag of route:
            "/api/profile" 
          </p>
          <a
            className="mt-4 btn btn-neutral "
            target="_blank"
            href="/api/profile"
          >
            New Route and Redirect To Home Page
          </a>
        </div>
      </div>
    );
};

export default ResponseRedirection;