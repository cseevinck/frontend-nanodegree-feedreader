/* feedreader.js
 *
 * This is the spec file that Jasmine will read that contains
 * all of the tests that will be run against the application.
 */

/* All tests are placed within the $() function, since some of these tests 
 * may require DOM elements, ensure they don't run until the DOM is ready.
 */
$(function() {

    /* 
     * Test suite "RSS Feeds"
     */
    describe('RSS Feeds', function() {

        /* 
         * This test ensures that allFeeds is defined and not empty
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* 
         * A test that loops through each feed in the allFeeds object 
         * and ensures it has a URL defined and that the URL is not empty.
         */
        it('ensures allFeeds feeds have URL defined and not empty', function() {

            //check each feed 
            for (let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe('');
            }
        });

        /* 
         * A test that loops through each feed in the allFeeds object
         * and ensures it has a name defined and that the name is not empty.
         */
        it('ensures allFeeds feeds have names and are not empty', function() {

            //check each feed 
            for (let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe('');
            }
        });
    });

    /* 
     * Test suite "The menu" 
     */
    describe('The menu', function() {

        /*
         * A test that ensures the menu element is hidden by default.
         */

        it('ensures the menu element is hidden by default', function() {
            expect(document.body.className).toContain('menu-hidden')
        });

        /* 
         * A test that ensures the menu changes visibility when the menu 
         * icon is clicked. This test has two expectations: 
         * 1. does the menu display when clicked, and,
         * 2. does it hide when clicked again.
         */

        it('ensures menu changes visibility when menu icon is clicked', function() {
            const menuIconElement = document.body.querySelector(".menu-icon-link");
            menuIconElement.click();
            expect(document.body.className).not.toContain('menu-hidden');
            menuIconElement.click();
            expect(document.body.className).toContain('menu-hidden')
        });
    });

    /* 
     * Test suite "Initial Entries" 
     */
    describe('Initial Entries', function() {

        /* 
         * A test that ensures when the loadFeed function is called and completes 
         * its work, there is at least a single .entry element within the .feed 
         * container. loadFeed() is asynchronous.
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('ensures when loadFeed function called - at least one entry', function() {
            const feed = document.querySelector('.feed .entry').children.length;
            expect(feed).toBeGreaterThan(0);
        });
    });

    /* 
     * Test suite "New Feed Selection" 
     */
    describe('New Feed Selection', function() {

        /* 
         * A test that ensures when a new feed is loaded by the loadFeed
         *  function that the content actually changes. loadFeed() is 
         *  asynchronous.
         */

        let firstFeed;
        beforeEach(function(done) {
            loadFeed(0, function() {
                firstFeed = document.querySelector('.feed').innerHTML;
                loadFeed(1, function() {
                    done();
                });
            });
        });

        // ensure that content changes
        it('content actually changes', function() {
            expect(document.querySelector('.feed').innerHTML).not.toEqual(firstFeed);
        });
    });
}());