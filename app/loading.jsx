import { Skeleton } from "@/components/ui/skeleton"

const Loading = () => {
  return (
    <>
      <div className='bg-slate-50 mb-2 flex'>
        <Skeleton className='w-20' />
      </div>
    </>
  )
}

export default Loading
