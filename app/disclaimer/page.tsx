import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Disclaimer | Protect Monroe',
  description: 'Disclaimer information for Protect Monroe',
}

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header Spacing */}
      <div className="h-24" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-primary">
          Disclaimer
        </h1>

        <div className="bg-card text-card-foreground rounded-lg p-8 md:p-12 space-y-6">
          <section>
            <p className="text-base md:text-lg leading-relaxed">
              This website was created by a landowner in Monroe County. Contact me at 423-300-6330.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">First Amendment Protected Content</h2>
            <p className="text-base md:text-lg leading-relaxed">
              The content on this website represents opinion, commentary, and political advocacy protected under the First Amendment. Statements are based on publicly available information, personal analysis, and/or local government sources unless otherwise noted.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">Accuracy and Error Correction</h2>
            <p className="text-base md:text-lg leading-relaxed">
              I strive for accuracy. If you believe information on this site is incorrect, please contact me with supporting documentation so I can review and correct any verified errors.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">Independence and Non-Affiliation</h2>
            <p className="text-base md:text-lg leading-relaxed">
              This website is independently operated and is not affiliated with, endorsed by, or officially connected to any government agency, candidate, campaign, or political party unless explicitly stated.
            </p>
          </section>
        </div>

        <div className="flex justify-center mt-8">
          <Link href="/">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
