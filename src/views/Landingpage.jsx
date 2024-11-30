import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Language data
const languages = {
  en: {
    nav: { home: "Home", about: "About", features: "Features", testimonials: "Testimonials", faq: "FAQ", contact: "Contact" },
    hero: { title: "Revolutionizing Agricultural Financing", subtitle: "Connecting farmers, landowners, and investors through blockchain technology", cta: "Get Started" },
    about: { title: "About Farmoney", content: "Farmoney is a decentralized platform leveraging blockchain to create a transparent and efficient ecosystem for agricultural financing." },
    features: { 
      title: "Key Features",
      list: [
        { title: "Smart Contracts", description: "Automate agreements between parties" },
        { title: "Transparency", description: "Immutable ledger for full transaction visibility" },
        { title: "Global Access", description: "Connect with investors worldwide" },
        { title: "Low Fees", description: "Minimize costs by removing intermediaries" }
      ]
    },
    testimonials: { 
      title: "Success Stories",
      list: [
        { name: "Mahesh Patil", role: "Farmer", quote: "Farmoney helped me secure funding for my organic farm expansion." },
        { name: "Jane Smith", role: "Investor", quote: "I've found reliable agricultural projects to invest in through Farmoney." },
        { name: "Nilesh Wakade", role: "Landowner", quote: "Leasing my land through Farmoney has been seamless and profitable." }
      ]
    },
    faq: {
      title: "Frequently Asked Questions",
      list: [
        { question: "How does Farmoney work?", answer: "Farmoney uses blockchain technology to connect farmers, investors, and landowners. Smart contracts automate agreements and transactions, ensuring transparency and efficiency." },
        { question: "Is my investment safe?", answer: "While all investments carry risk, Farmoney uses secure blockchain technology and smart contracts to minimize fraud and ensure transparency." },
        { question: "How do I get started?", answer: "Simply sign up on our platform, verify your account, and you can start investing in agricultural projects or seeking funding for your farm." }
      ]
    },
    contact: { title: "Get in Touch", cta: "Contact Us" }
  },
  hi: {
    nav: { home: "होम", about: "हमारे बारे में", features: "विशेषताएँ", testimonials: "प्रशंसापत्र", faq: "सामान्य प्रश्न", contact: "संपर्क करें" },
    hero: { title: "कृषि वित्तपोषण में क्रांति", subtitle: "ब्लॉकचेन प्रौद्योगिकी के माध्यम से किसानों, भूस्वामियों और निवेशकों को जोड़ना", cta: "शुरू करें" },
    about: { title: "फारमनी के बारे में", content: "फारमनी एक विकेन्द्रीकृत मंच है जो कृषि वित्तपोषण के लिए एक पारदर्शी और कुशल पारिस्थितिकी तंत्र बनाने के लिए ब्लॉकचेन का लाभ उठाता है।" },
    features: { 
      title: "मुख्य विशेषताएँ",
      list: [
        { title: "स्मार्ट अनुबंध", description: "पक्षों के बीच समझौतों को स्वचालित करें" },
        { title: "पारदर्शिता", description: "पूर्ण लेनदेन दृश्यता के लिए अपरिवर्तनीय खाता बही" },
        { title: "वैश्विक पहुंच", description: "दुनिया भर के निवेशकों से जुड़ें" },
        { title: "कम शुल्क", description: "मध्यस्थों को हटाकर लागत को कम करें" }
      ]
    },
    testimonials: { 
      title: "सफलता की कहानियाँ",
      list: [
        { name: "जॉन डो", role: "किसान", quote: "फारमनी ने मुझे अपने जैविक खेत के विस्तार के लिए धन सुरक्षित करने में मदद की।" },
        { name: "जेन स्मिथ", role: "निवेशक", quote: "मैंने फारमनी के माध्यम से निवेश करने के लिए विश्वसनीय कृषि परियोजनाएं पाई हैं।" },
        { name: "माइक जॉनसन", role: "भूस्वामी", quote: "फारमनी के माध्यम से अपनी भूमि को पट्टे पर देना सहज और लाभदायक रहा है।" }
      ]
    },
    faq: {
      title: "अक्सर पूछे जाने वाले प्रश्न",
      list: [
        { question: "फारमनी कैसे काम करता है?", answer: "फारमनी किसानों, निवेशकों और भूस्वामियों को जोड़ने के लिए ब्लॉकचेन तकनीक का उपयोग करता है। स्मार्ट अनुबंध समझौतों और लेनदेन को स्वचालित करते हैं, पारदर्शिता और दक्षता सुनिश्चित करते हैं।" },
        { question: "क्या मेरा निवेश सुरक्षित है?", answer: "हालांकि सभी निवेशों में जोखिम होता है, फारमनी धोखाधड़ी को कम करने और पारदर्शिता सुनिश्चित करने के लिए सुरक्षित ब्लॉकचेन तकनीक और स्मार्ट अनुबंधों का उपयोग करता है।" },
        { question: "मैं कैसे शुरुआत करूं?", answer: "बस हमारे प्लेटफॉर्म पर साइन अप करें, अपना खाता सत्यापित करें, और आप कृषि परियोजनाओं में निवेश करना या अपने खेत के लिए धन की मांग करना शुरू कर सकते हैं।" }
      ]
    },
    contact: { title: "संपर्क करें", cta: "हमसे संपर्क करें" }
  }
};

