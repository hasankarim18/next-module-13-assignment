// set cookie route 

import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
    
      
   return NextResponse.json(
     // body
     {
        message:"Set Cookie Success ful"
     },
     // status
     {
       status: 200,
       headers: {
         'Set-Cookie': "theme=dark;Path=/",
       },
     }
   );
}

export async function GET(){

      const cookieStore = cookies();
      const theme = cookieStore.get("theme");
      console.log(theme);

      return NextResponse.json(       
        {
          message: "Get Cookie Success ful",
          cookie: theme
        },        
      );
}
