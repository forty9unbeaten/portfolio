(this["webpackJsonpmy-website"]=this["webpackJsonpmy-website"]||[]).push([[0],{147:function(e,t,a){e.exports=a(294)},152:function(e,t,a){},153:function(e,t,a){},158:function(e,t,a){},159:function(e,t,a){},160:function(e,t,a){},290:function(e,t,a){},291:function(e,t,a){},292:function(e,t,a){},293:function(e,t,a){},294:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(33),o=a.n(l),c=(a(152),a(14)),i=a(15),s=a(16),m=a(17),u=a(18),d=(a(153),a(35)),p=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(){Array.from(document.getElementsByClassName("Navbar-selection")).forEach((function(e){e.classList.remove("selected")}))},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"Navbar-container"},r.a.createElement("div",{name:"home",className:"Navbar-selection",onClick:this.handleClick},r.a.createElement(d.b,{to:"/"},"Home")),r.a.createElement("div",{name:"resume",className:"Navbar-selection",onClick:this.handleClick},r.a.createElement(d.b,{to:"/resume"},"Resume")),r.a.createElement("div",{name:"portfolio",className:"Navbar-selection",onClick:this.handleClick},r.a.createElement(d.b,{to:"/port"},"Portfolio")),r.a.createElement("div",{name:"contact",className:"Navbar-selection",onClick:this.handleClick},r.a.createElement(d.b,{to:"/contact"},"Contact"))))}}]),t}(n.Component),h=(a(158),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("li",{className:"PortItem-project"},r.a.createElement("a",{href:this.props.link,title:this.props.projectName,target:"_blank"},this.props.projectName),r.a.createElement("ul",null,r.a.createElement("li",{className:"PortItem-description"},this.props.description)))}}]),t}(n.Component)),E=a(31),b=(a(159),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).componentDidMount=function(){document.getElementsByName("home")[0].classList.add("selected")},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"Home-picContainer"},r.a.createElement("div",{id:"Home-picture",alt:"Rob's Picture",title:"Rob's Picture"})),r.a.createElement("p",{id:"Home-aboutMe"},"Hello, my name is Rob Spears. I live in Indianapolis, IN and I am a professional software engineer. Here you can find and download a copy of my r\xe9sum\xe9 and see some examples of the work I've done. You can also find my contact information if you have any questions or just want to say hello. ",r.a.createElement("br",null)," ",r.a.createElement("br",null),"Thank you for taking the time to look around, and I look forward to hearing from you!"))}}]),t}(n.Component)),f=a(300),g=a(299),v=a(43),y=(a(160),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).componentDidMount=function(){document.getElementsByName("resume")[0].classList.add("selected")},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=[{menuItem:"Work Experience",render:function(){return r.a.createElement(f.a.Pane,null,r.a.createElement("h3",{className:"sectionHeader"},"Best Buy Inc. (2019 - Present)"),r.a.createElement("h4",null,"Inventory Specialist"),r.a.createElement("ul",null,r.a.createElement("li",null,"Fulfill all online orders assuring they are either ready for customer pickup or shipped from store to desired address"),r.a.createElement("li",null,"Confirm accuracy of all inbound and outbound product transfers and manifests"),r.a.createElement("li",null,"Assure all physical inventory is accounted for and easily accessible at all times")),r.a.createElement("h3",{className:"sectionHeader"},"Landscapes Unlimited (2017 - 2019)"),r.a.createElement("h4",null,"Maintenance Foreman"),r.a.createElement("ul",null,r.a.createElement("li",null,"Maintaining and managing custom residential projects and designs."),r.a.createElement("li",null,"Communicating directly with customers ensuring that service expectations are exceeded."),r.a.createElement("li",null,"Managing a team of 3-5 employees assuring that individual responsibilities are clearly communicated, understood and executed.")),r.a.createElement("h3",{className:"sectionHeader"},"Capital Group Companies (2013 - 2017)"),r.a.createElement("h4",null,"Advisor Marketing Specialist"),r.a.createElement("ul",null,r.a.createElement("li",null,"Educating financial advisors and retail investment clients about proprietary financial products and services."),r.a.createElement("li",null,"Assisting advisors and other financial professionals with sales presentations and client meeting preparation."),r.a.createElement("li",null,"Contributing to overall company sales and revenue alongside area sales representatives.")))}},{menuItem:"Education",render:function(){return r.a.createElement(f.a.Pane,null,r.a.createElement("h3",{className:"sectionHeader"},"Butler University (2019 - Present)"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("h4",null,"Front-End Web Development Certificate")),r.a.createElement("ul",null,r.a.createElement("li",null,"Technical certificates obtained through"," ",r.a.createElement("a",{href:"https://www.kenzie.academy/software-engineering",target:"_blank",rel:"noopener noreferrer",title:"Check Out Kenzie Academy"},"Kenzie Academy")))),r.a.createElement("h3",{className:"sectionHeader"},"Ivy Tech Community College (2017 - 2019)"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("h4",null,"AAS Software Development")),r.a.createElement("li",null,r.a.createElement("h4",null,"Technical Certificates")),r.a.createElement("ul",null,r.a.createElement("li",null,"Web Development Foundation"),r.a.createElement("li",null,"Web Application Development"))))}},{menuItem:"Technical Skills",render:function(){return r.a.createElement(f.a.Pane,null,r.a.createElement("div",{className:"buttonContainer"},r.a.createElement(g.a,{style:{color:"white",backgroundColor:"maroon"},animated:"fade"},r.a.createElement(g.a.Content,{visible:!0},r.a.createElement(v.a,{name:"react",size:"big"})),r.a.createElement(g.a.Content,{hidden:!0},"React.js")),r.a.createElement(g.a,{style:{color:"white",backgroundColor:"maroon"},animated:"fade"},r.a.createElement(g.a.Content,{visible:!0},r.a.createElement(v.a,{name:"js",size:"big"})),r.a.createElement(g.a.Content,{hidden:!0},"Javascript")),r.a.createElement(g.a,{style:{color:"white",backgroundColor:"maroon"},animated:"fade"},r.a.createElement(g.a.Content,{visible:!0},r.a.createElement(v.a,{name:"html5",size:"big"})),r.a.createElement(g.a.Content,{hidden:!0},"HTML5"))),r.a.createElement("div",{className:"buttonContainer"},r.a.createElement(g.a,{style:{color:"white",backgroundColor:"maroon"},animated:"fade"},r.a.createElement(g.a.Content,{visible:!0},r.a.createElement(v.a,{name:"node",size:"big"})),r.a.createElement(g.a.Content,{hidden:!0},"Node.js")),r.a.createElement(g.a,{style:{color:"white",backgroundColor:"maroon"},animated:"fade"},r.a.createElement(g.a.Content,{visible:!0},r.a.createElement(v.a,{className:"big icon"},r.a.createElement("div",{id:"reduxLogo"}))),r.a.createElement(g.a.Content,{hidden:!0},"Redux")),r.a.createElement(g.a,{style:{color:"white",backgroundColor:"maroon"},animated:"fade"},r.a.createElement(g.a.Content,{visible:!0},r.a.createElement(v.a,{name:"git",size:"big"})),r.a.createElement(g.a.Content,{hidden:!0},"Git"))),r.a.createElement("div",{className:"buttonContainer"},r.a.createElement(g.a,{style:{color:"white",backgroundColor:"maroon"},animated:"fade"},r.a.createElement(g.a.Content,{visible:!0},r.a.createElement(v.a,{name:"css3",size:"big"})),r.a.createElement(g.a.Content,{hidden:!0},"CSS3")),r.a.createElement(g.a,{style:{color:"white",backgroundColor:"maroon"},animated:"fade"},r.a.createElement(g.a.Content,{visible:!0},r.a.createElement(v.a,{name:"python",size:"big"})),r.a.createElement(g.a.Content,{hidden:!0},"Python"))))}}];return r.a.createElement("div",{id:"Resume-container"},r.a.createElement(f.a,{className:"Resume-tabSpace",menu:{vertical:!0,fluid:!0},panes:e}))}}]),t}(n.Component)),k=(a(290),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).componentDidMount=function(){document.getElementsByName("portfolio")[0].classList.add("selected")},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Portfolio-header"},r.a.createElement("h2",null,"Javascript projects"),r.a.createElement("h3",null,"Click on a project to view it!"),r.a.createElement("h4",null,"These projects were made utilizing Javascript's Document Object Model web API.")),r.a.createElement("ul",{className:"Portfolio-projects"},r.a.createElement(h,{link:"https://robsp3ars.gitlab.io/connectFour",projectName:"Connect Four",description:"Take turns with a friend playing the tic-tac-toe style game."}),r.a.createElement(h,{link:"https://robsp3ars.gitlab.io/sokoban",projectName:"Jedi Sokoban",description:"Move Yoda across the puzzle board and put the rocks back in their place."}),r.a.createElement(h,{link:"https://robsp3ars.gitlab.io/wordSearch",projectName:"Premier League Word Search",description:"A simple word search that hides the names of 3 English Premier League clubs in a 10x10 grid."}),r.a.createElement(h,{link:"https://robsp3ars.gitlab.io/towerOfHanoi",projectName:"Tower of Hanoi",description:"Strategically place disks on top of one another and move them between 3 pegs in the least possible number of moves."}),r.a.createElement(h,{link:"https://robsp3ars.gitlab.io/photosFromHere",projectName:"Photos From Here",description:"Pick a location or use your own and search for photos on Flickr."})),r.a.createElement("div",{className:"Portfolio-header"},r.a.createElement("h4",null,"These projects were made using the React framework and Redux application state management.")),r.a.createElement("ul",{className:"Portfolio-projects"},r.a.createElement(h,{link:"https://ty914.gitlab.io/assessment---kwitter-frontend/",projectName:"Twitter Clone",description:"Mock social networking platform"}),r.a.createElement(h,{link:"http://make-shift.herokuapp.com/",projectName:"MakeShift 3D Print Catalog",description:"Front-end foundation for a 3D print catalog"}),r.a.createElement(h,{link:"https://github.com/forty9unbeaten/makeShiftAPI",projectName:"MakeShift 3D Print Catalog Server-Side",description:"API documentation and Node.js server tailored for a 3D print catalog"})))}}]),t}(n.Component)),C=(a(291),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).componentDidMount=function(){document.getElementsByName("contact")[0].classList.add("selected")},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"Contact-social"},r.a.createElement("a",{href:"https://www.linkedin.com/in/robsp3ars",alt:"LinkedIn",title:"LinkedIn"},r.a.createElement(v.a,{name:"linkedin",size:"huge",className:"socialIcon"})),r.a.createElement("a",{href:"https://www.gitlab.com/robsp3ars",alt:"GitLab",title:"GitLab"},r.a.createElement(v.a,{name:"gitlab",size:"huge",className:"socialIcon"})),r.a.createElement("a",{href:"https://github.com/forty9unbeaten",alt:"GitHub",title:"GitHub"},r.a.createElement(v.a,{name:"github",size:"huge",className:"socialIcon"}))),r.a.createElement("p",{id:"Contact-phone",alt:"3179419088",title:"Phone: (317) 941-9088"},"Phone: (317) 941-9088"),r.a.createElement("p",{id:"Contact-email"},"Send an email to Rob at"," ",r.a.createElement("a",{href:"mailto: rob.sp3ars@gmail.com"},"rob.sp3ars@gmail.com")))}}]),t}(n.Component)),j=(a(292),[{path:"/",component:b},{path:"/resume",component:y},{path:"/port",component:k},{path:"/contact",component:C},{path:"*",component:function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"NotFound-container"},r.a.createElement("h1",null,"404 / Not Found"),r.a.createElement("h2",null,"Oops! Looks like that page doesn't exist"))}}]),t}(n.Component)}]),w=(a(293),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Rob Spears"),r.a.createElement(d.a,null,r.a.createElement(p,null),r.a.createElement("div",{id:"App-container"},r.a.createElement(E.c,null,j.map((function(e){return r.a.createElement(E.a,{key:e.component.toString(),exact:!0,path:e.path,component:e.component})}))))))}}]),t}(n.Component));o.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[147,1,2]]]);
//# sourceMappingURL=main.312780bd.chunk.js.map