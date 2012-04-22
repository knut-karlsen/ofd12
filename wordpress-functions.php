<?php 

/* DO NOT COPY TO WORDPRESS INSTALLATION, THESE ARE DUMMY FUNCTIONS */

function bloginfo( $url = '' ) {
	echo 'http://source.klapp.no/knut/ofd12';
}

function language_attributes() {
	//
}

function home_url( $url = '' ) {
	echo 'http://source.klapp.no/knut/ofd12/template-index.php';
}

function klapp_meta_tags() {
	//
}

function wp_head() {
	//
}

function wp_footer() {
	//
}

function current_page() {
	$currentFile = $_SERVER['PHP_SELF'];
	$parts = explode('/', $currentFile);
	return $parts[count($parts) - 1];
}


?>