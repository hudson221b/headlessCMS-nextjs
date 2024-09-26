import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Add a new header x-current-path which passes the path to downstream components
  const headers = new Headers(request.headers)
  headers.set("x-current-path", request.nextUrl.pathname)
  return NextResponse.next({ headers })
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/curriculum/:grades",
    "/curriculum/:grades/:grade",
    "/curriculum/:grades/:grade/:unit",
  ],
}
