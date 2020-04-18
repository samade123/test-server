<template>

    <article id="page-success" class="page">
        <styling :architect-starting-block="architect"></styling>
         <header v-if="architect" >
            <div class="header-title">
                <img :src="architect.data.icon ? architect.data.icon.split('|')[0] : null" style="width: 26px;" alt="">
                <span class="title" style="font-weight: bold; margin-left: 10px;">{{architect.data.title}}</span>
            </div>
        </header>
        
        <div id="main-content">
        </div>


    </article>
</template>
<script>

// import pdf from 'pdfvuer';

var parse = require('url-parse');

    export default {

        // components: {
		//     pdf,
	    // },
        data(){
            return {
                site:window.Site,
                lang:window.Site.lang ? window.Site.lang.website : {},
                architect: Site.architect ? Architect.getStartingBlock() : {},
                internal: window.location.hostname.includes("event.engineering"),
                search: "",
                // modal: Modal,
                installers: false,
                // architect: Architect,
                panels: [],
                pngAvailable: ["acc", "ae", "an", "avi", "bmp", "csv", "dat", "dgn", "dmg", "doc", "doch", "docm", "docx", "doth", "dw", "dwfx", "dwg", "dxf", "dxl", "eml", "eps", "exe", "f4a", "f4v", "flv", "fs", "gif", "google", "html", "Illustrator", "Indesign", "jpeg", "jpg", "jpp", "link", "log", "lr", "m4v", "mbox", "mdb", "midi", "mkv", "mov", "mp3", "mp4", "mpeg", "mpg", "mpp", "mpt", "mpw", "mpx", "msg", "ods", "oga", "ogg", "ogv", "one", "ost", "pdf", "php", "png", "pot", "poth", "potm", "potx", "pps", "ppsx", "ppt", "ppth", "pptm", "pptx", "prem", "ps", "psd", "pst", "pub", "pubh", "pubm", "pwz", "rp", "rtf", "sql", "svg", "swf", "tif", "tiff", "txt", "unknown", "url", "vcf", "vdx", "vob", "vsd", "vss", "vst", "vsx", "vtx", "wav", "wdp", "webm", "wma", "wmv", "xd", "xls", "xlsm", "xlsx", "xml", "zip",],
                images: ["bmp", "gif", "jpeg", "jpg", "jpp", "png", "svg", "tif", "tiff", "vob", "wav", "webm", "wma", "wmv",],
                videos: ["avi", "f4a", "f4v", "flv", "m4v", "mkv", "mov", "mp4", "mpeg", "mpg", "ogv", "swf", "vob", "wav", "webm", "wmv",],
                modal: false,
                pdf: {
                    page: 1,
                    editPage: false,
                    fullscreen: false,
                    scale: 0.65,
                    numPages: 0,
                    data: false,
		        },
            };
        },
        methods:{
        },
        created(){

        },
        mounted(){
        }
    }
</script>