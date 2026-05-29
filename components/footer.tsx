import { Button } from '@/components/ui/button'

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">Protect Monroe</h3>
            <p className="text-sm md:text-base leading-relaxed">
              Local residents organizing to protect our rural community from industrial development that doesn&apos;t belong here.
            </p>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-bold mb-4">Take Action</h4>
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                <a href="https://www.facebook.com/groups/communitydata/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Facebook Group
                </a>
              </li>
              <li>
                <a href="#details" className="hover:underline">
                  Get Involved
                </a>
              </li>
              <li>
                <a href="#meetings" className="hover:underline">
                  Attend Meeting
                </a>
              </li>
              <li>
                <a href="https://www.change.org/p/petition-no-industrial-scale-data-centers-in-monroe-county-tn" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Sign Petition
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact Page Admin</h4>
            <p className="text-sm md:text-base">
              <strong>Phone:</strong>
              <br />
              423-300-6330
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/30 pt-8">
          <p className="text-center text-sm md:text-base opacity-75">
            &copy; 2026 Protect Monroe. All rights reserved.
          </p>
          <p className="text-center text-xs md:text-sm opacity-60 mt-2">
            Created by a Monroe County landowner. Not authorized or endorsed by any candidate.
          </p>
        </div>
      </div>
    </footer>
  )
}
