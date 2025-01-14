export default `<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, user-scalable=no, minimal-ui">
		<title>{{#resume.basics}}{{name}}{{/resume.basics}}</title>
		<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
		<style>
		{{{css}}}
		</style>
	</head>
	<body>

		<div class="container">
			<div class="row" id="resume">
				<div class="col-xs-4 sidebar">
					{{> photo }}
					{{> contact }}
					{{> education }}
					{{> skills }}
				</div>
				<div class="col-xs-8 content">
					{{> name }}
					{{> summary }}
					{{> work }}
					{{> volunteer }}
					{{> awards }}
					{{> publications }}
					{{> languages }}
					{{> interests }}
					{{> references }}
				</div>
		</div>

	</body>
</html>`;
