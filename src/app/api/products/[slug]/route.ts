import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db/connection';
import Product from '@/lib/models/Product';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    await connectDB();
    
    const product = await Product.findOne({ slug: params.slug, isActive: true })
      .populate('category', 'name slug')
      .populate('collections', 'name slug');
      
    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }
    
    return NextResponse.json({ product }, { status: 200 });
  } catch (error: any) {
    console.error('Get product error:', error);
    return NextResponse.json({ error: 'Failed to fetch product' }, { status: 500 });
  }
}
