export default function Features() {
  const features = [
    {
      title: 'Responsive Design',
      description: 'Ihre Webseite sieht auf allen Geräten perfekt aus – Desktop, Tablet und Smartphone.',
      icon: '📱',
    },
    {
      title: 'SEO-Optimiert',
      description: 'Optimiert für Suchmaschinen, damit Ihre Kunden Sie schnell finden.',
      icon: '🔍',
    },
    {
      title: 'Schnelle Ladezeiten',
      description: 'Moderne Technologien sorgen für optimale Performance.',
      icon: '⚡',
    },
    {
      title: 'Individuelles Design',
      description: 'Jede Webseite wird nach Ihren Wünschen und Ihrer Marke gestaltet.',
      icon: '🎨',
    },
    {
      title: 'Einfache Verwaltung',
      description: 'Intuitive Content-Management-Systeme für einfache Pflege.',
      icon: '🛠️',
    },
    {
      title: 'Support & Wartung',
      description: 'Wir stehen Ihnen auch nach dem Launch zur Verfügung.',
      icon: '💬',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Warum Websitemaster24?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Wir bieten professionelle Webseiten, die Ihre Kunden begeistern und Ihr Geschäft voranbringen.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

