var checkUser = (function () {
  var
    configMap = {
      info : {
        zongjian : {
          zhuguanmen : {
            zhuguan1: {
              daoshimen : {
                doahsi1: {
                  info: {},
                  yonghumen: {
                    yonghu1: {},
                    yonghu2: {}
                  }
                },
                doahsi2: {},
                doahsi3: {}
              },
              yonghumen : {
                yonghu1: {},
                yonghu2: {},
                yonghu3: {}
              }
            },

            主管1的用户： configMap.info.zongjian.zhuuguanmen.zhuguan1.yonghumen
            var key_name;
            for (key_name in configMap.info.zongjian.zhuuguanmen.zhuguan1.yonghumen) {
              console.log(configMap.info.zongjian.zhuuguanmen.zhuguan1.yonghumen[key_name]);
            }

            导师们的用户：
            var key_name;
            for (key_name in configMap.info.zongjian.zhuuguanmen.zhuguan1.daoshimen) {
              console.log(configMap.info.zongjian.zhuuguanmen.zhuguan1.daoshimen[key_name]);
            }

            zhuguan2: {}
          },
          yonghumen : {
            yonghu1: {
              username : 'xxxxx',
              id : 2
            },
            yonghu2: {},
            yonghu3: {},
            yonghu4: {}
          }
        }
      }
    },
    stateMap = { $container : null },
    jqueryMap = {},

    setJqueryMap, showMentor, showUsers, onClick, initModule;

  setJqueryMap = function () {
    var $container = stateMap.$container;

    jqueryMap = {
      $container : $container,
      $mentor : $container.find('.mentor span'),
      $user : $container.find('.user span'),
      $btn : $container.find('button')
    };
  };

  showUsers = function (user_id) {
    var key_name, key_value;

    for (key_name in configMap.info.users) {
      // console.log(configMap.info.users[key_name].daoshi_id);
      if (configMap.info.users[key_name].daoshi_id === user_id) {
        configMap.info.users.
      }
    }
  };

  showMentor = function () {
    jqueryMap.$mentor.text('zhangsan: ' + configMap.info.mentor.zhangsan.id);
    onClick();
  };

  onClick = function () {
    jqueryMap.$btn.click(function () {
      showUsers(configMap.info.mentor.zhangsan.id);
    });
  };

  initModule = function ($container) {
    stateMap.$container = $container;

    setJqueryMap();
    showMentor();
  };

  return { initModule : initModule };
}());
