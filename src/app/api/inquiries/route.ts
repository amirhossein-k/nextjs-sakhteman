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

    const [newInquiry] = await db.insert(inquiries).values({
      customerName: name,
      customerPhone: phone,
      projectType,
      area: area?.toString(),
      description,
    }).returning();

    return NextResponse.json({
      success: true,
      inquiryId: newInquiry.id,
      message: 'درخواست با موفقیت ثبت شد.',
    });
  } catch (error) {
    console.error('Inquiry submission error:', error);
    return NextResponse.json({ error: 'خطا در ثبت درخواست' }, { status: 500 });
  }
}
