'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function Home() {
  const [showCallModal, setShowCallModal] = useState(false)

  const handleCallNow = () => {
    window.location.href = 'tel:+14234425948'
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* ============================================ */}
      {/* HERO - ABOVE THE FOLD */}
      {/* ============================================ */}
      <section className="bg-stone-900 text-white py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4">
          
          {/* URGENT BADGE */}
          <div className="text-center mb-6">
            <span className="inline-block bg-red-600 text-white text-lg font-bold px-6 py-2 rounded-full animate-pulse">
              URGENT
            </span>
          </div>

          {/* MAIN MESSAGE */}
          <h1 className="text-4xl md:text-6xl font-black text-center mb-6 leading-tight">
            STOP DATA CENTERS<br/>
            <span className="text-amber-400">IN MONROE COUNTY</span>
          </h1>

          <p className="text-xl md:text-2xl text-center text-stone-200 mb-8">
            Big tech wants to build on our farmland.<br/>
            <span className="text-white font-bold">We can stop them.</span>
          </p>

          {/* VIDEO */}
          <div className="max-w-3xl mx-auto mb-6">
            <div className="relative w-full pb-[56.25%] bg-black rounded-lg overflow-hidden border-4 border-stone-600">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/c7b9UHOhU0k?autoplay=1&mute=1"
                title="Data Center Impact Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

        </div>
      </section>

      {/* ============================================ */}
      {/* NEXT MEETING - RED BANNER */}
      {/* ============================================ */}
      <section className="bg-red-700 text-white py-6">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <p className="text-lg font-bold mb-2">NEXT MEETING:</p>
            <p className="text-2xl md:text-3xl font-black mb-2">
              Tuesday, June 23rd - 5:00 PM
            </p>
            <p className="text-lg">
              Monroe County Courthouse, Madisonville
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* WHAT YOU CAN DO - 3 SIMPLE STEPS */}
      {/* ============================================ */}
      <section className="bg-amber-50 py-10 md:py-14">
        <div className="max-w-3xl mx-auto px-4">
          
          <h2 className="text-3xl md:text-4xl font-black text-center text-stone-900 mb-8">
            WHAT YOU CAN DO
          </h2>

          {/* STEP 1 */}
          <div className="bg-white rounded-lg p-6 mb-4 border-l-8 border-red-600 shadow-md">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center text-white text-2xl font-black flex-shrink-0">
                1
              </div>
              <h3 className="text-2xl font-black text-stone-900">CALL THE CLERK</h3>
            </div>
            <ul className="text-lg text-stone-700 space-y-2 ml-4">
              <li>• Phone: <span className="font-bold">(423) 442-5948</span></li>
              <li>• Say: &quot;I want to speak at the meeting about data centers&quot;</li>
            </ul>
            <button 
              onClick={() => setShowCallModal(true)}
              className="mt-4 w-full bg-red-600 text-white text-xl font-bold py-4 rounded-lg hover:bg-red-700"
            >
              TAP TO CALL NOW
            </button>
          </div>

          {/* STEP 2 */}
          <div className="bg-white rounded-lg p-6 mb-4 border-l-8 border-amber-500 shadow-md">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-14 h-14 bg-amber-500 rounded-full flex items-center justify-center text-white text-2xl font-black flex-shrink-0">
                2
              </div>
              <h3 className="text-2xl font-black text-stone-900">GO TO THE MEETING</h3>
            </div>
            <ul className="text-lg text-stone-700 space-y-2 ml-4">
              <li>• Date: <span className="font-bold">June 23rd at 5:00 PM</span></li>
              <li>• Place: <span className="font-bold">County Courthouse, Madisonville</span></li>
              <li>• Bring your neighbors</li>
            </ul>
          </div>

          {/* STEP 3 */}
          <div className="bg-white rounded-lg p-6 mb-4 border-l-8 border-stone-800 shadow-md">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-14 h-14 bg-stone-800 rounded-full flex items-center justify-center text-white text-2xl font-black flex-shrink-0">
                3
              </div>
              <h3 className="text-2xl font-black text-stone-900">SIGN THE PETITION</h3>
            </div>
            <ul className="text-lg text-stone-700 space-y-2 ml-4">
              <li>• Show the county we care</li>
              <li>• Takes 1 minute</li>
            </ul>
            <Link 
              href="https://www.change.org/p/petition-no-industrial-scale-data-centers-in-monroe-county-tn" 
              target="_blank"
              className="mt-4 block w-full bg-stone-800 text-white text-xl font-bold py-4 rounded-lg hover:bg-stone-900 text-center"
            >
              SIGN THE PETITION
            </Link>
          </div>

          {/* FACEBOOK GROUP */}
          <div className="bg-blue-600 rounded-lg p-6 shadow-md">
            <h3 className="text-2xl font-black text-white mb-3 text-center">JOIN OUR FACEBOOK GROUP</h3>
            <p className="text-lg text-blue-100 text-center mb-4">
              Get updates and talk to your neighbors
            </p>
            <Link 
              href="https://www.facebook.com/groups/communitydata/" 
              target="_blank"
              className="block w-full bg-white text-blue-600 text-xl font-bold py-4 rounded-lg hover:bg-blue-50 text-center"
            >
              JOIN NOW
            </Link>
          </div>

        </div>
      </section>

      {/* ============================================ */}
      {/* WHAT IS HAPPENING */}
      {/* ============================================ */}
      <section className="bg-white py-10 md:py-14">
        <div className="max-w-3xl mx-auto px-4">
          
          <h2 className="text-3xl md:text-4xl font-black text-center text-stone-900 mb-8">
            WHAT IS HAPPENING
          </h2>

          {/* THE PROBLEM */}
          <div className="bg-stone-100 rounded-lg p-6 mb-6 border-2 border-stone-300">
            <h3 className="text-2xl font-black text-red-700 mb-4">THE PROBLEM:</h3>
            <ul className="text-xl text-stone-800 space-y-4">
              <li>• <span className="font-bold">Big tech companies</span> want to build a data center near Sweetwater</li>
              <li>• They want to take <span className="font-bold">100+ acres of farmland</span></li>
              <li>• This will happen <span className="font-bold">unless we stop them</span></li>
            </ul>
          </div>

          {/* MAP IMAGE */}
          <div className="bg-stone-200 rounded-lg p-2 mb-6">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture.PNG-ndCxYpsPQG0u8QOB3fNLNe9Vov4ksO.png"
              alt="Map showing the location near Sweetwater"
              className="w-full rounded"
            />
            <p className="text-center text-stone-600 mt-2 font-bold">
              RED CIRCLE = Where they want to build
            </p>
          </div>

          {/* WHY IT IS BAD */}
          <div className="bg-red-50 rounded-lg p-6 border-2 border-red-200">
            <h3 className="text-2xl font-black text-red-700 mb-4">WHY IT IS BAD:</h3>
            <ul className="text-xl text-stone-800 space-y-4">
              <li>• <span className="font-bold">Higher electric bills</span> for everyone</li>
              <li>• <span className="font-bold">Loud noise</span> from fans running 24/7</li>
              <li>• <span className="font-bold">Uses lots of water</span> - bad for farms and wells</li>
              <li>• <span className="font-bold">Very few jobs</span> - less than 10 people</li>
              <li>• <span className="font-bold">Home values drop</span> - your house is worth less</li>
              <li>• <span className="font-bold">Farmland gone forever</span></li>
            </ul>
          </div>

        </div>
      </section>

      {/* ============================================ */}
      {/* HOW WE CAN WIN */}
      {/* ============================================ */}
      <section className="bg-stone-800 text-white py-10 md:py-14">
        <div className="max-w-3xl mx-auto px-4">
          
          <h2 className="text-3xl md:text-4xl font-black text-center mb-8">
            HOW WE CAN WIN
          </h2>

          {/* WHY ZONING FIRST */}
          <div className="bg-amber-600 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-black text-white mb-4">WHY ZONING COMES FIRST:</h3>
            <ul className="text-xl space-y-4">
              <li>• The County Commission <span className="font-bold">cannot legally stop</span> data centers right now</li>
              <li>• Without zoning rules, they have <span className="font-bold">no legal power</span> to say no</li>
              <li>• Once zoning starts, <span className="font-bold underline">even if not finished</span>, they CAN vote for a pause</li>
              <li>• <span className="font-bold">Zoning = Legal standing = Power to protect us</span></li>
            </ul>
          </div>

          {/* THE SOLUTION */}
          <div className="bg-stone-700 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-black text-amber-400 mb-4">THE THREE STEPS:</h3>
            <ul className="text-xl space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-amber-400 font-bold text-2xl">1.</span>
                <span><span className="font-bold">Say NO publicly</span> to data centers on farmland</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-400 font-bold text-2xl">2.</span>
                <span><span className="font-bold">START a zoning plan</span> - this gives them legal power</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-400 font-bold text-2xl">3.</span>
                <span><span className="font-bold">Vote for a 1-year pause</span> while zoning is finished</span>
              </li>
            </ul>
          </div>

          {/* WHY WE NEED TO ACT NOW */}
          <div className="bg-red-700 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-black text-white mb-4">WHY WE MUST ACT NOW:</h3>
            <ul className="text-xl space-y-4">
              <li>• Once they file paperwork, it is <span className="font-bold">too late</span></li>
              <li>• They can <span className="font-bold">take land by force</span> (eminent domain)</li>
              <li>• They can <span className="font-bold">sue the county</span> to approve it</li>
            </ul>
            <p className="text-lg mt-4">
              <Link 
                href="https://thebaynet.com/how-ndas-fueled-calvert-countys-explosive-data-center-controversy/"
                target="_blank"
                className="text-amber-300 hover:text-amber-100 underline font-bold"
              >
                Read how data centers use secret NDAs to file paperwork before anyone knows
              </Link>
            </p>
          </div>

          {/* SEE WHAT HAPPENED */}
          <div className="bg-stone-900 rounded-lg p-6 border-2 border-stone-600">
            <h3 className="text-2xl font-black text-white mb-4">THIS HAS HAPPENED BEFORE:</h3>
            <div className="space-y-3">
              <Link 
                href="https://www.yahoo.com/news/articles/family-fighting-home-georgia-power-002000121.html"
                target="_blank"
                className="block bg-stone-800 hover:bg-stone-700 p-4 rounded-lg text-xl font-bold text-amber-400 hover:text-amber-300 transition-colors"
              >
                See what happened in Georgia &rarr;
              </Link>
              <Link 
                href="https://thesuntimesnews.com/an-inside-glimpse-at-a-no-win-decision-for-saline-township-leaders/"
                target="_blank"
                className="block bg-stone-800 hover:bg-stone-700 p-4 rounded-lg text-xl font-bold text-amber-400 hover:text-amber-300 transition-colors"
              >
                See what happened in Michigan &rarr;
              </Link>
              <Link 
                href="https://www.texastribune.org/2026/05/12/texas-hill-county-approves-data-center-construction-pause-ai/"
                target="_blank"
                className="block bg-stone-800 hover:bg-stone-700 p-4 rounded-lg text-xl font-bold text-amber-400 hover:text-amber-300 transition-colors"
              >
                See what happened in Texas &rarr;
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================ */}
      {/* COMMON QUESTIONS */}
      {/* ============================================ */}
      <section className="bg-amber-50 py-10 md:py-14">
        <div className="max-w-3xl mx-auto px-4">
          
          <h2 className="text-3xl md:text-4xl font-black text-center text-stone-900 mb-8">
            QUESTIONS
          </h2>

          {/* Q&A */}
          <div className="space-y-4">
            
            <div className="bg-white rounded-lg p-6 border-2 border-stone-200">
              <h3 className="text-xl font-black text-stone-900 mb-2">What is a data center?</h3>
              <p className="text-lg text-stone-700">
                A big building full of computers. It uses lots of electricity and water.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-2 border-stone-200">
              <h3 className="text-xl font-black text-stone-900 mb-2">Will it bring jobs?</h3>
              <p className="text-lg text-stone-700">
                <span className="font-bold">No.</span> A 100-acre center makes less than 10 jobs.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-2 border-stone-200">
              <h3 className="text-xl font-black text-stone-900 mb-2">Can we stop it?</h3>
              <p className="text-lg text-stone-700">
                <span className="font-bold">YES!</span> If enough people speak up, the county will listen.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-2 border-stone-200">
              <h3 className="text-xl font-black text-stone-900 mb-2">Are we against all development?</h3>
              <p className="text-lg text-stone-700">
                <span className="font-bold">No.</span> We support businesses that create real jobs. Data centers do not.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================ */}
      {/* FINAL CALL TO ACTION */}
      {/* ============================================ */}
      <section className="bg-red-700 text-white py-10 md:py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            TAKE ACTION TODAY
          </h2>

          <p className="text-xl mb-8">
            The meeting is <span className="font-bold">June 23rd</span>.<br/>
            Call the clerk. Go to the meeting. Bring a neighbor.
          </p>

          <div className="flex flex-col gap-4 max-w-md mx-auto">
            <button 
              onClick={() => setShowCallModal(true)}
              className="w-full bg-white text-red-700 text-xl font-bold py-4 rounded-lg hover:bg-red-50"
            >
              CALL NOW: (423) 442-5948
            </button>
            <Link 
              href="https://www.change.org/p/petition-no-industrial-scale-data-centers-in-monroe-county-tn" 
              target="_blank"
              className="w-full bg-stone-900 text-white text-xl font-bold py-4 rounded-lg hover:bg-stone-800 text-center"
            >
              SIGN THE PETITION
            </Link>
            <Link 
              href="https://www.facebook.com/groups/communitydata/" 
              target="_blank"
              className="w-full bg-blue-600 text-white text-xl font-bold py-4 rounded-lg hover:bg-blue-700 text-center"
            >
              JOIN FACEBOOK GROUP
            </Link>
          </div>

        </div>
      </section>

      {/* ============================================ */}
      {/* CALL MODAL */}
      {/* ============================================ */}
      {showCallModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h2 className="text-2xl font-black text-stone-900 mb-6">BEFORE YOU CALL:</h2>
            
            <ul className="text-lg text-stone-700 space-y-4 mb-6">
              <li>• <span className="font-bold">Be nice</span> - they are your neighbors</li>
              <li>• Tell them: <span className="font-bold">No data centers on farmland in Monroe County.</span></li>
              <li>• <span className="font-bold">Fill out the form at the clerk's office</span> for 5 minutes speaking time at the meeting.</li>
            </ul>

            <div className="flex gap-3">
              <Button 
                onClick={() => setShowCallModal(false)}
                className="flex-1 bg-stone-200 hover:bg-stone-300 text-stone-900 font-bold text-lg py-6"
              >
                Cancel
              </Button>
              <Button 
                onClick={handleCallNow}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold text-lg py-6"
              >
                CALL NOW
              </Button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
