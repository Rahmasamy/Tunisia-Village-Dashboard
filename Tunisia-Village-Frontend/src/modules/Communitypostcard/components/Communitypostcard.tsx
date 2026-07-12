'use client';

import { CommunityPost } from '@/src/modules/CommunityPost/CommunityPost.types';
import React, { useState } from 'react';

interface CommunityPostCardProps {
  post: CommunityPost;
}

export const CommunityPostCard: React.FC<CommunityPostCardProps> = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <div className="bg-white rounded-[var(--radius-lg)] p-5 shadow-[var(--shadow-sm)] border border-[var(--color-border)]">
      <div className="flex items-center gap-3 mb-3.5">
        <img src={post.avatar} alt={post.author} className="w-11 h-11 rounded-full object-cover border-2 border-[var(--color-primary)]" />
        <div>
          <div className="text-[15px] font-bold text-[var(--color-text)]">{post.author}</div>
          <div className="text-xs text-[var(--color-text-light)]">{post.timestamp}</div>
        </div>
      </div>

      <p className="text-sm text-[var(--color-text)] leading-relaxed mb-3.5">{post.content}</p>

      {post.images && post.images.length > 0 && (
        <div className="grid grid-cols-2 gap-1.5 mb-3.5 rounded-[var(--radius-md)] overflow-hidden">
          {post.images.map((img, i) => (
            <img key={i} src={img} alt="" className="w-full h-[140px] object-cover" loading="lazy" />
          ))}
        </div>
      )}

      <div className="flex gap-4 pt-3 border-t border-[var(--color-border)]">
        <button
          className={`flex items-center gap-1.5 bg-transparent border-none cursor-pointer font-[var(--font-primary)] text-[13px] transition-colors duration-200 px-2 py-1 rounded-[var(--radius-sm)] hover:text-[var(--color-primary)] hover:bg-[var(--color-sand)] ${liked ? 'text-[#ef4444]' : 'text-[var(--color-text-muted)]'}`}
          onClick={handleLike}
        >
          {liked ? '❤️' : '🤍'} {likeCount}
        </button>
        <button className="flex items-center gap-1.5 bg-transparent border-none cursor-pointer font-[var(--font-primary)] text-[13px] text-[var(--color-text-muted)] transition-colors duration-200 px-2 py-1 rounded-[var(--radius-sm)] hover:text-[var(--color-primary)] hover:bg-[var(--color-sand)]">💬 {post.comments}</button>
        <button className="flex items-center gap-1.5 bg-transparent border-none cursor-pointer font-[var(--font-primary)] text-[13px] text-[var(--color-text-muted)] transition-colors duration-200 px-2 py-1 rounded-[var(--radius-sm)] hover:text-[var(--color-primary)] hover:bg-[var(--color-sand)]">↗️ مشاركة</button>
      </div>
    </div>
  );
};