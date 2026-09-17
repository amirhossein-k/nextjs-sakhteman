import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-6 text-orange-500">سازه‌سازان مدرن</h3>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              ما با بیش از ۱۵ سال تجربه در صنعت ساختمان، متخصص در ارائه خدمات بنایی مدرن، بازسازی کلی و نوسازی واحدهای مسکونی و تجاری با بالاترین استانداردهای مهندسی هستیم.
            </p>
            <div className="flex gap-4">
              {/* Social icons placeholders */}
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-all">📸</a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-all">📱</a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-all">✉️</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 border-r-4 border-orange-600 pr-4">دسترسی سریع</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="/" className="hover:text-orange-500 transition-colors">صفحه اصلی</Link></li>
              <li><Link href="/services" className="hover:text-orange-500 transition-colors">خدمات ما</Link></li>
              <li><Link href="/portfolio" className="hover:text-orange-500 transition-colors">پروژه‌ها</Link></li>
              <li><Link href="/contact" className="hover:text-orange-500 transition-colors">تماس با ما</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 border-r-4 border-orange-600 pr-4">اطلاعات تماس</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <span>📍</span>
                <span>تهران، خیابان ونک، برج نگار، طبقه ۱۵</span>
              </li>
              <li className="flex items-center gap-3">
                <span>📞</span>
                <span dir="ltr">۰۲۱-۸۸۸۸۴۴۴۴</span>
              </li>
              <li className="flex items-center gap-3">
                <span>📱</span>
                <span dir="ltr">۰۹۱۲-۳۴۵۶۷۸۹</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>© ۱۴۰۳ تمامی حقوق برای سازه‌سازان مدرن محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
}
