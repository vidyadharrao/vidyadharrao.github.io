<html>
<head>
<link href="StyleSheets/style.css" rel="stylesheet" type="text/css">
<style>
#container{
position:relative;
left:0;top:0;
width:240;
height:180;
background:#ffffff;
overflow:hidden;
}
#image{
position:absolute;
left:0;
top:0;
height:100%;
width:100%;
z-index:1;
overflow:hidden;
}
#bbox{
position:absolute;
z-index:10;
}
#bbox table{
width:100%;
height:100%;
border-width:3px;
border-style:solid;
border-color:#ffff00;
}
#bbox td{
width:100%;
height:100%;
}
img{
display:block;
}
</style>
</head>
<body background="bg2.png">
<?php
function compareNames($a,$b){
$partsa=split(' ',$a);
$partsb=split(' ',$b);
return $partsa[6]>$partsb[6];
//return strcmp($partsa[0],$partsb[0]);
}
?>
<center>
<?php
$inputfile=$_GET["filename"];
$GTfile=$_GET["gt"];
$GT=file($GTfile);
$GT=array_map("trim",$GT);
$contents=file($inputfile);
$lines=count($contents);
$page=$_GET["pageno"];
if(!$page){$page=1;}
else if($page<=0)$page=1;
else if($page>$lines/25+1)$page=1;
$contents=array_slice($contents,($page-1)*25,25);

echo "<form action=\"Datasets.php\">";
printf("<input type=\"hidden\" name=\"filename\" value=\"%s\">",$inputfile);
if(strlen($GTfile))printf("<input type=\"hidden\" name=\"gt\" value=\"%s\">",$GTfile);
echo "Page: <select name=\"pageno\">";
for($i=0;$i<$lines/25;$i++){
printf("<option>%d</option>",$i+1);
}
echo "</select>";
echo "<input type=\"submit\" value=\"Go\">";
echo "</form>";
if(strlen($GTfile))printf("<a href=\"Datasets.php?filename=%s&pageno=%d&gt=%s\"> <b> <<< </b> </a> &nbsp;&nbsp;",$inputfile,$page-1,$GTfile);
else printf("<a href=\"Datasets.php?filename=%s&pageno=%d\"> <b> <<< </b></a> &nbsp;&nbsp;",$inputfile,$page-1);
echo "<b>Page:".$page."</b>";
if(strlen($GTfile))printf("<a href=\"Datasets.php?filename=%s&pageno=%d&gt=%s\"><b> >>> </b> </a> &nbsp;&nbsp;",$inputfile,$page+1,$GTfile);
else printf("&nbsp;&nbsp; <a href=\"Datasets.php?filename=%s&pageno=%d\"> <b> >>> </b> </a> ",$inputfile,$page+1);
echo "<br>";
//usort($contents,"compareNames");
echo "\n<table style=\"background:#ffffff;\" cellpadding=1>";
$i=0;
$start=($page-1)*25+1;
foreach ($contents as $imagefile){

	// Breaking lines
	if(!$i)echo "<tr>\n";	$i=($i+1)%5;
	// reading parts
	$imagename=trim($imagefile);
	$pos=strpos($imagename, '/');
	$imagefileName=substr($imagename,$pos+1);
        // Displaying data
	echo "<td>";
        printf("<table style=\" border-style:solid; border-collapse:collapse; border-width:0px;\" cellpadding=2 > <tr> <td><div id=\"container\" style=\" width:200;height:200\">\n");
	echo "<div id=\"image\"><img src=\"".$imagename."\" height=100% width=100%></div>";
	echo "</div>";
	printf("<br>");

	if(strlen($GTfile)){
	if(in_array($imagefileName,$GT))printf("<img width=30 height=30 src=\"Icons/A.png\" style=\"float:left;\">");
	else printf("<img width=30 height=30 src=\"Icons/B.png\" style=\"float:left;\">");
	}
	printf("<font size=3 style=\"font-weight:normal\">%d. %s </font>",$start,$imagefileName);
	echo " </table>";
	$start++;
}
echo "</table></center>";
?>
</body>
</html>
