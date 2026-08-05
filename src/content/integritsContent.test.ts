import { integritsContent } from './integritsContent';

describe('integritsContent', () => {
  it('includes all shared leadership profiles', () => {
    expect(integritsContent.leadership).toHaveLength(8);
    expect(integritsContent.leadership.map((leader) => leader.name)).toEqual(
      expect.arrayContaining([
        'Clarence Carter',
        'Steve Fox',
        'Ivy Carter',
        'Michael Sosamon',
        'Vanessa Valdez',
        'Jim Lyon',
        'Sarah Carter',
        'Ana Basada',
      ]),
    );
  });

  it('includes all three core capabilities', () => {
    expect(integritsContent.capabilities).toHaveLength(3);
    expect(integritsContent.capabilities.map((capability) => capability.title)).toEqual(
      expect.arrayContaining([
        'Range Engineering & Technical Services',
        'Program Management',
        'IT & Cybersecurity',
      ]),
    );
  });
});
