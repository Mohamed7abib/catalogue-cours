import { PlacesRestantesPipe } from './places-restantes-pipe';

describe('PlacesRestantesPipe', () => {
  const pipe = new PlacesRestantesPipe();

  it('indique quand un cours est complet', () => {
    expect(pipe.transform(0)).toBe('Complet');
  });

  it('indique quand il reste une seule place', () => {
    expect(pipe.transform(1)).toBe('Dernière place !');
  });

  it('signale un cours presque complet sous le seuil par défaut', () => {
    expect(pipe.transform(3)).toBe('Plus que 3 places');
  });

  it('indique le nombre de places disponibles au-dessus du seuil', () => {
    expect(pipe.transform(8)).toBe('8 places disponibles');
  });

  it('accepte un seuil personnalisé', () => {
    expect(pipe.transform(8, 10)).toBe('Plus que 8 places');
  });

  it('utilise le seuil par défaut de cinq places', () => {
    expect(pipe.transform(5)).toBe('Plus que 5 places');
    expect(pipe.transform(6)).toBe('6 places disponibles');
  });
});
