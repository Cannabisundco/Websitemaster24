import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Websitemaster24</h3>
            <p className="text-gray-400">
              Professionelle Webseiten und Shopsysteme für Ihr Unternehmen.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#preise" className="hover:text-white transition">Preismodelle</Link></li>
              <li><Link href="#demos" className="hover:text-white transition">Demos</Link></li>
              <li><Link href="#rechner" className="hover:text-white transition">Preisrechner</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Unternehmen</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#kontakt" className="hover:text-white transition">Kontakt</Link></li>
              <li><Link href="#" className="hover:text-white transition">Über uns</Link></li>
              <li><Link href="#" className="hover:text-white transition">Impressum</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@websitemaster24.de</li>
              <li>Tel: +49 (0) 123 456 789</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Websitemaster24. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}

