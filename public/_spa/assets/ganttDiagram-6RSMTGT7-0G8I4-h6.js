import{a as e,n as t}from"./rolldown-runtime-Cyuzqnbw.js";import{qt as n}from"../i18n/i18n-zh-CN-CbR0_Rok.js";import{Mt as r,c as i,jt as a,l as o}from"../vendor/vendor-data-runtime-WZJuOlea.js";import{d as s,g as c,h as l,l as u,m as d,t as f,u as p}from"./src-BXj0J6Oe.js";import{U as m,W as h,a as g,c as _,j as v,q as y,s as b,v as x,w as S,x as C,y as w}from"./chunk-CSCIHK7Q-BYfwRIwK.js";import{Dn as T,Jt as E,Kt as D,Qt as O,Rt as k,Vn as ee,Vt as A,Wt as j,Xt as M,Yt as te,Zt as ne,ar as re,cn as ie,en as ae,in as oe,nn as se,on as ce,qt as le,rr as ue}from"./src-FQ4yNbur.js";import{t as de}from"./dist-BnFaJxVk.js";import{_ as fe,d as pe}from"./chunk-5ZQYHXKU-D_G8PkEz.js";function me(e,t,n){let r=!0;for(;r;)r=!1,n.forEach(function(n){let i=`^\\s*`+n+`\\s*$`,a=new RegExp(i);e[0].match(a)&&(t[n]=!0,e.shift(1),r=!0)})}var he,N,ge,_e,ve,P,ye,F,be,xe,I,L,R,z,B,V,H,U,W,G,Se,Ce,we,K,q,Te,Ee,J,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,et,tt,nt,rt,it,at,ot,st,Y,ct,lt,ut,X,Z,dt,ft,Q,pt,mt,ht,gt,_t,vt,yt,bt,xt,St,$,Ct,wt;t((()=>{pe(),v(),l(),he=de(),N=e(n(),1),ge=e(o(),1),_e=e(a(),1),ve=e(r(),1),P=e(n(),1),ye=e(i(),1),f(),F=(function(){var e=d(function(e,t,n,r){for(n||={},r=e.length;r--;n[e[r]]=t);return n},`o`),t=[6,8,10,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,29,30,31,33,35,36,38,40],n=[1,26],r=[1,27],i=[1,28],a=[1,29],o=[1,30],s=[1,31],c=[1,32],l=[1,33],u=[1,34],f=[1,9],p=[1,10],m=[1,11],h=[1,12],g=[1,13],_=[1,14],v=[1,15],y=[1,16],b=[1,19],x=[1,20],S=[1,21],C=[1,22],w=[1,23],T=[1,25],E=[1,35],D={trace:d(function(){},`trace`),yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,weekend:19,weekend_friday:20,weekend_saturday:21,dateFormat:22,inclusiveEndDates:23,topAxis:24,axisFormat:25,tickInterval:26,excludes:27,includes:28,todayMarker:29,title:30,acc_title:31,acc_title_value:32,acc_descr:33,acc_descr_value:34,acc_descr_multiline_value:35,section:36,clickStatement:37,taskTxt:38,taskData:39,click:40,callbackname:41,callbackargs:42,href:43,clickStatementDebug:44,$accept:0,$end:1},terminals_:{2:`error`,4:`gantt`,6:`EOF`,8:`SPACE`,10:`NL`,12:`weekday_monday`,13:`weekday_tuesday`,14:`weekday_wednesday`,15:`weekday_thursday`,16:`weekday_friday`,17:`weekday_saturday`,18:`weekday_sunday`,20:`weekend_friday`,21:`weekend_saturday`,22:`dateFormat`,23:`inclusiveEndDates`,24:`topAxis`,25:`axisFormat`,26:`tickInterval`,27:`excludes`,28:`includes`,29:`todayMarker`,30:`title`,31:`acc_title`,32:`acc_title_value`,33:`acc_descr`,34:`acc_descr_value`,35:`acc_descr_multiline_value`,36:`section`,38:`taskTxt`,39:`taskData`,40:`click`,41:`callbackname`,42:`callbackargs`,43:`href`},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[19,1],[19,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[37,2],[37,3],[37,3],[37,4],[37,3],[37,4],[37,2],[44,2],[44,3],[44,3],[44,4],[44,3],[44,4],[44,2]],performAction:d(function(e,t,n,r,i,a,o){var s=a.length-1;switch(i){case 1:return a[s-1];case 2:this.$=[];break;case 3:a[s-1].push(a[s]),this.$=a[s-1];break;case 4:case 5:this.$=a[s];break;case 6:case 7:this.$=[];break;case 8:r.setWeekday(`monday`);break;case 9:r.setWeekday(`tuesday`);break;case 10:r.setWeekday(`wednesday`);break;case 11:r.setWeekday(`thursday`);break;case 12:r.setWeekday(`friday`);break;case 13:r.setWeekday(`saturday`);break;case 14:r.setWeekday(`sunday`);break;case 15:r.setWeekend(`friday`);break;case 16:r.setWeekend(`saturday`);break;case 17:r.setDateFormat(a[s].substr(11)),this.$=a[s].substr(11);break;case 18:r.enableInclusiveEndDates(),this.$=a[s].substr(18);break;case 19:r.TopAxis(),this.$=a[s].substr(8);break;case 20:r.setAxisFormat(a[s].substr(11)),this.$=a[s].substr(11);break;case 21:r.setTickInterval(a[s].substr(13)),this.$=a[s].substr(13);break;case 22:r.setExcludes(a[s].substr(9)),this.$=a[s].substr(9);break;case 23:r.setIncludes(a[s].substr(9)),this.$=a[s].substr(9);break;case 24:r.setTodayMarker(a[s].substr(12)),this.$=a[s].substr(12);break;case 27:r.setDiagramTitle(a[s].substr(6)),this.$=a[s].substr(6);break;case 28:this.$=a[s].trim(),r.setAccTitle(this.$);break;case 29:case 30:this.$=a[s].trim(),r.setAccDescription(this.$);break;case 31:r.addSection(a[s].substr(8)),this.$=a[s].substr(8);break;case 33:r.addTask(a[s-1],a[s]),this.$=`task`;break;case 34:this.$=a[s-1],r.setClickEvent(a[s-1],a[s],null);break;case 35:this.$=a[s-2],r.setClickEvent(a[s-2],a[s-1],a[s]);break;case 36:this.$=a[s-2],r.setClickEvent(a[s-2],a[s-1],null),r.setLink(a[s-2],a[s]);break;case 37:this.$=a[s-3],r.setClickEvent(a[s-3],a[s-2],a[s-1]),r.setLink(a[s-3],a[s]);break;case 38:this.$=a[s-2],r.setClickEvent(a[s-2],a[s],null),r.setLink(a[s-2],a[s-1]);break;case 39:this.$=a[s-3],r.setClickEvent(a[s-3],a[s-1],a[s]),r.setLink(a[s-3],a[s-2]);break;case 40:this.$=a[s-1],r.setLink(a[s-1],a[s]);break;case 41:case 47:this.$=a[s-1]+` `+a[s];break;case 42:case 43:case 45:this.$=a[s-2]+` `+a[s-1]+` `+a[s];break;case 44:case 46:this.$=a[s-3]+` `+a[s-2]+` `+a[s-1]+` `+a[s];break}},`anonymous`),table:[{3:1,4:[1,2]},{1:[3]},e(t,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:n,13:r,14:i,15:a,16:o,17:s,18:c,19:18,20:l,21:u,22:f,23:p,24:m,25:h,26:g,27:_,28:v,29:y,30:b,31:x,33:S,35:C,36:w,37:24,38:T,40:E},e(t,[2,7],{1:[2,1]}),e(t,[2,3]),{9:36,11:17,12:n,13:r,14:i,15:a,16:o,17:s,18:c,19:18,20:l,21:u,22:f,23:p,24:m,25:h,26:g,27:_,28:v,29:y,30:b,31:x,33:S,35:C,36:w,37:24,38:T,40:E},e(t,[2,5]),e(t,[2,6]),e(t,[2,17]),e(t,[2,18]),e(t,[2,19]),e(t,[2,20]),e(t,[2,21]),e(t,[2,22]),e(t,[2,23]),e(t,[2,24]),e(t,[2,25]),e(t,[2,26]),e(t,[2,27]),{32:[1,37]},{34:[1,38]},e(t,[2,30]),e(t,[2,31]),e(t,[2,32]),{39:[1,39]},e(t,[2,8]),e(t,[2,9]),e(t,[2,10]),e(t,[2,11]),e(t,[2,12]),e(t,[2,13]),e(t,[2,14]),e(t,[2,15]),e(t,[2,16]),{41:[1,40],43:[1,41]},e(t,[2,4]),e(t,[2,28]),e(t,[2,29]),e(t,[2,33]),e(t,[2,34],{42:[1,42],43:[1,43]}),e(t,[2,40],{41:[1,44]}),e(t,[2,35],{43:[1,45]}),e(t,[2,36]),e(t,[2,38],{42:[1,46]}),e(t,[2,37]),e(t,[2,39])],defaultActions:{},parseError:d(function(e,t){if(t.recoverable)this.trace(e);else{var n=Error(e);throw n.hash=t,n}},`parseError`),parse:d(function(e){var t=this,n=[0],r=[],i=[null],a=[],o=this.table,s=``,c=0,l=0,u=0,f=2,p=1,m=a.slice.call(arguments,1),h=Object.create(this.lexer),g={yy:{}};for(var _ in this.yy)Object.prototype.hasOwnProperty.call(this.yy,_)&&(g.yy[_]=this.yy[_]);h.setInput(e,g.yy),g.yy.lexer=h,g.yy.parser=this,h.yylloc===void 0&&(h.yylloc={});var v=h.yylloc;a.push(v);var y=h.options&&h.options.ranges;typeof g.yy.parseError==`function`?this.parseError=g.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function b(e){n.length-=2*e,i.length-=e,a.length-=e}d(b,`popStack`);function x(){var e=r.pop()||h.lex()||p;return typeof e!=`number`&&(e instanceof Array&&(r=e,e=r.pop()),e=t.symbols_[e]||e),e}d(x,`lex`);for(var S,C,w,T,E,D={},O,k,ee,A;;){if(w=n[n.length-1],this.defaultActions[w]?T=this.defaultActions[w]:(S??=x(),T=o[w]&&o[w][S]),T===void 0||!T.length||!T[0]){var j=``;for(O in A=[],o[w])this.terminals_[O]&&O>f&&A.push(`'`+this.terminals_[O]+`'`);j=h.showPosition?`Parse error on line `+(c+1)+`:
`+h.showPosition()+`
Expecting `+A.join(`, `)+`, got '`+(this.terminals_[S]||S)+`'`:`Parse error on line `+(c+1)+`: Unexpected `+(S==p?`end of input`:`'`+(this.terminals_[S]||S)+`'`),this.parseError(j,{text:h.match,token:this.terminals_[S]||S,line:h.yylineno,loc:v,expected:A})}if(T[0]instanceof Array&&T.length>1)throw Error(`Parse Error: multiple actions possible at state: `+w+`, token: `+S);switch(T[0]){case 1:n.push(S),i.push(h.yytext),a.push(h.yylloc),n.push(T[1]),S=null,C?(S=C,C=null):(l=h.yyleng,s=h.yytext,c=h.yylineno,v=h.yylloc,u>0&&u--);break;case 2:if(k=this.productions_[T[1]][1],D.$=i[i.length-k],D._$={first_line:a[a.length-(k||1)].first_line,last_line:a[a.length-1].last_line,first_column:a[a.length-(k||1)].first_column,last_column:a[a.length-1].last_column},y&&(D._$.range=[a[a.length-(k||1)].range[0],a[a.length-1].range[1]]),E=this.performAction.apply(D,[s,l,c,g.yy,T[1],i,a].concat(m)),E!==void 0)return E;k&&(n=n.slice(0,-1*k*2),i=i.slice(0,-1*k),a=a.slice(0,-1*k)),n.push(this.productions_[T[1]][0]),i.push(D.$),a.push(D._$),ee=o[n[n.length-2]][n[n.length-1]],n.push(ee);break;case 3:return!0}}return!0},`parse`)};D.lexer=(function(){return{EOF:1,parseError:d(function(e,t){if(this.yy.parser)this.yy.parser.parseError(e,t);else throw Error(e)},`parseError`),setInput:d(function(e,t){return this.yy=t||this.yy||{},this._input=e,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match=``,this.conditionStack=[`INITIAL`],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},`setInput`),input:d(function(){var e=this._input[0];return this.yytext+=e,this.yyleng++,this.offset++,this.match+=e,this.matched+=e,e.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),e},`input`),unput:d(function(e){var t=e.length,n=e.split(/(?:\r\n?|\n)/g);this._input=e+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-t),this.offset-=t;var r=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var i=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===r.length?this.yylloc.first_column:0)+r[r.length-n.length].length-n[0].length:this.yylloc.first_column-t},this.options.ranges&&(this.yylloc.range=[i[0],i[0]+this.yyleng-t]),this.yyleng=this.yytext.length,this},`unput`),more:d(function(){return this._more=!0,this},`more`),reject:d(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError(`Lexical error on line `+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:``,token:null,line:this.yylineno});return this},`reject`),less:d(function(e){this.unput(this.match.slice(e))},`less`),pastInput:d(function(){var e=this.matched.substr(0,this.matched.length-this.match.length);return(e.length>20?`...`:``)+e.substr(-20).replace(/\n/g,``)},`pastInput`),upcomingInput:d(function(){var e=this.match;return e.length<20&&(e+=this._input.substr(0,20-e.length)),(e.substr(0,20)+(e.length>20?`...`:``)).replace(/\n/g,``)},`upcomingInput`),showPosition:d(function(){var e=this.pastInput(),t=Array(e.length+1).join(`-`);return e+this.upcomingInput()+`
`+t+`^`},`showPosition`),test_match:d(function(e,t){var n,r,i;if(this.options.backtrack_lexer&&(i={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(i.yylloc.range=this.yylloc.range.slice(0))),r=e[0].match(/(?:\r\n?|\n).*/g),r&&(this.yylineno+=r.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:r?r[r.length-1].length-r[r.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+e[0].length},this.yytext+=e[0],this.match+=e[0],this.matches=e,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(e[0].length),this.matched+=e[0],n=this.performAction.call(this,this.yy,this,t,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var a in i)this[a]=i[a];return!1}return!1},`test_match`),next:d(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var e,t,n,r;this._more||(this.yytext=``,this.match=``);for(var i=this._currentRules(),a=0;a<i.length;a++)if(n=this._input.match(this.rules[i[a]]),n&&(!t||n[0].length>t[0].length)){if(t=n,r=a,this.options.backtrack_lexer){if(e=this.test_match(n,i[a]),e!==!1)return e;if(this._backtrack){t=!1;continue}else return!1}else if(!this.options.flex)break}return t?(e=this.test_match(t,i[r]),e===!1?!1:e):this._input===``?this.EOF:this.parseError(`Lexical error on line `+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:``,token:null,line:this.yylineno})},`next`),lex:d(function(){return this.next()||this.lex()},`lex`),begin:d(function(e){this.conditionStack.push(e)},`begin`),popState:d(function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},`popState`),_currentRules:d(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},`_currentRules`),topState:d(function(e){return e=this.conditionStack.length-1-Math.abs(e||0),e>=0?this.conditionStack[e]:`INITIAL`},`topState`),pushState:d(function(e){this.begin(e)},`pushState`),stateStackSize:d(function(){return this.conditionStack.length},`stateStackSize`),options:{"case-insensitive":!0},performAction:d(function(e,t,n,r){switch(n){case 0:return this.begin(`open_directive`),`open_directive`;case 1:return this.begin(`acc_title`),31;case 2:return this.popState(),`acc_title_value`;case 3:return this.begin(`acc_descr`),33;case 4:return this.popState(),`acc_descr_value`;case 5:this.begin(`acc_descr_multiline`);break;case 6:this.popState();break;case 7:return`acc_descr_multiline_value`;case 8:break;case 9:break;case 10:break;case 11:return 10;case 12:break;case 13:break;case 14:this.begin(`href`);break;case 15:this.popState();break;case 16:return 43;case 17:this.begin(`callbackname`);break;case 18:this.popState();break;case 19:this.popState(),this.begin(`callbackargs`);break;case 20:return 41;case 21:this.popState();break;case 22:return 42;case 23:this.begin(`click`);break;case 24:this.popState();break;case 25:return 40;case 26:return 4;case 27:return 22;case 28:return 23;case 29:return 24;case 30:return 25;case 31:return 26;case 32:return 28;case 33:return 27;case 34:return 29;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return 20;case 43:return 21;case 44:return`date`;case 45:return 30;case 46:return`accDescription`;case 47:return 36;case 48:return 38;case 49:return 39;case 50:return`:`;case 51:return 6;case 52:return`INVALID`}},`anonymous`),rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:weekend\s+friday\b)/i,/^(?:weekend\s+saturday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],inclusive:!0}}}})();function O(){this.yy={}}return d(O,`Parser`),O.prototype=D,D.Parser=O,new O})(),F.parser=F,be=F,N.default.extend(ge.default),N.default.extend(_e.default),N.default.extend(ve.default),xe={friday:5,saturday:6},I=``,L=``,R=void 0,z=``,B=[],V=[],H=new Map,U=[],W=[],G=``,Se=``,Ce=[`active`,`done`,`crit`,`milestone`,`vert`],we=[],K=``,q=!1,Te=!1,Ee=`sunday`,J=`saturday`,De=0,Oe=d(function(){U=[],W=[],G=``,we=[],st=0,ut=void 0,X=void 0,Z=[],I=``,L=``,Se=``,R=void 0,z=``,B=[],V=[],q=!1,Te=!1,De=0,H=new Map,K=``,g(),Ee=`sunday`,J=`saturday`},`clear`),ke=d(function(e){K=e},`setDiagramId`),Ae=d(function(e){L=e},`setAxisFormat`),je=d(function(){return L},`getAxisFormat`),Me=d(function(e){R=e},`setTickInterval`),Ne=d(function(){return R},`getTickInterval`),Pe=d(function(e){z=e},`setTodayMarker`),Fe=d(function(){return z},`getTodayMarker`),Ie=d(function(e){I=e},`setDateFormat`),Le=d(function(){q=!0},`enableInclusiveEndDates`),Re=d(function(){return q},`endDatesAreInclusive`),ze=d(function(){Te=!0},`enableTopAxis`),Be=d(function(){return Te},`topAxisEnabled`),Ve=d(function(e){Se=e},`setDisplayMode`),He=d(function(){return Se},`getDisplayMode`),Ue=d(function(){return I},`getDateFormat`),We=d(function(e){B=e.toLowerCase().split(/[\s,]+/)},`setIncludes`),Ge=d(function(){return B},`getIncludes`),Ke=d(function(e){V=e.toLowerCase().split(/[\s,]+/)},`setExcludes`),qe=d(function(){return V},`getExcludes`),Je=d(function(){return H},`getLinks`),Ye=d(function(e){G=e,U.push(e)},`addSection`),Xe=d(function(){return U},`getSections`),Ze=d(function(){let e=mt(),t=0;for(;!e&&t<10;)e=mt(),t++;return W=Z,W},`getTasks`),Qe=d(function(e,t,n,r){let i=e.format(t.trim()),a=e.format(`YYYY-MM-DD`);return r.includes(i)||r.includes(a)?!1:n.includes(`weekends`)&&(e.isoWeekday()===xe[J]||e.isoWeekday()===xe[J]+1)||n.includes(e.format(`dddd`).toLowerCase())?!0:n.includes(i)||n.includes(a)},`isInvalidDate`),$e=d(function(e){Ee=e},`setWeekday`),et=d(function(){return Ee},`getWeekday`),tt=d(function(e){J=e},`setWeekend`),nt=d(function(e,t,n,r){if(!n.length||e.manualEndTime)return;let i;i=e.startTime instanceof Date?(0,N.default)(e.startTime):(0,N.default)(e.startTime,t,!0),i=i.add(1,`d`);let a;a=e.endTime instanceof Date?(0,N.default)(e.endTime):(0,N.default)(e.endTime,t,!0);let[o,s]=rt(i,a,t,n,r);e.endTime=o.toDate(),e.renderEndTime=s},`checkTaskDates`),rt=d(function(e,t,n,r,i){let a=!1,o=null,s=t.add(1e4,`d`);for(;e<=t;){if(a||(o=t.toDate()),a=Qe(e,n,r,i),a&&(t=t.add(1,`d`),t>s))throw Error("Failed to find a valid date that was not excluded by `excludes` after 10,000 iterations.");e=e.add(1,`d`)}return[t,o]},`fixTaskDates`),it=d(function(e,t,n){if(n=n.trim(),d(e=>{let t=e.trim();return t===`x`||t===`X`},`isTimestampFormat`)(t)&&/^\d+$/.test(n))return new Date(Number(n));let r=/^after\s+(?<ids>[\d\w- ]+)/.exec(n);if(r!==null){let e=null;for(let t of r.groups.ids.split(` `)){let n=Q(t);n!==void 0&&(!e||n.endTime>e.endTime)&&(e=n)}if(e)return e.endTime;let t=new Date;return t.setHours(0,0,0,0),t}let i=(0,N.default)(n,t.trim(),!0);if(i.isValid())return i.toDate();{c.debug(`Invalid date:`+n),c.debug(`With date format:`+t.trim());let e=new Date(n);if(e===void 0||isNaN(e.getTime())||e.getFullYear()<-1e4||e.getFullYear()>1e4)throw Error(`Invalid date:`+n);return e}},`getStartDate`),at=d(function(e){let t=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(e.trim());return t===null?[NaN,`ms`]:[Number.parseFloat(t[1]),t[2]]},`parseDuration`),ot=d(function(e,t,n,r=!1){n=n.trim();let i=/^until\s+(?<ids>[\d\w- ]+)/.exec(n);if(i!==null){let e=null;for(let t of i.groups.ids.split(` `)){let n=Q(t);n!==void 0&&(!e||n.startTime<e.startTime)&&(e=n)}if(e)return e.startTime;let t=new Date;return t.setHours(0,0,0,0),t}let a=(0,N.default)(n,t.trim(),!0);if(a.isValid())return r&&(a=a.add(1,`d`)),a.toDate();let o=(0,N.default)(e),[s,c]=at(n);if(!Number.isNaN(s)){let e=o.add(s,c);e.isValid()&&(o=e)}return o.toDate()},`getEndDate`),st=0,Y=d(function(e){return e===void 0?(st+=1,`task`+st):e},`parseId`),ct=d(function(e,t){let n;n=t.substr(0,1)===`:`?t.substr(1,t.length):t;let r=n.split(`,`),i={};me(r,i,Ce);for(let e=0;e<r.length;e++)r[e]=r[e].trim();let a=``;switch(r.length){case 1:i.id=Y(),i.startTime=e.endTime,a=r[0];break;case 2:i.id=Y(),i.startTime=it(void 0,I,r[0]),a=r[1];break;case 3:i.id=Y(r[0]),i.startTime=it(void 0,I,r[1]),a=r[2];break;default:}return a&&(i.endTime=ot(i.startTime,I,a,q),i.manualEndTime=(0,N.default)(a,`YYYY-MM-DD`,!0).isValid(),nt(i,I,V,B)),i},`compileData`),lt=d(function(e,t){let n;n=t.substr(0,1)===`:`?t.substr(1,t.length):t;let r=n.split(`,`),i={};me(r,i,Ce);for(let e=0;e<r.length;e++)r[e]=r[e].trim();switch(r.length){case 1:i.id=Y(),i.startTime={type:`prevTaskEnd`,id:e},i.endTime={data:r[0]};break;case 2:i.id=Y(),i.startTime={type:`getStartDate`,startData:r[0]},i.endTime={data:r[1]};break;case 3:i.id=Y(r[0]),i.startTime={type:`getStartDate`,startData:r[1]},i.endTime={data:r[2]};break;default:}return i},`parseData`),Z=[],dt={},ft=d(function(e,t){let n={section:G,type:G,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:t},task:e,classes:[]},r=lt(X,t);n.raw.startTime=r.startTime,n.raw.endTime=r.endTime,n.id=r.id,n.prevTaskId=X,n.active=r.active,n.done=r.done,n.crit=r.crit,n.milestone=r.milestone,n.vert=r.vert,n.order=De,De++;let i=Z.push(n);X=n.id,dt[n.id]=i-1},`addTask`),Q=d(function(e){let t=dt[e];return Z[t]},`findTaskById`),pt=d(function(e,t){let n={section:G,type:G,description:e,task:e,classes:[]},r=ct(ut,t);n.startTime=r.startTime,n.endTime=r.endTime,n.id=r.id,n.active=r.active,n.done=r.done,n.crit=r.crit,n.milestone=r.milestone,n.vert=r.vert,ut=n,W.push(n)},`addTaskOrg`),mt=d(function(){let e=d(function(e){let t=Z[e],n=``;switch(Z[e].raw.startTime.type){case`prevTaskEnd`:t.startTime=Q(t.prevTaskId).endTime;break;case`getStartDate`:n=it(void 0,I,Z[e].raw.startTime.startData),n&&(Z[e].startTime=n);break}return Z[e].startTime&&(Z[e].endTime=ot(Z[e].startTime,I,Z[e].raw.endTime.data,q),Z[e].endTime&&(Z[e].processed=!0,Z[e].manualEndTime=(0,N.default)(Z[e].raw.endTime.data,`YYYY-MM-DD`,!0).isValid(),nt(Z[e],I,V,B))),Z[e].processed},`compileTask`),t=!0;for(let[n,r]of Z.entries())e(n),t&&=r.processed;return t},`compileTasks`),ht=d(function(e,t){let n=t;C().securityLevel!==`loose`&&(n=(0,he.sanitizeUrl)(t)),e.split(`,`).forEach(function(e){Q(e)!==void 0&&(vt(e,()=>{window.open(n,`_self`)}),H.set(e,n))}),gt(e,`clickable`)},`setLink`),gt=d(function(e,t){e.split(`,`).forEach(function(e){let n=Q(e);n!==void 0&&n.classes.push(t)})},`setClass`),_t=d(function(e,t,n){if(C().securityLevel!==`loose`||t===void 0)return;let r=[];if(typeof n==`string`){r=n.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let e=0;e<r.length;e++){let t=r[e].trim();t.startsWith(`"`)&&t.endsWith(`"`)&&(t=t.substr(1,t.length-2)),r[e]=t}}r.length===0&&r.push(e),Q(e)!==void 0&&vt(e,()=>{fe.runFunc(t,...r)})},`setClickFun`),vt=d(function(e,t){we.push(function(){let n=K?`${K}-${e}`:e,r=document.querySelector(`[id="${n}"]`);r!==null&&r.addEventListener(`click`,function(){t()})},function(){let n=K?`${K}-${e}`:e,r=document.querySelector(`[id="${n}-text"]`);r!==null&&r.addEventListener(`click`,function(){t()})})},`pushFun`),yt={getConfig:d(()=>C().gantt,`getConfig`),clear:Oe,setDateFormat:Ie,getDateFormat:Ue,enableInclusiveEndDates:Le,endDatesAreInclusive:Re,enableTopAxis:ze,topAxisEnabled:Be,setAxisFormat:Ae,getAxisFormat:je,setTickInterval:Me,getTickInterval:Ne,setTodayMarker:Pe,getTodayMarker:Fe,setAccTitle:h,getAccTitle:w,setDiagramTitle:y,getDiagramTitle:S,setDiagramId:ke,setDisplayMode:Ve,getDisplayMode:He,setAccDescription:m,getAccDescription:x,addSection:Ye,getSections:Xe,getTasks:Ze,addTask:ft,findTaskById:Q,addTaskOrg:pt,setIncludes:We,getIncludes:Ge,setExcludes:Ke,getExcludes:qe,setClickEvent:d(function(e,t,n){e.split(`,`).forEach(function(e){_t(e,t,n)}),gt(e,`clickable`)},`setClickEvent`),setLink:ht,getLinks:Je,bindFunctions:d(function(e){we.forEach(function(t){t(e)})},`bindFunctions`),parseDuration:at,isInvalidDate:Qe,setWeekday:$e,getWeekday:et,setWeekend:tt},d(me,`getTaskTags`),P.default.extend(ye.default),bt=d(function(){c.debug(`Something is calling, setConf, remove the call`)},`setConf`),xt={monday:le,tuesday:ne,wednesday:O,thursday:M,friday:D,saturday:E,sunday:te},St=d((e,t)=>{let n=[...e].map(()=>-1/0),r=[...e].sort((e,t)=>e.startTime-t.startTime||e.order-t.order),i=0;for(let e of r)for(let r=0;r<n.length;r++)if(e.startTime>=n[r]){n[r]=e.endTime,e.order=r+t,r>i&&(i=r);break}return i},`getMaxIntersections`),Ct=1e4,wt={parser:be,db:yt,renderer:{setConf:bt,draw:d(function(e,t,n,r){let i=C().gantt;r.db.setDiagramId(t);let a=C().securityLevel,o;a===`sandbox`&&(o=u(`#i`+t));let l=u(a===`sandbox`?o.nodes()[0].contentDocument.body:`body`),f=a===`sandbox`?o.nodes()[0].contentDocument:document,m=f.getElementById(t);$=m.parentElement.offsetWidth,$===void 0&&($=1200),i.useWidth!==void 0&&($=i.useWidth);let h=r.db.getTasks(),g=[];for(let e of h)g.push(e.type);g=de(g);let v={},y=2*i.topPadding;if(r.db.getDisplayMode()===`compact`||i.displayMode===`compact`){let e={};for(let t of h)e[t.section]===void 0?e[t.section]=[t]:e[t.section].push(t);let t=0;for(let n of Object.keys(e)){let r=St(e[n],t)+1;t+=r,y+=r*(i.barHeight+i.barGap),v[n]=r}}else{y+=h.length*(i.barHeight+i.barGap);for(let e of g)v[e]=h.filter(t=>t.type===e).length}m.setAttribute(`viewBox`,`0 0 `+$+` `+y);let x=l.select(`[id="${t}"]`),S=k().domain([ue(h,function(e){return e.startTime}),re(h,function(e){return e.endTime})]).rangeRound([0,$-i.leftPadding-i.rightPadding]);function w(e,t){let n=e.startTime,r=t.startTime,i=0;return n>r?i=1:n<r&&(i=-1),i}d(w,`taskCompare`),h.sort(w),E(h,$,y),_(x,y,$,i.useMaxWidth),x.append(`text`).text(r.db.getDiagramTitle()).attr(`x`,$/2).attr(`y`,i.titleTopMargin).attr(`class`,`titleText`);function E(e,t,n){let a=i.barHeight,o=a+i.barGap,s=i.topPadding,c=i.leftPadding,l=T().domain([0,g.length]).range([`#00B9FA`,`#F95002`]).interpolate(ee);O(o,s,c,t,n,e,r.db.getExcludes(),r.db.getIncludes()),te(c,s,t,n),D(e,o,s,c,a,l,t,n),ne(o,s,c,a,l),le(c,s,t,n)}d(E,`makeGantt`);function D(e,n,a,o,s,c,l){e.sort((e,t)=>e.vert===t.vert?0:e.vert?1:-1);let d=[...new Set(e.map(e=>e.order))].map(t=>e.find(e=>e.order===t));x.append(`g`).selectAll(`rect`).data(d).enter().append(`rect`).attr(`x`,0).attr(`y`,function(e,t){return t=e.order,t*n+a-2}).attr(`width`,function(){return l-i.rightPadding/2}).attr(`height`,n).attr(`class`,function(e){for(let[t,n]of g.entries())if(e.type===n)return`section section`+t%i.numberSectionStyles;return`section section0`}).enter();let f=x.append(`g`).selectAll(`rect`).data(e).enter(),p=r.db.getLinks();if(f.append(`rect`).attr(`id`,function(e){return t+`-`+e.id}).attr(`rx`,3).attr(`ry`,3).attr(`x`,function(e){return e.milestone?S(e.startTime)+o+.5*(S(e.endTime)-S(e.startTime))-.5*s:S(e.startTime)+o}).attr(`y`,function(e,t){return t=e.order,e.vert?i.gridLineStartPadding:t*n+a}).attr(`width`,function(e){return e.milestone?s:e.vert?.08*s:S(e.renderEndTime||e.endTime)-S(e.startTime)}).attr(`height`,function(e){return e.vert?h.length*(i.barHeight+i.barGap)+i.barHeight*2:s}).attr(`transform-origin`,function(e,t){return t=e.order,(S(e.startTime)+o+.5*(S(e.endTime)-S(e.startTime))).toString()+`px `+(t*n+a+.5*s).toString()+`px`}).attr(`class`,function(e){let t=``;e.classes.length>0&&(t=e.classes.join(` `));let n=0;for(let[t,r]of g.entries())e.type===r&&(n=t%i.numberSectionStyles);let r=``;return e.active?e.crit?r+=` activeCrit`:r=` active`:e.done?r=e.crit?` doneCrit`:` done`:e.crit&&(r+=` crit`),r.length===0&&(r=` task`),e.milestone&&(r=` milestone `+r),e.vert&&(r=` vert `+r),r+=n,r+=` `+t,`task`+r}),f.append(`text`).attr(`id`,function(e){return t+`-`+e.id+`-text`}).text(function(e){return e.task}).attr(`font-size`,i.fontSize).attr(`x`,function(e){let t=S(e.startTime),n=S(e.renderEndTime||e.endTime);if(e.milestone&&(t+=.5*(S(e.endTime)-S(e.startTime))-.5*s,n=t+s),e.vert)return S(e.startTime)+o;let r=this.getBBox().width;return r>n-t?n+r+1.5*i.leftPadding>l?t+o-5:n+o+5:(n-t)/2+t+o}).attr(`y`,function(e,t){return e.vert?i.gridLineStartPadding+h.length*(i.barHeight+i.barGap)+60:(t=e.order,t*n+i.barHeight/2+(i.fontSize/2-2)+a)}).attr(`text-height`,s).attr(`class`,function(e){let t=S(e.startTime),n=S(e.endTime);e.milestone&&(n=t+s);let r=this.getBBox().width,a=``;e.classes.length>0&&(a=e.classes.join(` `));let o=0;for(let[t,n]of g.entries())e.type===n&&(o=t%i.numberSectionStyles);let c=``;return e.active&&(c=e.crit?`activeCritText`+o:`activeText`+o),e.done?c=e.crit?c+` doneCritText`+o:c+` doneText`+o:e.crit&&(c=c+` critText`+o),e.milestone&&(c+=` milestoneText`),e.vert&&(c+=` vertText`),r>n-t?n+r+1.5*i.leftPadding>l?a+` taskTextOutsideLeft taskTextOutside`+o+` `+c:a+` taskTextOutsideRight taskTextOutside`+o+` `+c+` width-`+r:a+` taskText taskText`+o+` `+c+` width-`+r}),C().securityLevel===`sandbox`){let e;e=u(`#i`+t);let n=e.nodes()[0].contentDocument;f.filter(function(e){return p.has(e.id)}).each(function(e){var r=n.querySelector(`#`+CSS.escape(t+`-`+e.id)),i=n.querySelector(`#`+CSS.escape(t+`-`+e.id+`-text`));let a=r.parentNode;var o=n.createElement(`a`);o.setAttribute(`xlink:href`,p.get(e.id)),o.setAttribute(`target`,`_top`),a.appendChild(o),o.appendChild(r),o.appendChild(i)})}}d(D,`drawRects`);function O(e,n,a,o,s,l,u,d){if(u.length===0&&d.length===0)return;let f,p;for(let{startTime:e,endTime:t}of l)(f===void 0||e<f)&&(f=e),(p===void 0||t>p)&&(p=t);if(!f||!p)return;if((0,P.default)(p).diff((0,P.default)(f),`year`)>5){c.warn(`The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.`);return}let m=r.db.getDateFormat(),h=[],g=null,_=(0,P.default)(f);for(;_.valueOf()<=p;)r.db.isInvalidDate(_,m,u,d)?g?g.end=_:g={start:_,end:_}:g&&=(h.push(g),null),_=_.add(1,`d`);x.append(`g`).selectAll(`rect`).data(h).enter().append(`rect`).attr(`id`,e=>t+`-exclude-`+e.start.format(`YYYY-MM-DD`)).attr(`x`,e=>S(e.start.startOf(`day`))+a).attr(`y`,i.gridLineStartPadding).attr(`width`,e=>S(e.end.endOf(`day`))-S(e.start.startOf(`day`))).attr(`height`,s-n-i.gridLineStartPadding).attr(`transform-origin`,function(t,n){return(S(t.start)+a+.5*(S(t.end)-S(t.start))).toString()+`px `+(n*e+.5*s).toString()+`px`}).attr(`class`,`exclude-range`)}d(O,`drawExcludeDays`);function M(e,t,n,r){if(n<=0||e>t)return 1/0;let i=t-e,a=P.default.duration({[r??`day`]:n}).asMilliseconds();return a<=0?1/0:Math.ceil(i/a)}d(M,`getEstimatedTickCount`);function te(e,t,n,a){let o=r.db.getDateFormat(),l=r.db.getAxisFormat(),u;u=l||(o===`D`?`%d`:i.axisFormat??`%Y-%m-%d`);let d=p(S).tickSize(-a+t+i.gridLineStartPadding).tickFormat(A(u)),f=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(r.db.getTickInterval()||i.tickInterval);if(f!==null){let e=parseInt(f[1],10);if(isNaN(e)||e<=0)c.warn(`Invalid tick interval value: "${f[1]}". Skipping custom tick interval.`);else{let t=f[2],n=r.db.getWeekday()||i.weekday,a=S.domain(),o=a[0],s=a[1],l=M(o,s,e,t);if(l>Ct)c.warn(`The tick interval "${e}${t}" would generate ${l} ticks, which exceeds the maximum allowed (${Ct}). This may indicate an invalid date or time range. Skipping custom tick interval.`);else switch(t){case`millisecond`:d.ticks(ie.every(e));break;case`second`:d.ticks(ce.every(e));break;case`minute`:d.ticks(oe.every(e));break;case`hour`:d.ticks(se.every(e));break;case`day`:d.ticks(ae.every(e));break;case`week`:d.ticks(xt[n].every(e));break;case`month`:d.ticks(j.every(e));break}}}if(x.append(`g`).attr(`class`,`grid`).attr(`transform`,`translate(`+e+`, `+(a-50)+`)`).call(d).selectAll(`text`).style(`text-anchor`,`middle`).attr(`fill`,`#000`).attr(`stroke`,`none`).attr(`font-size`,10).attr(`dy`,`1em`),r.db.topAxisEnabled()||i.topAxis){let n=s(S).tickSize(-a+t+i.gridLineStartPadding).tickFormat(A(u));if(f!==null){let e=parseInt(f[1],10);if(isNaN(e)||e<=0)c.warn(`Invalid tick interval value: "${f[1]}". Skipping custom tick interval.`);else{let t=f[2],a=r.db.getWeekday()||i.weekday,o=S.domain(),s=o[0],c=o[1];if(M(s,c,e,t)<=Ct)switch(t){case`millisecond`:n.ticks(ie.every(e));break;case`second`:n.ticks(ce.every(e));break;case`minute`:n.ticks(oe.every(e));break;case`hour`:n.ticks(se.every(e));break;case`day`:n.ticks(ae.every(e));break;case`week`:n.ticks(xt[a].every(e));break;case`month`:n.ticks(j.every(e));break}}}x.append(`g`).attr(`class`,`grid`).attr(`transform`,`translate(`+e+`, `+t+`)`).call(n).selectAll(`text`).style(`text-anchor`,`middle`).attr(`fill`,`#000`).attr(`stroke`,`none`).attr(`font-size`,10)}}d(te,`makeGrid`);function ne(e,t){let n=0,r=Object.keys(v).map(e=>[e,v[e]]);x.append(`g`).selectAll(`text`).data(r).enter().append(function(e){let t=e[0].split(b.lineBreakRegex),n=-(t.length-1)/2,r=f.createElementNS(`http://www.w3.org/2000/svg`,`text`);r.setAttribute(`dy`,n+`em`);for(let[e,n]of t.entries()){let t=f.createElementNS(`http://www.w3.org/2000/svg`,`tspan`);t.setAttribute(`alignment-baseline`,`central`),t.setAttribute(`x`,`10`),e>0&&t.setAttribute(`dy`,`1em`),t.textContent=n,r.appendChild(t)}return r}).attr(`x`,10).attr(`y`,function(i,a){if(a>0)for(let o=0;o<a;o++)return n+=r[a-1][1],i[1]*e/2+n*e+t;else return i[1]*e/2+t}).attr(`font-size`,i.sectionFontSize).attr(`class`,function(e){for(let[t,n]of g.entries())if(e[0]===n)return`sectionTitle sectionTitle`+t%i.numberSectionStyles;return`sectionTitle`})}d(ne,`vertLabels`);function le(e,t,n,a){let o=r.db.getTodayMarker();if(o===`off`)return;let s=x.append(`g`).attr(`class`,`today`),c=new Date,l=s.append(`line`);l.attr(`x1`,S(c)+e).attr(`x2`,S(c)+e).attr(`y1`,i.titleTopMargin).attr(`y2`,a-i.titleTopMargin).attr(`class`,`today`),o!==``&&l.attr(`style`,o.replace(/,/g,`;`))}d(le,`drawToday`);function de(e){let t={},n=[];for(let r=0,i=e.length;r<i;++r)Object.prototype.hasOwnProperty.call(t,e[r])||(t[e[r]]=!0,n.push(e[r]));return n}d(de,`checkUnique`)},`draw`)},styles:d(e=>`
  .mermaid-main-font {
        font-family: ${e.fontFamily};
  }

  .exclude-range {
    fill: ${e.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${e.sectionBkgColor};
  }

  .section2 {
    fill: ${e.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${e.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${e.titleColor};
  }

  .sectionTitle1 {
    fill: ${e.titleColor};
  }

  .sectionTitle2 {
    fill: ${e.titleColor};
  }

  .sectionTitle3 {
    fill: ${e.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: ${e.fontFamily};
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${e.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${e.fontFamily};
    fill: ${e.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${e.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: ${e.fontFamily};
  }

  .taskTextOutsideRight {
    fill: ${e.taskTextDarkColor};
    text-anchor: start;
    font-family: ${e.fontFamily};
  }

  .taskTextOutsideLeft {
    fill: ${e.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${e.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${e.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${e.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${e.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${e.taskBkgColor};
    stroke: ${e.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${e.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${e.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${e.activeTaskBkgColor};
    stroke: ${e.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${e.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${e.doneTaskBorderColor};
    fill: ${e.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${e.taskTextDarkColor} !important;
  }

  /* Done task text displayed outside the bar sits against the diagram background,
     not against the done-task bar, so it must use the outside/contrast color. */
  .doneText0.taskTextOutsideLeft,
  .doneText0.taskTextOutsideRight,
  .doneText1.taskTextOutsideLeft,
  .doneText1.taskTextOutsideRight,
  .doneText2.taskTextOutsideLeft,
  .doneText2.taskTextOutsideRight,
  .doneText3.taskTextOutsideLeft,
  .doneText3.taskTextOutsideRight {
    fill: ${e.taskTextOutsideColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${e.critBorderColor};
    fill: ${e.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${e.critBorderColor};
    fill: ${e.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${e.critBorderColor};
    fill: ${e.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${e.taskTextDarkColor} !important;
  }

  /* Done-crit task text outside the bar \u2014 same reasoning as doneText above. */
  .doneCritText0.taskTextOutsideLeft,
  .doneCritText0.taskTextOutsideRight,
  .doneCritText1.taskTextOutsideLeft,
  .doneCritText1.taskTextOutsideRight,
  .doneCritText2.taskTextOutsideLeft,
  .doneCritText2.taskTextOutsideRight,
  .doneCritText3.taskTextOutsideLeft,
  .doneCritText3.taskTextOutsideRight {
    fill: ${e.taskTextOutsideColor} !important;
  }

  .vert {
    stroke: ${e.vertLineColor};
  }

  .vertText {
    font-size: 15px;
    text-anchor: middle;
    fill: ${e.vertLineColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${e.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.titleColor||e.textColor};
    font-family: ${e.fontFamily};
  }
`,`getStyles`)}}))();export{wt as diagram};