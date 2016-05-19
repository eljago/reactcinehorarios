function getBodyString(title, type, code) {
	const width = 280;
	const height = 180;
	const src = `http://www.youtube.com/embed/${code}`;
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
      </div>
		`
	);
};

export default function getHtmlString(title, type, code) {
	let bodyString = getBodyString(title, type, code);
	return(
		`
			<!DOCTYPE html>
			<html>
				<head>
					<title>Videos</title>
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
				<body>${bodyString}</body>
			</html>
		`
	);
};