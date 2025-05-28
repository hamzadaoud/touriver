'use client';

import { useState, useEffect } from 'react';
import { Check, X } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { Star, MapPin, Users, ChevronLeft, ChevronRight, Heart, Share2, Calendar, Home } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import Link from 'next/link';
import { Navigation } from '@/app/components/Navigation';
import { Footer } from '@/app/components/Footer';
import { type Locale, getTranslation } from '@/lib/i18n';

interface Accommodation {
  id: number;
  name: string;
  location: string;
  rating: number;
  reviews: number;
  price: number;
  guests: number;
  features: string[];
  images: string[];
  description: string;
  amenities: string[];
  host: {
    name: string;
    avatar: string;
    joined: string;
  };
}

const accommodationsData: Accommodation[] = [
  {
    id: 1,
    name: 'Atlas Mountain Eco-Lodge',
    location: 'High Atlas Mountains, Morocco',
    rating: 4.9,
    reviews: 127,
    price: 85,
    guests: 4,
    features: ['Mountain View', 'Organic Garden', 'Solar Power'],
    amenities: ['Kitchen', 'Wifi', 'Free parking', 'Garden', 'Solar panels', 'Compost toilet'],
    images: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1501436513145-30f24e19fcc4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502780402662-acc01917949e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    ],
    description: "Experience the serenity of the High Atlas Mountains at our eco-friendly lodge, blending sustainable living with breathtaking views. Enjoy organic meals, fresh mountain air, and hiking trails that connect you with nature.",
    host: {
      name: "Mohammed",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      joined: "2021"
    }
  },
];

// Generate mock availability data
const generateAvailability = () => {
  const availability = {};
  const today = new Date();
  for (let i = 0; i < 90; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    const dateStr = date.toISOString().split('T')[0];
    // Random availability with 70% chance of being available
    availability[dateStr] = Math.random() > 0.3;
  }
  return availability;
};

