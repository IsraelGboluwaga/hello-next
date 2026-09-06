'use client';

import { useCallback, useState } from 'react';
import { pickRandomVerse, type Verse } from '@/lib/verses';

export default function VerseGenerator() {
  const [current, setCurrent] = useState<{ verse: Verse; index: number } | null>(null);

  const showAnother = useCallback(() => {
    setCurrent((prev) => pickRandomVerse(prev?.index));
  }, []);

  return (
    <section className="card" aria-live="polite">
      {current ? (
        <blockquote className="verse">
          <p className="verse-text">{current.verse.text}</p>
          <cite className="verse-ref">{current.verse.reference}</cite>
        </blockquote>
      ) : (
        <p className="prompt">Click the button for a verse.</p>
      )}

      <button type="button" className="btn" onClick={showAnother}>
        {current ? 'Another verse' : 'Give me a verse'}
      </button>
    </section>
  );
}
