function getBodyString(title, type, code) {
	const width = 280;
	const height = 180;
	const src = `http://www.youtube.com/embed/${code}`;
	const src2 = `https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FCinemarkChile%2Fvideos%2F1358522824163642%2F&show_text=0&width=${width}`;
	return(
		`
      <div class="video">
	      <h4>${title}</h4>
	      <iframe
	      	src="${src}"
	      	width="${width}"
	      	height="${height}"
	      	frameborder="0"
	      	allowfullscreen
	      >
	      </iframe>
	      <iframe src="${src2}"
	      	width="${width}"
	      	height="${height}"
	      	style="border:none;overflow:hidden"
	      	scrolling="no"
	      	frameborder="0"
	      	allowTransparency="true"
	      	allowFullScreen="true">
	      </iframe>
      </div>
		`
	);
};

export default function getHtmlString(title, type, code) {
	let bodyString = getBodyString(title, type, code);
	return(
		`
			<!DOCTYPE html>\n
			<html>
				<head>
					<title>Videos</title>
					<meta http-equiv="content-type" content="text/html; charset=utf-8">
    			<meta name="viewport" content="width=320, user-scalable=no">
					<style type="text/css">
			      body {
							background-color: rgb(241, 234, 227);
							margin: 0px;
							padding: 0px;
						}
						h3 {
							font-family: "Helvetica Neue";
							font-weight: normal;
							color: rgb(168, 56, 48);
							margin-top: 0;
							margin-bottom: 5px;
						}
						h4 {
							font-family: "Helvetica Neue";
							font-weight: normal;
							margin-top: 0;
							margin-bottom: 10px;
						}
						div.video {
							background-color: white;
							margin: 10px;
							padding: 10px;
							padding-bottom: 7px;
							-moz-border-radius: 3px;
							border-radius: 3px;
							box-shadow: 0 0 10px #888888;
						}
						iframe { margin: 0; }
					</style>
				</head>
				<body>
					${bodyString}
				</body>
			</html>
		`
	);
};