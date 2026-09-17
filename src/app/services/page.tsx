import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { db } from '@/db';
import { companyServices } from '@/db/schema';
import Link from 'next/link';

export default async function ServicesPage() {
  const services = await db.select().from(companyServices);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="flex-grow py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-black mb-6">خدمات تخصصی ما</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              از اولین کلنگ تا آخرین لایه رنگ، ما با تیمی متخصص و ابزارهای پیشرفته در کنار شما هستیم تا خانه‌ای ایمن و زیبا داشته باشید.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all border border-transparent hover:border-orange-100 flex flex-col">
                <div className="text-6xl mb-8">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
                
                <div className="space-y-3 mb-8">
                  {(service.features as string[] || []).map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                      <span className="text-orange-500 text-xs">●</span>
                      {feature}
                    </div>
                  ))}
                </div>

                <Link href="/contact" className="text-orange-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  استعلام قیمت این خدمت ←
                </Link>
              </div>
            ))}
          </div>

          {/* Special CTA */}
          <div className="mt-24 bg-gray-900 rounded-[3rem] p-12 md:p-20 text-white flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-xl text-center md:text-right">
              <h2 className="text-3xl md:text-4xl font-black mb-6">پروژه‌ای خاص در ذهن دارید؟</h2>
              <p className="text-gray-400 text-lg">تیم مهندسی ما آماده است تا پیچیده‌ترین طرح‌های شما را با دقت میلی‌متری اجرا کند.</p>
            </div>
            <Link href="/contact" className="bg-orange-600 hover:bg-orange-700 text-white px-12 py-5 rounded-2xl font-bold text-xl transition-all shadow-xl">
              شروع همکاری
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
