var iframeClass = document.getElementsByTagName("iframe");
sizeTheFrames();
function sizeTheFrames() {
	for (var i = 0; i < iframeClass.length; i++) {
		// var x = document.getElementsByTagName("iframe").item(i);
		var x = document.getElementsByTagName("iframe").item(0);
		x.onload = function () {
			x.style.height = x.contentWindow.document.body.scrollHeight + 'px';
		}
	}
}
