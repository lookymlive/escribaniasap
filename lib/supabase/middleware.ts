import { NextResponse, type NextRequest } from "next/server"

export async function updateSession(request: NextRequest) {
  // For future: Add auth check only for protected routes like /admin or /dashboard
  return NextResponse.next({
    request,
  })
}
