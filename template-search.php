<?php include 'header.php'; ?>
	
	<h1 class="full top shadow">Søkeresultat</h1>
	<div class="standard search-results">

		<div class="searchbox">
			<div>
				<form>
					<input name="s" type="text" onblur="if(this.value=='') this.value='Søk her...';" onfocus="if(this.value=='Søk her...') this.value='';" value="Hellige døgnet" tabindex="3" />
					<input type="submit" value="Søk" tabindex="4" />
				</form>
			</div>
			<p>Ditt søk på "<b>Hellige døgnet</b>" resulterte i følgende treff:</p>
		</div>
		
		<div class="hit-events">
		  <h2>Treff i arrangementer</h2>
		  <ul>
		  	<li>
		  		<a href="#" class="cf">
		  			<figure>
		  				<img src="Assets/Images/dummy_headline_1.jpg" alt="" />
		  			</figure>
		  			<h3>Det hellige døgnet og andre ting som vandrer</h3>
		  		</a>
		  	</li>
		  	<li>
		  		<a href="#" class="cf">
		  			<figure>
		  				<img src="Assets/Images/dummy_headline_2.jpg" alt="" />
		  			</figure>
		  			<h3>Det hellige døgnet</h3>
		  		</a>
		  	</li>
		  	<li>
		  		<a href="#" class="cf">
		  			<figure>
		  				<img src="Assets/Images/dummy_headline_3.jpg" alt="" />
		  			</figure>
		  			<h3>Det hellige døgnet</h3>
		  		</a>
		  	</li>
		  </ul>
		</div>
		<div class="hit-articles">
		  <h2>Treff i artikler</h2>
		  <ul>
		  	<li>
		  		<a href="#">
		  			<i>27. april, 2012</i>
		  			<h3>Det hellige døgnet</h3>
		  		</a>
		  	</li>
		  	<li>
		  		<a href="#">
		  			<i>27. april, 2012</i>
		  			<h3>Det hellige døgnet</h3>
		  		</a>
		  	</li>
		  </ul>
		</div>
		
	</div>

<?php include 'sidebar.php'; ?>
<?php include 'footer.php'; ?>