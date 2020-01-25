<html>
<head>
<link href="StyleSheets/style.css" rel="stylesheet" type="text/css" >
<title>Feedback</title>
</head>
<body>
<center>
<h2>Feedback:</h2>
<form method="get" action="feedback.php">
<?php
$fileName = $_GET['feedbackFile'];
$dataToWrite = $_GET['comments'];
if (strlen($dataToWrite)>0){
	file_put_contents("Feedback/".$fileName, $dataToWrite);
}
echo "<h4>FileName: ".$fileName."</h4>\n";
$Contents = file_get_contents("Feedback/".$fileName);
echo "<input type=\"hidden\" name=\"feedbackFile\" value=\"".$fileName."\">\n";
if (strlen($Contents)==0)
{
echo "<h5>File Empty. Creating it.</h5>";
echo "<textarea name=\"comments\" rows=15 cols=40> </textarea><br/>\n";
}
else{
echo "<h5>File Exists. Showing Contents.</h5>\n";
echo "<textarea name=\"comments\" rows=\"15\" cols=\"40\">".$Contents."</textarea><br/>\n";
}
?>
<input type="submit">
</form>
</center>
</body>
</html>
