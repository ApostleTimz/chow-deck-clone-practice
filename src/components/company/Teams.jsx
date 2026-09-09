const teams = [
  'Executive',
  'Product & Design',
  'Engineering',
  'Growth & Marketing',
  'Operations',
  'Vendors & Partnerships',
  'Riders & Logistics',
  'People & Culture',
]

function FocusCard() {
  return (
    <div className="rounded-2xl" style={{ backgroundColor: '#FFEDB3', height: '400px', overflowY: 'auto', padding: '1.5rem' }}>
      <svg viewBox="0 0 24 24" width="40" height="40" fill="none" className="text-chow-yellow mb-4" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="12" cy="12" r="3.5" fill="currentColor" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <line
            key={deg}
            x1="12"
            y1="2.5"
            x2="12"
            y2="5.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            transform={`rotate(${deg} 12 12)`}
          />
        ))}
      </svg>
      <h3 className="section-title mb-4">Focus.</h3>
      <p className="text-lg leading-7">
        We stay relentlessly focused on reliability, speed and ease. Every sprint, every
        decision and every new feature is measured against one question: does it make
        delivery faster and more dependable for our customers, vendors and riders?
        From our on-the-ground logistics to the software in your pocket, our focus is on
        building the most trustworthy food delivery experience across the continent.
      </p>
      <p className="text-lg leading-7 mt-4">
        We measure our success by the happiness of the people we serve — customers at
        the door, vendors growing their businesses, and riders building sustainable
        livelihoods.
      </p>
    </div>
  )
}

function Teams() {
  return (
    <div className="bg-chow-green py-20">
      <div className="container relative">
        <img
          src="/illustrations/chow-star.svg"
          alt=""
          className="absolute -top-36 right-0 w-[240px]"
          loading="lazy"
        />

        <div className="hidden md:grid gap-4 grid-cols-2">
          <div>
            <p className="section-title text-white mb-10">Teams.</p>
            <ul className="flex flex-col gap-4">
              {teams.map((team, i) => (
                <li
                  key={team}
                  className="text-white flex items-baseline gap-4 border-t border-white/20 py-4"
                >
                  <span className="text-white/60 text-sm font-medium whitespace-nowrap">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-2xl lg:text-3xl font-bold tracking-[-2px]">{team}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="section-title text-white mb-10">Focus.</p>
            <FocusCard />
          </div>
        </div>

        <div className="mt-8 md:hidden">
          <p className="section-title text-white mb-6">Teams.</p>
          <div className="flex gap-4 items-start pb-16 overflow-x-auto scrollbar-hide">
            {teams.map((team, i) => (
              <div
                key={team}
                className="shrink-0 min-w-[260px] rounded-2xl border border-white/20 p-6"
              >
                <span className="text-white/60 text-sm font-medium">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-white text-2xl font-bold tracking-[-2px] mt-2">{team}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <p className="section-title text-white mb-6">Focus.</p>
            <FocusCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Teams