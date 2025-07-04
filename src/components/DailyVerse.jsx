
import { BookOpen } from 'lucide-react';
import { verses } from './../data/verses';

const DailyVerse = () => {
  const today = new Date();
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
  const verse = verses[dayOfYear % verses.length];

  return (
    <section className="py-16 bg-church-purple/5" id='versiculo'>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <BookOpen className="h-6 w-6 text-church-purple" />
            <h3 className="text-xl font-medium text-church-purple">Versículo del Día</h3>
          </div>
          <blockquote className="relative">
            <div className="absolute -top-10 left-5 text-church-purple/20 text-5xl font-serif">"</div>
            <p className="relative z-10 text-xl md:text-xl font-playfair italic text-gray-800 mb-6">
              {verse.text}
            </p>
            <div className="text-lg text-black font-medium">
              <span className="inline-block px-4 py-2 rounded-full bg-church-gold/20 text-church-darkGold">
                {verse.reference}
              </span>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default DailyVerse;
