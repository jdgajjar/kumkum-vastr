import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide product name'],
    trim: true,
    maxlength: [200, 'Product name cannot exceed 200 characters']
  },
  description: {
    type: String,
    required: [true, 'Please provide product description'],
    maxlength: [2000, 'Description cannot exceed 2000 characters']
  },
  price: {
    type: Number,
    required: [true, 'Please provide product price'],
    min: [0, 'Price cannot be negative']
  },
  discountPrice: {
    type: Number,
    min: [0, 'Discount price cannot be negative']
  },
  category: {
    type: String,
    required: [true, 'Please select product category'],
    enum: {
      values: ['Sarees', 'Kurtis', 'Lehengas', 'Suits', 'Dupattas', 'Accessories'],
      message: 'Please select valid category'
    }
  },
  subCategory: {
    type: String,
    trim: true
  },
  images: [{
    public_id: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  }],
  colors: [{
    name: String,
    hexCode: String,
    stock: {
      type: Number,
      default: 0
    }
  }],
  sizes: [{
    name: {
      type: String,
      enum: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'Free Size']
    },
    stock: {
      type: Number,
      default: 0
    }
  }],
  fabric: {
    type: String,
    trim: true
  },
  occasion: [{
    type: String,
    enum: ['Casual', 'Party', 'Wedding', 'Festival', 'Office', 'Traditional']
  }],
  brand: {
    type: String,
    default: 'Kumkum Vastr'
  },
  stock: {
    type: Number,
    required: [true, 'Please provide stock quantity'],
    min: [0, 'Stock cannot be negative'],
    default: 0
  },
  ratings: {
    type: Number,
    default: 0,
    min: [0, 'Rating cannot be less than 0'],
    max: [5, 'Rating cannot exceed 5']
  },
  numReviews: {
    type: Number,
    default: 0
  },
  isFeatured: {
    type: Boolean,
    default: false
  },
  isBestSeller: {
    type: Boolean,
    default: false
  },
  isNewArrival: {
    type: Boolean,
    default: false
  },
  tags: [String],
  sku: {
    type: String,
    unique: true,
    sparse: true
  },
  views: {
    type: Number,
    default: 0
  },
  soldCount: {
    type: Number,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual for reviews
productSchema.virtual('reviews', {
  ref: 'Review',
  localField: '_id',
  foreignField: 'product'
});

// Indexes for performance
productSchema.index({ category: 1, isActive: 1 });
productSchema.index({ price: 1 });
productSchema.index({ ratings: -1 });
productSchema.index({ isBestSeller: 1, isActive: 1 });
productSchema.index({ isFeatured: 1, isActive: 1 });
productSchema.index({ createdAt: -1 });
productSchema.index({ name: 'text', description: 'text', tags: 'text' });

// Calculate discount percentage
productSchema.virtual('discountPercentage').get(function() {
  if (this.discountPrice && this.discountPrice < this.price) {
    return Math.round(((this.price - this.discountPrice) / this.price) * 100);
  }
  return 0;
});

// Get effective price
productSchema.virtual('effectivePrice').get(function() {
  return this.discountPrice && this.discountPrice < this.price ? this.discountPrice : this.price;
});

const Product = mongoose.model('Product', productSchema);

export default Product;
