const roles = [
  { title: 'Senior Software Engineer', dept: 'Engineering', location: 'Lagos' },
  { title: 'Product Designer', dept: 'Product & Design', location: 'Lagos' },
  { title: 'Growth Marketer', dept: 'Growth & Marketing', location: 'Remote' },
  { title: 'Vendor Success Manager', dept: 'Vendors & Partnerships', location: 'Lagos' },
  { title: 'Rider Operations Lead', dept: 'Riders & Logistics', location: 'Lagos' },
  { title: 'People Operations Generalist', dept: 'People & Culture', location: 'Lagos' },
]

function JoinUs() {
  return (
    <div className="container pb-20">
      <div className="border-4 border-black p-6 lg:p-10 rounded-2xl bg-white">
        <div className="flex items-center justify-between">
          <span className="section-title">
            Join us<span className="text-chow-green">.</span>
          </span>
          <img src="/illustrations/Shawarma.svg" alt="Shawarma" className="w-[60px] lg:w-[110px]" loading="lazy" />
        </div>

        <div className="mt-10 grid gap-4">
          {roles.map((role) => (
            <a
              key={role.title}
              href="https://chowdeck.bamboohr.com/careers"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-xl border-2 border-black/10 hover:border-black px-5 py-4 transition-colors"
            >
              <span className="flex-1">
                <span className="block font-bold text-lg leading-tight group-hover:underline">
                  {role.title}
                </span>
                <span className="block text-sm text-black/50">
                  {role.dept} · {role.location}
                </span>
              </span>
              <span className="text-chow-green font-semibold shrink-0 group-hover:translate-x-1 transition-transform">
                Apply →
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default JoinUs