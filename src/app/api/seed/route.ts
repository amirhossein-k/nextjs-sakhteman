import { NextResponse } from 'next/server';
import { db } from '@/db';
import { companyServices, projects } from '@/db/schema';

export async function POST() {
  try {
    const servicesData = [
      {
        title: 'سفت‌کاری و بنایی',
        slug: 'structural-work',
        description: 'اجرای دقیق اسکلت، فونداسیون و دیوارهای باربر با رعایت اصول مهندسی.',
        icon: '🏗️',
        features: ['تخریب اصولی', 'شناژبندی', 'ستون و سقف'],
      },
      {
        title: 'تیغه‌چینی و سفال',
        slug: 'partition-walling',
        description: 'تقسیم‌بندی فضاها با استفاده از متریال‌های نوین و سنتی بصورت تراز و شاقول.',
        icon: '🧱',
        features: ['دیوار چینی هبلکس', 'سفال و لفتون', 'وال‌پست'],
      },
      {
        title: 'گچ‌کاری و سفیدکاری',
        slug: 'plastering',
        description: 'نازک‌کاری و ایجاد سطوح صاف و صیقلی آماده رنگ‌آمیزی و کاغذ دیواری.',
        icon: '🖌️',
        features: ['گچ‌وخاک', 'سفیدکاری', 'ابزارزنی کلاسیک'],
      },
      {
        title: 'کاشی و سنگ‌کاری',
        slug: 'tiling-stonework',
        description: 'نصب انواع سنگ‌های نما، کاشی و سرامیک پرسلان با چسب و ملات.',
        icon: '💎',
        features: ['نمای رومی', 'پرسلان کف', 'بین‌کابینتی'],
      },
      {
        title: 'بازسازی و نوسازی',
        slug: 'renovation',
        description: 'تغییر کامل نقشه داخلی و نوسازی زیرساخت‌های فرسوده ساختمان.',
        icon: '🏠',
        features: ['طراحی داخلی', 'نوسازی تاسیسات', 'تغییر دکوراسیون'],
      },
    ];

    for (const service of servicesData) {
      await db.insert(companyServices).values(service).onConflictDoUpdate({
        target: companyServices.slug,
        set: service,
      });
    }

    const projectsData = [
      {
        title: 'بازسازی ویلای لواسان',
        category: 'بازسازی',
        description: 'تبدیل یک خانه قدیمی ۲۰ ساله به ویلای مدرن و هوشمند.',
        afterImageUrl: 'https://images.unsplash.com/photo-1600585154340-be6199f7d009',
        beforeImageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
        location: 'لواسان',
        completionYear: 1402,
      },
      {
        title: 'پروژه سنگ‌کاری برج الهیه',
        category: 'سنگ‌کاری',
        description: 'اجرای نمای رومی با سنگ تراورتن عباس‌آباد.',
        afterImageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00',
        location: 'الهیه',
        completionYear: 1401,
      },
    ];

    for (const project of projectsData) {
      await db.insert(projects).values(project);
    }

    return NextResponse.json({
      success: true,
      message: 'داده‌های اولیه ساختمانی با موفقیت ایجاد شدند',
    });
  } catch (error) {
    console.error('Seed error:', error);
    return NextResponse.json(
      { error: 'خطا در ایجاد داده‌های اولیه' },
      { status: 500 }
    );
  }
}
