"use client";

import React, { useState } from "react";
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
  ArrowRight,
  X
} from "lucide-react";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState("");

  const handleBookNow = (carName: string) => {
    setSelectedCar(carName);
    setIsBookingOpen(true);
  };

  return (
    <main className="min-h-screen flex flex-col bg-gray-50 relative">

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 bg-navy flex items-center justify-center min-h-[90vh]">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-banner.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-60"
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
                  src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Mahindra/Thar/10745/1697697308167/front-left-side-47.jpg" 
                  alt="Mahindra Thar"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-navy shadow-sm border border-gray-100/50">
                  SUV
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between border-t border-gray-100">
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
                  <button onClick={() => handleBookNow("Mahindra Thar")} className="bg-navy hover:bg-navy-light text-white px-6 py-2.5 rounded-xl font-semibold transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Car Card 2 */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all group flex flex-col">
              <div className="relative h-60 bg-gray-100 overflow-hidden">
                <img 
                  src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Swift/9226/1755777061785/front-left-side-47.jpg" 
                  alt="Maruti Swift"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-navy shadow-sm border border-gray-100/50">
                  Hatchback
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between border-t border-gray-100">
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
                  <button onClick={() => handleBookNow("Maruti Swift")} className="bg-navy hover:bg-navy-light text-white px-6 py-2.5 rounded-xl font-semibold transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Car Card 3 */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all group flex flex-col">
              <div className="relative h-60 bg-gray-100 overflow-hidden">
                <img 
                  src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Mahindra/Scorpio-N/10817/1690351800434/front-left-side-47.jpg" 
                  alt="Mahindra Scorpio"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-navy shadow-sm border border-gray-100/50">
                  SUV
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between border-t border-gray-100">
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
                  <button onClick={() => handleBookNow("Mahindra Scorpio")} className="bg-navy hover:bg-navy-light text-white px-6 py-2.5 rounded-xl font-semibold transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Booking Modal */}
      {isBookingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-navy/60 backdrop-blur-sm" onClick={() => setIsBookingOpen(false)}></div>
          
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <h3 className="text-xl font-bold text-navy">
                Book <span className="text-primary">{selectedCar}</span>
              </h3>
              <button 
                onClick={() => setIsBookingOpen(false)}
                className="p-1 hover:bg-gray-200 rounded-full transition-colors text-gray-500 hover:text-navy"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6">
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Booking request sent successfully!'); setIsBookingOpen(false); }}>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                  <input type="text" required placeholder="John Doe" className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors bg-white text-navy" />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Mobile Number</label>
                  <input type="tel" required placeholder="+91 98765 43210" className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors bg-white text-navy" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                  <input type="email" required placeholder="john@example.com" className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors bg-white text-navy" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Driving License Number</label>
                  <input type="text" required placeholder="DL-1420110012345" className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors bg-white text-navy" />
                </div>

                <div className="pt-2">
                  <button type="submit" className="w-full bg-primary hover:bg-primary-hover text-white py-3 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 transition-all">
                    Confirm Booking Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
