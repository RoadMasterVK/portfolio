Your name 
• The name of the module
• The name of the assignment


• A list of references/sources you used to aid you
• Any other information needed in order to run your website files (e.g. Live Server)

All the following files are saved in the _______ folder.

For each requirement, give the name of the file/webpage that it can be viewed on and a short decription of each,

===============================================================================
** Implement an XTMLHttp Request and a request for data using Jquery Ajax. **

In fle named "  ".

The programm only runs on the live server version of VS Code.

//body onload alert
When loading the page an alert will show informing the user that the code will run only on the live version

#XMLReq
The first div holds a pargraph and a button that when clicked triggers a function called (loadXMLDoc). The function loads an external document 

//XMLreqDoc.txt
Is a text document with a simple paragraph text that gets loaded through the function (loadXMLDoc) when the button 'More Content' is clicked

.AJAXM
Is a second div containing a button with class .AJAX that when clicked will load an alert from an external JavaScript file 'AJAXReq.js'

//AJAXReq.js
External JavaScript file containing an alert message that trggers when the button 'Click to get external JavaScript' is clicked

===============================================================================================
**Implement CSS effect**

In file named "  "
There are 5 different divs containing an image to which CSS effects have been applied using the filter property

.spacing - normal image
.spacing2 - opacity is applied to the image
.spacing3 - scale of gray is applied to the image
.spacing4 - scale of sepia is applied to the image
.spacing5 - the brightness of the image is reduced by half

untherneth the images there are other 3 divs to which effects are applied when hovering over them
They all have a backgorund color of Darkred

.Transition - when hovering on the div the backgound color's brightness will be at its maximum
.Transition2 - when hovering on this div the backgound color has an opacity shade of 75%
.Transition3 - on this div the backgorund color has a saturation of 30%

===============================================================================================
**Implement an HTML geolocation using API**

In file named "  "

button.loc, is a button that when pressed will load two JavaScript functions to get the geolocation from
the user and show it on google maps

getLocation() 
The getLocation fuction will get the current position of the user device using the getCurrentPosition method

showPosition()
The showPosition function will get the laitude and longitude coordination of the user position
It will then pass them though and displayed in a div as in google maps
The function also displayes the latitude and longitude in numerical form using the getLocation function

=============================================================================================
**To implement graphic using HTML cavas and JS code

In file/webpage named "  "

The second half of the page there is a drawing implemented on HTML Canva using JavaScript code
The canva tag is a container for graphics 

myCanvas.js
Is the Javascript file on which the actual drawing is made each part of he drawing is created defining a shape 
and coords of x and y, radius included in circles 
They all have a color of filling defined with the .fillStyle property
In order to show the drowing on the page the .fill() method is used.

===================================================================================
To implement CSS transitions or amimation along with JavaScript code to detect when a transation has finished.

In file named "  "

The first half of the HTML file contains a div with a small picture when hovering over a transition will start rotating the picture of 360 degrease and doubling the size.
 The code for the transition is in the Portfolio2.css file saved in the same folder
The Html file contains a script concatenated to the transition which triggers an alert message telling the user the transition has been completed showing the full image.
This is possible by using an event listener and the transitioned property in JavaScript code.

The second half of the page has a div with a class of animation and will show 3 different images of the Mount Everest 
automatically when the page loads, it has a delay in start of 5 seconds and will run 3 times in a row before stopping.
The code for the animation is in the Portfolio2.css file.  

============================================================================
**To implement a client web server with web socket and node.js

In file/web page named "  "

=============================================================================
**To implement local storage with JavaScript code.

Two different fieldset where created, the first with an id of data the second with an id of output. The data filedset has two imput text box for entering any key and a value. Beside there is a button taht when clicked will pass that data to the outpur fieldset. 

The data are passed to the output filed using JavaScript code. First each element is assiged to a variable using the getElementById method. Then using an onclick event assigend to the button a function is created. 
The function has two variables (key,value) that are assigned to contain the value from the two input field. The two variables are passed as paramenters to the localStorage.setItem method, this mehtod allows to save pairs of key and value into the browser.

To print out the value of the local storage a for loop is set. Its paramenter is the lengh of the localStorage method where the key and value from the input field are passed and then printed on the webpage with the innerHTML method.

================================================================================================

**Responsive Design & Print version**





