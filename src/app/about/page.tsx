import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="flex-1">
                <h1 className="text-4xl md:text-6xl font-black mb-8">داستان <span className="text-orange-600">سازه‌سازان مدرن</span></h1>
                <p className="text-gray-600 text-lg leading-relaxed mb-6 text-justify">
                  شرکت ما از سال ۱۳۸۸ با تیمی کوچک اما متخصص کار خود را در زمینه بنایی و سفت‌کاری پروژه‌های ویلایی آغاز کرد. با گذشت بیش از یک دهه، امروز مفتخریم که با تیمی متشکل از ۴۰ نیروی متخصص، مجری پیچیده‌ترین پروژه‌های بازسازی و نوسازی لوکس در سطح تهران و حومه هستیم.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-10 text-justify">
                  هدف ما همواره فراتر رفتن از استانداردهای معمول بوده است. ما با بهره‌گیری از تکنولوژی‌های نوین در حوزه عایق‌بندی، متریال‌های سبک و مقاوم، و طراحی‌های مدرن، فضایی را خلق می‌کنیم که علاوه بر زیبایی، از امنیت و دوام بالایی برخوردار باشد.
                </p>
                
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-3xl font-black text-gray-800 mb-2">۱۵+</h3>
                    <p className="text-gray-500 font-medium">سال تجربه کاری</p>
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-gray-800 mb-2">۱۰۰٪</h3>
                    <p className="text-gray-500 font-medium">رضایت مشتریان</p>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5" alt="About construction" className="w-full h-auto" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black mb-12">ارزش‌های اصلی ما</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="p-8">
                <div className="text-4xl mb-6">🤝</div>
                <h4 className="text-xl font-bold mb-4">تعهد و اخلاق</h4>
                <p className="text-gray-500">ما به تمامی قول‌ها و زمان‌بندی‌های خود در قرارداد پایبندیم.</p>
              </div>
              <div className="p-8">
                <div className="text-4xl mb-6">🛡️</div>
                <h4 className="text-xl font-bold mb-4">ایمنی و کیفیت</h4>
                <p className="text-gray-500">رعایت دقیق آیین‌نامه‌های مهندسی و ایمنی در اولویت ماست.</p>
              </div>
              <div className="p-8">
                <div className="text-4xl mb-6">💡</div>
                <h4 className="text-xl font-bold mb-4">نوآوری در اجرا</h4>
                <p className="text-gray-500">استفاده از متریال‌های نوین و تکنیک‌های پیشرفته اجرایی ساختمان.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
