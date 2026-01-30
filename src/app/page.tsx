import Navigation from '@/components/Navigation'
import Camera3D from '@/components/Camera3D'
import Link from 'next/link'
import { Camera, Video, Wrench, Plane, ArrowRight, Star } from 'lucide-react'

export default function Home() {
  const services = [
    {
      icon: Camera,
      title: 'Professional Photography',
      description: 'Capture life\'s precious moments with our expert photography services',
      href: '/services#photography',
    },
    {
      icon: Video,
      title: 'Videography Services',
      description: 'Professional video production for events, commercials, and more',
      href: '/services#videography',
    },
    {
      icon: Wrench,
      title: 'Camera Repair',
      description: 'Expert repair and maintenance for all camera brands and models',
      href: '/services#repair',
    },
    {
      icon: Plane,
      title: 'Drone Services',
      description: 'Aerial photography and videography with licensed drone operators',
      href: '/services#drone',
    },
  ]

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Wedding Photographer',
      content: 'VisionTech provided exceptional camera repair services. My equipment is working perfectly now!',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'Event Organizer',
      content: 'Their videography team captured our corporate event beautifully. Highly professional and creative.',
      rating: 5,
    },
    {
      name: 'Amit Patel',
      role: 'Real Estate Agent',
      content: 'The drone photography service helped showcase properties in ways traditional photos couldn\'t.',
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                VisionTech
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                Professional camera services in Hyderabad. From photography to videography,
                repair to drone services - we capture your vision perfectly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/services"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
                >
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-colors duration-200 flex items-center justify-center"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <Camera3D />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive camera solutions for all your visual needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <service.icon className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-200" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <div className="flex items-center text-blue-600 font-medium">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by professionals across Hyderabad
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Capture Your Vision?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for professional camera services that bring your ideas to life
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 inline-flex items-center"
          >
            Contact Us Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}