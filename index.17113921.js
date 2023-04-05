function backToTop(){var o=this,n=$(".back-to-top");$(window).on("scroll",(function(){$(o).scrollTop()>=500?n.fadeIn():n.fadeOut()})),n.on("click",(function(o){o.preventDefaul(),$("html").animate({scrollTop:0},1e3)}))}backToTop();
//# sourceMappingURL=index.17113921.js.map