const LandingPage = () => {
  const [lang, setLang] = useState('en');
  const [activeFaq, setActiveFaq] = useState(null);

  const t = languages[lang];

  return (
    <div className="bg-gradient-to-b from-orange-50 to-green-100 min-h-screen">
      <header className="bg-orange-100 shadow-sm sticky top-0 z-10">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-orange-600">Farmoney</h1>
          <div className="flex space-x-4">
            {Object.entries(t.nav).map(([key, value]) => (
              <a key={key} href={`#${key}`} className="text-gray-800 hover:text-orange-600">{value}</a>
            ))}
            <select 
              value={lang} 
              onChange={(e) => setLang(e.target.value)}
              className="bg-white border border-gray-300 rounded-md text-gray-600"
            >
              <option value="en">English</option>
              <option value="hi">हिंदी</option>
            </select>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                {t.hero.title}
              </h2>
              <p className="mt-4 text-xl text-gray-700">
                {t.hero.subtitle}
              </p>
              <div className="mt-8">
                <Link
                  to="/projects"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  {t.hero.cta}
                </Link>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 relative">
  <img
    className="rounded-lg shadow-xl"
    src="https://res.cloudinary.com/dmebegin1/image/upload/v1732940963/vlw5rpku1w0j6azbnhho.jpg"
    alt="Indian farmer in field"
  />
  <img
    className="rounded-lg shadow-xl absolute top-10 left-10"
    src="https://res.cloudinary.com/dmebegin1/image/upload/v1732940963/vlw5rpku1w0j6azbnhho.jpg"
    alt="Second image"
  />
</div>
          </div>
        </section>

        <section id="about" className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900">{t.about.title}</h2>
            <p className="mt-4 text-xl text-gray-700">{t.about.content}</p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="col-span-2">
                <video 
                  className="w-full rounded-lg shadow-xl"
                  controls
                  poster="https://images.unsplash.com/photo-1595508064774-5ff825520ba5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                >
                  <source src="https://res.cloudinary.com/dmebegin1/video/upload/v1732941613/21cbd317c2e78d162057a7c90b991a72-720p-preview_wkteiv.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="grid grid-rows-2 gap-4">
                <img
                  src="https://th.bing.com/th?id=OIP.jTVyMtwv0AgjwlA3afedCgHaE8&w=305&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                  alt="Indian farmer with crops"
                  className="rounded-lg shadow-xl object-cover h-full"
                />
                <img
                  src="https://res.cloudinary.com/dmebegin1/image/upload/v1732941506/nvyiqhxxpgtf9g7mclar.jpg"
                  alt="Indian rural landscape"
                  className="rounded-lg shadow-xl object-cover h-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-12 bg-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900">{t.features.title}</h2>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {t.features.list.map((feature, index) => (
                <div key={index} className="bg-white overflow-hidden shadow rounded-lg border-t-4 border-orange-500">
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                    <p className="mt-2 text-base text-gray-700">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8">{t.testimonials.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {t.testimonials.list.map((testimonial, index) => (
                <div key={index} className="bg-orange-50 rounded-lg p-6 shadow-lg">
                  <p className="text-lg italic text-gray-700 mb-4">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <img
                      src={`https://randomuser.me/api/portraits/men/${index + 1}.jpg`}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="py-12 bg-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900">{t.faq.title}</h2>
            <div className="mt-8">
              {t.faq.list.map((item, index) => (
                <div key={index} className="border-b border-gray-200">
                  <button
                    className="flex justify-between items-center w-full py-4 text-left"
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  >
                    <span className="text-lg font-medium text-gray-900">{item.question}</span>
                    <span className="ml-2 text-orange-600">
                      {activeFaq === index ? '▲' : '▼'}
                    </span>
                  </button>
                  {activeFaq === index && (
                    <div className="py-4 text-gray-700">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">{t.contact.title}</h2>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                {t.contact.cta}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-orange-100">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-base text-gray-600">
            © 2023 Farmoney. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

