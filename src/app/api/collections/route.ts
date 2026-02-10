import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db/connection';
import Collection from '@/lib/models/Collection';

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const featured = searchParams.get('featured');
    
    let query: any = { isActive: true };
    if (featured === 'true') query.isFeatured = true;
    
    const collections = await Collection.find(query).sort({ name: 1 });
    
    return NextResponse.json({ collections }, { status: 200 });
  } catch (error: any) {
    console.error('Get collections error:', error);
    return NextResponse.json({ error: 'Failed to fetch collections' }, { status: 500 });
  }
}
