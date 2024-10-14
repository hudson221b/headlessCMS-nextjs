import { NextRequest } from "next/server"
import { revalidateTag } from "next/cache"

export async function POST(request: NextRequest) {
  console.log("#####🚀🚀🚀 webhook request received")
  const body = await request.json()
  console.log("#####🚀🚀🚀 ~ webhook body", body)
  try {
    const tag = request.nextUrl.searchParams.get("tag") as string
    revalidateTag(tag)
    return Response.json({ revalidated: true, now: Date.now() })
  } catch (error) {
    console.error(error)
    return Response.json({ message: "Error revalidating" }, { status: 500 })
  }
}
