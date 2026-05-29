'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-background border-b-2 border-muted sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="text-3xl font-bold text-primary">
              🌾
            </div>
            <span className="font-bold text-lg md:text-xl text-foreground">
              Protect Monroe TN
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            <a href="#facts" className="font-semibold text-foreground hover:text-primary">
              The Facts
            </a>
            <a href="#meetings" className="font-semibold text-foreground hover:text-primary">
              Meetings
            </a>
            <a href="#faq" className="font-semibold text-foreground hover:text-primary">
              FAQ
            </a>
          </div>

          {/* CTA Button */}
          <a href="#details" className="hidden md:block">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
              Take Action
            </Button>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-6 space-y-3">
            <a href="#facts" className="block font-semibold text-foreground hover:text-primary py-2">
              The Facts
            </a>
            <a href="#meetings" className="block font-semibold text-foreground hover:text-primary py-2">
              Meetings
            </a>
            <a href="#faq" className="block font-semibold text-foreground hover:text-primary py-2">
              FAQ
            </a>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
              Take Action
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
