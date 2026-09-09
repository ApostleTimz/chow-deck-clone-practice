const values = [
  { label: 'Innovation', src: '/images/company/core values/Innovation.png' },
  { label: 'Clear Communication', src: '/images/company/core values/CC.png' },
  { label: 'Empathy', src: '/images/company/core values/Empathy.png' },
  { label: 'Transparency', src: '/images/company/core values/Transparency.png' },
  { label: 'Insist on Excellence', src: '/images/company/core values/Excellence.png' },
  { label: 'Growth & Learning', src: '/images/company/core values/G&L.png' },
  { label: 'Take Ownership', src: '/images/company/core values/Own.png' },
  { label: 'Hustle Always', src: '/images/company/core values/Hustle.png' },
]

function CoreValueCard({ value }) {
  return (
    <span className="min-w-[320px] h-110 rounded-2xl bg-gray-200 inline-block">
      <img
        src={value.src}
        alt={value.label}
        className="w-full h-full object-cover rounded-2xl"
        loading="lazy"
      />
    </span>
  )
}

function CoreValues() {
  return (
    <div className="py-20">
      <div className="container flex items-center justify-between">
        <p className="section-title flex flex-col md:flex-row md:items-end">
          Core Values
          <span className="text-lg text-[#8C77EC] font-medium md:ml-2 lg:mb-2 tracking-normal">
            What keeps us grounded
          </span>
        </p>
      </div>

      <div className="flex overflow-x-auto will-change-transform scrollbar-hide pb-16 mt-14">
        {[0, 1, 2].map((copy) => (
          <div key={copy} className="flex items-center space-x-10 px-5 min-w-fit animate-marquee-normal">
            {values.map((value) => (
              <CoreValueCard key={`${copy}-${value.label}`} value={value} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CoreValues