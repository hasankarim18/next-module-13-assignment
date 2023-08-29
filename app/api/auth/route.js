import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req, res) {

 return NextResponse.json(  
   {
    message:'Header Modifiled Successfully.'
   },

   {
     status: 200,   
   }
 );
}