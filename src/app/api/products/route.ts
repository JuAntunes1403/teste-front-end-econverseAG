// pages/api/proxy.js
import axios from 'axios';

export async function GET() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/teste-front-end/junior/tecnologia/lista-produtos/produtos.json`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await res.json()
   
    return Response.json(data, {headers: {
      'Access-Control-Allow-Origin': '*',
    }})
  }