import { db } from '@/db';
import { projects, inquiries } from '@/db/schema';
import { desc } from 'drizzle-orm';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default async function AdminDashboard() {
  const allInquiries = await db.select().from(inquiries).orderBy(desc(inquiries.createdAt));
  const allProjects = await db.select().from(projects).orderBy(desc(projects.createdAt));

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-black mb-10">پنل مدیریت سازه‌سازان</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Inquiries List */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <span>📩</span> آخرین استعلام‌ها
              </h2>
              <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-200">
                <table className="w-full text-right">
                  <thead className="bg-gray-50 border-b border-gray-100">
                    <tr>
                      <th className="px-6 py-4 font-bold text-gray-600">مشتری</th>
                      <th className="px-6 py-4 font-bold text-gray-600">نوع پروژه</th>
                      <th className="px-6 py-4 font-bold text-gray-600">تاریخ</th>
                      <th className="px-6 py-4 font-bold text-gray-600">وضعیت</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {allInquiries.map((inq) => (
                      <tr key={inq.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                          <p className="font-bold text-gray-800">{inq.customerName}</p>
                          <p className="text-sm text-gray-500">{inq.customerPhone}</p>
                        </td>
                        <td className="px-6 py-4 text-gray-600">{inq.projectType}</td>
                        <td className="px-6 py-4 text-sm text-gray-400">
                          {new Date(inq.createdAt).toLocaleDateString('fa-IR')}
                        </td>
                        <td className="px-6 py-4">
                          <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-bold">
                            {inq.status === 'pending' ? 'در انتظار' : inq.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                    {allInquiries.length === 0 && (
                      <tr>
                        <td colSpan={4} className="px-6 py-10 text-center text-gray-400">هیچ درخواستی یافت نشد.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Quick Actions & Projects Management */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200">
                <h3 className="text-lg font-bold mb-6">عملیات سریع</h3>
                <div className="space-y-4">
                  <button className="w-full bg-orange-600 text-white font-bold py-3 rounded-xl hover:bg-orange-700 transition-all">
                    + افزودن پروژه جدید
                  </button>
                  <button className="w-full border-2 border-gray-200 text-gray-700 font-bold py-3 rounded-xl hover:bg-gray-50 transition-all">
                    مدیریت خدمات
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200">
                <h3 className="text-lg font-bold mb-6">پروژه‌های اخیر</h3>
                <div className="space-y-4">
                  {allProjects.slice(0, 5).map(proj => (
                    <div key={proj.id} className="flex items-center gap-4 p-2 hover:bg-gray-50 rounded-xl transition-all border border-transparent hover:border-gray-100">
                      <img src={proj.afterImageUrl} className="w-12 h-12 rounded-lg object-cover" />
                      <div className="flex-grow">
                        <p className="text-sm font-bold text-gray-800">{proj.title}</p>
                        <p className="text-xs text-gray-400">{proj.category}</p>
                      </div>
                      <button className="text-gray-300 hover:text-red-500">🗑️</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
