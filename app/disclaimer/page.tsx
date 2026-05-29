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
            <h2 className="text-2xl font-bold mb-4 text-primary">Authorization and Endorsement</h2>
            <p className="text-base md:text-lg leading-relaxed">
              This website was created by a Monroe County landowner. It is not authorized or endorsed by any candidate, political organization, or elected official. The views and opinions expressed on this site represent the personal concerns of community members regarding industrial development in Monroe County.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">Independent Initiative</h2>
            <p className="text-base md:text-lg leading-relaxed">
              Protect Monroe is an independent community initiative founded by local residents who are concerned about the potential impacts of large-scale data center development on our rural community. We are not affiliated with any political party, candidate, or organization.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">Community Purpose</h2>
            <p className="text-base md:text-lg leading-relaxed">
              Our mission is to inform Monroe County residents about proposed industrial development projects and encourage civic participation in the decision-making process. We believe that community members should have accurate information and a voice in matters that affect their county.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">Accuracy of Information</h2>
            <p className="text-base md:text-lg leading-relaxed">
              While we strive to provide accurate and factual information, this website is maintained by volunteers. We encourage readers to verify information through official county sources and conduct their own research on topics of concern.
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
