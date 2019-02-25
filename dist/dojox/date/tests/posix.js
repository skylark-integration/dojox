/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.date.tests.posix"),dojo.require("dojox.date.posix"),tests.register("dojox.date.tests.posix",[{name:"dojox.date.tests.posix",setUp:function(){dojo.forEach(["en"],function(e){dojo.requireLocalization("dojo.cldr","gregorian",e)})},runTest:function(e){},tearDown:function(){}},{name:"strftime",runTest:function(e){var t=new Date(2006,7,11,0,55,12,3456);e.is("06/08/11",dojox.date.posix.strftime(t,"%y/%m/%d"));var o,s="",i="";o=new Date(2006,0,1,18,23),s="%a",i="Sun",e.is(i,dojox.date.posix.strftime(o,s,"en")),s="%A",i="Sunday",e.is(i,dojox.date.posix.strftime(o,s,"en")),s="%b",i="Jan",e.is(i,dojox.date.posix.strftime(o,s,"en")),s="%B",i="January",e.is(i,dojox.date.posix.strftime(o,s,"en")),s="%c",i="Sunday, January 1, 2006 6:23:00 PM",e.is(i,dojox.date.posix.strftime(o,s).substring(0,i.length)),s="%C",i="20",e.is(i,dojox.date.posix.strftime(o,s)),s="%d",i="01",e.is(i,dojox.date.posix.strftime(o,s)),s="%D",i="01/01/06",e.is(i,dojox.date.posix.strftime(o,s)),s="%e",i=" 1",e.is(i,dojox.date.posix.strftime(o,s)),s="%h",i="Jan",e.is(i,dojox.date.posix.strftime(o,s,"en")),s="%H",i="18",e.is(i,dojox.date.posix.strftime(o,s)),s="%I",i="06",e.is(i,dojox.date.posix.strftime(o,s)),s="%j",i="001",e.is(i,dojox.date.posix.strftime(o,s)),s="%k",i="18",e.is(i,dojox.date.posix.strftime(o,s)),s="%l",i=" 6",e.is(i,dojox.date.posix.strftime(o,s)),s="%m",i="01",e.is(i,dojox.date.posix.strftime(o,s)),s="%M",i="23",e.is(i,dojox.date.posix.strftime(o,s)),s="%p",i="PM",e.is(i,dojox.date.posix.strftime(o,s,"en")),s="%r",i="06:23:00 PM",e.is(i,dojox.date.posix.strftime(o,s,"en")),s="%R",i="18:23",e.is(i,dojox.date.posix.strftime(o,s)),s="%S",i="00",e.is(i,dojox.date.posix.strftime(o,s)),s="%T",i="18:23:00",e.is(i,dojox.date.posix.strftime(o,s)),s="%u",i="7",e.is(i,dojox.date.posix.strftime(o,s)),s="%w",i="0",e.is(i,dojox.date.posix.strftime(o,s)),s="%x",i="Sunday, January 1, 2006",e.is(i,dojox.date.posix.strftime(o,s,"en")),s="%X",i="6:23:00 PM",e.is(i,dojox.date.posix.strftime(o,s,"en").substring(0,i.length)),s="%y",i="06",e.is(i,dojox.date.posix.strftime(o,s)),s="%Y",i="2006",e.is(i,dojox.date.posix.strftime(o,s)),s="%%",i="%",e.is(i,dojox.date.posix.strftime(o,s))}},{name:"getStartOfWeek",runTest:function(e){var t,o=new Date(2007,0,1);t=dojox.date.posix.getStartOfWeek(new Date(2007,0,1),1),e.is(o,t),t=dojox.date.posix.getStartOfWeek(new Date(2007,0,2),1),e.is(o,t),t=dojox.date.posix.getStartOfWeek(new Date(2007,0,3),1),e.is(o,t),t=dojox.date.posix.getStartOfWeek(new Date(2007,0,4),1),e.is(o,t),t=dojox.date.posix.getStartOfWeek(new Date(2007,0,5),1),e.is(o,t),t=dojox.date.posix.getStartOfWeek(new Date(2007,0,6),1),e.is(o,t),t=dojox.date.posix.getStartOfWeek(new Date(2007,0,7),1),e.is(o,t),o=new Date(2007,0,7),t=dojox.date.posix.getStartOfWeek(new Date(2007,0,7),0),e.is(o,t),t=dojox.date.posix.getStartOfWeek(new Date(2007,0,8),0),e.is(o,t),t=dojox.date.posix.getStartOfWeek(new Date(2007,0,9),0),e.is(o,t),t=dojox.date.posix.getStartOfWeek(new Date(2007,0,10),0),e.is(o,t),t=dojox.date.posix.getStartOfWeek(new Date(2007,0,11),0),e.is(o,t),t=dojox.date.posix.getStartOfWeek(new Date(2007,0,12),0),e.is(o,t),t=dojox.date.posix.getStartOfWeek(new Date(2007,0,13),0),e.is(o,t)}},{name:"setIsoWeekOfYear",runTest:function(e){var t=new Date(2006,10,10),o=dojox.date.posix.setIsoWeekOfYear(t,1);e.is(new Date(2006,0,6),o),o=dojox.date.posix.setIsoWeekOfYear(t,10),o=dojox.date.posix.setIsoWeekOfYear(t,2),e.is(new Date(2006,0,13),o),o=dojox.date.posix.setIsoWeekOfYear(t,10),e.is(new Date(2006,2,10),o),o=dojox.date.posix.setIsoWeekOfYear(t,52),e.is(new Date(2006,11,29),o);o=dojox.date.posix.setIsoWeekOfYear(t,-1);e.is(new Date(2006,11,29),o);o=dojox.date.posix.setIsoWeekOfYear(t,-2);e.is(new Date(2006,11,22),o);o=dojox.date.posix.setIsoWeekOfYear(t,-10);e.is(new Date(2006,9,27),o),t=new Date(2004,10,10),o=dojox.date.posix.setIsoWeekOfYear(t,1),e.is(new Date(2003,11,31),o),o=dojox.date.posix.setIsoWeekOfYear(t,2),e.is(new Date(2004,0,7),o),o=dojox.date.posix.setIsoWeekOfYear(t,-1),e.is(new Date(2004,11,29),o)}},{name:"getIsoWeekOfYear",runTest:function(e){var t=dojox.date.posix.getIsoWeekOfYear(new Date(2006,0,1));e.is(52,t),t=dojox.date.posix.getIsoWeekOfYear(new Date(2006,0,4)),e.is(1,t),t=dojox.date.posix.getIsoWeekOfYear(new Date(2006,11,31)),e.is(52,t),t=dojox.date.posix.getIsoWeekOfYear(new Date(2007,0,1)),e.is(1,t),t=dojox.date.posix.getIsoWeekOfYear(new Date(2007,11,31)),e.is(53,t),t=dojox.date.posix.getIsoWeekOfYear(new Date(2008,0,1)),e.is(1,t),t=dojox.date.posix.getIsoWeekOfYear(new Date(2007,11,31)),e.is(53,t)}},{name:"getIsoWeeksInYear",runTest:function(e){var t,o,s,i=[4,9,15,20,26,32,37,43,48,54,60,65,71,76,82,88,93,99,105,111,116,122,128,133,139,144,150,156,161,167,172,178,184,189,195,201,207,212,218,224,229,235,240,246,252,257,263,268,274,280,285,291,296,303,308,314,320,325,331,336,342,348,353,359,364,370,376,381,387,392,398];for(t=0;t<400;t++)o=52,t==i[0]&&(o=53,i.shift()),s=dojox.date.posix.getIsoWeeksInYear(new Date(2e3+t,0,1)),e.is(o,s)}}]);
//# sourceMappingURL=../../sourcemaps/date/tests/posix.js.map