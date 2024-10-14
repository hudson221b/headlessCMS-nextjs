"use client"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="pt-32 md:pt-40 border-b [border-image:linear-gradient(to_right,transparent,theme(colors.slate.800),transparent)1]">
        <div className="md:flex md:justify-between">
          <div className="md:grow pb-12 md:pb-20">
            <div className="max-w-4xl">
              <article className="pb-12 mb-12 border-b [border-image:linear-gradient(to_right,transparent,theme(colors.slate.800),transparent)1]">
                <header>
                  <h2 className="h2 inline-flex pb-4">
                    An error occured when getting content
                  </h2>
                </header>
                <h4 className="h4">We are trying our best to solve it</h4>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
