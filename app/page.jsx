import HomeFeatures from "./(HomeSections)/HomeFeatures"
import HomeSlider from "./(HomeSections)/HomeSlider"
import HomeTabsSection from "./(HomeSections)/HomeTabsSection"

export default function Home() {
  return (
    <main>
      <HomeSlider />
      <HomeFeatures />
      <HomeTabsSection />
    </main>
  )
}
