/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Star, 
  ChevronRight, 
  Menu, 
  X, 
  ThermometerSun, 
  Wind, 
  Settings, 
  CheckCircle2, 
  ArrowRight,
  Quote
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Forside', href: '#forside' },
    { name: 'Varmepumper', href: '#varmepumper' },
    { name: 'Aircondition', href: '#aircondition' },
    { name: 'Service', href: '#service' },
    { name: 'Befaring', href: '#befaring' },
    { name: 'Om oss', href: '#om-oss' },
    { name: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <nav className={`glass-nav transition-all duration-300 ${scrolled ? 'py-2 shadow-lg' : 'py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="#forside" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-sky rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-sm">P</div>
              <span className="text-xl font-bold tracking-tight text-brand-navy">Penguin <span className="text-brand-sky">Klima</span></span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-brand-navy/80 hover:text-brand-sky font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="tel:+4722650415" 
              className="bg-brand-sky text-white px-5 py-2 rounded-full font-semibold flex items-center gap-2 hover:bg-brand-navy transition-colors shadow-sm"
            >
              <Phone size={18} />
              22 65 04 15
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-navy p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-brand-navy hover:text-brand-sky hover:bg-gray-50 rounded-xl"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 px-3">
                <a 
                  href="tel:+4722650415" 
                  className="w-full bg-brand-sky text-white px-5 py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
                >
                  <Phone size={18} />
                  Ring oss: 22 65 04 15
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="forside" className="relative pt-10 pb-20 lg:pt-20 lg:pb-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(#003366 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pastel-blue text-brand-sky font-bold text-sm mb-6">
              <Star size={16} fill="currentColor" />
              <span>4.8 stjerner på Google</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy leading-tight mb-6">
              Bedre inneklima og lavere strømregning med varmepumpe
            </h1>
            <p className="text-lg text-gray-600 mb-10 max-w-xl">
              Vi leverer og monterer varmepumper fra markedsledende produsenter som Mitsubishi Electric, Daikin og Panasonic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#befaring" className="btn-bubbly bg-brand-sky text-white shadow-brand-sky/30 shadow-lg">
                Bestill gratis befaring
              </a>
              <a href="#varmepumper" className="btn-bubbly bg-white text-brand-navy border-2 border-brand-navy/10 hover:border-brand-sky">
                Se våre produkter
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://www.pingvinklima.no/wp-content/uploads/hero-varmepumpe-stue.jpg" 
                alt="Moderne stue med varmepumpe" 
                className="w-full h-auto object-cover min-h-[400px]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1581094288338-2314dddb7903?auto=format&fit=crop&q=80&w=1000";
                }}
              />
              <div className="absolute inset-0 bg-brand-navy/10"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-pastel-red rounded-2xl flex items-center justify-center text-brand-red">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <p className="font-bold text-brand-navy">F-Gass Sertifisert</p>
                  <p className="text-sm text-gray-500">Trygg installasjon</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon: Icon, title, description, colorClass, id }: { icon: any, title: string, description: string, colorClass: string, id: string }) => (
  <motion.div
    id={id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="card-friendly flex flex-col h-full"
  >
    <div className={`w-16 h-16 ${colorClass} rounded-2xl flex items-center justify-center mb-6 shadow-sm`}>
      <Icon size={32} />
    </div>
    <h3 className="text-2xl font-bold text-brand-navy mb-4">{title}</h3>
    <p className="text-gray-600 mb-6 flex-grow">{description}</p>
    <a href="#kontakt" className="text-brand-sky font-bold flex items-center gap-2 hover:gap-3 transition-all">
      Les mer <ArrowRight size={18} />
    </a>
  </motion.div>
);

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Våre Tjenester</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">Vi hjelper deg med alt innen oppvarming og kjøling for ditt hjem eller bedrift.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard 
            id="varmepumper"
            icon={ThermometerSun}
            title="Varmepumper"
            description="Spar penger på strømregningen med en effektiv varmepumpe. Vi fører merker som Mitsubishi, Daikin og Panasonic."
            colorClass="bg-pastel-blue text-brand-sky"
          />
          <ServiceCard 
            id="aircondition"
            icon={Wind}
            title="Aircondition"
            description="Hold det svalt og behagelig gjennom hele sommeren med våre stillegående aircondition-løsninger."
            colorClass="bg-pastel-navy text-brand-navy"
          />
          <ServiceCard 
            id="service"
            icon={Settings}
            title="Service & Vedlikehold"
            description="Regelmessig service sikrer optimal drift, lengre levetid og bedre luftkvalitet for din varmepumpe."
            colorClass="bg-pastel-red text-brand-red"
          />
        </div>
      </div>
    </section>
  );
};

const Befaring = () => {
  return (
    <section id="befaring" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-navy rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-sky/20 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-red/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Gratis og uforpliktende befaring</h2>
              <p className="text-brand-sky/90 text-xl mb-8">
                Er du usikker på hvilken løsning som passer best for deg? Vi kommer hjem til deg for å gi råd og et godt tilbud.
              </p>
              <ul className="space-y-4 mb-10">
                {['Profesjonell vurdering av ditt behov', 'Plasseringsrådgivning for optimal effekt', 'Gjennomgang av strømsparing', 'Skriftlig pristilbud på stedet'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/90">
                    <CheckCircle2 className="text-brand-sky flex-shrink-0" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-brand-navy mb-6">Kontakt oss i dag</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-bold text-brand-navy mb-1">Navn</label>
                  <input type="text" placeholder="Ditt navn" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-sky focus:ring-2 focus:ring-brand-sky/20 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-brand-navy mb-1">Telefon</label>
                  <input type="tel" placeholder="Ditt telefonnummer" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-sky focus:ring-2 focus:ring-brand-sky/20 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-brand-navy mb-1">Melding (valgfritt)</label>
                  <textarea placeholder="Hva kan vi hjelpe deg med?" rows={3} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-sky focus:ring-2 focus:ring-brand-sky/20 outline-none transition-all resize-none"></textarea>
                </div>
                <button className="w-full btn-bubbly bg-brand-sky text-white shadow-lg shadow-brand-sky/20">
                  Send forespørsel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  const testimonials = [
    {
      name: "Erik Johansen",
      text: "Veldig fornøyd med installasjonen av Mitsubishi varmepumpe. Profesjonelle montører som ryddet opp etter seg. Anbefales!",
      rating: 5
    },
    {
      name: "Linda Berg",
      text: "Fikk god hjelp til å velge riktig modell for vår leilighet. Rask levering og god pris. Strømregningen har allerede gått ned.",
      rating: 5
    },
    {
      name: "Morten Svendsen",
      text: "Utmerket service på vår gamle aircondition. De kom til avtalt tid og fikset problemet raskt. Veldig hyggelige folk.",
      rating: 4
    }
  ];

  return (
    <section className="py-20 bg-pastel-blue/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Hva våre kunder sier</h2>
            <div className="flex items-center gap-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={24} fill={i < 4.8 ? "currentColor" : "none"} />)}
              </div>
              <span className="text-2xl font-bold text-brand-navy">4.8 / 5</span>
              <span className="text-gray-500">(28 anmeldelser)</span>
            </div>
          </div>
          <a 
            href="https://www.google.com/maps/search/Penguin%20Klima%20AS%20Bj%C3%B8rnerudveien%2018%2C%201266%20Oslo%2C%20Norway/reviews" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-bubbly bg-white text-brand-navy border border-gray-200 flex items-center gap-2"
          >
            Se alle på Google <ChevronRight size={18} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative"
            >
              <Quote className="absolute top-6 right-8 text-pastel-blue" size={40} />
              <div className="flex text-yellow-400 mb-4">
                {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-600 mb-6 italic">"{t.text}"</p>
              <p className="font-bold text-brand-navy">— {t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="om-oss" className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-8">Om Penguin Klima AS</h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Pingvin Klima AS er din totalleverandør av varmepumper og aircondition. Vi har som mål å levere de beste produktene tilpasset det nordiske klimaet, kombinert med profesjonell installasjon og oppfølging.
              </p>
              <p>
                Med mange års erfaring i bransjen sikrer vi våre kunder optimal energiøkonomisering og økt komfort i hjemmet. Vi er F-Gass sertifisert og autorisert forhandler for markedsledende merker.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              {/* Trust Badges Placeholder - Using text for clarity in this environment */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center font-bold text-[10px] text-center p-2">MITSUBISHI ELECTRIC</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center font-bold text-[10px] text-center p-2">DAIKIN</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center font-bold text-[10px] text-center p-2">PANASONIC</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center font-bold text-[10px] text-center p-2">F-GASS</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl rotate-3 bg-brand-sky/10 p-4">
              <img 
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1000" 
                alt="Vårt team i arbeid" 
                className="w-full h-full object-cover rounded-[2.5rem] -rotate-3"
              />
            </div>
            {/* Stats */}
            <div className="absolute -top-6 -right-6 bg-brand-red p-6 rounded-3xl shadow-xl text-white">
              <p className="text-3xl font-bold">10+</p>
              <p className="text-sm font-medium opacity-90">Års erfaring</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="kontakt" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Kontakt oss</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">Vi er her for å hjelpe deg. Ta kontakt for en hyggelig prat om dine behov.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="card-friendly flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-pastel-blue text-brand-sky rounded-2xl flex items-center justify-center mb-6">
              <Phone size={28} />
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-2">Ring oss</h3>
            <p className="text-gray-600 mb-4">Vi svarer på alle henvendelser i arbeidstiden.</p>
            <a href="tel:+4722650415" className="text-2xl font-bold text-brand-sky hover:text-brand-navy transition-colors">+47 22 65 04 15</a>
          </div>

          <div className="card-friendly flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-pastel-navy text-brand-navy rounded-2xl flex items-center justify-center mb-6">
              <MapPin size={28} />
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-2">Besøk oss</h3>
            <p className="text-gray-600 mb-4">Vårt kontor og lager i Oslo.</p>
            <p className="text-lg font-bold text-brand-navy">Bjørnerudveien 18, 1266 Oslo</p>
          </div>

          <div className="card-friendly flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-pastel-red text-brand-red rounded-2xl flex items-center justify-center mb-6">
              <Star size={28} />
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-2">Vurderinger</h3>
            <p className="text-gray-600 mb-4">Se hva andre mener om oss på Google.</p>
            <a 
              href="https://www.google.com/maps/search/Penguin%20Klima%20AS%20Bj%C3%B8rnerudveien%2018%2C%201266%20Oslo%2C%20Norway/reviews" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lg font-bold text-brand-red hover:underline"
            >
              Les anmeldelser
            </a>
          </div>
        </div>

        <div className="mt-12 rounded-[3rem] overflow-hidden shadow-xl border-8 border-white h-[400px]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2004.5678901234567!2d10.8234567!3d59.8456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416f123456789%3A0x1234567890abcdef!2zQmrDuHJuZXJ1ZHZlaWVuIDE4LCAxMjY2IE9zbG8sIE5vcmfDqA!5e0!3m2!1sno!2sno!4v1234567890123" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-navy text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-brand-sky rounded-xl flex items-center justify-center text-white font-bold text-xl">P</div>
              <span className="text-2xl font-bold tracking-tight">Penguin <span className="text-brand-sky">Klima</span></span>
            </div>
            <p className="text-white/70 max-w-sm mb-8">
              Din totalleverandør av varmepumper og aircondition i Oslo og omegn. Vi leverer kvalitet og trygghet i hvert ledd.
            </p>
            <div className="flex gap-4">
              <a href="tel:+4722650415" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-sky transition-colors">
                <Phone size={20} />
              </a>
              <a href="https://www.google.com/maps/search/Penguin%20Klima%20AS%20Bj%C3%B8rnerudveien%2018%2C%201266%20Oslo%2C%20Norway" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-sky transition-colors">
                <MapPin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Lenker</h4>
            <ul className="space-y-4 text-white/70">
              <li><a href="#varmepumper" className="hover:text-brand-sky transition-colors">Varmepumper</a></li>
              <li><a href="#aircondition" className="hover:text-brand-sky transition-colors">Aircondition</a></li>
              <li><a href="#service" className="hover:text-brand-sky transition-colors">Service</a></li>
              <li><a href="#befaring" className="hover:text-brand-sky transition-colors">Befaring</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Kontakt</h4>
            <ul className="space-y-4 text-white/70">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-sky mt-1" />
                <span>Bjørnerudveien 18,<br />1266 Oslo</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-sky" />
                <a href="tel:+4722650415" className="hover:text-brand-sky">+47 22 65 04 15</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/10 text-center text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Penguin Klima AS. Alle rettigheter reservert. F-Gass Sertifisert.</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Befaring />
        <Reviews />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
