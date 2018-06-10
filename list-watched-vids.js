/*
Program Name:   List Watched YouTube Videos
File Name:      list-watched-vids.js
Date Created:   06/10/18
Date Modified:  --
Version:        1.0
Programmer:     Eric Hepperle

Purpose: List all watched YouTube videos from History.

Usage: Cut and paste into developer console window (F12). List will output
    to the console.

Requires:

*/

/* global $ */

console.clear();

// var selector = "#video-title";
// var selector = "#title-wrapper h3 > a";
var selector = "ytd-video-renderer.style-scope.ytd-item-section-renderer";

var rows = document.querySelectorAll(selector);

Array.from(rows).forEach(function (row, i) {
  
  // console.log(row.innerText);
  var url = row.querySelector('#video-title');
  var vidTitle = row.querySelector('#title-wrapper h3 > a').innerText;
  console.log("%c%d                                                ", "background: orange", (i+1));
  console.log("Video Title:\t" + vidTitle);
  console.log("URL:\t" + url);

});

/*
NOTES:
    06/10/18 - Convert jQuery version to ES6.

    02/11/17 - Create file.
    02/20/17 - Clarified and re-formatted header.

*/

