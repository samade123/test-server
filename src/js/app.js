
window.Vue = require('vue');

//pull in all vue components
require('./components');

var architect = require('projecthub').Tools.Architect;
window.Architect = new architect();
var parse = require('url-parse');

if(!window.Site){
	console.warn("Site Object Not Detected! - Injecting test object")
	window.Site = require("./testing/site");
}

if(Site.architect){
    // console.log("Architect", JSON.stringify(Site.architect));
    Architect.buildStructure(Site.architect);
}

//instantiate page vue
var app = new Vue({
    el: 'main',
    data:{
        site:window.Site,
        lang:window.Site.lang ? window.Site.lang.website : {},
        architect: Site.architect ? Architect.getStartingBlock() : {},
    },
    methods:{
        bindClickJourneyListener(){
            document.addEventListener("click", function(e){

                if(e.target.getAttribute("journey-type")){
                    var data = {
                        stage:"website",
                        type:e.target.getAttribute("journey-type"),
                    };

                    if(e.target.getAttribute("journey-action")){
                        data.action = e.target.getAttribute("journey-action");
                    }

                    if(e.target.getAttribute("journey-data")){
                        data.data = e.target.getAttribute("journey-data");
                    }
                    if(e.target.getAttribute("journey-script")){
                        data.script = e.target.getAttribute("journey-script");
                    }

                    Site.actions.journeyStep(data);
                }else if(e.target.tagName == "A" || e.target.parentNode.tagName == "A"){

                    var target = e.target.tagName == "A" ? e.target : e.target.parentNode;

                    var data = {
                        stage:"website",
                        type:"link",
                        data:target.getAttribute("href"),
                    };

                    if(target.getAttribute("journey-action")){
                        data.action = target.getAttribute("journey-action");
                    }

                    Site.actions.journeyStep(data);
                }
            });
        },
    },
    mounted(){
        this.bindClickJourneyListener();
    }
});

