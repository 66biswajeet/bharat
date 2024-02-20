import CharityCard from "@/components/CharityCard"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import {
  IoGiftSharp,
  IoFastFood,
  IoPawSharp,
  IoAccessibility,
  IoSchoolSharp,
  IoMedkitSharp,
  IoWalkSharp,
} from "react-icons/io5"

const HomeTabsSection = () => {
  const tabsList = [
    {
      id: 1,
      title: "All category",
      icon: <IoGiftSharp />,
      value: "all",
    },
    {
      id: 2,
      title: "Hunger",
      icon: <IoFastFood />,
      value: "hunger",
    },
    {
      id: 3,
      title: "Animals",
      icon: <IoPawSharp />,
      value: "animals",
    },
    {
      id: 4,
      title: "Children",
      icon: <IoAccessibility />,
      value: "children",
    },
    {
      id: 5,
      title: "Education",
      icon: <IoSchoolSharp />,
      value: "education",
    },
    {
      id: 6,
      title: "Emergancy",
      icon: <IoMedkitSharp />,
      value: "emergancy",
    },
    {
      id: 7,
      title: "Disablility",
      icon: <IoWalkSharp />,
      value: "disability",
    },
  ]
  return (
    <section className='bg-slate-200'>
      <div className='mx-auto py-12 px-4 sm:px-6 lg:py-32 lg:px-40'>
        <div className='mx-auto  text-center'>
          <h2 className=' text-xl font-bold leading-tight text-purple-700  '>
            OUR CAMPAIGNS
          </h2>
          <p className='mt-4  text-5xl font-bold text-gray-600'>
            Causes you can support
          </p>
        </div>

        <div className=''>
          <Tabs defaultValue='all'>
            <TabsList className='mt-20 inline-flex justify-center space-x-5 w-full bg-slate-200'>
              {tabsList.map((item) => (
                <TabsTrigger
                  key={item.id}
                  value={item.value}
                  className='p-5 ring-2 ring-slate-500 bg-slate-200 flex flex-col'>
                  <span className='text-4xl mb-2'>{item.icon}</span>
                  <p className='text-xl'>{item.title}</p>
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsContent className='mt-28' value='all'>
              <CharityCard img='/cardimg.webp' />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

export default HomeTabsSection
