
    if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
        var result = window.confirm('スマホ機器を検知しました。正しければ「OK」を押してROYParkourスマートフォン専用Webページに移動することを勧めます。');
    if( result ) {
        var $url = 'https://rooyrooy123.github.io';    /*GithubのURL */
        var $pathName = location.pathname; /*path取得して変数ぶっこむ*/
        var $pathNameremove = $pathName.replace($url,'') /*取得したpathからurl変数を消す*/
        location.href = $url + '/sp' + $pathNameremove; /*スマホ専用ROYPKサイトに振り分け*/
    }
    }
