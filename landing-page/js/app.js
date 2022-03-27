/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const navSections = [];
const navBar = document.getElementById("navbar__list");
let sections = document.getElementsByTagName("section");
const nav = document.getElementsByTagName("nav");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// sets All styles to default styling
function setDefaultStyle()
{
    for(let section of sections)
    {
        section.classList = "";
    }
    for(let navSection of navSections)
    {
        navSection.id = "";
    }
}
// A function to return index of active element
function getActiveSection()
{
    const height = window.innerHeight;
    for(let i=0;i< sections.length; i++)
    {
        const top = sections[i].getBoundingClientRect().top;
        const bottom = sections[i].getBoundingClientRect().bottom;
        if ( bottom < 0)
            continue;
        else if (top > height)
            continue;
        else if (top > 0 && top < height && bottom >0 && bottom < height)
            return i;
        else if (top < 0 && bottom > height)
            return i;
        else if( top < 0 && bottom < height)
        {
            let p = 1- (height - bottom)/height;
            if (p > 0.5)
                return i;
        }
        else if (top > 0 && bottom > height)
        {
            let p = (height - top)/height;
            if (p > 0.5)
                return i;
        }
    }
    return -1;
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNavMenu ()
{
    for (let i=0;i<sections.length;i++)
    {
        navSections[i] = document.createElement("li");
        const H2 = document.getElementsByTagName("h2")[i].innerHTML;
        navSections[i].innerHTML = H2;
        navBar.appendChild(navSections[i]);
    }
}

// Add class 'active' to section when near top of viewport
function style()
{
    setDefaultStyle();
    
    let i = getActiveSection();
    if (i>=0)
    {
        sections[i].classList = "your-active-class";
        navSections[i].id = "active";
    }
    else 
    {
        return;
    }
}

// Scroll to anchor ID using scrollTO event
function interactiveNavMenu()
{
    for (let i in navSections)
    {
            navSections[i].addEventListener('click', function(event){
                event.preventDefault();
                sections[i].scrollIntoView({behavior : "smooth"});
            });
    }
}

/**
 * End Main Functions
 * Begin Events
 * 
*/
document.addEventListener('DOMContentLoaded', main);
function main()
{
    // Build menu
    buildNavMenu();
    // Scroll to section on link click
    interactiveNavMenu();
    // Set sections as active
    document.addEventListener('scroll', style);
}

