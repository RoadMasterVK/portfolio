Viacheslav Kopytko
• The name of the module - Potfolio
• Github - https://github.com/RoadMasterVK/portfolio


• A list of references/sources you used to aid you
    - https://github.com
    - https://www.w3schools.com/
    - https://developer.mozilla.org/
    - https://cssgridgarden.com/ 
    - https://appcode.app/
    - https://www.youtube.com/  
    - https://alvarotrigo.com/
    - https://www.google.com/
    - https://chat.openai.com/

• Any other information needed in order to run your website files (e.g. Live Server)
    - Live Server
    - Node.js
    - WebSocket port 8080

All the following files are saved in the _______ folder.

For each requirement, give the name of the file/webpage that it can be viewed on and a short decription of each,

===============================================================================
The main section where 6 sections of the task are collected - PORTFOLIO
**Implement an XTMLHttp Request and a request for data using Jquery Ajax**
**Implement CSS effect**
**Implement graphic using HTML canvas and JS code**
**Implement CSS transitions or amimation along with JavaScript**
**Implement Amimation Keyframes with JavaScript**

In fle named.
    **HTML /**
     - portfolio.html
     - flavicon.ico 
    **Fonts folder - fonts**
     - outfit-regular.woff2
     - raleway-regular.woff2
    **Styles folder - css**
     - portfolio.css
     - semantics.css
     - nav.css
     - ajax.css
     - canvas.css
     - line.css
     - xml.css
     - training.css
     - css3.css
    **Scripts folder - js**
     - ajax.js
     - canvas.js
     - line.js
     - xml.js
     - training.js
    **Json folder - json**
     -  taskb.json
    **Data folder - data**
     - data.txt
    **--------------**
The programm only runs on the live server version of VS Code.

**======================**
#AJAX

<div class="container_ajax">
    <div id="result"></div>
</div>
<button onclick="loadData()">Load Data</button>

**ajax.js**
External JavaScript file containing an alert message that trggers when the button 'Load Data' is clicked

**data.txt**
Is a text document with a simple paragraph text that gets loaded through the function (XMLHttpRequest)

**======================**
#XMLHttpRequest

<div class="container_xml">
    <table id="yourTableId">
        <tr>
          <th>Number</th>
          <th>Task</th>
          <th>Completed</th>
        </tr>
    </table>
</div>
<button onclick="loadDataXML()">Load Data</button>

**yourTableId**
Contains table 3 columns - |Number|Task|Completed|
 
**xml.js**
External JavaScript file containing an alert message that trggers when the button 'Load Data' is clicked

**taskb.json**
Is a json document with a table that gets loaded through the function (XMLHttpRequest)

**======================**
#CSS effect

<div class="container_css3">
    <div class="effect1">rotate (45deg)</div>
    <div class="effect2">scale</div>
    <div class="effect3">opacity</div>
    <div class="effect4">font color</div>
    <div class="effect5">position</div>
    <div class="effect6">box shadow</div>
    <div class="effect7">border</div>
    <div class="effect8">linear gradient</div>
    <div class="effect9">rotate (-45deg)</div>
</div>

**css3.css**
When you hover the mouse cursor, the conditions specified are met styles
 - rotate (45deg)
 - scale
 - opacity
 - font color
 - position
 - box shadow
 - border
 - linear gradient
 - rotate (-45deg)

**======================**
#CANVAS

<div class="container_canvas">
    <canvas id="myCanvas"></canvas>
</div>

**canvas.js**
An external JavaScript file that causes an object to move from the right edge to the left and change color when it reaches the edge.

**======================**
#Animation Keyframes

<div class="container_line"> </div>

**line.js**
An external JavaScript  creates animated lines, generates a random line color, generates a random line width, fires when the web page is fully loaded and built, starts a loop that creates the lines.

**======================**
#Transitions Java Scripts

<div class="container_square">
    <div class="square"></div>
     ---//---
</div>

**transitions.js**
External JavaScript ensures that the background color of "square" class elements changes when the cursor is hovered over them, and returns to the original color when the cursor moves away from the elements.
===============================================================================================
**Implement an HTML geolocation using API**

In fle named.
    **HTML /**
     -map.html
     - flavicon.ico 
    **Fonts folder - fonts**
     - outfit-regular.woff2
     - raleway-regular.woff2
    **Styles folder - css**
     - map.css
     - semantics.css
     - nav.css 
    **Scripts folder - js**
     - map.js
    **--------------**
The programm only runs on the live server version of VS Code.


**map.js**
Get My Location, is a button that when pressed will load two JavaScript functions to get the geolocation from
the user and show it on google maps

getLocation() 
The getLocation fuction will get the current position of the user device using the getCurrentPosition method

=============================================================================================
**Implement an WebSocket and Local Storage**

In fle named.
    **HTML /**
     - chat.html
     - flavicon.ico 
    **Fonts folder - fonts**
     - outfit-regular.woff2
     - raleway-regular.woff2
    **Styles folder - css**
     - chat.css
     - semantics.css
     - nav.css 
    **Scripts folder - js**
     - chat.js
    **--------------**
The programm only runs on the live server version of VS Code and WebSocket server port 8080


**chat.js**
Create variables for chat elements such as chat window (chatWindow), message input field (messageInput), send message button (sendButton), username input field (usernameInput), username set button (usernameButton), chat clear button (clearButton) , and a web socket instance is created with the address of the server.

The presence of the username in the local storage (localStorage) is checked. If a username is already stored, it is automatically set in the username input field, and the input fields and the username setting button are disabled.

Checks for chat history in local storage. If the chat history is already saved, it is loaded and displayed in the chat window.

An event handler is set for the username setting button (usernameButton). When you click on the button, the entered username is saved to the local storage, as well as blocking the input fields and the button for setting the username.

The event handler is set to the send button (sendButton). When the button is clicked, a message is sent to the server using the socket.send() method, and then the message input field is cleared.

An event handler is set for the chat clear button (clearButton). Clicking the button clears the chat window and deletes the chat history from local storage.

The displayMessage() function is responsible for displaying the new message in the chat window. A new p element is created for the message, the text content of which is set to the received message. The element is then added to the chat window and the chat history is saved by calling the saveChatHistory() function.

The saveChatHistory() function saves the contents of the chat window to local storage using the localStorage.setItem() method.

Event handlers are set on the web socket. When a message is received from the server, the displayMessage() function is called to display the message in the chat window. In case of a websocket connection error, an error message is output to the console.

=============================================================================================
**Implement an Photo gallery**

In fle named.
    **HTML /**
     - gallery.html
     - flavicon.ico 
    **Fonts folder - fonts**
     - outfit-regular.woff2
     - raleway-regular.woff2
    **Styles folder - css**
     - gallery.css
     - semantics.css
     - nav.css 
    **Scripts folder - js**
     - gallery.js
     **Images folder - gallery**
     - all images
    **--------------**
The programm only runs on the live server version of VS Code

**gallery.js**
Variables are defined for the gallery elements such as the main photo (mainPhotoElement), preview photos (previewPhotosElement), previous and next arrows (prevArrowElement and nextArrowElement), pagination (paginationElement), fullscreen container (fullscreenContainer), fullscreen photo (fullscreenPhotoElement), close button (closeButton), next button in fullscreen mode (nextButton), and previous button in fullscreen mode (prevButton).

The galleryFolder variable is set to the folder name where the images are stored, and the totalPhotos variable is set to the total number of photos in the gallery.

The currentIndex variable is initialized to 0, indicating the index of the currently displayed photo. The previewPhotosPerPage variable is set to the number of preview photos to display per page. The totalPages variable is calculated by dividing the total number of photos by the number of preview photos per page and rounding up using Math.ceil().

The displayMainPhoto() function is called to display the main photo based on the current index. It sets the source (src) attribute of the mainPhotoElement to the corresponding image URL.

The displayPreviewPhotos() function is called to display the preview photos. It first clears the previewPhotosElement container by setting its inner HTML to an empty string. Then, in a loop, it generates and appends img elements for the preview photos. Each img element is assigned the corresponding image URL, alt text, and a click event listener that calls the previewClickHandler() function with the index of the clicked photo.

The previewClickHandler() function is responsible for handling the click event on a preview photo. If the clicked photo is not the currently displayed one, it updates the currentIndex, calls displayMainPhoto() to update the main photo, and updates the arrow visibility using updateArrowVisibility().

The updateArrowVisibility() function toggles the "disabled" class on the previous and next arrows based on the currentIndex. The previous arrow is disabled when the current index is 0, and the next arrow is disabled when the current index reaches the end of the photos.

The updatePagination() function updates the pagination elements based on the current page. It clears the paginationElement container, creates and appends span elements for each page, adds event listeners to the page elements, and marks the current page as active.

Event listeners are added to the previous and next arrows to handle their click events. When clicked, the currentIndex is updated accordingly, and the preview photos and pagination are updated.

The getRandomIndex() function generates a random index within the specified range.

The startMainPhotoRotation() function sets an interval to automatically rotate the main photo. Every 20 seconds, the displayMainPhoto() function is called to update the main photo.

The script also includes additional functionality for fullscreen mode. The openFullscreen() function is called when a photo is clicked, which sets the source of the fullscreen photo element and displays the fullscreen container. The closeFullscreen() function hides the fullscreen container. The showNextPhoto() and showPreviousPhoto() functions are used to navigate to the next and previous photos in fullscreen mode. The displayFullscreenPhoto() function updates the source of the fullscreen photo based on the current index.

Event listeners are added to the main photo for mouseenter, mouseleave, and click events. These events handle the cursor style, opening the fullscreen mode, and triggering actions such as closing, moving to the next photo, or moving to the previous photo in fullscreen mode.

Finally, a keydown event listener is added to the document. When a key is pressed and the fullscreen container is visible, the event listener checks the key and calls the corresponding function for actions such as closing the fullscreen mode or navigating to the next or previous photo.

=============================================================================================
**Implement an ImageMap**

In fle named.
    **HTML /**
     - imagemap.html
     - flavicon.ico 
    **Fonts folder - fonts**
     - outfit-regular.woff2
     - raleway-regular.woff2
    **Styles folder - css**
     - imagemap.css
     - semantics.css
     - nav.css 
    **--------------**
The programm only runs on the live server version of VS Code

**imagemap.html**
In HTML, an imagemap is defined using the <img> and <map> elements. The <img> element is used to display the image, and the <map> element is used to define areas of the image. Areas are defined using an <area> element within a <map> element.

Each <area> element has the attributes shape (the shape of the area), coords (the coordinates of the area), href (the link that will be opened when clicked), and other optional attributes such as alt (alternate text for the area) or target (the target for opening the link) .

=============================================================================================
**Implement an Local Video**

In fle named.
    **HTML /**
     - video.html
     - flavicon.ico 
    **Fonts folder - fonts**
     - outfit-regular.woff2
     - raleway-regular.woff2
    **Styles folder - css**
     - video.css
     - semantics.css
     - nav.css 
     **Video folder - video**
     - 12.mp4
     - 13.mp4
     - 15.mp4 
     - 16.mp4
     - 17.mp4 
    **--------------**
The programm only runs on the live server version of VS Code

**video.html**
This section uses the <main> element, which denotes the main content of the page. Inside the <main> are several <div> containers that represent the columns.

Each column has a heading specified using the <h3> element. Video titles are in the titles.

Below the headings are the video players represented by the <video> element. Each video player has a class attribute that defines the style of the player (for example, class="video" or class="video2"). Player controls are rendered using the controls attribute.

Within each <video> element is a <source> element that specifies the source of the video file using the src attribute. The example uses video files with the .mp4 extension. If the browser does not support the <video> tag or cannot play the specified video format, the text "Your browser does not support the video tag."

Thus, this section allows the user to view multiple video files organized in columns with the ability to control playback.
===================================================================================
**Implement an  Web Worker**

In fle named.
    **HTML /**
     - worker.html
     - flavicon.ico 
    **Fonts folder - fonts**
     - outfit-regular.woff2
     - raleway-regular.woff2
    **Styles folder - css**
     - worker.css
     - semantics.css
     - nav.css 
    **Scripts folder - js**
     - worker.js
     - pgworker.js
    **--------------**

**vorker.js**
This code represents the generatePasswords() function, which generates random passwords based on given parameters.

Here is a description of how the function works:

Getting parameter values:

The password length value from the element with ID passwordLength is converted to an integer and stored in the passwordLength variable.
The values of the includeLowercase, includeUppercase, includeNumbers, includeSpecialChars, and includeHexOnly flags are retrieved from the respective form elements using the checked method and stored in the respective variables.
Validation of entered values:

If passwordLength is non-numeric or less than 1, an error message is displayed warning that the password length is incorrect, and the function terminates.
Creating a worker thread (Worker):

A new instance of the passwordGeneratorWorker workflow is created, and the path to the pgworker.js script that will generate passwords is specified.
Sets an onmessage event handler that will be called when a message is received from the worker thread.
This handler clears the passwordList in the HTML and creates <li> elements for each generated password, which are added to the passwordList.
Forming parameters for generating passwords:

An options object is created containing parameter values for generating passwords based on user input.
Sending parameters to the worker thread:

The passwordGeneratorWorker worker thread's postMessage method is called to send the options object to the password generation worker thread.
Thus, the generatePasswords() function coordinates the password generation process using a workflow and updates the user interface to display the generated passwords in a list.

**pgvorker.js**
Processing of received data:

When a message is received from the main thread via the onmessage event, the password generation options are retrieved from the event.data object and stored in the options variable.
Password generation:

The generatePasswords(options) function takes options parameters containing the length of the password and flags indicating what types of characters should be included in the password.
An empty passwords array is created to which the generated passwords will be added.
The for loop generates 5 passwords. For each iteration, the generateRandomPassword() function is called, which generates a random password based on the passed parameters and adds it to the passwords array.
Random password generation:

The generateRandomPassword() function accepts password generation parameters, including password length, flags to enable different character types.
An empty string characters is created, which will contain all possible characters from which the password will be generated.
Depending on the selected flags, characters of different types (lowercase letters, uppercase letters, numbers, special characters, hexadecimal characters) are added to the characters string.
An empty string password is created, into which the generated password will be generated.
With a for loop, each character of the password is generated:
A random character index is generated by choosing a random number between 0 and characters.length - 1.
The character at the appropriate index is added to the password string.
Sending generated passwords back to the main thread:

After the generation of passwords is complete, the passwords array with the generated passwords is sent back to the main thread using the postMessage(passwords) function.
Thus, this script generates random passwords based on the received parameters and returns the result to the main thread for display on the web page.

===================================================================================
**Implement an  Contact Form**

In fle named.
    **HTML /**
     - contact.html
     - flavicon.ico 
    **Fonts folder - fonts**
     - outfit-regular.woff2
     - raleway-regular.woff2
    **Styles folder - css**
     - contact.css
     - semantics.css
     - nav.css 
    **Scripts folder - js**
     - contact.js
    **--------------**

**contact.js**
This code is a DOMContentLoaded event handler that fires when the web page is fully loaded. It does the following:

Getting DOM elements:

Getting a link to the contact form with document.getElementById('contactForm') and storing it in the contactForm variable.
Getting a reference to the response display element with document.getElementById('responseMessage') and storing it in the responseMessage variable.
Processing a form submission:

Adding a submit event listener to the contact form with contactForm.addEventListener('submit', function(event) { ... }).
Inside the event handler, the form's default behavior is prevented using event.preventDefault() to prevent it from reloading.
Getting form data and sending request:

Creating a FormData object with new FormData(contactForm) to get form data.
Using the fetch function to send a request to the server using the POST method and passing the form data in the request body.
Processing the response from the server:
Using the response.json() method to extract JSON data from the server's response.
Processing the data received from the response:
If data.success is true, then a success message is displayed, the appropriate style classes are applied to the responseMessage, and the appropriate text is set.
Otherwise, an error message is displayed to send the message, the appropriate style classes are applied to the responseMessage, and the appropriate text is set.
Error processing:
If an error occurs while executing the request or processing the data, an error message is displayed, the appropriate style classes are applied to the responseMessage, and the appropriate text is set.
Thus, this code is responsible for submitting the contact form data to the server and displaying success or error messages on the web page.

===================================================================================
**Implement an  Home**

In fle named.
    **HTML /**
     - index.html
     - flavicon.ico 
    **Fonts folder - fonts**
     - outfit-regular.woff2
     - raleway-regular.woff2
    **Styles folder - css**
     - main.css
     - semantics.css
     - nav.css 
    **Scripts folder - js**
     - app.js
     **Lib folder - libs/gsap/**
     - gsap.mini.js
     - ScrollSmoother.min.js
     - ScrollTrigger.min.js
     **Images folder - img and img/work**
     - all images
     **--------------**

**app.js**
This code uses the GSAP (GreenSock Animation Platform) library to create animations using the ScrollTrigger and ScrollSmoother plugins. Here is a brief description of its functionality:

Plugin registration:

Registering the ScrollTrigger and ScrollSmoother plugins with gsap.registerPlugin(ScrollTrigger, ScrollSmoother).
Checking for touch device support:

Checking if the device is touch using ScrollTrigger.isTouch !== 1.
Creating smooth scrolling:

If the device is non-touch, smooth scrolling is created using ScrollSmoother.create({ ... }).
A wrapper (wrapper) and content (content) are specified for smooth scrolling.
The smoothing parameter is set to 1.5.
Effects are enabled.
Animation of the "hero-section" section:

The animation for the "hero-section" class section is created with gsap.fromTo('.hero-section', { opacity: 1 }, { ... }).
An animation of changing transparency (opacity) is set from an initial value of 1 to a value of 0.
ScrollTrigger is used for animation:
The animation trigger is an element with the "hero-section" class.
The animation starts when the element's center reaches the start point ("start: 'center'").
The animation ends when the element's center reaches the end point ("end: '820'").
Animation smoothing is set (scrub: true).
Animation of gallery elements:

Each element with the class "gallery__item" inside the left side of the gallery is animated with itemsL.forEach(item => { ... }).

An animation of changing transparency (opacity) and position along the X-axis (x) is set.

ScrollTrigger is used for animation:

The animation trigger is the current element.
The animation starts when the element goes beyond the start point ("start: '-850'").
The animation ends when the element is before the end point ("end: '-100'").
Animation smoothing is set (scrub: true).
Each element with the class "gallery__item" inside the right side of the gallery is animated with itemsR.forEach(item => { ... }).

An animation of changing transparency (opacity) and position along the X-axis (x) is set.

ScrollTrigger is used for animation:

The animation trigger is the current element.
The animation starts when the element goes beyond the start point ("start: '-750'").
The animation ends when the top of the element reaches the top point ("end: 'top'").
Animation smoothing is set (scrub: true).
Thus, this code uses GSAP and the ScrollTrigger and ScrollSmoother plugins to create smooth scrolling and animation of elements on the page depending on the scroll.
============================================================================

**Responsive Design & Print version**





