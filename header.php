<?php include_once 'wordpress-functions.php' ?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	
<title>Olavsfestdagene 2012 - OK</title>
	
<link rel="stylesheet" type="text/css" media="screen" href="<?php bloginfo('template_directory'); ?>/Assets/Css/master.css" />
<link rel="stylesheet" type="text/css" media="screen" href="<?php bloginfo('template_directory'); ?>/Assets/Css/events.css" />
<link rel="alternate" title="<?php bloginfo('name'); ?> &raquo; Feed" type="application/rss+xml" href="<?php bloginfo('rss2_url'); ?>" />

<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<link rel="apple-touch-icon" href="<?php bloginfo('template_directory'); ?>/Assets/Images/iphone.png" />
<link rel="apple-touch-icon" sizes="72x72" href="<?php bloginfo('template_directory'); ?>/Assets/Images/ipad.png" />
<link rel="apple-touch-icon" sizes="114x114" href="<?php bloginfo('template_directory'); ?>/Assets/Images/iphone4.png" />
<link rel="apple-touch-startup-image" href="<?php bloginfo('template_directory'); ?>/Assets/Images/startup.png" />
<link rel="shortcut icon" href="<?php bloginfo('template_directory'); ?>/Assets/Images/favicon.ico" />

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>

<script src="<?php bloginfo('template_directory'); ?>/Assets/Js/jquery.klapp.slideshow.js"></script>
<script src="<?php bloginfo('template_directory'); ?>/Assets/Js/jquery.functions.js"></script>
<!--[if lt IE 9]><script src="<?php bloginfo('template_directory'); ?>/Assets/Js/html5.js"></script><![endif]-->

<?php klapp_meta_tags(); ?>
<?php wp_head(); ?>
</head>
<!--[if lt IE 7]>  <body class="ie ie6"> <![endif]--> 
<!--[if IE 7]>     <body class="ie ie7"> <![endif]--> 
<!--[if IE 8]>     <body class="ie ie8"> <![endif]--> 
<!--[if IE 9]>     <body class="ie ie9"> <![endif]--> 
<!--[if gt IE 9]>  <body>                <![endif]-->
<!--[if !IE]><!--> <body>            <!--<![endif]-->
<div id="wrapper" class="en">

	<header>
		<nav class="cf">
			<ul>
				<li><a href="#">Kurs</a></li>
				<li><a href="#">Historisk marked</a></li>
				<li class="language"><a href="#">English</a></li>
			</ul>
		</nav>
		<h1>
  		<a href="<?php echo home_url('/'); ?>">Olavsfestdagene - Opplevelser som berører.</a>
  		<span>
  			<b>Opplevelser som berører</b>
  			Trondheim, 28. juli, 2012
  		</span>
		</h1>
		<img src="<?php bloginfo('template_directory'); ?>/Assets/Images/olavsfestdagene.png" alt="" />
	</header>
	
	<section class="content">
		<div class="align cf">
			<nav>
				<ul>
					<li><a href="#">Hjem</a></li>
					<li ><a href="#">Program</a></li>
					<li class="active"><a href="#">Billetter</a></li>
					<li><a href="#">Festivaltips</a></li>
					<li><a href="#">Om oss</a></li>
					<li class="search">
						<form action="<?php echo home_url('/'); ?>">
							<input name="s" type="text" onblur="if(this.value=='') this.value='Søk her...';" onfocus="if(this.value=='Søk her...') this.value='';" value="Søk her..." tabindex="1" />
							<input type="submit" value="Søk" />
						</form>
					</li>
				</ul>
			</nav>