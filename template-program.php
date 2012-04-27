<?php include 'header.php'; ?>

<?php 
	
	/*
		INFO: 
			Legg til slutt-tidspunkt på liste-elementet til hvert arrangement som HAR et slutt-tidspunkt, ikke til resten. 
			Rund også av tidspunktet til disse, kun hele timer! Ala: <li data-event-finish="1100"> … </li>
			I tillegg til et slutt-tidspunkt, må du mate inn en egen div (<div class="stretch"></div>) for arrangement med slutt-tidspunkt. Det skal se slik ut:
			<li class="purple pop-rock-utekonserter klassisk torvscenen" data-event-finish="1030">
			  <a href="#">
			  	<figure>
			  		<img src="Assets/Images/dummy_square.jpg" alt="" />
			  	</figure>
			  	<i>Internasjonal pilegrimskonferanse</i>
			  	<p>08:30 - 12:30 Herresalen</p>
			  	<div class="stretch"></div>
			  </a>
			  <i class="pointer"></i>
			</li>
			
			Kategorier, arenaer og farge på boksen mates inn som en vanlig class til liste-elementet.
		- 
	*/
	
?>
	
	<div class="full top shadow program">

		<h1>Program</h1>
		<nav>
			<a class="active" href="#">Fullt program</a>
			<a href="#">Høydepunkter</a>
			<a href="#">Dagens løype</a>
		</nav>
		<div class="options cf">
			<table>
				<thead>
				  <tr>
				  	<th class="active">L</th>
				  	<th>S</th>
				  	<th>M</th>
				  	<th>T</th>
				  	<th>O</th>
				  	<th>T</th>
				  	<th>F</th>
				  	<th>L</th>
				  </tr>
				</thead>
				<tbody>
					<tr>
						<td class="active"><a href="#">28</a></td>
						<td><a href="#">29</a></td>
						<td><a href="#">30</a></td>
						<td><a href="#">31</a></td>
						<td><a href="#">01</a></td>
						<td><a href="#">02</a></td>
						<td><a href="#">03</a></td>
						<td><a href="#">04</a></td>
					</tr>
				</tbody>
			</table>
			<ul>
				<li class="category">
				  <h3>Velg kategori<i></i></h3>
				  <div>
					  <ul>
					  	<li data-event-slug="all">Alle kategorier</li>
					  	<li data-event-slug="gudstjenester-og-pilegrimsprogram">Gudstjenester og pilegrimsprogram</li>
					  	<li data-event-slug="klassisk">Klassisk</li>
					  	<li data-event-slug="pop-rock-utekonserter">Pop/rock/utekonserter</li>
					  	<li data-event-slug="jazz-world-club">Jazz/World/Club</li>
					  </ul>
				  </div>
				</li>
				<li class="arena">
					<h3>Velg arena<i></i></h3>
					<div>
						<ul>
							<li data-event-slug="all">Alle arenaer</li>
							<li data-event-slug="auditorium">Auditorium</li>
					  	<li data-event-slug="torvscenen">Torvscenen</li>
						</ul>
					</div>
				</li>
			</ul>
		</div>
	
	
		<div class="timeline">
			<div class="maintain">
			
				<div class="timecapsule" data-event-time="0800">
					<h4>
						<span>08:00</span>
					</h4>
					<ol>
						<li class="purple pop-rock-utekonserter klassisk" data-event-finish="1200">
							<a href="#">
								<figure>
									<img src="Assets/Images/dummy_square.jpg" alt="" />
								</figure>
								<i>Internasjonal pilegrimskonferanse</i>
								<p>08:30 - 12:30 Herresalen</p>
								<div class="stretch"></div>
							</a>
							<i class="pointer"></i>
						</li>
						<li class="odd yellow jazz-world-club" data-event-finish="1500">
							<a href="#">
								<figure>
									<img src="Assets/Images/dummy_square.jpg" alt="" />
								</figure>
								<i>Internasjonal pilegrimskonferanse</i>
								<p>08:30 - 12:30 Herresalen</p>
								<div class="stretch"></div>
							</a>
							<i class="pointer"></i>
						</li>
						<li class="green auditorium gudstjenester-og-pilegrimsprogram">
							<a href="#">
								<i>Internasjonal pilegrimskonferanse</i>
								<p>08:30 - 12:30 Herresalen</p>
							</a>
							<i class="pointer"></i>
						</li>
					</ol>
				</div>
				
				<div class="timecapsule" data-event-time="0900">
					<h4>
						<span>09:00</span>
					</h4>
					<ol>
						<li class="red auditorium gudstjenester-og-pilegrimsprogram">
							<a href="#">
								<i>Internasjonal pilegrimskonferanse</i>
								<p>08:30 - 12:30 Herresalen</p>
							</a>
							<i class="pointer"></i>
						</li>
						<li class="odd blue">
							<a href="#">
								<i>Internasjonal pilegrimskonferanse</i>
								<p>08:30 - 12:30 Herresalen</p>
							</a>
							<i class="pointer"></i>
						</li>
						<li class="grey auditorium">
							<a href="#">
								<i>Internasjonal pilegrimskonferanse</i>
								<p>08:30 - 12:30 Herresalen</p>
							</a>
							<i class="pointer"></i>
						</li>
					</ol>
				</div>
				
				<div class="timecapsule empty" data-event-time="1000">
					<h4>
						<span>10:00</span>
					</h4>
				</div>
				
				<div class="timecapsule empty" data-event-time="1100">
					<h4>
						<span>11:00</span>
					</h4>
				</div>
				
				<div class="timecapsule" data-event-time="1200">
					<h4>
						<span>12:00</span>
					</h4>
					<ol>
						<li class="purple">
							<a href="#">
								<figure>
									<img src="Assets/Images/dummy_square.jpg" alt="" />
								</figure>
								<i>Internasjonal pilegrimskonferanse</i>
								<p>08:30 - 12:30 Herresalen</p>
								<div class="stretch"></div>
							</a>
							<i class="pointer"></i>
						</li>
						<li class="odd yellow">
							<a href="#">
								<figure>
									<img src="Assets/Images/dummy_square.jpg" alt="" />
								</figure>
								<i>Internasjonal pilegrimskonferanse</i>
								<p>08:30 - 12:30 Herresalen</p>
							</a>
							<i class="pointer"></i>
						</li>
						<li class="green">
							<a href="#">
								<i>Internasjonal pilegrimskonferanse</i>
								<p>08:30 - 12:30 Herresalen</p>
							</a>
							<i class="pointer"></i>
						</li>
					</ol>
				</div>
				
				<div class="timecapsule empty" data-event-time="1300">
					<h4>
						<span>13:00</span>
					</h4>
				</div>
				
				<div class="timecapsule empty" data-event-time="1400">
					<h4>
						<span>14:00</span>
					</h4>
				</div>
				
				<div class="timecapsule empty" data-event-time="1500">
					<h4>
						<span>15:00</span>
					</h4>
				</div>
				
				<div class="timecapsule empty" data-event-time="1600">
					<h4>
						<span>16:00</span>
					</h4>
				</div>
				
				<div class="timecapsule empty" data-event-time="1700">
					<h4>
						<span>17:00</span>
					</h4>
				</div>
				
				<div class="timecapsule empty" data-event-time="1800">
					<h4>
						<span>18:00</span>
					</h4>
				</div>
				
				<div class="timecapsule empty" data-event-time="1900">
					<h4>
						<span>19:00</span>
					</h4>
				</div>
				
				<div class="timecapsule" data-event-time="2000">
					<h4>
						<span>20:00</span>
					</h4>
					<ol>
						<li class="yellow torvscenen">
							<a href="#">
								<figure>
									<img src="Assets/Images/dummy_square.jpg" alt="" />
								</figure>
								<i>Internasjonal pilegrimskonferanse</i>
								<p>08:30 - 12:30 Herresalen</p>
							</a>
							<i class="pointer"></i>
						</li>
					</ol>
				</div>
				
				<div class="timecapsule empty" data-event-time="2100">
					<h4>
						<span>21:00</span>
					</h4>
				</div>
				
				<div class="timecapsule empty" data-event-time="2200">
					<h4>
						<span>22:00</span>
					</h4>
				</div>
				
				<div class="timecapsule empty" data-event-time="2300">
					<h4>
						<span>23:00</span>
					</h4>
				</div>
				
				<div class="timecapsule empty" data-event-time="2400">
					<h4>
						<span>24:00</span>
					</h4>
				</div>
			
			</div>
		</div>

	</div>
	
<?php include 'footer.php'; ?>