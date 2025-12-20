import { AlertCircle } from "lucide-react"

export function AnnouncementBanner() {
  return (
    <div className="bg-wcm-yellow text-wcm-black border-b-2 border-wcm-green">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-center gap-3 text-center">
          <AlertCircle className="h-5 w-5 shrink-0" />
          <p className="font-mono text-sm sm:text-base font-bold">
            IMPORTANT: SoCal has changed to Spread Factor 7. Click the setup information at the top to learn more.
          </p>
        </div>
      </div>
    </div>
  )
}
