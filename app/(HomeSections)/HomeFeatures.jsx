import { CheckCircle } from "lucide-react"

const HomeFeatures = () => {
  const cols = [
    {
      id: 1,
      title: "Real Changes",
      content: "Your choice to give monthly will make a long-lasting impact",
    },
    {
      id: 2,
      title: "Regular Changes",
      content: " Learn how you are changing lives through our reports",
    },
    {
      id: 3,
      title: "Trusted Giving",
      content:
        " Every beneficiary you support is under the care of GiveAssured  nonprofits",
    },
  ]
  return (
    <section className='bg-slate-50'>
      <div className='mx-auto py-12 px-4 sm:px-6  lg:py-32 lg:px-40'>
        <div className='mx-auto  text-center'>
          <h2 className=' text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl'>
            Give Monthly
          </h2>
          <p className='mt-4 text-base leading-relaxed text-gray-600'>
            Sign up once and invest in India’s future every month
          </p>
        </div>
        <div className='mt-10  grid grid-cols-1 text-center sm:grid-cols-1 sm:gap-12 lg:grid-cols-3'>
          {cols.map((item) => (
            <div
              key={item.id}
              className='flex gap-x-4 items-center justify-start'>
              <div>
                <CheckCircle className='h-12 w-12 text-green-700  ' />
              </div>
              <div className='text-left'>
                <h3 className='mt-4 text-lg font-semibold text-black'>
                  {item.title}
                </h3>
                <p className='mt-3 text-sm  text-gray-600'>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeFeatures
