const mapData=[{lang:"en",map:{title:"AUTOMOTIVE VIRTUAL EXHIBITION",desc:"Take a walk through our virtual exhibition to see how rugged mobile solutions can drive a smarter approach throughout the Automotive value-chain."},unity:{popup:{userguideTitle:["Turn Around","Move"]}}},{lang:"es",map:{title:"ES AUTOMOTIVE VIRTUAL EXHIBITION",desc:"Take a walk through our virtual exhibition to see how rugged mobile solutions can drive a smarter approach throughout the Automotive value-chain."},unity:{popup:{userguideTitle:["ES Turn Around","Move Forward"]}}},{lang:"de",map:{title:"VIRTUELLE AUTOMOBIL-MESSE",desc:"Gehen Sie auf einen Rundgang durch unsere virtuelle Ausstellung und erfahren Sie, wie robuste mobile Lösungen einen intelligenteren Ansatz in der gesamten Wertschöpfungskette der Automobilbranche voranbringen können."},unity:{popup:{userguideTitle:["Umdrehen","Vorwärts gehen"]}}},{lang:"it",map:{title:"IT AUTOMOTIVE VIRTUAL EXHIBITION",desc:"Take a walk through our virtual exhibition to see how rugged mobile solutions can drive a smarter approach throughout the Automotive value-chain."},unity:{popup:{userguideTitle:["IT Turn Around","Move Forward"]}}},{lang:"fr",map:{title:"FR AUTOMOTIVE VIRTUAL EXHIBITION",desc:"Take a walk through our virtual exhibition to see how rugged mobile solutions can drive a smarter approach throughout the Automotive value-chain."},unity:{popup:{userguideTitle:["FR Turn Around","Move Forward"]}}}];function getParameterByName(e,n=window.location.href){e=e.replace(/[\[\]]/g,"\\$&");var t=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(n);return t?t[2]?decodeURIComponent(t[2].replace(/\+/g," ")):"":null}function findLangIndex(e){switch(e){case"de":e=1;break;default:e=0}return e}function MultiLanguage(){console.log((localStorage.getItem("lang"),localStorage.getItem("lang"))),unityInstance.SendMessage("Language_Manager","SendToUnity",localStorage.getItem("lang")?localStorage.getItem("lang"):"en"),unityInstance.SendMessage("Language_Manager","loadLanguage")}function isMobileDevice(){return["Android","webOS","iPhone","iPad","iPod","BlackBerry","Windows Phone"].some((e=>navigator.userAgent.match(e)))}