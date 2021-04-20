// a simple vanishing website demo by gh0$t
var count=60; // this is the time in seconds for vanishing the site
var counter=setInterval(timer, 1000); //1000 will run it every 1 second
function timer()
{
count=count-1;
if (count <= 0)
{
clearInterval(counter);
//counter ended, do something here
return;
}
// do something for 'count' number of seconds
document.body.style.opacity = (100 - (100/count)) + '%';
}
