/**
 * Created by smpower on 2017/8/17.
 */

function Ora() {

    // 生成二级导航菜单
    Ora.prototype.navList = function () {
        // 获取二级菜单列表
        var navList = $(".nav .nav-block li");
        $.ajax({
            type: "GET",
            url: "data/nav.json",
            success: function (data) {
                var i = 0;
                // 依次将获取到的对象的属性值插入到 li 元素中的 a 标签里
                for (var titleName in data) {
                    $(navList[i]).children("a").text(data[titleName]);  // 通过方括号语法来访问对象的属性值
                    i++;
                }
            }
        });
    };

}