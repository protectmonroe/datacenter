'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function Home() {
  const [showCallModal, setShowCallModal] = useState(false)

  const handleCallNow = () => {
    window.location.href = 'tel:+14234425948'
  }
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* HERO SECTION - ABOVE THE FOLD */}
      <section id="hero" className="bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          {/* Core Message */}
  <div className="mb-8 md:mb-12">
  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-balance text-center">
  No Data Centers In Monroe County.
  </h1>
  <p className="text-lg md:text-xl leading-relaxed text-center mb-6">
  A massive data center project is being considered outside Sweetwater, TN.<br/><br/>Now is the time to speak up.
  </p>
  </div>

  {/* EMBEDDED VIDEO */}
  <div className="w-full max-w-4xl mx-auto mb-12 md:mb-16">
    <div className="relative w-full pb-[56.25%] bg-black rounded-lg overflow-hidden">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.youtube.com/embed/c7b9UHOhU0k?autoplay=1&mute=1"
        title="Data Center Impact Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  </div>

  {/* DEMANDS SECTION */}
  <div className="rounded-lg p-8 mb-16 md:mb-20 bg-primary-foreground bg-opacity-10 backdrop-blur-sm">
    <div className="text-lg md:text-xl leading-relaxed text-center mb-6">
      <p className="font-semibold mb-4">We need the County Commission to:</p>
      <ol className="text-left inline-block space-y-3">
        <li className="flex items-start gap-3">
          <span className="font-bold flex-shrink-0">1.</span>
          <span>Announce publicly that they will not support data centers on farmland in Monroe County.</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="font-bold flex-shrink-0">2.</span>
          <span>Start working on a zoning plan.</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="font-bold flex-shrink-0">3.</span>
          <span>Vote on a <span className="font-bold underline">1 year pause on all data center projects</span> while we get the facts.</span>
        </li>
      </ol>
    </div>
    <div className="text-center">
      <button 
        onClick={() => document.getElementById('details')?.scrollIntoView({ behavior: 'smooth' })}
        className="text-lg md:text-xl px-8 py-3 bg-primary-foreground text-primary rounded-lg hover:bg-opacity-90 transition-all font-semibold shadow-lg hover:shadow-xl"
      >
        Why Zoning?
      </button>
    </div>
  </div>

          {/* URGENT MEETING INFO */}
          <div className="bg-accent bg-opacity-20 border-l-4 border-accent p-6 rounded mb-8 md:mb-12">
            <p className="text-lg font-bold mb-2">
              ⚠️ NEXT COUNTY COMMISSION MEETING
            </p>
            <p className="text-xl md:text-2xl font-bold mb-4">
              Tuesday, June 23rd • 5:00 PM
            </p>
            <p className="text-base md:text-lg mb-4">
              Monroe County Courthouse<br/>
              Madisonville, TN
            </p>
            <p className="text-sm md:text-base mb-4">
              We need everyone there. Fill out the form at the Clerk's office for 5 minutes speaking time.
            </p>
            <div className="flex flex-col gap-3">
            <Button 
              onClick={() => setShowCallModal(true)}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-lg py-6 md:py-8"
            >
              Call the County Clerk's Office
            </Button>
            </div>
          </div>

          {/* MAIN ACTION BUTTONS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <Link href="https://www.facebook.com/groups/communitydata/" target="_blank">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-8">
                Join Facebook Group
              </Button>
            </Link>
            <Link href="https://www.change.org/p/petition-no-industrial-scale-data-centers-in-monroe-county-tn" target="_blank">
              <Button className="w-full bg-white hover:bg-gray-100 text-primary font-bold text-lg py-8">
                Sign The Petition
              </Button>
            </Link>
          </div>

        </div>
      </section>

      {/* THE PROBLEM SECTION */}
      <section id="facts" className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-foreground">
            What&apos;s Happening?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left side - Facts */}
            <div className="space-y-6">
              <Card className="p-8 border-2 border-muted">
                <h3 id="the-facts" className="text-2xl font-bold mb-4 text-primary text-center">The Facts</h3>
                <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent mb-6"></div>
                <p className="text-base md:text-lg leading-relaxed mb-4 text-center">
                  Sweetwater Utilities Board recently received an inquiry about mass electrical grid capacity at an address on undeveloped farmland near the county line.
                </p>
                <p className="text-base md:text-lg leading-relaxed mb-4 text-center">
                  City officials believe a 100+ acre data center complex is being considered at this location.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-center">
                  The Sweetwater Planning Commission is rushing to pass a new ordinance that blocks data centers within city limits, but Monroe County is <u className="font-semibold">completely unprotected</u>.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-center mt-4">
                  <a href="https://thebaynet.com/how-ndas-fueled-calvert-countys-explosive-data-center-controversy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline font-semibold">Read how data centers use non-disclosure agreements to file paperwork in secret</a>
                </p>
                <p className="text-base md:text-lg leading-relaxed text-center mt-4">
                  Currently, no site plans or permit have been announced, and <u className="font-bold">we need to act NOW</u>, before the process is official.
                </p>
              </Card>

              <Card className="p-8 border-2 border-muted">
                <h3 className="text-2xl font-bold mb-4 text-secondary text-center">It Won&apos;t Be Pretty</h3>
                <div className="h-1 bg-gradient-to-r from-transparent via-secondary to-transparent mb-6"></div>
                <ul className="space-y-3 text-base md:text-lg">
                  <li className="flex gap-3">
                    <span className="font-bold">💰</span>
                    <span>Higher electrical bills</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold">💼</span>
                    <span>Long term jobs created: few/none</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold">🔊</span>
                    <span>24/7 noise from industrial fans</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold">💧</span>
                    <span>Massive water usage affecting local wells and agriculture</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold">📉</span>
                    <span>Property values drop. Your home is worth less.</span>
                  </li>
                </ul>
              </Card>
            </div>

            {/* Right side - Map Image */}
            <div className="bg-muted rounded-lg p-4 flex items-center justify-center overflow-hidden relative">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture.PNG-ndCxYpsPQG0u8QOB3fNLNe9Vov4ksO.png"
                alt="Satellite map showing proposed data center location (red oval) near Sweetwater, Tennessee, surrounded by farmland and residential areas"
                className="w-full h-full object-cover rounded"
              />
              {/* Arrow pointing to red circle */}
              <div className="absolute top-8 right-1/4 animate-bounce">
                <svg 
                  width="144" 
                  height="144" 
                  viewBox="0 0 48 48" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="drop-shadow-lg"
                >
                  <path 
                    d="M44 24L16 24M16 24L24 16M16 24L24 32" 
                    stroke="#ff0000" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT NEEDS TO BE DONE - URGENT CALL TO ACTION */}
      <section id="details" className="py-16 md:py-24 bg-accent text-accent-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center text-balance">
            What Needs To Be Done RIGHT NOW
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="bg-accent-foreground bg-opacity-20 rounded-lg p-6 border-l-4 border-accent-foreground text-foreground">
                  <h3 className="text-2xl font-bold mb-3 text-center">The Window Is Closing</h3>
                  <div className="h-1 bg-gradient-to-r from-transparent via-foreground to-transparent mb-4"></div>
                  <p className="text-base md:text-lg leading-relaxed text-center">
                    Once a company submits detailed plans to the county, it becomes much harder to stop the project.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed font-semibold text-center mt-3">
                    We need a 1 year pause to consider the impacts.
                  </p>
                </div>

                <div className="bg-accent-foreground bg-opacity-20 rounded-lg p-6 border-l-4 border-accent-foreground text-foreground">
                  <h3 className="text-2xl font-bold mb-3 text-center">What Happens If We Wait</h3>
                  <div className="h-1 bg-gradient-to-r from-transparent via-foreground to-transparent mb-4"></div>
                  <p className="text-base md:text-lg leading-relaxed text-center">
                    If plans are submitted, the company can use eminent domain to seize farmland and sue the county into approving the project. It has happened all over the USA, and it can happen here.
                  </p>
  <p className="text-base md:text-lg leading-relaxed text-center mt-4">
  <a href="https://www.yahoo.com/news/articles/family-fighting-home-georgia-power-002000121.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline font-semibold">
  See what happened in Georgia
  </a>
  </p>
  <p className="text-base md:text-lg leading-relaxed text-center mt-3">
  <a href="https://thesuntimesnews.com/an-inside-glimpse-at-a-no-win-decision-for-saline-township-leaders/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline font-semibold">
  See what happened in Michigan
  </a>
  </p>
  <p className="text-base md:text-lg leading-relaxed text-center mt-3">
  <a href="https://www.texastribune.org/2026/05/12/texas-hill-county-approves-data-center-construction-pause-ai/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline font-semibold">
  See what happened in Texas
  </a>
  </p>
                </div>

                <div className="bg-accent-foreground bg-opacity-20 rounded-lg p-6 border-l-4 border-accent-foreground text-foreground">
                  <h3 className="text-2xl font-bold mb-3 text-center">Why Do We Need Zoning?</h3>
                  <div className="h-1 bg-gradient-to-r from-transparent via-foreground to-transparent mb-4"></div>
                  <p className="text-base md:text-lg leading-relaxed text-center">
                    The County Commission does not have the legal power to stop data centers without a zoning code. Once they start the process, <em>even if it&apos;s not done yet</em>, they can vote for a one year pause on data center construction.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-accent-foreground text-accent rounded-lg p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Take Action This Week</h3>
              
              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="text-2xl font-bold">1</span>
                  <button 
                    onClick={() => setShowCallModal(true)}
                    className="text-left hover:opacity-80 transition-opacity flex-1"
                  >
                    <p className="font-bold text-lg mb-1">Call the County Clerk's Office</p>
                    <p className="text-sm md:text-base">Tell them: We The People want a one year moratorium on data centers in Monroe County.</p>
                  </button>
                </div>

                <div className="flex gap-3">
                  <span className="text-2xl font-bold">2</span>
                  <div>
                    <p className="font-bold text-lg mb-1">Attend The Meeting</p>
                    <p className="text-sm md:text-base">June 23rd, 5:00 PM at the County Courthouse in Madisonville, and every 4th Tuesday.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-2xl font-bold">3</span>
                  <div>
                    <p className="font-bold text-lg mb-1">Bring A Neighbor</p>
                    <p className="text-sm md:text-base">The more people who show up, the more impact we have.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-2xl font-bold">4</span>
                  <div>
                    <p className="font-bold text-lg mb-1">Sign The Petition</p>
                    <p className="text-sm md:text-base">Show commissioners how many residents oppose this project.</p>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setShowCallModal(true)}
                className="block w-full mt-8"
              >
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-lg py-6">
                  Call Now
                </Button>
              </button>

              <Link href="https://www.change.org/p/petition-no-industrial-scale-data-centers-in-monroe-county-tn" target="_blank" className="block w-full mt-4">
                <Button className="w-full bg-accent hover:bg-accent/80 text-accent-foreground font-bold text-lg py-6">
                  Sign The Petition
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY DATA CENTERS ARE DIFFERENT */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-foreground">
            Unrestricted Zoning in Monroe County
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Card className="p-8 bg-background border-2 border-primary">
              <h3 className="text-2xl font-bold mb-4 text-primary text-center">We Believe in Freedom</h3>
              <p className="text-base md:text-lg leading-relaxed text-center">
                We don&apos;t want government zoning rules controlling what people build on their own land. That&apos;s our principle.
              </p>
            </Card>

            <Card className="p-8 bg-background border-2 border-secondary">
              <h3 className="text-2xl font-bold mb-4 text-secondary text-center">But Data Centers Are Different</h3>
              <p className="text-base md:text-lg leading-relaxed text-center">
                An industrial warehouse full of computers is bad for neighbors and will change our rural way of life for the next 100 years.
              </p>
            </Card>

            <Card className="p-8 bg-background border-2 border-accent">
              <h3 className="text-2xl font-bold mb-4 text-accent text-center">A Pause Makes Sense</h3>
              <p className="text-base md:text-lg leading-relaxed text-center">
                Data centers should be a reasonable distance from homes and farms. We need time to investigate how landowners want to deal with this issue.
              </p>
            </Card>
          </div>

          <div className="mt-12 bg-background rounded-lg p-8 border-2 border-primary">
            <h3 className="text-2xl font-bold mb-4 text-primary text-center">We&apos;re Not Anti-Development</h3>
            <ul className="space-y-3 text-base md:text-lg font-semibold leading-relaxed text-left list-none">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>We support ALL local businesses and industries that create real jobs for real people.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Data centers take valuable farmland and give us nothing in return except higher utility bills, noise, and pollution.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>We believe our Commissioners are the right people for the job and can fix this problem in a way that does not change property rights for normal folks who live in this county.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* COMMUNITY UPDATES */}
      <section id="meetings" className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
            Latest Updates
          </h2>
          
          <div className="space-y-6 md:space-y-8">
            <Link href="/news/latest-commission-meeting">
              <Card className="p-8 bg-primary-foreground text-foreground hover:shadow-lg transition cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">📋</div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2">Sweetwater Planning Board Meeting</h3>
                    <p className="text-base md:text-lg mb-2">June 18th, 5pm at City Hall</p>
                    <p className="text-base md:text-lg leading-relaxed">City Hall already supports a ban, but are accepting public comments if you fill out their form.</p>
                  </div>
                </div>
              </Card>
            </Link>

            <Link href="/news/environmental-study">
              <Card className="p-8 bg-primary-foreground text-foreground hover:shadow-lg transition cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">📰</div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2">Monroe County Planning Commission Meeting</h3>
                    <p className="text-base md:text-lg mb-2">June 23rd, 5pm at the County Courthouse in Madisonville</p>
                    <p className="text-base md:text-lg leading-relaxed">Currently, no commissioners are publicly in favor of a one year ban on data center construction.</p>
                  </div>
                </div>
              </Card>
            </Link>

          </div>

        </div>
      </section>

      {/* FAQ PREVIEW */}
      <section id="faq" className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-foreground">
            Common Questions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <Card className="p-8 border-2 border-muted">
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-primary text-center">What does the data center do?</h3>
              <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent mb-4"></div>
              <p className="text-base md:text-lg leading-relaxed text-center">
                It stores and processes data for companies online. It needs massive amounts of electricity, water, and cooling systems running 24/7.
              </p>
            </Card>

            <Card className="p-8 border-2 border-muted">
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-secondary text-center">Will it bring jobs?</h3>
              <div className="h-1 bg-gradient-to-r from-transparent via-secondary to-transparent mb-4"></div>
              <p className="text-base md:text-lg leading-relaxed text-center">
                Very few. A 100-acre center will create less than ten full-time jobs. The construction brings temporary work, but it&apos;s not worth the permanent damage to our community.
              </p>
            </Card>

            <Card className="p-8 border-2 border-muted">
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-accent text-center">Can we stop it?</h3>
              <div className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent mb-4"></div>
                <p className="text-base md:text-lg leading-relaxed text-center">
                  Yes! The County Commission decides on new projects. If enough residents speak up at meetings, they'll listen.
                </p>
            </Card>

            <Card className="p-8 border-2 border-muted">
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-primary text-center">When is the decision?</h3>
              <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent mb-4"></div>
              <p className="text-base md:text-lg leading-relaxed text-center">
                The Commission meets every month in Madisonville and can vote on a moratorium any time. We need you there to show them that people care about this issue.
              </p>
            </Card>
          </div>

        </div>
      </section>

      {/* CALL MODAL */}
      {showCallModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Before You Call</h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex gap-3">
                <span className="text-lg font-bold text-primary shrink-0">1.</span>
                <p className="text-base leading-relaxed">
                  <a href="#facts" onClick={() => {
                    setShowCallModal(false)
                    setTimeout(() => {
                      document.getElementById('the-facts')?.scrollIntoView({ behavior: 'smooth' })
                    }, 100)
                  }} className="text-primary font-semibold hover:underline">
                    Read The Facts
                  </a>
                  {' '}before calling
                </p>
              </div>
              
              <div className="flex gap-3">
                <span className="text-lg font-bold text-primary shrink-0">2.</span>
                <p className="text-base leading-relaxed">
                  Be nice, they&apos;re your neighbors
                </p>
              </div>
              
              <div className="flex gap-3">
                <span className="text-lg font-bold text-primary shrink-0">3.</span>
                <p className="text-base leading-relaxed">
                  To speak at the meeting you must fill out a form in-person at the County Clerk&apos;s office
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Button 
                onClick={() => setShowCallModal(false)}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-foreground font-bold"
              >
                Cancel
              </Button>
              <Button 
                onClick={handleCallNow}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold"
              >
                Call Now
              </Button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
