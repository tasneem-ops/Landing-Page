# Landing Page Project

Landing Page Project is mainly about building an interactive webpage using HTML, CSS and JavaScript.
I made some edits on HTML & CSS files and edited the content of the page.
Considering my JavaScript code:
1.First I built a navigation bar items using a for loop and stored items in an array called navSections.
2.Then I used function interactiveNavMenu to set each item in navigation bar to be an anchor to the section and added an event listener so as to scroll to corresponding section when clicked.
3.I added an event listener to scroll event so when the document is scrolled the style of section & navigation bar items changes according to new position.
4.I used two helper functions : (getActiveSection) to determine which section is active based on whether the section is on view port or not and percentage of view port occupied by this section. 
5.The other function is (setDefaultStyle) to set styling of all sections & navigation bar items to default so that we can add needed style to a specific item without worrying that other items or sections would keep old style ( unwanted ).
6.When DOM is loaded the main function runs which in turn starts running all JavaScript code.
