// Next.js 13+ route handler
export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const imageUrl = searchParams.get('url');
  
    if (!imageUrl) {
      return new Response('Missing image URL', { status: 400 });
    }
  
    const res = await fetch(imageUrl, {
      headers: {
        // optionally set headers here
      },
    });
  
    const contentType = res.headers.get('content-type');
    const buffer = await res.arrayBuffer();
  
    return new Response(buffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=86400',
      },
    });
  }
  