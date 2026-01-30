import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  rating: {
    type: Number,
    required: [true, 'Please provide a rating'],
    min: [1, 'Rating must be at least 1'],
    max: [5, 'Rating cannot exceed 5']
  },
  comment: {
    type: String,
    required: [true, 'Please provide a review comment'],
    maxlength: [500, 'Review cannot exceed 500 characters']
  },
  images: [{
    public_id: String,
    url: String
  }],
  isVerifiedPurchase: {
    type: Boolean,
    default: false
  },
  helpfulCount: {
    type: Number,
    default: 0
  },
  isApproved: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Indexes
reviewSchema.index({ product: 1, user: 1 }, { unique: true });
reviewSchema.index({ product: 1, createdAt: -1 });
reviewSchema.index({ rating: -1 });

// Update product ratings after review save
reviewSchema.statics.calculateAverageRatings = async function(productId) {
  const stats = await this.aggregate([
    { $match: { product: productId, isApproved: true } },
    {
      $group: {
        _id: '$product',
        numReviews: { $sum: 1 },
        avgRating: { $avg: '$rating' }
      }
    }
  ]);

  if (stats.length > 0) {
    await mongoose.model('Product').findByIdAndUpdate(productId, {
      numReviews: stats[0].numReviews,
      ratings: Math.round(stats[0].avgRating * 10) / 10
    });
  } else {
    await mongoose.model('Product').findByIdAndUpdate(productId, {
      numReviews: 0,
      ratings: 0
    });
  }
};

// Call calculateAverageRatings after save
reviewSchema.post('save', function() {
  this.constructor.calculateAverageRatings(this.product);
});

// Call calculateAverageRatings after remove
reviewSchema.post('remove', function() {
  this.constructor.calculateAverageRatings(this.product);
});

const Review = mongoose.model('Review', reviewSchema);

export default Review;
