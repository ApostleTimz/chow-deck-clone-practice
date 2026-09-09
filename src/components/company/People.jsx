import { useState } from 'react'
import { TwitterIcon, InstagramIcon } from '../../ui/Icons.jsx'

function LinkedInIcon({ className = '' }) {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" className={className}>
      <circle cx="13" cy="13" r="12" fill="#0C513F" />
      <path
        d="M8.5 11v7M8.5 8.2v.03M12 18v-4.05c0-1.3 1.2-2.45 2.6-2.45 1.4 0 2.4 1.15 2.4 2.45V18M8.5 18v-7"
        stroke="#fff"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

const people = [
  {
    name: 'Kafilat Tofunmi Adeola',
    dept: 'Head of Operations',
    img: 'https://randomuser.me/api/portraits/women/65.jpg',
    socials: { linkedin: '#', twitter: '#', instagram: '#' },
  },
  {
    name: 'Olaoluwa Ayeni',
    dept: 'VP of Engineering',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    socials: { linkedin: '#', twitter: '#', instagram: '#' },
  },
  {
    name: 'Chiamaka Obi',
    dept: 'Head of Product',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
    socials: { linkedin: '#', twitter: '#', instagram: '#' },
  },
  {
    name: 'Tobi Ogunlana',
    dept: 'Head of Design',
    img: 'https://randomuser.me/api/portraits/men/75.jpg',
    socials: { linkedin: '#', twitter: '#', instagram: '#' },
  },
  {
    name: 'Halima Yusuf',
    dept: 'People & Culture Lead',
    img: 'https://randomuser.me/api/portraits/women/12.jpg',
    socials: { linkedin: '#', twitter: '#', instagram: '#' },
  },
  {
    name: 'Kelechi Nwosu',
    dept: 'Head of Vendors & Partnerships',
    img: 'https://randomuser.me/api/portraits/men/11.jpg',
    socials: { linkedin: '#', twitter: '#', instagram: '#' },
  },
  {
    name: 'Emeka Okafor',
    dept: 'Head of Riders & Logistics',
    img: 'https://randomuser.me/api/portraits/men/52.jpg',
    socials: { linkedin: '#', twitter: '#', instagram: '#' },
  },
]

function SocialLinks({ socials, className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <a
        href={socials.linkedin}
        aria-label="LinkedIn"
        onClick={(e) => e.preventDefault()}
        className="text-black hover:text-chow-green transition-colors"
      >
        <LinkedInIcon />
      </a>
      <a
        href={socials.twitter}
        aria-label="Twitter"
        onClick={(e) => e.preventDefault()}
        className="text-black hover:text-chow-green transition-colors"
      >
        <TwitterIcon className="w-6 h-6" />
      </a>
      <a
        href={socials.instagram}
        aria-label="Instagram"
        onClick={(e) => e.preventDefault()}
        className="text-black hover:text-chow-green transition-colors"
      >
        <InstagramIcon className="w-6 h-6" />
      </a>
    </div>
  )
}

function PersonRow({ person, active, onSelect }) {
  const activeCls = active ? 'text-chow-yellow-100 border-chow-yellow-100' : 'hover:bg-black/[0.03]'
  return (
    <button
      type="button"
      onMouseEnter={onSelect}
      onClick={onSelect}
      className={`grid grid-cols-7 gap-3 w-full text-left items-center py-8 border-black border-b transition-colors ${activeCls}`}
    >
      <span className={`col-span-3 text-xl md:text-3xl font-bold leading-tight ${active ? 'text-chow-yellow-100' : 'text-black'}`}>
        {person.name}
      </span>
      <span className={`col-span-3 uppercase text-[11px] md:text-xs tracking-[3px] font-bold ${active ? 'text-chow-yellow-100' : 'text-black/60'}`}>
        {person.dept}
      </span>
      <span className="col-span-1 flex justify-end">
        <SocialLinks socials={person.socials} className={active ? '[&_a]:text-chow-yellow-100' : ''} />
      </span>
    </button>
  )
}

function People() {
  const [active, setActive] = useState(people[0])

  return (
    <div className="py-32 bg-white">
      <div className="container">
        <p className="section-title mb-6">People</p>
        <p className="text-black/60 max-w-2xl mb-16">
          The wonderful humans building and delivering happiness at Chowdeck.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          <div className="lg:col-span-2 lg:sticky lg:top-27.5 lg:h-[calc(100vh-350px)] self-start">
            <div className="relative h-75 sm:h-95 lg:h-[calc(100vh-430px)] min-h-80 rounded-2xl overflow-hidden border-4 border-black bg-chow-green">
              <img
                key={active.img}
                src={active.img}
                alt={active.name}
                className="w-full h-full object-cover opacity-90"
                loading="eager"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-linear-to-t from-black/70 to-transparent">
                <p className="text-white font-bold text-xl leading-tight">{active.name}</p>
                <p className="text-chow-yellow text-sm font-semibold uppercase tracking-[3px] mt-1">
                  {active.dept}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 border-t border-black self-start">
            {people.map((person) => (
              <PersonRow
                key={person.name}
                person={person}
                active={person.name === active.name}
                onSelect={() => setActive(person)}
              />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <SocialLinks socials={active.socials} className="justify-center" />
        </div>
      </div>
    </div>
  )
}

export default People
