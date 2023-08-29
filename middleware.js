import { NextResponse } from "next/server";

export function middleware(req, res){


     if(req.nextUrl.pathname.startsWith('/api/auth')){
         const reqHeader =  new Headers(req.headers)
        const Authorization = reqHeader.get('Authorization')
        const authKey = process.env.AUTH_KEY

        console.log(Authorization);

        if(!Authorization ||
           Authorization === '' ||
           Authorization !==  authKey
            ){
              return NextResponse.json({
                message:"Authorization failed"
              })
            }else {
               const res = NextResponse.next();

               res.headers.set("Authorization", "Bearer " + Authorization);

               return res;
            }

        
     }
}