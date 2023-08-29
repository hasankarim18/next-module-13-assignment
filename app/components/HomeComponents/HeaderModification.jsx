"use client"
/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const HeaderModification = () => {
    const authKey = process.env.AUTH_KEY
    const modifyHeader = ()=> {
        fetch("/api/auth", {
          method: "POST",
          headers: {
            // "Content-Type": "application/json",
            Authorization: authKey,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            alert(JSON.stringify(data.message));
          });
        
    }

    return (
      <div className="mt-8">
        <p className="text-xl text-center">
          By Clicking the button it will fire a route and with a Authorizaton
          token and return it with a new Authorization token with "Bearer"
          prefix <br />
          and the route is
          <span className="text-blue-400 font-semibold">'/api/auth'</span>
          <br />
          <span className="text-red-400 font-semibold">
            Authorization: "123456ABC"
          </span>
        </p>
        <div className="mt-8 flex items-center  justify-center">
          <button
            onClick={() => {
              modifyHeader();
            }}
            className="btn btn-secondary btn-outline "
          >
            Modify The Authorization Header
          </button>
        </div>
      </div>
    );
};

export default HeaderModification;