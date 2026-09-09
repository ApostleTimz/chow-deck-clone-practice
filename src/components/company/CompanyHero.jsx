function CompanyHero() {
  return (
    <div className="relative overflow-hidden">
      <div
        className="relative min-h-screen pt-32 pb-0 flex flex-col"
        style={{
          backgroundColor: '#FFEDB3',
          backgroundImage: 'url(/images/company/cloud-two.svg)',
          backgroundSize: '300px',
          backgroundPosition: '0 200px',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="container relative flex flex-col justify-center">
          <h1 className="text-[48px] md:text-[72px] lg:text-[112px] leading-[0.95] tracking-[-2px] text-center font-bold pt-10">
            Delivering Happiness
          </h1>
        </div>

        <div className="mt-24 overflow-x-hidden">
          <div className="flex items-end -mb-0.5">
            <img
              src="/images/company/web-bike-right.svg"
              alt="delivery bike"
              className="ml-10 w-10 md:w-32.5"
              loading="lazy"
            />
            <img
              src="/images/company/trees.svg"
              alt="tree line"
              className="w-50 md:w-175 ml-auto"
              loading="lazy"
            />
          </div>
        </div>

        <FounderStory />
      </div>
    </div>
  )
}

const story = [
  "I tested positive for COVID on the 31st of December, 2020. That evening, I tried to order food and some essential supplies online and couldn't - every platform I tried was either not delivering or couldn't guarantee delivery. I eventually got through to a friend who helped, and I ended up paying 4x the regular amount.",
  "During my 14-day isolation, I realised no one was really looking into the logistics problem in the way it needed to be looked into. Two weeks. Fourteen days. And I was reminded, on such a small scale, we Africans couldn't figure it out.",
  "We initially approached the problem from a technical standpoint, because that is what we know how to do. We built 10 scooters that would help with the ordering and delivery of food, gave two of them to Korede Spaghetti and one of them to NiFries. We held meetings weekly with our riders and challenged the process until we were satisfied.",
  "With a better understanding of what we believed the problem was, we knew our solution had to be efficient and easy to use. We assembled a team of 8 engineers and built the first version of the app in 3 weeks and launched public beta in October.",
  "I tested positive for COVID on the 31st of December, 2020. That evening, I tried to order food and some essential supplies online and couldn't - every platform I tried was either not delivering or couldn't guarantee delivery.",
]

function FounderStory() {
  return (
    <div className="container mt-24 relative">
      <div className="grid grid-cols-1 md:grid-cols-5 overflow-hidden rounded-2xl border-4 border-black bg-white">
        <div className="md:col-span-2 flex flex-col">
          <p className="bg-chow-green py-3 px-6" style={{ padding: '1.5rem' }}>
            <span className="inline-flex items-center text-white text-2xl font-medium">
              <span className="inline-block w-4 h-4 rounded-full mr-3 bg-chow-yellow" />
              Founder&rsquo;s Story
            </span>
          </p>
          <span className="flex flex-col items-center justify-center p-14 text-center">
            <img
              src="/images/company/founder-ceo.png"
              alt="Babafemi Aluko, co-founder and CEO"
              className="w-full h-87.5 md:w-112.5 md:h-112.5 lg:w-full object-contain mb-6"
              loading="lazy"
            />
            <p className="text-2xl font-medium tracking-normal">Babafemi Aluko</p>
            <p className="text-chow-green text-sm tracking-[3px] font-bold uppercase mt-1">
              ceo / co-founder
            </p>
          </span>
        </div>

        <div className="md:col-span-3 border-t-4 md:border-t-0 md:border-l-4 border-black p-6 md:p-12 max-h-none md:max-h-[650px] md:overflow-y-auto">
          {story.map((p, i) => (
            <p key={i} className="text-base md:text-lg leading-7 mb-4">
              {p}
            </p>
          ))}
        </div>

        <div className="md:col-span-5 flex flex-col items-center justify-center border-t-4 border-black p-10">
          <p className="text-sm font-bold uppercase tracking-wide mb-6">backed by</p>
          <div className="flex flex-wrap justify-center gap-8" style={{ gap: '2rem' }}>
            <img src="/images/company/novastar.jpg" alt="NOVASTAR Ventures" className="w-37.5 grayscale" loading="lazy" />
            <img src="/images/company/aaic.jpg" alt="AAIC Investment" className="w-37.5 grayscale" loading="lazy" />
            <img src="/images/company/yc.png" alt="Y-Combinator" className="w-37.5 grayscale" loading="lazy" />
            <img src="/images/company/hoaq-img.png" alt="HoaQ" className="w-20 grayscale" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyHero