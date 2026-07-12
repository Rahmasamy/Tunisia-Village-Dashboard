import React from 'react';
import { Download, Share2 } from 'lucide-react';
import Link from 'next/link';
import { User } from '../types/auth.types';
import { useDownloadCard } from '../hooks/useDownloadCard';
import { useUploadCard } from '../hooks/useUploadCard';
import { toast } from 'react-hot-toast';

interface StepSuccessProps {
  user?: User | null;
}

export const StepSuccess = ({ user }: StepSuccessProps) => {
  const downloadMutation = useDownloadCard();
  const uploadMutation = useUploadCard();

  const handleDownload = () => {
    if (user?.id) {
      downloadMutation.mutate(user.id);
    } else {
      toast.error("عذراً، لم نتمكن من الحصول على معرف المستخدم للتحميل.");
    }
  };

  const membershipId = user?.id 
    ? `${(user.name || 'MEMBER').split(' ')[0].toUpperCase()}-${user.id}` 
    : 'ANAS-548';

  const handleShareClick = () => {
    if (user?.id) {
      uploadMutation.mutate(user.id, {
        onSuccess: (data: any) => {
          const imageUrl = data?.imageUrl || '';
          
          const messageText = 
            `مرحباً!\n` +
            `تم تسجيل عضويتي بنجاح في قرية تونس.\n\n` +
            `*الاسم:* ${user.name}\n` +
            `*رقم العضوية:* ${membershipId}\n\n` +
            (imageUrl ? `*رابط كارت العضوية:*\n${imageUrl}` : '');

          const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(messageText)}`;
          window.open(whatsappUrl, '_blank');
        }
      });
    } else {
      toast.error("عذراً، لم نتمكن من الحصول على معرف المستخدم للرفع.");
    }
  };

  return (
    <div className="w-full flex flex-col items-center animate-in zoom-in duration-500">
      <div className="text-7xl mb-4 select-none">👏</div>
      
      <h2 className="text-3xl font-extrabold text-gray-900 mb-2">مبروك!</h2>
      <h3 className="text-xl font-bold text-gray-700 mb-2">تم تسجيل عضويتك بنجاح.</h3>
      <p className="text-gray-500 text-base font-semibold mb-8">
        رقم عضويتك: <span className="font-extrabold text-gray-900">{membershipId}</span>
      </p>

      <div className="w-full space-y-4">
        <button 
          onClick={handleDownload}
          disabled={downloadMutation.isPending}
          className="w-full flex items-center justify-center gap-2 bg-[#fa8b45] hover:bg-orange-500 text-white font-extrabold py-4 px-6 rounded-2xl shadow-lg shadow-orange-500/10 hover:shadow-orange-500/20 active:scale-[0.99] transition-all text-base cursor-pointer disabled:opacity-50"
        >
          <Download size={22} />
          {downloadMutation.isPending ? "جاري التحميل..." : "تحميل الكارنية PDF"}
        </button>

        <button 
          onClick={handleShareClick}
          disabled={uploadMutation.isPending}
          className="w-full flex items-center justify-center gap-2 bg-white border-2 border-green-500 text-green-600 font-extrabold py-4 px-6 rounded-2xl hover:bg-green-50 transition-all text-base cursor-pointer disabled:opacity-50"
        >
          <Share2 size={22} />
          {uploadMutation.isPending ? "جاري رفع الكارنية..." : "مشاركة الكارنية عبر الواتس اب"}
        </button>
      </div>

      <div className="mt-8">
        <Link href="/login" className="text-[#008767] font-extrabold underline text-base hover:text-green-800 transition-colors">
          الذهاب لتسجيل الدخول
        </Link>
      </div>
    </div>
  );
};
