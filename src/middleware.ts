import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    console.log(`url: ${request.url}`)
    const token = request.cookies.get('token')?.value;
    console.log(`token: ${token}`)

    if (!token && request.nextUrl.pathname.startsWith('/admin')) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    if (token && request.nextUrl.pathname.startsWith('/login') ){
        return NextResponse.redirect(new URL('/admin', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/admin/:path*', '/login'],
};
