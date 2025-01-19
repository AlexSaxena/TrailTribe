import { createFileRoute } from '@tanstack/react-router'

type TrailDetailsParams = {
  id: string
}

export const Route = createFileRoute('/trailDetails')({
  component: TrailDetails,
})

function TrailDetails({ params }: { params: TrailDetailsParams }) {
  const { id } = params

  return (
    <div>
      <div className="mt-4">
        <h1 className="text-2xl font-bold">Trail Details</h1>
        <p>Showing details for trail with ID: {id}</p>
      </div>
    </div>
  )
}
