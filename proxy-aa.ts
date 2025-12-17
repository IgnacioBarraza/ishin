import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// TODO: (Replace with real auth logic)
function isAuthenticated(request: NextRequest): boolean {
  const sessionToken = request.cookies.get('ishin-session')?.value
  return !!sessionToken
}

/**
 * Route Definitions
 */
// Protected routes (All routes that starts with /protected)
const PROTECTED_ROUTES = [
  '/dashboard',
  '/medications',
  '/vitals',
  '/profile',
  '/settings',
  '/calendar',
  '/history',
  '/metrics',
  '/notes',
]

// Flow auth routes: Routes that user should not enter if logged in.
// Universal Routes (Legal, Emergency Info) stay away from the array.
const AUTH_FLOW_ROUTES = ['/auth', '/onboarding']

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const loggedIn = isAuthenticated(request)
  const isProtected = PROTECTED_ROUTES.some((route) =>
    pathname.startsWith(route)
  )
  const isAuthFlowRoute = AUTH_FLOW_ROUTES.some((route) =>
    pathname.startsWith(route)
  )

  /**
   * Redirection logic
   */
  if (isProtected && !loggedIn) {
    const url = request.nextUrl.clone()
    url.pathname = '/auth'
    return NextResponse.redirect(url)
  }

  if (isAuthFlowRoute && loggedIn) {
    const url = request.nextUrl.clone()
    url.pathname = '/dashboard'
    return NextResponse.redirect(url)
  }
  return NextResponse.next()
}

/**
 * Matcher configuration
 */
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|manifest.json).*)'],
}
