'use client'
import React, { useEffect, useState } from 'react';


const  SettingCookies = () => {
  const [cookieName, setCookieName] = useState(null)
  const [isCookie, setIsCookie] = useState(false)

 
    
   
  const setCookie = ()=> {
    fetch("/api/theme", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(res => {
        if(res.status === 200){
            return res.json()
        }
    })
    .then(data => {
        setIsCookie(true)
        alert(JSON.stringify(data.message))
    })
  }



  const getCookie = () => {
    fetch("/api/theme")
    .then(res => res.json())
    .then(data => {
      setCookieName(data)
     
    })
   
    
  };


    return (
      <div className="my-8 w-full flex justify-center flex-col items-center gap-8">
        <p className="text-xl">Click To Store Cookies </p>
        <button
          className="inline-block btn btn-neutral "
          onClick={() => {
            setCookie();
          }}
        >
          Set Cookie
        </button>
        <div className="flex gap-8">
          <button
            disabled={!isCookie}
            className="inline-block btn btn-secondary  "
            onClick={() => {
              getCookie();
            }}
          >
            Get Cookie
          </button>
          {cookieName === null ? (
            ""
          ) : (
            <span className="ml-4">
              <span className="mb-2 ">
                {" "}
                <i>Cookie Name</i> <strong>{cookieName.name}</strong> <br />{" "}
              </span>
              <span className="mb-2 ">
                {" "}
                <i>Cookie Value</i> <strong>{cookieName.value}</strong> <br />{" "}
              </span>
              <span className="mb-2 ">
                {" "}
                <i>
                  Cookie path
                </i> <strong>{`"${cookieName.path}"`}</strong> <br />{" "}
              </span>
            </span>
          )}
        </div>
      </div>
    );
};

export default SettingCookies;