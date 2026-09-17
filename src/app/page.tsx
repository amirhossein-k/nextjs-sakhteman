import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import Link from 'next/link';

const stats = [
  { label: 'پروژه موفق', value: '+۱۵۰' },
  { label: 'سال تجربه', value: '+۱۵' },
  { label: 'مشتری راضی', value: '+۲۰۰' },
  { label: 'نیروی متخصص', value: '+۴۰' },
];

const featuredServices = [
  { title: 'بنایی و سفت‌کاری', icon: '🏗️', description: 'اجرای کلیه امور سفت‌کاری ساختمان با تیمی مجرب.' },
  { title: 'بازسازی لوکس', icon: '✨', description: 'تبدیل خانه‌های قدیمی به فضاهای مدرن و مینیمال.' },
  { title: 'تغییر دکوراسیون', icon: '🛋️', description: 'طراحی و اجرای دکوراسیون داخلی متناسب با سلیقه شما.' },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <FloatingActions />

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1503387762-592dee58292b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
            alt="Construction background" 
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              بنایی مدرن و بازسازی <br /> 
              <span className="text-orange-500"> تخصص ماست</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-200 leading-relaxed font-light">
              با بیش از ۱۵ سال سابقه درخشان، رویاهای ساختمانی شما را با بالاترین کیفیت و سرعت به واقعیت تبدیل می‌کنیم.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all text-center">
                استعلام قیمت رایگان
              </Link>
              <Link href="/portfolio" className="bg-white/10 backdrop-blur-md border-2 border-white/20 hover:bg-white/20 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all text-center">
                مشاهده نمونه‌کارها
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {featuredServices.map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-orange-200 transition-all hover:shadow-xl group">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform inline-block">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl md:text-5xl font-black text-orange-500 mb-2">{stat.value}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase Placeholder */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-black mb-4">پروژه‌های اخیر ما</h2>
              <p className="text-gray-600 text-lg">گلچینی از بهترین پروژه‌های بازسازی و ساختمانی ما در سال اخیر.</p>
            </div>
            <Link href="/portfolio" className="hidden md:block text-orange-600 font-bold hover:gap-2 transition-all">
               مشاهده همه پروژه‌ها ←
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative rounded-3xl overflow-hidden shadow-xl aspect-video">
              <img src="https://images.unsplash.com/photo-1600607687940-4ad236f7570a" alt="Project 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                <span className="bg-orange-600 px-3 py-1 rounded-md text-xs font-bold w-fit mb-3">بازسازی لوکس</span>
                <h3 className="text-2xl font-bold">آپارتمان مدرن سعادت‌آباد</h3>
              </div>
            </div>
            <div className="group relative rounded-3xl overflow-hidden shadow-xl aspect-video">
              <img src="https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e" alt="Project 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                <span className="bg-orange-600 px-3 py-1 rounded-md text-xs font-bold w-fit mb-3">ساخت‌وساز</span>
                <h3 className="text-2xl font-bold">ویلای کوهستانی فشم</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Brief */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5" alt="Construction worker" className="w-full h-auto" />
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-orange-600 rounded-3xl -z-10 hidden md:block"></div>
            </div>
            <div className="flex-1">
              <h2 className="text-4xl font-black mb-8 leading-tight">با تیم ما، کیفیت را در <br /> <span className="text-orange-600">جزئیات</span> تجربه کنید</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                ما معتقدیم که هر پروژه ساختمانی، داستانی از اعتماد است. به همین دلیل در تمامی مراحل از سفت‌کاری تا نازک‌کاری و دکوراسیون نهایی، از بهترین متریال‌ها و دقیق‌ترین ابزارها استفاده می‌کنیم تا نتیجه‌ای فراتر از انتظار شما خلق کنیم.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 font-bold text-gray-700">✅ بازدید و مشاوره رایگان در محل</li>
                <li className="flex items-center gap-3 font-bold text-gray-700">✅ ارائه پیش‌فاکتور دقیق و شفاف</li>
                <li className="flex items-center gap-3 font-bold text-gray-700">✅ تعهد به زمان‌بندی قرارداد</li>
              </ul>
              <Link href="/about" className="text-orange-600 font-bold border-b-2 border-orange-600 pb-1">بیشتر درباره ما</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
