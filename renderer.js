// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
 const {BrowserWindow} = require('electron').remote;


const { ipcRenderer } = require('electron');
var request = require('request');
const cheerio = require('cheerio');
  var Nightmare = require('nightmare');
   const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
const rp = require("request-promise");
  var m3u8ToMp4 = require("m3u8-to-mp4");
const {shell} = require('electron') // deconstructing assignment
const path = require('path');
var fs = require('fs');
require('ssl-root-cas').inject();


 function init() {
 $('.openConsole').click(function() {
 var windoxwf = BrowserWindow.getFocusedWindow();
 windoxwf.webContents.openDevTools({mode:'undocked'})
});
$('.viewfilesx').click(function() {
  console.log(__dirname+'\\..\\..\\hanime_downloads\\');
  shell.openExternal('file://' + __dirname+'\\..\\..\\hanime_downloads\\');

});





                // Minimize task
                document.getElementById("min-btn").addEventListener("click", (e) => {

                 var window = BrowserWindow.getFocusedWindow();
                 window.minimize();


                });


                document.getElementById("close-btn").addEventListener("click", (e) => {

            var window = BrowserWindow.getFocusedWindow(); window.close();
                });
            };

            document.onreadystatechange =  () => {
                if (document.readyState == "complete") {
                    init();
                }
            };
