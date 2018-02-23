const PexelsAPI = require('./index.js');

const API_KEY = 'YOUR_API_KEY_HERE'

const pexelsClient = new PexelsAPI(API_KEY);

test('search', () => {
    pexelsClient.search('cats', 15,1)
        .then((data) => {
            expect(data.error).toBeUndefined();
            expect(data.page).toBe(1);
            expect(data.per_page).toBe(15);
            expect(data.photos).toBeDefined();
            expect(data.photos.length).toBe(15);
        })
        .catch((data) => {});
});

test('getPopularPhotos', () => {
    pexelsClient.getPopularPhotos(15,1)
        .then((data) => {
            expect(data.error).toBeUndefined();
            expect(data.page).toBe(1);
            expect(data.per_page).toBe(15);
            expect(data.photos).toBeDefined();
            expect(data.photos.length).toBe(15);
        })
        .catch((data) => {});
});

test('getCuratedPhotos', () => {
    pexelsClient.getCuratedPhotos(15,1)
        .then((data) => {
            expect(data.error).toBeUndefined();
            expect(data.page).toBe(1);
            expect(data.per_page).toBe(15);
            expect(data.photos).toBeDefined();
            expect(data.photos.length).toBe(15);
        })
        .catch((data) => {});
});