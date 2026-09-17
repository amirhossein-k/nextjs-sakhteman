import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { db } from '@/db';
import { projects } from '@/db/schema';
import { desc } from 'drizzle-orm';

export default async function PortfolioPage() {
  const allProjects = await db.select().from(projects).orderBy(desc(projects.createdAt));

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      
      <main className="flex-grow py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-black mb-4">نمونه‌کارهای ما</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              تعدادی از پروژه‌های اخیر بازسازی، نوسازی و دکوراسیون داخلی که توسط تیم سازه‌سازان مدرن با دقت و ظرافت اجرا شده است.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {allProjects.map((project) => (
              <div key={project.id} className="group flex flex-col">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-6 aspect-video">
                  <div className="flex h-full">
                    {project.beforeImageUrl && (
                      <div className="relative w-1/2 overflow-hidden border-l-2 border-white">
                        <img 
                          src={project.beforeImageUrl} 
                          alt="Before" 
                          className="w-full h-full object-cover" 
                        />
                        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-[10px] px-2 py-1 rounded-md uppercase tracking-wider font-bold">Before</div>
                      </div>
                    )}
                    <div className={`${project.beforeImageUrl ? 'w-1/2' : 'w-full'} relative overflow-hidden`}>
                      <img 
                        src={project.afterImageUrl} 
                        alt="After" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      />
                      <div className="absolute top-4 left-4 bg-orange-600 text-white text-[10px] px-2 py-1 rounded-md uppercase tracking-wider font-bold">After</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-orange-600 text-sm font-bold uppercase tracking-widest mb-1 block">{project.category}</span>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{project.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-400 font-medium">
                      <span>📍 {project.location}</span>
                      <span>📅 {project.completionYear}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {allProjects.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              پروژه‌ای برای نمایش یافت نشد.
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
