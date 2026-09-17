'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    projectType: 'بازسازی',
    area: '',
    description: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        // Automatically open WhatsApp with pre-filled message
        const message = `سلام، درخواست استعلام قیمت ثبت شد.\nنام: ${formData.name}\nنوع پروژه: ${formData.projectType}\nشماره: ${formData.phone}`;
        window.open(`https://wa.me/989123456789?text=${encodeURIComponent(message)}`, '_blank');
      }
    } catch (error) {
      console.error('Inquiry error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="flex-grow py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
            {/* Contact Info Sidebar */}
            <div className="md:w-1/3 bg-orange-600 p-10 text-white">
              <h2 className="text-3xl font-bold mb-8">ارتباط با ما</h2>
              <p className="text-orange-100 mb-10 leading-relaxed">
                برای مشاوره رایگان و استعلام دقیق قیمت، فرم مقابل را تکمیل کنید. کارشناسان ما در کمتر از ۲ ساعت با شما تماس می‌گیرند.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-2xl">📞</span>
                  <div>
                    <p className="text-sm text-orange-200">شماره تماس</p>
                    <p className="font-bold" dir="ltr">۰۲۱-۸۸۸۸۴۴۴۴</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-2xl">📱</span>
                  <div>
                    <p className="text-sm text-orange-200">موبایل و واتس‌اپ</p>
                    <p className="font-bold" dir="ltr">۰۹۱۲-۳۴۵۶۷۸۹</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <p className="text-sm text-orange-200">ایمیل</p>
                    <p className="font-bold underline">info@sazehmodern.ir</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="md:w-2/3 p-10">
              {success ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-10">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mb-6">✓</div>
                  <h3 className="text-2xl font-bold mb-4">درخواست شما با موفقیت ثبت شد</h3>
                  <p className="text-gray-600 mb-8">همکاران ما به زودی با شما تماس خواهند گرفت.</p>
                  <button onClick={() => setSuccess(false)} className="text-orange-600 font-bold">ارسال درخواست جدید</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 text-sm font-bold mb-2">نام و نام خانوادگی</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                        placeholder="مثال: علی محمدی"
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-bold mb-2">شماره تماس (الزامی)</label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                        placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 text-sm font-bold mb-2">نوع پروژه</label>
                      <select
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                        onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                      >
                        <option value="بازسازی">بازسازی کلی</option>
                        <option value="بنایی">بنایی و سفت‌کاری</option>
                        <option value="کاشی‌کاری">کاشی و سنگ‌کاری</option>
                        <option value="گچ‌کاری">گچ‌کاری و نقاشی</option>
                        <option value="خرده‌کاری">خرده‌کاری تخصصی</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-bold mb-2">متراژ تقریبی (متر مربع)</label>
                      <input
                        type="number"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                        placeholder="۱۰۰"
                        onChange={(e) => setFormData({...formData, area: e.target.value})}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">شرح مختصر پروژه</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all resize-none"
                      placeholder="توضیحات لازم را اینجا بنویسید..."
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                    ></textarea>
                  </div>

                  <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl p-6 text-center cursor-pointer hover:border-orange-300 transition-all">
                    <p className="text-gray-500 text-sm">بارگذاری عکس یا ویدیو از محل پروژه (اختیاری)</p>
                    <p className="text-xs text-gray-400 mt-1">حداکثر ۱۰ مگابایت</p>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-orange-700 transition-all flex items-center justify-center gap-2"
                  >
                    {loading ? 'در حال ارسال...' : 'ثبت درخواست و استعلام قیمت'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
