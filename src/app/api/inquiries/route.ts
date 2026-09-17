import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { inquiries } from '@/db/schema';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, projectType, area, description } = body;

    if (!name || !phone || !projectType) {
      return NextResponse.json({ error: 'نام، شماره تماس و نوع پروژه الزامی هستند' }, { status: 400 });
    }

    // 1. Save to Database
    const [newInquiry] = await db.insert(inquiries).values({
      customerName: name,
      customerPhone: phone,
      projectType,
      area: area?.toString(),
      description,
    }).returning();

    // 2. Simulate External Messaging (Notification)
    // In a real app, you would call an external API like Telegram, Discord Webhook, or a push service here.
    console.log('--- NEW INQUIRY NOTIFICATION ---');
    console.log(`From: ${name} (${phone})`);
    console.log(`Type: ${projectType}, Area: ${area}`);
    console.log(`Description: ${description}`);
    console.log('--- NOTIFICATION SENT TO ADMIN CHANNEL ---');

    // 3. Simulate Email (Optional - using internal log for demo)
    console.log(`SENDING EMAIL TO admin@sazehmodern.ir: New lead from ${name}`);

    return NextResponse.json({
      success: true,
      inquiryId: newInquiry.id,
      message: 'درخواست با موفقیت ثبت شد و به اطلاع مدیریت رسید.',
    });
  } catch (error) {
    console.error('Inquiry submission error:', error);
    return NextResponse.json({ error: 'خطا در ثبت درخواست' }, { status: 500 });
  }
}
