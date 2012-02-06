;

$.expr[':'].icontains = function(obj, index, meta, stack){
  return (obj.textContent || obj.innerText || jQuery(obj).text() || '').toLowerCase().indexOf(meta[3].toLowerCase()) >= 0;
};

var delay = (function(){
  var timer = 0;
  return function(callback, ms){
    clearTimeout (timer);
    timer = setTimeout(callback, ms);
  };
})();

$(function(){
  $("#text-search")
  .keyup(function(){
    $("#drop-search1 option:eq(0), #drop-search2 option:eq(0)").attr("selected", true);
    delay(function(){
      $("#search-table .search-row:not(.search-header)").hide();
      $("#search-table .search-row:icontains('"+$("#text-search").val()+"')").fadeIn(500);
    },500);
  })
  .click(
    function(){
      $(this).attr("value","").keyup();
    }
  );
  $("#drop-search1, #drop-search2")
  .change(function(){
    $("#text-search").attr("value","");
    delay(function(){
      $("#search-table .search-row:not(.search-header)").hide();
      $("#search-table .search-row:icontains('"+$("#drop-search1").val()+"'):icontains('"+$("#drop-search2").val()+"')").fadeIn(500);
    },500);
  });
});
