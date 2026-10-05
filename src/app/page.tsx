import React from "react";
import {
  Phone,
  Car,
  IndianRupee,
  Calendar,
  MapPin,
  Clock,
  User,
  Settings,
  Fuel,
  ArrowRight
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/50 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary text-white p-2 rounded-lg">
              <Car size={24} />
            </div>
            <span className="text-2xl font-black tracking-tight text-navy">
              DRIVIO<span className="text-primary">.</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 font-medium text-gray-600">
            <a href="#" className="hover:text-primary transition-colors text-navy font-semibold">Home</a>
            <a href="#fleet" className="hover:text-primary transition-colors">Our Fleet</a>
            <a href="#tariffs" className="hover:text-primary transition-colors">Tariffs</a>
            <a href="#faqs" className="hover:text-primary transition-colors">FAQs</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-2 text-navy font-semibold">
              <Phone size={18} className="text-primary" />
              <span>85030082223</span>
            </div>
            <button className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-md shadow-primary/20 flex items-center gap-2">
              <User size={18} />
              <span className="hidden sm:inline">Sign In / Sign Up</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 bg-navy flex items-center justify-center min-h-[90vh]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=2070"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12 lg:mt-0">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight drop-shadow-lg">
            Premium Self Drive Cars <br className="hidden md:block" />
            <span className="text-primary">At Your Fingertips.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto font-light">
            Experience the freedom of the open road with our premium fleet. Rent by the hour, day, or week with zero hidden charges.
          </p>
        </div>

        {/* Booking Widget */}
        <div className="absolute -bottom-24 left-0 w-full px-4 sm:px-6 lg:px-8 z-20">
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl shadow-navy/10 p-4 md:p-6 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              
              {/* Location */}
              <div className="p-3 bg-gray-50 rounded-xl border border-gray-200 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 block">City / Pickup</label>
                <div className="flex items-center gap-2">
                  <MapPin size={20} className="text-primary" />
                  <select className="w-full bg-transparent font-semibold text-navy outline-none appearance-none cursor-pointer">
                    <option>Jaipur, Rajasthan</option>
                    <option>Delhi, NCR</option>
                    <option>Mumbai, Maharashtra</option>
                    <option>Bangalore, Karnataka</option>
                  </select>
                </div>
              </div>

              {/* Pickup Date & Time */}
              <div className="p-3 bg-gray-50 rounded-xl border border-gray-200 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 block">Pickup Date & Time</label>
                <div className="flex items-center gap-2">
                  <Calendar size={20} className="text-primary" />
                  <input type="datetime-local" className="w-full bg-transparent font-semibold text-navy outline-none cursor-pointer" />
                </div>
              </div>

              {/* Drop-off Date & Time */}
              <div className="p-3 bg-gray-50 rounded-xl border border-gray-200 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 block">Drop-off Date & Time</label>
                <div className="flex items-center gap-2">
                  <Clock size={20} className="text-primary" />
                  <input type="datetime-local" className="w-full bg-transparent font-semibold text-navy outline-none cursor-pointer" />
                </div>
              </div>

              {/* Action Button */}
              <button className="bg-primary hover:bg-primary-hover text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-2 h-full py-4 md:py-0 group">
                Search Cars
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>

            </div>
          </div>
        </div>
      </section>

      {/* spacer for the absolute positioned booking widget */}
      <div className="h-32 md:h-24 bg-gray-50"></div>

      {/* Key Features Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Why Choose Us</h2>
            <h3 className="text-3xl md:text-4xl font-black text-navy">The DRIVIO Advantage</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Car className="text-primary" size={32} />
              </div>
              <h4 className="text-xl font-bold text-navy mb-3">Self Drive Cars</h4>
              <p className="text-gray-600 leading-relaxed">
                Enjoy complete privacy and freedom on your journey. You are in the driver's seat, literally. No chauffeurs, no hassle.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <IndianRupee className="text-primary" size={32} />
              </div>
              <h4 className="text-xl font-bold text-navy mb-3">Affordable Rates</h4>
              <p className="text-gray-600 leading-relaxed">
                Transparent pricing with absolutely no hidden fees. What you see is what you pay. Quality service that fits your budget.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Calendar className="text-primary" size={32} />
              </div>
              <h4 className="text-xl font-bold text-navy mb-3">Flexible Booking</h4>
              <p className="text-gray-600 leading-relaxed">
                Need a car for a few hours, a whole day, or a week? Our flexible rental plans adapt to your unique schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Fleet Section */}
      <section id="fleet" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Our Fleet</h2>
              <h3 className="text-3xl md:text-4xl font-black text-navy">Explore Premium Vehicles</h3>
            </div>
            <a href="#" className="text-primary font-semibold hover:text-primary-hover flex items-center gap-2 mt-4 md:mt-0 transition-colors">
              View All Cars <ArrowRight size={18} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Car Card 1 */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all group flex flex-col">
              <div className="relative h-60 bg-gray-100 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1620891549027-942fdc95d3f5?auto=format&fit=crop&q=80&w=800" 
                  alt="Mahindra Thar"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-navy shadow-sm">
                  SUV
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="text-2xl font-bold text-navy mb-1">Mahindra Thar</h4>
                  <p className="text-sm text-gray-500 mb-4">4x4 Off-Road Legend</p>
                  
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    <div className="flex flex-col items-center justify-center bg-gray-50 p-2 rounded-lg text-gray-600">
                      <Settings size={18} className="mb-1" />
                      <span className="text-xs font-medium">Manual</span>
                    </div>
                    <div className="flex flex-col items-center justify-center bg-gray-50 p-2 rounded-lg text-gray-600">
                      <User size={18} className="mb-1" />
                      <span className="text-xs font-medium">4 Seats</span>
                    </div>
                    <div className="flex flex-col items-center justify-center bg-gray-50 p-2 rounded-lg text-gray-600">
                      <Fuel size={18} className="mb-1" />
                      <span className="text-xs font-medium">Diesel</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-sm text-gray-500 block">Starting at</span>
                    <div className="flex items-baseline">
                      <span className="text-2xl font-black text-navy">₹149</span>
                      <span className="text-gray-500 font-medium">/hr</span>
                    </div>
                  </div>
                  <button className="bg-navy hover:bg-navy-light text-white px-6 py-2.5 rounded-xl font-semibold transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Car Card 2 */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all group flex flex-col">
              <div className="relative h-60 bg-gray-100 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800" 
                  alt="Maruti Swift"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-navy shadow-sm">
                  Hatchback
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="text-2xl font-bold text-navy mb-1">Maruti Swift</h4>
                  <p className="text-sm text-gray-500 mb-4">Peppy & Efficient City Car</p>
                  
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    <div className="flex flex-col items-center justify-center bg-gray-50 p-2 rounded-lg text-gray-600">
                      <Settings size={18} className="mb-1" />
                      <span className="text-xs font-medium">Manual</span>
                    </div>
                    <div className="flex flex-col items-center justify-center bg-gray-50 p-2 rounded-lg text-gray-600">
                      <User size={18} className="mb-1" />
                      <span className="text-xs font-medium">5 Seats</span>
                    </div>
                    <div className="flex flex-col items-center justify-center bg-gray-50 p-2 rounded-lg text-gray-600">
                      <Fuel size={18} className="mb-1" />
                      <span className="text-xs font-medium">Petrol</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-sm text-gray-500 block">Starting at</span>
                    <div className="flex items-baseline">
                      <span className="text-2xl font-black text-navy">₹99</span>
                      <span className="text-gray-500 font-medium">/hr</span>
                    </div>
                  </div>
                  <button className="bg-navy hover:bg-navy-light text-white px-6 py-2.5 rounded-xl font-semibold transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Car Card 3 */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all group flex flex-col">
              <div className="relative h-60 bg-gray-100 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800" 
                  alt="Mahindra Scorpio"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-navy shadow-sm">
                  SUV
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="text-2xl font-bold text-navy mb-1">Mahindra Scorpio</h4>
                  <p className="text-sm text-gray-500 mb-4">Commanding Road Presence</p>
                  
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    <div className="flex flex-col items-center justify-center bg-gray-50 p-2 rounded-lg text-gray-600">
                      <Settings size={18} className="mb-1" />
                      <span className="text-xs font-medium">Automatic</span>
                    </div>
                    <div className="flex flex-col items-center justify-center bg-gray-50 p-2 rounded-lg text-gray-600">
                      <User size={18} className="mb-1" />
                      <span className="text-xs font-medium">7 Seats</span>
                    </div>
                    <div className="flex flex-col items-center justify-center bg-gray-50 p-2 rounded-lg text-gray-600">
                      <Fuel size={18} className="mb-1" />
                      <span className="text-xs font-medium">Diesel</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-sm text-gray-500 block">Starting at</span>
                    <div className="flex items-baseline">
                      <span className="text-2xl font-black text-navy">₹129</span>
                      <span className="text-gray-500 font-medium">/hr</span>
                    </div>
                  </div>
                  <button className="bg-navy hover:bg-navy-light text-white px-6 py-2.5 rounded-xl font-semibold transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-navy pt-20 pb-10 border-t-4 border-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Brand */}
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center gap-2 mb-6 text-white">
                <div className="bg-primary p-2 rounded-lg">
                  <Car size={24} />
                </div>
                <span className="text-2xl font-black tracking-tight">
                  DRIVIO<span className="text-primary">.</span>
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Premium self-drive car rentals offering you the ultimate freedom on the road with transparent pricing and exceptional service.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Home</a></li>
                <li><a href="#fleet" className="text-gray-400 hover:text-primary transition-colors">Our Fleet</a></li>
                <li><a href="#tariffs" className="text-gray-400 hover:text-primary transition-colors">Tariffs</a></li>
                <li><a href="#faqs" className="text-gray-400 hover:text-primary transition-colors">FAQs</a></li>
              </ul>
            </div>

            {/* Policies */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6">Policies</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Cancellation Policy</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-400">
                  <Phone size={20} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-medium text-white mb-1">Call Us 24/7</span>
                    <span>85030082223</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-gray-400 mt-4">
                  <MapPin size={20} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-medium text-white mb-1">Visit Website</span>
                    <span>drivio.in</span>
                  </div>
                </li>
              </ul>
            </div>
            
          </div>

          <div className="pt-8 border-t border-gray-800 text-center flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} DRIVIO. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-white transition-colors">Facebook</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">Instagram</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
