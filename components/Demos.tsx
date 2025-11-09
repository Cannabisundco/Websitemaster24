'use client'

import { useState } from 'react'

export default function Demos() {
  const [activeDemo, setActiveDemo] = useState<'website' | 'shop' | null>(null)

  return (
    <section id="demos" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Testen Sie unsere Demos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Erleben Sie die Qualität unserer Webseiten und Shopsysteme live.
            Klicken Sie auf eine Demo, um sie zu öffnen.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Einfache Webseite Demo */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48 bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-5xl mb-4">🌐</div>
                <h3 className="text-2xl font-bold">Unternehmenswebseite</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Eine professionelle, moderne Webseite für Ihr Unternehmen mit allen wichtigen Funktionen.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-gray-600">
                <li>✓ Responsive Design</li>
                <li>✓ Kontaktformular</li>
                <li>✓ Service-Übersicht</li>
                <li>✓ Über uns Seite</li>
                <li>✓ SEO-optimiert</li>
              </ul>
              <button
                onClick={() => setActiveDemo(activeDemo === 'website' ? null : 'website')}
                className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
              >
                {activeDemo === 'website' ? 'Demo schließen' : 'Demo öffnen'}
              </button>
            </div>
          </div>

          {/* Shopsystem Demo */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48 bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-5xl mb-4">🛒</div>
                <h3 className="text-2xl font-bold">Shopsystem</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Ein vollständiges E-Commerce-System mit Produktverwaltung, Warenkorb und Checkout.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-gray-600">
                <li>✓ Produktkatalog</li>
                <li>✓ Warenkorb & Checkout</li>
                <li>✓ Kundenkonto</li>
                <li>✓ Bestellverwaltung</li>
                <li>✓ Zahlungsintegration</li>
              </ul>
              <button
                onClick={() => setActiveDemo(activeDemo === 'shop' ? null : 'shop')}
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                {activeDemo === 'shop' ? 'Demo schließen' : 'Demo öffnen'}
              </button>
            </div>
          </div>
        </div>

        {/* Demo Preview */}
        {activeDemo && (
          <div className="bg-white rounded-lg shadow-2xl p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                {activeDemo === 'website' ? 'Unternehmenswebseite Demo' : 'Shopsystem Demo'}
              </h3>
              <button
                onClick={() => setActiveDemo(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="border-2 border-gray-200 rounded-lg overflow-hidden bg-gray-50">
              {activeDemo === 'website' ? (
                <div className="p-8">
                  <div className="max-w-4xl mx-auto">
                    {/* Demo Header */}
                    <header className="bg-white shadow-sm mb-8 p-4 rounded">
                      <div className="flex justify-between items-center">
                        <div className="text-2xl font-bold text-primary-600">Musterfirma GmbH</div>
                        <nav className="hidden md:flex space-x-6">
                          <a href="#" className="text-gray-700 hover:text-primary-600">Startseite</a>
                          <a href="#" className="text-gray-700 hover:text-primary-600">Leistungen</a>
                          <a href="#" className="text-gray-700 hover:text-primary-600">Über uns</a>
                          <a href="#" className="text-gray-700 hover:text-primary-600">Kontakt</a>
                        </nav>
                      </div>
                    </header>

                    {/* Hero Section */}
                    <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white p-12 rounded-lg mb-8 text-center">
                      <h1 className="text-4xl font-bold mb-4">Willkommen bei Musterfirma</h1>
                      <p className="text-xl mb-6">Ihr Partner für professionelle Lösungen</p>
                      <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
                        Jetzt kontaktieren
                      </button>
                    </section>

                    {/* Services */}
                    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white p-6 rounded-lg shadow">
                          <div className="text-3xl mb-3">🎯</div>
                          <h3 className="text-xl font-semibold mb-2">Service {i}</h3>
                          <p className="text-gray-600">
                            Professionelle Dienstleistung für Ihre Bedürfnisse.
                          </p>
                        </div>
                      ))}
                    </section>

                    {/* Contact Form */}
                    <section className="bg-white p-8 rounded-lg shadow">
                      <h2 className="text-2xl font-bold mb-4">Kontaktieren Sie uns</h2>
                      <form className="space-y-4">
                        <div>
                          <input
                            type="text"
                            placeholder="Ihr Name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            disabled
                          />
                        </div>
                        <div>
                          <input
                            type="email"
                            placeholder="Ihre E-Mail"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            disabled
                          />
                        </div>
                        <div>
                          <textarea
                            placeholder="Ihre Nachricht"
                            rows={4}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            disabled
                          />
                        </div>
                        <button
                          type="submit"
                          className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700"
                          disabled
                        >
                          Nachricht senden
                        </button>
                      </form>
                    </section>
                  </div>
                </div>
              ) : (
                <div className="p-8">
                  <div className="max-w-6xl mx-auto">
                    {/* Shop Header */}
                    <header className="bg-white shadow-sm mb-8 p-4 rounded">
                      <div className="flex justify-between items-center">
                        <div className="text-2xl font-bold text-green-600">Demo Shop</div>
                        <div className="flex items-center space-x-4">
                          <button className="text-gray-700 hover:text-green-600">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                          </button>
                          <span className="text-sm text-gray-600">Warenkorb (0)</span>
                        </div>
                      </div>
                    </header>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="bg-white rounded-lg shadow overflow-hidden">
                          <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                            <span className="text-4xl">📦</span>
                          </div>
                          <div className="p-4">
                            <h3 className="font-semibold text-lg mb-2">Produkt {i}</h3>
                            <p className="text-gray-600 text-sm mb-3">
                              Beschreibung des Produkts {i}
                            </p>
                            <div className="flex justify-between items-center">
                              <span className="text-xl font-bold text-green-600">29,99€</span>
                              <button
                                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                                disabled
                              >
                                In den Warenkorb
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Checkout Preview */}
                    <div className="bg-white p-6 rounded-lg shadow">
                      <h3 className="text-xl font-bold mb-4">Checkout-Prozess</h3>
                      <div className="space-y-3 text-gray-600">
                        <div className="flex justify-between">
                          <span>Warenkorb</span>
                          <span>✓</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Versandinformationen</span>
                          <span>✓</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Zahlungsmethode</span>
                          <span>✓</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Bestellübersicht</span>
                          <span>✓</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-gray-600 mb-4">
                Dies ist eine Demo-Version. Ihre individuelle Webseite wird nach Ihren Wünschen gestaltet.
              </p>
              <a
                href="#rechner"
                className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
              >
                Jetzt Preis berechnen
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

