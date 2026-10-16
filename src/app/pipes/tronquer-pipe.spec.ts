import { TronquerPipe } from './tronquer-pipe';

describe('TronquerPipe', () => {
  const pipe = new TronquerPipe();

  it('raccourcit le texte et ajoute une ellipse', () => {
    expect(pipe.transform('Angular avancé', 7)).toBe('Angular…');
  });

  it('laisse inchangé un texte qui respecte la limite', () => {
    expect(pipe.transform('Angular', 7)).toBe('Angular');
  });

  it('laisse inchangé un texte plus court que la limite', () => {
    expect(pipe.transform('Angular', 20)).toBe('Angular');
  });
});