const DatePicker = ({ label, selectedDate, onDateSelect, minDate, maxDate, availability }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  const formatDate = (date) => {
    if (!date) return 'Add date';
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    const days = [];
    
    // Add empty cells for days before month starts
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }
    
    return days;
  };

  const isDateAvailable = (date) => {
    if (!date) return false;
    const dateStr = date.toISOString().split('T')[0];
    return availability[dateStr] === true;
  };

  const isDateDisabled = (date) => {
    if (!date) return true;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (date < today) return true;
    if (minDate && date < minDate) return true;
    if (maxDate && date > maxDate) return true;
    
    return false;
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const handleDateClick = (date) => {
    if (!isDateDisabled(date) && isDateAvailable(date)) {
      onDateSelect(date);
      setIsOpen(false);
    }
  };

  const days = getDaysInMonth(currentMonth);
  const monthYear = currentMonth.toLocaleDateString('en-US', { 
    month: 'long', 
    year: 'numeric' 
  });

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 text-left hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-inset"
      >
        <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">{label}</div>
        <div className="font-medium text-gray-900 mt-1">{formatDate(selectedDate)}</div>
      </button>
      
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl z-50 min-w-[320px]">
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <button 
                  onClick={prevMonth} 
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                <h3 className="font-semibold text-gray-900">{monthYear}</h3>
                <button 
                  onClick={nextMonth} 
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
              </div>
              
              <div className="grid grid-cols-7 gap-0 mb-2">
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                  <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                    {day}
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-7 gap-0">
                {days.map((date, index) => {
                  const isDisabled = isDateDisabled(date);
                  const isAvailable = isDateAvailable(date);
                  const isSelected = selectedDate && date && date.toDateString() === selectedDate.toDateString();
                  
                  return (
                    <button
                      key={index}
                      onClick={() => handleDateClick(date)}
                      disabled={!date || isDisabled || !isAvailable}
                      className={`
                        h-10 w-10 text-sm flex items-center justify-center rounded-lg transition-all duration-200
                        ${!date ? 'invisible' : ''}
                        ${isDisabled ? 'text-gray-300 cursor-not-allowed' : ''}
                        ${!isAvailable && !isDisabled && date ? 'text-gray-400 cursor-not-allowed relative' : ''}
                        ${isAvailable && !isDisabled && date ? 'text-gray-700 hover:bg-green-50 hover:text-green-700 cursor-pointer' : ''}
                        ${isSelected ? 'bg-green-600 text-white hover:bg-green-700' : ''}
                      `}
                    >
                      {date ? date.getDate() : ''}
                      {!isAvailable && !isDisabled && date && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-6 h-0.5 bg-red-400 rotate-45 absolute"></div>
                          <div className="w-6 h-0.5 bg-red-400 -rotate-45 absolute"></div>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between text-xs text-gray-600">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-100 border border-green-300 rounded mr-2"></div>
                      <span>Available</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-red-50 border border-red-200 rounded mr-2 relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-2 h-0.5 bg-red-400"></div>
                        </div>
                      </div>
                      <span>Unavailable</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-green-600 hover:text-green-700 font-medium"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const ImageModal = ({ images, currentIndex, onClose, onNext, onPrev }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, onNext, onPrev]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 p-2"
      >
        <X className="w-8 h-8" />
      </button>
      
      <button
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10 p-2 bg-black bg-opacity-50 rounded-full"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      
      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10 p-2 bg-black bg-opacity-50 rounded-full"
      >
        <ChevronRight className="w-8 h-8" />
      </button>
      
      <div className="max-w-7xl max-h-full mx-4 flex items-center justify-center">
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="max-w-full max-h-full object-contain"
        />
      </div>
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black bg-opacity-50 px-3 py-1 rounded-full">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

interface AccommodationDetailsPageProps {
  locale: Locale;
}

export default function AccommodationDetailsPage({ locale }: AccommodationDetailsPageProps) {
  const t = getTranslation(locale);
  const searchParams = useSearchParams();
  const idParam = searchParams.get('id');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAllAmenities, setShowAllAmenities] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [availability] = useState(() => generateAvailability());

  const accommodation = accommodationsData.find((a) => a.id === Number(idParam)) || accommodationsData[0];
  const totalImages = accommodation.images.length;

  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);
  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % totalImages);

  const openImageModal = (index) => {
    setModalImageIndex(index);
    setShowImageModal(true);
  };

  const nextModalImage = () => setModalImageIndex((prev) => (prev + 1) % totalImages);
  const prevModalImage = () => setModalImageIndex((prev) => (prev - 1 + totalImages) % totalImages);

  const calculateNights = () => {
    if (!checkInDate || !checkOutDate) return 0;
    const timeDiff = checkOutDate.getTime() - checkInDate.getTime();
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
  };

  const nights = calculateNights();
  const subtotal = nights * accommodation.price;
  const cleaningFee = 50;
  const serviceFee = Math.round(subtotal * 0.14);
  const total = subtotal + cleaningFee + serviceFee;

  return (
    <>
      <Navigation locale={locale} />
      <main className="bg-white min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-6">
          <Link href="/accommodations" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6">
            <ChevronLeft className="w-5 h-5 mr-2" />
            {t.common.back}
          </Link>

          {/* Header with title and actions */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{accommodation.name}</h1>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <button className="flex items-center text-gray-600 hover:text-gray-900">
                <Share2 className="w-5 h-5 mr-2" />
                <span>Share</span>
              </button>
              <button className="flex items-center text-gray-600 hover:text-gray-900">
                <Heart className="w-5 h-5 mr-2" />
                <span>Save</span>
              </button>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-8">
            {/* Desktop Grid Layout */}
            <div className="hidden md:grid grid-cols-4 grid-rows-2 h-full gap-2">
              <div className="col-span-2 row-span-2 cursor-pointer" onClick={() => openImageModal(0)}>
                <img
                  src={accommodation.images[0]}
                  alt="Main view"
                  className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                />
              </div>
              {accommodation.images.slice(1, 5).map((img, i) => (
                <div key={i} className="relative cursor-pointer" onClick={() => openImageModal(i + 1)}>
                  <img
                    src={img}
                    alt={`View ${i + 1}`}
                    className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                  />
                  {i === 3 && accommodation.images.length > 5 && (
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white font-bold text-xl">
                      +{accommodation.images.length - 5}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Single Image Layout */}
            <div className="md:hidden relative w-full h-full cursor-pointer" onClick={() => openImageModal(currentIndex)}>
              <img
                src={accommodation.images[currentIndex]}
                alt={`View ${currentIndex + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 right-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full text-sm">
                {currentIndex + 1} / {totalImages}
              </div>
            </div>

            {/* Navigation arrows - visible on mobile only */}
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition md:hidden"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition md:hidden"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Image Modal */}
          {showImageModal && (
            <ImageModal
              images={accommodation.images}
              currentIndex={modalImageIndex}
              onClose={() => setShowImageModal(false)}
              onNext={nextModalImage}
              onPrev={prevModalImage}
            />
          )}

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Property Info */}
              <div className="border-b pb-8">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                  <div>
                    <h2 className="text-xl font-semibold">{accommodation.location}</h2>
                    <div className="flex items-center mt-2">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-1" />
                      <span className="font-medium">{accommodation.rating}</span>
                      <span className="text-gray-500 ml-1">({accommodation.reviews} reviews)</span>
                    </div>
                  </div>
                  <div className="flex items-center mt-4 sm:mt-0">
                    <MapPin className="w-5 h-5 text-gray-500 mr-2" />
                    <span className="text-gray-600">Show map</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {accommodation.features.map((feature) => (
                    <Badge
                      key={feature}
                      variant="secondary"
                      className="bg-green-50 text-green-700 text-sm"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="border-b pb-8">
                <div className="flex items-center gap-4 mb-6">
                  <Home className="w-6 h-6 text-green-600" />
                  <h3 className="text-xl font-semibold">About this place</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{accommodation.description}</p>
              </div>

              {/* Amenities */}
              <div className="border-b pb-8">
                <h3 className="text-xl font-semibold mb-6">What this place offers</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {accommodation.amenities.slice(0, showAllAmenities ? accommodation.amenities.length : 6).map((amenity) => (
                    <div key={amenity} className="flex items-center">
                      <div className="w-6 h-6 bg-green-50 rounded-full flex items-center justify-center mr-3">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
                {accommodation.amenities.length > 6 && (
                  <button
                    onClick={() => setShowAllAmenities(!showAllAmenities)}
                    className="mt-4 text-green-600 font-medium"
                  >
                    {showAllAmenities ? 'Show less' : `Show all ${accommodation.amenities.length} amenities`}
                  </button>
                )}
              </div>

              {/* Host Info */}
              <div className="border-b pb-8">
                <div className="flex items-start gap-4">
                  <img
                    src={accommodation.host.avatar}
                    alt={accommodation.host.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">Hosted by {accommodation.host.name}</h3>
                    <p className="text-gray-500">Joined in {accommodation.host.joined}</p>
                    <div className="flex space-x-4 mt-4">
                      <Button variant="outline" className="border-gray-300">
                        Contact host
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Booking Card */}
            <div className="lg:sticky lg:top-6 self-start">
              <div className="border rounded-xl p-6 shadow-lg">
                <div className="flex justify-between items-baseline mb-4">
                  <div>
                    <span className="text-2xl font-bold">${accommodation.price}</span>
                    <span className="text-gray-600"> night</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-1" />
                    <span className="font-medium">{accommodation.rating}</span>
                    <span className="text-gray-500 ml-1">({accommodation.reviews})</span>
                  </div>
                </div>

                <div className="border rounded-lg overflow-hidden mb-4">
                  <div className="grid grid-cols-2 border-b">
                    <div className="border-r">
                      <DatePicker
                        label="Check-in"
                        selectedDate={checkInDate}
                        onDateSelect={setCheckInDate}
                        maxDate={checkOutDate ? new Date(checkOutDate.getTime() - 24 * 60 * 60 * 1000) : null}
                        availability={availability}
                      />
                    </div>
                    <div>
                      <DatePicker
                        label="Checkout"
                        selectedDate={checkOutDate}
                        onDateSelect={setCheckOutDate}
                        minDate={checkInDate ? new Date(checkInDate.getTime() + 24 * 60 * 60 * 1000) : null}
                        availability={availability}
                      />
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">GUESTS</div>
                    <div className="font-medium text-gray-900 mt-1">{accommodation.guests} guests</div>
                  </div>
                </div>

                <Button 
                  className="w-full bg-green-600 hover:bg-green-700 h-12 text-lg"
                  disabled={!checkInDate || !checkOutDate}
                >
                  {checkInDate && checkOutDate ? t.common.bookNow : 'Select dates'}
                </Button>

                <div className="text-center text-gray-500 mt-4 text-sm">
                  You won't be charged yet
                </div>

                {nights > 0 && (
                  <div className="mt-6 space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600 underline">${accommodation.price} x {nights} nights</span>
                      <span>${subtotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 underline">Cleaning fee</span>
                      <span>${cleaningFee}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 underline">Service fee</span>
                      <span>${serviceFee}</span>
                    </div>
                    <div className="border-t pt-4 mt-4 flex justify-between font-semibold">
                      <span>Total</span>
                      <span>${total}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer locale={locale} />
    </>
  );
}