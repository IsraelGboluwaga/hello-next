/**
 * A curated set of Bible verses from the World English Bible (WEB),
 * which is in the public domain and therefore safe to bundle and distribute.
 *
 * Keeping the data local means the app makes no network requests, works
 * offline, and never transmits anything about the user anywhere.
 */

export interface Verse {
  /** Human-readable reference, e.g. "John 3:16". */
  reference: string;
  /** Verse text (World English Bible). */
  text: string;
}

export const verses: readonly Verse[] = [
  {
    reference: 'Genesis 1:1',
    text: 'In the beginning, God created the heavens and the earth.',
  },
  {
    reference: 'Joshua 1:9',
    text: 'Haven’t I commanded you? Be strong and courageous. Don’t be afraid. Don’t be dismayed, for Yahweh your God is with you wherever you go.',
  },
  {
    reference: 'Psalm 23:1',
    text: 'Yahweh is my shepherd; I shall lack nothing.',
  },
  {
    reference: 'Psalm 46:1',
    text: 'God is our refuge and strength, a very present help in trouble.',
  },
  {
    reference: 'Psalm 118:24',
    text: 'This is the day that Yahweh has made. We will rejoice and be glad in it!',
  },
  {
    reference: 'Psalm 119:105',
    text: 'Your word is a lamp to my feet, and a light for my path.',
  },
  {
    reference: 'Proverbs 3:5-6',
    text: 'Trust in Yahweh with all your heart, and don’t lean on your own understanding. In all your ways acknowledge him, and he will make your paths straight.',
  },
  {
    reference: 'Isaiah 40:31',
    text: 'But those who wait for Yahweh will renew their strength. They will mount up with wings like eagles. They will run, and not be weary. They will walk, and not faint.',
  },
  {
    reference: 'Isaiah 41:10',
    text: 'Don’t you be afraid, for I am with you. Don’t be dismayed, for I am your God. I will strengthen you. Yes, I will help you. Yes, I will uphold you with the right hand of my righteousness.',
  },
  {
    reference: 'Jeremiah 29:11',
    text: 'For I know the thoughts that I think toward you, says Yahweh, thoughts of peace, and not of evil, to give you hope and a future.',
  },
  {
    reference: 'Lamentations 3:22-23',
    text: 'It is because of Yahweh’s loving kindnesses that we are not consumed, because his compassion doesn’t fail. They are new every morning. Great is your faithfulness.',
  },
  {
    reference: 'Micah 6:8',
    text: 'He has shown you, O man, what is good. What does Yahweh require of you, but to act justly, to love mercy, and to walk humbly with your God?',
  },
  {
    reference: 'Matthew 6:33',
    text: 'But seek first God’s Kingdom and his righteousness; and all these things will be given to you as well.',
  },
  {
    reference: 'Matthew 11:28',
    text: 'Come to me, all you who labor and are heavily burdened, and I will give you rest.',
  },
  {
    reference: 'John 1:1',
    text: 'In the beginning was the Word, and the Word was with God, and the Word was God.',
  },
  {
    reference: 'John 3:16',
    text: 'For God so loved the world, that he gave his one and only Son, that whoever believes in him should not perish, but have eternal life.',
  },
  {
    reference: 'John 8:12',
    text: 'Again, therefore, Jesus spoke to them, saying, “I am the light of the world. He who follows me will not walk in the darkness, but will have the light of life.”',
  },
  {
    reference: 'John 14:6',
    text: 'Jesus said to him, “I am the way, the truth, and the life. No one comes to the Father, except through me.”',
  },
  {
    reference: 'Romans 5:8',
    text: 'But God commends his own love toward us, in that while we were yet sinners, Christ died for us.',
  },
  {
    reference: 'Romans 8:28',
    text: 'We know that all things work together for good for those who love God, for those who are called according to his purpose.',
  },
  {
    reference: 'Romans 12:2',
    text: 'Don’t be conformed to this world, but be transformed by the renewing of your mind, so that you may prove what is the good, well-pleasing, and perfect will of God.',
  },
  {
    reference: '1 Corinthians 13:4-5',
    text: 'Love is patient and is kind. Love doesn’t envy. Love doesn’t brag, is not proud, doesn’t behave itself inappropriately, doesn’t seek its own way, is not provoked, takes no account of evil.',
  },
  {
    reference: '2 Corinthians 5:17',
    text: 'Therefore if anyone is in Christ, he is a new creation. The old things have passed away. Behold, all things have become new.',
  },
  {
    reference: 'Galatians 5:22-23',
    text: 'But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faith, gentleness, and self-control. Against such things there is no law.',
  },
  {
    reference: 'Ephesians 2:8-9',
    text: 'For by grace you have been saved through faith, and that not of yourselves; it is the gift of God, not of works, that no one would boast.',
  },
  {
    reference: 'Philippians 4:6-7',
    text: 'In nothing be anxious, but in everything, by prayer and petition with thanksgiving, let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your thoughts in Christ Jesus.',
  },
  {
    reference: 'Philippians 4:13',
    text: 'I can do all things through Christ, who strengthens me.',
  },
  {
    reference: 'Colossians 3:23',
    text: 'And whatever you do, work heartily, as for the Lord, and not for men.',
  },
  {
    reference: 'Hebrews 11:1',
    text: 'Now faith is assurance of things hoped for, proof of things not seen.',
  },
  {
    reference: 'Hebrews 12:2',
    text: 'looking to Jesus, the author and perfecter of faith, who for the joy that was set before him endured the cross, despising its shame, and has sat down at the right hand of the throne of God.',
  },
  {
    reference: 'James 1:5',
    text: 'But if any of you lacks wisdom, let him ask of God, who gives to all liberally and without reproach, and it will be given to him.',
  },
  {
    reference: '1 Peter 5:7',
    text: 'casting all your worries on him, because he cares for you.',
  },
  {
    reference: '1 John 1:9',
    text: 'If we confess our sins, he is faithful and righteous to forgive us the sins, and to cleanse us from all unrighteousness.',
  },
  {
    reference: '1 John 4:19',
    text: 'We love him, because he first loved us.',
  },
  {
    reference: 'Revelation 21:4',
    text: 'He will wipe away every tear from their eyes. Death will be no more; neither will there be mourning, nor crying, nor pain any more. The first things have passed away.',
  },
];

/**
 * Returns a random verse. Accepts an optional index of the currently shown
 * verse so the result is guaranteed to differ from it (when more than one
 * verse exists), avoiding the "clicked the button and nothing changed" feel.
 */
export function pickRandomVerse(excludeIndex?: number): { verse: Verse; index: number } {
  if (verses.length === 0) {
    throw new Error('No verses are available.');
  }
  if (verses.length === 1) {
    return { verse: verses[0], index: 0 };
  }

  let index = Math.floor(Math.random() * verses.length);
  if (excludeIndex !== undefined) {
    // Re-roll until we land on a different verse.
    while (index === excludeIndex) {
      index = Math.floor(Math.random() * verses.length);
    }
  }
  return { verse: verses[index], index };
}
