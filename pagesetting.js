if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
    ret = confirm("スマホ機器を検知したため、専用ページへ移動します。よろしいですか？");
    if (ret == true){
    location.href = '/sp/index.html';
    
    }

    if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
        ret = confirm("スマホ機器を検知したため、専用ページへ移動します。よろしいですか？");
        if (ret == true){
          location.href = '/sp/index.html';
        }
    }

