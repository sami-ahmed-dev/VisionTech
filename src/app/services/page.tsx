import Navigation from '@/components/Navigation'
import { Camera, Video, Wrench, Plane, CheckCircle } from 'lucide-react'

export default function Services() {
  const services = [
    {
      id: 'photography',
      icon: Camera,
      title: 'Professional Photography',
      description: 'Expert photography services for all occasions',
      features: [
        'Event Photography (Weddings, Corporate Events)',
        'Portrait Sessions',
        'Commercial/Product Photography',
        'Real Estate Photography',
        'High-resolution image editing',
        'Professional lighting setup'
      ],
      price: 'Starting from ₹5,000'
    },
    {
      id: 'videography',
      icon: Video,
      title: 'Videography Services',
      description: 'Professional video production and editing',
      features: [
        'Wedding Videography',
        'Corporate Video Production',
        'Promotional Videos',
        'Event Coverage',
        '4K Video Recording',
        'Professional editing and color grading'
      ],
      price: 'Starting from ₹10,000'
    },
    {
      id: 'repair',
      icon: Wrench,
      title: 'Camera Repair & Maintenance',
      description: 'Expert repair services for all camera brands',
      features: [
        'Lens repair and cleaning',
        'Sensor cleaning',
        'Battery replacement',
        'Firmware updates',
        'Calibration and testing',
        'Warranty support'
      ],
      price: 'Starting from ₹1,000'
    },
    {
      id: 'drone',
      icon: Plane,
      title: 'Drone Photography & Videography',
      description: 'Aerial photography and videography services',
      features: [
        'Real Estate Aerial Shots',
        'Event Aerial Coverage',
        'Commercial Drone Services',
        '4K Aerial Video',
        '360° Panoramic Shots',
        'Licensed drone operators'
      ],
      price: 'Starting from ₹8,000'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive camera services with professional equipment and expert technicians
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <service.icon className="h-12 w-12 text-blue-600 mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">
                    {service.price}
                  </span>
                  <a
                    href="/contact"
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose VisionTech?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine technical expertise with artistic vision to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Professional Equipment
              </h3>
              <p className="text-gray-600">
                Latest DSLR cameras, professional lenses, and high-end video equipment
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Experienced Team
              </h3>
              <p className="text-gray-600">
                Certified photographers and videographers with years of industry experience
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Quality Guarantee
              </h3>
              <p className="text-gray-600">
                100% satisfaction guarantee with professional editing and quick turnaround
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}