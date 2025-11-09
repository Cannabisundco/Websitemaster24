export default function PricingModels() {
  const pricingPlans = [
    {
      name: 'Starter',
      price: 'ab 499€',
      description: 'Perfekt für kleine Unternehmen und Einzelunternehmer',
      features: [
        'Bis zu 5 Seiten',
        'Responsive Design',
        'Kontaktformular',
        'SEO-Grundausstattung',
        'Social Media Integration',
        '1 Monat Support',
      ],
      popular: false,
    },
    {
      name: 'Business',
      price: 'ab 1.299€',
      description: 'Ideal für wachsende Unternehmen mit erweiterten Anforderungen',
      features: [
        'Bis zu 15 Seiten',
        'Responsive Design',
        'Kontaktformular & Newsletter',
        'Erweiterte SEO-Optimierung',
        'Social Media Integration',
        'Blog-Funktion',
        'Google Analytics',
        '3 Monate Support',
      ],
      popular: true,
    },
    {
      name: 'Premium',
      price: 'ab 2.499€',
      description: 'Umfassende Lösung für größere Unternehmen',
      features: [
        'Unbegrenzte Seiten',
        'Responsive Design',
        'Mehrere Kontaktformulare',
        'Premium SEO-Optimierung',
        'Social Media Integration',
        'Blog & News-Bereich',
        'Google Analytics & Tag Manager',
        'E-Commerce Integration',
        '6 Monate Support',
      ],
      popular: false,
    },
    {
      name: 'Shop System',
      price: 'ab 3.999€',
      description: 'Vollständiges E-Commerce-System für Online-Shops',
      features: [
        'Vollständiges Shopsystem',
        'Produktverwaltung',
        'Warenkorb & Checkout',
        'Zahlungssysteme Integration',
        'Versandoptionen',
        'Kundenkonto',
        'Bestellverwaltung',
        'Responsive Design',
        'SEO-Optimierung',
        '12 Monate Support',
      ],
      popular: false,
    },
  ]

  return (
    <section id="preise" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Unsere Preismodelle
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Wählen Sie das Paket, das am besten zu Ihren Bedürfnissen passt. 
            Alle Preise sind Startpreise und können individuell angepasst werden.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg p-8 relative ${
                plan.popular
                  ? 'border-4 border-primary-600 transform scale-105'
                  : 'border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Beliebt
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-primary-600 mb-2">{plan.price}</div>
                <p className="text-gray-600 text-sm">{plan.description}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button
                className={`w-full py-3 rounded-lg font-semibold transition ${
                  plan.popular
                    ? 'bg-primary-600 text-white hover:bg-primary-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                Jetzt anfragen
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Kein passendes Paket dabei? Nutzen Sie unseren Preisrechner für eine individuelle Berechnung.
          </p>
          <a
            href="#rechner"
            className="text-primary-600 font-semibold hover:text-primary-700 underline"
          >
            Zum Preisrechner →
          </a>
        </div>
      </div>
    </section>
  )
}

