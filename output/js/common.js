;(function(window, factory) {
  factory(window);
}(this, function(window) {

  /**
   * 动态更新导师姓名
   */
  var mentors = {
    mentor001: '嘉伟',
    mentor002: '茉言',
    mentor003: '沐兮',
    mentor004: '子叶',
    mentor005: '子淑',
    mentor006: '皓霖',
    mentor007: 'Hope',
    mentor008: '文筠',
    mentor009: '倾楚',
    mentor010: '谧沙',
    mentor011: '泊乔'
  };

  var updateMentorName = function(targetDom, mentorName) {
    targetDom.textContent = mentors[mentorName];
  };

  var getMentorName = (function() {
    let mentorsName = document.querySelectorAll('.mentorName');
    for (var i = 0, len = mentorsName.length; i < len; i++) {
      (function(mentorName) {
	var target = mentorName;
	var className = mentorName.className.split(' ').reverse()[0];
	updateMentorName(target, className);
      }(mentorsName[i]));
    }
  }());


  (function() {
    /* 右侧导航 */
    $(function() {
      // 悬浮窗口
      $(".yb_conct").hover(function() {
	$(".yb_conct").css("right", "0");
	$(".yb_bar .yb_ercode").css('height', '200px');

	// 返回顶部
	$(this).find(".yb_top").click(function () {
	  $("html,body").animate({
	    'scrollTop': '0px'
	  }, 300);
	});

      }, function() {
	$(".yb_conct").css("right", "-127px");
	$(".yb_bar .yb_ercode").css('height', '53px');
      });
    });

    function navJson() {
      // 获取二级菜单列表
      var navList = $(".nav .nav-block li");

      $.ajax({
	type: "GET",
	url: "../data/nav.json",
	success: function (data) {
	  var i = 0;
	  // 依次将获取到的对象的属性值插入到 li 元素中的 a 标签里
	  for (var titleName in data.navTitle) {
	    $(navList[i]).children("a").text(data.navTitle[titleName]);  // 通过方括号语法来访问对象的属性值
	    i++;
	  }
	}
      });
    }
    navJson();
  }());

}));
