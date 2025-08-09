import React from 'react';
import Button from '../../../components/ui/Button';

const LoadMoreButton = ({ onLoadMore, loading = false, hasMore = true }) => {
  if (!hasMore) {
    return (
      <div className="text-center py-8">
        <p className="text-text-secondary font-body text-sm">
          You've reached the end of the portfolio
        </p>
      </div>
    );
  }

  return (
    <div className="text-center py-8">
      <Button
        variant="outline"
        size="lg"
        loading={loading}
        onClick={onLoadMore}
        iconName="Plus"
        iconPosition="left"
        className="magnetic-hover"
      >
        {loading ? 'Loading Projects...' : 'Load More Projects'}
      </Button>
    </div>
  );
};

export default LoadMoreButton;