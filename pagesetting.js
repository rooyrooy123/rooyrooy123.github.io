var head = document.getElementsByTagName('head')
var script = document.createElement('script')
//ここで任意のjQueryを読み込ませる
script.setAttribute('src', 'https://code.jquery.com/jquery-1.12.4.min.js')
script.setAttribute('type', 'text/javascript')
script.addEventListener('load', function() {



(function () {

$(function(){

	//ルート直下で振り分ける場合
	var $root = '';

	//任意のディレクトリ内で振り分ける場合
	//var $root = '/xxx';

	var $pathName = location.pathname;
	var $pathNameSpDelete = $pathName.replace('/sp','');
	var $pathNameRootDelete = $pathName.replace($root,'');

	//URLに/sp/を検知した場合
	if ($pathName.indexOf('/sp/') != -1) {
	
		//ユーザーエージェントがSP時は何も処理しない
		if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || (navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') > 0)){
		}

		//ユーザーエージェントがPC時はPCページへリダイレクト
		else{
			location.href = $pathNameSpDelete;
		}
	}

	//URLに/sp/を検知しなかった場合
	else{
	
		//ユーザーエージェントがSP時はSPページへリダイレクト
		if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || (navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') > 0)){
			location.href = $root + '/sp' + $pathNameRootDelete;
		}

		//ユーザーエージェントがPC時は何も処理しない
		else{
		}
	}
    
});

})(jQuery);