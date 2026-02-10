import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyAccessToken } from '@/lib/auth/jwt';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if path requires authentication
  const isAuthRequired =
    pathname.startsWith('/admin') ||
    pathname.startsWith('/account') ||
    pathname.startsWith('/api/admin') ||
    pathname.startsWith('/api/orders') ||
    (pathname.startsWith('/api/users') && !pathname.includes('/api/auth'));

  // Skip middleware for public paths
  if (!isAuthRequired) {
    return NextResponse.next();
  }

  // Get token from cookie or Authorization header
  const token =
    request.cookies.get('accessToken')?.value ||
    request.headers.get('Authorization')?.replace('Bearer ', '');

  if (!token) {
    // Redirect to login for pages
    if (!pathname.startsWith('/api')) {
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }
    // Return 401 for API routes
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Verify token
  const payload = verifyAccessToken(token);

  if (!payload) {
    // Clear invalid token
    const response = pathname.startsWith('/api')
      ? NextResponse.json({ error: 'Invalid token' }, { status: 401 })
      : NextResponse.redirect(new URL('/auth/login', request.url));

    response.cookies.delete('accessToken');
    return response;
  }

  // Check admin access
  const isAdminRoute = pathname.startsWith('/admin') || pathname.startsWith('/api/admin');

  if (isAdminRoute && payload.role !== 'admin') {
    return pathname.startsWith('/api')
      ? NextResponse.json({ error: 'Forbidden' }, { status: 403 })
      : NextResponse.redirect(new URL('/', request.url));
  }

  // Add user info to request headers
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-user-id', payload.userId);
  requestHeaders.set('x-user-email', payload.email);
  requestHeaders.set('x-user-role', payload.role);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/account/:path*',
    '/api/admin/:path*',
    '/api/orders/:path*',
    '/api/users/:path*',
  ],
};
