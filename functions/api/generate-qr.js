import QRCode from "qrcode"

export async function onRequestPost(context) {
    const {request} = context;
    const { text, dark, light } = await request.json();
  
    const options = {
      type: "svg",
      color: {
        dark,
        light
      }
    }

    const svg = await QRCode.toString(text, options);

    const response = new Response(JSON.stringify({svg}));
    response.headers.set("Content-Type", "application/json");

    return response;
  }