'use client'

import { useState, useEffect } from 'react'

interface CalculatorState {
  type: 'website' | 'shop' | ''
  pages: number
  design: 'standard' | 'premium' | 'custom'
  features: string[]
  seo: boolean
  blog: boolean
  newsletter: boolean
  analytics: boolean
  ecommerce: boolean
  support: number
  customFeatures: string
}

const initialState: CalculatorState = {
  type: '',
  pages: 5,
  design: 'standard',
  features: [],
  seo: false,
  blog: false,
  newsletter: false,
  analytics: false,
  ecommerce: false,
  support: 1,
  customFeatures: '',
}

export default function PriceCalculator() {
  const [state, setState] = useState<CalculatorState>(initialState)
  const [price, setPrice] = useState(0)

  const featureOptions = [
    { id: 'contact', label: 'Kontaktformular', price: 50 },
    { id: 'gallery', label: 'Galerie', price: 100 },
    { id: 'map', label: 'Kartenintegration', price: 75 },
    { id: 'social', label: 'Social Media Integration', price: 50 },
    { id: 'multilang', label: 'Mehrsprachigkeit', price: 200 },
    { id: 'booking', label: 'Buchungssystem', price: 300 },
  ]

  useEffect(() => {
    calculatePrice()
  }, [state])

  const calculatePrice = () => {
    let total = 0

    // Basispreis nach Typ
    if (state.type === 'website') {
      total = 499
    } else if (state.type === 'shop') {
      total = 1999
    } else {
      setPrice(0)
      return
    }

    // Seitenanzahl
    if (state.type === 'website') {
      const basePages = 5
      if (state.pages > basePages) {
        total += (state.pages - basePages) * 50
      }
    } else {
      const basePages = 10
      if (state.pages > basePages) {
        total += (state.pages - basePages) * 75
      }
    }

    // Design
    if (state.design === 'premium') {
      total += 300
    } else if (state.design === 'custom') {
      total += 800
    }

    // Features
    state.features.forEach((featureId) => {
      const feature = featureOptions.find((f) => f.id === featureId)
      if (feature) {
        total += feature.price
      }
    })

    // Zusätzliche Optionen
    if (state.seo) total += 200
    if (state.blog) total += 250
    if (state.newsletter) total += 150
    if (state.analytics) total += 100
    if (state.ecommerce && state.type === 'website') total += 1500

    // Support
    if (state.support > 1) {
      total += (state.support - 1) * 50
    }

    setPrice(total)
  }

  const handleFeatureToggle = (featureId: string) => {
    setState((prev) => ({
      ...prev,
      features: prev.features.includes(featureId)
        ? prev.features.filter((id) => id !== featureId)
        : [...prev.features, featureId],
    }))
  }

  return (
    <section id="rechner" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Individueller Preisrechner
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Konfigurieren Sie Ihre Wunsch-Webseite und erhalten Sie sofort eine Preisübersicht.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Konfiguration */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 rounded-lg p-8 space-y-8">
              {/* Typ Auswahl */}
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  Welchen Typ benötigen Sie?
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setState({ ...state, type: 'website' })}
                    className={`p-6 rounded-lg border-2 transition ${
                      state.type === 'website'
                        ? 'border-primary-600 bg-primary-50'
                        : 'border-gray-200 bg-white hover:border-primary-300'
                    }`}
                  >
                    <div className="text-3xl mb-2">🌐</div>
                    <div className="font-semibold">Unternehmenswebseite</div>
                    <div className="text-sm text-gray-600 mt-1">ab 499€</div>
                  </button>
                  <button
                    onClick={() => setState({ ...state, type: 'shop' })}
                    className={`p-6 rounded-lg border-2 transition ${
                      state.type === 'shop'
                        ? 'border-primary-600 bg-primary-50'
                        : 'border-gray-200 bg-white hover:border-primary-300'
                    }`}
                  >
                    <div className="text-3xl mb-2">🛒</div>
                    <div className="font-semibold">Shopsystem</div>
                    <div className="text-sm text-gray-600 mt-1">ab 1.999€</div>
                  </button>
                </div>
              </div>

              {state.type && (
                <>
                  {/* Seitenanzahl */}
                  <div>
                    <label className="block text-lg font-semibold text-gray-900 mb-4">
                      Anzahl der Seiten: {state.pages}
                    </label>
                    <input
                      type="range"
                      min="1"
                      max={state.type === 'website' ? '30' : '50'}
                      value={state.pages}
                      onChange={(e) =>
                        setState({ ...state, pages: parseInt(e.target.value) })
                      }
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-600 mt-2">
                      <span>1</span>
                      <span>{state.type === 'website' ? '30' : '50'}+</span>
                    </div>
                  </div>

                  {/* Design */}
                  <div>
                    <label className="block text-lg font-semibold text-gray-900 mb-4">
                      Design-Variante
                    </label>
                    <div className="space-y-3">
                      {[
                        { value: 'standard', label: 'Standard Design', price: '+0€' },
                        { value: 'premium', label: 'Premium Design', price: '+300€' },
                        { value: 'custom', label: 'Individuelles Design', price: '+800€' },
                      ].map((option) => (
                        <label
                          key={option.value}
                          className="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-100 transition"
                        >
                          <input
                            type="radio"
                            name="design"
                            value={option.value}
                            checked={state.design === option.value}
                            onChange={(e) =>
                              setState({
                                ...state,
                                design: e.target.value as 'standard' | 'premium' | 'custom',
                              })
                            }
                            className="mr-3"
                          />
                          <div className="flex-1">
                            <div className="font-semibold">{option.label}</div>
                          </div>
                          <div className="text-primary-600 font-semibold">{option.price}</div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <label className="block text-lg font-semibold text-gray-900 mb-4">
                      Zusätzliche Features
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {featureOptions.map((feature) => (
                        <label
                          key={feature.id}
                          className="flex items-center p-3 border-2 rounded-lg cursor-pointer hover:bg-gray-100 transition"
                        >
                          <input
                            type="checkbox"
                            checked={state.features.includes(feature.id)}
                            onChange={() => handleFeatureToggle(feature.id)}
                            className="mr-3"
                          />
                          <div className="flex-1 text-sm">{feature.label}</div>
                          <div className="text-primary-600 text-sm font-semibold">
                            +{feature.price}€
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Zusätzliche Optionen */}
                  <div>
                    <label className="block text-lg font-semibold text-gray-900 mb-4">
                      Weitere Optionen
                    </label>
                    <div className="space-y-3">
                      {[
                        { key: 'seo', label: 'Erweiterte SEO-Optimierung', price: 200 },
                        { key: 'blog', label: 'Blog-Funktion', price: 250 },
                        { key: 'newsletter', label: 'Newsletter-Integration', price: 150 },
                        { key: 'analytics', label: 'Google Analytics Setup', price: 100 },
                        {
                          key: 'ecommerce',
                          label: 'E-Commerce Integration',
                          price: 1500,
                          show: state.type === 'website',
                        },
                      ].map(
                        (option) =>
                          (option.show !== false || !('show' in option)) && (
                            <label
                              key={option.key}
                              className="flex items-center justify-between p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-100 transition"
                            >
                              <div className="flex items-center">
                                <input
                                  type="checkbox"
                                  checked={
                                    option.key === 'seo' ? state.seo :
                                    option.key === 'blog' ? state.blog :
                                    option.key === 'newsletter' ? state.newsletter :
                                    option.key === 'analytics' ? state.analytics :
                                    option.key === 'ecommerce' ? state.ecommerce : false
                                  }
                                  onChange={(e) => {
                                    const updates: Partial<CalculatorState> = {}
                                    if (option.key === 'seo') updates.seo = e.target.checked
                                    else if (option.key === 'blog') updates.blog = e.target.checked
                                    else if (option.key === 'newsletter') updates.newsletter = e.target.checked
                                    else if (option.key === 'analytics') updates.analytics = e.target.checked
                                    else if (option.key === 'ecommerce') updates.ecommerce = e.target.checked
                                    setState({ ...state, ...updates })
                                  }}
                                  className="mr-3"
                                />
                                <span>{option.label}</span>
                              </div>
                              <span className="text-primary-600 font-semibold">
                                +{option.price}€
                              </span>
                            </label>
                          )
                      )}
                    </div>
                  </div>

                  {/* Support */}
                  <div>
                    <label className="block text-lg font-semibold text-gray-900 mb-4">
                      Support-Dauer: {state.support} Monat(e)
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="12"
                      value={state.support}
                      onChange={(e) =>
                        setState({ ...state, support: parseInt(e.target.value) })
                      }
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-600 mt-2">
                      <span>1 Monat</span>
                      <span>12 Monate (+{state.support > 1 ? (state.support - 1) * 50 : 0}€)</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Preisübersicht */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white rounded-lg p-8 sticky top-24">
              <h3 className="text-2xl font-bold mb-6">Ihr Preis</h3>
              
              {state.type ? (
                <>
                  <div className="mb-6">
                    <div className="text-5xl font-bold mb-2">
                      {price.toLocaleString('de-DE')}€
                    </div>
                    <div className="text-primary-200 text-sm">
                      Einmalig (inkl. MwSt.)
                    </div>
                  </div>

                  <div className="space-y-3 mb-6 text-sm">
                    <div className="flex justify-between">
                      <span className="text-primary-200">Basispreis</span>
                      <span>
                        {state.type === 'website' ? '499€' : '1.999€'}
                      </span>
                    </div>
                    {state.pages > (state.type === 'website' ? 5 : 10) && (
                      <div className="flex justify-between">
                        <span className="text-primary-200">Zusätzliche Seiten</span>
                        <span>
                          +
                          {(
                            (state.pages - (state.type === 'website' ? 5 : 10)) *
                            (state.type === 'website' ? 50 : 75)
                          ).toLocaleString('de-DE')}
                          €
                        </span>
                      </div>
                    )}
                    {state.design !== 'standard' && (
                      <div className="flex justify-between">
                        <span className="text-primary-200">Design</span>
                        <span>
                          +{state.design === 'premium' ? '300€' : '800€'}
                        </span>
                      </div>
                    )}
                    {state.features.length > 0 && (
                      <div className="flex justify-between">
                        <span className="text-primary-200">Features</span>
                        <span>
                          +
                          {state.features
                            .reduce((sum, id) => {
                              const feature = featureOptions.find((f) => f.id === id)
                              return sum + (feature?.price || 0)
                            }, 0)
                            .toLocaleString('de-DE')}
                          €
                        </span>
                      </div>
                    )}
                    {(state.seo || state.blog || state.newsletter || state.analytics || state.ecommerce) && (
                      <div className="flex justify-between">
                        <span className="text-primary-200">Optionen</span>
                        <span>
                          +
                          {[
                            state.seo ? 200 : 0,
                            state.blog ? 250 : 0,
                            state.newsletter ? 150 : 0,
                            state.analytics ? 100 : 0,
                            state.ecommerce ? 1500 : 0,
                          ]
                            .reduce((a, b) => a + b, 0)
                            .toLocaleString('de-DE')}
                          €
                        </span>
                      </div>
                    )}
                    {state.support > 1 && (
                      <div className="flex justify-between">
                        <span className="text-primary-200">Zusätzlicher Support</span>
                        <span>
                          +{((state.support - 1) * 50).toLocaleString('de-DE')}€
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-primary-500 pt-4 mb-6">
                    <div className="text-sm text-primary-200 mb-2">
                      * Alle Preise sind Richtwerte. Der finale Preis kann je nach individuellen
                      Anforderungen variieren.
                    </div>
                  </div>

                  <button className="w-full bg-white text-primary-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition mb-4">
                    Jetzt anfragen
                  </button>
                  <button className="w-full bg-primary-500 text-white py-3 rounded-lg font-semibold hover:bg-primary-400 transition">
                    PDF erstellen
                  </button>
                </>
              ) : (
                <div className="text-center text-primary-200">
                  <p>Wählen Sie zuerst einen Typ aus, um den Preis zu berechnen.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

