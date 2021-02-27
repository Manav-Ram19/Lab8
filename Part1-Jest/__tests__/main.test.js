const formatVolumeIconPath = require('../assets/scripts/main')
describe('Volume Level 3', () =>{
    for(let i = 67; i<= 100; i++) {
        test('Sets volume to ' + i+ ', expects volume level to be 3', () => {
            expect(formatVolumeIconPath(i)).toBe('./assets/media/icons/volume-level-3.svg');
        });
    }
});
describe('Volume Level 2', () =>{
    for(let i = 34; i<= 66; i++) {
        test('Sets volume to ' + i+ ', expects volume level to be 2', () => {
            expect(formatVolumeIconPath(i)).toBe('./assets/media/icons/volume-level-2.svg');
        });
    }
});
describe('Volume Level 1', () =>{
    for(let i = 1; i<= 33; i++) {
        test('Sets volume to ' + i+ ', expects volume level to be 1', () => {
            expect(formatVolumeIconPath(i)).toBe('./assets/media/icons/volume-level-1.svg');
        });
    }
});
describe('Volume Level 0', () =>{
    for(let i = 0; i<= 0; i++) {
        test('Sets volume to ' + i+ ', expects volume level to be 0', () => {
            expect(formatVolumeIconPath(i)).toBe('./assets/media/icons/volume-level-0.svg');
        });
    }
});