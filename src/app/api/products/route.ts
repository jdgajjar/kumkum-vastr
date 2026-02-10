import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db/connection';
import Product from '@/lib/models/Product';

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const collection = searchParams.get('collection');
    const featured = searchParams.get('featured');
    
    let query: any = { isActive: true };
    if (category) query.category = category;
    if (collection) query.collections = collection;
    if (featured === 'true') query.isFeatured = true;
    
    const products = await Product.find(query)
      .populate('category', 'name slug')
      .populate('collections', 'name slug')
      .sort({ createdAt: -1 });
      
    return NextResponse.json({ products }, { status: 200 });
  } catch (error: any) {
    console.error('Get products error:', error);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}
