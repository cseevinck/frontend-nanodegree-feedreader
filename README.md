# Project Overview

The project is to develop various jasmine tests for a provided web-based application that reads RSS feeds. Partial tests were provided and the task was to complete the tests. 

# Test Descriptions

* In the provided `RSS Feeds` test suite there is:
    + a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
    + add a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
* Create a test suite named `The menu`. This test suite contains: 
    + a test ensuring that the menu element is hidden by default, and, 
    + a test ensuring that the menu changes visibility when the menu icon is clicked. This latter test has two expectations: the menu displays when clicked and it hides when clicked again.
* Create a test suite named `Initial Entries`. This test suite contains: 
    + a test ensuring that when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container. Since the `loadFeed` function is asynchronous, this test requires the use of Jasmine's `beforeEach` and asynchronous `done` function.
* Create a test suite named `New Feed Selection`. This test suite contains: 
    + a test ensuring that when a new feed is loaded by the `loadFeed` function that the content actually changes.

# How to perform the tests

* Run the `index.html` file in the project folder.
The tests are included in the file `/jasmine/spec/feedreader.js`.

* The bottom of the page will show test results. Failed tests are listed in red while tests that pass are listed in green.

# Notes

 * All tests run independent of the results of other tests.
 * Callbacks are used to ensure that feeds are loaded before they are tested.
